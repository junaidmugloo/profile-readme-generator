"use strict";
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 6204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ groups)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);

const groups = [{
  id: 1,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT,
    path: 'styles.align',
    label: 'Align',
    props: {
      options: [{
        label: 'Center',
        value: 'center'
      }, {
        label: 'Right',
        value: 'right'
      }, {
        label: 'Left',
        value: 'left'
      }]
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT,
    path: 'styles.direction',
    label: 'Direction',
    props: {
      options: [{
        label: 'Row',
        value: 'row'
      }, {
        label: 'Column',
        value: 'column'
      }]
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH,
    path: 'styles.clear',
    label: 'Clear float'
  }]
}];


/***/ }),

/***/ 1456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(977);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1060);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2908);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2905);
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3666);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6204);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7541);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__, components__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_2__, _item__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_0__, components__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_2__, _item__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Layout = () => {
  const forceUpdate = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useForceUpdate */ .NW)();
  const {
    currentSection
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCanvas */ .$P)();
  const selectedStats = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .getDeepObjectProperty */ .yo)(currentSection, 'props.content.graphs');
  const stats = Object.entries(selectedStats);
  const stats_types = stats.map(tech => tech[0]);

  const handleOnReOrder = order => {
    const path = 'content.graphs';
    const value = order.reduce((obj, name) => {
      const finded = stats.find(stat => stat[0] === name);
      obj[finded[0]] = finded[1];
      return obj;
    }, {});
    app__WEBPACK_IMPORTED_MODULE_4__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value
    });
    setTimeout(forceUpdate, 200);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Container */ .W, {
    children: [_fields__WEBPACK_IMPORTED_MODULE_6__/* .groups.map */ .X.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .GroupFields */ .AS, _objectSpread({}, group), group.id)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.AnimatePresence, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.Reorder.Group, {
        axis: "y",
        values: stats_types,
        onReorder: handleOnReOrder,
        children: stats.map(([stats, props]) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_item__WEBPACK_IMPORTED_MODULE_5__/* .Item */ .c, {
          stats: stats,
          isShowing: !!props.show
        }, stats))
      })
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants),
/* harmony export */   "s": () => (/* binding */ animations)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2908);

const variants = (0,utils__WEBPACK_IMPORTED_MODULE_0__/* .createFramerMotionVariants */ .Zk)({
  container: {
    open: {
      y: 0,
      opacity: 1,
      pointerEvents: 'all',
      transition: {
        y: {
          duration: 0.1
        }
      }
    },
    closed: {
      y: 10,
      opacity: 0,
      pointerEvents: 'none',
      transition: {
        duration: false
      }
    }
  },
  icons_container: {
    open: {
      marginTop: 12,
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    },
    closed: {
      marginTop: 0,
      height: 0,
      transition: {
        duration: 0.2,
        delay: 0.1
      }
    }
  }
});
const animations = {
  container: {
    exit: {
      opacity: 0,
      height: 0,
      marginBottom: 0
    }
  }
};


/***/ }),

/***/ 3666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(977);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4857);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2905);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9695);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__, components__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_0__, components__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Item = ({
  stats,
  isShowing
}) => {
  const getQueries = () => new URLSearchParams(window.location.search);

  const dragControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.useDragControls)();

  const handleChangeDisplay = () => {
    const path = `content.graphs.${stats}.show`;
    app__WEBPACK_IMPORTED_MODULE_5__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value: !isShowing
    });
  };

  const handleConfigure = () => {
    const query = getQueries();
    query.set('tab', 'config');
    query.set('stats-tab', stats);
    next_router__WEBPACK_IMPORTED_MODULE_2___default().replace({
      pathname: window.location.pathname,
      query: query.toString()
    }, undefined, {
      shallow: true
    });
  };

  const label = isShowing ? 'Hide' : 'Show';
  const Icon = isShowing ? _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.Eye : _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.EyeOff;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W2, _objectSpread(_objectSpread({
    value: stats,
    variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .variants.container */ .o.container,
    dragListener: false,
    dragControls: dragControls,
    layout: true
  }, _animations__WEBPACK_IMPORTED_MODULE_4__/* .animations.container */ .s.container), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Content */ .VY, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Drag */ .nc, {
        onPointerDown: event => [dragControls.start(event)],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.Menu, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Wrapper */ .im, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Name */ .VG, {
          children: stats
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Actions */ .eX, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u, {
          content: label,
          position: "right",
          variant: "info",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .zx, {
            onClick: handleChangeDisplay,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Icon, {
              size: 16
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u, {
          content: "Configure",
          position: "right",
          variant: "info",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .zx, {
            onClick: handleConfigure,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.Settings, {
              size: 16
            })
          })
        })]
      })]
    })
  }));
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VG": () => (/* binding */ Name),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "eX": () => (/* binding */ Actions),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "nc": () => (/* binding */ Drag),
/* harmony export */   "zx": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.Reorder.Item).withConfig({
  displayName: "styles__Container",
  componentId: "sc-1p9feo7-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:100%;display:flex;flex-direction:column;margin-bottom:", ";user-select:none;&:last-child{margin-bottom:0;}"], theme.spacings.small));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1p9feo7-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:grid;width:100%;grid:'drag main actions' 2rem ' drag main actions' 2rem / 2rem 1fr 4rem;justify-content:start;column-gap:", ";padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;height:6.4rem;"], theme.spacings.medium, theme.spacings.small, theme.border.radius, theme.border.width, theme.colors.border));
const Drag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Drag",
  componentId: "sc-1p9feo7-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["grid-area:drag;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;color:", ";cursor:grab;*{cursor:grab;}&:hover{color:", ";}&:active{cursor:grabbing;*{cursor:grabbing;}}"], theme.colors.text, theme.colors.primary));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1p9feo7-3"
})(["grid-area:main;width:100%;display:flex;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default().strong.withConfig({
  displayName: "styles__Name",
  componentId: "sc-1p9feo7-4"
})(["text-transform:capitalize;margin-right:auto;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Actions",
  componentId: "sc-1p9feo7-5"
})(["grid-area:actions;width:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:end;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1p9feo7-6"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:grid;place-items:center;cursor:pointer;& *{cursor:pointer;}&:hover{color:", ";}"], theme.colors.primary));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-v6sy59-0"
})([""]);

/***/ })

};
;