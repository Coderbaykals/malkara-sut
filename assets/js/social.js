// Social icons — config-driven URL wiring + "yakında" fallback toast.
//
// HTML markup (set by ADIM 2.2):
//   <a href="#"
//      data-social="instagram"
//      class="social-icon coming-soon"
//      aria-label="Instagram (yakında)"
//      title="Yakında">
//
// On load:
//   If config.social[platform] is a non-empty URL → wire href, drop
//   coming-soon class, open in new tab.
//   If empty → keep coming-soon, click triggers a toast.

(function () {
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
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function wire() {
    const social = (window.MSUB.config && window.MSUB.config.social) || {};
    document.querySelectorAll('a[data-social]').forEach((a) => {
      const platform = a.dataset.social;
      const url = (social[platform] || '').trim();
      if (url) {
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.classList.remove('coming-soon');
        a.setAttribute('aria-label', platform.charAt(0).toUpperCase() + platform.slice(1));
        a.removeAttribute('title');
      } else {
        a.setAttribute('href', 'javascript:void(0)');
        a.addEventListener('click', (e) => {
          e.preventDefault();
          showToast('Sosyal medya hesaplarımız yakında');
        });
      }
    });
  }

  function init() {
    if (window.MSUB && window.MSUB.configReady) {
      window.MSUB.configReady.then(wire);
    } else {
      // Config not loaded yet; retry shortly
      setTimeout(init, 100);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
