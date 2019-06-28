module.exports = {
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  },
  plugins: [
    // vuepress-plugin-copyright (maybe?)
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    //'@vuepress/pwa',
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
  ],
  title: "The Game of Souls",
  description: "a story bible",
  head: [
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['link', {rel:'icon', href: '/images/agos192.png'}],
    ['script', {src: 'https://kit.fontawesome.com/4c7e105b7b.js'}],
  ],
  //serviceWorker: true,
  markdown: {
    toc: {
      includeLevel: [2,3,4]
    },
    plugins: {
      'markdown-it-mark': {},
      'markdown-it-ins': {},
      'markdown-it-attrs': {},
      'markdown-it-small': {},
      'markdown-it-fontawesome': {},
    },
    extendMarkdown: md => {
      md.set({
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true
      });
      md.use(require('markdown-it-mark'))
        .use(require('markdown-it-ins'))
        .use(require('markdown-it-attrs'))
        .use(require('markdown-it-small'))
        .use(require('markdown-it-fontawesome'));
    }
  },
  themeConfig: {
    base: '/the-game-of-souls-wiki/',
    logo: '/images/agos192.png',
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: 'The Story', link: '/the-story/'},
      { text: 'Characters', link:'/characters/' },
      { text: 'Locations', link:'/locations/' },
      { text: 'World Lore', link:'/lore/' },
    ],
    sidebar: {
      '/the-story/': [
        {link:'', text: 'The Story'},
        {link:'000-the-first-hunt', text: 'The First Hunt'},
      ],
      '/characters/': [
        {link: '', text: 'Characters'},
        {link: 'nox-setanta', text: 'Nox Sétanta'},
        {link: 'alex-kennedy', text: 'Alex Kennedy'}
      ],
      '/locations/': [
        {link:'', text: 'Locations'},
        {link:'new-york-city', text: 'New York City, New York'},
        {link:'boulder', text: 'Boulder, Colarado'},
        {link:'las-vegas', text: 'Las Vegas, Nevada'},
        {link:'dangdburgh', text: 'Dangdburg, Florida'}
      ],
      '/places/': [
        {link:'', text: 'Places'},
      ],
      '/lore/': [
        {link:'', text: 'Lore'},
        {link:'ascendant', text: 'Ascendant'},
        {link:'prophecy', text: 'Prophecy'},
        {link:'umbra', text: 'The Umbra'},
      ],
      '/help/': [
        {link:'', text: 'Help'},
        {link:'markdown', text: 'Markdown Available'}
      ]
    }
  }
};
