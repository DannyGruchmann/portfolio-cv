import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';

function mockBrowserLanguage(value: string): () => void {
  const descriptor = Object.getOwnPropertyDescriptor(Navigator.prototype, 'language');
  Object.defineProperty(navigator, 'language', { value, configurable: true });
  return () => {
    if (descriptor) {
      Object.defineProperty(Navigator.prototype, 'language', descriptor);
    }
  };
}

describe('LanguageService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  it('uebernimmt die gespeicherte Sprache', () => {
    localStorage.setItem('portfolio-language', 'en');

    const service = TestBed.inject(LanguageService);
    expect(service.language()).toBe('en');
  });

  it('nutzt die Browsersprache, wenn nichts gespeichert ist', () => {
    const restore = mockBrowserLanguage('en-GB');

    try {
      const service = TestBed.inject(LanguageService);
      expect(service.language()).toBe('en');
    } finally {
      restore();
    }
  });

  it('fällt auf Deutsch zurueck, wenn die Browsersprache nicht unterstuetzt wird', () => {
    const restore = mockBrowserLanguage('fr-FR');

    try {
      const service = TestBed.inject(LanguageService);
      expect(service.language()).toBe('de');
    } finally {
      restore();
    }
  });

  it('wechselt zwischen den Sprachen', () => {
    const service = TestBed.inject(LanguageService);
    const start = service.language();
    const other = start === 'de' ? 'en' : 'de';

    service.toggle();
    expect(service.language()).toBe(other);

    service.toggle();
    expect(service.language()).toBe(start);
  });

  it('setzt das lang-Attribut des Dokuments mit', () => {
    const service = TestBed.inject(LanguageService);

    service.setLanguage('en');
    TestBed.tick();
    expect(document.documentElement.lang).toBe('en');

    service.setLanguage('de');
    TestBed.tick();
    expect(document.documentElement.lang).toBe('de');
  });

  it('merkt sich die Auswahl im localStorage', () => {
    const service = TestBed.inject(LanguageService);

    service.setLanguage('en');
    TestBed.tick();

    expect(localStorage.getItem('portfolio-language')).toBe('en');
  });

  it('fällt auf Deutsch zurueck, wenn localStorage nicht verfuegbar ist', () => {
    const original = Storage.prototype.getItem;
    Storage.prototype.getItem = () => {
      throw new Error('SecurityError');
    };

    try {
      const service = TestBed.inject(LanguageService);
      expect(service.language()).toBe('de');
    } finally {
      Storage.prototype.getItem = original;
    }
  });
});
