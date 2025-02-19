"use strict";require("../../../sub-vendors.js");(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages3/community/_components/wemark/wemark"],{

/***/ "./src/pages3/community/_components/wemark/parser.js":
/*!***********************************************************!*\
  !*** ./src/pages3/community/_components/wemark/parser.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/typeof.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/typeof.js")["default"]);
var Remarkable = __webpack_require__(/*! ./remarkable */ "./src/pages3/community/_components/wemark/remarkable.js");
var parser = new Remarkable({
  html: true
});
var prism = __webpack_require__(/*! ./prism */ "./src/pages3/community/_components/wemark/prism.js");
function parse(md, options) {
  if (!options) options = {};
  var tokens = parser.parse(md, {});

  // markdwon渲染列表
  var renderList = [];
  var env = [];
  // 记录当前list深度
  var listLevel = 0;
  // 记录第N级ol的顺序
  var orderNum = [0, 0];
  var tmp;

  // 获取inline内容
  var getInlineContent = function getInlineContent(inlineToken) {
    var ret = [];
    var env;
    var tokenData = {};
    if (inlineToken.type === 'htmlblock') {
      // 匹配video
      // 兼容video[src]和video > source[src]
      var videoRegExp = /<video.*?src\s*=\s*['"]*([^\s^'^"]+).*?(poster\s*=\s*['"]*([^\s^'^"]+).*?)?(?:\/\s*>|<\/video>)/g;
      var match;
      var html = inlineToken.content.replace(/\n/g, '');
      while (match = videoRegExp.exec(html)) {
        if (match[1]) {
          var retParam = {
            type: 'video',
            src: match[1]
          };
          if (match[3]) {
            retParam.poster = match[3];
          }
          ret.push(retParam);
        }
      }
    } else {
      // console.log(inlineToken);
      inlineToken.children && inlineToken.children.forEach(function (token, index) {
        if (['text', 'code'].indexOf(token.type) > -1) {
          ret.push({
            type: env || token.type,
            content: token.content,
            data: tokenData
          });
          env = '';
          tokenData = {};
        } else if (token.type === 'del_open') {
          env = 'deleted';
        } else if (token.type === 'softbreak') {
          // todo:处理li的问题
          /* ret.push({
          	type: 'text',
          	content: ' '
          }); */
        } else if (token.type === 'hardbreak') {
          ret.push({
            type: 'text',
            content: '\n'
          });
        } else if (token.type === 'strong_open') {
          if (env === 'em') {
            env = 'strong_em';
          } else {
            env = 'strong';
          }
        } else if (token.type === 'em_open') {
          if (env === 'strong') {
            env = 'strong_em';
          } else {
            env = 'em';
          }
        } else if (token.type === 'link_open') {
          if (options.link) {
            env = 'link';
            tokenData = {
              href: token.href
            };
          }
        } else if (token.type === 'image') {
          ret.push({
            type: token.type,
            src: token.src
          });
        }
      });
    }
    return ret;
  };
  var getBlockContent = function getBlockContent(blockToken, index, firstInLi) {
    if (blockToken.type === 'htmlblock') {
      return getInlineContent(blockToken);
    } else if (blockToken.type === 'heading_open') {
      return {
        type: 'h' + blockToken.hLevel,
        content: getInlineContent(tokens[index + 1])
      };
    } else if (blockToken.type === 'paragraph_open') {
      // var type = 'p';
      var prefix = '';
      if (env.length) {
        prefix = env.join('_') + '_';
      }
      var content = getInlineContent(tokens[index + 1]);

      // 处理ol前的数字
      if (env[env.length - 1] === 'li' && env[env.length - 2] === 'ol') {
        var _prefix = '　';
        if (firstInLi) {
          _prefix = orderNum[listLevel - 1] + '. ';
        }
        content.unshift({
          type: 'text',
          content: _prefix
        });
      }
      return {
        type: prefix + 'p',
        content: content
      };
    } else if (blockToken.type === 'fence' || blockToken.type === 'code') {
      content = blockToken.content;
      var highlight = false;
      if (options.highlight && blockToken.params && prism.languages[blockToken.params]) {
        content = prism.tokenize(content, prism.languages[blockToken.params]);
        highlight = true;
      }
      var _flattenTokens = function flattenTokens(tokensArr) {
        var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var parentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        if (Array.isArray(tokensArr)) {
          tokensArr.forEach(function (el) {
            if (_typeof(el) === 'object') {
              // el.type = parentType + ' wemark_inline_code_' + el.type;
              if (Array.isArray(el.content)) {
                _flattenTokens(el.content, result, el.type);
              } else {
                _flattenTokens(el, result, el.type);
              }
            } else {
              var obj = {};
              obj.type = parentType || 'text';
              // obj.type = parentType + ' wemark_inline_code_';
              obj.content = el;
              result.push(obj);
            }
          });
          return result;
        } else {
          result.push(tokensArr);
          return result;
        }
      };
      if (highlight) {
        var tokenList = content;
        content = [];
        tokenList.forEach(function (token) {
          // let contentListForToken = [];
          if (Array.isArray(token.content)) {
            content = content.concat(_flattenTokens(token.content, [], ''));
          } else {
            content.push(token);
          }
        });
      }
      // flatten nested tokens in html
      // if (blockToken.params === 'html') {
      // content = flattenTokens(content)
      // }
      // console.log(content);

      return {
        type: 'code',
        highlight: highlight,
        content: content
      };
    } else if (blockToken.type === 'bullet_list_open') {
      env.push('ul');
      listLevel++;
    } else if (blockToken.type === 'ordered_list_open') {
      env.push('ol');
      listLevel++;
    } else if (blockToken.type === 'list_item_open') {
      env.push('li');
      if (env[env.length - 2] === 'ol') {
        orderNum[listLevel - 1]++;
      }
    } else if (blockToken.type === 'list_item_close') {
      env.pop();
    } else if (blockToken.type === 'bullet_list_close') {
      env.pop();
      listLevel--;
    } else if (blockToken.type === 'ordered_list_close') {
      env.pop();
      listLevel--;
      orderNum[listLevel] = 0;
    } else if (blockToken.type === 'blockquote_open') {
      env.push('blockquote');
    } else if (blockToken.type === 'blockquote_close') {
      env.pop();
    } else if (blockToken.type === 'tr_open') {
      tmp = {
        type: 'table_tr',
        content: []
      };
      return tmp;
    } else if (blockToken.type === 'th_open') {
      tmp.content.push({
        type: 'table_th',
        content: getInlineContent(tokens[index + 1]).map(function (inline) {
          return inline.content;
        }).join('')
      });
    } else if (blockToken.type === 'td_open') {
      tmp.content.push({
        type: 'table_td',
        content: getInlineContent(tokens[index + 1]).map(function (inline) {
          return inline.content;
        }).join('')
      });
    }
  };
  tokens.forEach(function (token, index) {
    // 标记是否刚进入li，如果刚进入，可以加符号/序号，否则不加
    var firstInLi = false;
    if (token.type === 'paragraph_open' && tokens[index - 1] && tokens[index - 1].type === 'list_item_open') {
      firstInLi = true;
    }
    var blockContent = getBlockContent(token, index, firstInLi);
    if (!blockContent) return;
    if (!Array.isArray(blockContent)) {
      blockContent = [blockContent];
    }
    blockContent.forEach(function (block) {
      if (Array.isArray(block.content)) {
        block.isArray = true;
      } else {
        block.isArray = false;
      }
      renderList.push(block);
    });
  });
  return renderList;
}
module.exports = {
  parse: parse
};

/***/ }),

/***/ "./src/pages3/community/_components/wemark/prism.js":
/*!**********************************************************!*\
  !*** ./src/pages3/community/_components/wemark/prism.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["window"];
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["document"];
/* PrismJS 1.15.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+basic+markup-templating+go+java+json+php+sql+python+typescript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
  Prism = function () {
    var e = /\blang(?:uage)?-([\w-]+)\b/i,
      t = 0,
      n = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
          encode: function encode(e) {
            return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          type: function type(e) {
            return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
          },
          objId: function objId(e) {
            return e.__id || Object.defineProperty(e, "__id", {
              value: ++t
            }), e.__id;
          },
          clone: function clone(e, t) {
            var r = n.util.type(e);
            switch (t = t || {}, r) {
              case "Object":
                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                var a = {};
                t[n.util.objId(e)] = a;
                for (var l in e) e.hasOwnProperty(l) && (a[l] = n.util.clone(e[l], t));
                return a;
              case "Array":
                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                var a = [];
                return t[n.util.objId(e)] = a, e.forEach(function (e, r) {
                  a[r] = n.util.clone(e, t);
                }), a;
            }
            return e;
          }
        },
        languages: {
          extend: function extend(e, t) {
            var r = n.util.clone(n.languages[e]);
            for (var a in t) r[a] = t[a];
            return r;
          },
          insertBefore: function insertBefore(e, t, r, a) {
            a = a || n.languages;
            var l = a[e];
            if (2 == arguments.length) {
              r = arguments[1];
              for (var i in r) r.hasOwnProperty(i) && (l[i] = r[i]);
              return l;
            }
            var o = {};
            for (var s in l) if (l.hasOwnProperty(s)) {
              if (s == t) for (var i in r) r.hasOwnProperty(i) && (o[i] = r[i]);
              o[s] = l[s];
            }
            return n.languages.DFS(n.languages, function (t, n) {
              n === a[e] && t != e && (this[t] = o);
            }), a[e] = o;
          },
          DFS: function DFS(e, t, r, a) {
            a = a || {};
            for (var l in e) e.hasOwnProperty(l) && (t.call(e, l, e[l], r || l), "Object" !== n.util.type(e[l]) || a[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || a[n.util.objId(e[l])] || (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, a)) : (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, a)));
          }
        },
        plugins: {},
        highlightAll: function highlightAll(e, t) {
          n.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function highlightAllUnder(e, t, r) {
          var a = {
            callback: r,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          n.hooks.run("before-highlightall", a);
          for (var l, i = a.elements || e.querySelectorAll(a.selector), o = 0; l = i[o++];) n.highlightElement(l, t === !0, a.callback);
        },
        highlightElement: function highlightElement(t, r, a) {
          for (var l, i, o = t; o && !e.test(o.className);) o = o.parentNode;
          o && (l = (o.className.match(e) || [, ""])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, t.parentNode && (o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l));
          var s = t.textContent,
            u = {
              element: t,
              language: l,
              grammar: i,
              code: s
            };
          if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (n.hooks.run("before-highlight", u), u.element.textContent = u.code, n.hooks.run("after-highlight", u)), n.hooks.run("complete", u), void 0;
          if (n.hooks.run("before-highlight", u), r && _self.Worker) {
            var g = new Worker(n.filename);
            g.onmessage = function (e) {
              u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
            }, g.postMessage(JSON.stringify({
              language: u.language,
              code: u.code,
              immediateClose: !0
            }));
          } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a && a.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
        },
        highlight: function highlight(e, t, a) {
          var l = {
            code: e,
            grammar: t,
            language: a
          };
          return n.hooks.run("before-tokenize", l), l.tokens = n.tokenize(l.code, l.grammar), n.hooks.run("after-tokenize", l), r.stringify(n.util.encode(l.tokens), l.language);
        },
        matchGrammar: function matchGrammar(e, t, r, a, l, i, o) {
          var s = n.Token;
          for (var u in r) if (r.hasOwnProperty(u) && r[u]) {
            if (u == o) return;
            var g = r[u];
            g = "Array" === n.util.type(g) ? g : [g];
            for (var c = 0; c < g.length; ++c) {
              var h = g[c],
                f = h.inside,
                d = !!h.lookbehind,
                m = !!h.greedy,
                p = 0,
                y = h.alias;
              if (m && !h.pattern.global) {
                var v = h.pattern.toString().match(/[imuy]*$/)[0];
                h.pattern = RegExp(h.pattern.source, v + "g");
              }
              h = h.pattern || h;
              for (var b = a, k = l; b < t.length; k += t[b].length, ++b) {
                var w = t[b];
                if (t.length > e.length) return;
                if (!(w instanceof s)) {
                  if (m && b != t.length - 1) {
                    h.lastIndex = k;
                    var _ = h.exec(e);
                    if (!_) break;
                    for (var j = _.index + (d ? _[1].length : 0), P = _.index + _[0].length, A = b, x = k, O = t.length; O > A && (P > x || !t[A].type && !t[A - 1].greedy); ++A) x += t[A].length, j >= x && (++b, k = x);
                    if (t[b] instanceof s) continue;
                    I = A - b, w = e.slice(k, x), _.index -= k;
                  } else {
                    h.lastIndex = 0;
                    var _ = h.exec(w),
                      I = 1;
                  }
                  if (_) {
                    d && (p = _[1] ? _[1].length : 0);
                    var j = _.index + p,
                      _ = _[0].slice(p),
                      P = j + _.length,
                      N = w.slice(0, j),
                      S = w.slice(P),
                      C = [b, I];
                    N && (++b, k += N.length, C.push(N));
                    var E = new s(u, f ? n.tokenize(_, f) : _, y, _, m);
                    if (C.push(E), S && C.push(S), Array.prototype.splice.apply(t, C), 1 != I && n.matchGrammar(e, t, r, b, k, !0, u), i) break;
                  } else if (i) break;
                }
              }
            }
          }
        },
        tokenize: function tokenize(e, t) {
          var r = [e],
            a = t.rest;
          if (a) {
            for (var l in a) t[l] = a[l];
            delete t.rest;
          }
          return n.matchGrammar(e, r, t, 0, 0, !1), r;
        },
        hooks: {
          all: {},
          add: function add(e, t) {
            var r = n.hooks.all;
            r[e] = r[e] || [], r[e].push(t);
          },
          run: function run(e, t) {
            var r = n.hooks.all[e];
            if (r && r.length) for (var a, l = 0; a = r[l++];) a(t);
          }
        }
      },
      r = n.Token = function (e, t, n, r, a) {
        this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length, this.greedy = !!a;
      };
    if (r.stringify = function (e, t, a) {
      if ("string" == typeof e) return e;
      if ("Array" === n.util.type(e)) return e.map(function (n) {
        return r.stringify(n, t, e);
      }).join("");
      var l = {
        type: e.type,
        content: r.stringify(e.content, t, a),
        tag: "span",
        classes: ["token", e.type],
        attributes: {},
        language: t,
        parent: a
      };
      if (e.alias) {
        var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
        Array.prototype.push.apply(l.classes, i);
      }
      n.hooks.run("wrap", l);
      var o = Object.keys(l.attributes).map(function (e) {
        return e + '="' + (l.attributes[e] || "").replace(/"/g, "&quot;") + '"';
      }).join(" ");
      return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + l.content + "</" + l.tag + ">";
    }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function (e) {
      var t = JSON.parse(e.data),
        r = t.language,
        a = t.code,
        l = t.immediateClose;
      _self.postMessage(n.highlight(a, n.languages[r], r)), l && _self.close();
    }, !1), _self.Prism) : _self.Prism;
    var a = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return a && (n.filename = a.src, n.manual || a.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
  }();
 true && module.exports && (module.exports = Prism), "undefined" != typeof __webpack_require__.g && (__webpack_require__.g.Prism = Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: /<!DOCTYPE[\s\S]+?>/i,
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
        inside: {
          punctuation: [/^=/, {
            pattern: /(^|[^\\])["']/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = {
  comment: /\/\*[\s\S]*?\*\//,
  atrule: {
    pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
    inside: {
      rule: /@[\w-]+/
    }
  },
  url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  selector: /[^{}\s][^{};]*?(?=\s*\{)/,
  string: {
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
  important: /\B!important\b/i,
  "function": /[-a-z0-9]+(?=\()/i,
  punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
  style: {
    pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
    lookbehind: !0,
    inside: Prism.languages.css,
    alias: "language-css",
    greedy: !0
  }
}), Prism.languages.insertBefore("inside", "attr-value", {
  "style-attr": {
    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
    inside: {
      "attr-name": {
        pattern: /^\s*style/i,
        inside: Prism.languages.markup.tag.inside
      },
      punctuation: /^\s*=\s*['"]|['"]\s*$/,
      "attr-value": {
        pattern: /.+/i,
        inside: Prism.languages.css
      }
    },
    alias: "language-css"
  }
}, Prism.languages.markup.tag));
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  "boolean": /\b(?:true|false)\b/,
  "function": /[a-z0-9_]+(?=\()/i,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  "function": /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0
  },
  "function-variable": {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
    alias: "function"
  },
  constant: /\b[A-Z][A-Z\d_]*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\${[^}]+}/,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  }
}), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
  script: {
    pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
    lookbehind: !0,
    inside: Prism.languages.javascript,
    alias: "language-javascript",
    greedy: !0
  }
}), Prism.languages.js = Prism.languages.javascript;
Prism.languages.basic = {
  comment: {
    pattern: /(?:!|REM\b).+/i,
    inside: {
      keyword: /^REM/i
    }
  },
  string: {
    pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
    greedy: !0
  },
  number: /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
  keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
  "function": /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
  operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
  punctuation: /[,;:()]/
};
Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], {
  buildPlaceholders: {
    value: function value(e, t, n, a) {
      e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function (n) {
        if ("function" == typeof a && !a(n)) return n;
        for (var r = e.tokenStack.length; -1 !== e.code.indexOf("___" + t.toUpperCase() + r + "___");) ++r;
        return e.tokenStack[r] = n, "___" + t.toUpperCase() + r + "___";
      }), e.grammar = Prism.languages.markup);
    }
  },
  tokenizePlaceholders: {
    value: function value(e, t) {
      if (e.language === t && e.tokenStack) {
        e.grammar = Prism.languages[t];
        var n = 0,
          a = Object.keys(e.tokenStack),
          _r = function r(o) {
            if (!(n >= a.length)) for (var i = 0; i < o.length; i++) {
              var g = o[i];
              if ("string" == typeof g || g.content && "string" == typeof g.content) {
                var c = a[n],
                  s = e.tokenStack[c],
                  l = "string" == typeof g ? g : g.content,
                  p = l.indexOf("___" + t.toUpperCase() + c + "___");
                if (p > -1) {
                  ++n;
                  var f,
                    u = l.substring(0, p),
                    _ = new Prism.Token(t, Prism.tokenize(s, e.grammar, t), "language-" + t, s),
                    k = l.substring(p + ("___" + t.toUpperCase() + c + "___").length);
                  if (u || k ? (f = [u, _, k].filter(function (e) {
                    return !!e;
                  }), _r(f)) : f = _, "string" == typeof g ? Array.prototype.splice.apply(o, [i, 1].concat(f)) : g.content = f, n >= a.length) break;
                }
              } else g.content && "string" != typeof g.content && _r(g.content);
            }
          };
        _r(e.tokens);
      }
    }
  }
});
Prism.languages.go = Prism.languages.extend("clike", {
  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
  "boolean": /\b(?:_|iota|nil|true|false)\b/,
  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  string: {
    pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: !0
  }
}), delete Prism.languages.go["class-name"];
Prism.languages.java = Prism.languages.extend("clike", {
  keyword: /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
  number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
  operator: {
    pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
    lookbehind: !0
  }
}), Prism.languages.insertBefore("java", "function", {
  annotation: {
    alias: "punctuation",
    pattern: /(^|[^.])@\w+/,
    lookbehind: !0
  }
}), Prism.languages.insertBefore("java", "class-name", {
  generics: {
    pattern: /<\s*\w+(?:\.\w+)?(?:\s*,\s*\w+(?:\.\w+)?)*>/i,
    alias: "function",
    inside: {
      keyword: Prism.languages.java.keyword,
      punctuation: /[<>(),.:]/
    }
  }
});
Prism.languages.json = {
  property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
  string: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: !0
  },
  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  punctuation: /[{}[\]);,]/,
  operator: /:/g,
  "boolean": /\b(?:true|false)\b/i,
  "null": /\bnull\b/i
}, Prism.languages.jsonp = Prism.languages.json;
!function (e) {
  e.languages.php = e.languages.extend("clike", {
    keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    constant: /\b[A-Z0-9_]{2,}\b/,
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0
    }
  }), e.languages.insertBefore("php", "string", {
    "shell-comment": {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      alias: "comment"
    }
  }), e.languages.insertBefore("php", "keyword", {
    delimiter: {
      pattern: /\?>|<\?(?:php|=)?/i,
      alias: "important"
    },
    variable: /\$+(?:\w+\b|(?={))/i,
    "package": {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }
  }), e.languages.insertBefore("php", "operator", {
    property: {
      pattern: /(->)[\w]+/,
      lookbehind: !0
    }
  }), e.languages.insertBefore("php", "string", {
    "nowdoc-string": {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: !0,
      alias: "string",
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    },
    "heredoc-string": {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: !0,
      alias: "string",
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: null
      }
    },
    "single-quoted-string": {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: !0,
      alias: "string"
    },
    "double-quoted-string": {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: !0,
      alias: "string",
      inside: {
        interpolation: null
      }
    }
  }), delete e.languages.php.string;
  var n = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: !0,
    inside: {
      rest: e.languages.php
    }
  };
  e.languages.php["heredoc-string"].inside.interpolation = n, e.languages.php["double-quoted-string"].inside.interpolation = n, e.hooks.add("before-tokenize", function (n) {
    if (/(?:<\?php|<\?)/gi.test(n.code)) {
      var i = /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi;
      e.languages["markup-templating"].buildPlaceholders(n, "php", i);
    }
  }), e.hooks.add("after-tokenize", function (n) {
    e.languages["markup-templating"].tokenizePlaceholders(n, "php");
  });
}(Prism);
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\])*\2/,
    greedy: !0,
    lookbehind: !0
  },
  variable: /@[\w.$]+|@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
  "function": /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  "boolean": /\b(?:TRUE|FALSE|NULL)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0
  },
  "triple-quoted-string": {
    pattern: /("""|''')[\s\S]+?\1/,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "function": {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  "boolean": /\b(?:True|False|None)\b/,
  number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.typescript = Prism.languages.extend("javascript", {
  keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
  builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
}), Prism.languages.ts = Prism.languages.typescript;

/***/ }),

