// wasm-deferred:D:\Users\changhaozhao\Desktop\132\node_swc\pkg\node_swc_bg.wasm
var node_swc_bg_default = "./node_swc_bg-4KVNH4LY.wasm";

// pkg/node_swc_bg.js
var heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
var heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var WASM_VECTOR_LEN = 0;
var cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(memory.buffer);
  }
  return cachegetUint8Memory0;
}
var lTextEncoder = typeof TextEncoder === "undefined" ? (0, module.require)("util").TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder("utf-8");
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length);
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127)
      break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
var cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(memory.buffer);
  }
  return cachegetInt32Memory0;
}
var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function parseSync2(s, opts) {
  var ptr0 = passStringToWasm0(s, __wbindgen_malloc, __wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = parseSync(ptr0, len0, addHeapObject(opts));
  return takeObject(ret);
}
function printSync2(s, opts) {
  var ret = printSync(addHeapObject(s), addHeapObject(opts));
  return takeObject(ret);
}
function transformSync2(s, opts) {
  var ptr0 = passStringToWasm0(s, __wbindgen_malloc, __wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = transformSync(ptr0, len0, addHeapObject(opts));
  return takeObject(ret);
}
var __wbg_new_59cb74e423758ede = function() {
  var ret = new Error();
  return addHeapObject(ret);
};
var __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
  var ret = getObject(arg1).stack;
  var ptr0 = passStringToWasm0(ret, __wbindgen_malloc, __wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};
var __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
  try {
    console.error(getStringFromWasm0(arg0, arg1));
  } finally {
    __wbindgen_free(arg0, arg1);
  }
};
var __wbindgen_object_drop_ref = function(arg0) {
  takeObject(arg0);
};
var __wbindgen_json_serialize = function(arg0, arg1) {
  const obj = getObject(arg1);
  var ret = JSON.stringify(obj === void 0 ? null : obj);
  var ptr0 = passStringToWasm0(ret, __wbindgen_malloc, __wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};
var __wbindgen_string_new = function(arg0, arg1) {
  var ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
};
var __wbindgen_json_parse = function(arg0, arg1) {
  var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};
var __wbindgen_rethrow = function(arg0) {
  throw takeObject(arg0);
};

// wasm-module:D:\Users\changhaozhao\Desktop\132\node_swc\pkg\node_swc_bg.wasm
var imports = {
  ["./node_swc_bg.js"]: {
    __wbg_new_59cb74e423758ede,
    __wbg_stack_558ba5917b466edd,
    __wbg_error_4bb6c2a97407129a,
    __wbindgen_object_drop_ref,
    __wbindgen_json_serialize,
    __wbindgen_string_new,
    __wbindgen_json_parse,
    __wbindgen_rethrow
  }
};
async function loadWasm(module3, imports2) {
  if (typeof module3 === "string") {
    const moduleRequest = await fetch(module3);
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(moduleRequest, imports2);
      } catch (e) {
        if (moduleRequest.headers.get("Content-Type") != "application/wasm") {
          console.warn(e);
        } else {
          throw e;
        }
      }
    }
    module3 = await moduleRequest.arrayBuffer();
  }
  return await WebAssembly.instantiate(module3, imports2);
}
var { instance, module: module2 } = await loadWasm(node_swc_bg_default, imports);
var memory = instance.exports.memory;
var parseSync = instance.exports.parseSync;
var printSync = instance.exports.printSync;
var transformSync = instance.exports.transformSync;
var __wbindgen_malloc = instance.exports.__wbindgen_malloc;
var __wbindgen_realloc = instance.exports.__wbindgen_realloc;
var __wbindgen_free = instance.exports.__wbindgen_free;
export {
  __wbg_error_4bb6c2a97407129a,
  __wbg_new_59cb74e423758ede,
  __wbg_stack_558ba5917b466edd,
  __wbindgen_json_parse,
  __wbindgen_json_serialize,
  __wbindgen_object_drop_ref,
  __wbindgen_rethrow,
  __wbindgen_string_new,
  parseSync2 as parseSync,
  printSync2 as printSync,
  transformSync2 as transformSync
};
