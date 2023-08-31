exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 6509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ envs)
/* harmony export */ });
const envs = {
  environment: "production",
  urls: {
    count_api: process.env.COUNT_API_URL
  },
  options: {
    count_api: {
      namespace: process.env.COUNT_API_NAMESPACE,
      keys: {
        visits: process.env.COUNT_PAGE_VIEW_KEY,
        'generated-readmes': process.env.COUNT_GENERATED_READMES_KEY
      }
    }
  }
};


/***/ }),

/***/ 7051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ general)
/* harmony export */ });
const general = {
  urls: {
    app: 'https://profile-readme-generator.com',
    sections: {
      music: {
        spotify: {
          profileBaseUrl: 'https://open.spotify.com/user',
          recentlyPlayedBaseUrl: 'https://spotify-recently-played-readme.vercel.app/api'
        }
      },
      techs: {
        iconBaseUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
      },
      stats: {
        imageBaseUrl: 'https://github-readme-stats.vercel.app/api',
        streakBaseUrl: 'https://streak-stats.demolab.com'
      },
      socials: {
        iconBaseUrl: 'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social',
        badgeBaseUrl: 'https://img.shields.io/static/v1'
      },
      profileViews: {
        badgeBaseUrl: 'https://visitor-badge.laobi.icu/badge',
        imageBaseUrl: 'https://profile-counter.glitch.me'
      },
      activities: {
        mediumBaseUrl: 'https://github-read-medium-git-main.pahlevikun.vercel.app/latest'
      }
    }
  },
  storage: {
    prefix: '@prg-ms'
  },
  settings: {
    initial: {
      user: {}
    },
    preview: {
      user: {
        github: 'maurodesouza'
      }
    }
  }
};


/***/ }),

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* reexport */ config),
  "U": () => (/* reexport */ events)
});

// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
;// CONCATENATED MODULE: ./src/app/events/handles/base.ts


class BaseEventHandle {
  emit(event, payload) {
    const isDev = config.envs.environment === 'development';
    isDev && console.info(`events[emit]: ${event}`, payload);
    const customEvent = new CustomEvent(event, {
      detail: payload
    });
    document.dispatchEvent(customEvent);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/canvas.ts
const _excluded = ["path"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CanvasHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    _defineProperty(this, "add", sectionType => {
      this.emit(types.Events.CANVAS_ADD_SECTION, sectionType);
    });

    _defineProperty(this, "remove", sectionId => {
      this.emit(types.Events.CANVAS_REMOVE_SECTION, sectionId);
    });

    _defineProperty(this, "clear", () => {
      this.emit(types.Events.CANVAS_CLEAR_SECTIONS);
    });

    _defineProperty(this, "edit", _ref => {
      let {
        path
      } = _ref,
          rest = _objectWithoutProperties(_ref, _excluded);

      this.emit(types.Events.CANVAS_EDIT_SECTION, _objectSpread(_objectSpread({}, rest), {}, {
        path: `props.${path}`
      }));
    });

    _defineProperty(this, "duplicate", sectionId => {
      this.emit(types.Events.CANVAS_DUPLICATE_SECTION, sectionId);
    });

    _defineProperty(this, "reorder", order => {
      this.emit(types.Events.CANVAS_REORDER_SECTIONS, order);
    });

    _defineProperty(this, "currentSection", sectionId => {
      this.emit(types.Events.CANVAS_SET_CURRENT_SECTION, sectionId);
    });

    this.reorder = this.reorder.bind(this);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/context-menu.ts



class ContextMenuHanldeEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  open(context, event) {
    this.emit(types.Events.CONTEXT_MENU_OPEN, {
      context,
      event
    });
  }

  close() {
    this.emit(types.Events.CONTEXT_MENU_CLOSE);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/settings.ts
function settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SettingsHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    settings_defineProperty(this, "edit", args => {
      this.emit(types.Events.SETTINGS_EDIT, args);
    });
  }

}


// EXTERNAL MODULE: ./src/utils/index.ts + 14 modules
var utils = __webpack_require__(2908);
;// CONCATENATED MODULE: ./src/app/events/handles/panel.ts



class PanelHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  open(side, panel) {
    const {
      openEvent
    } = (0,utils/* getPanelSideEvent */.Ec)(side);
    this.emit(openEvent, panel);
  }

  close(side) {
    const {
      closeEvent
    } = (0,utils/* getPanelSideEvent */.Ec)(side);
    this.emit(closeEvent);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/result.ts



class ResultHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  show(content) {
    this.emit(types.Events.RESULT_SHOW_CONTENT, content);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/modal.ts



class ModalHandleEvents extends BaseEventHandle {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  open(modal) {
    this.emit(types.Events.MODAL_OPEN, modal);
  }

  close() {
    this.emit(types.Events.MODAL_CLOSE);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/template.ts



class TemaplateHandleEvents extends BaseEventHandle {
  constructor() {
    super();
    this.use = this.use.bind(this);
  }

  use() {
    this.emit(types.Events.TEMPLATE_USE);
  }

  preview(template) {
    this.emit(types.Events.TEMPLATE_PREVIEW, template ?? []);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/index.ts
function handles_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Handles {
  constructor() {
    handles_defineProperty(this, "canvas", new CanvasHandleEvents());

    handles_defineProperty(this, "contextmenu", new ContextMenuHanldeEvents());

    handles_defineProperty(this, "settings", new SettingsHandleEvents());

    handles_defineProperty(this, "panel", new PanelHandleEvents());

    handles_defineProperty(this, "result", new ResultHandleEvents());

    handles_defineProperty(this, "modal", new ModalHandleEvents());

    handles_defineProperty(this, "template", new TemaplateHandleEvents());
  }

}


;// CONCATENATED MODULE: ./src/app/events/index.ts


class EventsHandle extends Handles {
  on(event, callback) {
    document.addEventListener(event, callback);
  }

  off(event, callback) {
    document.removeEventListener(event, callback);
  }

}

const events = new EventsHandle();

// EXTERNAL MODULE: ./src/app/config/envs/index.ts
var envs = __webpack_require__(6509);
;// CONCATENATED MODULE: ./src/app/config/sections/stats.ts
const statsSectionConfig = {
  props: {
    content: {
      graphs: {
        stats: {
          height: 150,
          hide_title: false,
          hide_rank: false,
          show_icons: true,
          include_all_commits: true,
          count_private: true,
          disable_animations: false,
          theme: 'dracula',
          locale: 'en',
          hide_border: false,
          show: true,
          order: 1
        },
        languages: {
          height: 150,
          locale: 'en',
          hide_title: false,
          layout: 'compact',
          card_width: 320,
          langs_count: 5,
          theme: 'dracula',
          hide_border: false,
          show: true,
          order: 2
        },
        streak: {
          height: 150,
          locale: 'en',
          mode: 'daily',
          theme: 'dracula',
          hide_border: false,
          border_radius: 5,
          date_format: '',
          show: false,
          order: 3
        }
      }
    },
    styles: {
      align: 'center',
      direction: 'row'
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/techs.ts
const techsSectionConfig = {
  props: {
    content: {
      icons: {
        javascript: {
          name: 'javascript',
          color: '#F7DF1E',
          alias: ['js'],
          tags: ['programming', 'language'],
          available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
          providers: {
            skill_icons: {
              path: 'https://skillicons.dev/icons?i=js'
            },
            simple_icons: {
              path: 'https://cdn.simpleicons.org/javascript/F7DF1E'
            },
            shields: {
              path: 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge'
            },
            devicons: {
              path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
              variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg']
            }
          },
          currentProvider: 'devicons',
          config: {}
        },
        typescript: {
          name: 'typescript',
          color: '#3178C6',
          alias: ['ts'],
          tags: ['programming', 'transpiler'],
          available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
          providers: {
            skill_icons: {
              path: 'https://skillicons.dev/icons?i=ts'
            },
            simple_icons: {
              path: 'https://cdn.simpleicons.org/typescript/3178C6'
            },
            shields: {
              path: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge'
            },
            devicons: {
              path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
              variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg']
            }
          },
          currentProvider: 'devicons',
          config: {}
        },
        react: {
          name: 'react',
          color: '#61DAFB',
          alias: [],
          tags: ['framework'],
          available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
          providers: {
            skill_icons: {
              path: 'https://skillicons.dev/icons?i=react'
            },
            simple_icons: {
              path: 'https://cdn.simpleicons.org/react/61DAFB'
            },
            shields: {
              path: 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge'
            },
            devicons: {
              path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg']
            }
          },
          currentProvider: 'devicons',
          config: {}
        },
        jest: {
          name: 'jest',
          color: '#C21325',
          alias: [],
          tags: ['testing', 'javascript'],
          available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
          providers: {
            skill_icons: {
              path: 'https://skillicons.dev/icons?i=jest'
            },
            simple_icons: {
              path: 'https://cdn.simpleicons.org/jest/C21325'
            },
            shields: {
              path: 'https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white&style=for-the-badge'
            },
            devicons: {
              path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
              variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg']
            }
          },
          currentProvider: 'devicons',
          config: {}
        },
        storybook: {
          name: 'storybook',
          color: '#FF4785',
          alias: [],
          tags: ['framework', 'documentation', 'ui'],
          available_providers: ['simple_icons', 'shields', 'devicons'],
          providers: {
            simple_icons: {
              path: 'https://cdn.simpleicons.org/storybook/FF4785'
            },
            shields: {
              path: 'https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=black&style=for-the-badge'
            },
            devicons: {
              path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
              variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain-wordmark.svg']
            }
          },
          currentProvider: 'devicons',
          config: {}
        }
      },
      config: {},
      styles: {
        height: 40
      }
    },
    styles: {
      align: 'left',
      spacing: 12
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/music.ts
const musicSectionConfig = {
  props: {
    content: {
      type: 'recently',
      recently: {
        user: '',
        count: 5
      },
      currently: {
        project: 'itstommi',
        itstommi: {
          url: '',
          props: {
            theme: 'dark'
          }
        },
        novatorem: {
          url: ''
        }
      }
    },
    styles: {
      align: 'center'
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/text.ts
const textSectionConfig = {
  props: {
    content: {
      text: 'Hello World!!',
      as: 'p'
    },
    styles: {
      align: 'left'
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/activities.ts
const activitiesSectionConfig = {
  props: {
    content: {
      type: 'medium',
      limit: 4
    },
    styles: {
      align: 'center'
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/snake.ts
const snakeSectionConfig = {
  props: {
    styles: {}
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/image.ts
const imageSectionConfig = {
  props: {
    content: {
      url: 'https://i.imgflip.com/65efzo.gif'
    },
    styles: {
      align: 'center',
      height: 200,
      float: 'none'
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/social.ts
const socialsSectionConfig = {
  props: {
    content: {
      socials: {
        linkedin: {
          icon: 'default',
          message: 'LinkedIn',
          color: '0077B5',
          label: '',
          logo: 'linkedin',
          logoColor: 'white'
        },
        twitter: {
          icon: 'default',
          message: 'Twitch',
          color: '9146FF',
          label: '',
          logo: 'twitch',
          logoColor: 'white'
        },
        discord: {
          icon: 'default',
          message: 'Discord',
          color: '7289DA',
          label: '',
          logo: 'discord',
          logoColor: 'white'
        },
        youtube: {
          icon: 'default',
          message: 'Youtube',
          color: 'FF0000',
          label: '',
          logo: 'youtube',
          logoColor: 'white'
        }
      },
      styles: {
        style: 'for-the-badge',
        type: 'icon',
        height: 40
      }
    },
    styles: {
      align: 'left',
      spacing: 12
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/profile-views.ts
const profileViewsSectionConfig = {
  props: {
    content: {
      type: 'default',
      props: {
        left_color: '',
        right_color: ''
      }
    },
    styles: {
      align: 'center',
      float: 'none'
    }
  }
};

;// CONCATENATED MODULE: ./src/app/config/sections/index.ts










const sections = {
  default: {
    [types.Sections.MUSIC]: musicSectionConfig,
    [types.Sections.ACTIVITIES]: activitiesSectionConfig,
    [types.Sections.SNAKE]: snakeSectionConfig,
    [types.Sections.STATS]: statsSectionConfig,
    [types.Sections.TECHS]: techsSectionConfig,
    [types.Sections.IMAGE]: imageSectionConfig,
    [types.Sections.TEXT]: textSectionConfig,
    [types.Sections.SOCIALS]: socialsSectionConfig,
    [types.Sections.PROFILE_VIEWS]: profileViewsSectionConfig
  }
};

// EXTERNAL MODULE: ./src/app/config/general/index.ts
var general = __webpack_require__(7051);
;// CONCATENATED MODULE: ./src/app/config/index.ts



const config = {
  envs: envs/* envs */.p,
  sections: sections,
  general: general/* general */.C
};

;// CONCATENATED MODULE: ./src/app/index.ts



/***/ }),

/***/ 5015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ CanvasErrorFallback)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/canvas/error/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1akiogg-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;text-align:center;justify-content:center;align-items:center;flex-direction:column;height:100%;gap:", ";h2{font-size:", ";}"], theme.spacings.xlarge, theme.font.sizes.xlarge));
const Content = external_styled_components_default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1akiogg-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;flex-direction:column;gap:", ";max-width:65rem;"], theme.spacings.medium));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1akiogg-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;gap:", ";align-items:center;"], theme.spacings.medium));
const Button = external_styled_components_default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1akiogg-3"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["border-width:", ";border-radius:", ";border-style:solid;border-color:", ";padding:", " ", ";"], theme.border.width, theme.border.radius, theme.colors.border, theme.spacings.xsmall, theme.spacings.medium));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/canvas/error/index.tsx




const CanvasErrorFallback = () => {
  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "\uD83D\uDC1B Oops! Encountered an Issue"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Made some data structure changes that may be conflicting with your current local storage. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " To continue, please clear your local storage"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["If the issue persists, please create a new issue on the", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/maurodesouza/profile-readme-generator/issues/new/choose",
          target: "_blank",
          rel: "noreferrer",
          children: "Github"
        }), ' ', "so that I can assist you further. I appreciate your feedback and will do my best to resolve the issue as quickly as possible. \u2764"]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/maurodesouza/profile-readme-generator/issues/new/choose",
        target: "_blank",
        rel: "noreferrer",
        children: "Create an issue"
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        onClick: handleClear,
        children: "Clear local storage"
      })]
    })]
  });
};



/***/ }),

/***/ 5580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1060);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(977);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2905);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7742);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9332);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5015);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_3__, components__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_3__, components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const Canvas = () => {
  const {
    sections,
    currentSection,
    previewMode
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCanvas */ .$P)();
  const {
    0: hasError,
    1: setHasError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const sectionIds = sections.map(section => section.id);
  const hasSection = !!sections.length;

  const handleOpenContextMenu = e => {
    !previewMode && app__WEBPACK_IMPORTED_MODULE_5__/* .events.contextmenu.open */ .U.contextmenu.open(types__WEBPACK_IMPORTED_MODULE_6__.ContextMenus.SECTION, e);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .OnlyClientSide */ .Al, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Container */ .W2, {
      onContextMenu: handleOpenContextMenu,
      fullHeight: hasError || !hasSection,
      children: [hasSection && !previewMode && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Wrapper */ .im, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .u, {
          position: "left",
          content: "Clear canvas",
          variant: "danger",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
            "aria-label": "Clear canvas",
            onClick: app__WEBPACK_IMPORTED_MODULE_5__/* .events.canvas.clear */ .U.canvas.clear,
            variant: "warn",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Trash, {
              size: 16
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components__WEBPACK_IMPORTED_MODULE_4__/* .ErrorBoundary */ .SV, {
        fallback: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_error__WEBPACK_IMPORTED_MODULE_8__/* .CanvasErrorFallback */ .L, {}),
        onChange: setHasError,
        children: [previewMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Wrapper */ .im, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .u, {
            position: "left",
            content: "Use template",
            variant: "success",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
              "aria-label": "Use template",
              onClick: app__WEBPACK_IMPORTED_MODULE_5__/* .events.template.use */ .U.template.use,
              variant: "success",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Check, {
                size: 16
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .u, {
            position: "left",
            content: "Leave preview",
            variant: "danger",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Button */ .zx, {
              "aria-label": "Leave preview",
              onClick: () => app__WEBPACK_IMPORTED_MODULE_5__/* .events.template.preview */ .U.template.preview(),
              variant: "warn",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.X, {
                size: 16
              })
            })
          })]
        }), hasSection ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.Reorder.Group, {
          axis: "y",
          values: sectionIds,
          onReorder: app__WEBPACK_IMPORTED_MODULE_5__/* .events.canvas.reorder */ .U.canvas.reorder,
          children: sections.map(({
            type,
            id,
            props
          }) => {
            const Section = components__WEBPACK_IMPORTED_MODULE_4__/* .sectionMap */ .I3[type];
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .BaseSection */ .bZ, {
              id: id,
              selected: id === (currentSection === null || currentSection === void 0 ? void 0 : currentSection.id),
              previewMode: previewMode,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Section, _objectSpread({
                id: id
              }, props))
            }, id);
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Welcome */ .cI, {})]
      })]
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "zx": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-2e7rvp-0"
})(["", ""], ({
  theme,
  fullHeight
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;overflow-y:scroll;padding-right:", ";height:", ";&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.xlarge, theme.border.radius, theme.border.width, theme.colors.border, theme.spacings.small, fullHeight ? '100%' : 'auto', theme.colors.border));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-2e7rvp-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:3rem;position:absolute;display:flex;flex-direction:column;padding-block:", ";gap:", ";background:", ";color:", ";top:", ";left:0;transform:translateX(-50%);transition:0.3s;border-color:", ";border-width:", ";border-style:solid;border-radius:10rem;&:hover{color:", ";}"], theme.spacings.medium, theme.spacings.xsmall, theme.colors.bg, theme.colors.text, theme.spacings.medium, theme.colors.border, theme.border.width, theme.colors.error));
const buttonModifiers = {
  warn: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["&:hover{color:", ";}"], theme.colors.error),
  success: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["&:hover{color:", ";}"], theme.colors.secondary)
};
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-2e7rvp-2"
})(["", ""], ({
  theme,
  variant
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:100%;display:grid;place-items:center;padding-block:2px;*{cursor:pointer;}&:hover{color:", ";}", ""], theme.colors.primary, !!variant && buttonModifiers[variant](theme)));

/***/ }),

/***/ 6168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ BasecontextMenuFoward)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/context-menus/base/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-7d3bmk-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["background:", ";padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;max-height:12rem;overflow:auto;&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.colors.bg, theme.spacings.xsmall, theme.border.radius, theme.border.width, theme.colors.border, theme.colors.border));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/context-menus/base/index.tsx




const BaseContextMenu = ({
  children
}, ref) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    ref: ref,
    children: children
  });
};

const BasecontextMenuFoward = /*#__PURE__*/(0,external_react_.forwardRef)(BaseContextMenu);


/***/ }),

/***/ 9416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ contextMenusMap)
});

// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: external "@styled-icons/feather"
var feather_ = __webpack_require__(9308);
;// CONCATENATED MODULE: ./src/components/context-menus/section/actions.ts


const actions = [{
  label: 'Duplicate',
  icon: feather_.Copy,
  action: app/* events.canvas.duplicate */.U.canvas.duplicate
}, {
  label: 'Edit',
  icon: feather_.Edit2,
  action: app/* events.canvas.currentSection */.U.canvas.currentSection
}, {
  label: 'Delete',
  icon: feather_.Trash,
  action: app/* events.canvas.remove */.U.canvas.remove,
  variant: 'danger'
}];

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/context-menus/section/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1fb9b6e-0"
})([""]);
const Action = external_styled_components_default().div.withConfig({
  displayName: "styles__Action",
  componentId: "sc-1fb9b6e-1"
})(["", ""], ({
  theme,
  variant
}) => (0,external_styled_components_.css)(["display:flex;align-items:center;justify-content:space-between;cursor:pointer;& *{cursor:pointer;}&:hover{color:", ";}& + &{margin-top:", ";}"], theme.colors[variant === 'danger' ? 'error' : 'primary'], theme.spacings.small));
const WrapperIcon = external_styled_components_default().div.withConfig({
  displayName: "styles__WrapperIcon",
  componentId: "sc-1fb9b6e-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin-left:", ";"], theme.spacings.large));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/context-menus/section/index.tsx
const _excluded = ["label", "icon", "action"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const SectionContextMenu = ({
  event
}) => {
  const sectionIdRef = (0,external_react_.useRef)();

  const canShow = () => {
    const range = 5;
    let sectionId = '';
    let currentElement = event.target;
    let currentIndex = 0;

    while (!sectionId && currentIndex < range) {
      sectionId = currentElement.getAttribute('data-sectionid') || '';

      if (!sectionId && currentElement.parentElement) {
        currentElement = currentElement.parentElement;
      }

      currentIndex += 1;
    }

    if (sectionId) sectionIdRef.current = sectionId;else app/* events.contextmenu.close */.U.contextmenu.close();
  };

  (0,external_react_.useEffect)(() => {
    canShow();
  }, [event]);
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: actions.map(_ref => {
      let {
        label,
        icon: Icon,
        action
      } = _ref,
          rest = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Action, _objectSpread(_objectSpread({
        onClick: () => [action(sectionIdRef.current), app/* events.contextmenu.close */.U.contextmenu.close()]
      }, rest), {}, {
        children: [label, /*#__PURE__*/jsx_runtime_.jsx(WrapperIcon, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Icon, {
            size: 16
          })
        })]
      }), label);
    })
  });
};


;// CONCATENATED MODULE: ./src/components/context-menus/contexts.ts


const contextMenusMap = {
  [types.ContextMenus.SECTION]: SectionContextMenu
};


/***/ }),

/***/ 6739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ ContextMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6168);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7742);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9416);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5895);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_styles__WEBPACK_IMPORTED_MODULE_5__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ContextMenu = () => {
  const contextMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: context,
    1: setContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: eventProps,
    1: setEventProps
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const handleChange = customEvent => {
    const {
      context,
      event
    } = customEvent.detail;
    event.preventDefault();
    event.stopPropagation();
    setEventProps(event);
    setContext(context);
    app__WEBPACK_IMPORTED_MODULE_3__/* .events.on */ .U.on('click', checkIdfCanCloseContext);
  };

  const handleClose = () => {
    setContext(undefined);
    setEventProps(undefined);
    app__WEBPACK_IMPORTED_MODULE_3__/* .events.off */ .U.off('click', checkIdfCanCloseContext);
  };

  const checkIdfCanCloseContext = e => {
    const contextElement = contextMenuRef.current;
    if (contextElement !== null && contextElement !== void 0 && contextElement.contains(e.target)) return;
    handleClose();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    app__WEBPACK_IMPORTED_MODULE_3__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_2__.Events.CONTEXT_MENU_OPEN, handleChange);
    app__WEBPACK_IMPORTED_MODULE_3__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_2__.Events.CONTEXT_MENU_CLOSE, handleClose);
    return () => {
      app__WEBPACK_IMPORTED_MODULE_3__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_2__.Events.CONTEXT_MENU_OPEN, handleChange);
      app__WEBPACK_IMPORTED_MODULE_3__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_2__.Events.CONTEXT_MENU_CLOSE, handleClose);
      app__WEBPACK_IMPORTED_MODULE_3__/* .events.off */ .U.off('click', checkIdfCanCloseContext);
    };
  }, []);
  const ContextMenu = _contexts__WEBPACK_IMPORTED_MODULE_4__/* .contextMenusMap */ .G[context];
  const {
    pageX = 0,
    pageY = 0
  } = eventProps || {};
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.AnimatePresence, {
    children: !!ContextMenu && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
      x: pageX + 15,
      y: pageY + 15,
      animate: {
        opacity: 1,
        y: 0
      },
      initial: {
        opacity: 0,
        y: 5
      },
      exit: {
        opacity: 0,
        y: 5
      },
      transition: {
        duration: 0.25
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseContextMenu */ .J, {
        ref: contextMenuRef,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ContextMenu, {
          event: eventProps
        })
      })
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5895:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  componentId: "sc-1k1l6cp-0"
})(["", ""], ({
  x,
  y
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;top:", "px;left:", "px;"], y, x));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants)
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
  }
});


/***/ }),

/***/ 7375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ DisplayBlock)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7185);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_1__]);
_styles__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["label", "display", "imgWidth", "imgHeight"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const DisplayBlock = _ref => {
  let {
    label,
    display,
    imgWidth = '40%',
    imgHeight = '40%'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, _objectSpread(_objectSpread({
    variants: _animations__WEBPACK_IMPORTED_MODULE_0__/* .variants.container */ .o.container
  }, rest), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .im, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .Ee, {
        alt: `${label} logo`,
        src: display,
        imgWidth: imgWidth,
        imgHeight: imgHeight
      }), label]
    })
  }));
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7185:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ee": () => (/* binding */ Image),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "im": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Container",
  componentId: "sc-vuj4sj-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:relative;width:100%;padding-top:100%;border-radius:", ";border-width:", ";color:", ";border-style:solid;transition:0.3s;&:hover,&:hover *{color:", ";}"], theme.border.radius, theme.border.width, theme.colors.border, theme.colors.primary));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-vuj4sj-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;width:100%;height:100%;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:", ";color:", ";font-size:", ";transition:0.3s;user-select:none;cursor:pointer;*{cursor:pointer;}"], theme.spacings.xsmall, theme.colors.text, theme.font.sizes.xsmall));
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-vuj4sj-2"
})(["", ""], ({
  imgWidth,
  imgHeight
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:", ";height:", ";"], imgWidth, imgHeight));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ groups)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);


const groups = path => [{
  id: 1,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: `content.socials.${path}.link`,
    label: 'Full link to your profile',
    props: {
      placeholder: 'https://example.com/my-username'
    }
  }]
}, {
  id: 2,
  label: 'Texts',
  accordion: true,
  columns: 2,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: `content.socials.${path}.label`,
    label: 'Left side',
    props: {}
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: `content.socials.${path}.message`,
    label: 'Right side',
    props: {}
  }],
  conditions: {
    path: 'props.content.styles.type',
    be: 'equal',
    value: 'badge'
  }
}, {
  id: 3,
  label: 'Colors',
  accordion: true,
  columns: 2,
  fields: [{
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: `content.socials.${path}.logoColor`,
    label: 'Logo',
    props: {
      column: '1 / 3',
      placeholder: 'Hex color'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: `content.socials.${path}.labelColor`,
    label: 'Left side',
    props: {
      placeholder: 'Hex color'
    }
  }, {
    type: types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT,
    path: `content.socials.${path}.color`,
    label: 'Right side',
    props: {
      placeholder: 'Hex color'
    }
  }],
  conditions: {
    path: 'props.content.styles.type',
    be: 'equal',
    value: 'badge'
  }
}];



/***/ }),

/***/ 2226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ EditSocialItemFoward)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(977);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2908);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3220);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6608);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6726);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_4__, _styles__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_4__, _styles__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const EditSocialItem = ({
  social,
  icon,
  short_name,
  refs = []
}, ref) => {
  const dragControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useDragControls)();
  const [isPresent, safeToRemove] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.usePresence)();
  const {
    0: isOpenEditForm,
    1: setIsOpenEditForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleToggleEditForm = () => {
    if (!isOpenEditForm) handleCloseAllEditForms();
    setIsOpenEditForm(!isOpenEditForm);
  };

  const handleDeleteSocial = () => {
    const path = `content.socials.${social}`;
    app__WEBPACK_IMPORTED_MODULE_3__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value: undefined
    });
  };

  const handleCloseEditForm = () => setIsOpenEditForm(false);

  const handleCloseAllEditForms = () => refs.forEach(item => item === null || item === void 0 ? void 0 : item.closeEditForm());

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    closeEditForm: handleCloseEditForm
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Container */ .W2, _objectSpread(_objectSpread({
    value: social,
    variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .variants.container */ .o.container,
    dragListener: false,
    dragControls: dragControls,
    layout: true
  }, _animations__WEBPACK_IMPORTED_MODULE_6__/* .animations.container */ .s.container), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Content */ .VY, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Drag */ .nc, {
        onPointerDown: event => [handleCloseAllEditForms(), dragControls.start(event)],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Menu, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Logo */ .TR, {
        alt: `${social} ${icon} logo`,
        src: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getSocialImgUrl */ .hy)('icon', social, {
          icon
        })
      }, `${social} ${icon}`), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Wrapper */ .im, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Name */ .VG, {
          children: short_name || social
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .DeleteIcon */ .pJ, {
          size: 16,
          onClick: handleDeleteSocial
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .EditIcon */ .dY, {
        size: 16,
        onClick: handleToggleEditForm
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_styles__WEBPACK_IMPORTED_MODULE_8__/* .Grow */ .Q5, {
      initial: false,
      animate: isOpenEditForm ? 'open' : 'closed',
      variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .variants.icons_container */ .o.icons_container,
      children: (0,_fields__WEBPACK_IMPORTED_MODULE_7__/* .groups */ .X)(social).map(group => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .GroupFields */ .AS, _objectSpread({}, group), group.id))
    })]
  }));
};

const EditSocialItemFoward = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(EditSocialItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6726:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q5": () => (/* binding */ Grow),
/* harmony export */   "TR": () => (/* binding */ Logo),
/* harmony export */   "VG": () => (/* binding */ Name),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "dY": () => (/* binding */ EditIcon),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "nc": () => (/* binding */ Drag),
/* harmony export */   "pJ": () => (/* binding */ DeleteIcon)
/* harmony export */ });
/* unused harmony export GrowContent */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.Reorder.Item).withConfig({
  displayName: "styles__Container",
  componentId: "sc-o2564h-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:100%;display:flex;flex-direction:column;margin-bottom:", ";user-select:none;&:last-child{margin-bottom:0;}"], theme.spacings.small));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-o2564h-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:grid;width:100%;grid:'drag logo menu' 2rem ' drag logo edit' 2rem / 2rem 4rem 1fr;justify-content:start;column-gap:", ";padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;height:6.4rem;"], theme.spacings.medium, theme.spacings.small, theme.border.radius, theme.border.width, theme.colors.border));
