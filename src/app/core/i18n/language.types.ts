export type Language = 'de' | 'en';

export const LANGUAGES: readonly Language[] = ['de', 'en'];

export type Localized = Record<Language, string>;
