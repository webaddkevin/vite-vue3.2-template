import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
// import vitePluginCompression from "vite-plugin-compression";

/**
 * 转化为绝对路径
 * @param p 地址
 * @returns
 */
function resolve(p: string): string {
  return path.resolve(__dirname, p);
}

const port = 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
    /**
     * 开启压缩资源打包
     */
    // vitePluginCompression({
    //   threshold: 1024 * 10
    // })
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      assets: resolve('src/assets'),
      api: resolve('src/api'),
      components: resolve('src/components'),
      views: resolve('src/views'),
      plugins: resolve('src/plugins'),
      utils: resolve('src/utils'),
      store: resolve('src/store'),
    },
  },
  server: {
    port,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://xhx.xstable.kaikela.cn/',
        ws: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
