"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages3/sub-vendors"],{

/***/ "./src/components/fix-block/FixBlock.tsx":
/*!***********************************************!*\
  !*** ./src/components/fix-block/FixBlock.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FixBlock; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



// import { PxToRem } from '@/utils'





var prefix = 'fix-block';
function FixBlock(props) {
  var className = props.className,
    children = props.children,
    top = props.top,
    disabled = props.disabled,
    bottom = props.bottom,
    _props$height = props.height,
    propsHeight = _props$height === void 0 ? 0 : _props$height;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propsHeight),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var id = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return "id_".concat(Date.now(), "_").concat(parseInt("".concat(Math.random() * 1000), 10));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (propsHeight) {
      return;
    }
    setTimeout(function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().createSelectorQuery().select('.' + id).boundingClientRect(function (rect) {
        console.log(rect, id, 'rect');
        setHeight((rect === null || rect === void 0 ? void 0 : rect.height) || 0);
      }).exec();
    }, 0);
  }, [children, id, propsHeight]);
  var style = height > 0 ? {
    height: "".concat(height, "rpx")
  } : {};
  if (disabled) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: children
    });
  }

  // fix top or bottom
  var fixStyle = {};
  if (bottom !== undefined) {
    fixStyle.bottom = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().pxTransform(bottom);
  } else {
    fixStyle.top = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().pxTransform(top || 0);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefix, className, (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, "".concat(prefix, "--bottom"), bottom === 0 && propsHeight)),
    style: style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefix, "__children"), id, (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, "".concat(prefix, "__children--fixed"), height > 0)),
      style: fixStyle,
      ref: ref,
      children: children
    })
  });
}

/***/ }),

/***/ "./src/components/fix-block/index.ts":
/*!*******************************************!*\
  !*** ./src/components/fix-block/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _FixBlock__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _FixBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FixBlock */ "./src/components/fix-block/FixBlock.tsx");


/***/ }),

/***/ "./src/pages3/community/_components/brick-message-list/index.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages3/community/_components/brick-message-list/index.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BrickMessageList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/router */ "./src/utils/router.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app.config */ "./src/app.config.ts");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item */ "./src/pages3/community/_components/list-item/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function BrickMessageList(props) {
  var list = props.list;
  if (list.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "community-no-data",
      children: "\u6682\u672A\u53D1\u5E03\u5185\u5BB9"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: list.map(function (item) {
      var _item$publisher, _item$publisher2, _item$photos;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_list_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        userInfo: (_item$publisher = item.publisher) === null || _item$publisher === void 0 ? void 0 : _item$publisher.userInfo,
        userTags: (_item$publisher2 = item.publisher) === null || _item$publisher2 === void 0 ? void 0 : _item$publisher2.tags,
        onClick: function onClick() {
          (0,_utils_router__WEBPACK_IMPORTED_MODULE_1__.goPage)("".concat(_app_config__WEBPACK_IMPORTED_MODULE_2__.routes.wallDetail, "?id=").concat(item._id));
        },
        time: item.createdAt,
        photo: (_item$photos = item.photos) === null || _item$photos === void 0 ? void 0 : _item$photos[0]
        // rightContent={item.content}
        ,
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          children: [item.to && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: ["\u8868\u767D\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              className: "blue-text",
              children: ["@", item.to]
            }), "\xA0"]
          }), item.content]
        })
      }, item._id);
    })
  });
}

/***/ }),

