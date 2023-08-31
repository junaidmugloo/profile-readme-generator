"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 3996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechsEditPanel": () => (/* binding */ TechsEditPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(977);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6603);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2802);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__, _tabs__WEBPACK_IMPORTED_MODULE_2__]);
([components__WEBPACK_IMPORTED_MODULE_1__, _tabs__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const TechsEditPanel = () => {
  const {
    0: currentTab,
    1: setCurrentTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('adding');
  const View = _tabs__WEBPACK_IMPORTED_MODULE_2__/* .views */ .t[currentTab];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Tabs */ .mQ, {
      tabs: _tabs__WEBPACK_IMPORTED_MODULE_2__/* .tabs */ .e,
      currentTab: currentTab,
      setCurrentTab: setCurrentTab
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(View, {})]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-quwy56-0"
})(["height:100%;display:flex;flex-direction:column;"]);

/***/ }),

/***/ 6603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ tabs),
/* harmony export */   "t": () => (/* reexport safe */ _views__WEBPACK_IMPORTED_MODULE_1__.t)
/* harmony export */ });
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5214);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views__WEBPACK_IMPORTED_MODULE_1__]);
_views__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const tabs = [{
  label: 'Add',
  icon: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__.Plus,
  view: 'adding'
}, {
  label: 'Edit',
  icon: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__.Edit2,
  view: 'editing'
}];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Adding)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(977);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1060);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var resources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9903);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7742);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1524);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_3__]);
([components__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Adding = () => {
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: provider,
    1: setProvider
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(types__WEBPACK_IMPORTED_MODULE_6__.IconProviders.DEVICONS);
  const groupIcons = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const result = {
      [types__WEBPACK_IMPORTED_MODULE_6__.IconProviders.SIMPLE_ICONS]: [],
      [types__WEBPACK_IMPORTED_MODULE_6__.IconProviders.SKILL_ICONS]: [],
      [types__WEBPACK_IMPORTED_MODULE_6__.IconProviders.SHIELDS]: [],
      [types__WEBPACK_IMPORTED_MODULE_6__.IconProviders.DEVICONS]: []
    };

    for (const icon of resources__WEBPACK_IMPORTED_MODULE_5__/* .tech_icons */ .ke) {
      for (const provider of icon.available_providers) {
        result[provider].push(icon);
      }
    }

    return result;
  }, []);

  function filterIconsByProviderAndName(value) {
    const result = {};

    const filter = provider => (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .filterArrayByQueryMatch */ .yk)(value, groupIcons[provider], ['name', 'alias']);

    if (provider === 'all') {
      Object.keys(groupIcons).forEach(key => result[key] = filter(key));
    } else result[provider] = filter(provider);

    return result;
  }

  const forceUpdate = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useForceUpdate */ .NW)();

  const handleAddTech = (icon, provider) => () => {
    const path = `content.icons.${icon.name}`;

    const value = _objectSpread(_objectSpread({}, icon), {}, {
      currentProvider: provider,
      config: {}
    });

    app__WEBPACK_IMPORTED_MODULE_2__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value
    });
  };

  const {
    value = ''
  } = inputRef.current || {};
  const filteredOptions = filterIconsByProviderAndName(value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Wrapper */ .im, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .SimpleInput */ .Jc, {
        label: "Search",
        ref: inputRef,
        onInput: (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .debounce */ .Ds)(forceUpdate, 200),
        placeholder: "Icon..."
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .Select */ .Ph, {
        defaultValue: types__WEBPACK_IMPORTED_MODULE_6__.IconProviders.DEVICONS,
        label: "Provider",
        onChange: value => setProvider(value),
        options: [{
          value: 'all',
          label: 'all'
        }, ...Object.values(types__WEBPACK_IMPORTED_MODULE_6__.IconProviders).map(value => ({
          label: value.replace('_', ' '),
          value
        }))]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
      children: Object.entries(filteredOptions).map(([providerName, icons]) => {
        if (provider !== 'all' && providerName !== provider) return null;
        const isBadge = providerName === 'shields';
        const imgWidth = isBadge ? '75%' : undefined;
        const imgHeight = isBadge ? 'auto' : undefined;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
          children: [provider === 'all' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Divider */ .iz, {
            children: providerName.split('_').map(w => (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .capitalize */ .kC)(w)).join(' ')
          }), icons.map(icon => {
            const {
              name,
              shortname,
              providers
            } = icon;
            const url = providers[providerName].path;
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .DisplayBlock */ .L9, {
              display: url.replace(/ /g, '').replace(/(?<=badge\/)(.+)(?=-\w+\?)/, ''),
              onClick: handleAddTech(icon, providerName),
              label: shortname ?? name,
              imgWidth: imgWidth,
              imgHeight: imgHeight
            }, name);
          })]
        }, providerName);
      })
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "iz": () => (/* binding */ Divider)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-5vsy7e-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;gap:", ";"], theme.spacings.medium));
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().strong.withConfig({
  displayName: "styles__Divider",
  componentId: "sc-5vsy7e-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["grid-column:1 / 4;border-top-width:", ";border-top-style:solid;border-top-color:", ";padding:", " 0px;margin-top:", ";"], theme.border.width, theme.colors.border, theme.spacings.medium, theme.spacings.medium));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-5vsy7e-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin-top:", ";width:calc(100% + ", ");display:grid;grid-template-columns:repeat(3,1fr);align-items:start;align-content:start;gap:", ";height:100%;overflow-y:scroll;padding-right:", ";&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.medium, theme.spacings.medium, theme.spacings.xsmall, theme.spacings.xsmall, theme.colors.border));

/***/ }),

