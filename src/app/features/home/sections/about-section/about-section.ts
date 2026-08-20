import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ContentService } from '@/core/content/content.service';

/** "About me" section with availability badges (location, remote, relocation). */
@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  private readonly contentService = inject(ContentService);

  protected readonly about = computed(() => this.contentService.content().about);

  protected readonly badges = computed(() => {
    const about = this.about();
    return [
      { icon: '/icons/location.svg', label: about.availabilityLocation },
      { icon: '/icons/remote.svg', label: about.availabilityRemote },
      { icon: '/icons/relocate.svg', label: about.availabilityRelocation },
    ];
  });
}
