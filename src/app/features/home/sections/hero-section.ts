import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ContentService } from '@/core/content/content.service';
import { SocialLinks } from '@/shared/components/social-links';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SocialLinks],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  private readonly contentService = inject(ContentService);

  protected readonly hero = computed(() => this.contentService.content().hero);
}
