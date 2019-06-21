module.exports = {
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.js'), require('autoprefixer')],
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress/pwa',
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ]
  ],
  title: "The Game of Souls",
  description: "a story bible",
  head: [
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['link', {rel:'icon', href: '/images/agos192.png'}]
  ],
  serviceWorker: true,
  markdown: {
    toc: {
      includeLevel: [2,3,4]
    },
    config: md => {
      md.set({
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true
      })
      //md.use(require('markdown-it-xxx'));
    }
  },
  themeConfig: {
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
        ''
      ],
      '/characters/': [
        '',
        'nox-setanta',
        'alex-kennedy'
      ],
      '/locations/': [
        '',
        'new-york-city',
        'boulder',
        'las-vegas',
        'dangdburgh'
      ],
      '/lore/': [
        '',
      ],
    }
  }
};
