# node_swc
swc node binding use wasm

### Build

```shell
$ wasm-pack build # build wasm
$ yarn build # build node
```

### Usage

```js
import { parseSync, printSync } from 'node-swc'

const ast = parseSync(`const a: string = "hello world"`, {
  syntax: 'typescript'
})

const { code } = printSync(ast, {
  minify: true
})
```
### License

MIT Largely inspired by [deno_swc](https://github.com/nestdotland/deno_swc)