const Drag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Drag",
  componentId: "sc-o2564h-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["grid-area:drag;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;color:", ";cursor:grab;*{cursor:grab;}&:hover{color:", ";}&:active{cursor:grabbing;*{cursor:grabbing;}}"], theme.colors.text, theme.colors.primary));
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-o2564h-3"
})(["display:block;grid-area:logo;height:100%;width:100%;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-o2564h-4"
})(["grid-area:menu;width:100%;display:flex;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default().strong.withConfig({
  displayName: "styles__Name",
  componentId: "sc-o2564h-5"
})(["text-transform:capitalize;margin-right:auto;"]);
const DeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Trash).withConfig({
  displayName: "styles__DeleteIcon",
  componentId: "sc-o2564h-6"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;& *{cursor:pointer;}&:hover{color:", ";}"], theme.colors.error));
const EditIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Edit2).withConfig({
  displayName: "styles__EditIcon",
  componentId: "sc-o2564h-7"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["grid-area:edit;align-self:end;justify-self:end;cursor:pointer;& *{cursor:pointer;}&:hover{color:", ";}"], theme.colors.primary));
const Grow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Grow",
  componentId: "sc-o2564h-8"
})(["overflow:hidden;"]);
const GrowContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__GrowContent",
  componentId: "sc-o2564h-9"
})([""]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.hasError !== this.state.hasError) {
      this.props.onChange && this.props.onChange(this.state.hasError);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }

}



/***/ }),

/***/ 4830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/services/index.ts + 1 modules
var services = __webpack_require__(8954);
// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
;// CONCATENATED MODULE: ./src/components/footer/nav.ts


const navItems = [{
  label: 'Github',
  props: {
    href: 'https://github.com/junaidmugloo',
    target: '_blank',
    rel: 'noreferrer'
  }
}, {
  label: 'Help',
  props: {
    href: '/help',
    target: '_blank',
    rel: 'noreferrer'
  }
}, {
  label: 'Share',
  props: {
    as: 'button',
    onClick: () => app/* events.modal.open */.U.modal.open(types.Modals.SHARE)
  }
}];

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/index.ts
var styles = __webpack_require__(9640);
;// CONCATENATED MODULE: ./src/components/footer/styles.ts


