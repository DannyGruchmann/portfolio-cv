import type { Language } from '@/core/i18n/language.types';

import type { Project } from './content.types';

export interface LocalizedProject extends Omit<Project, 'description' | 'imageAlt'> {
  description: string;
  imageAlt: string;
  techLine: string;
}

/** Resolves a Project's localized fields for one language and flattens tech[] into a display line. */
export function localizeProject(project: Project, language: Language): LocalizedProject {
  return {
    ...project,
    description: project.description[language],
    imageAlt: project.imageAlt[language],
    techLine: project.tech.join(' | '),
  };
}
