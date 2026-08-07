import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
  website: string;
  language: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  async send(request: ContactRequest): Promise<void> {
    if (!environment.contactWebhookUrl) {
      throw new Error(
        'Keine Webhook-URL konfiguriert. Trag sie in src/environments/environment.ts ein.',
      );
    }

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
