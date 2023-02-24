import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'sry`s blog',
  description: '个人blog，以电子书格式整理相关知识',

  head: [
    // 定义网站图标，地址栏显示的
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/images/icons/favicon.ico` }],
    ['meta', { name: 'application-name', content: 'sry`s blog' }],
    // ['meta', { name: 'apple-mobile-web-app-title', content: 'sry1201`s blog4' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // 默认主题配置
  theme: defaultTheme({
    // 导航栏楼logo显示
    logo: '/images/favicon.png',
    // // 项目github地址 TODO
    repo: 'vuepress/vuepress-next',
    // 文档根目录
    docsDir: 'docs',
    // 导航栏配置。
    navbar: [
      // {
      //   text: '首页',
      //   link: '/',
      // },

      {
        text: '深入',
        children: [
          '/java/b.md',
          {
            text: 'a.md别名',
            link: '/java/a.md',
          },
        ],
      },
      {
        text: '友链',
        children: [
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
        ],
      },
    ],

    // 侧边栏
    sidebar: {
      '/java/': [
        {
          text: 'java',
          // 侧边栏是否可以折叠
          collapsible: true,
          children: [
            '/java/README.md',
            '/java/a.md',
            '/java/b.md',
          ],
        },
      ],
      '/html/': [
        {
          text: '深入',
          children: [
            '/zh/advanced/architecture.md',
            '/zh/advanced/plugin.md',
            '/zh/advanced/theme.md',
          ],
        },
        {
          text: 'Cookbook',
          children: [
            '/zh/advanced/cookbook/README.md',
            '/zh/advanced/cookbook/usage-of-client-config.md',
            '/zh/advanced/cookbook/adding-extra-pages.md',
            '/zh/advanced/cookbook/making-a-theme-extendable.md',
            '/zh/advanced/cookbook/passing-data-to-client-code.md',
            '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
          ],
        },
      ]
    },

    //部分功能悬浮的提示语（默认是英文的提示语）
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // 404 page 页面提示语，随机抽取
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏',
  }),

})

