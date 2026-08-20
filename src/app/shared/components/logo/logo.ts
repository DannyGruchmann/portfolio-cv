import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Inline SVG brand mark used in header and footer. */
@Component({
  selector: 'app-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      class="logo"
      viewBox="0 0 64 69"
      fill="none"
      [attr.width]="width()"
      [attr.height]="height()"
      role="img"
      [attr.aria-label]="label()"
    >
      <path
        d="M12 13H32L46 34.5L32 56H12Z"
        stroke="currentColor"
        stroke-width="12"
        stroke-linejoin="round"
      />
      <path
        d="M12 13H32L46 34.5L32 56H12Z"
        stroke="var(--logo-accent, #0043f0)"
        stroke-width="12"
        stroke-linejoin="round"
        stroke-dasharray="25.7 200"
        stroke-dashoffset="-20"
      />
      <path
        d="M56 7.5L60.5 12L56 16.5L51.5 12Z"
        fill="var(--logo-accent, #0043f0)"
        stroke="var(--logo-accent, #0043f0)"
        stroke-width="3"
        stroke-linejoin="round"
      />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .logo {
      display: block;
    }
  `,
})
export class Logo {
  readonly width = input<number>(48);
  readonly height = input<number>(52);
  readonly label = input<string>('Danny Gruchmann');
}
