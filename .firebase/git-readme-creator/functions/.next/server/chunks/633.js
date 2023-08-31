"use strict";
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PanelNewSection": () => (/* binding */ PanelNewSection)
});

// EXTERNAL MODULE: external "@styled-icons/feather"
var feather_ = __webpack_require__(9308);
// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
;// CONCATENATED MODULE: ./src/components/panels/new-section/contents.ts



const contents = [{
  icon: feather_.FileText,
  onClick: () => app/* events.panel.open */.U.panel.open('right', types.PanelsEnum.TEMPLATES),
  name: 'Templates'
}, {
  icon: feather_.Type,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.TEXT),
  name: 'Text'
}, {
  icon: feather_.PieChart,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.STATS),
  name: 'Stats'
}, {
  icon: feather_.Share2,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.TECHS),
  name: 'Techs'
}, {
  icon: feather_.Github,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.PROFILE_VIEWS),
  name: 'Profile views'
}, {
  icon: feather_.Image,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.IMAGE),
  name: 'Image'
}, {
  icon: feather_.MessageSquare,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.SOCIALS),
  name: 'Social media'
}, {
  icon: feather_.Activity,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.SNAKE),
  name: 'Snake'
}, {
  icon: feather_.Star,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.ACTIVITIES),
  name: 'My activities'
}, {
  icon: feather_.Music,
  onClick: () => app/* events.canvas.add */.U.canvas.add(types.Sections.MUSIC),
  name: 'Music'
}];

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/panels/new-section/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1nkccfx-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:grid;grid-template-columns:repeat(2,1fr);gap:", ";overflow-y:scroll;align-items:start;align-content:start;height:100%;width:calc(100% + ", ");padding-right:", ";&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.medium, theme.spacings.medium, theme.spacings.xsmall, theme.colors.border));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1nkccfx-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["position:relative;width:100%;border-radius:", ";border-width:", ";color:", ";border-style:solid;padding-top:100%;transition:0.3s;& *{transition:0.3s;cursor:pointer;color:", ";user-select:none;}&:hover,&:hover *{color:", ";}"], theme.border.radius, theme.border.width, theme.colors.border, theme.colors.text, theme.colors.primary));
const Block = external_styled_components_default().div.withConfig({
  displayName: "styles__Block",
  componentId: "sc-1nkccfx-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;text-align:center;inset:0;gap:", ";"], theme.spacings.xsmall));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/panels/new-section/index.tsx
const _excluded = ["icon", "name"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const PanelNewSection = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: contents.map(_ref => {
      let {
        icon: Icon,
        name
      } = _ref,
          rest = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, _objectSpread(_objectSpread({}, rest), {}, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Block, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
            size: 48
          }), name]
        })
      }), name);
    })
  });
};



/***/ })

};
;