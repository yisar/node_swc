# node_swc
swc node binding use wasm

### build

```shell
$ wasm-pack build # build wasm
$ yarn build # build node
```

### Usage

```js
import {parseSync, printSync} from 'node-swc'

const ast = parseSync(`const a: string = "hello world"`, {
  syntax: 'typescript'
})

const { code } = printSync(ast, {
  minify: true
})
```
