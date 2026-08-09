import { Routes } from '@angular/router';

const SITE_NAME = 'Danny Gruchmann';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@/features/home/home').then((m) => m.Home),
    title: `${SITE_NAME} – Frontend Developer`,
  },
  {
    path: 'impressum',
    loadComponent: () => import('@/features/legal/legal-notice').then((m) => m.LegalNotice),
    title: `Angaben zur Website – ${SITE_NAME}`,
  },
  {
    path: 'datenschutz',
    loadComponent: () => import('@/features/legal/privacy-policy').then((m) => m.PrivacyPolicy),
    title: `Datenschutz – ${SITE_NAME}`,
  },
  {
    path: '**',
    loadComponent: () => import('@/shared/components/not-found').then((m) => m.NotFound),
    title: `Seite nicht gefunden – ${SITE_NAME}`,
  },
];
