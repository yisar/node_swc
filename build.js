const esbuild = require('esbuild')

esbuild.build({
    entryPoints: ['./pkg/node_swc.js'],
    outdir: './dist/',
    format: 'cjs',
    bundle: true,
    sourcemap: false,
    treeShaking: true,
    plugins: [
        wasmLoader()
    ]
})