import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ContentService } from '@/core/content/content.service';

import { LegalPage } from './legal-page';

@Component({
  selector: 'app-legal-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LegalPage],
  template: `<app-legal-page [page]="page()" />`,
})
export class LegalNotice {
  private readonly contentService = inject(ContentService);

  protected readonly page = computed(() => this.contentService.content().legalNotice);
}
