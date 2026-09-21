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
    ['link', { rel: 'icon', type: "image/svg", href: '/RogueEngineLogo.svg' }],
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
          "/GettingStarted/CreateAProject",
          "/GettingStarted/NextSteps",
        ]
      },
      {
        title: "Workflow",
        collapsable: false,
        children: [
          "/Workflow/EditorLayout",
          "/Workflow/VisualComponents",
          "/Workflow/ImportingAssets",
          "/Workflow/LoadingAssets",
          "/Workflow/AssetManager",
          "/Workflow/BuildingYourProject",
          "/Workflow/StaticAssets",
          "/Workflow/Marketplace",
          "/Workflow/InputManager",
          "/Workflow/Audio",
          "/Workflow/Combat",
          "/Workflow/UI",
        ]
      },
      {
        title: "Assets",
        collapsable: false,
        children: [
          "/Assets/Scenes",
          "/Assets/Materials",
          "/Assets/Textures",
          "/Assets/TextureArrays",
          "/Assets/Models",
          "/Assets/Animations",
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
          "/EngineAPI/LoadingScreen",
          "/EngineAPI/AudioAsset",
          "/EngineAPI/Component",
          "/EngineAPI/VisualComponent",
          "/EngineAPI/Debug",
          {
            title: "Input",
            path: "/EngineAPI/Input/Input",
            collapsable: false,
            children: [
              "/EngineAPI/Input/Mouse",
              "/EngineAPI/Input/Keyboard",
              "/EngineAPI/Input/TouchController",
              "/EngineAPI/Input/GamepadController",
            ]
          },
          "/EngineAPI/Prefab",
          "/EngineAPI/Model",
          "/EngineAPI/Skybox",
          "/EngineAPI/TextureArray",
          "/EngineAPI/TileSelection",
          "/EngineAPI/Palette",
          "/EngineAPI/Runtime",
          "/EngineAPI/SceneController",
          "/EngineAPI/Functions",
          "/EngineAPI/Events",
          "/EngineAPI/Tags",
          "/EngineAPI/HitMesh",
          "/EngineAPI/BVH",
          "/EngineAPI/Batching",
          "/EngineAPI/CascadedShadows",
          "/EngineAPI/ShaderPatch",
          {
            title: "Components",
            path: "/EngineAPI/Components/Components",
            collapsable: false,
            children: [
              "/EngineAPI/Components/Components",
              {
                title: "Audio",
                collapsable: false,
                children: [
                  "/EngineAPI/Components/AudioPlayer",
                  "/EngineAPI/Components/AudioPlayer3D",
                  "/EngineAPI/Components/AudioMixer",
                  "/EngineAPI/Components/AudioEffect",
                  "/EngineAPI/Components/AudioDelay",
                  "/EngineAPI/Components/AudioReverb",
                  "/EngineAPI/Components/SoundEnvironment",
                ]
              },
              {
                title: "Combat",
                collapsable: false,
                children: [
                  "/EngineAPI/Components/Character",
                  "/EngineAPI/Components/Weapon",
                  "/EngineAPI/Components/Projectile",
                  "/EngineAPI/Components/HitSpot",
                  "/EngineAPI/Components/SurfaceFXManager",
                ]
              },
              {
                title: "Core",
                collapsable: false,
                children: [
                  "/EngineAPI/Components/Animator",
                  "/EngineAPI/Components/Animator2D",
                  "/EngineAPI/Components/StatsPanel",
                  "/EngineAPI/Components/DirectionalLight",
                  "/EngineAPI/Components/OrbitCamera",
                  "/EngineAPI/Components/Switch",
                  "/EngineAPI/Components/SelfDestroy",
                  "/EngineAPI/Components/Decal",
                ]
              },
              {
                title: "UI",
                collapsable: false,
                children: [
                  "/EngineAPI/Components/UIElement",
                  "/EngineAPI/Components/UIContainer",
                  "/EngineAPI/Components/UIText",
                  "/EngineAPI/Components/UIButton",
                  "/EngineAPI/Components/UIInput",
                  "/EngineAPI/Components/UICheckbox",
                  "/EngineAPI/Components/UISlider",
                  "/EngineAPI/Components/UIDropdown",
                  "/EngineAPI/Components/UISelector",
                  "/EngineAPI/Components/UIProgressBar",
                  "/EngineAPI/Components/UITabs",
                  "/EngineAPI/Components/UIDialog",
                  "/EngineAPI/Components/UIHTML",
                  "/EngineAPI/Components/UIStyle",
                  "/EngineAPI/Components/UISettings",
                  "/EngineAPI/Components/CSS2D",
                  "/EngineAPI/Components/HTMLMeshComponent",
                ]
              },
            ]
          },
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
