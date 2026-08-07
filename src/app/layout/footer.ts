import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContentService } from '@/core/content/content.service';
import { Logo } from '@/shared/components/logo';
import { SocialLinks } from '@/shared/components/social-links';

const LAUNCH_YEAR = 2026;

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Logo, SocialLinks],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly contentService = inject(ContentService);

  protected readonly footer = computed(() => this.contentService.content().footer);
  protected readonly year = Math.max(LAUNCH_YEAR, new Date().getFullYear());
}
