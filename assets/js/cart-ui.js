// Cart UI bindings — connects [data-product-*] buttons to MSUB.cart
// + toast notification for "Sepete eklendi" feedback.
//
// Buttons should carry these attributes:
//   data-product-id        (required)
//   data-product-name      (required)
//   data-product-price     (required, numeric)
//   data-product-image     (optional)
//   data-product-unit      (optional, e.g., "1L")
//   data-product-village   (optional, e.g., "Evrenbey")
//
// On product detail pages, a sibling .qty-stepper input may control qty.

(function () {
  function readQty(btn) {
    // 1. Look for a qty input inside the same .qty-cta-row / .product-actions
    const wrapper = btn.closest('.qty-cta-row, .product-actions');
    if (wrapper) {
      const input = wrapper.querySelector('input[type="number"], .qty-input');
      if (input) {
        const v = Number(input.value);
        if (Number.isFinite(v) && v > 0) return v;
      }
    }
    return Math.max(1, Number(btn.dataset.qty) || 1);
  }

  function showToast(message) {
    let toast = document.getElementById('msub-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'msub-toast';
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    // Force reflow then add show
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function flashButton(btn) {
    const original = btn.innerHTML;
    btn.disabled = true;
    btn.dataset._origHtml = original;
    btn.innerHTML = '✓ Eklendi';
    btn.classList.add('is-flashing');
    setTimeout(() => {
      btn.innerHTML = btn.dataset._origHtml;
      btn.disabled = false;
      btn.classList.remove('is-flashing');
      delete btn.dataset._origHtml;
    }, 1500);
  }

  function handleAddToCart(e) {
    const btn = e.currentTarget;
    e.preventDefault();
    if (btn.disabled) return;

    const product = {
      id: btn.dataset.productId,
      name: btn.dataset.productName,
      slug: btn.dataset.productSlug || btn.dataset.productId,
      price: Number(btn.dataset.productPrice) || 0,
      image: btn.dataset.productImage || '',
      unit: btn.dataset.productUnit || '',
      producerVillage: btn.dataset.productVillage || '',
      qty: readQty(btn),
    };

    if (!product.id || !product.name) {
      console.warn('[MSUB] add-to-cart missing data-product-* attributes', btn);
      return;
    }

    window.MSUB.cart.addItem(product);
    flashButton(btn);
    // Sprint 6: dispatch event so cart-added modal opens
    window.dispatchEvent(new CustomEvent('cart:added', { detail: { product } }));
  }

  function init() {
    document.querySelectorAll('.add-to-cart').forEach((btn) => {
      btn.addEventListener('click', handleAddToCart);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
