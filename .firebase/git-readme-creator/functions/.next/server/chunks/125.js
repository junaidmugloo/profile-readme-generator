"use strict";
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MN": () => (/* reexport */ customTitleField),
  "nm": () => (/* reexport */ localeField),
  "LV": () => (/* reexport */ showField),
  "Hg": () => (/* reexport */ themeField)
});

// EXTERNAL MODULE: ./src/types/index.ts + 14 modules
var types = __webpack_require__(7742);
;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/config/views/@shared/custom-title-field.ts


const customTitleField = graph => ({
  type: types.Inputs.TEXT,
  path: `content.graphs.${graph}.custom_title`,
  label: 'Custom title',
  props: {
    column: '1 / 3'
  }
});


;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/config/views/@shared/locale-field.ts


const localeField = graph => ({
  type: types.Inputs.SELECT,
  path: `content.graphs.${graph}.locale`,
  label: 'Translate',
  props: {
    column: '1 / 3',
    options: [{
      label: 'Portuguese',
      value: 'pt-br'
    }, {
      label: 'English',
      value: 'en'
    }, {
      label: 'French',
      value: 'fr'
    }, {
      label: 'Spanish',
      value: 'es'
    }, {
      label: 'German',
      value: 'de'
    }]
  }
});


// EXTERNAL MODULE: ./src/resources/index.ts + 5 modules
var resources = __webpack_require__(9903);
;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/config/views/@shared/theme-field.ts



const themeField = graph => ({
  type: types.Inputs.SELECT,
  path: `content.graphs.${graph}.theme`,
  label: 'Theme',
  props: {
    column: '1 / 3',
    clearable: true,
    options: resources/* themes */.np
  }
});


;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/config/views/@shared/show-field.ts


const showField = graph => ({
  type: types.Inputs.SWITCH,
  path: `content.graphs.${graph}.show`,
  label: 'Show',
  props: {
    direction: 'column'
  }
});


;// CONCATENATED MODULE: ./src/components/panels/editing/stats/views/config/views/@shared/index.ts





/***/ })

};
;