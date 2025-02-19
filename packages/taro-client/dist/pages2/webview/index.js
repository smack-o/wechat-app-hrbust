"use strict";require("../sub-vendors.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages2/webview/index"],{

/***/ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages2/webview/index.tsx":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages2/webview/index.tsx ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);










var Webview = /*#__PURE__*/function (_Component) {
  function Webview() {
    var _this;
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Webview);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Webview, [].concat(args));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "state", {
      url: ''
    });
    return _this;
  }
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Webview, _Component);
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Webview, [{
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "onLoad",
    value: function onLoad(e) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().setNavigationBarTitle({
        title: e.title || ''
      });
      this.setState({
        url: decodeURIComponent(e.url)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var url = this.state.url;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "webview-page",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.WebView, {
          src: url
        })
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(Webview));

/***/ }),

/***/ "./src/pages2/webview/index.tsx":
/*!**************************************!*\
  !*** ./src/pages2/webview/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages2/webview/index.tsx");


var config = {"navigationBarTitleText":""};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages2/webview/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages2/webview/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map