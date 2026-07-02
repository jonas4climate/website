# Website

Personal portfolio of Jonas Schäfer — PhD candidate & scientific researcher in
energy systems (building automation, optimal operation of building infrastructure).

Built with [Astro](https://astro.build), custom CSS, and self-hosted variable
fonts (Geist · Inter · JetBrains Mono). Deployed to GitHub Pages on push to `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output → dist/
npm run preview  # preview the production build
```

## Editing content

- **Projects** → `src/content/projects/*.md` (each file is a page at `/projects/<slug>`)
  - Set `archived: true` to move a project off the homepage into the archive at `/projects/`.
  - The homepage shows the first `HOME_PROJECT_LIMIT` current projects (see top of `index.astro`), then links to the full list.
- **Education / certificates** → `src/content/education/*.md` (`kind: degree | certificate | course`)
- **Research / publications** → `src/content/research/*.md`
- **About, contact, hero copy** → `src/components/Hero.astro`, `src/pages/index.astro`
- **Colors, fonts, spacing** → design tokens at the top of `src/styles/global.css`

The author's name is auto-bolded in citations wherever it matches `Schäfer, J.`.

## The hero — two modes

Two hero treatments; pick one with a single switch in `src/site.config.ts`:

```ts
export const HERO_MODE: 'css' | 'horizon' = 'horizon';
```

- **`'horizon'`** (default) — the ISS-porthole limb photo, full-bleed and static.
  Serene and cinematic. The CSS limb below doubles as the pre-load fallback.
- **`'css'`** — a self-contained animated Earth limb drawn in pure CSS: glowing
  horizon, drifting starfield, scattered city lights, staggered text reveal. No
  assets. (Placeholder until a richer animated-graphics hero replaces it.)

### Media assets

Full-resolution originals live in `media-originals/` (gitignored — kept locally,
never deployed). The site references a compressed, web-optimized version in
`public/`:

| Web asset | From original |
|-----------|---------------|
| `public/images/earth-horizon.jpg` (~420 KB) | `earth_from_space_ext_hor_aligned.png` (21 MB) |

Regenerate after swapping the original (needs `ffmpeg`):

```bash
ffmpeg -y -i media-originals/earth_from_space_ext_hor_aligned.png \
  -vf scale=2400:-1 -q:v 3 public/images/earth-horizon.jpg
```

Tune `object-position` on `.hero__media` in `src/components/Hero.astro` to reframe.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. The custom domain is set via `public/CNAME`
(`schaefer.earth`). In the repo settings, set **Pages → Source → GitHub Actions**.

## Credits

All hero imagery is NASA public-domain material. A concise credit is shown in the
hero corner; the full attributions are below.

**`horizon` still — ISS porthole view of Earth's limb.**
Source: <https://science.nasa.gov/earth/earth-observatory/new-year-new-horizon-147709/>

> Astronaut photograph ISS063-E-68417 was acquired on August 2, 2020, with a Nikon
> D5 digital camera using a 14 millimeter lens and is provided by the ISS Crew Earth
> Observations Facility and the Earth Science and Remote Sensing Unit, Johnson Space
> Center. The image was taken by a member of the Expedition 63 crew. The image has
> been cropped and enhanced to improve contrast, and lens artifacts have been removed.
> The International Space Station Program supports the laboratory as part of the ISS
> National Lab to help astronauts take pictures of Earth that will be of the greatest
> value to scientists and the public, and to make those images freely available on the
> Internet. Additional images taken by astronauts and cosmonauts can be viewed at the
> NASA/JSC Gateway to Astronaut Photography of Earth. Caption by Andrea Meado,
> Jacobs/JETS Contract at NASA-JSC.
