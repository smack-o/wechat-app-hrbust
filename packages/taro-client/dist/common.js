(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./config/utils/formData.js":
/*!**********************************!*\
  !*** ./config/utils/formData.js ***!
  \**********************************/
/***/ (function(module) {

// eslint-disable-next-line import/no-commonjs
function FormData() {}
module.exports = FormData;

/***/ }),

/***/ "./src/app.config.ts":
/*!***************************!*\
  !*** ./src/app.config.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": function() { return /* binding */ routes; }
/* harmony export */ });
/* unused harmony exports router, pages */
var router = {
  // 分包，pages 主包目前只放 tab 签的四个主页面，其它功能页面都放入 subPackages 中
  pages: {
    index: 'index/index',
    // 首页
    // campus: 'campus/index', // 校园
    // discover: 'discover/index', // 发现
    account: 'account/index',
    // 个人中心
    shop: 'shop/index',
    // 校园购
    resource: 'resource/index' // 资源分享首页
    // 'pages/course',
    // 'pages/courseDetail',
    // 'pages/choiceTrem',
    // 'pages/christmas/christmasIndex',
    // 'pages/christmas/imageeditor',
    // 'pages/christmas/combine',
    // 'pages/guoqi/index',
    // 'pages/guoqi/combine',
    // 'pages/guoqi/imageeditor',
    // 'pages/wifi',
    // 'pages/combine/combine'
  },
  pages2: {
    login: 'login/index',
    // 登录页面
    course: 'course/index',
    // 课表主页面
    courseTerm: 'course-term/index',
    // 课表，选择学期页面
    courseDetail: 'course-detail/index',
    // 课表，课程详情页
    webview: 'webview/index',
    // 公共 webview 承载页面
    exam: 'exam/index',
    // 考试查询
    grade: 'grade/index',
    // 成绩查询
    gradeShare: 'grade/share/index',
    // 成绩查询
    yingxin: 'yingxin/index',
    // 新生查询
    news: 'news/index',
    // 教务新闻
    classroom: 'classroom/index',
    // 空教室查询
    classroomList: 'classroom-list/index',
    // 空教室查询结果
    pddSearch: 'pdd-search/index' // 品多多搜索页面,
  },
  pages3: {
    accountEdit: 'account-edit/index',
    // 个人中心，编辑个人信息页面
    aboutme: 'aboutme/index',
    // 关于我们
    // schoolAnniversary: 'school-anniversary/index', // 70 周年校庆
    community: 'community/index',
    // 社区首页
    createWall: 'community/create-wall/index',
    // 创建表白墙
    wallDetail: 'community/wall-detail/index',
    // 表白墙详情
    createSaleWall: 'community/create-sale-wall/index',
    // 创建卖舍友
    saleWallDetail: 'community/sale-wall-detail/index',
    // 卖舍友详情
    message: 'community/message/index',
    // 消息页面
    myWall: 'community/my-wall/index',
    // 我的表白墙
    mySaleWall: 'community/my-sale-wall/index',
    // 我的卖舍友
    search: 'community/search/index',
    // 搜索
    otherAccount: 'community/account/index',
    // 其他用户主页
    // games: 'community/resource/index', // 资源分享首页
    resourceDetail: 'community/resource-detail/index',
    // 资源分享详情
    searchResource: 'community/search-resource/index' // 资源分享搜索
  }
};
var pages = Object.keys(router.pages).map(function (path) {
  return "pages/".concat(router.pages[path]);
});
var routes = Object.keys(router).reduce(function (r, packageName) {
  Object.keys(router[packageName]).forEach(function (routerName) {
    r[routerName] = "/".concat(packageName, "/").concat(router[packageName][routerName]);
  });
  return r;
}, {});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  pages: pages,
  subPackages: [{
    root: 'pages2',
    pages: Object.values(router.pages2)
  }, {
    root: 'pages3',
    pages: Object.values(router.pages3)
  }],
  tabBar: {
    custom: true,
    borderStyle: 'black',
    color: '#ccc',
    selectedColor: '#000',
    backgroundColor: '#fff',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: 'assets/icon/home.png',
      selectedIconPath: 'assets/icon/home_selected.png'
    }, {
      pagePath: 'pages/resource/index',
      text: '资源分享',
      iconPath: 'assets/icon/campus.png',
      selectedIconPath: 'assets/icon/campus_selected.png'
    },
    // {
    //   pagePath: 'pages/discover/index',
    //   text: 'Soul',
    //   iconPath: 'assets/icon/find.png',
    //   selectedIconPath: 'assets/icon/find_selected.png'
    // },
    {
      pagePath: 'pages/shop/index',
      text: '优惠购',
      iconPath: 'assets/icon/shop.png',
      selectedIconPath: 'assets/icon/shop_selected.png'
    }, {
      pagePath: 'pages/account/index',
      text: '我',
      iconPath: 'assets/icon/account.png',
      selectedIconPath: 'assets/icon/account_selected.png'
    }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTitleText: '理工喵',
    navigationBarTextStyle: 'black'
  },
  plugins: {
    waimai: {
      version: '1.1.0',
      provider: 'wx05e29bcb0dd5320e'
    }
  }
});

/***/ }),

/***/ "./src/components/@with-share/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/@with-share/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/superPropGet.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/superPropGet.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");









// 微信分享高阶组件


var defaultOptions = {
  title: '理工喵',
  imageUrl: '',
  path: 'pages/index/index',
  query: ''
};
function withShare() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOptions;
  return function demoComponent(WrappedComponent) {
    return /*#__PURE__*/function (_WrappedComponent) {
      function WithShare() {
        var _this;
        (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WithShare);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WithShare, [].concat(args));
        (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, "$setShareInfo", void 0);
        (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, "_shareOptions", void 0);
        (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, "getShareInfo", function () {
          var _this$$setShareInfo, _this2;
          // let { title, imageUrl, path = null } = opts;
          var options = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opts);
          console.log(_this.$setShareInfo, 'this.$setShareInfo', (_this$$setShareInfo = (_this2 = _this).$setShareInfo) === null || _this$$setShareInfo === void 0 ? void 0 : _this$$setShareInfo.call(_this2), _this._shareOptions);
          if (_this._shareOptions) {
            options = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, options), _this._shareOptions || {});
          }
          // 从继承的组件获取配置
          if (_this.$setShareInfo && typeof _this.$setShareInfo === 'function') {
            // opts = this.$setShareInfo()
            options = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, options), _this.$setShareInfo || {});
          }
          var _options = options,
            title = _options.title,
            _options$path = _options.path,
            path = _options$path === void 0 ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentPageUrl)() : _options$path,
            imageUrl = _options.imageUrl,
            query = _options.query;
          return {
            title: title,
            path: path,
            imageUrl: imageUrl,
            query: query
          };
        });
        return _this;
      }
      (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(WithShare, _WrappedComponent);
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(WithShare, [{
        key: "componentWillMount",
        value: function () {
          var _componentWillMount = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee() {
            return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function componentWillMount() {
            return _componentWillMount.apply(this, arguments);
          }
          return componentWillMount;
        }()
      }, {
        key: "onShareAppMessage",
        value:
        // 点击分享的那一刻会进行调用
        function onShareAppMessage() {
          return this.getShareInfo();
        }
      }, {
        key: "onShareTimeline",
        value: function onShareTimeline() {
          var _this$getShareInfo = this.getShareInfo(),
            title = _this$getShareInfo.title,
            imageUrl = _this$getShareInfo.imageUrl,
            query = _this$getShareInfo.query;
          return {
            title: title,
            query: query,
            imageUrl: imageUrl
          };
        }
      }, {
        key: "render",
        value: function render() {
          // return <WrappedComponent />
          return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_superPropGet_js__WEBPACK_IMPORTED_MODULE_9__["default"])(WithShare, "render", this, 3)([]);
        }
      }]);
    }(WrappedComponent);
  };
}
/* harmony default export */ __webpack_exports__["default"] = (withShare);

/***/ }),

/***/ "./src/components/Avatar/Avatar.tsx":
/*!******************************************!*\
  !*** ./src/components/Avatar/Avatar.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NickName": function() { return /* binding */ NickName; },
/* harmony export */   "default": function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/router */ "./src/utils/router.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







var prefix = 'component-avatar';
function NickName(props) {
  var customName = props.customName,
    nickName = props.nickName,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$tags = props.tags,
    tags = _props$tags === void 0 ? [] : _props$tags;
  var name = customName || nickName;
  return name ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "".concat(prefix, "__name ").concat(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
      "user-select": true,
      children: name
    }), tags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
      className: "".concat(prefix, "__tag"),
      children: tags[0]
    })]
  }) : null;
}
function Avatar(props) {
  var _id = props._id,
    isPublisher = props.isPublisher,
    _props$avatarUrl = props.avatarUrl,
    avatarUrl = _props$avatarUrl === void 0 ? '' : _props$avatarUrl,
    customAvatarUrl = props.customAvatarUrl,
    customName = props.customName,
    nickName = props.nickName,
    className = props.className,
    _props$avatarSize = props.avatarSize,
    avatarSize = _props$avatarSize === void 0 ? '70rpx' : _props$avatarSize,
    onClick = props.onClick,
    onClickType = props.onClickType,
    userTags = props.userTags;
  var avatar = customAvatarUrl ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCdnUrl)(customAvatarUrl) : avatarUrl;
  var onAvatarClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    if (!onClick && !onClickType) {
      return;
    }
    e.stopPropagation();
    if (onClickType === 'preview') {
      wx.previewMedia({
        current: 0,
        sources: [{
          url: avatar,
          type: 'image'
        }],
        showmenu: true
      });
    } else if (onClickType === 'jump') {
      // TODO: 跳转到个人主页
      (0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.goPage)("".concat(_utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.otherAccount, "?id=").concat(_id));
    } else {
      onClick === null || onClick === void 0 || onClick();
    }
  }, [_id, avatar, onClick, onClickType]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefix, className),
    onClick: onAvatarClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
      className: "".concat(prefix, "__image"),
      src: avatar,
      mode: "aspectFill",
      style: {
        width: avatarSize,
        height: avatarSize
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NickName, {
      customName: customName,
      nickName: nickName,
      isPublisher: isPublisher,
      tags: userTags
    })]
  });
}

/***/ }),

/***/ "./src/components/Avatar/index.ts":
/*!****************************************!*\
  !*** ./src/components/Avatar/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NickName": function() { return /* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_0__.NickName; },
/* harmony export */   "default": function() { return /* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./src/components/Avatar/Avatar.tsx");



/***/ }),

/***/ "./src/components/ImageCache/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/ImageCache/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImageCache; }
/* harmony export */ });
/* unused harmony export uuid */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);







var uuid = function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16).toUpperCase();
  });
};
var IMAGE_CACHE_KEY = 'image_cache_key';
function url2Base64(url) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url.replace('http://', 'https://'),
      responseType: 'arraybuffer',
      //最关键的参数，设置返回的数据格式为arraybuffer
      success: function success(res) {
        //把arraybuffer转成base64
        var base64 = wx.arrayBufferToBase64(res.data);

        //不加上这串字符，在页面无法显示的哦
        // base64 = 'data:image/jpeg;base64,' + base64
        //打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
        console.log(base64);
        resolve(base64);
      },
      fail: function fail(res) {
        console.log(res);
        reject();
      }
    });
  });
}
function ImageCache(props) {
  var className = props.className,
    src = props.src;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
    displaySrc = _useState2[0],
    setDisplaySrc = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handler() {
      return _handler.apply(this, arguments);
    }
    function _handler() {
      _handler = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee() {
        var FileSystemManager, imageCacheMap, _base, id, base64;
        return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              FileSystemManager = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getFileSystemManager(); // 获取缓存，看有没有
              imageCacheMap = JSON.parse(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync(IMAGE_CACHE_KEY) || '{}');
              if (!imageCacheMap[src]) {
                _context.next = 6;
                break;
              }
              // 拿到缓存直接使用缓存文件地址
              _base = FileSystemManager.readFileSync("".concat(wx.env.USER_DATA_PATH, "/").concat(imageCacheMap[src]), 'base64');
              console.info('load image from disk');
              return _context.abrupt("return", setDisplaySrc(_base));
            case 6:
              id = uuid(); // 拉取图片 base64
              _context.next = 9;
              return url2Base64(src);
            case 9:
              base64 = _context.sent;
              // 这里处理缓存逻辑，节省开销
              FileSystemManager.writeFile({
                filePath: "".concat(wx.env.USER_DATA_PATH, "/").concat(id),
                data: base64,
                encoding: 'base64',
                success: function success(res) {
                  console.log(res);
                  // 写入缓存
                  imageCacheMap[src] = id;
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync(IMAGE_CACHE_KEY, JSON.stringify(imageCacheMap));
                  setDisplaySrc(base64);
                },
                fail: function fail() {
                  // 失败直接使用原图片地址
                  setDisplaySrc(src);
                }
              });
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _handler.apply(this, arguments);
    }
    handler();
  }, [src]);
  if (!displaySrc) {
    return;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
    src: "data:image/jpeg;base64,".concat(displaySrc),
    className: className
  });
}

/***/ }),

/***/ "./src/components/Time/Time.tsx":
/*!**************************************!*\
  !*** ./src/components/Time/Time.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Time; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "webpack/container/remote/dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "webpack/container/remote/dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "webpack/container/remote/dayjs/locale/zh-cn");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







dayjs__WEBPACK_IMPORTED_MODULE_1___default().locale('zh-cn'); // 全局使用

dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_2___default()));
var prefix = 'component-time';
function Time(props) {
  var time = props.time,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$type = props.type,
    type = _props$type === void 0 ? 'absolute' : _props$type;
  if (!time) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "".concat(prefix, " ").concat(className),
    children: type === 'absolute' ? dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).fromNow() : dayjs__WEBPACK_IMPORTED_MODULE_1___default()(time).format('YYYY年MM月DD日 HH:mm')
  });
}

/***/ }),

/***/ "./src/components/Time/index.ts":
/*!**************************************!*\
  !*** ./src/components/Time/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Time__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time */ "./src/components/Time/Time.tsx");


/***/ }),

/***/ "./src/components/captcha-modal/index.tsx":
/*!************************************************!*\
  !*** ./src/components/captcha-modal/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CaptchaModal; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/user */ "./src/services/user.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);










function CaptchaModal(props) {
  var onSubmit = props.onSubmit,
    isOpened = props.isOpened;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    captcha = _useState2[0],
    setCaptcha = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    captchaImage = _useState4[0],
    setCaptchaImage = _useState4[1];
  var onInputChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    setCaptcha(value);
  }, []);
  var onCaptchaClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
    var _yield$cError, _yield$cError2, err, res;
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.cError)((0,_services_user__WEBPACK_IMPORTED_MODULE_2__.getCaptcha)());
        case 2:
          _yield$cError = _context.sent;
          _yield$cError2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_yield$cError, 2);
          err = _yield$cError2[0];
          res = _yield$cError2[1];
          !err && setCaptchaImage(res.data.captcha);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), []);
  var onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    onSubmit && onSubmit(captcha);
    setCaptcha('');
  }, [onSubmit, captcha]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtModal, {
    isOpened: isOpened,
    className: "captcha-modal",
    closeOnClickOverlay: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtModalHeader, {
      children: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
    }), isOpened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtModalContent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "dialog-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "input-wrapper",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtInput, {
            name: "value",
            title: "\u9A8C\u8BC1\u7801",
            type: "text",
            value: captcha,
            onChange: onInputChange,
            placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
            placeholderClass: "placeholder",
            className: "captcha-input",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
              className: "captcha-image",
              onClick: onCaptchaClick,
              src: captchaImage || props.captchaImage
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          style: "width: 160px; height: 50px"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtButton, {
        className: "login-button",
        disabled: !captcha,
        type: "primary",
        onClick: onConfirm,
        children: "\u786E\u5B9A"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/cropper/index.tsx":
/*!******************************************!*\
  !*** ./src/components/cropper/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var we_cropper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! we-cropper */ "webpack/container/remote/we-cropper");
/* harmony import */ var we_cropper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(we_cropper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);













