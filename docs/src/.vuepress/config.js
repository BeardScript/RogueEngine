const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', type: "image/svg", href: 'RogueEngineLogo.svg' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/RogueEngineLogotypeOMG.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    activeHeaderLinks: false,
    displayAllHeaders: false,
    sidebarDepth: 0,
    nav: [
      {
        text: 'Rogue Engine',
        link: 'https://rogueengine.io'
      }
    ],
    sidebar: [
      {
        title: "Getting Started",
        collapsable: false,
        children: [
          "/",
          "/GettingStarted/YourFirstProject",
          "/GettingStarted/NextSteps",
        ]
      },
      {
        title: "Workflow",
        collapsable: false,
        children: [
          "/Workflow/EditorLayout",
          "/Workflow/ImportingAssets",
          "/Workflow/LoadingAssets",
          "/Workflow/AssetManager",
          "/Workflow/BuildingYourProject",
          "/Workflow/StaticAssets",
          "/Workflow/Marketplace",
        ]
      },
      {
        title: "Assets",
        collapsable: false,
        children: [
          "/Assets/Scenes",
          "/Assets/Materials",
          "/Assets/Components",
          "/Assets/AudioAssets",
          "/Assets/Prefabs",
        ]
      },
      {
        title: "Engine API",
        collapsable: false,
        children: [
          "/EngineAPI/App",
          "/EngineAPI/AudioAsset",
          "/EngineAPI/Component",
          "/EngineAPI/Debug",
          {
            title: "Input",
            // path: "/EngineAPI/Input",
            collapsable: false,
            children: [
              "/EngineAPI/Input/Mouse",
              "/EngineAPI/Input/Keyboard",
              "/EngineAPI/Input/TouchController",
              "/EngineAPI/Input/GamepadController",
            ]
          },
          "/EngineAPI/Prefab",
          "/EngineAPI/Runtime",
          "/EngineAPI/SceneController",
          "/EngineAPI/Functions",
          "/EngineAPI/Events",
          "/EngineAPI/Tags",
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    "@vuepress/plugin-clean-urls",
  ]
}
