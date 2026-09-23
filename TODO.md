1.  DONE - make the capcha work (claude code said something, but i don't recall what it was i had to set up)
2.  Esty store link to privacy policy anchor in privacy.html
3.  DONE 2026-09-22 - Apple leaderboards: NO changes needed to the legal pages.
    Game Center is already covered end to end:
      - privacy.html §2 "Game Center leaderboards (optional)" (#game-center) —
        sign-in is controlled by the device/Apple ID and never required; we
        submit only a NUMERIC SCORE; Apple displays the nickname + score in its
        own UI; we receive no name, email, or Apple ID, store nothing, and
        combine it with nothing.
      - privacy.html §3 (Apple bullet), §7 retention ("retained by Apple under
        Apple's policies for as long as the leaderboards exist"), §9 (parents
        can restrict Game Center with Screen Time).
      - terms.html §7 "Game Center, leaderboards, and fair play", the summary
        "play fair" bullet, §2 (parental controls), and §14 (third-party
        services we depend on but do not control).
    The data minimization is what makes this easy: a score is an integer, so
    there is no personal information leaving the device for us to disclose.
    WHAT LEADERBOARDS STILL OWE (already tracked, nothing new):
      - item 17 — ASC privacy labels: Game Center = "Linked to You" (User ID /
        Gameplay Content) but NOT "Used to Track You". Apple's form makes this
        easy to get wrong; linked-to-you is NOT the same as used-to-track-you,
        and our whole posture depends on that section staying empty.
      - item 23 — confirm ASC actually lets you delete an individual score or
        reset a board, because terms §7 promises we may remove cheated scores.
      - game repo blocker A3 — build once on a real device so automatic signing
        registers the Game Center capability, then create the 5 CLASSIC
        leaderboards in ASC with IDs matching GameCenter.swift EXACTLY.
    >> ONE NEW ANGLE FOR COUNSEL (ties to item 37): leaderboards and the WEEKLY
       CHALLENGE are retention mechanics — they exist to bring players back.
       Colorado SB 24-041 requires consent before features "designed to increase
       use" by minors, and it applies regardless of our size. Worth asking
       whether Game Center boards and weekly/daily events fall inside that.
4.  Admob setup
5.  index.html's nav has no Merch link, README's to-do still lists the "Notify Me" swap that's now done.

========================================================================
LEGAL PAGES — privacy.html + terms.html (rewritten 2026-09-04/05)
========================================================================
Posture decided 2026-09-04: GENERAL AUDIENCE, 13+ (not 18+). Not child-directed,
not Kids Category, no store-rating override. Non-personalized ("non-targeted")
ads capped at Google's "teen" (T) content rating as of 2026-09-07 (was PG; see
item 4 — provisional pending attorney review), for every player. Apple STANDARD EULA for the
app; terms.html supplements it. No arbitration clause. Fan content/streaming OK.
Both pages are the public promise — every item below keeps reality matching it.

--- A. DECISIONS TO CONFIRM (each is a sentence or two to strip if "no") ---
4.  CHANGED TO TEEN 2026-09-07 (PROVISIONAL — pending attorney review of ad
    content). Pages now say ads are capped at Google's "teen" (T) content
    rating: mature content still blocked (alcohol, gambling, sexual content,
    weapons), but teen-rated content IS allowed, which can include scary
    imagery, fight sports, general health, and social networks.
    Changed in 5 places — privacy.html summary bullet, §2 "Ad content", §3
    AdMob bullet, §9 children's bullet, and terms.html §6. They must always
    say the same tier; a document that says PG in one place and T in another
    is worse than either.
    WHAT THE CHANGE COST: §2 previously said ad content was "suitable for
    younger players who may be watching" — that claim is GONE, because it is
    not true at T. §9's argument is "we built it as if a child might be
    playing," and the ad cap is one of its five listed protections; at T that
    bullet is weaker (it now only promises no mature-rated advertising).
    >> FOR THE ATTORNEY: is a T cap defensible given §9 concedes the cartoon
       art may appeal to under-13s? The tension is between that concession and
       allowing scary-imagery/fight-sports creatives. G/PG/T/MA are cumulative;
       PG (the 2026-09-05 position) blocks teen content, G blocks everything
       but all-audience content. Reverting is a 5-place edit.
    HOW TO SET IT: AdMob console > (account or app) > Blocking controls >
    Manage ad content rating (changeable without a release). CAUTION: a
    per-request SDK maxAdContentRating does NOT combine with the console value
    — Google's docs say it OVERRIDES it. So either set it ONLY in the console
    and never call maxAdContentRating in code, or set BOTH and keep them equal.
    Definitions: G = all audiences; PG = most audiences w/ parental guidance
    (non-realistic cartoonish violence); T = teen+ (general health, social
    networks, scary imagery, fight sports); MA = alcohol, gambling, sexual
    content, weapons. Cumulative — T also allows G and PG.
    COMPARABLES (checked 2026-09-06, live App Store listings): the ad content
    rating is NOT publicly observable for any app, but the surrounding posture
    is. Sky Force Reloaded (Infinite Dreams) is 9+ / "Infrequent Cartoon or
    Fantasy Violence" and tracks Location + Identifiers + Usage Data; Galaxy
    Attack: Alien Shooter (DINO GAME) is 9+ and tracks Identifiers + Usage Data
    + Diagnostics. Both run full cross-app tracking in a 9+ game, so neither is
    likely restricting ad content either.
    [ ] Blocking controls: block sensitive categories outright regardless of
        tier (gambling & betting, dating, alcohol, get-rich-quick, sexual &
        reproductive health, politics, religion). Free, independent of the
        rating cap, catches things by category that a tier lets through.
    [ ] After ~30 days live, AdMob shows an estimated impressions/revenue
        impact when you change the tier — use real data to settle T vs PG.
        NOTE: once the game is live, changing the tier is a material change to
        "how advertising works in our games" and triggers the 30-day notice in
        privacy §12 / terms §20. Right now the game is unreleased and no ads
        are being served, so this change owes no notice.
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


--- H. REGULATIONS IN SCOPE (map for the attorney briefing, 2026-09-09) ---
Not legal advice — orientation. The useful split is NOT federal vs state, it is
"has a size threshold we are under" vs "binds us regardless of size."

35. BINDS US REGARDLESS OF SIZE — the short list that actually matters:
    a) FTC Act Sec. 5 (deception). The master rule: every claim in privacy.html,
       terms.html, the Etsy shop policy, and the App Store listing must be TRUE.
       This is why items 27 and 28 mattered — the old "up to seven years" line
       and the old "we pass your data to Printify" line were both Sec. 5
       exposure, not privacy-law exposure.
    b) COLORADO SB 24-041 (CPA minors amendment, effective 2025-10-01).
       *** Applies REGARDLESS of the CPA's normal thresholds. *** Reaches any
       controller offering an online service to Colorado consumers it "knows or
       WILLFULLY DISREGARDS" are minors (under 18). Requires a data protection
       impact assessment where there is heightened risk to minors, and consent
       before features designed to increase use. This is our home state and the
       most likely binding privacy law. See item 37.
    c) CALIFORNIA AB 2426 (digital goods, effective 2025-01-01). No size
       threshold. Bars advertising digital goods with "buy"/"purchase" language
       implying ownership unless you disclose it is a LICENSE, list the
       restrictions, and state it can be revoked. Up to $2,500 per violation
       plus Unfair Competition Law class-action exposure. See item 38.
    d) STATE APP STORE ACCOUNTABILITY ACTS — developer duties apply to all
       developers regardless of size. Texas in effect; Alabama 2027-01-01,
       Utah 2027-05-06, Louisiana 2027-07-01. Detail in item 29.