var device = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync();
var width = device.windowWidth / 2;
var height = device.windowWidth / 2;
var defaultOptions = {
  id: 'cropper',
  targetId: 'targetCropper',
  pixelRatio: device.pixelRatio,
  width: width,
  height: height,
  scale: 2.5,
  zoom: 8,
  cut: {
    x: (width - 150) / 2,
    y: (height - 150) / 2,
    width: 150,
    height: 150
  },
  boundStyle: {
    color: '#04b00f',
    mask: 'rgba(0,0,0,0.1)',
    lineWidth: 1
  }
};
var Cropper = /*#__PURE__*/function (_Component) {
  function Cropper() {
    var _this;
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Cropper);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Cropper, [].concat(args));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "cropper", void 0);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "init", function () {
      return new Promise(function (resolve) {
        var options = _this.props.options;
        var id = options.id,
          targetId = options.targetId;
        var option = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({}, options), {}, {
          ctx: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createCanvasContext(id),
          targetCtx: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createCanvasContext(targetId)
        });
        _this.cropper = new (we_cropper__WEBPACK_IMPORTED_MODULE_2___default())(option).on('ready', function (ctx) {
          console.info('on crooper ready');
          resolve();
          // this.cropper.pushOrign('https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRkuxbeB7jJuFGnuksXL01xjWMQEkaLyTaBFpy2hmiaxBl2apZrMM0NgiaicRZMiaLWPscyKIJwczj0w/132')
        }).on('beforeImageLoad', function (ctx) {
          console.info('before picture loaded, i can do something');
          console.info('current canvas context:', ctx);
          // Taro.showToast({
          //   title: '上传中',
          //   icon: 'loading',
          //   duration: 20000,
          // })
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
        }).on('imageLoad', function (ctx) {
          console.info('picture loaded');
          console.info('current canvas context:', ctx);
          // Taro.hideToast()
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
        });
      });
    });
    // 这里是一个自定义方法
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "touchStart", function (e) {
      _this.cropper.touchStart(e);
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "touchMove", function (e) {
      _this.cropper.touchMove(e);
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "touchEnd", function (e) {
      _this.cropper.touchEnd(e);
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "pushOrign", function (src) {
      _this.cropper.pushOrign(src);
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "updateCanvas", function () {
      _this.cropper.updateCanvas();
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "getCropperBase64", function (fn) {
      return _this.cropper.getCropperBase64(fn);
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this, "getCropperImage", function (opt, fn) {
      var option = Object.assign({
        // 传入自定义组件上下文
        componentContext: _this
      }, opt);
      return _this.cropper.getCropperImage(option, fn);
    });
    return _this;
  }
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Cropper, _Component);
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Cropper, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().mark(function _callee() {
        var src;
        return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_11__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.init();
            case 2:
              this.props.onReady(this.cropper);
              src = this.props.src;
              if (src) {
                this.cropper.pushOrign(src);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.src !== this.props.src) {
        this.cropper.removeImage();
        nextProps.src && this.pushOrign(nextProps.src);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var options = this.props.options;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Canvas, {
          type: "t",
          canvasId: options.id,
          className: "cropper",
          disableScroll: true,
          onTouchStart: this.touchStart,
          onTouchMove: this.touchMove,
          onTouchEnd: this.touchEnd,
          style: "width:".concat(options.width, "px;height:").concat(options.height, "px;background-color: rgba(0, 0, 0, 0.2)")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Canvas, {
          type: "t",
          canvasId: options.targetId,
          className: "cropper",
          disableScroll: true,
          style: "position: fixed; top: -".concat(options.width * options.pixelRatio, "px; left: -").concat(options.height * options.pixelRatio, "px; width:").concat(options.width * options.pixelRatio, "px;height:").concat(options.height * options.pixelRatio, "px;")
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Cropper, "defaultProps", {
  options: defaultOptions
});


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaptchaModal": function() { return /* reexport safe */ _captcha_modal__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "Loading": function() { return /* reexport safe */ _loading__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "Wxml2canvas": function() { return /* reexport safe */ _wxml2canvas__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "withShare": function() { return /* reexport safe */ _with_share__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ "./src/components/loading/index.tsx");
/* harmony import */ var _loading_withLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading/withLoading */ "./src/components/loading/withLoading.tsx");
/* harmony import */ var _captcha_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha-modal */ "./src/components/captcha-modal/index.tsx");
/* harmony import */ var _wxml2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wxml2canvas */ "./src/components/wxml2canvas/index.tsx");
/* harmony import */ var _cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cropper */ "./src/components/cropper/index.tsx");
/* harmony import */ var _with_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@with-share */ "./src/components/@with-share/index.tsx");







/***/ }),

/***/ "./src/components/loading/index.tsx":
/*!******************************************!*\
  !*** ./src/components/loading/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _res_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./res/loading.gif */ "./src/components/loading/res/loading.gif");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function Loading(props) {
  var _props$loadingStyle = props.loadingStyle,
    loadingStyle = _props$loadingStyle === void 0 ? '' : _props$loadingStyle,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading;
  if (!loading) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('global-loading', loadingStyle === 'padding' ? 'loadingPadding' : 'loadingScreen'),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
      className: "image",
      src: _res_loading_gif__WEBPACK_IMPORTED_MODULE_2__
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "text",
      children: "\u55B5\u513F\uFF0C\u52A0\u8F7D\u4E2D..."
    })]
  });
}

/***/ }),

/***/ "./src/components/loading/withLoading.tsx":
/*!************************************************!*\
  !*** ./src/components/loading/withLoading.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/components/loading/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);









function withLoading(WrappedComponent) {
  return /*#__PURE__*/function (_Component) {
    function _class() {
      var _this;
      (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _class);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _class, [].concat(args));
      (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "state", {
        loading: false
      });
      (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "changeLoading", function (loading) {
        _this.setState({
          loading: loading
        });
      });
      return _this;
    }
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_class, _Component);
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_class, [{
      key: "render",
      value: function render() {
        var loading = this.state.loading;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__["default"], {
            loading: loading
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WrappedComponent, (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, this.props), {}, {
            changeLoading: this.changeLoading
          }))]
        });
      }
    }]);
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
}

/***/ }),

/***/ "./src/components/publisher-title/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/publisher-title/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PublisherTitle; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "webpack/container/remote/dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Avatar */ "./src/components/Avatar/index.ts");
/* harmony import */ var _components_Time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Time */ "./src/components/Time/index.ts");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "webpack/container/remote/dayjs/plugin/relativeTime");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/locale/zh-cn */ "webpack/container/remote/dayjs/locale/zh-cn");
/* harmony import */ var dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_zh_cn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











dayjs__WEBPACK_IMPORTED_MODULE_1___default().locale('zh-cn'); // 全局使用

dayjs__WEBPACK_IMPORTED_MODULE_1___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_5___default()));
var prefix = 'wall';
function PublisherTitle(props) {
  var publisher = props.publisher,
    time = props.time,
    className = props.className,
    _props$timeType = props.timeType,
    timeType = _props$timeType === void 0 ? 'absolute' : _props$timeType,
    isPublisher = props.isPublisher;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefix, "__publisher"), className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, publisher === null || publisher === void 0 ? void 0 : publisher.userInfo), {}, {
      onClickType: "jump",
      _id: publisher === null || publisher === void 0 ? void 0 : publisher._id,
      isPublisher: isPublisher,
      userTags: publisher === null || publisher === void 0 ? void 0 : publisher.tags
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Time__WEBPACK_IMPORTED_MODULE_4__["default"], {
      time: time,
      type: timeType
    })]
  });
}

/***/ }),

/***/ "./src/components/resource-item/ResourceItem.tsx":
/*!*******************************************************!*\
  !*** ./src/components/resource-item/ResourceItem.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceTag": function() { return /* binding */ ResourceTag; },
/* harmony export */   "default": function() { return /* binding */ Resource; },
/* harmony export */   "resourceInfo": function() { return /* binding */ resourceInfo; }
/* harmony export */ });
/* unused harmony export ResourceDownloadType */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_community_imgs_comment_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/community-imgs/comment.png */ "./src/assets/community-imgs/comment.png");
/* harmony import */ var _assets_community_imgs_like_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/community-imgs/like.png */ "./src/assets/community-imgs/like.png");
/* harmony import */ var _assets_community_imgs_view_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/community-imgs/view.png */ "./src/assets/community-imgs/view.png");
/* harmony import */ var _assets_community_imgs_like_selected_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/community-imgs/like_selected.png */ "./src/assets/community-imgs/like_selected.png");
/* harmony import */ var _components_publisher_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/publisher-title */ "./src/components/publisher-title/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);

















var prefix = 'resource-item';
var ResourceTag = /*#__PURE__*/function (ResourceTag) {
  /**
   * 电影、电视剧
   * Movie
   * Film
   */
  ResourceTag["MOVIE"] = "movie";
  /**
   * 游戏
   * Game
   */
  ResourceTag["GAME"] = "game";
  /**
   * 学习资源
   * Study
   */
  ResourceTag["STUDY"] = "study";
  return ResourceTag;
}({});
var resourceInfo = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, ResourceTag.MOVIE, {
  name: '影视'
}), ResourceTag.GAME, {
  name: '游戏'
}), ResourceTag.STUDY, {
  name: '学习'
});
var ResourceDownloadType = /*#__PURE__*/function (ResourceDownloadType) {
  /**
   * 百度网盘
   */
  ResourceDownloadType[ResourceDownloadType["BAIDU"] = 0] = "BAIDU";
  /**
   * 阿里网盘
   */
  ResourceDownloadType[ResourceDownloadType["ALIYUN"] = 1] = "ALIYUN";
  /**
   * 天翼网盘
   */
  ResourceDownloadType[ResourceDownloadType["TIANYI"] = 2] = "TIANYI";
  /**
   * 夸克
   */
  ResourceDownloadType[ResourceDownloadType["QUARK"] = 3] = "QUARK";
  /**
   * 其它
   */
  ResourceDownloadType[ResourceDownloadType["OTHER"] = 4] = "OTHER";
  return ResourceDownloadType;
}({});
var downLoadInfo = [{
  name: '百度网盘'
}, {
  name: '阿里网盘'
}, {
  name: '天翼网盘'
}, {
  name: '夸克网盘'
}, {
  name: '其它'
}];
function Resource(props) {
  var _props$data = props.data,
    _props$data2 = _props$data === void 0 ? {} : _props$data,
    publisher = _props$data2.publisher,
    likeCount = _props$data2.likeCount,
    isLike = _props$data2.isLike,
    _id = _props$data2._id,
    createdAt = _props$data2.createdAt,
    commentCount = _props$data2.commentCount,
    name = _props$data2.name,
    nameEn = _props$data2.nameEn,
    description = _props$data2.description,
    _props$data2$hotComme = _props$data2.hotComments,
    hotComments = _props$data2$hotComme === void 0 ? [] : _props$data2$hotComme,
    downloadUrl = _props$data2.downloadUrl,
    _props$data2$tag = _props$data2.tag,
    tag = _props$data2$tag === void 0 ? [] : _props$data2$tag,
    viewCount = _props$data2.viewCount,
    top = _props$data2.top,
    timeType = props.timeType,
    onClick = props.onClick,
    _props$showHotComment = props.showHotComments,
    showHotComments = _props$showHotComment === void 0 ? false : _props$showHotComment,
    _props$showDetail = props.showDetail,
    showDetail = _props$showDetail === void 0 ? false : _props$showDetail,
    onShowAd = props.onShowAd,
    _props$showTop = props.showTop,
    showTop = _props$showTop === void 0 ? false : _props$showTop;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isLike),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState, 2),
    localIsLike = _useState2[0],
    setLocalIsLike = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(likeCount || 0),
    _useState4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState3, 2),
    localIsLikeCount = _useState4[0],
    setLocalIsLikeCount = _useState4[1];
  // const [showDownLoadUrlSheet, setShowDownLoadUrlSheet] = useState(false)
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_useState5, 2),
    showDownloadDetail = _useState6[0],
    setShowDownloadDetail = _useState6[1];
  // const [showDownLoadDetailModal, setDownLoadDetailModal] = useState(false)
  // const [modalContent, setModalContent] = useState<{
  //   url: string
  //   downloadType: ResourceDownloadType
  //   password?: string
  //   decompressionPassword?: string
  // }>()

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLocalIsLike(isLike);
    setLocalIsLikeCount(likeCount || 0);
  }, [isLike, likeCount]);

  // const onImageClick = useCallback((index: number, e) => {
  //   e.stopPropagation()
  //   // @ts-ignore
  //   wx.previewMedia({
  //     current: index,
  //     sources: photos.map(item => ({
  //       url: getCdnUrl(item),
  //       type: 'image'
  //     })),
  //     showmenu: true
  //   })
  // }, [])

  var onLikeClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee(e) {
      var _yield$withRequest, _yield$withRequest2, err;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.stopPropagation();
            if (_id) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return");
          case 3:
            _context.next = 5;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_1__.APIS.ResourceApi.apiResourceLikeIdPut)({
              id: _id
            });
          case 5:
            _yield$withRequest = _context.sent;
            _yield$withRequest2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_yield$withRequest, 1);
            err = _yield$withRequest2[0];
            // 本地变更
            if (!err) {
              setLocalIsLike(!localIsLike);
              setLocalIsLikeCount(localIsLikeCount + (localIsLike ? -1 : 1));
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [_id, localIsLike, localIsLikeCount]);

  // const onDelete = useCallback(() => {
  //   Taro.showModal({
  //     title: '确认删除这条动态？',
  //     content: '删除后无法找回，请谨慎操作。',
  //     success: async res => {
  //       if (res.confirm) {
  //         const [err] = await withRequest(APIS.WallApi.apiWallIdDelete)({
  //           id: _id || ''
  //         })
  //         if (!err) {
  //           showToast({
  //             title: '删除成功',
  //             icon: 'success',
  //             finished: () => {
  //               Taro.navigateBack()
  //             }
  //           })
  //         }
  //       }
  //     }
  //   })
  // }, [_id])

  var onGetUrl = function onGetUrl() {
    onShowAd === null || onShowAd === void 0 || onShowAd(onShowDownloadDetail);
  };

  // const toggleDownLoadUrlSheet = useCallback(() => {
  //   setShowDownLoadUrlSheet(!showDownLoadUrlSheet)
  // }, [showDownLoadUrlSheet])

  // const onDownLoadItemClick = (index: number) => {
  //   if (!downloadUrl) {
  //     return
  //   }
  //   copy(downloadUrl[index].url)
  //   showToast({
  //     title: '复制成功，请粘贴到浏览器打开'
  //   })
  //   onShowDownloadDetail()
  // }

  var onShowDownloadDetail = function onShowDownloadDetail() {
    setShowDownloadDetail(true);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.showToast)({
      title: '获取成功'
    });
  };

  // TODO: 举报投诉逻辑
  var onComplaint = function onComplaint() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().showModal({
      title: '投诉成功',
      content: '理工喵已收到投诉，会尽快在核实后进行处理。',
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
    className: prefix,
    onClick: onClick,
    children: [!showDetail && tag.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
      className: "".concat(prefix, "-tags"),
      children: tag.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "".concat(prefix, "-tags__tag"),
          children: resourceInfo[item].name
        }, item);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_publisher_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
      time: createdAt,
      publisher: publisher,
      timeType: timeType,
      isPublisher: false
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
      "user-select": true,
      className: "".concat(prefix, "__content"),
      children: [name, nameEn ? "(".concat(nameEn, ")") : '']
    }), showDetail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [tag.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: "".concat(prefix, "-detail-tags"),
        children: ["\u6807\u7B7E\uFF1A", tag.map(function (item) {
          return resourceInfo[item].name;
        }).join('，')]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: "line"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("wemark", {
        md: description,
        link: true,
        highlight: true,
        type: "wemark"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_3__.AtCard, {
        className: "".concat(prefix, "__url-card"),
        title: "\u514D\u8D23\u58F0\u660E",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "mianze-text",
          children: "1\u3001\u672C\u7AD9\u6240\u6709\u5185\u5BB9\u5747\u4E3A\u7231\u597D\u8005\u5206\u4EAB\u53D1\u5E03\u7684\u7F51\u76D8\u94FE\u63A5\u4ECB\u7ECD\u5C55\u793A\u5E16\u5B50\uFF0C\u672C\u7AD9\u4E0D\u5B58\u50A8\u4EFB\u4F55\u5B9E\u8D28\u8D44\u6E90\u6570\u636E\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "mianze-text",
          children: "2\u3001\u672C\u7AD9\u7981\u6B62\u53D1\u5E03\u5206\u4EAB\u7231\u5947\u827A\u3001B\u7AD9\u3001\u4F18\u9177\u3001\u817E\u8BAF\u89C6\u9891\u7B49\u5A92\u4F53\u5E73\u53F0\u6536\u8D39\u70ED\u64AD\u72EC\u64AD\u5F71\u89C6\u4F5C\u54C1\uFF1B\u7981\u6B62\u5206\u4EAB\u6B63\u5728\u70ED\u64AD\u6216\u8005\u4E0A\u6620\u4E0D\u8DB3 3 \u4E2A\u6708\u5F71\u89C6\u4F5C\u54C1\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "mianze-text",
          children: "3\u3001\u672C\u7AD9\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u8D44\u6E90\u4E0B\u8F7D\u670D\u52A1\uFF0C\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u8D44\u6E90\u5B58\u50A8\u670D\u52A1\uFF0C\u4E0D\u63D0\u4F9B\u4EFB\u4F55\u8D44\u6E90\u4E0A\u4F20\u670D\u52A1\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "mianze-text",
          children: "4\u3001\u672C\u6587\u5185\u6240\u6709\u94FE\u63A5\u6307\u5411\u7684\u4E91\u76D8\u7F51\u76D8\u8D44\u6E90\uFF0C\u5176\u7248\u6743\u5F52\u7248\u6743\u65B9\u6240\u6709\uFF01\u5176\u5B9E\u9645\u7BA1\u7406\u6743\u4E3A\u5206\u4EAB\u8005\u6240\u6709\uFF0C\u672C\u7AD9\u65E0\u6CD5\u64CD\u4F5C\u76F8\u5173\u8D44\u6E90\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "mianze-text",
          children: "5\u3001\u672C\u7AD9\u4E0D\u5BF9\u4EFB\u4F55\u8D44\u6E90\u7684\u5408\u6CD5\u6027\u3001\u771F\u5B9E\u6027\u3001\u6709\u6548\u6027\u3001\u5B89\u5168\u6027\u3001\u51C6\u786E\u6027\u3001\u5B8C\u6574\u6027\u3001\u53EF\u9760\u6027\u3001\u9002\u7528\u6027\u3001\u5408\u6CD5\u6027\u3001\u7248\u6743\u6027\u7B49\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F\u7684\u4FDD\u8BC1\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "mianze-text",
          children: "6\u3001\u672C\u7AD9\u4E0D\u5BF9\u4EFB\u4F55\u8D44\u6E90\u7684\u4E0B\u8F7D\u3001\u4F7F\u7528\u3001\u4F20\u64AD\u3001\u590D\u5236\u3001\u8F6C\u8F7D\u3001\u5206\u4EAB\u7B49\u884C\u4E3A\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "mianze-text",
          children: ["7\u3001\u5982\u60A8\u8BA4\u4E3A\u672C\u7AD9\u4EFB\u4F55\u4ECB\u7ECD\u5E16\u4FB5\u72AF\u4E86\u60A8\u7684\u5408\u6CD5\u7248\u6743\uFF0C\u8BF7\u70B9\u51FB", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
            className: "complaint-btn",
            onClick: onComplaint,
            children: "\u7248\u6743\u6295\u8BC9"
          }), ' ', "\u8FDB\u884C\u6295\u8BC9\uFF0C\u6211\u4EEC\u5C06\u5728\u786E\u8BA4\u672C\u6587\u94FE\u63A5\u6307\u5411\u7684\u8D44\u6E90\u5B58\u5728\u4FB5\u6743\u540E\uFF0C\u7ACB\u5373\u5220\u9664\u76F8\u5173\u4ECB\u7ECD\u5E16\u5B50\uFF01"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: "ad",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("ad", {
          "unit-id": "adunit-a51bed72a19360d9",
          "ad-type": "video",
          "ad-theme": "white"
        })
      }), (downloadUrl === null || downloadUrl === void 0 ? void 0 : downloadUrl.length) === 0 ? '' : showDownloadDetail ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        children: downloadUrl === null || downloadUrl === void 0 ? void 0 : downloadUrl.map(function (item, index) {
          var _downLoadInfo$item$do;
          var url = item.url,
            password = item.password,
            decompressionPassword = item.decompressionPassword;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(taro_ui__WEBPACK_IMPORTED_MODULE_3__.AtCard, {
            className: "".concat(prefix, "__url-card"),
            note: "\u70B9\u51FB\u590D\u5236\u5230\u6D4F\u89C8\u5668\u6253\u5F00",
            extra: (_downLoadInfo$item$do = downLoadInfo[item.downloadType]) === null || _downLoadInfo$item$do === void 0 ? void 0 : _downLoadInfo$item$do.name,
            title: "\u4E0B\u8F7D\u94FE\u63A5".concat(downloadUrl.length > 1 ? index + 1 : ''),
            onClick: function onClick() {
              (0,_utils__WEBPACK_IMPORTED_MODULE_2__.copy)(url);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: "".concat(prefix, "__url-card__text url"),
              "user-select": true,
              children: url
            }), password && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: "".concat(prefix, "__url-card__text"),
              "user-select": true,
              children: ["\u7F51\u76D8\u5BC6\u7801\uFF1A", password]
            }), decompressionPassword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
              className: "".concat(prefix, "__url-card__text"),
              "user-select": true,
              children: ["\u89E3\u538B\u5BC6\u7801\uFF1A", decompressionPassword]
            }), "r"]
          }, index);
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_3__.AtButton, {
        className: "".concat(prefix, "__get-url-btn"),
        type: "primary",
        onClick: onGetUrl,
        children: "\u70B9\u51FB\u83B7\u53D6\u4E0B\u8F7D\u5730\u5740"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
      className: "".concat(prefix, "__footer"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: "".concat(prefix, "__footer-left"),
        children: showTop && top === 1 && '置顶'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
        className: "".concat(prefix, "__footer-right"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "".concat(prefix, "__footer-item"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
            src: _assets_community_imgs_view_png__WEBPACK_IMPORTED_MODULE_7__,
            className: "view-icon",
            mode: "widthFix"
          }), viewCount]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "".concat(prefix, "__footer-item"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
            src: _assets_community_imgs_comment_png__WEBPACK_IMPORTED_MODULE_5__,
            mode: "widthFix"
          }), commentCount]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "".concat(prefix, "__footer-item"),
          onClick: onLikeClick,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
            src: localIsLike ? _assets_community_imgs_like_selected_png__WEBPACK_IMPORTED_MODULE_8__ : _assets_community_imgs_like_png__WEBPACK_IMPORTED_MODULE_6__,
            mode: "widthFix"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
            className: localIsLike ? 'red-text' : '',
            children: localIsLikeCount
          })]
        })]
      })]
    }), showHotComments && hotComments.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
      className: "".concat(prefix, "__comment-list"),
      children: hotComments.map(function (item) {
        var _item$from;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
          className: "".concat(prefix, "__comment-list__item"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Text, {
            className: "blue-text",
            children: ["@", (_item$from = item.from) === null || _item$from === void 0 || (_item$from = _item$from.userInfo) === null || _item$from === void 0 ? void 0 : _item$from.customName, ":", ' ']
          }), item.content]
        }, item._id);
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/resource-item/index.ts":
/*!***********************************************!*\
  !*** ./src/components/resource-item/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceTag": function() { return /* reexport safe */ _ResourceItem__WEBPACK_IMPORTED_MODULE_0__.ResourceTag; },
