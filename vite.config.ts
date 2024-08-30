import { crx, ManifestV3Export } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

import manifest from './manifest.json';
import pkg from './package.json';

const extensionManifest = {
  ...manifest,
  name: manifest.name,
  version: pkg.version,
} as ManifestV3Export;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    UnoCSS(),
    crx({
      manifest: extensionManifest as ManifestV3Export,
      contentScripts: {
        injectCss: true,
      },
    }),
  ],
  publicDir: resolve(__dirname, 'public'),
});
