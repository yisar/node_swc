mod utils;
use once_cell::sync::Lazy;

use wasm_bindgen::prelude::*;

use swc::{
    config::{Options, ParseOptions, SourceMapsConfig},
    Compiler,
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen(js_name = "parseSync")]
pub fn parse_sync(s: &str, opts: JsValue) -> Result<JsValue, JsValue> {
    console_error_panic_hook::set_once();

    let opts: ParseOptions = opts
        .into_serde()
        .map_err(|err| format!("failed to parse swc options: {}", err))?;

    let (c, errors) = compiler();

    let fm = c.cm.new_source_file(FileName::Anon, s.into());
    let program = c
        .parse_js(fm, opts.target, opts.syntax, opts.is_module, opts.comments)
        .map_err(|err| format!("failed to parse: {}\n{}", err, errors))?;

    Ok(JsValue::from_serde(&program).map_err(|err| format!("failed to return value: {}", err))?)
}

fn compiler() -> (Compiler, BufferedError) {
    let cm = codemap();

    let (handler, errors) = new_handler(cm.clone());

    let c = Compiler::new(cm.clone(), handler);

    (c, errors)
}

fn codemap() -> Arc<SourceMap> {
    static CM: Lazy<Arc<SourceMap>> =
        Lazy::new(|| Arc::new(SourceMap::new(FilePathMapping::empty())));

    CM.clone()
}