const Container = external_styled_components_default().footer.withConfig({
  displayName: "styles__Container",
  componentId: "sc-okjb14-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin-top:auto;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;height:9rem;gap:", ";"], theme.spacings.xlarge, theme.border.radius, theme.border.width, theme.colors.border, theme.spacings.xlarge));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-okjb14-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:none;grid:'image project' 'image mention';height:100%;column-gap:", ";flex-shrink:0;", ""], theme.spacings.small, styles.media.greaterThan('desktop')`
      display: grid;
    `));
const Image = external_styled_components_default().img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-okjb14-2"
})(["grid-area:image;align-self:center;"]);
const Project = external_styled_components_default().strong.withConfig({
  displayName: "styles__Project",
  componentId: "sc-okjb14-3"
})(["grid-area:project;align-self:end;"]);
const Mention = external_styled_components_default().small.withConfig({
  displayName: "styles__Mention",
  componentId: "sc-okjb14-4"
})(["grid-area:mention;align-self:start;"]);
const Nav = external_styled_components_default().nav.withConfig({
  displayName: "styles__Nav",
  componentId: "sc-okjb14-5"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;align-items:center;flex-wrap:wrap;column-gap:calc(", " * 2);row-gap:", ";", ""], theme.spacings.xlarge, theme.spacings.xsmall, styles.media.greaterThan('desktop')`
      column-gap: ${theme.spacings.medium};
    `));
const NavItem = external_styled_components_default().a.withConfig({
  displayName: "styles__NavItem",
  componentId: "sc-okjb14-6"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["color:", ";&:hover{text-decoration:underline;}"], theme.colors.primary));
const GenerateLink = external_styled_components_default().a.withConfig({
  displayName: "styles__GenerateLink",
  componentId: "sc-okjb14-7"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["border:none;display:grid;place-items:center;background:", ";color:", ";border-radius:", ";width:100%;max-width:16.5rem;height:3.2rem;font-weight:", ";padding:0 ", ";transition:filter 0.3s;&:hover{filter:brightness(1.3);}"], theme.colors.secondary, theme.colors.text, theme.border.radius, theme.font.weights.bold, theme.spacings.medium));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/footer/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Image, {
        src: "/assets/icon-32.png",
        alt: "A white circle with a dark file icon outlined in the center"
      }), /*#__PURE__*/jsx_runtime_.jsx(Project, {
        children: "Git Readme Creator"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mention, {
        children: ["Developed and maintained by", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://kashtechsolutions.com",
          target: "_blank",
          rel: "noreferrer",
          children: "Kashtech Solutions"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Nav, {
      children: navItems.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(NavItem, _objectSpread(_objectSpread({}, item.props), {}, {
        children: item.label
      }), i))
    }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/result",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(GenerateLink, {
        onClick: () => services/* api.put */.h.put('generated-readmes'),
        children: "Generate README"
      })
    })]
  });
};



/***/ }),

/***/ 413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ variants)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2908);

const variants = (0,utils__WEBPACK_IMPORTED_MODULE_0__/* .createFramerMotionVariants */ .Zk)({
  icon: {
    open: {
      rotate: 90,
      transition: {
        duration: 0.2
      }
    },
    closed: {
      rotate: 0,
      transition: {
        duration: 0.2
      }
    }
  },
  fields_container: {
    default: {
      pointerEvents: 'all',
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    },
    open: {
      pointerEvents: 'all',
      marginTop: 16,
      height: 'auto',
      transition: {
        staggerChildren: 0.05,
        duration: 0.2
      }
    },
    closed: {
      pointerEvents: 'none',
      marginTop: 0,
      height: 0,
      transition: {
        duration: 0.1,
        when: 'afterChildren'
      }
    }
  },
  field: {
    open: {
      x: 0,
      opacity: 1
    },
    closed: {
      x: [0, 0, -10],
      opacity: 0,
      transition: {
        duration: 0.1
      }
    }
  }
});


/***/ }),

/***/ 509:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ GroupFields)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1060);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(413);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1968);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_6__]);
([components__WEBPACK_IMPORTED_MODULE_2__, hooks__WEBPACK_IMPORTED_MODULE_3__, _styles__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const _excluded = ["column"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const GroupFields = ({
  label,
  columns = 1,
  fields,
  conditions,
  accordion = false
}) => {
  const {
    0: isOpenAccordion,
    1: setIsOpenAccordion
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    currentSection: obj
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCanvas */ .$P)();

  const handleOpenAccordion = () => {
    hasAccordion && setIsOpenAccordion(!isOpenAccordion);
  };

  const canRender = !!conditions ? (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .checkDeepObjectValue */ ._X)(_objectSpread({
    obj
  }, conditions)) : true;
  const hasAccordion = !!label && accordion;
  const accordioState = isOpenAccordion ? 'open' : 'closed';
  const animationState = hasAccordion ? accordioState : 'default';
  return canRender ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W2, {
    children: [!!label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Label */ .__, {
      hasAccordion: hasAccordion,
      onClick: handleOpenAccordion,
      children: [hasAccordion && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .WrapperIcon */ .aS, {
        initial: false,
        animate: animationState,
        variants: _animations__WEBPACK_IMPORTED_MODULE_5__/* .variants.icon */ .o.icon,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.ChevronRight, {
          size: 18
        })
      }), label]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Grow */ .Q5, {
      initial: false,
      animate: animationState,
      variants: _animations__WEBPACK_IMPORTED_MODULE_5__/* .variants.fields_container */ .o.fields_container,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Fields */ .Iv, {
        columns: columns,
        children: fields.map(field => {
          const Input = components__WEBPACK_IMPORTED_MODULE_2__/* .inputMap */ .bA[field.type];

          const _ref = (field === null || field === void 0 ? void 0 : field.props) ?? {},
                {
            column
          } = _ref,
                rest = _objectWithoutProperties(_ref, _excluded);

          const canRender = !!field.conditions ? (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .checkDeepObjectValue */ ._X)(_objectSpread({
            obj
          }, field.conditions)) : true;
          const defaultValue = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .getDeepObjectProperty */ .yo)(obj === null || obj === void 0 ? void 0 : obj.props, field.path);
          return canRender ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Field */ .gN, {
            variants: _animations__WEBPACK_IMPORTED_MODULE_5__/* .variants.field */ .o.field,
            column: column,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Input, _objectSpread({
              label: field.label,
              path: field.path,
              defaultValue: defaultValue
            }, rest))
          }, field.path) : null;
        })
      })
    })]
  }) : null;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1968:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iv": () => (/* binding */ Fields),
/* harmony export */   "Q5": () => (/* binding */ Grow),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "__": () => (/* binding */ Label),
/* harmony export */   "aS": () => (/* binding */ WrapperIcon),
/* harmony export */   "gN": () => (/* binding */ Field)
/* harmony export */ });
/* unused harmony export Reset */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Container",
  componentId: "sc-eh9h9a-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin-bottom:", ";& + & ", "{padding-top:", ";}"], theme.spacings.medium, Label, theme.spacings.xsmall));
const labelModifiers = {
  accordion: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;margin-bottom:0;&:hover{color:", ";}"], theme.colors.primary)
};
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "styles__Label",
  componentId: "sc-eh9h9a-1"
})(["", ""], ({
  theme,
  hasAccordion
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;align-items:center;margin-bottom:", ";border-top-width:", ";border-top-color:", ";font-size:", ";", ""], theme.spacings.medium, theme.border.width, theme.colors.border, theme.font.sizes.medium, hasAccordion && labelModifiers.accordion(theme)));
const WrapperIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__WrapperIcon",
  componentId: "sc-eh9h9a-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin-right:", ";color:inherit;display:grid;place-items:center;"], theme.spacings.xsmall));
const Grow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Grow",
  componentId: "sc-eh9h9a-3"
})([""]);
const Fields = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Fields",
  componentId: "sc-eh9h9a-4"
})(["", ""], ({
  theme,
  columns
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:grid;grid-row-gap:", ";grid-column-gap:", ";grid-template-columns:repeat(", ",1fr);"], theme.spacings.small, theme.spacings.medium, columns));
const Field = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Field",
  componentId: "sc-eh9h9a-5"
})(["", ""], ({
  column
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["grid-column:", ";"], column));
const Reset = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "styles__Reset",
  componentId: "sc-eh9h9a-6"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:block;font-size:", ";color:", ";text-align:right;margin-top:", ";cursor:pointer;&:hover{text-decoration:underline;}"], theme.font.sizes.xsmall, theme.colors.primary, theme.spacings.small));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ OnlyClientSide),
  "h": () => (/* reexport */ Portal)
});

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
;// CONCATENATED MODULE: ./src/components/helpers/portal.ts


const Portal = ({
  children
}) => /*#__PURE__*/external_react_dom_default().createPortal(children, document.body);


// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/helpers/only-client-side.tsx




const OnlyClientSide = ({
  children
}) => {
  const {
    0: canRender,
    1: setCanRender
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setCanRender(true);
  }, []);
  return canRender ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: children
  }) : null;
};


;// CONCATENATED MODULE: ./src/components/helpers/index.ts



/***/ }),

/***/ 977:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _footer__WEBPACK_IMPORTED_MODULE_11__.$),
/* harmony export */   "AS": () => (/* reexport safe */ _group_fields__WEBPACK_IMPORTED_MODULE_9__.A),
/* harmony export */   "Al": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "I3": () => (/* reexport safe */ _sections__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "Jc": () => (/* reexport safe */ _inputs__WEBPACK_IMPORTED_MODULE_5__.Jc),
/* harmony export */   "L9": () => (/* reexport safe */ _display_block__WEBPACK_IMPORTED_MODULE_7__.L),
/* harmony export */   "Ph": () => (/* reexport safe */ _inputs__WEBPACK_IMPORTED_MODULE_5__.Ph),
/* harmony export */   "SV": () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_16__.S),
/* harmony export */   "T_": () => (/* reexport safe */ _readme_result__WEBPACK_IMPORTED_MODULE_3__.T),
/* harmony export */   "Xz": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_1__.X),
/* harmony export */   "bA": () => (/* reexport safe */ _inputs__WEBPACK_IMPORTED_MODULE_5__.bA),
/* harmony export */   "bZ": () => (/* reexport safe */ _sections__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "cI": () => (/* reexport safe */ _welcome__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   "eB": () => (/* reexport safe */ _edit_social_item__WEBPACK_IMPORTED_MODULE_10__.e),
/* harmony export */   "h_": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "mQ": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_6__.m),
/* harmony export */   "mp": () => (/* reexport safe */ _tree__WEBPACK_IMPORTED_MODULE_17__.m),
/* harmony export */   "sY": () => (/* reexport safe */ _tech_icon_variants__WEBPACK_IMPORTED_MODULE_8__.s),
/* harmony export */   "s_": () => (/* reexport safe */ _panels__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "u": () => (/* reexport safe */ _tooltip__WEBPACK_IMPORTED_MODULE_15__.u),
/* harmony export */   "u_": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_14__.u),
/* harmony export */   "xV": () => (/* reexport safe */ _context_menus__WEBPACK_IMPORTED_MODULE_13__.x)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5580);
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2357);
/* harmony import */ var _readme_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4681);
/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6744);
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6626);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1874);
/* harmony import */ var _display_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7375);
/* harmony import */ var _tech_icon_variants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2825);
/* harmony import */ var _group_fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(509);
/* harmony import */ var _edit_social_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2226);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4830);
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8973);
/* harmony import */ var _context_menus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6739);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3876);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(920);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5642);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4951);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_canvas__WEBPACK_IMPORTED_MODULE_1__, _sections__WEBPACK_IMPORTED_MODULE_2__, _readme_result__WEBPACK_IMPORTED_MODULE_3__, _panels__WEBPACK_IMPORTED_MODULE_4__, _inputs__WEBPACK_IMPORTED_MODULE_5__, _tabs__WEBPACK_IMPORTED_MODULE_6__, _display_block__WEBPACK_IMPORTED_MODULE_7__, _tech_icon_variants__WEBPACK_IMPORTED_MODULE_8__, _group_fields__WEBPACK_IMPORTED_MODULE_9__, _edit_social_item__WEBPACK_IMPORTED_MODULE_10__, _context_menus__WEBPACK_IMPORTED_MODULE_13__, _modals__WEBPACK_IMPORTED_MODULE_14__, _tooltip__WEBPACK_IMPORTED_MODULE_15__]);
([_canvas__WEBPACK_IMPORTED_MODULE_1__, _sections__WEBPACK_IMPORTED_MODULE_2__, _readme_result__WEBPACK_IMPORTED_MODULE_3__, _panels__WEBPACK_IMPORTED_MODULE_4__, _inputs__WEBPACK_IMPORTED_MODULE_5__, _tabs__WEBPACK_IMPORTED_MODULE_6__, _display_block__WEBPACK_IMPORTED_MODULE_7__, _tech_icon_variants__WEBPACK_IMPORTED_MODULE_8__, _group_fields__WEBPACK_IMPORTED_MODULE_9__, _edit_social_item__WEBPACK_IMPORTED_MODULE_10__, _context_menus__WEBPACK_IMPORTED_MODULE_13__, _modals__WEBPACK_IMPORTED_MODULE_14__, _tooltip__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jc": () => (/* reexport safe */ _simple_input__WEBPACK_IMPORTED_MODULE_4__.J),
/* harmony export */   "Ph": () => (/* reexport safe */ _select__WEBPACK_IMPORTED_MODULE_3__.P),
/* harmony export */   "bA": () => (/* binding */ inputMap)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6723);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2080);
/* harmony import */ var _simple_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7842);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_select__WEBPACK_IMPORTED_MODULE_3__]);
_select__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const inputMap = {
  [types__WEBPACK_IMPORTED_MODULE_0__.Inputs.TEXT]: _input__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .I,
  [types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SWITCH]: _switch__WEBPACK_IMPORTED_MODULE_2__/* .Switch */ .r,
  [types__WEBPACK_IMPORTED_MODULE_0__.Inputs.SELECT]: _select__WEBPACK_IMPORTED_MODULE_3__/* .Select */ .P
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _simple_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7842);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2908);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["label", "path", "defaultValue"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Input = _ref => {
  let {
    label,
    path,
    defaultValue
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const handleUpdate = () => {
    const {
      value
    } = inputRef.current;
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_simple_input__WEBPACK_IMPORTED_MODULE_1__/* .SimpleInput */ .J, _objectSpread({
    ref: inputRef,
    label: label,
    defaultValue: defaultValue,
    onInput: (0,utils__WEBPACK_IMPORTED_MODULE_3__/* .debounce */ .Ds)(handleUpdate)
  }, rest));
};



/***/ }),

/***/ 2080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1060);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6840);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks__WEBPACK_IMPORTED_MODULE_2__]);
hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const _excluded = ["label", "path", "defaultValue", "options", "onChange"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const Select = _ref => {
  let {
    label,
    path,
    defaultValue,
    options = [],
    onChange
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const defaultPlaceholder = 'Chose an option';
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const forceUpdate = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useForceUpdate */ .NW)();
  const {
    0: selectedOption,
    1: setSelectedOption
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options.find(option => option.value === defaultValue));
  const {
    0: isDropdownOpen,
    1: setIsDropdownOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isToUpDropdown,
    1: setIsToUpDropdown
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const clearInputValue = () => inputRef.current.value = '';

  const handleSelect = option => () => {
    setSelectedOption(option);
    clearInputValue();
    setIsDropdownOpen(false);
    const value = (option === null || option === void 0 ? void 0 : option.value) || '';
    if (onChange) onChange(value);else app__WEBPACK_IMPORTED_MODULE_3__/* .events.canvas.edit */ .U.canvas.edit({
      path: path,
      value
    });
  };

  const handleBlur = event => {
    var _dropdownRef$current;

    if ((_dropdownRef$current = dropdownRef.current) !== null && _dropdownRef$current !== void 0 && _dropdownRef$current.contains(event.relatedTarget)) return;
    setIsDropdownOpen(false);
    clearInputValue();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const marginToBottom = 40;
    const translate = 10;
    const dropdown = dropdownRef.current;
    const offsetBottom = (dropdown === null || dropdown === void 0 ? void 0 : dropdown.getBoundingClientRect().bottom) || 0;
    const windownHeight = window.innerHeight - marginToBottom;
    setIsToUpDropdown(offsetBottom - translate > windownHeight);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const option = options.find(option => option.value === defaultValue);
    setSelectedOption(option);
  }, [defaultValue]);
  const {
    value = ''
  } = inputRef.current || {};
  const filteredOptions = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .filterArrayByQueryMatch */ .yk)(value, options, ['label']);
  const canShowClearButton = !!selectedOption && !!rest.clearable;
  const placeholder = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) || rest.placeholder || defaultPlaceholder;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W2, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Input */ .II, {
      label: label,
      ref: inputRef,
      isSelected: !!selectedOption,
      placeholder: placeholder,
      onInput: (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .debounce */ .Ds)(forceUpdate, 200),
      onFocus: () => setIsDropdownOpen(true),
      onBlur: handleBlur
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Wrapper */ .im, {
      show: canShowClearButton,
      onClick: handleSelect(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.X, {
        size: 20
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Dropdown */ .Lt, {
      ref: dropdownRef,
      open: isDropdownOpen,
      openToUp: isToUpDropdown,
      children: !!filteredOptions.length ? filteredOptions.map(option => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Option */ .Wx, {
        onClick: handleSelect(option),
        children: option.label
      }, option.value)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Option */ .Wx, {
        children: ["No result for \"", value, "\""]
      })
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "Lt": () => (/* binding */ Dropdown),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "Wx": () => (/* binding */ Option),
/* harmony export */   "im": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _simple_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7842);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1nmsen8-0"
})(["width:100%;position:relative;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_simple_input__WEBPACK_IMPORTED_MODULE_1__/* .SimpleInput */ .J).withConfig({
  displayName: "styles__Input",
  componentId: "sc-1nmsen8-1"
})(["", ""], ({
  theme,
  isSelected
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ""], isSelected && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["& input::placeholder{color:", ";}"], theme.colors.text)));
const dropdownModifiers = {
  open: () => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["opacity:1;transform:translateY(0);pointer-events:all;"]),
  toUp: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["top:unset;transform:translateY(-10px);bottom:calc(100% + ", ");"], theme.spacings.xsmall)
};
const Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Dropdown",
  componentId: "sc-1nmsen8-2"
})(["", ""], ({
  theme,
  open,
  openToUp
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["z-index:1;position:absolute;left:0;right:0;top:calc(100% + ", ");width:100%;background:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;display:flex;flex-direction:column;overflow:auto;max-height:20rem;opacity:0;transform:translateY(10px);transition:0.2s;pointer-events:none;", ";", ";&::-webkit-scrollbar{width:0.8rem;border-radius:0 ", " ", " 0;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.xsmall, theme.colors.bg, theme.border.radius, theme.border.width, theme.colors.border, openToUp && dropdownModifiers.toUp(theme), open && dropdownModifiers.open, theme.border.radius, theme.border.radius, theme.colors.border));
const Option = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Option",
  componentId: "sc-1nmsen8-3"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["flex-shrink:0;width:100%;padding:", " ", ";cursor:pointer;background:", ";border:none;text-align:left;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;&:hover{filter:brightness(150%);}"], theme.spacings.xsmall, theme.spacings.medium, theme.colors.bg));
const wrapperModifiers = {
  show: () => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["opacity:1;transform:translateX(0);pointer-events:all;"])
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1nmsen8-4"
})(["", ""], ({
  show
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;width:3.8rem;height:3.8rem;bottom:0;right:0;display:grid;place-items:center;cursor:pointer;transition:0.2s;opacity:0;transform:translateX(5px);pointer-events:none;", ";*{cursor:pointer;}"], show && wrapperModifiers.show));

/***/ }),

/***/ 7842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ FowardSimpleInput)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/inputs/simple-input/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-dk84am-0"
})(["width:100%;"]);
const Label = external_styled_components_default().span.withConfig({
  displayName: "styles__Label",
  componentId: "sc-dk84am-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:block;text-align:left;font-weight:", ";margin-bottom:", ";width:100%;"], theme.font.weights.bold, theme.spacings.xsmall));
const Error = external_styled_components_default().span.withConfig({
  displayName: "styles__Error",
  componentId: "sc-dk84am-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:block;text-align:left;color:", ";font-size:", ";margin-top:", ";"], theme.colors.error, theme.font.sizes.xsmall, theme.spacings.xsmall));
const inputModifiers = {
  textarea: theme => (0,external_styled_components_.css)(["resize:none;min-height:10rem;height:10rem;max-height:10rem;padding-right:", ";&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.small, theme.colors.border)
};
const Input = external_styled_components_default().input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-dk84am-3"
})(["", ""], ({
  theme,
  as = ''
}) => (0,external_styled_components_.css)(["width:100%;background:transparent;border-radius:", ";border-width:", ";border-color:", ";border-style:solid;padding:8px 12px;", ";&:disabled{opacity:0.8;cursor:not-allowed;}"], theme.border.radius, theme.border.width, theme.colors.border, as === 'textarea' && inputModifiers.textarea(theme)));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/inputs/simple-input/index.tsx
const _excluded = ["label", "error", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SimpleInput = (_ref, ref) => {
  let {
    label,
    error,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const inputRef = (0,external_react_.useRef)(null);
  (0,external_react_.useImperativeHandle)(ref, () => inputRef.current);
  (0,external_react_.useEffect)(() => {
    inputRef.current.value = rest.defaultValue || '';
  }, [rest.defaultValue]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    className: className,
    children: [label && /*#__PURE__*/jsx_runtime_.jsx(Label, {
      children: label
    }), /*#__PURE__*/jsx_runtime_.jsx(Input, _objectSpread({
      ref: inputRef
    }, rest)), error && /*#__PURE__*/jsx_runtime_.jsx(Error, {
      children: error
    })]
  });
};

const FowardSimpleInput = /*#__PURE__*/(0,external_react_.forwardRef)(SimpleInput);


/***/ }),

/***/ 6723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ switch_Switch)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/inputs/switch/styles.ts

const containerModifiers = {
  column: () => (0,external_styled_components_.css)(["flex-direction:column-reverse;align-items:start;", "{margin-bottom:0;}"], Label)
};
const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1fpps8y-0"
})(["", ""], ({
  direction
}) => (0,external_styled_components_.css)(["display:flex;align-items:center;flex-direction:row;", ";"], direction === 'column' && containerModifiers.column));
const Switch = external_styled_components_default().label.withConfig({
  displayName: "styles__Switch",
  componentId: "sc-1fpps8y-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["position:relative;display:inline-block;height:3.8rem;width:5.8rem;padding:", ";margin-left:-", ";cursor:pointer;& *{cursor:pointer;}"], theme.spacings.small, theme.spacings.xsmall));
const Slider = external_styled_components_default().div.withConfig({
  displayName: "styles__Slider",
  componentId: "sc-1fpps8y-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["height:100%;width:100%;background:", ";opacity:0.3;border-radius:10rem;transition:0.3s;"], theme.colors.text));
const Track = external_styled_components_default().div.withConfig({
  displayName: "styles__Track",
  componentId: "sc-1fpps8y-3"
})(["position:absolute;top:0;bottom:0;left:0;width:3.8rem;display:flex;align-items:center;justify-content:center;transition:0.3s;"]);
const Dot = external_styled_components_default().div.withConfig({
  displayName: "styles__Dot",
  componentId: "sc-1fpps8y-4"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:2rem;height:2rem;border-radius:10rem;background:", ";transition:0.3s;"], theme.colors.text));
const Input = external_styled_components_default().input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1fpps8y-5"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["position:absolute;opacity:0;height:0;width:0;&:checked ~{& ", "{transform:translateX(1.5rem);}& ", ",& ", " ", "{background:", ";}}"], Track, Slider, Track, Dot, theme.colors.primary));
const Label = external_styled_components_default().span.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1fpps8y-6"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:block;font-weight:", ";margin-bottom:2px;width:100%;"], theme.font.weights.bold));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/inputs/switch/index.tsx
const _excluded = ["label", "path", "defaultValue"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const switch_Switch = _ref => {
  let {
    label,
    path,
    defaultValue
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    0: checked,
    1: setChecked
  } = (0,external_react_.useState)(!!defaultValue);

  const handleUpdate = event => {
    const {
      checked: value
    } = event.target;
    app/* events.canvas.edit */.U.canvas.edit({
      path,
      value
    });
    setChecked(!!value);
  };

  (0,external_react_.useEffect)(() => {
    setChecked(!!defaultValue);
  }, [defaultValue]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, _objectSpread(_objectSpread({}, rest), {}, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Switch, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input, {
        type: "checkbox",
        checked: checked,
        onChange: handleUpdate
      }), /*#__PURE__*/jsx_runtime_.jsx(Slider, {}), /*#__PURE__*/jsx_runtime_.jsx(Track, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Dot, {})
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Label, {
      children: label
    })]
  }));
};



/***/ }),

/***/ 9811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ BaseModal)
});

// EXTERNAL MODULE: external "@styled-icons/feather"
var feather_ = __webpack_require__(9308);
// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/modals/base/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1asfqk3-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:100%;background:", ";padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;"], theme.colors.bg, theme.spacings.medium, theme.border.radius, theme.border.width, theme.colors.border));
const Header = external_styled_components_default().div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-1asfqk3-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:100%;display:grid;grid:'title close' / 1fr 3rem;margin-bottom:", ";"], theme.spacings.small));
const Title = external_styled_components_default().h3.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1asfqk3-2"
})(["grid-area:title;"]);
const CloseButton = external_styled_components_default().button.withConfig({
  displayName: "styles__CloseButton",
  componentId: "sc-1asfqk3-3"
})(["border:none;background:none;grid-area:close;cursor:pointer;*{cursor:pointer;}"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1asfqk3-4"
})([""]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/modals/base/index.tsx






const BaseModal = ({
  children,
  title
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
      children: [title && /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx(CloseButton, {
        onClick: app/* events.modal.close */.U.modal.close,
        children: /*#__PURE__*/jsx_runtime_.jsx(feather_.X, {
          size: 24
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      children: children
    })]
  });
};



/***/ }),

/***/ 4496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ ImproveSkillsModal)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/modals/base/index.tsx + 1 modules
var base = __webpack_require__(9811);
;// CONCATENATED MODULE: ./src/components/modals/improve-skills/items.ts
const getItems = (isPt = true) => [{
  image: '/assets/js-circle-icon.svg',
  name: 'Professional Full Stack JavaScript Programmer',
  description: 'Become a javascript developer through a practical course focused on the job market!',
  link: 'https://go.hotmart.com/I71651104V?ap=5b5e',
  tags: ['course', 'pt-br']
}, {
  image: '/assets/clean_code_book.jpg',
  name: 'Clean Code',
  description: 'A Handbook of Agile Software Craftsmanship from the Legendary Robert C. Martin (“Uncle Bob”).',
  link: isPt ? 'https://amzn.to/3mvQx47' : 'https://amzn.to/3NAXHA0',
  tags: ['book']
}, {
  image: '/assets/clean_architecture_book.jpg',
  name: 'Clean Architecture',
  description: 'Practical Software Architecture Solutions from the Legendary Robert C. Martin (“Uncle Bob”).',
  link: isPt ? 'https://amzn.to/3muVE4E' : 'https://amzn.to/3NHYUFN',
  tags: ['book']
}, {
  image: '/assets/eletronics-icon.svg',
  name: 'Improve your setup!',
  description: 'Everything you need to work, play, study or have fun!',
  link: isPt ? 'https://amzn.to/3aCGszL' : 'https://amzn.to/3QcCQon',
  tags: ['eletronics']
}];


// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/modals/improve-skills/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-zrx6n8-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;flex-direction:column;gap:", ";"], theme.spacings.xsmall));
const Card = external_styled_components_default().div.withConfig({
  displayName: "styles__Card",
  componentId: "sc-zrx6n8-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:100%;background:", ";padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;display:grid;grid:'image name name' 'image description description' '. tags see-more' / 4rem 1fr 6rem;column-gap:", ";"], theme.colors.bg, theme.spacings.medium, theme.border.radius, theme.border.width, theme.colors.border, theme.spacings.small));
const Image = external_styled_components_default().img.withConfig({
  displayName: "styles__Image",
  componentId: "sc-zrx6n8-2"
})(["grid-area:image;width:100%;"]);
const Name = external_styled_components_default().h3.withConfig({
  displayName: "styles__Name",
  componentId: "sc-zrx6n8-3"
})(["grid-area:name;align-self:start;"]);
const Description = external_styled_components_default().p.withConfig({
  displayName: "styles__Description",
  componentId: "sc-zrx6n8-4"
})(["grid-area:description;align-self:start;"]);
const Tags = external_styled_components_default().div.withConfig({
  displayName: "styles__Tags",
  componentId: "sc-zrx6n8-5"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["grid-area:tags;display:flex;gap:", ";margin-top:", ";"], theme.spacings.xsmall, theme.spacings.small));
const Tag = external_styled_components_default().span.withConfig({
  displayName: "styles__Tag",
  componentId: "sc-zrx6n8-6"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["font-size:", ";padding:calc(", " / 4) ", ";border-radius:1rem;background:", ";color:", ";font-weight:", ";"], theme.font.sizes.xsmall, theme.spacings.xsmall, theme.spacings.xsmall, theme.colors.tertiary, theme.colors.bg, theme.font.weights.bold));
const SeeMore = external_styled_components_default().a.withConfig({
  displayName: "styles__SeeMore",
  componentId: "sc-zrx6n8-7"
})(["grid-area:see-more;justify-self:end;align-self:center;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/modals/improve-skills/index.tsx







const ImproveSkillsModal = () => {
  const {
    0: isPtBr,
    1: setIsPtBr
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const hasLangPtBr = !!navigator.languages.find(lang => lang.match(/br/));
    setIsPtBr(hasLangPtBr);
  }, []);
  const items = getItems(isPtBr);
  return /*#__PURE__*/jsx_runtime_.jsx(base/* BaseModal */.I, {
    title: "Improve your skills!",
    children: /*#__PURE__*/jsx_runtime_.jsx(Container, {
      children: items.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Image, {
          src: item.image
        }), /*#__PURE__*/jsx_runtime_.jsx(Name, {
          children: item.name
        }), /*#__PURE__*/jsx_runtime_.jsx(Description, {
          children: item.description
        }), /*#__PURE__*/jsx_runtime_.jsx(Tags, {
          children: item.tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(Tag, {
            children: tag
          }, tag))
        }), /*#__PURE__*/jsx_runtime_.jsx(SeeMore, {
          href: item.link,
          target: "_blank",
          children: "See more"
        })]
      }, item.name))
    })
  });
};



/***/ }),

/***/ 3876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7742);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5819);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2683);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modals__WEBPACK_IMPORTED_MODULE_3__]);
_modals__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Modal = () => {
  const {
    0: modal,
    1: setModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const Modal = _modals__WEBPACK_IMPORTED_MODULE_3__/* .modals */ .q[modal] || (() => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}));

  const handleChangeModal = event => setModal(event.detail);

  const handleCloseModal = () => setModal(undefined);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    app__WEBPACK_IMPORTED_MODULE_1__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_2__.Events.MODAL_OPEN, handleChangeModal);
    app__WEBPACK_IMPORTED_MODULE_1__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_2__.Events.MODAL_CLOSE, handleCloseModal);
    return () => {
      app__WEBPACK_IMPORTED_MODULE_1__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_2__.Events.MODAL_OPEN, handleChangeModal);
      app__WEBPACK_IMPORTED_MODULE_1__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_2__.Events.MODAL_CLOSE, handleCloseModal);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
    open: !!modal,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .VY, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Modal, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_styles__WEBPACK_IMPORTED_MODULE_4__/* .Overlay */ .aV, {
      onClick: app__WEBPACK_IMPORTED_MODULE_1__/* .events.modal.close */ .U.modal.close
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ modals)
/* harmony export */ });
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7742);
/* harmony import */ var _improve_skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4496);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3052);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_share__WEBPACK_IMPORTED_MODULE_2__]);
_share__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const modals = {
  [types__WEBPACK_IMPORTED_MODULE_0__.Modals.IMPROVE_SKILLS]: _improve_skills__WEBPACK_IMPORTED_MODULE_1__/* .ImproveSkillsModal */ .d,
  [types__WEBPACK_IMPORTED_MODULE_0__.Modals.SHARE]: _share__WEBPACK_IMPORTED_MODULE_2__/* .ShareModal */ .V
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ShareModal)
/* harmony export */ });
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9811);
/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8079);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2743);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_2__]);
components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ShareModal = () => {
  const shareUrl = app__WEBPACK_IMPORTED_MODULE_1__/* .config.general.urls.app */ .v.general.urls.app;

  const handleCopyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_base__WEBPACK_IMPORTED_MODULE_3__/* .BaseModal */ .I, {
    title: "Share with your friends!",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W2, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: "This is amazing! I appreciate you for helping me by sharing my app, thank you very much \u2764"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Socials */ .I_, {
        children: _socials__WEBPACK_IMPORTED_MODULE_4__/* .socials.map */ .U.map(({
          id,
          icon: Icon,
          share: Share
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Social */ .g_, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Share, {
            url: shareUrl,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Icon, {
              size: 32
            })
          })
        }, id))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$_, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components__WEBPACK_IMPORTED_MODULE_2__/* .SimpleInput */ .Jc, {
          defaultValue: shareUrl,
          disabled: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styles__WEBPACK_IMPORTED_MODULE_5__/* .CopyButton */ .qi, {
          onClick: handleCopyToClipboard,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__.Copy, {
            size: 16
          })
        })]
      })]
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ socials)
/* harmony export */ });
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_1__);


const socials = [{
  id: 1,
  icon: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__.Linkedin,
  share: react_share__WEBPACK_IMPORTED_MODULE_1__.LinkedinShareButton
}, {
  id: 2,
  icon: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__.Twitter,
  share: react_share__WEBPACK_IMPORTED_MODULE_1__.TwitterShareButton
}, {
  id: 3,
  icon: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__.Facebook,
  share: react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookShareButton
}];


/***/ }),

/***/ 2743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* binding */ Footer),
/* harmony export */   "I_": () => (/* binding */ Socials),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "g_": () => (/* binding */ Social),
/* harmony export */   "qi": () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1yl2u9y-0"
})([""]);
const Socials = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Socials",
  componentId: "sc-1yl2u9y-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;justify-content:center;gap:", ";margin-block:", ";"], theme.spacings.large, theme.spacings.xlarge));
const Social = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Social",
  componentId: "sc-1yl2u9y-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-width:", ";border-style:solid;border-radius:10rem;padding:1.5rem;color:", ";&:hover{color:", ";}svg{color:inherit;&:hover{color:inherit;}}*{cursor:pointer;}"], theme.border.width, theme.colors.text, theme.colors.primary));
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Footer",
  componentId: "sc-1yl2u9y-3"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin-top:", ";position:relative;"], theme.spacings.small));
const CopyButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__CopyButton",
  componentId: "sc-1yl2u9y-4"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;top:50%;right:", ";transform:translateY(-50%);*{cursor:pointer;}svg{color:", ";&:hover{color:", ";}}"], theme.spacings.medium, theme.colors.text, theme.colors.primary));

/***/ }),

/***/ 2683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "aV": () => (/* binding */ Overlay)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const containerModifiers = {
  open: () => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["pointer-events:all;", "{opacity:1;}", "{opacity:1;}"], Overlay, Content)
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-158955h-0"
})(["", ""], ({
  open
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;inset:0;width:100%;height:100%;display:grid;place-items:center;pointer-events:none;", ""], open && containerModifiers.open));
const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Overlay",
  componentId: "sc-158955h-1"
})(["position:absolute;inset:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:40;opacity:0;transition:0.3s;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-158955h-2"
})(["position:relative;width:100%;max-width:48rem;z-index:50;opacity:0;transition:0.3s;"]);

/***/ }),

/***/ 8119:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Panel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1060);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var _panels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5273);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5295);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks__WEBPACK_IMPORTED_MODULE_3__]);
hooks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const chevrons = {
  left: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.ChevronLeft,
  right: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_1__.ChevronRight
};

const Panel = ({
  side,
  initialPanel
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: panel,
    1: setPanel
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialPanel);
  const Panel = _panels__WEBPACK_IMPORTED_MODULE_5__/* .panels */ .h[panel] || _panels__WEBPACK_IMPORTED_MODULE_5__/* .panels["default"] */ .h["default"];

  const handleChangePanel = event => {
    setPanel(event.detail);
    setIsOpen(true);
  };

  const handleClosePanel = () => setPanel(undefined);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      openEvent,
      closeEvent
    } = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .getPanelSideEvent */ .Ec)(side);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(openEvent, handleChangePanel);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(closeEvent, handleClosePanel);
    return () => {
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(openEvent, handleChangePanel);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(closeEvent, handleClosePanel);
    };
  }, []);
  (0,hooks__WEBPACK_IMPORTED_MODULE_3__/* .useOutsideClick */ .O3)(containerRef, () => setIsOpen(false), isOpen);
  const Chevron = chevrons[side];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W2, {
    ref: containerRef,
    close: !isOpen,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Toggle */ .ZD, {
      "aria-label": `Toggle ${side} panel`,
      close: !isOpen,
      side: side,
      onClick: () => setIsOpen(!isOpen),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Chevron, {
        size: 24
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Wrapper */ .im, {
      side: side,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .xu, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Panel, {})
      })
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "ZD": () => (/* binding */ Toggle),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "xu": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9640);


const containerModifiers = {
  close: () => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ""], styles__WEBPACK_IMPORTED_MODULE_1__.media.lessThan('laptop')`

      ${Wrapper} {
        border: none;
        box-shadow: none;
        z-index: -10;
      }

      ${Box} {
        opacity: 0;
        overflow: hidden;
      }
    `)
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1hsgv4c-0"
})(["", ""], ({
  close
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:0px;max-width:0px;height:100%;position:relative;", " ", ""], styles__WEBPACK_IMPORTED_MODULE_1__.media.greaterThan('laptop')`
      width: 100%;
      max-width: 30rem;
    `, close && containerModifiers.close));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1hsgv4c-1"
})(["", ""], ({
  theme,
  side
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;top:0;", ":0;width:30rem;height:100%;background:", ";padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;z-index:10;box-shadow:", "px 0 20px 5px ", ";", ""], side, theme.colors.bg, theme.spacings.medium, theme.border.radius, theme.border.width, theme.colors.border, side === 'left' ? 5 : -5, theme.colors.bg, styles__WEBPACK_IMPORTED_MODULE_1__.media.greaterThan('laptop')`
      box-shadow: none;
    `));
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Box",
  componentId: "sc-1hsgv4c-2"
})(["height:100%;width:100%;"]);
const alterSideMap = {
  left: 'right',
  right: 'left'
};
const toggleModifiers = {
  close: opposite => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ":-5px;transform:rotate(180deg);padding-", ":0px;border-", ":0px;border-top-", "-radius:0px;border-bottom-", "-radius:0px;"], opposite, opposite, opposite, opposite, opposite)
};
const Toggle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Toggle",
  componentId: "sc-1hsgv4c-3"
})(["", ""], ({
  theme,
  side,
  close
}) => {
  const opposite = alterSideMap[side];
  return (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;display:grid;place-items:center;top:", ";", ":-30rem;background:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;padding:calc(", " / 2);transform:translateX(", ");z-index:20;", " ", ""], theme.spacings.medium, opposite, theme.colors.bg, theme.border.radius, theme.border.width, theme.colors.border, theme.spacings.xsmall, side === 'left' ? '70%' : '-70%', close && toggleModifiers.close(opposite), styles__WEBPACK_IMPORTED_MODULE_1__.media.greaterThan('laptop')`
        display: none;
      `);
});

/***/ }),

/***/ 6744:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.s)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8119);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_base__WEBPACK_IMPORTED_MODULE_0__]);
_base__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ panels)
});

// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/components/panels/editing/index.ts


const editingPanels = {
  default: dynamic_default()(() => __webpack_require__.e(/* import() */ 319).then(__webpack_require__.bind(__webpack_require__, 2319)).then(mod => mod.DefaultEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './default']
    }
  }),
  [types.PanelsEnum.MUSIC]: dynamic_default()(() => __webpack_require__.e(/* import() */ 64).then(__webpack_require__.bind(__webpack_require__, 1064)).then(mod => mod.MusicEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './music']
    }
  }),
  [types.PanelsEnum.ACTIVITIES]: dynamic_default()(() => __webpack_require__.e(/* import() */ 252).then(__webpack_require__.bind(__webpack_require__, 252)).then(mod => mod.ActivitiesEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './activities']
    }
  }),
  [types.PanelsEnum.SNAKE]: dynamic_default()(() => __webpack_require__.e(/* import() */ 301).then(__webpack_require__.bind(__webpack_require__, 3301)).then(mod => mod.SnakePanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './snake']
    }
  }),
  [types.PanelsEnum.STATS]: dynamic_default()(() => __webpack_require__.e(/* import() */ 880).then(__webpack_require__.bind(__webpack_require__, 3880)).then(mod => mod.StatsEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './stats']
    }
  }),
  [types.PanelsEnum.TEXT]: dynamic_default()(() => __webpack_require__.e(/* import() */ 444).then(__webpack_require__.bind(__webpack_require__, 9444)).then(mod => mod.TextEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './text']
    }
  }),
  [types.PanelsEnum.TECHS]: dynamic_default()(() => __webpack_require__.e(/* import() */ 996).then(__webpack_require__.bind(__webpack_require__, 3996)).then(mod => mod.TechsEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './techs']
    }
  }),
  [types.PanelsEnum.IMAGE]: dynamic_default()(() => __webpack_require__.e(/* import() */ 473).then(__webpack_require__.bind(__webpack_require__, 4473)).then(mod => mod.ImageEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './image']
    }
  }),
  [types.PanelsEnum.SOCIALS]: dynamic_default()(() => __webpack_require__.e(/* import() */ 846).then(__webpack_require__.bind(__webpack_require__, 9846)).then(mod => mod.SocialsEditPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './socials']
    }
  }),
  [types.PanelsEnum.PROFILE_VIEWS]: dynamic_default()(() => __webpack_require__.e(/* import() */ 176).then(__webpack_require__.bind(__webpack_require__, 4176)).then(mod => mod.ProfileViewsPanel, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\editing\\index.ts -> " + './profile-views']
    }
  })
};

;// CONCATENATED MODULE: ./src/components/panels/panels.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const panels = _objectSpread(_objectSpread({}, editingPanels), {}, {
  [types.PanelsEnum.GENERATED_FILES]: dynamic_default()(() => __webpack_require__.e(/* import() */ 562).then(__webpack_require__.bind(__webpack_require__, 7562)).then(mod => mod.PanelGeneratedFiles, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\panels.ts -> " + './generated-files']
    }
  }),
  [types.PanelsEnum.NEW_SECTION]: dynamic_default()(() => __webpack_require__.e(/* import() */ 633).then(__webpack_require__.bind(__webpack_require__, 633)).then(mod => mod.PanelNewSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\panels.ts -> " + './new-section']
    }
  }),
  [types.PanelsEnum.TEMPLATES]: dynamic_default()(() => __webpack_require__.e(/* import() */ 460).then(__webpack_require__.bind(__webpack_require__, 4460)).then(mod => mod.PanelTemplates, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\panels\\panels.ts -> " + './templates']
    }
  })
});



/***/ }),

/***/ 747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ actions)
/* harmony export */ });
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2908);


const actions = [{
  label: 'Copy',
  icon: _styled_icons_feather__WEBPACK_IMPORTED_MODULE_0__.Copy,
  action: content => (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .copyToClipboard */ .vQ)(content)
}];


/***/ }),

/***/ 4681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ ReadmeResult)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8871);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7742);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(977);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(747);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4189);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_4__]);
components__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const ReadmeResult = () => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: content,
    1: setContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  const handleShowContent = event => setContent(event.detail);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    prismjs__WEBPACK_IMPORTED_MODULE_1___default().highlightAllUnder(containerRef.current);
  }, [content]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.RESULT_SHOW_CONTENT, handleShowContent);
    return () => {
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.RESULT_SHOW_CONTENT, handleShowContent);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Container */ .W2, {
    ref: containerRef,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Actions */ .eX, {
      children: _actions__WEBPACK_IMPORTED_MODULE_5__/* .actions.map */ .N.map(({
        label,
        icon: Icon,
        action
      }, i) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Tooltip */ .u, {
        content: label,
        position: "top",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_styles__WEBPACK_IMPORTED_MODULE_6__/* .Action */ .aU, {
            onClick: () => action(content),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Icon, {
              size: 16
            })
          })
        })
      }, i))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("pre", {
      className: `language-html`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("code", {
        className: `language-html`,
        children: content
      })
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "aU": () => (/* binding */ Action),
/* harmony export */   "eX": () => (/* binding */ Actions)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-6b5cw1-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:relative;width:100%;padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;overflow:auto;padding-right:", ";&::-webkit-scrollbar{width:0.8rem;height:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}&::-webkit-scrollbar-corner{background:", ";}.token.punctuation{color:", ";}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:", ";}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:", ";}.token.atrule,.token.attr-value,.token.keyword{color:", ";}.token.bold,.token.important{font-weight:700;}.token.italic{font-style:italic;}.token.entity{cursor:help;}code,pre{width:100%;color:", ";}code{white-space:pre;}pre{background:transparent;}"], theme.spacings.xlarge, theme.border.radius, theme.border.width, theme.colors.border, theme.spacings.small, theme.colors.border, theme.colors.text, theme.colors.text, theme.colors.primary, theme.colors.tertiary, theme.colors.secondary, theme.colors.text));
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "styles__Actions",
  componentId: "sc-6b5cw1-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:absolute;top:", ";right:", ";display:flex;"], theme.spacings.xlarge, theme.spacings.xlarge));
const Action = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Action",
  componentId: "sc-6b5cw1-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["padding:", ";border-radius:10rem;border-width:", ";border-color:", ";border-style:solid;display:grid;place-items:center;& *{cursor:pointer;}&:hover{filter:brightness(2);}"], theme.spacings.xsmall, theme.border.width, theme.colors.border));

/***/ }),

/***/ 2770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ BaseSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7742);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9882);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles__WEBPACK_IMPORTED_MODULE_3__]);
_styles__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BaseSection = ({
  id,
  children,
  selected,
  previewMode
}) => {
  const handleSelectSection = () => {
    if (isInAlert || previewMode) return;
    app__WEBPACK_IMPORTED_MODULE_1__/* .events.canvas.currentSection */ .U.canvas.currentSection(id);
  };

  const {
    props
  } = react__WEBPACK_IMPORTED_MODULE_0___default().Children.only(children);
  const {
    float = 'none',
    clear
  } = props.styles || {};
  const isInAlert = props.state === types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.ALERT;

  const getWrapperState = () => {
    let state = types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.DEFAULT;
    if (selected) state = types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.SELECTED;
    if (isInAlert) state = types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.ALERT;
    if (previewMode) state = types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.PREVIEW;
    return state;
  };

  const wrapperState = getWrapperState();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, {
    "data-sectionid": id,
    "data-hasfloat": float !== 'none',
    onClick: handleSelectSection,
    value: id,
    drag: !previewMode,
    float: float,
    clear: clear,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Wrapper */ .i, {
      state: wrapperState,
      children: children
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container),
/* harmony export */   "i": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7742);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const marginMap = {
  left: 'right',
  right: 'left'
};
const containerModifiers = {
  float: direction => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["margin-", ":4px;float:", ";"], marginMap[direction], direction)
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.Reorder.Item).withConfig({
  displayName: "styles__Container",
  componentId: "sc-10nqxqf-0"
})(["", ""], ({
  theme,
  float,
  clear
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["clear:", ";", ";& + &{margin-top:6px;}&[data-hasfloat='true'] + &{padding-top:", ";margin-top:0;}"], clear ? 'both' : 'none', float !== 'none' && containerModifiers.float(float), theme.spacings.xlarge));
const wrapperModifiers = {
  [types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.SELECTED]: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-color:", ";"], theme.colors.primary),
  [types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.PREVIEW]: () => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-color:transparent;cursor:default;*{cursor:default;}&:hover{border-color:transparent;}"]),
  [types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.ALERT]: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-color:", ";border-style:dashed;&:hover{border-color:", ";}"], theme.colors.tertiary, theme.colors.tertiary)
};
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-10nqxqf-1"
})(["", ""], ({
  theme,
  state
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;flex-direction:column;padding:", ";cursor:pointer;border-radius:", ";border-width:", ";border-color:transparent;border-style:solid;*{cursor:pointer;}&:hover{border-color:", ";}", ""], theme.spacings.small, theme.border.radius, theme.border.width, theme.colors.primary, state !== types__WEBPACK_IMPORTED_MODULE_2__.CanvasStatesEnum.DEFAULT && wrapperModifiers[state](theme)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ sectionMap),
/* harmony export */   "b": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_2__.b)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7742);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_base__WEBPACK_IMPORTED_MODULE_2__]);
_base__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const sectionMap = {
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.MUSIC]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 843).then(__webpack_require__.bind(__webpack_require__, 843)).then(mod => mod.MusicSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './music']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.ACTIVITIES]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 359).then(__webpack_require__.bind(__webpack_require__, 8359)).then(mod => mod.ActivitiesSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './activities']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.SNAKE]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/* import() */[__webpack_require__.e(287), __webpack_require__.e(105)]).then(__webpack_require__.bind(__webpack_require__, 4105)).then(mod => mod.SnakeSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './snake']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.STATS]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/* import() */[__webpack_require__.e(287), __webpack_require__.e(504)]).then(__webpack_require__.bind(__webpack_require__, 5504)).then(mod => mod.StatsSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './stats']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.TEXT]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 457).then(__webpack_require__.bind(__webpack_require__, 8457)).then(mod => mod.TextSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './text']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.TECHS]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 927).then(__webpack_require__.bind(__webpack_require__, 8927)).then(mod => mod.TechsSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './techs']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.IMAGE]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 627).then(__webpack_require__.bind(__webpack_require__, 1627)).then(mod => mod.ImageSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './image']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.SOCIALS]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 309).then(__webpack_require__.bind(__webpack_require__, 8309)).then(mod => mod.SocialsSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './socials']
    }
  }),
  [types__WEBPACK_IMPORTED_MODULE_1__.Sections.PROFILE_VIEWS]: next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.all(/* import() */[__webpack_require__.e(287), __webpack_require__.e(787)]).then(__webpack_require__.bind(__webpack_require__, 9787)).then(mod => mod.ProfileViewsSection, () => () => null), {
    loadableGenerated: {
      modules: ["..\\components\\sections\\index.ts -> " + './profile-views']
    }
  })
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8146);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__, _styles__WEBPACK_IMPORTED_MODULE_1__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_0__, _styles__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Tabs = ({
  id = 'tab',
  tabs,
  currentTab,
  setCurrentTab
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const hasMatchWithSomeTab = view => tabs.some(tab => tab.view === view);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const {
      [id]: view
    } = router.query;
    if (hasMatchWithSomeTab(view)) setCurrentTab(view);
  }, [router]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Container */ .W2, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.AnimateSharedLayout, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Tabs */ .mQ, {
        children: tabs.map(({
          label,
          icon: Icon,
          view
        }) => {
          const active = view === currentTab;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Tab */ .OK, {
            isActive: view === currentTab,
            onClick: () => setCurrentTab(view),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .im, {
              children: [Icon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Icon, {
                size: 20
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Label */ .__, {
                children: label
              })]
            }), active ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Underline */ .v6, {
              layoutId: "underline"
            }) : null]
          }, view);
        })
      })
    })
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8146:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OK": () => (/* binding */ Tab),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "__": () => (/* binding */ Label),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "mQ": () => (/* binding */ Tabs),
/* harmony export */   "v6": () => (/* binding */ Underline)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6197);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-3eaaez-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["width:100%;margin-bottom:", ";"], theme.spacings.medium));
const Tabs = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__Tabs",
  componentId: "sc-3eaaez-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["display:flex;align-items:end;justify-content:space-between;width:100%;border-bottom-width:", ";border-bottom-color:", ";border-bottom-style:solid;"], theme.border.width, theme.colors.border));
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__Tab",
  componentId: "sc-3eaaez-2"
})(["", ""], ({
  theme,
  isActive
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["position:relative;display:flex;flex:1;flex-direction:column;cursor:pointer;color:", ";padding:0 ", ";*{cursor:pointer;}"], isActive ? theme.colors.primary : theme.colors.text, theme.spacings.small));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-3eaaez-3"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["display:flex;align-items:center;align-self:center;gap:", ";margin-bottom:", ";"], theme.spacings.xsmall, theme.spacings.medium));
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "styles__Label",
  componentId: "sc-3eaaez-4"
})(["text-align:center;word-wrap:nowrap;transition:0.3s;"]);
const Underline = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div).withConfig({
  displayName: "styles__Underline",
  componentId: "sc-3eaaez-5"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(["background-color:", ";height:4px;width:100%;border-radius:10rem;position:absolute;left:0;right:0;bottom:-2px;"], theme.colors.primary));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 2825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ TechIconVariantsFoward)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4283);
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8620);
/* harmony import */ var _variants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9155);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5991);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _variants__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _variants__WEBPACK_IMPORTED_MODULE_6__, _styles__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const TechIconVariants = ({
  name,
  shortname,
  refs,
  providers,
  available_providers,
  currentProvider,
  config
}, ref) => {
  var _config$currentProvid, _providers$currentPro;

  const dragControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useDragControls)();
  const [isPresent, safeToRemove] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.usePresence)();
  const {
    0: isOpenEditForm,
    1: setIsOpenEditForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleDeleteTech = () => {
    const path = `content.icons.${name}`;
    app__WEBPACK_IMPORTED_MODULE_3__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value: undefined
    });
  };

  const handleToggleEditForm = () => {
    if (!isOpenEditForm) handleCloseAllEditForms();
    setIsOpenEditForm(!isOpenEditForm);
  };

  const handleCloseEditForm = () => setIsOpenEditForm(false);

  const handleCloseAllEditForms = () => refs.forEach(item => item === null || item === void 0 ? void 0 : item.closeEditForm());

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    closeEditForm: handleCloseEditForm
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
  }, [isPresent]);
  const provider = providers[currentProvider];
  const providerVariants = provider.variants || [];
  const hasVariants = !!providerVariants.length;
  const logo = hasVariants ? providerVariants[((_config$currentProvid = config[currentProvider]) === null || _config$currentProvid === void 0 ? void 0 : _config$currentProvid.variant) ?? 0] : provider.path;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Container */ .W2, _objectSpread(_objectSpread({
    value: name,
    variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .variants.container */ .o.container,
    dragListener: false,
    dragControls: dragControls,
    layout: true
  }, _animations__WEBPACK_IMPORTED_MODULE_4__/* .animations.container */ .s.container), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Content */ .VY, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Drag */ .nc, {
        onPointerDown: event => [handleCloseAllEditForms(), dragControls.start(event)],
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Menu, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Logo */ .TR, {
        alt: `${name} logo`,
        src: logo.replace(/ /g, '').replace(/(?<=badge\/)(.+)(?=-\w+\?)/, '')
      }, `${name}`), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Wrapper */ .im, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Name */ .VG, {
          children: shortname || name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .DeleteIcon */ .pJ, {
          size: 16,
          onClick: handleDeleteTech
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providers__WEBPACK_IMPORTED_MODULE_5__/* .Providers */ .C, {
        icon: name,
        current: currentProvider,
        available: available_providers
      }), hasVariants && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .EditIcon */ .dY, {
        size: 16,
        onClick: handleToggleEditForm
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_styles__WEBPACK_IMPORTED_MODULE_7__/* .Grow */ .Q5, {
      initial: false,
      animate: isOpenEditForm && hasVariants ? 'open' : 'closed',
      variants: _animations__WEBPACK_IMPORTED_MODULE_4__/* .variants.icons_container */ .o.icons_container,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_variants__WEBPACK_IMPORTED_MODULE_6__/* .Variants */ .t, {
        icon: name,
        provider: currentProvider,
        variants: (_providers$currentPro = providers[currentProvider]) === null || _providers$currentPro === void 0 ? void 0 : _providers$currentPro.variants
      })
    })]
  }));
};

const TechIconVariantsFoward = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(TechIconVariants);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/tech-icon-variants/providers/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-115wjyx-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:10rem;position:relative;grid-area:show-more;font-size:", ";align-self:end;justify-self:start;display:inline-flex;flex-direction:column;gap:", ";span{color:", ";}"], theme.font.sizes.xsmall, theme.spacings.xsmall, theme.colors.primary));
const Wrapper = external_styled_components_default().ul.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-115wjyx-1"
})(["", ""], ({
  theme,
  isOpen
}) => (0,external_styled_components_.css)(["padding:calc(", " / 2) ", ";border-width:", ";border-style:solid;border-color:", ";background:", ";border-radius:", ";position:relative;width:17rem;left:-3rem;transition:all 0.3s;opacity:", ";pointer-events:", ";"], theme.spacings.xsmall, theme.spacings.small, theme.border.width, theme.colors.border, theme.colors.bg, theme.border.radius, isOpen ? 1 : 0, isOpen ? 'all' : 'none'));
const Item = external_styled_components_default().button.withConfig({
  displayName: "styles__Item",
  componentId: "sc-115wjyx-2"
})(["", ""], ({
  theme,
  active
}) => (0,external_styled_components_.css)(["width:100%;text-align:left;padding-block:calc(", " / 2);color:", ";&:hover{color:", ";}&:disabled{color:", ";opacity:0.4;cursor:not-allowed;}"], theme.spacings.xsmall, theme.colors[active ? 'tertiary' : 'text'], theme.colors.primary, theme.colors.text));
// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/tech-icon-variants/providers/index.tsx







const Providers = ({
  icon,
  current,
  available
}) => {
  const openTimetouRef = (0,external_react_.useRef)();
  const closeTimetouRef = (0,external_react_.useRef)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: mount,
    1: setMount
  } = (0,external_react_.useState)(false);

  const handleToggle = open => () => {
    if (open) {
      clearTimeout(closeTimetouRef.current);
      setMount(true);
      openTimetouRef.current = setTimeout(() => {
        setIsOpen(true);
      });
      return;
    }

    setIsOpen(false);
    closeTimetouRef.current = setTimeout(() => {
      setMount(false);
    }, 350);
  };

  const handleChangeProvider = value => () => {
    if (value === current) return;
    const path = `content.icons.${icon}.currentProvider`;
    app/* events.canvas.edit */.U.canvas.edit({
      path,
      value
    });
  };

  (0,external_react_.useEffect)(() => {
    return () => {
      clearTimeout(openTimetouRef.current);
      clearTimeout(closeTimetouRef.current);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    onMouseEnter: handleToggle(true),
    onMouseLeave: handleToggle(false),
    children: [mount && /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
      isOpen: isOpen,
      children: Object.values(types.IconProviders).map(provider => {
        const isCurrent = provider === current;
        const isUnavailable = !available.includes(provider);
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Item, {
            onClick: handleChangeProvider(provider),
            active: isCurrent,
            disabled: isUnavailable,
            children: [provider, " ", isCurrent ? '(current)' : '']
          })
        }, provider);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: current
    })]
  });
};



/***/ }),

/***/ 5991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q5": () => (/* binding */ Grow),
/* harmony export */   "TR": () => (/* binding */ Logo),
/* harmony export */   "VG": () => (/* binding */ Name),
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "dY": () => (/* binding */ EditIcon),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "nc": () => (/* binding */ Drag),
/* harmony export */   "pJ": () => (/* binding */ DeleteIcon)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9308);
/* harmony import */ var _styled_icons_feather__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.Reorder.Item).withConfig({
  displayName: "styles__Container",
  componentId: "sc-1bji1i8-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:100%;display:flex;flex-direction:column;margin-bottom:", ";user-select:none;&:last-child{margin-bottom:0;}"], theme.spacings.small));
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1bji1i8-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:grid;width:100%;grid:'drag logo menu menu' 2rem ' drag logo show-more edit' 2rem / 2rem 4rem 1fr 4rem;justify-content:start;column-gap:", ";padding:", ";border-radius:", ";border-width:", ";border-color:", ";border-style:solid;height:6.4rem;"], theme.spacings.medium, theme.spacings.small, theme.border.radius, theme.border.width, theme.colors.border));
const Drag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Drag",
  componentId: "sc-1bji1i8-2"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["grid-area:drag;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;color:", ";cursor:grab;*{cursor:grab;}&:hover{color:", ";}&:active{cursor:grabbing;*{cursor:grabbing;}}"], theme.colors.text, theme.colors.primary));
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-1bji1i8-3"
})(["display:block;grid-area:logo;align-self:center;width:100%;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1bji1i8-4"
})(["grid-area:menu;width:100%;display:flex;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default().strong.withConfig({
  displayName: "styles__Name",
  componentId: "sc-1bji1i8-5"
})(["text-transform:capitalize;margin-right:auto;"]);
const DeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Trash).withConfig({
  displayName: "styles__DeleteIcon",
  componentId: "sc-1bji1i8-6"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["cursor:pointer;& *{cursor:pointer;}&:hover{color:", ";}"], theme.colors.error));
const EditIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styled_icons_feather__WEBPACK_IMPORTED_MODULE_2__.Edit2).withConfig({
  displayName: "styles__EditIcon",
  componentId: "sc-1bji1i8-7"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["grid-area:edit;align-self:end;justify-self:end;cursor:pointer;& *{cursor:pointer;}&:hover{color:", ";}"], theme.colors.primary));
const Grow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div).withConfig({
  displayName: "styles__Grow",
  componentId: "sc-1bji1i8-8"
})(["overflow:hidden;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9155:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Variants)
/* harmony export */ });
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2905);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(977);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7499);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_1__]);
components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Variants = ({
  icon,
  provider,
  variants = []
}) => {
  const handleChangeVariation = value => () => {
    const path = `content.icons.${icon}.config.${provider}.variant`;
    app__WEBPACK_IMPORTED_MODULE_0__/* .events.canvas.edit */ .U.canvas.edit({
      path,
      value
    });
  };

  return variants.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      children: "Variants"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_styles__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .i, {
      children: variants.map((path, index) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components__WEBPACK_IMPORTED_MODULE_1__/* .DisplayBlock */ .L9, {
          display: path,
          onClick: handleChangeVariation(index)
        }, path);
      })
    })]
  }) : null;
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container),
/* harmony export */   "i": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-ltipv5-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;flex-direction:column;gap:", ";width:100%;"], theme.spacings.xsmall));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-ltipv5-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:grid;grid-template-columns:repeat(4,1fr);gap:", ";img{width:60%;height:60%;}"], theme.spacings.xsmall));

/***/ }),

/***/ 920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(977);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3881);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components__WEBPACK_IMPORTED_MODULE_2__]);
components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Tooltip = ({
  children,
  position = 'top',
  variant = 'default',
  content
}) => {
  const openTimetouRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const closeTimetouRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const childrenRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const tooltipRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: coordinate,
    1: setCoordinate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: mount,
    1: setMount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const theme = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.useTheme)();

  const handleMouseLeave = () => {
    setOpen(false);
    closeTimetouRef.current = setTimeout(() => {
      setMount(false);
    }, 350);
  };

  const handleMouseEnter = () => {
    clearTimeout(closeTimetouRef.current);
    setMount(true);
    openTimetouRef.current = setTimeout(() => {
      getPosition();
      setOpen(true);
    });
  };

  const getPosition = () => {
    const childreRect = childrenRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const space = Number(theme.spacings.xsmall.replace(/\D/g, ''));
    const middleXTooltip = tooltipRect.width / 2;
    const middleYTooltip = tooltipRect.height / 2;
    const middleXChildren = childreRect.left + childreRect.width / 2;
    const middleYChildren = childreRect.top + childreRect.height / 2;
    const middleX = middleXChildren - middleXTooltip;
    const middleY = middleYChildren - middleYTooltip;
    const topChildren = childreRect.top - tooltipRect.height - space;
    const bottomChildren = childreRect.top + childreRect.height + space;
    const rightChildren = childreRect.left - tooltipRect.width - space;
    const leftChildren = childreRect.left + childreRect.width + space;
    const positionsX = {
      right: rightChildren,
      left: leftChildren
    };
    const positionsY = {
      top: topChildren,
      bottom: bottomChildren
    };
    const [y, x] = position.replace(/^(right|left)$/, '-$1').split(/-/);
    setCoordinate({
      x: (positionsX[x] ?? middleX) || 0,
      y: (positionsY[y] ?? middleY) || 0
    });
  };

  const childrenProps = {
    ref: childrenRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      clearTimeout(openTimetouRef.current);
      clearTimeout(closeTimetouRef.current);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(components__WEBPACK_IMPORTED_MODULE_2__/* .OnlyClientSide */ .Al, {
    children: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, childrenProps), mount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_styles__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, _objectSpread(_objectSpread({
        ref: tooltipRef,
        open: open,
        variant: variant
      }, coordinate), {}, {
        children: content
      }))
    })]
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7742);


const backgroundsMap = {
  [types__WEBPACK_IMPORTED_MODULE_1__.TooltipVariants.DANGER]: 'error',
  [types__WEBPACK_IMPORTED_MODULE_1__.TooltipVariants.SUCCESS]: 'secondary',
  [types__WEBPACK_IMPORTED_MODULE_1__.TooltipVariants.INFO]: 'primary',
  [types__WEBPACK_IMPORTED_MODULE_1__.TooltipVariants.DEFAULT]: 'bg'
};
const containerModifiers = {
  [types__WEBPACK_IMPORTED_MODULE_1__.TooltipVariants.DEFAULT]: theme => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["border-width:", ";border-color:", ";border-style:solid;"], theme.border.width, theme.colors.border)
};
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "styles__Container",
  componentId: "sc-12e0lls-0"
})(["", ""], ({
  theme,
  variant,
  open,
  x,
  y
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["color:#fff;background:", ";font-size:", ";position:absolute;top:", "px;left:", "px;padding:calc(", " / 2) ", ";border-radius:", ";transition:opacity 0.3s;opacity:", ";pointer-events:", ";z-index:10;", ""], theme.colors[backgroundsMap[variant]], theme.font.sizes.xsmall, y, x, theme.spacings.xsmall, theme.spacings.xsmall, theme.border.radius, open ? 1 : 0, open ? 'all' : 'none', containerModifiers[variant] && containerModifiers[variant](theme)));

/***/ }),

/***/ 4951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ Tree)
});

// EXTERNAL MODULE: external "@styled-icons/feather"
var feather_ = __webpack_require__(9308);
// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/tree/label/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1hip7w0-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;align-items:center;gap:", ";svg{width:1.6rem;height:1.6rem;}"], theme.spacings.small));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/tree/label/index.tsx
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Label = _ref => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Container, _objectSpread(_objectSpread({}, rest), {}, {
    children: children
  }));
};


;// CONCATENATED MODULE: ./src/components/tree/file/styles.ts


const styles_Container = external_styled_components_default()(Label).withConfig({
  displayName: "styles__Container",
  componentId: "sc-1rz4kyr-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin-top:", ";transition:color 0.3s;cursor:pointer;*{cursor:pointer;}&:hover{color:", ";}"], theme.spacings.xsmall, theme.colors.primary));
;// CONCATENATED MODULE: ./src/components/tree/file/index.tsx






const File = ({
  file,
  content
}) => {
  const handleClick = () => app/* events.result.show */.U.result.show(content);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Container, {
    onClick: handleClick,
    children: [/*#__PURE__*/jsx_runtime_.jsx(feather_.File, {}), file]
  });
};


;// CONCATENATED MODULE: ./src/components/tree/folder/styles.ts

const folder_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-ri9pj3-0"
})([""]);
const Gap = external_styled_components_default().div.withConfig({
  displayName: "styles__Gap",
  componentId: "sc-ri9pj3-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["padding-left:", ";"], theme.spacings.medium));
;// CONCATENATED MODULE: ./src/components/tree/folder/index.tsx
function folder_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function folder_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { folder_ownKeys(Object(source), true).forEach(function (key) { folder_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { folder_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function folder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Folder = ({
  name,
  files
}) => {
  const hasFiles = !!files.length;
  return hasFiles ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(folder_styles_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Label, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(feather_.Folder, {}), name]
    }), /*#__PURE__*/jsx_runtime_.jsx(Gap, {
      children: files.map(file => /*#__PURE__*/jsx_runtime_.jsx(File, folder_objectSpread({}, file), file.file))
    })]
  }) : null;
};


;// CONCATENATED MODULE: ./src/components/tree/styles.ts

const tree_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-312jqq-0"
})([""]);
;// CONCATENATED MODULE: ./src/components/tree/index.tsx
function tree_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function tree_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tree_ownKeys(Object(source), true).forEach(function (key) { tree_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tree_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tree_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Tree = ({
  tree
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(tree_styles_Container, {
    children: tree.map(item => {
      const hasFiles = !!item.files.length;
      const isRoot = !item.name;
      if (isRoot && hasFiles) return item.files.map(file => /*#__PURE__*/jsx_runtime_.jsx(File, tree_objectSpread({}, file), file.file));
      return /*#__PURE__*/jsx_runtime_.jsx(Folder, tree_objectSpread({}, item), item.name);
    })
  });
};



/***/ }),

/***/ 8973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ Welcome)
});

// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
// EXTERNAL MODULE: ./src/resources/index.ts + 5 modules
var resources = __webpack_require__(9903);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/styles/index.ts
var styles = __webpack_require__(9640);
;// CONCATENATED MODULE: ./src/components/welcome/styles.ts


const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1i4h4vg-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;text-align:center;justify-content:center;align-items:center;flex-direction:column;", ""], styles.media.greaterThan('tablet')`
      padding-top: calc(${theme.spacings.xlarge} * 3);
    `));
const Header = external_styled_components_default().div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-1i4h4vg-1"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;flex-direction:column;gap:calc(", " / 2);h2{font-size:", ";}span{display:none;}", ""], theme.spacings.xsmall, theme.font.sizes.medium, styles.media.greaterThan('tablet')`
      span {
        display: initial;
      }
    `));
const Description = external_styled_components_default().p.withConfig({
  displayName: "styles__Description",
  componentId: "sc-1i4h4vg-2"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;flex-direction:column;margin-top:calc(", " * 2);margin-bottom:", ";max-width:46rem;"], theme.spacings.medium, theme.spacings.xlarge));
const Middle = external_styled_components_default().div.withConfig({
  displayName: "styles__Middle",
  componentId: "sc-1i4h4vg-3"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:none;flex-direction:column;width:100%;text-align:left;gap:", ";padding-bottom:", ";max-width:60rem;", ""], theme.spacings.medium, theme.spacings.xlarge, styles.media.greaterThan('tablet')`
      display: flex;
    `));
const Footer = external_styled_components_default().div.withConfig({
  displayName: "styles__Footer",
  componentId: "sc-1i4h4vg-4"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin-top:auto;max-width:37.5rem;button{color:", ";&:hover{text-decoration:underline;}}"], theme.colors.primary));
const Templates = external_styled_components_default().div.withConfig({
  displayName: "styles__Templates",
  componentId: "sc-1i4h4vg-5"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:grid;grid-template-columns:repeat(4,1fr);gap:", ";overflow-y:scroll;align-items:start;align-content:start;width:100%;&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.medium, theme.colors.border));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1i4h4vg-6"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["position:relative;width:100%;border-radius:", ";border-width:", ";color:", ";border-style:solid;padding-top:100%;transition:0.3s;& *{transition:0.3s;cursor:pointer;color:", ";user-select:none;}&:hover,&:hover *{color:", ";}"], theme.border.radius, theme.border.width, theme.colors.border, theme.colors.text, theme.colors.primary));
const Block = external_styled_components_default().div.withConfig({
  displayName: "styles__Block",
  componentId: "sc-1i4h4vg-7"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;text-align:center;inset:0;gap:", ";font-size:", ";"], theme.spacings.xsmall, theme.font.sizes.xlarge));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/welcome/index.tsx






const MAX_TEMPLATES_DISPLAY = 8;

const Welcome = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Welcome To Profile Readme Generator"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uD83D\uDE80"
        }), " The best profile readme generator you will find", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u26A1"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Description, {
      children: "You can create you readme manually by clicking on the options on the left or using one of the templates with some structure already made!"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Middle, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Templates, {
        children: resources/* templates.slice */.zd.slice(0, MAX_TEMPLATES_DISPLAY).map(({
          template
        }, index) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
          onClick: () => app/* events.template.preview */.U.template.preview(template),
          children: /*#__PURE__*/jsx_runtime_.jsx(Block, {
            children: index + 1
          })
        }, index))
      }), /*#__PURE__*/jsx_runtime_.jsx("small", {
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          children: "*Click to preview one of the templates options"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["If you like it, give the", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://github.com/junaidmugloo",
          target: "_blank",
          rel: "noreferrer",
          children: "project repository"
        }), ' ', "a star on Github and", ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => app/* events.modal.open */.U.modal.open(types.Modals.SHARE),
          children: "share"
        }), ' ', "with your friends!! I will be happy with it! \u2764"]
      })
    })]
  });
};



/***/ }),

/***/ 1838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ CanvasContext),
/* harmony export */   "K": () => (/* binding */ CanvasProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2905);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7742);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2908);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1060);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_5__]);
([uuid__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CanvasContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

const CanvasProvider = ({
  children
}) => {
  const [sections, setSections] = (0,hooks__WEBPACK_IMPORTED_MODULE_5__/* .usePersistedState */ .V_)('canvas.sections', []);
  const {
    0: currentSection,
    1: setCurrentSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: previewTemplate,
    1: setPreviewTemplate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleAddSection = event => {
    const sectionType = event.detail;
    const defaultProps = app__WEBPACK_IMPORTED_MODULE_2__/* .config.sections["default"] */ .v.sections["default"][sectionType];

    const newSection = _objectSpread({
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),
      type: event.detail
    }, defaultProps);

    setSections(state => [...state, newSection]);
  };

  const handleEditSection = event => {
    const {
      id = currentSection === null || currentSection === void 0 ? void 0 : currentSection.id,
      path,
      value
    } = event.detail;
    if (!id) return;
    const obj = sections.find(item => item.id === id);
    const result = (0,utils__WEBPACK_IMPORTED_MODULE_4__/* .deepChangeObjectProperty */ .f7)({
      obj,
      path,
      value
    });
    setSections(state => state.map(item => {
      if (item.id === id) return result;
      return item;
    }));
    const isEditingCurrentSection = (currentSection === null || currentSection === void 0 ? void 0 : currentSection.id) === id;
    isEditingCurrentSection && setCurrentSection(result);
  };

  const handleRemoveSection = event => {
    setSections(state => state.filter(item => item.id !== event.detail));
  };

  const handleSetCurrentSection = event => {
    const id = event.detail;
    const result = sections.find(item => item.id === id);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.panel.open */ .U.panel.open('right', result.type);
    setCurrentSection(result);
  };

  const handleReorderSections = event => {
    const order = event.detail;
    const sectionsReorded = order.map(sectionId => sections.find(section => section.id === sectionId));
    setSections(sectionsReorded);
  };

  const handleDuplicateSection = event => {
    const id = event.detail;
    const newSections = sections.reduce((arr, section) => {
      if (section.id === id) {
        const duplicate = _objectSpread(_objectSpread({}, section), {}, {
          id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
        });

        return [...arr, section, duplicate];
      }

      return [...arr, section];
    }, []);
    setSections(newSections);
  };

  const handleUseTemplate = () => {
    setSections(previewTemplate);
    setPreviewTemplate([]);
  };

  const handlePreviewTemplate = event => {
    const template = event.detail.map(section => _objectSpread(_objectSpread({}, section), {}, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
    }));
    setPreviewTemplate(template);
  };

  const handleClearCanvas = () => setSections([]);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Canvas events
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_ADD_SECTION, handleAddSection);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_EDIT_SECTION, handleEditSection);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_REMOVE_SECTION, handleRemoveSection);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_SET_CURRENT_SECTION, handleSetCurrentSection);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_REORDER_SECTIONS, handleReorderSections);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_DUPLICATE_SECTION, handleDuplicateSection);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_CLEAR_SECTIONS, handleClearCanvas);
    return () => {
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_ADD_SECTION, handleAddSection);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_EDIT_SECTION, handleEditSection);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_REMOVE_SECTION, handleRemoveSection);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_SET_CURRENT_SECTION, handleSetCurrentSection);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_REORDER_SECTIONS, handleReorderSections);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_DUPLICATE_SECTION, handleDuplicateSection);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.CANVAS_CLEAR_SECTIONS, handleClearCanvas);
    };
  }, [sections, currentSection]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Template events
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.TEMPLATE_USE, handleUseTemplate);
    app__WEBPACK_IMPORTED_MODULE_2__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.TEMPLATE_PREVIEW, handlePreviewTemplate);
    return () => {
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.TEMPLATE_USE, handleUseTemplate);
      app__WEBPACK_IMPORTED_MODULE_2__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.TEMPLATE_PREVIEW, handlePreviewTemplate);
    };
  }, [previewTemplate]);
  const previewMode = !!previewTemplate.length;
  const canvas = previewMode ? previewTemplate : sections;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CanvasContext.Provider, {
    value: {
      sections: canvas,
      currentSection,
      previewMode
    },
    children: children
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FX": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "J6": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_1__.J),
/* harmony export */   "K": () => (/* reexport safe */ _canvas__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "mu": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_1__.m)
/* harmony export */ });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1838);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_canvas__WEBPACK_IMPORTED_MODULE_0__, _settings__WEBPACK_IMPORTED_MODULE_1__]);
([_canvas__WEBPACK_IMPORTED_MODULE_0__, _settings__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7961:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ SettingsContext),
/* harmony export */   "m": () => (/* binding */ SettingsProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2908);
/* harmony import */ var types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7742);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1060);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([hooks__WEBPACK_IMPORTED_MODULE_4__]);
hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  preview: PREVIEW_SETTINGS,
  initial: INITIAL_SETTINGS
} = app__WEBPACK_IMPORTED_MODULE_1__/* .config.general.settings */ .v.general.settings;
const SettingsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

const SettingsProvider = ({
  children
}) => {
  const [settings, setSettings] = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePersistedState */ .V_)('user.settings', INITIAL_SETTINGS);
  const {
    previewMode
  } = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useCanvas */ .$P)();

  const handleEdit = event => {
    const {
      path,
      value
    } = event.detail;
    const result = (0,utils__WEBPACK_IMPORTED_MODULE_2__/* .deepChangeObjectProperty */ .f7)({
      obj: settings,
      path,
      value
    });
    setSettings(result);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    app__WEBPACK_IMPORTED_MODULE_1__/* .events.on */ .U.on(types__WEBPACK_IMPORTED_MODULE_3__.Events.SETTINGS_EDIT, handleEdit);
    return () => {
      app__WEBPACK_IMPORTED_MODULE_1__/* .events.off */ .U.off(types__WEBPACK_IMPORTED_MODULE_3__.Events.SETTINGS_EDIT, handleEdit);
    };
  }, [settings]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(SettingsContext.Provider, {
    value: {
      settings: _objectSpread(_objectSpread({}, settings), previewMode && PREVIEW_SETTINGS)
    },
    children: children
  });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$P": () => (/* reexport safe */ _use_canvas__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "NW": () => (/* reexport safe */ _use_force_update__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   "O3": () => (/* reexport safe */ _use_outside_click__WEBPACK_IMPORTED_MODULE_4__.O),
/* harmony export */   "V_": () => (/* reexport safe */ _use_persisted_data__WEBPACK_IMPORTED_MODULE_3__.V),
/* harmony export */   "rV": () => (/* reexport safe */ _use_settings__WEBPACK_IMPORTED_MODULE_2__.r)
/* harmony export */ });
/* harmony import */ var _use_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3324);
/* harmony import */ var _use_force_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9784);
/* harmony import */ var _use_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7761);
/* harmony import */ var _use_persisted_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6229);
/* harmony import */ var _use_outside_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5907);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_use_canvas__WEBPACK_IMPORTED_MODULE_0__, _use_settings__WEBPACK_IMPORTED_MODULE_2__]);
([_use_canvas__WEBPACK_IMPORTED_MODULE_0__, _use_settings__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useCanvas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts__WEBPACK_IMPORTED_MODULE_1__]);
contexts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCanvas = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(contexts__WEBPACK_IMPORTED_MODULE_1__/* .CanvasContext */ .FX);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useForceUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useForceUpdate = () => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return () => setValue(value + 1);
};



/***/ }),

/***/ 5907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useOutsideClick)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useOutsideClick = (els, callback, opened) => {
  const handleOutsideClick = event => {
    const refs = Array.isArray(els) ? els : [els];
    const outsideClick = refs.every(ref => ref.current && !ref.current.contains(event.target));
    if (outsideClick) callback(event);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const method = opened ? 'addEventListener' : 'removeEventListener';
    setTimeout(() => {
      window[method]('mousedown', handleOutsideClick);
      window[method]('click', handleOutsideClick);
    });
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [opened]);
};



/***/ }),

/***/ 6229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ usePersistedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2908);



const usePersistedState = (key, initialState) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    const storageValue = (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .getStorageItem */ .qn)(key);
    return storageValue || initialState;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,utils__WEBPACK_IMPORTED_MODULE_1__/* .setStorageItem */ .Nh)(key, state);
  }, [key, state]);
  return [state, setState];
};



/***/ }),

/***/ 7761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts__WEBPACK_IMPORTED_MODULE_1__]);
contexts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useSettings = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(contexts__WEBPACK_IMPORTED_MODULE_1__/* .SettingsContext */ .J6);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Hk": () => (/* reexport */ color_names),
  "RH": () => (/* reexport */ social_icons),
  "ke": () => (/* reexport */ tech_icons),
  "zd": () => (/* reexport */ templates),
  "np": () => (/* reexport */ themes)
});

;// CONCATENATED MODULE: ./src/resources/tech_icons.ts
const tech_icons = [{
  name: 'aarch64',
  color: '#16358C',
  alias: [],
  tags: ['architecture', 'programming', 'language', 'ARM'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aarch64/aarch64-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aarch64/aarch64-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aarch64/aarch64-plain.svg']
    }
  }
}, {
  name: 'abbrobotstudio',
  shortname: 'bots',
  color: '#FF9E0F',
  alias: ['bots'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=bots'
    },
    simple_icons: {
      slug: 'abbrobotstudio',
      path: 'https://cdn.simpleicons.org/abbrobotstudio/FF9E0F'
    },
    shields: {
      path: 'https://img.shields.io/badge/ABB RobotStudio-FF9E0F?logo=abbrobotstudio&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'abletonlive',
  color: '#000000',
  alias: ['ableton'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ableton'
    },
    simple_icons: {
      slug: 'abletonlive',
      path: 'https://cdn.simpleicons.org/abletonlive/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Ableton Live-000000?logo=abletonlive&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'activitypub',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=activitypub'
    }
  }
}, {
  name: 'actix',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=actix'
    }
  }
}, {
  name: 'adobeaftereffects',
  shortname: 'ae',
  color: '#9999FF',
  alias: ['ae'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ae'
    },
    simple_icons: {
      slug: 'adobeaftereffects',
      path: 'https://cdn.simpleicons.org/adobeaftereffects/9999FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe After Effects-9999FF?logo=adobeaftereffects&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'adobeaudition',
  color: '#9999FF',
  alias: ['au'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=au'
    },
    simple_icons: {
      slug: 'adobeaudition',
      path: 'https://cdn.simpleicons.org/adobeaudition/9999FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe Audition-9999FF?logo=adobeaudition&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'adobeillustrator',
  shortname: 'ai',
  color: '#FF9A00',
  alias: ['ai'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ai'
    },
    simple_icons: {
      slug: 'adobeillustrator',
      path: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe Illustrator-FF9A00?logo=adobeillustrator&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'adobephotoshop',
  shortname: 'ps',
  color: '#31A8FF',
  alias: ['ps'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ps'
    },
    simple_icons: {
      slug: 'adobephotoshop',
      path: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe Photoshop-31A8FF?logo=adobephotoshop&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'adobepremierepro',
  shortname: 'pr',
  color: '#9999FF',
  alias: ['pr'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=pr'
    },
    simple_icons: {
      slug: 'adobepremierepro',
      path: 'https://cdn.simpleicons.org/adobepremierepro/9999FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe Premiere Pro-9999FF?logo=adobepremierepro&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'adonisjs',
  color: '#5A45FF',
  alias: [],
  tags: ['nodejs', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=adonis'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/adonisjs/5A45FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/AdonisJS-5A45FF?logo=adonisjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original-wordmark.svg']
    }
  }
}, {
  name: 'aftereffects',
  color: '#9999FF',
  alias: [],
  tags: ['video', 'editor'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/adobeaftereffects/9999FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe After Effects-9999FF?logo=adobeaftereffects&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg']
    }
  }
}, {
  name: 'aiscript',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=aiscript'
    }
  }
}, {
  name: 'alpinelinux',
  color: '#0D597F',
  alias: ['alpinejs'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=alpinejs'
    },
    simple_icons: {
      slug: 'alpinelinux',
      path: 'https://cdn.simpleicons.org/alpinelinux/0D597F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Alpine Linux-0D597F?logo=alpinelinux&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'amazondynamodb',
  shortname: 'dynamodb',
  color: '#4053D6',
  alias: ['dynamodb', 'aws dynamodb'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=dynamodb'
    },
    simple_icons: {
      slug: 'amazondynamodb',
      path: 'https://cdn.simpleicons.org/amazondynamodb/4053D6'
    },
    shields: {
      path: 'https://img.shields.io/badge/Amazon DynamoDB-4053D6?logo=amazondynamodb&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'amazonwebservices',
  shortname: 'aws',
  color: '#232F3E',
  alias: ['aws'],
  tags: ['cloud', 'hosting', 'server'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=aws'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/amazonaws/232F3E'
    },
    shields: {
      path: 'https://img.shields.io/badge/Amazon AWS-232F3E?logo=amazonaws&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg']
    }
  }
}, {
  name: 'anaconda',
  color: '#44A833',
  alias: [],
  tags: ['python', 'data-science'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/anaconda/44A833'
    },
    shields: {
      path: 'https://img.shields.io/badge/Anaconda-44A833?logo=anaconda&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg']
    }
  }
}, {
  name: 'android',
  color: '#3DDC84',
  alias: [],
  tags: ['os', 'mobile'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/android/3DDC84'
    },
    shields: {
      path: 'https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain-wordmark.svg']
    }
  }
}, {
  name: 'androidstudio',
  color: '#3DDC84',
  alias: [],
  tags: ['application', 'editor', 'ide', 'android', 'mobile'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=androidstudio'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/androidstudio/3DDC84'
    },
    shields: {
      path: 'https://img.shields.io/badge/Android Studio-3DDC84?logo=androidstudio&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-plain-wordmark.svg']
    }
  }
}, {
  name: 'angularjs',
  color: '#DD0031',
  alias: [],
  tags: ['framework', 'javascript'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=angular'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/angular/DD0031'
    },
    shields: {
      path: 'https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain-wordmark.svg']
    }
  }
}, {
  name: 'ansible',
  color: '#EE0000',
  alias: [],
  tags: ['automation', 'provisioning', 'deployment', 'continuous-delivery'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ansible'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/ansible/EE0000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Ansible-EE0000?logo=ansible&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-plain-wordmark.svg']
    }
  }
}, {
  name: 'apache',
  color: '#D22128',
  alias: [],
  tags: ['php'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/apache/D22128'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apache-D22128?logo=apache&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-line-wordmark.svg']
    }
  }
}, {
  name: 'apachecassandra',
  shortname: 'cassandra',
  color: '#1287B1',
  alias: ['cassandra'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=cassandra'
    },
    simple_icons: {
      slug: 'apachecassandra',
      path: 'https://cdn.simpleicons.org/apachecassandra/1287B1'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apache Cassandra-1287B1?logo=apachecassandra&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'apachekafka',
  color: '#231F20',
  alias: ['kafka'],
  tags: ['streaming', 'open-source'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=kafka'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/apachekafka/231F20'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apache Kafka-231F20?logo=apachekafka&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg']
    }
  }
}, {
  name: 'apachemaven',
  color: '#C71A36',
  alias: ['maven'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=maven'
    },
    simple_icons: {
      slug: 'apachemaven',
      path: 'https://cdn.simpleicons.org/apachemaven/C71A36'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apache Maven-C71A36?logo=apachemaven&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'apollographql',
  color: '#311C87',
  alias: ['apollo'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=apollo'
    },
    simple_icons: {
      slug: 'apollographql',
      path: 'https://cdn.simpleicons.org/apollographql/311C87'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apollo GraphQL-311C87?logo=apollographql&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'appcelerator',
  color: '#ac162c',
  alias: [],
  tags: ['app', 'mobile'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appcelerator/appcelerator-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appcelerator/appcelerator-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appcelerator/appcelerator-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appcelerator/appcelerator-plain-wordmark.svg']
    }
  }
}, {
  name: 'apple',
  color: '#000000',
  alias: [],
  tags: ['brand', 'mobile'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/apple/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apple-000000?logo=apple&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg']
    }
  }
}, {
  name: 'appwrite',
  color: '#F02E65',
  alias: [],
  tags: ['cloud', 'platform', 'server'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=appwrite'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/appwrite/F02E65'
    },
    shields: {
      path: 'https://img.shields.io/badge/Appwrite-F02E65?logo=appwrite&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-plain-wordmark.svg']
    }
  }
}, {
  name: 'arduino',
  color: '#00979D',
  alias: [],
  tags: ['microcontroller', 'hardware'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=arduino'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/arduino/00979D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Arduino-00979D?logo=arduino&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-plain-wordmark.svg']
    }
  }
}, {
  name: 'argocd',
  color: '#EF7B4D',
  alias: [],
  tags: ['gitops', 'continuous-delivery'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/argo/EF7B4D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Argo-EF7B4D?logo=argo&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-plain-wordmark.svg']
    }
  }
}, {
  name: 'astro',
  color: '#FF5D01',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=astro'
    },
    simple_icons: {
      slug: 'astro',
      path: 'https://cdn.simpleicons.org/astro/FF5D01'
    },
    shields: {
      path: 'https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'atom',
  color: '#66595C',
  alias: [],
  tags: ['editor'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=atom'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/atom/66595C'
    },
    shields: {
      path: 'https://img.shields.io/badge/Atom-66595C?logo=atom&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original-wordmark.svg']
    }
  }
}, {
  name: 'autocad',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=autocad'
    }
  }
}, {
  name: 'azul',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=azul'
    }
  }
}, {
  name: 'azure',
  color: '#0078D4',
  alias: [],
  tags: ['cloud', 'devops'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=azure'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/microsoftazure/0078D4'
    },
    shields: {
      path: 'https://img.shields.io/badge/Microsoft Azure-0078D4?logo=microsoftazure&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain-wordmark.svg']
    }
  }
}, {
  name: 'babel',
  color: '#F9DC3E',
  alias: [],
  tags: ['javascript', 'transpiler'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=babel'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/babel/F9DC3E'
    },
    shields: {
      path: 'https://img.shields.io/badge/Babel-F9DC3E?logo=babel&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-plain.svg']
    }
  }
}, {
  name: 'backbonejs',
  color: '#0071B5',
  alias: [],
  tags: ['javascript', 'framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/backbonedotjs/0071B5'
    },
    shields: {
      path: 'https://img.shields.io/badge/Backbone.js-0071B5?logo=backbonedotjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/backbonejs/backbonejs-plain-wordmark.svg']
    }
  }
}, {
  name: 'bamboo',
  color: '#0052CC',
  alias: [],
  tags: ['platform', 'integration', 'server'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/bamboo/0052CC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Bamboo-0052CC?logo=bamboo&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bamboo/bamboo-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bamboo/bamboo-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bamboo/bamboo-original-wordmark.svg']
    }
  }
}, {
  name: 'bash',
  color: '#4EAA25',
  alias: [],
  tags: ['shell', 'command'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=bash'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gnubash/4EAA25'
    },
    shields: {
      path: 'https://img.shields.io/badge/GNU Bash-4EAA25?logo=gnubash&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg']
    }
  }
}, {
  name: 'behance',
  color: '#1769FF',
  alias: [],
  tags: ['social', 'website'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/behance/1769FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Behance-1769FF?logo=behance&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-plain-wordmark.svg']
    }
  }
}, {
  name: 'bevy',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=bevy'
    }
  }
}, {
  name: 'bitbucket',
  color: '#0052CC',
  alias: [],
  tags: ['version-control'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/bitbucket/0052CC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Bitbucket-0052CC?logo=bitbucket&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg']
    }
  }
}, {
  name: 'blender',
  color: '#F5792A',
  alias: [],
  tags: ['modelling', 'python', '3d', 'animation'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=blender'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/blender/F5792A'
    },
    shields: {
      path: 'https://img.shields.io/badge/Blender-F5792A?logo=blender&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original-wordmark.svg']
    }
  }
}, {
  name: 'bootstrap',
  color: '#7952B3',
  alias: [],
  tags: ['css', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=bootstrap'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/bootstrap/7952B3'
    },
    shields: {
      path: 'https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg']
    }
  }
}, {
  name: 'bower',
  color: '#EF5734',
  alias: [],
  tags: ['package', 'manager'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/bower/EF5734'
    },
    shields: {
      path: 'https://img.shields.io/badge/Bower-EF5734?logo=bower&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bower/bower-line-wordmark.svg']
    }
  }
}, {
  name: 'bulma',
  color: '#00D1B2',
  alias: [],
  tags: ['css', 'framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/bulma/00D1B2'
    },
    shields: {
      path: 'https://img.shields.io/badge/Bulma-00D1B2?logo=bulma&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg']
    }
  }
}, {
  name: 'c',
  color: '#A8B9CC',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=c'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/c/A8B9CC'
    },
    shields: {
      path: 'https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg']
    }
  }
}, {
  name: 'cakephp',
  color: '#D33C43',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/cakephp/D33C43'
    },
    shields: {
      path: 'https://img.shields.io/badge/CakePHP-D33C43?logo=cakephp&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cakephp/cakephp-plain-wordmark.svg']
    }
  }
}, {
  name: 'canva',
  color: '#00C4CC',
  alias: [],
  tags: ['design'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/canva/00C4CC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Canva-00C4CC?logo=canva&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg']
    }
  }
}, {
  name: 'centos',
  color: '#262577',
  alias: [],
  tags: ['server', 'linux'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/centos/262577'
    },
    shields: {
      path: 'https://img.shields.io/badge/CentOS-262577?logo=centos&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-plain-wordmark.svg']
    }
  }
}, {
  name: 'ceylon',
  color: '#AB710A',
  alias: [],
  tags: ['language'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ceylon/ceylon-plain-wordmark.svg']
    }
  }
}, {
  name: 'chrome',
  color: '#4285F4',
  alias: [],
  tags: ['browser'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/googlechrome/4285F4'
    },
    shields: {
      path: 'https://img.shields.io/badge/Google Chrome-4285F4?logo=googlechrome&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-plain-wordmark.svg']
    }
  }
}, {
  name: 'circleci',
  color: '#343434',
  alias: [],
  tags: ['integration', 'platform'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/circleci/343434'
    },
    shields: {
      path: 'https://img.shields.io/badge/CircleCI-343434?logo=circleci&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain-wordmark.svg']
    }
  }
}, {
  name: 'clojure',
  color: '#5881D8',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=clojure'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/clojure/5881D8'
    },
    shields: {
      path: 'https://img.shields.io/badge/Clojure-5881D8?logo=clojure&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-line.svg']
    }
  }
}, {
  name: 'clojurescript',
  color: '#96ca4b',
  alias: [],
  tags: ['language'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojurescript/clojurescript-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojurescript/clojurescript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojurescript/clojurescript-plain.svg']
    }
  }
}, {
  name: 'cloudflare',
  color: '#F38020',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=cloudflare'
    },
    simple_icons: {
      slug: 'cloudflare',
      path: 'https://cdn.simpleicons.org/cloudflare/F38020'
    },
    shields: {
      path: 'https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'cmake',
  color: '#064F8C',
  alias: [],
  tags: ['build'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=cmake'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/cmake/064F8C'
    },
    shields: {
      path: 'https://img.shields.io/badge/CMake-064F8C?logo=cmake&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-plain-wordmark.svg']
    }
  }
}, {
  name: 'codecov',
  color: '#F01F7A',
  alias: [],
  tags: ['platform', 'integration'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/codecov/F01F7A'
    },
    shields: {
      path: 'https://img.shields.io/badge/Codecov-F01F7A?logo=codecov&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codecov/codecov-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codecov/codecov-plain.svg']
    }
  }
}, {
  name: 'codeigniter',
  color: '#EF4223',
  alias: [],
  tags: ['php', 'framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/codeigniter/EF4223'
    },
    shields: {
      path: 'https://img.shields.io/badge/CodeIgniter-EF4223?logo=codeigniter&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg']
    }
  }
}, {
  name: 'codepen',
  color: '#000000',
  alias: [],
  tags: ['social', 'website', 'editor'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=codepen'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/codepen/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/CodePen-000000?logo=codepen&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-original-wordmark.svg']
    }
  }
}, {
  name: 'coffeescript',
  color: '#2F2625',
  alias: [],
  tags: ['javascript', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=coffeescript'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/coffeescript/2F2625'
    },
    shields: {
      path: 'https://img.shields.io/badge/CoffeeScript-2F2625?logo=coffeescript&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original-wordmark.svg']
    }
  }
}, {
  name: 'composer',
  color: '#885630',
  alias: [],
  tags: ['package', 'manager', 'php'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/composer/885630'
    },
    shields: {
      path: 'https://img.shields.io/badge/Composer-885630?logo=composer&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-line-wordmark.svg']
    }
  }
}, {
  name: 'confluence',
  color: '#172B4D',
  alias: [],
  tags: ['collaboration', 'documentation', 'wiki'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/confluence/172B4D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Confluence-172B4D?logo=confluence&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original-wordmark.svg']
    }
  }
}, {
  name: 'couchdb',
  color: '#E42528',
  alias: [],
  tags: ['database'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/apachecouchdb/E42528'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apache CouchDB-E42528?logo=apachecouchdb&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/couchdb/couchdb-plain-wordmark.svg']
    }
  }
}, {
  name: 'cplusplus',
  color: '#00599C',
  alias: ['cpp', 'c++'],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=cpp'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/c++/00599C'
    },
    shields: {
      path: 'https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg']
    }
  }
}, {
  name: 'crystal',
  color: '#000000',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=crystal'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/crystal/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Crystal-000000?logo=crystal&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/crystal/crystal-original-wordmark.svg']
    }
  }
}, {
  name: 'csharp',
  color: '#239120',
  alias: ['cs', 'c#'],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=cs'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/csharp/239120'
    },
    shields: {
      path: 'https://img.shields.io/badge/C Sharp-239120?logo=csharp&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-line.svg']
    }
  }
}, {
  name: 'css3',
  color: '#1572B6',
  alias: ['css'],
  tags: ['language', 'programming'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=css'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/css3/1572B6'
    },
    shields: {
      path: 'https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg']
    }
  }
}, {
  name: 'cucumber',
  color: '#23D96C',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/cucumber/23D96C'
    },
    shields: {
      path: 'https://img.shields.io/badge/Cucumber-23D96C?logo=cucumber&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain-wordmark.svg']
    }
  }
}, {
  name: 'd3js',
  color: '#F9A03C',
  alias: [],
  tags: [],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=d3'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/d3dotjs/F9A03C'
    },
    shields: {
      path: 'https://img.shields.io/badge/D3.js-F9A03C?logo=d3dotjs&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-plain.svg']
    }
  }
}, {
  name: 'dart',
  color: '#0175C2',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=dart'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/dart/0175C2'
    },
    shields: {
      path: 'https://img.shields.io/badge/Dart-0175C2?logo=dart&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain-wordmark.svg']
    }
  }
}, {
  name: 'debian',
  color: '#A81D33',
  alias: [],
  tags: ['os', 'server'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/debian/A81D33'
    },
    shields: {
      path: 'https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-plain-wordmark.svg']
    }
  }
}, {
  name: 'denojs',
  color: '#000000',
  alias: [],
  tags: ['javascript', 'rust', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=deno'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/deno/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Deno-000000?logo=deno&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original-wordmark.svg']
    }
  }
}, {
  name: 'devicon',
  color: '#60BE86',
  alias: [],
  tags: ['iconset'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-line-wordmark.svg']
    }
  }
}, {
  name: 'devto',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=devto'
    }
  }
}, {
  name: 'digitalocean',
  color: '#0080FF',
  alias: [],
  tags: ['cloud', 'hosting', 'database', 'storage'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/digitalocean/0080FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/DigitalOcean-0080FF?logo=digitalocean&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-plain-wordmark.svg']
    }
  }
}, {
  name: 'discord',
  color: '#5865F2',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=discord'
    },
    simple_icons: {
      slug: 'discord',
      path: 'https://cdn.simpleicons.org/discord/5865F2'
    },
    shields: {
      path: 'https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'discordjs',
  color: '#2a2c3e',
  alias: [],
  tags: ['wrapper', 'api_wrapper', 'nodejs'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-plain-wordmark.svg']
    }
  }
}, {
  name: 'django',
  color: '#092E20',
  alias: [],
  tags: [],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=django'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/django/092E20'
    },
    shields: {
      path: 'https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg']
    }
  }
}, {
  name: 'docker',
  color: '#2496ED',
  alias: [],
  tags: ['platform', 'deploy'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=docker'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/docker/2496ED'
    },
    shields: {
      path: 'https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg']
    }
  }
}, {
  name: 'doctrine',
  color: '#f56d39',
  alias: [],
  tags: [],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/doctrine/doctrine-line-wordmark.svg']
    }
  }
}, {
  name: 'dot-net',
  color: '#512BD4',
  alias: ['dotnet'],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=dotnet'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/dotnet/512BD4'
    },
    shields: {
      path: 'https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg']
    }
  }
}, {
  name: 'dotnetcore',
  color: '#623697',
  alias: [],
  tags: ['framework'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg']
    }
  }
}, {
  name: 'dropwizard',
  color: '#24265d',
  alias: [],
  tags: ['java', 'framework'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dropwizard/dropwizard-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dropwizard/dropwizard-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dropwizard/dropwizard-plain.svg']
    }
  }
}, {
  name: 'drupal',
  color: '#0678BE',
  alias: [],
  tags: ['cms'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/drupal/0678BE'
    },
    shields: {
      path: 'https://img.shields.io/badge/Drupal-0678BE?logo=drupal&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-plain-wordmark.svg']
    }
  }
}, {
  name: 'eclipseide',
  color: '#2C2255',
  alias: ['eclipse'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=eclipse'
    },
    simple_icons: {
      slug: 'eclipseide',
      path: 'https://cdn.simpleicons.org/eclipseide/2C2255'
    },
    shields: {
      path: 'https://img.shields.io/badge/Eclipse IDE-2C2255?logo=eclipseide&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'electron',
  color: '#47848F',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=electron'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/electron/47848F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Electron-47848F?logo=electron&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original-wordmark.svg']
    }
  }
}, {
  name: 'eleventy',
  color: '#000000',
  alias: [],
  tags: ['ssg', 'static site generator'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/eleventy/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Eleventy-000000?logo=eleventy&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eleventy/eleventy-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eleventy/eleventy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eleventy/eleventy-plain.svg']
    }
  }
}, {
  name: 'elixir',
  color: '#4B275F',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=elixir'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/elixir/4B275F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Elixir-4B275F?logo=elixir&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-plain-wordmark.svg']
    }
  }
}, {
  name: 'elm',
  color: '#1293D8',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/elm/1293D8'
    },
    shields: {
      path: 'https://img.shields.io/badge/Elm-1293D8?logo=elm&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elm/elm-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elm/elm-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elm/elm-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elm/elm-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elm/elm-plain-wordmark.svg']
    }
  }
}, {
  name: 'embeddedc',
  color: '#444444',
  alias: [],
  tags: ['language', 'programming'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-plain-wordmark.svg']
    }
  }
}, {
  name: 'ember',
  color: '#E04E39',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ember'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/emberdotjs/E04E39'
    },
    shields: {
      path: 'https://img.shields.io/badge/Ember.js-E04E39?logo=emberdotjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg']
    }
  }
}, {
  name: 'emotion',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=emotion'
    }
  }
}, {
  name: 'erlang',
  color: '#A90533',
  alias: [],
  tags: [],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/erlang/A90533'
    },
    shields: {
      path: 'https://img.shields.io/badge/Erlang-A90533?logo=erlang&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/erlang/erlang-plain-wordmark.svg']
    }
  }
}, {
  name: 'eslint',
  color: '#4B32C3',
  alias: [],
  tags: ['linter', 'javascript', 'code-quality', 'coding-style'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/eslint/4B32C3'
    },
    shields: {
      path: 'https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg']
    }
  }
}, {
  name: 'express',
  color: '#000000',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=express'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/express/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg']
    }
  }
}, {
  name: 'facebook',
  color: '#1877F2',
  alias: [],
  tags: ['auth'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/facebook/1877F2'
    },
    shields: {
      path: 'https://img.shields.io/badge/Facebook-1877F2?logo=facebook&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg']
    }
  }
}, {
  name: 'fastapi',
  color: '#009688',
  alias: [],
  tags: ['python', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=fastapi'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/fastapi/009688'
    },
    shields: {
      path: 'https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain-wordmark.svg']
    }
  }
}, {
  name: 'feathersjs',
  color: '#333333',
  alias: [],
  tags: ['framework', 'rest'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/feathersjs/feathersjs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/feathersjs/feathersjs-original.svg']
    }
  }
}, {
  name: 'fediverse',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=fediverse'
    }
  }
}, {
  name: 'fedora',
  color: '#51A2DA',
  alias: [],
  tags: ['linux', 'distribuition', 'desktop'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/fedora/51A2DA'
    },
    shields: {
      path: 'https://img.shields.io/badge/Fedora-51A2DA?logo=fedora&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-plain.svg']
    }
  }
}, {
  name: 'figma',
  color: '#F24E1E',
  alias: [],
  tags: ['design'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=figma'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/figma/F24E1E'
    },
    shields: {
      path: 'https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg']
    }
  }
}, {
  name: 'filezilla',
  color: '#BF0000',
  alias: [],
  tags: ['ftp'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/filezilla/BF0000'
    },
    shields: {
      path: 'https://img.shields.io/badge/FileZilla-BF0000?logo=filezilla&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain-wordmark.svg']
    }
  }
}, {
  name: 'firebase',
  color: '#FFCA28',
  alias: [],
  tags: ['auth', 'hosting', 'storage', 'cloud'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=firebase'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/firebase/FFCA28'
    },
    shields: {
      path: 'https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg']
    }
  }
}, {
  name: 'firefox',
  color: '#FF7139',
  alias: [],
  tags: ['browser'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/firefox/FF7139'
    },
    shields: {
      path: 'https://img.shields.io/badge/Firefox-FF7139?logo=firefox&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-plain-wordmark.svg']
    }
  }
}, {
  name: 'flask',
  color: '#000000',
  alias: [],
  tags: ['python', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=flask'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/flask/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg']
    }
  }
}, {
  name: 'flutter',
  color: '#02569B',
  alias: [],
  tags: ['framework', 'sdk'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=flutter'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/flutter/02569B'
    },
    shields: {
      path: 'https://img.shields.io/badge/Flutter-02569B?logo=flutter&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg']
    }
  }
}, {
  name: 'forth',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=forth'
    }
  }
}, {
  name: 'fortran',
  color: '#734F96',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=fortran'
    },
    simple_icons: {
      slug: 'fortran',
      path: 'https://cdn.simpleicons.org/fortran/734F96'
    },
    shields: {
      path: 'https://img.shields.io/badge/Fortran-734F96?logo=fortran&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'foundation',
  color: '#008cba',
  alias: [],
  tags: ['framework', 'css'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-plain-wordmark.svg']
    }
  }
}, {
  name: 'freebsd',
  color: '#AB2B28',
  alias: ['bsd'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=bsd'
    },
    simple_icons: {
      slug: 'freebsd',
      path: 'https://cdn.simpleicons.org/freebsd/AB2B28'
    },
    shields: {
      path: 'https://img.shields.io/badge/FreeBSD-AB2B28?logo=freebsd&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'fsharp',
  color: '#378BBA',
  alias: [],
  tags: ['language'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fsharp/fsharp-plain.svg']
    }
  }
}, {
  name: 'gamemakerstudio',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gamemakerstudio'
    }
  }
}, {
  name: 'gatling',
  color: '#FF9E2A',
  alias: [],
  tags: ['framework', 'testing'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gatling/FF9E2A'
    },
    shields: {
      path: 'https://img.shields.io/badge/Gatling-FF9E2A?logo=gatling&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatling/gatling-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatling/gatling-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatling/gatling-plain-wordmark.svg']
    }
  }
}, {
  name: 'gatsby',
  color: '#663399',
  alias: [],
  tags: ['reactjs', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gatsby'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gatsby/663399'
    },
    shields: {
      path: 'https://img.shields.io/badge/Gatsby-663399?logo=gatsby&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain-wordmark.svg']
    }
  }
}, {
  name: 'gcc',
  color: '#ffcfab',
  alias: [],
  tags: ['compiler', 'linux'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gcc/gcc-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gcc/gcc-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gcc/gcc-plain.svg']
    }
  }
}, {
  name: 'gentoo',
  color: '#54487A',
  alias: [],
  tags: ['linux', 'distribuition', 'desktop'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gentoo/54487A'
    },
    shields: {
      path: 'https://img.shields.io/badge/Gentoo-54487A?logo=gentoo&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gentoo/gentoo-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gentoo/gentoo-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gentoo/gentoo-plain-wordmark.svg']
    }
  }
}, {
  name: 'gherkin',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gherkin'
    }
  }
}, {
  name: 'gimp',
  color: '#5C5543',
  alias: [],
  tags: ['graphic'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gimp/5C5543'
    },
    shields: {
      path: 'https://img.shields.io/badge/GIMP-5C5543?logo=gimp&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-plain-wordmark.svg']
    }
  }
}, {
  name: 'git',
  color: '#F05032',
  alias: [],
  tags: ['version-control'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=git'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/git/F05032'
    },
    shields: {
      path: 'https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg']
    }
  }
}, {
  name: 'github',
  color: '#181717',
  alias: [],
  tags: ['version-control'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=github'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/github/181717'
    },
    shields: {
      path: 'https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg']
    }
  }
}, {
  name: 'githubactions',
  color: '#2088FF',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=githubactions'
    },
    simple_icons: {
      slug: 'githubactions',
      path: 'https://cdn.simpleicons.org/githubactions/2088FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/GitHub Actions-2088FF?logo=githubactions&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'gitlab',
  color: '#FC6D26',
  alias: [],
  tags: ['version-control'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gitlab'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gitlab/FC6D26'
    },
    shields: {
      path: 'https://img.shields.io/badge/GitLab-FC6D26?logo=gitlab&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-plain-wordmark.svg']
    }
  }
}, {
  name: 'gitter',
  color: '#ED1965',
  alias: [],
  tags: ['social', 'chat'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gitter/ED1965'
    },
    shields: {
      path: 'https://img.shields.io/badge/Gitter-ED1965?logo=gitter&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitter/gitter-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitter/gitter-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitter/gitter-plain-wordmark.svg']
    }
  }
}, {
  name: 'gnuemacs',
  color: '#7F5AB6',
  alias: ['emacs'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=emacs'
    },
    simple_icons: {
      slug: 'gnuemacs',
      path: 'https://cdn.simpleicons.org/gnuemacs/7F5AB6'
    },
    shields: {
      path: 'https://img.shields.io/badge/GNU Emacs-7F5AB6?logo=gnuemacs&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'go',
  color: '#00ADD8',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=go'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/go/00ADD8'
    },
    shields: {
      path: 'https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-line.svg']
    }
  }
}, {
  name: 'godot',
  color: '#478CBF',
  alias: [],
  tags: ['game-engine', 'open-source'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=godot'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/godotengine/478CBF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Godot Engine-478CBF?logo=godotengine&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-plain-wordmark.svg']
    }
  }
}, {
  name: 'google',
  color: '#4285F4',
  alias: [],
  tags: ['auth'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/google/4285F4'
    },
    shields: {
      path: 'https://img.shields.io/badge/Google-4285F4?logo=google&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-plain-wordmark.svg']
    }
  }
}, {
  name: 'googlecloud',
  color: '#4285F4',
  alias: ['gcp'],
  tags: ['google', 'cloud'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gcp'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/googlecloud/4285F4'
    },
    shields: {
      path: 'https://img.shields.io/badge/Google Cloud-4285F4?logo=googlecloud&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain-wordmark.svg']
    }
  }
}, {
  name: 'gradle',
  color: '#02303A',
  alias: [],
  tags: ['task-runner'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gradle'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gradle/02303A'
    },
    shields: {
      path: 'https://img.shields.io/badge/Gradle-02303A?logo=gradle&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain-wordmark.svg']
    }
  }
}, {
  name: 'grafana',
  color: '#F46800',
  alias: [],
  tags: ['monitoring', 'analytics', 'metrics', 'logs', 'visualization', 'web-application'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=grafana'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/grafana/F46800'
    },
    shields: {
      path: 'https://img.shields.io/badge/Grafana-F46800?logo=grafana&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original-wordmark.svg']
    }
  }
}, {
  name: 'grails',
  color: '#feb672',
  alias: [],
  tags: ['framework'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grails/grails-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grails/grails-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grails/grails-plain.svg']
    }
  }
}, {
  name: 'graphql',
  color: '#E10098',
  alias: [],
  tags: ['language', 'data', 'query'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=graphql'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/graphql/E10098'
    },
    shields: {
      path: 'https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg']
    }
  }
}, {
  name: 'groovy',
  color: '#4298B8',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/apachegroovy/4298B8'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apache Groovy-4298B8?logo=apachegroovy&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-plain.svg']
    }
  }
}, {
  name: 'grunt',
  color: '#FAA918',
  alias: [],
  tags: ['task-runner', 'nodejs'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/grunt/FAA918'
    },
    shields: {
      path: 'https://img.shields.io/badge/Grunt-FAA918?logo=grunt&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-line-wordmark.svg']
    }
  }
}, {
  name: 'gtk',
  color: '#7FE719',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gtk'
    },
    simple_icons: {
      slug: 'gtk',
      path: 'https://cdn.simpleicons.org/gtk/7FE719'
    },
    shields: {
      path: 'https://img.shields.io/badge/GTK-7FE719?logo=gtk&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'gulp',
  color: '#CF4647',
  alias: [],
  tags: ['task-runner', 'nodejs'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=gulp'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gulp/CF4647'
    },
    shields: {
      path: 'https://img.shields.io/badge/gulp-CF4647?logo=gulp&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg']
    }
  }
}, {
  name: 'handlebars',
  color: '#000000',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/handlebarsdotjs/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Handlebars.js-000000?logo=handlebarsdotjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg']
    }
  }
}, {
  name: 'haskell',
  color: '#5D4F85',
  alias: [],
  tags: ['language', 'functional'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=haskell'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/haskell/5D4F85'
    },
    shields: {
      path: 'https://img.shields.io/badge/Haskell-5D4F85?logo=haskell&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-plain-wordmark.svg']
    }
  }
}, {
  name: 'haxe',
  color: '#EA8220',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=haxe'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/haxe/EA8220'
    },
    shields: {
      path: 'https://img.shields.io/badge/Haxe-EA8220?logo=haxe&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haxe/haxe-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haxe/haxe-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haxe/haxe-plain.svg']
    }
  }
}, {
  name: 'haxeflixel',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=haxeflixel'
    }
  }
}, {
  name: 'heroku',
  color: '#430098',
  alias: [],
  tags: ['cloud'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=heroku'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/heroku/430098'
    },
    shields: {
      path: 'https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg']
    }
  }
}, {
  name: 'hibernate',
  color: '#59666C',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=hibernate'
    },
    simple_icons: {
      slug: 'hibernate',
      path: 'https://cdn.simpleicons.org/hibernate/59666C'
    },
    shields: {
      path: 'https://img.shields.io/badge/Hibernate-59666C?logo=hibernate&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'html5',
  color: '#E34F26',
  alias: ['html'],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=html'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/html5/E34F26'
    },
    shields: {
      path: 'https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg']
    }
  }
}, {
  name: 'hugo',
  color: '#FF4088',
  alias: [],
  tags: ['framework', 'ssg', 'static-site-generator', 'go', 'html', 'css'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/hugo/FF4088'
    },
    shields: {
      path: 'https://img.shields.io/badge/Hugo-FF4088?logo=hugo&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hugo/hugo-plain-wordmark.svg']
    }
  }
}, {
  name: 'ie10',
  color: '#0076D6',
  alias: [],
  tags: ['browser'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/internetexplorer/0076D6'
    },
    shields: {
      path: 'https://img.shields.io/badge/Internet Explorer-0076D6?logo=internetexplorer&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ie10/ie10-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ie10/ie10-original.svg']
    }
  }
}, {
  name: 'ifttt',
  color: '#000000',
  alias: [],
  tags: ['automation', 'applets', 'programming'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/ifttt/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/IFTTT-000000?logo=ifttt&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ifttt/ifttt-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ifttt/ifttt-original.svg']
    }
  }
}, {
  name: 'illustrator',
  color: '#FF9A00',
  alias: [],
  tags: ['editor', 'vector'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe Illustrator-FF9A00?logo=adobeillustrator&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg']
    }
  }
}, {
  name: 'inkscape',
  color: '#000000',
  alias: [],
  tags: ['editor', 'vector'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/inkscape/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Inkscape-000000?logo=inkscape&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-plain-wordmark.svg']
    }
  }
}, {
  name: 'instagram',
  color: '#E4405F',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=instagram'
    },
    simple_icons: {
      slug: 'instagram',
      path: 'https://cdn.simpleicons.org/instagram/E4405F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'intellij',
  color: '#000000',
  alias: [],
  tags: ['editor'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/intellijidea/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/IntelliJ IDEA-000000?logo=intellijidea&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-plain-wordmark.svg']
    }
  }
}, {
  name: 'intellijidea',
  color: '#000000',
  alias: ['idea'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=idea'
    },
    simple_icons: {
      slug: 'intellijidea',
      path: 'https://cdn.simpleicons.org/intellijidea/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/IntelliJ IDEA-000000?logo=intellijidea&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'ionic',
  color: '#3880FF',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/ionic/3880FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Ionic-3880FF?logo=ionic&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original-wordmark.svg']
    }
  }
}, {
  name: 'ipfs',
  color: '#65C2CB',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ipfs'
    },
    simple_icons: {
      slug: 'ipfs',
      path: 'https://cdn.simpleicons.org/ipfs/65C2CB'
    },
    shields: {
      path: 'https://img.shields.io/badge/IPFS-65C2CB?logo=ipfs&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'jamstack',
  color: '#F0047F',
  alias: [],
  tags: ['javascript', 'markup'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jamstack/F0047F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Jamstack-F0047F?logo=jamstack&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-plain-wordmark.svg']
    }
  }
}, {
  name: 'jasmine',
  color: '#8A4182',
  alias: [],
  tags: ['testing'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jasmine/8A4182'
    },
    shields: {
      path: 'https://img.shields.io/badge/Jasmine-8A4182?logo=jasmine&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain-wordmark.svg']
    }
  }
}, {
  name: 'java',
  color: '#EA2D2E',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=java'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg']
    }
  }
}, {
  name: 'javascript',
  color: '#F7DF1E',
  alias: ['js'],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=js'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/javascript/F7DF1E'
    },
    shields: {
      path: 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg']
    }
  }
}, {
  name: 'jeet',
  color: '#FF664A',
  alias: [],
  tags: ['framework', 'css'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jeet/jeet-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jeet/jeet-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jeet/jeet-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jeet/jeet-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jeet/jeet-plain-wordmark.svg']
    }
  }
}, {
  name: 'jenkins',
  color: '#D24939',
  alias: [],
  tags: ['platform', 'integration', 'server'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=jenkins'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jenkins/D24939'
    },
    shields: {
      path: 'https://img.shields.io/badge/Jenkins-D24939?logo=jenkins&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-line.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg']
    }
  }
}, {
  name: 'jest',
  color: '#C21325',
  alias: [],
  tags: ['testing', 'javascript'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=jest'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jest/C21325'
    },
    shields: {
      path: 'https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg']
    }
  }
}, {
  name: 'jetbrains',
  color: '#000000',
  alias: [],
  tags: ['ide'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jetbrains/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/JetBrains-000000?logo=jetbrains&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-plain.svg']
    }
  }
}, {
  name: 'jira',
  color: '#0052CC',
  alias: [],
  tags: ['platform', 'organize'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jira/0052CC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-plain-wordmark.svg']
    }
  }
}, {
  name: 'jquery',
  color: '#0769AD',
  alias: [],
  tags: ['library', 'javascript'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=jquery'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jquery/0769AD'
    },
    shields: {
      path: 'https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg']
    }
  }
}, {
  name: 'julia',
  color: '#9558B2',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/julia/9558B2'
    },
    shields: {
      path: 'https://img.shields.io/badge/Julia-9558B2?logo=julia&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-plain-wordmark.svg']
    }
  }
}, {
  name: 'jupyter',
  color: '#F37626',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/jupyter/F37626'
    },
    shields: {
      path: 'https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-plain-wordmark.svg']
    }
  }
}, {
  name: 'k3s',
  color: '#FFC61C',
  alias: [],
  tags: ['kubernetes', 'container', 'platform'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/k3s/FFC61C'
    },
    shields: {
      path: 'https://img.shields.io/badge/K3s-FFC61C?logo=k3s&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/k3s/k3s-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/k3s/k3s-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/k3s/k3s-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/k3s/k3s-plain-wordmark.svg']
    }
  }
}, {
  name: 'kaggle',
  color: '#20BEFF',
  alias: [],
  tags: ['platform', 'auth', 'machine-learning'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/kaggle/20BEFF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Kaggle-20BEFF?logo=kaggle&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original-wordmark.svg']
    }
  }
}, {
  name: 'karma',
  color: '#56c5a8',
  alias: [],
  tags: ['testing', 'test-runner'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-plain.svg']
    }
  }
}, {
  name: 'knockout',
  color: '#e42e16',
  alias: [],
  tags: ['framework', 'javascript'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/knockout/knockout-plain-wordmark.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/knockout/knockout-plain-wordmark.svg']
    }
  }
}, {
  name: 'kotlin',
  color: '#7F52FF',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=kotlin'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/kotlin/7F52FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Kotlin-7F52FF?logo=kotlin&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain-wordmark.svg']
    }
  }
}, {
  name: 'krakenjs',
  color: '#179287',
  alias: [],
  tags: ['nodejs', 'framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/gitkraken/179287'
    },
    shields: {
      path: 'https://img.shields.io/badge/GitKraken-179287?logo=gitkraken&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/krakenjs/krakenjs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/krakenjs/krakenjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/krakenjs/krakenjs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/krakenjs/krakenjs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/krakenjs/krakenjs-plain-wordmark.svg']
    }
  }
}, {
  name: 'ktor',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ktor'
    }
  }
}, {
  name: 'kubernetes',
  color: '#326CE5',
  alias: [],
  tags: ['container', 'deployment'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=kubernetes'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/kubernetes/326CE5'
    },
    shields: {
      path: 'https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg']
    }
  }
}, {
  name: 'labview',
  color: '#FFDB00',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/labview/FFDB00'
    },
    shields: {
      path: 'https://img.shields.io/badge/LabVIEW-FFDB00?logo=labview&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/labview/labview-plain-wordmark.svg']
    }
  }
}, {
  name: 'laravel',
  color: '#FF2D20',
  alias: [],
  tags: ['php', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=laravel'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/laravel/FF2D20'
    },
    shields: {
      path: 'https://img.shields.io/badge/Laravel-FF2D20?logo=laravel&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg']
    }
  }
}, {
  name: 'latex',
  color: '#008080',
  alias: [],
  tags: ['latex3', 'latex2e', 'markup', 'tex', 'typesetting-system'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=latex'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/latex/008080'
    },
    shields: {
      path: 'https://img.shields.io/badge/LaTeX-008080?logo=latex&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg']
    }
  }
}, {
  name: 'less',
  color: '#1D365D',
  alias: [],
  tags: ['css', 'pre-processor'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/less/1D365D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Less-1D365D?logo=less&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg']
    }
  }
}, {
  name: 'linkedin',
  color: '#0A66C2',
  alias: [],
  tags: ['social', 'auth'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=linkedin'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/linkedin/0A66C2'
    },
    shields: {
      path: 'https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg']
    }
  }
}, {
  name: 'linux',
  color: '#FCC624',
  alias: [],
  tags: ['os'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=linux'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/linux/FCC624'
    },
    shields: {
      path: 'https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg']
    }
  }
}, {
  name: 'lit',
  color: '#324FFF',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=lit'
    },
    simple_icons: {
      slug: 'lit',
      path: 'https://cdn.simpleicons.org/lit/324FFF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Lit-324FFF?logo=lit&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'lua',
  color: '#2C2D72',
  alias: [],
  tags: ['programming', 'language', 'object-oriented', 'scripting', 'procedural', 'prototype-based', 'functional'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=lua'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/lua/2C2D72'
    },
    shields: {
      path: 'https://img.shields.io/badge/Lua-2C2D72?logo=lua&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-plain-wordmark.svg']
    }
  }
}, {
  name: 'magento',
  color: '#EE672F',
  alias: [],
  tags: ['php', 'framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/magento/EE672F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Magento-EE672F?logo=magento&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-line.svg']
    }
  }
}, {
  name: 'markdown',
  color: '#000000',
  alias: ['md'],
  tags: ['markup', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=md'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/markdown/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg']
    }
  }
}, {
  name: 'mastodon',
  color: '#6364FF',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=mastodon'
    },
    simple_icons: {
      slug: 'mastodon',
      path: 'https://cdn.simpleicons.org/mastodon/6364FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Mastodon-6364FF?logo=mastodon&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'materialui',
  color: '#007FFF',
  alias: ['material-ui'],
  tags: ['framework', 'design', 'ui'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=materialui'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/mui/007FFF'
    },
    shields: {
      path: 'https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg']
    }
  }
}, {
  name: 'matlab',
  color: '#6dd0c7',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=matlab'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-line.svg']
    }
  }
}, {
  name: 'maya',
  color: '#149B9A',
  alias: [],
  tags: ['mel', 'pymel', 'python', '3d', 'programming', 'vfx', 'graphic', 'graphics', 'game', 'animation'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-plain-wordmark.svg']
    }
  }
}, {
  name: 'meteor',
  color: '#DE4F4F',
  alias: [],
  tags: ['javascript'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/meteor/DE4F4F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Meteor-DE4F4F?logo=meteor&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meteor/meteor-plain-wordmark.svg']
    }
  }
}, {
  name: 'microsoftsqlserver',
  color: '#CC2927',
  alias: [],
  tags: ['database'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/microsoftsqlserver/CC2927'
    },
    shields: {
      path: 'https://img.shields.io/badge/Microsoft SQL Server-CC2927?logo=microsoftsqlserver&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg']
    }
  }
}, {
  name: 'minitab',
  color: '#8dc63f',
  alias: [],
  tags: ['package', 'statistics'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/minitab/minitab-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/minitab/minitab-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/minitab/minitab-plain.svg']
    }
  }
}, {
  name: 'misskey',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=misskey'
    }
  }
}, {
  name: 'mocha',
  color: '#8D6748',
  alias: [],
  tags: ['testing'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/mocha/8D6748'
    },
    shields: {
      path: 'https://img.shields.io/badge/Mocha-8D6748?logo=mocha&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg']
    }
  }
}, {
  name: 'modx',
  color: '#102C53',
  alias: [],
  tags: ['cms', 'php', 'framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/modx/102C53'
    },
    shields: {
      path: 'https://img.shields.io/badge/MODX-102C53?logo=modx&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/modx/modx-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/modx/modx-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/modx/modx-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/modx/modx-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/modx/modx-plain-wordmark.svg']
    }
  }
}, {
  name: 'mongodb',
  color: '#47A248',
  alias: [],
  tags: ['database'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=mongodb'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/mongodb/47A248'
    },
    shields: {
      path: 'https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg']
    }
  }
}, {
  name: 'moodle',
  color: '#F7931E',
  alias: [],
  tags: ['platform'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-plain-wordmark.svg']
    }
  }
}, {
  name: 'msdos',
  color: '#ff0000',
  alias: [],
  tags: ['os'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/msdos/msdos-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/msdos/msdos-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/msdos/msdos-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/msdos/msdos-line.svg']
    }
  }
}, {
  name: 'mysql',
  color: '#4479A1',
  alias: [],
  tags: ['database', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=mysql'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/mysql/4479A1'
    },
    shields: {
      path: 'https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg']
    }
  }
}, {
  name: 'neo4j',
  color: '#4581C3',
  alias: [],
  tags: ['database'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/neo4j/4581C3'
    },
    shields: {
      path: 'https://img.shields.io/badge/Neo4j-4581C3?logo=neo4j&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-plain-wordmark.svg']
    }
  }
}, {
  name: 'neovim',
  color: '#57A143',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=neovim'
    },
    simple_icons: {
      slug: 'neovim',
      path: 'https://cdn.simpleicons.org/neovim/57A143'
    },
    shields: {
      path: 'https://img.shields.io/badge/Neovim-57A143?logo=neovim&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'nestjs',
  color: '#E0234E',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=nestjs'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/nestjs/E0234E'
    },
    shields: {
      path: 'https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg']
    }
  }
}, {
  name: 'netlify',
  color: '#00C7B7',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=netlify'
    },
    simple_icons: {
      slug: 'netlify',
      path: 'https://cdn.simpleicons.org/netlify/00C7B7'
    },
    shields: {
      path: 'https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'networkx',
  color: '#2C7FB8',
  alias: [],
  tags: ['graph', 'library', 'python'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg']
    }
  }
}, {
  name: 'nextjs',
  color: '#000000',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=nextjs'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/nextdotjs/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg']
    }
  }
}, {
  name: 'nginx',
  color: '#009639',
  alias: [],
  tags: ['server'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=nginx'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/nginx/009639'
    },
    shields: {
      path: 'https://img.shields.io/badge/NGINX-009639?logo=nginx&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg']
    }
  }
}, {
  name: 'nim',
  color: '#FFE953',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=nim'
    },
    simple_icons: {
      slug: 'nim',
      path: 'https://cdn.simpleicons.org/nim/FFE953'
    },
    shields: {
      path: 'https://img.shields.io/badge/Nim-FFE953?logo=nim&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'nixos',
  color: '#5277C3',
  alias: [],
  tags: ['os'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/nixos/5277C3'
    },
    shields: {
      path: 'https://img.shields.io/badge/NixOS-5277C3?logo=nixos&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nixos/nixos-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nixos/nixos-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nixos/nixos-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nixos/nixos-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nixos/nixos-plain-wordmark.svg']
    }
  }
}, {
  name: 'nodejs',
  color: '#339933',
  alias: [],
  tags: ['javascript', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=nodejs'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/nodedotjs/339933'
    },
    shields: {
      path: 'https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg']
    }
  }
}, {
  name: 'nodewebkit',
  color: '#3d3b47',
  alias: [],
  tags: [],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodewebkit/nodewebkit-line-wordmark.svg']
    }
  }
}, {
  name: 'npm',
  color: '#CB3837',
  alias: [],
  tags: ['package', 'manager'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/npm/CB3837'
    },
    shields: {
      path: 'https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg']
    }
  }
}, {
  name: 'nuget',
  color: '#004880',
  alias: [],
  tags: ['package', 'manager'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/nuget/004880'
    },
    shields: {
      path: 'https://img.shields.io/badge/NuGet-004880?logo=nuget&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuget/nuget-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuget/nuget-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuget/nuget-original-wordmark.svg']
    }
  }
}, {
  name: 'numpy',
  color: '#013243',
  alias: [],
  tags: ['library', 'python'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/numpy/013243'
    },
    shields: {
      path: 'https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg']
    }
  }
}, {
  name: 'nuxtjs',
  color: '#00DC82',
  alias: [],
  tags: ['js', 'javascript', 'framework', 'frontend', 'vuejs'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=nuxtjs'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/nuxtdotjs/00DC82'
    },
    shields: {
      path: 'https://img.shields.io/badge/Nuxt.js-00DC82?logo=nuxtdotjs&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-plain-wordmark.svg']
    }
  }
}, {
  name: 'objectivec',
  color: '#0b5a9d',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg']
    }
  }
}, {
  name: 'ocaml',
  color: '#EC6813',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ocaml'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/ocaml/EC6813'
    },
    shields: {
      path: 'https://img.shields.io/badge/OCaml-EC6813?logo=ocaml&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-plain-wordmark.svg']
    }
  }
}, {
  name: 'octave',
  color: '#0790C0',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=octave'
    },
    simple_icons: {
      slug: 'octave',
      path: 'https://cdn.simpleicons.org/octave/0790C0'
    },
    shields: {
      path: 'https://img.shields.io/badge/Octave-0790C0?logo=octave&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'openal',
  color: '#7e000d',
  alias: [],
  tags: ['library', 'audio', 'game', '3d'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-plain.svg']
    }
  }
}, {
  name: 'opencv',
  color: '#5C3EE8',
  alias: [],
  tags: ['library', 'c/c++', 'computer-vision'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/opencv/5C3EE8'
    },
    shields: {
      path: 'https://img.shields.io/badge/OpenCV-5C3EE8?logo=opencv&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-plain-wordmark.svg']
    }
  }
}, {
  name: 'opengl',
  color: '#5586A4',
  alias: [],
  tags: ['library', 'graphics', 'game', '3d'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/opengl/5586A4'
    },
    shields: {
      path: 'https://img.shields.io/badge/OpenGL-5586A4?logo=opengl&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-plain.svg']
    }
  }
}, {
  name: 'openstack',
  color: '#ED1944',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=openstack'
    },
    simple_icons: {
      slug: 'openstack',
      path: 'https://cdn.simpleicons.org/openstack/ED1944'
    },
    shields: {
      path: 'https://img.shields.io/badge/OpenStack-ED1944?logo=openstack&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'opensuse',
  color: '#73BA25',
  alias: [],
  tags: ['linux', 'distribuition', 'desktop'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/opensuse/73BA25'
    },
    shields: {
      path: 'https://img.shields.io/badge/openSUSE-73BA25?logo=opensuse&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-plain-wordmark.svg']
    }
  }
}, {
  name: 'opera',
  color: '#FF1B2D',
  alias: [],
  tags: ['browser'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/opera/FF1B2D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Opera-FF1B2D?logo=opera&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opera/opera-plain-wordmark.svg']
    }
  }
}, {
  name: 'oracle',
  color: '#F80000',
  alias: [],
  tags: ['database'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/oracle/F80000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Oracle-F80000?logo=oracle&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg']
    }
  }
}, {
  name: 'packer',
  color: '#02A8EF',
  alias: [],
  tags: ['infrastructure', 'infrastructure-as-code', 'continuous-delivery'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/packer/02A8EF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Packer-02A8EF?logo=packer&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/packer/packer-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/packer/packer-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/packer/packer-original-wordmark.svg']
    }
  }
}, {
  name: 'pandas',
  color: '#150458',
  alias: [],
  tags: ['library', 'python'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/pandas/150458'
    },
    shields: {
      path: 'https://img.shields.io/badge/pandas-150458?logo=pandas&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg']
    }
  }
}, {
  name: 'perl',
  color: '#39457E',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=perl'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/perl/39457E'
    },
    shields: {
      path: 'https://img.shields.io/badge/Perl-39457E?logo=perl&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-plain.svg']
    }
  }
}, {
  name: 'phalcon',
  color: '#76c39b',
  alias: [],
  tags: ['php', 'framework'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phalcon/phalcon-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phalcon/phalcon-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phalcon/phalcon-plain.svg']
    }
  }
}, {
  name: 'phoenix',
  color: '#F15524',
  alias: [],
  tags: ['framework'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-plain-wordmark.svg']
    }
  }
}, {
  name: 'photoshop',
  color: '#31A8FF',
  alias: [],
  tags: ['editor', 'graphic'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe Photoshop-31A8FF?logo=adobephotoshop&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg']
    }
  }
}, {
  name: 'php',
  color: '#777BB4',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=php'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/php/777BB4'
    },
    shields: {
      path: 'https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg']
    }
  }
}, {
  name: 'phpstorm',
  color: '#000000',
  alias: [],
  tags: ['editor'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/phpstorm/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/PhpStorm-000000?logo=phpstorm&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phpstorm/phpstorm-plain-wordmark.svg']
    }
  }
}, {
  name: 'plan9',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=plan9'
    }
  }
}, {
  name: 'planetscale',
  color: '#000000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=planetscale'
    },
    simple_icons: {
      slug: 'planetscale',
      path: 'https://cdn.simpleicons.org/planetscale/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/PlanetScale-000000?logo=planetscale&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'podman',
  color: '#892CA0',
  alias: [],
  tags: ['container', 'pods', 'docker'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/podman/892CA0'
    },
    shields: {
      path: 'https://img.shields.io/badge/Podman-892CA0?logo=podman&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-plain-wordmark.svg']
    }
  }
}, {
  name: 'polygon',
  color: '#38285B',
  alias: [],
  tags: ['ethereum', 'erc20', 'blockchain'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/polygon/polygon-plain.svg']
    }
  }
}, {
  name: 'postgresql',
  color: '#4169E1',
  alias: ['postgres'],
  tags: ['database'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=postgres'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/postgresql/4169E1'
    },
    shields: {
      path: 'https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg']
    }
  }
}, {
  name: 'postman',
  color: '#FF6C37',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=postman'
    },
    simple_icons: {
      slug: 'postman',
      path: 'https://cdn.simpleicons.org/postman/FF6C37'
    },
    shields: {
      path: 'https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'powershell',
  color: '#5391FE',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=powershell'
    },
    simple_icons: {
      slug: 'powershell',
      path: 'https://cdn.simpleicons.org/powershell/5391FE'
    },
    shields: {
      path: 'https://img.shields.io/badge/PowerShell-5391FE?logo=powershell&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'premierepro',
  color: '#9999FF',
  alias: [],
  tags: ['editor', 'video'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/adobepremierepro/9999FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe Premiere Pro-9999FF?logo=adobepremierepro&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg']
    }
  }
}, {
  name: 'prisma',
  color: '#2D3748',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=prisma'
    },
    simple_icons: {
      slug: 'prisma',
      path: 'https://cdn.simpleicons.org/prisma/2D3748'
    },
    shields: {
      path: 'https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'processing',
  color: '#006699',
  alias: [],
  tags: ['java', 'python', 'android', 'application', 'ide', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=processing'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/processingfoundation/006699'
    },
    shields: {
      path: 'https://img.shields.io/badge/Processing Foundation-006699?logo=processingfoundation&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/processing/processing-plain-wordmark.svg']
    }
  }
}, {
  name: 'prometheus',
  color: '#E6522C',
  alias: [],
  tags: ['monitoring', 'observability', 'analysis'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=prometheus'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/prometheus/E6522C'
    },
    shields: {
      path: 'https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original-wordmark.svg']
    }
  }
}, {
  name: 'protractor',
  color: '#ED163A',
  alias: [],
  tags: ['framework', 'javascript'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/protractor/ED163A'
    },
    shields: {
      path: 'https://img.shields.io/badge/Protractor-ED163A?logo=protractor&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/protractor/protractor-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/protractor/protractor-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/protractor/protractor-plain-wordmark.svg']
    }
  }
}, {
  name: 'pug',
  color: '#A86454',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=pug'
    },
    simple_icons: {
      slug: 'pug',
      path: 'https://cdn.simpleicons.org/pug/A86454'
    },
    shields: {
      path: 'https://img.shields.io/badge/Pug-A86454?logo=pug&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'putty',
  color: '#0000fc',
  alias: [],
  tags: ['ssh', 'server'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-plain.svg']
    }
  }
}, {
  name: 'pycharm',
  color: '#000000',
  alias: [],
  tags: ['editor'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/pycharm/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/PyCharm-000000?logo=pycharm&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-plain-wordmark.svg']
    }
  }
}, {
  name: 'pytest',
  color: '#0A9EDC',
  alias: [],
  tags: ['python', 'framework', 'testing'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/pytest/0A9EDC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Pytest-0A9EDC?logo=pytest&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-plain-wordmark.svg']
    }
  }
}, {
  name: 'python',
  color: '#3776AB',
  alias: ['py'],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=py'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/python/3776AB'
    },
    shields: {
      path: 'https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg']
    }
  }
}, {
  name: 'pytorch',
  color: '#EE4C2C',
  alias: [],
  tags: ['programming', 'framework', 'machine-learning', 'python'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=pytorch'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/pytorch/EE4C2C'
    },
    shields: {
      path: 'https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-plain-wordmark.svg']
    }
  }
}, {
  name: 'qt',
  color: '#41CD52',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=qt'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/qt/41CD52'
    },
    shields: {
      path: 'https://img.shields.io/badge/Qt-41CD52?logo=qt&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg']
    }
  }
}, {
  name: 'r',
  color: '#276DC3',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=r'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/r/276DC3'
    },
    shields: {
      path: 'https://img.shields.io/badge/R-276DC3?logo=r&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-plain.svg']
    }
  }
}, {
  name: 'rabbitmq',
  color: '#FF6600',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=rabbitmq'
    },
    simple_icons: {
      slug: 'rabbitmq',
      path: 'https://cdn.simpleicons.org/rabbitmq/FF6600'
    },
    shields: {
      path: 'https://img.shields.io/badge/RabbitMQ-FF6600?logo=rabbitmq&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'rails',
  color: '#CC0000',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=rails'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/rubyonrails/CC0000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Ruby on Rails-CC0000?logo=rubyonrails&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg']
    }
  }
}, {
  name: 'raspberrypi',
  color: '#A22846',
  alias: [],
  tags: ['arm', 'computer'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=raspberrypi'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/raspberrypi/A22846'
    },
    shields: {
      path: 'https://img.shields.io/badge/Raspberry Pi-A22846?logo=raspberrypi&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-line-wordmark.svg']
    }
  }
}, {
  name: 'react',
  color: '#61DAFB',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=react'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/react/61DAFB'
    },
    shields: {
      path: 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg']
    }
  }
}, {
  name: 'reactivex',
  color: '#B7178C',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=reactivex'
    },
    simple_icons: {
      slug: 'reactivex',
      path: 'https://cdn.simpleicons.org/reactivex/B7178C'
    },
    shields: {
      path: 'https://img.shields.io/badge/ReactiveX-B7178C?logo=reactivex&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'rect',
  color: '#262626',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rect/rect-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rect/rect-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rect/rect-plain.svg']
    }
  }
}, {
  name: 'redhat',
  color: '#EE0000',
  alias: [],
  tags: ['server', 'linux'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/redhat/EE0000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Red Hat-EE0000?logo=redhat&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-plain-wordmark.svg']
    }
  }
}, {
  name: 'redhatopenshift',
  shortname: 'openshift',
  color: '#EE0000',
  alias: ['openshift'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=openshift'
    },
    simple_icons: {
      slug: 'redhatopenshift',
      path: 'https://cdn.simpleicons.org/redhatopenshift/EE0000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Red Hat Open Shift-EE0000?logo=redhatopenshift&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'redis',
  color: '#DC382D',
  alias: [],
  tags: ['server'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=redis'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/redis/DC382D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain-wordmark.svg']
    }
  }
}, {
  name: 'redux',
  color: '#764ABC',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=redux'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/redux/764ABC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg']
    }
  }
}, {
  name: 'regex',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=regex'
    }
  }
}, {
  name: 'remix',
  color: '#000000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=remix'
    },
    simple_icons: {
      slug: 'remix',
      path: 'https://cdn.simpleicons.org/remix/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Remix-000000?logo=remix&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'replit',
  color: '#F26207',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=replit'
    },
    simple_icons: {
      slug: 'replit',
      path: 'https://cdn.simpleicons.org/replit/F26207'
    },
    shields: {
      path: 'https://img.shields.io/badge/Replit-F26207?logo=replit&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'rocket',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=rocket'
    }
  }
}, {
  name: 'rocksdb',
  color: '#2A2A2A',
  alias: [],
  tags: ['database'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/rocksdb/2A2A2A'
    },
    shields: {
      path: 'https://img.shields.io/badge/RocksDB-2A2A2A?logo=rocksdb&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rocksdb/rocksdb-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rocksdb/rocksdb-plain.svg']
    }
  }
}, {
  name: 'rollupdotjs',
  color: '#EC4A3F',
  alias: ['rollupjs'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=rollupjs'
    },
    simple_icons: {
      slug: 'rollupdotjs',
      path: 'https://cdn.simpleicons.org/rollupdotjs/EC4A3F'
    },
    shields: {
      path: 'https://img.shields.io/badge/rollup.js-EC4A3F?logo=rollupdotjs&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'ros',
  color: '#22314E',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ros'
    },
    simple_icons: {
      slug: 'ros',
      path: 'https://cdn.simpleicons.org/ros/22314E'
    },
    shields: {
      path: 'https://img.shields.io/badge/ROS-22314E?logo=ros&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'rspec',
  color: '#6de1fa',
  alias: [],
  tags: ['ruby', 'framework', 'testing'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg']
    }
  }
}, {
  name: 'rstudio',
  color: '#75AADB',
  alias: [],
  tags: ['editor', 'package', 'statistics'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/rstudio/75AADB'
    },
    shields: {
      path: 'https://img.shields.io/badge/RStudio-75AADB?logo=rstudio&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-plain.svg']
    }
  }
}, {
  name: 'ruby',
  color: '#CC342D',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ruby'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/ruby/CC342D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Ruby-CC342D?logo=ruby&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg']
    }
  }
}, {
  name: 'rubymine',
  color: '#C12C4C',
  alias: [],
  tags: ['editor'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rubymine/rubymine-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rubymine/rubymine-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rubymine/rubymine-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rubymine/rubymine-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rubymine/rubymine-plain-wordmark.svg']
    }
  }
}, {
  name: 'rust',
  color: '#000000',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=rust'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/rust/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg']
    }
  }
}, {
  name: 'safari',
  color: '#000000',
  alias: [],
  tags: ['browser'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/safari/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Safari-000000?logo=safari&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-line-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/safari/safari-line.svg']
    }
  }
}, {
  name: 'salesforce',
  color: '#00A1E0',
  alias: [],
  tags: ['platform', 'ecommerce'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/salesforce/00A1E0'
    },
    shields: {
      path: 'https://img.shields.io/badge/Salesforce-00A1E0?logo=salesforce&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-plain.svg']
    }
  }
}, {
  name: 'sass',
  color: '#CC6699',
  alias: [],
  tags: ['pre-processor', 'css'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=sass'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/sass/CC6699'
    },
    shields: {
      path: 'https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg']
    }
  }
}, {
  name: 'scala',
  color: '#DC322F',
  alias: [],
  tags: ['programming', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=scala'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/scala/DC322F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Scala-DC322F?logo=scala&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-plain-wordmark.svg']
    }
  }
}, {
  name: 'sdl',
  color: '#173354',
  alias: [],
  tags: ['library', 'cross-platform', 'multimedia', 'game'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sdl/sdl-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sdl/sdl-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sdl/sdl-plain.svg']
    }
  }
}, {
  name: 'selenium',
  color: '#43B02A',
  alias: [],
  tags: ['webdrive', 'automation'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=selenium'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/selenium/43B02A'
    },
    shields: {
      path: 'https://img.shields.io/badge/Selenium-43B02A?logo=selenium&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg']
    }
  }
}, {
  name: 'sentry',
  color: '#362D59',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=sentry'
    },
    simple_icons: {
      slug: 'sentry',
      path: 'https://cdn.simpleicons.org/sentry/362D59'
    },
    shields: {
      path: 'https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'sequelize',
  color: '#52B0E7',
  alias: [],
  tags: ['database', 'language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=sequelize'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/sequelize/52B0E7'
    },
    shields: {
      path: 'https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-plain-wordmark.svg']
    }
  }
}, {
  name: 'shopware',
  color: '#189EFF',
  alias: [],
  tags: ['cloud', 'platform'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/shopware/189EFF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Shopware-189EFF?logo=shopware&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopware/shopware-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopware/shopware-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopware/shopware-original-wordmark.svg']
    }
  }
}, {
  name: 'shotgrid',
  color: '#000000',
  alias: [],
  tags: ['web-application', 'autodesk', 'project-management', 'pipeline', 'production-tool', 'production-tracking'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shotgrid/shotgrid-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shotgrid/shotgrid-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shotgrid/shotgrid-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shotgrid/shotgrid-plain.svg']
    }
  }
}, {
  name: 'sketch',
  color: '#F7B500',
  alias: ['sketchup'],
  tags: ['application'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=sketchup'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/sketch/F7B500'
    },
    shields: {
      path: 'https://img.shields.io/badge/Sketch-F7B500?logo=sketch&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-line-wordmark.svg']
    }
  }
}, {
  name: 'slack',
  color: '#4A154B',
  alias: [],
  tags: ['chat'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/slack/4A154B'
    },
    shields: {
      path: 'https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-plain-wordmark.svg']
    }
  }
}, {
  name: 'socketio',
  color: '#010101',
  alias: [],
  tags: ['library', 'networking', 'websockets'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/socketdotio/010101'
    },
    shields: {
      path: 'https://img.shields.io/badge/Socket.io-010101?logo=socketdotio&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg']
    }
  }
}, {
  name: 'solid',
  color: '#2C4F7C',
  alias: ['solidjs'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=solidjs'
    },
    simple_icons: {
      slug: 'solid',
      path: 'https://cdn.simpleicons.org/solid/2C4F7C'
    },
    shields: {
      path: 'https://img.shields.io/badge/Solid-2C4F7C?logo=solid&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'solidity',
  color: '#363636',
  alias: [],
  tags: ['programming', 'language', 'blockchain'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=solidity'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/solidity/363636'
    },
    shields: {
      path: 'https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg']
    }
  }
}, {
  name: 'sourcetree',
  color: '#0052CC',
  alias: [],
  tags: ['version-control'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/sourcetree/0052CC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Sourcetree-0052CC?logo=sourcetree&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sourcetree/sourcetree-original-wordmark.svg']
    }
  }
}, {
  name: 'spring',
  color: '#6DB33F',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=spring'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/spring/6DB33F'
    },
    shields: {
      path: 'https://img.shields.io/badge/Spring-6DB33F?logo=spring&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-plain-wordmark.svg']
    }
  }
}, {
  name: 'spss',
  color: '#cc1e4c',
  alias: [],
  tags: ['package', 'statistics'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spss/spss-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spss/spss-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spss/spss-plain.svg']
    }
  }
}, {
  name: 'sqlalchemy',
  color: '#333333',
  alias: [],
  tags: ['python', 'orm'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-plain.svg']
    }
  }
}, {
  name: 'sqlite',
  color: '#003B57',
  alias: [],
  tags: ['sql', 'database', 'db'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=sqlite'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/sqlite/003B57'
    },
    shields: {
      path: 'https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-plain-wordmark.svg']
    }
  }
}, {
  name: 'ssh',
  color: '#231F20',
  alias: [],
  tags: ['security'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg']
    }
  }
}, {
  name: 'stackoverflow',
  color: '#F58025',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=stackoverflow'
    },
    simple_icons: {
      slug: 'stackoverflow',
      path: 'https://cdn.simpleicons.org/stackoverflow/F58025'
    },
    shields: {
      path: 'https://img.shields.io/badge/Stack Overflow-F58025?logo=stackoverflow&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'storybook',
  color: '#FF4785',
  alias: [],
  tags: ['framework', 'documentation', 'ui'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/storybook/FF4785'
    },
    shields: {
      path: 'https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain-wordmark.svg']
    }
  }
}, {
  name: 'styledcomponents',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=styledcomponents'
    }
  }
}, {
  name: 'stylus',
  color: '#333333',
  alias: [],
  tags: ['css', 'pre-processor'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/stylus/333333'
    },
    shields: {
      path: 'https://img.shields.io/badge/Stylus-333333?logo=stylus&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stylus/stylus-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stylus/stylus-original.svg']
    }
  }
}, {
  name: 'subversion',
  color: '#809CC9',
  alias: [],
  tags: ['svn', 'version'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/subversion/809CC9'
    },
    shields: {
      path: 'https://img.shields.io/badge/Subversion-809CC9?logo=subversion&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original-wordmark.svg']
    }
  }
}, {
  name: 'supabase',
  color: '#3ECF8E',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=supabase'
    },
    simple_icons: {
      slug: 'supabase',
      path: 'https://cdn.simpleicons.org/supabase/3ECF8E'
    },
    shields: {
      path: 'https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'svelte',
  color: '#FF3E00',
  alias: [],
  tags: ['javascript', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=svelte'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/svelte/FF3E00'
    },
    shields: {
      path: 'https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-plain-wordmark.svg']
    }
  }
}, {
  name: 'svg',
  color: '#FFB13B',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=svg'
    },
    simple_icons: {
      slug: 'svg',
      path: 'https://cdn.simpleicons.org/svg/FFB13B'
    },
    shields: {
      path: 'https://img.shields.io/badge/SVG-FFB13B?logo=svg&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'swift',
  color: '#F05138',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=swift'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/swift/F05138'
    },
    shields: {
      path: 'https://img.shields.io/badge/Swift-F05138?logo=swift&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-plain-wordmark.svg']
    }
  }
}, {
  name: 'symfony',
  color: '#000000',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=symfony'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/symfony/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Symfony-000000?logo=symfony&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original-wordmark.svg']
    }
  }
}, {
  name: 'tailwindcss',
  color: '#06B6D4',
  alias: ['tailwind'],
  tags: ['css', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=tailwind'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/tailwindcss/06B6D4'
    },
    shields: {
      path: 'https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg']
    }
  }
}, {
  name: 'tauri',
  color: '#FFC131',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=tauri'
    },
    simple_icons: {
      slug: 'tauri',
      path: 'https://cdn.simpleicons.org/tauri/FFC131'
    },
    shields: {
      path: 'https://img.shields.io/badge/Tauri-FFC131?logo=tauri&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'tensorflow',
  color: '#FF6F00',
  alias: [],
  tags: ['library', 'machine-learning', 'deep-learning'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=tensorflow'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/tensorflow/FF6F00'
    },
    shields: {
      path: 'https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-line-wordmark.svg']
    }
  }
}, {
  name: 'terraform',
  color: '#7B42BC',
  alias: [],
  tags: ['deployment', 'architecture', 'automation'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/terraform/7B42BC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-plain-wordmark.svg']
    }
  }
}, {
  name: 'thealgorithms',
  color: '#00BCB4',
  alias: [],
  tags: ['organization', 'algorithms'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/thealgorithms/00BCB4'
    },
    shields: {
      path: 'https://img.shields.io/badge/The Algorithms-00BCB4?logo=thealgorithms&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-plain-wordmark.svg']
    }
  }
}, {
  name: 'threejs',
  color: '#000000',
  alias: [],
  tags: ['javascript', 'framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=threejs'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/threedotjs/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg']
    }
  }
}, {
  name: 'tomcat',
  color: '#F8DC75',
  alias: [],
  tags: ['server'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/apachetomcat/F8DC75'
    },
    shields: {
      path: 'https://img.shields.io/badge/Apache Tomcat-F8DC75?logo=apachetomcat&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-line-wordmark.svg']
    }
  }
}, {
  name: 'tortoisegit',
  color: '#4a8fb5',
  alias: [],
  tags: ['git'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tortoisegit/tortoisegit-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tortoisegit/tortoisegit-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tortoisegit/tortoisegit-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tortoisegit/tortoisegit-line.svg']
    }
  }
}, {
  name: 'towergit',
  color: '#d18900',
  alias: [],
  tags: ['git'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/towergit/towergit-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/towergit/towergit-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/towergit/towergit-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/towergit/towergit-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/towergit/towergit-plain-wordmark.svg']
    }
  }
}, {
  name: 'travis',
  color: '#3EAAAF',
  alias: [],
  tags: ['platform', 'integration'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/travisci/3EAAAF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Travis CI-3EAAAF?logo=travisci&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain-wordmark.svg']
    }
  }
}, {
  name: 'trello',
  color: '#0052CC',
  alias: [],
  tags: ['platform', 'organize'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/trello/0052CC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Trello-0052CC?logo=trello&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg']
    }
  }
}, {
  name: 'twitter',
  color: '#1DA1F2',
  alias: [],
  tags: ['auth'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=twitter'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/twitter/1DA1F2'
    },
    shields: {
      path: 'https://img.shields.io/badge/Twitter-1DA1F2?logo=twitter&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg']
    }
  }
}, {
  name: 'typescript',
  color: '#3178C6',
  alias: ['ts'],
  tags: ['programming', 'transpiler'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=ts'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/typescript/3178C6'
    },
    shields: {
      path: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg']
    }
  }
}, {
  name: 'typo3',
  color: '#FF8700',
  alias: [],
  tags: ['cms', 'php'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/typo3/FF8700'
    },
    shields: {
      path: 'https://img.shields.io/badge/TYPO3-FF8700?logo=typo3&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typo3/typo3-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typo3/typo3-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typo3/typo3-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typo3/typo3-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typo3/typo3-plain-wordmark.svg']
    }
  }
}, {
  name: 'ubuntu',
  color: '#E95420',
  alias: [],
  tags: ['os'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/ubuntu/E95420'
    },
    shields: {
      path: 'https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg']
    }
  }
}, {
  name: 'unity',
  color: '#FFFFFF',
  alias: [],
  tags: ['csharp', 'engine', 'game'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=unity'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/unity/FFFFFF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Unity-FFFFFF?logo=unity&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg']
    }
  }
}, {
  name: 'unix',
  color: '#4051b5',
  alias: [],
  tags: ['os'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unix/unix-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unix/unix-original.svg']
    }
  }
}, {
  name: 'unrealengine',
  color: '#0E1128',
  alias: ['unreal'],
  tags: ['c++', 'engine', 'game'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=unreal'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/unrealengine/0E1128'
    },
    shields: {
      path: 'https://img.shields.io/badge/Unreal Engine-0E1128?logo=unrealengine&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original-wordmark.svg']
    }
  }
}, {
  name: 'uwsgi',
  color: '#bad05e',
  alias: [],
  tags: ['hosting'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/uwsgi/uwsgi-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/uwsgi/uwsgi-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/uwsgi/uwsgi-plain.svg']
    }
  }
}, {
  name: 'v',
  color: '#5D87BF',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=v'
    },
    simple_icons: {
      slug: 'v',
      path: 'https://cdn.simpleicons.org/v/5D87BF'
    },
    shields: {
      path: 'https://img.shields.io/badge/V-5D87BF?logo=v&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'vagrant',
  color: '#1868F2',
  alias: [],
  tags: ['platform'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/vagrant/1868F2'
    },
    shields: {
      path: 'https://img.shields.io/badge/Vagrant-1868F2?logo=vagrant&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-plain-wordmark.svg']
    }
  }
}, {
  name: 'vala',
  color: '#7239B3',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=vala'
    },
    simple_icons: {
      slug: 'vala',
      path: 'https://cdn.simpleicons.org/vala/7239B3'
    },
    shields: {
      path: 'https://img.shields.io/badge/Vala-7239B3?logo=vala&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'vercel',
  color: '#000000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=vercel'
    },
    simple_icons: {
      slug: 'vercel',
      path: 'https://cdn.simpleicons.org/vercel/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'vim',
  color: '#019733',
  alias: [],
  tags: ['editor'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=vim'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/vim/019733'
    },
    shields: {
      path: 'https://img.shields.io/badge/Vim-019733?logo=vim&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg']
    }
  }
}, {
  name: 'visualstudio',
  color: '#5C2D91',
  alias: [],
  tags: ['editor'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=visualstudio'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/visualstudio/5C2D91'
    },
    shields: {
      path: 'https://img.shields.io/badge/Visual Studio-5C2D91?logo=visualstudio&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg']
    }
  }
}, {
  name: 'vite',
  color: '#646CFF',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=vite'
    },
    simple_icons: {
      slug: 'vite',
      path: 'https://cdn.simpleicons.org/vite/646CFF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'vscode',
  color: '#007ACC',
  alias: [],
  tags: ['editor', 'ide'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=vscode'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/visualstudiocode/007ACC'
    },
    shields: {
      path: 'https://img.shields.io/badge/Visual Studio Code-007ACC?logo=visualstudiocode&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg']
    }
  }
}, {
  name: 'vuejs',
  color: '#4FC08D',
  alias: [],
  tags: ['framework'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=vue'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/vuedotjs/4FC08D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-line-wordmark.svg']
    }
  }
}, {
  name: 'vuestorefront',
  color: '#5ecf7b',
  alias: [],
  tags: ['framework'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuestorefront/vuestorefront-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuestorefront/vuestorefront-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuestorefront/vuestorefront-plain.svg']
    }
  }
}, {
  name: 'vuetify',
  color: '#1867C0',
  alias: [],
  tags: ['css', 'framework', 'vuejs-library', 'material-design'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/vuetify/1867C0'
    },
    shields: {
      path: 'https://img.shields.io/badge/Vuetify-1867C0?logo=vuetify&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-line.svg']
    }
  }
}, {
  name: 'webassembly',
  color: '#654FF0',
  alias: ['wasm'],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=wasm'
    },
    simple_icons: {
      slug: 'webassembly',
      path: 'https://cdn.simpleicons.org/webassembly/654FF0'
    },
    shields: {
      path: 'https://img.shields.io/badge/WebAssembly-654FF0?logo=webassembly&logoColor=white&style=for-the-badge'
    }
  }
}, {
  name: 'webflow',
  color: '#4353FF',
  alias: [],
  tags: ['cms', 'ecommerce'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=webflow'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/webflow/4353FF'
    },
    shields: {
      path: 'https://img.shields.io/badge/Webflow-4353FF?logo=webflow&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg']
    }
  }
}, {
  name: 'weblate',
  color: '#2ECCAA',
  alias: [],
  tags: ['localization'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/weblate/2ECCAA'
    },
    shields: {
      path: 'https://img.shields.io/badge/Weblate-2ECCAA?logo=weblate&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/weblate/weblate-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/weblate/weblate-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/weblate/weblate-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/weblate/weblate-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/weblate/weblate-plain-wordmark.svg']
    }
  }
}, {
  name: 'webpack',
  color: '#8DD6F9',
  alias: [],
  tags: ['package', 'manager'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=webpack'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/webpack/8DD6F9'
    },
    shields: {
      path: 'https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain-wordmark.svg']
    }
  }
}, {
  name: 'webstorm',
  color: '#000000',
  alias: [],
  tags: ['editor'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/webstorm/000000'
    },
    shields: {
      path: 'https://img.shields.io/badge/WebStorm-000000?logo=webstorm&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-plain-wordmark.svg']
    }
  }
}, {
  name: 'windicss',
  color: '#48B0F1',
  alias: [],
  tags: [],
  available_providers: ['skill_icons', 'simple_icons', 'shields'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=windicss'
    },
    simple_icons: {
      slug: 'windicss',
      path: 'https://cdn.simpleicons.org/windicss/48B0F1'
    },
    shields: {
      path: 'https://img.shields.io/badge/Windi CSS-48B0F1?logo=windicss&logoColor=black&style=for-the-badge'
    }
  }
}, {
  name: 'windows8',
  color: '#0078D6',
  alias: [],
  tags: ['os'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/windows/0078D6'
    },
    shields: {
      path: 'https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original-wordmark.svg']
    }
  }
}, {
  name: 'woocommerce',
  color: '#96588A',
  alias: [],
  tags: ['ecommerce'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/woocommerce/96588A'
    },
    shields: {
      path: 'https://img.shields.io/badge/WooCommerce-96588A?logo=woocommerce&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-plain-wordmark.svg']
    }
  }
}, {
  name: 'wordpress',
  color: '#21759B',
  alias: [],
  tags: ['cms'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=wordpress'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/wordpress/21759B'
    },
    shields: {
      path: 'https://img.shields.io/badge/WordPress-21759B?logo=wordpress&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg']
    }
  }
}, {
  name: 'workers',
  color: '#000',
  alias: [],
  tags: [],
  available_providers: ['skill_icons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=workers'
    }
  }
}, {
  name: 'xamarin',
  color: '#3498DB',
  alias: [],
  tags: ['application', 'programming', 'editor', 'ide', 'ios', 'mobile', 'apple', 'android', 'windows'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/xamarin/3498DB'
    },
    shields: {
      path: 'https://img.shields.io/badge/Xamarin-3498DB?logo=xamarin&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original-wordmark.svg']
    }
  }
}, {
  name: 'xcode',
  color: '#147EFB',
  alias: [],
  tags: ['application', 'editor', 'ide', 'ios', 'iphone', 'mobile', 'apple'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/xcode/147EFB'
    },
    shields: {
      path: 'https://img.shields.io/badge/Xcode-147EFB?logo=xcode&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-plain.svg']
    }
  }
}, {
  name: 'xd',
  color: '#FF61F6',
  alias: [],
  tags: ['design', 'editor', 'ui'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=xd'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/adobexd/FF61F6'
    },
    shields: {
      path: 'https://img.shields.io/badge/Adobe XD-FF61F6?logo=adobexd&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-line.svg']
    }
  }
}, {
  name: 'yarn',
  color: '#2C8EBB',
  alias: [],
  tags: ['package', 'manager'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/yarn/2C8EBB'
    },
    shields: {
      path: 'https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg']
    }
  }
}, {
  name: 'yii',
  color: '#0073bb',
  alias: [],
  tags: ['php', 'framework'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-plain-wordmark.svg']
    }
  }
}, {
  name: 'yunohost',
  color: '#ffffff',
  alias: [],
  tags: ['os'],
  available_providers: ['devicons'],
  providers: {
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yunohost/yunohost-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yunohost/yunohost-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yunohost/yunohost-plain.svg']
    }
  }
}, {
  name: 'zend',
  color: '#0679EA',
  alias: [],
  tags: ['php', 'framework'],
  available_providers: ['simple_icons', 'shields', 'devicons'],
  providers: {
    simple_icons: {
      path: 'https://cdn.simpleicons.org/zend/0679EA'
    },
    shields: {
      path: 'https://img.shields.io/badge/Zend-0679EA?logo=zend&logoColor=white&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zend/zend-plain.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zend/zend-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zend/zend-plain-wordmark.svg']
    }
  }
}, {
  name: 'zig',
  color: '#F7A41D',
  alias: [],
  tags: ['language'],
  available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
  providers: {
    skill_icons: {
      path: 'https://skillicons.dev/icons?i=zig'
    },
    simple_icons: {
      path: 'https://cdn.simpleicons.org/zig/F7A41D'
    },
    shields: {
      path: 'https://img.shields.io/badge/Zig-F7A41D?logo=zig&logoColor=black&style=for-the-badge'
    },
    devicons: {
      path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original.svg',
      variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zig/zig-plain-wordmark.svg']
    }
  }
}];

;// CONCATENATED MODULE: ./src/resources/social_icons.ts
/**
 * Badge params
 *
 * logo: its the logo itself
 * logoColor: its the logo color itself
 * labelColor: bg of left side
 * label: text of left side
 * message: text of right side
 * color: bg of right side
 */
const social_icons = [{
  name: 'behance',
  icons: ['default'],
  badge: {
    message: 'Behance',
    color: '1769ff',
    label: '',
    logo: 'behance',
    logoColor: 'white'
  }
}, {
  name: 'codesandbox',
  icons: ['default'],
  badge: {
    message: 'Codesandbox',
    color: '040404',
    label: '',
    logo: 'codesandbox',
    logoColor: 'DBDBDB'
  }
}, {
  name: 'codepen',
  icons: ['default'],
  badge: {
    message: 'Codepen',
    color: '000000',
    label: '',
    logo: 'codepen',
    logoColor: 'white'
  }
}, {
  name: 'devto',
  icons: ['default'],
  badge: {
    message: 'dev.to',
    color: '0A0A0A',
    label: '',
    logo: 'dev.to',
    logoColor: 'white'
  }
}, {
  name: 'discord',
  icons: ['default'],
  badge: {
    message: 'Discord',
    color: '7289DA',
    label: '',
    logo: 'discord',
    logoColor: 'white'
  }
}, {
  name: 'dribbble',
  icons: ['default'],
  badge: {
    message: 'Dribbble',
    color: 'EA4C89',
    label: '',
    logo: 'dribbble',
    logoColor: 'white'
  }
}, {
  name: 'facebook',
  icons: ['default'],
  badge: {
    message: 'Facebook',
    color: '1877F2',
    label: '',
    logo: 'facebook',
    logoColor: 'white'
  }
}, {
  name: 'gmail',
  icons: ['default'],
  badge: {
    message: 'Gmail',
    color: 'D14836',
    label: '',
    logo: 'gmail',
    logoColor: 'white'
  }
}, {
  name: 'hackerrank',
  icons: ['default'],
  badge: {
    message: 'HackerRank',
    color: '2EC866',
    label: '',
    logo: 'hackerrank',
    logoColor: 'white'
  }
}, {
  name: 'instagram',
  icons: ['default'],
  badge: {
    message: 'Instagram',
    color: 'E4405F',
    label: '',
    logo: 'instagram',
    logoColor: 'white'
  }
}, {
  name: 'linkedin',
  icons: ['default'],
  badge: {
    message: 'LinkedIn',
    color: '0077B5',
    label: '',
    logo: 'linkedin',
    logoColor: 'white'
  }
}, {
  name: 'linktree',
  icons: ['default'],
  badge: {
    message: 'Linktree',
    color: '1de9b6',
    label: '',
    logo: 'linktree',
    logoColor: 'white'
  }
}, {
  name: 'medium',
  icons: ['default'],
  badge: {
    message: 'Medium',
    color: '12100E',
    label: '',
    logo: 'medium',
    logoColor: 'white'
  }
}, {
  name: 'microsoft-outlook',
  short_name: 'outlook',
  icons: ['default'],
  badge: {
    message: 'Outlook',
    color: '0078D4',
    label: '',
    logo: 'microsoft-outlook',
    logoColor: 'white'
  }
}, {
  name: 'patreon',
  icons: ['default'],
  badge: {
    message: 'Patreon',
    color: 'F96854',
    label: '',
    logo: 'patreon',
    logoColor: 'white'
  }
}, {
  name: 'paypal',
  icons: ['default'],
  badge: {
    message: 'PayPal',
    color: '00457C',
    label: '',
    logo: 'paypal',
    logoColor: 'white'
  }
}, {
  name: 'stackoverflow',
  icons: ['default'],
  badge: {
    message: 'Stackoverflow',
    color: 'FE7A16',
    label: '',
    logo: 'stackoverflow',
    logoColor: 'white'
  }
}, {
  name: 'telegram',
  icons: ['default'],
  badge: {
    message: 'Telegram',
    color: '2CA5E0',
    label: '',
    logo: 'telegram',
    logoColor: 'white'
  }
}, {
  name: 'twitch',
  icons: ['default'],
  badge: {
    message: 'Twitch',
    color: '9146FF',
    label: '',
    logo: 'twitch',
    logoColor: 'white'
  }
}, {
  name: 'twitter',
  icons: ['default'],
  badge: {
    message: 'Twitter',
    color: '1DA1F2',
    label: '',
    logo: 'twitter',
    logoColor: 'white'
  }
}, {
  name: 'unsplash',
  icons: ['default'],
  badge: {
    message: 'Unsplash',
    color: '111',
    label: '',
    logo: 'unsplash',
    logoColor: 'white'
  }
}, {
  name: 'visualstudio',
  icons: ['default'],
  badge: {
    message: 'Visual Studio Marketplace',
    color: 'e2165e',
    label: '',
    logo: 'visualstudio',
    logoColor: 'white'
  }
}, {
  name: 'whatsapp',
  icons: ['default'],
  badge: {
    message: 'Whatsapp',
    color: '25D366',
    label: '',
    logo: 'whatsapp',
    logoColor: 'white'
  }
}, {
  name: 'youtube',
  icons: ['default'],
  badge: {
    message: 'Youtube',
    color: 'FF0000',
    label: '',
    logo: 'youtube',
    logoColor: 'white'
  }
}, {
  name: 'tutanota',
  icons: ['default'],
  badge: {
    message: 'Tutanota',
    color: '840010',
    label: '',
    logo: 'tutanota',
    logoColor: 'white'
  }
}, {
  name: 'matrix',
  icons: ['default'],
  badge: {
    message: 'Matrix',
    color: '000000',
    label: '',
    logo: 'matrix',
    logoColor: 'white'
  }
}, {
  name: 'ko-fi',
  icons: ['default'],
  badge: {
    message: 'Ko-fi',
    color: 'F16061',
    label: '',
    logo: 'ko-fi',
    logoColor: 'white'
  }
}, {
  name: 'signal',
  icons: ['default'],
  badge: {
    message: 'Signal',
    color: '039BE5',
    label: '',
    logo: 'signal',
    logoColor: 'white'
  }
}, {
  name: 'slack',
  icons: ['default'],
  badge: {
    message: 'Slack',
    color: '4A154B',
    label: '',
    logo: 'slack',
    logoColor: 'white'
  }
}, {
  name: 'tryhackme',
  icons: ['default'],
  badge: {
    message: 'TryHackMe',
    color: '88cc14',
    label: '',
    logo: 'tryhackme',
    logoColor: 'white'
  }
}];

;// CONCATENATED MODULE: ./src/resources/color_names.ts
const color_names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

;// CONCATENATED MODULE: ./src/resources/themes.ts
const themes = [{
  label: 'Default',
  value: 'default'
}, {
  label: 'Dark',
  value: 'dark'
}, {
  label: 'Radical',
  value: 'radical'
}, {
  label: 'Merko',
  value: 'merko'
}, {
  label: 'Gruvbox',
  value: 'gruvbox'
}, {
  label: 'Gruvbox Light',
  value: 'gruvbox_light'
}, {
  label: 'Tokyonight',
  value: 'tokyonight'
}, {
  label: 'Onedark',
  value: 'onedark'
}, {
  label: 'Cobalt',
  value: 'cobalt'
}, {
  label: 'Synthwave',
  value: 'synthwave'
}, {
  label: 'Highcontrast',
  value: 'highcontrast'
}, {
  label: 'Dracula',
  value: 'dracula'
}, {
  label: 'Prussian',
  value: 'prussian'
}, {
  label: 'Monokai',
  value: 'monokai'
}, {
  label: 'Vue',
  value: 'vue'
}, {
  label: 'Vue Dark',
  value: 'vue-dark'
}, {
  label: 'Shades Of Purple',
  value: 'shades-of-purple'
}, {
  label: 'Nightowl',
  value: 'nightowl'
}, {
  label: 'Buefy',
  value: 'buefy'
}, {
  label: 'Blue Green',
  value: 'blue-green'
}, {
  label: 'Algolia',
  value: 'algolia'
}, {
  label: 'Great Gatsby',
  value: 'great-gatsby'
}, {
  label: 'Darcula',
  value: 'darcula'
}, {
  label: 'Bear',
  value: 'bear'
}, {
  label: 'Solarized Dark',
  value: 'solarized-dark'
}, {
  label: 'Solarized Light',
  value: 'solarized-light'
}, {
  label: 'Chartreuse Dark',
  value: 'chartreuse-dark'
}, {
  label: 'Nord',
  value: 'nord'
}, {
  label: 'Gotham',
  value: 'gotham'
}, {
  label: 'Material Palenight',
  value: 'material-palenight'
}, {
  label: 'Graywhite',
  value: 'graywhite'
}, {
  label: 'Vision Friendly Dark',
  value: 'vision-friendly-dark'
}, {
  label: 'Ayu Mirage',
  value: 'ayu-mirage'
}, {
  label: 'Midnight Purple',
  value: 'midnight-purple'
}, {
  label: 'Calm',
  value: 'calm'
}, {
  label: 'Flag India',
  value: 'flag-india'
}, {
  label: 'Omni',
  value: 'omni'
}, {
  label: 'React',
  value: 'react'
}, {
  label: 'Jolly',
  value: 'jolly'
}, {
  label: 'Maroongold',
  value: 'maroongold'
}, {
  label: 'Yeblu',
  value: 'yeblu'
}, {
  label: 'Blueberry',
  value: 'blueberry'
}, // no working to medium posts
{
  label: 'Slateorange',
  value: 'slateorange'
}, {
  label: 'Kacho Ga',
  value: 'kacho_ga'
}, {
  label: 'Outrun',
  value: 'outrun'
}, {
  label: 'Ocean Dark',
  value: 'ocean_dark'
}, {
  label: 'City Lights',
  value: 'city_lights'
}, {
  label: 'Github Dark',
  value: 'github_dark'
}, {
  label: 'Discord Old Blurple',
  value: 'discord_old_blurple'
}, {
  label: 'Aura Dark',
  value: 'aura_dark'
}, {
  label: 'Panda',
  value: 'panda'
}, {
  label: 'Noctis Minimus',
  value: 'noctis_minimus'
}, {
  label: 'Cobalt2',
  value: 'cobalt2'
}, {
  label: 'Swift',
  value: 'swift'
}, {
  label: 'Aura',
  value: 'aura'
}, {
  label: 'Apprentice',
  value: 'apprentice'
}, {
  label: 'Moltack',
  value: 'moltack'
}, {
  label: 'CodeSTACKr',
  value: 'codeSTACKr'
}, {
  label: 'Rose Pine',
  value: 'rose_pine'
}];

;// CONCATENATED MODULE: ./src/resources/templates.ts
const templates = [{
  inspired: 'https://github.com/maurodesouza',
  template: [{
    type: 'text',
    props: {
      content: {
        text: "Hey 👋 What's up?",
        as: 'h1'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: "My name is ... and I'm a ..., from ....",
        as: 'p'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: 'About me',
        as: 'h2'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: "✨ Creating bugs since ...\n📚 I'm currently learning ...\n🎯 Goals: ...\n🎲 Fun fact: ...",
        as: 'p'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: 'I code with',
        as: 'h2'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'techs',
    props: {
      content: {
        icons: {
          javascript: {
            name: 'javascript',
            color: '#F7DF1E',
            alias: ['js'],
            tags: ['programming', 'language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=js'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/javascript/F7DF1E'
              },
              shields: {
                path: 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          typescript: {
            name: 'typescript',
            color: '#3178C6',
            alias: ['ts'],
            tags: ['programming', 'transpiler'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=ts'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/typescript/3178C6'
              },
              shields: {
                path: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          react: {
            name: 'react',
            color: '#61DAFB',
            alias: [],
            tags: ['framework'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=react'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/react/61DAFB'
              },
              shields: {
                path: 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          nextjs: {
            name: 'nextjs',
            color: '#000000',
            alias: [],
            tags: ['framework'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=nextjs'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/nextdotjs/000000'
              },
              shields: {
                path: 'https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          storybook: {
            name: 'storybook',
            color: '#FF4785',
            alias: [],
            tags: ['framework', 'documentation', 'ui'],
            available_providers: ['simple_icons', 'shields', 'devicons'],
            providers: {
              simple_icons: {
                path: 'https://cdn.simpleicons.org/storybook/FF4785'
              },
              shields: {
                path: 'https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=black&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          nodejs: {
            name: 'nodejs',
            color: '#339933',
            alias: [],
            tags: ['javascript', 'language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=nodejs'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/nodedotjs/339933'
              },
              shields: {
                path: 'https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          nestjs: {
            name: 'nestjs',
            color: '#E0234E',
            alias: [],
            tags: ['framework'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=nestjs'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/nestjs/E0234E'
              },
              shields: {
                path: 'https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          jest: {
            name: 'jest',
            color: '#C21325',
            alias: [],
            tags: ['testing', 'javascript'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=jest'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/jest/C21325'
              },
              shields: {
                path: 'https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          }
        },
        config: {},
        styles: {
          height: 40
        }
      },
      styles: {
        align: 'left',
        spacing: 12
      }
    }
  }]
}, {
  inspired: 'https://github.com/rafaballerini',
  template: [{
    type: 'text',
    props: {
      content: {
        text: "Hi 👋! My name is ... and I'm a ..., from ....",
        as: 'h2'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'stats',
    props: {
      content: {
        graphs: {
          stats: {
            height: 150,
            hide_title: false,
            hide_rank: false,
            show_icons: true,
            include_all_commits: true,
            count_private: true,
            disable_animations: false,
            theme: 'dracula',
            locale: 'en',
            hide_border: false,
            show: true
          },
          streak: {
            height: 150,
            locale: 'en',
            mode: 'daily',
            theme: 'dracula',
            hide_border: false,
            border_radius: 5,
            date_format: '',
            show: false
          },
          languages: {
            height: 150,
            locale: 'en',
            hide_title: false,
            layout: 'compact',
            card_width: 320,
            langs_count: 5,
            theme: 'dracula',
            hide_border: false,
            show: true
          }
        }
      },
      styles: {
        align: 'center'
      },
      state: 'default'
    }
  }, {
    type: 'image',
    props: {
      content: {
        url: 'https://i.imgflip.com/65efzo.gif'
      },
      styles: {
        align: 'center',
        height: '150',
        float: 'right'
      }
    }
  }, {
    id: 'e2f81d66-11c9-4e5e-8c83-f3946dcc5893',
    type: 'techs',
    props: {
      content: {
        icons: {
          javascript: {
            name: 'javascript',
            color: '#F7DF1E',
            alias: ['js'],
            tags: ['programming', 'language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=js'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/javascript/F7DF1E'
              },
              shields: {
                path: 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          typescript: {
            name: 'typescript',
            color: '#3178C6',
            alias: ['ts'],
            tags: ['programming', 'transpiler'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=ts'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/typescript/3178C6'
              },
              shields: {
                path: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          react: {
            name: 'react',
            color: '#61DAFB',
            alias: [],
            tags: ['framework'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=react'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/react/61DAFB'
              },
              shields: {
                path: 'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          html5: {
            name: 'html5',
            color: '#E34F26',
            alias: ['html'],
            tags: ['programming', 'language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=html'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/html5/E34F26'
              },
              shields: {
                path: 'https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          css3: {
            name: 'css3',
            color: '#1572B6',
            alias: ['css'],
            tags: ['language', 'programming'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=css'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/css3/1572B6'
              },
              shields: {
                path: 'https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          python: {
            name: 'python',
            color: '#3776AB',
            alias: ['py'],
            tags: ['programming', 'language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=py'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/python/3776AB'
              },
              shields: {
                path: 'https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          csharp: {
            name: 'csharp',
            color: '#239120',
            alias: ['cs', 'c#'],
            tags: ['language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=cs'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/csharp/239120'
              },
              shields: {
                path: 'https://img.shields.io/badge/C Sharp-239120?logo=csharp&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-line.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          }
        },
        config: {},
        styles: {
          height: '30'
        }
      },
      styles: {
        align: 'left',
        spacing: 12
      }
    }
  }, {
    type: 'socials',
    props: {
      content: {
        socials: {
          youtube: {
            icon: 'default',
            message: 'Youtube',
            color: 'FF0000',
            label: '',
            logo: 'youtube',
            logoColor: 'white'
          },
          instagram: {
            message: 'Instagram',
            color: 'E4405F',
            label: '',
            logo: 'instagram',
            logoColor: 'white',
            icon: 'default'
          },
          twitch: {
            message: 'Twitch',
            color: '9146FF',
            label: '',
            logo: 'twitch',
            logoColor: 'white',
            icon: 'default'
          },
          discord: {
            icon: 'default',
            message: 'Discord',
            color: '7289DA',
            label: '',
            logo: 'discord',
            logoColor: 'white'
          },
          gmail: {
            message: 'Gmail',
            color: 'D14836',
            label: '',
            logo: 'gmail',
            logoColor: 'white',
            icon: 'default'
          },
          linkedin: {
            icon: 'default',
            message: 'LinkedIn',
            color: '0077B5',
            label: '',
            logo: 'linkedin',
            logoColor: 'white'
          }
        },
        styles: {
          style: 'for-the-badge',
          type: 'badge',
          height: '35'
        }
      },
      styles: {
        align: 'left',
        spacing: 12
      }
    }
  }, {
    type: 'snake',
    props: {
      styles: {
        clear: true
      },
      state: 'default'
    }
  }]
}, {
  inspired: 'https://github.com/itsZed0',
  template: [{
    type: 'image',
    props: {
      content: {
        url: 'https://camo.githubusercontent.com/62da68eb62b1e5f175f7d1f0191dd89a653d7908feb22d37d4a0ab07365d6791/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4d3967624264396e6244724f5475314d71782f67697068792e676966'
      },
      styles: {
        align: 'center',
        height: '150',
        float: 'none'
      }
    }
  }, {
    type: 'socials',
    props: {
      content: {
        socials: {
          linkedin: {
            icon: 'default',
            message: 'LinkedIn',
            color: '0077B5',
            label: '',
            logo: 'linkedin',
            logoColor: 'white'
          },
          youtube: {
            icon: 'default',
            message: 'Youtube',
            color: 'FF0000',
            label: '',
            logo: 'youtube',
            logoColor: 'white'
          },
          twitter: {
            message: 'Twitter',
            color: '1DA1F2',
            label: '',
            logo: 'twitter',
            logoColor: 'white',
            icon: 'default'
          }
        },
        styles: {
          style: 'for-the-badge',
          type: 'badge',
          height: '25'
        }
      },
      styles: {
        align: 'center',
        spacing: 12
      }
    }
  }, {
    type: 'profile-views',
    props: {
      content: {
        type: 'badge',
        props: {
          left_color: '',
          right_color: ''
        }
      },
      styles: {
        align: 'center',
        float: 'none'
      },
      state: 'default'
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: 'hey there 👋',
        as: 'h1'
      },
      styles: {
        align: 'center'
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: '👩‍💻  About Me ',
        as: 'h3'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: "I'm ... from ....\n\n- 🔭 I’m working as ...\n- 📚 I'm currently learning ...\n- ⚡ In my free time I ...",
        as: 'p'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: '🛠 Language and tools',
        as: 'h3'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    id: 'e2f81d66-11c9-4e5e-8c83-f3946dcc5893',
    type: 'techs',
    props: {
      content: {
        icons: {
          go: {
            name: 'go',
            color: '#00ADD8',
            alias: [],
            tags: ['language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=go'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/go/00ADD8'
              },
              shields: {
                path: 'https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-line.svg']
              }
            },
            currentProvider: 'devicons',
            config: {
              devicons: {
                variant: 1
              }
            }
          },
          rust: {
            name: 'rust',
            color: '#000000',
            alias: [],
            tags: ['programming', 'language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=rust'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/rust/000000'
              },
              shields: {
                path: 'https://img.shields.io/badge/Rust-000000?logo=rust&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          ruby: {
            name: 'ruby',
            color: '#CC342D',
            alias: [],
            tags: ['programming', 'language'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=ruby'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/ruby/CC342D'
              },
              shields: {
                path: 'https://img.shields.io/badge/Ruby-CC342D?logo=ruby&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {
              devicons: {
                variant: 3
              }
            }
          },
          'dot-net': {
            name: 'dot-net',
            color: '#512BD4',
            alias: ['dotnet'],
            tags: ['framework'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=dotnet'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/dotnet/512BD4'
              },
              shields: {
                path: 'https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {
              devicons: {
                variant: 3
              }
            }
          },
          firebase: {
            name: 'firebase',
            color: '#FFCA28',
            alias: [],
            tags: ['auth', 'hosting', 'storage', 'cloud'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=firebase'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/firebase/FFCA28'
              },
              shields: {
                path: 'https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {
              devicons: {
                variant: 1
              }
            }
          },
          amazonwebservices: {
            name: 'amazonwebservices',
            shortname: 'aws',
            color: '#232F3E',
            alias: ['aws'],
            tags: ['cloud', 'hosting', 'server'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=aws'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/amazonaws/232F3E'
              },
              shields: {
                path: 'https://img.shields.io/badge/Amazon AWS-232F3E?logo=amazonaws&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          circleci: {
            name: 'circleci',
            color: '#343434',
            alias: [],
            tags: ['integration', 'platform'],
            available_providers: ['simple_icons', 'shields', 'devicons'],
            providers: {
              simple_icons: {
                path: 'https://cdn.simpleicons.org/circleci/343434'
              },
              shields: {
                path: 'https://img.shields.io/badge/CircleCI-343434?logo=circleci&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          kubernetes: {
            name: 'kubernetes',
            color: '#326CE5',
            alias: [],
            tags: ['container', 'deployment'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=kubernetes'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/kubernetes/326CE5'
              },
              shields: {
                path: 'https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {}
          },
          docker: {
            name: 'docker',
            color: '#2496ED',
            alias: [],
            tags: ['platform', 'deploy'],
            available_providers: ['simple_icons', 'shields', 'skill_icons', 'devicons'],
            providers: {
              skill_icons: {
                path: 'https://skillicons.dev/icons?i=docker'
              },
              simple_icons: {
                path: 'https://cdn.simpleicons.org/docker/2496ED'
              },
              shields: {
                path: 'https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge'
              },
              devicons: {
                path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                variants: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg']
              }
            },
            currentProvider: 'devicons',
            config: {
              devicons: {
                variant: 3
              }
            }
          }
        },
        config: {},
        styles: {
          height: '40'
        }
      },
      styles: {
        align: 'left',
        spacing: 12
      }
    }
  }, {
    type: 'text',
    props: {
      content: {
        text: '🔥   My Stats :',
        as: 'h3'
      },
      styles: {
        align: 'left'
      }
    }
  }, {
    type: 'stats',
    props: {
      content: {
        graphs: {
          stats: {
            height: '250',
            hide_title: false,
            hide_rank: false,
            show_icons: true,
            include_all_commits: true,
            count_private: true,
            disable_animations: false,
            theme: 'dracula',
            locale: 'en',
            hide_border: false,
            show: false,
            order: 1
          },
          languages: {
            height: 150,
            locale: 'en',
            hide_title: false,
            layout: 'compact',
            card_width: 320,
            langs_count: 5,
            theme: 'dracula',
            hide_border: false,
            show: false,
            order: 2
          },
          streak: {
            height: '220',
            locale: 'en',
            mode: 'daily',
            theme: 'dark',
            hide_border: false,
            border_radius: 5,
            date_format: '',
            show: true,
            order: 3
          }
        }
      },
      styles: {
        align: 'center',
        direction: 'row'
      },
      state: 'default'
    }
  }]
}];

;// CONCATENATED MODULE: ./src/resources/index.ts






/***/ }),

/***/ 8954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ api)
});

// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
;// CONCATENATED MODULE: ./src/services/api.ts


const request = (method, key) => fetch(`/api/count?key=${key}`, {
  method
});

const handle = method => key => request(method, key);

const api = {
  put: handle(types.HTTPMethods.PUT),
  get: handle(types.HTTPMethods.GET)
};

;// CONCATENATED MODULE: ./src/services/index.ts


/***/ }),

/***/ 3557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{margin:0;padding:0;box-sizing:border-box;outline:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:default;-webkit-tap-highlight-color:transparent;}html{font-size:10px;}ul,li{list-style:none;}a{text-decoration:none}button{background:none;border:none;}a,button{cursor:pointer;}input,textarea{cursor:text;}", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["body,button,input,textarea{font-family:", ";font-size:", ";font-weight:", ";color:", ";}h1,h2,h3,h4,h5,h6{font-weight:", ";}body{background:", ";padding:", ";&::-webkit-scrollbar{width:1.2rem;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}}a{color:", ";&:hover{text-decoration:underline;}}"], theme.font.family, theme.font.sizes.small, theme.font.weights.normal, theme.colors.text, theme.font.weights.bold, theme.colors.bg, theme.spacings.xlarge, theme.colors.border, theme.colors.primary));


/***/ }),

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "media": () => (/* reexport safe */ _media__WEBPACK_IMPORTED_MODULE_0__.media)
/* harmony export */ });
/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8347);


/***/ }),

/***/ 8347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "media": () => (/* binding */ media)
/* harmony export */ });
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5908);
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_media_query__WEBPACK_IMPORTED_MODULE_0__);

const media = (0,styled_media_query__WEBPACK_IMPORTED_MODULE_0__.generateMedia)({
  desktop: '1440px',
  laptop: '1170px',
  tablet: '768px',
  mobile: '450px'
});



/***/ }),

/***/ 9640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyles": () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "theme": () => (/* reexport safe */ _themes__WEBPACK_IMPORTED_MODULE_1__.r)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3557);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8132);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3162);
/* harmony reexport (checked) */ if(__webpack_require__.o(_helpers__WEBPACK_IMPORTED_MODULE_2__, "media")) __webpack_require__.d(__webpack_exports__, { "media": function() { return _helpers__WEBPACK_IMPORTED_MODULE_2__.media; } });




/***/ }),

/***/ 8132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* reexport */ defaultTheme)
});

;// CONCATENATED MODULE: ./src/styles/themes/default.ts
const defaultTheme = {
  grid: {
    container: '104rem'
  },
  border: {
    width: '1px',
    radius: '6px'
  },
  font: {
    family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    weights: {
      normal: 400,
      bold: 600
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.6rem'
    }
  },
  colors: {
    primary: '#58a6ff',
    secondary: '#30a14e',
    tertiary: '#f78166',
    border: '#30363d',
    text: '#c9d1d9',
    bg: '#0d1117',
    error: '#f85149'
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.2rem',
    medium: '1.6rem',
    large: '2.0rem',
    xlarge: '2.4rem'
  }
};

;// CONCATENATED MODULE: ./src/styles/themes/index.ts


/***/ }),

/***/ 8541:
/***/ (() => {



/***/ }),

/***/ 7742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CanvasStatesEnum": () => (/* reexport */ CanvasStatesEnum),
  "ContextMenus": () => (/* reexport */ ContextMenus),
  "Events": () => (/* reexport */ Events),
  "HTTPMethods": () => (/* reexport */ HTTPMethods),
  "IconProviders": () => (/* reexport */ IconProviders),
  "Inputs": () => (/* reexport */ Inputs),
  "Modals": () => (/* reexport */ Modals),
  "PanelsEnum": () => (/* reexport */ PanelsEnum),
  "Sections": () => (/* reexport */ Sections),
  "TooltipVariants": () => (/* reexport */ TooltipVariants)
});

// UNUSED EXPORTS: StatusCode, TooltipPositions

;// CONCATENATED MODULE: ./src/types/canvas.ts
let CanvasStatesEnum;

(function (CanvasStatesEnum) {
  CanvasStatesEnum["DEFAULT"] = "default";
  CanvasStatesEnum["PREVIEW"] = "preview";
  CanvasStatesEnum["ALERT"] = "alert";
  CanvasStatesEnum["SELECTED"] = "selected";
})(CanvasStatesEnum || (CanvasStatesEnum = {}));
;// CONCATENATED MODULE: ./src/types/events.ts
let Events;

(function (Events) {
  Events["CANVAS_ADD_SECTION"] = "canvas.section.add";
  Events["CANVAS_REMOVE_SECTION"] = "canvas.section.remove";
  Events["CANVAS_EDIT_SECTION"] = "canvas.section.edit";
  Events["CANVAS_SET_CURRENT_SECTION"] = "canvas.section.current";
  Events["CANVAS_REORDER_SECTIONS"] = "canvas.section.reorder";
  Events["CANVAS_DUPLICATE_SECTION"] = "canvas.section.duplicate";
  Events["CANVAS_CLEAR_SECTIONS"] = "canvas.clear";
  Events["TEMPLATE_USE"] = "template.use";
  Events["TEMPLATE_PREVIEW"] = "template.preview";
  Events["RESULT_SHOW_CONTENT"] = "result.canvas.show";
  Events["SETTINGS_EDIT"] = "settings.edit";
  Events["CONTEXT_MENU_OPEN"] = "contextmenu.open";
  Events["CONTEXT_MENU_CLOSE"] = "contextmenu.close";
  Events["PANEL_RIGHT_OPEN"] = "panel.right.open";
  Events["PANEL_LEFT_OPEN"] = "panel.left.open";
  Events["PANEL_RIGHT_CLOSE"] = "panel.right.close";
  Events["PANEL_LEFT_CLOSE"] = "panel.left.close";
  Events["MODAL_OPEN"] = "modal.open";
  Events["MODAL_CLOSE"] = "modal.close";
})(Events || (Events = {}));
;// CONCATENATED MODULE: ./src/types/sections.ts
let Sections;

(function (Sections) {
  Sections["TEXT"] = "text";
  Sections["STATS"] = "stats";
  Sections["TECHS"] = "techs";
  Sections["PROFILE_VIEWS"] = "profile-views";
  Sections["IMAGE"] = "image";
  Sections["SOCIALS"] = "socials";
  Sections["SNAKE"] = "snake";
  Sections["ACTIVITIES"] = "activities";
  Sections["MUSIC"] = "music";
})(Sections || (Sections = {}));
;// CONCATENATED MODULE: ./src/types/panels.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var OtherPanels;

(function (OtherPanels) {
  OtherPanels["NEW_SECTION"] = "new-section";
  OtherPanels["GENERATED_FILES"] = "generated-files";
  OtherPanels["TEMPLATES"] = "templates";
})(OtherPanels || (OtherPanels = {}));

const PanelsEnum = _objectSpread(_objectSpread({}, Sections), OtherPanels);
;// CONCATENATED MODULE: ./src/types/inputs.ts
let Inputs;

(function (Inputs) {
  Inputs["TEXT"] = "input.text";
  Inputs["SWITCH"] = "input.switch";
  Inputs["SELECT"] = "input.select";
})(Inputs || (Inputs = {}));
;// CONCATENATED MODULE: ./src/types/context-menus.ts
let ContextMenus;

(function (ContextMenus) {
  ContextMenus["SECTION"] = "contextmenu.section";
})(ContextMenus || (ContextMenus = {}));
// EXTERNAL MODULE: ./src/types/settings.ts
var settings = __webpack_require__(2109);
// EXTERNAL MODULE: ./src/types/helpers/valueof.ts
var valueof = __webpack_require__(8541);
;// CONCATENATED MODULE: ./src/types/helpers/index.ts

;// CONCATENATED MODULE: ./src/types/modals.ts
let Modals;

(function (Modals) {
  Modals["IMPROVE_SKILLS"] = "improve-skills";
  Modals["SHARE"] = "share";
})(Modals || (Modals = {}));
;// CONCATENATED MODULE: ./src/types/tooltip.ts
let TooltipPositions;

(function (TooltipPositions) {
  TooltipPositions["LEFT"] = "left";
  TooltipPositions["TOP"] = "top";
  TooltipPositions["RIGHT"] = "right";
  TooltipPositions["BOTTOM"] = "bottom";
  TooltipPositions["TOP_LEFT"] = "top-left";
  TooltipPositions["TOP_RIGHT"] = "top-right";
  TooltipPositions["BOTTOM_LEFT"] = "bottom-left";
  TooltipPositions["BOTTOM_RIGHT"] = "bottom-right";
})(TooltipPositions || (TooltipPositions = {}));

let TooltipVariants;

(function (TooltipVariants) {
  TooltipVariants["INFO"] = "info";
  TooltipVariants["SUCCESS"] = "success";
  TooltipVariants["DANGER"] = "danger";
  TooltipVariants["DEFAULT"] = "default";
})(TooltipVariants || (TooltipVariants = {}));
;// CONCATENATED MODULE: ./src/types/icon.ts
let IconProviders;

(function (IconProviders) {
  IconProviders["SKILL_ICONS"] = "skill_icons";
  IconProviders["SIMPLE_ICONS"] = "simple_icons";
  IconProviders["SHIELDS"] = "shields";
  IconProviders["DEVICONS"] = "devicons";
})(IconProviders || (IconProviders = {}));
;// CONCATENATED MODULE: ./src/types/api/methods.ts
let StatusCode;

(function (StatusCode) {
  StatusCode[StatusCode["OK"] = 200] = "OK";
  StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  StatusCode[StatusCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode || (StatusCode = {}));
;// CONCATENATED MODULE: ./src/types/api/status.ts
let HTTPMethods;

(function (HTTPMethods) {
  HTTPMethods["GET"] = "GET";
  HTTPMethods["PUT"] = "PUT";
})(HTTPMethods || (HTTPMethods = {}));
// EXTERNAL MODULE: ./src/app/config/envs/index.ts
var envs = __webpack_require__(6509);
;// CONCATENATED MODULE: ./src/types/api/count.ts

const {
  options: {
    count_api: {
      keys
    }
  }
} = envs/* envs */.p;
;// CONCATENATED MODULE: ./src/types/api/index.ts



;// CONCATENATED MODULE: ./src/types/index.ts













/***/ }),

/***/ 2109:
/***/ (() => {



/***/ }),

/***/ 5240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ checkDeepObjectValue)
/* harmony export */ });
/* harmony import */ var _getDeepObjectProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9453);

const operators = {
  equal: '==='
};

const checkDeepObjectValue = ({
  obj,
  path,
  be,
  value
}) => {
  const property = (0,_getDeepObjectProperty__WEBPACK_IMPORTED_MODULE_0__/* .getDeepObjectProperty */ .y)(obj, path);
  return eval(`'${property}' ${operators[be]} '${value}'`);
};



/***/ }),

/***/ 9453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getDeepObjectProperty)
/* harmony export */ });
const getDeepObjectProperty = (obj = {}, path) => {
  const paths = path.split('.');
  const result = paths.reduce((nested, key) => {
    if (nested === undefined || typeof nested !== 'object') return undefined;
    return nested[key];
  }, obj);
  return result;
};



/***/ }),

/***/ 2908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kC": () => (/* reexport */ capitalize),
  "_X": () => (/* reexport */ checkDeepObjectValue/* checkDeepObjectValue */._),
  "vQ": () => (/* reexport */ copyToClipboard),
  "Zk": () => (/* reexport */ createFramerMotionVariants),
  "Ds": () => (/* reexport */ debounce),
  "f7": () => (/* reexport */ deepChangeObjectProperty),
  "yk": () => (/* reexport */ filterArrayByQueryMatch),
  "$h": () => (/* reexport */ getActivitiesUrl),
  "yo": () => (/* reexport */ getDeepObjectProperty/* getDeepObjectProperty */.y),
  "WL": () => (/* reexport */ getMusicUrl),
  "Ec": () => (/* reexport */ getPanelSideEvent),
  "vu": () => (/* reexport */ getProfileViewsUrl),
  "hy": () => (/* reexport */ getSocialImgUrl),
  "rs": () => (/* reexport */ getStatsUrl),
  "qn": () => (/* reexport */ getStorageItem),
  "_A": () => (/* reexport */ objectToQueryParams),
  "Nh": () => (/* reexport */ setStorageItem)
});

;// CONCATENATED MODULE: ./src/utils/debounce/index.ts
const debounce = (fn, wait = 300, time) => (...args) => // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
clearTimeout(time, time = setTimeout(() => fn(...args), wait));


// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
;// CONCATENATED MODULE: ./src/utils/storage/index.ts

const getStorageItem = key => {
  if (true) return;
  const app_key = app/* config.general.storage.prefix */.v.general.storage.prefix;
  const data = window.localStorage.getItem(`${app_key}:${key}`);
  return JSON.parse(data);
};
const setStorageItem = (key, value) => {
  if (true) return;
  const app_key = app/* config.general.storage.prefix */.v.general.storage.prefix;
  const data = JSON.stringify(value);
  window.localStorage.setItem(`${app_key}:${key}`, data);
};
;// CONCATENATED MODULE: ./src/utils/deepChangeObjectProperty/index.ts
const deepChangeObjectPropertyError = path => {
  throw new Error(`deepChangeObjectProperty Error: path "${path}" don't exist in object`);
};

