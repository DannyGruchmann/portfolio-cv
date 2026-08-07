import { Injectable, computed, inject } from '@angular/core';

import { LanguageService } from '@/core/i18n/language.service';

import { SITE_CONTENT } from './site-content';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly languageService = inject(LanguageService);

  readonly language = this.languageService.language;
  readonly content = computed(() => SITE_CONTENT[this.language()]);
}
