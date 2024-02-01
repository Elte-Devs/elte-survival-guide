import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  prefetch: {
    defaultStrategy: 'tap',
  },
  integrations: [
    starlight({
      title: 'ELTE IK Survival Guide',
      description: 'Practical advice to survive your time here, literally and figuratively.',
      customCss: [
        '@fontsource/inter/400.css',
        '@fontsource/inter/600.css',
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/Rettend/elte-survival-guide',
      },
      sidebar: [
        {
          label: 'Home',
          items: [
            {
              label: 'What is Programming?',
              link: '/home/what',
            },
            {
              label: 'Tools & Tech',
              link: '/home/tools',
            },
          ],
        },
        {
          label: '1.',
          autogenerate: { directory: '1' },
        },
        {
          label: '2.',
          autogenerate: { directory: '2' },
        },
        {
          label: '3.',
          autogenerate: { directory: '3' },
        },
        {
          label: '4.',
          autogenerate: { directory: '4' },
        },
        {
          label: '5.',
          autogenerate: { directory: '5' },
        },
      ],
      components: {
        Head: './src/components/Head.astro',
        Sidebar: './src/components/Sidebar.astro',
      },
    }),
  ],
})
