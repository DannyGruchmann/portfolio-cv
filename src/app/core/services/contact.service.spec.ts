import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';

import { ContactService } from './contact.service';

const WEBHOOK = 'https://n8n.example.test/webhook/kontakt';

describe('ContactService', () => {
  let service: ContactService;
  let httpMock: HttpTestingController;
  let originalUrl: string;

  const validRequest = {
    name: 'Max Mustermann',
    email: 'max@example.com',
    message: 'Hallo, ich habe eine Frage zu einem Projekt.',
    website: '',
    language: 'de',
  };

  beforeEach(() => {
    originalUrl = environment.contactWebhookUrl;
    environment.contactWebhookUrl = WEBHOOK;

    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ContactService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    environment.contactWebhookUrl = originalUrl;
  });

  it('sendet die Formulardaten an den Webhook', async () => {
    const pending = service.send(validRequest);

    const request = httpMock.expectOne(WEBHOOK);
    expect(request.request.method).toBe('POST');
    expect(request.request.body.name).toBe('Max Mustermann');
    expect(request.request.body.email).toBe('max@example.com');
    request.flush({ ok: true });

    await pending;
    httpMock.verify();
  });

  it('sendet nichts, wenn das Honeypot-Feld ausgefuellt ist', async () => {
    await service.send({ ...validRequest, website: 'http://spam.example' });

    httpMock.expectNone(WEBHOOK);
    httpMock.verify();
  });

  it('wirft einen Fehler, wenn keine Webhook-URL konfiguriert ist', async () => {
    environment.contactWebhookUrl = '';

    await expect(service.send(validRequest)).rejects.toThrow(/Webhook-URL/);
    httpMock.verify();
  });

  it('wirft einen Fehler, wenn der Webhook nicht erreichbar ist', async () => {
    const pending = service.send(validRequest);

    httpMock.expectOne(WEBHOOK).error(new ProgressEvent('network error'));

    await expect(pending).rejects.toThrow();
    httpMock.verify();
  });
});
