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
    ['container', {
      type: 'spoiler',
      defaultTitle: '',
      before: info => `<div class="spoiler ${info}">`,
      after: `</div>`,
      marker: ':'
    }]
  ],
  title: "The Game of Souls",
  description: "a story bible",
  head: [
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['link', {rel:'icon', href: '/images/agos192.png'}]
  ],
  //serviceWorker: true,
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
      ],
    }
  }
};
