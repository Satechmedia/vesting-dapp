const path = require('path')


module.exports = {
  sassOptions: {
    additionalData: `@import '~src/scss/index.scss';`,
    includePaths: [
      path.join(__dirname, 'styles'),
    ],
  },

  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },

  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
}
