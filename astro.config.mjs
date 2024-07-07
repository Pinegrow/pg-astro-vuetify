import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
// import preact from '@astrojs/preact'
// import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import svelte from '@astrojs/svelte'
import Pinegrow from '@pinegrow/astro-module'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/astro'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'
// import myAstroModule from './src/modules/my-module'

// import { visualizer } from 'rollup-plugin-visualizer'

import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

import site from './src/site'
const { url } = site

// https://astro.build/config
export default defineConfig({
  site: url,
  integrations: [
    // myAstroModule,
    vue({
      appEntrypoint: '/src/app',
      template: {
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#image-loading
        transformAssetUrls: {
          ...transformAssetUrls,
          'v-carousel-item': [
            'src',
            'lazySrc',
            'srcset',
            ':src',
            ':lazySrc',
            ':srcset',
          ],
          'v-card': [
            'image',
            'prependAvatar',
            'appendAvatar',
            ':image',
            ':prependAvatar',
            ':appendAvatar',
          ],
        },
        compilerOptions: {
          isCustomElement: (tag) => tag === 'lite-youtube',
        },
      },
    }),
    // preact({
    //   include: ['**/preact/*'],
    // }),
    // react({
    //   include: ['**/react/*'],
    // }),
    solidJs({
      include: ['**/solid/*'],
    }),
    svelte(),
    mdx(),
    sitemap(),
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
        /\.mdx$/, // .mdx
      ],

      imports: [
        'vue',
        // 'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        'pinia',
      ],
      dirs: [
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
        'src/composables',
        'src/utils',
        'src/stores',
      ],
      vueTemplate: true,
      dts: 'auto-imports.d.ts',
    }),
    Pinegrow({
      liveDesigner: {
        iconPreferredCase: 'unocss', // default value (can be removed), unocss by default uses the unocss format for icon names
        devtoolsKey: 'devtoolsKey', // see app.ts
        vuetify: {
          /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
          configPath: 'vuetify.config.ts', // or file where vuetify is created
          // themePath: false, // Set to false so that Design Panel is not used
          // utilities: false,
          // restartOnConfigUpdate: true,
          restartOnThemeUpdate: true,
        },
        // plugins: [
        //   {
        //     name: 'My Awesome Lib 3.0',
        //     key: 'my-awesome-lib',
        //     pluginPath: fileURLToPath(
        //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
        //     ),
        //   },
        // ],
      },
    }),
  ],
  vite: {
    plugins: [
      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      AutoImportComponents({
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        dirs: ['src/components'], // allow auto load markdown components under ./src/components/
        extensions: ['vue', 'md'], // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],
        // resolvers: [], // Auto-import using resolvers
        dts: 'components.d.ts',
      }),
      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
        content: {
          pipeline: {
            /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
            include: ['./src/**/*'],
          },
        },
      }),
      {
        name: 'vuetify-plugin',
        configResolved(config) {
          const idx_vue = config.plugins.findIndex(
            (plugin) => plugin.name && plugin.name === 'vite:vue',
          )
          //@ts-ignore
          config.plugins.splice(
            idx_vue + 1,
            0,
            Vuetify({
              /* If customizing sass variables of vuetify components */
              // styles: {
              //   configFile: 'src/assets/vuetify/settings.scss',
              // },
              //...
            })[0],
          )
        },
      },
      // VueDevTools()
    ],

    // build: {
    //   // Vite uses Rollup under the hold, so rollup options & plugins can be used for advanced usage
    //   rollupOptions: {
    //     plugins: [visualizer()],
    //   },
    // },

    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        /* Please ensure that you update the filenames and paths to accurately match those used in your project. */

        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
