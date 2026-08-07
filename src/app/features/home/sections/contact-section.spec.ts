import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  let fixture: ComponentFixture<ContactSection>;
  let element: HTMLElement;

  const setValue = (selector: string, value: string) => {
    const input = element.querySelector<HTMLInputElement>(selector)!;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
  };

  const submitButton = () => element.querySelector<HTMLButtonElement>('button[type="submit"]')!;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSection);
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('hält den Absenden-Button gesperrt, solange das Formular leer ist', () => {
    expect(submitButton().disabled).toBe(true);
  });

  it('zeigt keinen Fehler, bevor ein Feld verlassen wurde', () => {
    const input = element.querySelector<HTMLInputElement>('#contact-name')!;
    input.value = 'A';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(element.querySelector('#contact-name-error')?.textContent?.trim()).toBe('');
  });

  it('zeigt den Fehler erst nach dem Verlassen des Feldes', () => {
    setValue('#contact-name', '');

    expect(element.querySelector('#contact-name-error')?.textContent?.trim()).not.toBe('');
  });

  it('meldet eine ungueltige E-Mail-Adresse', () => {
    setValue('#contact-email', 'keine-mail');

    expect(element.querySelector('#contact-email-error')?.textContent?.trim()).not.toBe('');
  });

  it('bleibt gesperrt, solange die Datenschutz-Checkbox nicht gesetzt ist', () => {
    setValue('#contact-name', 'Max Mustermann');
    setValue('#contact-email', 'max@example.com');
    setValue('#contact-message', 'Eine ausreichend lange Nachricht.');

    expect(submitButton().disabled).toBe(true);
  });

  it('gibt den Button frei, wenn alle Felder inklusive Checkbox stimmen', () => {
    setValue('#contact-name', 'Max Mustermann');
    setValue('#contact-email', 'max@example.com');
    setValue('#contact-message', 'Eine ausreichend lange Nachricht.');

    const checkbox = element.querySelector<HTMLInputElement>('input[type="checkbox"]')!;
    checkbox.click();
    fixture.detectChanges();

    expect(submitButton().disabled).toBe(false);
  });

  it('hält die Fehlerzeile im Layout, damit nichts springt', () => {
    const errorLine = element.querySelector('#contact-name-error')!;
    const before = errorLine.getBoundingClientRect().height;

    setValue('#contact-name', '');
    const after = errorLine.getBoundingClientRect().height;

    expect(after).toBe(before);
  });
});
