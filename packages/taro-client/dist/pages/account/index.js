"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/account/index"],{

/***/ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/account/index.tsx":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/account/index.tsx ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/router */ "./src/utils/router.ts");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/actions/user */ "./src/redux/actions/user.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "webpack/container/remote/redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Avatar */ "./src/components/Avatar/index.ts");
/* harmony import */ var _assets_icon_arrow_right_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/icon/arrow_right.png */ "./src/assets/icon/arrow_right.png");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _res_authentication_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./res/authentication.png */ "./src/pages/account/res/authentication.png");
/* harmony import */ var _res_remove_binding_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./res/remove_binding.png */ "./src/pages/account/res/remove_binding.png");
/* harmony import */ var _res_contact_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./res/contact.png */ "./src/pages/account/res/contact.png");
/* harmony import */ var _res_my_wall_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./res/my_wall.png */ "./src/pages/account/res/my_wall.png");
/* harmony import */ var _res_my_sale_wall_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./res/my_sale_wall.png */ "./src/pages/account/res/my_sale_wall.png");
/* harmony import */ var _res_my_message_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./res/my_message.png */ "./src/pages/account/res/my_message.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);

























// images



var Account = /*#__PURE__*/function (_Component) {
  function Account() {
    var _this;
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_17__["default"])(this, Account);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_18__["default"])(this, Account, [].concat(args));
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__["default"])(_this, "state", {
      version: '1.0.0'
    });
    // 登出
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__["default"])(_this, "logout", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
        title: '确定要解绑学号？',
        content: '解绑学号将删除当前学号的部分信息，需要重新绑定拉取~',
        success: function () {
          var _success = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_20__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_21__["default"])().mark(function _callee(res) {
            var _yield$cError, _yield$cError2, err;
            return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_21__["default"])().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!res.confirm) {
                    _context.next = 9;
                    break;
                  }
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showLoading({
                    title: '加载中...'
                  });
                  _context.next = 4;
                  return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.cError)(_this.props.logout());
                case 4:
                  _yield$cError = _context.sent;
                  _yield$cError2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_22__["default"])(_yield$cError, 1);
                  err = _yield$cError2[0];
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
                  if (!err) {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().reLaunch({
                      url: _utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.index,
                      success: function success() {
                        // 解绑 session 也会失效，需要重新登录
                        // TODO 后续需要优化后端逻辑，此时不应该失效，只做解绑操作即可
                        _this.props.init();
                      }
                    });
                  }
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
        }()
      });
    });
    (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_19__["default"])(_this, "onEditUserInfoClick", function () {
      (0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.goPage)(_utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.accountEdit);
    });
    return _this;
  }
  (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_23__["default"])(Account, _Component);
  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_24__["default"])(Account, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      var _ref = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getAccountInfoSync() || {},
        miniProgram = _ref.miniProgram;
      this.setState({
        version: miniProgram.version
      });
      this.props.getUnreadCount();
    }
  }, {
    key: "onLoad",
    value: function onLoad() {}
  }, {
    key: "render",
    value:
    // onTest = () => {
    //   wx.requestSubscribeMessage({
    //     tmplIds: ['g0WWyXyMj-fU7kscwpXU89Q_Ola7sfJgIjKv7CdIVIc']
    //   })
    // }

    function render() {
      var _this$props$user = this.props.user,
        isLogin = _this$props$user.isLogin,
        isWechatLogin = _this$props$user.isWechatLogin,
        studentInfo = _this$props$user.studentInfo,
        _this$props$user$user = _this$props$user.userInfo,
        _this$props$user$user2 = _this$props$user$user.avatarUrl,
        avatarUrl = _this$props$user$user2 === void 0 ? '' : _this$props$user$user2,
        _this$props$user$user3 = _this$props$user$user.nickName,
        nickName = _this$props$user$user3 === void 0 ? '' : _this$props$user$user3,
        customAvatarUrl = _this$props$user$user.customAvatarUrl,
        _this$props$user$user4 = _this$props$user$user.customName,
        customName = _this$props$user$user4 === void 0 ? '' : _this$props$user$user4,
        unreadCount = _this$props$user.unreadCount;
      var version = this.state.version;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
        className: "account-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
          className: "user",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
            className: "avatar-wrapper",
            children: isWechatLogin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "avatar",
              avatarSize: "150rpx",
              avatarUrl: avatarUrl,
              customAvatarUrl: customAvatarUrl,
              onClickType: "preview"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.OpenData, {
              className: "avatar",
              type: "userAvatarUrl",
              lang: "zh_CN"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
            className: "info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
              className: "name",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Text, {
                children: customName || nickName
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtIcon, {
                value: "edit",
                className: "edit",
                size: 18,
                onClick: this.onEditUserInfoClick
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
              className: "student",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
                className: "image",
                src: _res_authentication_png__WEBPACK_IMPORTED_MODULE_10__
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                children: studentInfo === null || studentInfo === void 0 ? void 0 : studentInfo.name
              })]
            })]
          })]
        }), !isWechatLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtButton, {
          type: "primary",
          className: "login-button",
          onClick: function onClick() {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.toLogin)(isWechatLogin, _utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.login);
          },
          children: "\u7ACB\u5373\u767B\u5F55"
        }), isWechatLogin && !isLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_9__.AtButton, {
          type: "primary",
          className: "login-button",
          onClick: function onClick() {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_6__.toLogin)(isWechatLogin, _utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.login);
          },
          children: "\u7ED1\u5B9A\u5B66\u53F7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
          className: "other",
          children: [isLogin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
            className: "item",
            onClick: this.logout,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
              className: "image",
              src: _res_remove_binding_png__WEBPACK_IMPORTED_MODULE_11__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
              className: "info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                children: "\u89E3\u9664\u7ED1\u5B9A"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
                className: "arrow-right",
                src: _assets_icon_arrow_right_png__WEBPACK_IMPORTED_MODULE_8__
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Button, {
            className: "item button",
            onClick: function onClick() {
              return (0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.goPage)(_utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.message);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
              className: "image",
              src: _res_my_message_png__WEBPACK_IMPORTED_MODULE_15__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
              className: "info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                className: "title",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                  children: "\u6211\u7684\u6D88\u606F"
                }), unreadCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                  className: "count",
                  children: [unreadCount, "\u6761\u65B0\u6D88\u606F"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
                className: "arrow-right",
                src: _assets_icon_arrow_right_png__WEBPACK_IMPORTED_MODULE_8__
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Button, {
            className: "item button",
            onClick: function onClick() {
              return (0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.goPage)(_utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.myWall);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
              className: "image",
              src: _res_my_wall_png__WEBPACK_IMPORTED_MODULE_13__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
              className: "info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                children: "\u6211\u7684\u8868\u767D"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
                className: "arrow-right",
                src: _assets_icon_arrow_right_png__WEBPACK_IMPORTED_MODULE_8__
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Button, {
            className: "item button",
            onClick: function onClick() {
              return (0,_utils_router__WEBPACK_IMPORTED_MODULE_3__.goPage)(_utils_router__WEBPACK_IMPORTED_MODULE_3__.routes.mySaleWall);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
              className: "image",
              src: _res_my_sale_wall_png__WEBPACK_IMPORTED_MODULE_14__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
              className: "info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                children: "\u6211\u7684\u820D\u53CB"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
                className: "arrow-right",
                src: _assets_icon_arrow_right_png__WEBPACK_IMPORTED_MODULE_8__
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Button, {
            className: "item button",
            "open-type": "contact",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
              className: "image",
              src: _res_contact_png__WEBPACK_IMPORTED_MODULE_12__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
              className: "info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
                children: "\u8054\u7CFB\u963F\u55B5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.Image, {
                className: "arrow-right",
                src: _assets_icon_arrow_right_png__WEBPACK_IMPORTED_MODULE_8__
              })]
            })]
          })]
        }), version && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_25__.View, {
          className: "version",
          children: ["@\u7406\u5DE5\u55B5 v", version]
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_5__.bindActionCreators)({
    logout: _redux_actions_user__WEBPACK_IMPORTED_MODULE_4__.logout,
    init: _redux_actions_user__WEBPACK_IMPORTED_MODULE_4__.init,
    getUnreadCount: _redux_actions_user__WEBPACK_IMPORTED_MODULE_4__.getUnreadCount
  }, dispatch);
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Account));

