"use strict";
exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 9787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileViewsSection": () => (/* binding */ ProfileViewsSection)
/* harmony export */ });
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1060);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2908);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_guard__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_1__]);
([_guard__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ProfileViewsSection = ({
  id,
  content,
  styles
}) => {
  const {
    settings
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_1__/* .useSettings */ .rV)();
  const {
    type,
    props
  } = content;
  const {
    github = ''
  } = settings.user;
  const url = (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .getProfileViewsUrl */ .vu)(type, github);
  const fullUrl = `${url}${(0,utils__WEBPACK_IMPORTED_MODULE_2__/* .objectToQueryParams */ ._A)(props)}`;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_guard__WEBPACK_IMPORTED_MODULE_0__/* .GuardSection */ .M, {
    sectionId: id,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, _objectSpread(_objectSpread({}, styles), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
        src: fullUrl,
        alt: "Profile views count"
      })
    }))
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1lrf8lb-0"
})(["", ""], ({
  theme,
  align = 'center'
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;flex-wrap:wrap;justify-content:", ";gap:", ";"], align, theme.spacings.small));

/***/ })

};
;