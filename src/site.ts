export default {
  name: 'Vue Designer',
  description: 'Vue Designer Astro Vuetify - Quick start template',
  // logo: 'i-emojione-rocket',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://pg-astro-vuetify.netlify.app',
  github: 'https://github.com/pinegrow/pg-nuxt-vuetify',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog' },
    { text: 'About', link: '/about' },
  ],
}
