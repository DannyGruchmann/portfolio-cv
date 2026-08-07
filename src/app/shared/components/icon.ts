import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[style.--icon-intrinsic.px]': 'size()' },
  template: `
    <svg
      class="icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      [attr.width]="size()"
      [attr.height]="size()"
      [attr.role]="label() ? 'img' : null"
      [attr.aria-label]="label()"
      [attr.aria-hidden]="label() ? null : 'true'"
    >
      <path [attr.d]="path()" />
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    .icon {
      display: block;
      width: var(--icon-size, var(--icon-intrinsic));
      height: var(--icon-size, var(--icon-intrinsic));
    }
  `,
})
export class Icon {
  readonly path = input.required<string>();
  readonly size = input<number>(24);
  readonly label = input<string | null>(null);
}