/***/ 6361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2908);

const variants = (0,utils__WEBPACK_IMPORTED_MODULE_0__/* .createFramerMotionVariants */ .Zk)({
  container: {
    open: {
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    },
    closed: {}
  }
});


/***/ }),

/***/ 7041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ fields)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);

const fields = [{
  id: 1,
  label: 'Section styles',
  accordion: true,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT,
    path: 'styles.align',
    label: 'Align',
    props: {
      options: [{
        label: 'Left',
        value: 'left'
      }, {
        label: 'Center',
        value: 'center'
      }, {
        label: 'Right',
        value: 'right'
      }]
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH,
    path: 'styles.clear',
    label: 'Clear float'
  }]
}, {
  id: 2,
  label: 'Item styles',
  accordion: true,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: 'content.styles.height',
    label: 'Height',
    props: {
      type: 'number'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: 'styles.spacing',
    label: 'Spacing',
    props: {
      type: 'number',
      min: 5
    }
  }]
}];


/***/ }),

/***/ 6993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Editing)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1060);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2905);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6361);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7041);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3545);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Editing = () => {
  const techIconVariantsRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const forceUpdate = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useForceUpdate */ .NW)();
  const {
    currentSection
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCanvas */ .$P)();
  const selectedIcons = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .getDeepObjectProperty */ .yo)(currentSection, 'props.content.icons');
  const icons = Object.entries(selectedIcons);
  const icon_names = icons.map(icon => icon[0]);

  const handleOnReOrder = order => {
    const path = 'content.icons';
    const value = order.reduce((obj, name) => {
      const finded = icons.find(icon => icon[0] === name);
      obj[finded[0]] = finded[1];
      return obj;
    }, {});
    app__WEBPACK_IMPORTED_MODULE_5__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value
    });
    setTimeout(forceUpdate, 200);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Container */ .W, {
    initial: "closed",
    animate: "open",
    variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .variants.container */ .o.container,
    layoutScroll: true,
    children: [_fields__WEBPACK_IMPORTED_MODULE_7__/* .fields.map */ .X.map(field => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_2__/* .GroupFields */ .AS, _objectSpread({}, field), field.id)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.Reorder.Group, {
        axis: "y",
        values: icon_names,
        onReorder: handleOnReOrder,
        children: icons.map(([name, props], index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_2__/* .TechIconVariants */ .sY, _objectSpread({
          ref: ref => techIconVariantsRefs.current[index] = ref,
          refs: techIconVariantsRefs.current
        }, props), name))
      })
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Container",
  componentId: "sc-owac02-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:calc(100% + ", ");display:flex;flex-direction:column;height:100%;overflow-y:scroll;padding-right:", ";&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.medium, theme.spacings.xsmall, theme.colors.border));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5214:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ views)
/* harmony export */ });
/* harmony import */ var _adding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2701);
/* harmony import */ var _editing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_adding__WEBPACK_IMPORTED_MODULE_0__, _editing__WEBPACK_IMPORTED_MODULE_1__]);
([_adding__WEBPACK_IMPORTED_MODULE_0__, _editing__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const views = {
  adding: _adding__WEBPACK_IMPORTED_MODULE_0__/* .Adding */ .U,
  editing: _editing__WEBPACK_IMPORTED_MODULE_1__/* .Editing */ .L
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;