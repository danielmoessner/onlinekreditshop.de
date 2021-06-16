import home from './home';

export default {
  name: 'page',
  label: 'Seiten',
  label_singular: 'Seite',
  delete: false,
  editor: {
    preview: false,
  },
  files: [
    home,
    {
      file: 'content/pages/mortgage.md',
      label: 'Baufinanzierung',
      name: 'mortgage',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'mortgage',
        },
        {
          label: 'Meta',
          name: 'meta',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Beschreibung',
              name: 'description',
              widget: 'text',
            },
            {
              label: 'Bild',
              name: 'image',
              widget: 'image',
            },
          ],
        },
        {
          label: 'Inhalt',
          name: 'content',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Kategorie',
              name: 'category',
              widget: 'string',
            },
            {
              label: 'Kurzbeschreibung',
              name: 'shortDescription',
              widget: 'text',
            },
            {
              label: 'Rechner Klasse',
              name: 'calculator',
              widget: 'string',
            },
            {
              label: 'Button',
              name: 'button',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Text',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
    {
      file: 'content/pages/loan.md',
      label: 'Ratenkredit',
      name: 'loan',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'loan',
        },
        {
          label: 'Meta',
          name: 'meta',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Beschreibung',
              name: 'description',
              widget: 'text',
            },
            {
              label: 'Bild',
              name: 'image',
              widget: 'image',
            },
          ],
        },
        {
          label: 'Inhalt',
          name: 'content',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Kategorie',
              name: 'category',
              widget: 'string',
            },
            {
              label: 'Kurzbeschreibung',
              name: 'shortDescription',
              widget: 'text',
            },
            {
              label: 'Rechner Link',
              name: 'calculator',
              widget: 'string',
            },
            {
              label: 'Button',
              name: 'button',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Text',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
    {
      file: 'content/pages/financing.md',
      label: 'Finanzierung ohne Eigenkapital',
      name: 'financing',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'financing',
        },
        {
          label: 'Meta',
          name: 'meta',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Beschreibung',
              name: 'description',
              widget: 'text',
            },
            {
              label: 'Bild',
              name: 'image',
              widget: 'image',
            },
          ],
        },
        {
          label: 'Inhalt',
          name: 'content',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Kategorie',
              name: 'category',
              widget: 'string',
            },
            {
              label: 'Kurzbeschreibung',
              name: 'shortDescription',
              widget: 'text',
            },
            {
              label: 'Text',
              name: 'body',
              widget: 'markdown',
            },
          ],
        },
      ],
    },
    {
      file: 'content/pages/about.yml',
      label: 'Über uns',
      name: 'about',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'about',
        },
        {
          label: 'Meta',
          name: 'meta',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Beschreibung',
              name: 'description',
              widget: 'text',
            },
            {
              label: 'Bild',
              name: 'image',
              widget: 'image',
            },
          ],
        },
        {
          label: 'Header',
          name: 'header',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Über uns',
          name: 'about',
          widget: 'object',
          fields: [
            {
              label: 'Vortitel',
              name: 'pretitle',
              widget: 'string',
            },
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Vorteile',
              name: 'advantages',
              widget: 'list',
              fields: [
                {
                  label: 'Titel',
                  name: 'title',
                  widget: 'string',
                },
                {
                  label: 'Text',
                  name: 'text',
                  widget: 'string',
                },
              ],
            },
            {
              label: 'Bild',
              name: 'image',
              widget: 'image',
            },
          ],
        },
        {
          label: 'CTA',
          name: 'cta',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Button',
              name: 'button',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      file: 'content/pages/articles.yml',
      label: 'Ratgeber',
      name: 'articles',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'articles',
        },
        {
          label: 'Meta',
          name: 'meta',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Beschreibung',
              name: 'description',
              widget: 'text',
            },
            {
              label: 'Bild',
              name: 'image',
              widget: 'image',
            },
          ],
        },
        {
          label: 'Header',
          name: 'header',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Artikel',
          name: 'articles',
          widget: 'object',
          fields: [
            {
              label: 'Lesen Button',
              name: 'button',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      file: 'content/pages/contact.yml',
      label: 'Kontakt',
      name: 'contact',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'contact',
        },
        {
          label: 'Meta',
          name: 'meta',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Beschreibung',
              name: 'description',
              widget: 'text',
            },
            {
              label: 'Bild',
              name: 'image',
              widget: 'image',
            },
          ],
        },
        {
          label: 'Header',
          name: 'header',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'string',
            },
          ],
        },
        {
          label: 'Kontakt',
          name: 'contact',
          widget: 'object',
          fields: [
            {
              label: 'Titel',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Text',
              name: 'text',
              widget: 'text',
            },
            {
              label: 'Maps',
              name: 'maps',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      file: 'content/pages/imprint.md',
      name: 'imprint',
      label: 'Impressum',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'imprint',
        },
        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Kategorie',
          name: 'category',
          widget: 'string',
        },
        {
          label: 'Beschreibung',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Inhalt',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
    {
      file: 'content/pages/dataProtection.md',
      name: 'dataProtection',
      label: 'Datenschutz',
      fields: [
        {
          label: 'Sammlung',
          name: 'collection',
          widget: 'hidden',
          default: 'page',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'hidden',
          default: 'data-protection',
        },
        {
          label: 'Titel',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Kategorie',
          name: 'category',
          widget: 'string',
        },
        {
          label: 'Beschreibung',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Inhalt',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
  ],
};
