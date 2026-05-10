// Cart engine — localStorage-backed, framework-free.
// Public API: window.MSUB.cart
//
// State stored under 'msub_cart':
//   { items: [{id, name, slug, price, qty, image, unit, producerVillage}], updatedAt }
//
// Emits CustomEvent 'msub:cart-updated' on document with detail
//   { items, count, subtotal, shipping, total }
// after every mutation. Header counter and cart page listen for this.

(function () {
  window.MSUB = window.MSUB || {};

  const STORAGE_KEY = 'msub_cart';
  const STORAGE_LIMIT_BYTES = 100 * 1024; // 100 KB warn threshold

  // In-memory fallback if localStorage unavailable (private mode, etc.)
  let memoryStore = null;

  function readStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { items: [], updatedAt: 0 };
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.items)) {
        return { items: [], updatedAt: 0 };
      }
      return parsed;
    } catch (err) {
      console.warn('[MSUB] cart parse failed, resetting:', err);
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      return { items: [], updatedAt: 0 };
    }
  }

  function writeStorage(state) {
    state.updatedAt = Date.now();
    const json = JSON.stringify(state);
    if (json.length > STORAGE_LIMIT_BYTES) {
      console.warn('[MSUB] cart payload', json.length, 'bytes — unusually large');
    }
    try {
      localStorage.setItem(STORAGE_KEY, json);
    } catch (err) {
      console.warn('[MSUB] localStorage unavailable, using memory:', err);
      memoryStore = state;
    }
  }

  function getState() {
    if (memoryStore) return memoryStore;
    return readStorage();
  }

  function setState(state) {
    if (memoryStore) memoryStore = state;
    writeStorage(state);
    emitUpdate(state);
  }

  function getShippingFee(subtotal) {
    const cfg = (window.MSUB.config && window.MSUB.config.shipping) || {
      freeThreshold: 350,
      defaultFee: 49,
    };
    return subtotal >= cfg.freeThreshold ? 0 : cfg.defaultFee;
  }

  function summarize(state) {
    const items = state.items;
    const count = items.reduce((s, it) => s + (Number(it.qty) || 0), 0);
    const subtotal = items.reduce(
      (s, it) => s + (Number(it.price) || 0) * (Number(it.qty) || 0),
      0
    );
    const shipping = items.length === 0 ? 0 : getShippingFee(subtotal);
    const total = subtotal + shipping;
    return { items, count, subtotal, shipping, total };
  }

  function emitUpdate(state) {
    const detail = summarize(state);
    // Dispatch on window so Alpine `@msub:cart-updated.window` listeners
    // (header cart counter, sepet cartPage refresh) receive the event.
    // Default CustomEvent bubbles is false, so a document.dispatchEvent
    // would not propagate to window listeners.
    window.dispatchEvent(new CustomEvent('msub:cart-updated', { detail }));
  }

  const api = {
    addItem(product) {
      if (!product || !product.id) {
        console.warn('[MSUB] addItem: product.id required');
        return;
      }
      const state = getState();
      const existing = state.items.find((it) => it.id === product.id);
      const qtyToAdd = Math.max(1, Number(product.qty) || 1);
      if (existing) {
        existing.qty = (Number(existing.qty) || 0) + qtyToAdd;
      } else {
        state.items.push({
          id: String(product.id),
          name: product.name || '',
          slug: product.slug || product.id,
          price: Number(product.price) || 0,
          qty: qtyToAdd,
          image: product.image || '',
          unit: product.unit || '',
          producerVillage: product.producerVillage || '',
        });
      }
      setState(state);
    },

    removeItem(id) {
      const state = getState();
      state.items = state.items.filter((it) => it.id !== id);
      setState(state);
    },

    updateQty(id, qty) {
      const state = getState();
      const item = state.items.find((it) => it.id === id);
      if (!item) return;
      const newQty = Math.max(0, Math.floor(Number(qty)));
      if (newQty === 0) {
        state.items = state.items.filter((it) => it.id !== id);
      } else {
        item.qty = newQty;
      }
      setState(state);
    },

    clear() {
      setState({ items: [], updatedAt: Date.now() });
    },

    getItems() {
      return getState().items.slice();
    },

    getCount() {
      return summarize(getState()).count;
    },

    getSubtotal() {
      return summarize(getState()).subtotal;
    },

    getShipping() {
      return summarize(getState()).shipping;
    },

    getTotal() {
      return summarize(getState()).total;
    },

    getFreeShippingRemaining() {
      const cfg = (window.MSUB.config && window.MSUB.config.shipping) || {
        freeThreshold: 350,
      };
      return Math.max(0, cfg.freeThreshold - summarize(getState()).subtotal);
    },

    summary() {
      return summarize(getState());
    },
  };

  window.MSUB.cart = api;

  // Initial event so reactive UI can sync on load (after config ready).
  if (window.MSUB.configReady) {
    window.MSUB.configReady.then(() => emitUpdate(getState()));
  } else {
    document.addEventListener('DOMContentLoaded', () => emitUpdate(getState()));
  }
})();