const deepChangeObjectProperty = ({
  obj,
  path,
  value
}) => {
  const paths = path.split('.');
  const objClone = JSON.parse(JSON.stringify(obj));
  const isToRemoveProp = value === undefined;
  const result = paths.reduce((nested, key, index) => {
    if (nested === undefined || typeof nested !== 'object') deepChangeObjectPropertyError(path);
    const finalNested = index === paths.length - 1;

    if (finalNested) {
      return isToRemoveProp ? Reflect.deleteProperty(nested, key) : nested[key] = value, objClone;
    }

    if (nested[key] === undefined || typeof nested[key] !== 'object') nested[key] = {};
    return nested[key];
  }, objClone);
  return result;
};


// EXTERNAL MODULE: ./src/utils/getDeepObjectProperty/index.ts
var getDeepObjectProperty = __webpack_require__(9453);
;// CONCATENATED MODULE: ./src/utils/objectToQueryParams/index.ts
const objectToQueryParams = (queries, excludeFalseValue = true) => {
  const result = Object.entries(queries).reduce((query, [key, value]) => {
    if (excludeFalseValue && !value && ['string', 'number'].includes(typeof value)) return query;
    return `${query}${key}=${value}&`;
  }, '');
  return result.slice(0, -1);
};


;// CONCATENATED MODULE: ./src/utils/filterArrayByQueryMatch/index.ts
const filterArrayByQueryMatch = (query, arr = [], fields = []) => {
  const normalizedQuery = query.toLowerCase();

  const check = value => {
    if (Array.isArray(value)) return !!filterArrayByQueryMatch(query, value).length;
    return String(value).toLowerCase().includes(normalizedQuery);
  };

  return arr.filter(item => {
    if (typeof item === 'string') return check(item);
    return fields.some(field => check(item[field]));
  });
};


