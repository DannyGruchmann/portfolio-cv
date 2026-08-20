import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
  /** HONEYPOT — must stay empty. Bound to the hidden "website" field in contact-section.html/.ts; see the check in send() below. */
  website: string;
  language: string;
}

/** Sends the contact form to the configured n8n webhook. */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  async send(request: ContactRequest): Promise<void> {
    if (!environment.contactWebhookUrl) {
      throw new Error(
        'Keine Webhook-URL konfiguriert. Trag sie in src/environments/environment.ts ein.',
      );
    }

    // HONEYPOT check: a filled "website" field means a bot filled every input, including
    // one no human ever sees. Resolve silently (no error) so the caller shows the normal
    // success state and the bot gets no signal that it was caught.
    if (request.website.trim() !== '') {
      return;
    }

    try {
      await firstValueFrom(
        this.http.post(environment.contactWebhookUrl, {
          name: request.name,
          email: request.email,
          message: request.message,
          language: request.language,
          sentAt: new Date().toISOString(),
        }),
      );
    } catch (error) {
      console.error('Kontaktformular konnte nicht gesendet werden:', error);
      throw new Error('Die Nachricht konnte nicht zugestellt werden.');
    }
  }
}
