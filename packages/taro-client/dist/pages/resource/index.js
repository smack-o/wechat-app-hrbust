"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/resource/index"],{

/***/ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/resource/index.ts":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/resource/index.ts ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Resource__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _Resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Resource */ "./src/pages/resource/Resource.tsx");


/***/ }),

/***/ "./src/components/tab/Tab.tsx":
/*!************************************!*\
  !*** ./src/components/tab/Tab.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TopBar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



// import FixBlock from '@/components/fix-block'



var prefix = 'community-tab';
function TopBar(props) {
  var currentIndex = props.currentIndex,
    tabList = props.tabList,
    onChange = props.onChange,
    children = props.children,
    _props$canClickSameTa = props.canClickSameTab,
    canClickSameTab = _props$canClickSameTa === void 0 ? false : _props$canClickSameTa;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: prefix,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "".concat(prefix, "-title"),
      children: tabList.map(function (tabItem, index) {
        var key = tabItem.key,
          text = tabItem.text,
          render = tabItem.render;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefix, "__item"), {
            current: currentIndex === index
          }),
          onClick: function onClick() {
            if (currentIndex !== index || canClickSameTab) {
              onChange === null || onChange === void 0 || onChange(index, key, text);
            }
          },
          children: [render ? render() : text, currentIndex === index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "".concat(prefix, "-active-bar")
          })]
        }, index);
      })
    }), children && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "".concat(prefix, "__content"),
      children: children
    })]
  });
}

/***/ }),

/***/ "./src/components/tab/index.ts":
/*!*************************************!*\
  !*** ./src/components/tab/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Tab__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./src/components/tab/Tab.tsx");


/***/ }),

/***/ "./src/pages/resource/Resource.tsx":
/*!*****************************************!*\
  !*** ./src/pages/resource/Resource.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export Resource */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/router */ "./src/utils/router.ts");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_community_imgs_search_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/community-imgs/search.png */ "./src/assets/community-imgs/search.png");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components */ "./src/components/index.ts");
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/tab */ "./src/components/tab/index.ts");
/* harmony import */ var _components_resource_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/resource-item */ "./src/components/resource-item/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);




















// import AddWallIcon from '../../imgs/add_wall.png'



