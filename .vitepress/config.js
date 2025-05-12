import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import "feather-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DESIDE",
  description: "DESIDE",
  appearance: false, // disable dark mode
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/destine/DesideNavBar.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/destine/DesideFooter.vue', import.meta.url)
          )
        }
      ]
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      }
    }
  },
  themeConfig: {
    logo: '/assets/deside_logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dashboard', link: '/uc1dashboard/' },
      // { text: 'UC2 Dashboard', link: '/uc2dashboard/' },
      // { text: 'Stories', link: '/stories/' },
      // { text: 'Editor', link: '/editor/' }
    ],
  }
})
