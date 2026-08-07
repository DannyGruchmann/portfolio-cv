import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

import { LANGUAGES, type Language } from './language.types';

const STORAGE_KEY = 'portfolio-language';
const DEFAULT_LANGUAGE: Language = 'de';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly currentLanguage = signal<Language>(readStoredLanguage());

  readonly language = this.currentLanguage.asReadonly();

  constructor() {
    effect(() => {
      const language = this.currentLanguage();
      this.document.documentElement.lang = language;
      storeLanguage(language);
    });
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
  }

  toggle(): void {
    this.currentLanguage.update((current) => (current === 'de' ? 'en' : 'de'));
  }
}

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) {
      return stored;
    }
    const browserLanguage = navigator.language.slice(0, 2);
    return isLanguage(browserLanguage) ? browserLanguage : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function storeLanguage(language: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
  }
}

function isLanguage(value: string | null): value is Language {
  return value !== null && (LANGUAGES as readonly string[]).includes(value);
}
