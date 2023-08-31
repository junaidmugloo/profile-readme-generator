(() => {
var exports = {};
exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 9745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ count)
});

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
var settings = __webpack_require__(8296);
// EXTERNAL MODULE: ./src/types/helpers/valueof.ts
var valueof = __webpack_require__(8778);
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
;// CONCATENATED MODULE: ./src/app/config/envs/index.ts
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

;// CONCATENATED MODULE: ./src/types/api/count.ts

const {
  options: {
    count_api: {
      keys
    }
  }
} = envs;
;// CONCATENATED MODULE: ./src/types/api/index.ts



;// CONCATENATED MODULE: ./src/types/index.ts












;// CONCATENATED MODULE: ./src/app/events/handles/base.ts


class BaseEventHandle {
  emit(event, payload) {
    const isDev = config_config.envs.environment === 'development';
    isDev && console.info(`events[emit]: ${event}`, payload);
    const customEvent = new CustomEvent(event, {
      detail: payload
    });
    document.dispatchEvent(customEvent);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/canvas.ts
const _excluded = ["path"];

function canvas_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function canvas_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { canvas_ownKeys(Object(source), true).forEach(function (key) { canvas_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { canvas_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function canvas_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CanvasHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    canvas_defineProperty(this, "add", sectionType => {
      this.emit(Events.CANVAS_ADD_SECTION, sectionType);
    });

    canvas_defineProperty(this, "remove", sectionId => {
      this.emit(Events.CANVAS_REMOVE_SECTION, sectionId);
    });

    canvas_defineProperty(this, "clear", () => {
      this.emit(Events.CANVAS_CLEAR_SECTIONS);
    });

    canvas_defineProperty(this, "edit", _ref => {
      let {
        path
      } = _ref,
          rest = _objectWithoutProperties(_ref, _excluded);

      this.emit(Events.CANVAS_EDIT_SECTION, canvas_objectSpread(canvas_objectSpread({}, rest), {}, {
        path: `props.${path}`
      }));
    });

    canvas_defineProperty(this, "duplicate", sectionId => {
      this.emit(Events.CANVAS_DUPLICATE_SECTION, sectionId);
    });

    canvas_defineProperty(this, "reorder", order => {
      this.emit(Events.CANVAS_REORDER_SECTIONS, order);
    });

    canvas_defineProperty(this, "currentSection", sectionId => {
      this.emit(Events.CANVAS_SET_CURRENT_SECTION, sectionId);
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
    this.emit(Events.CONTEXT_MENU_OPEN, {
      context,
      event
    });
  }

  close() {
    this.emit(Events.CONTEXT_MENU_CLOSE);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/settings.ts
function settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SettingsHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    settings_defineProperty(this, "edit", args => {
      this.emit(Events.SETTINGS_EDIT, args);
    });
  }

}


;// CONCATENATED MODULE: ./src/utils/storage/index.ts

const getStorageItem = key => {
  if (true) return;
  const app_key = config.general.storage.prefix;
  const data = window.localStorage.getItem(`${app_key}:${key}`);
  return JSON.parse(data);
};
const setStorageItem = (key, value) => {
  if (true) return;
  const app_key = config.general.storage.prefix;
  const data = JSON.stringify(value);
  window.localStorage.setItem(`${app_key}:${key}`, data);
};
// EXTERNAL MODULE: ./src/utils/checkDeepObjectValue/index.ts
var checkDeepObjectValue = __webpack_require__(7972);
;// CONCATENATED MODULE: ./src/app/config/general/index.ts
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

;// CONCATENATED MODULE: ./src/utils/getSocialImgUrl.ts
const getSocialImgUrl_excluded = (/* unused pure expression or super */ null && (["icon"]));

function getSocialImgUrl_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getSocialImgUrl_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function getSocialImgUrl_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  badgeBaseUrl,
  iconBaseUrl
} = general.urls.sections.socials;

const getSocialImgUrl = (type, social, props) => {
  const {
    icon
  } = props,
        badgeProps = getSocialImgUrl_objectWithoutProperties(props, getSocialImgUrl_excluded);

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
} = general.urls.sections.profileViews;
const urls = {
  badge: username => `${getProfileViewsUrl_badgeBaseUrl}?page_id=${username}.${username}&`,
  default: username => `${imageBaseUrl}/${username}/count.svg?`
};

const getProfileViewsUrl = (type, username) => urls[type](username);


;// CONCATENATED MODULE: ./src/utils/getStatsUrl/index.ts

const {
  imageBaseUrl: getStatsUrl_imageBaseUrl,
  streakBaseUrl
} = general.urls.sections.stats;

const getStatsUrl_urls = value => ({
  stats: `${getStatsUrl_imageBaseUrl}?username=${value}`,
  languages: `${getStatsUrl_imageBaseUrl}/top-langs?username=${value}`,
  streak: `${streakBaseUrl}?user=${value}`
});

const getStatsUrl = (type, github) => `${getStatsUrl_urls(github)[type]}`;


;// CONCATENATED MODULE: ./src/utils/getPanelSideEvent/index.ts


const getPanelSideEvent = side => {
  const panelsOpenEvents = {
    right: Events.PANEL_RIGHT_OPEN,
    left: Events.PANEL_LEFT_OPEN
  };
  const panelsCloseEvents = {
    right: Events.PANEL_RIGHT_CLOSE,
    left: Events.PANEL_LEFT_CLOSE
  };
  return {
    openEvent: panelsOpenEvents[side],
    closeEvent: panelsCloseEvents[side]
  };
};


;// CONCATENATED MODULE: ./src/utils/getActivitiesUrl/index.ts


const {
  mediumBaseUrl
} = general.urls.sections.activities;
const activitiesUrl = {
  medium: mediumBaseUrl
};

const getActivitiesUrl = (origin, props = {}) => {
  const postUrl = activitiesUrl[origin];
  return `${postUrl}?${objectToQueryParams(props)}`;
};


;// CONCATENATED MODULE: ./src/utils/getMusicUrl/index.ts
const getMusicUrl_excluded = (/* unused pure expression or super */ null && (["user"]));

function getMusicUrl_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = getMusicUrl_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function getMusicUrl_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const {
  profileBaseUrl,
  recentlyPlayedBaseUrl
} = general.urls.sections.music.spotify;

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


;// CONCATENATED MODULE: ./src/utils/index.ts
















;// CONCATENATED MODULE: ./src/app/events/handles/panel.ts



class PanelHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  open(side, panel) {
    const {
      openEvent
    } = getPanelSideEvent(side);
    this.emit(openEvent, panel);
  }

  close(side) {
    const {
      closeEvent
    } = getPanelSideEvent(side);
    this.emit(closeEvent);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/result.ts



class ResultHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  show(content) {
    this.emit(Events.RESULT_SHOW_CONTENT, content);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/modal.ts



class ModalHandleEvents extends BaseEventHandle {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  open(modal) {
    this.emit(Events.MODAL_OPEN, modal);
  }

  close() {
    this.emit(Events.MODAL_CLOSE);
  }

}


;// CONCATENATED MODULE: ./src/app/events/handles/template.ts



class TemaplateHandleEvents extends BaseEventHandle {
  constructor() {
    super();
    this.use = this.use.bind(this);
  }

  use() {
    this.emit(Events.TEMPLATE_USE);
  }

  preview(template) {
    this.emit(Events.TEMPLATE_PREVIEW, template ?? []);
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
    [Sections.MUSIC]: musicSectionConfig,
    [Sections.ACTIVITIES]: activitiesSectionConfig,
    [Sections.SNAKE]: snakeSectionConfig,
    [Sections.STATS]: statsSectionConfig,
    [Sections.TECHS]: techsSectionConfig,
    [Sections.IMAGE]: imageSectionConfig,
    [Sections.TEXT]: textSectionConfig,
    [Sections.SOCIALS]: socialsSectionConfig,
    [Sections.PROFILE_VIEWS]: profileViewsSectionConfig
  }
};

;// CONCATENATED MODULE: ./src/app/config/index.ts



const config_config = {
  envs: envs,
  sections: sections,
  general: general
};

;// CONCATENATED MODULE: ./src/app/index.ts


;// CONCATENATED MODULE: ./src/pages/api/count.ts


const {
  environment,
  urls: {
    count_api: baseUrl
  },
  options: {
    count_api: {
      namespace,
      keys: count_keys
    }
  }
} = config_config.envs;
const errorResponse = {
  status: StatusCode.INTERNAL_SERVER_ERROR,
  body: {
    error: 'An internal server error has occurred'
  }
};

const putHandle = async key => {
  const response = await fetch(`${baseUrl}/hit/${namespace}/${key}`);
  if (response.ok) return {
    status: StatusCode.OK,
    body: {}
  };
  return errorResponse;
};

const getHandle = async key => {
  const response = await fetch(`${baseUrl}/get/${namespace}/${key}`);

  if (response.ok) {
    const body = await response.json();
    return {
      status: StatusCode.OK,
      body
    };
  }

  return errorResponse;
};

const handles = {
  PUT: putHandle,
  GET: getHandle
};

const handler = async (req, res) => {
  if (environment !== 'production') return res.status(StatusCode.OK).json({});
  const allowedMethods = [HTTPMethods.GET, HTTPMethods.PUT];
  const key = count_keys[req.query.key];
  const method = req.method;
  if (!allowedMethods.includes(method)) return res.status(StatusCode.METHOD_NOT_ALLOWED).json({
    error: 'method not allowed'
  });
  if (!key) return res.status(StatusCode.BAD_REQUEST).json({
    error: 'no valid key found'
  });
  const handle = handles[method];
  const {
    status,
    body
  } = await handle(key);
  res.status(status).json(body);
};

/* harmony default export */ const count = (handler);

/***/ }),

/***/ 8778:
/***/ (() => {



/***/ }),

/***/ 8296:
/***/ (() => {



/***/ }),

/***/ 7972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export checkDeepObjectValue */

const operators = {
  equal: '==='
};

const checkDeepObjectValue = ({
  obj,
  path,
  be,
  value
}) => {
  const property = getDeepObjectProperty(obj, path);
  return eval(`'${property}' ${operators[be]} '${value}'`);
};



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9745));
module.exports = __webpack_exports__;

})();