/***/ "./src/pages3/community/_components/comment-input/CommentInput.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages3/community/_components/comment-input/CommentInput.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentType": function() { return /* binding */ CommentType; },
/* harmony export */   "default": function() { return /* binding */ CommentInput; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui */ "webpack/container/remote/taro-ui");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(taro_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_fix_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/fix-block */ "./src/components/fix-block/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);










var CommentType = /*#__PURE__*/function (CommentType) {
  /**
   * 表白墙评论
   */
  CommentType[CommentType["BrickComment"] = 0] = "BrickComment";
  /**
   * 卖舍友评论
   */
  CommentType[CommentType["MateComment"] = 1] = "MateComment";
  /**
   * 评论回复
   */
  CommentType[CommentType["ReplyComment"] = 2] = "ReplyComment";
  /**
   * 游戏商品评论
   */
  CommentType[CommentType["ResourceComment"] = 3] = "ResourceComment";
  return CommentType;
}({});
var prefix = 'comment-input';
function CommentInput(props) {
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? '快来撩一下~' : _props$placeholder,
    onSubmit = props.onSubmit,
    _props$isReply = props.isReply,
    isReply = _props$isReply === void 0 ? false : _props$isReply,
    onBlur = props.onBlur;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var onInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    setValue(e.target.value);
  }, []);
  var onSubmitHandle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.requestSubscribeMessage)();
        case 2:
          _context.next = 4;
          return onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(value);
        case 4:
          setValue('');
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [onSubmit, value]);
  var onBlurHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // 延迟清除数据
    setTimeout(function () {
      setValue('');
      onBlur === null || onBlur === void 0 || onBlur();
    }, 300);
  }, [onBlur]);
  console.log(isReply, 'isReply');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_fix_block__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bottom: 0,
    height: 110,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: prefix,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Input, {
        ref: ref,
        maxlength: 100,
        placeholder: placeholder,
        className: "".concat(prefix, "__input"),
        value: value,
        onInput: onInput,
        placeholderClass: "".concat(prefix, "__input--placeholder"),
        focus: isReply,
        onBlur: onBlurHandler,
        confirmHold: true,
        adjustPosition: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(taro_ui__WEBPACK_IMPORTED_MODULE_1__.AtButton, {
        className: "".concat(prefix, "__button"),
        type: "primary",
        size: "small",
        onClick: onSubmitHandle
        // disabled={!value}
        ,
        children: "\u53D1\u9001"
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages3/community/_components/comment-input/index.ts":
/*!*****************************************************************!*\
  !*** ./src/pages3/community/_components/comment-input/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentType": function() { return /* reexport safe */ _CommentInput__WEBPACK_IMPORTED_MODULE_0__.CommentType; },
/* harmony export */   "default": function() { return /* reexport safe */ _CommentInput__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _CommentInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentInput */ "./src/pages3/community/_components/comment-input/CommentInput.tsx");



/***/ }),

/***/ "./src/pages3/community/_components/comment-list/CommentList.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages3/community/_components/comment-list/CommentList.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CommentListWrapper; }
/* harmony export */ });
/* unused harmony export CommentList */
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Avatar */ "./src/components/Avatar/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _components_Time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Time */ "./src/components/Time/index.ts");
/* harmony import */ var _assets_community_imgs_like_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/community-imgs/like.png */ "./src/assets/community-imgs/like.png");
/* harmony import */ var _assets_community_imgs_like_selected_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/community-imgs/like_selected.png */ "./src/assets/community-imgs/like_selected.png");
/* harmony import */ var _comment_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comment-input */ "./src/pages3/community/_components/comment-input/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
















