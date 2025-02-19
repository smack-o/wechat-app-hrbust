"use strict";require("../../sub-vendors.js");
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages2/grade/share/index"],{

/***/ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages2/grade/share/index.tsx":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages2/grade/share/index.tsx ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GradeShare; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo.js */ "./src/pages2/grade/share/demo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function GradeShare() {
  var _getData = (0,_demo_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    wxml = _getData.wxml,
    style = _getData.style,
    height = _getData.height;
  var imageSrc = '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "share-grade",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_0__.Wxml2canvas, {
      width: "375px",
      wxml: wxml,
      style: style,
      height: height + 'px',
      onImageLoaded: function onImageLoaded(url) {
        imageSrc = url;
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtButton, {
      className: "extra-button",
      type: "primary",
      onClick: function onClick() {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.saveImage)(imageSrc);
      },
      children: "\u4FDD\u5B58\u6D77\u62A5"
    })]
  });
}

/***/ }),

/***/ "./src/pages2/grade/share/demo.js":
/*!****************************************!*\
  !*** ./src/pages2/grade/share/demo.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getData; }
/* harmony export */ });
/* harmony import */ var _res_grade_share_bg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../res/grade-share/bg.png */ "./src/pages2/grade/res/grade-share/bg.png");
/* harmony import */ var _res_grade_share_00_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/grade-share/00.png */ "./src/pages2/grade/res/grade-share/00.png");
/* harmony import */ var _res_grade_share_01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res/grade-share/01.png */ "./src/pages2/grade/res/grade-share/01.png");
/* harmony import */ var _res_grade_share_02_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../res/grade-share/02.png */ "./src/pages2/grade/res/grade-share/02.png");
/* harmony import */ var _res_grade_share_03_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../res/grade-share/03.png */ "./src/pages2/grade/res/grade-share/03.png");
/* harmony import */ var _res_grade_share_04_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../res/grade-share/04.png */ "./src/pages2/grade/res/grade-share/04.png");
/* harmony import */ var _res_grade_share_qr_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../res/grade-share/qr.png */ "./src/pages2/grade/res/grade-share/qr.png");







