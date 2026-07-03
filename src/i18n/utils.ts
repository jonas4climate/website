// i18n helpers shared across pages and components.
//
// URL scheme: English at the root (`/`, `/projects/…`), German under `/de`
// (`/de/`, `/de/projects/…`). Content-collection entries live in per-locale
// subfolders, so an entry `id` looks like `en/master-thesis` or `de/…`.

import { getCollection, type CollectionKey } from 'astro:content';
import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Derive the active locale from a URL path. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'de' ? 'de' : 'en';
}

/** Returns a `t(key)` lookup for the given locale, falling back to English. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Prefix an internal path for the active locale. English paths are unchanged;
 * German paths gain a `/de` prefix. Use for every internal link/anchor so the
 * visitor stays within their language.
 *   localizedPath('/#about', 'de')      → '/de/#about'
 *   localizedPath('/projects/', 'de')   → '/de/projects/'
 *   localizedPath('/projects/', 'en')   → '/projects/'
 */
export function localizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return path;
  if (path === '/') return '/de/';
  return `/de${path}`;
}

/**
 * The mirrored URL of the current page in the other locale — powers the
 * language switcher. Strips or adds the `/de` prefix while preserving the rest
 * of the path (and any hash the browser keeps client-side).
 *   getAltUrl('/projects/x', 'de')      → '/de/projects/x'
 *   getAltUrl('/de/projects/x', 'en')   → '/projects/x'
 *   getAltUrl('/', 'de')                → '/de/'
 *   getAltUrl('/de', 'en')              → '/'
 */
export function getAltUrl(pathname: string, target: Lang): string {
  // Normalise to the English (prefix-less) path first.
  const enPath = pathname.replace(/^\/de(\/|$)/, '/');
  if (target === 'en') return enPath;
  return enPath === '/' ? '/de/' : `/de${enPath}`;
}

/** Strip the `en/` | `de/` locale prefix from a collection entry id → clean slug. */
export function slugOf(id: string): string {
  return id.replace(/^(en|de)\//, '');
}

/**
 * Fetch a collection's entries for one locale, sorted-agnostic. Each entry keeps
 * its original shape; use `slugOf(entry.id)` for locale-neutral slugs/links.
 */
export async function entriesFor<C extends CollectionKey>(collection: C, lang: Lang) {
  return getCollection(collection, ({ id }) => id.startsWith(`${lang}/`));
}
