// English legal notice and privacy policy copy. legal.de.ts is the German (authoritative)
// counterpart — this is the translation, not the legally binding source.

import type { LegalPageContent } from './content.types';
import { CONTACT_EMAIL } from './contact-details';

export const LEGAL_NOTICE_EN: LegalPageContent = {
  title: 'Legal notice',
  sections: [
    {
      heading: 'Operator',
      paragraphs: [
        'Danny Gruchmann\nAltenburg, Thuringia\nGermany',
        'This website is my personal portfolio. It introduces me, my skills and my projects, and is aimed at companies looking to hire a software developer. It does not offer any goods or services.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: [
        `Email: ${CONTACT_EMAIL}`,
        'You can also reach me directly through the contact form on this website.',
      ],
    },
    {
      heading: 'Responsible for content',
      paragraphs: ['Danny Gruchmann, contact details as above.'],
    },
    {
      heading: 'Liability for content',
      paragraphs: [
        'As a service provider I am responsible for my own content on these pages under § 7 (1) DDG. Under §§ 8 to 10 DDG, however, I am not obliged to monitor transmitted or stored third-party information, or to investigate circumstances that indicate unlawful activity.',
        'Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the point at which a concrete infringement becomes known. If I become aware of such infringements, I will remove the content immediately.',
      ],
    },
    {
      heading: 'Liability for links',
      paragraphs: [
        'This site contains links to external third-party websites over whose content I have no influence. I therefore cannot accept any responsibility for that third-party content. The respective provider or operator of the linked pages is always responsible for their content.',
        'The linked pages were checked for possible legal violations at the time of linking. No unlawful content was apparent at that time. If I become aware of any infringements, I will remove such links immediately.',
      ],
    },
    {
      heading: 'Copyright',
      paragraphs: [
        'The content and works created by me on these pages are subject to German copyright law. Reproduction, adaptation, distribution and any kind of exploitation beyond the limits of copyright require my written consent.',
        'Downloads and copies of this page are permitted for private, non-commercial use only.',
        'The logos and names of technologies, tools and services shown here are trademarks of their respective owners. They are used solely to describe the technology I work with and do not imply any affiliation with those providers.',
      ],
    },
  ],
};