function getData() {
  var gradeData = JSON.parse(wx.getStorageSync('grade:data') || '{}');
  var _gradeData$grade = gradeData.grade,
    grade = _gradeData$grade === void 0 ? [] : _gradeData$grade,
    gpa = gradeData.gpa;
  var gradeStr = '';
  var notPassCount = 0; // 不通过的数量

  grade.forEach(function (item, index) {
    if (index === 0) {
      return;
    }
    if (item.passSign !== '及格') {
      notPassCount += 1;
    }
    var nameStr = item.gradeName.split('').reduce(function (pre, name) {
      pre += "<text class=\"content-span\">".concat(name, "</text>");
      return pre;
    }, '');
    gradeStr += "\n      <view class=\"grade-content grade-line-".concat(index % 2, "\">\n        <text class=\"grade-content-1\">").concat(nameStr, "</text>\n        <text class=\"grade-content-2\"><text class=\"content-span2\">").concat(item.mark, "</text></text>\n        <text class=\"grade-content-3\"><text class=\"content-span2\">").concat(item.passSign, "</text></text>\n        <text class=\"grade-content-4\"><text class=\"content-span2\">").concat(item.credit, "</text></text>\n      </view>\n    ");
  });
  var gradIcon = _res_grade_share_00_png__WEBPACK_IMPORTED_MODULE_1__;
  if (notPassCount === 0 && gpa >= 3.50) {
    // 考神
    gradIcon = _res_grade_share_00_png__WEBPACK_IMPORTED_MODULE_1__;
  } else if (notPassCount === 0 && gpa < 3.50 && gpa >= 2.75) {
    gradIcon = _res_grade_share_01_png__WEBPACK_IMPORTED_MODULE_2__;
  } else if (notPassCount === 0 && gpa < 2.75) {
    gradIcon = _res_grade_share_02_png__WEBPACK_IMPORTED_MODULE_3__;
  } else if (notPassCount === 1) {
    gradIcon = _res_grade_share_03_png__WEBPACK_IMPORTED_MODULE_4__;
  } else if (notPassCount >= 2) {
    gradIcon = _res_grade_share_04_png__WEBPACK_IMPORTED_MODULE_5__;
  }
  var wxml = "\n    <view class=\"container\" >\n      <image class=\"bg1\" src=\"".concat(_res_grade_share_bg_png__WEBPACK_IMPORTED_MODULE_0__, "\"></image>\n      <view class=\"gradewrap\">\n        <view class=\"grade-title\">\n          <text class=\"grade-title-1\">\u8BFE\u7A0B</text>\n          <text class=\"grade-title-2\">\u6210\u7EE9</text>\n          <text class=\"grade-title-3\">\u53CA\u683C\u6807\u5FD7</text>\n          <text class=\"grade-title-4\">\u5B66\u5206</text>\n        </view>\n        ").concat(gradeStr, "\n        <text class=\"gpa\">\u5E73\u5747\u5B66\u5206\u7EE9\u70B9(GPA): ").concat(gpa, "</text>\n        <image class=\"yinzhang\" src=\"").concat(gradIcon, "\"></image>\n      </view>\n\n      <view class=\"other\">\n        <image class=\"qr\" src=\"").concat(_res_grade_share_qr_png__WEBPACK_IMPORTED_MODULE_6__, "\"></image>\n      </view>\n    </view>\n  ");

  //
  // marginBottom: 139
  // 139 + 20 + 20 + n * 30

  var contentHeight = 139 + 20 + 20 + (grade.length - 1) * 40 + 30;
  var canvasHeight = 38 +
  // 顶部 margin
  contentHeight +
  // 成绩部分
  40 + 96 + 60;
  var style = {
    container: {
      width: 375,
      height: canvasHeight,
      backgroundColor: '#fff000'
    },
    gradewrap: {
      width: 320,
      height: contentHeight,
      borderWidth: 1.5,
      borderRadius: 20,
      borderColor: '#333333',
      backgroundColor: '#ffffff',
      marginTop: 38,
      position: 'relative',
      marginLeft: 28
    },
    gradeTitle: {
      width: 315,
      height: 20,
      marginTop: 20,
      justifyContent: 'center',
      flexDirection: 'row',
      color: '#cccccc'
    },
    gradeTitle1: {
      width: 135,
      height: 20,
      textAlign: 'center'
    },
    gradeTitle2: {
      width: 60,
      height: 20,
      textAlign: 'center'
    },
    gradeTitle3: {
      width: 60,
      height: 20,
      textAlign: 'center'
    },
    gradeTitle4: {
      width: 60,
      height: 20,
      textAlign: 'center'
    },
    gradeContent: {
      width: 315,
      height: 40,
      justifyContent: 'center',
      flexDirection: 'row',
      verticalAlign: 'center',
      lineHeight: '1.6em',
      fontSize: 12
    },
    contentSpan: {
      width: 16,
      height: 16
    },
    contentSpan2: {
      width: 60,
      height: 16
    },
    gradeLine1: {
      backgroundColor: '#ffffff'
    },
    gradeLine0: {
      backgroundColor: '#f7f7f7'
    },
    gradeContent1: {
      width: 135,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    gradeContent2: {
      width: 60,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    gradeContent3: {
      width: 60,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    gradeContent4: {
      width: 60,
      height: 40,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
    },
    text1: {
      width: 200,
      height: 300
    },
    yinzhang: {
      width: 173,
      height: 99.5,
      marginTop: 18,
      marginLeft: 71
    },
    bg1: {
      width: 375,
      height: 418.5,
      position: 'absolute'
    },
    red: {
      backgroundColor: '#ff0000'
    },
    green: {
      backgroundColor: '#00ff00'
    },
    blue: {
      backgroundColor: '#0000ff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    other: {
      width: 375,
      height: 96,
      marginTop: 40,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    qr: {
      width: 328,
      height: 96
    },
    gpa: {
      width: 320,
      height: 20,
      color: '#000000',
      // textAlign: 'center',
      // fontSize: 20,
      marginTop: 10,
      marginLeft: 20
    }
  };
  return {
    wxml: wxml,
    style: style,
    height: canvasHeight
  };
}

/***/ }),

/***/ "./src/pages2/grade/share/index.tsx":
/*!******************************************!*\
  !*** ./src/pages2/grade/share/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages2/grade/share/index.tsx");


var config = {"navigationBarTitleText":"成绩分享"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages2/grade/share/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pages2/grade/res/grade-share/00.png":
/*!*************************************************!*\
  !*** ./src/pages2/grade/res/grade-share/00.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages2/grade/res/grade-share/00.png";

/***/ }),

/***/ "./src/pages2/grade/res/grade-share/01.png":
/*!*************************************************!*\
  !*** ./src/pages2/grade/res/grade-share/01.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages2/grade/res/grade-share/01.png";

/***/ }),

/***/ "./src/pages2/grade/res/grade-share/02.png":
/*!*************************************************!*\
  !*** ./src/pages2/grade/res/grade-share/02.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages2/grade/res/grade-share/02.png";

/***/ }),

/***/ "./src/pages2/grade/res/grade-share/03.png":
/*!*************************************************!*\
  !*** ./src/pages2/grade/res/grade-share/03.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages2/grade/res/grade-share/03.png";

/***/ }),

/***/ "./src/pages2/grade/res/grade-share/04.png":
/*!*************************************************!*\
  !*** ./src/pages2/grade/res/grade-share/04.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages2/grade/res/grade-share/04.png";

/***/ }),

/***/ "./src/pages2/grade/res/grade-share/bg.png":
/*!*************************************************!*\
  !*** ./src/pages2/grade/res/grade-share/bg.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages2/grade/res/grade-share/bg.png";

/***/ }),

/***/ "./src/pages2/grade/res/grade-share/qr.png":
/*!*************************************************!*\
  !*** ./src/pages2/grade/res/grade-share/qr.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages2/grade/res/grade-share/qr.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages2/grade/share/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map