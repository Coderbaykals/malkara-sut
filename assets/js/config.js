// Site configuration loader
// Loads assets/data/site-config.json once at startup, exposes:
//   window.MSUB.config         — config object (after promise resolves)
//   window.MSUB.configReady    — promise that resolves to config
//
// Path detection: works from root pages (index.html) and pages/ subfolder.

(function () {
  window.MSUB = window.MSUB || {};

  const isPagesDir = window.location.pathname.includes('/pages/');
  const path = isPagesDir
    ? '../assets/data/site-config.json'
    : 'assets/data/site-config.json';

  window.MSUB.configReady = fetch(path)
    .then((r) => {
      if (!r.ok) throw new Error('config fetch ' + r.status);
      return r.json();
    })
    .then((cfg) => {
      window.MSUB.config = cfg;
      return cfg;
    })
    .catch((err) => {
      console.error('[MSUB] Config load failed:', err);
      // Sensible fallback so cart still works
      window.MSUB.config = {
        whatsapp: { number: '905XXXXXXXXX' },
        shipping: { freeThreshold: 350, defaultFee: 49, currency: '₺' },
        delivery: { deliveryDays: ['Salı', 'Perşembe', 'Cumartesi'] },
      };
      return window.MSUB.config;
    });
})();
