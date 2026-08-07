import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { ContentService } from '@/core/content/content.service';
import { SOCIAL_LINKS } from '@/core/content/projects';

@Component({
  selector: 'app-social-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
  private readonly contentService = inject(ContentService);

  readonly orientation = input<'vertical' | 'horizontal'>('horizontal');

  protected readonly label = computed(() => this.contentService.content().footer.socialLabel);

  protected readonly links = SOCIAL_LINKS.map((link) => ({
    ...link,
    maskImage: `url('${link.icon}')`,
    isExternal: !link.url.startsWith('mailto:'),
  }));
}
