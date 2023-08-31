"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 3061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": () => (/* binding */ Config)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1453);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(490);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Config = () => {
  const {
    0: currentTab,
    1: setCurrentTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('stats');
  const View = _tabs__WEBPACK_IMPORTED_MODULE_3__/* .views */ .t[currentTab];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ, {
      id: "stats-tab",
      tabs: _tabs__WEBPACK_IMPORTED_MODULE_3__/* .tabs */ .e,
      setCurrentTab: setCurrentTab,
      currentTab: currentTab
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .V, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimateSharedLayout, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(View, {})
      })
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1ucw8ho-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:calc(100% + ", ");position:relative;display:flex;flex-direction:column;overflow-y:scroll;padding-right:", ";height:100%;&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.medium, theme.spacings.xsmall, theme.colors.border));

/***/ }),

/***/ 1453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* binding */ tabs),
  "t": () => (/* reexport */ views)
});

// EXTERNAL MODULE: external "@styled-icons/feather"
var feather_ = __webpack_require__(9308);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/config/views/index.ts

const views = {
  languages: dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(125), __webpack_require__.e(406)]).then(__webpack_require__.bind(__webpack_require__, 406)).then(mod => mod.Languages, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\stats\\views\\config\\views\\index.ts -> " + './languages']
    }
  }),
  stats: dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(125), __webpack_require__.e(962)]).then(__webpack_require__.bind(__webpack_require__, 8962)).then(mod => mod.Stats, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\stats\\views\\config\\views\\index.ts -> " + './stats']
    }
  }),
  streak: dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(125), __webpack_require__.e(83)]).then(__webpack_require__.bind(__webpack_require__, 8083)).then(mod => mod.Streak, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\stats\\views\\config\\views\\index.ts -> " + './streak']
    }
  })
};

;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/config/tabs.ts


const tabs = [{
  label: 'Stats',
  icon: feather_.Activity,
  view: 'stats'
}, {
  label: 'Langs',
  icon: feather_.BarChart2,
  view: 'languages'
}, {
  label: 'Streak',
  icon: feather_.TrendingUp,
  view: 'streak'
}];


/***/ })

};
;