;// CONCATENATED MODULE: ./src/utils/createFramerMotionVariants/index.ts
const createFramerMotionVariants = obj => obj;


// EXTERNAL MODULE: ./src/utils/checkDeepObjectValue/index.ts
var checkDeepObjectValue = __webpack_require__(5240);
// EXTERNAL MODULE: ./src/app/config/general/index.ts
var general = __webpack_require__(7051);
;// CONCATENATED MODULE: ./src/utils/getSocialImgUrl.ts
const _excluded = ["icon"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  badgeBaseUrl,
  iconBaseUrl
} = general/* general.urls.sections.socials */.C.urls.sections.socials;

const getSocialImgUrl = (type, social, props) => {
  const {
    icon
  } = props,
        badgeProps = _objectWithoutProperties(props, _excluded);

  if (type === 'icon') return `${iconBaseUrl}/${social}/${icon}.svg`;
  const capitalizedSocial = social.charAt(0).toUpperCase() + social.slice(1); // Capitalize

  const {
    message = capitalizedSocial,
    logo = social,
    label = '',
    logoColor = 'white',
    labelColor = '',
    color = '000',
    style = 'for-the-badge'
  } = badgeProps;
  return `${badgeBaseUrl}?${objectToQueryParams({
    message,
    logo,
    label,
    color,
    logoColor,
    labelColor,
    style
  }, false)}`;
};


