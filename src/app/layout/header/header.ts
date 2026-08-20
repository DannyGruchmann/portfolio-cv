import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

import { ContentService } from '@/core/content/content.service';
import { LanguageService } from '@/core/i18n/language.service';
import { LANGUAGES, type Language } from '@/core/i18n/language.types';
import { ScrollLockService } from '@/core/services/scroll-lock.service';
import { Logo } from '@/shared/components/logo/logo';

const SCROLLED_AFTER_PX = 40;

/** Fixed site header: nav, language switch and the mobile menu. */
@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Logo],
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
  },
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly contentService = inject(ContentService);
  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly scrollLock = inject(ScrollLockService);

  protected readonly languages = LANGUAGES;
  protected readonly language = this.languageService.language;
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(window.scrollY > SCROLLED_AFTER_PX);

  // Route path without hash/query, so '/#contact' still counts as the home route.
  private readonly isHomeRoute = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url.split(/[#?]/)[0] === '/'),
    ),
    { initialValue: this.router.url.split(/[#?]/)[0] === '/' },
  );

  // Transparent-over-hero styling only applies at the very top of the home route, and
  // never while the mobile menu covers the hero anyway.
  protected readonly isOverHero = computed(
    () => this.isHomeRoute() && !this.isScrolled() && !this.isMenuOpen(),
  );

  protected readonly nav = computed(() => this.contentService.content().nav);
  protected readonly navItems = computed(() => {
    const nav = this.nav();
    return [
      { fragment: 'about', label: nav.about },
      { fragment: 'skills', label: nav.skills },
      { fragment: 'projects', label: nav.projects },
      { fragment: 'contact', label: nav.contact },
    ];
  });

  protected toggleMenu(): void {
    if (this.isMenuOpen()) {
      this.closeMenu();
      return;
    }
    this.isMenuOpen.set(true);
    this.scrollLock.lock();
  }

  protected closeMenu(): void {
    if (!this.isMenuOpen()) {
      return;
    }
    this.isMenuOpen.set(false);
    this.scrollLock.release();
  }

  protected selectLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  protected onScroll(): void {
    this.isScrolled.set(window.scrollY > SCROLLED_AFTER_PX);
  }
}
