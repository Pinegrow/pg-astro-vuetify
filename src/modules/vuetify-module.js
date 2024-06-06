// // https://docs.astro.build/en/reference/integrations-reference/
// import type { AstroIntegration } from 'astro'
// import Vuetify from 'vite-plugin-vuetify'
// export default function vuetifyIntegration(): AstroIntegration {
//   // See the Integration API docs for full details
//   // https://docs.astro.build/en/reference/integrations-reference/
//   return {
//     name: 'vuetify-astro-integration',
//     hooks: {
//       'astro:config:setup': async ({ updateConfig }) => {
//         updateConfig({
//           vite: {
//             ssr: {
//               noExternal: ['vuetify'],
//             },
//             plugins: [
//               Vuetify({
//                 /* If customizing sass variables of vuetify components */
//                 // styles: {
//                 //   configFile: 'src/assets/vuetify/settings.scss',
//                 // },
//                 //...
//               }),
//             ],
//           },
//         })
//       },
//     },
//   }
// }