/* harmony export */   "default": function() { return /* reexport safe */ _ResourceItem__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "resourceInfo": function() { return /* reexport safe */ _ResourceItem__WEBPACK_IMPORTED_MODULE_0__.resourceInfo; }
/* harmony export */ });
/* harmony import */ var _ResourceItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceItem */ "./src/components/resource-item/ResourceItem.tsx");



/***/ }),

/***/ "./src/components/wxml2canvas/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/wxml2canvas/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Wxml2canvas; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_xml_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/xml-parser */ "./src/components/wxml2canvas/utils/xml-parser.js");
/* harmony import */ var _utils_xml_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_xml_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/widget */ "./src/components/wxml2canvas/utils/widget.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/draw */ "./src/components/wxml2canvas/utils/draw.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);










// import cn from 'classnames'
// import loadingImg from './res/loading.gif'





var Wxml2canvas = /*#__PURE__*/function (_Component) {
  function Wxml2canvas() {
    var _this;
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Wxml2canvas);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Wxml2canvas, [].concat(args));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "state", {
      imageSrc: ''
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "initCtx", void 0);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "dpr", void 0);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "ctx", void 0);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "canvas", void 0);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "boundary", void 0);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "initCanvas", /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee() {
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setTimeout(function () {
              var dpr = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync().pixelRatio;
              var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createSelectorQuery();
              _this.dpr = dpr;
              query.select('#wxml2canvas').fields({
                node: true,
                size: true
              }).exec(function (res) {
                var canvas = res[0].node;
                var ctx = canvas.getContext('2d');
                // const ctx = wx.createCanvasContext('canvas', this)
                canvas.width = res[0].width * dpr;
                canvas.height = res[0].height * dpr;
                // console.log(canvas.width, canvas.height, canvas)
                ctx.scale(dpr, dpr);
                _this.ctx = ctx;
                _this.canvas = canvas;
                _this.renderToCanvas();
              });
            }, 300);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "renderToCanvas", /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee2() {
      var _this$props, wxml, style, ctx, canvas, _xmlParse, xom, widget, container, draw;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _this$props = _this.props, wxml = _this$props.wxml, style = _this$props.style; // 清空画布
            ctx = _this.ctx;
            canvas = _this.canvas;
            if (!(!ctx || !canvas)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", Promise.reject(new Error('renderToCanvas: fail canvas has not been created')));
          case 5:
            ctx.clearRect(0, 0, 750, 1500);
            _xmlParse = _utils_xml_parser__WEBPACK_IMPORTED_MODULE_2___default()(wxml), xom = _xmlParse.root;
            widget = new _utils_widget__WEBPACK_IMPORTED_MODULE_3__["default"](xom, style);
            container = widget.init();
            _this.boundary = {
              top: container.layoutBox.top,
              left: container.layoutBox.left,
              width: container.computedStyle.width,
              height: container.computedStyle.height
            };
            draw = new _utils_draw__WEBPACK_IMPORTED_MODULE_10__["default"](canvas, ctx);
            _context2.next = 13;
            return draw.drawNode(container);
          case 13:
            _this.canvasToTempFilePath().then(function (tempFilePath) {
              _this.setState({
                imageSrc: tempFilePath
              });
              _this.props.onImageLoaded(tempFilePath);
            });
            return _context2.abrupt("return", Promise.resolve(container));
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "canvasToTempFilePath", function () {
      var fileType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'png';
      var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return new Promise(function (resolve, reject) {
        var _this$boundary = _this.boundary,
          top = _this$boundary.top,
          left = _this$boundary.left,
          width = _this$boundary.width,
          height = _this$boundary.height;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().canvasToTempFilePath({
          canvasId: '#wxml2canvas',
          x: left,
          y: top,
          width: width,
          height: height,
          destWidth: width * _this.dpr,
          destHeight: height * _this.dpr,
          canvas: _this.canvas,
          fileType: fileType,
          quality: quality,
          success: function success(res) {
            return resolve(res.tempFilePath);
          },
          fail: reject
        });
      });
    });
    return _this;
  }
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Wxml2canvas, _Component);
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Wxml2canvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initCanvas();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        width = _this$props2.width,
        height = _this$props2.height;
      var imageSrc = this.state.imageSrc;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.View, {
        onClick: function onClick() {
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
            urls: [imageSrc]
          });
        },
        children: imageSrc ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Image, {
          className: "wxml2canvas__img",
          src: imageSrc,
          mode: "widthFix"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_13__.Canvas, {
          className: "wxml2canvas",
          id: "wxml2canvas",
          type: "2d",
          style: "width:".concat(width, ";height:").concat(height)
        })
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Wxml2canvas, "defaultProps", {
  width: '375px',
  height: '2000px'
});


/***/ }),

/***/ "./src/components/wxml2canvas/utils/draw.js":
/*!**************************************************!*\
  !*** ./src/components/wxml2canvas/utils/draw.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Draw; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");





var Draw = /*#__PURE__*/function () {
  function Draw(canvas, context) {
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Draw);
    this.canvas = canvas;
    this.ctx = context;
  }
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Draw, [{
    key: "roundRect",
    value: function roundRect(x, y, w, h, r) {
      var fill = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var stroke = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      if (r < 0) return;
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 3 / 2);
      ctx.arc(x + w - r, y + r, r, Math.PI * 3 / 2, 0);
      ctx.arc(x + w - r, y + h - r, r, 0, Math.PI / 2);
      ctx.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
      ctx.lineTo(x, y + r);
      if (stroke) ctx.stroke();
      if (fill) ctx.fill();
    }
  }, {
    key: "drawView",
    value: function drawView(box, style) {
      var ctx = this.ctx;
      var x = box.left,
        y = box.top,
        w = box.width,
        h = box.height;
      var _style$borderRadius = style.borderRadius,
        borderRadius = _style$borderRadius === void 0 ? 0 : _style$borderRadius,
        _style$borderWidth = style.borderWidth,
        borderWidth = _style$borderWidth === void 0 ? 0 : _style$borderWidth,
        borderColor = style.borderColor,
        _style$color = style.color,
        color = _style$color === void 0 ? '#000' : _style$color,
        _style$backgroundColo = style.backgroundColor,
        backgroundColor = _style$backgroundColo === void 0 ? 'transparent' : _style$backgroundColo;
      ctx.save();
      // 外环
      if (borderWidth > 0) {
        ctx.fillStyle = borderColor || color;
        this.roundRect(x, y, w, h, borderRadius);
      }

      // 内环
      ctx.fillStyle = backgroundColor;
      var innerWidth = w - 2 * borderWidth;
      var innerHeight = h - 2 * borderWidth;
      // console.log(innerWidth, innerHeight, '----')
      var innerRadius = borderRadius - borderWidth >= 0 ? borderRadius - borderWidth : 0;
      this.roundRect(x + borderWidth, y + borderWidth, innerWidth, innerHeight, innerRadius);
      ctx.restore();
    }
  }, {
    key: "drawImage",
    value: function () {
      var _drawImage = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee(img, box, style) {
        var _this = this;
        return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve, reject) {
                var ctx = _this.ctx;
                var canvas = _this.canvas;
                var _style$borderRadius2 = style.borderRadius,
                  borderRadius = _style$borderRadius2 === void 0 ? 0 : _style$borderRadius2;
                var x = box.left,
                  y = box.top,
                  w = box.width,
                  h = box.height;
                ctx.save();
                _this.roundRect(x, y, w, h, borderRadius, false, false);
                ctx.clip();
                var Image = canvas.createImage();
                Image.onload = function () {
                  ctx.drawImage(Image, x, y, w, h);
                  ctx.restore();
                  resolve();
                };
                Image.onerror = function (error) {
                  console.log(error);
                };
                Image.src = img;
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function drawImage(_x, _x2, _x3) {
        return _drawImage.apply(this, arguments);
      }
      return drawImage;
    }() // eslint-disable-next-line complexity
  }, {
    key: "drawText",
    value: function drawText(text, box, style) {
      var ctx = this.ctx;
      var x = box.left,
        y = box.top,
        w = box.width,
        h = box.height;
      var _style$color2 = style.color,
        color = _style$color2 === void 0 ? '#000' : _style$color2,
        _style$lineHeight = style.lineHeight,
        lineHeight = _style$lineHeight === void 0 ? '1.4em' : _style$lineHeight,
        _style$fontSize = style.fontSize,
        fontSize = _style$fontSize === void 0 ? 14 : _style$fontSize,
        _style$textAlign = style.textAlign,
        textAlign = _style$textAlign === void 0 ? 'left' : _style$textAlign,
        _style$verticalAlign = style.verticalAlign,
        verticalAlign = _style$verticalAlign === void 0 ? 'top' : _style$verticalAlign,
        _style$backgroundColo2 = style.backgroundColor,
        backgroundColor = _style$backgroundColo2 === void 0 ? 'transparent' : _style$backgroundColo2;
      if (!text || lineHeight > h) return;
      ctx.save();
      if (lineHeight) {
        // 2em
        lineHeight = Math.ceil(parseFloat(lineHeight.replace('em')) * fontSize);
      }
      ctx.textBaseline = 'top';
      ctx.font = "".concat(fontSize, "px sans-serif");
      ctx.textAlign = textAlign;

      // 背景色
      ctx.fillStyle = backgroundColor;
      this.roundRect(x, y, w, h, 0);

      // 文字颜色
      ctx.fillStyle = color;

      // 水平布局
      switch (textAlign) {
        case 'left':
          break;
        case 'center':
          x += 0.5 * w;
          break;
        case 'right':
          x += w;
          break;
        default:
          break;
      }
      var textWidth = ctx.measureText(text).width;
      var actualHeight = Math.ceil(textWidth / w) * lineHeight;
      var paddingTop = Math.ceil((h - actualHeight) / 2);
      if (paddingTop < 0) paddingTop = 0;

      // 垂直布局
      switch (verticalAlign) {
        case 'top':
          break;
        case 'middle':
          y += paddingTop;
          break;
        case 'bottom':
          y += 2 * paddingTop;
          break;
        default:
          break;
      }
      var inlinePaddingTop = Math.ceil((lineHeight - fontSize) / 2);

      // 不超过一行
      if (textWidth <= w) {
        ctx.fillText(text, x, y + inlinePaddingTop);
        return;
      }

      // 多行文本
      var chars = text.split('');
      var _y = y;

      // 逐行绘制
      var line = '';
      var _iterator = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(chars),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ch = _step.value;
          var testLine = line + ch;
          var testWidth = ctx.measureText(testLine).width;
          if (testWidth > w) {
            ctx.fillText(line, x, y + inlinePaddingTop);
            y += lineHeight;
            line = ch;
            if (y + lineHeight > _y + h) break;
          } else {
            line = testLine;
          }
        }

        // 避免溢出
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (y + lineHeight <= _y + h) {
        ctx.fillText(line, x, y + inlinePaddingTop);
      }
      ctx.restore();
    }
  }, {
    key: "drawNode",
    value: function () {
      var _drawNode = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2(element) {
        var layoutBox, computedStyle, name, _element$attributes, src, text, childs, _i, _childs, child;
        return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              layoutBox = element.layoutBox, computedStyle = element.computedStyle, name = element.name;
              _element$attributes = element.attributes, src = _element$attributes.src, text = _element$attributes.text;
              if (!(name === 'view')) {
                _context2.next = 6;
                break;
              }
              this.drawView(layoutBox, computedStyle);
              _context2.next = 12;
              break;
            case 6:
              if (!(name === 'image')) {
                _context2.next = 11;
                break;
              }
              _context2.next = 9;
              return this.drawImage(src, layoutBox, computedStyle);
            case 9:
              _context2.next = 12;
              break;
            case 11:
              if (name === 'text') {
                this.drawText(text, layoutBox, computedStyle);
              }
            case 12:
              childs = Object.values(element.children);
              _i = 0, _childs = childs;
            case 14:
              if (!(_i < _childs.length)) {
                _context2.next = 21;
                break;
              }
              child = _childs[_i];
              _context2.next = 18;
              return this.drawNode(child);
            case 18:
              _i++;
              _context2.next = 14;
              break;
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function drawNode(_x4) {
        return _drawNode.apply(this, arguments);
      }
      return drawNode;
    }()
  }]);
}();


