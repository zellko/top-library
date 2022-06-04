/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./LEMONMILK-Regular.otf */ "./src/LEMONMILK-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\n@font-face {\n    font-family: 'LemonMilk';\n      src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n      font-style: normal;\n      font-weight: normal;\n}\n\n\n:root {\n    --text-color-dark: #112D4E;\n    --text-color-light: #F9F7F7;\n    --button-color: #3F72AF;\n    --button-hover: #112D4E;\n    --bg-color-footer: #112D4E;\n    --bg-color-menu: rgba(219, 226, 239, 0.8);\n    --bg-color-card: rgba(219, 226, 239, 0.8);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr min-content;\n    min-height: 100vh;\n    height: 100%;\n    font-family: 'LemonMilk', serif;\n}\n\nh1 {\n    font-size: 2.5rem;\n}\n\nh2 {\n    font-size: 1.5rem;\n    margin-top: 12px;\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\np {\n    font-size: 1rem;\n}\n\ninput {\n    accent-color: var(--button-color);\n}\n\n.grid-container {\n    justify-self: center;\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n    grid-template-columns: minmax(100%, 800px);\n}\n\n\n/*************\nButton\n/*************/\n\n\n/* Add Book / Add (Form) */\n\nbutton {\n    color: var(--text-color-light);\n    background-color: var(--button-color);\n    height: 36px;\n    width: 108px;\n    font-size: 1rem;\n    font-weight: 700;\n    border-radius: 8px;\n    border: 0;\n    margin: 0 8px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: var(--button-hover);\n    box-shadow: 5px 5px 2px var(--button-color);\n}\n\nform button {\n    align-self: center;\n}\n\n\n/* \"X\" Remove book / Close form */\n\n.btn-removeBook,\n.btn-close-modal {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: min-content;\n    width: min-content;\n    color: var(--text-color-dark);\n    font-size: 22px;\n    font-weight: bold;\n    margin: 0;\n    border: 0;\n    background: 0;\n    opacity: 0.5;\n}\n\n.btn-removeBook:hover,\n.btn-close-modal:hover {\n    color: red;\n    box-shadow: 0 0 0;\n    background-color: rgba(255, 255, 255, 0);\n}\n\n.btn-removeBook::before {\n    content: \"\\2715\";\n}\n\n.btn-close-modal {\n    top: 8px;\n    right: 16px;\n    font-size: 36px;\n}\n\n\n/*************\nHEADER\n/*************/\n\n.header {\n    display: flex;\n    align-items: center;\n    padding: 16px 0;\n}\n\n.header img {\n    width: 84px;\n}\n\n\n/*************\nMENU\n/*************/\n\n.menu {\n    display: flex;\n    align-items: center;\n    background-color: var(--bg-color-menu);\n    border-radius: 8px;\n    padding: 16px 16px;\n}\n\n.menu p {\n    margin-left: auto;\n    font-size: .8rem;\n}\n\n.menu select {\n    background: 0;\n    border: 1px solid black;\n    border-radius: 4px;\n    width: min-content;\n    height: 36px;\n    font-size: 1rem;\n    cursor: pointer;\n    margin: 0 8px;\n}\n\n\n/*************\nBOOK CONTAINER\n/*************/\n\n.book-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    grid-auto-rows: min-content;\n    gap: 16px;\n    padding: 16px 0;\n}\n\n.book-card {\n    position: relative;\n    height: 200px;\n    background-color: var(--bg-color-card);\n    border-radius: 8px;\n    display: grid;\n    grid-template-columns: minmax(130px, 1fr) 5fr;\n    grid-template-rows: 5fr 1fr;\n}\n\n.book-card-img {\n    padding: 0;\n    grid-row: 1 / 3;\n}\n\n.book-card-img img {\n    height: 200px;\n    width: 100%;\n    object-fit: fill;\n    border-radius: 8px 0 0 8px;\n}\n\n.book-card-text {\n    grid-row: 1;\n    grid-column: 2;\n    padding: 16px 0 0 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.book-card-checkbox {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-top: auto;\n}\n\n.book-card-add-date {\n    align-self: center;\n    padding: 0 16px;\n    opacity: 0.6;\n}\n\n.book-card-add-date p {\n    font-size: .8rem;\n}\n\n\n/*************\nFOOTER\n/*************/\n\n.footer {\n    background-color: var(--bg-color-footer);\n    color: var(--text-color-light);\n    padding: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.footer a {\n    display: flex;\n    align-items: center;\n    color: var(--text-color-light);\n}\n\n\n/*************\nMODAL - Form\n/*************/\n\n.modal {\n    display: none;\n    justify-content: center;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    /* Black w/ opacity */\n}\n\n.modal-content {\n    position: relative;\n    background-color: white;\n    padding: 20px;\n    box-shadow: 0px 0px 8px 8px var(--button-color);\n    border-radius: 8px;\n    height: min-content;\n    width: 100%;\n    max-width: 400px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-top: 20px;\n}\n\nform>span {\n    color: red;\n}\n\ninput:required:not(:placeholder-shown):valid {\n    border: 3px solid lightgreen;\n}\n\ninput:not(:placeholder-shown):valid+span {\n    display: none;\n}\n\n.form-div-required{\n    display: flex;\n    flex-direction: column;\n}\n\nform span{\n    font-size: 0.8rem;\n    color: white;\n    background-color: rgb(255, 67, 46);\n    padding: 0;\n}\n\n/*************\nJS CLASS\n/*************/\n\n.error{\n    padding: 4px;\n}\n\n.isRead {\n    background-color: lightgreen;\n    background: rgb(219, 226, 239);\n    background: linear-gradient(140deg, rgba(219, 226, 239, 1) 0%, rgba(219, 226, 239, 1) 10%, rgba(129, 255, 127, 1) 100%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\n@font-face {\n    font-family: 'LemonMilk';\n      src: url('./LEMONMILK-Regular.otf') format('truetype');\n      font-style: normal;\n      font-weight: normal;\n}\n\n\n:root {\n    --text-color-dark: #112D4E;\n    --text-color-light: #F9F7F7;\n    --button-color: #3F72AF;\n    --button-hover: #112D4E;\n    --bg-color-footer: #112D4E;\n    --bg-color-menu: rgba(219, 226, 239, 0.8);\n    --bg-color-card: rgba(219, 226, 239, 0.8);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr min-content;\n    min-height: 100vh;\n    height: 100%;\n    font-family: 'LemonMilk', serif;\n}\n\nh1 {\n    font-size: 2.5rem;\n}\n\nh2 {\n    font-size: 1.5rem;\n    margin-top: 12px;\n}\n\nh3 {\n    font-size: 1.2rem;\n}\n\np {\n    font-size: 1rem;\n}\n\ninput {\n    accent-color: var(--button-color);\n}\n\n.grid-container {\n    justify-self: center;\n    display: grid;\n    grid-template-rows: min-content min-content 1fr;\n    grid-template-columns: minmax(100%, 800px);\n}\n\n\n/*************\nButton\n/*************/\n\n\n/* Add Book / Add (Form) */\n\nbutton {\n    color: var(--text-color-light);\n    background-color: var(--button-color);\n    height: 36px;\n    width: 108px;\n    font-size: 1rem;\n    font-weight: 700;\n    border-radius: 8px;\n    border: 0;\n    margin: 0 8px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: var(--button-hover);\n    box-shadow: 5px 5px 2px var(--button-color);\n}\n\nform button {\n    align-self: center;\n}\n\n\n/* \"X\" Remove book / Close form */\n\n.btn-removeBook,\n.btn-close-modal {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    height: min-content;\n    width: min-content;\n    color: var(--text-color-dark);\n    font-size: 22px;\n    font-weight: bold;\n    margin: 0;\n    border: 0;\n    background: 0;\n    opacity: 0.5;\n}\n\n.btn-removeBook:hover,\n.btn-close-modal:hover {\n    color: red;\n    box-shadow: 0 0 0;\n    background-color: rgba(255, 255, 255, 0);\n}\n\n.btn-removeBook::before {\n    content: \"\\2715\";\n}\n\n.btn-close-modal {\n    top: 8px;\n    right: 16px;\n    font-size: 36px;\n}\n\n\n/*************\nHEADER\n/*************/\n\n.header {\n    display: flex;\n    align-items: center;\n    padding: 16px 0;\n}\n\n.header img {\n    width: 84px;\n}\n\n\n/*************\nMENU\n/*************/\n\n.menu {\n    display: flex;\n    align-items: center;\n    background-color: var(--bg-color-menu);\n    border-radius: 8px;\n    padding: 16px 16px;\n}\n\n.menu p {\n    margin-left: auto;\n    font-size: .8rem;\n}\n\n.menu select {\n    background: 0;\n    border: 1px solid black;\n    border-radius: 4px;\n    width: min-content;\n    height: 36px;\n    font-size: 1rem;\n    cursor: pointer;\n    margin: 0 8px;\n}\n\n\n/*************\nBOOK CONTAINER\n/*************/\n\n.book-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    grid-auto-rows: min-content;\n    gap: 16px;\n    padding: 16px 0;\n}\n\n.book-card {\n    position: relative;\n    height: 200px;\n    background-color: var(--bg-color-card);\n    border-radius: 8px;\n    display: grid;\n    grid-template-columns: minmax(130px, 1fr) 5fr;\n    grid-template-rows: 5fr 1fr;\n}\n\n.book-card-img {\n    padding: 0;\n    grid-row: 1 / 3;\n}\n\n.book-card-img img {\n    height: 200px;\n    width: 100%;\n    object-fit: fill;\n    border-radius: 8px 0 0 8px;\n}\n\n.book-card-text {\n    grid-row: 1;\n    grid-column: 2;\n    padding: 16px 0 0 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.book-card-checkbox {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    margin-top: auto;\n}\n\n.book-card-add-date {\n    align-self: center;\n    padding: 0 16px;\n    opacity: 0.6;\n}\n\n.book-card-add-date p {\n    font-size: .8rem;\n}\n\n\n/*************\nFOOTER\n/*************/\n\n.footer {\n    background-color: var(--bg-color-footer);\n    color: var(--text-color-light);\n    padding: 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n}\n\n.footer a {\n    display: flex;\n    align-items: center;\n    color: var(--text-color-light);\n}\n\n\n/*************\nMODAL - Form\n/*************/\n\n.modal {\n    display: none;\n    justify-content: center;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4);\n    /* Black w/ opacity */\n}\n\n.modal-content {\n    position: relative;\n    background-color: white;\n    padding: 20px;\n    box-shadow: 0px 0px 8px 8px var(--button-color);\n    border-radius: 8px;\n    height: min-content;\n    width: 100%;\n    max-width: 400px;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-top: 20px;\n}\n\nform>span {\n    color: red;\n}\n\ninput:required:not(:placeholder-shown):valid {\n    border: 3px solid lightgreen;\n}\n\ninput:not(:placeholder-shown):valid+span {\n    display: none;\n}\n\n.form-div-required{\n    display: flex;\n    flex-direction: column;\n}\n\nform span{\n    font-size: 0.8rem;\n    color: white;\n    background-color: rgb(255, 67, 46);\n    padding: 0;\n}\n\n/*************\nJS CLASS\n/*************/\n\n.error{\n    padding: 4px;\n}\n\n.isRead {\n    background-color: lightgreen;\n    background: rgb(219, 226, 239);\n    background: linear-gradient(140deg, rgba(219, 226, 239, 1) 0%, rgba(219, 226, 239, 1) 10%, rgba(129, 255, 127, 1) 100%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/formValidation.js":
/*!*******************************!*\
  !*** ./src/formValidation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formInput = document.querySelectorAll("form input");
const formMessage = document.querySelectorAll("form span");

function showError(input, messageID) {
  let message1 = "";
  let message2 = "";

  switch (input.id) {
    case "title":
      message1 = "You need to enter book title";
      message2 = "Book title need to have 5 letter minimum";
      break;
    case "author":
      message1 = "You need to enter author name";
      message2 = "Book title need to have 1 letter minimum";
      break;
    case "published":
      message1 = "You need to enter published";
      message2 = "Published date format neeed to be yyyy. E.g 1994";
      break;
    default:
      message1 = "You need to fill-up the field";
      message2 = "Invalid input";
      break;
  }

  if (input.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    formMessage[messageID].textContent = message1;
  } else if (input.validity.patternMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    formMessage[messageID].textContent = message2;
  }

  // Set the styling appropriately
  formMessage[messageID].classList.add("error");
}

formInput.forEach((input) =>
  input.addEventListener("input", (e) => {
    const input = e.target;
    const inputID = e.target.id;
    let messageID;

    if (inputID === "img-url" || inputID === "read") return;

    if (inputID === "title") {
      messageID = 0;
    }
    if (inputID === "author") {
      messageID = 1;
    }
    if (inputID === "published") {
      messageID = 2;
    }

    if (input.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      formMessage[messageID].textContent = ""; // Reset the content of the message
      formMessage[messageID].classList.remove("error"); // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError(input, messageID);
    }
  })
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showError);


/***/ }),

