/* ============================================================
   COBRAVERSE — notice.js  (site-wide notice banner)

   Exists so the advance-notice promise in privacy.html §12 and terms.html §20
   — "a prominent notice on this page and on the cobraverse.net home page for
   at least 30 days before the change takes effect" — can be kept by editing
   ONE object below. Every page that includes this file shows the banner.

   HOW TO ANNOUNCE A MATERIAL CHANGE
     1. Set active: true and write text / href / linkText.
     2. Set until to the EFFECTIVE date (YYYY-MM-DD). Post it at least 30 days
        before that date. The banner hides itself after that day.
     3. Give it a fresh id so a visitor who dismissed an older notice sees it.
     4. Also bump "Last updated" on the changed page, and once the change is
        live, set active: false.
   PREVIEW without flipping the flag: open any page with ?notice=preview
   Dismissal is per browser tab (sessionStorage) — no cookies, nothing persists.
   ============================================================ */
(function () {
  var SITE_NOTICE = {
    active: false,
    id: 'notice-2026-09',
    text: 'We are updating our Privacy Policy. The changes take effect on October 15, 2026.',
    href: 'privacy.html#changes',
    linkText: 'See what is changing',
    until: '2026-10-15'
  };

  var preview = /[?&]notice=preview(?:&|$)/.test(window.location.search);
  if (!preview) {
    if (!SITE_NOTICE.active) return;
    if (SITE_NOTICE.until) {
      var end = new Date(SITE_NOTICE.until + 'T23:59:59');
      if (!isNaN(end) && new Date() > end) return;
    }
    try { if (window.sessionStorage.getItem('dismissed:' + SITE_NOTICE.id)) return; } catch (e) {}
  }

  var bar = document.createElement('div');
  bar.className = 'notice';
  bar.setAttribute('role', 'status');

  var p = document.createElement('p');
  p.className = 'notice-text';
  var label = document.createElement('strong');
  label.textContent = preview ? 'Preview notice' : 'Notice';
  p.appendChild(label);
  p.appendChild(document.createTextNode(' ' + SITE_NOTICE.text + ' '));
  if (SITE_NOTICE.href) {
    var a = document.createElement('a');
    a.href = SITE_NOTICE.href;
    a.textContent = (SITE_NOTICE.linkText || 'Learn more') + ' →';
    p.appendChild(a);
  }
  bar.appendChild(p);

  var close = document.createElement('button');
  close.className = 'notice-close';
  close.type = 'button';
  close.setAttribute('aria-label', 'Dismiss notice');
  close.textContent = '×';
  bar.appendChild(close);

  document.body.insertBefore(bar, document.body.firstChild);

  var root = document.documentElement;
  function fit() { root.style.setProperty('--notice-h', bar.offsetHeight + 'px'); }
  fit();
  window.requestAnimationFrame(fit);
  window.addEventListener('resize', fit);

  close.addEventListener('click', function () {
    window.removeEventListener('resize', fit);
    bar.parentNode.removeChild(bar);
    root.style.setProperty('--notice-h', '0px');
    try { window.sessionStorage.setItem('dismissed:' + SITE_NOTICE.id, '1'); } catch (e) {}
  });
})();