/***/ }),

/***/ "./src/components/wxml2canvas/utils/utils.js":
/*!***************************************************!*\
  !*** ./src/components/wxml2canvas/utils/utils.js ***!
  \***************************************************/
/***/ (function(module) {

var hex = function hex(color) {
  var result = null;
  if (/^#/.test(color) && (color.length === 7 || color.length === 9)) {
    return color;
    // eslint-disable-next-line no-cond-assign
  } else if ((result = /^(rgb|rgba)\((.+)\)/.exec(color)) !== null) {
    return '#' + result[2].split(',').map(function (part, index) {
      part = part.trim();
      part = index === 3 ? Math.floor(parseFloat(part) * 255) : parseInt(part, 10);
      part = part.toString(16);
      if (part.length === 1) {
        part = '0' + part;
      }
      return part;
    }).join('');
  } else {
    return '#00000000';
  }
};
var splitLineToCamelCase = function splitLineToCamelCase(str) {
  return str.split('-').map(function (part, index) {
    if (index === 0) {
      return part;
    }
    return part[0].toUpperCase() + part.slice(1);
  }).join('');
};
module.exports = {
  hex: hex,
  splitLineToCamelCase: splitLineToCamelCase
};

/***/ }),

/***/ "./src/components/wxml2canvas/utils/widget.js":
/*!****************************************************!*\
  !*** ./src/components/wxml2canvas/utils/widget.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Widget; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var widget_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widget-ui */ "webpack/container/remote/widget-ui");
/* harmony import */ var widget_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(widget_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/components/wxml2canvas/utils/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_1__);




// const {splitLineToCamelCase} = require('./utils')


var Element = /*#__PURE__*/function (_Block) {
  function Element(prop) {
    var _this;
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Element);
    _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Element, [prop.style]);
    _this.name = prop.name;
    _this.attributes = prop.attributes;
    return _this;
  }
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Element, _Block);
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Element);
}((widget_ui__WEBPACK_IMPORTED_MODULE_0___default()));
var Widget = /*#__PURE__*/function () {
  function Widget(xom, style) {
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Widget);
    this.xom = xom;
    this.style = style;
    this.inheritProps = ['fontSize', 'lineHeight', 'textAlign', 'verticalAlign', 'color'];
  }
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Widget, [{
    key: "init",
    value: function init() {
      this.container = this.create(this.xom);
      this.container.layout();
      this.inheritStyle(this.container);
      return this.container;
    }

    // 继承父节点的样式
  }, {
    key: "inheritStyle",
    value: function inheritStyle(node) {
      var _this2 = this;
      var parent = node.parent || null;
      var children = node.children || {};
      var computedStyle = node.computedStyle;
      if (parent) {
        this.inheritProps.forEach(function (prop) {
          computedStyle[prop] = computedStyle[prop] || parent.computedStyle[prop];
        });
      }
      Object.values(children).forEach(function (child) {
        _this2.inheritStyle(child);
      });
    }
  }, {
    key: "create",
    value: function create(node) {
      var _this3 = this;
      var classNames = (node.attributes.class || '').split(' ');
      classNames = classNames.map(function (item) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.splitLineToCamelCase)(item.trim());
      });
      var style = {};
      classNames.forEach(function (item) {
        Object.assign(style, _this3.style[item] || {});
      });
      var args = {
        name: node.name,
        style: style
      };
      var attrs = Object.keys(node.attributes);
      var attributes = {};
      for (var _i = 0, _attrs = attrs; _i < _attrs.length; _i++) {
        var attr = _attrs[_i];
        var value = node.attributes[attr];
        var CamelAttr = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.splitLineToCamelCase)(attr);
        if (value === '' || value === 'true') {
          attributes[CamelAttr] = true;
        } else if (value === 'false') {
          attributes[CamelAttr] = false;
        } else {
          attributes[CamelAttr] = value;
        }
      }
      attributes.text = node.content;
      args.attributes = attributes;
      var element = new Element(args);
      node.children.forEach(function (childNode) {
        var childElement = _this3.create(childNode);
        element.add(childElement);
      });
      return element;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/wxml2canvas/utils/xml-parser.js":
/*!********************************************************!*\
  !*** ./src/components/wxml2canvas/utils/xml-parser.js ***!
  \********************************************************/
/***/ (function(module) {

/**
 * Module dependencies.
 */

/**
 * Expose `parse`.
 */

/**
 * Parse the given string of `xml`.
 *
 * @param {String} xml
 * @return {Object}
 * @api public
 */

function parse(xml) {
  xml = xml.trim();

  // strip comments
  xml = xml.replace(/<!--[\s\S]*?-->/g, '');
  return document();

  /**
   * XML document.
   */

  function document() {
    return {
      declaration: declaration(),
      root: tag()
    };
  }

  /**
   * Declaration.
   */

  function declaration() {
    var m = match(/^<\?xml\s*/);
    if (!m) return;

    // tag
    var node = {
      attributes: {}
    };

    // attributes
    while (!(eos() || is('?>'))) {
      var attr = attribute();
      if (!attr) return node;
      node.attributes[attr.name] = attr.value;
    }
    match(/\?>\s*/);
    return node;
  }

  /**
   * Tag.
   */

  function tag() {
    var m = match(/^<([\w-:.]+)\s*/);
    if (!m) return;

    // name
    var node = {
      name: m[1],
      attributes: {},
      children: []
    };

    // attributes
    while (!(eos() || is('>') || is('?>') || is('/>'))) {
      var attr = attribute();
      if (!attr) return node;
      node.attributes[attr.name] = attr.value;
    }

    // self closing tag
    if (match(/^\s*\/>\s*/)) {
      return node;
    }
    match(/\??>\s*/);

    // content
    node.content = content();

    // children
    var child;
    while (child = tag()) {
      node.children.push(child);
    }

    // closing
    match(/^<\/[\w-:.]+>\s*/);
    return node;
  }

  /**
   * Text content.
   */

  function content() {
    var m = match(/^([^<]*)/);
    if (m) return m[1];
    return '';
  }

  /**
   * Attribute.
   */

  function attribute() {
    var m = match(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);
    if (!m) return;
    return {
      name: m[1],
      value: strip(m[2])
    };
  }

  /**
   * Strip quotes from `val`.
   */

  function strip(val) {
    return val.replace(/^['"]|['"]$/g, '');
  }

  /**
   * Match `re` and advance the string.
   */

  function match(re) {
    var m = xml.match(re);
    if (!m) return;
    xml = xml.slice(m[0].length);
    return m;
  }

  /**
   * End-of-source.
   */

  function eos() {
    return xml.length == 0;
  }

  /**
   * Check for `prefix`.
   */

  function is(prefix) {
    return xml.indexOf(prefix) == 0;
  }
}
module.exports = parse;

/***/ }),

/***/ "./src/redux/actions/common.ts":
/*!*************************************!*\
  !*** ./src/redux/actions/common.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_HOME_BANNER": function() { return /* binding */ GET_HOME_BANNER; },
/* harmony export */   "GET_NEWS": function() { return /* binding */ GET_NEWS; },
/* harmony export */   "UPDATE_CLASSROOMS": function() { return /* binding */ UPDATE_CLASSROOMS; },
/* harmony export */   "getBanner": function() { return /* binding */ getBanner; },
/* harmony export */   "getNews": function() { return /* binding */ getNews; },
/* harmony export */   "updateClassrooms": function() { return /* binding */ updateClassrooms; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/common */ "./src/services/common.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");





var GET_HOME_BANNER = 'common/GET_HOME_BANNER';
var GET_NEWS = 'common/GET_NEWS';
var UPDATE_CLASSROOMS = 'common/UPDATE_CLASSROOMS';
var getBanner = function getBanner() {
  return /*#__PURE__*/function () {
    var _ref = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee(dispatch) {
      var _yield$cError, _yield$cError2, error, res;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.cError)((0,_services_common__WEBPACK_IMPORTED_MODULE_0__.banner)());
          case 2:
            _yield$cError = _context.sent;
            _yield$cError2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_yield$cError, 2);
            error = _yield$cError2[0];
            res = _yield$cError2[1];
            console.log(res);
            if (!error) {
              dispatch({
                type: GET_HOME_BANNER,
                data: res.data
              });
            }
            return _context.abrupt("return", res);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var getNews = function getNews(data) {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().mark(function _callee2(dispatch) {
      var _yield$cError3, _yield$cError4, err, res;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_3__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.cError)((0,_services_common__WEBPACK_IMPORTED_MODULE_0__.news)(data));
          case 2:
            _yield$cError3 = _context2.sent;
            _yield$cError4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_yield$cError3, 2);
            err = _yield$cError4[0];
            res = _yield$cError4[1];
            if (!err) {
              dispatch({
                type: GET_NEWS,
                data: res.data,
                page: data.page
              });
            }
            return _context2.abrupt("return", res);
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var updateClassrooms = function updateClassrooms(list) {
  return {
    type: UPDATE_CLASSROOMS,
    data: list
  };
};

/***/ }),

/***/ "./src/redux/actions/global.ts":
/*!*************************************!*\
  !*** ./src/redux/actions/global.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "START_LOADING": function() { return /* binding */ START_LOADING; },
/* harmony export */   "STOP_LOADING": function() { return /* binding */ STOP_LOADING; },
/* harmony export */   "startLoading": function() { return /* binding */ startLoading; },
/* harmony export */   "stopLoading": function() { return /* binding */ stopLoading; }
/* harmony export */ });
var START_LOADING = 'global/START_LOADING';
var STOP_LOADING = 'global/STOP_LOADING';
var startLoading = function startLoading() {
  return {
    type: START_LOADING
  };
};
var stopLoading = function stopLoading() {
  return {
    type: STOP_LOADING
  };
};

/***/ }),

/***/ "./src/redux/actions/user.ts":
/*!***********************************!*\
  !*** ./src/redux/actions/user.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_EXAMS": function() { return /* binding */ GET_EXAMS; },
/* harmony export */   "GET_GRADES": function() { return /* binding */ GET_GRADES; },
/* harmony export */   "LOGOUT": function() { return /* binding */ LOGOUT; },
/* harmony export */   "SET_CURRENT_TERM": function() { return /* binding */ SET_CURRENT_TERM; },
/* harmony export */   "SET_UNREAD_COUNT": function() { return /* binding */ SET_UNREAD_COUNT; },
/* harmony export */   "UPDATE_CONFIG": function() { return /* binding */ UPDATE_CONFIG; },
/* harmony export */   "UPDATE_USERINFO": function() { return /* binding */ UPDATE_USERINFO; },
/* harmony export */   "UPDATE_USERINFO_PROMISE": function() { return /* binding */ UPDATE_USERINFO_PROMISE; },
/* harmony export */   "getExams": function() { return /* binding */ getExams; },
/* harmony export */   "getGrades": function() { return /* binding */ getGrades; },
/* harmony export */   "getUnreadCount": function() { return /* binding */ getUnreadCount; },
/* harmony export */   "init": function() { return /* binding */ init; },
/* harmony export */   "logout": function() { return /* binding */ logout; },
/* harmony export */   "setCurrentTerm": function() { return /* binding */ setCurrentTerm; },
/* harmony export */   "stopGetUnreadCount": function() { return /* binding */ stopGetUnreadCount; },
/* harmony export */   "updateUserInfo": function() { return /* binding */ updateUserInfo; }
/* harmony export */ });
/* unused harmony export initHandler */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.ts");
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/user */ "./src/services/user.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global */ "./src/redux/actions/global.ts");








var UPDATE_USERINFO = 'user/UPDATE_USERINFO';
var LOGOUT = 'user/LOGOUT';
var GET_EXAMS = 'user/GET_EXAMS';
var GET_GRADES = 'user/GET_GRADES';
var SET_CURRENT_TERM = 'user/SET_CURRENT_TERM';
var UPDATE_USERINFO_PROMISE = 'user/UPDATE_USERINFO_PROMISE';
var SET_UNREAD_COUNT = 'user/SET_UNREAD_COUNT';
var UPDATE_CONFIG = 'user/UPDATE_CONFIG';
var setCurrentTerm = function setCurrentTerm(term) {
  return {
    type: SET_CURRENT_TERM,
    data: term
  };
};

// 检查session_key是否失效
var checkSession = function checkSession() {
  return new Promise(function (resolve) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().checkSession({
      success: function success() {
        resolve(true);
      },
      fail: function fail() {
        resolve(false);
      }
    });
  });
};

// 登录处理
var login = function login() {
  return new Promise(function (resolve, reject) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login({
      success: function () {
        var _success = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee(loginRes) {
          var _yield$withRequest, _yield$withRequest2, err;
          return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.UserApi.apiUserWxAuthPost)({
                  code: loginRes.code
                });
              case 2:
                _yield$withRequest = _context.sent;
                _yield$withRequest2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_yield$withRequest, 1);
                err = _yield$withRequest2[0];
                if (err) {
                  _context.next = 8;
                  break;
                }
                resolve('');
                return _context.abrupt("return");
              case 8:
                reject(new Error('登录失败！' + loginRes.errMsg || 0));
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function success(_x) {
          return _success.apply(this, arguments);
        }
        return success;
      }(),
      fail: function fail() {
        reject(new Error('登录失败！'));
      }
    });
  });
};

// 获取用户信息处理
// const getUserInfo = (cb) => {
//   // if (this.globalData.userInfo) {
//   //   return Promise.resolve(this.globalData.userInfo)
//   // }
//   return new Promise((resolve, reject) => {
//     Taro.getUserInfo({
//       withCredentials: true,
//       success(res) {
//         resolve(res)
//       },
//       fail(e) {
//         reject(e)
//       }
//     })
//   })
// }

// export const setLoading = createAction(SET_LOADING, loading => loading)

