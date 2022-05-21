import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {crx} from '@crxjs/vite-plugin'
// @ts-ignore
import manifest from './src/manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), crx({manifest})]
})