var prefix = 'comment-list';
function CommentList(props) {
  var _props$list = props.list,
    list = _props$list === void 0 ? [] : _props$list,
    _props$avatarSize = props.avatarSize,
    avatarSize = _props$avatarSize === void 0 ? '70rpx' : _props$avatarSize,
    _props$parentId = props.parentId,
    parentId = _props$parentId === void 0 ? '' : _props$parentId,
    onCommentItemClick = props.onCommentItemClick,
    _props$replyCount = props.replyCount,
    replyCount = _props$replyCount === void 0 ? 0 : _props$replyCount;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(list),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState, 2),
    listLocal = _useState2[0],
    setListLocal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState3, 2),
    pageNum = _useState4[0],
    setPageNum = _useState4[1];
  var replyCountLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return replyCount;
  }, [replyCount]);
  console.log(listLocal.length, replyCount, replyCountLocal);
  var showReplyMore = listLocal.length < replyCountLocal;
  // const [showReplyMore, setShowReplyMore] = useState(list.length < replyCount)

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setListLocal(list);
    setPageNum(1);
  }, [list]);

  // 点赞
  var onLikeHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee(index, e) {
      var item, _yield$withRequest, _yield$withRequest2, err, isLike;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.stopPropagation();
            item = listLocal[index];
            _context.next = 4;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.CommentApi.apiCommentLikeIdPut)({
              id: item._id
            });
          case 4:
            _yield$withRequest = _context.sent;
            _yield$withRequest2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_yield$withRequest, 1);
            err = _yield$withRequest2[0];
            // 脏逻辑，直接更该数据，然后手动触发强制更新
            if (!err) {
              isLike = item.isLike;
              item.isLike = !isLike;
              item.likeCount = item.likeCount + (isLike ? -1 : 1);
            }
            setListLocal((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(listLocal));
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), [listLocal]);

  // 删除评论
  var onDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee3(index, e) {
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            e.stopPropagation();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '确认删除这条评论？',
              content: '删除后无法找回，请谨慎操作。',
              success: function () {
                var _success = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee2(res) {
                  var item, _yield$withRequest3, _yield$withRequest4, err;
                  return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!res.confirm) {
                          _context2.next = 8;
                          break;
                        }
                        item = listLocal[index];
                        _context2.next = 4;
                        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.CommentApi.apiCommentIdDelete)({
                          id: item._id
                        });
                      case 4:
                        _yield$withRequest3 = _context2.sent;
                        _yield$withRequest4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_yield$withRequest3, 1);
                        err = _yield$withRequest4[0];
                        if (!err) {
                          setListLocal(listLocal.slice(0, index).concat(listLocal.slice(index + 1)));
                          (0,_utils__WEBPACK_IMPORTED_MODULE_4__.showToast)({
                            title: '删除成功',
                            icon: 'success'
                          });
                          replyCountLocal && (replyCountLocal -= 1);
                        }
                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                function success(_x5) {
                  return _success.apply(this, arguments);
                }
                return success;
              }()
            });
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }(), [listLocal]);

  // 点击
  var onItemClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {
    var _item$from, _item$from2;
    onCommentItemClick === null || onCommentItemClick === void 0 || onCommentItemClick((_item$from = item.from) === null || _item$from === void 0 ? void 0 : _item$from._id, parentId || item._id, (_item$from2 = item.from) === null || _item$from2 === void 0 || (_item$from2 = _item$from2.userInfo) === null || _item$from2 === void 0 ? void 0 : _item$from2.customName);
  }, [list, onCommentItemClick, parentId]);
  var loadReplyMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee4() {
    var _yield$withRequest5, _yield$withRequest6, err, res;
    return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.CommentApi.apiCommentCommentIdGet)({
            id: parentId,
            pageNum: String(pageNum),
            pageSize: '3'
          });
        case 2:
          _yield$withRequest5 = _context4.sent;
          _yield$withRequest6 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_yield$withRequest5, 2);
          err = _yield$withRequest6[0];
          res = _yield$withRequest6[1];
          setPageNum(pageNum + 1);
          if (!err && res) {
            setListLocal(listLocal.concat(res));
            // if (res.length < 3) {
            //   setShowReplyMore(false)
            // }
          }
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })), [listLocal, pageNum, parentId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: listLocal.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "".concat(prefix, "__community-no-data community-no-data"),
      children: "\u6682\u65E0\u8BC4\u8BBA"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: prefix,
      children: [listLocal.map(function (item, index) {
        var _from$userInfo, _from$userInfo2, _from$userInfo3, _from$userInfo4, _to$userInfo;
        var _item$replyComment = item.replyComment,
          replyComment = _item$replyComment === void 0 ? [] : _item$replyComment,
          content = item.content,
          from = item.from,
          type = item.type,
          to = item.to,
          isPublisher = item.isPublisher;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "".concat(prefix, "__item"),
            onClick: function onClick() {
              onItemClick(item);
              // setCurrentIndex(index)
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "".concat(prefix, "__item__avatar"),
              avatarSize: avatarSize,
              customAvatarUrl: from === null || from === void 0 || (_from$userInfo = from.userInfo) === null || _from$userInfo === void 0 ? void 0 : _from$userInfo.customAvatarUrl,
              avatarUrl: from === null || from === void 0 || (_from$userInfo2 = from.userInfo) === null || _from$userInfo2 === void 0 ? void 0 : _from$userInfo2.avatarUrl,
              _id: from === null || from === void 0 ? void 0 : from._id,
              onClickType: "jump"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "".concat(prefix, "__item-right"),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "".concat(prefix, "__item__title"),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_3__.NickName, {
                  className: "".concat(prefix, "__item__title__name"),
                  nickName: from === null || from === void 0 || (_from$userInfo3 = from.userInfo) === null || _from$userInfo3 === void 0 ? void 0 : _from$userInfo3.nickName,
                  customName: from === null || from === void 0 || (_from$userInfo4 = from.userInfo) === null || _from$userInfo4 === void 0 ? void 0 : _from$userInfo4.customName,
                  isPublisher: isPublisher,
                  tags: from === null || from === void 0 ? void 0 : from.tags
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_Time__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  className: "".concat(prefix, "__item__title__time"),
                  time: item.createdAt,
                  type: "relative"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                "user-select": true,
                className: "".concat(prefix, "__item__content"),
                children: type === _comment_input__WEBPACK_IMPORTED_MODULE_8__.CommentType.ReplyComment ? "@".concat(to === null || to === void 0 || (_to$userInfo = to.userInfo) === null || _to$userInfo === void 0 ? void 0 : _to$userInfo.customName, ": ").concat(content) : content
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "".concat(prefix, "__item-footer"),
                children: [isPublisher && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "".concat(prefix, "__item-footer__delete blue-text"),
                  onClick: function onClick(e) {
                    return onDelete(index, e);
                  },
                  children: "\u5220\u9664"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "".concat(prefix, "__item-footer__like"),
                  onClick: function onClick(e) {
                    return onLikeHandler(index, e);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                    src: item.isLike ? _assets_community_imgs_like_selected_png__WEBPACK_IMPORTED_MODULE_7__ : _assets_community_imgs_like_png__WEBPACK_IMPORTED_MODULE_6__,
                    mode: "widthFix"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                    className: item.isLike ? 'red-text' : '',
                    children: item.likeCount
                  })]
                })]
              })]
            })]
          }), (replyComment === null || replyComment === void 0 ? void 0 : replyComment.length) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "".concat(prefix, "__item-replay"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CommentList, {
              list: replyComment,
              avatarSize: "50rpx",
              parentId: item._id,
              onCommentItemClick: onCommentItemClick,
              replyCount: item.replyCount
            })
          })]
        }, item._id);
      }), parentId && showReplyMore && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "".concat(prefix, "__replay-more blue-text"),
        onClick: loadReplyMore,
        children: "\u52A0\u8F7D\u66F4\u591A..."
      })]
    })
  });
}
function CommentListWrapper(props) {
  var _props$list2 = props.list,
    list = _props$list2 === void 0 ? [] : _props$list2,
    onCommentSubmit = props.onCommentSubmit,
    _props$showInput = props.showInput,
    showInput = _props$showInput === void 0 ? false : _props$showInput,
    _props$hotList = props.hotList,
    hotList = _props$hotList === void 0 ? [] : _props$hotList,
    commentCount = props.commentCount;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_useState5, 2),
    currentComment = _useState6[0],
    setCurrentComment = _useState6[1];
  var onCommentSubmitHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().mark(function _callee5(value) {
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_12__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            console.log(value, currentComment === null || currentComment === void 0 ? void 0 : currentComment.to, currentComment === null || currentComment === void 0 ? void 0 : currentComment.commentId);
            _context5.next = 3;
            return onCommentSubmit === null || onCommentSubmit === void 0 ? void 0 : onCommentSubmit(value, currentComment === null || currentComment === void 0 ? void 0 : currentComment.to, currentComment === null || currentComment === void 0 ? void 0 : currentComment.commentId);
          case 3:
            setCurrentComment(null);
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x6) {
      return _ref4.apply(this, arguments);
    };
  }(), [onCommentSubmit, currentComment]);
  var onCommentItemClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (to, commentId, nickName) {
    setCurrentComment({
      to: to,
      commentId: commentId,
      nickName: nickName
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [hotList && hotList.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "".concat(prefix, "__comment-title"),
        children: ["\u70ED\u95E8\u8BC4\u8BBA (", hotList.length, ")"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CommentList, {
        list: hotList,
        onCommentItemClick: onCommentItemClick
      })]
    }), commentCount !== undefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "".concat(prefix, "__comment-title"),
      children: ["\u6700\u65B0\u8BC4\u8BBA (", commentCount, ")"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(CommentList, {
      list: list,
      onCommentItemClick: onCommentItemClick
    }), showInput && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_comment_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSubmit: onCommentSubmitHandler,
      placeholder: currentComment !== null && currentComment !== void 0 && currentComment.nickName ? "\u56DE\u590D".concat(currentComment === null || currentComment === void 0 ? void 0 : currentComment.nickName) : '快来撩一下~',
      isReply: !!(currentComment !== null && currentComment !== void 0 && currentComment.to),
      onBlur: function onBlur() {
        setCurrentComment(null);
      }
    })]
  });
}

