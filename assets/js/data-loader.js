// Data loader — fetches products.json + producers.json once, caches
// in window.MSUB.data, exposes Promise + sync getters and helpers.
//
// Public API (window.MSUB.data):
//   loadProducts()              → Promise<Product[]>
//   loadProducers()             → Promise<Producer[]>
//   getProductById(idOrSlug)    → Promise<Product|undefined>
//   getProducerById(idOrSlug)   → Promise<Producer|undefined>
//   getProductsByCategory(cat)  → Promise<Product[]>
//   getProductsByProducer(pid)  → Promise<Product[]>
//   getFeaturedProducts()       → Promise<Product[]>
//   searchProducts(query)       → Promise<Product[]>
//
// Cached arrays surface as window.MSUB.data.products / .producers
// after first load.

(function () {
  window.MSUB = window.MSUB || {};
  window.MSUB.data = window.MSUB.data || {};

  const isPagesDir = window.location.pathname.includes('/pages/');
  const basePath = isPagesDir ? '../assets/data/' : 'assets/data/';

  let _productsPromise = null;
  let _producersPromise = null;

  function loadProducts() {
    if (_productsPromise) return _productsPromise;
    _productsPromise = fetch(basePath + 'products.json')
      .then((r) => {
        if (!r.ok) throw new Error('products fetch ' + r.status);
        return r.json();
      })
      .then((data) => {
        const list = Array.isArray(data.products) ? data.products : [];
        window.MSUB.data.products = list;
        return list;
      })
      .catch((err) => {
        console.error('[MSUB] products load failed:', err);
        window.MSUB.data.products = [];
        return [];
      });
    return _productsPromise;
  }

  function loadProducers() {
    if (_producersPromise) return _producersPromise;
    _producersPromise = fetch(basePath + 'producers.json')
      .then((r) => {
        if (!r.ok) throw new Error('producers fetch ' + r.status);
        return r.json();
      })
      .then((data) => {
        const list = Array.isArray(data.producers) ? data.producers : [];
        window.MSUB.data.producers = list;
        return list;
      })
      .catch((err) => {
        console.error('[MSUB] producers load failed:', err);
        window.MSUB.data.producers = [];
        return [];
      });
    return _producersPromise;
  }

  async function getProductById(idOrSlug) {
    const list = await loadProducts();
    return list.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
  }

  async function getProducerById(idOrSlug) {
    const list = await loadProducers();
    return list.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
  }

  async function getProductsByCategory(cat) {
    const list = await loadProducts();
    return cat === 'all' ? list.slice() : list.filter((p) => p.category === cat);
  }

  async function getProductsByProducer(producerId) {
    const list = await loadProducts();
    return list.filter((p) => p.producerId === producerId);
  }

  async function getFeaturedProducts() {
    const list = await loadProducts();
    return list.filter((p) => p.featured);
  }

  async function searchProducts(query) {
    if (!query || String(query).trim().length < 2) return [];
    const q = String(query).toLocaleLowerCase('tr');
    const list = await loadProducts();
    return list.filter((p) => {
      const haystack = [
        p.name,
        p.shortDescription,
        p.category,
        p.subCategory,
        p.producerVillage,
        ...(p.tags || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase('tr');
      return haystack.includes(q);
    });
  }

  Object.assign(window.MSUB.data, {
    loadProducts,
    loadProducers,
    getProductById,
    getProducerById,
    getProductsByCategory,
    getProductsByProducer,
    getFeaturedProducts,
    searchProducts,
  });
})();
