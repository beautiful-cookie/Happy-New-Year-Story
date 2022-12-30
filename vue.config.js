const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  publicPath: '/shards-of-our-memories/', 
  chainWebpack: config => { config.plugin('html').tap(args => { args[0].title = 'Memory shards'; return args; }); }
})