/***/ "./src/pages3/community/_components/wemark/remarkable.js":
/*!***************************************************************!*\
  !*** ./src/pages3/community/_components/wemark/remarkable.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = (__webpack_require__(/*! ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/typeof.js */ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/typeof.js")["default"]);
/*! remarkable 1.6.0 https://github.com/jonschlinkert/remarkable @license MIT */
!function (e) {
  if ("object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object") module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var t; }
}(function () {
  var e;
  return function t(e, r, n) {
    function s(i, l) {
      if (!r[i]) {
        if (!e[i]) {
          var a = undefined;
          if (!l && a) return require(i, !0);
          if (o) return o(i, !0);
          var c = new Error("Cannot find module '" + i + "'");
          throw c.code = "MODULE_NOT_FOUND", c;
        }
        var u = r[i] = {
          exports: {}
        };
        e[i][0].call(u.exports, function (t) {
          var r = e[i][1][t];
          return s(r ? r : t);
        }, u, u.exports, t, e, r, n);
      }
      return r[i].exports;
    }
    for (var o = undefined, i = 0; i < n.length; i++) s(n[i]);
    return s;
  }({
    1: [function (e, t, r) {
      

      t.exports = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        AMP: "&",
        amp: "&",
        And: "⩓",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        ap: "≈",
        apacir: "⩯",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        Barwed: "⌆",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        Because: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxDL: "╗",
        boxDl: "╖",
        boxdL: "╕",
        boxdl: "┐",
        boxDR: "╔",
        boxDr: "╓",
        boxdR: "╒",
        boxdr: "┌",
        boxH: "═",
        boxh: "─",
        boxHD: "╦",
        boxHd: "╤",
        boxhD: "╥",
        boxhd: "┬",
        boxHU: "╩",
        boxHu: "╧",
        boxhU: "╨",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxUL: "╝",
        boxUl: "╜",
        boxuL: "╛",
        boxul: "┘",
        boxUR: "╚",
        boxUr: "╙",
        boxuR: "╘",
        boxur: "└",
        boxV: "║",
        boxv: "│",
        boxVH: "╬",
        boxVh: "╫",
        boxvH: "╪",
        boxvh: "┼",
        boxVL: "╣",
        boxVl: "╢",
        boxvL: "╡",
        boxvl: "┤",
        boxVR: "╠",
        boxVr: "╟",
        boxvR: "╞",
        boxvr: "├",
        bprime: "‵",
        Breve: "˘",
        breve: "˘",
        brvbar: "¦",
        Bscr: "ℬ",
        bscr: "𝒷",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        Cap: "⋒",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        CenterDot: "·",
        centerdot: "·",
        Cfr: "ℭ",
        cfr: "𝔠",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        cir: "○",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        Colon: "∷",
        colon: ":",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        Conint: "∯",
        conint: "∮",
        ContourIntegral: "∮",
        Copf: "ℂ",
        copf: "𝕔",
        coprod: "∐",
        Coproduct: "∐",
        COPY: "©",
        copy: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        Cross: "⨯",
        cross: "✗",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        Cup: "⋓",
        cup: "∪",
        cupbrcap: "⩈",
        CupCap: "≍",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        Dagger: "‡",
        dagger: "†",
        daleth: "ℸ",
        Darr: "↡",
        dArr: "⇓",
        darr: "↓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        DD: "ⅅ",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        Diamond: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        Downarrow: "⇓",
        downarrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        ecir: "≖",
        Ecirc: "Ê",
        ecirc: "ê",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        eDot: "≑",
        edot: "ė",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp: " ",
        emsp13: " ",
        emsp14: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        Escr: "ℰ",
        escr: "ℯ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        ExponentialE: "ⅇ",
        exponentiale: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        ForAll: "∀",
        forall: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        Fscr: "ℱ",
        fscr: "𝒻",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        gE: "≧",
        ge: "≥",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        ges: "⩾",
        gescc: "⪩",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        Gg: "⋙",
        gg: "≫",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gl: "≷",
        gla: "⪥",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gnE: "≩",
        gne: "⪈",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        GT: ">",
        Gt: "≫",
        gt: ">",
        gtcc: "⪧",
        gtcir: "⩺",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        hArr: "⇔",
        harr: "↔",
        harrcir: "⥈",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        Hfr: "ℌ",
        hfr: "𝔥",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        Hopf: "ℍ",
        hopf: "𝕙",
        horbar: "―",
        HorizontalLine: "─",
        Hscr: "ℋ",
        hscr: "𝒽",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        Ifr: "ℑ",
        ifr: "𝔦",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Im: "ℑ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        "in": "∈",
        incare: "℅",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        Int: "∬",
        "int": "∫",
        intcal: "⊺",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        Iscr: "ℐ",
        iscr: "𝒾",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        Lang: "⟪",
        lang: "⟨",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        Larr: "↞",
        lArr: "⇐",
        larr: "←",
        larrb: "⇤",
        larrbfs: "⤟",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        lat: "⪫",
        lAtail: "⤛",
        latail: "⤙",
        late: "⪭",
        lates: "⪭︀",
        lBarr: "⤎",
        lbarr: "⤌",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        lE: "≦",
        le: "≤",
        LeftAngleBracket: "⟨",
        LeftArrow: "←",
        Leftarrow: "⇐",
        leftarrow: "←",
        LeftArrowBar: "⇤",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVector: "⇃",
        LeftDownVectorBar: "⥙",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrow: "↔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTee: "⊣",
        LeftTeeArrow: "↤",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangle: "⊲",
        LeftTriangleBar: "⧏",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVector: "↿",
        LeftUpVectorBar: "⥘",
        LeftVector: "↼",
        LeftVectorBar: "⥒",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        les: "⩽",
        lescc: "⪨",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        Ll: "⋘",
        ll: "≪",
        llarr: "⇇",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoust: "⎰",
        lmoustache: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lnE: "≨",
        lne: "⪇",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftarrow: "⟵",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longleftrightarrow: "⟷",
        longmapsto: "⟼",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        longrightarrow: "⟶",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        Lscr: "ℒ",
        lscr: "𝓁",
        Lsh: "↰",
        lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        LT: "<",
        Lt: "≪",
        lt: "<",
        ltcc: "⪦",
        ltcir: "⩹",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        mid: "∣",
        midast: "*",
        midcir: "⫰",
        middot: "·",
        minus: "−",
        minusb: "⊟",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        Mscr: "ℳ",
        mscr: "𝓂",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natur: "♮",
        natural: "♮",
        naturals: "ℕ",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        ne: "≠",
        nearhk: "⤤",
        neArr: "⇗",
        nearr: "↗",
        nearrow: "↗",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nhArr: "⇎",
        nharr: "↮",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlArr: "⇍",
        nlarr: "↚",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nLeftarrow: "⇍",
        nleftarrow: "↚",
        nLeftrightarrow: "⇎",
        nleftrightarrow: "↮",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        Nopf: "ℕ",
        nopf: "𝕟",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangle: "⋪",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangle: "⋫",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        npar: "∦",
        nparallel: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        npre: "⪯̸",
        nprec: "⊀",
        npreceq: "⪯̸",
        nrArr: "⇏",
        nrarr: "↛",
        nrarrc: "⤳̸",
        nrarrw: "↝̸",
        nRightarrow: "⇏",
        nrightarrow: "↛",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nVDash: "⊯",
        nVdash: "⊮",
        nvDash: "⊭",
        nvdash: "⊬",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwArr: "⇖",
        nwarr: "↖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        ocir: "⊚",
        Ocirc: "Ô",
        ocirc: "ô",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        Or: "⩔",
        or: "∨",
        orarr: "↻",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        Otimes: "⨷",
        otimes: "⊗",
        otimesas: "⨶",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        par: "∥",
        para: "¶",
        parallel: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plus: "+",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        Popf: "ℙ",
        popf: "𝕡",
        pound: "£",
        Pr: "⪻",
        pr: "≺",
        prap: "⪷",
        prcue: "≼",
        prE: "⪳",
        pre: "⪯",
        prec: "≺",
        precapprox: "⪷",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        precsim: "≾",
        Prime: "″",
        prime: "′",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportion: "∷",
        Proportional: "∝",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        Qopf: "ℚ",
        qopf: "𝕢",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        QUOT: '"',
        quot: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        Rang: "⟫",
        rang: "⟩",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        Rarr: "↠",
        rArr: "⇒",
        rarr: "→",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        rAtail: "⤜",
        ratail: "⤚",
        ratio: "∶",
        rationals: "ℚ",
        RBarr: "⤐",
        rBarr: "⤏",
        rbarr: "⤍",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        Re: "ℜ",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        rect: "▭",
        REG: "®",
        reg: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        Rfr: "ℜ",
        rfr: "𝔯",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrow: "→",
        Rightarrow: "⇒",
        rightarrow: "→",
        RightArrowBar: "⇥",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVector: "⇂",
        RightDownVectorBar: "⥕",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTee: "⊢",
        RightTeeArrow: "↦",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangle: "⊳",
        RightTriangleBar: "⧐",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVector: "↾",
        RightUpVectorBar: "⥔",
        RightVector: "⇀",
        RightVectorBar: "⥓",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoust: "⎱",
        rmoustache: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        Ropf: "ℝ",
        ropf: "𝕣",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        Rscr: "ℛ",
        rscr: "𝓇",
        Rsh: "↱",
        rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        Sc: "⪼",
        sc: "≻",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        sccue: "≽",
        scE: "⪴",
        sce: "⪰",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdot: "⋅",
        sdotb: "⊡",
        sdote: "⩦",
        searhk: "⤥",
        seArr: "⇘",
        searr: "↘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        sol: "/",
        solb: "⧄",
        solbar: "⌿",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        squ: "□",
        Square: "□",
        square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        Sub: "⋐",
        sub: "⊂",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        Subset: "⋐",
        subset: "⊂",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succ: "≻",
        succapprox: "⪸",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        Sum: "∑",
        sum: "∑",
        sung: "♪",
        Sup: "⋑",
        sup: "⊃",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        Supset: "⋑",
        supset: "⊃",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swArr: "⇙",
        swarr: "↙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: " ",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        Therefore: "∴",
        therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        thinsp: " ",
        ThinSpace: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        Tilde: "∼",
        tilde: "˜",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        times: "×",
        timesb: "⊠",
        timesbar: "⨱",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        top: "⊤",
        topbot: "⌶",
        topcir: "⫱",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        TRADE: "™",
        trade: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        Uarr: "↟",
        uArr: "⇑",
        uarr: "↑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrow: "↑",
        Uparrow: "⇑",
        uparrow: "↑",
        UpArrowBar: "⤒",
        UpArrowDownArrow: "⇅",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        updownarrow: "↕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        Upsi: "ϒ",
        upsi: "υ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTee: "⊥",
        UpTeeArrow: "↥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        vArr: "⇕",
        varr: "↕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        Vbar: "⫫",
        vBar: "⫨",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        VDash: "⊫",
        Vdash: "⊩",
        vDash: "⊨",
        vdash: "⊢",
        Vdashl: "⫦",
        Vee: "⋁",
        vee: "∨",
        veebar: "⊻",
        veeeq: "≚",
        vellip: "⋮",
        Verbar: "‖",
        verbar: "|",
        Vert: "‖",
        vert: "|",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        Wedge: "⋀",
        wedge: "∧",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xhArr: "⟺",
        xharr: "⟷",
        Xi: "Ξ",
        xi: "ξ",
        xlArr: "⟸",
        xlarr: "⟵",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrArr: "⟹",
        xrarr: "⟶",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        Yuml: "Ÿ",
        yuml: "ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        Zfr: "ℨ",
        zfr: "𝔷",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        Zopf: "ℤ",
        zopf: "𝕫",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
      };
    }, {}],
    2: [function (e, t, r) {
      "use strict";

      var n = {};
      ["article", "aside", "button", "blockquote", "body", "canvas", "caption", "col", "colgroup", "dd", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "iframe", "li", "map", "object", "ol", "output", "p", "pre", "progress", "script", "section", "style", "table", "tbody", "td", "textarea", "tfoot", "th", "tr", "thead", "ul", "video"].forEach(function (e) {
        n[e] = !0;
      }), t.exports = n;
    }, {}],
    3: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        return e = e.source, t = t || "", function r(n, s) {
          return n ? (s = s.source || s, e = e.replace(n, s), r) : new RegExp(e, t);
        };
      }
      var s = /[a-zA-Z_:][a-zA-Z0-9:._-]*/,
        o = /[^"'=<>`\x00-\x20]+/,
        i = /'[^']*'/,
        l = /"[^"]*"/,
        a = n(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", o)("single_quoted", i)("double_quoted", l)(),
        c = n(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", s)("attr_value", a)(),
        u = n(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", c)(),
        p = /<\/[A-Za-z][A-Za-z0-9]*\s*>/,
        h = /<!--([^-]+|[-][^-]+)*-->/,
        f = /<[?].*?[?]>/,
        d = /<![A-Z]+\s+[^>]*>/,
        g = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/,
        m = n(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", u)("close_tag", p)("comment", h)("processing", f)("declaration", d)("cdata", g)();
      t.exports.HTML_TAG_RE = m;
    }, {}],
    4: [function (e, t, r) {
      "use strict";

      t.exports = ["coap", "doi", "javascript", "aaa", "aaas", "about", "acap", "cap", "cid", "crid", "data", "dav", "dict", "dns", "file", "ftp", "geo", "go", "gopher", "h323", "http", "https", "iax", "icap", "im", "imap", "info", "ipp", "iris", "iris.beep", "iris.xpc", "iris.xpcs", "iris.lwz", "ldap", "mailto", "mid", "msrp", "msrps", "mtqp", "mupdate", "news", "nfs", "ni", "nih", "nntp", "opaquelocktoken", "pop", "pres", "rtsp", "service", "session", "shttp", "sieve", "sip", "sips", "sms", "snmp", "soap.beep", "soap.beeps", "tag", "tel", "telnet", "tftp", "thismessage", "tn3270", "tip", "tv", "urn", "vemmi", "ws", "wss", "xcon", "xcon-userid", "xmlrpc.beep", "xmlrpc.beeps", "xmpp", "z39.50r", "z39.50s", "adiumxtra", "afp", "afs", "aim", "apt", "attachment", "aw", "beshare", "bitcoin", "bolo", "callto", "chrome", "chrome-extension", "com-eventbrite-attendee", "content", "cvs", "dlna-playsingle", "dlna-playcontainer", "dtn", "dvb", "ed2k", "facetime", "feed", "finger", "fish", "gg", "git", "gizmoproject", "gtalk", "hcp", "icon", "ipn", "irc", "irc6", "ircs", "itms", "jar", "jms", "keyparc", "lastfm", "ldaps", "magnet", "maps", "market", "message", "mms", "ms-help", "msnim", "mumble", "mvn", "notes", "oid", "palm", "paparazzi", "platform", "proxy", "psyc", "query", "res", "resource", "rmi", "rsync", "rtmp", "secondlife", "sftp", "sgn", "skype", "smb", "soldat", "spotify", "ssh", "steam", "svn", "teamspeak", "things", "udp", "unreal", "ut2004", "ventrilo", "view-source", "webcal", "wtai", "wyciwyg", "xfire", "xri", "ymsgr"];
    }, {}],
    5: [function (e, t, r) {
      "use strict";

      function n(e) {
        return Object.prototype.toString.call(e);
      }
      function s(e) {
        return "[object String]" === n(e);
      }
      function o(e, t) {
        return e ? d.call(e, t) : !1;
      }
      function i(e) {
        var t = [].slice.call(arguments, 1);
        return t.forEach(function (t) {
          if (t) {
            if ("object" != _typeof(t)) throw new TypeError(t + "must be object");
            Object.keys(t).forEach(function (r) {
              e[r] = t[r];
            });
          }
        }), e;
      }
      function l(e) {
        return e.indexOf("\\") < 0 ? e : e.replace(g, "$1");
      }
      function a(e) {
        return e >= 55296 && 57343 >= e ? !1 : e >= 64976 && 65007 >= e ? !1 : 65535 === (65535 & e) || 65534 === (65535 & e) ? !1 : e >= 0 && 8 >= e ? !1 : 11 === e ? !1 : e >= 14 && 31 >= e ? !1 : e >= 127 && 159 >= e ? !1 : e > 1114111 ? !1 : !0;
      }
      function c(e) {
        if (e > 65535) {
          e -= 65536;
          var t = 55296 + (e >> 10),
            r = 56320 + (1023 & e);
          return String.fromCharCode(t, r);
        }
        return String.fromCharCode(e);
      }
      function u(e, t) {
        var r = 0;
        return o(v, t) ? v[t] : 35 === t.charCodeAt(0) && b.test(t) && (r = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10), a(r)) ? c(r) : e;
      }
      function p(e) {
        return e.indexOf("&") < 0 ? e : e.replace(m, u);
      }
      function h(e) {
        return y[e];
      }
      function f(e) {
        return k.test(e) ? e.replace(_, h) : e;
      }
      var d = Object.prototype.hasOwnProperty,
        g = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g,
        m = /&([a-z#][a-z0-9]{1,31});/gi,
        b = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
        v = e("./entities"),
        k = /[&<>"]/,
        _ = /[&<>"]/g,
        y = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;"
        };
      r.assign = i, r.isString = s, r.has = o, r.unescapeMd = l, r.isValidEntityCode = a, r.fromCodePoint = c, r.replaceEntities = p, r.escapeHtml = f;
    }, {
      "./entities": 1
    }],
    6: [function (e, t, r) {
      "use strict";

      t.exports = {
        options: {
          html: !0,
          xhtmlOut: !0,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          linkTarget: "",
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: ["block", "inline", "references", "abbr2"]
          },
          block: {
            rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph"]
          },
          inline: {
            rules: ["autolink", "backticks", "emphasis", "entity", "escape", "htmltag", "links", "newline", "text"]
          }
        }
      };
    }, {}],
    7: [function (e, t, r) {
      "use strict";

      t.exports = {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          linkTarget: "",
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: ["block", "inline", "references", "replacements", "linkify", "smartquotes", "references", "abbr2", "footnote_tail"]
          },
          block: {
            rules: ["blockquote", "code", "fences", "heading", "hr", "htmlblock", "lheading", "list", "paragraph", "table"]
          },
          inline: {
            rules: ["autolink", "backticks", "del", "emphasis", "entity", "escape", "footnote_ref", "htmltag", "links", "newline", "text"]
          }
        }
      };
    }, {}],
    8: [function (e, t, r) {
      "use strict";

      t.exports = {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          linkTarget: "",
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {},
          block: {},
          inline: {}
        }
      };
    }, {}],
    9: [function (e, t, r) {
      "use strict";

      var n = e("../common/utils").replaceEntities;
      t.exports = function (e) {
        var t = n(e);
        try {
          t = decodeURI(t);
        } catch (r) {}
        return encodeURI(t);
      };
    }, {
      "../common/utils": 5
    }],
    10: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        return e.trim().replace(/\s+/g, " ").toUpperCase();
      };
    }, {}],
    11: [function (e, t, r) {
      "use strict";

      var n = e("./normalize_link"),
        s = e("../common/utils").unescapeMd;
      t.exports = function (e, t) {
        var r,
          o,
          i,
          l = t,
          a = e.posMax;
        if (60 === e.src.charCodeAt(t)) {
          for (t++; a > t;) {
            if (r = e.src.charCodeAt(t), 10 === r) return !1;
            if (62 === r) return i = n(s(e.src.slice(l + 1, t))), e.parser.validateLink(i) ? (e.pos = t + 1, e.linkContent = i, !0) : !1;
            92 === r && a > t + 1 ? t += 2 : t++;
          }
          return !1;
        }
        for (o = 0; a > t && (r = e.src.charCodeAt(t), 32 !== r) && !(r > 8 && 14 > r);) if (92 === r && a > t + 1) t += 2;else {
          if (40 === r && (o++, o > 1)) break;
          if (41 === r && (o--, 0 > o)) break;
          t++;
        }
        return l === t ? !1 : (i = s(e.src.slice(l, t)), e.parser.validateLink(i) ? (e.linkContent = i, e.pos = t, !0) : !1);
      };
    }, {
      "../common/utils": 5,
      "./normalize_link": 9
    }],
    12: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s,
          o = -1,
          i = e.posMax,
          l = e.pos,
          a = e.isInLabel;
        if (e.isInLabel) return -1;
        if (e.labelUnmatchedScopes) return e.labelUnmatchedScopes--, -1;
        for (e.pos = t + 1, e.isInLabel = !0, r = 1; e.pos < i;) {
          if (s = e.src.charCodeAt(e.pos), 91 === s) r++;else if (93 === s && (r--, 0 === r)) {
            n = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return n ? (o = e.pos, e.labelUnmatchedScopes = 0) : e.labelUnmatchedScopes = r - 1, e.pos = l, e.isInLabel = a, o;
      };
    }, {}],
    13: [function (e, t, r) {
      "use strict";

      var n = e("../common/utils").unescapeMd;
      t.exports = function (e, t) {
        var r,
          s = t,
          o = e.posMax,
          i = e.src.charCodeAt(t);
        if (34 !== i && 39 !== i && 40 !== i) return !1;
        for (t++, 40 === i && (i = 41); o > t;) {
          if (r = e.src.charCodeAt(t), r === i) return e.pos = t + 1, e.linkContent = n(e.src.slice(s + 1, t)), !0;
          92 === r && o > t + 1 ? t += 2 : t++;
        }
        return !1;
      };
    }, {
      "../common/utils": 5
    }],
    14: [function (e, t, r) {
      "use strict";

      function n(e, t, r) {
        this.src = t, this.env = r, this.options = e.options, this.tokens = [], this.inlineMode = !1, this.inline = e.inline, this.block = e.block, this.renderer = e.renderer, this.typographer = e.typographer;
      }
      function s(e, t) {
        "string" != typeof e && (t = e, e = "default"), this.inline = new c(), this.block = new a(), this.core = new l(), this.renderer = new i(), this.ruler = new u(), this.options = {}, this.configure(p[e]), this.set(t || {});
      }
      var o = e("./common/utils").assign,
        i = e("./renderer"),
        l = e("./parser_core"),
        a = e("./parser_block"),
        c = e("./parser_inline"),
        u = e("./ruler"),
        p = {
          "default": e("./configs/default"),
          full: e("./configs/full"),
          commonmark: e("./configs/commonmark")
        };
      s.prototype.set = function (e) {
        o(this.options, e);
      }, s.prototype.configure = function (e) {
        var t = this;
        if (!e) throw new Error("Wrong `remarkable` preset, check name/content");
        e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function (r) {
          e.components[r].rules && t[r].ruler.enable(e.components[r].rules, !0);
        });
      }, s.prototype.use = function (e, t) {
        return e(this, t), this;
      }, s.prototype.parse = function (e, t) {
        var r = new n(this, e, t);
        return this.core.process(r), r.tokens;
      }, s.prototype.render = function (e, t) {
        return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
      }, s.prototype.parseInline = function (e, t) {
        var r = new n(this, e, t);
        return r.inlineMode = !0, this.core.process(r), r.tokens;
      }, s.prototype.renderInline = function (e, t) {
        return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
      }, t.exports = s, t.exports.utils = e("./common/utils");
    }, {
      "./common/utils": 5,
      "./configs/commonmark": 6,
      "./configs/default": 7,
      "./configs/full": 8,
      "./parser_block": 15,
      "./parser_core": 16,
      "./parser_inline": 17,
      "./renderer": 18,
      "./ruler": 19
    }],
    15: [function (e, t, r) {
      "use strict";

      function n() {
        this.ruler = new s();
        for (var e = 0; e < i.length; e++) this.ruler.push(i[e][0], i[e][1], {
          alt: (i[e][2] || []).slice()
        });
      }
      var s = e("./ruler"),
        o = e("./rules_block/state_block"),
        i = [["code", e("./rules_block/code")], ["fences", e("./rules_block/fences"), ["paragraph", "blockquote", "list"]], ["blockquote", e("./rules_block/blockquote"), ["paragraph", "blockquote", "list"]], ["hr", e("./rules_block/hr"), ["paragraph", "blockquote", "list"]], ["list", e("./rules_block/list"), ["paragraph", "blockquote"]], ["footnote", e("./rules_block/footnote"), ["paragraph"]], ["heading", e("./rules_block/heading"), ["paragraph", "blockquote"]], ["lheading", e("./rules_block/lheading")], ["htmlblock", e("./rules_block/htmlblock"), ["paragraph", "blockquote"]], ["table", e("./rules_block/table"), ["paragraph"]], ["deflist", e("./rules_block/deflist"), ["paragraph"]], ["paragraph", e("./rules_block/paragraph")]];
      n.prototype.tokenize = function (e, t, r) {
        for (var n, s, o = this.ruler.getRules(""), i = o.length, l = t, a = !1; r > l && (e.line = l = e.skipEmptyLines(l), !(l >= r)) && !(e.tShift[l] < e.blkIndent);) {
          for (s = 0; i > s && !(n = o[s](e, l, r, !1)); s++);
          if (e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), l = e.line, r > l && e.isEmpty(l)) {
            if (a = !0, l++, r > l && "list" === e.parentType && e.isEmpty(l)) break;
            e.line = l;
          }
        }
      };
      var l = /[\n\t]/g,
        a = /\r[\n\u0085]|[\u2424\u2028\u0085]/g,
        c = /\u00a0/g;
      n.prototype.parse = function (e, t, r, n) {
        var s,
          i = 0,
          u = 0;
        return e ? (e = e.replace(c, " "), e = e.replace(a, "\n"), e.indexOf("  ") >= 0 && (e = e.replace(l, function (t, r) {
          var n;
          return 10 === e.charCodeAt(r) ? (i = r + 1, u = 0, t) : (n = "    ".slice((r - i - u) % 4), u = r - i + 1, n);
        })), s = new o(e, this, t, r, n), void this.tokenize(s, s.line, s.lineMax)) : [];
      }, t.exports = n;
    }, {
      "./ruler": 19,
      "./rules_block/blockquote": 21,
      "./rules_block/code": 22,
      "./rules_block/deflist": 23,
      "./rules_block/fences": 24,
      "./rules_block/footnote": 25,
      "./rules_block/heading": 26,
      "./rules_block/hr": 27,
      "./rules_block/htmlblock": 28,
      "./rules_block/lheading": 29,
      "./rules_block/list": 30,
      "./rules_block/paragraph": 31,
      "./rules_block/state_block": 32,
      "./rules_block/table": 33
    }],
    16: [function (e, t, r) {
      "use strict";

      function n() {
        this.options = {}, this.ruler = new s();
        for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1]);
      }
      var s = e("./ruler"),
        o = [["block", e("./rules_core/block")], ["abbr", e("./rules_core/abbr")], ["references", e("./rules_core/references")], ["inline", e("./rules_core/inline")], ["footnote_tail", e("./rules_core/footnote_tail")], ["abbr2", e("./rules_core/abbr2")], ["replacements", e("./rules_core/replacements")], ["smartquotes", e("./rules_core/smartquotes")], ["linkify", e("./rules_core/linkify")]];
      n.prototype.process = function (e) {
        var t, r, n;
        for (n = this.ruler.getRules(""), t = 0, r = n.length; r > t; t++) n[t](e);
      }, t.exports = n;
    }, {
      "./ruler": 19,
      "./rules_core/abbr": 34,
      "./rules_core/abbr2": 35,
      "./rules_core/block": 36,
      "./rules_core/footnote_tail": 37,
      "./rules_core/inline": 38,
      "./rules_core/linkify": 39,
      "./rules_core/references": 40,
      "./rules_core/replacements": 41,
      "./rules_core/smartquotes": 42
    }],
    17: [function (e, t, r) {
      "use strict";

      function n() {
        this.ruler = new o();
        for (var e = 0; e < a.length; e++) this.ruler.push(a[e][0], a[e][1]);
        this.validateLink = s;
      }
      function s(e) {
        var t = ["vbscript", "javascript", "file"],
          r = e.trim().toLowerCase();
        return r = l.replaceEntities(r), -1 !== r.indexOf(":") && -1 !== t.indexOf(r.split(":")[0]) ? !1 : !0;
      }
      var o = e("./ruler"),
        i = e("./rules_inline/state_inline"),
        l = e("./common/utils"),
        a = [["text", e("./rules_inline/text")], ["newline", e("./rules_inline/newline")], ["escape", e("./rules_inline/escape")], ["backticks", e("./rules_inline/backticks")], ["del", e("./rules_inline/del")], ["ins", e("./rules_inline/ins")], ["mark", e("./rules_inline/mark")], ["emphasis", e("./rules_inline/emphasis")], ["sub", e("./rules_inline/sub")], ["sup", e("./rules_inline/sup")], ["links", e("./rules_inline/links")], ["footnote_inline", e("./rules_inline/footnote_inline")], ["footnote_ref", e("./rules_inline/footnote_ref")], ["autolink", e("./rules_inline/autolink")], ["htmltag", e("./rules_inline/htmltag")], ["entity", e("./rules_inline/entity")]];
      n.prototype.skipToken = function (e) {
        var t,
          r,
          n = this.ruler.getRules(""),
          s = n.length,
          o = e.pos;
        if ((r = e.cacheGet(o)) > 0) return void (e.pos = r);
        for (t = 0; s > t; t++) if (n[t](e, !0)) return void e.cacheSet(o, e.pos);
        e.pos++, e.cacheSet(o, e.pos);
      }, n.prototype.tokenize = function (e) {
        for (var t, r, n = this.ruler.getRules(""), s = n.length, o = e.posMax; e.pos < o;) {
          for (r = 0; s > r && !(t = n[r](e, !1)); r++);
          if (t) {
            if (e.pos >= o) break;
          } else e.pending += e.src[e.pos++];
        }
        e.pending && e.pushPending();
      }, n.prototype.parse = function (e, t, r, n) {
        var s = new i(e, this, t, r, n);
        this.tokenize(s);
      }, t.exports = n;
    }, {
      "./common/utils": 5,
      "./ruler": 19,
      "./rules_inline/autolink": 43,
      "./rules_inline/backticks": 44,
      "./rules_inline/del": 45,
      "./rules_inline/emphasis": 46,
      "./rules_inline/entity": 47,
      "./rules_inline/escape": 48,
      "./rules_inline/footnote_inline": 49,
      "./rules_inline/footnote_ref": 50,
      "./rules_inline/htmltag": 51,
      "./rules_inline/ins": 52,
      "./rules_inline/links": 53,
      "./rules_inline/mark": 54,
      "./rules_inline/newline": 55,
      "./rules_inline/state_inline": 56,
      "./rules_inline/sub": 57,
      "./rules_inline/sup": 58,
      "./rules_inline/text": 59
    }],
    18: [function (e, t, r) {
      "use strict";

      function n() {
        this.rules = s.assign({}, o), this.getBreak = o.getBreak;
      }
      var s = e("./common/utils"),
        o = e("./rules");
      t.exports = n, n.prototype.renderInline = function (e, t, r) {
        for (var n = this.rules, s = e.length, o = 0, i = ""; s--;) i += n[e[o].type](e, o++, t, r, this);
        return i;
      }, n.prototype.render = function (e, t, r) {
        for (var n = this.rules, s = e.length, o = -1, i = ""; ++o < s;) i += "inline" === e[o].type ? this.renderInline(e[o].children, t, r) : n[e[o].type](e, o, t, r, this);
        return i;
      };
    }, {
      "./common/utils": 5,
      "./rules": 20
    }],
    19: [function (e, t, r) {
      "use strict";

      function n() {
        this.__rules__ = [], this.__cache__ = null;
      }
      n.prototype.__find__ = function (e) {
        for (var t = this.__rules__.length, r = -1; t--;) if (this.__rules__[++r].name === e) return r;
        return -1;
      }, n.prototype.__compile__ = function () {
        var e = this,
          t = [""];
        e.__rules__.forEach(function (e) {
          e.enabled && e.alt.forEach(function (e) {
            t.indexOf(e) < 0 && t.push(e);
          });
        }), e.__cache__ = {}, t.forEach(function (t) {
          e.__cache__[t] = [], e.__rules__.forEach(function (r) {
            r.enabled && (t && r.alt.indexOf(t) < 0 || e.__cache__[t].push(r.fn));
          });
        });
      }, n.prototype.at = function (e, t, r) {
        var n = this.__find__(e),
          s = r || {};
        if (-1 === n) throw new Error("Parser rule not found: " + e);
        this.__rules__[n].fn = t, this.__rules__[n].alt = s.alt || [], this.__cache__ = null;
      }, n.prototype.before = function (e, t, r, n) {
        var s = this.__find__(e),
          o = n || {};
        if (-1 === s) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(s, 0, {
          name: t,
          enabled: !0,
          fn: r,
          alt: o.alt || []
        }), this.__cache__ = null;
      }, n.prototype.after = function (e, t, r, n) {
        var s = this.__find__(e),
          o = n || {};
        if (-1 === s) throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(s + 1, 0, {
          name: t,
          enabled: !0,
          fn: r,
          alt: o.alt || []
        }), this.__cache__ = null;
      }, n.prototype.push = function (e, t, r) {
        var n = r || {};
        this.__rules__.push({
          name: e,
          enabled: !0,
          fn: t,
          alt: n.alt || []
        }), this.__cache__ = null;
      }, n.prototype.enable = function (e, t) {
        e = Array.isArray(e) ? e : [e], t && this.__rules__.forEach(function (e) {
          e.enabled = !1;
        }), e.forEach(function (e) {
          var t = this.__find__(e);
          if (0 > t) throw new Error("Rules manager: invalid rule name " + e);
          this.__rules__[t].enabled = !0;
        }, this), this.__cache__ = null;
      }, n.prototype.disable = function (e) {
        e = Array.isArray(e) ? e : [e], e.forEach(function (e) {
          var t = this.__find__(e);
          if (0 > t) throw new Error("Rules manager: invalid rule name " + e);
          this.__rules__[t].enabled = !1;
        }, this), this.__cache__ = null;
      }, n.prototype.getRules = function (e) {
        return null === this.__cache__ && this.__compile__(), this.__cache__[e];
      }, t.exports = n;
    }, {}],
    20: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        return ++t >= e.length - 2 ? t : "paragraph_open" === e[t].type && e[t].tight && "inline" === e[t + 1].type && 0 === e[t + 1].content.length && "paragraph_close" === e[t + 2].type && e[t + 2].tight ? n(e, t + 2) : t;
      }
      var s = e("./common/utils").has,
        o = e("./common/utils").unescapeMd,
        i = e("./common/utils").replaceEntities,
        l = e("./common/utils").escapeHtml,
        a = {};
      a.blockquote_open = function () {
        return "<blockquote>\n";
      }, a.blockquote_close = function (e, t) {
        return "</blockquote>" + c(e, t);
      }, a.code = function (e, t) {
        return e[t].block ? "<pre><code>" + l(e[t].content) + "</code></pre>" + c(e, t) : "<code>" + l(e[t].content) + "</code>";
      }, a.fence = function (e, t, r, n, a) {
        var u,
          p,
          h = e[t],
          f = "",
          d = r.langPrefix,
          g = "";
        if (h.params) {
          if (u = h.params.split(/\s+/g)[0], s(a.rules.fence_custom, u)) return a.rules.fence_custom[u](e, t, r, n, a);
          g = l(i(o(u))), f = ' class="' + d + g + '"';
        }
        return p = r.highlight ? r.highlight(h.content, g) || l(h.content) : l(h.content), "<pre><code" + f + ">" + p + "</code></pre>" + c(e, t);
      }, a.fence_custom = {}, a.heading_open = function (e, t) {
        return "<h" + e[t].hLevel + ">";
      }, a.heading_close = function (e, t) {
        return "</h" + e[t].hLevel + ">\n";
      }, a.hr = function (e, t, r) {
        return (r.xhtmlOut ? "<hr />" : "<hr>") + c(e, t);
      }, a.bullet_list_open = function () {
        return "<ul>\n";
      }, a.bullet_list_close = function (e, t) {
        return "</ul>" + c(e, t);
      }, a.list_item_open = function () {
        return "<li>";
      }, a.list_item_close = function () {
        return "</li>\n";
      }, a.ordered_list_open = function (e, t) {
        var r = e[t],
          n = r.order > 1 ? ' start="' + r.order + '"' : "";
        return "<ol" + n + ">\n";
      }, a.ordered_list_close = function (e, t) {
        return "</ol>" + c(e, t);
      }, a.paragraph_open = function (e, t) {
        return e[t].tight ? "" : "<p>";
      }, a.paragraph_close = function (e, t) {
        var r = !(e[t].tight && t && "inline" === e[t - 1].type && !e[t - 1].content);
        return (e[t].tight ? "" : "</p>") + (r ? c(e, t) : "");
      }, a.link_open = function (e, t, r) {
        var n = e[t].title ? ' title="' + l(i(e[t].title)) + '"' : "",
          s = r.linkTarget ? ' target="' + r.linkTarget + '"' : "";
        return '<a href="' + l(e[t].href) + '"' + n + s + ">";
      }, a.link_close = function () {
        return "</a>";
      }, a.image = function (e, t, r) {
        var n = ' src="' + l(e[t].src) + '"',
          s = e[t].title ? ' title="' + l(i(e[t].title)) + '"' : "",
          o = ' alt="' + (e[t].alt ? l(i(e[t].alt)) : "") + '"',
          a = r.xhtmlOut ? " /" : "";
        return "<img" + n + o + s + a + ">";
      }, a.table_open = function () {
        return "<table>\n";
      }, a.table_close = function () {
        return "</table>\n";
      }, a.thead_open = function () {
        return "<thead>\n";
      }, a.thead_close = function () {
        return "</thead>\n";
      }, a.tbody_open = function () {
        return "<tbody>\n";
      }, a.tbody_close = function () {
        return "</tbody>\n";
      }, a.tr_open = function () {
        return "<tr>";
      }, a.tr_close = function () {
        return "</tr>\n";
      }, a.th_open = function (e, t) {
        var r = e[t];
        return "<th" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">";
      }, a.th_close = function () {
        return "</th>";
      }, a.td_open = function (e, t) {
        var r = e[t];
        return "<td" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">";
      }, a.td_close = function () {
        return "</td>";
      }, a.strong_open = function () {
        return "<strong>";
      }, a.strong_close = function () {
        return "</strong>";
      }, a.em_open = function () {
        return "<em>";
      }, a.em_close = function () {
        return "</em>";
      }, a.del_open = function () {
        return "<del>";
      }, a.del_close = function () {
        return "</del>";
      }, a.ins_open = function () {
        return "<ins>";
      }, a.ins_close = function () {
        return "</ins>";
      }, a.mark_open = function () {
        return "<mark>";
      }, a.mark_close = function () {
        return "</mark>";
      }, a.sub = function (e, t) {
        return "<sub>" + l(e[t].content) + "</sub>";
      }, a.sup = function (e, t) {
        return "<sup>" + l(e[t].content) + "</sup>";
      }, a.hardbreak = function (e, t, r) {
        return r.xhtmlOut ? "<br />\n" : "<br>\n";
      }, a.softbreak = function (e, t, r) {
        return r.breaks ? r.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
      }, a.text = function (e, t) {
        return l(e[t].content);
      }, a.htmlblock = function (e, t) {
        return e[t].content;
      }, a.htmltag = function (e, t) {
        return e[t].content;
      }, a.abbr_open = function (e, t) {
        return '<abbr title="' + l(i(e[t].title)) + '">';
      }, a.abbr_close = function () {
        return "</abbr>";
      }, a.footnote_ref = function (e, t) {
        var r = Number(e[t].id + 1).toString(),
          n = "fnref" + r;
        return e[t].subId > 0 && (n += ":" + e[t].subId), '<sup class="footnote-ref"><a href="#fn' + r + '" id="' + n + '">[' + r + "]</a></sup>";
      }, a.footnote_block_open = function (e, t, r) {
        var n = r.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n';
        return n + '<section class="footnotes">\n<ol class="footnotes-list">\n';
      }, a.footnote_block_close = function () {
        return "</ol>\n</section>\n";
      }, a.footnote_open = function (e, t) {
        var r = Number(e[t].id + 1).toString();
        return '<li id="fn' + r + '"  class="footnote-item">';
      }, a.footnote_close = function () {
        return "</li>\n";
      }, a.footnote_anchor = function (e, t) {
        var r = Number(e[t].id + 1).toString(),
          n = "fnref" + r;
        return e[t].subId > 0 && (n += ":" + e[t].subId), ' <a href="#' + n + '" class="footnote-backref">↩</a>';
      }, a.dl_open = function () {
        return "<dl>\n";
      }, a.dt_open = function () {
        return "<dt>";
      }, a.dd_open = function () {
        return "<dd>";
      }, a.dl_close = function () {
        return "</dl>\n";
      }, a.dt_close = function () {
        return "</dt>\n";
      }, a.dd_close = function () {
        return "</dd>\n";
      };
      var c = a.getBreak = function (e, t) {
        return t = n(e, t), t < e.length && "list_item_close" === e[t].type ? "" : "\n";
      };
      t.exports = a;
    }, {
      "./common/utils": 5
    }],
    21: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
          o,
          i,
          l,
          a,
          c,
          u,
          p,
          h,
          f,
          d,
          g = e.bMarks[t] + e.tShift[t],
          m = e.eMarks[t];
        if (g > m) return !1;
        if (62 !== e.src.charCodeAt(g++)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (n) return !0;
        for (32 === e.src.charCodeAt(g) && g++, a = e.blkIndent, e.blkIndent = 0, l = [e.bMarks[t]], e.bMarks[t] = g, g = m > g ? e.skipSpaces(g) : g, o = g >= m, i = [e.tShift[t]], e.tShift[t] = g - e.bMarks[t], p = e.parser.ruler.getRules("blockquote"), s = t + 1; r > s && (g = e.bMarks[s] + e.tShift[s], m = e.eMarks[s], !(g >= m)); s++) if (62 !== e.src.charCodeAt(g++)) {
          if (o) break;
          for (d = !1, h = 0, f = p.length; f > h; h++) if (p[h](e, s, r, !0)) {
            d = !0;
            break;
          }
          if (d) break;
          l.push(e.bMarks[s]), i.push(e.tShift[s]), e.tShift[s] = -1337;
        } else 32 === e.src.charCodeAt(g) && g++, l.push(e.bMarks[s]), e.bMarks[s] = g, g = m > g ? e.skipSpaces(g) : g, o = g >= m, i.push(e.tShift[s]), e.tShift[s] = g - e.bMarks[s];
        for (c = e.parentType, e.parentType = "blockquote", e.tokens.push({
          type: "blockquote_open",
          lines: u = [t, 0],
          level: e.level++
        }), e.parser.tokenize(e, t, s), e.tokens.push({
          type: "blockquote_close",
          level: --e.level
        }), e.parentType = c, u[1] = e.line, h = 0; h < i.length; h++) e.bMarks[h + t] = l[h], e.tShift[h + t] = i[h];
        return e.blkIndent = a, !0;
      };
    }, {}],
    22: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r) {
        var n, s;
        if (e.tShift[t] - e.blkIndent < 4) return !1;
        for (s = n = t + 1; r > n;) if (e.isEmpty(n)) n++;else {
          if (!(e.tShift[n] - e.blkIndent >= 4)) break;
          n++, s = n;
        }
        return e.line = n, e.tokens.push({
          type: "code",
          content: e.getLines(t, s, 4 + e.blkIndent, !0),
          block: !0,
          lines: [t, e.line],
          level: e.level
        }), !0;
      };
    }, {}],
    23: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        var r,
          n,
          s = e.bMarks[t] + e.tShift[t],
          o = e.eMarks[t];
        return s >= o ? -1 : (n = e.src.charCodeAt(s++), 126 !== n && 58 !== n ? -1 : (r = e.skipSpaces(s), s === r ? -1 : r >= o ? -1 : r));
      }
      function s(e, t) {
        var r,
          n,
          s = e.level + 2;
        for (r = t + 2, n = e.tokens.length - 2; n > r; r++) e.tokens[r].level === s && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0, e.tokens[r].tight = !0, r += 2);
      }
      t.exports = function (e, t, r, o) {
        var i, l, a, c, u, p, h, f, d, g, m, b, v, k;
        if (o) return e.ddIndent < 0 ? !1 : n(e, t) >= 0;
        if (h = t + 1, e.isEmpty(h) && ++h > r) return !1;
        if (e.tShift[h] < e.blkIndent) return !1;
        if (i = n(e, h), 0 > i) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        p = e.tokens.length, e.tokens.push({
          type: "dl_open",
          lines: u = [t, 0],
          level: e.level++
        }), a = t, l = h;
        e: for (;;) {
          for (k = !0, v = !1, e.tokens.push({
            type: "dt_open",
            lines: [a, a],
            level: e.level++
          }), e.tokens.push({
            type: "inline",
            content: e.getLines(a, a + 1, e.blkIndent, !1).trim(),
            level: e.level + 1,
            lines: [a, a],
            children: []
          }), e.tokens.push({
            type: "dt_close",
            level: --e.level
          });;) {
            if (e.tokens.push({
              type: "dd_open",
              lines: c = [h, 0],
              level: e.level++
            }), b = e.tight, d = e.ddIndent, f = e.blkIndent, m = e.tShift[l], g = e.parentType, e.blkIndent = e.ddIndent = e.tShift[l] + 2, e.tShift[l] = i - e.bMarks[l], e.tight = !0, e.parentType = "deflist", e.parser.tokenize(e, l, r, !0), (!e.tight || v) && (k = !1), v = e.line - l > 1 && e.isEmpty(e.line - 1), e.tShift[l] = m, e.tight = b, e.parentType = g, e.blkIndent = f, e.ddIndent = d, e.tokens.push({
              type: "dd_close",
              level: --e.level
            }), c[1] = h = e.line, h >= r) break e;
            if (e.tShift[h] < e.blkIndent) break e;
            if (i = n(e, h), 0 > i) break;
            l = h;
          }
          if (h >= r) break;
          if (a = h, e.isEmpty(a)) break;
          if (e.tShift[a] < e.blkIndent) break;
          if (l = a + 1, l >= r) break;
          if (e.isEmpty(l) && l++, l >= r) break;
          if (e.tShift[l] < e.blkIndent) break;
          if (i = n(e, l), 0 > i) break;
        }
        return e.tokens.push({
          type: "dl_close",
          level: --e.level
        }), u[1] = h, e.line = h, k && s(e, p), !0;
      };
    }, {}],
    24: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
          o,
          i,
          l,
          a,
          c = !1,
          u = e.bMarks[t] + e.tShift[t],
          p = e.eMarks[t];
        if (u + 3 > p) return !1;
        if (s = e.src.charCodeAt(u), 126 !== s && 96 !== s) return !1;
        if (a = u, u = e.skipChars(u, s), o = u - a, 3 > o) return !1;
        if (i = e.src.slice(u, p).trim(), i.indexOf("`") >= 0) return !1;
        if (n) return !0;
        for (l = t; (l++, !(l >= r)) && (u = a = e.bMarks[l] + e.tShift[l], p = e.eMarks[l], !(p > u && e.tShift[l] < e.blkIndent));) if (e.src.charCodeAt(u) === s && !(e.tShift[l] - e.blkIndent >= 4 || (u = e.skipChars(u, s), o > u - a || (u = e.skipSpaces(u), p > u)))) {
          c = !0;
          break;
        }
        return o = e.tShift[t], e.line = l + (c ? 1 : 0), e.tokens.push({
          type: "fence",
          params: i,
          content: e.getLines(t + 1, l, o, !0),
          lines: [t, e.line],
          level: e.level
        }), !0;
      };
    }, {}],
    25: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
          o,
          i,
          l,
          a,
          c = e.bMarks[t] + e.tShift[t],
          u = e.eMarks[t];
        if (c + 4 > u) return !1;
        if (91 !== e.src.charCodeAt(c)) return !1;
        if (94 !== e.src.charCodeAt(c + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (l = c + 2; u > l; l++) {
          if (32 === e.src.charCodeAt(l)) return !1;
          if (93 === e.src.charCodeAt(l)) break;
        }
        return l === c + 2 ? !1 : l + 1 >= u || 58 !== e.src.charCodeAt(++l) ? !1 : n ? !0 : (l++, e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.refs || (e.env.footnotes.refs = {}), a = e.src.slice(c + 2, l - 2), e.env.footnotes.refs[":" + a] = -1, e.tokens.push({
          type: "footnote_reference_open",
          label: a,
          level: e.level++
        }), s = e.bMarks[t], o = e.tShift[t], i = e.parentType, e.tShift[t] = e.skipSpaces(l) - l, e.bMarks[t] = l, e.blkIndent += 4, e.parentType = "footnote", e.tShift[t] < e.blkIndent && (e.tShift[t] += e.blkIndent, e.bMarks[t] -= e.blkIndent), e.parser.tokenize(e, t, r, !0), e.parentType = i, e.blkIndent -= 4, e.tShift[t] = o, e.bMarks[t] = s, e.tokens.push({
          type: "footnote_reference_close",
          level: --e.level
        }), !0);
      };
    }, {}],
    26: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
          o,
          i,
          l = e.bMarks[t] + e.tShift[t],
          a = e.eMarks[t];
        if (l >= a) return !1;
        if (s = e.src.charCodeAt(l), 35 !== s || l >= a) return !1;
        for (o = 1, s = e.src.charCodeAt(++l); 35 === s && a > l && 6 >= o;) o++, s = e.src.charCodeAt(++l);
        return o > 6 || a > l && 32 !== s ? !1 : n ? !0 : (a = e.skipCharsBack(a, 32, l), i = e.skipCharsBack(a, 35, l), i > l && 32 === e.src.charCodeAt(i - 1) && (a = i), e.line = t + 1, e.tokens.push({
          type: "heading_open",
          hLevel: o,
          lines: [t, e.line],
          level: e.level
        }), a > l && e.tokens.push({
          type: "inline",
          content: e.src.slice(l, a).trim(),
          level: e.level + 1,
          lines: [t, e.line],
          children: []
        }), e.tokens.push({
          type: "heading_close",
          hLevel: o,
          level: e.level
        }), !0);
      };
    }, {}],
    27: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r, n) {
        var s,
          o,
          i,
          l = e.bMarks[t],
          a = e.eMarks[t];
        if (l += e.tShift[t], l > a) return !1;
        if (s = e.src.charCodeAt(l++), 42 !== s && 45 !== s && 95 !== s) return !1;
        for (o = 1; a > l;) {
          if (i = e.src.charCodeAt(l++), i !== s && 32 !== i) return !1;
          i === s && o++;
        }
        return 3 > o ? !1 : n ? !0 : (e.line = t + 1, e.tokens.push({
          type: "hr",
          lines: [t, e.line],
          level: e.level
        }), !0);
      };
    }, {}],
    28: [function (e, t, r) {
      "use strict";

      function n(e) {
        var t = 32 | e;
        return t >= 97 && 122 >= t;
      }
      var s = e("../common/html_blocks"),
        o = /^<([a-zA-Z]{1,15})[\s\/>]/,
        i = /^<\/([a-zA-Z]{1,15})[\s>]/;
      t.exports = function (e, t, r, l) {
        var a,
          c,
          u,
          p = e.bMarks[t],
          h = e.eMarks[t],
          f = e.tShift[t];
        if (p += f, !e.options.html) return !1;
        if (f > 3 || p + 2 >= h) return !1;
        if (60 !== e.src.charCodeAt(p)) return !1;
        if (a = e.src.charCodeAt(p + 1), 33 === a || 63 === a) {
          if (l) return !0;
        } else {
          if (47 !== a && !n(a)) return !1;
          if (47 === a) {
            if (c = e.src.slice(p, h).match(i), !c) return !1;
          } else if (c = e.src.slice(p, h).match(o), !c) return !1;
          if (s[c[1].toLowerCase()] !== !0) return !1;
          if (l) return !0;
        }
        for (u = t + 1; u < e.lineMax && !e.isEmpty(u);) u++;
        return e.line = u, e.tokens.push({
          type: "htmlblock",
          level: e.level,
          lines: [t, e.line],
          content: e.getLines(t, u, 0, !0)
        }), !0;
      };
    }, {
      "../common/html_blocks": 2
    }],
    29: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t, r) {
        var n,
          s,
          o,
          i = t + 1;
        return i >= r ? !1 : e.tShift[i] < e.blkIndent ? !1 : e.tShift[i] - e.blkIndent > 3 ? !1 : (s = e.bMarks[i] + e.tShift[i], o = e.eMarks[i], s >= o ? !1 : (n = e.src.charCodeAt(s), 45 !== n && 61 !== n ? !1 : (s = e.skipChars(s, n), s = e.skipSpaces(s), o > s ? !1 : (s = e.bMarks[t] + e.tShift[t], e.line = i + 1, e.tokens.push({
          type: "heading_open",
          hLevel: 61 === n ? 1 : 2,
          lines: [t, e.line],
          level: e.level
        }), e.tokens.push({
          type: "inline",
          content: e.src.slice(s, e.eMarks[t]).trim(),
          level: e.level + 1,
          lines: [t, e.line - 1],
          children: []
        }), e.tokens.push({
          type: "heading_close",
          hLevel: 61 === n ? 1 : 2,
          level: e.level
        }), !0))));
      };
    }, {}],
    30: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        var r, n, s;
        return n = e.bMarks[t] + e.tShift[t], s = e.eMarks[t], n >= s ? -1 : (r = e.src.charCodeAt(n++), 42 !== r && 45 !== r && 43 !== r ? -1 : s > n && 32 !== e.src.charCodeAt(n) ? -1 : n);
      }
      function s(e, t) {
        var r,
          n = e.bMarks[t] + e.tShift[t],
          s = e.eMarks[t];
        if (n + 1 >= s) return -1;
        if (r = e.src.charCodeAt(n++), 48 > r || r > 57) return -1;
        for (;;) {
          if (n >= s) return -1;
          if (r = e.src.charCodeAt(n++), !(r >= 48 && 57 >= r)) {
            if (41 === r || 46 === r) break;
            return -1;
          }
        }
        return s > n && 32 !== e.src.charCodeAt(n) ? -1 : n;
      }
      function o(e, t) {
        var r,
          n,
          s = e.level + 2;
        for (r = t + 2, n = e.tokens.length - 2; n > r; r++) e.tokens[r].level === s && "paragraph_open" === e.tokens[r].type && (e.tokens[r + 2].tight = !0, e.tokens[r].tight = !0, r += 2);
      }
      t.exports = function (e, t, r, i) {
        var l,
          a,
          c,
          u,
          p,
          h,
          f,
          d,
          g,
          m,
          b,
          v,
          k,
          _,
          y,
          x,
          w,
          A,
          q,
          C,
          S,
          E,
          M = !0;
        if ((d = s(e, t)) >= 0) k = !0;else {
          if (!((d = n(e, t)) >= 0)) return !1;
          k = !1;
        }
        if (e.level >= e.options.maxNesting) return !1;
        if (v = e.src.charCodeAt(d - 1), i) return !0;
        for (y = e.tokens.length, k ? (f = e.bMarks[t] + e.tShift[t], b = Number(e.src.substr(f, d - f - 1)), e.tokens.push({
          type: "ordered_list_open",
          order: b,
          lines: w = [t, 0],
          level: e.level++
        })) : e.tokens.push({
          type: "bullet_list_open",
          lines: w = [t, 0],
          level: e.level++
        }), l = t, x = !1, q = e.parser.ruler.getRules("list"); !(!(r > l) || (_ = e.skipSpaces(d), g = e.eMarks[l], m = _ >= g ? 1 : _ - d, m > 4 && (m = 1), 1 > m && (m = 1), a = d - e.bMarks[l] + m, e.tokens.push({
          type: "list_item_open",
          lines: A = [t, 0],
          level: e.level++
        }), u = e.blkIndent, p = e.tight, c = e.tShift[t], h = e.parentType, e.tShift[t] = _ - e.bMarks[t], e.blkIndent = a, e.tight = !0, e.parentType = "list", e.parser.tokenize(e, t, r, !0), (!e.tight || x) && (M = !1), x = e.line - t > 1 && e.isEmpty(e.line - 1), e.blkIndent = u, e.tShift[t] = c, e.tight = p, e.parentType = h, e.tokens.push({
          type: "list_item_close",
          level: --e.level
        }), l = t = e.line, A[1] = l, _ = e.bMarks[t], l >= r) || e.isEmpty(l) || e.tShift[l] < e.blkIndent);) {
          for (E = !1, C = 0, S = q.length; S > C; C++) if (q[C](e, l, r, !0)) {
            E = !0;
            break;
          }
          if (E) break;
          if (k) {
            if (d = s(e, l), 0 > d) break;
          } else if (d = n(e, l), 0 > d) break;
          if (v !== e.src.charCodeAt(d - 1)) break;
        }
        return e.tokens.push({
          type: k ? "ordered_list_close" : "bullet_list_close",
          level: --e.level
        }), w[1] = l, e.line = l, M && o(e, y), !0;
      };
    }, {}],
    31: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s,
          o,
          i,
          l,
          a = t + 1;
        if (r = e.lineMax, r > a && !e.isEmpty(a)) for (l = e.parser.ruler.getRules("paragraph"); r > a && !e.isEmpty(a); a++) if (!(e.tShift[a] - e.blkIndent > 3)) {
          for (s = !1, o = 0, i = l.length; i > o; o++) if (l[o](e, a, r, !0)) {
            s = !0;
            break;
          }
          if (s) break;
        }
        return n = e.getLines(t, a, e.blkIndent, !1).trim(), e.line = a, n.length && (e.tokens.push({
          type: "paragraph_open",
          tight: !1,
          lines: [t, e.line],
          level: e.level
        }), e.tokens.push({
          type: "inline",
          content: n,
          level: e.level + 1,
          lines: [t, e.line],
          children: []
        }), e.tokens.push({
          type: "paragraph_close",
          tight: !1,
          level: e.level
        })), !0;
      };
    }, {}],
    32: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n, s) {
        var o, i, l, a, c, u, p;
        for (this.src = e, this.parser = t, this.options = r, this.env = n, this.tokens = s, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", i = this.src, u = 0, p = !1, l = a = u = 0, c = i.length; c > a; a++) {
          if (o = i.charCodeAt(a), !p) {
            if (32 === o) {
              u++;
              continue;
            }
            p = !0;
          }
          (10 === o || a === c - 1) && (10 !== o && a++, this.bMarks.push(l), this.eMarks.push(a), this.tShift.push(u), p = !1, u = 0, l = a + 1);
        }
        this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1;
      }
      n.prototype.isEmpty = function (e) {
        return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
      }, n.prototype.skipEmptyLines = function (e) {
        for (var t = this.lineMax; t > e && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
        return e;
      }, n.prototype.skipSpaces = function (e) {
        for (var t = this.src.length; t > e && 32 === this.src.charCodeAt(e); e++);
        return e;
      }, n.prototype.skipChars = function (e, t) {
        for (var r = this.src.length; r > e && this.src.charCodeAt(e) === t; e++);
        return e;
      }, n.prototype.skipCharsBack = function (e, t, r) {
        if (r >= e) return e;
        for (; e > r;) if (t !== this.src.charCodeAt(--e)) return e + 1;
        return e;
      }, n.prototype.getLines = function (e, t, r, n) {
        var s,
          o,
          i,
          l,
          a,
          c = e;
        if (e >= t) return "";
        if (c + 1 === t) return o = this.bMarks[c] + Math.min(this.tShift[c], r), i = n ? this.eMarks[c] + 1 : this.eMarks[c], this.src.slice(o, i);
        for (l = new Array(t - e), s = 0; t > c; c++, s++) a = this.tShift[c], a > r && (a = r), 0 > a && (a = 0), o = this.bMarks[c] + a, i = t > c + 1 || n ? this.eMarks[c] + 1 : this.eMarks[c], l[s] = this.src.slice(o, i);
        return l.join("");
      }, t.exports = n;
    }, {}],
    33: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        var r = e.bMarks[t] + e.blkIndent,
          n = e.eMarks[t];
        return e.src.substr(r, n - r);
      }
      t.exports = function (e, t, r, s) {
        var o, i, l, a, c, u, p, h, f, d;
        if (t + 2 > r) return !1;
        if (c = t + 1, e.tShift[c] < e.blkIndent) return !1;
        if (l = e.bMarks[c] + e.tShift[c], l >= e.eMarks[c]) return !1;
        if (o = e.src.charCodeAt(l), 124 !== o && 45 !== o && 58 !== o) return !1;
        if (i = n(e, t + 1), !/^[-:| ]+$/.test(i)) return !1;
        if (u = i.split("|"), 2 >= u) return !1;
        for (p = [], a = 0; a < u.length; a++) {
          if (h = u[a].trim(), !h) {
            if (0 === a || a === u.length - 1) continue;
            return !1;
          }
          if (!/^:?-+:?$/.test(h)) return !1;
          58 === h.charCodeAt(h.length - 1) ? p.push(58 === h.charCodeAt(0) ? "center" : "right") : 58 === h.charCodeAt(0) ? p.push("left") : p.push("");
        }
        if (i = n(e, t).trim(), -1 === i.indexOf("|")) return !1;
        if (u = i.replace(/^\||\|$/g, "").split("|"), p.length !== u.length) return !1;
        if (s) return !0;
        for (e.tokens.push({
          type: "table_open",
          lines: f = [t, 0],
          level: e.level++
        }), e.tokens.push({
          type: "thead_open",
          lines: [t, t + 1],
          level: e.level++
        }), e.tokens.push({
          type: "tr_open",
          lines: [t, t + 1],
          level: e.level++
        }), a = 0; a < u.length; a++) e.tokens.push({
          type: "th_open",
          align: p[a],
          lines: [t, t + 1],
          level: e.level++
        }), e.tokens.push({
          type: "inline",
          content: u[a].trim(),
          lines: [t, t + 1],
          level: e.level,
          children: []
        }), e.tokens.push({
          type: "th_close",
          level: --e.level
        });
        for (e.tokens.push({
          type: "tr_close",
          level: --e.level
        }), e.tokens.push({
          type: "thead_close",
          level: --e.level
        }), e.tokens.push({
          type: "tbody_open",
          lines: d = [t + 2, 0],
          level: e.level++
        }), c = t + 2; r > c && !(e.tShift[c] < e.blkIndent) && (i = n(e, c).trim(), -1 !== i.indexOf("|")); c++) {
          for (u = i.replace(/^\||\|$/g, "").split("|"), e.tokens.push({
            type: "tr_open",
            level: e.level++
          }), a = 0; a < u.length; a++) e.tokens.push({
            type: "td_open",
            align: p[a],
            level: e.level++
          }), e.tokens.push({
            type: "inline",
            content: u[a].replace(/^\|? *| *\|?$/g, ""),
            level: e.level,
            children: []
          }), e.tokens.push({
            type: "td_close",
            level: --e.level
          });
          e.tokens.push({
            type: "tr_close",
            level: --e.level
          });
        }
        return e.tokens.push({
          type: "tbody_close",
          level: --e.level
        }), e.tokens.push({
          type: "table_close",
          level: --e.level
        }), f[1] = d[1] = c, e.line = c, !0;
      };
    }, {}],
    34: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n) {
        var i, l, a, c, u, p;
        if (42 !== e.charCodeAt(0)) return -1;
        if (91 !== e.charCodeAt(1)) return -1;
        if (-1 === e.indexOf("]:")) return -1;
        if (i = new s(e, t, r, n, []), l = o(i, 1), 0 > l || 58 !== e.charCodeAt(l + 1)) return -1;
        for (c = i.posMax, a = l + 2; c > a && 10 !== i.src.charCodeAt(a); a++);
        return u = e.slice(2, l), p = e.slice(l + 2, a).trim(), 0 === p.length ? -1 : (n.abbreviations || (n.abbreviations = {}), "undefined" == typeof n.abbreviations[":" + u] && (n.abbreviations[":" + u] = p), a);
      }
      var s = e("../rules_inline/state_inline"),
        o = e("../helpers/parse_link_label");
      t.exports = function (e) {
        var t,
          r,
          s,
          o,
          i = e.tokens;
        if (!e.inlineMode) for (t = 1, r = i.length - 1; r > t; t++) if ("paragraph_open" === i[t - 1].type && "inline" === i[t].type && "paragraph_close" === i[t + 1].type) {
          for (s = i[t].content; s.length && (o = n(s, e.inline, e.options, e.env), !(0 > o));) s = s.slice(o).trim();
          i[t].content = s, s.length || (i[t - 1].tight = !0, i[t + 1].tight = !0);
        }
      };
    }, {
      "../helpers/parse_link_label": 12,
      "../rules_inline/state_inline": 56
    }],
    35: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
      }
      var s = " \n()[]'\".,!?-";
      t.exports = function (e) {
        var t,
          r,
          o,
          i,
          l,
          a,
          c,
          u,
          p,
          h,
          f,
          d,
          g = e.tokens;
        if (e.env.abbreviations) for (e.env.abbrRegExp || (d = "(^|[" + s.split("").map(n).join("") + "])(" + Object.keys(e.env.abbreviations).map(function (e) {
          return e.substr(1);
        }).sort(function (e, t) {
          return t.length - e.length;
        }).map(n).join("|") + ")($|[" + s.split("").map(n).join("") + "])", e.env.abbrRegExp = new RegExp(d, "g")), h = e.env.abbrRegExp, r = 0, o = g.length; o > r; r++) if ("inline" === g[r].type) for (i = g[r].children, t = i.length - 1; t >= 0; t--) if (l = i[t], "text" === l.type) {
          for (u = 0, a = l.content, h.lastIndex = 0, p = l.level, c = []; f = h.exec(a);) h.lastIndex > u && c.push({
            type: "text",
            content: a.slice(u, f.index + f[1].length),
            level: p
          }), c.push({
            type: "abbr_open",
            title: e.env.abbreviations[":" + f[2]],
            level: p++
          }), c.push({
            type: "text",
            content: f[2],
            level: p
          }), c.push({
            type: "abbr_close",
            level: --p
          }), u = h.lastIndex - f[3].length;
          c.length && (u < a.length && c.push({
            type: "text",
            content: a.slice(u),
            level: p
          }), g[r].children = i = [].concat(i.slice(0, t), c, i.slice(t + 1)));
        }
      };
    }, {}],
    36: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        e.inlineMode ? e.tokens.push({
          type: "inline",
          content: e.src.replace(/\n/g, " ").trim(),
          level: 0,
          lines: [0, 1],
          children: []
        }) : e.block.parse(e.src, e.options, e.env, e.tokens);
      };
    }, {}],
    37: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        var t,
          r,
          n,
          s,
          o,
          i,
          l,
          a,
          c,
          u = 0,
          p = !1,
          h = {};
        if (e.env.footnotes && (e.tokens = e.tokens.filter(function (e) {
          return "footnote_reference_open" === e.type ? (p = !0, a = [], c = e.label, !1) : "footnote_reference_close" === e.type ? (p = !1, h[":" + c] = a, !1) : (p && a.push(e), !p);
        }), e.env.footnotes.list)) {
          for (i = e.env.footnotes.list, e.tokens.push({
            type: "footnote_block_open",
            level: u++
          }), t = 0, r = i.length; r > t; t++) {
            for (e.tokens.push({
              type: "footnote_open",
              id: t,
              level: u++
            }), i[t].tokens ? (l = [], l.push({
              type: "paragraph_open",
              tight: !1,
              level: u++
            }), l.push({
              type: "inline",
              content: "",
              level: u,
              children: i[t].tokens
            }), l.push({
              type: "paragraph_close",
              tight: !1,
              level: --u
            })) : i[t].label && (l = h[":" + i[t].label]), e.tokens = e.tokens.concat(l), o = "paragraph_close" === e.tokens[e.tokens.length - 1].type ? e.tokens.pop() : null, s = i[t].count > 0 ? i[t].count : 1, n = 0; s > n; n++) e.tokens.push({
              type: "footnote_anchor",
              id: t,
              subId: n,
              level: u
            });
            o && e.tokens.push(o), e.tokens.push({
              type: "footnote_close",
              level: --u
            });
          }
          e.tokens.push({
            type: "footnote_block_close",
            level: --u
          });
        }
      };
    }, {}],
    38: [function (e, t, r) {
      "use strict";

      t.exports = function (e) {
        var t,
          r,
          n,
          s = e.tokens;
        for (r = 0, n = s.length; n > r; r++) t = s[r], "inline" === t.type && e.inline.parse(t.content, e.options, e.env, t.children);
      };
    }, {}],
    39: [function (e, t, r) {
      "use strict";

      function n(e) {
        return /^<a[>\s]/i.test(e);
      }
      function s(e) {
        return /^<\/a\s*>/i.test(e);
      }
      function o() {
        var e = [],
          t = new i({
            stripPrefix: !1,
            url: !0,
            email: !0,
            twitter: !1,
            replaceFn: function replaceFn(t, r) {
              switch (r.getType()) {
                case "url":
                  e.push({
                    text: r.matchedText,
                    url: r.getUrl()
                  });
                  break;
                case "email":
                  e.push({
                    text: r.matchedText,
                    url: "mailto:" + r.getEmail().replace(/^mailto:/i, "")
                  });
              }
              return !1;
            }
          });
        return {
          links: e,
          autolinker: t
        };
      }
      var i = e("autolinker"),
        l = /www|@|\:\/\//;
      t.exports = function (e) {
        var t,
          r,
          i,
          a,
          c,
          u,
          p,
          h,
          f,
          d,
          g,
          m,
          b,
          v = e.tokens,
          k = null;
        if (e.options.linkify) for (r = 0, i = v.length; i > r; r++) if ("inline" === v[r].type) for (a = v[r].children, g = 0, t = a.length - 1; t >= 0; t--) if (c = a[t], "link_close" !== c.type) {
          if ("htmltag" === c.type && (n(c.content) && g > 0 && g--, s(c.content) && g++), !(g > 0) && "text" === c.type && l.test(c.content)) {
            if (k || (k = o(), m = k.links, b = k.autolinker), u = c.content, m.length = 0, b.link(u), !m.length) continue;
            for (p = [], d = c.level, h = 0; h < m.length; h++) e.inline.validateLink(m[h].url) && (f = u.indexOf(m[h].text), f && (d = d, p.push({
              type: "text",
              content: u.slice(0, f),
              level: d
            })), p.push({
              type: "link_open",
              href: m[h].url,
              title: "",
              level: d++
            }), p.push({
              type: "text",
              content: m[h].text,
              level: d
            }), p.push({
              type: "link_close",
              level: --d
            }), u = u.slice(f + m[h].text.length));
            u.length && p.push({
              type: "text",
              content: u,
              level: d
            }), v[r].children = a = [].concat(a.slice(0, t), p, a.slice(t + 1));
          }
        } else for (t--; a[t].level !== c.level && "link_open" !== a[t].type;) t--;
      };
    }, {
      autolinker: 60
    }],
    40: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n) {
        var c, u, p, h, f, d, g, m, b;
        if (91 !== e.charCodeAt(0)) return -1;
        if (-1 === e.indexOf("]:")) return -1;
        if (c = new s(e, t, r, n, []), u = o(c, 0), 0 > u || 58 !== e.charCodeAt(u + 1)) return -1;
        for (h = c.posMax, p = u + 2; h > p && (f = c.src.charCodeAt(p), 32 === f || 10 === f); p++);
        if (!i(c, p)) return -1;
        for (g = c.linkContent, p = c.pos, d = p, p += 1; h > p && (f = c.src.charCodeAt(p), 32 === f || 10 === f); p++);
        for (h > p && d !== p && l(c, p) ? (m = c.linkContent, p = c.pos) : (m = "", p = d); h > p && 32 === c.src.charCodeAt(p);) p++;
        return h > p && 10 !== c.src.charCodeAt(p) ? -1 : (b = a(e.slice(1, u)), "undefined" == typeof n.references[b] && (n.references[b] = {
          title: m,
          href: g
        }), p);
      }
      var s = e("../rules_inline/state_inline"),
        o = e("../helpers/parse_link_label"),
        i = e("../helpers/parse_link_destination"),
        l = e("../helpers/parse_link_title"),
        a = e("../helpers/normalize_reference");
      t.exports = function (e) {
        var t,
          r,
          s,
          o,
          i = e.tokens;
        if (e.env.references = e.env.references || {}, !e.inlineMode) for (t = 1, r = i.length - 1; r > t; t++) if ("inline" === i[t].type && "paragraph_open" === i[t - 1].type && "paragraph_close" === i[t + 1].type) {
          for (s = i[t].content; s.length && (o = n(s, e.inline, e.options, e.env), !(0 > o));) s = s.slice(o).trim();
          i[t].content = s, s.length || (i[t - 1].tight = !0, i[t + 1].tight = !0);
        }
      };
    }, {
      "../helpers/normalize_reference": 10,
      "../helpers/parse_link_destination": 11,
      "../helpers/parse_link_label": 12,
      "../helpers/parse_link_title": 13,
      "../rules_inline/state_inline": 56
    }],
    41: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e.indexOf("(") < 0 ? e : e.replace(o, function (e, t) {
          return i[t.toLowerCase()];
        });
      }
      var s = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
        o = /\((c|tm|r|p)\)/gi,
        i = {
          c: "©",
          r: "®",
          p: "§",
          tm: "™"
        };
      t.exports = function (e) {
        var t, r, o, i, l;
        if (e.options.typographer) for (l = e.tokens.length - 1; l >= 0; l--) if ("inline" === e.tokens[l].type) for (i = e.tokens[l].children, t = i.length - 1; t >= 0; t--) r = i[t], "text" === r.type && (o = r.content, o = n(o), s.test(o) && (o = o.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")), r.content = o);
      };
    }, {}],
    42: [function (e, t, r) {
      "use strict";

      function n(e, t) {
        return 0 > t || t >= e.length ? !1 : !l.test(e[t]);
      }
      function s(e, t, r) {
        return e.substr(0, t) + r + e.substr(t + 1);
      }
      var o = /['"]/,
        i = /['"]/g,
        l = /[-\s()\[\]]/,
        a = "’";
      t.exports = function (e) {
        var t, r, l, c, u, p, h, f, d, g, m, b, v, k, _, y, x;
        if (e.options.typographer) for (x = [], _ = e.tokens.length - 1; _ >= 0; _--) if ("inline" === e.tokens[_].type) for (y = e.tokens[_].children, x.length = 0, t = 0; t < y.length; t++) if (r = y[t], "text" === r.type && !o.test(r.text)) {
          for (h = y[t].level, v = x.length - 1; v >= 0 && !(x[v].level <= h); v--);
          x.length = v + 1, l = r.content, u = 0, p = l.length;
          e: for (; p > u && (i.lastIndex = u, c = i.exec(l));) if (f = !n(l, c.index - 1), u = c.index + 1, k = "'" === c[0], d = !n(l, u), d || f) {
            if (m = !d, b = !f) for (v = x.length - 1; v >= 0 && (g = x[v], !(x[v].level < h)); v--) if (g.single === k && x[v].level === h) {
              g = x[v], k ? (y[g.token].content = s(y[g.token].content, g.pos, e.options.quotes[2]), r.content = s(r.content, c.index, e.options.quotes[3])) : (y[g.token].content = s(y[g.token].content, g.pos, e.options.quotes[0]), r.content = s(r.content, c.index, e.options.quotes[1])), x.length = v;
              continue e;
            }
            m ? x.push({
              token: t,
              pos: c.index,
              single: k,
              level: h
            }) : b && k && (r.content = s(r.content, c.index, a));
          } else k && (r.content = s(r.content, c.index, a));
        }
      };
    }, {}],
    43: [function (e, t, r) {
      "use strict";

      var n = e("../common/url_schemas"),
        s = e("../helpers/normalize_link"),
        o = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
        i = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
      t.exports = function (e, t) {
        var r,
          l,
          a,
          c,
          u,
          p = e.pos;
        return 60 !== e.src.charCodeAt(p) ? !1 : (r = e.src.slice(p), r.indexOf(">") < 0 ? !1 : (l = r.match(i)) ? n.indexOf(l[1].toLowerCase()) < 0 ? !1 : (c = l[0].slice(1, -1), u = s(c), e.parser.validateLink(c) ? (t || (e.push({
          type: "link_open",
          href: u,
          level: e.level
        }), e.push({
          type: "text",
          content: c,
          level: e.level + 1
        }), e.push({
          type: "link_close",
          level: e.level
        })), e.pos += l[0].length, !0) : !1) : (a = r.match(o), a ? (c = a[0].slice(1, -1), u = s("mailto:" + c), e.parser.validateLink(u) ? (t || (e.push({
          type: "link_open",
          href: u,
          level: e.level
        }), e.push({
          type: "text",
          content: c,
          level: e.level + 1
        }), e.push({
          type: "link_close",
          level: e.level
        })), e.pos += a[0].length, !0) : !1) : !1));
      };
    }, {
      "../common/url_schemas": 4,
      "../helpers/normalize_link": 9
    }],
    44: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s,
          o,
          i,
          l = e.pos,
          a = e.src.charCodeAt(l);
        if (96 !== a) return !1;
        for (r = l, l++, n = e.posMax; n > l && 96 === e.src.charCodeAt(l);) l++;
        for (s = e.src.slice(r, l), o = i = l; -1 !== (o = e.src.indexOf("`", i));) {
          for (i = o + 1; n > i && 96 === e.src.charCodeAt(i);) i++;
          if (i - o === s.length) return t || e.push({
            type: "code",
            content: e.src.slice(l, o).replace(/[ \n]+/g, " ").trim(),
            block: !1,
            level: e.level
          }), e.pos = i, !0;
        }
        return t || (e.pending += s), e.pos += s.length, !0;
      };
    }, {}],
    45: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s,
          o,
          i,
          l = e.posMax,
          a = e.pos;
        if (126 !== e.src.charCodeAt(a)) return !1;
        if (t) return !1;
        if (a + 4 >= l) return !1;
        if (126 !== e.src.charCodeAt(a + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 126 === o) return !1;
        if (126 === i) return !1;
        if (32 === i || 10 === i) return !1;
        for (n = a + 2; l > n && 126 === e.src.charCodeAt(n);) n++;
        if (n > a + 3) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;
        for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
          if (126 === e.src.charCodeAt(e.pos) && 126 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 126 !== i && 126 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
            r = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
          type: "del_open",
          level: e.level++
        }), e.parser.tokenize(e), e.push({
          type: "del_close",
          level: --e.level
        })), e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1);
      };
    }, {}],
    46: [function (e, t, r) {
      "use strict";

      function n(e) {
        return e >= 48 && 57 >= e || e >= 65 && 90 >= e || e >= 97 && 122 >= e;
      }
      function s(e, t) {
        var r,
          s,
          o,
          i = t,
          l = !0,
          a = !0,
          c = e.posMax,
          u = e.src.charCodeAt(t);
        for (r = t > 0 ? e.src.charCodeAt(t - 1) : -1; c > i && e.src.charCodeAt(i) === u;) i++;
        return i >= c && (l = !1), o = i - t, o >= 4 ? l = a = !1 : (s = c > i ? e.src.charCodeAt(i) : -1, (32 === s || 10 === s) && (l = !1), (32 === r || 10 === r) && (a = !1), 95 === u && (n(r) && (l = !1), n(s) && (a = !1))), {
          can_open: l,
          can_close: a,
          delims: o
        };
      }
      t.exports = function (e, t) {
        var r,
          n,
          o,
          i,
          l,
          a,
          c,
          u = e.posMax,
          p = e.pos,
          h = e.src.charCodeAt(p);
        if (95 !== h && 42 !== h) return !1;
        if (t) return !1;
        if (c = s(e, p), r = c.delims, !c.can_open) return e.pos += r, t || (e.pending += e.src.slice(p, e.pos)), !0;
        if (e.level >= e.options.maxNesting) return !1;
        for (e.pos = p + r, a = [r]; e.pos < u;) if (e.src.charCodeAt(e.pos) !== h) e.parser.skipToken(e);else {
          if (c = s(e, e.pos), n = c.delims, c.can_close) {
            for (i = a.pop(), l = n; i !== l;) {
              if (i > l) {
                a.push(i - l);
                break;
              }
              if (l -= i, 0 === a.length) break;
              e.pos += i, i = a.pop();
            }
            if (0 === a.length) {
              r = i, o = !0;
              break;
            }
            e.pos += n;
            continue;
          }
          c.can_open && a.push(n), e.pos += n;
        }
        return o ? (e.posMax = e.pos, e.pos = p + r, t || ((2 === r || 3 === r) && e.push({
          type: "strong_open",
          level: e.level++
        }), (1 === r || 3 === r) && e.push({
          type: "em_open",
          level: e.level++
        }), e.parser.tokenize(e), (1 === r || 3 === r) && e.push({
          type: "em_close",
          level: --e.level
        }), (2 === r || 3 === r) && e.push({
          type: "strong_close",
          level: --e.level
        })), e.pos = e.posMax + r, e.posMax = u, !0) : (e.pos = p, !1);
      };
    }, {}],
    47: [function (e, t, r) {
      "use strict";

      var n = e("../common/entities"),
        s = e("../common/utils").has,
        o = e("../common/utils").isValidEntityCode,
        i = e("../common/utils").fromCodePoint,
        l = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
        a = /^&([a-z][a-z0-9]{1,31});/i;
      t.exports = function (e, t) {
        var r,
          c,
          u,
          p = e.pos,
          h = e.posMax;
        if (38 !== e.src.charCodeAt(p)) return !1;
        if (h > p + 1) if (r = e.src.charCodeAt(p + 1), 35 === r) {
          if (u = e.src.slice(p).match(l)) return t || (c = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1), 16) : parseInt(u[1], 10), e.pending += i(o(c) ? c : 65533)), e.pos += u[0].length, !0;
        } else if (u = e.src.slice(p).match(a), u && s(n, u[1])) return t || (e.pending += n[u[1]]), e.pos += u[0].length, !0;
        return t || (e.pending += "&"), e.pos++, !0;
      };
    }, {
      "../common/entities": 1,
      "../common/utils": 5
    }],
    48: [function (e, t, r) {
      "use strict";

      for (var n = [], s = 0; 256 > s; s++) n.push(0);
      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
        n[e.charCodeAt(0)] = 1;
      }), t.exports = function (e, t) {
        var r,
          s = e.pos,
          o = e.posMax;
        if (92 !== e.src.charCodeAt(s)) return !1;
        if (s++, o > s) {
          if (r = e.src.charCodeAt(s), 256 > r && 0 !== n[r]) return t || (e.pending += e.src[s]), e.pos += 2, !0;
          if (10 === r) {
            for (t || e.push({
              type: "hardbreak",
              level: e.level
            }), s++; o > s && 32 === e.src.charCodeAt(s);) s++;
            return e.pos = s, !0;
          }
        }
        return t || (e.pending += "\\"), e.pos++, !0;
      };
    }, {}],
    49: [function (e, t, r) {
      "use strict";

      var n = e("../helpers/parse_link_label");
      t.exports = function (e, t) {
        var r,
          s,
          o,
          i,
          l = e.posMax,
          a = e.pos;
        return a + 2 >= l ? !1 : 94 !== e.src.charCodeAt(a) ? !1 : 91 !== e.src.charCodeAt(a + 1) ? !1 : e.level >= e.options.maxNesting ? !1 : (r = a + 2, s = n(e, a + 1), 0 > s ? !1 : (t || (e.env.footnotes || (e.env.footnotes = {}), e.env.footnotes.list || (e.env.footnotes.list = []), o = e.env.footnotes.list.length, e.pos = r, e.posMax = s, e.push({
          type: "footnote_ref",
          id: o,
          level: e.level
        }), e.linkLevel++, i = e.tokens.length, e.parser.tokenize(e), e.env.footnotes.list[o] = {
          tokens: e.tokens.splice(i)
        }, e.linkLevel--), e.pos = s + 1, e.posMax = l, !0));
      };
    }, {
      "../helpers/parse_link_label": 12
    }],
    50: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s,
          o,
          i = e.posMax,
          l = e.pos;
        if (l + 3 > i) return !1;
        if (!e.env.footnotes || !e.env.footnotes.refs) return !1;
        if (91 !== e.src.charCodeAt(l)) return !1;
        if (94 !== e.src.charCodeAt(l + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (n = l + 2; i > n; n++) {
          if (32 === e.src.charCodeAt(n)) return !1;
          if (10 === e.src.charCodeAt(n)) return !1;
          if (93 === e.src.charCodeAt(n)) break;
        }
        return n === l + 2 ? !1 : n >= i ? !1 : (n++, r = e.src.slice(l + 2, n - 1), "undefined" == typeof e.env.footnotes.refs[":" + r] ? !1 : (t || (e.env.footnotes.list || (e.env.footnotes.list = []), e.env.footnotes.refs[":" + r] < 0 ? (s = e.env.footnotes.list.length, e.env.footnotes.list[s] = {
          label: r,
          count: 0
        }, e.env.footnotes.refs[":" + r] = s) : s = e.env.footnotes.refs[":" + r], o = e.env.footnotes.list[s].count, e.env.footnotes.list[s].count++, e.push({
          type: "footnote_ref",
          id: s,
          subId: o,
          level: e.level
        })), e.pos = n, e.posMax = i, !0));
      };
    }, {}],
    51: [function (e, t, r) {
      "use strict";

      function n(e) {
        var t = 32 | e;
        return t >= 97 && 122 >= t;
      }
      var s = e("../common/html_re").HTML_TAG_RE;
      t.exports = function (e, t) {
        var r,
          o,
          i,
          l = e.pos;
        return e.options.html ? (i = e.posMax, 60 !== e.src.charCodeAt(l) || l + 2 >= i ? !1 : (r = e.src.charCodeAt(l + 1), (33 === r || 63 === r || 47 === r || n(r)) && (o = e.src.slice(l).match(s)) ? (t || e.push({
          type: "htmltag",
          content: e.src.slice(l, l + o[0].length),
          level: e.level
        }), e.pos += o[0].length, !0) : !1)) : !1;
      };
    }, {
      "../common/html_re": 3
    }],
    52: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s,
          o,
          i,
          l = e.posMax,
          a = e.pos;
        if (43 !== e.src.charCodeAt(a)) return !1;
        if (t) return !1;
        if (a + 4 >= l) return !1;
        if (43 !== e.src.charCodeAt(a + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 43 === o) return !1;
        if (43 === i) return !1;
        if (32 === i || 10 === i) return !1;
        for (n = a + 2; l > n && 43 === e.src.charCodeAt(n);) n++;
        if (n !== a + 2) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;
        for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
          if (43 === e.src.charCodeAt(e.pos) && 43 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 43 !== i && 43 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
            r = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
          type: "ins_open",
          level: e.level++
        }), e.parser.tokenize(e), e.push({
          type: "ins_close",
          level: --e.level
        })), e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1);
      };
    }, {}],
    53: [function (e, t, r) {
      "use strict";

      var n = e("../helpers/parse_link_label"),
        s = e("../helpers/parse_link_destination"),
        o = e("../helpers/parse_link_title"),
        i = e("../helpers/normalize_reference");
      t.exports = function (e, t) {
        var r,
          l,
          a,
          c,
          u,
          p,
          h,
          f,
          d = !1,
          g = e.pos,
          m = e.posMax,
          b = e.pos,
          v = e.src.charCodeAt(b);
        if (33 === v && (d = !0, v = e.src.charCodeAt(++b)), 91 !== v) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (r = b + 1, l = n(e, b), 0 > l) return !1;
        if (p = l + 1, m > p && 40 === e.src.charCodeAt(p)) {
          for (p++; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);
          if (p >= m) return !1;
          for (b = p, s(e, p) ? (c = e.linkContent, p = e.pos) : c = "", b = p; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);
          if (m > p && b !== p && o(e, p)) for (u = e.linkContent, p = e.pos; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);else u = "";
          if (p >= m || 41 !== e.src.charCodeAt(p)) return e.pos = g, !1;
          p++;
        } else {
          if (e.linkLevel > 0) return !1;
          for (; m > p && (f = e.src.charCodeAt(p), 32 === f || 10 === f); p++);
          if (m > p && 91 === e.src.charCodeAt(p) && (b = p + 1, p = n(e, p), p >= 0 ? a = e.src.slice(b, p++) : p = b - 1), a || ("undefined" == typeof a && (p = l + 1), a = e.src.slice(r, l)), h = e.env.references[i(a)], !h) return e.pos = g, !1;
          c = h.href, u = h.title;
        }
        return t || (e.pos = r, e.posMax = l, d ? e.push({
          type: "image",
          src: c,
          title: u,
          alt: e.src.substr(r, l - r),
          level: e.level
        }) : (e.push({
          type: "link_open",
          href: c,
          title: u,
          level: e.level++
        }), e.linkLevel++, e.parser.tokenize(e), e.linkLevel--, e.push({
          type: "link_close",
          level: --e.level
        }))), e.pos = p, e.posMax = m, !0;
      };
    }, {
      "../helpers/normalize_reference": 10,
      "../helpers/parse_link_destination": 11,
      "../helpers/parse_link_label": 12,
      "../helpers/parse_link_title": 13
    }],
    54: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s,
          o,
          i,
          l = e.posMax,
          a = e.pos;
        if (61 !== e.src.charCodeAt(a)) return !1;
        if (t) return !1;
        if (a + 4 >= l) return !1;
        if (61 !== e.src.charCodeAt(a + 1)) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        if (o = a > 0 ? e.src.charCodeAt(a - 1) : -1, i = e.src.charCodeAt(a + 2), 61 === o) return !1;
        if (61 === i) return !1;
        if (32 === i || 10 === i) return !1;
        for (n = a + 2; l > n && 61 === e.src.charCodeAt(n);) n++;
        if (n !== a + 2) return e.pos += n - a, t || (e.pending += e.src.slice(a, n)), !0;
        for (e.pos = a + 2, s = 1; e.pos + 1 < l;) {
          if (61 === e.src.charCodeAt(e.pos) && 61 === e.src.charCodeAt(e.pos + 1) && (o = e.src.charCodeAt(e.pos - 1), i = e.pos + 2 < l ? e.src.charCodeAt(e.pos + 2) : -1, 61 !== i && 61 !== o && (32 !== o && 10 !== o ? s-- : 32 !== i && 10 !== i && s++, 0 >= s))) {
            r = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return r ? (e.posMax = e.pos, e.pos = a + 2, t || (e.push({
          type: "mark_open",
          level: e.level++
        }), e.parser.tokenize(e), e.push({
          type: "mark_close",
          level: --e.level
        })), e.pos = e.posMax + 2, e.posMax = l, !0) : (e.pos = a, !1);
      };
    }, {}],
    55: [function (e, t, r) {
      "use strict";

      t.exports = function (e, t) {
        var r,
          n,
          s = e.pos;
        if (10 !== e.src.charCodeAt(s)) return !1;
        for (r = e.pending.length - 1, n = e.posMax, t || (r >= 0 && 32 === e.pending.charCodeAt(r) ? r >= 1 && 32 === e.pending.charCodeAt(r - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push({
          type: "hardbreak",
          level: e.level
        })) : (e.pending = e.pending.slice(0, -1), e.push({
          type: "softbreak",
          level: e.level
        })) : e.push({
          type: "softbreak",
          level: e.level
        })), s++; n > s && 32 === e.src.charCodeAt(s);) s++;
        return e.pos = s, !0;
      };
    }, {}],
    56: [function (e, t, r) {
      "use strict";

      function n(e, t, r, n, s) {
        this.src = e, this.env = n, this.options = r, this.parser = t, this.tokens = s, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
      }
      n.prototype.pushPending = function () {
        this.tokens.push({
          type: "text",
          content: this.pending,
          level: this.pendingLevel
        }), this.pending = "";
      }, n.prototype.push = function (e) {
        this.pending && this.pushPending(), this.tokens.push(e), this.pendingLevel = this.level;
      }, n.prototype.cacheSet = function (e, t) {
        for (var r = this.cache.length; e >= r; r++) this.cache.push(0);
        this.cache[e] = t;
      }, n.prototype.cacheGet = function (e) {
        return e < this.cache.length ? this.cache[e] : 0;
      }, t.exports = n;
    }, {}],
    57: [function (e, t, r) {
      "use strict";

      var n = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
      t.exports = function (e, t) {
        var r,
          s,
          o = e.posMax,
          i = e.pos;
        if (126 !== e.src.charCodeAt(i)) return !1;
        if (t) return !1;
        if (i + 2 >= o) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (e.pos = i + 1; e.pos < o;) {
          if (126 === e.src.charCodeAt(e.pos)) {
            r = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return r && i + 1 !== e.pos ? (s = e.src.slice(i + 1, e.pos), s.match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = i, !1) : (e.posMax = e.pos, e.pos = i + 1, t || e.push({
          type: "sub",
          level: e.level,
          content: s.replace(n, "$1")
        }), e.pos = e.posMax + 1, e.posMax = o, !0)) : (e.pos = i, !1);
      };
    }, {}],
    58: [function (e, t, r) {
      "use strict";

      var n = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
      t.exports = function (e, t) {
        var r,
          s,
          o = e.posMax,
          i = e.pos;
        if (94 !== e.src.charCodeAt(i)) return !1;
        if (t) return !1;
        if (i + 2 >= o) return !1;
        if (e.level >= e.options.maxNesting) return !1;
        for (e.pos = i + 1; e.pos < o;) {
          if (94 === e.src.charCodeAt(e.pos)) {
            r = !0;
            break;
          }
          e.parser.skipToken(e);
        }
        return r && i + 1 !== e.pos ? (s = e.src.slice(i + 1, e.pos), s.match(/(^|[^\\])(\\\\)*\s/) ? (e.pos = i, !1) : (e.posMax = e.pos, e.pos = i + 1, t || e.push({
          type: "sup",
          level: e.level,
          content: s.replace(n, "$1")
        }), e.pos = e.posMax + 1, e.posMax = o, !0)) : (e.pos = i, !1);
      };
    }, {}],
    59: [function (e, t, r) {
      "use strict";

      function n(e) {
        switch (e) {
          case 10:
          case 92:
          case 96:
          case 42:
          case 95:
          case 94:
          case 91:
          case 93:
          case 33:
          case 38:
          case 60:
          case 62:
          case 123:
          case 125:
          case 36:
          case 37:
          case 64:
          case 126:
          case 43:
          case 61:
          case 58:
            return !0;
          default:
            return !1;
        }
      }
      t.exports = function (e, t) {
        for (var r = e.pos; r < e.posMax && !n(e.src.charCodeAt(r));) r++;
        return r === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
      };
    }, {}],
    60: [function (t, r, n) {
      !function (t, s) {
        "function" == typeof e && e.amd ? e([], function () {
          return t.Autolinker = s();
        }) : "object" == _typeof(n) ? r.exports = s() : t.Autolinker = s();
      }(this, function () {
        var _e = function e(t) {
          _e.Util.assign(this, t);
        };
        return _e.prototype = {
          constructor: _e,
          urls: !0,
          email: !0,
          twitter: !0,
          newWindow: !0,
          stripPrefix: !0,
          truncate: void 0,
          className: "",
          htmlParser: void 0,
          matchParser: void 0,
          tagBuilder: void 0,
          link: function link(e) {
            for (var t = this.getHtmlParser(), r = t.parse(e), n = 0, s = [], o = 0, i = r.length; i > o; o++) {
              var l = r[o],
                a = l.getType(),
                c = l.getText();
              if ("element" === a) "a" === l.getTagName() && (l.isClosing() ? n = Math.max(n - 1, 0) : n++), s.push(c);else if ("entity" === a) s.push(c);else if (0 === n) {
                var u = this.linkifyStr(c);
                s.push(u);
              } else s.push(c);
            }
            return s.join("");
          },
          linkifyStr: function linkifyStr(e) {
            return this.getMatchParser().replace(e, this.createMatchReturnVal, this);
          },
          createMatchReturnVal: function createMatchReturnVal(t) {
            var r;
            if (this.replaceFn && (r = this.replaceFn.call(this, this, t)), "string" == typeof r) return r;
            if (r === !1) return t.getMatchedText();
            if (r instanceof _e.HtmlTag) return r.toString();
            var n = this.getTagBuilder(),
              s = n.build(t);
            return s.toString();
          },
          getHtmlParser: function getHtmlParser() {
            var t = this.htmlParser;
            return t || (t = this.htmlParser = new _e.htmlParser.HtmlParser()), t;
          },
          getMatchParser: function getMatchParser() {
            var t = this.matchParser;
            return t || (t = this.matchParser = new _e.matchParser.MatchParser({
              urls: this.urls,
              email: this.email,
              twitter: this.twitter,
              stripPrefix: this.stripPrefix
            })), t;
          },
          getTagBuilder: function getTagBuilder() {
            var t = this.tagBuilder;
            return t || (t = this.tagBuilder = new _e.AnchorTagBuilder({
              newWindow: this.newWindow,
              truncate: this.truncate,
              className: this.className
            })), t;
          }
        }, _e.link = function (t, r) {
          var n = new _e(r);
          return n.link(t);
        }, _e.match = {}, _e.htmlParser = {}, _e.matchParser = {}, _e.Util = {
          abstractMethod: function abstractMethod() {
            throw "abstract";
          },
          assign: function assign(e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            return e;
          },
          extend: function extend(t, r) {
            var n = t.prototype,
              s = function s() {};
            s.prototype = n;
            var o;
            o = r.hasOwnProperty("constructor") ? r.constructor : function () {
              n.constructor.apply(this, arguments);
            };
            var i = o.prototype = new s();
            return i.constructor = o, i.superclass = n, delete r.constructor, _e.Util.assign(i, r), o;
          },
          ellipsis: function ellipsis(e, t, r) {
            return e.length > t && (r = null == r ? ".." : r, e = e.substring(0, t - r.length) + r), e;
          },
          indexOf: function indexOf(e, t) {
            if (Array.prototype.indexOf) return e.indexOf(t);
            for (var r = 0, n = e.length; n > r; r++) if (e[r] === t) return r;
            return -1;
          },
          splitAndCapture: function splitAndCapture(e, t) {
            if (!t.global) throw new Error("`splitRegex` must have the 'g' flag set");
            for (var r, n = [], s = 0; r = t.exec(e);) n.push(e.substring(s, r.index)), n.push(r[0]), s = r.index + r[0].length;
            return n.push(e.substring(s)), n;
          }
        }, _e.HtmlTag = _e.Util.extend(Object, {
          whitespaceRegex: /\s+/,
          constructor: function constructor(t) {
            _e.Util.assign(this, t), this.innerHtml = this.innerHtml || this.innerHTML;
          },
          setTagName: function setTagName(e) {
            return this.tagName = e, this;
          },
          getTagName: function getTagName() {
            return this.tagName || "";
          },
          setAttr: function setAttr(e, t) {
            var r = this.getAttrs();
            return r[e] = t, this;
          },
          getAttr: function getAttr(e) {
            return this.getAttrs()[e];
          },
          setAttrs: function setAttrs(t) {
            var r = this.getAttrs();
            return _e.Util.assign(r, t), this;
          },
          getAttrs: function getAttrs() {
            return this.attrs || (this.attrs = {});
          },
          setClass: function setClass(e) {
            return this.setAttr("class", e);
          },
          addClass: function addClass(t) {
            for (var r, n = this.getClass(), s = this.whitespaceRegex, o = _e.Util.indexOf, i = n ? n.split(s) : [], l = t.split(s); r = l.shift();) -1 === o(i, r) && i.push(r);
            return this.getAttrs()["class"] = i.join(" "), this;
          },
          removeClass: function removeClass(t) {
            for (var r, n = this.getClass(), s = this.whitespaceRegex, o = _e.Util.indexOf, i = n ? n.split(s) : [], l = t.split(s); i.length && (r = l.shift());) {
              var a = o(i, r);
              -1 !== a && i.splice(a, 1);
            }
            return this.getAttrs()["class"] = i.join(" "), this;
          },
          getClass: function getClass() {
            return this.getAttrs()["class"] || "";
          },
          hasClass: function hasClass(e) {
            return -1 !== (" " + this.getClass() + " ").indexOf(" " + e + " ");
          },
          setInnerHtml: function setInnerHtml(e) {
            return this.innerHtml = e, this;
          },
          getInnerHtml: function getInnerHtml() {
            return this.innerHtml || "";
          },
          toString: function toString() {
            var e = this.getTagName(),
              t = this.buildAttrsStr();
            return t = t ? " " + t : "", ["<", e, t, ">", this.getInnerHtml(), "</", e, ">"].join("");
          },
          buildAttrsStr: function buildAttrsStr() {
            if (!this.attrs) return "";
            var e = this.getAttrs(),
              t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(r + '="' + e[r] + '"');
            return t.join(" ");
          }
        }), _e.AnchorTagBuilder = _e.Util.extend(Object, {
          constructor: function constructor(t) {
            _e.Util.assign(this, t);
          },
          build: function build(t) {
            var r = new _e.HtmlTag({
              tagName: "a",
              attrs: this.createAttrs(t.getType(), t.getAnchorHref()),
              innerHtml: this.processAnchorText(t.getAnchorText())
            });
            return r;
          },
          createAttrs: function createAttrs(e, t) {
            var r = {
                href: t
              },
              n = this.createCssClass(e);
            return n && (r["class"] = n), this.newWindow && (r.target = "_blank"), r;
          },
          createCssClass: function createCssClass(e) {
            var t = this.className;
            return t ? t + " " + t + "-" + e : "";
          },
          processAnchorText: function processAnchorText(e) {
            return e = this.doTruncate(e);
          },
          doTruncate: function doTruncate(t) {
            return _e.Util.ellipsis(t, this.truncate || Number.POSITIVE_INFINITY);
          }
        }), _e.htmlParser.HtmlParser = _e.Util.extend(Object, {
          htmlRegex: function () {
            var e = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
              t = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
              r = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,
              n = t.source + "(?:\\s*=\\s*" + r.source + ")?";
            return new RegExp(["(?:", "<(!DOCTYPE)", "(?:", "\\s+", "(?:", n, "|", r.source + ")", ")*", ">", ")", "|", "(?:", "<(/)?", "(" + e.source + ")", "(?:", "\\s+", n, ")*", "\\s*/?", ">", ")"].join(""), "gi");
          }(),
          htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
          parse: function parse(e) {
            for (var t, r, n = this.htmlRegex, s = 0, o = []; null !== (t = n.exec(e));) {
              var i = t[0],
                l = t[1] || t[3],
                a = !!t[2],
                c = e.substring(s, t.index);
              c && (r = this.parseTextAndEntityNodes(c), o.push.apply(o, r)), o.push(this.createElementNode(i, l, a)), s = t.index + i.length;
            }
            if (s < e.length) {
              var u = e.substring(s);
              u && (r = this.parseTextAndEntityNodes(u), o.push.apply(o, r));
            }
            return o;
          },
          parseTextAndEntityNodes: function parseTextAndEntityNodes(t) {
            for (var r = [], n = _e.Util.splitAndCapture(t, this.htmlCharacterEntitiesRegex), s = 0, o = n.length; o > s; s += 2) {
              var i = n[s],
                l = n[s + 1];
              i && r.push(this.createTextNode(i)), l && r.push(this.createEntityNode(l));
            }
            return r;
          },
          createElementNode: function createElementNode(t, r, n) {
            return new _e.htmlParser.ElementNode({
              text: t,
              tagName: r.toLowerCase(),
              closing: n
            });
          },
          createEntityNode: function createEntityNode(t) {
            return new _e.htmlParser.EntityNode({
              text: t
            });
          },
          createTextNode: function createTextNode(t) {
            return new _e.htmlParser.TextNode({
              text: t
            });
          }
        }), _e.htmlParser.HtmlNode = _e.Util.extend(Object, {
          text: "",
          constructor: function constructor(t) {
            _e.Util.assign(this, t);
          },
          getType: _e.Util.abstractMethod,
          getText: function getText() {
            return this.text;
          }
        }), _e.htmlParser.ElementNode = _e.Util.extend(_e.htmlParser.HtmlNode, {
          tagName: "",
          closing: !1,
          getType: function getType() {
            return "element";
          },
          getTagName: function getTagName() {
            return this.tagName;
          },
          isClosing: function isClosing() {
            return this.closing;
          }
        }), _e.htmlParser.EntityNode = _e.Util.extend(_e.htmlParser.HtmlNode, {
          getType: function getType() {
            return "entity";
          }
        }), _e.htmlParser.TextNode = _e.Util.extend(_e.htmlParser.HtmlNode, {
          getType: function getType() {
            return "text";
          }
        }), _e.matchParser.MatchParser = _e.Util.extend(Object, {
          urls: !0,
          email: !0,
          twitter: !0,
          stripPrefix: !0,
          matcherRegex: function () {
            var e = /(^|[^\w])@(\w{1,15})/,
              t = /(?:[\-;:&=\+\$,\w\.]+@)/,
              r = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,
              n = /(?:www\.)/,
              s = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,
              o = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,
              i = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
            return new RegExp(["(", e.source, ")", "|", "(", t.source, s.source, o.source, ")", "|", "(", "(?:", "(", r.source, s.source, ")", "|", "(?:", "(.?//)?", n.source, s.source, ")", "|", "(?:", "(.?//)?", s.source, o.source, ")", ")", "(?:" + i.source + ")?", ")"].join(""), "gi");
          }(),
          charBeforeProtocolRelMatchRegex: /^(.)?\/\//,
          constructor: function constructor(t) {
            _e.Util.assign(this, t), this.matchValidator = new _e.MatchValidator();
          },
          replace: function replace(e, t, r) {
            var n = this;
            return e.replace(this.matcherRegex, function (e, s, o, i, l, a, c, u, p) {
              var h = n.processCandidateMatch(e, s, o, i, l, a, c, u, p);
              if (h) {
                var f = t.call(r, h.match);
                return h.prefixStr + f + h.suffixStr;
              }
              return e;
            });
          },
          processCandidateMatch: function processCandidateMatch(t, r, n, s, o, i, l, a, c) {
            var u,
              p = a || c,
              h = "",
              f = "";
            if (r && !this.twitter || o && !this.email || i && !this.urls || !this.matchValidator.isValidMatch(i, l, p)) return null;
            if (this.matchHasUnbalancedClosingParen(t) && (t = t.substr(0, t.length - 1), f = ")"), o) u = new _e.match.Email({
              matchedText: t,
              email: o
            });else if (r) n && (h = n, t = t.slice(1)), u = new _e.match.Twitter({
              matchedText: t,
              twitterHandle: s
            });else {
              if (p) {
                var d = p.match(this.charBeforeProtocolRelMatchRegex)[1] || "";
                d && (h = d, t = t.slice(1));
              }
              u = new _e.match.Url({
                matchedText: t,
                url: t,
                protocolUrlMatch: !!l,
                protocolRelativeMatch: !!p,
                stripPrefix: this.stripPrefix
              });
            }
            return {
              prefixStr: h,
              suffixStr: f,
              match: u
            };
          },
          matchHasUnbalancedClosingParen: function matchHasUnbalancedClosingParen(e) {
            var t = e.charAt(e.length - 1);
            if (")" === t) {
              var r = e.match(/\(/g),
                n = e.match(/\)/g),
                s = r && r.length || 0,
                o = n && n.length || 0;
              if (o > s) return !0;
            }
            return !1;
          }
        }), _e.MatchValidator = _e.Util.extend(Object, {
          invalidProtocolRelMatchRegex: /^[\w]\/\//,
          hasFullProtocolRegex: /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
          uriSchemeRegex: /^[A-Za-z][-.+A-Za-z0-9]+:/,
          hasWordCharAfterProtocolRegex: /:[^\s]*?[A-Za-z]/,
          isValidMatch: function isValidMatch(e, t, r) {
            return t && !this.isValidUriScheme(t) || this.urlMatchDoesNotHaveProtocolOrDot(e, t) || this.urlMatchDoesNotHaveAtLeastOneWordChar(e, t) || this.isInvalidProtocolRelativeMatch(r) ? !1 : !0;
          },
          isValidUriScheme: function isValidUriScheme(e) {
            var t = e.match(this.uriSchemeRegex)[0].toLowerCase();
            return "javascript:" !== t && "vbscript:" !== t;
          },
          urlMatchDoesNotHaveProtocolOrDot: function urlMatchDoesNotHaveProtocolOrDot(e, t) {
            return !(!e || t && this.hasFullProtocolRegex.test(t) || -1 !== e.indexOf("."));
          },
          urlMatchDoesNotHaveAtLeastOneWordChar: function urlMatchDoesNotHaveAtLeastOneWordChar(e, t) {
            return e && t ? !this.hasWordCharAfterProtocolRegex.test(e) : !1;
          },
          isInvalidProtocolRelativeMatch: function isInvalidProtocolRelativeMatch(e) {
            return !!e && this.invalidProtocolRelMatchRegex.test(e);
          }
        }), _e.match.Match = _e.Util.extend(Object, {
          constructor: function constructor(t) {
            _e.Util.assign(this, t);
          },
          getType: _e.Util.abstractMethod,
          getMatchedText: function getMatchedText() {
            return this.matchedText;
          },
          getAnchorHref: _e.Util.abstractMethod,
          getAnchorText: _e.Util.abstractMethod
        }), _e.match.Email = _e.Util.extend(_e.match.Match, {
          getType: function getType() {
            return "email";
          },
          getEmail: function getEmail() {
            return this.email;
          },
          getAnchorHref: function getAnchorHref() {
            return "mailto:" + this.email;
          },
          getAnchorText: function getAnchorText() {
            return this.email;
          }
        }), _e.match.Twitter = _e.Util.extend(_e.match.Match, {
          getType: function getType() {
            return "twitter";
          },
          getTwitterHandle: function getTwitterHandle() {
            return this.twitterHandle;
          },
          getAnchorHref: function getAnchorHref() {
            return "https://twitter.com/" + this.twitterHandle;
          },
          getAnchorText: function getAnchorText() {
            return "@" + this.twitterHandle;
          }
        }), _e.match.Url = _e.Util.extend(_e.match.Match, {
          urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
          protocolRelativeRegex: /^\/\//,
          protocolPrepended: !1,
          getType: function getType() {
            return "url";
          },
          getUrl: function getUrl() {
            var e = this.url;
            return this.protocolRelativeMatch || this.protocolUrlMatch || this.protocolPrepended || (e = this.url = "http://" + e, this.protocolPrepended = !0), e;
          },
          getAnchorHref: function getAnchorHref() {
            var e = this.getUrl();
            return e.replace(/&amp;/g, "&");
          },
          getAnchorText: function getAnchorText() {
            var e = this.getUrl();
            return this.protocolRelativeMatch && (e = this.stripProtocolRelativePrefix(e)), this.stripPrefix && (e = this.stripUrlPrefix(e)), e = this.removeTrailingSlash(e);
          },
          stripUrlPrefix: function stripUrlPrefix(e) {
            return e.replace(this.urlPrefixRegex, "");
          },
          stripProtocolRelativePrefix: function stripProtocolRelativePrefix(e) {
            return e.replace(this.protocolRelativeRegex, "");
          },
          removeTrailingSlash: function removeTrailingSlash(e) {
            return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e;
          }
        }), _e;
      });
    }, {}],
    "/": [function (e, t, r) {
      "use strict";

      t.exports = e("./lib/");
    }, {
      "./lib/": 14
    }]
  }, {}, [])("/");
});

