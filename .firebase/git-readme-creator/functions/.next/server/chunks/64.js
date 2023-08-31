"use strict";
exports.id = 64;
exports.ids = [64];
exports.modules = {

/***/ 9480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ groups)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);

const groups = [{
  id: 1,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT,
    path: 'content.type',
    label: 'Type',
    props: {
      options: [{
        label: 'Recently',
        value: 'recently'
      }, {
        label: 'Currently',
        value: 'currently'
      }]
    }
  }]
}, {
  id: 2,
  label: 'Layout',
  accordion: true,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT,
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
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH,
    path: 'styles.clear',
    label: 'Clear float'
  }]
}];


/***/ }),

/***/ 1064:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicEditPanel": () => (/* binding */ MusicEditPanel)
/* harmony export */ });
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(977);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2908);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1060);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4992);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9480);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4290);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_2__, _views__WEBPACK_IMPORTED_MODULE_3__]);
([components__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_2__, _views__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MusicEditPanel = () => {
  const {
    currentSection: obj
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCanvas */ .$P)();
  const currentView = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getDeepObjectProperty */ .yo)(obj, 'props.content.type');
  const View = _views__WEBPACK_IMPORTED_MODULE_3__/* .views */ .t[currentView];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
    children: [_fields__WEBPACK_IMPORTED_MODULE_4__/* .groups.map */ .X.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components__WEBPACK_IMPORTED_MODULE_0__/* .GroupFields */ .AS, _objectSpread({}, group), group.id)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(View, {})]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-cm3azi-0"
})([""]);

/***/ }),

/***/ 6223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ projects_links),
/* harmony export */   "w": () => (/* binding */ list_items)
/* harmony export */ });
const list_items = [{
  id: 1,
  content: `
      Create a
      <a href="https://developer.spotify.com/dashboard/applications" target="_blank">
        Spotify application
      </a>
      , you can follow this
      <a href="https://github.com/novatorem/novatorem/blob/master/SetUp.md#spotify-api" target="_blank">
        guide
      </a>
      .
    `
}, {
  id: 2,
  content: 'Choose one of the available projects.'
}, {
  id: 3,
  content: 'Upload your own project instance.'
}, {
  id: 4,
  content: 'Then put the url of your app here.'
}];
const novatorem_repo = 'https://github.com/novatorem/novatorem';
const itstommi_repo = 'https://github.com/itstommi/Spotify-Readme';
const novatorem_deploy_setup = `${novatorem_repo}/blob/master/SetUp.md`;
const itstommi_deploy_setup = `${itstommi_repo}#setup`;
const vercel_base_url = 'https://vercel.com/new/clone?repository-url=';
const heroku_base_url = 'https://dashboard.heroku.com/new?template=';
const projects_links = {
  novatorem: [{
    label: 'Github',
    link: novatorem_repo
  }, {
    label: 'Setup to deploy',
    link: novatorem_deploy_setup
  }, {
    label: 'Deploy to Vercel',
    link: `${vercel_base_url}${novatorem_repo}`
  }, {
    label: 'Deploy to Heroku',
    link: `${heroku_base_url}${novatorem_repo}`
  }],
  itstommi: [{
    label: 'Github',
    link: itstommi_repo
  }, {
    label: 'Setup to deploy',
    link: itstommi_deploy_setup
  }, {
    label: 'Deploy to Vercel',
    link: `${vercel_base_url}${itstommi_repo}`
  }, {
    label: 'Deploy to Heroku',
    link: `${heroku_base_url}${itstommi_repo}`
  }]
};


/***/ }),

/***/ 5856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ second_group),
/* harmony export */   "Z": () => (/* binding */ first_group)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);

const first_group = [{
  id: 1,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT,
    path: 'content.currently.project',
    label: 'Project',
    props: {
      options: [{
        label: 'itstommi',
        value: 'itstommi'
      }, {
        label: 'novatorem',
        value: 'novatorem'
      }]
    }
  }]
}];
const second_group = [{
  id: 1,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: 'content.currently.itstommi.url',
    label: 'Url',
    props: {
      placeholder: 'https://your-app-instance.com/api'
    },
    conditions: {
      path: 'props.content.currently.project',
      be: 'equal',
      value: 'itstommi'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: 'content.currently.novatorem.url',
    label: 'Url',
    props: {
      placeholder: 'https://your-app-instance.com/api'
    },
    conditions: {
      path: 'props.content.currently.project',
      be: 'equal',
      value: 'novatorem'
    }
  }]
}, {
  id: 2,
  columns: 3,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT,
    path: 'content.currently.itstommi.props.theme',
    label: 'Theme',
    props: {
      column: '1 / 4',
      options: [{
        label: 'Dark',
        value: 'dark'
      }, {
        label: 'White',
        value: 'white'
      }]
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH,
    path: 'content.currently.itstommi.props.spin',
    label: 'Spin',
    props: {
      direction: 'column'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH,
    path: 'content.currently.itstommi.props.scan',
    label: 'Scan',
    props: {
      direction: 'column'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH,
    path: 'content.currently.itstommi.props.rainbow',
    label: 'Rainbow',
    props: {
      direction: 'column'
    }
  }],
  conditions: {
    path: 'props.content.currently.project',
    be: 'equal',
    value: 'itstommi'
  }
}];