export const PRIVACY_POLICY_EN: LegalPageContent = {
  title: 'Privacy policy',
  sections: [
    {
      heading: 'Controller',
      paragraphs: [
        `The controller for data processing on this website is:\nDanny Gruchmann\nAltenburg, Thuringia, Germany\nEmail: ${CONTACT_EMAIL}`,
        'There is no legal requirement to appoint a data protection officer. For any question about data protection, please contact me directly.',
      ],
    },
    {
      heading: 'Hosting and server log files',
      paragraphs: [
        'This website runs on a server operated by Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany. The server is located in Germany. Hetzner processes the data solely on my behalf under a data processing agreement pursuant to Art. 28 GDPR.',
        'When you open the page, technical access data is processed automatically: IP address, date and time of the request, the page requested, the amount of data transferred, browser type and operating system.',
        'This data is technically required to deliver the page and serves the security of the service. The legal basis is Art. 6 (1) (f) GDPR, my legitimate interest in operating the website reliably and securely.',
        'Access logs are deleted after 30 days at the latest. This data is not merged with other data sources, nor is it evaluated for advertising or analytics purposes.',
      ],
    },
    {
      heading: 'Contact form',
      paragraphs: [
        'When you write to me through the contact form, your name, email address and message are transmitted to an automation running on my own server (n8n, hosted on the server named above in Germany) and forwarded from there to me by email. To send that email I use Brevo (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin, Germany), whose servers are located within the EU. A data processing agreement pursuant to Art. 28 GDPR is in place with Brevo as well.',
        'Once your message is on its way to me, the automation sends a short acknowledgement to the same address. It only goes out if the transmission to me succeeded, and it uses the same provider.',
        'The legal basis is your consent under Art. 6 (1) (a) GDPR, given via the checkbox in the form.',
        'Providing this data is neither required by law nor by contract. Without your name, email address and message, however, I cannot answer your enquiry. You are welcome to send me an email directly instead.',
        'The form contains an additional field that is invisible to you, normally stays empty and is only filled in by automated requests. It serves spam protection only. The legal basis is Art. 6 (1) (f) GDPR, my legitimate interest in keeping the form usable.',
        'The data stays with me until your enquiry has been dealt with and is deleted afterwards, unless statutory retention periods apply. You can withdraw your consent at any time without formality, for example by email. The lawfulness of processing carried out before the withdrawal remains unaffected.',
      ],
    },
    {
      heading: 'Recipients of your data and third countries',
      paragraphs: [
        'Beyond the processors named above — Hetzner for running the server and Brevo for sending the form email — I do not pass your data on. It is never sold or shared for advertising purposes. Data is disclosed to public authorities only where I am legally obliged to do so.',
        'All servers involved are located in Germany or within the European Union. Your data is not transferred to any third country outside the EU or the EEA.',
      ],
    },
    {
      heading: 'Storing your language preference',
      paragraphs: [
        'This website stores your language choice (German or English) in your browser local storage. This is not a cookie, no data is transmitted to a server, and you are not recognised across other websites.',
        'The storage is technically necessary for the function you requested, § 25 (2) no. 2 TDDDG. No consent is required for it, which is why there is no cookie banner. You can delete the entry at any time through your browser settings.',
      ],
    },
    {
      heading: 'Fonts',
      paragraphs: [
        'The Nunito and Baloo 2 typefaces used here are served from my own server. There is no connection to Google Fonts or any other external provider, and your IP address is not transmitted to any third party. The same applies to every image, icon and script on this website: nothing is loaded from third-party servers.',
      ],
    },
    {
      heading: 'No analytics, no tracking',
      paragraphs: [
        'This website uses no analytics tools, no tracking, no advertising networks and no social media plugins. No profiles of your behaviour are created.',
        'There is no automated decision-making, including profiling, within the meaning of Art. 22 GDPR.',
      ],
    },
    {
      heading: 'External links',
      paragraphs: [
        'This website contains links to external sites, among them GitHub and LinkedIn as well as my own projects. Clicking those links takes you away from this website. I have no influence on how the respective providers process data; their privacy policies apply. As long as you do not click the links, no data is transmitted to those providers.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'You have the right at any time to information about the data stored about you (Art. 15 GDPR), to rectification of inaccurate data (Art. 16 GDPR), to erasure (Art. 17 GDPR), to restriction of processing (Art. 18 GDPR) and to data portability (Art. 20 GDPR).',
        `An informal email to ${CONTACT_EMAIL} is enough to exercise these rights. I will respond within one month (Art. 12 (3) GDPR).`,
        'You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). The competent authority is the Thuringian Commissioner for Data Protection and Freedom of Information, Häßlerstraße 8, 99096 Erfurt, Germany.',
      ],
    },
    {
      heading: 'Right to object',
      paragraphs: [
        'Where I process data on the basis of a legitimate interest under Art. 6 (1) (f) GDPR — this concerns the server log files and the spam protection of the contact form — you have the right to object to that processing at any time on grounds relating to your particular situation (Art. 21 (1) GDPR).',
        `An informal objection by email to ${CONTACT_EMAIL} is sufficient. I will then stop processing the data concerned unless I can demonstrate compelling legitimate grounds that override your interests, rights and freedoms.`,
      ],
    },
    {
      heading: 'Encryption',
      paragraphs: [
        'For security reasons this website uses TLS encryption. You can tell that a connection is encrypted when your browser address bar starts with https:// and shows a padlock icon.',
      ],
    },
    {
      heading: 'Version and changes',
      paragraphs: [
        'This privacy policy is current as of August 2026. I update it whenever the technology in use or the legal situation changes. The current version is always available on this page.',
      ],
    },
  ],
};