var Resource = /*#__PURE__*/function (_React$Component) {
  function Resource(props) {
    var _this;
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_12__["default"])(this, Resource);
    _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, Resource, [props]);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "pageNum", 0);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "pageSize", 20);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "fetching", false);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "tabList", []);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "tagList", [{
      key: '',
      text: '全部'
    }].concat(Object.keys(_components_resource_item__WEBPACK_IMPORTED_MODULE_10__.resourceInfo).map(function (key) {
      return {
        key: key,
        text: _components_resource_item__WEBPACK_IMPORTED_MODULE_10__.resourceInfo[key].name
      };
    })));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "state", {
      list: [],
      activeTab: 0,
      hasNext: true,
      loading: true,
      curTagIndex: 0,
      activeArrow: false
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "showAllResource", true);
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "onShowTagSheet", function () {
      _this.setState({
        activeArrow: true
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showActionSheet({
        itemList: _this.tagList.map(function (item) {
          return item.text;
        }),
        success: function success(res) {
          // console.log(res)
          _this.setState({
            // @ts-ignore
            curTagIndex: res.tapIndex
          });
          _this.fetchList(true);
          _this.setState({
            activeArrow: false
          });
        },
        fail: function fail() {
          _this.setState({
            activeArrow: false
          });
        }
      });
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "setStateP", function (state) {
      return new Promise(function (resolve) {
        _this.setState(state, function () {
          return resolve();
        });
      });
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "init", /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().mark(function _callee() {
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.pageNum = 0;
            _context.next = 3;
            return _this.fetchList(true);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "fetchList", /*#__PURE__*/function () {
      var _ref2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().mark(function _callee2(reset, refresh) {
        var pageNum, pageSize, api, api2, query, tag, fetchList, _yield$Promise$all, _yield$Promise$all2, commonRes, topRes, _commonRes, commonErr, commonData, list;
        return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showLoading({
                title: '加载中...'
              });
              _this.fetching = true;
              pageNum = String(_this.pageNum);
              pageSize = String(_this.pageSize); // 刷新当前数据
              if (refresh) {
                pageNum = '0';
                pageSize = String((_this.pageNum + 1) * _this.pageSize);
              }
              api = _this.tabList[_this.state.activeTab].api;
              api2 = _this.tabList[_this.state.activeTab].api2;
              query = {
                pageNum: pageNum,
                pageSize: pageSize
              };
              tag = _this.tagList[_this.state.curTagIndex].key; // tag 筛选
              if (_this.state.activeTab === 0 && tag) {
                query.tag = tag;
              }
              fetchList = [(0,_utils__WEBPACK_IMPORTED_MODULE_1__.withRequest)(api)(query)]; // 置顶逻辑
              if ((reset || refresh) && api2) {
                fetchList.push((0,_utils__WEBPACK_IMPORTED_MODULE_1__.withRequest)(api2)({
                  pageNum: '0',
                  pageSize: '999'
                }));
              }
              _context2.next = 14;
              return Promise.all(fetchList);
            case 14:
              _yield$Promise$all = _context2.sent;
              _yield$Promise$all2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_yield$Promise$all, 2);
              commonRes = _yield$Promise$all2[0];
              topRes = _yield$Promise$all2[1];
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().hideLoading();
              _this.fetching = false;
              _commonRes = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_17__["default"])(commonRes, 2), commonErr = _commonRes[0], commonData = _commonRes[1];
              if (!(commonErr || !commonData)) {
                _context2.next = 23;
                break;
              }
              return _context2.abrupt("return", Promise.reject());
            case 23:
              list = []; // 置顶逻辑
              if ((reset || refresh) && topRes && !topRes[0] && topRes[1]) {
                list = list.concat(topRes[1]);
              }
              if (reset || refresh) {
                list = list.concat(commonData);
              } else {
                list = _this.state.list.concat(commonData);
              }
              console.log(list, 'list');
              _this.setState({
                list: list,
                hasNext: commonData.length >= _this.pageSize
              });
            case 28:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "onTabChange", /*#__PURE__*/function () {
      var _ref3 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().mark(function _callee3(index) {
        return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(_this.state.activeTab === index)) {
                _context3.next = 3;
                break;
              }
              if (index === 0) {
                _this.onShowTagSheet();
              }
              return _context3.abrupt("return");
            case 3:
              if (!(index === 2 && !_this.showAllResource)) {
                _context3.next = 6;
                break;
              }
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showToast({
                title: '维护中，请稍后重试',
                icon: 'none'
              });
              return _context3.abrupt("return");
            case 6:
              _this.setState({
                activeTab: index
              }, function () {
                _this.init();
              });
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "onReachBottom", function () {
      if (!_this.state.hasNext || _this.fetching) {
        return;
      }
      _this.pageNum++;
      return _this.fetchList().catch(function () {
        _this.pageNum--;
      });
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_this, "onPullDownRefresh", /*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().mark(function _callee4() {
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this.init();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().stopPullDownRefresh();
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    })));
    _this.tabList = [{
      key: 'all',
      render: function render() {
        if (!_this.showAllResource) {
          return _components_resource_item__WEBPACK_IMPORTED_MODULE_10__.resourceInfo[_components_resource_item__WEBPACK_IMPORTED_MODULE_10__.ResourceTag.STUDY].name;
        }
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
          className: "resource-tab",
          children: [_this.tagList[_this.state.curTagIndex].text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_5__.AtIcon, {
            onClick: function onClick(e) {
              e.stopPropagation();
              _this.onShowTagSheet();
            },
            value: "chevron-down",
            size: 20,
            className: 'resource-tab-icon' + (_this.state.activeArrow ? ' resource-tab-icon--active' : '')
          })]
        });
      },
      api: _services2__WEBPACK_IMPORTED_MODULE_2__.APIS.ResourceApi.apiResourceListGet,
      api2: _services2__WEBPACK_IMPORTED_MODULE_2__.APIS.ResourceApi.apiResourceListTopGet
    }, {
      key: 'like',
      text: '喜欢',
      api: _services2__WEBPACK_IMPORTED_MODULE_2__.APIS.ResourceApi.apiResourceListLikeGet
    }, {
      key: 'hot',
      text: '最热',
      api: _services2__WEBPACK_IMPORTED_MODULE_2__.APIS.ResourceApi.apiResourceListHotGet
    }];
    return _this;
  }
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__["default"])(Resource, _React$Component);
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__["default"])(Resource, [{
    key: "componentDidShow",
    value: function () {
      var _componentDidShow = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().mark(function _callee5() {
        var _this$props$user$conf;
        return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loginModal)();
            case 3:
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().showLoading({
                title: '加载中...'
              });
              _context5.next = 6;
              return this.props.user.getUserInfoPromise;
            case 6:
              if ((_this$props$user$conf = this.props.user.config.global) !== null && _this$props$user$conf !== void 0 && (_this$props$user$conf = _this$props$user$conf.config) !== null && _this$props$user$conf !== void 0 && _this$props$user$conf.showAllResource) {
                _context5.next = 10;
                break;
              }
              this.showAllResource = false;
              _context5.next = 10;
              return this.setStateP({
                curTagIndex: 3
              });
            case 10:
              _context5.next = 12;
              return this.init();
            case 12:
              this.setState({
                loading: false
              });
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().hideLoading();
              _context5.next = 19;
              break;
            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](0);
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().hideLoading();
            case 19:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 16]]);
      }));
      function componentDidShow() {
        return _componentDidShow.apply(this, arguments);
      }
      return componentDidShow;
    }()
  }, {
    key: "render",
    value:
    // onAddWallClick = () => {
    //   navigateTo({
    //     url: routes.createWall
    //   })
    // }

    function render() {
      var _this$state = this.state,
        activeTab = _this$state.activeTab,
        loading = _this$state.loading,
        _this$state$list = _this$state.list,
        list = _this$state$list === void 0 ? [] : _this$state$list;
      if (loading) {
        return null;
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
        className: "resource",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: "resource-search",
          onClick: function onClick() {
            (0,_utils_router__WEBPACK_IMPORTED_MODULE_4__.goPage)(_utils_router__WEBPACK_IMPORTED_MODULE_4__.routes.searchResource);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Image, {
            className: "resource-search__icon",
            src: _assets_community_imgs_search_png__WEBPACK_IMPORTED_MODULE_7__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Input, {
            placeholder: "\u641C\u7D22\u5173\u952E\u8BCD",
            disabled: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
          currentIndex: activeTab,
          tabList: this.tabList,
          onChange: this.onTabChange,
          canClickSameTab: true,
          children: list.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "community-no-data",
            children: "\u6682\u65E0\u5185\u5BB9"
          }) : list.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_resource_item__WEBPACK_IMPORTED_MODULE_10__["default"], {
                showHotComments: true,
                data: item,
                onClick: function onClick() {
                  return (0,_utils_router__WEBPACK_IMPORTED_MODULE_4__.goPage)("".concat(_utils_router__WEBPACK_IMPORTED_MODULE_4__.routes.resourceDetail, "?id=").concat(item._id));
                },
                showTop: activeTab === 0
              }), index !== 0 && index % 5 === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                className: "wall-ad",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("c-ad", {})
              })]
            }, item._id);
          })
        })]
      });
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps)((0,_components__WEBPACK_IMPORTED_MODULE_8__.withShare)({
  title: '理工喵儿，资源分享专区'
})(Resource)));

/***/ }),

/***/ "./src/pages/resource/index.ts":
/*!*************************************!*\
  !*** ./src/pages/resource/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.ts */ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/resource/index.ts");


var config = {"navigationBarTitleText":"资源分享","enablePullDownRefresh":true};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_ts__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/resource/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_ts__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/resource/index.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map