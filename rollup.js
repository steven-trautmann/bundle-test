const { resolve } = require("path");
const { rollup } = require("rollup");
const vue = require("rollup-plugin-vue");
const postcss = require("rollup-plugin-postcss");
const vuetify = require("rollup-plugin-vuetify");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const buble = require('@rollup/plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const includePaths = require('rollup-plugin-includepaths');
const url = require('rollup-plugin-url');
const alias = require('@rollup/plugin-alias');
const path = require('path');

const projectRoot = path.resolve(__dirname)

const pkg =  require('./package.json');

const build = async () => {
  try {
    const bundle = await rollup({
      input: resolve(__dirname, "src/index.js"),
      external: ["vue", "vuetify/lib", "axios", "vuetify"],
      output: {
        name: pkg.name,
        exports: 'named',
        globals: {
          'axios': 'axios',
          'vue': 'Vue',
          'vuetify': 'vuetify'
        }
      },
      plugins: [
        url(),
        nodeResolve(),
        vue({
          css: true, // Dynamically inject css as a <style> tag
          compileTemplate: true, // Explicitly convert template to render function
        }),
        // includePaths(includePathOptions),
        includePaths({
          paths: ['src/components/', 'src/views/'],
          extensions: ['.js', '.vue']
        }),
        alias({
          resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
          entries: [
            { find: '@', replacement: path.resolve(projectRoot, 'src') },
          ]
        }),
        includePaths({
          paths: ['src/components/', 'src/mixins/', 'src/utilities/'],
          extensions: ['.js', '.vue']
        }),
        commonjs(),
        postcss(),
        buble(),

        vuetify(),
      ],
    });

    bundle.write({
      format: "esm",
      file: "dist/bundle.js",
      sourcemap: 'inline',
    });
  } catch (e) {
    console.error(e);
  }
};

build();