/***/ "./src/LEMONMILK-Regular.otf":
/*!***********************************!*\
  !*** ./src/LEMONMILK-Regular.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55fc24317b9c2b507dd8.otf";

/***/ }),

/***/ "./src/reshot-icon-simple-book-HAZNB8F2TE.svg":
/*!****************************************************!*\
  !*** ./src/reshot-icon-simple-book-HAZNB8F2TE.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec2c375f59c7a29595f2.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formValidation */ "./src/formValidation.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _reshot_icon_simple_book_HAZNB8F2TE_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reshot-icon-simple-book-HAZNB8F2TE.svg */ "./src/reshot-icon-simple-book-HAZNB8F2TE.svg");




const myLibrary = []; // Array to store each book object
let bookId = 0; // Variable to give each book an unique ID

const bookContainer = document.querySelector(".book-container");
const btnAddBook = document.querySelector(".btn-addBook");

const modal = document.getElementById("myModal"); // Modal which contain the form to add a book
const btnCloseForm = document.querySelector(".btn-close-modal"); // Button to close the "Add book" form
// const btnForm = document.querySelector(".btn-form"); // Button to submit "Add Book" form

const form = document.querySelector("form");
const formInput = document.querySelectorAll("form input");

const sortBy = document.querySelector("#sortBy"); // "sort By" selector, allow to sort book by Added date, author or title

