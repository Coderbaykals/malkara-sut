// Google Analytics 4 — consent-gated loader.
// Public API: window.MSUB.analytics
//
// Behavior:
//   - On page load, checks localStorage 'msub_cookies' === 'accepted'
//     before doing anything. No tracker loaded otherwise.
//   - Reads config.analytics.ga4MeasurementId from site-config.json.
//     If missing or still placeholder ('G-XXXXXXXXXX'), no-op.
//   - On 'cookies:accepted' event (fired by cookie banner accept()),
//     attempts init() again so user who accepts mid-session starts
//     being tracked from that point.
//
//   track(event, params) — generic event helper, safe to call before
//   loaded (silent no-op).

(function () {
  window.MSUB = window.MSUB || {};

  const api = {
    loaded: false,

    init() {
      let consent = null;
      try { consent = localStorage.getItem('msub_cookies'); } catch (_) {}
      if (consent !== 'accepted') return;

      if (!window.MSUB.configReady) return;
      window.MSUB.configReady.then((cfg) => {
        const id = cfg.analytics && cfg.analytics.ga4MeasurementId;
        if (!id || /XXXXXX/.test(id)) return;
        this.loadGA4(id);
      });
    },

    loadGA4(id) {
      if (this.loaded) return;

      const tag = document.createElement('script');
      tag.async = true;
      tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
      document.head.appendChild(tag);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', id, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
      });
      window.gtag = gtag;
      this.loaded = true;
      // Quiet by default; uncomment for debug:
      // console.log('[MSUB] GA4 loaded:', id);
    },

    track(event, params) {
      if (!this.loaded || typeof window.gtag !== 'function') return;
      try { window.gtag('event', event, params || {}); } catch (_) {}
    },
  };

  window.MSUB.analytics = api;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => api.init());
  } else {
    api.init();
  }

  // Cookie banner fires this when user clicks "Kabul Et"
  window.addEventListener('cookies:accepted', () => api.init());
})();
