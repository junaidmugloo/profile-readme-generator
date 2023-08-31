"use strict";
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 4460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PanelTemplates": () => (/* binding */ PanelTemplates)
});

// EXTERNAL MODULE: ./src/app/index.ts + 21 modules
var app = __webpack_require__(2905);
// EXTERNAL MODULE: ./src/resources/index.ts + 5 modules
var resources = __webpack_require__(9903);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/panels/templates/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1oc1uh8-0"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:flex;flex-direction:column;gap:", ";height:100%;"], theme.spacings.medium));
const Header = external_styled_components_default().div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-1oc1uh8-1"
})([""]);
const Title = external_styled_components_default().h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1oc1uh8-2"
})([""]);
const Text = external_styled_components_default().p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1oc1uh8-3"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["margin-top:", ";margin-bottom:", ";"], theme.spacings.medium, theme.spacings.xsmall));
const Small = external_styled_components_default().small.withConfig({
  displayName: "styles__Small",
  componentId: "sc-1oc1uh8-4"
})(["font-style:italic;"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1oc1uh8-5"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["display:grid;grid-template-columns:repeat(2,1fr);gap:", ";overflow-y:scroll;align-items:start;align-content:start;height:100%;width:calc(100% + ", ");padding-right:", ";&::-webkit-scrollbar{width:0.8rem;overflow:hidden;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background:", ";}"], theme.spacings.medium, theme.spacings.medium, theme.spacings.xsmall, theme.colors.border));
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1oc1uh8-6"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["position:relative;width:100%;border-radius:", ";border-width:", ";color:", ";border-style:solid;padding-top:100%;transition:0.3s;& *{transition:0.3s;cursor:pointer;color:", ";user-select:none;}&:hover,&:hover *{color:", ";}"], theme.border.radius, theme.border.width, theme.colors.border, theme.colors.text, theme.colors.primary));
const Block = external_styled_components_default().div.withConfig({
  displayName: "styles__Block",
  componentId: "sc-1oc1uh8-7"
})(["", ""], ({
  theme
}) => (0,external_styled_components_.css)(["width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;text-align:center;inset:0;gap:", ";font-size:", ";"], theme.spacings.xsmall, theme.font.sizes.xlarge));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/panels/templates/index.tsx






const PanelTemplates = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Header, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "Templates"
      }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
        children: "Select a template to preview, and then confirm to be able to edit."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      children: resources/* templates.map */.zd.map(({
        template
      }, index) => /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
        onClick: () => app/* events.template.preview */.U.template.preview(template),
        children: /*#__PURE__*/jsx_runtime_.jsx(Block, {
          children: index + 1
        })
      }, index))
    }), /*#__PURE__*/jsx_runtime_.jsx(Small, {
      children: "OBS: on confirm, the template will replace all canvas content."
    })]
  });
};



/***/ })

};
;