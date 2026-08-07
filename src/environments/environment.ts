/**
 * Konfiguration der Laufzeitumgebung.
 *
 * Die Webhook-URL ist kein Geheimnis — sie steht im ausgelieferten JavaScript und
 * ist von aussen einsehbar. Der Schutz gegen Missbrauch passiert im n8n-Workflow
 * (Rate-Limit, Honeypot-Pruefung, CORS-Beschraenkung auf die eigene Domain).
 */
export const environment = {
  production: false,

  /**
   * n8n-Webhook, an den das Kontaktformular sendet.
   * Leer lassen, solange der Workflow noch nicht steht — das Formular zeigt dann
   * eine Fehlermeldung statt ins Leere zu senden.
   * Beispiel: 'https://n8n.deine-domain.de/webhook/portfolio-kontakt'
   */
  contactWebhookUrl: '',
};
