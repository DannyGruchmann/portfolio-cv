import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';

import type { ProjectCategory } from '@/core/content/content.types';
import { ContentService } from '@/core/content/content.service';
import { localizeProject } from '@/core/content/project-view';
import { PROJECTS } from '@/core/content/projects';
import { ScrollLockService } from '@/core/services/scroll-lock.service';
import { Icon } from '@/shared/components/icon';

const CATEGORY_ORDER: readonly ProjectCategory[] = ['webapp', 'website'];

const CLOSE_ICON_PATH =
  'M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4Z';

@Component({
  selector: 'app-projects-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './projects-dialog.html',
  styleUrl: './projects-dialog.scss',
})
export class ProjectsDialog {
  private readonly contentService = inject(ContentService);
  private readonly scrollLock = inject(ScrollLockService);
  private readonly dialogElement = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  protected readonly closeIconPath = CLOSE_ICON_PATH;
  protected readonly content = computed(() => this.contentService.content().projects);
  protected readonly activeTab = signal<ProjectCategory>('webapp');

  protected readonly groups = computed(() => {
    const language = this.contentService.language();
    const labels = this.content().categoryLabels;
    return CATEGORY_ORDER.map((category) => ({
      category,
      label: labels[category],
      projects: PROJECTS.filter((project) => project.category === category).map((project) =>
        localizeProject(project, language),
      ),
    })).filter((group) => group.projects.length > 0);
  });

  protected readonly tabs = computed(() => this.groups().map((group) => group.category));

  protected readonly activeProjects = computed(() => {
    const active = this.activeTab();
    const group = this.groups().find((g) => g.category === active);
    return group?.projects ?? [];
  });

  protected selectTab(category: ProjectCategory): void {
    this.activeTab.set(category);
  }

  open(): void {
    this.dialogElement().nativeElement.showModal();
    this.scrollLock.lock();
  }

  protected close(): void {
    this.dialogElement().nativeElement.close();
  }

  protected onClose(): void {
    this.scrollLock.release();
  }

  protected closeOnBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialogElement().nativeElement) {
      this.close();
    }
  }
}
