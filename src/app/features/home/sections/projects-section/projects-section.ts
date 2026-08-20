import { ChangeDetectionStrategy, Component, computed, inject, viewChild } from '@angular/core';

import { ContentService } from '@/core/content/content.service';
import { localizeProject } from '@/core/content/project-view';
import { PROJECTS } from '@/core/content/projects';

import { ProjectsDialog } from '../projects-dialog/projects-dialog';

const FEATURED_PROJECT_COUNT = 3;

/** Landing-page preview of the first FEATURED_PROJECT_COUNT projects; "more" opens the full list in ProjectsDialog. */
@Component({
  selector: 'app-projects-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProjectsDialog],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  private readonly contentService = inject(ContentService);
  private readonly dialog = viewChild.required(ProjectsDialog);

  protected readonly content = computed(() => this.contentService.content().projects);
  protected readonly hasMoreProjects = PROJECTS.length > FEATURED_PROJECT_COUNT;

  protected readonly featuredProjects = computed(() => {
    const language = this.contentService.language();
    // Alternates image/text placement per row for a zig-zag layout.
    return PROJECTS.slice(0, FEATURED_PROJECT_COUNT).map((project, index) => ({
      ...localizeProject(project, language),
      isImageFirst: index % 2 === 0,
    }));
  });

  protected openDialog(): void {
    this.dialog().open();
  }
}
