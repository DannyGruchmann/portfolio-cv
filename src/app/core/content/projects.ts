import type { Project, SocialLink } from './content.types';
import { CONTACT_EMAIL } from './contact-details';

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    url: 'https://github.com/dannygruchmann',
    label: 'GitHub',
    icon: '/icons/social/github.svg',
  },
  {
    id: 'email',
    url: `mailto:${CONTACT_EMAIL}`,
    label: 'E-Mail',
    icon: '/icons/social/mail.svg',
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/danny-gruchmann-9975143a0/',
    label: 'LinkedIn',
    icon: '/icons/social/linkedin.svg',
  },
];

export const PROJECTS: readonly Project[] = [
  {
    id: 'join',
    imageBase: 'join',
    name: 'Join',
    tech: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    description: {
      de: 'Aufgabenverwaltung nach dem Kanban-Prinzip, gebaut ohne Framework. Drag-and-drop zwischen den Spalten, Kontaktverwaltung, Kategorien und Prioritäten laufen über eigenes State-Handling in JavaScript, die Daten liegen in Firebase.',
      en: 'Kanban-style task manager, built without a framework. Drag and drop between columns, contact management, categories and priorities all run on hand-written state handling in JavaScript, with the data stored in Firebase.',
    },
    imageAlt: {
      de: 'Screenshot der Kanban-Übersicht von Join',
      en: 'Screenshot of the Join Kanban board',
    },
    liveUrl: 'https://join.dannygruchmann.com',
    repoUrl: 'https://github.com/DannyGruchmann/Join',
  },
  {
    id: 'dabubble',
    imageBase: 'dabubble',
    name: 'DABubble',
    tech: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
    description: {
      de: 'Chat-Anwendung im Stil von Slack. Kanäle, Direktnachrichten und Threads synchronisieren in Echtzeit über die Firebase Realtime Database. Dazu Anmeldung, Präsenzanzeige und eine Oberfläche, die vom Handy bis zum Desktop dasselbe Layout trägt.',
      en: 'A Slack-style chat application. Channels, direct messages and threads sync in real time through the Firebase Realtime Database, plus authentication, presence indicators and a layout that holds up from phone to desktop.',
    },
    imageAlt: {
      de: 'Screenshot der Chat-Oberfläche von DABubble',
      en: 'Screenshot of the DABubble chat interface',
    },
    liveUrl: 'https://dabubble.dannygruchmann.com',
    repoUrl: 'https://github.com/DannyGruchmann/DABubble2498',
  },
  {
    id: 'code-a-cuisine',
    imageBase: 'code-a-cuisine',
    name: 'Code A Cuisine',
    tech: ['Angular', 'TypeScript', 'Firebase', 'n8n'],
    description: {
      de: 'Rezept-Generator. Die Eingabe landet in Firestore, ein n8n-Workflow erzeugt daraus per Sprachmodell ein Rezept und schreibt das Ergebnis zurück. Tageslimits pro IP und global halten die API-Kosten im Rahmen.',
      en: 'Recipe generator. The request is written to Firestore, an n8n workflow turns it into a recipe using a language model and writes the result back. Daily quotas per IP and overall keep the API cost in check.',
    },
    imageAlt: {
      de: 'Screenshot der Rezeptansicht von Code A Cuisine',
      en: 'Screenshot of the Code A Cuisine recipe view',
    },
    liveUrl: 'https://code-a-cuisine.dannygruchmann.com',
    repoUrl: 'https://github.com/DannyGruchmann/code-a-cuisine1.0',
  },
  {
    id: 'famora',
    imageBase: 'famora',
    name: 'Famora',
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    description: {
      de: 'Eigenes Projekt, Idee und Umsetzung von mir. Die Web-App führt Hinterbliebene nach einem Todesfall durch Behördengänge, Fristen und Verträge: Ein kurzes Onboarding fragt die Situation ab und macht daraus eine persönliche Aufgabenliste. Anmeldung und Daten laufen über Supabase.',
      en: 'A project of my own, from the idea to the build. The web app guides bereaved families through the authorities, deadlines and contracts that follow a death: a short onboarding asks about the situation and turns it into a personal task list. Sign-in and data run on Supabase.',
    },
    imageAlt: {
      de: 'Screenshot der Famora-Checkliste mit Fortschrittsanzeige und Aufgaben samt Fristen',
      en: 'Screenshot of the Famora checklist with progress indicator and tasks with deadlines',
    },
    liveUrl: 'https://famora.dannygruchmann.com',
    repoUrl: 'https://github.com/DannyGruchmann/famora',
  },
];
