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
   * Solange der Workflow in n8n nicht aktiv ist, antwortet der Pfad mit 404 und
   * das Formular zeigt seine Fehlermeldung.
   */
  contactWebhookUrl: 'https://n8n.dannygruchmann.com/webhook/portfolio-kontakt',
};
