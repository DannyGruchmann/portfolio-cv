/**
 * Runtime environment config.
 *
 * The webhook URL is not a secret — it ships in the built JavaScript and is visible
 * to anyone. Abuse protection (rate limiting, its own honeypot check, CORS restricted
 * to this domain) lives server-side in the n8n workflow, since a bot could POST to
 * this URL directly and skip the Angular form (and its honeypot check) entirely.
 */
export const environment = {
  production: false,
  contactWebhookUrl: 'https://n8n.dannygruchmann.com/webhook/portfolio-kontakt',
};
