"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 7992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ groups)
/* harmony export */ });
/* harmony import */ var resources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9903);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7742);


const colorOptions = [{
  value: '',
  label: 'default'
}].concat(Object.keys(resources__WEBPACK_IMPORTED_MODULE_0__/* .color_names */ .Hk).map(name => ({
  value: name,
  label: name
})));
const groups = [{
  id: 1,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SELECT,
    path: 'content.type',
    label: 'Format',
    props: {
      options: [{
        label: 'Default',
        value: 'default'
      }, {
        label: 'Badge',
        value: 'badge'
      }]
    }
  }]
}, {
  id: 2,
  label: 'Layout',
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SELECT,
    path: 'styles.align',
    label: 'Align',
    props: {
      options: [{
        label: 'Right',
        value: 'right'
      }, {
        label: 'Center',
        value: 'center'
      }, {
        label: 'Left',
        value: 'left'
      }]
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SWITCH,
    path: 'styles.clear',
    label: 'Clear float'
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SELECT,
    path: 'styles.float',
    label: 'Float',
    props: {
      options: [{
        label: 'None',
        value: 'none'
      }, {
        label: 'Right',
        value: 'right'
      }, {
        label: 'Left',
        value: 'left'
      }]
    }
  }]
}, {
  id: 3,
  label: 'Badge customizations',
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.TEXT,
    path: 'content.props.left_text',
    label: 'Custom text',
    props: {}
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SELECT,
    path: 'content.props.left_color',
    label: 'Left color',
    props: {
      options: colorOptions
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_1__.Inputs.SELECT,
    path: 'content.props.right_color',
    label: 'Right color',
    props: {
      options: colorOptions
    }
  }],
  conditions: {
    path: 'props.content.type',
    be: 'equal',
    value: 'badge'
  }
}];


/***/ }),

/***/ 4176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileViewsPanel": () => (/* binding */ ProfileViewsPanel)
/* harmony export */ });
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(977);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7992);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1663);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_0__]);
components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ProfileViewsPanel = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
    children: _fields__WEBPACK_IMPORTED_MODULE_1__/* .groups.map */ .X.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components__WEBPACK_IMPORTED_MODULE_0__/* .GroupFields */ .AS, _objectSpread({}, group), group.id))
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1exe1h6-0"
})([""]);

/***/ })

};
;