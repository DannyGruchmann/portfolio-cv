import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ContentService } from '@/core/content/content.service';

import { LegalPage } from './legal-page';

@Component({
  selector: 'app-privacy-policy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LegalPage],
  template: `<app-legal-page [page]="page()" />`,
})
export class PrivacyPolicy {
  private readonly contentService = inject(ContentService);

  protected readonly page = computed(() => this.contentService.content().privacyPolicy);
}
