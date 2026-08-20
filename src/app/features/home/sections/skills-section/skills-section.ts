import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ContentService } from '@/core/content/content.service';
import { SKILL_ICONS } from '@/core/content/skills';
import { Icon } from '@/shared/components/icon/icon';

/** Grid of skill/technology icons, sourced from SKILL_ICONS. */
@Component({
  selector: 'app-skills-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  private readonly contentService = inject(ContentService);

  protected readonly content = computed(() => this.contentService.content().skills);

  protected readonly skills = SKILL_ICONS;
}
