# Portfolio – Danny Gruchmann

Persönliches Entwickler-Portfolio, umgesetzt nach der Figma-Vorlage der Developer Akademie.
Angular 21 (standalone, zoneless), SCSS, kein SSR, zweisprachig DE/EN.

## Befehle

```bash
npm start        # Dev-Server auf http://localhost:4200
npm run build    # Production-Build nach dist/
npm test         # Unit-Tests (Vitest)
```

Einzelne Testdatei: `ng test --include='**/pfad/zur/datei.spec.ts'`

## Wo du was änderst

| Was                             | Datei                                              |
| ------------------------------- | -------------------------------------------------- |
| Deutsche Texte                  | `src/app/core/content/content.de.ts`               |
| Englische Texte                 | `src/app/core/content/content.en.ts`               |
| Projekte, Links, Social-Profile | `src/app/core/content/projects.ts`                 |
| Impressum, Datenschutz          | `src/app/core/content/legal.de.ts` / `legal.en.ts` |
| Skill-Liste und Icons           | `src/app/core/content/skills.ts`                   |
| Badge-Icons „Über mich"         | `public/icons/` (location, remote, relocate)       |
| Deko-Kreise im Hintergrund      | `public/img/Ellipse.svg` (eine Datei für alle)     |
| Farben, Schriftgrößen, Abstände | `src/styles/_variables.scss`                       |
| Webhook des Kontaktformulars    | `src/environments/environment.ts`                  |

## Vor dem Livegang zu erledigen

1. **Impressum vervollständigen** — in `legal.de.ts` und `legal.en.ts` stehen `[Straße und Hausnummer]`,
   `[PLZ]` und `[Telefonnummer]` als Platzhalter. Ohne echte Angaben ist das Impressum unvollständig
   (§ 5 DDG).
2. **Links eintragen** — in `projects.ts` stehen `liveUrl` und `repoUrl` je Projekt auf `null`.
   Solange sie leer sind, zeigt die Seite statt der Buttons den Hinweis „Links folgen".
   Ebenso die GitHub- und LinkedIn-Adressen in `SOCIAL_LINKS` prüfen.
3. **Viertes Projekt** — der Eintrag mit `isPlaceholder: true` in `projects.ts` austauschen und ein
   Bild nach `public/img/projects/` legen (1200 × 750, WebP, unter 500 KB).
4. **Webhook eintragen** — siehe unten.

## Kontaktformular an n8n anbinden

Das Formular schickt ein JSON-POST an einen n8n-Webhook. Der Versand der Mail passiert in n8n,
nicht im Browser — so steht kein Mail-Zugang im ausgelieferten JavaScript.

**Schritt 1 – Workflow in n8n anlegen** (auf deinem Hetzner-Server):

1. Node **Webhook**: Methode `POST`, Pfad z. B. `portfolio-kontakt`, Response Mode
   `Using Respond to Webhook Node`.
2. Node **Respond to Webhook**: Response Code `200`. Unter _Response Headers_ eintragen:

   | Header                         | Wert                      |
   | ------------------------------ | ------------------------- |
   | `Access-Control-Allow-Origin`  | `https://deine-domain.de` |
   | `Access-Control-Allow-Methods` | `POST, OPTIONS`           |
   | `Access-Control-Allow-Headers` | `Content-Type`            |

   Ohne diese Header blockiert der Browser die Anfrage (CORS). Für lokale Tests zusätzlich
   `http://localhost:4200` erlauben oder vorübergehend `*` setzen.

3. Node **Send Email** (SMTP) mit den Zugangsdaten von Brevo:

   | Feld            | Wert                                  |
   | --------------- | ------------------------------------- |
   | Host            | `smtp-relay.brevo.com`                |
   | Port            | `587`                                 |
   | SSL/TLS         | aus, STARTTLS an                      |
   | User / Passwort | aus Brevo unter _SMTP & API_ → _SMTP_ |

   Betreff und Text aus den Feldern des Webhooks zusammensetzen, zum Beispiel
   `Neue Nachricht von {{ $json.body.name }}` mit `{{ $json.body.email }}` als Reply-To.

**Schritt 2 – URL im Projekt eintragen:**

```ts
// src/environments/environment.ts
contactWebhookUrl: 'https://n8n.deine-domain.de/webhook/portfolio-kontakt',
```

Solange das Feld leer ist, zeigt das Formular nach dem Absenden eine Fehlermeldung an,
statt ins Leere zu senden.

**Spam-Schutz:** Das Formular enthält ein verstecktes Feld (`website`). Menschen sehen es nicht,
Bots füllen es aus. Ist es befüllt, sendet der Browser gar nicht erst. In n8n kannst du zusätzlich
einen IF-Node vorschalten, der Anfragen mit befülltem Feld verwirft.

**Brevo kostenlos:** 300 Mails pro Tag, Server in der EU. Die Domain muss einmalig verifiziert
werden (SPF- und DKIM-Einträge im DNS), sonst landen die Mails im Spam.

## Struktur

```
src/
  styles/                  globale SCSS-Partials, aus jeder Komponente per @use erreichbar
    _variables.scss        Breakpoints (SCSS) + Design-Tokens (CSS Custom Properties)
    _mixins.scss           respond-to(), content-container, visually-hidden, focus-ring
    _reset.scss            moderner Reset inkl. prefers-reduced-motion
    _buttons.scss          globale Button-Klassen
  app/
    core/
      content/             alle Texte, Projekte, Skills, Icon-Pfade
      i18n/                LanguageService (Signals, localStorage)
      services/            ContactService
    layout/                header/ mit Burger-Overlay, footer/
    features/
      home/                home.ts/.html/.scss + sections/
        sections/          hero-section/, about-section/, skills-section/,
                           projects-section/, projects-dialog/, contact-section/
      legal/               legal-page/ als gemeinsames Layout,
                           legal-notice/ und privacy-policy/ als Routen-Wrapper
    shared/components/     logo/, icon/, social-links/, go-up-button/, not-found/
public/                    statische Assets, landen im Build-Root
docs/figma-specs/          vermessene Design-Specs und Referenzbilder aus Figma
```

## Konventionen

- Eine Komponente, ein Ordner: alle Dateien einer Komponente liegen zusammen
  (`about-section/about-section.{ts,html,scss,spec.ts}`), nie lose nebeneinander
- Import-Alias `@/` zeigt auf `src/app`
- SCSS-Partials ohne Pfad importierbar: `@use 'mixins' as *;`
  (über `stylePreprocessorOptions.includePaths` in `angular.json`)
- Klassen nach BEM, gestylt wird ausschließlich über Klassen – nie über Tags oder IDs
- Design-Tokens als CSS Custom Properties, keine verstreuten Hex-Werte
- Breakpoints bleiben SCSS-Variablen, weil Custom Properties in `@media` nicht funktionieren
- Schrift Nunito, selbst gehostet über `@fontsource/nunito` (kein Google-CDN, siehe Datenschutz)

## Design-Referenz

Die Vorlage liegt als vermessene Spec in `docs/figma-specs/`. Die Markdown-Dateien enthalten
Maße, Farben, Typografie und Texte je Section, `figma-metadata.xml` die vollständige
Geometrie aller Frames. Die Referenzbilder unter `docs/figma-specs/img/` sind bewusst nicht
versioniert.
