module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  refs: {
    react: {
      title: 'React',
      url: 'http://localhost:6007',
    },
    angular: {
      title: 'Angular',
      url: 'http://localhost:6008',
    },
    vue: {
      title: 'Vue',
      url: 'http://localhost:6009',
    },
    vanilla: {
      title: 'Vanilla',
      url: 'http://localhost:6010',
    },
  },
}