36. DOES NOT APPLY ON CURRENT FACTS (but shapes the design, and re-check if the
    business grows):
    - COPPA (16 CFR 312) — binds child-directed services or those with ACTUAL
      KNOWLEDGE of under-13 users. We are general audience, so it does not bind
      directly; we built to it anyway. Amended rule compliance date 2026-04-22.
    - Colorado Privacy Act, baseline — needs 100,000 CO consumers, or 25,000
      plus revenue from selling data. Far under. (The MINORS half above is
      separate and DOES apply — do not conflate them.)
    - CCPA/CPRA — needs $26,625,000 revenue (2026 inflation-adjusted figure),
      or 100,000 consumers, or 50% of revenue from selling/sharing data. Far
      under on all three, and we sell nothing. NOTE: the regs effective
      2026-01-01 add activity-based triggers for high-risk processing
      (selling/sharing, sensitive PI, automated decision-making) — none of
      which we do, but that is the thing that could pull a small business in.
    - ~20 other state comprehensive privacy laws — same threshold shape.
    - California AADC — PARTIALLY ENJOINED and in flux. Ninth Circuit narrowed
      the injunction 2026-03-12: data-use restrictions and the dark-patterns ban
      stay blocked as unconstitutionally vague; the age-estimation provision and
      severability went back to the district court. Watch, do not build to it.
    - GDPR / UK GDPR — game excludes EEA/UK/CH (item 18). The WEBSITES and the
      Etsy shop are still reachable from Europe, which is why privacy.html keeps
      its GDPR references and etsy-shop-privacy.md does not.

37. >> FOR THE ATTORNEY #1 — Colorado SB 24-041 vs. our own §9 candor.
    privacy.html §9 states the cartoon art "may appeal to children younger than
    13" and that the game has no way to verify a player's age. That candor is
    good under FTC Sec. 5. But "willfully disregards" is SB 24-041's trigger,
    and we have published a paragraph acknowledging minors likely use the
    product while running no age gate. Question: does that concession plus no
    age gate put us inside the minors provisions (DPIA, consent for
    engagement-increasing features)? If yes, the likely asks are a DPIA and a
    look at whether anything in the game counts as designed to increase use
    (daily/weekly challenges, streaks). Ties to items 4 and 15.

38. >> FOR THE ATTORNEY #2 — AB 2426 and the in-game store screen.
    terms.html §5 already carries the substance the law wants: "no ownership
    interest," "limited, revocable license," "not your property," and that we
    may retire items. Open question: must the license disclosure also appear on
    the COSMETICS SCREEN itself, at the point of sale? Facts as built: the buy
    control renders the product's price (e.g. "$1.99"), NOT the word "Buy";
    there is a "RESTORE PURCHASES" label; and Apple runs the actual payment
    sheet as merchant of record. So this may already be compliant, or it may
    want one line of text on that screen. Cheap to add if counsel says so.

39. CONTRACTUAL, NOT STATUTORY — enforced by account termination rather than
    regulators, which in practice makes these the most likely to actually bite:
    Apple App Review Guidelines §5.1 (Privacy), the Apple Developer Program
    License Agreement, App Privacy nutrition labels, PrivacyInfo.xcprivacy, and
    the standard EULA; Google AdMob program policies; Etsy's Seller Policy;
    Printify's terms. Items 14-17, 20-22, 26.

40. TAX / BUSINESS ADJACENT (not privacy, but same compliance calendar):
    1099-K threshold drops to $600 for tax year 2026; Colorado Retail Delivery
    Fee already appears on Etsy statements as a buyer-paid line; Colorado LLC
    periodic report and registered agent must stay current; IRS record retention
    is 3 years standard (7 only for bad-debt/worthless-securities claims) — see
    item 28.