/***/ }),

/***/ "./src/pages3/community/_components/comment-list/index.ts":
/*!****************************************************************!*\
  !*** ./src/pages3/community/_components/comment-list/index.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _CommentList__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentList */ "./src/pages3/community/_components/comment-list/CommentList.tsx");



/***/ }),

/***/ "./src/pages3/community/_components/list-item/ListItem.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages3/community/_components/list-item/ListItem.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ListItem; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Avatar */ "./src/components/Avatar/index.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _components_Time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Time */ "./src/components/Time/index.ts");
/* harmony import */ var _components_ImageCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ImageCache */ "./src/components/ImageCache/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var prefix = 'community-list-item';
function ListItem(props) {
  var userId = props.userId,
    onClick = props.onClick,
    userInfo = props.userInfo,
    _props$showDot = props.showDot,
    showDot = _props$showDot === void 0 ? false : _props$showDot,
    time = props.time,
    content = props.content,
    rightContent = props.rightContent,
    photo = props.photo,
    userTags = props.userTags;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: prefix,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "".concat(prefix, "-left"),
      avatarSize: "70rpx",
      avatarUrl: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatarUrl,
      customAvatarUrl: userInfo === null || userInfo === void 0 ? void 0 : userInfo.customAvatarUrl,
      onClickType: userId ? 'jump' : undefined,
      _id: userId
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "".concat(prefix, "-center"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "".concat(prefix, "-center__title"),
        children: [showDot && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "".concat(prefix, "-center__dot")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_1__.NickName, {
          className: "".concat(prefix, "-center__name"),
          nickName: userInfo === null || userInfo === void 0 ? void 0 : userInfo.nickName,
          customName: userInfo === null || userInfo === void 0 ? void 0 : userInfo.customName,
          tags: userTags
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        "user-select": true,
        className: "".concat(prefix, "-center__content"),
        children: content
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Time__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "".concat(prefix, "-center__time"),
        type: "relative",
        time: time
      })]
    }), photo !== null && photo !== void 0 && photo.key ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_ImageCache__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "".concat(prefix, "-right image"),
      mode: "aspectFill",
      src: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCdnUrl)(photo)
    }) : rightContent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "".concat(prefix, "-right"),
      children: rightContent
    }) : null]
  });
}

