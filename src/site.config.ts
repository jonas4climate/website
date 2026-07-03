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

export type TimelineView = 'table' | 'timeline' | 'line';

/**
 * Default view for the Experience / Education lists, chosen per breakpoint.
 * Each list offers three views; this only sets the *initial* one — visitors can
 * still switch, and their explicit choice is remembered (localStorage) across
 * both breakpoints.
 *
 *   'table'    → year on the left, details on the right (the classic CV table).
 *   'timeline' → a vertical line with a dot per entry.
 *   'line'     → a single horizontal rule, newest → oldest, scrolls sideways.
 *
 * `desktop` applies above the 640px breakpoint, `mobile` at/below it. Note the
 * horizontal 'line' view scrolls sideways and is suppressed on phones, so a
 * `mobile: 'line'` falls back to 'timeline' automatically.
 */
export interface ViewDefaults {
  desktop: TimelineView;
  mobile: TimelineView;
}

export const EXPERIENCE_VIEW: ViewDefaults = { desktop: 'timeline', mobile: 'timeline' };
export const EDUCATION_VIEW: ViewDefaults = { desktop: 'timeline', mobile: 'timeline' };
