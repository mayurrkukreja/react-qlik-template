"use strict";
(self["webpackChunkmashup"] = self["webpackChunkmashup"] || []).push([["main"],{

/***/ "./index.js":
/*!******************************!*\
  !*** ./index.js + 4 modules ***!
  \******************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("./node_modules/react-dom/index.js");
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app.css
var cjs_js_app = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app.css");
;// ./app.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_app["default"], options);




       /* harmony default export */ var app = (cjs_js_app["default"] && cjs_js_app["default"].locals ? cjs_js_app["default"].locals : undefined);

;// ./qlik.js
var prefix = window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
var qlik_config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:"
};
window.require.config({
  baseUrl: (qlik_config.isSecure ? "https://" : "http://") + qlik_config.host + (qlik_config.port ? ":" + qlik_config.port : "") + qlik_config.prefix + "resources"
});
var qlik = new Promise(function (resolve, reject) {
  try {
    window.require(["js/qlik"], function (qlik) {
      resolve(qlik);
    });
  } catch (e) {
    reject(e);
  }
});
/* harmony default export */ var qlik_0 = (qlik);
;// ./App.js



var App = function App() {
  (0,react.useEffect)(function () {
    qlik_0.then(function (qlik) {
      // You can now use the qlik APIs
      qlik.openApp('4e022e73-e134-4fe9-bf56-9a82dd2e2d32', config.OUTPUT_PATH_development).then(function (app) {
        console.log("App opened successfully:", app);
        // You can now interact with the app
      }).catch(function (err) {
        return console.error("Error opening app:", err);
      });
    }).catch(function (err) {
      return console.log(err);
    });
    qlik_0.then(function (qlik) {
      // You can now use the qlik APIs
      qlik.openApp('5c424fe5-463c-41bd-8fc0-462683a346c0', config.OUTPUT_PATH_development).then(function (app) {
        console.log("App opened successfully:", app);
        // You can now interact with the app
      }).catch(function (err) {
        return console.error("Error opening app:", err);
      });
    }).catch(function (err) {
      return console.log(err);
    });
  });
  return /*#__PURE__*/react.createElement("main", {
    className: "mashup"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mashup__content"
  }, "Hello Qlik!!!!!!"));
};
/* harmony default export */ var App_0 = (App);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");
;// ./src/styles/main.scss

      
      
      
      
      
      
      
      
      

var main_options = {};

main_options.styleTagTransform = (styleTagTransform_default());
main_options.setAttributes = (setAttributesWithoutAttributes_default());
main_options.insert = insertBySelector_default().bind(null, "head");
main_options.domAPI = (styleDomAPI_default());
main_options.insertStyleElement = (insertStyleElement_default());

var main_update = injectStylesIntoStyleTag_default()(main["default"], main_options);




       /* harmony default export */ var styles_main = (main["default"] && main["default"].locals ? main["default"].locals : undefined);

;// ./index.js




react_dom.render(/*#__PURE__*/react.createElement(App_0, null), document.getElementById("app"));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./app.css ***!
  \****************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mashup {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f7fa;\n  font-family: \"Segoe UI\", Arial, sans-serif;\n}\n\n.mashup__content {\n  padding: 2rem 3rem;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);\n  font-size: 1.5rem;\n  color: #222;\n}", "",{"version":3,"sources":["webpack://./app.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,0CAAA;AACF;;AAEA;EACE,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,0CAAA;EACA,iBAAA;EACA,WAAA;AACF","sourcesContent":[".mashup {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f5f7fa;\n  font-family: 'Segoe UI', Arial, sans-serif;\n}\n\n.mashup__content {\n  padding: 2rem 3rem;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 16px rgba(0,0,0,0.08);\n  font-size: 1.5rem;\n  color: #222;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n  font-family: Helvetica, sans-serif;\n  padding: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAAA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;ACCF;;ADEA;EACE,sBAAA;EACA,gBAAA;EACA,kCAAA;EACA,aAAA;ACCF","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n  font-family: Helvetica, sans-serif;\n  padding: 2rem;\n}\n","*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n  font-family: Helvetica, sans-serif;\n  padding: 2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors"], function() { return __webpack_exec__("./index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iM2I3YzQyODg1NzMxNTZhMDViNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUE4RjtBQUM5RixNQUFvRjtBQUNwRixNQUEyRjtBQUMzRixNQUE4RztBQUM5RyxNQUF1RztBQUN2RyxNQUF1RztBQUN2RyxNQUFpTDtBQUNqTDtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qiw2QkFBbUI7QUFDL0Msd0JBQXdCLDBDQUFhO0FBQ3JDLGlCQUFpQiwrQkFBYTtBQUM5QixpQkFBaUIsdUJBQU07QUFDdkIsNkJBQTZCLDhCQUFrQjs7QUFFL0MsYUFBYSxrQ0FBRyxDQUFDLHFCQUFPOzs7O0FBSTJIO0FBQ25KLE9BQU8sd0NBQWUscUJBQU8sSUFBSSxxQkFBTyxVQUFVLHFCQUFPLG1CQUFtQixFQUFDOzs7QUN4QjdFLElBQU1BLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUM1QyxDQUFDLEVBQ0RILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNFLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUN0RSxDQUFDO0FBRU0sSUFBTUMsV0FBTSxHQUFHO0VBQ3BCQyxJQUFJLEVBQUVQLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDTyxRQUFRO0VBQzlCVCxNQUFNLEVBQUVBLE1BQU07RUFDZFUsSUFBSSxFQUFFVCxNQUFNLENBQUNDLFFBQVEsQ0FBQ1EsSUFBSTtFQUMxQkMsUUFBUSxFQUFFVixNQUFNLENBQUNDLFFBQVEsQ0FBQ1UsUUFBUSxLQUFLO0FBQ3pDLENBQUM7QUFFRFgsTUFBTSxDQUFDWSxPQUFPLENBQUNOLE1BQU0sQ0FBQztFQUNwQk8sT0FBTyxFQUNMLENBQUNQLFdBQU0sQ0FBQ0ksUUFBUSxHQUFHLFVBQVUsR0FBRyxTQUFTLElBQ3pDSixXQUFNLENBQUNDLElBQUksSUFDVkQsV0FBTSxDQUFDRyxJQUFJLEdBQUcsR0FBRyxHQUFHSCxXQUFNLENBQUNHLElBQUksR0FBRyxFQUFFLENBQUMsR0FDdENILFdBQU0sQ0FBQ1AsTUFBTSxHQUNiO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTWUsSUFBSSxHQUFHLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztFQUM1QyxJQUFJO0lBQ0ZqQixNQUFNLENBQUNZLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQUFFLElBQUksRUFBSTtNQUNsQ0UsT0FBTyxDQUFDRixJQUFJLENBQUM7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsT0FBT0ksQ0FBQyxFQUFFO0lBQ1ZELE1BQU0sQ0FBQ0MsQ0FBQyxDQUFDO0VBQ1g7QUFDRixDQUFDLENBQUM7QUFFRiwyQ0FBZUosSUFBSTs7QUMvQnNCO0FBQ3RCO0FBQ2E7QUFFaEMsSUFBTVEsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNoQkYsbUJBQVMsQ0FBQyxZQUFNO0lBQ2RDLE1BQVUsQ0FDUEUsSUFBSSxDQUFDLFVBQUFULElBQUksRUFBSTtNQUNaO01BQ0FBLElBQUksQ0FBQ1UsT0FBTyxDQUFDLHNDQUFzQyxFQUFFbEIsTUFBTSxDQUFDbUIsdUJBQXVCLENBQUMsQ0FDakZGLElBQUksQ0FBQyxVQUFBRyxHQUFHLEVBQUk7UUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMEJBQTBCLEVBQUVGLEdBQUcsQ0FBQztRQUM1QztNQUNGLENBQUMsQ0FBQyxDQUNERyxLQUFLLENBQUMsVUFBQUMsR0FBRztRQUFBLE9BQUlILE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLG9CQUFvQixFQUFFRCxHQUFHLENBQUM7TUFBQSxFQUFDO0lBQzNELENBQUMsQ0FBQyxDQUNERCxLQUFLLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHLENBQUM7SUFBQSxFQUFDO0lBQy9CVCxNQUFVLENBQ1RFLElBQUksQ0FBQyxVQUFBVCxJQUFJLEVBQUk7TUFDWjtNQUNBQSxJQUFJLENBQUNVLE9BQU8sQ0FBQyxzQ0FBc0MsRUFBRWxCLE1BQU0sQ0FBQ21CLHVCQUF1QixDQUFDLENBQ2pGRixJQUFJLENBQUMsVUFBQUcsR0FBRyxFQUFJO1FBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixFQUFFRixHQUFHLENBQUM7UUFDNUM7TUFDRixDQUFDLENBQUMsQ0FDREcsS0FBSyxDQUFDLFVBQUFDLEdBQUc7UUFBQSxPQUFJSCxPQUFPLENBQUNJLEtBQUssQ0FBQyxvQkFBb0IsRUFBRUQsR0FBRyxDQUFDO01BQUEsRUFBQztJQUMzRCxDQUFDLENBQUMsQ0FDREQsS0FBSyxDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDO0lBQUEsRUFBQztFQUNuQyxDQUFDLENBQUM7RUFFRixvQkFDRVgsbUJBQUE7SUFBTWMsU0FBUyxFQUFDO0VBQVEsZ0JBQ3RCZCxtQkFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBaUIsR0FBQyxrQkFBcUIsQ0FDbEQsQ0FBQztBQUVYLENBQUM7QUFFRCwwQ0FBZVgsR0FBRzs7Ozs7QUNwQ2xCLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQStMO0FBQy9MO0FBQ0E7O0FBRUEsSUFBSSxZQUFPOztBQUVYLFlBQU8scUJBQXFCLDZCQUFtQjtBQUMvQyxZQUFPLGlCQUFpQiwwQ0FBYTtBQUNyQyxZQUFPLFVBQVUsK0JBQWE7QUFDOUIsWUFBTyxVQUFVLHVCQUFNO0FBQ3ZCLFlBQU8sc0JBQXNCLDhCQUFrQjs7QUFFL0MsSUFBSSxXQUFNLEdBQUcsa0NBQUcsQ0FBQyxlQUFPLEVBQUUsWUFBTzs7OztBQUlnSTtBQUNqSyxPQUFPLGdEQUFlLGVBQU8sSUFBSSxlQUFPLFVBQVUsZUFBTyxtQkFBbUIsRUFBQzs7O0FDeEJuRDtBQUNPO0FBRVQ7QUFFUTtBQUVoQ1ksZ0JBQWUsY0FBQ2YsbUJBQUEsQ0FBQ0csS0FBRyxNQUFFLENBQUMsRUFBRWMsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1B4RDtBQUN5RztBQUNqQjtBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsbURBQW1ELHNCQUFzQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsaURBQWlELEdBQUcsc0JBQXNCLHVCQUF1QixxQkFBcUIsd0JBQXdCLCtDQUErQyxzQkFBc0IsZ0JBQWdCLEdBQUcsT0FBTywwRUFBMEUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLGtDQUFrQyxzQkFBc0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLCtDQUErQyxHQUFHLHNCQUFzQix1QkFBdUIscUJBQXFCLHdCQUF3Qiw0Q0FBNEMsc0JBQXNCLGdCQUFnQixHQUFHLG1CQUFtQjtBQUNyL0I7QUFDQSwrREFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0VBQW9FLGNBQWMsZUFBZSx3QkFBd0IsR0FBRyxVQUFVLDJCQUEyQixxQkFBcUIsdUNBQXVDLGtCQUFrQixHQUFHLE9BQU8sNkhBQTZILFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLG1EQUFtRCxjQUFjLGVBQWUsd0JBQXdCLEdBQUcsVUFBVSwyQkFBMkIscUJBQXFCLHVDQUF1QyxrQkFBa0IsR0FBRywrQkFBK0IsY0FBYyxlQUFlLHdCQUF3QixHQUFHLFVBQVUsMkJBQTJCLHFCQUFxQix1Q0FBdUMsa0JBQWtCLEdBQUcsbUJBQW1CO0FBQzU0QjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFzaHVwLy4vYXBwLmNzcz9mZDFmIiwid2VicGFjazovL21hc2h1cC8uL3FsaWsuanMiLCJ3ZWJwYWNrOi8vbWFzaHVwLy4vQXBwLmpzIiwid2VicGFjazovL21hc2h1cC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzg3NjQiLCJ3ZWJwYWNrOi8vbWFzaHVwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFzaHVwLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly9tYXNodXAvLi9zcmMvc3R5bGVzL21haW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiY29uc3QgcHJlZml4ID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cihcbiAgMCxcbiAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnRvTG93ZXJDYXNlKCkubGFzdEluZGV4T2YoXCIvZXh0ZW5zaW9uc1wiKSArIDFcbik7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSxcbiAgcHJlZml4OiBwcmVmaXgsXG4gIHBvcnQ6IHdpbmRvdy5sb2NhdGlvbi5wb3J0LFxuICBpc1NlY3VyZTogd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiXG59O1xuXG53aW5kb3cucmVxdWlyZS5jb25maWcoe1xuICBiYXNlVXJsOlxuICAgIChjb25maWcuaXNTZWN1cmUgPyBcImh0dHBzOi8vXCIgOiBcImh0dHA6Ly9cIikgK1xuICAgIGNvbmZpZy5ob3N0ICtcbiAgICAoY29uZmlnLnBvcnQgPyBcIjpcIiArIGNvbmZpZy5wb3J0IDogXCJcIikgK1xuICAgIGNvbmZpZy5wcmVmaXggK1xuICAgIFwicmVzb3VyY2VzXCJcbn0pO1xuXG5jb25zdCBxbGlrID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICB0cnkge1xuICAgIHdpbmRvdy5yZXF1aXJlKFtcImpzL3FsaWtcIl0sIHFsaWsgPT4ge1xuICAgICAgcmVzb2x2ZShxbGlrKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlamVjdChlKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHFsaWs7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL2FwcC5jc3NcIjtcbmltcG9ydCBxbGlrTG9hZGVyIGZyb20gXCIuL3FsaWtcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHFsaWtMb2FkZXJcbiAgICAgIC50aGVuKHFsaWsgPT4ge1xuICAgICAgICAvLyBZb3UgY2FuIG5vdyB1c2UgdGhlIHFsaWsgQVBJc1xuICAgICAgICBxbGlrLm9wZW5BcHAoJzRlMDIyZTczLWUxMzQtNGZlOS1iZjU2LTlhODJkZDJlMmQzMicsIGNvbmZpZy5PVVRQVVRfUEFUSF9kZXZlbG9wbWVudClcbiAgICAgICAgICAudGhlbihhcHAgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcHAgb3BlbmVkIHN1Y2Nlc3NmdWxseTpcIiwgYXBwKTtcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gbm93IGludGVyYWN0IHdpdGggdGhlIGFwcFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3Igb3BlbmluZyBhcHA6XCIsIGVycikpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICBxbGlrTG9hZGVyXG4gICAgICAudGhlbihxbGlrID0+IHtcbiAgICAgICAgLy8gWW91IGNhbiBub3cgdXNlIHRoZSBxbGlrIEFQSXNcbiAgICAgICAgcWxpay5vcGVuQXBwKCc1YzQyNGZlNS00NjNjLTQxYmQtOGZjMC00NjI2ODNhMzQ2YzAnLCBjb25maWcuT1VUUFVUX1BBVEhfZGV2ZWxvcG1lbnQpXG4gICAgICAgICAgLnRoZW4oYXBwID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwIG9wZW5lZCBzdWNjZXNzZnVsbHk6XCIsIGFwcCk7XG4gICAgICAgICAgICAvLyBZb3UgY2FuIG5vdyBpbnRlcmFjdCB3aXRoIHRoZSBhcHBcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIG9wZW5pbmcgYXBwOlwiLCBlcnIpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1hc2h1cFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXNodXBfX2NvbnRlbnRcIj5IZWxsbyBRbGlrISEhISEhPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5pbXBvcnQgXCIuL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFzaHVwIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XFxuICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tYXNodXBfX2NvbnRlbnQge1xcbiAgcGFkZGluZzogMnJlbSAzcmVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9hcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1hc2h1cCB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWFzaHVwX19jb250ZW50IHtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggMTZweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogIzIyMjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0NGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblwiLFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMnJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6WyJwcmVmaXgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJsYXN0SW5kZXhPZiIsImNvbmZpZyIsImhvc3QiLCJob3N0bmFtZSIsInBvcnQiLCJpc1NlY3VyZSIsInByb3RvY29sIiwicmVxdWlyZSIsImJhc2VVcmwiLCJxbGlrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJxbGlrTG9hZGVyIiwiQXBwIiwidGhlbiIsIm9wZW5BcHAiLCJPVVRQVVRfUEFUSF9kZXZlbG9wbWVudCIsImFwcCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=