import type {
  AboutContent,
  ContactContent,
  FooterContent,
  HeroContent,
  NavContent,
  NotFoundContent,
  ProjectsContent,
  SkillsContent,
} from './content.types';
import { CONTACT_EMAIL } from './contact-details';

export const NAV_EN: NavContent = {
  about: 'About me',
  skills: 'Skill set',
  projects: 'My work',
  contact: 'Contact',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  skipToContent: 'Skip to content',
};

export const HERO_EN: HeroContent = {
  greeting: 'Hello! I am Danny',
  jobTitleLine1: 'SOFTWARE',
  jobTitleLine2: 'DEVELOPER',
  scroll: 'SCROLL',
  portraitAlt: 'Danny Gruchmann, software developer based in Altenburg, Germany',
};

export const ABOUT_EN: AboutContent = {
  title: "Let's work together",
  availabilityLabel: 'I am',
  availabilityLocation: 'Altenburg, Germany',
  availabilityRemote: 'Available remote',
  availabilityRelocation: 'Open to relocation',
  paragraphs: [
    'I work with Angular and TypeScript, plus React. I started out in plain JavaScript, without a framework, and that still helps me today. Every one of my projects I finished myself, from the first draft through to deployment.',
    'I do not start typing right away. First I work out what the task actually needs, then I split it into pieces I can finish one at a time. That keeps the code readable for whoever works on it later. And when I get stuck somewhere, I would rather ask once too early than two days too late.',
    "I am looking for a permanent role as a software developer, ideally in a team where people read each other's code. I get into unfamiliar projects quickly. I want something long-term, not a stopover.",
  ],
  ctaLabel: 'Get in touch',
};

export const SKILLS_EN: SkillsContent = {
  title: 'Skill set',
  intro: 'What I work with day to day.',
};

export const PROJECTS_EN: ProjectsContent = {
  title: 'My work',
  intro:
    'A selection of what I have built. Every project runs live and the full source is public on GitHub.',
  liveLabel: 'Live demo',
  repoLabel: 'GitHub',
  linksPendingNote: 'Links coming soon',
};

export const CONTACT_EN: ContactContent = {
  title: 'Contact',
  subtitle: 'Have I convinced you?',
  intro:
    'Then write to me. A few lines about the role are enough, my documents come straight back and I will work around your schedule for an interview. I usually reply the same day.',
  callToAction: 'Permanent role, working-student position or project work.',
  nameLabel: 'Your name',
  namePlaceholder: 'First and last name',
  nameError: 'Please enter your name.',
  emailLabel: 'Your email',
  emailPlaceholder: 'name@company.com',
  emailErrorRequired: 'Please enter your email address.',
  emailErrorFormat: 'That email address does not look valid.',
  messageLabel: 'Your message',
  messagePlaceholder: 'What is this about?',
  messageError: 'Please write me a few sentences.',
  privacyBefore: 'I have read the',
  privacyLinkLabel: 'privacy policy',
  privacyAfter: 'and agree to my data being processed.',
  privacyError: 'Without your consent I am not allowed to process the message.',
  submitLabel: 'Send message',
  sendingLabel: 'Sending …',
  successMessage:
    'Thanks, your message arrived. A confirmation will be in your inbox shortly — please check your spam folder if you cannot find it. I will get back to you.',
  errorMessage: `That did not work. Please try again later or write directly to ${CONTACT_EMAIL}.`,
};

export const FOOTER_EN: FooterContent = {
  legalNotice: 'Legal notice',
  privacyPolicy: 'Privacy policy',
  goUpLabel: 'Back to top',
  socialLabel: 'Social networks',
};

export const NOT_FOUND_EN: NotFoundContent = {
  title: 'This page does not exist',
  text: 'The link is outdated, or there is a typo in the address.',
  linkLabel: 'Back to the home page',
};
