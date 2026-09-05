1.  DONE - make the capcha work (claude code said something, but i don't recall what it was i had to set up)
2.  Esty store link to privacy policy anchor in privacy.html
3.  

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
    HOW: AdMob console > app > App settings > Ad content rating = PG
    (changeable without a release), and/or in the game
    requestConfiguration.maxAdContentRating = .parentalGuidance; Google
    applies the stricter of the two.
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
8.  Site publishes only the company name (email removed in 455db8a). COPPA's
    notice rule (16 CFR 312.4(d)(1)) lists name, address, phone, email — but
    it only binds a child-directed service, and ours is general audience, so
    this is OPTIONAL belt-and-suspenders. A street address is NOT needed:
    the only thing that required one was Apple's EU trader disclosure, and
    EU/EEA/UK/CH are excluded at launch (decided 2026-09-05, see item 18).
    If you want the COPPA notice complete anyway, the cheap set is:
      - Address: a PO Box, or the registered agent's address IF it is a
        commercial agent that forwards general mail (not your home).
      - Email: privacy@cobraverse.net alias forwarding to the real inbox.
        GitHub Pages does no mail — set up forwarding where DNS lives
        (Cloudflare Email Routing is free; most registrars forward for free).
      - Phone: Google Voice / VoIP number to voicemail.
    Slots into privacy.html §1 + §13 and terms.html §1 + §23. Also update
    support.html "Company information".
    IF EU IS EVER ADDED: Apple's DSA trader-status rule (since 2025-02-17)
    publishes the developer's address, phone, and email on the EU App Store
    page; a PO Box may be rejected there — that is when a virtual mailbox
    (iPostal1, Anytime Mailbox, PostScan, Earth Class Mail, UPS Store box;
    ~$10-30/mo; notarized USPS Form 1583; real street address, mail scanned
    to a dashboard; NOT valid as the CO registered-agent address) earns its
    keep. Trader info must be verified before the app can go live in the EU.

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
12. Commit: privacy.html, terms.html, README.md, styles.css (.summary rule is
    staged). Separate repo: laser-cobras-dotcom has my footer TERMS OF USE link
    + 12px link spacing, AND a pre-existing uncommitted cross-promo section
    (.cobraverse-plug) that predates this work — commit both there.
13. store-listing.md says Support URL = cobraverse.net/#contact; README says
    support.html. Pick one (support.html is the purpose-built page). Also add a
    Terms link to support.html's top nav (it has Privacy but not Terms).

--- D. APP STORE CONNECT (must agree with the pages) ---
14. License Agreement: leave on Apple's STANDARD EULA. Do NOT upload a custom
    one — terms.html §4 is written to supplement the standard EULA.
15. Age rating: answer the (post-Jan-31-2026) questionnaire honestly —
    frequent cartoon/fantasy violence + frequent guns/weapons calculates to
    13+ (9+ if judged infrequent). Do NOT use "Override to Higher Age Rating"
    and do NOT select "Made for Kids". Answer Advertising capability = yes.
    (An 18+ minimum age in the Terms would have FORCED an 18+ override — that
    is the reason the 18+ posture was dropped.)
16. Privacy Policy URL: https://cobraverse.net/privacy.html (store-listing.md
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
25. Update the game repo's TODO.md privacy checklist to reference terms.html
    and the 13+ posture (it currently only tracks the privacy policy).

--- F. ETSY / MERCH ---
26. Paste a short privacy note into the Etsy shop's Shop Policies linking to
    cobraverse.net/privacy.html#merchandise (ties to item 2 above; Etsy asks
    every seller to have one, required if you sell to the EU).
27. privacy.html states Etsy shares name, shipping address, items ordered, and
    Etsy messages with you, and that you pass name/address/items to Printify.
    Confirm that matches what you actually see and send. (It deliberately
    does NOT claim you receive buyer email addresses.)
28. Retention line says order records are kept "generally up to seven years"
    for tax/accounting — align with your actual bookkeeping.

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
