import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';

const isProd = process.env.NODE_ENV === 'production';

export default {
  input: { 'index': 'src/client/index.tsx'},
  output: {
    dir: './rollup',
    format: 'iife',
    interop: true,
    sourcemap: false
  },
  inlineDynamicImports: true,
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: /node_modules/,
      extensions: ['.ts', '.tsx', 'jsx'],
      presets: [
        ['@babel/preset-env', {
          modules: false,
          targets: {
            browsers: "> 0.5%, ie >= 11"
          },
          useBuiltIns: "usage",
          corejs: 3,
        }],
        '@babel/preset-react',
        '@babel/preset-typescript'
      ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    }),
    html(),
    url({
      limit: 0,
      include: [
        "**/*.jpg",
        "**/*.jpeg"
      ],
    }),
  ],
};
