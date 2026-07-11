# Cobraverse

Marketing website for **Cobraverse** — video games, videos, and merchandise
from the cobra multiverse (laser, mecha, ice, and fire cobras).

🌐 **Live site:** https://cobraverse.net

## Stack
Plain HTML, CSS, and JavaScript — no build step, no dependencies. Hosted on
**GitHub Pages** with a custom domain.

```
index.html      # main landing page
privacy.html    # Privacy Policy (required for App Store apps)
terms.html      # Terms of Use
support.html    # Support page (use as your App Store Support URL)
styles.css      # all styling
script.js       # nav, scroll animations, contact form
CNAME           # custom domain (cobraverse.net)
assets/         # images (see assets/README.md for filenames)
```

## Apple Developer / App Store requirements
This site is set up to support enrolling **The Cobraverse Company LLC** in the
Apple Developer Program and publishing apps:

- **Legal entity name** — "The Cobraverse Company LLC" is shown in the About
  section and every page footer. Make sure this exactly matches the name on your
  D-U-N-S record and LLC registration.
- **Privacy Policy** — `privacy.html` → use `https://cobraverse.net/privacy.html`
  as the app's Privacy Policy URL (required for every app).
- **Support URL** — `support.html` → use `https://cobraverse.net/support.html`
  as the app's Support URL (required for every App Store listing).
- **Terms of Use** — `terms.html`. **Replace the `[STATE]` placeholder** in the
  Governing Law section with your LLC's state of formation.
- **Contact** — handled entirely through the on-site form (no email address is
  published on the page). Submissions are emailed to you via Web3Forms.

> These legal pages are general templates, not legal advice — have an attorney
> review them.

## Editing
- **Text/content:** edit `index.html`.
- **Colors/layout:** edit `styles.css` (theme variables are at the top in `:root`).
- **Images:** drop files into `assets/` — see `assets/README.md` for the
  filenames the site expects.

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)
1. Push this repo to GitHub (e.g. a repo named `cobraverse-company`).
2. In the repo: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, Branch: **main** (or `master`), folder `/root`.
4. The `CNAME` file points the site at **cobraverse.net**. In your domain
   registrar's DNS, add:
   - Four `A` records for the apex `cobraverse.net` pointing to GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - A `CNAME` record for `www` → `<your-username>.github.io`
5. Enable **Enforce HTTPS** in the Pages settings once the cert is issued.

## Contact form setup (emails you on submit)
The contact form uses **Web3Forms** — free, no account required. The visitor's
message is emailed to you; your email address is **not** shown anywhere on the
site.
1. Go to https://web3forms.com and enter your company email address.
2. They email you an **access key**.
3. Open `index.html`, find `YOUR_WEB3FORMS_ACCESS_KEY`, and replace it with
   your key. Done — submissions now arrive in your inbox.

The form is protected by **hCaptcha** (spam prevention). It uses Web3Forms'
shared hCaptcha sitekey, so no extra account is needed. To use your own
hCaptcha account, replace the `data-sitekey` value in `index.html` with your
sitekey from https://dashboard.hcaptcha.com.

Prefer Formspree instead? Create a form at https://formspree.io, then in
`index.html` change the form's `data-endpoint` to your Formspree URL
(`https://formspree.io/f/xxxxxx`) and delete the `access_key` hidden input.
The JavaScript handles either service.

## Visitor analytics
Uses **GoatCounter** (privacy-friendly, no cookies, no consent banner) — the
same tool as lasercobras.com. The snippet at the bottom of `index.html` points
at `cobraverse.goatcounter.com`.

**Setup:** log in to your GoatCounter account (the one you use for
lasercobras), add a new site with the code `cobraverse`, and stats will show up
at https://cobraverse.goatcounter.com. To instead share the existing site's
dashboard, change the code in the snippet from `cobraverse` to `lasercobras`.

## To-do / hook up later
- Video cards → replace placeholders with real YouTube links/embeds.
- Merch "Notify Me" buttons → link to Etsy / Shopify / your store.
