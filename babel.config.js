module.exports = api => {
  // https://github.com/cypress-io/cypress/issues/2945
  if (api.cache.using(() => process.env.CYPRESS_ENV) || api.cache.using(() => process.env.CYPRESS_INTERNAL_ENV)) {
    return {}
  }
  return {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
  }
}