;// CONCATENATED MODULE: ./src/utils/getProfileViewsUrl/index.ts

const {
  badgeBaseUrl: getProfileViewsUrl_badgeBaseUrl,
  imageBaseUrl
} = general/* general.urls.sections.profileViews */.C.urls.sections.profileViews;
const urls = {
  badge: username => `${getProfileViewsUrl_badgeBaseUrl}?page_id=${username}.${username}&`,
  default: username => `${imageBaseUrl}/${username}/count.svg?`
};

const getProfileViewsUrl = (type, username) => urls[type](username);


;// CONCATENATED MODULE: ./src/utils/getStatsUrl/index.ts

const {
  imageBaseUrl: getStatsUrl_imageBaseUrl,
  streakBaseUrl
} = general/* general.urls.sections.stats */.C.urls.sections.stats;

const getStatsUrl_urls = value => ({
  stats: `${getStatsUrl_imageBaseUrl}?username=${value}`,
  languages: `${getStatsUrl_imageBaseUrl}/top-langs?username=${value}`,
  streak: `${streakBaseUrl}?user=${value}`
});

const getStatsUrl = (type, github) => `${getStatsUrl_urls(github)[type]}`;


// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
;// CONCATENATED MODULE: ./src/utils/getPanelSideEvent/index.ts