/***/ }),

/***/ "./src/pages3/community/_components/list-item/index.ts":
/*!*************************************************************!*\
  !*** ./src/pages3/community/_components/list-item/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItem */ "./src/pages3/community/_components/list-item/ListItem.tsx");


/***/ }),

/***/ "./src/pages3/community/_components/mate-message-list/index.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages3/community/_components/mate-message-list/index.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MateMessageList; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/router */ "./src/utils/router.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app.config */ "./src/app.config.ts");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item */ "./src/pages3/community/_components/list-item/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function MateMessageList(props) {
  var list = props.list;
  if (list.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "community-no-data",
      children: "\u6682\u672A\u53D1\u5E03\u5185\u5BB9"
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: list.map(function (item) {
      var _item$publisher, _item$publisher2, _item$photos;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_list_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        userInfo: (_item$publisher = item.publisher) === null || _item$publisher === void 0 ? void 0 : _item$publisher.userInfo,
        userTags: (_item$publisher2 = item.publisher) === null || _item$publisher2 === void 0 ? void 0 : _item$publisher2.tags,
        onClick: function onClick() {
          (0,_utils_router__WEBPACK_IMPORTED_MODULE_1__.goPage)("".concat(_app_config__WEBPACK_IMPORTED_MODULE_2__.routes.saleWallDetail, "?id=").concat(item._id));
        },
        time: item.createdAt,
        photo: (_item$photos = item.photos) === null || _item$photos === void 0 ? void 0 : _item$photos[0],
        content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          children: ["\u820D\u53CB\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
            className: "blue-text",
            children: ["@", item.name]
          }), "\xA0", item.content]
        })
      }, item._id);
    })
  });
}

/***/ }),

/***/ "./src/pages3/community/_components/sale-wall-item/SaleWallItem.tsx":
/*!**************************************************************************!*\
  !*** ./src/pages3/community/_components/sale-wall-item/SaleWallItem.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WallItem; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/router */ "./src/utils/router.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app.config */ "./src/app.config.ts");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Avatar */ "./src/components/Avatar/index.ts");
