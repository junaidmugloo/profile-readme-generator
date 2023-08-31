"use strict";
exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 7562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelGeneratedFiles": () => (/* binding */ PanelGeneratedFiles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7364);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1060);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2905);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8400);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__]);
([components__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PanelGeneratedFiles = () => {
  const {
    sections
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCanvas */ .$P)();
  const {
    settings
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSettings */ .rV)();
  const readme = (0,generators__WEBPACK_IMPORTED_MODULE_1__/* .readmeGenerator */ .c)(sections, settings);
  const workflows = (0,generators__WEBPACK_IMPORTED_MODULE_1__/* .workflowsGenerator */ .X)(sections);
  const tree = [workflows, readme];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const content = readme.files[0].content;
    window.setTimeout(() => app__WEBPACK_IMPORTED_MODULE_4__/* .events.result.show */ .U.result.show(content), 0);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components__WEBPACK_IMPORTED_MODULE_2__/* .Tree */ .mp, {
      tree: tree
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-6kbdid-0"
})([""]);

/***/ }),

/***/ 7364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* reexport */ readmeGenerator),
  "X": () => (/* reexport */ workflowsGenerator)
});

// EXTERNAL MODULE: external "html-prettify"
var external_html_prettify_ = __webpack_require__(2329);
var external_html_prettify_default = /*#__PURE__*/__webpack_require__.n(external_html_prettify_);
// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
;// CONCATENATED MODULE: ./src/generators/readme/sections/text.ts
const generateTextSection = ({
  content,
  styles
}) => {
  const {
    text,
    as: tag
  } = content;
  const {
    align
  } = styles;
  const formatedText = text.trim().replace(/\n/g, '<br>');
  return `<${tag} align="${align}">${formatedText}</${tag}>`;
};


