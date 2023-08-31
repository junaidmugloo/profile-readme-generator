"use strict";
exports.id = 843;
exports.ids = [843];
exports.modules = {

/***/ 843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MusicSection": () => (/* binding */ MusicSection)
});

// EXTERNAL MODULE: ./src/utils/index.ts + 14 modules
var utils = __webpack_require__(2908);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/sections/music/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-hokv0b-0"
})(["", " img{max-width:100%;}"], ({
  theme,
  align = 'center'
}) => (0,external_styled_components_.css)(["display:flex;justify-content:", ";gap:", ";"], align, theme.spacings.small));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/sections/music/index.tsx
const _excluded = ["type"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ALTS = {
  recently: 'Spotify recently played',
  currently: 'Widget with the current Spotify song'
};

const MusicSection = ({
  content,
  styles
}) => {
  const {
    type
  } = content,
        rest = _objectWithoutProperties(content, _excluded);

  const {
    spotifyAccountUrl,
    imageUrl
  } = (0,utils/* getMusicUrl */.WL)(type, rest[type]);
  const alt = ALTS[type];

  const Wrapper = ({
    children
  }) => spotifyAccountUrl ? /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: spotifyAccountUrl,
    children: children
  }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: children
  });

  return /*#__PURE__*/jsx_runtime_.jsx(Container, _objectSpread(_objectSpread({}, styles), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: imageUrl,
        alt: alt
      })
    })
  }));
};



/***/ })

};
;