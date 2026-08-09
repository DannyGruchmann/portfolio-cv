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

export const NAV_DE: NavContent = {
  about: 'Über mich',
  skills: 'Skills',
  projects: 'Projekte',
  contact: 'Kontakt',
  menuOpen: 'Menü öffnen',
  menuClose: 'Menü schließen',
  skipToContent: 'Zum Inhalt springen',
};

export const HERO_DE: HeroContent = {
  greeting: 'Hallo! Ich bin Danny',
  jobTitleLine1: 'SOFTWARE',
  jobTitleLine2: 'DEVELOPER',
  scroll: 'SCROLL',
  portraitAlt: 'Danny Gruchmann, Software Developer aus Altenburg',
};

export const ABOUT_DE: AboutContent = {
  title: 'Lass uns zusammen­arbeiten',
  availabilityLabel: 'Ich bin',
  availabilityLocation: 'Altenburg, Thüringen',
  availabilityRemote: 'Remote verfügbar',
  availabilityRelocation: 'Umzug möglich',
  paragraphs: [
    'Ich entwickle mit Angular und TypeScript, dazu React. Angefangen habe ich mit reinem JavaScript, ohne Framework, und das hilft mir bis heute. Meine Projekte habe ich alle selbst zu Ende gebracht, vom ersten Entwurf bis zum fertigen Deployment.',
    'Ich fange nicht sofort an zu tippen. Erst schaue ich mir an, was die Aufgabe wirklich braucht, dann teile ich sie in Stücke, die ich einzeln fertig bekomme. So bleibt der Code auch für die lesbar, die später damit arbeiten. Und wenn ich irgendwo hänge, frage ich lieber einmal zu früh als zwei Tage zu spät.',
    'Ich suche eine Festanstellung als Software Developer. In fremde Projekte lese ich mich schnell ein, lern gerne neues dazu, und ich möchte irgendwo ankommen und nicht nur vorbeischauen.',
  ],
  ctaLabel: 'Kontakt aufnehmen',
};

export const SKILLS_DE: SkillsContent = {
  title: 'Skills',
  intro: 'Womit ich täglich arbeite.',
};

export const PROJECTS_DE: ProjectsContent = {
  title: 'Meine Projekte',
  intro:
    'Eine Auswahl meiner Arbeiten. Alle Projekte laufen live und der vollständige Quellcode ist auf GitHub einsehbar.',
  liveLabel: 'Live ansehen',
  repoLabel: 'GitHub',
  linksPendingNote: 'Links folgen',
};

export const CONTACT_DE: ContactContent = {
  title: 'Kontakt',
  subtitle: 'Hab ich Sie überzeugt?',
  intro:
    'Dann schreiben Sie mir. Ein paar Zeilen zur Stelle genügen, meine Unterlagen kommen sofort zurück und für ein Gespräch richte ich mich nach Ihnen. Ich antworte meist noch am selben Tag.',
  callToAction: 'Festanstellung, Werkstudentenstelle oder Projektarbeit.',
  nameLabel: 'Ihr Name',
  namePlaceholder: 'Vor- und Nachname',
  nameError: 'Bitte tragen Sie Ihren Namen ein.',
  emailLabel: 'Ihre E-Mail',
  emailPlaceholder: 'name@firma.de',
  emailErrorRequired: 'Bitte tragen Sie Ihre E-Mail-Adresse ein.',
  emailErrorFormat: 'Diese E-Mail-Adresse sieht nicht gültig aus.',
  messageLabel: 'Ihre Nachricht',
  messagePlaceholder: 'Worum geht es?',
  messageError: 'Bitte schreiben Sie mir ein paar Sätze.',
  privacyBefore: 'Ich habe die',
  privacyLinkLabel: 'Datenschutzerklärung',
  privacyAfter: 'gelesen und bin mit der Verarbeitung meiner Daten einverstanden.',
  privacyError: 'Ohne Ihre Zustimmung darf ich die Nachricht nicht verarbeiten.',
  submitLabel: 'Nachricht senden',
  sendingLabel: 'Wird gesendet …',
  successMessage:
    'Danke, Ihre Nachricht ist angekommen. Eine Bestätigung liegt gleich in Ihrem Postfach — sehen Sie notfalls im Spam-Ordner nach. Ich melde mich.',
  errorMessage: `Das hat nicht geklappt. Versuchen Sie es später noch einmal oder schreiben Sie direkt an ${CONTACT_EMAIL}.`,
};

export const FOOTER_DE: FooterContent = {
  legalNotice: 'Impressum',
  privacyPolicy: 'Datenschutz',
  goUpLabel: 'Nach oben',
  socialLabel: 'Soziale Netzwerke',
};

export const NOT_FOUND_DE: NotFoundContent = {
  title: 'Diese Seite gibt es nicht',
  text: 'Der Link ist veraltet, oder in der Adresse steckt ein Tippfehler.',
  linkLabel: 'Zurück zur Startseite',
};