var initHandler = /*#__PURE__*/function () {
  var _ref = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee2(dispatch) {
    var _res, _yield$withRequest3, _yield$withRequest4, err, res, session, _yield$withRequest5, _yield$withRequest6, data, _yield$withRequest7, _yield$withRequest8, configErr, configRes, _res2;
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          dispatch((0,_global__WEBPACK_IMPORTED_MODULE_7__.startLoading)());
          _context2.prev = 1;
          _context2.next = 4;
          return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.UserApi.apiUserGet)({});
        case 4:
          _yield$withRequest3 = _context2.sent;
          _yield$withRequest4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_yield$withRequest3, 2);
          err = _yield$withRequest4[0];
          res = _yield$withRequest4[1];
          _context2.next = 10;
          return checkSession();
        case 10:
          session = _context2.sent;
          if (!(err || !session)) {
            _context2.next = 19;
            break;
          }
          _context2.next = 14;
          return login();
        case 14:
          _context2.next = 16;
          return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.UserApi.apiUserGet)({});
        case 16:
          _yield$withRequest5 = _context2.sent;
          _yield$withRequest6 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_yield$withRequest5, 2);
          res = _yield$withRequest6[1];
        case 19:
          data = {
            // 判断是否有用户名
            isWechatLogin: !!((_res = res) !== null && _res !== void 0 && (_res = _res.userInfo) !== null && _res !== void 0 && _res.nickName)
          };
          _context2.next = 22;
          return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.ConfigApi.apiConfigGet)({
            key: 'global'
          });
        case 22:
          _yield$withRequest7 = _context2.sent;
          _yield$withRequest8 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_yield$withRequest7, 2);
          configErr = _yield$withRequest8[0];
          configRes = _yield$withRequest8[1];
          if (!configErr && configRes) {
            dispatch({
              type: UPDATE_CONFIG,
              data: {
                global: configRes
              }
            });
          }
          if (data.isWechatLogin) {
            data.userInfo = (_res2 = res) === null || _res2 === void 0 ? void 0 : _res2.userInfo;
            dispatch({
              type: UPDATE_USERINFO,
              data: data
            });

            // 获取学生信息 异步
            (0,_services_user__WEBPACK_IMPORTED_MODULE_3__.userInfo)().then(function (studentInfoRes) {
              var studentInfo = studentInfoRes.data.studentInfo || {};
              dispatch({
                type: UPDATE_USERINFO,
                data: {
                  isLogin: !!(studentInfoRes.data.isLogin && studentInfo && studentInfo.username),
                  studentInfo: studentInfo
                }
              });
            });
          }
          dispatch((0,_global__WEBPACK_IMPORTED_MODULE_7__.stopLoading)());
          _context2.next = 35;
          break;
        case 31:
          _context2.prev = 31;
          _context2.t0 = _context2["catch"](1);
          dispatch((0,_global__WEBPACK_IMPORTED_MODULE_7__.stopLoading)());
          return _context2.abrupt("return", Promise.resolve());
        case 35:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 31]]);
  }));
  return function initHandler(_x2) {
    return _ref.apply(this, arguments);
  };
}();
var updateUserInfo = function updateUserInfo(data) {
  return /*#__PURE__*/function () {
    var _ref2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee3(dispatch) {
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            dispatch({
              type: UPDATE_USERINFO,
              data: data
            });
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var init = function init() {
  return /*#__PURE__*/function () {
    var _ref3 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee4(dispatch) {
      var getUserInfoPromise;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            getUserInfoPromise = initHandler(dispatch);
            dispatch({
              type: UPDATE_USERINFO_PROMISE,
              data: getUserInfoPromise
            });
            _context4.next = 4;
            return getUserInfoPromise;
          case 4:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var logout = function logout() {
  return /*#__PURE__*/function () {
    var _ref4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee5(dispatch) {
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0,_services_user__WEBPACK_IMPORTED_MODULE_3__.logout)();
          case 2:
            dispatch({
              type: LOGOUT
            });
          case 3:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var getExams = function getExams() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }
  return /*#__PURE__*/function () {
    var _ref5 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee6(dispatch) {
      var res, list;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _services_user__WEBPACK_IMPORTED_MODULE_3__.exams.apply(void 0, data);
          case 2:
            res = _context6.sent;
            list = (res === null || res === void 0 ? void 0 : res.data) || [];
            dispatch({
              type: GET_EXAMS,
              data: list,
              page: data[0] || 1
            });
            return _context6.abrupt("return", res);
          case 6:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var getGrades = function getGrades() {
  for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    data[_key2] = arguments[_key2];
  }
  return /*#__PURE__*/function () {
    var _ref6 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee7(dispatch) {
      var res;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _services_user__WEBPACK_IMPORTED_MODULE_3__.grades.apply(void 0, data);
          case 2:
            res = _context7.sent;
            dispatch({
              type: GET_GRADES,
              data: res.data
            });
            return _context7.abrupt("return", res);
          case 5:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref6.apply(this, arguments);
    };
  }();
};
var unReadCounterTimer;
/**
 * 停止轮询
 */
var stopGetUnreadCount = function stopGetUnreadCount() {
  clearInterval(unReadCounterTimer);
};

/**
 * 轮询获取未读消息数
 * @returns
 */
var getUnreadCount = function getUnreadCount() {
  return /*#__PURE__*/function () {
    var _ref7 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee9(dispatch) {
      var handler;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            unReadCounterTimer && stopGetUnreadCount();
            handler = /*#__PURE__*/function () {
              var _ref8 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee8() {
                var _yield$withRequest9, _yield$withRequest10, err, res;
                return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return (0,_utils_request__WEBPACK_IMPORTED_MODULE_1__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.MessageApi.apiMessageUnreadcountGet, false)();
                    case 2:
                      _yield$withRequest9 = _context8.sent;
                      _yield$withRequest10 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_yield$withRequest9, 2);
                      err = _yield$withRequest10[0];
                      res = _yield$withRequest10[1];
                      if (!err) {
                        _context8.next = 8;
                        break;
                      }
                      return _context8.abrupt("return");
                    case 8:
                      dispatch({
                        type: SET_UNREAD_COUNT,
                        data: (res === null || res === void 0 ? void 0 : res.unreadCount) || 0
                      });
                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }));
              return function handler() {
                return _ref8.apply(this, arguments);
              };
            }();
            handler();
            // 轮询 每半分钟拉取一次
            unReadCounterTimer = setInterval(handler, 30 * 1000);
          case 4:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return function (_x8) {
      return _ref7.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/redux/reducers/common.ts":
/*!**************************************!*\
  !*** ./src/redux/reducers/common.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ common; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _actions_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/common */ "./src/redux/actions/common.ts");



var INITIAL_STATE = {
  banners: [],
  news: [],
  classrooms: []
};
function common() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_common__WEBPACK_IMPORTED_MODULE_0__.GET_HOME_BANNER:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        banners: action.data
      });
    case _actions_common__WEBPACK_IMPORTED_MODULE_0__.GET_NEWS:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        news: action.page === 1 ? action.data : [].concat((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(state.news), (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(action.data))
      });
    case _actions_common__WEBPACK_IMPORTED_MODULE_0__.UPDATE_CLASSROOMS:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        classrooms: action.data || []
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/global.ts":
/*!**************************************!*\
  !*** ./src/redux/reducers/global.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ global; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _actions_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/global */ "./src/redux/actions/global.ts");


var INITIAL_STATE = {
  loading: true
};
function global() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_global__WEBPACK_IMPORTED_MODULE_0__.START_LOADING:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        loading: true
      });
    case _actions_global__WEBPACK_IMPORTED_MODULE_0__.STOP_LOADING:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state), {}, {
        loading: false
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export reducerMap */
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/redux/reducers/user.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/redux/reducers/common.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/redux/reducers/global.ts");




var reducerMap = {
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  common: _common__WEBPACK_IMPORTED_MODULE_2__["default"],
  global: _global__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducerMap));

/***/ }),

/***/ "./src/redux/reducers/user.ts":
/*!************************************!*\
  !*** ./src/redux/reducers/user.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ user; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user */ "./src/redux/actions/user.ts");




var studentInfo = JSON.parse(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('studentInfo') || '{}');
var currentTerm = 0;
if (studentInfo.username) {
  console.log(studentInfo.username, 'studentInfo.username');
  var courseData = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("course:".concat(studentInfo.username));
  currentTerm = courseData.term;
}
var INITIAL_STATE = {
  isWechatLogin: false,
  getUserInfoPromise: undefined,
  isLogin: false,
  studentInfo: (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
    name: '',
    username: ''
  }, studentInfo),
  exams: [],
  grades: {
    grades: []
  },
  currentTerm: currentTerm,
  userInfo: {
    avatarUrl: '',
    city: '',
    country: '',
    gender: 0,
    language: 'zh_CN',
    nickName: '',
    province: '',
    customAvatarUrl: {
      checkCode: 1,
      key: '',
      status: 0
    },
    customName: ''
  },
  unreadCount: 0,
  config: {}
};
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.UPDATE_USERINFO:
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
        key: 'studentInfo',
        data: JSON.stringify(action.data.studentInfo || {})
      });
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), action.data);
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.UPDATE_USERINFO_PROMISE:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
        getUserInfoPromise: action.data
      });
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.UPDATE_CONFIG:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
        config: (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.config), action.data)
      });
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.SET_UNREAD_COUNT:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
        unreadCount: action.data
      });
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.LOGOUT:
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync('studentInfo');
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
        isLogin: false,
        studentInfo: {
          name: '',
          username: ''
        }
      });
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.GET_EXAMS:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
        exams: action.page === 1 ? action.data : [].concat((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(state.exams), (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(action.data))
      });
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.GET_GRADES:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
        grades: action.data
      });
    case _actions_user__WEBPACK_IMPORTED_MODULE_1__.SET_CURRENT_TERM:
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state), {}, {
        currentTerm: action.data
      });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store/index.ts":
/*!**********************************!*\
  !*** ./src/redux/store/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "webpack/container/remote/redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/redux/reducers/index.ts");



var middlewares = [(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())];
if (true) {
  middlewares.push((__webpack_require__(/*! redux-logger */ "webpack/container/remote/redux-logger").createLogger)());
}
function configStore() {
  if (true) {
    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()), (__webpack_require__(/*! redux-logger */ "webpack/container/remote/redux-logger").createLogger)()));
  }
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));
}
var store = configStore();

/***/ }),

/***/ "./src/services/common.ts":
/*!********************************!*\
  !*** ./src/services/common.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "banner": function() { return /* binding */ banner; },
/* harmony export */   "news": function() { return /* binding */ news; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.ts");


// 微信登录
var banner = function banner() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/banner'
  });
};

// 获取教务公告
var news = function news(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/news',
    data: data
  });
};

/***/ }),

/***/ "./src/services/pdd.ts":
/*!*****************************!*\
  !*** ./src/services/pdd.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateGoods": function() { return /* binding */ generateGoods; },
/* harmony export */   "getChannel": function() { return /* binding */ getChannel; },
/* harmony export */   "getKeywords": function() { return /* binding */ getKeywords; },
/* harmony export */   "pddSearch": function() { return /* binding */ pddSearch; }
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.ts");


// 获取拼多多商品
var pddSearch = function pddSearch() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/pdd/search',
    data: data
  });
};

// 获取拼多多商品
var getKeywords = function getKeywords() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/pdd/keywords'
  });
};
var generateGoods = function generateGoods() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/pdd/generateGoods',
    data: data
  });
};
var getChannel = function getChannel() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/pdd/channel'
  });
};

/***/ }),

/***/ "./src/services/user.ts":
/*!******************************!*\
  !*** ./src/services/user.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exams": function() { return /* binding */ exams; },
/* harmony export */   "getCaptcha": function() { return /* binding */ getCaptcha; },
/* harmony export */   "grades": function() { return /* binding */ grades; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "logout": function() { return /* binding */ logout; },
/* harmony export */   "userInfo": function() { return /* binding */ userInfo; }
/* harmony export */ });
/* unused harmony export wxLogin */
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.ts");


// 微信登录
var wxLogin = function wxLogin(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/user/wx-login',
    interceptTokenError: false,
    data: data
  });
};
var login = function login(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hrbust/login',
    data: data
  });
};

// 登出
var logout = function logout() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hrbust/logout'
  });
};

// 获取用户信息
var userInfo = function userInfo() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/user/userinfo'
  });
};

// 获取用户考试信息
var exams = function exams() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var captcha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hrbust/exam',
    data: {
      page: page,
      captcha: captcha
    }
  });
};
var grades = function grades(year, term, captcha) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hrbust/grade',
    data: {
      year: year,
      term: term,
      captcha: captcha
    }
  });
};
var getCaptcha = function getCaptcha() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hrbust/captcha'
  });
};

/***/ }),

/***/ "./src/services2/api/CommentApi.ts":
/*!*****************************************!*\
  !*** ./src/services2/api/CommentApi.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommentApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * @description apiCommentBrickIdGet参数
  * @property `id` 请求参数 id
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * @description apiCommentCommentIdGet参数
  * @property `id` 请求参数 id
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * @description apiCommentIdDelete参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiCommentLikeIdPut参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiCommentMateIdGet参数
  * @property `id` 请求参数 id
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * request body
  */

/**
  * @description apiCommentResourceIdGet参数
  * @property `id` 请求参数 id
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

var CommentApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function CommentApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CommentApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 获取表白墙评论列表
   * @summary 获取表白墙评论列表
   * @param params ParamsapiCommentBrickIdGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2001
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiCommentBrickIdGet", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/comment/brick/".concat(id);
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取回复评论列表
   * @summary 获取回复评论列表
   * @param params ParamsapiCommentCommentIdGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2001
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiCommentCommentIdGet", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/comment/comment/".concat(id);
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 删除 评论
   * @summary 删除 评论
   * @param params ParamsapiCommentIdDelete
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiCommentIdDelete", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/comment/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'DELETE',
      url: url
    }, p));
  });
  /**
   * 点赞/取消 评论
   * @summary 点赞/取消 评论
   * @param params ParamsapiCommentLikeIdPut
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiCommentLikeIdPut", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/comment/like/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'PUT',
      url: url
    }, p));
  });
  /**
   * 获取卖舍友评论列表
   * @summary 获取卖舍友评论列表
   * @param params ParamsapiCommentMateIdGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2001
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiCommentMateIdGet", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/comment/mate/".concat(id);
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 新建评论
   * @summary 新建评论
   
   * @param data: ParamsBodyapiCommentPost// request body
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiCommentPost", function (data, opt) {
    var url = _this.$basePath + '/api/comment';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  /**
   * 获取资源评论列表
   * @summary 获取资源评论列表
   * @param params ParamsapiCommentResourceIdGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2001
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiCommentResourceIdGet", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/comment/resource/".concat(id);
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new CommentApi());

/***/ }),

/***/ "./src/services2/api/ConfigApi.ts":
/*!****************************************!*\
  !*** ./src/services2/api/ConfigApi.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfigApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * request body
  */

var ConfigApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function ConfigApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ConfigApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 获取配置
   * @summary 获取配置
   
   * @param data: ParamsBodyapiConfigGet// request body
   * @param opt ajax config
   * @returns models.InlineResponse2002
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiConfigGet", function (data, opt) {
    var url = _this.$basePath + '/api/config';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new ConfigApi());

/***/ }),

/***/ "./src/services2/api/MediaApi.ts":
/*!***************************************!*\
  !*** ./src/services2/api/MediaApi.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MediaApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");
/* provided dependency */ var FormData = __webpack_require__(/*! ./config/utils/formData */ "./config/utils/formData.js");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * request body
  */

/**
  * @description apiMediaPost参数
  * @property `file` file content
  */

/**
  * request body
  */

/**
  * request body
  */

var MediaApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function MediaApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MediaApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 确认开发者签名
   * @summary 确认开发者签名
   
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiLegalcheckGet", function (opt) {
    var url = _this.$basePath + '/api/legalcheck';
    var p = {};
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 微信审核回调
   * @summary 微信审核回调
   
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiLegalcheckPost", function (opt) {
    var url = _this.$basePath + '/api/legalcheck';
    var p = {};
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  /**
   * 图片对比，情侣脸识别
   * @summary 图片对比，情侣脸识别
   
   * @param data: ParamsBodyapiMediaComparefacePost// request body
   * @param opt ajax config
   * @returns models.InlineResponse2004
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiMediaComparefacePost", function (data, opt) {
    var url = _this.$basePath + '/api/media/compareface';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  /**
   * 上传文件
   * @summary 上传文件
   * @param params ParamsapiMediaPost
   * @param data: ParamsBodyapiMediaPost// request body
   * @param opt ajax config
   * @returns models.InlineResponse2003
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiMediaPost", function (params, data, opt) {
    var url = _this.$basePath + '/api/media';
    var p = {};
    p.form = new FormData();
    // 上传文件
    opt = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      headers: (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt && opt.headers), {}, {
        'Content-Type': 'multipart/form-data'
      })
    });
    // p.form = new FormData();
    if ('file' in params) p.form.append('file', params.file);
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.file, 'file');
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  /**
   * 通过抓取 url 上传文件
   * @summary 通过抓取 url 上传文件
   
   * @param data: ParamsBodyapiMediaUrlPost// request body
   * @param opt ajax config
   * @returns models.InlineResponse2003
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiMediaUrlPost", function (data, opt) {
    var url = _this.$basePath + '/api/media/url';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new MediaApi());

/***/ }),

/***/ "./src/services2/api/MessageApi.ts":
/*!*****************************************!*\
  !*** ./src/services2/api/MessageApi.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MessageApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * @description apiMessageListGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

var MessageApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function MessageApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MessageApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 获取消息列表
   * @summary 获取消息列表
   * @param params ParamsapiMessageListGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2005
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiMessageListGet", function (params, opt) {
    var url = _this.$basePath + '/api/message/list';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取用户未读消息数量
   * @summary 获取用户未读消息数量
   
   
   * @param opt ajax config
   * @returns models.InlineResponse2006
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiMessageUnreadcountGet", function (opt) {
    var url = _this.$basePath + '/api/message/unreadcount';
    var p = {};
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new MessageApi());

/***/ }),

/***/ "./src/services2/api/ResourceApi.ts":
/*!******************************************!*\
  !*** ./src/services2/api/ResourceApi.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ResourceApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * @description apiResourceIdGet参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiResourceLikeIdPut参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiResourceListGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[tag]` 标签
  */

/**
  * @description apiResourceListHotGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * @description apiResourceListLikeGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[id]` 请求参数 id
  */

/**
  * @description apiResourceListTopGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[tag]` 标签
  */

/**
  * @description apiResourceSearchGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[keyword]` 关键字
  */

var ResourceApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function ResourceApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ResourceApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 获取详情
   * @summary 获取详情
   * @param params ParamsapiResourceIdGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2008
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiResourceIdGet", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/resource/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 点赞/取消 资源
   * @summary 点赞/取消 资源
   * @param params ParamsapiResourceLikeIdPut
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiResourceLikeIdPut", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/resource/like/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'PUT',
      url: url
    }, p));
  });
  /**
   * 获取资源列表
   * @summary 获取资源列表
   * @param params ParamsapiResourceListGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2007
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiResourceListGet", function (params, opt) {
    var url = _this.$basePath + '/api/resource/list';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('tag' in params) p.query.tag = params.tag;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取热门列表
   * @summary 获取热门列表
   * @param params ParamsapiResourceListHotGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2007
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiResourceListHotGet", function (params, opt) {
    var url = _this.$basePath + '/api/resource/list/hot';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取用户点赞的表白墙列表
   * @summary 获取用户点赞的表白墙列表
   * @param params ParamsapiResourceListLikeGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2007
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiResourceListLikeGet", function (params, opt) {
    var url = _this.$basePath + '/api/resource/list/like';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('id' in params) p.query.id = params.id;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取资源列表
   * @summary 获取资源列表
   * @param params ParamsapiResourceListTopGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2007
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiResourceListTopGet", function (params, opt) {
    var url = _this.$basePath + '/api/resource/list/top';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('tag' in params) p.query.tag = params.tag;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 根据关键字模糊搜索
   * @summary 根据关键字模糊搜索
   * @param params ParamsapiResourceSearchGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2007
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiResourceSearchGet", function (params, opt) {
    var url = _this.$basePath + '/api/resource/search';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('keyword' in params) p.query.keyword = params.keyword;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new ResourceApi());

/***/ }),

