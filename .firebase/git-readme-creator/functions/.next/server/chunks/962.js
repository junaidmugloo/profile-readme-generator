"use strict";
exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 9423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ groups)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9125);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7742);


const groups = [{
  id: 1,
  fields: [(0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .showField */ .LV)('stats'), (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .customTitleField */ .MN)('stats'), (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .localeField */ .nm)('stats')]
}, {
  id: 2,
  label: 'Layout',
  columns: 2,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: 'content.graphs.stats.show_icons',
    label: 'Show icons',
    props: {
      direction: 'column'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: 'content.graphs.stats.hide_rank',
    label: 'Hide rank',
    props: {
      direction: 'column'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: 'content.graphs.stats.hide_title',
    label: 'Hide title',
    props: {
      direction: 'column'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: `content.graphs.stats.hide_border`,
    label: 'Hide border',
    props: {
      direction: 'column'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: 'content.graphs.stats.disable_animations',
    label: 'Disable animations',
    props: {
      direction: 'column'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.TEXT,
    path: 'content.graphs.stats.height',
    label: 'Height',
    props: {
      type: 'number',
      min: 0
    }
  }, (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .themeField */ .Hg)('stats')]
}, {
  id: 4,
  label: 'Commits',
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: 'content.graphs.stats.include_all_commits',
    label: 'Include all the time',
    props: {}
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: 'content.graphs.stats.count_private',
    label: 'Include privates',
    props: {}
  }]
}];


/***/ }),

/***/ 8962:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stats": () => (/* binding */ Stats)
/* harmony export */ });
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(977);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9423);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_0__]);
components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Stats = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: _fields__WEBPACK_IMPORTED_MODULE_1__/* .groups.map */ .X.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(components__WEBPACK_IMPORTED_MODULE_0__/* .GroupFields */ .AS, _objectSpread({}, group), group.id))
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;