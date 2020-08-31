use wasm_bindgen::prelude::*;
extern crate whatlang;
use whatlang::detect;

#[wasm_bindgen]
pub fn determine_language(text: &str) -> String {
  const DELIMITER: &str = "-:::-";
  let detection_info = detect(text).unwrap();
  let info = detection_info.lang().eng_name().to_string() + DELIMITER + &detection_info.confidence().to_string() + DELIMITER + &detection_info.is_reliable().to_string();
  // need to return splittable string as Web Assembly doesn't support returning tuples
  return info;
}