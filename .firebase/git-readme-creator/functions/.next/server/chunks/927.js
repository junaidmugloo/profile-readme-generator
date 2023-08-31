"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 8927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TechsSection": () => (/* binding */ TechsSection)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/sections/techs/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-3rcit3-0"
})(["", ""], ({
  align = 'center',
  spacing
}) => (0,external_styled_components_.css)(["display:flex;flex-wrap:wrap;justify-content:", ";gap:", "px;"], align, spacing));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/sections/techs/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const TechsSection = ({
  content,
  styles: containerStyles
}) => {
  const {
    icons,
    styles
  } = content;
  const {
    height
  } = styles;
  return /*#__PURE__*/jsx_runtime_.jsx(Container, _objectSpread(_objectSpread({}, containerStyles), {}, {
    children: Object.entries(icons).map(([name, {
      currentProvider,
      providers,
      config
    }]) => {
      var _config$currentProvid;

      const provider = providers[currentProvider];
      const path = provider !== null && provider !== void 0 && provider.variants ? provider === null || provider === void 0 ? void 0 : provider.variants[((_config$currentProvid = config[currentProvider]) === null || _config$currentProvid === void 0 ? void 0 : _config$currentProvid.variant) ?? 0] : provider.path;
      return /*#__PURE__*/jsx_runtime_.jsx("img", {
        height: height,
        alt: `${name} logo`,
        src: path
      }, name);
    })
  }));
};



/***/ })

};
;