import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GTIF CIF",
  description: "Cerulean Information Factory Dashboard",
  appearance: false, // disable dark mode
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      }
    }
  },
  themeConfig: {
    logo: '/assets/cerulean_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/uc1dashboard/' },
      // { text: 'UC2 Dashboard', link: '/uc2dashboard/' },
      // { text: 'Stories', link: '/stories/' },
      { text: 'Editor', link: '/editor/' }
    ],
  }
})
