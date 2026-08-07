import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

import { ContentService } from '@/core/content/content.service';
import { LanguageService } from '@/core/i18n/language.service';
import { LANGUAGES, type Language } from '@/core/i18n/language.types';
import { Logo } from '@/shared/components/logo';

const SCROLLED_AFTER_PX = 40;

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

  protected readonly languages = LANGUAGES;
  protected readonly language = this.languageService.language;
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(window.scrollY > SCROLLED_AFTER_PX);

  private readonly isHomeRoute = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url.split(/[#?]/)[0] === '/'),
    ),
    { initialValue: this.router.url.split(/[#?]/)[0] === '/' },
  );

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
    this.isMenuOpen.update((open) => !open);
    this.lockBodyScroll(this.isMenuOpen());
  }

  protected closeMenu(): void {
    if (!this.isMenuOpen()) {
      return;
    }
    this.isMenuOpen.set(false);
    this.lockBodyScroll(false);
  }

  protected selectLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }

  protected onScroll(): void {
    this.isScrolled.set(window.scrollY > SCROLLED_AFTER_PX);
  }

  /** Verhindert, dass die Seite hinter dem offenen Vollbild-Menue mitscrollt. */
  private lockBodyScroll(locked: boolean): void {
    document.body.classList.toggle('is-menu-open', locked);
  }
}
