import { parseSync, printSync, transformSync } from './pkg/node_swc.mjs'

const ast = parseSync(`const x: string = "hello world"`, {
    syntax: "typescript"
})
console.log(ast)