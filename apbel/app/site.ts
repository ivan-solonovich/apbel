// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'The Association of Political Prisoners of Belarus',
  description: 'Created by political prisoners for political prisoners',
  logo: '~@/assets/logo-images/APB_logo_transparent.png',
  author: 'Ivan Solonovich',
  url: 'https://apbel.vercel.app/',
  github: 'https://github.com/ivan-solonovich/apbel',
  ogImageUrl: 'freedomhouse.png', // absolute url (or) from public folder
  generator: 'none',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'About us',
        icon: 'i-mdi-home',
        to: '/aboutUs',
      },
      {
        title: 'Our projects',
        icon: 'i-mdi-home',
        to: '/OurMainProject',
      },
      {
        title: 'Donate',
        icon: 'i-mdi-home',
        to: '/',
      },
    ],
    secondary: [
      {
        title: 'Articles',
        icon: 'i-mdi-home',
        to: '/articles',
      },
      {
        title: 'Contact Us',
        icon: 'i-mdi-home',
        to: '/contact',
      },
      {
        title: 'Volunteer',
        icon: 'i-mdi-home',
        to: '/volunteer',
      },
    ],
  },
}