/***/ "./src/services2/api/SaleWallApi.ts":
/*!******************************************!*\
  !*** ./src/services2/api/SaleWallApi.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SaleWallApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * @description apiSaleWallIdDelete参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiSaleWallIdGet参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiSaleWallLikeIdPut参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiSaleWallListGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * @description apiSaleWallListHotGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * @description apiSaleWallListLikeGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[id]` 请求参数 id
  */

/**
  * @description apiSaleWallListPublishGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[id]` 请求参数 id
  */

/**
  * request body
  */

/**
  * @description apiSaleWallSearchGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[keyword]` 关键字
  */

var SaleWallApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function SaleWallApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SaleWallApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 删除 卖舍友
   * @summary 删除 卖舍友
   * @param params ParamsapiSaleWallIdDelete
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallIdDelete", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/sale-wall/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'DELETE',
      url: url
    }, p));
  });
  /**
   * 获取卖舍友详情
   * @summary 获取卖舍友详情
   * @param params ParamsapiSaleWallIdGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20010
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallIdGet", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/sale-wall/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 点赞/取消 卖舍友
   * @summary 点赞/取消 卖舍友
   * @param params ParamsapiSaleWallLikeIdPut
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallLikeIdPut", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/sale-wall/like/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'PUT',
      url: url
    }, p));
  });
  /**
   * 获取卖舍友列表
   * @summary 获取卖舍友列表
   * @param params ParamsapiSaleWallListGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2009
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallListGet", function (params, opt) {
    var url = _this.$basePath + '/api/sale-wall/list';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取热门列表
   * @summary 获取热门列表
   * @param params ParamsapiSaleWallListHotGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2009
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallListHotGet", function (params, opt) {
    var url = _this.$basePath + '/api/sale-wall/list/hot';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取用户点赞的卖舍友列表
   * @summary 获取用户点赞的卖舍友列表
   * @param params ParamsapiSaleWallListLikeGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2009
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallListLikeGet", function (params, opt) {
    var url = _this.$basePath + '/api/sale-wall/list/like';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('id' in params) p.query.id = params.id;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取用户发布的卖舍友列表
   * @summary 获取用户发布的卖舍友列表
   * @param params ParamsapiSaleWallListPublishGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2009
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallListPublishGet", function (params, opt) {
    var url = _this.$basePath + '/api/sale-wall/list/publish';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('id' in params) p.query.id = params.id;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 新建卖舍友
   * @summary 新建卖舍友
   
   * @param data: ParamsBodyapiSaleWallPost// request body
   * @param opt ajax config
   * @returns models.InlineResponse20011
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallPost", function (data, opt) {
    var url = _this.$basePath + '/api/sale-wall';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  /**
   * 根据关键字模糊搜索
   * @summary 根据关键字模糊搜索
   * @param params ParamsapiSaleWallSearchGet
   
   * @param opt ajax config
   * @returns models.InlineResponse2009
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiSaleWallSearchGet", function (params, opt) {
    var url = _this.$basePath + '/api/sale-wall/search';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('keyword' in params) p.query.keyword = params.keyword;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new SaleWallApi());

/***/ }),

/***/ "./src/services2/api/UserApi.ts":
/*!**************************************!*\
  !*** ./src/services2/api/UserApi.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * @description apiUserGet参数
  * @property `[id]` 请求参数 id
  */

/**
  * request body
  */

/**
  * request body
  */

/**
  * request body
  */

var UserApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function UserApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UserApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 获取用户信息
   * @summary 获取用户信息
   * @param params ParamsapiUserGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20012
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiUserGet", function (params, opt) {
    var url = _this.$basePath + '/api/user';
    var p = {};
    p.query = {};
    if ('id' in params) p.query.id = params.id;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 更新用户信息
   * @summary 更新用户信息
   
   * @param data: ParamsBodyapiUserPut// request body
   * @param opt ajax config
   * @returns models.InlineResponse20012
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiUserPut", function (data, opt) {
    var url = _this.$basePath + '/api/user';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'PUT',
      url: url
    }, p));
  });
  /**
   * 微信鉴权接口
   * @summary 微信鉴权接口
   
   * @param data: ParamsBodyapiUserWxAuthPost// request body
   * @param opt ajax config
   * @returns models.InlineResponse20012
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiUserWxAuthPost", function (data, opt) {
    var url = _this.$basePath + '/api/user/wx/auth';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  /**
   * 微信登录接口
   * @summary 微信登录接口
   
   * @param data: ParamsBodyapiUserWxLoginPost// request body
   * @param opt ajax config
   * @returns models.InlineResponse20012
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiUserWxLoginPost", function (data, opt) {
    var url = _this.$basePath + '/api/user/wx/login';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new UserApi());

/***/ }),

/***/ "./src/services2/api/WallApi.ts":
/*!**************************************!*\
  !*** ./src/services2/api/WallApi.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WallApi */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ajax */ "./src/utils/ajax/index.ts");




/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



/* tslint:disable:no-unused-variable member-ordering object-literal-shorthand */

/**
  * @description apiWallIdDelete参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiWallIdGet参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiWallLikeIdPut参数
  * @property `id` 请求参数 id
  */

/**
  * @description apiWallListGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * @description apiWallListHotGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  */

/**
  * @description apiWallListLikeGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[id]` 请求参数 id
  */

/**
  * @description apiWallListPublishGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[id]` 请求参数 id
  */

/**
  * request body
  */

/**
  * @description apiWallSearchGet参数
  * @property `[pageNum]` 分页页码
  * @property `[pageSize]` 每页数量
  * @property `[keyword]` 关键字
  */

var WallApi = /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function WallApi(basePath) {
  var _this = this;
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WallApi);
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "$basePath", ''.replace(/\/$/, ''));
  /**
   * 删除 表白墙
   * @summary 删除 表白墙
   * @param params ParamsapiWallIdDelete
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallIdDelete", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/wall/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'DELETE',
      url: url
    }, p));
  });
  /**
   * 获取表白墙详情
   * @summary 获取表白墙详情
   * @param params ParamsapiWallIdGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20014
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallIdGet", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/wall/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 点赞/取消 表白墙
   * @summary 点赞/取消 表白墙
   * @param params ParamsapiWallLikeIdPut
   
   * @param opt ajax config
   * @returns models.InlineResponse200
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallLikeIdPut", function (params, opt) {
    var id = params.id;
    var url = _this.$basePath + "/api/wall/like/".concat(id);
    var p = {};
    _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].check(params.id, 'id');
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'PUT',
      url: url
    }, p));
  });
  /**
   * 获取表白墙列表
   * @summary 获取表白墙列表
   * @param params ParamsapiWallListGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20013
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallListGet", function (params, opt) {
    var url = _this.$basePath + '/api/wall/list';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取热门列表
   * @summary 获取热门列表
   * @param params ParamsapiWallListHotGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20013
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallListHotGet", function (params, opt) {
    var url = _this.$basePath + '/api/wall/list/hot';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取用户点赞的表白墙列表
   * @summary 获取用户点赞的表白墙列表
   * @param params ParamsapiWallListLikeGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20013
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallListLikeGet", function (params, opt) {
    var url = _this.$basePath + '/api/wall/list/like';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('id' in params) p.query.id = params.id;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 获取用户发布的表白墙列表
   * @summary 获取用户发布的表白墙列表
   * @param params ParamsapiWallListPublishGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20013
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallListPublishGet", function (params, opt) {
    var url = _this.$basePath + '/api/wall/list/publish';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('id' in params) p.query.id = params.id;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  /**
   * 新建表白墙
   * @summary 新建表白墙
   
   * @param data: ParamsBodyapiWallPost// request body
   * @param opt ajax config
   * @returns models.InlineResponse20011
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallPost", function (data, opt) {
    var url = _this.$basePath + '/api/wall';
    var p = {};
    p.data = data;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'POST',
      url: url
    }, p));
  });
  /**
   * 根据关键字模糊搜索
   * @summary 根据关键字模糊搜索
   * @param params ParamsapiWallSearchGet
   
   * @param opt ajax config
   * @returns models.InlineResponse20013
   */
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apiWallSearchGet", function (params, opt) {
    var url = _this.$basePath + '/api/wall/search';
    var p = {};
    p.query = {};
    if ('pageNum' in params) p.query.pageNum = params.pageNum;
    if ('pageSize' in params) p.query.pageSize = params.pageSize;
    if ('keyword' in params) p.query.keyword = params.keyword;
    return _ajax__WEBPACK_IMPORTED_MODULE_0__["default"].ajax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, opt), {}, {
      method: 'GET',
      url: url
    }, p));
  });
  if (basePath !== undefined) {
    this.$basePath = basePath.replace(/\/$/, '');
  }
});
/* harmony default export */ __webpack_exports__["default"] = (new WallApi());

/***/ }),

/***/ "./src/services2/api/api.ts":
/*!**********************************!*\
  !*** ./src/services2/api/api.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIS": function() { return /* binding */ APIS; }
/* harmony export */ });
/* harmony import */ var _CommentApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentApi */ "./src/services2/api/CommentApi.ts");
/* harmony import */ var _ConfigApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigApi */ "./src/services2/api/ConfigApi.ts");
/* harmony import */ var _MediaApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaApi */ "./src/services2/api/MediaApi.ts");
/* harmony import */ var _MessageApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageApi */ "./src/services2/api/MessageApi.ts");
/* harmony import */ var _ResourceApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResourceApi */ "./src/services2/api/ResourceApi.ts");
/* harmony import */ var _SaleWallApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SaleWallApi */ "./src/services2/api/SaleWallApi.ts");
/* harmony import */ var _UserApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserApi */ "./src/services2/api/UserApi.ts");
/* harmony import */ var _WallApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WallApi */ "./src/services2/api/WallApi.ts");
















var APIS = {
  CommentApi: _CommentApi__WEBPACK_IMPORTED_MODULE_0__["default"],
  ConfigApi: _ConfigApi__WEBPACK_IMPORTED_MODULE_1__["default"],
  MediaApi: _MediaApi__WEBPACK_IMPORTED_MODULE_2__["default"],
  MessageApi: _MessageApi__WEBPACK_IMPORTED_MODULE_3__["default"],
  ResourceApi: _ResourceApi__WEBPACK_IMPORTED_MODULE_4__["default"],
  SaleWallApi: _SaleWallApi__WEBPACK_IMPORTED_MODULE_5__["default"],
  UserApi: _UserApi__WEBPACK_IMPORTED_MODULE_6__["default"],
  WallApi: _WallApi__WEBPACK_IMPORTED_MODULE_7__["default"]
};

/***/ }),

/***/ "./src/services2/index.ts":
/*!********************************!*\
  !*** ./src/services2/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIS": function() { return /* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.APIS; }
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/services2/api/api.ts");
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "./src/services2/model/models.ts");



/***/ }),

/***/ "./src/services2/model/InlineResponse200.ts":
/*!**************************************************!*\
  !*** ./src/services2/model/InlineResponse200.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse200 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse200;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse200 || (InlineResponse200 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2001.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2001.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2001 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse2001;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2001 || (InlineResponse2001 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse20010.ts":
/*!****************************************************!*\
  !*** ./src/services2/model/InlineResponse20010.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse20010 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse20010;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse20010 || (InlineResponse20010 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse20011.ts":
/*!****************************************************!*\
  !*** ./src/services2/model/InlineResponse20011.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse20011 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse20011;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse20011 || (InlineResponse20011 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse20012.ts":
/*!****************************************************!*\
  !*** ./src/services2/model/InlineResponse20012.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse20012 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse20012;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse20012 || (InlineResponse20012 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse20013.ts":
/*!****************************************************!*\
  !*** ./src/services2/model/InlineResponse20013.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse20013 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `result` 
  * @property `[error]` 
  */
var InlineResponse20013;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse20013 || (InlineResponse20013 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse20014.ts":
/*!****************************************************!*\
  !*** ./src/services2/model/InlineResponse20014.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse20014 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse20014;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse20014 || (InlineResponse20014 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2001FromUserInfoCustomAvatarUrl.ts":
/*!******************************************************************************!*\
  !*** ./src/services2/model/InlineResponse2001FromUserInfoCustomAvatarUrl.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2001FromUserInfoCustomAvatarUrl */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `key` 图片 url
  * @property `status` 
  * @property `[height]` 图片高度
  * @property `[width]` 图片宽度
  * @property `[type]` 图片类型
  * @property `[bucket]` 图片 bucket
  */
var InlineResponse2001FromUserInfoCustomAvatarUrl;
(function (_InlineResponse2001FromUserInfoCustomAvatarUrl) {
  var StatusEnum = function (StatusEnum) {
    StatusEnum["_0"] = '0';
    StatusEnum["_1"] = '1';
    StatusEnum["_2"] = '2';
    return StatusEnum;
  }({});
  _InlineResponse2001FromUserInfoCustomAvatarUrl.StatusEnum = StatusEnum;
})(InlineResponse2001FromUserInfoCustomAvatarUrl || (InlineResponse2001FromUserInfoCustomAvatarUrl = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2002.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2002.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2002 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse2002;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2002 || (InlineResponse2002 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2003.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2003.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2003 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse2003;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2003 || (InlineResponse2003 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2003Result.ts":
/*!*********************************************************!*\
  !*** ./src/services2/model/InlineResponse2003Result.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2003Result */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `key` 图片 url
  * @property `status` 
  * @property `[height]` 图片高度
  * @property `[width]` 图片宽度
  * @property `[type]` 图片类型
  * @property `[bucket]` 图片 bucket
  * @property `_id` 图片 id
  */
var InlineResponse2003Result;
(function (_InlineResponse2003Result) {
  var StatusEnum = function (StatusEnum) {
    StatusEnum["_0"] = '0';
    StatusEnum["_1"] = '1';
    StatusEnum["_2"] = '2';
    return StatusEnum;
  }({});
  _InlineResponse2003Result.StatusEnum = StatusEnum;
})(InlineResponse2003Result || (InlineResponse2003Result = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2004.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2004.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2004 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse2004;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2004 || (InlineResponse2004 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2005.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2005.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2005 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `result` 
  * @property `[error]` 
  */
var InlineResponse2005;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2005 || (InlineResponse2005 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2005Result.ts":
/*!*********************************************************!*\
  !*** ./src/services2/model/InlineResponse2005Result.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2005Result */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `createdAt` 创建时间
  * @property `updatedAt` 更新时间
  * @property `_id` 消息 id
  * @property `[to]` 
  * @property `[from]` 
  * @property `content` 内容
  * @property `type` 消息类型
  * @property `[ext]` 
  * @property `isRead` 是否已读
  */
var InlineResponse2005Result;
(function (_InlineResponse2005Result) {
  var TypeEnum = function (TypeEnum) {
    /**
     * `BrickLike` 消息类型
     */
    TypeEnum["BrickLike"] = 'BrickLike';
    /**
     * `MateLike` 消息类型
     */
    TypeEnum["MateLike"] = 'MateLike';
    /**
     * `CommentLike` 消息类型
     */
    TypeEnum["CommentLike"] = 'CommentLike';
    /**
     * `Comment` 消息类型
     */
    TypeEnum["Comment"] = 'Comment';
    /**
     * `Hot` 消息类型
     */
    TypeEnum["Hot"] = 'Hot';
    return TypeEnum;
  }({});
  _InlineResponse2005Result.TypeEnum = TypeEnum;
})(InlineResponse2005Result || (InlineResponse2005Result = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2006.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2006.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2006 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse2006;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2006 || (InlineResponse2006 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2007.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2007.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2007 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `result` 
  * @property `[error]` 
  */
var InlineResponse2007;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2007 || (InlineResponse2007 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2008.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2008.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2008 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse2008;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2008 || (InlineResponse2008 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse2009.ts":
/*!***************************************************!*\
  !*** ./src/services2/model/InlineResponse2009.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse2009 */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `result` 
  * @property `[error]` 
  */
var InlineResponse2009;
(function (_InlineResponse) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse2009 || (InlineResponse2009 = {}));

/***/ }),

/***/ "./src/services2/model/InlineResponse200Result.ts":
/*!********************************************************!*\
  !*** ./src/services2/model/InlineResponse200Result.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InlineResponse200Result */
/**
 * Test swagger
 * Testing the Fastify swagger API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
  * @property `code` 
  * @property `resultCode` 
  * @property `message` 
  * @property `[result]` 
  * @property `[error]` 
  */
var InlineResponse200Result;
(function (_InlineResponse200Result) {
  var CodeEnum = function (CodeEnum) {
    CodeEnum["_100001"] = '100001';
    CodeEnum["_100002"] = '100002';
    CodeEnum["_400001"] = '400001';
    CodeEnum["_400002"] = '400002';
    CodeEnum["_400003"] = '400003';
    CodeEnum["_500000"] = '500000';
    CodeEnum["_500001"] = '500001';
    CodeEnum["_500002"] = '500002';
    return CodeEnum;
  }({});
  _InlineResponse200Result.CodeEnum = CodeEnum;
  var ResultCodeEnum = function (ResultCodeEnum) {
    ResultCodeEnum["SUCCESS"] = 'SUCCESS';
    ResultCodeEnum["ERRPARAM"] = 'ERR_PARAM';
    ResultCodeEnum["SENMESSAGE"] = 'SEN_MESSAGE';
    ResultCodeEnum["NOTWECHATAUTH"] = 'NOT_WECHAT_AUTH';
    ResultCodeEnum["NOTLOGIN"] = 'NOT_LOGIN';
    ResultCodeEnum["NOTAUTH"] = 'NOT_AUTH';
    ResultCodeEnum["ERROR"] = 'ERROR';
    ResultCodeEnum["FAILUPLOAD"] = 'FAIL_UPLOAD';
    ResultCodeEnum["FACECOMPARERUPLOAD"] = 'FACE_COMPARER_UPLOAD';
    return ResultCodeEnum;
  }({});
  _InlineResponse200Result.ResultCodeEnum = ResultCodeEnum;
})(InlineResponse200Result || (InlineResponse200Result = {}));

/***/ }),

/***/ "./src/services2/model/models.ts":
/*!***************************************!*\
  !*** ./src/services2/model/models.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _InlineResponse200__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InlineResponse200 */ "./src/services2/model/InlineResponse200.ts");
/* harmony import */ var _InlineResponse2001__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InlineResponse2001 */ "./src/services2/model/InlineResponse2001.ts");
/* harmony import */ var _InlineResponse20010__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InlineResponse20010 */ "./src/services2/model/InlineResponse20010.ts");
/* harmony import */ var _InlineResponse20011__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InlineResponse20011 */ "./src/services2/model/InlineResponse20011.ts");
/* harmony import */ var _InlineResponse20012__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InlineResponse20012 */ "./src/services2/model/InlineResponse20012.ts");
/* harmony import */ var _InlineResponse20013__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InlineResponse20013 */ "./src/services2/model/InlineResponse20013.ts");
/* harmony import */ var _InlineResponse20014__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InlineResponse20014 */ "./src/services2/model/InlineResponse20014.ts");
/* harmony import */ var _InlineResponse2001FromUserInfoCustomAvatarUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InlineResponse2001FromUserInfoCustomAvatarUrl */ "./src/services2/model/InlineResponse2001FromUserInfoCustomAvatarUrl.ts");
/* harmony import */ var _InlineResponse2002__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InlineResponse2002 */ "./src/services2/model/InlineResponse2002.ts");
/* harmony import */ var _InlineResponse2003__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InlineResponse2003 */ "./src/services2/model/InlineResponse2003.ts");
/* harmony import */ var _InlineResponse2003Result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InlineResponse2003Result */ "./src/services2/model/InlineResponse2003Result.ts");
/* harmony import */ var _InlineResponse2004__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InlineResponse2004 */ "./src/services2/model/InlineResponse2004.ts");
/* harmony import */ var _InlineResponse2005__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InlineResponse2005 */ "./src/services2/model/InlineResponse2005.ts");
/* harmony import */ var _InlineResponse2005Result__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./InlineResponse2005Result */ "./src/services2/model/InlineResponse2005Result.ts");
/* harmony import */ var _InlineResponse2006__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./InlineResponse2006 */ "./src/services2/model/InlineResponse2006.ts");
/* harmony import */ var _InlineResponse2007__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./InlineResponse2007 */ "./src/services2/model/InlineResponse2007.ts");
/* harmony import */ var _InlineResponse2008__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./InlineResponse2008 */ "./src/services2/model/InlineResponse2008.ts");
/* harmony import */ var _InlineResponse2009__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./InlineResponse2009 */ "./src/services2/model/InlineResponse2009.ts");
/* harmony import */ var _InlineResponse200Result__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./InlineResponse200Result */ "./src/services2/model/InlineResponse200Result.ts");













































