"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["custom-tab-bar/index"],{

/***/ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/custom-tab-bar/index.tsx":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/custom-tab-bar/index.tsx ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export CustomTabBar */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/store */ "./src/redux/store/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _assets_icon_soul_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icon/soul.png */ "./src/assets/icon/soul.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











var tabInfo = {
  borderStyle: 'black',
  color: '#ccc',
  selectedColor: '#000',
  list: [{
    pagePath: 'pages/index/index',
    text: '首页',
    iconPath: '/assets/icon/home.png',
    selectedIconPath: '/assets/icon/home_selected.png'
  }, {
    pagePath: 'pages/resource/index',
    text: '资源站',
    iconPath: '/assets/icon/campus.png',
    selectedIconPath: '/assets/icon/campus_selected.png'
  }, {
    pagePath: 'pages3/community/index',
    text: 'Soul',
    iconPath: '/assets/icon/soul.png',
    selectedIconPath: '/assets/icon/soul.png'
  }, {
    pagePath: 'pages/shop/index',
    text: '优惠购',
    iconPath: '/assets/icon/shop.png',
    selectedIconPath: '/assets/icon/shop_selected.png'
  }, {
    pagePath: 'pages/account/index',
    text: '我',
    iconPath: '/assets/icon/account.png',
    selectedIconPath: '/assets/icon/account_selected.png'
  }]
};
var isEqualPath = function isEqualPath(a, b) {
  return (a || '').replace(/^\//, '') === (b || '').replace(/^\//, '');
};
var switchTo = function switchTo(path, index) {
  return function () {
    var url = '/' + path;
    if (index === 1) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '暂不可用',
        icon: 'none'
      });
      return;
    }
    if (index === 2) {
      var isWechatLogin = _redux_store__WEBPACK_IMPORTED_MODULE_4__.store.getState().user.isWechatLogin;
      if (!isWechatLogin) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_5__.toLogin)(isWechatLogin, url);
        return;
      }
      // wx.requestSubscribeMessage({
      //   tmplIds: ['g0WWyXyMj-fU7kscwpXU89Q_Ola7sfJgIjKv7CdIVIc'],
      //   success: () => {
      //     Taro.navigateTo({
      //       url
      //     })
      //   }
      // })
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: url
      });
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: url
    });
  };
};
function CustomTabBar(props) {
  var _Taro$getCurrentInsta;
  var unreadCount = props.unreadCount;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(((_Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentInstance()) === null || _Taro$getCurrentInsta === void 0 || (_Taro$getCurrentInsta = _Taro$getCurrentInsta.router) === null || _Taro$getCurrentInsta === void 0 ? void 0 : _Taro$getCurrentInsta.path) || ''),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_useState, 2),
    path = _useState2[0],
    setPath = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // @ts-ignore
    wx.onAppRoute(function (res) {
      setPath(res.path);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.CoverView, {
    className: "tab-bar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.CoverView, {
      className: "tab-bar-border"
    }), tabInfo.list.map(function (item, index) {
      var isSelected = isEqualPath(path, item.pagePath);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.CoverView, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('tab-bar-item', {
          large: index === 2
        }),
        onClick: switchTo(item.pagePath, index),
        "data-path": item.pagePath,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.CoverImage, {
          className: "custom-tab-item-img",
          src: isSelected ? item.selectedIconPath : item.iconPath
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.CoverView, {
          className: "custom-tab-item-text",
          style: {
            color: isSelected ? tabInfo.selectedColor : tabInfo.color
          },
          children: item.text
        }), index === 4 && unreadCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.CoverView, {
          className: "custom-tab-item-dot",
          children: unreadCount > 99 ? '99+' : unreadCount
        })]
      }, index);
    })]
  });
}
var mapStateToProps = function mapStateToProps(state) {
  return {
    unreadCount: state.user.unreadCount
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(CustomTabBar));

/***/ }),

/***/ "./src/custom-tab-bar/index.tsx":
/*!**************************************!*\
  !*** ./src/custom-tab-bar/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/custom-tab-bar/index.tsx");


var inst = Component((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createComponentConfig)(_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'custom-tab-bar/index'))

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/icon/soul.png":
/*!**********************************!*\
  !*** ./src/assets/icon/soul.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/icon/soul.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/custom-tab-bar/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map