module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    '@storybook/addon-storysource'
  ],
  refs: {
    react: {
      title: 'React',
      url: 'http://localhost:6011',
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