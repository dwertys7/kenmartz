export const locales = ['ka', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ka';

export const localeNames: Record<Locale, string> = {
  ka: 'ქართული',
  en: 'English',
  ru: 'Русский',
};

export const ui = {
  ka: {
    'nav.work': 'საქმე',
    'nav.studio': 'სტუდია',
    'nav.contact': 'კონტაქტი',
    'home.eyebrow': 'სტუდია',
    'home.title': 'ჩვენ ვაგებთ\nბრენდებს, რომლებსაც\nეტყობათ.',
    'home.lede':
      'სტრატეგია, იდენტობა და ციფრული გამოცდილება სასტიკი მოწიწებით ფორმისადმი.',
    'home.cta': 'პროექტის დაწყება',
    'home.cta.secondary': 'სამუშაოს ნახვა',
    'footer.rights': 'ყველა უფლება დაცულია.',
  },
  en: {
    'nav.work': 'Work',
    'nav.studio': 'Studio',
    'nav.contact': 'Contact',
    'home.eyebrow': 'Studio',
    'home.title': 'We build\nbrands that\nshow up.',
    'home.lede':
      'Strategy, identity, and digital experience with a brutal devotion to form.',
    'home.cta': 'Start a project',
    'home.cta.secondary': 'See the work',
    'footer.rights': 'All rights reserved.',
  },
  ru: {
    'nav.work': 'Работы',
    'nav.studio': 'Студия',
    'nav.contact': 'Контакты',
    'home.eyebrow': 'Студия',
    'home.title': 'Мы делаем\nбренды,\nкоторые видно.',
    'home.lede':
      'Стратегия, айдентика и цифровой опыт с жёстким уважением к форме.',
    'home.cta': 'Начать проект',
    'home.cta.secondary': 'Смотреть работы',
    'footer.rights': 'Все права защищены.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)[Locale];
