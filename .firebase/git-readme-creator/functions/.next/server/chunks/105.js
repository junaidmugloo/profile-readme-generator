"use strict";
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 4105:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnakeSection": () => (/* binding */ SnakeSection)
/* harmony export */ });
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1287);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9600);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_guard__WEBPACK_IMPORTED_MODULE_0__]);
_guard__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SnakeSection = ({
  id
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_guard__WEBPACK_IMPORTED_MODULE_0__/* .GuardSection */ .M, {
    sectionId: id,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
        src: "/assets/snake.svg",
        alt: "An animation of snake eating the github user contribuitions (like snake game)"
      })
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image),
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-394ax3-0"
})(["display:grid;place-items:center;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-394ax3-1"
})(["width:100%;"]);

/***/ })

};
;