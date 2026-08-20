import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  type AbstractControl,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ContentService } from '@/core/content/content.service';
import { ContactService } from '@/core/services/contact.service';

type SendState = 'idle' | 'sending' | 'success' | 'error';

const MIN_MESSAGE_LENGTH = 10;

/** Contact form: validates input client-side, then hands it to ContactService. */
@Component({
  selector: 'app-contact-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  private readonly contentService = inject(ContentService);
  private readonly contactService = inject(ContactService);

  protected readonly content = computed(() => this.contentService.content().contact);
  protected readonly sendState = signal<SendState>('idle');

  protected readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
      updateOn: 'blur',
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(MIN_MESSAGE_LENGTH)],
      updateOn: 'blur',
    }),
    privacy: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    }),
    // HONEYPOT control — bound to the field hidden via CSS in contact-section.html
    // (class="contact__honeypot"). No validators on purpose: bots fill it, humans can't see it.
    website: new FormControl('', { nonNullable: true }),
  });

  protected get nameControl(): AbstractControl {
    return this.form.controls.name;
  }

  protected get emailControl(): AbstractControl {
    return this.form.controls.email;
  }

  protected get messageControl(): AbstractControl {
    return this.form.controls.message;
  }

  protected get privacyControl(): AbstractControl {
    return this.form.controls.privacy;
  }

  protected showError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  protected emailErrorMessage(): string {
    const errors = this.emailControl.errors;
    return errors?.['required']
      ? this.content().emailErrorRequired
      : this.content().emailErrorFormat;
  }

  protected async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sendState.set('sending');

    try {
      const value = this.form.getRawValue();
      await this.contactService.send({
        name: value.name,
        email: value.email,
        message: value.message,
        website: value.website,
        language: this.contentService.language(),
      });
      this.form.reset();
      this.sendState.set('success');
    } catch {
      this.sendState.set('error');
    }
  }
}
