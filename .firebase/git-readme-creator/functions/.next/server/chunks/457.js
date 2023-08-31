"use strict";
exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 8457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TextSection": () => (/* binding */ TextSection)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/sections/text/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1q0qjfq-0"
})(["display:flex;"]);
const textModifiers = {
  borderbottom: theme => (0,external_styled_components_.css)(["border-bottom-width:", ";border-bottom-color:", ";border-bottom-style:solid;padding-bottom:", ";"], theme.border.width, theme.colors.border, theme.spacings.xsmall),
  h1: () => (0,external_styled_components_.css)(["font-size:3.2rem;"]),
  h2: () => (0,external_styled_components_.css)(["font-size:2.4rem;"]),
  h3: () => (0,external_styled_components_.css)(["font-size:2rem;"]),
  h4: () => (0,external_styled_components_.css)(["font-size:1.6rem;"]),
  h5: () => (0,external_styled_components_.css)(["font-size:1.4rem;"]),
  h6: () => (0,external_styled_components_.css)(["font-size:1.36rem;"]),
  p: () => (0,external_styled_components_.css)(["font-size:1.6rem;"])
};
const Text = external_styled_components_default().p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1q0qjfq-1"
})(["", ""], ({
  theme,
  as = 'h1',
  align = 'center'
}) => (0,external_styled_components_.css)(["width:100%;text-align:", ";white-space:pre-line;", ";", ""], align, textModifiers[as], ['h1', 'h2'].includes(as) && textModifiers.borderbottom(theme)));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/sections/text/index.tsx
const _excluded = ["text"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const TextSection = ({
  content,
  styles
}) => {
  const {
    text
  } = content,
        rest = _objectWithoutProperties(content, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Text, _objectSpread(_objectSpread(_objectSpread({}, rest), styles), {}, {
      children: text.trim()
    }))
  });
};



/***/ })

};
;