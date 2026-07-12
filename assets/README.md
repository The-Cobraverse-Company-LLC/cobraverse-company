# Cobraverse — image assets

Drop your cobra images here using these **exact filenames** and the site
picks them up automatically. Until a file exists, a themed gradient shows
as a fallback (so the page never looks broken).

| Filename          | Where it appears                          | Status                                 |
|-------------------|-------------------------------------------|----------------------------------------|
| `hero.png`        | Big hero image (right side, dark bg)      | ✅ Added (transparent battle scene)    |
| `laser.png`       | Laser faction card + any "laser" card     | ✅ Added (red laser cobra, transparent)|
| `mecha.jpg`       | Mecha faction card + any "mecha" card     | ✅ Added (chrome mecha cobra)          |
| `ice.jpg`         | Ice faction card + any "ice" card         | ✅ Added (ice cobra)                   |
| `fire.jpg`        | Fire faction card + any "fire" card       | ✅ Added (fire cobra)                  |
| `favicon.svg`     | Browser tab icon                          | ✅ Provided                            |

Note: `hero` and `laser` are transparent `.png` (they blend into the dark
background); `ice`, `fire`, and `mecha` are `.jpg` (optimized to ~300 KB each).
To swap any image, replace the file (keeping the same name) or update the
matching `url(...)` in `styles.css`.

## Tips
- **hero.png**: transparent background PNG looks best. Keep it roughly
  square or portrait; the CSS scales it to fit.
- Card images (`laser/mecha/ice/fire.png`): landscape works best (they're
  cropped to fill). ~1200px wide is plenty for web.
- Keep files reasonably sized (under ~500 KB each) so the page loads fast.
  You can resize on a Mac with:
  `sips -Z 1400 big-image.png --out assets/laser.png`

Want different images per game/video/merch item instead of shared
faction art? Tell me and I'll switch the cards to individual filenames.