/* harmony import */ var _components_Time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Time */ "./src/components/Time/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_community_imgs_sale_wall_like_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/community-imgs/sale_wall_like.png */ "./src/assets/community-imgs/sale_wall_like.png");
/* harmony import */ var _assets_community_imgs_sale_wall_liked_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/community-imgs/sale_wall_liked.png */ "./src/assets/community-imgs/sale_wall_liked.png");
/* harmony import */ var _assets_community_imgs_comment_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/assets/community-imgs/comment.png */ "./src/assets/community-imgs/comment.png");
/* harmony import */ var _components_ImageCache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/ImageCache */ "./src/components/ImageCache/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);

















// import { Avatar, Time } from '../publisher-title'



var prefix = 'sale-wall-item';
function WallItem(props) {
  var _props$data = props.data,
    _props$data2 = _props$data === void 0 ? {} : _props$data,
    _props$data2$photos = _props$data2.photos,
    photos = _props$data2$photos === void 0 ? [] : _props$data2$photos,
    publisher = _props$data2.publisher,
    likeCount = _props$data2.likeCount,
    isLike = _props$data2.isLike,
    _id = _props$data2._id,
    createdAt = _props$data2.createdAt,
    commentCount = _props$data2.commentCount,
    isPublisher = _props$data2.isPublisher,
    timeType = props.timeType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(isLike),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState, 2),
    localIsLike = _useState2[0],
    setLocalIsLike = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(likeCount || 0),
    _useState4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_useState3, 2),
    localIsLikeCount = _useState4[0],
    setLocalIsLikeCount = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setLocalIsLike(isLike);
    setLocalIsLikeCount(likeCount || 0);
  }, [isLike, likeCount]);
  var onLikeClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(/*#__PURE__*/function () {
    var _ref = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_15__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().mark(function _callee(e) {
      var _yield$withRequest, _yield$withRequest2, err;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_16__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.stopPropagation();
            _context.next = 3;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_0__.APIS.SaleWallApi.apiSaleWallLikeIdPut)({
              id: _id || ''
            });
          case 3:
            _yield$withRequest = _context.sent;
            _yield$withRequest2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_yield$withRequest, 1);
            err = _yield$withRequest2[0];
            // 本地变更
            if (!err) {
              setLocalIsLike(!localIsLike);
              setLocalIsLikeCount(localIsLikeCount + (localIsLike ? -1 : 1));
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [_id, localIsLike, localIsLikeCount]);
  var onItemClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    (0,_utils_router__WEBPACK_IMPORTED_MODULE_2__.goPage)("".concat(_app_config__WEBPACK_IMPORTED_MODULE_5__.routes.saleWallDetail, "?id=").concat(_id));
  }, [_id]);
  var _photos$ = photos[0],
    height = _photos$.height,
    width = _photos$.width,
    key = _photos$.key;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
    className: prefix,
    onClick: onItemClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_ImageCache__WEBPACK_IMPORTED_MODULE_12__["default"], {
      style: {
        height: height && width ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().pxTransform(height / width * 347) : 'auto'
      },
      className: "".concat(prefix, "__photo"),
      src: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getCdnUrl)(photos[0]),
      mode: "widthFix"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
      className: "".concat(prefix, "__info"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Avatar__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__["default"])((0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_18__["default"])({
        className: "".concat(prefix, "__avatar")
      }, publisher === null || publisher === void 0 ? void 0 : publisher.userInfo), {}, {
        avatarSize: "40rpx",
        onClickType: "jump",
        _id: publisher === null || publisher === void 0 ? void 0 : publisher._id,
        isPublisher: isPublisher,
        userTags: publisher === null || publisher === void 0 ? void 0 : publisher.tags
        // avatarUrl={publisher?.userInfo?.avatarUrl || ''}
        // nickName={publisher?.userInfo?.nickName || ''}
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
        className: "".concat(prefix, "__info-bottom"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Time__WEBPACK_IMPORTED_MODULE_7__["default"], {
          time: createdAt || '',
          type: timeType
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("".concat(prefix, "__info-like"), {
            active: localIsLike && !isLike
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
            src: _assets_community_imgs_comment_png__WEBPACK_IMPORTED_MODULE_11__,
            mode: "widthFix"
          }), commentCount, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
            className: "".concat(prefix, "__info-like-icon"),
            src: localIsLike ? _assets_community_imgs_sale_wall_liked_png__WEBPACK_IMPORTED_MODULE_10__ : _assets_community_imgs_sale_wall_like_png__WEBPACK_IMPORTED_MODULE_9__,
            mode: "widthFix",
            onClick: onLikeClick
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Text, {
            className: localIsLike ? 'red-text' : '',
            children: localIsLikeCount
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages3/community/_components/sale-wall-item/index.ts":
/*!******************************************************************!*\
  !*** ./src/pages3/community/_components/sale-wall-item/index.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _SaleWallItem__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _SaleWallItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleWallItem */ "./src/pages3/community/_components/sale-wall-item/SaleWallItem.tsx");


/***/ }),

/***/ "./src/pages3/community/_components/tab/Tab.tsx":
/*!******************************************************!*\
  !*** ./src/pages3/community/_components/tab/Tab.tsx ***!
  \******************************************************/
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

/***/ "./src/pages3/community/_components/tab/index.ts":
/*!*******************************************************!*\
  !*** ./src/pages3/community/_components/tab/index.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _Tab__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./src/pages3/community/_components/tab/Tab.tsx");


/***/ }),

