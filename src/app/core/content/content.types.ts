import type { Localized } from '@/core/i18n/language.types';

// Content contract for the site copy. Each interface here mirrors one section's fields;
// content.de.ts and content.en.ts must each provide a matching object per interface,
// combined into SiteContent by site-content.ts.

export interface NavContent {
  about: string;
  skills: string;
  projects: string;
  contact: string;
  menuOpen: string;
  menuClose: string;
  skipToContent: string;
}

export interface HeroContent {
  greeting: string;
  jobTitleLine1: string;
  jobTitleLine2: string;
  scroll: string;
  portraitAlt: string;
}

export interface AboutContent {
  title: string;
  availabilityLabel: string;
  availabilityLocation: string;
  availabilityRemote: string;
  availabilityRelocation: string;
  paragraphs: readonly string[];
  ctaLabel: string;
}

export interface SkillsContent {
  title: string;
  intro: string;
}

export type ProjectCategory = 'webapp' | 'website';

export interface ProjectsContent {
  title: string;
  intro: string;
  liveLabel: string;
  repoLabel: string;
  linksPendingNote: string;
  moreLabel: string;
  dialogTitle: string;
  dialogIntro: string;
  closeLabel: string;
  clientBadgeLabel: string;
  categoryLabels: Record<ProjectCategory, string>;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  intro: string;
  callToAction: string;
  nameLabel: string;
  namePlaceholder: string;
  nameError: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailErrorRequired: string;
  emailErrorFormat: string;
  messageLabel: string;
  messagePlaceholder: string;
  messageError: string;
  privacyBefore: string;
  privacyLinkLabel: string;
  privacyAfter: string;
  privacyError: string;
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface FooterContent {
  legalNotice: string;
  privacyPolicy: string;
  goUpLabel: string;
  socialLabel: string;
}

export interface NotFoundContent {
  title: string;
  text: string;
  linkLabel: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: readonly string[];
}

export interface LegalPageContent {
  title: string;
  sections: readonly LegalSection[];
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: FooterContent;
  notFound: NotFoundContent;
  legalNotice: LegalPageContent;
  privacyPolicy: LegalPageContent;
}

export interface Project {
  id: string;
  imageBase: string;
  name: string;
  category: ProjectCategory;
  isClientProject?: boolean;
  tech: readonly string[];
  description: Localized;
  imageAlt: Localized;
  liveUrl: string | null;
  repoUrl: string | null;
}

export interface SocialLink {
  id: 'github' | 'email' | 'linkedin';
  url: string;
  label: string;
  icon: string;
}
