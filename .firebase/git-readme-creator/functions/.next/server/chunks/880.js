"use strict";
exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 3880:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsEditPanel": () => (/* binding */ StatsEditPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8658);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4946);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_2__]);
components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const StatsEditPanel = () => {
  const {
    0: currentTab,
    1: setCurrentTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('layout');
  const View = _tabs__WEBPACK_IMPORTED_MODULE_3__/* .views */ .t[currentTab] ?? (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      const query = new URLSearchParams(window.location.search);
      query.delete('tab');
      query.delete('stats-tab');
      next_router__WEBPACK_IMPORTED_MODULE_1___default().replace({
        pathname: window.location.pathname,
        query: query.toString()
      }, undefined, {
        shallow: true
      });
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ, {
      tabs: _tabs__WEBPACK_IMPORTED_MODULE_3__/* .tabs */ .e,
      setCurrentTab: setCurrentTab,
      currentTab: currentTab
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(View, {})]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-8qbo5o-0"
})(["height:100%;display:flex;flex-direction:column;"]);

/***/ }),

/***/ 8658:
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
;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/index.ts

const views = {
  layout: dynamic_default()(() => __webpack_require__.e(/* import() */ 456).then(__webpack_require__.bind(__webpack_require__, 1456)).then(mod => mod.Layout, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\stats\\views\\index.ts -> " + './layout']
    }
  }),
  config: dynamic_default()(() => __webpack_require__.e(/* import() */ 61).then(__webpack_require__.bind(__webpack_require__, 3061)).then(mod => mod.Config, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\stats\\views\\index.ts -> " + './config']
    }
  })
};

;// CONCATENATED MODULE: ./src/components/panels/editing/stats/tabs.ts


const tabs = [{
  label: 'Layout',
  icon: feather_.Layout,
  view: 'layout'
}, {
  label: 'Config Stats',
  icon: feather_.Settings,
  view: 'config'
}];


/***/ })

};
;