/***/ "./src/pages3/community/_components/wall-item/WallItem.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages3/community/_components/wall-item/WallItem.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WallItem; }
/* harmony export */ });
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services2 */ "./src/services2/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "../../node_modules/.pnpm/@tarojs+plugin-platform-weapp@3.6.13_@types+react@18.3.18_postcss@8.5.2/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "webpack/container/remote/classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_community_imgs_comment_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/community-imgs/comment.png */ "./src/assets/community-imgs/comment.png");
/* harmony import */ var _assets_community_imgs_like_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/community-imgs/like.png */ "./src/assets/community-imgs/like.png");
/* harmony import */ var _assets_community_imgs_view_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/community-imgs/view.png */ "./src/assets/community-imgs/view.png");
/* harmony import */ var _assets_community_imgs_like_selected_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/community-imgs/like_selected.png */ "./src/assets/community-imgs/like_selected.png");
/* harmony import */ var _components_publisher_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/publisher-title */ "./src/components/publisher-title/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
















var prefix = 'wall-item';
var getPhotosCol = function getPhotosCol() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (length === 4) {
    return 2;
  }
  if (length >= 3) {
    return 3;
  }
  return length;
};
function WallItem(props) {
  var _props$data = props.data,
    _props$data2 = _props$data === void 0 ? {} : _props$data,
    _props$data2$photos = _props$data2.photos,
    photos = _props$data2$photos === void 0 ? [] : _props$data2$photos,
    to = _props$data2.to,
    publisher = _props$data2.publisher,
    content = _props$data2.content,
    likeCount = _props$data2.likeCount,
    isLike = _props$data2.isLike,
    _id = _props$data2._id,
    createdAt = _props$data2.createdAt,
    commentCount = _props$data2.commentCount,
    isPublisher = _props$data2.isPublisher,
    _props$data2$hotComme = _props$data2.hotComments,
    hotComments = _props$data2$hotComme === void 0 ? [] : _props$data2$hotComme,
    viewCount = _props$data2.viewCount,
    timeType = props.timeType,
    onClick = props.onClick,
    _props$showDelete = props.showDelete,
    showDelete = _props$showDelete === void 0 ? false : _props$showDelete,
    _props$showHotComment = props.showHotComments,
    showHotComments = _props$showHotComment === void 0 ? false : _props$showHotComment;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isLike),
    _useState2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState, 2),
    localIsLike = _useState2[0],
    setLocalIsLike = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(likeCount || 0),
    _useState4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_useState3, 2),
    localIsLikeCount = _useState4[0],
    setLocalIsLikeCount = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLocalIsLike(isLike);
    setLocalIsLikeCount(likeCount || 0);
  }, [isLike, likeCount]);
  var onImageClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, e) {
    e.stopPropagation();
    // @ts-ignore
    wx.previewMedia({
      current: index,
      sources: photos.map(function (item) {
        return {
          url: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCdnUrl)(item),
          type: 'image'
        };
      }),
      showmenu: true
    });
  }, [photos]);
  var onLikeClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(/*#__PURE__*/function () {
    var _ref = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__["default"])().mark(function _callee(e) {
      var _yield$withRequest, _yield$withRequest2, err;
      return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__["default"])().wrap(function _callee$(_context) {
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
            return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.WallApi.apiWallLikeIdPut)({
              id: _id
            });
          case 5:
            _yield$withRequest = _context.sent;
            _yield$withRequest2 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_yield$withRequest, 1);
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
  var onDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '确认删除这条动态？',
      content: '删除后无法找回，请谨慎操作。',
      success: function () {
        var _success = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])(/*#__PURE__*/(0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__["default"])().mark(function _callee2(res) {
          var _yield$withRequest3, _yield$withRequest4, err;
          return (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_13__["default"])().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!res.confirm) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 3;
                return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.withRequest)(_services2__WEBPACK_IMPORTED_MODULE_2__.APIS.WallApi.apiWallIdDelete)({
                  id: _id || ''
                });
              case 3:
                _yield$withRequest3 = _context2.sent;
                _yield$withRequest4 = (0,_Users_bytedance_my_src_idea_wechat_app_hrbust_node_modules_pnpm_babel_runtime_7_26_9_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_yield$withRequest3, 1);
                err = _yield$withRequest4[0];
                if (!err) {
                  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.showToast)({
                    title: '删除成功',
                    icon: 'success',
                    finished: function finished() {
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
                    }
                  });
                }
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function success(_x2) {
          return _success.apply(this, arguments);
        }
        return success;
      }()
    });
  }, [_id]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
    className: prefix,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_publisher_title__WEBPACK_IMPORTED_MODULE_9__["default"], {
      time: createdAt,
      publisher: publisher,
      timeType: timeType,
      isPublisher: isPublisher
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(prefix, "__photos"), "col-".concat(getPhotosCol(photos === null || photos === void 0 ? void 0 : photos.length))),
      children: photos === null || photos === void 0 ? void 0 : photos.map(function (photo, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
          onClick: function onClick(e) {
            return onImageClick(index, e);
          },
          className: "".concat(prefix, "__photos-item"),
          mode: photos.length > 1 ? 'aspectFill' : 'widthFix',
          src: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getCdnUrl)(photo)
        }, photo.key);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
      "user-select": true,
      className: "".concat(prefix, "__content"),
      children: [to && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: "".concat(prefix, "__content-to"),
        children: ["@", to]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
        className: "".concat(prefix, "__content-detail"),
        children: content
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "".concat(prefix, "__footer"),
      children: [showDelete && isPublisher && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "".concat(prefix, "__footer-delete blue-text"),
        onClick: onDelete,
        children: "\u5220\u9664"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "".concat(prefix, "__footer-item"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
          src: _assets_community_imgs_view_png__WEBPACK_IMPORTED_MODULE_7__,
          className: "view-icon",
          mode: "widthFix"
        }), viewCount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "".concat(prefix, "__footer-item"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
          src: _assets_community_imgs_comment_png__WEBPACK_IMPORTED_MODULE_5__,
          mode: "widthFix"
        }), commentCount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "".concat(prefix, "__footer-item"),
        onClick: onLikeClick,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
          src: localIsLike ? _assets_community_imgs_like_selected_png__WEBPACK_IMPORTED_MODULE_8__ : _assets_community_imgs_like_png__WEBPACK_IMPORTED_MODULE_6__,
          mode: "widthFix"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
          className: localIsLike ? 'red-text' : '',
          children: localIsLikeCount
        })]
      })]
    }), showHotComments && hotComments.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
      className: "".concat(prefix, "__comment-list"),
      children: hotComments.map(function (item) {
        var _item$from;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "".concat(prefix, "__comment-list__item"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "blue-text",
            children: ["@", (_item$from = item.from) === null || _item$from === void 0 || (_item$from = _item$from.userInfo) === null || _item$from === void 0 ? void 0 : _item$from.customName, ":", ' ']
          }), item.content]
        }, item._id);
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages3/community/_components/wall-item/index.ts":
/*!*************************************************************!*\
  !*** ./src/pages3/community/_components/wall-item/index.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _WallItem__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _WallItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WallItem */ "./src/pages3/community/_components/wall-item/WallItem.tsx");


/***/ }),

/***/ "./src/assets/community-imgs/sale_wall_like.png":
/*!******************************************************!*\
  !*** ./src/assets/community-imgs/sale_wall_like.png ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/community-imgs/sale_wall_like.png";

/***/ }),

/***/ "./src/assets/community-imgs/sale_wall_liked.png":
/*!*******************************************************!*\
  !*** ./src/assets/community-imgs/sale_wall_liked.png ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/community-imgs/sale_wall_liked.png";

/***/ })

}]);
//# sourceMappingURL=sub-vendors.js.map