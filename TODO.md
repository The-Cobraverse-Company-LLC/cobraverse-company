1.  DONE - make the capcha work (claude code said something, but i don't recall what it was i had to set up)
2.  Esty store link to privacy policy anchor in privacy.html
3.  Do the Apple leaderboards cause any additional changes?

========================================================================
LEGAL PAGES — privacy.html + terms.html (rewritten 2026-09-04/05)
========================================================================
Posture decided 2026-09-04: GENERAL AUDIENCE, 13+ (not 18+). Not child-directed,
not Kids Category, no store-rating override. Non-personalized ("non-targeted")
ads rated for general audiences, for every player. Apple STANDARD EULA for the
app; terms.html supplements it. No arbitration clause. Fan content/streaming OK.
Both pages are the public promise — every item below keeps reality matching it.

--- A. DECISIONS TO CONFIRM (each is a sentence or two to strip if "no") ---
4.  DECIDED 2026-09-05 (PROVISIONAL) - Ad content cap = PG ("parental
    guidance"), not G. Pages now say: non-personalized + capped at a parental-
    guidance content rating; no teen/mature ad content (alcohol, gambling,
    sexual content, weapons, scary imagery). Cartoon game ads still allowed —
    G would have excluded most rewarded-video game inventory (other games).
    HOW: AdMob console > (account or app) > Blocking controls > Manage ad
    content rating = PG (changeable without a release). CAUTION: a per-request
    SDK rating does NOT combine with that setting — Google's docs say it
    OVERRIDES the UI value. So either set it ONLY in the console and never call
    maxAdContentRating in code, or set BOTH to .parentalGuidance and keep them
    equal. A mismatch silently wins for the SDK value.
    Definitions: G = all audiences; PG = most audiences w/ parental guidance
    (non-realistic cartoonish violence); T = teen+ (general health, social
    networks, scary imagery, fight sports); MA = alcohol, gambling, sexual
    content, weapons. Ratings are cumulative — PG also allows G.
    PG vs T settled 2026-09-06: T adds exactly what a parent would object to,
    and PG already permits the cartoon-violence creatives that make up most
    mobile-game rewarded inventory. AdMob shows an estimated impressions/revenue
    impact (trailing 30 days) when you change the setting, so revisit with real
    data after launch — but by then loosening it is a material change to "how
    advertising works in our games" and triggers the 30-day notice in privacy
    §12 / terms §20.
    [ ] REVISIT ONCE THE ADMOB ACCOUNT EXISTS: look at the real content-rating
        and Blocking-controls UI; block sensitive categories outright
        (gambling & betting, dating, alcohol, politics, religion, get-rich-
        quick, sexual & reproductive health, etc. — free at any rating); then
        decide G vs PG for real. If the cap changes, privacy.html summary +
        §2/§3/§9 and terms.html §6 must change with it (30-day notice if the
        game is live).
5.  DONE 2026-09-05 - No arbitration clause, confirmed. terms.html §21 stays:
    Colorado law, state/federal courts in Colorado, 30-day informal resolution
    first, individual (non-class) claims where the law permits, EU/UK consumer
    protections preserved. Reason: arbitration would put AAA/JAMS fees and an
    opt-out-window mechanism on the business — a burden for a solo LLC. Counsel
    may still comment, but no change is planned.
6.  DONE 2026-09-05 - Fan content / streaming permission kept as written
    (terms.html §11): non-commercial fan art, videos, streams, reviews of the
    Game, our videos, and our characters, incl. platform monetization
    (YouTube/Twitch); no selling products or advertising with the IP; no
    implied endorsement; credit where practical; revocable per-case.
7.  DONE 2026-09-05 - terms.html §5 now uses the industry-standard clause: we
    may modify/replace/retire Virtual Items at any time, reasonable notice where
    practical, no ownership interest, no compensation (except where law
    provides). The earlier "comparable replacement" promise was removed — it
    had no game-shutdown carve-out.

--- B. CONTACT INFO GAP (COPPA 16 CFR 312.4(d)(1): name, ADDRESS, PHONE, EMAIL) ---
8.  DONE 2026-09-05 - privacy@cobraverse.net published alongside the contact
    form on privacy.html (summary bullet, §9 parents, §13), terms.html §23,
    and support.html (callout + Company information). Company name + "Colorado,
    United States" now appear in all three contact blocks.
    [x] Alias created in Zoho 2026-09-05. Domain mail is verified healthy:
        MX -> mx/mx2/mx3.zoho.com (10/20/50), SPF "v=spf1 include:zohomail.com
        ~all", Zoho domain-verification TXT present, DKIM on the zmail selector,
        DMARC p=quarantine.
    [x] Tested 2026-09-05 — privacy@cobraverse.net sends and receives.
    [ ] Re-test after any deploy that touches privacy.html / terms.html /
        support.html, and if Zoho billing ever lapses (Mail Lite renews
        07/26/27). These three pages promise the address works.
    No postal address or phone is published. COPPA's "name, address, telephone
    number, and email address" list (16 CFR 312.4(d)(1)) binds CHILD-DIRECTED
    services only and ours is general audience; CCPA's "two or more methods"
    rule applies above $25M revenue / 100k consumers. A street address was only
    ever driven by Apple's EU trader disclosure, and EU/EEA/UK/CH are excluded
    (item 18). If the EU is ever added, that disclosure returns and a PO Box may
    be rejected — a virtual mailbox (iPostal1, Anytime Mailbox, PostScan, UPS
    Store; ~$10-30/mo; notarized USPS Form 1583; NOT valid as the CO
    registered-agent address) is the cheap path.
    NOTE: the alias is disposable — if it gets scraped and spammed, delete it,
    create a different one, and update the three pages. That disposability is
    why publishing it is lower-risk than the address removed in 455db8a.
    Backup channel if Web3Forms ever fails: script.js already supports a
    Formspree endpoint (see README).

--- C. BEFORE LAUNCH (this repo) ---
9.  Counsel review of privacy.html + terms.html (README already says so).
10. After sign-off: remove the DRAFT callouts + "Draft — " prefixes in BOTH
    privacy.html and terms.html (LAUNCH TODO comments mark them). Bump both
    "Last updated". (2026-09-05: callouts now say the documents apply to the
    websites/Etsy NOW and the game sections take effect at release — the old
    "not yet in effect" wording left the live site with no operative policy.)
11. DONE 2026-09-05 - notice.js + .notice CSS: site-wide banner for the 30-day
    material-change promise (privacy §12 / terms §20). Included on index,
    privacy, terms, support. To use: edit the SITE_NOTICE object in notice.js
    (active, text, href, until = effective date, fresh id). Preview on any
    page with ?notice=preview. Per-tab dismissal only (sessionStorage, no
    cookies). README has the how-to.
12. DONE 2026-09-05 - All three repos committed (cobraverse-company,
    laser-cobras-dotcom, laser_cobra_assault), incl. the lasercobras footer
    TERMS OF USE link, link spacing, and the pre-existing .cobraverse-plug
    section. NOT PUSHED YET — pushing cobraverse-company publishes the pages
    live via GitHub Pages. Both carry DRAFT callouts, so that is safe.
13. DONE 2026-09-05 - Support URL = https://cobraverse.net/support.html (the
    purpose-built page, not /#contact). store-listing.md updated in the game
    repo; README already said support.html. Also added the missing Terms link
    to support.html's top nav (it had Privacy only).

--- D. APP STORE CONNECT (must agree with the pages) ---
14. DONE - License Agreement: leave on Apple's STANDARD EULA. Do NOT upload a custom
    one — terms.html §4 is written to supplement the standard EULA.
15. DONE - Age rating: answer the (post-Jan-31-2026) questionnaire honestly —
    frequent cartoon/fantasy violence + frequent guns/weapons calculates to
    13+ (9+ if judged infrequent). Do NOT use "Override to Higher Age Rating"
    and do NOT select "Made for Kids". Answer Advertising capability = yes.
    (An 18+ minimum age in the Terms would have FORCED an 18+ override — that
    is the reason the 18+ posture was dropped.)
16. DONE - Privacy Policy URL: https://cobraverse.net/privacy.html (store-listing.md
    still has it prefixed "DRAFT:"). Terms have no ASC field under the
    standard EULA — link terms.html from the app description or support page.
17. App Privacy nutrition labels: "Data Used to Track You" = EMPTY; ad SDK data
    → "Data Not Linked to You"; Game Center → "Linked to You" but not tracking.
    (Already in the game repo's ship checklist — listed here because
    privacy.html §9 now publicly cites the label as one of the four
    no-behavioral-advertising safeguards.)

18. AVAILABILITY — EXCLUDE EU/EEA/UK/CH AT LAUNCH (decided 2026-09-05: "they
    are a pain"). In ASC > Pricing and Availability, deselect all 27 EU
    storefronts PLUS Norway, Iceland, the United Kingdom, and Switzerland.
    Google's consent policy covers EEA+UK+CH, not just the EU — leaving the
    UK in would bring the whole UMP consent-form job back. This removes: the
    DSA trader disclosure (public address/phone/email), the UMP consent form
    + "manage consent" Settings row, and GDPR-territory obligations for the
    game. ASC still asks every account for trader STATUS — answer it; the
    public contact display only applies to EU storefronts. privacy.html §4
    now says the game is not offered there and ads may be unavailable to a
    traveler. Reversible later (see items 8 and 20 for what comes back).

--- E. GAME REPO (laser_cobra_assault) — things the pages now assert ---
19. Add a "Terms & Privacy" row in SettingsOverlay linking to
    cobraverse.net/terms.html and /privacy.html so the Terms are discoverable
    in-app (the standard EULA is all the App Store shows at download).
20. AdMob config must be exactly what §2/§4/§9 say: NPA on every request; NO
    ATT prompt / no NSUserTrackingUsageDescription; no TFCD (OPEN FOR COUNSEL
    in the game TODO — if counsel says set it, the policy text still holds);
    maxAdContentRating = .general (item 4); SKAdNetworkIdentifiers in
    Info.plist. NO UMP consent form and NO "manage consent" Settings row
    while EEA/UK/CH are excluded (item 18): an ad request from a traveler
    in those regions will just not fill, and the offer already hides on
    no-fill. Update AdManager.swift header step 5 + the game TODO's ship
    checklist, which still say "worldwide launch / UMP". IF EU IS ADDED
    LATER: UMP form before any ad load + Settings row + restore the §4
    consent paragraph + item 8 trader info.
21. privacy.html §9 claim (3): "no other advertising or analytics software in
    the game." Do NOT add Firebase/Crashlytics/any analytics SDK later without
    updating the policy first (30-day material-change notice applies).
22. PrivacyInfo.xcprivacy rewrite at ship: NSPrivacyTracking stays FALSE; add
    the SDK's collected data types. §9 cites the manifest as a safeguard.
23. terms.html §7 says we may remove cheated scores — verify in ASC that
    Game Center leaderboards let you remove individual scores / reset boards,
    so the clause is actionable.
24. terms.html §5 references "Restore Purchases in the Game's cosmetics
    screen" — the RESTORE button exists in CosmeticsOverlay; keep the label.
25. DONE 2026-09-05 - Game repo TODO.md ship checklist now has AVAILABILITY
    and AUDIENCE items, privacy deliverables expanded 3 -> 4 (deliverable 4 =
    hosted TERMS OF USE), and the PG ad-content cap. AdManager.swift header and
    marketing/store-listing.md updated to match. (Commits a6da290, 8feaf06,
    19c89b1 in laser_cobra_assault.)

--- F. ETSY / MERCH ---
26. DRAFTED 2026-09-05 - text is in etsy-shop-privacy.md (repo root). It makes
    the same three claims as privacy.html: Etsy sends order data to Printify
    directly, we keep no separate copy of buyer data, and our tax records are
    Etsy's monthly financial statements (no buyer identity) kept 3+ years.
    [ ] Paste the marked block into Etsy Shop Manager > Settings > Policies >
        Privacy. Keep the two documents in sync if either changes.
27. DONE 2026-09-05 - Corrected. We do NOT forward anything to Printify: the
    Etsy shop is connected to Printify, so Etsy sends name/shipping address/item
    details straight to Printify. §2 "Merchandise orders" now says that transfer
    happens between those two services and we neither handle nor forward it; the
    §3 Printify bullet says "directly from Etsy through our connected shop."
    Still deliberately does NOT claim we receive buyer email addresses.
28. DONE 2026-09-05 - §7 retention line rewritten to match reality. Verified
    against an actual monthly statement (etsy_statement_2026_5): the columns are
    Date / Type / Title / Info / Currency / Amount / Fees & Taxes / Net / Tax
    Details, and buyers appear ONLY as an order number — no names, no addresses,
    no buyer card data. (The "Visa ending in ####" row is OUR card paying Etsy
    fees.) So the policy now says: buyer name/address live in Etsy's and
    Printify's systems under their policies, we view them via the seller account
    and keep NO separate copy; our own records are Etsy's monthly financial
    statements, kept at least 3 years (IRS standard period of limitations — the
    old "up to seven years" was the bad-debt/worthless-securities case, and
    claimed we hold buyer PII that long, which we do not).
    [ ] KEEP IT TRUE: for taxes, download Shop Manager > Finances > Monthly
        statements (or Payment account for a full year) — NOT Settings >
        Options > Download Data > Orders. The Orders CSV contains buyer names
        and full shipping addresses; saving one makes us the holder of that
        data and breaks the "no separate copy" statement. Pull one only for a
        specific task (label reprint, lost package, dispute) and delete it when
        done. If that ever changes, §7 must change with it.
        NOTE: the 1099-K threshold drops to $600 for tax year 2026.

--- G. ONGOING OBLIGATIONS THE PAGES CREATE ---
29. State App Store Accountability Acts: Texas in effect (Fifth Circuit stayed
    the injunction, June 2026); Alabama 2027-01-01, Utah 2027-05-06,
    Louisiana 2027-07-01. Developer duties: assign an age category (<13,
    13-15, 16-17, 18+) and give it to the store; be able to receive age-
    category + parental-consent signals (Apple's Declared Age Range API /
    age signals — watch Apple's developer news); notify the store of
    "significant changes" to Terms, Privacy Policy, or monetization so
    consent can be refreshed. Not a public promise — process item.
30. Every material change to either page = 30-day advance notice on the page
    + home page (item 11), no retroactive application, consent where law
    requires, prior versions available on request. Keep a dated copy of each
    version (git history covers it — tag releases).
31. privacy.html §2 promises to report inappropriate ads to Google — know the
    path: AdMob console > Ad review center (block advertiser/creative).
32. "Last updated" on both pages must move whenever the text changes.
33. Trademarks are shown as ™ (unregistered) in terms.html §10 and on
    lasercobras.com. If/when USPTO registration issues, switch to ®.
34. No DMCA agent registered — fine while there is no user-generated content.
    If UGC (chat, sharing, uploads) is ever added, register an agent with the
    Copyright Office AND rewrite privacy.html §9 (the no-UGC claim is one of
    the child-safety protections).
