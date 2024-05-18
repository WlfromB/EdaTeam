const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    'edateam.main': '/edateam',
    'edateam.recipe': '/recipe/recipeId',
    'edateam.user': '/user/userId'
  },
  features: {
    'edateam': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'edateam.api': '/api'
  }
}
