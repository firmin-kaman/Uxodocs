import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UXODOCS',
  tagline: 'Documentation UXOPIAN',
  favicon: 'img/favicon.ico',

  url: 'https://firmin-kaman.github.io/',
  baseUrl: '/Uxodocs/',

  organizationName: 'uxopian',
  projectName: 'uxodocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'arender',
        path: 'docs-arender',
        routeBasePath: 'arender',
        sidebarPath: require.resolve('./sidebarsArender.ts'),
        lastVersion: 'current',
        versions: {
          current: {
            label: '🚀 Arender V0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'flowerdocs',
        path: 'docs-flowerdocs',
        routeBasePath: 'flowerdocs',
        sidebarPath: require.resolve('./sidebarsFlowerdocs.ts'),
        lastVersion: 'current',
        versions: {
          current: {
            label: '🚀 Flowerdocs V0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fast2',
        path: 'docs-fast2',
        routeBasePath: 'fast2',
        sidebarPath: require.resolve('./sidebarsFast2.ts'),
        lastVersion: 'current',
        versions: {
          current: {
            label: '🚀 Fast2 V0',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs', 
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: '🏔️ UxoDocs ',
      logo: { src: 'img/logo.png' },
      items: [
        //{ to: '/', label: 'Home', position: 'left' },
        // { to: '/docs', label: 'Tutorials', position: 'left' }, // if global docs used
        // { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/arender/intro', label: 'ARender Docs', position: 'left' },
        { to: '/flowerdocs/intro', label: 'Flowerdocs Docs', position: 'left' },
        { to: '/fast2/intro', label: 'Fast2 Docs', position: 'left' },
        // Version dropdowns (will be hidden when not in their section)
        { type: 'docsVersionDropdown', docsPluginId: 'arender', position: 'right' },
        { type: 'docsVersionDropdown', docsPluginId: 'flowerdocs', position: 'right' },
        { type: 'docsVersionDropdown', docsPluginId: 'fast2', position: 'right' },
        // search button
        { type: 'search', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'X',
      //         href: 'https://x.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Uxodocs, All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["fr"], // ou ["en", "fr"] si ton site est multilingue
      },
    ],
  ],
};

export default config;
