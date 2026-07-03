// Site-wide switches you can flip without touching component code.

export type HeroMode = 'css' | 'horizon';

/**
 * Which hero treatment to use:
 *
 *   'horizon' → the ISS-porthole limb photo (a real "from orbit" horizon).
 *               Full-bleed static still. Serene and cinematic.
 *               Asset: /images/earth-horizon.jpg
 *               (compressed from the full-res original in media-originals/,
 *               which is gitignored — see README to regenerate).
 *
 *   'css'     → animated CSS Earth limb: glowing horizon, drifting stars,
 *               scattered city lights, staggered reveal. No assets needed.
 *               Also serves as the pre-load fallback beneath the photo.
 */
export const HERO_MODE: HeroMode = 'horizon';

export type ProjectsLayout = 'three-column' | 'energy-focus';

/**
 * How the homepage "Projects" preview is arranged:
 *
 *   'three-column' → three equal columns in order:
 *                    Energy · Computational · Climate (up to 2 projects each).
 *
 *   'energy-focus' → two columns: the left is Energy (up to 2 projects); the
 *                    right stacks Computational (1) above Climate (1).
 *
 * Both link to /projects/ for the full, categorised list.
 */
export const PROJECTS_LAYOUT: ProjectsLayout = 'energy-focus';
