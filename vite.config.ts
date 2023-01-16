import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import * as path from 'path'
import * as fs from 'fs'

function foundryConfig(systemId) {
  const configPath = path.resolve(process.cwd(), 'foundryconfig.json');
  let config = JSON.parse(fs.readFileSync(configPath, { encoding: "utf8"}));
  let foundryPath = path.join(config.path, "systems", systemId)
  return foundryPath
}

export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const manifest =  JSON.parse(fs.readFileSync("./src/system.json", { encoding: "utf8"}));
  const env = loadEnv(mode, process.cwd(), '');
  const systemPath = foundryConfig(manifest.id);
  console.log("Foundry Path: " + systemPath)
  return {
    plugins: [svelte(),
      viteStaticCopy({
        targets: [ 
          { src: 'src/system.json', dest: systemPath },
          { src: 'src/template.json', dest: systemPath },
          { src: 'src/lang/**', dest: `${systemPath}\\lang`},
          { src: 'src/assets/**', dest: `${systemPath}\\assets`},
          { src: 'src/templates/**', dest: `${systemPath}\\templates`},
          { src: 'dist/**', dest: systemPath },
        ]
      })
    ],
    build: {
      minify: "terser",
      sourcemap: "inline",
      lib: {"entry":"src/module/main.ts","formats":["iife", "es"],
      name: "app", fileName: `${manifest.id}`,
      watch: {
        buildDelay: 5000
      }
    }
  }
}});