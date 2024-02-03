import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://elte-devs.github.io',
  base: '/elte-survival-guide',
  prefetch: {
    defaultStrategy: 'tap',
  },
  integrations: [starlight({
    title: 'ELTE IK Survival Guide',
    description: 'Practical advice to survive your time here, literally and figuratively.',
    customCss: ['@fontsource/inter/400.css', '@fontsource/inter/600.css', './src/styles/custom.css'],
    social: {
      github: 'https://github.com/elte-devs/elte-survival-guide',
      discord: 'https://discord.gg/phaMmupWPD',
    },
    sidebar: [{
      label: 'Home',
      autogenerate: {
        directory: 'home',
      },
    }, {
      label: '1.',
      autogenerate: {
        directory: '1',
      },
    }, {
      label: '2.',
      autogenerate: {
        directory: '2',
      },
    }, {
      label: '3.',
      autogenerate: {
        directory: '3',
      },
    }, {
      label: '4.',
      autogenerate: {
        directory: '4',
      },
    }, {
      label: '5.',
      autogenerate: {
        directory: '5',
      },
    }],
    components: {
      Head: './src/components/Head.astro',
      PageTitle: './src/components/PageTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
    },
  })],
})