/***/ }),

/***/ "./src/utils/ajax/ajax.ts":
/*!********************************!*\
  !*** ./src/utils/ajax/ajax.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeader": function() { return /* binding */ getHeader; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "webpack/container/remote/cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _new_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-ajax */ "./src/utils/ajax/new-ajax.ts");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axios */ "./src/utils/ajax/axios.ts");






var defaultAjax = _new_ajax__WEBPACK_IMPORTED_MODULE_2__["default"].ajax;
var COOKIE_KEY = 'new_cookie';
var CSRF_TOKEN_KEY = 'csrfToken';
_axios__WEBPACK_IMPORTED_MODULE_3__["default"].interceptors.response.use(function (response) {
  var headers = response.headers;

  // 小程序 cookie 用逗号分割，只能特殊处理
  var cookie = (headers['set-cookie'] || headers['Set-Cookie'] || '').split(/,(?=[^,]*=)/).join(';');
  var SESSION_ID = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(cookie).SESSION_ID;
  SESSION_ID && _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(COOKIE_KEY, cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize('SESSION_ID', SESSION_ID));
  var csrfToken = cookie__WEBPACK_IMPORTED_MODULE_1___default().parse(cookie).csrfToken;
  csrfToken && _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(CSRF_TOKEN_KEY, csrfToken);
  return response;
});

// 请求携带 token
var getHeader = function getHeader() {
  var csrfToken = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(CSRF_TOKEN_KEY);
  var cookie = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(COOKIE_KEY);
  return {
    Cookie: cookie,
    'x-csrf-token': csrfToken
  };
};

// 全局拦截 ajax 拼接 testUser 参数
_new_ajax__WEBPACK_IMPORTED_MODULE_2__["default"].ajax = function (options, path) {
  var basePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "https://community.smackgg.com";
  var headers = options.headers || {};
  console.log(options, options.headers, 'options');
  options.url = "https://community.smackgg.com" + options.url;
  headers.Origin = "https://community.smackgg.com";
  return defaultAjax((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, options), {}, {
    headers: (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__["default"])({}, headers), getHeader())
  }), path, basePath);
};
/* harmony default export */ __webpack_exports__["default"] = (_new_ajax__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./src/utils/ajax/axios.ts":
/*!*********************************!*\
  !*** ./src/utils/ajax/axios.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyFunc": function() { return /* binding */ emptyFunc; },
/* harmony export */   "onStatusError": function() { return /* binding */ onStatusError; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "webpack/container/remote/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ "./src/utils/ajax/consts.ts");




// @cc: axios 默认配置，可在此处修改
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  timeout: 5000,
  withCredentials: true,
  headers: {}
}));
var emptyFunc = function emptyFunc() {
  return void 0;
};

/** 检测 axios 响应状态 */
function onStatusError(error) {
  var resp = 'response' in error && error.response;
  // IMP: 400客户端错误可能有response.data 不规则的接口可能在 data 里塞除了 code 和 message 以外的字段
  var err = resp ? (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, resp.data), {}, {
    code: resp.status,
    message: resp.data && resp.data.message ? resp.data.message : resp.statusText
  }) : {
    code: error instanceof (axios__WEBPACK_IMPORTED_MODULE_0___default().Cancel) ? _consts__WEBPACK_IMPORTED_MODULE_2__.AjaxCancelCode : _consts__WEBPACK_IMPORTED_MODULE_2__.AjaxErrorCode,
    message: error.message
  };
  return err;
}


/***/ }),

/***/ "./src/utils/ajax/consts.ts":
/*!**********************************!*\
  !*** ./src/utils/ajax/consts.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjaxCancelCode": function() { return /* binding */ AjaxCancelCode; },
/* harmony export */   "AjaxErrorCode": function() { return /* binding */ AjaxErrorCode; },
/* harmony export */   "promiseFactory": function() { return /* binding */ promiseFactory; }
/* harmony export */ });
/* unused harmony exports AjaxCancelMessage, GraphQLErrorCode */
/** 取消请求错误码 */
var AjaxCancelCode = 10499;
var AjaxCancelMessage = 'AJAX_CANCEL_MESSAGE';

/** 默认Ajax错误码  */
var AjaxErrorCode = 10001;

/** 无法确认的 Graphql 错误码 */
var GraphQLErrorCode = 10002;
var promiseFactory = function promiseFactory() {
  var resolve, reject;
  var prom = new Promise(function (rs, rj) {
    resolve = rs;
    reject = rj;
  });
  var rj = {
    reject: reject,
    resolve: resolve
  };
  return [rj, prom];
};

/***/ }),

/***/ "./src/utils/ajax/index.ts":
/*!*********************************!*\
  !*** ./src/utils/ajax/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./src/utils/ajax/ajax.ts");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axios */ "./src/utils/ajax/axios.ts");
/* harmony import */ var _new_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-ajax */ "./src/utils/ajax/new-ajax.ts");



/* harmony default export */ __webpack_exports__["default"] = (_ajax__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/utils/ajax/new-ajax.ts":
/*!************************************!*\
  !*** ./src/utils/ajax/new-ajax.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WrappedFetch */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "webpack/container/remote/qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "webpack/container/remote/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./axios */ "./src/utils/ajax/axios.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consts */ "./src/utils/ajax/consts.ts");










/** 不再兼容非标准的数据结构 */

/** 非标准包裹 */

var WrappedFetch = /*#__PURE__*/function () {
  function WrappedFetch() {
    var _this = this;
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, WrappedFetch);
    /** ajax 方法 */
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "ajax", function (_ref, _path, _basePath) {
      var method = _ref.method,
        url = _ref.url,
        data = _ref.data,
        form = _ref.form,
        query = _ref.query,
        header = _ref.header,
        extra = _ref.extra,
        cancel = _ref.cancel,
        headers = _ref.headers;
      var config = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, extra), {}, {
        method: method.toLowerCase(),
        headers: (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, headers), header)
      });
      // json
      if (data) {
        config = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, config), {}, {
          headers: (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
            // 可覆盖
            'Content-Type': 'application/json'
          }, config.headers),
          data: data
        });
      }
      // form
      if (form) {
        config = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, config), {}, {
          headers: (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({
            // 可覆盖
            'Content-Type': 'application/x-www-form-urlencoded'
          }, config.headers),
          data: config.headers && config.headers['Content-Type'] === 'multipart/form-data' ? form : qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(form)
        });
      }
      var _promiseFactory = (0,_consts__WEBPACK_IMPORTED_MODULE_6__.promiseFactory)(),
        _promiseFactory2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_promiseFactory, 2),
        cancelRequest = _promiseFactory2[0].resolve,
        internalCancel = _promiseFactory2[1];
      config.cancelToken = new (axios__WEBPACK_IMPORTED_MODULE_1___default().CancelToken)(function (c) {
        // 外部
        cancel && cancel.then(c, _axios__WEBPACK_IMPORTED_MODULE_2__.emptyFunc);
        // 内部自动取消
        internalCancel.then(c, _axios__WEBPACK_IMPORTED_MODULE_2__.emptyFunc);
      });
      var prom = _axios__WEBPACK_IMPORTED_MODULE_2__["default"].request((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__["default"])({}, config), {}, {
        url: url,
        params: query
      })).then(function (res) {
        return res.data;
      });
      if (_this.autoCatch) {
        prom = prom.catch(typeof _this.autoCatch === 'function' ? _this.autoCatch : _axios__WEBPACK_IMPORTED_MODULE_2__.onStatusError);
      }
      // IMP: 修复 tkit/service 设计上的硬伤
      prom['cancel'] = cancelRequest;
      return prom;
    });
    /**
     * 是否默认 catch ajax 错误，默认开启，设置为 false，关闭 catch，支持配置成函数，替代默认的 onStatusError
     */
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "autoCatch", true);
  }
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(WrappedFetch, [{
    key: "check",
    value: /** 接口传参校验 */
    function check(value, name) {
      if (value === null || value === undefined) {
        var msg = "[ERROR PARAMS]: ".concat(name, " can't be null or undefined");
        // 非生产环境，直接抛出错误
        if (true) {
          throw Error(msg);
        }
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (new WrappedFetch());

/***/ }),

/***/ "./src/utils/dateFormat.ts":
/*!*********************************!*\
  !*** ./src/utils/dateFormat.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ dateFormat; }
/* harmony export */ });
function dateFormat(current, format) {
  // ios 日期处理兼容
  if (typeof current === 'string') {
    current = current.replace(/-/g, '/');
  }
  var date = new Date(current);
  var o = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, "".concat(date.getFullYear()).substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(format)) {
      format = format.replace(RegExp.$1, "".concat(RegExp.$1.length === 1 ? o[k] : "00".concat(o[k]).substr("".concat(o[k]).length)));
    }
  }
  return format;
}

/***/ }),

/***/ "./src/utils/image.ts":
/*!****************************!*\
  !*** ./src/utils/image.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compressImage": function() { return /* binding */ compressImage; },
/* harmony export */   "uploadFileToServer": function() { return /* binding */ uploadFileToServer; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ajax_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ajax/ajax */ "./src/utils/ajax/ajax.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request */ "./src/utils/request.ts");








// const isDevtools = Taro.getSystemInfoSync().platform === 'devtools'

var compressImage = function compressImage(url) {
  var quality = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
  return new Promise(function (resolve, reject) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().compressImage({
      src: url,
      success: function success(res) {
        // IMP: 开发者工具中后缀名有问题，无法上传文件，需要手动更改
        // if (isDevtools) {
        //   // const filePath = res.tempFilePath.replace('.', '')
        //   const filePath = `${wx.env.USER_DATA_PATH}/${+new Date()}.jpg`
        //   Taro.getFileSystemManager().renameSync(res.tempFilePath, filePath)
        //   resolve(filePath)
        //   return
        // }
        resolve(res.tempFilePath);
      },
      quality: quality,
      fail: function fail(error) {
        reject(error);
      }
    });
  });
};

/**
 *
 * @param param0
 * @returns
 */
var uploadFileToServer = /*#__PURE__*/function () {
  var _ref2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().mark(function _callee(_ref) {
    var _ref$url, url, _ref$quality, quality, _ref$isNotTmpFile, isNotTmpFile, _yield$Taro$getImageI, height, width, type, _yield$withRequest, _yield$withRequest2, err, res, rate, compressUrl, _res$result, _res$result2, _yield$uploadFile, data, _res;
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_5__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _ref$url = _ref.url, url = _ref$url === void 0 ? '' : _ref$url, _ref$quality = _ref.quality, quality = _ref$quality === void 0 ? 80 : _ref$quality, _ref$isNotTmpFile = _ref.isNotTmpFile, isNotTmpFile = _ref$isNotTmpFile === void 0 ? false : _ref$isNotTmpFile;
          _context.next = 3;
          return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getImageInfo({
            src: url
          });
        case 3:
          _yield$Taro$getImageI = _context.sent;
          height = _yield$Taro$getImageI.height;
          width = _yield$Taro$getImageI.width;
          type = _yield$Taro$getImageI.type;
          if (!isNotTmpFile) {
            _context.next = 16;
            break;
          }
          _context.next = 10;
          return (0,_request__WEBPACK_IMPORTED_MODULE_3__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_0__.APIS.MediaApi.apiMediaUrlPost)({
            url: url,
            height: height,
            width: width,
            type: type
          });
        case 10:
          _yield$withRequest = _context.sent;
          _yield$withRequest2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_yield$withRequest, 2);
          err = _yield$withRequest2[0];
          res = _yield$withRequest2[1];
          if (err) {
            _context.next = 16;
            break;
          }
          return _context.abrupt("return", res === null || res === void 0 ? void 0 : res._id);
        case 16:
          // 压缩比例 根据图片宽度动态计算
          rate = 1;
          if (width > 1000) {
            rate = 800 / width;
          }
          _context.next = 20;
          return compressImage(url, quality * rate);
        case 20:
          compressUrl = _context.sent;
          _context.prev = 21;
          _context.next = 24;
          return (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.uploadFile)({
            url: "".concat("https://community.smackgg.com", "/api/media"),
            filePath: compressUrl,
            name: 'file',
            header: (0,_ajax_ajax__WEBPACK_IMPORTED_MODULE_2__.getHeader)(),
            formData: {
              height: height,
              width: width,
              type: type
            }
          });
        case 24:
          _yield$uploadFile = _context.sent;
          data = _yield$uploadFile.data;
          _res = JSON.parse(data);
          if (!(!(_res !== null && _res !== void 0 && (_res$result = _res.result) !== null && _res$result !== void 0 && _res$result._id) || !(_res !== null && _res !== void 0 && (_res$result2 = _res.result) !== null && _res$result2 !== void 0 && _res$result2.id))) {
            _context.next = 29;
            break;
          }
          throw new Error('上传失败');
        case 29:
          return _context.abrupt("return", _res.result.id);
        case 32:
          _context.prev = 32;
          _context.t0 = _context["catch"](21);
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '上传失败',
            icon: 'none'
          });
          return _context.abrupt("return", Promise.reject(_context.t0));
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[21, 32]]);
  }));
  return function uploadFileToServer(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cError": function() { return /* binding */ cError; },
/* harmony export */   "copy": function() { return /* binding */ copy; },
/* harmony export */   "dateFormat": function() { return /* reexport safe */ _dateFormat__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "getCdnUrl": function() { return /* binding */ getCdnUrl; },
/* harmony export */   "getCurrentPageUrl": function() { return /* binding */ getCurrentPageUrl; },
/* harmony export */   "loginModal": function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_4__.loginModal; },
/* harmony export */   "requestSubscribeMessage": function() { return /* binding */ requestSubscribeMessage; },
/* harmony export */   "saveImage": function() { return /* binding */ saveImage; },
/* harmony export */   "showToast": function() { return /* binding */ showToast; },
/* harmony export */   "toLogin": function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_4__.toLogin; },
/* harmony export */   "uploadFileToServer": function() { return /* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_5__.uploadFileToServer; },
/* harmony export */   "withRequest": function() { return /* reexport safe */ _request__WEBPACK_IMPORTED_MODULE_3__.withRequest; }
/* harmony export */ });
/* unused harmony exports priceToFloat, setCartBadge, valueEqual, getAuthorize, delay */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/typeof.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_illegality_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/img/illegality_img.png */ "./src/assets/img/illegality_img.png");
/* harmony import */ var _dateFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFormat */ "./src/utils/dateFormat.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request */ "./src/utils/request.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./src/utils/login.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/utils/image.ts");





