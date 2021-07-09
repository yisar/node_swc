# node_swc
swc node binding use wasm

### Build

Make sure you have rust wasm-pack installed.

```shell
$ yarn build # build wasm, node
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

MIT
