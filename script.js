/* ============================================================
   COBRAVERSE — script.js
   ============================================================ */

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
});
// Close menu when a link is tapped
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Reveal-on-scroll animation
const revealTargets = document.querySelectorAll(
  '.faction, .card, .about-grid > *, .section-head, .hero-inner > *'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in'), (i % 4) * 80);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

// Contact form — submits to a form-handling service (Web3Forms by default)
// which emails the message to you. No backend server required.
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const status = document.getElementById('form-status');
  const btn = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(contactForm).entries());

    // Guard: remind the owner to add their key before it can work.
    if (String(data.access_key).includes('YOUR_')) {
      status.textContent =
        'Contact form isn\'t set up yet — add your Web3Forms access key in index.html.';
      status.className = 'form-status err';
      return;
    }

    // Require a solved captcha. hCaptcha injects an "h-captcha-response"
    // field once the challenge is passed; empty means it's unsolved.
    if (!data['h-captcha-response']) {
      status.textContent = 'Please complete the captcha below.';
      status.className = 'form-status err';
      return;
    }

    const originalLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    try {
      const res = await fetch(contactForm.dataset.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      // Works for Web3Forms ({success:true}) and Formspree ({ok:true}).
      if (res.ok && json.success !== false) {
        contactForm.reset();
        status.textContent = "Message sent — we'll get back to you soon. 🐍";
        status.className = 'form-status ok';
      } else {
        status.textContent =
          json.message || 'Something went wrong. Please email us directly.';
        status.className = 'form-status err';
      }
    } catch (err) {
      status.textContent = 'Network error. Please email us directly.';
      status.className = 'form-status err';
    } finally {
      btn.disabled = false;
      btn.textContent = originalLabel;
      // Captcha tokens are single-use — reset so the widget is ready again.
      if (window.hcaptcha) window.hcaptcha.reset();
    }
  });
}
