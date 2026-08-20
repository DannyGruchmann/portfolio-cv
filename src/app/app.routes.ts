import { Routes } from '@angular/router';

const SITE_NAME = 'Danny Gruchmann';

// Every route lazy-loads its component via loadComponent, so the initial bundle only
// ships the home page; /impressum and /datenschutz are split into separate chunks.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/features/home/home').then((m) => m.Home),
    title: `${SITE_NAME} – Frontend Developer`,
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('@/features/legal/legal-notice/legal-notice').then((m) => m.LegalNotice),
    title: `Impressum – ${SITE_NAME}`,
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('@/features/legal/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
    title: `Datenschutz – ${SITE_NAME}`,
  },
  {
    path: '**',
    loadComponent: () => import('@/shared/components/not-found/not-found').then((m) => m.NotFound),
    title: `Seite nicht gefunden – ${SITE_NAME}`,
  },
];
