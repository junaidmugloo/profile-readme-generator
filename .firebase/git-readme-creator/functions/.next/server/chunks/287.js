"use strict";
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 1287:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ GuardSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1060);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7742);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5158);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_4__]);
([hooks__WEBPACK_IMPORTED_MODULE_2__, _styles__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const BASE_URL = 'https://api.github.com/users/';

const GuardSection = ({
  children,
  sectionId
}) => {
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    previewMode
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useCanvas */ .$P)();
  const {
    settings
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useSettings */ .rV)();
  const {
    github
  } = settings.user;

  const handleCheckGithubUsername = async event => {
    event.preventDefault();
    const {
      value = ''
    } = inputRef.current;
    if (!value) return;
    setIsLoading(true);
    const response = await fetch(`${BASE_URL}${value}`);
    setIsLoading(false);

    if (!response.ok) {
      setError('User not found');
      return;
    }

    app__WEBPACK_IMPORTED_MODULE_1__/* .events.settings.edit */ .U.settings.edit({
      path: 'user.github',
      value
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (previewMode) return;
    const state = github ? types__WEBPACK_IMPORTED_MODULE_3__.CanvasStatesEnum.DEFAULT : types__WEBPACK_IMPORTED_MODULE_3__.CanvasStatesEnum.ALERT;
    setTimeout(() => {
      app__WEBPACK_IMPORTED_MODULE_1__/* .events.canvas.edit */ .U.canvas.edit({
        id: sectionId,
        path: 'state',
        value: state
      });
    });
  }, [github]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: github ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: children
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
      onSubmit: handleCheckGithubUsername,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .AlertIcon */ .zM, {
        size: 24
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
        children: ["To use this section, please tell us your", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "github username."]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Input */ .II, {
        error: error,
        ref: inputRef,
        label: "Github username",
        placeholder: "Your github username",
        disabled: isLoading
      })]
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "xv": () => (/* binding */ Text),
/* harmony export */   "zM": () => (/* binding */ AlertIcon)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_inputs__WEBPACK_IMPORTED_MODULE_2__]);
components_inputs__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({
  displayName: "styles__Container",
  componentId: "sc-18s8kwg-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:min(100%,30rem);margin-inline:auto;text-align:center;display:grid;grid:'icon text' 'input input' / 2.4rem 1fr;row-gap:", ";"], theme.spacings.large));
const AlertIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.AlertCircle).withConfig({
  displayName: "styles__AlertIcon",
  componentId: "sc-18s8kwg-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["color:", ";grid-area:icon;"], theme.colors.tertiary));
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-18s8kwg-2"
})(["grid-area:text;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_inputs__WEBPACK_IMPORTED_MODULE_2__/* .SimpleInput */ .Jc).withConfig({
  displayName: "styles__Input",
  componentId: "sc-18s8kwg-3"
})(["grid-area:input;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;