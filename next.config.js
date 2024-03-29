const path = require('path')

module.exports = {
  i18n: {
    locales: ['en', 'es', 'de'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config
  }
}
