(function () {
  var e = { exports: {} };
  e.exports = ((e) => {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var a = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = (e, t, o) => {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = (e, t) => {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var a in e) n.d(o, a, ((t) => e[t]).bind(null, a));
        return o;
      }),
      (n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, "a", t), t;
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.p = ""),
      n((n.s = 15))
    );
  })([
    function (e, t, n) {
      "use strict";
      ((e) => {
        n.d(t, "a", () => o),
          n.d(t, "b", () => a),
          n.d(t, "d", () => r),
          n.d(t, "e", () => c),
          n.d(t, "h", () => l),
          n.d(t, "K", () => i),
          n.d(t, "k", () => d),
          n.d(t, "o", () => u),
          n.d(t, "p", () => p),
          n.d(t, "q", () => f),
          n.d(t, "r", () => m),
          n.d(t, "s", () => b),
          n.d(t, "t", () => y),
          n.d(t, "y", () => h),
          n.d(t, "F", () => v),
          n.d(t, "L", () => g),
          n.d(t, "C", () => w),
          n.d(t, "E", () => j),
          n.d(t, "B", () => O),
          n.d(t, "g", () => M),
          n.d(t, "m", () => x),
          n.d(t, "n", () => k),
          n.d(t, "j", () => S),
          n.d(t, "z", () => C),
          n.d(t, "M", () => _),
          n.d(t, "I", () => G),
          n.d(t, "D", () => T),
          n.d(t, "f", () => E),
          n.d(t, "H", () => R),
          n.d(t, "G", () => V),
          n.d(t, "J", () => A),
          n.d(t, "l", () => q),
          n.d(t, "x", () => P),
          n.d(t, "c", () => H),
          n.d(t, "A", () => U),
          n.d(t, "N", () => B),
          n.d(t, "v", () => z),
          n.d(t, "u", () => K),
          n.d(t, "w", () => W),
          n.d(t, "i", () => J);
        const {
            Boolean: o,
            Error: a,
            Promise: r,
            Uint8Array: c,
            atob: l,
            isFinite: s,
            setTimeout: i,
          } = e,
          {
            concat: d,
            filter: u,
            findIndex: p,
            forEach: f,
            includes: m,
            indexOf: b,
            join: y,
            map: h,
            push: v,
            shift: g,
          } = Array.prototype,
          {
            keys: w,
            values: j,
            entries: O,
            assign: M,
            defineProperty: x,
            getOwnPropertyDescriptor: k,
          } = Object,
          { charCodeAt: S, match: C, slice: _, replace: G } = String.prototype,
          { toString: T } = Object.prototype,
          { toString: I } = Number.prototype,
          { fromCharCode: $ } = String,
          {
            addEventListener: E,
            removeEventListener: R,
          } = EventTarget.prototype,
          { append: L, remove: V, setAttribute: A } = Element.prototype,
          { createElementNS: q } = Document.prototype,
          P = M({}, console),
          H = "http://www.w3.org/1999/xhtml";
        function U() {}
        function B(e) {
          let t = "",
            n = 0,
            o = 0,
            a = 0,
            r = 0;
          for (; n < e.length; )
            (o = S.call(e, n)),
              o < 128
                ? ((t += $(o)), (n += 1))
                : o > 191 && o < 224
                ? ((a = S.call(e, n + 1)),
                  (t += $(((31 & o) << 6) | (63 & a))),
                  (n += 2))
                : ((a = S.call(e, n + 1)),
                  (r = S.call(e, n + 2)),
                  (t += $(((15 & o) << 12) | ((63 & a) << 6) | (63 & r))),
                  (n += 3));
          return t;
        }
        const F = {
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
          },
          D = /[\\"\u0000-\u001F\u2028\u2029]/g,
          N = (e) => {
            var t;
            return (
              F[e] ||
              `\\u${((t = ((t = S.call(e, 0) + 65536), I).call(t, 16)), _).call(
                t,
                1
              )}`
            );
          },
          z = JSON.parse;
        function K(e) {
          if (null == e) return "null";
          const t = typeof e;
          if ("number" === t) return s(e) ? `${e}` : "null";
          if ("boolean" === t) return `${e}`;
          if ("object" === t) {
            var n;
            if (
              (r = e) &&
              "number" == typeof r.length &&
              "function" == typeof r.splice
            )
              return `[${((n = h.call(e, K)), y).call(n, ",")}]`;
            if ("[object Object]" === T.call(e)) {
              var a;
              const t = ((a = w(e)), h).call(a, (t) => {
                const n = e[t];
                return void 0 !== n && `${K(t)}:${K(n)}`;
              });
              return `{${((a = u.call(t, o)), y).call(a, ",")}}`;
            }
          }
          var r;
          return `"${G.call(e, D, N)}"`;
        }
        function W(e, t, ...n) {
          var o;
          const a = ["Violentmonkey"];
          t && v.call(a, ...t);
          const r = ((o = h.call(a, (e) => `[${e}]`)), y).call(o, "");
          P[e](r, ...n);
        }
        function J(e) {
          const t = e.byteLength,
            n = [];
          for (let o = 0; o < t; o += 1e4) {
            const a = new c(e, o, Math.min(1e4, t - o));
            v.call(n, $(...a));
          }
          return y.call(n, "");
        }
      }).call(this, n(6));
    },
    (e, t, n) => {
      "use strict";
      var o = n(0);
      const a = {};
      t.a = {
        load: o.A,
        addHandlers(e) {
          Object(o.g)(a, e);
        },
        onHandle({ cmd: e, data: t }) {
          null == a[e] || a[e](t);
        },
      };
    },
    (e, t, n) => {
      "use strict";
      function o(e) {
        return (
          (e || "") +
          Date.now().toString(36) +
          Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .slice(-4)
        );
      }
      n(4), n(7);
      const { hasOwnProperty: a } = Object.prototype;
      function r(e) {
        for (const t in e) if (a.call(e, t)) return !1;
        return !0;
      }
      function c(e, { defaultType: t, type: n } = {}) {
        if (e) {
          const o = `${e}`.split(","),
            { length: a } = o,
            r = o[a - 1],
            c = n || o[a - 2] || t || "",
            l = window.atob(r),
            s = new window.Uint8Array(l.length);
          for (let e = 0; e < l.length; e += 1) s[e] = l.charCodeAt(e);
          const i = new Blob([s], { type: c });
          return URL.createObjectURL(i);
        }
      }
      n.d(t, "a", () => c),
        n.d(t, "b", () => o),
        n.d(t, "c", () => a),
        n.d(t, "d", () => r);
    },
    (e, t, n) => {
      "use strict";
      t.a = { commands: {}, values: {}, callbacks: {}, state: 0 };
    },
    function (e, t, n) {
      "use strict";
      ((e) => {
        n.d(t, "b", () => o),
          n.d(t, "a", () => a),
          n.d(t, "c", () => r),
          n.d(t, "d", () => c);
        const o = "page",
          a = "content",
          r = /(?:^|\n)\s*\/\/\x20==UserScript==([\s\S]*?\n)\s*\/\/\x20==\/UserScript==|$/,
          { browser: c } = e;
      }).call(this, n(6));
    },
    function (e, t, n) {
      "use strict";
      ((e) => {
        n.d(t, "a", () => l),
          n.d(t, "d", () => i),
          n.d(t, "c", () => d),
          n.d(t, "b", () => u);
        var o = n(1),
          a = n(3),
          r = n(0);
        const { Number: c } = e,
          l = {},
          s = { o: r.v, n: c, b: (e) => "true" === e };
        function i(e) {
          return a.a.values[e];
        }
        function d(e, t, n, a, r) {
          if ((o.a.post("UpdateValue", { id: e, key: t, value: a }), a !== r)) {
            var c;
            const o = null == (c = l[e]) ? void 0 : c[t];
            o && p(o, t, n, a, r);
          }
        }
        function u(e) {
          const t = e[0],
            n = s[t];
          let o = r.M.call(e, 1);
          try {
            n && (o = n(o));
          } catch (e) {}
          return o;
        }
        function p(e, t, n, o, a, c = !1) {
          var l;
          const s = a ? u(a) : void 0,
            i = void 0 === n && o ? u(o) : n;
          ((l = Object(r.E)(e)), r.q).call(l, (e) =>
            ((e, ...t) => {
              try {
                e(...t);
              } catch (e) {
                Object(r.w)(
                  "error",
                  ["GM_addValueChangeListener", "callback"],
                  e
                );
              }
            })(e, t, s, i, c)
          );
        }
        o.a.addHandlers({
          UpdatedValues(e) {
            var t;
            const { partial: n } = e;
            ((t = Object(r.B)(e)), r.q).call(t, ([e, t]) => {
              const o = a.a.values[e];
              if (o) {
                const c = l[e];
                c &&
                  ((e, t, n) => {
                    var o;
                    ((o = Object(r.B)(n)), r.q).call(o, ([n, o]) => {
                      const a = e[n];
                      if (a) {
                        o || (o = void 0);
                        const e = t[n];
                        e !== o && ((t[n] = o), p(a, n, void 0, o, e, !0));
                      }
                    });
                  })(c, o, t),
                  n
                    ? ((e, t) => {
                        var n;
                        ((n = Object(r.B)(t)), r.q).call(n, ([t, n]) => {
                          n ? (e[t] = n) : delete e[t];
                        });
                      })(o, t)
                    : (a.a.values[e] = t);
              }
            });
          },
        });
      }).call(this, n(6));
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      function o(e, t, n) {
        return t.reduce((t, o) => {
          let a = null == e ? void 0 : e[o];
          return n && (a = n(a)), null != a && (t[o] = a), t;
        }, {});
      }
      function a(e) {
        this && Object.entries(this).forEach(e);
      }
      n.d(t, "b", () => o), n.d(t, "a", () => a);
    },
    function (e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }),
          n.apply(this, arguments)
        );
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      ((e) => {
        n.d(t, "a", () => O), n.d(t, "b", () => M);
        var o = n(8),
          a = n.n(o),
          r = n(2),
          c = n(4),
          l = n(1),
          s = n(0),
          i = n(14);
        const { Proxy: d } = e,
          { getOwnPropertyNames: u, getOwnPropertySymbols: p } = Object,
          { splice: f } = Array.prototype,
          { startsWith: m } = String.prototype;
        let b, y, h, v;
        const { toStringTag: g } = Symbol,
          w = () => "[Violentmonkey property]",
          j = (e, t) => ((e.toString = t || w), e);
        function O() {
          (b = null), (y = null), (h = null);
        }
        function M(t, n, o, w) {
          const O = t.meta.grant || [];
          1 === O.length && "none" === O[0] && (O.length = 0);
          const M = t.meta.resources || {},
            G = (({ config: e, meta: t, props: n }, o, r, i) => {
              var d;
              return {
                uuid: n.uuid,
                scriptMetaStr: s.z.call(o, c.c)[1] || "",
                scriptWillUpdate: !!e.shouldUpdate,
                scriptHandler: "Violentmonkey",
                version: l.a.version,
                injectInto: i,
                platform: a()({}, l.a.ua),
                script: {
                  description: t.description || "",
                  excludes: [...t.exclude],
                  includes: [...t.include],
                  matches: [...t.match],
                  name: t.name || "",
                  namespace: t.namespace || "",
                  resources: ((d = Object(s.C)(r)), s.y).call(d, (e) => ({
                    name: e,
                    url: r[e],
                  })),
                  runAt: t.runAt || "",
                  unwrap: !1,
                  version: t.version || "",
                },
              };
            })(t, n, M, w),
            T = a()(
              { GM: { info: G }, GM_info: G, unsafeWindow: e },
              h ||
                (h = (() => {
                  const t = l.a.mode === c.a && e;
                  return {
                    cloneInto: t.cloneInto || j((e) => e),
                    createObjectIn:
                      t.createObjectIn ||
                      j((e, { defineAs: t } = {}) => {
                        const n = {};
                        return t && (e[t] = n), n;
                      }),
                    exportFunction:
                      t.exportFunction ||
                      j((e, t, { defineAs: n } = {}) => (n && (t[n] = e), e)),
                  };
                })()),
              {},
              (s.r.call(O, "window.close") && v) ||
                (v = { close: j(() => l.a.post("TabClose")) })
            ),
            I = {
              cache: o,
              script: t,
              resources: M,
              id: t.props.id,
              pathMap: t.custom.pathMap || {},
              urls: {},
            };
          return (
            b || ([b, y] = Object(i.a)()),
            s.q.call(O, (e) => {
              const t = m.call(e, "GM.") && s.M.call(e, 3),
                n = y[t],
                o = b[n ? `GM_${n.alias || t}` : e];
              if (o) {
                const a = ((e, t, n) =>
                  e === b.GM_log
                    ? e
                    : j(
                        n
                          ? async (...n) => e.call(t, ...n)
                          : (...n) => e.call(t, ...n)
                      ))(o, I, null == n ? void 0 : n.async);
                n ? (T.GM[t] = a) : (T[e] = a);
              }
            }),
            O.length
              ? ((t) => {
                  const n = {},
                    o = [],
                    a = Symbol.unscopables;
                  l.a.isFirefox && Object(s.m)(t, g, { get: () => "Window" });
                  const c = new d(t, {
                    defineProperty: (e, n, o) =>
                      ("symbol" == typeof n || (!s.r.call(k, n) && !S(n))) &&
                      (Object(s.m)(t, n, o),
                      "string" == typeof n &&
                        m.call(n, "on") &&
                        b(s.M.call(n, 2)),
                      y(n),
                      !0),
                    deleteProperty(n, a) {
                      var c;
                      return !(
                        s.r.call(k, a) ||
                        (!S(a) &&
                          !s.r.call(o, a) &&
                          (((c = e), r.c).call(c, a) && s.F.call(o, a),
                          !delete t[a]))
                      );
                    },
                    get(n, l) {
                      const i = t[l];
                      return void 0 !== i ||
                        l === a ||
                        s.r.call(o, l) ||
                        r.c.call(t, l)
                        ? i
                        : ((n) => {
                            let o = e[n];
                            var a;
                            return (
                              o === window
                                ? (o = c)
                                : s.r.call(C, n) &&
                                  ((o = j(
                                    _(o, e),
                                    ((a = o),
                                    () => {
                                      var e;
                                      return ((e = `${a}`), s.I).call(
                                        e,
                                        "native code",
                                        "Violentmonkey sandbox"
                                      );
                                    })
                                  )),
                                  (t[n] = o)),
                              o
                            );
                          })(l);
                    },
                    getOwnPropertyDescriptor(n, a) {
                      if (!s.r.call(o, a)) {
                        const n = Object(s.n)(t, a),
                          o = n || Object(s.n)(e, a);
                        if (!o) return;
                        if (
                          (o.value === window && (o.value = c),
                          !n && !o.configurable)
                        ) {
                          const { get: n } = o;
                          "function" == typeof n &&
                            (o.get = (...t) => {
                              var o;
                              return ((o = e), n).call(o, ...t);
                            }),
                            Object(s.m)(t, a, o);
                        }
                        return o;
                      }
                    },
                    has(n, a) {
                      var c;
                      return (
                        r.c.call(t, a) ||
                        (!s.r.call(o, a) && ((c = e), r.c).call(c, a))
                      );
                    },
                    ownKeys() {
                      var e;
                      return ((e = []), s.k).call(e, ...i(u), ...i(p));
                    },
                    preventExtensions() {},
                    set(e, n, o) {
                      var a;
                      return !(
                        s.r.call(k, n) ||
                        (y(n),
                        !s.r.call(x, n) &&
                          !S(n) &&
                          ((t[n] = o),
                          "string" == typeof n &&
                            m.call(n, "on") &&
                            ((a = window), r.c).call(a, n) &&
                            b(s.M.call(n, 2), o),
                          0))
                      );
                    },
                  });
                  function i(n) {
                    const a = n(e),
                      r = n(t);
                    return [
                      o.length ? s.o.call(a, (e) => !s.r.call(o, e)) : a,
                      s.o.call(r, (e) => !s.r.call(a, e)),
                    ];
                  }
                  function b(e, t) {
                    var o, a;
                    ((o = window), s.H).call(o, e, n[e]),
                      "function" == typeof t
                        ? ((a = window), s.f).call(a, e, (n[e] = _(t, window)))
                        : delete n[e];
                  }
                  function y(e) {
                    const t = s.s.call(o, e);
                    t >= 0 && f.call(o, t, 1);
                  }
                  return c;
                })(T)
              : T
          );
        }
        const x = [
            "applicationCache",
            "closed",
            "customElements",
            "frameElement",
            "history",
            "isSecureContext",
            "navigator",
            "orientation",
            "styleMedia",
          ],
          k = ["document", "location", "top", "trustedTypes", "window"],
          S = (e) => "symbol" != typeof e && /^(0|[1-9]\d+)$/.test(e),
          C = [
            "addEventListener",
            "alert",
            "atob",
            "blur",
            "btoa",
            "clearInterval",
            "clearTimeout",
            "close",
            "confirm",
            "dispatchEvent",
            "fetch",
            "find",
            "focus",
            "getComputedStyle",
            "getDefaultComputedStyle",
            "getSelection",
            "matchMedia",
            "moveBy",
            "moveTo",
            "open",
            "openDialog",
            "postMessage",
            "print",
            "prompt",
            "removeEventListener",
            "requestAnimationFrame",
            "resizeBy",
            "resizeTo",
            "scroll",
            "scrollBy",
            "scrollByLines",
            "scrollByPages",
            "scrollTo",
            "setInterval",
            "setTimeout",
            "stop",
          ],
          _ = (e, t) => (...n) => e.call(t, ...n);
      }).call(this, n(6));
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        n.d(t, "a", () => m);
        var o = n(8),
          a = n.n(o),
          r = n(7),
          c = n(0),
          l = n(1);
        const s = {},
          i = [],
          { DOMParser: d } = e,
          { parseFromString: u } = d.prototype,
          { toLowerCase: p } = String.prototype,
          { get: f } = Object(c.n)(HTMLAnchorElement.prototype, "href");
        function m(e, t) {
          var n;
          const o = {
            scriptId: t,
            details: e,
            req: {
              abort() {
                var e;
                (e = o.id), l.a.post("AbortRequest", e);
              },
            },
          };
          return (
            (e.url = ((e) => {
              var t;
              const n = ((t = document), c.l).call(t, c.c, "a");
              return c.J.call(n, "href", e), f.call(n);
            })(e.url)),
            c.F.call(i, o),
            l.a.post(
              "GetRequestId",
              ((n = [
                "abort",
                "error",
                "load",
                "loadend",
                "loadstart",
                "progress",
                "readystatechange",
                "timeout",
              ]),
              c.o).call(n, (t) => "function" == typeof e[`on${t}`])
            ),
            o.req
          );
        }
        l.a.addHandlers({
          GotRequestId(e) {
            const t = c.L.call(i);
            t &&
              (async (e, t) => {
                const { details: n, scriptId: o } = e,
                  { withCredentials: i = !0, anonymous: d = !i } = n,
                  u = a()(
                    { id: t, scriptId: o, anonymous: d },
                    Object(r.b)(n, [
                      "headers",
                      "method",
                      "overrideMimeType",
                      "password",
                      "timeout",
                      "url",
                      "user",
                    ])
                  );
                (e.id = t), (s[t] = e);
                const { responseType: p } = n;
                var f;
                p &&
                  (((f = ["arraybuffer", "blob"]), c.r).call(f, p)
                    ? ((u.isBuffer = !0), (e.isBuffer = !0))
                    : ((f = ["document", "json", "text"]), c.r).call(f, p) ||
                      Object(c.w)(
                        "warn",
                        null,
                        `Unknown responseType "${p}", see https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest for more detail.`
                      )),
                  (u.data = n.binary
                    ? { value: `${n.data}`, cls: "blob" }
                    : await g(n.data)),
                  l.a.post("HttpRequest", u);
              })(t, e);
          },
          HttpRequested(e) {
            const t = s[e.id];
            t &&
              (async function (e, t) {
                if (t.chunk)
                  return ((e, { chunk: t, isLastChunk: n }) => {
                    const { chunks: o } = e;
                    c.F.call(o, t),
                      n &&
                        (delete e.promise,
                        delete e.chunks,
                        e.resolve(c.t.call(o, "")));
                  })(e, t);
                e.promise && (await e.promise);
                const n = e.details[`on${t.type}`];
                if (n) {
                  const { data: o, numChunks: a } = t,
                    { response: r } = o;
                  !r ||
                    "rawResponse" in e ||
                    "text" === (e.details.responseType || "text") ||
                    (e.rawResponse =
                      a > 1
                        ? await ((e, t) => (
                            (e.chunks = [t]),
                            (e.promise = new c.d((t) => {
                              e.resolve = t;
                            })),
                            e.promise
                          ))(e, r)
                        : r),
                    "rawResponse" in e &&
                      Object(c.m)(o, "response", {
                        configurable: !0,
                        get() {
                          const n = ((e, t, n) => {
                            const { responseType: o } = n;
                            if ("json" === o) return Object(c.v)(e);
                            if ("document" === o) {
                              var a;
                              const n =
                                t.contentType.split(";", 1)[0] || "text/html";
                              return ((a = new d()), u).call(a, e, n);
                            }
                            if (t.numChunks) {
                              const n = e.length,
                                a = new c.e(n);
                              for (let t = 0; t < n; t += 1)
                                a[t] = c.j.call(e, t);
                              return "blob" === o
                                ? new Blob([a], { type: t.contentType })
                                : a.buffer;
                            }
                            return e;
                          })(e.rawResponse, t, e.details);
                          return Object(c.m)(this, "response", { value: n }), n;
                        },
                      }),
                    (o.context = e.details.context),
                    n(o);
                }
                "loadend" === t.type && delete s[e.id];
              })(t, e);
          },
        });
        const { keys: b, getAll: y } = FormData.prototype,
          { FileReader: h } = e,
          { readAsArrayBuffer: v } = h.prototype;
        async function g(e) {
          const t = ((e) => {
            var t;
            const n = typeof e;
            if ("object" !== n) return n;
            const o = c.D.call(e);
            return ((t = c.M.call(o, 8, -1)), p).call(t);
          })(e);
          switch (t) {
            case "formdata": {
              var n;
              const o = {},
                a = async (t) => {
                  var n;
                  const a = ((n = y.call(e, t)), c.y).call(n, g);
                  o[t] = await c.d.all(a);
                };
              return (
                await c.d.all(((n = [...b.call(e)]), c.y).call(n, a)),
                { cls: t, value: o }
              );
            }
            case "blob":
            case "file":
              return new c.d((n) => {
                const o = new h();
                (o.onload = () =>
                  n({
                    cls: t,
                    value: Object(c.i)(o.result),
                    type: e.type,
                    name: e.name,
                    lastModified: e.lastModified,
                  })),
                  v.call(o, e);
              });
            default:
              if (e) return { cls: t, value: Object(c.u)(e) };
          }
        }
      }.call(this, n(6)));
    },
    (e, t, n) => {
      "use strict";
      n.d(t, "a", () => c);
      var o = n(1);
      let a = 0;
      const r = {};
      function c(e) {
        a += 1;
        const t = a,
          n = {
            onclose: null,
            closed: !1,
            close() {
              o.a.post("TabClose", t);
            },
          };
        return (r[t] = n), o.a.post("TabOpen", { key: t, data: e }), n;
      }
      o.a.addHandlers({
        TabClosed(e) {
          const t = r[e];
          t && ((t.closed = !0), null == t.onclose || t.onclose(), delete r[e]);
        },
      });
    },
    (e, t, n) => {
      "use strict";
      n.d(t, "a", () => c);
      var o = n(1);
      let a = 0;
      const r = {};
      function c(e) {
        (a += 1),
          (r[a] = e),
          o.a.post("Notification", {
            id: a,
            text: e.text,
            title: e.title,
            image: e.image,
          });
      }
      o.a.addHandlers({
        NotificationClicked(e) {
          var t;
          null == (t = r[e]) || null == t.onclick || t.onclick();
        },
        NotificationClosed(e) {
          const t = r[e];
          t && (delete r[e], null == t.ondone || t.ondone());
        },
      });
    },
    function (e, t, n) {
      "use strict";
      ((e) => {
        n.d(t, "a", () => c);
        var o = n(0);
        n(2);
        const { CustomEvent: a } = e,
          { dispatchEvent: r } = EventTarget.prototype;
        function c(e, t, n, c) {
          var l;
          ((l = document), o.f).call(l, e, (e) => n(e.detail));
          const s = c && document.defaultView;
          return (e, n) => {
            var o;
            const l = { cmd: e, data: n },
              i = c ? c(l, s) : l,
              d = new a(t, { detail: i });
            ((o = document), r).call(o, d);
          };
        }
      }).call(this, n(6));
    },
    function (e, t, n) {
      "use strict";
      var o = n(8),
        a = n.n(o),
        r = n(2);
      var c = n(7),
        l = n(1),
        s = n(3),
        i = n(11),
        d = n(10),
        u = n(12),
        p = n(5),
        f = n(0);
      n.d(t, "a", () => y);
      const { getElementById: m } = Document.prototype,
        { lastIndexOf: b } = String.prototype;
      function y() {
        return [
          {
            GM_deleteValue(e) {
              const { id: t } = this,
                n = Object(p.d)(t),
                o = n[e];
              delete n[e], Object(p.c)(t, e, void 0, null, o);
            },
            GM_getValue(e, t) {
              const n = Object(p.d)(this.id)[e];
              return n ? Object(p.b)(n) : t;
            },
            GM_listValues() {
              return Object(f.C)(Object(p.d)(this.id));
            },
            GM_setValue(e, t) {
              const { id: n } = this,
                o = Object(f.u)(t),
                a = o ? `o${o}` : null,
                r = Object(p.d)(n),
                c = r[e];
              (r[e] = a), Object(p.c)(n, e, t, a, c);
            },
            GM_addValueChangeListener(e, t) {
              var n;
              if (
                ("string" != typeof e && (e = `${e}`), "function" != typeof t)
              )
                return;
              const o = p.a[this.id] || (p.a[this.id] = {}),
                a = o[e] || (o[e] = {}),
                c = ((n = Object(f.E)(a)), f.s).call(n, t);
              let l = c >= 0 && Object(f.C)(a)[c];
              return l || ((l = Object(r.b)("VMvc")), (a[l] = t)), l;
            },
            GM_removeValueChangeListener(e) {
              var t;
              const n = p.a[this.id];
              n &&
                (((t = Object(f.B)(n)), f.p).call(t, ([t, o]) => {
                  if (e in o)
                    return delete o[e], Object(r.d)(o) && delete n[t], !0;
                }),
                Object(r.d)(n) && delete p.a[this.id]);
            },
            GM_getResourceText(e) {
              if (e in this.resources) {
                const t = this.resources[e],
                  n = this.cache[this.pathMap[t] || t];
                if (!n) return;
                const o = b.call(n, ","),
                  a = o < 0 ? n : f.M.call(n, o + 1);
                return Object(f.N)(Object(f.h)(a));
              }
            },
            GM_getResourceURL(e) {
              if (e in this.resources) {
                const t = this.resources[e];
                let n = this.urls[t];
                if (!n) {
                  const e = this.cache[this.pathMap[t] || t];
                  e ? ((n = Object(r.a)(e)), (this.urls[t] = n)) : (n = t);
                }
                return n;
              }
            },
            GM_registerMenuCommand(e, t) {
              const { id: n } = this,
                o = `${n}:${e}`;
              return (s.a.commands[o] = t), l.a.post("RegisterMenu", [n, e]), e;
            },
            GM_unregisterMenuCommand(e) {
              const { id: t } = this,
                n = `${t}:${e}`;
              delete s.a.commands[n], l.a.post("UnregisterMenu", [t, e]);
            },
            GM_download(e, t) {
              const n = "string" == typeof e ? { url: e, name: t } : e;
              if (!n || !n.url)
                throw new f.b("GM_download: Invalid parameter!");
              return Object(d.a)(
                a()(
                  {
                    method: "GET",
                    responseType: "blob",
                    overrideMimeType: "application/octet-stream",
                    onload: (e) =>
                      (function (e, t, n) {
                        const o = URL.createObjectURL(e);
                        ((e, t, n) => {
                          const o = document.createElement("a");
                          (o.style.display = "none"),
                            document.body.appendChild(o),
                            (o.href = e),
                            t && (o.download = t),
                            o.click(),
                            setTimeout(() => {
                              document.body.removeChild(o), n && n();
                            }, 3e3);
                        })(o, t, () => {
                          URL.revokeObjectURL(o), n && n();
                        });
                      })(e.response, n.name, () =>
                        null == n.onload ? void 0 : n.onload(e)
                      ),
                  },
                  Object(c.b)(n, [
                    "url",
                    "headers",
                    "timeout",
                    "onerror",
                    "onprogress",
                    "ontimeout",
                  ])
                ),
                this.id
              );
            },
            GM_xmlhttpRequest(e) {
              if (!e || !e.url)
                throw new f.b("GM_xmlhttpRequest: Invalid parameter!");
              return Object(d.a)(e, this.id);
            },
            GM_addStyle(e) {
              let t = !1;
              const n = ((e) => {
                const t = Object(r.b)("VMcb");
                return (
                  (s.a.callbacks[t] = (n) => {
                    e(n), delete s.a.callbacks[t];
                  }),
                  t
                );
              })((e) => {
                var n;
                t = ((n = document), m).call(n, e);
              });
              return (
                l.a.post("AddStyle", { css: e, callbackId: n }),
                (t.then = (e) => {
                  delete t.then, e(t);
                }),
                t
              );
            },
            GM_openInTab(e, t) {
              const n = t && "object" == typeof t ? t : { active: !t };
              return (n.url = e), Object(i.a)(n);
            },
            GM_notification(e, t, n, o) {
              const a =
                "object" == typeof e
                  ? e
                  : { text: e, title: t, image: n, onclick: o };
              if (!a.text)
                throw new f.b("GM_notification: `text` is required!");
              Object(u.a)(a);
            },
            GM_setClipboard(e, t) {
              l.a.post("SetClipboard", { data: e, type: t });
            },
            GM_log: f.x.log,
          },
          {
            getResourceURL: { async: !0 },
            getValue: { async: !0 },
            deleteValue: { async: !0 },
            setValue: { async: !0 },
            listValues: { async: !0 },
            xmlHttpRequest: { alias: "xmlhttpRequest" },
            notification: !0,
            openInTab: !0,
            setClipboard: !0,
            addStyle: !0,
          },
        ];
      }
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        ((e) => {
          n.d(t, "default", () => l);
          var o = n(4),
            a = n(13),
            r = n(1),
            c = n(3);
          function l(t, n, l) {
            let s;
            return (
              l
                ? ((r.a.mode = o.a),
                  (r.a.post = (e, t) => l({ cmd: e, data: t }, o.a)),
                  (s = (e, t) => r.a.onHandle({ cmd: e, data: t })),
                  (e.chrome = void 0),
                  (e.browser = void 0))
                : ((r.a.mode = o.b),
                  (r.a.post = Object(a.a)(t, n, r.a.onHandle)),
                  r.a.addHandlers({
                    Ping() {
                      r.a.post("Pong");
                    },
                  })),
              document.addEventListener(
                "DOMContentLoaded",
                async () => {
                  (c.a.state = 1), await 0, r.a.load();
                },
                { once: !0 }
              ),
              s
            );
          }
          n(5),
            n(9),
            n(16),
            n(12),
            n(10),
            n(11),
            r.a.addHandlers({
              Command(e) {
                null == c.a.commands[e] || c.a.commands[e]();
              },
              Callback({ callbackId: e, payload: t }) {
                null == c.a.callbacks[e] || c.a.callbacks[e](t);
              },
            });
        }).call(this, n(6));
    },
    function (e, t, n) {
      "use strict";
      ((e) => {
        var t = n(2),
          o = n(4),
          a = n(0),
          r = n(1),
          c = n(3),
          l = n(9);
        const { concat: s } = Array.prototype,
          { document: i } = e,
          { get: d } = Object(a.n)(Document.prototype, "currentScript");
        r.a.addHandlers({
          LoadScripts(e) {
            if (e.mode !== r.a.mode) return;
            const n = [],
              u = [],
              p = [];
            (r.a.isFirefox = e.isFirefox),
              (r.a.ua = e.ua),
              (r.a.version = e.version),
              ["greasyfork.org"].includes(window.location.host) &&
                (() => {
                  const e = {},
                    t = {};
                  let n = 0;
                  r.a.addHandlers({
                    ScriptChecked({ callback: e, result: n }) {
                      const o = t[e];
                      o && (o(n), delete t[e]);
                    },
                  }),
                    Object(a.m)(e, "getVersion", {
                      value: () => a.d.resolve({ version: r.a.version }),
                    }),
                    Object(a.m)(e, "isInstalled", {
                      value: (e, o) =>
                        new a.d((a) => {
                          n += 1;
                          const c = n;
                          (t[c] = a),
                            r.a.post("CheckScript", {
                              name: e,
                              namespace: o,
                              callback: c,
                            });
                        }),
                    }),
                    Object(a.m)(window.external, "Violentmonkey", { value: e });
                })(),
              (r.a.load = () => {
                (r.a.load = a.A), y(p), Object(a.K)(h);
              });
            const f = r.a.isFirefox && r.a.mode === o.a,
              m = {
                "document-start": n,
                "document-idle": u,
                "document-end": p,
              };
            function b({ script: n, injectInto: o }) {
              var c;
              const u = n.custom.pathMap || {},
                p = n.meta.require || [],
                m = ((c = a.y.call(p, (t) => e.require[u[t] || t])), a.o).call(
                  c,
                  a.a
                ),
                b = ((c = []), s).call(c, ...a.y.call(m, (e) => [e, "\n;"])),
                y = n.props.id,
                h = e.code[y] || "",
                v = Object(l.b)(n, h, e.cache, o),
                g = Object(t.b)("VMin"),
                w = [
                  `(function(){${
                    f ? "try{" : ""
                  }with(this)((define,module,exports)=>{`,
                  ...b,
                  ...(b.length ? ["(()=>{"] : []),
                  h,
                  `\n${b.length ? "})()" : ""}})()${
                    f ? "}catch(e){console.error(e)}" : ""
                  }}).call(${g})`,
                ];
              return (
                Object(a.m)(window, g, {
                  configurable: !0,
                  get() {
                    delete window[g];
                    const e = d.call(i);
                    return e && a.G.call(e), v;
                  },
                }),
                [w, r.a.mode, y, n.meta.name]
              );
            }
            function y(e) {
              r.a.post("InjectMulti", a.y.call(e, b)), (e.length = 0);
            }
            async function h() {
              for (const e of u) r.a.post("Inject", b(e)), await new a.d(a.K);
              Object(l.a)(), (u.length = 0);
            }
            e.items &&
              (e.items.forEach((t) => {
                const { script: n } = t,
                  o = n.custom.runAt || n.meta.runAt;
                (m[o] || p).push(t),
                  (c.a.values[n.props.id] = e.values[n.props.id]);
              }),
              y(n)),
              !c.a.state &&
                ["interactive", "complete"].includes(i.readyState) &&
                (c.a.state = 1),
              c.a.state && r.a.load();
          },
        });
      }).call(this, n(6));
    },
  ]);
  var t = e.exports;
  return t.__esModule ? t.default : t;
})()("kfxr3i8ma8c0", "kfxr3i8m73c4");