/***/ }),

/***/ 8321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ Currently)
/* harmony export */ });
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(977);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5856);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6223);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2908);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1060);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4357);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_4__]);
([components__WEBPACK_IMPORTED_MODULE_0__, hooks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Currently = () => {
  const {
    currentSection: obj
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCanvas */ .$P)();
  const project = (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .getDeepObjectProperty */ .yo)(obj, 'props.content.currently.project');
  const links = _content__WEBPACK_IMPORTED_MODULE_2__/* .projects_links */ .J[project];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W2, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Info */ .kI, {
      children: ["To show the current music from your Spotify, you will need to:", ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .List */ .aV, {
        children: _content__WEBPACK_IMPORTED_MODULE_2__/* .list_items.map */ .w.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .ListItem */ .HC, {
          dangerouslySetInnerHTML: {
            __html: item.content
          }
        }, item.id))
      })]
    }), _fields__WEBPACK_IMPORTED_MODULE_1__/* .first_group.map */ .Z.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components__WEBPACK_IMPORTED_MODULE_0__/* .GroupFields */ .AS, _objectSpread({}, group), group.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Info */ .kI, {
      children: ["Links related to the ", project, "'s project:", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Links */ .yX, {
        children: links.map(link => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Link */ .rU, {
          href: link.link,
          target: "_blank",
          children: link.label
        }, link.label))
      })]
    }), _fields__WEBPACK_IMPORTED_MODULE_1__/* .second_group.map */ .C.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components__WEBPACK_IMPORTED_MODULE_0__/* .GroupFields */ .AS, _objectSpread({}, group), group.id))]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HC": () => (/* binding */ ListItem),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "aV": () => (/* binding */ List),
/* harmony export */   "kI": () => (/* binding */ Info),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "yX": () => (/* binding */ Links)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-tnezd1-0"
})([""]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Info",
  componentId: "sc-tnezd1-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;flex-direction:column;gap:", ";margin-bottom:", ";padding-left:16px;position:relative;&::before{content:'';position:absolute;top:0;bottom:0;left:0;width:4px;background:", ";}"], theme.spacings.xsmall, theme.spacings.small, theme.colors.tertiary));
const Links = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Links",
  componentId: "sc-tnezd1-2"
})(["display:flex;flex-direction:column;"]);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__Link",
  componentId: "sc-tnezd1-3"
})([""]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-tnezd1-4"
})(["display:flex;flex-direction:column;"]);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "styles__ListItem",
  componentId: "sc-tnezd1-5"
})(["margin-left:16px;position:relative;list-style:circle;"]);

/***/ }),

/***/ 4992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ views)
/* harmony export */ });
/* harmony import */ var _currently__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8321);
/* harmony import */ var _recently__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8263);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_currently__WEBPACK_IMPORTED_MODULE_0__, _recently__WEBPACK_IMPORTED_MODULE_1__]);
([_currently__WEBPACK_IMPORTED_MODULE_0__, _recently__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const views = {
  currently: _currently__WEBPACK_IMPORTED_MODULE_0__/* .Currently */ .r,
  recently: _recently__WEBPACK_IMPORTED_MODULE_1__/* .Recently */ .N
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ info_links)
/* harmony export */ });
const info_links = [{
  label: 'Connect Spotify account',
  link: 'https://spotify-recently-played-readme.vercel.app'
}, {
  label: 'More info',
  link: 'https://github.com/JeffreyCA/spotify-recently-played-readme#getting-started'
}];


/***/ }),

/***/ 8210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ groups)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);

const groups = [{
  id: 1,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: 'content.recently.user',
    label: 'Spotify username'
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: 'content.recently.count',
    label: 'Limit',
    props: {
      type: 'number',
      min: 0,
      max: 10,
      placeholder: '(max 10)'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH,
    path: 'content.recently.unique',
    label: 'Unique tracks'
  }]
}];


/***/ }),

/***/ 8263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ Recently)
/* harmony export */ });
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(977);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8210);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9814);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9799);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_0__]);
components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Recently = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Info */ .kI, {
      children: ["Before start, you need to connect your Spotify account with the Vercel app.", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Links */ .yX, {
        children: _content__WEBPACK_IMPORTED_MODULE_2__/* .info_links.map */ .b.map(link => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .rU, {
          href: link.link,
          target: "_blank",
          children: link.label
        }, link.label))
      })]
    }), _fields__WEBPACK_IMPORTED_MODULE_1__/* .groups.map */ .X.map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components__WEBPACK_IMPORTED_MODULE_0__/* .GroupFields */ .AS, _objectSpread({}, group), group.id))]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "kI": () => (/* binding */ Info),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "yX": () => (/* binding */ Links)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-lr9m98-0"
})([""]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Info",
  componentId: "sc-lr9m98-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;flex-direction:column;gap:", ";margin-bottom:", ";padding-left:16px;position:relative;&::before{content:'';position:absolute;top:0;bottom:0;left:0;width:4px;background:", ";}"], theme.spacings.xsmall, theme.spacings.small, theme.colors.tertiary));
const Links = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Links",
  componentId: "sc-lr9m98-2"
})(["display:flex;flex-direction:column;"]);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "styles__Link",
  componentId: "sc-lr9m98-3"
})([""]);

/***/ })

};
;