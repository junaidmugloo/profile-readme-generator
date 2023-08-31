"use strict";
exports.id = 83;
exports.ids = [83];
exports.modules = {

/***/ 3725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ groups)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9125);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7742);


const groups = [{
  id: 1,
  fields: [(0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .showField */ .LV)('streak'), {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SELECT,
    path: 'content.graphs.streak.date_format',
    label: 'Date format',
    props: {
      column: '1 / 3',
      options: [{
        label: 'Default',
        value: ''
      }, {
        label: 'Aug 10, 2016',
        value: 'M j[, Y]'
      }, {
        label: '10 Aug 2016',
        value: 'j M[ Y]'
      }, {
        label: '2016 Aug 10',
        value: '[Y ]M j'
      }, {
        label: '10/8/2016',
        value: 'j/n[/Y]'
      }, {
        label: '8/10/2016',
        value: 'n/j[/Y]'
      }, {
        label: '2016.8.10',
        value: '[Y.]n.j'
      }]
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SELECT,
    path: 'content.graphs.streak.mode',
    label: 'Streak Mode',
    props: {
      column: '1 / 3',
      options: [{
        label: 'Daily',
        value: 'daily'
      }, {
        label: 'Weekly',
        value: 'weekly'
      }]
    }
  }, (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .localeField */ .nm)('streak')]
}, {
  id: 3,
  label: 'Layout',
  columns: 2,
  fields: [(0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .themeField */ .Hg)('streak'), {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.TEXT,
    path: `content.graphs.streak.border_radius`,
    label: 'Border radius',
    props: {
      type: 'number',
      min: 0
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.TEXT,
    path: 'content.graphs.streak.height',
    label: 'Height',
    props: {
      type: 'number',
      min: 0
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: `content.graphs.streak.hide_border`,
    label: 'Hide border',
    props: {
      direction: 'column'
    }
  }]
}];


/***/ }),

/***/ 8083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Streak": () => (/* binding */ Streak)
/* harmony export */ });
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(977);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3725);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_0__]);
components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Streak = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: _fields__WEBPACK_IMPORTED_MODULE_1__/* .groups.map */ .X.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(components__WEBPACK_IMPORTED_MODULE_0__/* .GroupFields */ .AS, _objectSpread({}, group), group.id))
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;