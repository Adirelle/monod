/* eslint max-len: 0 */
export const Config = {
  APP_NAME: 'monod',
  DEFAULT_CONTENT: [
    '---',
    'hello: world! # YAML Front Matter (for templates)',
    '---',
    '',
    'Introducing Monod',
    '=================',
    '',
    '> **TL;DR** Monod is an [Open Source](https://github.com/TailorDev/monod) React-based Markdown editor. You can use it anytime (offline mode), share documents with anyone (encrypted), and render your content with a set of templates. This editor is brought to you by the good folks at [TailorDev](https://twitter.com/_TailorDev), as part of [a **Le lab** experiment (#2)](https://tailordev.fr/blog/2016/04/15/le-lab-2-offline-first-document-sharing-templates-monod-is-back/).',
    '',
    '### :fa-info-circle: Quick start',
    '',
    '* :pencil: As soon as you modify this document, you get a new unique document. That is yours, so feel free to write anything you want. We support [CommonMark](http://commonmark.org/), and you can write `code`, FontAwesome icons :fa-flag:, and, obviously, Emoji too! :clap:;',
    '* :family: Let your friends review your content by **sharing** the **full URL** with them;',
    '* :page_facing_up: You can export your document as **PDF** using the in-browser print feature (`Cmd + P` or `Ctrl + P` on Windows);',
    '* :airplane: Monod is Offline-First, meaning you can use it all the time. When you go back online, it automatically synchronizes your work;',
    '* :lock: Everything is **encrypted in the browser** (_i.e._ on your laptop), the server does not have access or any way to decrypt your documents;',
    '* :warning: There is no document management system: be sure to bookmark or write the full URLs of your documents somewhere.',
    '',
    'Read more about how and why we built Monod at: https://tailordev.fr/blog/.',
    '',
    '---',
    '*[Let us know your thoughts](mailto:hello@tailordev.fr?subject=About%20Monod). We would :heart: to hear from you!*'
  ].join('\n')
};