/***/ }),

/***/ "./src/pages3/community/_components/wemark/richtext.js":
/*!*************************************************************!*\
  !*** ./src/pages3/community/_components/wemark/richtext.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.getRichTextNodes = function (parsedData) {
  var richTextNodes = [];
  var getNodeName = function () {
    var stack = [];
    return function (type) {
      var nodeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'inline';
      if (type === 'table_tr') {
        return 'tr';
      } else {
        // 有多级的，block返回第一级，inline返回最后一级
        if (type.indexOf('_') > -1) {
          var typePart = type.split('_');
          if (nodeType === 'inline') {
            return typePart.pop();
          } else {
            return typePart[0];
          }
        }
      }
      return type;
    };
  }();
  var getBlockNode = function getBlockNode(node) {
    var nodeType = node.type;
    // console.log('nodeType:', nodeType);
    var richTextNode = {
      name: getNodeName(nodeType, 'inline'),
      attrs: {
        class: 'wemark_block_' + nodeType
      },
      children: []
    };
    if (node.isArray) {
      node.content.forEach(function (childNode) {
        if (['text', 'code', 'strong', 'deleted', 'em'].indexOf(childNode.type) > -1) {
          richTextNode.children.push({
            name: 'span',
            attrs: {
              class: 'wemark_inline_' + childNode.type
            },
            children: [{
              type: 'text',
              text: childNode.content
            }]
          });
        } else if (node.highlight) {
          if (typeof childNode === 'string') {
            richTextNode.children.push({
              name: 'span',
              attrs: {
                class: 'wemark_inline_code_text'
              },
              children: [{
                type: 'text',
                text: childNode
              }]
            });
          } else {
            richTextNode.children.push({
              name: 'span',
              attrs: {
                class: 'wemark_inline_code_' + childNode.type
              },
              children: [{
                type: 'text',
                text: childNode.content
              }]
            });
          }
        } else if (childNode.type === 'link') {
          richTextNode.children.push({
            name: 'a',
            attrs: {
              class: 'wemark_inline_link',
              href: childNode.data.href
            },
            children: [{
              type: 'text',
              text: childNode.content
            }]
          });
        } else if (childNode.type === 'image') {
          richTextNode.children.push({
            name: 'img',
            attrs: {
              mode: 'widthFix',
              class: 'wemark_inline_image',
              src: childNode.src
            }
          });
        } else if (childNode.type === 'table_th') {
          richTextNode.children.push({
            name: 'th',
            attrs: {
              class: 'wemark_inline_table_th'
            },
            children: [{
              type: 'text',
              text: childNode.content
            }]
          });
        } else if (childNode.type === 'table_td') {
          richTextNode.children.push({
            name: 'td',
            attrs: {
              class: 'wemark_inline_table_td'
            },
            children: [{
              type: 'text',
              text: childNode.content
            }]
          });
        }
      });
    } else if (node.type === 'code') {
      richTextNode.children = [{
        name: 'code',
        children: [{
          type: 'text',
          text: node.content
        }]
      }];
    }
    return richTextNode;
  };
  for (var i = 0; i < parsedData.length; i++) {
    var node = parsedData[i];
    if (node.type === 'table_tr') {
      var tableNode = {
        name: 'table',
        attrs: {
          class: 'wemark_block_table'
        },
        children: []
      };
      var tmpNode = node;
      while (tmpNode.type === 'table_tr') {
        tableNode.children.push(getBlockNode(tmpNode));
        tmpNode = parsedData[++i];
      }
      richTextNodes.push(tableNode);
    } else {
      richTextNodes.push(getBlockNode(node));
    }
  }
  return richTextNodes;
};

/***/ }),