var _excluded = ["complete", "duration", "finished"];



// export { default as config } from '../../mallConfig'





// 新增 Toast finished 方法，Toast 弹窗关闭后触发
var showToast = function showToast(_ref) {
  var complete = _ref.complete,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1500 : _ref$duration,
    _ref$finished = _ref.finished,
    finished = _ref$finished === void 0 ? undefined : _ref$finished,
    args = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, _excluded);
  return new Promise(function (resolve) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
      complete: complete,
      duration: duration
    }, args));
    setTimeout(function () {
      finished && finished();
      resolve();
    }, duration);
  });
};

// catch promise error
var cError = /*#__PURE__*/function () {
  var _ref2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee(fn) {
    var result;
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fn;
        case 3:
          result = _context.sent;
          return _context.abrupt("return", [null, result]);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0, 'error');
          return _context.abrupt("return", [_context.t0, _context.t0]);
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function cError(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// 价格处理
var priceToFloat = function priceToFloat(price) {
  return price !== undefined ? price.toFixed(2) : '';
};

// 设置购物车小红点
var setCartBadge = function setCartBadge() {
  try {
    var _ref3 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('shopCartInfo') || {},
      shopNum = _ref3.shopNum;
    if (shopNum && shopNum > 0) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setTabBarBadge({
        index: 2,
        text: String(shopNum)
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeTabBarBadge({
        index: 2
      });
    }
  } catch (error) {}
};

// valueEqual from https://www.npmjs.com/package/value-equal
var valueOf = function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
};
var _valueEqual = function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;
  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return _valueEqual(item, b[index]);
    });
  }
  if ((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_10__["default"])(a) === 'object' || (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_10__["default"])(b) === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);
    if (aValue !== a || bValue !== b) return _valueEqual(aValue, bValue);
    return Object.keys(Object.assign({}, a, b)).every(function (key) {
      return _valueEqual(a[key], b[key]);
    });
  }
  return false;
};

// 获取当前页面url

var getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getCurrentPages(); //获取加载的页面
  var currentPage = pages[pages.length - 1]; //获取当前页面的对象
  var url = currentPage === null || currentPage === void 0 ? void 0 : currentPage.route; //当前页面url
  return url;
};

// 获取用户权限
var getAuthorize = /*#__PURE__*/function () {
  var _ref4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee2() {
    var scope,
      _args2 = arguments;
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          scope = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'scope.writePhotosAlbum';
          return _context2.abrupt("return", new Promise(function (resolve) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSetting({
              success: function success(res) {
                if (!res.authSetting[scope]) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().authorize({
                    scope: scope,
                    success: function success() {
                      return resolve();
                    },
                    fail: function fail() {
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                        title: '打开权限设置',
                        content: '保存图片权限未开启，是否授权保存图片权限？',
                        confirmText: '确认',
                        success: function success(result) {
                          if (result.confirm) {
                            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().openSetting();
                            resolve(new Error('用户打开权限'));
                          }
                          if (result.cancel) {
                            resolve(new Error('用户取消打开权限'));
                          }
                        }
                      });
                    }
                  });
                  return;
                }
                resolve();
              }
            });
          }));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getAuthorize() {
    return _ref4.apply(this, arguments);
  };
}();
// 保存图片
var saveImage = /*#__PURE__*/function () {
  var _ref5 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().mark(function _callee3(url) {
    var err;
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_9__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getAuthorize('scope.writePhotosAlbum');
        case 2:
          err = _context3.sent;
          if (!err) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return");
        case 5:
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSetting({
            success: function success(res) {
              if (!res.authSetting['scope.writePhotosAlbum']) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().authorize({
                  scope: 'scope.writePhotosAlbum',
                  success: function success() {
                    // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                    // Taro.startRecord()
                  }
                });
              }
            }
          });
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().saveImageToPhotosAlbum({
            filePath: url,
            success: function success() {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                title: '保存成功',
                content: '图片成功保存到相册',
                showCancel: false,
                confirmText: '确认',
                success: function success(result) {
                  if (result.confirm) {}
                }
              });
            },
            fail: function fail() {}
          });
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function saveImage(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
var delay = function delay(timeout) {
  return new Promise(function (resolve, reject) {
    return setTimeout(resolve, timeout);
  });
};
var getCdnUrl = function getCdnUrl(params) {
  if (!params) {
    return '';
  }
  var status = params.status,
    key = params.key;
  if (status === 2) {
    return _assets_img_illegality_img_png__WEBPACK_IMPORTED_MODULE_1__;
  }
  // TODO: 缺省图补充
  return "".concat("https://community-media.smackgg.com", "/").concat(key);
};
var requestSubscribeMessage = function requestSubscribeMessage() {
  return new Promise(function (resolve) {
    wx.requestSubscribeMessage({
      tmplIds: ['g0WWyXyMj-fU7kscwpXU89Q_Ola7sfJgIjKv7CdIVIc'],
      success: function success() {
        resolve();
      },
      fail: function fail() {
        resolve();
      }
    });
  });
};
function copy(target) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setClipboardData({
    data: target
  });
}

/***/ }),

/***/ "./src/utils/login.ts":
/*!****************************!*\
  !*** ./src/utils/login.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginModal": function() { return /* binding */ loginModal; },
/* harmony export */   "toLogin": function() { return /* binding */ toLogin; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/actions/user */ "./src/redux/actions/user.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/store */ "./src/redux/store/index.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./src/utils/request.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/utils/router.ts");









var toLogin = /*#__PURE__*/function () {
  var _ref = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2(isWechatLogin, url) {
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            if (!isWechatLogin) {
              wx.getUserProfile({
                desc: '用于理工喵信息展示',
                // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: function () {
                  var _success = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee(res) {
                    var _yield$withRequest, _yield$withRequest2, err;
                    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          console.log(res, 'res');
                          _context.next = 3;
                          return (0,_request__WEBPACK_IMPORTED_MODULE_4__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_0__.APIS.UserApi.apiUserWxLoginPost)({
                            iv: res.iv,
                            encryptedData: res.encryptedData
                          });
                        case 3:
                          _yield$withRequest = _context.sent;
                          _yield$withRequest2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_yield$withRequest, 1);
                          err = _yield$withRequest2[0];
                          if (err) {
                            _context.next = 11;
                            break;
                          }
                          _context.next = 9;
                          return _redux_store__WEBPACK_IMPORTED_MODULE_3__.store.dispatch((0,_redux_actions_user__WEBPACK_IMPORTED_MODULE_2__.init)());
                        case 9:
                          resolve();
                          url && (0,_router__WEBPACK_IMPORTED_MODULE_5__.goPage)(url);
                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }));
                  function success(_x3) {
                    return _success.apply(this, arguments);
                  }
                  return success;
                }(),
                fail: function fail() {
                  console.log('fail');
                  reject();
                }
              });
              return;
            }
            resolve();
            url && (0,_router__WEBPACK_IMPORTED_MODULE_5__.goPage)(url);
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function toLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var loginModal = /*#__PURE__*/function () {
  var _ref2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee5() {
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          return _context5.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref3 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee4(resolve) {
              var getUserInfoPromise, isWechatLogin;
              return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    getUserInfoPromise = _redux_store__WEBPACK_IMPORTED_MODULE_3__.store.getState().user.getUserInfoPromise;
                    _context4.next = 3;
                    return getUserInfoPromise;
                  case 3:
                    isWechatLogin = _redux_store__WEBPACK_IMPORTED_MODULE_3__.store.getState().user.isWechatLogin;
                    if (!isWechatLogin) {
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
                        title: '未登录',
                        content: '登录后才能查看内容',
                        confirmText: '去登录',
                        success: function () {
                          var _success2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee3(res) {
                            return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee3$(_context3) {
                              while (1) switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!res.confirm) {
                                    _context3.next = 6;
                                    break;
                                  }
                                  _context3.next = 3;
                                  return toLogin(isWechatLogin).catch(function () {
                                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
                                      url: _router__WEBPACK_IMPORTED_MODULE_5__.routes.index
                                    });
                                  });
                                case 3:
                                  resolve();
                                  _context3.next = 7;
                                  break;
                                case 6:
                                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
                                    url: _router__WEBPACK_IMPORTED_MODULE_5__.routes.index
                                  });
                                case 7:
                                case "end":
                                  return _context3.stop();
                              }
                            }, _callee3);
                          }));
                          function success(_x5) {
                            return _success2.apply(this, arguments);
                          }
                          return success;
                        }()
                      });
                    } else {
                      resolve();
                    }
                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x4) {
              return _ref3.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function loginModal() {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BASE_URL": function() { return /* binding */ API_BASE_URL; },
/* harmony export */   "withRequest": function() { return /* binding */ withRequest; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);


// import { config, getCurrentPageUrl } from '@/utils'
// import { routes } from './router'

// const { subDomain } = config
// 判定现在的环境
var env =  false ? 0 : 'dev';
var hosts = {
  // dev: 'http://118.89.247.29:8791',
  // dev: 'http://localhost:8791',
  // dev: 'http://192.168.31.122:8791',
  // dev: 'https://hrbust-dev.smackgg.cn',
  dev: 'https://hrbust-dev.smackgg.com',
  prod: 'https://hrbust-dev.smackgg.com'
};
var API_BASE_URL = hosts[env];
/* harmony default export */ __webpack_exports__["default"] = (function (option) {
  return new Promise(function (resolve, reject) {
    var url = option.url,
      _option$data = option.data,
      data = _option$data === void 0 ? {} : _option$data;
    var reqUrl = API_BASE_URL + url;

    // 删减没有数据的参数
    var requestData = Object.keys(data).reduce(function (pre, key) {
      if (data[key] !== undefined) {
        pre[key] = data[key];
      }
      return pre;
    }, {});

    // 请求携带 token
    var cookie = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('new_cookie');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__["default"])({}, option), {}, {
      data: requestData,
      url: reqUrl,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        cookie: cookie
      },
      success: function success(res) {
        if (res && res.statusCode === 200 && res.data.status === 200) {
          var header = res.header;
          // @ts-ignore
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('app_cookie', header['Set-Cookie']);
          resolve(res.data);
          return;
        }
        reject(res && res.data);
      },
      fail: function fail(error) {
        return reject(error);
      }
    }));
  });
});

/**
 * 封装 service request，code !== 0 的情况统一返回 error
 */

function withRequest(request) {
  var showToast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var callback = function callback() {
    return request.apply(void 0, arguments).then(function (res) {
      var _res$error;
      if (res.code === 0 && res.result) {
        return [null, res.result, res];
      }
      var message = res.message || ((_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.message) || '请求失败';
      if (showToast && ![400001, 400002].includes(res.code)) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
          title: message,
          // @ts-ignore
          icon: 'error',
          duration: 2000
        });
      }
      console.error(res.error, res.message);
      return [new Error(message), res.result, res];
    });
  };
  return callback;
}

/***/ }),

/***/ "./src/utils/router.ts":
/*!*****************************!*\
  !*** ./src/utils/router.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goPage": function() { return /* binding */ goPage; },
/* harmony export */   "goWebviewPage": function() { return /* binding */ goWebviewPage; },
/* harmony export */   "routes": function() { return /* reexport safe */ _app_config__WEBPACK_IMPORTED_MODULE_1__.routes; }
/* harmony export */ });
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.config */ "./src/app.config.ts");



var goWebviewPage = function goWebviewPage(url) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '理工喵';
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  if (type === 1) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: url
    });
  } else {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: _app_config__WEBPACK_IMPORTED_MODULE_1__.routes.webview + "?url=".concat(encodeURIComponent(url), "&title=").concat(title)
    });
  }
};
var goPage = function goPage(url) {
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo);
  return to({
    url: url
  });
};

/***/ }),

/***/ "./src/assets/community-imgs/comment.png":
/*!***********************************************!*\
  !*** ./src/assets/community-imgs/comment.png ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/community-imgs/comment.png";

/***/ }),

/***/ "./src/assets/community-imgs/like.png":
/*!********************************************!*\
  !*** ./src/assets/community-imgs/like.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/community-imgs/like.png";

/***/ }),

/***/ "./src/assets/community-imgs/like_selected.png":
/*!*****************************************************!*\
  !*** ./src/assets/community-imgs/like_selected.png ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/community-imgs/like_selected.png";

/***/ }),

/***/ "./src/assets/community-imgs/search.png":
/*!**********************************************!*\
  !*** ./src/assets/community-imgs/search.png ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAAXNSR0IArs4c6QAAAMBQTFRFAAAA////v7+/1NTU29vbvLy8v7+/xMTEvb29v7+/vb29vb29vr6+u7u7u7u7vr6+u7u7vLy8vb29vLy8vLy8vLy8vb29vr6+vb29u7u7u7u7u7u7vb29u7u7u7u7vb29u7u7vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8u7u7vLy8vLy8vLy8u7u7vLy8u7u7vLy8u7u7vLy8vLy8vLy8u7u7u7u7u7u7u7u7vLy8u7u7urq6u7u7vLy8u7u7kDX66AAAAD90Uk5TAAMEBgcXGBojJDI2NzxAQ1NUWVtcZ2hqbG1xdXd4gIOEiJCRlJifoKusrbe9zM/U29/i7O7v8PH4+fr8/f3+9o8GDgAAAotJREFUWMOtmGl7gjAMgKnOec2bOQ8UNrzFezpxY/7/f7WHpMhAKLQ2nwpt3qdHkiZVlFgpqvpsvTvY9mG3nulqURGRp8Z0fw3Jftp44sSUxsdrpBzHJQ5MZXllyLKSElNkYgCVZreyw/M/lfNmYRqaZpiLTeD3MJvEKaxuox1rUCZ+DykPLOfWuSqwOfUvb+S2n7/vzve3Xv9XncXp/dJhmyaJHkGaGzrktxfPeadjTl0SP4h0T3TYexLHyrHX/2yxST3aPcoknUhmRIdGrq6O+3Npp7G19gX3KWLHC3hen9V0Vlv9xLO7s4Is2s+lmtaNqjinVdgyh7jodnqHbKPGMORf6AAjngiBO34O+h36qZXhAWXQCpaBuIF2mOMLWjm0zMrdhDq8UbQbnlIJ/Yvwggj6nR8zx/Dd5A/sTVAc3+I8xOct4QcRiCpH70ZoALcvctf0QbVBv6YQD/MioDzEzCn9gvvLErr9FLClPbVqmJ4mBhqAMlq3Cu2yGKgMyiq0DXAZIgYi4KQ6tGdgjYqggE3OoLl2m3NR0MLVXkNz5zY/REGmq72D5sFfpYDorvYBmvYDp68omqttywXB0gxRkOEvDTbblLDZcPwLCccvzSCluYg0p5UWRqQFNnmh9uHgX5d9HUm7IOVd2dKSCHlpjbRES17q5yWjr+k5b5HJKH96XHOi02PehL1mxyTsnCXEmxNbQggVNT+th8qsnHWrSL/ZpFOHVfh1Tv/K5BgSVyn6wyLxFMetbxYpUK5rwXJdC5XrbFL4AWH+oWuabs6jHhDYJJ4njZbDJHE8siTMiePZJ5GU+iHKW90L8wFINfynMSPmaYzOaaI8LEiSAAISe2lp5WUykcKh8geeehh9qcsYnwAAAABJRU5ErkJggg==";

/***/ }),

/***/ "./src/assets/community-imgs/view.png":
/*!********************************************!*\
  !*** ./src/assets/community-imgs/view.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/community-imgs/view.png";

/***/ }),

/***/ "./src/assets/icon/arrow_right.png":
/*!*****************************************!*\
  !*** ./src/assets/icon/arrow_right.png ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/icon/arrow_right.png";

/***/ }),

/***/ "./src/assets/img/illegality_img.png":
/*!*******************************************!*\
  !*** ./src/assets/img/illegality_img.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/img/illegality_img.png";

/***/ }),

/***/ "./src/components/loading/res/loading.gif":
/*!************************************************!*\
  !*** ./src/components/loading/res/loading.gif ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "components/loading/res/loading.gif";

/***/ })

}]);
//# sourceMappingURL=common.js.map