// EXTERNAL MODULE: ./src/utils/index.ts + 14 modules
var utils = __webpack_require__(2908);
;// CONCATENATED MODULE: ./src/generators/readme/sections/activities.ts
const _excluded = ["type"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const generateActivitiesSection = ({
  content,
  styles
}) => {
  const {
    type
  } = content,
        rest = _objectWithoutProperties(content, _excluded);

  const {
    align
  } = styles;
  const url = (0,utils/* getActivitiesUrl */.$h)(type, rest);
  const alt = `Layout with last ${type} posts`;
  return `
   <div align="${align}">
      <img src="${url}" alt="${alt}" />
   </div>
  `;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/music.ts
const music_excluded = ["type"];

function music_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = music_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function music_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const ALTS = {
  recently: 'Spotify recently played',
  currently: 'Widget with the current Spotify song'
};

const generateMusicSection = ({
  content,
  styles
}) => {
  const {
    type
  } = content,
        rest = music_objectWithoutProperties(content, music_excluded);

  const {
    align
  } = styles;
  const {
    spotifyAccountUrl,
    imageUrl
  } = (0,utils/* getMusicUrl */.WL)(type, rest[type]);
  const alt = ALTS[type];
  return `
    <div align="${align}">
      ${spotifyAccountUrl ? `<a href="${spotifyAccountUrl}">` : ''}
        <img src="${imageUrl}" alt="${alt}" />
      ${spotifyAccountUrl ? `</a>` : ''}
    </div>
  `;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/snake.ts
const generateSnakeSection = (_, settings) => {
  const {
    github
  } = settings.user;
  return `<img src="https://raw.githubusercontent.com/${github}/${github}/output/snake.svg" alt="Snake animation"/>`;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/image.ts
const generateImageSection = ({
  content,
  styles
}) => {
  const {
    url
  } = content;
  const {
    height,
    align,
    float = 'none'
  } = styles;
  const hasFloat = float !== 'none';
  const floatStyle = `align="${float}" `;
  return `
    ${!hasFloat ? `<div align="${align}">` : ''}
      <img ${hasFloat ? floatStyle : ''}height="${height}" src="${url}" />
    ${!hasFloat ? '</div>' : ''}
  `;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/stats.ts
const stats_excluded = ["height"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function stats_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = stats_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function stats_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const generateStatsSection = ({
  content,
  styles
}, settings) => {
  const {
    graphs
  } = content;
  const {
    align,
    direction
  } = styles;
  const {
    github
  } = settings.user;
  const imgsHtml = Object.entries(graphs).filter(([, props]) => props.show).reduce((html, [graph, props], index, arr) => {
    const url = (0,utils/* getStatsUrl */.rs)(graph, github);

    const _props = _objectSpread({}, props),
          {
      height = 150
    } = _props,
          rest = stats_objectWithoutProperties(_props, stats_excluded);

    Reflect.deleteProperty(rest, 'show');
    const fullUrl = `${url}&${(0,utils/* objectToQueryParams */._A)(rest)}`;
    const toAddBr = direction === 'column' && index + 1 !== arr.length;
    const img = `<img src="${fullUrl}" height="${height}" alt="${graph} graph" />`;
    const br = toAddBr ? '<br>' : '';
    return `${html} \n ${img} ${br}`;
  }, '').trim();
  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/techs.ts
const generateTechsSection = ({
  content,
  styles: sectionStyles
}) => {
  const {
    icons,
    styles
  } = content;
  const {
    align,
    spacing
  } = sectionStyles;
  const {
    height = 40
  } = styles;
  const imgsHtml = Object.entries(icons).reduce((html, [icon, {
    providers,
    currentProvider,
    config
  }], index, arr) => {
    var _config$currentProvid;

    const isLast = index === arr.length - 1;
    const provider = providers[currentProvider];
    const providerVariants = provider.variants || [];
    const hasVariants = !!providerVariants.length;
    const logo = hasVariants ? providerVariants[((_config$currentProvid = config[currentProvider]) === null || _config$currentProvid === void 0 ? void 0 : _config$currentProvid.variant) ?? 0] : provider.path;
    const space = `<img width="${spacing}"/>`;
    const img = `<img src="${logo}" height="${height}" alt="${icon} logo" />`;
    return `${html} \n ${img}` + (!isLast ? ` \n ${space}` : '');
  }, '').trim();
  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/socials.ts
const socials_excluded = ["link"];

function socials_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function socials_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { socials_ownKeys(Object(source), true).forEach(function (key) { socials_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { socials_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function socials_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function socials_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = socials_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function socials_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const wrapperHtmlInLink = (link = '', html = '') => {
  return `
    <a href="${link}" target="_blank">
      ${html}
    </a>
  `;
};

const generateSocialsSection = ({
  content,
  styles: sectionStyles
}) => {
  const {
    socials,
    styles
  } = content;
  const {
    align,
    spacing
  } = sectionStyles;
  const {
    height = 40,
    type,
    style
  } = styles;
  const imgsHtml = Object.entries(socials).reduce((html, [social, _ref]) => {
    let {
      link
    } = _ref,
        rest = socials_objectWithoutProperties(_ref, socials_excluded);

    const props = socials_objectSpread(socials_objectSpread({}, rest), {}, {
      style
    });

    const url = (0,utils/* getSocialImgUrl */.hy)(type, social, props);
    const widthValue = Number(height) + Number(spacing);
    const widthAttr = type === 'icon' ? ` width="${widthValue}"` : '';
    const img = `<img src="${url}"${widthAttr} height="${height}" alt="${social} logo" />`;
    const finalHtml = !!link ? wrapperHtmlInLink(link, img) : img;
    return `${html}\n${finalHtml}`;
  }, '').trim();
  return `
    <div align="${align}">
      ${imgsHtml}
    </div>
  `;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/profile-views.ts


const generateProfileViewsSection = ({
  content,
  styles
}, settings) => {
  const {
    type,
    props
  } = content;
  const {
    align,
    float
  } = styles;
  const url = (0,utils/* getProfileViewsUrl */.vu)(type, settings.user.github);
  const fullUrl = `${url}${type === 'badge' ? (0,utils/* objectToQueryParams */._A)(props) : ''}`;
  const hasFloat = float !== 'none';
  const floatStyle = `align="${float}" `;
  return `
    ${!hasFloat ? `<div align="${align}">` : ''}
      <img ${hasFloat ? floatStyle : ''}src="${fullUrl}" />
    ${!hasFloat ? '</div>' : ''}
  `;
};


;// CONCATENATED MODULE: ./src/generators/readme/sections/index.ts










const sectionsGeneratorMap = {
  [types.Sections.TEXT]: generateTextSection,
  [types.Sections.SNAKE]: generateSnakeSection,
  [types.Sections.MUSIC]: generateMusicSection,
  [types.Sections.ACTIVITIES]: generateActivitiesSection,
  [types.Sections.IMAGE]: generateImageSection,
  [types.Sections.STATS]: generateStatsSection,
  [types.Sections.TECHS]: generateTechsSection,
  [types.Sections.SOCIALS]: generateSocialsSection,
  [types.Sections.PROFILE_VIEWS]: generateProfileViewsSection
};

;// CONCATENATED MODULE: ./src/generators/readme/index.ts




const readmeGenerator = (template, settings) => {
  const readme = template.reduce((readme, section) => {
    const {
      state,
      styles
    } = section.props;
    if (state === types.CanvasStatesEnum.ALERT) return readme;
    const generator = sectionsGeneratorMap[section.type];
    if (!generator) return readme;
    const html = external_html_prettify_default()(generator(section.props, settings));
    return `${readme}\n${styles.clear ? '\n<br clear="both">\n' : ''}\n${html}\n###`;
  }, '');
  const readmeFormated = readme.replace(/(###)/g, '\n$1');
  const folder = {
    name: '',
    files: [{
      file: 'README.md',
      content: readmeFormated.trim()
    }]
  };
  return folder;
};


;// CONCATENATED MODULE: ./src/generators/workflows/sections/snake.ts
const generateSnakeWorkflow = () => {
  const content = `
name: Generate snake animation

on:
  schedule: # execute every 12 hours
    - cron: "* */12 * * *"

  workflow_dispatch:

  push:
    branches:
    - master

jobs:
  generate:
    runs-on: ubuntu-latest

    steps:
      - name: generate snake.svg
        uses: Platane/snk/svg-only@v2
        with:
          github_user_name: ${'${{ github.repository_owner }}'}
          outputs: dist/snake.svg


      - name: push snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v2.6.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${'${{ secrets.GITHUB_TOKEN }}'}
`.trim();
  return {
    file: 'snake.yml',
    content
  };
};


;// CONCATENATED MODULE: ./src/generators/workflows/sections/index.ts


const workflowsGeneratorMap = {
  [types.Sections.SNAKE]: generateSnakeWorkflow
};

;// CONCATENATED MODULE: ./src/generators/workflows/index.ts



const workflowsGenerator = template => {
  const workflows = template.reduce((workflows, section) => {
    if (section.props.state === types.CanvasStatesEnum.ALERT) return workflows;
    const generator = workflowsGeneratorMap[section.type];
    if (!generator) return workflows;
    const workflow = generator();
    return [...workflows, workflow];
  }, []);
  const forder = {
    name: '.github/workflows',
    files: workflows
  };
  return forder;
};


;// CONCATENATED MODULE: ./src/generators/index.ts



/***/ })

};
;