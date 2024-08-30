import { presetWind } from '@unocss/preset-wind';
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from 'unocss';

export function createConfig() {
  return defineConfig({
    envMode: 'build',
    presets: [presetAttributify({ strict: true }), presetUno(), presetWind()],
    transformers: [transformerDirectives()],
    rules: [
      ['text-center', { 'text-align': 'center' }],
      ['text-right', { 'text-align': 'right' }],
      ['text-left', { 'text-align': 'left' }],
    ],
    shortcuts: [
      {
        'flex-center': 'flex items-center justify-center',
        'flex-items-center': 'flex items-center',
      },
    ],
  });
}

export default createConfig();
