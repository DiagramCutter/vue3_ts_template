import path from 'path'
import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.VITE_APP_AXIOS_BASEURL)

  return {
    plugins: [
      vue(),
      Components({
        resolvers: [AntDesignVueResolver()]
      }),
      viteMockServe({
        mockPath: './src/mock/',
        localEnabled: true
      })
    ],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      host: '127.0.0.1',
      port: 5170,
      hmr: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_AXIOS_BASEURL,
          changeOrigin: true,
          followRedirects: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
