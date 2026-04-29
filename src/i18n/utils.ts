import { defaultLocale, locales, ui, type Locale, type UIKey } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0] as Locale | undefined;
  return first && (locales as readonly string[]).includes(first)
    ? (first as Locale)
    : defaultLocale;
}

export function t(locale: Locale) {
  return (key: UIKey): string => ui[locale][key] ?? ui[defaultLocale][key];
}

export function localizedPath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '/' ? '/' : clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}
