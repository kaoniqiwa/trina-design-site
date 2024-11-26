import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import md from './plugin/md'
import docs from './plugin/docs'

// 返回绝对路径
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      mergeProps: false,
      enableObjectSlots: false,
    }),
    docs(),
    md(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  resolve: {
    alias: [
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js',
      },
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
      // 在 vite 中可以不用配置types的别名，因为 types中都是类型声明文件，打包中被 tree-shaking 掉了
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
      {
        find: /#\//,
        replacement: pathResolve('types') + '/',
      },
      {
        find: /\$\//,
        replacement: pathResolve('plugin') + '/',
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    host: true,
    port: 3100,
  },
  css: {},
})
