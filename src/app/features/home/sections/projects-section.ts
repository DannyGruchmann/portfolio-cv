import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ContentService } from '@/core/content/content.service';
import { PROJECTS } from '@/core/content/projects';

@Component({
  selector: 'app-projects-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  private readonly contentService = inject(ContentService);

  protected readonly content = computed(() => this.contentService.content().projects);

  protected readonly projects = computed(() => {
    const language = this.contentService.language();
    return PROJECTS.map((project, index) => ({
      ...project,
      description: project.description[language],
      imageAlt: project.imageAlt[language],
      techLine: project.tech.join(' | '),
      isImageFirst: index % 2 === 0,
    }));
  });
}
