const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  css: {
    loaderOptions: {
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/styles/_variables.scss";`
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/*.scss')
      ]
    }
  },
  configureWebpack: config => {

    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      // 'highlight.js': 'highlight.js'
    };

    if (process.env.NODE_ENV === 'production') {
      config.mode = "production";
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              warnings: false,
              drop_console: true, // console
              pure_funcs: ['window.console', 'window.console.log', 'console.log'] // 移除console
            },
            cache: true,
            parallel: true,
            sourceMap: true,
          },
        }),
        new OptimizeCSSPlugin({})
      ];
      
      config.optimization.splitChunks = {
        chunks: 'async',
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
            default: {
                priority: -20,
                reuseExistingChunk: true,
            },
            vendors: {
                name: 'vendors',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                chunks: "all"
            }
          }
      };

      config.plugins.push(new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(js|css)$'),
          threshold: 10240,
          minRatio: 0.8
        })
      )
    } else {
      config.mode = "development";
    }
  },
  chainWebpack: config => {
    const cdn = {
      css: [
        // "//unpkg.com/element-ui/lib/theme-chalk/index.css",
        // "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.17.1/build/styles/default.min.css"
      ],
      js: [
        "//unpkg.com/vue@2.6.10/dist/vue.min.js", 
        "//unpkg.com/vue-router@3.1.3/dist/vue-router.min.js",
        "//unpkg.com/vuex@3.1.2/dist/vuex.min.js",
        "//unpkg.com/axios@0.19.0/dist/axios.min.js",
        // "//unpkg.com/element-ui@2.13.0/lib/index.js",
        // "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.17.1/build/highlight.min.js"
      ]
    };

    config.plugin("html").tap(args => {
      args[0].cdn = cdn;
      return args;
    });
  }
}
