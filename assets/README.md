# Cobraverse — image assets

Drop your cobra images here using these **exact filenames** and the site
picks them up automatically. Until a file exists, a themed gradient shows
as a fallback (so the page never looks broken).

| Filename          | Where it appears                          | Suggested art                          |
|-------------------|-------------------------------------------|----------------------------------------|
| `hero.png`        | Big hero image (right side, dark bg)      | The laser-vs-mecha battle scene. **Use a transparent PNG** so it blends into the background. |
| `laser.png`       | Any "laser" card (games/videos/merch)     | Red laser cobra                        |
| `mecha.png`       | Any "mecha" card                          | Chrome mecha cobra                     |
| `ice.png`         | Any "ice" card                            | Ice cobra                              |
| `fire.png`        | Any "fire" card                           | Fire cobra                             |
| `favicon.svg`     | Browser tab icon (already provided)       | —                                      |

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
