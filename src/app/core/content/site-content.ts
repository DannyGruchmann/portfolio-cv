import type { Language } from '@/core/i18n/language.types';

import {
  ABOUT_DE,
  CONTACT_DE,
  FOOTER_DE,
  HERO_DE,
  NAV_DE,
  NOT_FOUND_DE,
  PROJECTS_DE,
  SKILLS_DE,
} from './content.de';
import {
  ABOUT_EN,
  CONTACT_EN,
  FOOTER_EN,
  HERO_EN,
  NAV_EN,
  NOT_FOUND_EN,
  PROJECTS_EN,
  SKILLS_EN,
} from './content.en';
import type { SiteContent } from './content.types';
import { LEGAL_NOTICE_DE, PRIVACY_POLICY_DE } from './legal.de';
import { LEGAL_NOTICE_EN, PRIVACY_POLICY_EN } from './legal.en';

/** Combines the per-language content modules into the shape ContentService serves. */
export const SITE_CONTENT: Record<Language, SiteContent> = {
  de: {
    nav: NAV_DE,
    hero: HERO_DE,
    about: ABOUT_DE,
    skills: SKILLS_DE,
    projects: PROJECTS_DE,
    contact: CONTACT_DE,
    footer: FOOTER_DE,
    notFound: NOT_FOUND_DE,
    legalNotice: LEGAL_NOTICE_DE,
    privacyPolicy: PRIVACY_POLICY_DE,
  },
  en: {
    nav: NAV_EN,
    hero: HERO_EN,
    about: ABOUT_EN,
    skills: SKILLS_EN,
    projects: PROJECTS_EN,
    contact: CONTACT_EN,
    footer: FOOTER_EN,
    notFound: NOT_FOUND_EN,
    legalNotice: LEGAL_NOTICE_EN,
    privacyPolicy: PRIVACY_POLICY_EN,
  },
};
