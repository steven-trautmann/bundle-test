const config = {
  transpileDependencies: ['vuetify'],

  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 200000
      }
    }
  },
  productionSourceMap: false
}

module.exports = config
