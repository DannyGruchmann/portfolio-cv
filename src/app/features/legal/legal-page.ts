import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { LegalPageContent } from '@/core/content/content.types';

@Component({
  selector: 'app-legal-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './legal-page.html',
  styleUrl: './legal-page.scss',
})
export class LegalPage {
  readonly page = input.required<LegalPageContent>();
}
