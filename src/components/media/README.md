# Project media components

Embeddable media for project pages. To use them, the project's content file must
be **`.mdx`** (not `.md`) — rename `src/content/projects/<slug>.md` to `.mdx`.
Plain Markdown still works for pages that don't need media.

Put asset files (images, PDFs, SVGs, video) under `public/media/<project-slug>/`
and reference them by absolute URL, e.g. `/media/<project-slug>/deck.pdf`.

At the top of the `.mdx` file, import only the components you use:

```mdx
---
title: …            # frontmatter is unchanged
track: energy
---
import Figure from '../../components/media/Figure.astro';
import Gallery from '../../components/media/Gallery.astro';
import Video from '../../components/media/Video.astro';
import Diagram from '../../components/media/Diagram.astro';
import PdfSlides from '../../components/media/PdfSlides.astro';

## Some heading

Regular markdown prose here, then drop a component anywhere:

<PdfSlides src="/media/master-thesis/results.pdf" caption="Selected slides" />
```

## Components

| Component | For | Example |
|-----------|-----|---------|
| `Figure` | one image + caption | `<Figure src="/media/x/a.jpg" alt="…" caption="…" width="36rem" />` |
| `Gallery` | multiple images (grid + click-to-zoom lightbox) | `<Gallery columns={2} images={[{src:'/media/x/a.jpg', alt:'…', caption:'…'}, …]} />` |
| `Video` | self-hosted file, YouTube, or Vimeo | `<Video src="/media/x/demo.mp4" poster="…" />` · `<Video youtube="ID" />` · `<Video vimeo="ID" />` |
| `Diagram` | SVG / PNG / single-page PDF, framed on a neutral surface | `<Diagram src="/media/x/arch.svg" caption="…" light />` |
| `PdfSlides` | a PDF as a page-by-page slideshow (prev/next + arrow keys) | `<PdfSlides src="/media/x/deck.pdf" caption="…" start={1} />` |

Notes:
- `PdfSlides` renders pages with pdf.js (bundled, no external CDN) and always
  offers a download link. `single` mode (used by `Diagram` for PDFs) shows just
  the first page with no controls.
- `Gallery` reuses one shared lightbox across every gallery on the page.
- `Diagram` auto-detects `.pdf` and delegates to `<PdfSlides single />`.
