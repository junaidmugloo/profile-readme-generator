"use strict";
exports.id = 504;
exports.ids = [504];
exports.modules = {

/***/ 5504:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsSection": () => (/* binding */ StatsSection)
/* harmony export */ });
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1060);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2908);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1500);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_guard__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_1__]);
([_guard__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["height", "show"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const StatsSection = ({
  id,
  content,
  styles: containerStyles
}) => {
  const {
    settings
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSettings */ .rV)();
  const {
    graphs
  } = content;
  const {
    github
  } = settings.user;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_guard__WEBPACK_IMPORTED_MODULE_0__/* .GuardSection */ .M, {
    sectionId: id,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, _objectSpread(_objectSpread({}, containerStyles), {}, {
      children: Object.entries(graphs).map(([graph, props]) => {
        const url = (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .getStatsUrl */ .rs)(graph, github);

        const _props = _objectSpread({}, props),
              {
          height = '',
          show = false
        } = _props,
              rest = _objectWithoutProperties(_props, _excluded);

        if (!graph || !show) return null;
        const fullUrl = `${url}&${(0,utils__WEBPACK_IMPORTED_MODULE_2__/* .objectToQueryParams */ ._A)(rest)}`;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
          height: height || 150,
          src: fullUrl,
          alt: `${graph} graph`
        }, graph);
      })
    }))
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1yygg0c-0"
})(["", ""], ({
  theme,
  align = 'center',
  direction = 'row'
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;flex-wrap:wrap;justify-content:", ";flex-direction:", ";gap:", ";img{max-width:100%;}"], align, direction, theme.spacings.xsmall));

/***/ })

};
;