/***/ }),

/***/ "./src/pages/account/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/account/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "../../node_modules/.pnpm/babel-loader@8.2.1_@babel+core@7.26.9_webpack@5.78.0_@swc+core@1.3.23_/node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/account/index.tsx");


var config = {"navigationBarTitleText":"校园"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/account/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_babel_loader_8_2_1_babel_core_7_26_9_webpack_5_78_0_swc_core_1_3_23_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pages/account/res/authentication.png":
/*!**************************************************!*\
  !*** ./src/pages/account/res/authentication.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/account/res/authentication.png";

/***/ }),

/***/ "./src/pages/account/res/contact.png":
/*!*******************************************!*\
  !*** ./src/pages/account/res/contact.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/account/res/contact.png";

/***/ }),

/***/ "./src/pages/account/res/my_message.png":
/*!**********************************************!*\
  !*** ./src/pages/account/res/my_message.png ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/account/res/my_message.png";

/***/ }),

/***/ "./src/pages/account/res/my_sale_wall.png":
/*!************************************************!*\
  !*** ./src/pages/account/res/my_sale_wall.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/account/res/my_sale_wall.png";

/***/ }),

/***/ "./src/pages/account/res/my_wall.png":
/*!*******************************************!*\
  !*** ./src/pages/account/res/my_wall.png ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/account/res/my_wall.png";

/***/ }),

/***/ "./src/pages/account/res/remove_binding.png":
/*!**************************************************!*\
  !*** ./src/pages/account/res/remove_binding.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/account/res/remove_binding.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/account/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map