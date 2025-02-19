"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_taro-ui_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-2OCCDL6P_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-6KSI5IDP_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_react-redux_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_axios_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-OQCTGYDJ_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_we-cropper_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-react_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_widget-ui_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_qs_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_redux-logger_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_redux_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-JXTNRHNN_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_axios-miniprogram-adapter_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-BOBKOB2B_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-Y4EGPCR7_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_cookie_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_dayjs_plugin_relativeTime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_jsx-runtime_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_dayjs_locale_zh-cn_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_classnames_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_redux-thunk_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_react-dom_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_dayjs_js.js");

require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/dist/style/index.scss */ "../../node_modules/.pnpm/taro-ui@3.3.0_@tarojs+components@3.6.13_@types+react@18.3.18_postcss@8.5.2_react@18.3.1_ac66dc1554c73834cad00722b251c911/node_modules/taro-ui/dist/style/index.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "webpack/container/remote/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios_miniprogram_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios-miniprogram-adapter */ "webpack/container/remote/axios-miniprogram-adapter");
/* harmony import */ var axios_miniprogram_adapter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios_miniprogram_adapter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store/index.ts");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/actions/user */ "./src/redux/actions/user.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









// 小程序 axios 兼容

(axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.adapter) = (axios_miniprogram_adapter__WEBPACK_IMPORTED_MODULE_4___default());
_redux_store__WEBPACK_IMPORTED_MODULE_5__.store.dispatch((0,_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__.init)());
function App(_ref) {
  var children = _ref.children;
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useDidShow)(function () {
    console.log('App launched.');
    _redux_store__WEBPACK_IMPORTED_MODULE_5__.store.dispatch((0,_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__.getUnreadCount)());
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useDidHide)(function () {
    (0,_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__.stopGetUnreadCount)();
  });

  // children 是将要会渲染的页面
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__.store,
    children: children
  });
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-react/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./app.tsx */ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "webpack/container/remote/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/index/index","pages/account/index","pages/shop/index","pages/resource/index"],"subPackages":[{"root":"pages2","pages":["login/index","course/index","course-term/index","course-detail/index","webview/index","exam/index","grade/index","grade/share/index","yingxin/index","news/index","classroom/index","classroom-list/index","pdd-search/index"]},{"root":"pages3","pages":["account-edit/index","aboutme/index","community/index","community/create-wall/index","community/wall-detail/index","community/create-sale-wall/index","community/sale-wall-detail/index","community/message/index","community/my-wall/index","community/my-sale-wall/index","community/search/index","community/account/index","community/resource-detail/index","community/search-resource/index"]}],"tabBar":{"custom":true,"borderStyle":"black","color":"#ccc","selectedColor":"#000","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"assets/icon/home.png","selectedIconPath":"assets/icon/home_selected.png"},{"pagePath":"pages/resource/index","text":"资源分享","iconPath":"assets/icon/campus.png","selectedIconPath":"assets/icon/campus_selected.png"},{"pagePath":"pages/shop/index","text":"优惠购","iconPath":"assets/icon/shop.png","selectedIconPath":"assets/icon/shop_selected.png"},{"pagePath":"pages/account/index","text":"我","iconPath":"assets/icon/account.png","selectedIconPath":"assets/icon/account_selected.png"}]},"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#ffffff","navigationBarTitleText":"理工喵","navigationBarTextStyle":"black"},"plugins":{"waimai":{"version":"1.1.0","provider":"wx05e29bcb0dd5320e"}}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_2__.createReactApp)(_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], react__WEBPACK_IMPORTED_MODULE_5__, (react_dom__WEBPACK_IMPORTED_MODULE_6___default()), config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ "../../node_modules/.pnpm/taro-ui@3.3.0_@tarojs+components@3.6.13_@types+react@18.3.18_postcss@8.5.2_react@18.3.1_ac66dc1554c73834cad00722b251c911/node_modules/taro-ui/dist/style/index.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/taro-ui@3.3.0_@tarojs+components@3.6.13_@types+react@18.3.18_postcss@8.5.2_react@18.3.1_ac66dc1554c73834cad00722b251c911/node_modules/taro-ui/dist/style/index.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map