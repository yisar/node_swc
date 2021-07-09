const esbuild = require('esbuild')
const { wasmLoader } = require('esbuild-plugin-wasm');
(async () => {
    await esbuild.build({
        entryPoints: ['./pkg/node_swc.js'],
        outdir: './dist/',
        format: 'esm',
        bundle: true,
        sourcemap: false,
        treeShaking: true,
        plugins: [
            wasmLoader()
        ]
    })
})()