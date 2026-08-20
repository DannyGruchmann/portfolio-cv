import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { LegalPageContent } from '@/core/content/content.types';

/** Shared layout for legal pages (title + sections); LegalNotice and PrivacyPolicy each feed it their own content. */
@Component({
  selector: 'app-legal-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPage {
  readonly page = input.required<LegalPageContent>();
}