const getPanelSideEvent = side => {
  const panelsOpenEvents = {
    right: types.Events.PANEL_RIGHT_OPEN,
    left: types.Events.PANEL_LEFT_OPEN
  };
  const panelsCloseEvents = {
    right: types.Events.PANEL_RIGHT_CLOSE,
    left: types.Events.PANEL_LEFT_CLOSE
  };
  return {
    openEvent: panelsOpenEvents[side],
    closeEvent: panelsCloseEvents[side]
  };
};


;// CONCATENATED MODULE: ./src/utils/getActivitiesUrl/index.ts


const {
  mediumBaseUrl
} = general/* general.urls.sections.activities */.C.urls.sections.activities;
const activitiesUrl = {
  medium: mediumBaseUrl
};

const getActivitiesUrl = (origin, props = {}) => {
  const postUrl = activitiesUrl[origin];
  return `${postUrl}?${objectToQueryParams(props)}`;
};


;// CONCATENATED MODULE: ./src/utils/getMusicUrl/index.ts
const getMusicUrl_excluded = ["user"];

function getMusicUrl_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getMusicUrl_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function getMusicUrl_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  profileBaseUrl,
  recentlyPlayedBaseUrl
} = general/* general.urls.sections.music.spotify */.C.urls.sections.music.spotify;

const getMusicUrl = (type, props = {}) => {
  if (type === 'recently') {
    const {
      user
    } = props,
          rest = getMusicUrl_objectWithoutProperties(props, getMusicUrl_excluded);

    const username = user;
    const spotifyAccountUrl = username && `${profileBaseUrl}/${username}`;
    const imageUrl = `${recentlyPlayedBaseUrl}?${objectToQueryParams(rest)}`;
    return {
      spotifyAccountUrl,
      imageUrl
    };
  }

  const {
    [props.project]: obj
  } = props;
  {
    const props = obj;
    const queries = objectToQueryParams(props.props ?? {});
    const imageUrl = `${props.url}?${queries}`;
    return {
      imageUrl
    };
  }
};


;// CONCATENATED MODULE: ./src/utils/copyToClipboard/index.ts
const copyToClipboard = async string => {
  await navigator.clipboard.writeText(string);
};


;// CONCATENATED MODULE: ./src/utils/capitalize/index.ts
const capitalize = string => string.replace(/\w/, w => w.toUpperCase());


;// CONCATENATED MODULE: ./src/utils/index.ts

















/***/ })

};
;