class Book {
  // class methods
  constructor(title, author, publishDate, imgURL, isRead) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.imgURL = imgURL;
    this.read = isRead;
    this.addedDate = "yyyy-mm-dd";
    this.domId = 0;
  }

  createCard() {
    // Create Book card
    const divCard = document.createElement("div");
    divCard.classList.add("book-card");
    divCard.setAttribute("book-id", bookId);
    bookContainer.appendChild(divCard);
    // Create Img section
    const divImg = document.createElement("div");
    this.bookImg = document.createElement("img");
    divImg.classList.add("book-card-img");
    divCard.appendChild(divImg);
    divImg.appendChild(this.bookImg);
    // Create Text section
    const divText = document.createElement("div");
    this.bookTitle = document.createElement("h2");
    this.bookAuthor = document.createElement("h3");
    this.bookPublished = document.createElement("p");
    divText.classList.add("book-card-text");
    divCard.appendChild(divText);
    divText.appendChild(this.bookTitle);
    divText.appendChild(this.bookAuthor);
    divText.appendChild(this.bookPublished);
    // Create Add-date section
    const divDate = document.createElement("div");
    this.bookAddDate = document.createElement("p");
    divDate.classList.add("book-card-add-date");
    divCard.appendChild(divDate);
    divDate.appendChild(this.bookAddDate);
    // Create Read checkbox
    const labelCheckbox = document.createElement("label");
    labelCheckbox.htmlFor = "idTest";
    labelCheckbox.textContent = "Read: ";
    const divCheckbox = document.createElement("div");
    divCheckbox.classList.add("book-card-checkbox");
    this.readCheckbox = document.createElement("input");
    this.readCheckbox.type = "checkbox";
    this.readCheckbox.name = "name";
    this.readCheckbox.value = "value";
    this.readCheckbox.id = "idTest";
    this.readCheckbox.classList.add("card-checkbox");
    divText.appendChild(divCheckbox);
    divCheckbox.appendChild(labelCheckbox);
    divCheckbox.appendChild(this.readCheckbox);
    // Create remove bouton section
    this.deleteBtn = document.createElement("button");
    this.deleteBtn.classList.add("btn-removeBook");
    this.deleteBtn.setAttribute("book-id", bookId);
    divCard.appendChild(this.deleteBtn);
  }

  populateCard() {
    this.bookTitle.textContent = this.title;
    this.bookAuthor.textContent = `By: ${this.author}`;
    this.bookPublished.textContent = this.publishDate;
    this.bookImg.src = this.imgURL;
    this.bookImg.alt = "Book cover image";
    this.bookAddDate.textContent = this.addedDate;

    if (this.read) {
      this.readCheckbox.checked = true;
      this.readCheckbox.offsetParent.classList.toggle("isRead");
    }
  }

  removeCard(cardToRemove) {
    bookContainer.removeChild(cardToRemove);
  }
}