/***/ "./src/pages3/community/_components/wemark/wemark.js":
/*!***********************************************************!*\
  !*** ./src/pages3/community/_components/wemark/wemark.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var parser = __webpack_require__(/*! ./parser */ "./src/pages3/community/_components/wemark/parser.js");
var getRichTextNodes = (__webpack_require__(/*! ./richtext */ "./src/pages3/community/_components/wemark/richtext.js").getRichTextNodes);
Component({
  properties: {
    md: {
      type: String,
      value: '',
      observer: function observer() {
        this.parseMd();
      }
    },
    type: {
      type: String,
      value: 'wemark'
    },
    link: {
      type: Boolean,
      value: false
    },
    highlight: {
      type: Boolean,
      value: false
    }
  },
  data: {
    parsedData: {},
    richTextNodes: []
  },
  methods: {
    parseMd: function parseMd() {
      if (this.data.md) {
        var parsedData = parser.parse(this.data.md, {
          link: this.data.link,
          highlight: this.data.highlight
        });
        // console.log('parsedData:', parsedData);
        if (this.data.type === 'wemark') {
          this.setData({
            parsedData: parsedData
          });
        } else {
          // var inTable = false;
          var richTextNodes = getRichTextNodes(parsedData);

          // console.log('richTextNodes:', richTextNodes);

          this.setData({
            richTextNodes: richTextNodes
          });

          /* // 分批更新
          var update = {};
          var batchLength = 1000;
          console.log(batchLength);
          for(var i=0; i<richTextNodes.length; i++){
          	update['richTextNodes.' + i] = richTextNodes[i];
          	if(i%batchLength === batchLength - 1){
          		console.log(update);
          		this.setData(update);
          		update = {};
          	}
          }
          this.setData(update);
          update = {}; */
        }
      }
    }
  }
});

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/typeof.js":
/*!****************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/typeof.js ***!
  \****************************************************************************************************/
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["common"], function() { return __webpack_exec__("./src/pages3/community/_components/wemark/wemark.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=wemark.js.map