function addBookToLibrary(newBook) {
  // Function to add the book to the DOM

  // Get today date and add it to the book object properties.
  const todayDate = new Date();
  const date = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`;

  newBook.addedDate = date;
  newBook.domId = bookId;

  newBook.createCard(); // Create the book card in the DOM
  newBook.populateCard(); // Populate the book card

  ++bookId; // Each time a book is created...
  // ...we increment this variable, to give each book an unique ID.
}

/** *********************************
Book sorting function
/********************************** */
function sortBook() {
  // This function sort the book in the DOM
  // Book can by sorted my Added date, Author or Title

  let domOrderCount = 0;
  const sortByValue = document.querySelector("#sortBy");

  // Create a copy of the myLibrary array, this copy will be sorted
  const sortedLibrary = [...myLibrary];

  if (sortByValue.value === "title") {
    sortedLibrary.sort((a, b) => {
      if (a === null) return 1;
      if (b === null) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (b.title.toLowerCase() > a.title.toLowerCase()) return -1;
    });
  }

  if (sortByValue.value === "author") {
    sortedLibrary.sort((a, b) => {
      if (a === null) return 1;
      if (b === null) return -1;
      if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
      if (b.author.toLowerCase() > a.author.toLowerCase()) return -1;
    });
  }

  for (const book of sortedLibrary) {
    // If it's "null", it means it's a book that has been deleted. So we skip it.
    if (book !== null) {
      const bookCard = document.querySelector(`[book-id="${book.domId}"]`); // Get the DOM Card element...
      bookCard.setAttribute("style", `order: ${domOrderCount};`); // ...and give it a new "order" attribute
      ++domOrderCount;
    }
  }
}

/** *********************************
Buttons event listener:
- Check if user click on remove book "x" button
- Check if user check "read" checkbox
- Check if the sortBy selector change
/********************************** */

bookContainer.addEventListener("click", (e) => {
  if (e.type === "change") return;

  if (e.target.className === "btn-removeBook") {
    const idBookToRemove = e.target.getAttribute("book-id");
    myLibrary[idBookToRemove].removeCard(e.target.parentElement);
    myLibrary[idBookToRemove] = null;
  }
});

bookContainer.addEventListener("change", (e) => {
  const idBook = e.target.offsetParent.getAttribute("book-id");

  if (e.target.checked) {
    e.target.parentElement.offsetParent.classList.add("isRead");
    myLibrary[idBook].read = true;
  }

  if (!e.target.checked) {
    e.target.parentElement.offsetParent.classList.remove("isRead");
    myLibrary[idBook].read = false;
  }
});

sortBy.addEventListener("change", sortBook);

/** *********************************
MODAL
/********************************** */

// When the user clicks the button, open the modal
btnAddBook.addEventListener("click", () => {
  modal.style.display = "flex";
});

// When the user clicks on "X" close the modal
btnCloseForm.addEventListener("click", () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click", (event) => {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });

/** *********************************
FORM:
- Recovery of form datas
- Create a new book object from datas
/********************************** */

function addNewBook() {
  // const form = document.querySelector("form"); // Get the form...

  // ...get the datas from the form
  const formData = form.elements;
  const formTitle = formData[0].value;
  const formAuthor = formData[1].value;
  const formPublished = formData[2].value;
  let formImgURL = formData[3].value;
  const formIsRead = formData[4].checked;

  // If no book image is provided, we use a default book image.
  if (!formImgURL) formImgURL = _reshot_icon_simple_book_HAZNB8F2TE_svg__WEBPACK_IMPORTED_MODULE_2__;

  const newBookObject = new Book(
    formTitle,
    formAuthor,
    formPublished,
    formImgURL,
    formIsRead
  ); // Create a new book object from the form datas
  myLibrary.push(newBookObject); // Add it to the array
  addBookToLibrary(newBookObject); // Add it to the DOM
  sortBook(); // Sort the book in the DOM

  // Clear the form
  modal.style.display = "none";
  formData[0].value = "";
  formData[1].value = "";
  formData[2].value = "";
  formData[3].value = "";
  formData[4].checked = false;
}

form.addEventListener("submit", (event) => {
  // Check when "Add Book" form is submited...
  let isFormValid = true;

  formInput.forEach((input) => {
    const inputID = input.id;

    let messageID;

    if (inputID === "title") messageID = 0;
    if (inputID === "author") messageID = 1;
    if (inputID === "published") messageID = 2;

    // For each required form field, check if it's valid...
    if (!input.validity.valid) {
      // If it isn't, we display an appropriate error message
      (0,_formValidation__WEBPACK_IMPORTED_MODULE_0__["default"])(input, messageID);
      isFormValid = false;
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }
  });

  if (isFormValid) addNewBook();

  // As we are using webpack and dynamic DOM generation,...
  // ... we prevent the form from being sent by canceling the event
  event.preventDefault();
});

/** ***********************
DEMO
- Add two book to the DOM, has demo
 ************************ */
function addAllBookToDom() {
  // Function to add all "demo" book to the DOM when the page is loaded
  myLibrary.forEach((book) => {
    if (book !== null) addBookToLibrary(book);
  });
}

const demo1 = new Book(
  "Hyperion",
  "Dan Simmons",
  "1989",
  "https://images-na.ssl-images-amazon.com/images/I/91cI7fKu0vL.jpg",
  true
);
const demo2 = new Book(
  "The Fall of Hyperion",
  "Dan Simmons",
  "1990",
  "https://m.media-amazon.com/images/I/51tqDyv9QcL.jpg",
  false
);
myLibrary.push(demo1);
myLibrary.push(demo2);
addAllBookToDom();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLE1BQU0sT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsYUFBYSxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsUUFBUSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG9FQUFVOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsaUNBQWlDO0FBQ2pDLG1DQUFtQztBQUNuQyxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtbGlicmFyeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1saWJyYXJ5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLWxpYnJhcnkvLi9zcmMvZm9ybVZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9wLWxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9wLWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvcC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcC1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9MRU1PTk1JTEstUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMZW1vbk1pbGsnO1xcbiAgICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcblxcbjpyb290IHtcXG4gICAgLS10ZXh0LWNvbG9yLWRhcms6ICMxMTJENEU7XFxuICAgIC0tdGV4dC1jb2xvci1saWdodDogI0Y5RjdGNztcXG4gICAgLS1idXR0b24tY29sb3I6ICMzRjcyQUY7XFxuICAgIC0tYnV0dG9uLWhvdmVyOiAjMTEyRDRFO1xcbiAgICAtLWJnLWNvbG9yLWZvb3RlcjogIzExMkQ0RTtcXG4gICAgLS1iZy1jb2xvci1tZW51OiByZ2JhKDIxOSwgMjI2LCAyMzksIDAuOCk7XFxuICAgIC0tYmctY29sb3ItY2FyZDogcmdiYSgyMTksIDIyNiwgMjM5LCAwLjgpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ0xlbW9uTWlsaycsIHNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5wIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGFjY2VudC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDAlLCA4MDBweCk7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqXFxuQnV0dG9uXFxuLyoqKioqKioqKioqKiovXFxuXFxuXFxuLyogQWRkIEJvb2sgLyBBZGQgKEZvcm0pICovXFxuXFxuYnV0dG9uIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHdpZHRoOiAxMDhweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luOiAwIDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDJweCB2YXIoLS1idXR0b24tY29sb3IpO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuXFxuLyogXFxcIlhcXFwiIFJlbW92ZSBib29rIC8gQ2xvc2UgZm9ybSAqL1xcblxcbi5idG4tcmVtb3ZlQm9vayxcXG4uYnRuLWNsb3NlLW1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDhweDtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1kYXJrKTtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLmJ0bi1yZW1vdmVCb29rOmhvdmVyLFxcbi5idG4tY2xvc2UtbW9kYWw6aG92ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG59XFxuXFxuLmJ0bi1yZW1vdmVCb29rOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI3MTVcXFwiO1xcbn1cXG5cXG4uYnRuLWNsb3NlLW1vZGFsIHtcXG4gICAgdG9wOiA4cHg7XFxuICAgIHJpZ2h0OiAxNnB4O1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqXFxuSEVBREVSXFxuLyoqKioqKioqKioqKiovXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE2cHggMDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogODRweDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKipcXG5NRU5VXFxuLyoqKioqKioqKioqKiovXFxuXFxuLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1tZW51KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHg7XFxufVxcblxcbi5tZW51IHAge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXG59XFxuXFxuLm1lbnUgc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgOHB4O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKlxcbkJPT0sgQ09OVEFJTkVSXFxuLyoqKioqKioqKioqKiovXFxuXFxuLmJvb2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gICAgZ2FwOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAxNnB4IDA7XFxufVxcblxcbi5ib29rLWNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWNhcmQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEzMHB4LCAxZnIpIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyO1xcbn1cXG5cXG4uYm9vay1jYXJkLWltZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLmJvb2stY2FyZC1pbWcgaW1nIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGZpbGw7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xcbn1cXG5cXG4uYm9vay1jYXJkLXRleHQge1xcbiAgICBncmlkLXJvdzogMTtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgIHBhZGRpbmc6IDE2cHggMCAwIDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4uYm9vay1jYXJkLWNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5ib29rLWNhcmQtYWRkLWRhdGUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgb3BhY2l0eTogMC42O1xcbn1cXG5cXG4uYm9vay1jYXJkLWFkZC1kYXRlIHAge1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKlxcbkZPT1RFUlxcbi8qKioqKioqKioqKioqL1xcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1mb290ZXIpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItbGlnaHQpO1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKlxcbk1PREFMIC0gRm9ybVxcbi8qKioqKioqKioqKioqL1xcblxcbi5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA4cHggdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5mb3JtPnNwYW4ge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5pbnB1dDpyZXF1aXJlZDpub3QoOnBsYWNlaG9sZGVyLXNob3duKTp2YWxpZCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGxpZ2h0Z3JlZW47XFxufVxcblxcbmlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pOnZhbGlkK3NwYW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1kaXYtcmVxdWlyZWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0gc3BhbntcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNjcsIDQ2KTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqKioqKioqKioqKipcXG5KUyBDTEFTU1xcbi8qKioqKioqKioqKioqL1xcblxcbi5lcnJvcntcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4uaXNSZWFkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjI2LCAyMzkpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQwZGVnLCByZ2JhKDIxOSwgMjI2LCAyMzksIDEpIDAlLCByZ2JhKDIxOSwgMjI2LCAyMzksIDEpIDEwJSwgcmdiYSgxMjksIDI1NSwgMTI3LCAxKSAxMDAlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJ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YUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7OztBQUdBOztjQUVjOztBQUVkO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFVBQVU7QUFDZDs7QUFFQTs7Y0FFYzs7QUFFZDtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHVIQUF1SDtBQUMzSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMZW1vbk1pbGsnO1xcbiAgICAgIHNyYzogdXJsKCcuL0xFTU9OTUlMSy1SZWd1bGFyLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHQtY29sb3ItZGFyazogIzExMkQ0RTtcXG4gICAgLS10ZXh0LWNvbG9yLWxpZ2h0OiAjRjlGN0Y3O1xcbiAgICAtLWJ1dHRvbi1jb2xvcjogIzNGNzJBRjtcXG4gICAgLS1idXR0b24taG92ZXI6ICMxMTJENEU7XFxuICAgIC0tYmctY29sb3ItZm9vdGVyOiAjMTEyRDRFO1xcbiAgICAtLWJnLWNvbG9yLW1lbnU6IHJnYmEoMjE5LCAyMjYsIDIzOSwgMC44KTtcXG4gICAgLS1iZy1jb2xvci1jYXJkOiByZ2JhKDIxOSwgMjI2LCAyMzksIDAuOCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWluLWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGVtb25NaWxrJywgc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbnAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmlucHV0IHtcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMCUsIDgwMHB4KTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKipcXG5CdXR0b25cXG4vKioqKioqKioqKioqKi9cXG5cXG5cXG4vKiBBZGQgQm9vayAvIEFkZCAoRm9ybSkgKi9cXG5cXG5idXR0b24ge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgd2lkdGg6IDEwOHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBtYXJnaW46IDAgOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMnB4IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5cXG4vKiBcXFwiWFxcXCIgUmVtb3ZlIGJvb2sgLyBDbG9zZSBmb3JtICovXFxuXFxuLmJ0bi1yZW1vdmVCb29rLFxcbi5idG4tY2xvc2UtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOHB4O1xcbiAgICByaWdodDogOHB4O1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWRhcmspO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogMDtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4uYnRuLXJlbW92ZUJvb2s6aG92ZXIsXFxuLmJ0bi1jbG9zZS1tb2RhbDpob3ZlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbn1cXG5cXG4uYnRuLXJlbW92ZUJvb2s6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxNVxcXCI7XFxufVxcblxcbi5idG4tY2xvc2UtbW9kYWwge1xcbiAgICB0b3A6IDhweDtcXG4gICAgcmlnaHQ6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKipcXG5IRUFERVJcXG4vKioqKioqKioqKioqKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTZweCAwO1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiA4NHB4O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKlxcbk1FTlVcXG4vKioqKioqKioqKioqKi9cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLW1lbnUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDE2cHggMTZweDtcXG59XFxuXFxuLm1lbnUgcCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IC44cmVtO1xcbn1cXG5cXG4ubWVudSBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCA4cHg7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqXFxuQk9PSyBDT05UQUlORVJcXG4vKioqKioqKioqKioqKi9cXG5cXG4uYm9vay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDE2cHggMDtcXG59XFxuXFxuLmJvb2stY2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItY2FyZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTMwcHgsIDFmcikgNWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnI7XFxufVxcblxcbi5ib29rLWNhcmQtaW1nIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbn1cXG5cXG4uYm9vay1jYXJkLWltZyBpbWcge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxufVxcblxcbi5ib29rLWNhcmQtdGV4dCB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgcGFkZGluZzogMTZweCAwIDAgMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0cHg7XFxufVxcblxcbi5ib29rLWNhcmQtY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDZweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmJvb2stY2FyZC1hZGQtZGF0ZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5ib29rLWNhcmQtYWRkLWRhdGUgcCB7XFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxufVxcblxcblxcbi8qKioqKioqKioqKioqXFxuRk9PVEVSXFxuLyoqKioqKioqKioqKiovXFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLWZvb3Rlcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1saWdodCk7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqXFxuTU9EQUwgLSBGb3JtXFxuLyoqKioqKioqKioqKiovXFxuXFxuLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDhweCB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbmZvcm0+c3BhbiB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbmlucHV0OnJlcXVpcmVkOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pOnZhbGlkIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgbGlnaHRncmVlbjtcXG59XFxuXFxuaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bik6dmFsaWQrc3BhbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWRpdi1yZXF1aXJlZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSBzcGFue1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA2NywgNDYpO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKioqKioqKioqKioqKlxcbkpTIENMQVNTXFxuLyoqKioqKioqKioqKiovXFxuXFxuLmVycm9ye1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbi5pc1JlYWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCAyMjYsIDIzOSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHJnYmEoMjE5LCAyMjYsIDIzOSwgMSkgMCUsIHJnYmEoMjE5LCAyMjYsIDIzOSwgMSkgMTAlLCByZ2JhKDEyOSwgMjU1LCAxMjcsIDEpIDEwMCUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0gaW5wdXRcIik7XG5jb25zdCBmb3JtTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJmb3JtIHNwYW5cIik7XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZUlEKSB7XG4gIGxldCBtZXNzYWdlMSA9IFwiXCI7XG4gIGxldCBtZXNzYWdlMiA9IFwiXCI7XG5cbiAgc3dpdGNoIChpbnB1dC5pZCkge1xuICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgbWVzc2FnZTEgPSBcIllvdSBuZWVkIHRvIGVudGVyIGJvb2sgdGl0bGVcIjtcbiAgICAgIG1lc3NhZ2UyID0gXCJCb29rIHRpdGxlIG5lZWQgdG8gaGF2ZSA1IGxldHRlciBtaW5pbXVtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiYXV0aG9yXCI6XG4gICAgICBtZXNzYWdlMSA9IFwiWW91IG5lZWQgdG8gZW50ZXIgYXV0aG9yIG5hbWVcIjtcbiAgICAgIG1lc3NhZ2UyID0gXCJCb29rIHRpdGxlIG5lZWQgdG8gaGF2ZSAxIGxldHRlciBtaW5pbXVtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicHVibGlzaGVkXCI6XG4gICAgICBtZXNzYWdlMSA9IFwiWW91IG5lZWQgdG8gZW50ZXIgcHVibGlzaGVkXCI7XG4gICAgICBtZXNzYWdlMiA9IFwiUHVibGlzaGVkIGRhdGUgZm9ybWF0IG5lZWVkIHRvIGJlIHl5eXkuIEUuZyAxOTk0XCI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbWVzc2FnZTEgPSBcIllvdSBuZWVkIHRvIGZpbGwtdXAgdGhlIGZpZWxkXCI7XG4gICAgICBtZXNzYWdlMiA9IFwiSW52YWxpZCBpbnB1dFwiO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxuICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJvciBtZXNzYWdlLlxuICAgIGZvcm1NZXNzYWdlW21lc3NhZ2VJRF0udGV4dENvbnRlbnQgPSBtZXNzYWdlMTtcbiAgfSBlbHNlIGlmIChpbnB1dC52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICAvLyBJZiB0aGUgZmllbGQgZG9lc24ndCBjb250YWluIGFuIGVtYWlsIGFkZHJlc3MsXG4gICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXG4gICAgZm9ybU1lc3NhZ2VbbWVzc2FnZUlEXS50ZXh0Q29udGVudCA9IG1lc3NhZ2UyO1xuICB9XG5cbiAgLy8gU2V0IHRoZSBzdHlsaW5nIGFwcHJvcHJpYXRlbHlcbiAgZm9ybU1lc3NhZ2VbbWVzc2FnZUlEXS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG59XG5cbmZvcm1JbnB1dC5mb3JFYWNoKChpbnB1dCkgPT5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBpbnB1dElEID0gZS50YXJnZXQuaWQ7XG4gICAgbGV0IG1lc3NhZ2VJRDtcblxuICAgIGlmIChpbnB1dElEID09PSBcImltZy11cmxcIiB8fCBpbnB1dElEID09PSBcInJlYWRcIikgcmV0dXJuO1xuXG4gICAgaWYgKGlucHV0SUQgPT09IFwidGl0bGVcIikge1xuICAgICAgbWVzc2FnZUlEID0gMDtcbiAgICB9XG4gICAgaWYgKGlucHV0SUQgPT09IFwiYXV0aG9yXCIpIHtcbiAgICAgIG1lc3NhZ2VJRCA9IDE7XG4gICAgfVxuICAgIGlmIChpbnB1dElEID09PSBcInB1Ymxpc2hlZFwiKSB7XG4gICAgICBtZXNzYWdlSUQgPSAyO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgLy8gSW4gY2FzZSB0aGVyZSBpcyBhbiBlcnJvciBtZXNzYWdlIHZpc2libGUsIGlmIHRoZSBmaWVsZFxuICAgICAgLy8gaXMgdmFsaWQsIHdlIHJlbW92ZSB0aGUgZXJyb3IgbWVzc2FnZS5cbiAgICAgIGZvcm1NZXNzYWdlW21lc3NhZ2VJRF0udGV4dENvbnRlbnQgPSBcIlwiOyAvLyBSZXNldCB0aGUgY29udGVudCBvZiB0aGUgbWVzc2FnZVxuICAgICAgZm9ybU1lc3NhZ2VbbWVzc2FnZUlEXS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7IC8vIFJlc2V0IHRoZSB2aXN1YWwgc3RhdGUgb2YgdGhlIG1lc3NhZ2VcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlcmUgaXMgc3RpbGwgYW4gZXJyb3IsIHNob3cgdGhlIGNvcnJlY3QgZXJyb3JcbiAgICAgIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZUlEKTtcbiAgICB9XG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzaG93RXJyb3I7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHNob3dFcnJvciBmcm9tIFwiLi9mb3JtVmFsaWRhdGlvblwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBpbWdCb29rR2VuIGZyb20gXCIuL3Jlc2hvdC1pY29uLXNpbXBsZS1ib29rLUhBWk5COEYyVEUuc3ZnXCI7XG5cbmNvbnN0IG15TGlicmFyeSA9IFtdOyAvLyBBcnJheSB0byBzdG9yZSBlYWNoIGJvb2sgb2JqZWN0XG5sZXQgYm9va0lkID0gMDsgLy8gVmFyaWFibGUgdG8gZ2l2ZSBlYWNoIGJvb2sgYW4gdW5pcXVlIElEXG5cbmNvbnN0IGJvb2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2stY29udGFpbmVyXCIpO1xuY29uc3QgYnRuQWRkQm9vayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWFkZEJvb2tcIik7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpOyAvLyBNb2RhbCB3aGljaCBjb250YWluIHRoZSBmb3JtIHRvIGFkZCBhIGJvb2tcbmNvbnN0IGJ0bkNsb3NlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNsb3NlLW1vZGFsXCIpOyAvLyBCdXR0b24gdG8gY2xvc2UgdGhlIFwiQWRkIGJvb2tcIiBmb3JtXG4vLyBjb25zdCBidG5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tZm9ybVwiKTsgLy8gQnV0dG9uIHRvIHN1Ym1pdCBcIkFkZCBCb29rXCIgZm9ybVxuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybSBpbnB1dFwiKTtcblxuY29uc3Qgc29ydEJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzb3J0QnlcIik7IC8vIFwic29ydCBCeVwiIHNlbGVjdG9yLCBhbGxvdyB0byBzb3J0IGJvb2sgYnkgQWRkZWQgZGF0ZSwgYXV0aG9yIG9yIHRpdGxlXG5cbmNsYXNzIEJvb2sge1xuICAvLyBjbGFzcyBtZXRob2RzXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBhdXRob3IsIHB1Ymxpc2hEYXRlLCBpbWdVUkwsIGlzUmVhZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgICB0aGlzLnB1Ymxpc2hEYXRlID0gcHVibGlzaERhdGU7XG4gICAgdGhpcy5pbWdVUkwgPSBpbWdVUkw7XG4gICAgdGhpcy5yZWFkID0gaXNSZWFkO1xuICAgIHRoaXMuYWRkZWREYXRlID0gXCJ5eXl5LW1tLWRkXCI7XG4gICAgdGhpcy5kb21JZCA9IDA7XG4gIH1cblxuICBjcmVhdGVDYXJkKCkge1xuICAgIC8vIENyZWF0ZSBCb29rIGNhcmRcbiAgICBjb25zdCBkaXZDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDYXJkLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmRcIik7XG4gICAgZGl2Q2FyZC5zZXRBdHRyaWJ1dGUoXCJib29rLWlkXCIsIGJvb2tJZCk7XG4gICAgYm9va0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZDYXJkKTtcbiAgICAvLyBDcmVhdGUgSW1nIHNlY3Rpb25cbiAgICBjb25zdCBkaXZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuYm9va0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGl2SW1nLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtaW1nXCIpO1xuICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoZGl2SW1nKTtcbiAgICBkaXZJbWcuYXBwZW5kQ2hpbGQodGhpcy5ib29rSW1nKTtcbiAgICAvLyBDcmVhdGUgVGV4dCBzZWN0aW9uXG4gICAgY29uc3QgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5ib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGhpcy5ib29rQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRoaXMuYm9va1B1Ymxpc2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRpdlRleHQuY2xhc3NMaXN0LmFkZChcImJvb2stY2FyZC10ZXh0XCIpO1xuICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQoZGl2VGV4dCk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZCh0aGlzLmJvb2tUaXRsZSk7XG4gICAgZGl2VGV4dC5hcHBlbmRDaGlsZCh0aGlzLmJvb2tBdXRob3IpO1xuICAgIGRpdlRleHQuYXBwZW5kQ2hpbGQodGhpcy5ib29rUHVibGlzaGVkKTtcbiAgICAvLyBDcmVhdGUgQWRkLWRhdGUgc2VjdGlvblxuICAgIGNvbnN0IGRpdkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMuYm9va0FkZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkaXZEYXRlLmNsYXNzTGlzdC5hZGQoXCJib29rLWNhcmQtYWRkLWRhdGVcIik7XG4gICAgZGl2Q2FyZC5hcHBlbmRDaGlsZChkaXZEYXRlKTtcbiAgICBkaXZEYXRlLmFwcGVuZENoaWxkKHRoaXMuYm9va0FkZERhdGUpO1xuICAgIC8vIENyZWF0ZSBSZWFkIGNoZWNrYm94XG4gICAgY29uc3QgbGFiZWxDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbENoZWNrYm94Lmh0bWxGb3IgPSBcImlkVGVzdFwiO1xuICAgIGxhYmVsQ2hlY2tib3gudGV4dENvbnRlbnQgPSBcIlJlYWQ6IFwiO1xuICAgIGNvbnN0IGRpdkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiYm9vay1jYXJkLWNoZWNrYm94XCIpO1xuICAgIHRoaXMucmVhZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRoaXMucmVhZENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgdGhpcy5yZWFkQ2hlY2tib3gubmFtZSA9IFwibmFtZVwiO1xuICAgIHRoaXMucmVhZENoZWNrYm94LnZhbHVlID0gXCJ2YWx1ZVwiO1xuICAgIHRoaXMucmVhZENoZWNrYm94LmlkID0gXCJpZFRlc3RcIjtcbiAgICB0aGlzLnJlYWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1jaGVja2JveFwiKTtcbiAgICBkaXZUZXh0LmFwcGVuZENoaWxkKGRpdkNoZWNrYm94KTtcbiAgICBkaXZDaGVja2JveC5hcHBlbmRDaGlsZChsYWJlbENoZWNrYm94KTtcbiAgICBkaXZDaGVja2JveC5hcHBlbmRDaGlsZCh0aGlzLnJlYWRDaGVja2JveCk7XG4gICAgLy8gQ3JlYXRlIHJlbW92ZSBib3V0b24gc2VjdGlvblxuICAgIHRoaXMuZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB0aGlzLmRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYnRuLXJlbW92ZUJvb2tcIik7XG4gICAgdGhpcy5kZWxldGVCdG4uc2V0QXR0cmlidXRlKFwiYm9vay1pZFwiLCBib29rSWQpO1xuICAgIGRpdkNhcmQuYXBwZW5kQ2hpbGQodGhpcy5kZWxldGVCdG4pO1xuICB9XG5cbiAgcG9wdWxhdGVDYXJkKCkge1xuICAgIHRoaXMuYm9va1RpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB0aGlzLmJvb2tBdXRob3IudGV4dENvbnRlbnQgPSBgQnk6ICR7dGhpcy5hdXRob3J9YDtcbiAgICB0aGlzLmJvb2tQdWJsaXNoZWQudGV4dENvbnRlbnQgPSB0aGlzLnB1Ymxpc2hEYXRlO1xuICAgIHRoaXMuYm9va0ltZy5zcmMgPSB0aGlzLmltZ1VSTDtcbiAgICB0aGlzLmJvb2tJbWcuYWx0ID0gXCJCb29rIGNvdmVyIGltYWdlXCI7XG4gICAgdGhpcy5ib29rQWRkRGF0ZS50ZXh0Q29udGVudCA9IHRoaXMuYWRkZWREYXRlO1xuXG4gICAgaWYgKHRoaXMucmVhZCkge1xuICAgICAgdGhpcy5yZWFkQ2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLnJlYWRDaGVja2JveC5vZmZzZXRQYXJlbnQuY2xhc3NMaXN0LnRvZ2dsZShcImlzUmVhZFwiKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVDYXJkKGNhcmRUb1JlbW92ZSkge1xuICAgIGJvb2tDb250YWluZXIucmVtb3ZlQ2hpbGQoY2FyZFRvUmVtb3ZlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRCb29rVG9MaWJyYXJ5KG5ld0Jvb2spIHtcbiAgLy8gRnVuY3Rpb24gdG8gYWRkIHRoZSBib29rIHRvIHRoZSBET01cblxuICAvLyBHZXQgdG9kYXkgZGF0ZSBhbmQgYWRkIGl0IHRvIHRoZSBib29rIG9iamVjdCBwcm9wZXJ0aWVzLlxuICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXRlID0gYCR7dG9kYXlEYXRlLmdldEZ1bGxZZWFyKCl9LSR7XG4gICAgdG9kYXlEYXRlLmdldE1vbnRoKCkgKyAxXG4gIH0tJHt0b2RheURhdGUuZ2V0RGF0ZSgpfWA7XG5cbiAgbmV3Qm9vay5hZGRlZERhdGUgPSBkYXRlO1xuICBuZXdCb29rLmRvbUlkID0gYm9va0lkO1xuXG4gIG5ld0Jvb2suY3JlYXRlQ2FyZCgpOyAvLyBDcmVhdGUgdGhlIGJvb2sgY2FyZCBpbiB0aGUgRE9NXG4gIG5ld0Jvb2sucG9wdWxhdGVDYXJkKCk7IC8vIFBvcHVsYXRlIHRoZSBib29rIGNhcmRcblxuICArK2Jvb2tJZDsgLy8gRWFjaCB0aW1lIGEgYm9vayBpcyBjcmVhdGVkLi4uXG4gIC8vIC4uLndlIGluY3JlbWVudCB0aGlzIHZhcmlhYmxlLCB0byBnaXZlIGVhY2ggYm9vayBhbiB1bmlxdWUgSUQuXG59XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkJvb2sgc29ydGluZyBmdW5jdGlvblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbmZ1bmN0aW9uIHNvcnRCb29rKCkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIHNvcnQgdGhlIGJvb2sgaW4gdGhlIERPTVxuICAvLyBCb29rIGNhbiBieSBzb3J0ZWQgbXkgQWRkZWQgZGF0ZSwgQXV0aG9yIG9yIFRpdGxlXG5cbiAgbGV0IGRvbU9yZGVyQ291bnQgPSAwO1xuICBjb25zdCBzb3J0QnlWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29ydEJ5XCIpO1xuXG4gIC8vIENyZWF0ZSBhIGNvcHkgb2YgdGhlIG15TGlicmFyeSBhcnJheSwgdGhpcyBjb3B5IHdpbGwgYmUgc29ydGVkXG4gIGNvbnN0IHNvcnRlZExpYnJhcnkgPSBbLi4ubXlMaWJyYXJ5XTtcblxuICBpZiAoc29ydEJ5VmFsdWUudmFsdWUgPT09IFwidGl0bGVcIikge1xuICAgIHNvcnRlZExpYnJhcnkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEgPT09IG51bGwpIHJldHVybiAxO1xuICAgICAgaWYgKGIgPT09IG51bGwpIHJldHVybiAtMTtcbiAgICAgIGlmIChhLnRpdGxlLnRvTG93ZXJDYXNlKCkgPiBiLnRpdGxlLnRvTG93ZXJDYXNlKCkpIHJldHVybiAxO1xuICAgICAgaWYgKGIudGl0bGUudG9Mb3dlckNhc2UoKSA+IGEudGl0bGUudG9Mb3dlckNhc2UoKSkgcmV0dXJuIC0xO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHNvcnRCeVZhbHVlLnZhbHVlID09PSBcImF1dGhvclwiKSB7XG4gICAgc29ydGVkTGlicmFyeS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYSA9PT0gbnVsbCkgcmV0dXJuIDE7XG4gICAgICBpZiAoYiA9PT0gbnVsbCkgcmV0dXJuIC0xO1xuICAgICAgaWYgKGEuYXV0aG9yLnRvTG93ZXJDYXNlKCkgPiBiLmF1dGhvci50b0xvd2VyQ2FzZSgpKSByZXR1cm4gMTtcbiAgICAgIGlmIChiLmF1dGhvci50b0xvd2VyQ2FzZSgpID4gYS5hdXRob3IudG9Mb3dlckNhc2UoKSkgcmV0dXJuIC0xO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yIChjb25zdCBib29rIG9mIHNvcnRlZExpYnJhcnkpIHtcbiAgICAvLyBJZiBpdCdzIFwibnVsbFwiLCBpdCBtZWFucyBpdCdzIGEgYm9vayB0aGF0IGhhcyBiZWVuIGRlbGV0ZWQuIFNvIHdlIHNraXAgaXQuXG4gICAgaWYgKGJvb2sgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2Jvb2staWQ9XCIke2Jvb2suZG9tSWR9XCJdYCk7IC8vIEdldCB0aGUgRE9NIENhcmQgZWxlbWVudC4uLlxuICAgICAgYm9va0NhcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYG9yZGVyOiAke2RvbU9yZGVyQ291bnR9O2ApOyAvLyAuLi5hbmQgZ2l2ZSBpdCBhIG5ldyBcIm9yZGVyXCIgYXR0cmlidXRlXG4gICAgICArK2RvbU9yZGVyQ291bnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkJ1dHRvbnMgZXZlbnQgbGlzdGVuZXI6XG4tIENoZWNrIGlmIHVzZXIgY2xpY2sgb24gcmVtb3ZlIGJvb2sgXCJ4XCIgYnV0dG9uXG4tIENoZWNrIGlmIHVzZXIgY2hlY2sgXCJyZWFkXCIgY2hlY2tib3hcbi0gQ2hlY2sgaWYgdGhlIHNvcnRCeSBzZWxlY3RvciBjaGFuZ2Vcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbmJvb2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnR5cGUgPT09IFwiY2hhbmdlXCIpIHJldHVybjtcblxuICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJ0bi1yZW1vdmVCb29rXCIpIHtcbiAgICBjb25zdCBpZEJvb2tUb1JlbW92ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImJvb2staWRcIik7XG4gICAgbXlMaWJyYXJ5W2lkQm9va1RvUmVtb3ZlXS5yZW1vdmVDYXJkKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgIG15TGlicmFyeVtpZEJvb2tUb1JlbW92ZV0gPSBudWxsO1xuICB9XG59KTtcblxuYm9va0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gIGNvbnN0IGlkQm9vayA9IGUudGFyZ2V0Lm9mZnNldFBhcmVudC5nZXRBdHRyaWJ1dGUoXCJib29rLWlkXCIpO1xuXG4gIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5vZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmFkZChcImlzUmVhZFwiKTtcbiAgICBteUxpYnJhcnlbaWRCb29rXS5yZWFkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghZS50YXJnZXQuY2hlY2tlZCkge1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQub2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpc1JlYWRcIik7XG4gICAgbXlMaWJyYXJ5W2lkQm9va10ucmVhZCA9IGZhbHNlO1xuICB9XG59KTtcblxuc29ydEJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc29ydEJvb2spO1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5NT0RBTFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuLy8gV2hlbiB0aGUgdXNlciBjbGlja3MgdGhlIGJ1dHRvbiwgb3BlbiB0aGUgbW9kYWxcbmJ0bkFkZEJvb2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIFwiWFwiIGNsb3NlIHRoZSBtb2RhbFxuYnRuQ2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4vLyAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuLy8gICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgfVxuLy8gfSk7XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkZPUk06XG4tIFJlY292ZXJ5IG9mIGZvcm0gZGF0YXNcbi0gQ3JlYXRlIGEgbmV3IGJvb2sgb2JqZWN0IGZyb20gZGF0YXNcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbmZ1bmN0aW9uIGFkZE5ld0Jvb2soKSB7XG4gIC8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTsgLy8gR2V0IHRoZSBmb3JtLi4uXG5cbiAgLy8gLi4uZ2V0IHRoZSBkYXRhcyBmcm9tIHRoZSBmb3JtXG4gIGNvbnN0IGZvcm1EYXRhID0gZm9ybS5lbGVtZW50cztcbiAgY29uc3QgZm9ybVRpdGxlID0gZm9ybURhdGFbMF0udmFsdWU7XG4gIGNvbnN0IGZvcm1BdXRob3IgPSBmb3JtRGF0YVsxXS52YWx1ZTtcbiAgY29uc3QgZm9ybVB1Ymxpc2hlZCA9IGZvcm1EYXRhWzJdLnZhbHVlO1xuICBsZXQgZm9ybUltZ1VSTCA9IGZvcm1EYXRhWzNdLnZhbHVlO1xuICBjb25zdCBmb3JtSXNSZWFkID0gZm9ybURhdGFbNF0uY2hlY2tlZDtcblxuICAvLyBJZiBubyBib29rIGltYWdlIGlzIHByb3ZpZGVkLCB3ZSB1c2UgYSBkZWZhdWx0IGJvb2sgaW1hZ2UuXG4gIGlmICghZm9ybUltZ1VSTCkgZm9ybUltZ1VSTCA9IGltZ0Jvb2tHZW47XG5cbiAgY29uc3QgbmV3Qm9va09iamVjdCA9IG5ldyBCb29rKFxuICAgIGZvcm1UaXRsZSxcbiAgICBmb3JtQXV0aG9yLFxuICAgIGZvcm1QdWJsaXNoZWQsXG4gICAgZm9ybUltZ1VSTCxcbiAgICBmb3JtSXNSZWFkXG4gICk7IC8vIENyZWF0ZSBhIG5ldyBib29rIG9iamVjdCBmcm9tIHRoZSBmb3JtIGRhdGFzXG4gIG15TGlicmFyeS5wdXNoKG5ld0Jvb2tPYmplY3QpOyAvLyBBZGQgaXQgdG8gdGhlIGFycmF5XG4gIGFkZEJvb2tUb0xpYnJhcnkobmV3Qm9va09iamVjdCk7IC8vIEFkZCBpdCB0byB0aGUgRE9NXG4gIHNvcnRCb29rKCk7IC8vIFNvcnQgdGhlIGJvb2sgaW4gdGhlIERPTVxuXG4gIC8vIENsZWFyIHRoZSBmb3JtXG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZm9ybURhdGFbMF0udmFsdWUgPSBcIlwiO1xuICBmb3JtRGF0YVsxXS52YWx1ZSA9IFwiXCI7XG4gIGZvcm1EYXRhWzJdLnZhbHVlID0gXCJcIjtcbiAgZm9ybURhdGFbM10udmFsdWUgPSBcIlwiO1xuICBmb3JtRGF0YVs0XS5jaGVja2VkID0gZmFsc2U7XG59XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgLy8gQ2hlY2sgd2hlbiBcIkFkZCBCb29rXCIgZm9ybSBpcyBzdWJtaXRlZC4uLlxuICBsZXQgaXNGb3JtVmFsaWQgPSB0cnVlO1xuXG4gIGZvcm1JbnB1dC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGlucHV0SUQgPSBpbnB1dC5pZDtcblxuICAgIGxldCBtZXNzYWdlSUQ7XG5cbiAgICBpZiAoaW5wdXRJRCA9PT0gXCJ0aXRsZVwiKSBtZXNzYWdlSUQgPSAwO1xuICAgIGlmIChpbnB1dElEID09PSBcImF1dGhvclwiKSBtZXNzYWdlSUQgPSAxO1xuICAgIGlmIChpbnB1dElEID09PSBcInB1Ymxpc2hlZFwiKSBtZXNzYWdlSUQgPSAyO1xuXG4gICAgLy8gRm9yIGVhY2ggcmVxdWlyZWQgZm9ybSBmaWVsZCwgY2hlY2sgaWYgaXQncyB2YWxpZC4uLlxuICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIC8vIElmIGl0IGlzbid0LCB3ZSBkaXNwbGF5IGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2VcbiAgICAgIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZUlEKTtcbiAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgICAvLyBUaGVuIHdlIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzZW50IGJ5IGNhbmNlbGluZyB0aGUgZXZlbnRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcblxuICBpZiAoaXNGb3JtVmFsaWQpIGFkZE5ld0Jvb2soKTtcblxuICAvLyBBcyB3ZSBhcmUgdXNpbmcgd2VicGFjayBhbmQgZHluYW1pYyBET00gZ2VuZXJhdGlvbiwuLi5cbiAgLy8gLi4uIHdlIHByZXZlbnQgdGhlIGZvcm0gZnJvbSBiZWluZyBzZW50IGJ5IGNhbmNlbGluZyB0aGUgZXZlbnRcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4vKiogKioqKioqKioqKioqKioqKioqKioqKipcbkRFTU9cbi0gQWRkIHR3byBib29rIHRvIHRoZSBET00sIGhhcyBkZW1vXG4gKioqKioqKioqKioqKioqKioqKioqKioqICovXG5mdW5jdGlvbiBhZGRBbGxCb29rVG9Eb20oKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGFkZCBhbGwgXCJkZW1vXCIgYm9vayB0byB0aGUgRE9NIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXG4gIG15TGlicmFyeS5mb3JFYWNoKChib29rKSA9PiB7XG4gICAgaWYgKGJvb2sgIT09IG51bGwpIGFkZEJvb2tUb0xpYnJhcnkoYm9vayk7XG4gIH0pO1xufVxuXG5jb25zdCBkZW1vMSA9IG5ldyBCb29rKFxuICBcIkh5cGVyaW9uXCIsXG4gIFwiRGFuIFNpbW1vbnNcIixcbiAgXCIxOTg5XCIsXG4gIFwiaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzkxY0k3Zkt1MHZMLmpwZ1wiLFxuICB0cnVlXG4pO1xuY29uc3QgZGVtbzIgPSBuZXcgQm9vayhcbiAgXCJUaGUgRmFsbCBvZiBIeXBlcmlvblwiLFxuICBcIkRhbiBTaW1tb25zXCIsXG4gIFwiMTk5MFwiLFxuICBcImh0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9JLzUxdHFEeXY5UWNMLmpwZ1wiLFxuICBmYWxzZVxuKTtcbm15TGlicmFyeS5wdXNoKGRlbW8xKTtcbm15TGlicmFyeS5wdXNoKGRlbW8yKTtcbmFkZEFsbEJvb2tUb0RvbSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9