/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Or = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, I) {
        var T = new pe.Bare();
        return T.init(l, I);
      }
      function n(l) {
        return l.replace(/[A-Z]/g, function (I) {
          return "-" + I.toLowerCase();
        });
      }
      function r(l) {
        var I = parseInt(l.slice(1), 16),
          T = (I >> 16) & 255,
          b = (I >> 8) & 255,
          N = 255 & I;
        return [T, b, N];
      }
      function a(l, I, T) {
        return (
          "#" + ((1 << 24) | (l << 16) | (I << 8) | T).toString(16).slice(1)
        );
      }
      function i() {}
      function o(l, I) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof I + "] " + I);
      }
      function s(l, I, T) {
        f("Units do not match [" + l + "]: " + I + ", " + T);
      }
      function u(l, I, T) {
        if ((I !== void 0 && (T = I), l === void 0)) return T;
        var b = T;
        return (
          Xt.test(l) || !it.test(l)
            ? (b = parseInt(l, 10))
            : it.test(l) && (b = 1e3 * parseFloat(l)),
          0 > b && (b = 0),
          b === b ? b : T
        );
      }
      function f(l) {
        ie.debug && window && window.console.warn(l);
      }
      function y(l) {
        for (var I = -1, T = l ? l.length : 0, b = []; ++I < T; ) {
          var N = l[I];
          N && b.push(N);
        }
        return b;
      }
      var E = (function (l, I, T) {
          function b(j) {
            return typeof j == "object";
          }
          function N(j) {
            return typeof j == "function";
          }
          function R() {}
          function k(j, ae) {
            function F() {
              var he = new $();
              return N(he.init) && he.init.apply(he, arguments), he;
            }
            function $() {}
            ae === T && ((ae = j), (j = Object)), (F.Bare = $);
            var Z,
              le = (R[l] = j[l]),
              Fe = ($[l] = F[l] = new R());
            return (
              (Fe.constructor = F),
              (F.mixin = function (he) {
                return ($[l] = F[l] = k(F, he)[l]), F;
              }),
              (F.open = function (he) {
                if (
                  ((Z = {}),
                  N(he) ? (Z = he.call(F, Fe, le, F, j)) : b(he) && (Z = he),
                  b(Z))
                )
                  for (var kt in Z) I.call(Z, kt) && (Fe[kt] = Z[kt]);
                return N(Fe.init) || (Fe.init = j), F;
              }),
              F.open(ae)
            );
          }
          return k;
        })("prototype", {}.hasOwnProperty),
        d = {
          ease: [
            "ease",
            function (l, I, T, b) {
              var N = (l /= b) * l,
                R = N * l;
              return (
                I +
                T * (-2.75 * R * N + 11 * N * N + -15.5 * R + 8 * N + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, I, T, b) {
              var N = (l /= b) * l,
                R = N * l;
              return I + T * (-1 * R * N + 3 * N * N + -3 * R + 2 * N);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, I, T, b) {
              var N = (l /= b) * l,
                R = N * l;
              return (
                I +
                T * (0.3 * R * N + -1.6 * N * N + 2.2 * R + -1.8 * N + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, I, T, b) {
              var N = (l /= b) * l,
                R = N * l;
              return I + T * (2 * R * N + -5 * N * N + 2 * R + 2 * N);
            },
          ],
          linear: [
            "linear",
            function (l, I, T, b) {
              return (T * l) / b + I;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, I, T, b) {
              return T * (l /= b) * l + I;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, I, T, b) {
              return -T * (l /= b) * (l - 2) + I;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, I, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l + I
                : (-T / 2) * (--l * (l - 2) - 1) + I;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, I, T, b) {
              return T * (l /= b) * l * l + I;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, I, T, b) {
              return T * ((l = l / b - 1) * l * l + 1) + I;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, I, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l * l + I
                : (T / 2) * ((l -= 2) * l * l + 2) + I;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, I, T, b) {
              return T * (l /= b) * l * l * l + I;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, I, T, b) {
              return -T * ((l = l / b - 1) * l * l * l - 1) + I;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, I, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l * l * l + I
                : (-T / 2) * ((l -= 2) * l * l * l - 2) + I;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, I, T, b) {
              return T * (l /= b) * l * l * l * l + I;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, I, T, b) {
              return T * ((l = l / b - 1) * l * l * l * l + 1) + I;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, I, T, b) {
              return (l /= b / 2) < 1
                ? (T / 2) * l * l * l * l * l + I
                : (T / 2) * ((l -= 2) * l * l * l * l + 2) + I;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, I, T, b) {
              return -T * Math.cos((l / b) * (Math.PI / 2)) + T + I;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, I, T, b) {
              return T * Math.sin((l / b) * (Math.PI / 2)) + I;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, I, T, b) {
              return (-T / 2) * (Math.cos((Math.PI * l) / b) - 1) + I;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, I, T, b) {
              return l === 0 ? I : T * Math.pow(2, 10 * (l / b - 1)) + I;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, I, T, b) {
              return l === b
                ? I + T
                : T * (-Math.pow(2, (-10 * l) / b) + 1) + I;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, I, T, b) {
              return l === 0
                ? I
                : l === b
                ? I + T
                : (l /= b / 2) < 1
                ? (T / 2) * Math.pow(2, 10 * (l - 1)) + I
                : (T / 2) * (-Math.pow(2, -10 * --l) + 2) + I;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, I, T, b) {
              return -T * (Math.sqrt(1 - (l /= b) * l) - 1) + I;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, I, T, b) {
              return T * Math.sqrt(1 - (l = l / b - 1) * l) + I;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, I, T, b) {
              return (l /= b / 2) < 1
                ? (-T / 2) * (Math.sqrt(1 - l * l) - 1) + I
                : (T / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + I;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, I, T, b, N) {
              return (
                N === void 0 && (N = 1.70158),
                T * (l /= b) * l * ((N + 1) * l - N) + I
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, I, T, b, N) {
              return (
                N === void 0 && (N = 1.70158),
                T * ((l = l / b - 1) * l * ((N + 1) * l + N) + 1) + I
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, I, T, b, N) {
              return (
                N === void 0 && (N = 1.70158),
                (l /= b / 2) < 1
                  ? (T / 2) * l * l * (((N *= 1.525) + 1) * l - N) + I
                  : (T / 2) *
                      ((l -= 2) * l * (((N *= 1.525) + 1) * l + N) + 2) +
                    I
              );
            },
          ],
        },
        g = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        _ = document,
        v = window,
        A = "bkwld-tram",
        h = /[\-\.0-9]/g,
        S = /[A-Z]/,
        O = "number",
        L = /^(rgb|#)/,
        w = /(em|cm|mm|in|pt|pc|px)$/,
        C = /(em|cm|mm|in|pt|pc|px|%)$/,
        q = /(deg|rad|turn)$/,
        V = "unitless",
        U = /(all|none) 0s ease 0s/,
        W = /^(width|height)$/,
        Y = " ",
        M = _.createElement("a"),
        m = ["Webkit", "Moz", "O", "ms"],
        P = ["-webkit-", "-moz-", "-o-", "-ms-"],
        B = function (l) {
          if (l in M.style) return { dom: l, css: l };
          var I,
            T,
            b = "",
            N = l.split("-");
          for (I = 0; I < N.length; I++)
            b += N[I].charAt(0).toUpperCase() + N[I].slice(1);
          for (I = 0; I < m.length; I++)
            if (((T = m[I] + b), T in M.style))
              return { dom: T, css: P[I] + l };
        },
        x = (t.support = {
          bind: Function.prototype.bind,
          transform: B("transform"),
          transition: B("transition"),
          backface: B("backface-visibility"),
          timing: B("transition-timing-function"),
        });
      if (x.transition) {
        var z = x.timing.dom;
        if (((M.style[z] = d["ease-in-back"][0]), !M.style[z]))
          for (var Q in g) d[Q][0] = g[Q];
      }
      var ee = (t.frame = (function () {
          var l =
            v.requestAnimationFrame ||
            v.webkitRequestAnimationFrame ||
            v.mozRequestAnimationFrame ||
            v.oRequestAnimationFrame ||
            v.msRequestAnimationFrame;
          return l && x.bind
            ? l.bind(v)
            : function (I) {
                v.setTimeout(I, 16);
              };
        })()),
        ye = (t.now = (function () {
          var l = v.performance,
            I = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return I && x.bind
            ? I.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Me = E(function (l) {
          function I(H, J) {
            var se = y(("" + H).split(Y)),
              te = se[0];
            J = J || {};
            var Te = G[te];
            if (!Te) return f("Unsupported property: " + te);
            if (!J.weak || !this.props[te]) {
              var Le = Te[0],
                _e = this.props[te];
              return (
                _e || (_e = this.props[te] = new Le.Bare()),
                _e.init(this.$el, se, Te, J),
                _e
              );
            }
          }
          function T(H, J, se) {
            if (H) {
              var te = typeof H;
              if (
                (J ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                te == "number" && J)
              )
                return (
                  (this.timer = new ze({
                    duration: H,
                    context: this,
                    complete: R,
                  })),
                  void (this.active = !0)
                );
              if (te == "string" && J) {
                switch (H) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    k.call(this);
                    break;
                  case "redraw":
                    $.call(this);
                    break;
                  default:
                    I.call(this, H, se && se[1]);
                }
                return R.call(this);
              }
              if (te == "function") return void H.call(this, this);
              if (te == "object") {
                var Te = 0;
                Fe.call(
                  this,
                  H,
                  function (fe, t0) {
                    fe.span > Te && (Te = fe.span), fe.stop(), fe.animate(t0);
                  },
                  function (fe) {
                    "wait" in fe && (Te = u(fe.wait, 0));
                  }
                ),
                  le.call(this),
                  Te > 0 &&
                    ((this.timer = new ze({ duration: Te, context: this })),
                    (this.active = !0),
                    J && (this.timer.complete = R));
                var Le = this,
                  _e = !1,
                  gn = {};
                ee(function () {
                  Fe.call(Le, H, function (fe) {
                    fe.active && ((_e = !0), (gn[fe.name] = fe.nextStyle));
                  }),
                    _e && Le.$el.css(gn);
                });
              }
            }
          }
          function b(H) {
            (H = u(H, 0)),
              this.active
                ? this.queue.push({ options: H })
                : ((this.timer = new ze({
                    duration: H,
                    context: this,
                    complete: R,
                  })),
                  (this.active = !0));
          }
          function N(H) {
            return this.active
              ? (this.queue.push({ options: H, args: arguments }),
                void (this.timer.complete = R))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function R() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var H = this.queue.shift();
              T.call(this, H.options, !0, H.args);
            }
          }
          function k(H) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var J;
            typeof H == "string"
              ? ((J = {}), (J[H] = 1))
              : (J = typeof H == "object" && H != null ? H : this.props),
              Fe.call(this, J, he),
              le.call(this);
          }
          function j(H) {
            k.call(this, H), Fe.call(this, H, kt, Jg);
          }
          function ae(H) {
            typeof H != "string" && (H = "block"), (this.el.style.display = H);
          }
          function F() {
            k.call(this), (this.el.style.display = "none");
          }
          function $() {
            this.el.offsetHeight;
          }
          function Z() {
            k.call(this), e.removeData(this.el, A), (this.$el = this.el = null);
          }
          function le() {
            var H,
              J,
              se = [];
            this.upstream && se.push(this.upstream);
            for (H in this.props)
              (J = this.props[H]), J.active && se.push(J.string);
            (se = se.join(",")),
              this.style !== se &&
                ((this.style = se), (this.el.style[x.transition.dom] = se));
          }
          function Fe(H, J, se) {
            var te,
              Te,
              Le,
              _e,
              gn = J !== he,
              fe = {};
            for (te in H)
              (Le = H[te]),
                te in oe
                  ? (fe.transform || (fe.transform = {}),
                    (fe.transform[te] = Le))
                  : (S.test(te) && (te = n(te)),
                    te in G ? (fe[te] = Le) : (_e || (_e = {}), (_e[te] = Le)));
            for (te in fe) {
              if (((Le = fe[te]), (Te = this.props[te]), !Te)) {
                if (!gn) continue;
                Te = I.call(this, te);
              }
              J.call(this, Te, Le);
            }
            se && _e && se.call(this, _e);
          }
          function he(H) {
            H.stop();
          }
          function kt(H, J) {
            H.set(J);
          }
          function Jg(H) {
            this.$el.css(H);
          }
          function Re(H, J) {
            l[H] = function () {
              return this.children
                ? e0.call(this, J, arguments)
                : (this.el && J.apply(this, arguments), this);
            };
          }
          function e0(H, J) {
            var se,
              te = this.children.length;
            for (se = 0; te > se; se++) H.apply(this.children[se], J);
            return this;
          }
          (l.init = function (H) {
            if (
              ((this.$el = e(H)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              ie.keepInherited && !ie.fallback)
            ) {
              var J = D(this.el, "transition");
              J && !U.test(J) && (this.upstream = J);
            }
            x.backface &&
              ie.hideBackface &&
              p(this.el, x.backface.css, "hidden");
          }),
            Re("add", I),
            Re("start", T),
            Re("wait", b),
            Re("then", N),
            Re("next", R),
            Re("stop", k),
            Re("set", j),
            Re("show", ae),
            Re("hide", F),
            Re("redraw", $),
            Re("destroy", Z);
        }),
        pe = E(Me, function (l) {
          function I(T, b) {
            var N = e.data(T, A) || e.data(T, A, new Me.Bare());
            return N.el || N.init(T), b ? N.start(b) : N;
          }
          l.init = function (T, b) {
            var N = e(T);
            if (!N.length) return this;
            if (N.length === 1) return I(N[0], b);
            var R = [];
            return (
              N.each(function (k, j) {
                R.push(I(j, b));
              }),
              (this.children = R),
              this
            );
          };
        }),
        K = E(function (l) {
          function I() {
            var R = this.get();
            this.update("auto");
            var k = this.get();
            return this.update(R), k;
          }
          function T(R, k, j) {
            return k !== void 0 && (j = k), R in d ? R : j;
          }
          function b(R) {
            var k = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
            return (k ? a(k[1], k[2], k[3]) : R).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var N = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (R, k, j, ae) {
            (this.$el = R), (this.el = R[0]);
            var F = k[0];
            j[2] && (F = j[2]),
              X[F] && (F = X[F]),
              (this.name = F),
              (this.type = j[1]),
              (this.duration = u(k[1], this.duration, N.duration)),
              (this.ease = T(k[2], this.ease, N.ease)),
              (this.delay = u(k[3], this.delay, N.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = W.test(this.name)),
              (this.unit = ae.unit || this.unit || ie.defaultUnit),
              (this.angle = ae.angle || this.angle || ie.defaultAngle),
              ie.fallback || ae.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    Y +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? Y + d[this.ease][0] : "") +
                    (this.delay ? Y + this.delay + "ms" : "")));
          }),
            (l.set = function (R) {
              (R = this.convert(R, this.type)), this.update(R), this.redraw();
            }),
            (l.transition = function (R) {
              (this.active = !0),
                (R = this.convert(R, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  R == "auto" && (R = I.call(this))),
                (this.nextStyle = R);
            }),
            (l.fallback = function (R) {
              var k =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (R = this.convert(R, this.type)),
                this.auto &&
                  (k == "auto" && (k = this.convert(this.get(), this.type)),
                  R == "auto" && (R = I.call(this))),
                (this.tween = new rt({
                  from: k,
                  to: R,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return D(this.el, this.name);
            }),
            (l.update = function (R) {
              p(this.el, this.name, R);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var R = this.tween;
              R && R.context && R.destroy();
            }),
            (l.convert = function (R, k) {
              if (R == "auto" && this.auto) return R;
              var j,
                ae = typeof R == "number",
                F = typeof R == "string";
              switch (k) {
                case O:
                  if (ae) return R;
                  if (F && R.replace(h, "") === "") return +R;
                  j = "number(unitless)";
                  break;
                case L:
                  if (F) {
                    if (R === "" && this.original) return this.original;
                    if (k.test(R))
                      return R.charAt(0) == "#" && R.length == 7 ? R : b(R);
                  }
                  j = "hex or rgb string";
                  break;
                case w:
                  if (ae) return R + this.unit;
                  if (F && k.test(R)) return R;
                  j = "number(px) or string(unit)";
                  break;
                case C:
                  if (ae) return R + this.unit;
                  if (F && k.test(R)) return R;
                  j = "number(px) or string(unit or %)";
                  break;
                case q:
                  if (ae) return R + this.angle;
                  if (F && k.test(R)) return R;
                  j = "number(deg) or string(angle)";
                  break;
                case V:
                  if (ae || (F && C.test(R))) return R;
                  j = "number(unitless) or string(unit or %)";
              }
              return o(j, R), R;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        Ee = E(K, function (l, I) {
          l.init = function () {
            I.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), L));
          };
        }),
        nt = E(K, function (l, I) {
          (l.init = function () {
            I.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (T) {
              this.$el[this.name](T);
            });
        }),
        gt = E(K, function (l, I) {
          function T(b, N) {
            var R, k, j, ae, F;
            for (R in b)
              (ae = oe[R]),
                (j = ae[0]),
                (k = ae[1] || R),
                (F = this.convert(b[R], j)),
                N.call(this, k, F, j);
          }
          (l.init = function () {
            I.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                oe.perspective &&
                  ie.perspective &&
                  ((this.current.perspective = ie.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (b) {
              T.call(this, b, function (N, R) {
                this.current[N] = R;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (b) {
              var N = this.values(b);
              this.tween = new Ut({
                current: this.current,
                values: N,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var R,
                k = {};
              for (R in this.current) k[R] = R in N ? N[R] : this.current[R];
              (this.active = !0), (this.nextStyle = this.style(k));
            }),
            (l.fallback = function (b) {
              var N = this.values(b);
              this.tween = new Ut({
                current: this.current,
                values: N,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (b) {
              var N,
                R = "";
              for (N in b) R += N + "(" + b[N] + ") ";
              return R;
            }),
            (l.values = function (b) {
              var N,
                R = {};
              return (
                T.call(this, b, function (k, j, ae) {
                  (R[k] = j),
                    this.current[k] === void 0 &&
                      ((N = 0),
                      ~k.indexOf("scale") && (N = 1),
                      (this.current[k] = this.convert(N, ae)));
                }),
                R
              );
            });
        }),
        rt = E(function (l) {
          function I(F) {
            j.push(F) === 1 && ee(T);
          }
          function T() {
            var F,
              $,
              Z,
              le = j.length;
            if (le)
              for (ee(T), $ = ye(), F = le; F--; ) (Z = j[F]), Z && Z.render($);
          }
          function b(F) {
            var $,
              Z = e.inArray(F, j);
            Z >= 0 &&
              (($ = j.slice(Z + 1)),
              (j.length = Z),
              $.length && (j = j.concat($)));
          }
          function N(F) {
            return Math.round(F * ae) / ae;
          }
          function R(F, $, Z) {
            return a(
              F[0] + Z * ($[0] - F[0]),
              F[1] + Z * ($[1] - F[1]),
              F[2] + Z * ($[2] - F[2])
            );
          }
          var k = { ease: d.ease[1], from: 0, to: 1 };
          (l.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var $ = F.ease || k.ease;
            d[$] && ($ = d[$][1]),
              typeof $ != "function" && ($ = k.ease),
              (this.ease = $),
              (this.update = F.update || i),
              (this.complete = F.complete || i),
              (this.context = F.context || this),
              (this.name = F.name);
            var Z = F.from,
              le = F.to;
            Z === void 0 && (Z = k.from),
              le === void 0 && (le = k.to),
              (this.unit = F.unit || ""),
              typeof Z == "number" && typeof le == "number"
                ? ((this.begin = Z), (this.change = le - Z))
                : this.format(le, Z),
              (this.value = this.begin + this.unit),
              (this.start = ye()),
              F.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = ye()),
                (this.active = !0),
                I(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), b(this));
            }),
            (l.render = function (F) {
              var $,
                Z = F - this.start;
              if (this.delay) {
                if (Z <= this.delay) return;
                Z -= this.delay;
              }
              if (Z < this.duration) {
                var le = this.ease(Z, 0, 1, this.duration);
                return (
                  ($ = this.startRGB
                    ? R(this.startRGB, this.endRGB, le)
                    : N(this.begin + le * this.change)),
                  (this.value = $ + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              ($ = this.endHex || this.begin + this.change),
                (this.value = $ + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (F, $) {
              if ((($ += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = r($)),
                  (this.endRGB = r(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var Z = $.replace(h, ""),
                  le = F.replace(h, "");
                Z !== le && s("tween", $, F), (this.unit = Z);
              }
              ($ = parseFloat($)),
                (F = parseFloat(F)),
                (this.begin = this.value = $),
                (this.change = F - $);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var j = [],
            ae = 1e3;
        }),
        ze = E(rt, function (l) {
          (l.init = function (I) {
            (this.duration = I.duration || 0),
              (this.complete = I.complete || i),
              (this.context = I.context),
              this.play();
          }),
            (l.render = function (I) {
              var T = I - this.start;
              T < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Ut = E(rt, function (l, I) {
          (l.init = function (T) {
            (this.context = T.context),
              (this.update = T.update),
              (this.tweens = []),
              (this.current = T.current);
            var b, N;
            for (b in T.values)
              (N = T.values[b]),
                this.current[b] !== N &&
                  this.tweens.push(
                    new rt({
                      name: b,
                      from: this.current[b],
                      to: N,
                      duration: T.duration,
                      delay: T.delay,
                      ease: T.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (T) {
              var b,
                N,
                R = this.tweens.length,
                k = !1;
              for (b = R; b--; )
                (N = this.tweens[b]),
                  N.context &&
                    (N.render(T), (this.current[N.name] = N.value), (k = !0));
              return k
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((I.destroy.call(this), this.tweens)) {
                var T,
                  b = this.tweens.length;
                for (T = b; T--; ) this.tweens[T].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ie = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !x.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!x.transition) return (ie.fallback = !0);
        ie.agentTests.push("(" + l + ")");
        var I = new RegExp(ie.agentTests.join("|"), "i");
        ie.fallback = I.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new rt(l);
        }),
        (t.delay = function (l, I, T) {
          return new ze({ complete: I, duration: l, context: T });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var p = e.style,
        D = e.css,
        X = { transform: x.transform && x.transform.css },
        G = {
          color: [Ee, L],
          background: [Ee, L, "background-color"],
          "outline-color": [Ee, L],
          "border-color": [Ee, L],
          "border-top-color": [Ee, L],
          "border-right-color": [Ee, L],
          "border-bottom-color": [Ee, L],
          "border-left-color": [Ee, L],
          "border-width": [K, w],
          "border-top-width": [K, w],
          "border-right-width": [K, w],
          "border-bottom-width": [K, w],
          "border-left-width": [K, w],
          "border-spacing": [K, w],
          "letter-spacing": [K, w],
          margin: [K, w],
          "margin-top": [K, w],
          "margin-right": [K, w],
          "margin-bottom": [K, w],
          "margin-left": [K, w],
          padding: [K, w],
          "padding-top": [K, w],
          "padding-right": [K, w],
          "padding-bottom": [K, w],
          "padding-left": [K, w],
          "outline-width": [K, w],
          opacity: [K, O],
          top: [K, C],
          right: [K, C],
          bottom: [K, C],
          left: [K, C],
          "font-size": [K, C],
          "text-indent": [K, C],
          "word-spacing": [K, C],
          width: [K, C],
          "min-width": [K, C],
          "max-width": [K, C],
          height: [K, C],
          "min-height": [K, C],
          "max-height": [K, C],
          "line-height": [K, V],
          "scroll-top": [nt, O, "scrollTop"],
          "scroll-left": [nt, O, "scrollLeft"],
        },
        oe = {};
      x.transform &&
        ((G.transform = [gt]),
        (oe = {
          x: [C, "translateX"],
          y: [C, "translateY"],
          rotate: [q],
          rotateX: [q],
          rotateY: [q],
          scale: [O],
          scaleX: [O],
          scaleY: [O],
          skew: [q],
          skewX: [q],
          skewY: [q],
        })),
        x.transform &&
          x.backface &&
          ((oe.z = [C, "translateZ"]),
          (oe.rotateZ = [q]),
          (oe.scaleZ = [O]),
          (oe.perspective = [w]));
      var Xt = /ms/,
        it = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Qa = c((_M, za) => {
    "use strict";
    var n0 = window.$,
      r0 = Or() && n0.tram;
    za.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        a = Function.prototype,
        i = n.push,
        o = n.slice,
        s = n.concat,
        u = r.toString,
        f = r.hasOwnProperty,
        y = n.forEach,
        E = n.map,
        d = n.reduce,
        g = n.reduceRight,
        _ = n.filter,
        v = n.every,
        A = n.some,
        h = n.indexOf,
        S = n.lastIndexOf,
        O = Array.isArray,
        L = Object.keys,
        w = a.bind,
        C =
          (e.each =
          e.forEach =
            function (m, P, B) {
              if (m == null) return m;
              if (y && m.forEach === y) m.forEach(P, B);
              else if (m.length === +m.length) {
                for (var x = 0, z = m.length; x < z; x++)
                  if (P.call(B, m[x], x, m) === t) return;
              } else
                for (var Q = e.keys(m), x = 0, z = Q.length; x < z; x++)
                  if (P.call(B, m[Q[x]], Q[x], m) === t) return;
              return m;
            });
      (e.map = e.collect =
        function (m, P, B) {
          var x = [];
          return m == null
            ? x
            : E && m.map === E
            ? m.map(P, B)
            : (C(m, function (z, Q, ee) {
                x.push(P.call(B, z, Q, ee));
              }),
              x);
        }),
        (e.find = e.detect =
          function (m, P, B) {
            var x;
            return (
              q(m, function (z, Q, ee) {
                if (P.call(B, z, Q, ee)) return (x = z), !0;
              }),
              x
            );
          }),
        (e.filter = e.select =
          function (m, P, B) {
            var x = [];
            return m == null
              ? x
              : _ && m.filter === _
              ? m.filter(P, B)
              : (C(m, function (z, Q, ee) {
                  P.call(B, z, Q, ee) && x.push(z);
                }),
                x);
          });
      var q =
        (e.some =
        e.any =
          function (m, P, B) {
            P || (P = e.identity);
            var x = !1;
            return m == null
              ? x
              : A && m.some === A
              ? m.some(P, B)
              : (C(m, function (z, Q, ee) {
                  if (x || (x = P.call(B, z, Q, ee))) return t;
                }),
                !!x);
          });
      (e.contains = e.include =
        function (m, P) {
          return m == null
            ? !1
            : h && m.indexOf === h
            ? m.indexOf(P) != -1
            : q(m, function (B) {
                return B === P;
              });
        }),
        (e.delay = function (m, P) {
          var B = o.call(arguments, 2);
          return setTimeout(function () {
            return m.apply(null, B);
          }, P);
        }),
        (e.defer = function (m) {
          return e.delay.apply(e, [m, 1].concat(o.call(arguments, 1)));
        }),
        (e.throttle = function (m) {
          var P, B, x;
          return function () {
            P ||
              ((P = !0),
              (B = arguments),
              (x = this),
              r0.frame(function () {
                (P = !1), m.apply(x, B);
              }));
          };
        }),
        (e.debounce = function (m, P, B) {
          var x,
            z,
            Q,
            ee,
            ye,
            Me = function () {
              var pe = e.now() - ee;
              pe < P
                ? (x = setTimeout(Me, P - pe))
                : ((x = null), B || ((ye = m.apply(Q, z)), (Q = z = null)));
            };
          return function () {
            (Q = this), (z = arguments), (ee = e.now());
            var pe = B && !x;
            return (
              x || (x = setTimeout(Me, P)),
              pe && ((ye = m.apply(Q, z)), (Q = z = null)),
              ye
            );
          };
        }),
        (e.defaults = function (m) {
          if (!e.isObject(m)) return m;
          for (var P = 1, B = arguments.length; P < B; P++) {
            var x = arguments[P];
            for (var z in x) m[z] === void 0 && (m[z] = x[z]);
          }
          return m;
        }),
        (e.keys = function (m) {
          if (!e.isObject(m)) return [];
          if (L) return L(m);
          var P = [];
          for (var B in m) e.has(m, B) && P.push(B);
          return P;
        }),
        (e.has = function (m, P) {
          return f.call(m, P);
        }),
        (e.isObject = function (m) {
          return m === Object(m);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var V = /(.)^/,
        U = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        W = /\\|'|\r|\n|\u2028|\u2029/g,
        Y = function (m) {
          return "\\" + U[m];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (m, P, B) {
          !P && B && (P = B), (P = e.defaults({}, P, e.templateSettings));
          var x = RegExp(
              [
                (P.escape || V).source,
                (P.interpolate || V).source,
                (P.evaluate || V).source,
              ].join("|") + "|$",
              "g"
            ),
            z = 0,
            Q = "__p+='";
          m.replace(x, function (pe, K, Ee, nt, gt) {
            return (
              (Q += m.slice(z, gt).replace(W, Y)),
              (z = gt + pe.length),
              K
                ? (Q +=
                    `'+
    ((__t=(` +
                    K +
                    `))==null?'':_.escape(__t))+
    '`)
                : Ee
                ? (Q +=
                    `'+
    ((__t=(` +
                    Ee +
                    `))==null?'':__t)+
    '`)
                : nt &&
                  (Q +=
                    `';
    ` +
                    nt +
                    `
    __p+='`),
              pe
            );
          }),
            (Q += `';
    `);
          var ee = P.variable;
          if (ee) {
            if (!M.test(ee))
              throw new Error("variable is not a bare identifier: " + ee);
          } else
            (Q =
              `with(obj||{}){
    ` +
              Q +
              `}
    `),
              (ee = "obj");
          Q =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            Q +
            `return __p;
    `;
          var ye;
          try {
            ye = new Function(P.variable || "obj", "_", Q);
          } catch (pe) {
            throw ((pe.source = Q), pe);
          }
          var Me = function (pe) {
            return ye.call(this, pe, e);
          };
          return (
            (Me.source =
              "function(" +
              ee +
              `){
    ` +
              Q +
              "}"),
            Me
          );
        }),
        e
      );
    })();
  });
  var xe = c((mM, no) => {
    "use strict";
    var ne = {},
      It = {},
      yt = [],
      Ar = window.Webflow || [],
      Qe = window.jQuery,
      Ne = Qe(window),
      i0 = Qe(document),
      De = Qe.isFunction,
      Ce = (ne._ = Qa()),
      ja = (ne.tram = Or() && Qe.tram),
      yn = !1,
      Sr = !1;
    ja.config.hideBackface = !1;
    ja.config.keepInherited = !0;
    ne.define = function (e, t, n) {
      It[e] && Za(It[e]);
      var r = (It[e] = t(Qe, Ce, n) || {});
      return $a(r), r;
    };
    ne.require = function (e) {
      return It[e];
    };
    function $a(e) {
      ne.env() &&
        (De(e.design) && Ne.on("__wf_design", e.design),
        De(e.preview) && Ne.on("__wf_preview", e.preview)),
        De(e.destroy) && Ne.on("__wf_destroy", e.destroy),
        e.ready && De(e.ready) && a0(e);
    }
    function a0(e) {
      if (yn) {
        e.ready();
        return;
      }
      Ce.contains(yt, e.ready) || yt.push(e.ready);
    }
    function Za(e) {
      De(e.design) && Ne.off("__wf_design", e.design),
        De(e.preview) && Ne.off("__wf_preview", e.preview),
        De(e.destroy) && Ne.off("__wf_destroy", e.destroy),
        e.ready && De(e.ready) && o0(e);
    }
    function o0(e) {
      yt = Ce.filter(yt, function (t) {
        return t !== e.ready;
      });
    }
    ne.push = function (e) {
      if (yn) {
        De(e) && e();
        return;
      }
      Ar.push(e);
    };
    ne.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var In = navigator.userAgent.toLowerCase(),
      Ja = (ne.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      s0 = (ne.env.chrome =
        /chrome/.test(In) &&
        /Google/.test(navigator.vendor) &&
        parseInt(In.match(/chrome\/(\d+)\./)[1], 10)),
      u0 = (ne.env.ios = /(ipod|iphone|ipad)/.test(In));
    ne.env.safari = /safari/.test(In) && !s0 && !u0;
    var br;
    Ja &&
      i0.on("touchstart mousedown", function (e) {
        br = e.target;
      });
    ne.validClick = Ja
      ? function (e) {
          return e === br || Qe.contains(e, br);
        }
      : function () {
          return !0;
        };
    var eo = "resize.webflow orientationchange.webflow load.webflow",
      c0 = "scroll.webflow " + eo;
    ne.resize = Rr(Ne, eo);
    ne.scroll = Rr(Ne, c0);
    ne.redraw = Rr();
    function Rr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = Ce.throttle(function (a) {
          Ce.each(n, function (i) {
            i(a);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (a) {
          typeof a == "function" && (Ce.contains(n, a) || n.push(a));
        }),
        (r.off = function (a) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = Ce.filter(n, function (i) {
            return i !== a;
          });
        }),
        r
      );
    }
    ne.location = function (e) {
      window.location = e;
    };
    ne.env() && (ne.location = function () {});
    ne.ready = function () {
      (yn = !0), Sr ? l0() : Ce.each(yt, Ka), Ce.each(Ar, Ka), ne.resize.up();
    };
    function Ka(e) {
      De(e) && e();
    }
    function l0() {
      (Sr = !1), Ce.each(It, $a);
    }
    var at;
    ne.load = function (e) {
      at.then(e);
    };
    function to() {
      at && (at.reject(), Ne.off("load", at.resolve)),
        (at = new Qe.Deferred()),
        Ne.on("load", at.resolve);
    }
    ne.destroy = function (e) {
      (e = e || {}),
        (Sr = !0),
        Ne.triggerHandler("__wf_destroy"),
        e.domready != null && (yn = e.domready),
        Ce.each(It, Za),
        ne.resize.off(),
        ne.scroll.off(),
        ne.redraw.off(),
        (yt = []),
        (Ar = []),
        at.state() === "pending" && to();
    };
    Qe(ne.ready);
    to();
    no.exports = window.Webflow = ne;
  });
  var ao = c((OM, io) => {
    "use strict";
    var ro = xe();
    ro.define(
      "brand",
      (io.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          a = e("body"),
          i = ".w-webflow-badge",
          o = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var g = r.attr("data-wf-status"),
            _ = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && o.hostname !== _ && (g = !0),
            g &&
              !s &&
              ((f = f || E()),
              d(),
              setTimeout(d, 500),
              e(n).off(u, y).on(u, y));
        };
        function y() {
          var g =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            !!n.webkitFullscreenElement;
          e(f).attr("style", g ? "display: none !important;" : "");
        }
        function E() {
          var g = e('<a class="w-webflow-badge"></a>').attr("href", "#"),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            v = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return g.append(_, v), g[0];
        }
        function d() {
          var g = a.children(i),
            _ = g.length && g.get(0) === f,
            v = ro.env("editor");
          if (_) {
            v && g.remove();
            return;
          }
          g.length && g.remove(), v || a.append(f);
        }
        return t;
      })
    );
  });
  var so = c((bM, oo) => {
    "use strict";
    var ht = xe();
    ht.define(
      "links",
      (oo.exports = function (e, t) {
        var n = {},
          r = e(window),
          a,
          i = ht.env(),
          o = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          y = /\/$/,
          E,
          d;
        n.ready = n.design = n.preview = g;
        function g() {
          (a = i && ht.env("design")),
            (d = ht.env("slug") || o.pathname || ""),
            ht.scroll.off(v),
            (E = []);
          for (var h = document.links, S = 0; S < h.length; ++S) _(h[S]);
          E.length && (ht.scroll.on(v), v());
        }
        function _(h) {
          if (!h.getAttribute("hreflang")) {
            var S =
              (a && h.getAttribute("href-disabled")) || h.getAttribute("href");
            if (((s.href = S), !(S.indexOf(":") >= 0))) {
              var O = e(h);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === o.host + o.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var L = e(s.hash);
                L.length && E.push({ link: O, sec: L, active: !1 });
                return;
              }
              if (!(S === "#" || S === "")) {
                var w =
                  s.href === o.href || S === d || (f.test(S) && y.test(d));
                A(O, u, w);
              }
            }
          }
        }
        function v() {
          var h = r.scrollTop(),
            S = r.height();
          t.each(E, function (O) {
            if (!O.link.attr("hreflang")) {
              var L = O.link,
                w = O.sec,
                C = w.offset().top,
                q = w.outerHeight(),
                V = S * 0.5,
                U = w.is(":visible") && C + q - V >= h && C + V <= h + S;
              O.active !== U && ((O.active = U), A(L, u, U));
            }
          });
        }
        function A(h, S, O) {
          var L = h.hasClass(S);
          (O && L) || (!O && !L) || (O ? h.addClass(S) : h.removeClass(S));
        }
        return n;
      })
    );
  });
  var co = c((AM, uo) => {
    "use strict";
    var hn = xe();
    hn.define(
      "scroll",
      (uo.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = _() ? null : window.history,
          a = e(window),
          i = e(document),
          o = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          u = hn.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          y = 'a[href="#"]',
          E = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
          d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          g = document.createElement("style");
        g.appendChild(document.createTextNode(d));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var v = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(M) {
          return v.test(M.hash) && M.host + M.pathname === n.host + n.pathname;
        }
        let h =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            h.matches
          );
        }
        function O(M, m) {
          var P;
          switch (m) {
            case "add":
              (P = M.attr("tabindex")),
                P
                  ? M.attr("data-wf-tabindex-swap", P)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (P = M.attr("data-wf-tabindex-swap")),
                P
                  ? (M.attr("tabindex", P),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", m === "add");
        }
        function L(M) {
          var m = M.currentTarget;
          if (
            !(
              hn.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
            )
          ) {
            var P = A(m) ? m.hash : "";
            if (P !== "") {
              var B = e(P);
              B.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                w(P, M),
                window.setTimeout(
                  function () {
                    C(B, function () {
                      O(B, "add"),
                        B.get(0).focus({ preventScroll: !0 }),
                        O(B, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function w(M) {
          if (
            n.hash !== M &&
            r &&
            r.pushState &&
            !(hn.env.chrome && n.protocol === "file:")
          ) {
            var m = r.state && r.state.hash;
            m !== M && r.pushState({ hash: M }, "", M);
          }
        }
        function C(M, m) {
          var P = a.scrollTop(),
            B = q(M);
          if (P !== B) {
            var x = V(M, P, B),
              z = Date.now(),
              Q = function () {
                var ee = Date.now() - z;
                window.scroll(0, U(P, B, ee, x)),
                  ee <= x ? s(Q) : typeof m == "function" && m();
              };
            s(Q);
          }
        }
        function q(M) {
          var m = e(f),
            P = m.css("position") === "fixed" ? m.outerHeight() : 0,
            B = M.offset().top - P;
          if (M.data("scroll") === "mid") {
            var x = a.height() - P,
              z = M.outerHeight();
            z < x && (B -= Math.round((x - z) / 2));
          }
          return B;
        }
        function V(M, m, P) {
          if (S()) return 0;
          var B = 1;
          return (
            o.add(M).each(function (x, z) {
              var Q = parseFloat(z.getAttribute("data-scroll-time"));
              !isNaN(Q) && Q >= 0 && (B = Q);
            }),
            (472.143 * Math.log(Math.abs(m - P) + 125) - 2e3) * B
          );
        }
        function U(M, m, P, B) {
          return P > B ? m : M + (m - M) * W(P / B);
        }
        function W(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function Y() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: m } = t;
          i.on(m, E, L),
            i.on(M, y, function (P) {
              P.preventDefault();
            }),
            document.head.insertBefore(g, document.head.firstChild);
        }
        return { ready: Y };
      })
    );
  });
  var po = c((SM, fo) => {
    "use strict";
    var lo = xe();
    lo.define(
      "focus",
      (fo.exports = function () {
        var e = [],
          t = !1;
        function n(o) {
          t &&
            (o.preventDefault(),
            o.stopPropagation(),
            o.stopImmediatePropagation(),
            e.unshift(o));
        }
        function r(o) {
          var s = o.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function a(o) {
          r(o) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, o.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            lo.env.safari &&
            (document.addEventListener("mousedown", a, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: i };
      })
    );
  });
  var go = c((RM, Eo) => {
    "use strict";
    var f0 = xe();
    f0.define(
      "focus-visible",
      (Eo.exports = function () {
        function e(n) {
          var r = !0,
            a = !1,
            i = null,
            o = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(O) {
            return !!(
              O &&
              O !== document &&
              O.nodeName !== "HTML" &&
              O.nodeName !== "BODY" &&
              "classList" in O &&
              "contains" in O.classList
            );
          }
          function u(O) {
            var L = O.type,
              w = O.tagName;
            return !!(
              (w === "INPUT" && o[L] && !O.readOnly) ||
              (w === "TEXTAREA" && !O.readOnly) ||
              O.isContentEditable
            );
          }
          function f(O) {
            O.getAttribute("data-wf-focus-visible") ||
              O.setAttribute("data-wf-focus-visible", "true");
          }
          function y(O) {
            O.getAttribute("data-wf-focus-visible") &&
              O.removeAttribute("data-wf-focus-visible");
          }
          function E(O) {
            O.metaKey ||
              O.altKey ||
              O.ctrlKey ||
              (s(n.activeElement) && f(n.activeElement), (r = !0));
          }
          function d() {
            r = !1;
          }
          function g(O) {
            s(O.target) && (r || u(O.target)) && f(O.target);
          }
          function _(O) {
            s(O.target) &&
              O.target.hasAttribute("data-wf-focus-visible") &&
              ((a = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                a = !1;
              }, 100)),
              y(O.target));
          }
          function v() {
            document.visibilityState === "hidden" && (a && (r = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function h() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(O) {
            (O.target.nodeName && O.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), h());
          }
          document.addEventListener("keydown", E, !0),
            document.addEventListener("mousedown", d, !0),
            document.addEventListener("pointerdown", d, !0),
            document.addEventListener("touchstart", d, !0),
            document.addEventListener("visibilitychange", v, !0),
            A(),
            n.addEventListener("focus", g, !0),
            n.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var yo = c((LM, Io) => {
    "use strict";
    var d0 = xe();
    d0.define(
      "touch",
      (Io.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new r(i) : null
            );
          });
        function r(i) {
          var o = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            y;
          i.addEventListener("touchstart", E, !1),
            i.addEventListener("touchmove", d, !1),
            i.addEventListener("touchend", g, !1),
            i.addEventListener("touchcancel", _, !1),
            i.addEventListener("mousedown", E, !1),
            i.addEventListener("mousemove", d, !1),
            i.addEventListener("mouseup", g, !1),
            i.addEventListener("mouseout", _, !1);
          function E(A) {
            var h = A.touches;
            (h && h.length > 1) ||
              ((o = !0),
              h ? ((s = !0), (f = h[0].clientX)) : (f = A.clientX),
              (y = f));
          }
          function d(A) {
            if (o) {
              if (s && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var h = A.touches,
                S = h ? h[0].clientX : A.clientX,
                O = S - y;
              (y = S),
                Math.abs(O) > u &&
                  n &&
                  String(n()) === "" &&
                  (a("swipe", A, { direction: O > 0 ? "right" : "left" }), _());
            }
          }
          function g(A) {
            if (o && ((o = !1), s && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (s = !1);
              return;
            }
          }
          function _() {
            o = !1;
          }
          function v() {
            i.removeEventListener("touchstart", E, !1),
              i.removeEventListener("touchmove", d, !1),
              i.removeEventListener("touchend", g, !1),
              i.removeEventListener("touchcancel", _, !1),
              i.removeEventListener("mousedown", E, !1),
              i.removeEventListener("mousemove", d, !1),
              i.removeEventListener("mouseup", g, !1),
              i.removeEventListener("mouseout", _, !1),
              (i = null);
          }
          this.destroy = v;
        }
        function a(i, o, s) {
          var u = e.Event(i, { originalEvent: o });
          e(o.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var To = c((CM, ho) => {
    "use strict";
    var Lr = xe();
    Lr.define(
      "edit",
      (ho.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (Lr.env("test") || Lr.env("frame")) && !n.fixture && !p0())
        )
          return { exit: 1 };
        var r = {},
          a = e(window),
          i = e(document.documentElement),
          o = document.location,
          s = "hashchange",
          u,
          f = n.load || d,
          y = !1;
        try {
          y =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        y
          ? f()
          : o.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) ||
              /\?edit$/.test(o.href)) &&
            f()
          : a.on(s, E).triggerHandler(s);
        function E() {
          u || (/\?edit/.test(o.hash) && f());
        }
        function d() {
          (u = !0),
            (window.WebflowEditor = !0),
            a.off(s, E),
            S(function (L) {
              e.ajax({
                url: h("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: g(L),
              });
            });
        }
        function g(L) {
          return function (w) {
            if (!w) {
              console.error("Could not load editor data");
              return;
            }
            (w.thirdPartyCookiesSupported = L),
              _(A(w.scriptPath), function () {
                window.WebflowEditor(w);
              });
          };
        }
        function _(L, w) {
          e.ajax({ type: "GET", url: L, dataType: "script", cache: !0 }).then(
            w,
            v
          );
        }
        function v(L, w, C) {
          throw (console.error("Could not load editor script: " + w), C);
        }
        function A(L) {
          return L.indexOf("//") >= 0
            ? L
            : h("https://editor-api.webflow.com" + L);
        }
        function h(L) {
          return L.replace(/([^:])\/\//g, "$1/");
        }
        function S(L) {
          var w = window.document.createElement("iframe");
          (w.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (w.style.display = "none"),
            (w.sandbox = "allow-scripts allow-same-origin");
          var C = function (q) {
            q.data === "WF_third_party_cookies_unsupported"
              ? (O(w, C), L(!1))
              : q.data === "WF_third_party_cookies_supported" &&
                (O(w, C), L(!0));
          };
          (w.onerror = function () {
            O(w, C), L(!1);
          }),
            window.addEventListener("message", C, !1),
            window.document.body.appendChild(w);
        }
        function O(L, w) {
          window.removeEventListener("message", w, !1), L.remove();
        }
        return r;
      })
    );
    function p0() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Cr = c((NM, vo) => {
    var E0 =
      typeof global == "object" && global && global.Object === Object && global;
    vo.exports = E0;
  });
  var we = c((wM, _o) => {
    var g0 = Cr(),
      I0 = typeof self == "object" && self && self.Object === Object && self,
      y0 = g0 || I0 || Function("return this")();
    _o.exports = y0;
  });
  var Tt = c((PM, mo) => {
    var h0 = we(),
      T0 = h0.Symbol;
    mo.exports = T0;
  });
  var So = c((MM, Ao) => {
    var Oo = Tt(),
      bo = Object.prototype,
      v0 = bo.hasOwnProperty,
      _0 = bo.toString,
      Wt = Oo ? Oo.toStringTag : void 0;
    function m0(e) {
      var t = v0.call(e, Wt),
        n = e[Wt];
      try {
        e[Wt] = void 0;
        var r = !0;
      } catch {}
      var a = _0.call(e);
      return r && (t ? (e[Wt] = n) : delete e[Wt]), a;
    }
    Ao.exports = m0;
  });
  var Lo = c((FM, Ro) => {
    var O0 = Object.prototype,
      b0 = O0.toString;
    function A0(e) {
      return b0.call(e);
    }
    Ro.exports = A0;
  });
  var Ke = c((DM, wo) => {
    var Co = Tt(),
      S0 = So(),
      R0 = Lo(),
      L0 = "[object Null]",
      C0 = "[object Undefined]",
      No = Co ? Co.toStringTag : void 0;
    function N0(e) {
      return e == null
        ? e === void 0
          ? C0
          : L0
        : No && No in Object(e)
        ? S0(e)
        : R0(e);
    }
    wo.exports = N0;
  });
  var Nr = c((xM, Po) => {
    function w0(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    Po.exports = w0;
  });
  var wr = c((qM, Mo) => {
    var P0 = Nr(),
      M0 = P0(Object.getPrototypeOf, Object);
    Mo.exports = M0;
  });
  var We = c((GM, Fo) => {
    function F0(e) {
      return e != null && typeof e == "object";
    }
    Fo.exports = F0;
  });
  var Pr = c((VM, xo) => {
    var D0 = Ke(),
      x0 = wr(),
      q0 = We(),
      G0 = "[object Object]",
      V0 = Function.prototype,
      B0 = Object.prototype,
      Do = V0.toString,
      U0 = B0.hasOwnProperty,
      X0 = Do.call(Object);
    function k0(e) {
      if (!q0(e) || D0(e) != G0) return !1;
      var t = x0(e);
      if (t === null) return !0;
      var n = U0.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && Do.call(n) == X0;
    }
    xo.exports = k0;
  });
  var qo = c((Mr) => {
    "use strict";
    Object.defineProperty(Mr, "__esModule", { value: !0 });
    Mr.default = W0;
    function W0(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var Go = c((Dr, Fr) => {
    "use strict";
    Object.defineProperty(Dr, "__esModule", { value: !0 });
    var H0 = qo(),
      Y0 = z0(H0);
    function z0(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var vt;
    typeof self < "u"
      ? (vt = self)
      : typeof window < "u"
      ? (vt = window)
      : typeof global < "u"
      ? (vt = global)
      : typeof Fr < "u"
      ? (vt = Fr)
      : (vt = Function("return this")());
    var Q0 = (0, Y0.default)(vt);
    Dr.default = Q0;
  });
  var xr = c((Ht) => {
    "use strict";
    Ht.__esModule = !0;
    Ht.ActionTypes = void 0;
    Ht.default = Xo;
    var K0 = Pr(),
      j0 = Uo(K0),
      $0 = Go(),
      Vo = Uo($0);
    function Uo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Bo = (Ht.ActionTypes = { INIT: "@@redux/INIT" });
    function Xo(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(Xo)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var a = e,
        i = t,
        o = [],
        s = o,
        u = !1;
      function f() {
        s === o && (s = o.slice());
      }
      function y() {
        return i;
      }
      function E(v) {
        if (typeof v != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          f(),
          s.push(v),
          function () {
            if (A) {
              (A = !1), f();
              var S = s.indexOf(v);
              s.splice(S, 1);
            }
          }
        );
      }
      function d(v) {
        if (!(0, j0.default)(v))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof v.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (i = a(i, v));
        } finally {
          u = !1;
        }
        for (var A = (o = s), h = 0; h < A.length; h++) A[h]();
        return v;
      }
      function g(v) {
        if (typeof v != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (a = v), d({ type: Bo.INIT });
      }
      function _() {
        var v,
          A = E;
        return (
          (v = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function O() {
                S.next && S.next(y());
              }
              O();
              var L = A(O);
              return { unsubscribe: L };
            },
          }),
          (v[Vo.default] = function () {
            return this;
          }),
          v
        );
      }
      return (
        d({ type: Bo.INIT }),
        (r = { dispatch: d, subscribe: E, getState: y, replaceReducer: g }),
        (r[Vo.default] = _),
        r
      );
    }
  });
  var Gr = c((qr) => {
    "use strict";
    qr.__esModule = !0;
    qr.default = Z0;
    function Z0(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Ho = c((Vr) => {
    "use strict";
    Vr.__esModule = !0;
    Vr.default = rI;
    var ko = xr(),
      J0 = Pr(),
      kM = Wo(J0),
      eI = Gr(),
      WM = Wo(eI);
    function Wo(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function tI(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function nI(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: ko.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var a =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: a }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                ko.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function rI(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        typeof e[a] == "function" && (n[a] = e[a]);
      }
      var i = Object.keys(n);
      if (!1) var o;
      var s;
      try {
        nI(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          y = arguments[1];
        if (s) throw s;
        if (!1) var E;
        for (var d = !1, g = {}, _ = 0; _ < i.length; _++) {
          var v = i[_],
            A = n[v],
            h = f[v],
            S = A(h, y);
          if (typeof S > "u") {
            var O = tI(v, y);
            throw new Error(O);
          }
          (g[v] = S), (d = d || S !== h);
        }
        return d ? g : f;
      };
    }
  });
  var zo = c((Br) => {
    "use strict";
    Br.__esModule = !0;
    Br.default = iI;
    function Yo(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function iI(e, t) {
      if (typeof e == "function") return Yo(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
        var i = n[a],
          o = e[i];
        typeof o == "function" && (r[i] = Yo(o, t));
      }
      return r;
    }
  });
  var Xr = c((Ur) => {
    "use strict";
    Ur.__esModule = !0;
    Ur.default = aI;
    function aI() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        a = t.slice(0, -1);
      return function () {
        return a.reduceRight(function (i, o) {
          return o(i);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var Qo = c((kr) => {
    "use strict";
    kr.__esModule = !0;
    var oI =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    kr.default = lI;
    var sI = Xr(),
      uI = cI(sI);
    function cI(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function lI() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (a, i, o) {
          var s = r(a, i, o),
            u = s.dispatch,
            f = [],
            y = {
              getState: s.getState,
              dispatch: function (d) {
                return u(d);
              },
            };
          return (
            (f = t.map(function (E) {
              return E(y);
            })),
            (u = uI.default.apply(void 0, f)(s.dispatch)),
            oI({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Wr = c((Ae) => {
    "use strict";
    Ae.__esModule = !0;
    Ae.compose =
      Ae.applyMiddleware =
      Ae.bindActionCreators =
      Ae.combineReducers =
      Ae.createStore =
        void 0;
    var fI = xr(),
      dI = _t(fI),
      pI = Ho(),
      EI = _t(pI),
      gI = zo(),
      II = _t(gI),
      yI = Qo(),
      hI = _t(yI),
      TI = Xr(),
      vI = _t(TI),
      _I = Gr(),
      KM = _t(_I);
    function _t(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ae.createStore = dI.default;
    Ae.combineReducers = EI.default;
    Ae.bindActionCreators = II.default;
    Ae.applyMiddleware = hI.default;
    Ae.compose = vI.default;
  });
  var Ko = c((Hr) => {
    "use strict";
    Object.defineProperty(Hr, "__esModule", { value: !0 });
    function mI(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    mI(Hr, {
      EventAppliesTo: function () {
        return bI;
      },
      EventBasedOn: function () {
        return AI;
      },
      EventContinuousMouseAxes: function () {
        return SI;
      },
      EventLimitAffectedElements: function () {
        return RI;
      },
      EventTypeConsts: function () {
        return OI;
      },
      QuickEffectDirectionConsts: function () {
        return CI;
      },
      QuickEffectIds: function () {
        return LI;
      },
    });
    var OI = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      },
      bI = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
      AI = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
      SI = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
      RI = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
      },
      LI = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
      },
      CI = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
      };
  });
  var zr = c((Yr) => {
    "use strict";
    Object.defineProperty(Yr, "__esModule", { value: !0 });
    function NI(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    NI(Yr, {
      ActionAppliesTo: function () {
        return PI;
      },
      ActionTypeConsts: function () {
        return wI;
      },
    });
    var wI = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      },
      PI = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
      };
  });
  var jo = c((Qr) => {
    "use strict";
    Object.defineProperty(Qr, "__esModule", { value: !0 });
    Object.defineProperty(Qr, "InteractionTypeConsts", {
      enumerable: !0,
      get: function () {
        return MI;
      },
    });
    var MI = {
      MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
      MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
      MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
      SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
      SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
      PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
      PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
      PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
      NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
      DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
      ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
      TAB_INTERACTION: "TAB_INTERACTION",
      SLIDER_INTERACTION: "SLIDER_INTERACTION",
    };
  });
  var $o = c((Kr) => {
    "use strict";
    Object.defineProperty(Kr, "__esModule", { value: !0 });
    Object.defineProperty(Kr, "ReducedMotionTypes", {
      enumerable: !0,
      get: function () {
        return XI;
      },
    });
    var FI = zr(),
      {
        TRANSFORM_MOVE: DI,
        TRANSFORM_SCALE: xI,
        TRANSFORM_ROTATE: qI,
        TRANSFORM_SKEW: GI,
        STYLE_SIZE: VI,
        STYLE_FILTER: BI,
        STYLE_FONT_VARIATION: UI,
      } = FI.ActionTypeConsts,
      XI = {
        [DI]: !0,
        [xI]: !0,
        [qI]: !0,
        [GI]: !0,
        [VI]: !0,
        [BI]: !0,
        [UI]: !0,
      };
  });
  var Zo = c((jr) => {
    "use strict";
    Object.defineProperty(jr, "__esModule", { value: !0 });
    function kI(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    kI(jr, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
        return oy;
      },
      IX2_ANIMATION_FRAME_CHANGED: function () {
        return ey;
      },
      IX2_CLEAR_REQUESTED: function () {
        return $I;
      },
      IX2_ELEMENT_STATE_CHANGED: function () {
        return ay;
      },
      IX2_EVENT_LISTENER_ADDED: function () {
        return ZI;
      },
      IX2_EVENT_STATE_CHANGED: function () {
        return JI;
      },
      IX2_INSTANCE_ADDED: function () {
        return ny;
      },
      IX2_INSTANCE_REMOVED: function () {
        return iy;
      },
      IX2_INSTANCE_STARTED: function () {
        return ry;
      },
      IX2_MEDIA_QUERIES_DEFINED: function () {
        return uy;
      },
      IX2_PARAMETER_CHANGED: function () {
        return ty;
      },
      IX2_PLAYBACK_REQUESTED: function () {
        return KI;
      },
      IX2_PREVIEW_REQUESTED: function () {
        return QI;
      },
      IX2_RAW_DATA_IMPORTED: function () {
        return WI;
      },
      IX2_SESSION_INITIALIZED: function () {
        return HI;
      },
      IX2_SESSION_STARTED: function () {
        return YI;
      },
      IX2_SESSION_STOPPED: function () {
        return zI;
      },
      IX2_STOP_REQUESTED: function () {
        return jI;
      },
      IX2_TEST_FRAME_RENDERED: function () {
        return cy;
      },
      IX2_VIEWPORT_WIDTH_CHANGED: function () {
        return sy;
      },
    });
    var WI = "IX2_RAW_DATA_IMPORTED",
      HI = "IX2_SESSION_INITIALIZED",
      YI = "IX2_SESSION_STARTED",
      zI = "IX2_SESSION_STOPPED",
      QI = "IX2_PREVIEW_REQUESTED",
      KI = "IX2_PLAYBACK_REQUESTED",
      jI = "IX2_STOP_REQUESTED",
      $I = "IX2_CLEAR_REQUESTED",
      ZI = "IX2_EVENT_LISTENER_ADDED",
      JI = "IX2_EVENT_STATE_CHANGED",
      ey = "IX2_ANIMATION_FRAME_CHANGED",
      ty = "IX2_PARAMETER_CHANGED",
      ny = "IX2_INSTANCE_ADDED",
      ry = "IX2_INSTANCE_STARTED",
      iy = "IX2_INSTANCE_REMOVED",
      ay = "IX2_ELEMENT_STATE_CHANGED",
      oy = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      sy = "IX2_VIEWPORT_WIDTH_CHANGED",
      uy = "IX2_MEDIA_QUERIES_DEFINED",
      cy = "IX2_TEST_FRAME_RENDERED";
  });
  var Jo = c(($r) => {
    "use strict";
    Object.defineProperty($r, "__esModule", { value: !0 });
    function ly(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    ly($r, {
      ABSTRACT_NODE: function () {
        return uh;
      },
      AUTO: function () {
        return $y;
      },
      BACKGROUND: function () {
        return Hy;
      },
      BACKGROUND_COLOR: function () {
        return Wy;
      },
      BAR_DELIMITER: function () {
        return eh;
      },
      BORDER_COLOR: function () {
        return Yy;
      },
      BOUNDARY_SELECTOR: function () {
        return gy;
      },
      CHILDREN: function () {
        return th;
      },
      COLON_DELIMITER: function () {
        return Jy;
      },
      COLOR: function () {
        return zy;
      },
      COMMA_DELIMITER: function () {
        return Zy;
      },
      CONFIG_UNIT: function () {
        return Oy;
      },
      CONFIG_VALUE: function () {
        return Ty;
      },
      CONFIG_X_UNIT: function () {
        return vy;
      },
      CONFIG_X_VALUE: function () {
        return Iy;
      },
      CONFIG_Y_UNIT: function () {
        return _y;
      },
      CONFIG_Y_VALUE: function () {
        return yy;
      },
      CONFIG_Z_UNIT: function () {
        return my;
      },
      CONFIG_Z_VALUE: function () {
        return hy;
      },
      DISPLAY: function () {
        return Qy;
      },
      FILTER: function () {
        return By;
      },
      FLEX: function () {
        return Ky;
      },
      FONT_VARIATION_SETTINGS: function () {
        return Uy;
      },
      HEIGHT: function () {
        return ky;
      },
      HTML_ELEMENT: function () {
        return oh;
      },
      IMMEDIATE_CHILDREN: function () {
        return nh;
      },
      IX2_ID_DELIMITER: function () {
        return fy;
      },
      OPACITY: function () {
        return Vy;
      },
      PARENT: function () {
        return ih;
      },
      PLAIN_OBJECT: function () {
        return sh;
      },
      PRESERVE_3D: function () {
        return ah;
      },
      RENDER_GENERAL: function () {
        return lh;
      },
      RENDER_PLUGIN: function () {
        return dh;
      },
      RENDER_STYLE: function () {
        return fh;
      },
      RENDER_TRANSFORM: function () {
        return ch;
      },
      ROTATE_X: function () {
        return My;
      },
      ROTATE_Y: function () {
        return Fy;
      },
      ROTATE_Z: function () {
        return Dy;
      },
      SCALE_3D: function () {
        return Py;
      },
      SCALE_X: function () {
        return Cy;
      },
      SCALE_Y: function () {
        return Ny;
      },
      SCALE_Z: function () {
        return wy;
      },
      SIBLINGS: function () {
        return rh;
      },
      SKEW: function () {
        return xy;
      },
      SKEW_X: function () {
        return qy;
      },
      SKEW_Y: function () {
        return Gy;
      },
      TRANSFORM: function () {
        return by;
      },
      TRANSLATE_3D: function () {
        return Ly;
      },
      TRANSLATE_X: function () {
        return Ay;
      },
      TRANSLATE_Y: function () {
        return Sy;
      },
      TRANSLATE_Z: function () {
        return Ry;
      },
      WF_PAGE: function () {
        return dy;
      },
      WIDTH: function () {
        return Xy;
      },
      WILL_CHANGE: function () {
        return jy;
      },
      W_MOD_IX: function () {
        return Ey;
      },
      W_MOD_JS: function () {
        return py;
      },
    });
    var fy = "|",
      dy = "data-wf-page",
      py = "w-mod-js",
      Ey = "w-mod-ix",
      gy = ".w-dyn-item",
      Iy = "xValue",
      yy = "yValue",
      hy = "zValue",
      Ty = "value",
      vy = "xUnit",
      _y = "yUnit",
      my = "zUnit",
      Oy = "unit",
      by = "transform",
      Ay = "translateX",
      Sy = "translateY",
      Ry = "translateZ",
      Ly = "translate3d",
      Cy = "scaleX",
      Ny = "scaleY",
      wy = "scaleZ",
      Py = "scale3d",
      My = "rotateX",
      Fy = "rotateY",
      Dy = "rotateZ",
      xy = "skew",
      qy = "skewX",
      Gy = "skewY",
      Vy = "opacity",
      By = "filter",
      Uy = "font-variation-settings",
      Xy = "width",
      ky = "height",
      Wy = "backgroundColor",
      Hy = "background",
      Yy = "borderColor",
      zy = "color",
      Qy = "display",
      Ky = "flex",
      jy = "willChange",
      $y = "AUTO",
      Zy = ",",
      Jy = ":",
      eh = "|",
      th = "CHILDREN",
      nh = "IMMEDIATE_CHILDREN",
      rh = "SIBLINGS",
      ih = "PARENT",
      ah = "preserve-3d",
      oh = "HTML_ELEMENT",
      sh = "PLAIN_OBJECT",
      uh = "ABSTRACT_NODE",
      ch = "RENDER_TRANSFORM",
      lh = "RENDER_GENERAL",
      fh = "RENDER_STYLE",
      dh = "RENDER_PLUGIN";
  });
  var me = c((ot) => {
    "use strict";
    Object.defineProperty(ot, "__esModule", { value: !0 });
    function ph(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    ph(ot, {
      ActionTypeConsts: function () {
        return gh.ActionTypeConsts;
      },
      IX2EngineActionTypes: function () {
        return Ih;
      },
      IX2EngineConstants: function () {
        return yh;
      },
      QuickEffectIds: function () {
        return Eh.QuickEffectIds;
      },
    });
    var Eh = Tn(Ko(), ot),
      gh = Tn(zr(), ot);
    Tn(jo(), ot);
    Tn($o(), ot);
    var Ih = ts(Zo()),
      yh = ts(Jo());
    function Tn(e, t) {
      return (
        Object.keys(e).forEach(function (n) {
          n !== "default" &&
            !Object.prototype.hasOwnProperty.call(t, n) &&
            Object.defineProperty(t, n, {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            });
        }),
        e
      );
    }
    function es(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (es = function (r) {
        return r ? n : t;
      })(e);
    }
    function ts(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = es(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var ns = c((Zr) => {
    "use strict";
    Object.defineProperty(Zr, "__esModule", { value: !0 });
    Object.defineProperty(Zr, "ixData", {
      enumerable: !0,
      get: function () {
        return vh;
      },
    });
    var hh = me(),
      { IX2_RAW_DATA_IMPORTED: Th } = hh.IX2EngineActionTypes,
      vh = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case Th:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
  });
  var mt = c((ue) => {
    "use strict";
    Object.defineProperty(ue, "__esModule", { value: !0 });
    var _h =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    ue.clone = _n;
    ue.addLast = as;
    ue.addFirst = os;
    ue.removeLast = ss;
    ue.removeFirst = us;
    ue.insert = cs;
    ue.removeAt = ls;
    ue.replaceAt = fs;
    ue.getIn = mn;
    ue.set = On;
    ue.setIn = bn;
    ue.update = ps;
    ue.updateIn = Es;
    ue.merge = gs;
    ue.mergeDeep = Is;
    ue.mergeIn = ys;
    ue.omit = hs;
    ue.addDefaults = Ts;
    var rs = "INVALID_ARGS";
    function is(e) {
      throw new Error(e);
    }
    function Jr(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var mh = {}.hasOwnProperty;
    function _n(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Jr(e), n = {}, r = 0; r < t.length; r++) {
        var a = t[r];
        n[a] = e[a];
      }
      return n;
    }
    function Oe(e, t, n) {
      var r = n;
      r == null && is(rs);
      for (
        var a = !1, i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        o[s - 3] = arguments[s];
      for (var u = 0; u < o.length; u++) {
        var f = o[u];
        if (f != null) {
          var y = Jr(f);
          if (y.length)
            for (var E = 0; E <= y.length; E++) {
              var d = y[E];
              if (!(e && r[d] !== void 0)) {
                var g = f[d];
                t && vn(r[d]) && vn(g) && (g = Oe(e, t, r[d], g)),
                  !(g === void 0 || g === r[d]) &&
                    (a || ((a = !0), (r = _n(r))), (r[d] = g));
              }
            }
        }
      }
      return r;
    }
    function vn(e) {
      var t = typeof e > "u" ? "undefined" : _h(e);
      return e != null && (t === "object" || t === "function");
    }
    function as(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function os(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function ss(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function us(e) {
      return e.length ? e.slice(1) : e;
    }
    function cs(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function ls(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function fs(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, a = Array(r), i = 0; i < r; i++) a[i] = e[i];
      return (a[t] = n), a;
    }
    function mn(e, t) {
      if ((!Array.isArray(t) && is(rs), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var a = t[r];
          if (((n = n?.[a]), n === void 0)) return n;
        }
        return n;
      }
    }
    function On(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        a = e ?? r;
      if (a[t] === n) return a;
      var i = _n(a);
      return (i[t] = n), i;
    }
    function ds(e, t, n, r) {
      var a = void 0,
        i = t[r];
      if (r === t.length - 1) a = n;
      else {
        var o =
          vn(e) && vn(e[i]) ? e[i] : typeof t[r + 1] == "number" ? [] : {};
        a = ds(o, t, n, r + 1);
      }
      return On(e, i, a);
    }
    function bn(e, t, n) {
      return t.length ? ds(e, t, n, 0) : n;
    }
    function ps(e, t, n) {
      var r = e?.[t],
        a = n(r);
      return On(e, t, a);
    }
    function Es(e, t, n) {
      var r = mn(e, t),
        a = n(r);
      return bn(e, t, a);
    }
    function gs(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Oe.call.apply(Oe, [null, !1, !1, e, t, n, r, a, i].concat(s))
        : Oe(!1, !1, e, t, n, r, a, i);
    }
    function Is(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Oe.call.apply(Oe, [null, !1, !0, e, t, n, r, a, i].concat(s))
        : Oe(!1, !0, e, t, n, r, a, i);
    }
    function ys(e, t, n, r, a, i, o) {
      var s = mn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          y = Array(f > 7 ? f - 7 : 0),
          E = 7;
        E < f;
        E++
      )
        y[E - 7] = arguments[E];
      return (
        y.length
          ? (u = Oe.call.apply(Oe, [null, !1, !1, s, n, r, a, i, o].concat(y)))
          : (u = Oe(!1, !1, s, n, r, a, i, o)),
        bn(e, t, u)
      );
    }
    function hs(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, a = 0; a < n.length; a++)
        if (mh.call(e, n[a])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var i = {}, o = Jr(e), s = 0; s < o.length; s++) {
        var u = o[s];
        n.indexOf(u) >= 0 || (i[u] = e[u]);
      }
      return i;
    }
    function Ts(e, t, n, r, a, i) {
      for (
        var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6;
        u < o;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Oe.call.apply(Oe, [null, !0, !1, e, t, n, r, a, i].concat(s))
        : Oe(!0, !1, e, t, n, r, a, i);
    }
    var Oh = {
      clone: _n,
      addLast: as,
      addFirst: os,
      removeLast: ss,
      removeFirst: us,
      insert: cs,
      removeAt: ls,
      replaceAt: fs,
      getIn: mn,
      set: On,
      setIn: bn,
      update: ps,
      updateIn: Es,
      merge: gs,
      mergeDeep: Is,
      mergeIn: ys,
      omit: hs,
      addDefaults: Ts,
    };
    ue.default = Oh;
  });
  var _s = c((ei) => {
    "use strict";
    Object.defineProperty(ei, "__esModule", { value: !0 });
    Object.defineProperty(ei, "ixRequest", {
      enumerable: !0,
      get: function () {
        return wh;
      },
    });
    var bh = me(),
      Ah = mt(),
      {
        IX2_PREVIEW_REQUESTED: Sh,
        IX2_PLAYBACK_REQUESTED: Rh,
        IX2_STOP_REQUESTED: Lh,
        IX2_CLEAR_REQUESTED: Ch,
      } = bh.IX2EngineActionTypes,
      Nh = { preview: {}, playback: {}, stop: {}, clear: {} },
      vs = Object.create(null, {
        [Sh]: { value: "preview" },
        [Rh]: { value: "playback" },
        [Lh]: { value: "stop" },
        [Ch]: { value: "clear" },
      }),
      wh = (e = Nh, t) => {
        if (t.type in vs) {
          let n = [vs[t.type]];
          return (0, Ah.setIn)(e, [n], { ...t.payload });
        }
        return e;
      };
  });
  var Os = c((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    Object.defineProperty(ti, "ixSession", {
      enumerable: !0,
      get: function () {
        return Wh;
      },
    });
    var Ph = me(),
      qe = mt(),
      {
        IX2_SESSION_INITIALIZED: Mh,
        IX2_SESSION_STARTED: Fh,
        IX2_TEST_FRAME_RENDERED: Dh,
        IX2_SESSION_STOPPED: xh,
        IX2_EVENT_LISTENER_ADDED: qh,
        IX2_EVENT_STATE_CHANGED: Gh,
        IX2_ANIMATION_FRAME_CHANGED: Vh,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: Bh,
        IX2_VIEWPORT_WIDTH_CHANGED: Uh,
        IX2_MEDIA_QUERIES_DEFINED: Xh,
      } = Ph.IX2EngineActionTypes,
      ms = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1,
      },
      kh = 20,
      Wh = (e = ms, t) => {
        switch (t.type) {
          case Mh: {
            let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
            return (0, qe.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
          }
          case Fh:
            return (0, qe.set)(e, "active", !0);
          case Dh: {
            let {
              payload: { step: n = kh },
            } = t;
            return (0, qe.set)(e, "tick", e.tick + n);
          }
          case xh:
            return ms;
          case Vh: {
            let {
              payload: { now: n },
            } = t;
            return (0, qe.set)(e, "tick", n);
          }
          case qh: {
            let n = (0, qe.addLast)(e.eventListeners, t.payload);
            return (0, qe.set)(e, "eventListeners", n);
          }
          case Gh: {
            let { stateKey: n, newState: r } = t.payload;
            return (0, qe.setIn)(e, ["eventState", n], r);
          }
          case Bh: {
            let { actionListId: n, isPlaying: r } = t.payload;
            return (0, qe.setIn)(e, ["playbackState", n], r);
          }
          case Uh: {
            let { width: n, mediaQueries: r } = t.payload,
              a = r.length,
              i = null;
            for (let o = 0; o < a; o++) {
              let { key: s, min: u, max: f } = r[o];
              if (n >= u && n <= f) {
                i = s;
                break;
              }
            }
            return (0, qe.merge)(e, { viewportWidth: n, mediaQueryKey: i });
          }
          case Xh:
            return (0, qe.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
  });
  var As = c((u7, bs) => {
    function Hh() {
      (this.__data__ = []), (this.size = 0);
    }
    bs.exports = Hh;
  });
  var An = c((c7, Ss) => {
    function Yh(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Ss.exports = Yh;
  });
  var Yt = c((l7, Rs) => {
    var zh = An();
    function Qh(e, t) {
      for (var n = e.length; n--; ) if (zh(e[n][0], t)) return n;
      return -1;
    }
    Rs.exports = Qh;
  });
  var Cs = c((f7, Ls) => {
    var Kh = Yt(),
      jh = Array.prototype,
      $h = jh.splice;
    function Zh(e) {
      var t = this.__data__,
        n = Kh(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : $h.call(t, n, 1), --this.size, !0;
    }
    Ls.exports = Zh;
  });
  var ws = c((d7, Ns) => {
    var Jh = Yt();
    function eT(e) {
      var t = this.__data__,
        n = Jh(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    Ns.exports = eT;
  });
  var Ms = c((p7, Ps) => {
    var tT = Yt();
    function nT(e) {
      return tT(this.__data__, e) > -1;
    }
    Ps.exports = nT;
  });
  var Ds = c((E7, Fs) => {
    var rT = Yt();
    function iT(e, t) {
      var n = this.__data__,
        r = rT(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    Fs.exports = iT;
  });
  var zt = c((g7, xs) => {
    var aT = As(),
      oT = Cs(),
      sT = ws(),
      uT = Ms(),
      cT = Ds();
    function Ot(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ot.prototype.clear = aT;
    Ot.prototype.delete = oT;
    Ot.prototype.get = sT;
    Ot.prototype.has = uT;
    Ot.prototype.set = cT;
    xs.exports = Ot;
  });
  var Gs = c((I7, qs) => {
    var lT = zt();
    function fT() {
      (this.__data__ = new lT()), (this.size = 0);
    }
    qs.exports = fT;
  });
  var Bs = c((y7, Vs) => {
    function dT(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    Vs.exports = dT;
  });
  var Xs = c((h7, Us) => {
    function pT(e) {
      return this.__data__.get(e);
    }
    Us.exports = pT;
  });
  var Ws = c((T7, ks) => {
    function ET(e) {
      return this.__data__.has(e);
    }
    ks.exports = ET;
  });
  var Ge = c((v7, Hs) => {
    function gT(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Hs.exports = gT;
  });
  var ni = c((_7, Ys) => {
    var IT = Ke(),
      yT = Ge(),
      hT = "[object AsyncFunction]",
      TT = "[object Function]",
      vT = "[object GeneratorFunction]",
      _T = "[object Proxy]";
    function mT(e) {
      if (!yT(e)) return !1;
      var t = IT(e);
      return t == TT || t == vT || t == hT || t == _T;
    }
    Ys.exports = mT;
  });
  var Qs = c((m7, zs) => {
    var OT = we(),
      bT = OT["__core-js_shared__"];
    zs.exports = bT;
  });
  var $s = c((O7, js) => {
    var ri = Qs(),
      Ks = (function () {
        var e = /[^.]+$/.exec((ri && ri.keys && ri.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function AT(e) {
      return !!Ks && Ks in e;
    }
    js.exports = AT;
  });
  var ii = c((b7, Zs) => {
    var ST = Function.prototype,
      RT = ST.toString;
    function LT(e) {
      if (e != null) {
        try {
          return RT.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Zs.exports = LT;
  });
  var eu = c((A7, Js) => {
    var CT = ni(),
      NT = $s(),
      wT = Ge(),
      PT = ii(),
      MT = /[\\^$.*+?()[\]{}|]/g,
      FT = /^\[object .+?Constructor\]$/,
      DT = Function.prototype,
      xT = Object.prototype,
      qT = DT.toString,
      GT = xT.hasOwnProperty,
      VT = RegExp(
        "^" +
          qT
            .call(GT)
            .replace(MT, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function BT(e) {
      if (!wT(e) || NT(e)) return !1;
      var t = CT(e) ? VT : FT;
      return t.test(PT(e));
    }
    Js.exports = BT;
  });
  var nu = c((S7, tu) => {
    function UT(e, t) {
      return e?.[t];
    }
    tu.exports = UT;
  });
  var je = c((R7, ru) => {
    var XT = eu(),
      kT = nu();
    function WT(e, t) {
      var n = kT(e, t);
      return XT(n) ? n : void 0;
    }
    ru.exports = WT;
  });
  var Sn = c((L7, iu) => {
    var HT = je(),
      YT = we(),
      zT = HT(YT, "Map");
    iu.exports = zT;
  });
  var Qt = c((C7, au) => {
    var QT = je(),
      KT = QT(Object, "create");
    au.exports = KT;
  });
  var uu = c((N7, su) => {
    var ou = Qt();
    function jT() {
      (this.__data__ = ou ? ou(null) : {}), (this.size = 0);
    }
    su.exports = jT;
  });
  var lu = c((w7, cu) => {
    function $T(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    cu.exports = $T;
  });
  var du = c((P7, fu) => {
    var ZT = Qt(),
      JT = "__lodash_hash_undefined__",
      ev = Object.prototype,
      tv = ev.hasOwnProperty;
    function nv(e) {
      var t = this.__data__;
      if (ZT) {
        var n = t[e];
        return n === JT ? void 0 : n;
      }
      return tv.call(t, e) ? t[e] : void 0;
    }
    fu.exports = nv;
  });
  var Eu = c((M7, pu) => {
    var rv = Qt(),
      iv = Object.prototype,
      av = iv.hasOwnProperty;
    function ov(e) {
      var t = this.__data__;
      return rv ? t[e] !== void 0 : av.call(t, e);
    }
    pu.exports = ov;
  });
  var Iu = c((F7, gu) => {
    var sv = Qt(),
      uv = "__lodash_hash_undefined__";
    function cv(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = sv && t === void 0 ? uv : t),
        this
      );
    }
    gu.exports = cv;
  });
  var hu = c((D7, yu) => {
    var lv = uu(),
      fv = lu(),
      dv = du(),
      pv = Eu(),
      Ev = Iu();
    function bt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    bt.prototype.clear = lv;
    bt.prototype.delete = fv;
    bt.prototype.get = dv;
    bt.prototype.has = pv;
    bt.prototype.set = Ev;
    yu.exports = bt;
  });
  var _u = c((x7, vu) => {
    var Tu = hu(),
      gv = zt(),
      Iv = Sn();
    function yv() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Tu(),
          map: new (Iv || gv)(),
          string: new Tu(),
        });
    }
    vu.exports = yv;
  });
  var Ou = c((q7, mu) => {
    function hv(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    mu.exports = hv;
  });
  var Kt = c((G7, bu) => {
    var Tv = Ou();
    function vv(e, t) {
      var n = e.__data__;
      return Tv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    bu.exports = vv;
  });
  var Su = c((V7, Au) => {
    var _v = Kt();
    function mv(e) {
      var t = _v(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Au.exports = mv;
  });
  var Lu = c((B7, Ru) => {
    var Ov = Kt();
    function bv(e) {
      return Ov(this, e).get(e);
    }
    Ru.exports = bv;
  });
  var Nu = c((U7, Cu) => {
    var Av = Kt();
    function Sv(e) {
      return Av(this, e).has(e);
    }
    Cu.exports = Sv;
  });
  var Pu = c((X7, wu) => {
    var Rv = Kt();
    function Lv(e, t) {
      var n = Rv(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    wu.exports = Lv;
  });
  var Rn = c((k7, Mu) => {
    var Cv = _u(),
      Nv = Su(),
      wv = Lu(),
      Pv = Nu(),
      Mv = Pu();
    function At(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    At.prototype.clear = Cv;
    At.prototype.delete = Nv;
    At.prototype.get = wv;
    At.prototype.has = Pv;
    At.prototype.set = Mv;
    Mu.exports = At;
  });
  var Du = c((W7, Fu) => {
    var Fv = zt(),
      Dv = Sn(),
      xv = Rn(),
      qv = 200;
    function Gv(e, t) {
      var n = this.__data__;
      if (n instanceof Fv) {
        var r = n.__data__;
        if (!Dv || r.length < qv - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new xv(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    Fu.exports = Gv;
  });
  var ai = c((H7, xu) => {
    var Vv = zt(),
      Bv = Gs(),
      Uv = Bs(),
      Xv = Xs(),
      kv = Ws(),
      Wv = Du();
    function St(e) {
      var t = (this.__data__ = new Vv(e));
      this.size = t.size;
    }
    St.prototype.clear = Bv;
    St.prototype.delete = Uv;
    St.prototype.get = Xv;
    St.prototype.has = kv;
    St.prototype.set = Wv;
    xu.exports = St;
  });
  var Gu = c((Y7, qu) => {
    var Hv = "__lodash_hash_undefined__";
    function Yv(e) {
      return this.__data__.set(e, Hv), this;
    }
    qu.exports = Yv;
  });
  var Bu = c((z7, Vu) => {
    function zv(e) {
      return this.__data__.has(e);
    }
    Vu.exports = zv;
  });
  var Xu = c((Q7, Uu) => {
    var Qv = Rn(),
      Kv = Gu(),
      jv = Bu();
    function Ln(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new Qv(); ++t < n; ) this.add(e[t]);
    }
    Ln.prototype.add = Ln.prototype.push = Kv;
    Ln.prototype.has = jv;
    Uu.exports = Ln;
  });
  var Wu = c((K7, ku) => {
    function $v(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    ku.exports = $v;
  });
  var Yu = c((j7, Hu) => {
    function Zv(e, t) {
      return e.has(t);
    }
    Hu.exports = Zv;
  });
  var oi = c(($7, zu) => {
    var Jv = Xu(),
      e_ = Wu(),
      t_ = Yu(),
      n_ = 1,
      r_ = 2;
    function i_(e, t, n, r, a, i) {
      var o = n & n_,
        s = e.length,
        u = t.length;
      if (s != u && !(o && u > s)) return !1;
      var f = i.get(e),
        y = i.get(t);
      if (f && y) return f == t && y == e;
      var E = -1,
        d = !0,
        g = n & r_ ? new Jv() : void 0;
      for (i.set(e, t), i.set(t, e); ++E < s; ) {
        var _ = e[E],
          v = t[E];
        if (r) var A = o ? r(v, _, E, t, e, i) : r(_, v, E, e, t, i);
        if (A !== void 0) {
          if (A) continue;
          d = !1;
          break;
        }
        if (g) {
          if (
            !e_(t, function (h, S) {
              if (!t_(g, S) && (_ === h || a(_, h, n, r, i))) return g.push(S);
            })
          ) {
            d = !1;
            break;
          }
        } else if (!(_ === v || a(_, v, n, r, i))) {
          d = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), d;
    }
    zu.exports = i_;
  });
  var Ku = c((Z7, Qu) => {
    var a_ = we(),
      o_ = a_.Uint8Array;
    Qu.exports = o_;
  });
  var $u = c((J7, ju) => {
    function s_(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, a) {
          n[++t] = [a, r];
        }),
        n
      );
    }
    ju.exports = s_;
  });
  var Ju = c((eF, Zu) => {
    function u_(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    Zu.exports = u_;
  });
  var ic = c((tF, rc) => {
    var ec = Tt(),
      tc = Ku(),
      c_ = An(),
      l_ = oi(),
      f_ = $u(),
      d_ = Ju(),
      p_ = 1,
      E_ = 2,
      g_ = "[object Boolean]",
      I_ = "[object Date]",
      y_ = "[object Error]",
      h_ = "[object Map]",
      T_ = "[object Number]",
      v_ = "[object RegExp]",
      __ = "[object Set]",
      m_ = "[object String]",
      O_ = "[object Symbol]",
      b_ = "[object ArrayBuffer]",
      A_ = "[object DataView]",
      nc = ec ? ec.prototype : void 0,
      si = nc ? nc.valueOf : void 0;
    function S_(e, t, n, r, a, i, o) {
      switch (n) {
        case A_:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case b_:
          return !(e.byteLength != t.byteLength || !i(new tc(e), new tc(t)));
        case g_:
        case I_:
        case T_:
          return c_(+e, +t);
        case y_:
          return e.name == t.name && e.message == t.message;
        case v_:
        case m_:
          return e == t + "";
        case h_:
          var s = f_;
        case __:
          var u = r & p_;
          if ((s || (s = d_), e.size != t.size && !u)) return !1;
          var f = o.get(e);
          if (f) return f == t;
          (r |= E_), o.set(e, t);
          var y = l_(s(e), s(t), r, a, i, o);
          return o.delete(e), y;
        case O_:
          if (si) return si.call(e) == si.call(t);
      }
      return !1;
    }
    rc.exports = S_;
  });
  var Cn = c((nF, ac) => {
    function R_(e, t) {
      for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
      return e;
    }
    ac.exports = R_;
  });
  var ge = c((rF, oc) => {
    var L_ = Array.isArray;
    oc.exports = L_;
  });
  var ui = c((iF, sc) => {
    var C_ = Cn(),
      N_ = ge();
    function w_(e, t, n) {
      var r = t(e);
      return N_(e) ? r : C_(r, n(e));
    }
    sc.exports = w_;
  });
  var cc = c((aF, uc) => {
    function P_(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
        var o = e[n];
        t(o, n, e) && (i[a++] = o);
      }
      return i;
    }
    uc.exports = P_;
  });
  var ci = c((oF, lc) => {
    function M_() {
      return [];
    }
    lc.exports = M_;
  });
  var li = c((sF, dc) => {
    var F_ = cc(),
      D_ = ci(),
      x_ = Object.prototype,
      q_ = x_.propertyIsEnumerable,
      fc = Object.getOwnPropertySymbols,
      G_ = fc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                F_(fc(e), function (t) {
                  return q_.call(e, t);
                }));
          }
        : D_;
    dc.exports = G_;
  });
  var Ec = c((uF, pc) => {
    function V_(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    pc.exports = V_;
  });
  var Ic = c((cF, gc) => {
    var B_ = Ke(),
      U_ = We(),
      X_ = "[object Arguments]";
    function k_(e) {
      return U_(e) && B_(e) == X_;
    }
    gc.exports = k_;
  });
  var jt = c((lF, Tc) => {
    var yc = Ic(),
      W_ = We(),
      hc = Object.prototype,
      H_ = hc.hasOwnProperty,
      Y_ = hc.propertyIsEnumerable,
      z_ = yc(
        (function () {
          return arguments;
        })()
      )
        ? yc
        : function (e) {
            return W_(e) && H_.call(e, "callee") && !Y_.call(e, "callee");
          };
    Tc.exports = z_;
  });
  var _c = c((fF, vc) => {
    function Q_() {
      return !1;
    }
    vc.exports = Q_;
  });
  var Nn = c(($t, Rt) => {
    var K_ = we(),
      j_ = _c(),
      bc = typeof $t == "object" && $t && !$t.nodeType && $t,
      mc = bc && typeof Rt == "object" && Rt && !Rt.nodeType && Rt,
      $_ = mc && mc.exports === bc,
      Oc = $_ ? K_.Buffer : void 0,
      Z_ = Oc ? Oc.isBuffer : void 0,
      J_ = Z_ || j_;
    Rt.exports = J_;
  });
  var wn = c((dF, Ac) => {
    var em = 9007199254740991,
      tm = /^(?:0|[1-9]\d*)$/;
    function nm(e, t) {
      var n = typeof e;
      return (
        (t = t ?? em),
        !!t &&
          (n == "number" || (n != "symbol" && tm.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Ac.exports = nm;
  });
  var Pn = c((pF, Sc) => {
    var rm = 9007199254740991;
    function im(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= rm;
    }
    Sc.exports = im;
  });
  var Lc = c((EF, Rc) => {
    var am = Ke(),
      om = Pn(),
      sm = We(),
      um = "[object Arguments]",
      cm = "[object Array]",
      lm = "[object Boolean]",
      fm = "[object Date]",
      dm = "[object Error]",
      pm = "[object Function]",
      Em = "[object Map]",
      gm = "[object Number]",
      Im = "[object Object]",
      ym = "[object RegExp]",
      hm = "[object Set]",
      Tm = "[object String]",
      vm = "[object WeakMap]",
      _m = "[object ArrayBuffer]",
      mm = "[object DataView]",
      Om = "[object Float32Array]",
      bm = "[object Float64Array]",
      Am = "[object Int8Array]",
      Sm = "[object Int16Array]",
      Rm = "[object Int32Array]",
      Lm = "[object Uint8Array]",
      Cm = "[object Uint8ClampedArray]",
      Nm = "[object Uint16Array]",
      wm = "[object Uint32Array]",
      re = {};
    re[Om] =
      re[bm] =
      re[Am] =
      re[Sm] =
      re[Rm] =
      re[Lm] =
      re[Cm] =
      re[Nm] =
      re[wm] =
        !0;
    re[um] =
      re[cm] =
      re[_m] =
      re[lm] =
      re[mm] =
      re[fm] =
      re[dm] =
      re[pm] =
      re[Em] =
      re[gm] =
      re[Im] =
      re[ym] =
      re[hm] =
      re[Tm] =
      re[vm] =
        !1;
    function Pm(e) {
      return sm(e) && om(e.length) && !!re[am(e)];
    }
    Rc.exports = Pm;
  });
  var Nc = c((gF, Cc) => {
    function Mm(e) {
      return function (t) {
        return e(t);
      };
    }
    Cc.exports = Mm;
  });
  var Pc = c((Zt, Lt) => {
    var Fm = Cr(),
      wc = typeof Zt == "object" && Zt && !Zt.nodeType && Zt,
      Jt = wc && typeof Lt == "object" && Lt && !Lt.nodeType && Lt,
      Dm = Jt && Jt.exports === wc,
      fi = Dm && Fm.process,
      xm = (function () {
        try {
          var e = Jt && Jt.require && Jt.require("util").types;
          return e || (fi && fi.binding && fi.binding("util"));
        } catch {}
      })();
    Lt.exports = xm;
  });
  var Mn = c((IF, Dc) => {
    var qm = Lc(),
      Gm = Nc(),
      Mc = Pc(),
      Fc = Mc && Mc.isTypedArray,
      Vm = Fc ? Gm(Fc) : qm;
    Dc.exports = Vm;
  });
  var di = c((yF, xc) => {
    var Bm = Ec(),
      Um = jt(),
      Xm = ge(),
      km = Nn(),
      Wm = wn(),
      Hm = Mn(),
      Ym = Object.prototype,
      zm = Ym.hasOwnProperty;
    function Qm(e, t) {
      var n = Xm(e),
        r = !n && Um(e),
        a = !n && !r && km(e),
        i = !n && !r && !a && Hm(e),
        o = n || r || a || i,
        s = o ? Bm(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || zm.call(e, f)) &&
          !(
            o &&
            (f == "length" ||
              (a && (f == "offset" || f == "parent")) ||
              (i &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              Wm(f, u))
          ) &&
          s.push(f);
      return s;
    }
    xc.exports = Qm;
  });
  var Fn = c((hF, qc) => {
    var Km = Object.prototype;
    function jm(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || Km;
      return e === n;
    }
    qc.exports = jm;
  });
  var Vc = c((TF, Gc) => {
    var $m = Nr(),
      Zm = $m(Object.keys, Object);
    Gc.exports = Zm;
  });
  var Dn = c((vF, Bc) => {
    var Jm = Fn(),
      eO = Vc(),
      tO = Object.prototype,
      nO = tO.hasOwnProperty;
    function rO(e) {
      if (!Jm(e)) return eO(e);
      var t = [];
      for (var n in Object(e)) nO.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    Bc.exports = rO;
  });
  var st = c((_F, Uc) => {
    var iO = ni(),
      aO = Pn();
    function oO(e) {
      return e != null && aO(e.length) && !iO(e);
    }
    Uc.exports = oO;
  });
  var en = c((mF, Xc) => {
    var sO = di(),
      uO = Dn(),
      cO = st();
    function lO(e) {
      return cO(e) ? sO(e) : uO(e);
    }
    Xc.exports = lO;
  });
  var Wc = c((OF, kc) => {
    var fO = ui(),
      dO = li(),
      pO = en();
    function EO(e) {
      return fO(e, pO, dO);
    }
    kc.exports = EO;
  });
  var zc = c((bF, Yc) => {
    var Hc = Wc(),
      gO = 1,
      IO = Object.prototype,
      yO = IO.hasOwnProperty;
    function hO(e, t, n, r, a, i) {
      var o = n & gO,
        s = Hc(e),
        u = s.length,
        f = Hc(t),
        y = f.length;
      if (u != y && !o) return !1;
      for (var E = u; E--; ) {
        var d = s[E];
        if (!(o ? d in t : yO.call(t, d))) return !1;
      }
      var g = i.get(e),
        _ = i.get(t);
      if (g && _) return g == t && _ == e;
      var v = !0;
      i.set(e, t), i.set(t, e);
      for (var A = o; ++E < u; ) {
        d = s[E];
        var h = e[d],
          S = t[d];
        if (r) var O = o ? r(S, h, d, t, e, i) : r(h, S, d, e, t, i);
        if (!(O === void 0 ? h === S || a(h, S, n, r, i) : O)) {
          v = !1;
          break;
        }
        A || (A = d == "constructor");
      }
      if (v && !A) {
        var L = e.constructor,
          w = t.constructor;
        L != w &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof L == "function" &&
            L instanceof L &&
            typeof w == "function" &&
            w instanceof w
          ) &&
          (v = !1);
      }
      return i.delete(e), i.delete(t), v;
    }
    Yc.exports = hO;
  });
  var Kc = c((AF, Qc) => {
    var TO = je(),
      vO = we(),
      _O = TO(vO, "DataView");
    Qc.exports = _O;
  });
  var $c = c((SF, jc) => {
    var mO = je(),
      OO = we(),
      bO = mO(OO, "Promise");
    jc.exports = bO;
  });
  var Jc = c((RF, Zc) => {
    var AO = je(),
      SO = we(),
      RO = AO(SO, "Set");
    Zc.exports = RO;
  });
  var pi = c((LF, el) => {
    var LO = je(),
      CO = we(),
      NO = LO(CO, "WeakMap");
    el.exports = NO;
  });
  var xn = c((CF, sl) => {
    var Ei = Kc(),
      gi = Sn(),
      Ii = $c(),
      yi = Jc(),
      hi = pi(),
      ol = Ke(),
      Ct = ii(),
      tl = "[object Map]",
      wO = "[object Object]",
      nl = "[object Promise]",
      rl = "[object Set]",
      il = "[object WeakMap]",
      al = "[object DataView]",
      PO = Ct(Ei),
      MO = Ct(gi),
      FO = Ct(Ii),
      DO = Ct(yi),
      xO = Ct(hi),
      ut = ol;
    ((Ei && ut(new Ei(new ArrayBuffer(1))) != al) ||
      (gi && ut(new gi()) != tl) ||
      (Ii && ut(Ii.resolve()) != nl) ||
      (yi && ut(new yi()) != rl) ||
      (hi && ut(new hi()) != il)) &&
      (ut = function (e) {
        var t = ol(e),
          n = t == wO ? e.constructor : void 0,
          r = n ? Ct(n) : "";
        if (r)
          switch (r) {
            case PO:
              return al;
            case MO:
              return tl;
            case FO:
              return nl;
            case DO:
              return rl;
            case xO:
              return il;
          }
        return t;
      });
    sl.exports = ut;
  });
  var gl = c((NF, El) => {
    var Ti = ai(),
      qO = oi(),
      GO = ic(),
      VO = zc(),
      ul = xn(),
      cl = ge(),
      ll = Nn(),
      BO = Mn(),
      UO = 1,
      fl = "[object Arguments]",
      dl = "[object Array]",
      qn = "[object Object]",
      XO = Object.prototype,
      pl = XO.hasOwnProperty;
    function kO(e, t, n, r, a, i) {
      var o = cl(e),
        s = cl(t),
        u = o ? dl : ul(e),
        f = s ? dl : ul(t);
      (u = u == fl ? qn : u), (f = f == fl ? qn : f);
      var y = u == qn,
        E = f == qn,
        d = u == f;
      if (d && ll(e)) {
        if (!ll(t)) return !1;
        (o = !0), (y = !1);
      }
      if (d && !y)
        return (
          i || (i = new Ti()),
          o || BO(e) ? qO(e, t, n, r, a, i) : GO(e, t, u, n, r, a, i)
        );
      if (!(n & UO)) {
        var g = y && pl.call(e, "__wrapped__"),
          _ = E && pl.call(t, "__wrapped__");
        if (g || _) {
          var v = g ? e.value() : e,
            A = _ ? t.value() : t;
          return i || (i = new Ti()), a(v, A, n, r, i);
        }
      }
      return d ? (i || (i = new Ti()), VO(e, t, n, r, a, i)) : !1;
    }
    El.exports = kO;
  });
  var vi = c((wF, hl) => {
    var WO = gl(),
      Il = We();
    function yl(e, t, n, r, a) {
      return e === t
        ? !0
        : e == null || t == null || (!Il(e) && !Il(t))
        ? e !== e && t !== t
        : WO(e, t, n, r, yl, a);
    }
    hl.exports = yl;
  });
  var vl = c((PF, Tl) => {
    var HO = ai(),
      YO = vi(),
      zO = 1,
      QO = 2;
    function KO(e, t, n, r) {
      var a = n.length,
        i = a,
        o = !r;
      if (e == null) return !i;
      for (e = Object(e); a--; ) {
        var s = n[a];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++a < i; ) {
        s = n[a];
        var u = s[0],
          f = e[u],
          y = s[1];
        if (o && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var E = new HO();
          if (r) var d = r(f, y, u, e, t, E);
          if (!(d === void 0 ? YO(y, f, zO | QO, r, E) : d)) return !1;
        }
      }
      return !0;
    }
    Tl.exports = KO;
  });
  var _i = c((MF, _l) => {
    var jO = Ge();
    function $O(e) {
      return e === e && !jO(e);
    }
    _l.exports = $O;
  });
  var Ol = c((FF, ml) => {
    var ZO = _i(),
      JO = en();
    function eb(e) {
      for (var t = JO(e), n = t.length; n--; ) {
        var r = t[n],
          a = e[r];
        t[n] = [r, a, ZO(a)];
      }
      return t;
    }
    ml.exports = eb;
  });
  var mi = c((DF, bl) => {
    function tb(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    bl.exports = tb;
  });
  var Sl = c((xF, Al) => {
    var nb = vl(),
      rb = Ol(),
      ib = mi();
    function ab(e) {
      var t = rb(e);
      return t.length == 1 && t[0][2]
        ? ib(t[0][0], t[0][1])
        : function (n) {
            return n === e || nb(n, e, t);
          };
    }
    Al.exports = ab;
  });
  var tn = c((qF, Rl) => {
    var ob = Ke(),
      sb = We(),
      ub = "[object Symbol]";
    function cb(e) {
      return typeof e == "symbol" || (sb(e) && ob(e) == ub);
    }
    Rl.exports = cb;
  });
  var Gn = c((GF, Ll) => {
    var lb = ge(),
      fb = tn(),
      db = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      pb = /^\w*$/;
    function Eb(e, t) {
      if (lb(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        fb(e)
        ? !0
        : pb.test(e) || !db.test(e) || (t != null && e in Object(t));
    }
    Ll.exports = Eb;
  });
  var wl = c((VF, Nl) => {
    var Cl = Rn(),
      gb = "Expected a function";
    function Oi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(gb);
      var n = function () {
        var r = arguments,
          a = t ? t.apply(this, r) : r[0],
          i = n.cache;
        if (i.has(a)) return i.get(a);
        var o = e.apply(this, r);
        return (n.cache = i.set(a, o) || i), o;
      };
      return (n.cache = new (Oi.Cache || Cl)()), n;
    }
    Oi.Cache = Cl;
    Nl.exports = Oi;
  });
  var Ml = c((BF, Pl) => {
    var Ib = wl(),
      yb = 500;
    function hb(e) {
      var t = Ib(e, function (r) {
          return n.size === yb && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    Pl.exports = hb;
  });
  var Dl = c((UF, Fl) => {
    var Tb = Ml(),
      vb =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      _b = /\\(\\)?/g,
      mb = Tb(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(vb, function (n, r, a, i) {
            t.push(a ? i.replace(_b, "$1") : r || n);
          }),
          t
        );
      });
    Fl.exports = mb;
  });
  var bi = c((XF, xl) => {
    function Ob(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
        a[n] = t(e[n], n, e);
      return a;
    }
    xl.exports = Ob;
  });
  var Xl = c((kF, Ul) => {
    var ql = Tt(),
      bb = bi(),
      Ab = ge(),
      Sb = tn(),
      Rb = 1 / 0,
      Gl = ql ? ql.prototype : void 0,
      Vl = Gl ? Gl.toString : void 0;
    function Bl(e) {
      if (typeof e == "string") return e;
      if (Ab(e)) return bb(e, Bl) + "";
      if (Sb(e)) return Vl ? Vl.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -Rb ? "-0" : t;
    }
    Ul.exports = Bl;
  });
  var Wl = c((WF, kl) => {
    var Lb = Xl();
    function Cb(e) {
      return e == null ? "" : Lb(e);
    }
    kl.exports = Cb;
  });
  var nn = c((HF, Hl) => {
    var Nb = ge(),
      wb = Gn(),
      Pb = Dl(),
      Mb = Wl();
    function Fb(e, t) {
      return Nb(e) ? e : wb(e, t) ? [e] : Pb(Mb(e));
    }
    Hl.exports = Fb;
  });
  var Nt = c((YF, Yl) => {
    var Db = tn(),
      xb = 1 / 0;
    function qb(e) {
      if (typeof e == "string" || Db(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -xb ? "-0" : t;
    }
    Yl.exports = qb;
  });
  var Vn = c((zF, zl) => {
    var Gb = nn(),
      Vb = Nt();
    function Bb(e, t) {
      t = Gb(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[Vb(t[n++])];
      return n && n == r ? e : void 0;
    }
    zl.exports = Bb;
  });
  var Bn = c((QF, Ql) => {
    var Ub = Vn();
    function Xb(e, t, n) {
      var r = e == null ? void 0 : Ub(e, t);
      return r === void 0 ? n : r;
    }
    Ql.exports = Xb;
  });
  var jl = c((KF, Kl) => {
    function kb(e, t) {
      return e != null && t in Object(e);
    }
    Kl.exports = kb;
  });
  var Zl = c((jF, $l) => {
    var Wb = nn(),
      Hb = jt(),
      Yb = ge(),
      zb = wn(),
      Qb = Pn(),
      Kb = Nt();
    function jb(e, t, n) {
      t = Wb(t, e);
      for (var r = -1, a = t.length, i = !1; ++r < a; ) {
        var o = Kb(t[r]);
        if (!(i = e != null && n(e, o))) break;
        e = e[o];
      }
      return i || ++r != a
        ? i
        : ((a = e == null ? 0 : e.length),
          !!a && Qb(a) && zb(o, a) && (Yb(e) || Hb(e)));
    }
    $l.exports = jb;
  });
  var ef = c(($F, Jl) => {
    var $b = jl(),
      Zb = Zl();
    function Jb(e, t) {
      return e != null && Zb(e, t, $b);
    }
    Jl.exports = Jb;
  });
  var nf = c((ZF, tf) => {
    var eA = vi(),
      tA = Bn(),
      nA = ef(),
      rA = Gn(),
      iA = _i(),
      aA = mi(),
      oA = Nt(),
      sA = 1,
      uA = 2;
    function cA(e, t) {
      return rA(e) && iA(t)
        ? aA(oA(e), t)
        : function (n) {
            var r = tA(n, e);
            return r === void 0 && r === t ? nA(n, e) : eA(t, r, sA | uA);
          };
    }
    tf.exports = cA;
  });
  var Un = c((JF, rf) => {
    function lA(e) {
      return e;
    }
    rf.exports = lA;
  });
  var Ai = c((e8, af) => {
    function fA(e) {
      return function (t) {
        return t?.[e];
      };
    }
    af.exports = fA;
  });
  var sf = c((t8, of) => {
    var dA = Vn();
    function pA(e) {
      return function (t) {
        return dA(t, e);
      };
    }
    of.exports = pA;
  });
  var cf = c((n8, uf) => {
    var EA = Ai(),
      gA = sf(),
      IA = Gn(),
      yA = Nt();
    function hA(e) {
      return IA(e) ? EA(yA(e)) : gA(e);
    }
    uf.exports = hA;
  });
  var $e = c((r8, lf) => {
    var TA = Sl(),
      vA = nf(),
      _A = Un(),
      mA = ge(),
      OA = cf();
    function bA(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? _A
        : typeof e == "object"
        ? mA(e)
          ? vA(e[0], e[1])
          : TA(e)
        : OA(e);
    }
    lf.exports = bA;
  });
  var Si = c((i8, ff) => {
    var AA = $e(),
      SA = st(),
      RA = en();
    function LA(e) {
      return function (t, n, r) {
        var a = Object(t);
        if (!SA(t)) {
          var i = AA(n, 3);
          (t = RA(t)),
            (n = function (s) {
              return i(a[s], s, a);
            });
        }
        var o = e(t, n, r);
        return o > -1 ? a[i ? t[o] : o] : void 0;
      };
    }
    ff.exports = LA;
  });
  var Ri = c((a8, df) => {
    function CA(e, t, n, r) {
      for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    df.exports = CA;
  });
  var Ef = c((o8, pf) => {
    var NA = /\s/;
    function wA(e) {
      for (var t = e.length; t-- && NA.test(e.charAt(t)); );
      return t;
    }
    pf.exports = wA;
  });
  var If = c((s8, gf) => {
    var PA = Ef(),
      MA = /^\s+/;
    function FA(e) {
      return e && e.slice(0, PA(e) + 1).replace(MA, "");
    }
    gf.exports = FA;
  });
  var Xn = c((u8, Tf) => {
    var DA = If(),
      yf = Ge(),
      xA = tn(),
      hf = 0 / 0,
      qA = /^[-+]0x[0-9a-f]+$/i,
      GA = /^0b[01]+$/i,
      VA = /^0o[0-7]+$/i,
      BA = parseInt;
    function UA(e) {
      if (typeof e == "number") return e;
      if (xA(e)) return hf;
      if (yf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = yf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = DA(e);
      var n = GA.test(e);
      return n || VA.test(e) ? BA(e.slice(2), n ? 2 : 8) : qA.test(e) ? hf : +e;
    }
    Tf.exports = UA;
  });
  var mf = c((c8, _f) => {
    var XA = Xn(),
      vf = 1 / 0,
      kA = 17976931348623157e292;
    function WA(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = XA(e)), e === vf || e === -vf)) {
        var t = e < 0 ? -1 : 1;
        return t * kA;
      }
      return e === e ? e : 0;
    }
    _f.exports = WA;
  });
  var Li = c((l8, Of) => {
    var HA = mf();
    function YA(e) {
      var t = HA(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    Of.exports = YA;
  });
  var Af = c((f8, bf) => {
    var zA = Ri(),
      QA = $e(),
      KA = Li(),
      jA = Math.max;
    function $A(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = n == null ? 0 : KA(n);
      return a < 0 && (a = jA(r + a, 0)), zA(e, QA(t, 3), a);
    }
    bf.exports = $A;
  });
  var Ci = c((d8, Sf) => {
    var ZA = Si(),
      JA = Af(),
      eS = ZA(JA);
    Sf.exports = eS;
  });
  var Wn = c((Ni) => {
    "use strict";
    Object.defineProperty(Ni, "__esModule", { value: !0 });
    function tS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    tS(Ni, {
      ELEMENT_MATCHES: function () {
        return iS;
      },
      FLEX_PREFIXED: function () {
        return aS;
      },
      IS_BROWSER_ENV: function () {
        return Lf;
      },
      TRANSFORM_PREFIXED: function () {
        return Cf;
      },
      TRANSFORM_STYLE_PREFIXED: function () {
        return oS;
      },
      withBrowser: function () {
        return kn;
      },
    });
    var nS = rS(Ci());
    function rS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Lf = typeof window < "u",
      kn = (e, t) => (Lf ? e() : t),
      iS = kn(() =>
        (0, nS.default)(
          [
            "matches",
            "matchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
            "webkitMatchesSelector",
          ],
          (e) => e in Element.prototype
        )
      ),
      aS = kn(() => {
        let e = document.createElement("i"),
          t = [
            "flex",
            "-webkit-flex",
            "-ms-flexbox",
            "-moz-box",
            "-webkit-box",
          ],
          n = "";
        try {
          let { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a];
            if (((e.style.display = i), e.style.display === i)) return i;
          }
          return n;
        } catch {
          return n;
        }
      }, "flex"),
      Cf = kn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            n = "Transform",
            { length: r } = t;
          for (let a = 0; a < r; a++) {
            let i = t[a] + n;
            if (e.style[i] !== void 0) return i;
          }
        }
        return "transform";
      }, "transform"),
      Rf = Cf.split("transform")[0],
      oS = Rf ? Rf + "TransformStyle" : "transformStyle";
  });
  var wi = c((E8, Ff) => {
    var sS = 4,
      uS = 0.001,
      cS = 1e-7,
      lS = 10,
      rn = 11,
      Hn = 1 / (rn - 1),
      fS = typeof Float32Array == "function";
    function Nf(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function wf(e, t) {
      return 3 * t - 6 * e;
    }
    function Pf(e) {
      return 3 * e;
    }
    function Yn(e, t, n) {
      return ((Nf(t, n) * e + wf(t, n)) * e + Pf(t)) * e;
    }
    function Mf(e, t, n) {
      return 3 * Nf(t, n) * e * e + 2 * wf(t, n) * e + Pf(t);
    }
    function dS(e, t, n, r, a) {
      var i,
        o,
        s = 0;
      do
        (o = t + (n - t) / 2), (i = Yn(o, r, a) - e), i > 0 ? (n = o) : (t = o);
      while (Math.abs(i) > cS && ++s < lS);
      return o;
    }
    function pS(e, t, n, r) {
      for (var a = 0; a < sS; ++a) {
        var i = Mf(t, n, r);
        if (i === 0) return t;
        var o = Yn(t, n, r) - e;
        t -= o / i;
      }
      return t;
    }
    Ff.exports = function (t, n, r, a) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = fS ? new Float32Array(rn) : new Array(rn);
      if (t !== n || r !== a)
        for (var o = 0; o < rn; ++o) i[o] = Yn(o * Hn, t, r);
      function s(u) {
        for (var f = 0, y = 1, E = rn - 1; y !== E && i[y] <= u; ++y) f += Hn;
        --y;
        var d = (u - i[y]) / (i[y + 1] - i[y]),
          g = f + d * Hn,
          _ = Mf(g, t, r);
        return _ >= uS ? pS(u, g, t, r) : _ === 0 ? g : dS(u, f, f + Hn, t, r);
      }
      return function (f) {
        return t === n && r === a
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Yn(s(f), n, a);
      };
    };
  });
  var Mi = c((Pi) => {
    "use strict";
    Object.defineProperty(Pi, "__esModule", { value: !0 });
    function ES(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    ES(Pi, {
      bounce: function () {
        return $S;
      },
      bouncePast: function () {
        return ZS;
      },
      ease: function () {
        return IS;
      },
      easeIn: function () {
        return yS;
      },
      easeInOut: function () {
        return TS;
      },
      easeOut: function () {
        return hS;
      },
      inBack: function () {
        return XS;
      },
      inCirc: function () {
        return GS;
      },
      inCubic: function () {
        return OS;
      },
      inElastic: function () {
        return HS;
      },
      inExpo: function () {
        return DS;
      },
      inOutBack: function () {
        return WS;
      },
      inOutCirc: function () {
        return BS;
      },
      inOutCubic: function () {
        return AS;
      },
      inOutElastic: function () {
        return zS;
      },
      inOutExpo: function () {
        return qS;
      },
      inOutQuad: function () {
        return mS;
      },
      inOutQuart: function () {
        return LS;
      },
      inOutQuint: function () {
        return wS;
      },
      inOutSine: function () {
        return FS;
      },
      inQuad: function () {
        return vS;
      },
      inQuart: function () {
        return SS;
      },
      inQuint: function () {
        return CS;
      },
      inSine: function () {
        return PS;
      },
      outBack: function () {
        return kS;
      },
      outBounce: function () {
        return US;
      },
      outCirc: function () {
        return VS;
      },
      outCubic: function () {
        return bS;
      },
      outElastic: function () {
        return YS;
      },
      outExpo: function () {
        return xS;
      },
      outQuad: function () {
        return _S;
      },
      outQuart: function () {
        return RS;
      },
      outQuint: function () {
        return NS;
      },
      outSine: function () {
        return MS;
      },
      swingFrom: function () {
        return KS;
      },
      swingFromTo: function () {
        return QS;
      },
      swingTo: function () {
        return jS;
      },
    });
    var zn = gS(wi());
    function gS(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var He = 1.70158,
      IS = (0, zn.default)(0.25, 0.1, 0.25, 1),
      yS = (0, zn.default)(0.42, 0, 1, 1),
      hS = (0, zn.default)(0, 0, 0.58, 1),
      TS = (0, zn.default)(0.42, 0, 0.58, 1);
    function vS(e) {
      return Math.pow(e, 2);
    }
    function _S(e) {
      return -(Math.pow(e - 1, 2) - 1);
    }
    function mS(e) {
      return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function OS(e) {
      return Math.pow(e, 3);
    }
    function bS(e) {
      return Math.pow(e - 1, 3) + 1;
    }
    function AS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 3)
        : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function SS(e) {
      return Math.pow(e, 4);
    }
    function RS(e) {
      return -(Math.pow(e - 1, 4) - 1);
    }
    function LS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 4)
        : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function CS(e) {
      return Math.pow(e, 5);
    }
    function NS(e) {
      return Math.pow(e - 1, 5) + 1;
    }
    function wS(e) {
      return (e /= 0.5) < 1
        ? 0.5 * Math.pow(e, 5)
        : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function PS(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function MS(e) {
      return Math.sin(e * (Math.PI / 2));
    }
    function FS(e) {
      return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function DS(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function xS(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function qS(e) {
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (e /= 0.5) < 1
        ? 0.5 * Math.pow(2, 10 * (e - 1))
        : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function GS(e) {
      return -(Math.sqrt(1 - e * e) - 1);
    }
    function VS(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function BS(e) {
      return (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function US(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function XS(e) {
      let t = He;
      return e * e * ((t + 1) * e - t);
    }
    function kS(e) {
      let t = He;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function WS(e) {
      let t = He;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function HS(e) {
      let t = He,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          -(
            r *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / n)
          ));
    }
    function YS(e) {
      let t = He,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : e === 1
        ? 1
        : (n || (n = 0.3),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) +
            1);
    }
    function zS(e) {
      let t = He,
        n = 0,
        r = 1;
      return e === 0
        ? 0
        : (e /= 1 / 2) === 2
        ? 1
        : (n || (n = 0.3 * 1.5),
          r < 1
            ? ((r = 1), (t = n / 4))
            : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
          e < 1
            ? -0.5 *
              (r *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n))
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e - t) * (2 * Math.PI)) / n) *
                0.5 +
              1);
    }
    function QS(e) {
      let t = He;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function KS(e) {
      let t = He;
      return e * e * ((t + 1) * e - t);
    }
    function jS(e) {
      let t = He;
      return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function $S(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function ZS(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
        ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
        : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
  });
  var xi = c((Di) => {
    "use strict";
    Object.defineProperty(Di, "__esModule", { value: !0 });
    function JS(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    JS(Di, {
      applyEasing: function () {
        return i5;
      },
      createBezierEasing: function () {
        return r5;
      },
      optimizeFloat: function () {
        return Fi;
      },
    });
    var Df = n5(Mi()),
      e5 = t5(wi());
    function t5(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function xf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (xf = function (r) {
        return r ? n : t;
      })(e);
    }
    function n5(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = xf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    function Fi(e, t = 5, n = 10) {
      let r = Math.pow(n, t),
        a = Number(Math.round(e * r) / r);
      return Math.abs(a) > 1e-4 ? a : 0;
    }
    function r5(e) {
      return (0, e5.default)(...e);
    }
    function i5(e, t, n) {
      return t === 0
        ? 0
        : t === 1
        ? 1
        : Fi(n ? (t > 0 ? n(t) : t) : t > 0 && e && Df[e] ? Df[e](t) : t);
    }
  });
  var Bf = c((Gi) => {
    "use strict";
    Object.defineProperty(Gi, "__esModule", { value: !0 });
    function a5(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    a5(Gi, {
      createElementState: function () {
        return Vf;
      },
      ixElements: function () {
        return T5;
      },
      mergeActionState: function () {
        return qi;
      },
    });
    var Qn = mt(),
      Gf = me(),
      {
        HTML_ELEMENT: y8,
        PLAIN_OBJECT: o5,
        ABSTRACT_NODE: h8,
        CONFIG_X_VALUE: s5,
        CONFIG_Y_VALUE: u5,
        CONFIG_Z_VALUE: c5,
        CONFIG_VALUE: l5,
        CONFIG_X_UNIT: f5,
        CONFIG_Y_UNIT: d5,
        CONFIG_Z_UNIT: p5,
        CONFIG_UNIT: E5,
      } = Gf.IX2EngineConstants,
      {
        IX2_SESSION_STOPPED: g5,
        IX2_INSTANCE_ADDED: I5,
        IX2_ELEMENT_STATE_CHANGED: y5,
      } = Gf.IX2EngineActionTypes,
      qf = {},
      h5 = "refState",
      T5 = (e = qf, t = {}) => {
        switch (t.type) {
          case g5:
            return qf;
          case I5: {
            let {
                elementId: n,
                element: r,
                origin: a,
                actionItem: i,
                refType: o,
              } = t.payload,
              { actionTypeId: s } = i,
              u = e;
            return (
              (0, Qn.getIn)(u, [n, r]) !== r && (u = Vf(u, r, o, n, i)),
              qi(u, n, s, a, i)
            );
          }
          case y5: {
            let {
              elementId: n,
              actionTypeId: r,
              current: a,
              actionItem: i,
            } = t.payload;
            return qi(e, n, r, a, i);
          }
          default:
            return e;
        }
      };
    function Vf(e, t, n, r, a) {
      let i =
        n === o5 ? (0, Qn.getIn)(a, ["config", "target", "objectId"]) : null;
      return (0, Qn.mergeIn)(e, [r], { id: r, ref: t, refId: i, refType: n });
    }
    function qi(e, t, n, r, a) {
      let i = _5(a),
        o = [t, h5, n];
      return (0, Qn.mergeIn)(e, o, r, i);
    }
    var v5 = [
      [s5, f5],
      [u5, d5],
      [c5, p5],
      [l5, E5],
    ];
    function _5(e) {
      let { config: t } = e;
      return v5.reduce((n, r) => {
        let a = r[0],
          i = r[1],
          o = t[a],
          s = t[i];
        return o != null && s != null && (n[i] = s), n;
      }, {});
    }
  });
  var Uf = c((Vi) => {
    "use strict";
    Object.defineProperty(Vi, "__esModule", { value: !0 });
    function m5(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    m5(Vi, {
      clearPlugin: function () {
        return C5;
      },
      createPluginInstance: function () {
        return R5;
      },
      getPluginConfig: function () {
        return O5;
      },
      getPluginDestination: function () {
        return S5;
      },
      getPluginDuration: function () {
        return b5;
      },
      getPluginOrigin: function () {
        return A5;
      },
      renderPlugin: function () {
        return L5;
      },
    });
    var O5 = (e) => e.value,
      b5 = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      A5 = (e) => e || { value: 0 },
      S5 = (e) => ({ value: e.value }),
      R5 = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      L5 = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      C5 = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var kf = c((Bi) => {
    "use strict";
    Object.defineProperty(Bi, "__esModule", { value: !0 });
    function N5(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    N5(Bi, {
      clearPlugin: function () {
        return B5;
      },
      createPluginInstance: function () {
        return G5;
      },
      getPluginConfig: function () {
        return F5;
      },
      getPluginDestination: function () {
        return q5;
      },
      getPluginDuration: function () {
        return D5;
      },
      getPluginOrigin: function () {
        return x5;
      },
      renderPlugin: function () {
        return V5;
      },
    });
    var w5 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      P5 = () => window.Webflow.require("spline"),
      M5 = (e, t) => e.filter((n) => !t.includes(n)),
      F5 = (e, t) => e.value[t],
      D5 = () => null,
      Xf = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      x5 = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let i = Object.keys(e),
            o = M5(r, i);
          return o.length ? o.reduce((u, f) => ((u[f] = Xf[f]), u), e) : e;
        }
        return r.reduce((i, o) => ((i[o] = Xf[o]), i), {});
      },
      q5 = (e) => e.value,
      G5 = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? w5(n) : null;
      },
      V5 = (e, t, n) => {
        let r = P5(),
          a = r.getInstance(e),
          i = n.config.target.objectId,
          o = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = i && s.findObjectById(i);
            if (!u) return;
            let { PLUGIN_SPLINE: f } = t;
            f.positionX != null && (u.position.x = f.positionX),
              f.positionY != null && (u.position.y = f.positionY),
              f.positionZ != null && (u.position.z = f.positionZ),
              f.rotationX != null && (u.rotation.x = f.rotationX),
              f.rotationY != null && (u.rotation.y = f.rotationY),
              f.rotationZ != null && (u.rotation.z = f.rotationZ),
              f.scaleX != null && (u.scale.x = f.scaleX),
              f.scaleY != null && (u.scale.y = f.scaleY),
              f.scaleZ != null && (u.scale.z = f.scaleZ);
          };
        a ? o(a.spline) : r.setLoadHandler(e, o);
      },
      B5 = () => null;
  });
  var Wf = c((ki) => {
    "use strict";
    Object.defineProperty(ki, "__esModule", { value: !0 });
    function U5(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    U5(ki, {
      clearPlugin: function () {
        return j5;
      },
      createPluginInstance: function () {
        return Q5;
      },
      getPluginConfig: function () {
        return W5;
      },
      getPluginDestination: function () {
        return z5;
      },
      getPluginDuration: function () {
        return H5;
      },
      getPluginOrigin: function () {
        return Y5;
      },
      renderPlugin: function () {
        return K5;
      },
    });
    var Ui = "--wf-rive-fit",
      Xi = "--wf-rive-alignment",
      X5 = (e) => document.querySelector(`[data-w-id="${e}"]`),
      k5 = () => window.Webflow.require("rive"),
      W5 = (e, t) => e.value.inputs[t],
      H5 = () => null,
      Y5 = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let a in r) r[a] == null && (n[a] = 0);
        return n;
      },
      z5 = (e) => e.value.inputs ?? {},
      Q5 = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? X5(r) : null;
      },
      K5 = (e, { PLUGIN_RIVE: t }, n) => {
        let r = k5(),
          a = r.getInstance(e),
          i = r.rive.StateMachineInputType,
          { name: o, inputs: s = {} } = n.config.value || {};
        function u(f) {
          if (f.loaded) y();
          else {
            let E = () => {
              y(), f?.off("load", E);
            };
            f?.on("load", E);
          }
          function y() {
            let E = f.stateMachineInputs(o);
            if (E != null) {
              if ((f.isPlaying || f.play(o, !1), Ui in s || Xi in s)) {
                let d = f.layout,
                  g = s[Ui] ?? d.fit,
                  _ = s[Xi] ?? d.alignment;
                (g !== d.fit || _ !== d.alignment) &&
                  (f.layout = d.copyWith({ fit: g, alignment: _ }));
              }
              for (let d in s) {
                if (d === Ui || d === Xi) continue;
                let g = E.find((_) => _.name === d);
                if (g != null)
                  switch (g.type) {
                    case i.Boolean: {
                      if (s[d] != null) {
                        let _ = !!s[d];
                        g.value = _;
                      }
                      break;
                    }
                    case i.Number: {
                      let _ = t[d];
                      _ != null && (g.value = _);
                      break;
                    }
                    case i.Trigger: {
                      s[d] && g.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        a?.rive ? u(a.rive) : r.setLoadHandler(e, u);
      },
      j5 = (e, t) => null;
  });
  var Hi = c((Wi) => {
    "use strict";
    Object.defineProperty(Wi, "__esModule", { value: !0 });
    Object.defineProperty(Wi, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return $5;
      },
    });
    var Hf = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function $5(e) {
      let t,
        n,
        r,
        a = 1,
        i = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Hf[i] == "string" ? Hf[i].toLowerCase() : null) || i;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (n = parseInt(u[1] + u[1], 16)),
            (r = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (a = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (n = parseInt(u.substring(2, 4), 16)),
            (r = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (a = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10)),
          (a = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          E = parseFloat(u[2].replace("%", "")) / 100;
        a = parseFloat(u[3]);
        let d = (1 - Math.abs(2 * E - 1)) * y,
          g = d * (1 - Math.abs(((f / 60) % 2) - 1)),
          _ = E - d / 2,
          v,
          A,
          h;
        f >= 0 && f < 60
          ? ((v = d), (A = g), (h = 0))
          : f >= 60 && f < 120
          ? ((v = g), (A = d), (h = 0))
          : f >= 120 && f < 180
          ? ((v = 0), (A = d), (h = g))
          : f >= 180 && f < 240
          ? ((v = 0), (A = g), (h = d))
          : f >= 240 && f < 300
          ? ((v = g), (A = 0), (h = d))
          : ((v = d), (A = 0), (h = g)),
          (t = Math.round((v + _) * 255)),
          (n = Math.round((A + _) * 255)),
          (r = Math.round((h + _) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(u[0]),
          y = parseFloat(u[1].replace("%", "")) / 100,
          E = parseFloat(u[2].replace("%", "")) / 100,
          d = (1 - Math.abs(2 * E - 1)) * y,
          g = d * (1 - Math.abs(((f / 60) % 2) - 1)),
          _ = E - d / 2,
          v,
          A,
          h;
        f >= 0 && f < 60
          ? ((v = d), (A = g), (h = 0))
          : f >= 60 && f < 120
          ? ((v = g), (A = d), (h = 0))
          : f >= 120 && f < 180
          ? ((v = 0), (A = d), (h = g))
          : f >= 180 && f < 240
          ? ((v = 0), (A = g), (h = d))
          : f >= 240 && f < 300
          ? ((v = g), (A = 0), (h = d))
          : ((v = d), (A = 0), (h = g)),
          (t = Math.round((v + _) * 255)),
          (n = Math.round((A + _) * 255)),
          (r = Math.round((h + _) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: a };
    }
  });
  var Yf = c((Yi) => {
    "use strict";
    Object.defineProperty(Yi, "__esModule", { value: !0 });
    function Z5(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Z5(Yi, {
      clearPlugin: function () {
        return s6;
      },
      createPluginInstance: function () {
        return i6;
      },
      getPluginConfig: function () {
        return e6;
      },
      getPluginDestination: function () {
        return r6;
      },
      getPluginDuration: function () {
        return t6;
      },
      getPluginOrigin: function () {
        return n6;
      },
      renderPlugin: function () {
        return o6;
      },
    });
    var J5 = Hi(),
      e6 = (e, t) => e.value[t],
      t6 = () => null,
      n6 = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          a = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(a, 10) };
        if (n.unit === "%" || n.unit === "-") return { size: parseFloat(a) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, J5.normalizeColor)(a);
      },
      r6 = (e) => e.value,
      i6 = () => null,
      a6 = {
        color: {
          match: ({ red: e, green: t, blue: n, alpha: r }) =>
            [e, t, n, r].every((a) => a != null),
          getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
            `rgba(${e}, ${t}, ${n}, ${r})`,
        },
        size: {
          match: ({ size: e }) => e != null,
          getValue: ({ size: e }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`;
            }
          },
        },
      },
      o6 = (e, t, n) => {
        let {
            target: { objectId: r },
            value: { unit: a },
          } = n.config,
          i = t.PLUGIN_VARIABLE,
          o = Object.values(a6).find((s) => s.match(i, a));
        o && document.documentElement.style.setProperty(r, o.getValue(i, a));
      },
      s6 = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var Qf = c((zi) => {
    "use strict";
    Object.defineProperty(zi, "__esModule", { value: !0 });
    Object.defineProperty(zi, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return d6;
      },
    });
    var Kn = me(),
      u6 = jn(Uf()),
      c6 = jn(kf()),
      l6 = jn(Wf()),
      f6 = jn(Yf());
    function zf(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (zf = function (r) {
        return r ? n : t;
      })(e);
    }
    function jn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = zf(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var d6 = new Map([
      [Kn.ActionTypeConsts.PLUGIN_LOTTIE, { ...u6 }],
      [Kn.ActionTypeConsts.PLUGIN_SPLINE, { ...c6 }],
      [Kn.ActionTypeConsts.PLUGIN_RIVE, { ...l6 }],
      [Kn.ActionTypeConsts.PLUGIN_VARIABLE, { ...f6 }],
    ]);
  });
  var Ki = c((Qi) => {
    "use strict";
    Object.defineProperty(Qi, "__esModule", { value: !0 });
    function p6(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    p6(Qi, {
      clearPlugin: function () {
        return m6;
      },
      createPluginInstance: function () {
        return v6;
      },
      getPluginConfig: function () {
        return I6;
      },
      getPluginDestination: function () {
        return T6;
      },
      getPluginDuration: function () {
        return h6;
      },
      getPluginOrigin: function () {
        return y6;
      },
      isPluginType: function () {
        return g6;
      },
      renderPlugin: function () {
        return _6;
      },
    });
    var E6 = Wn(),
      Kf = Qf();
    function g6(e) {
      return Kf.pluginMethodMap.has(e);
    }
    var ct = (e) => (t) => {
        if (!E6.IS_BROWSER_ENV) return () => null;
        let n = Kf.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      },
      I6 = ct("getPluginConfig"),
      y6 = ct("getPluginOrigin"),
      h6 = ct("getPluginDuration"),
      T6 = ct("getPluginDestination"),
      v6 = ct("createPluginInstance"),
      _6 = ct("renderPlugin"),
      m6 = ct("clearPlugin");
  });
  var $f = c((R8, jf) => {
    function O6(e, t) {
      return e == null || e !== e ? t : e;
    }
    jf.exports = O6;
  });
  var Jf = c((L8, Zf) => {
    function b6(e, t, n, r) {
      var a = -1,
        i = e == null ? 0 : e.length;
      for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
      return n;
    }
    Zf.exports = b6;
  });
  var td = c((C8, ed) => {
    function A6(e) {
      return function (t, n, r) {
        for (var a = -1, i = Object(t), o = r(t), s = o.length; s--; ) {
          var u = o[e ? s : ++a];
          if (n(i[u], u, i) === !1) break;
        }
        return t;
      };
    }
    ed.exports = A6;
  });
  var rd = c((N8, nd) => {
    var S6 = td(),
      R6 = S6();
    nd.exports = R6;
  });
  var ji = c((w8, id) => {
    var L6 = rd(),
      C6 = en();
    function N6(e, t) {
      return e && L6(e, t, C6);
    }
    id.exports = N6;
  });
  var od = c((P8, ad) => {
    var w6 = st();
    function P6(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!w6(n)) return e(n, r);
        for (
          var a = n.length, i = t ? a : -1, o = Object(n);
          (t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

        );
        return n;
      };
    }
    ad.exports = P6;
  });
  var $i = c((M8, sd) => {
    var M6 = ji(),
      F6 = od(),
      D6 = F6(M6);
    sd.exports = D6;
  });
  var cd = c((F8, ud) => {
    function x6(e, t, n, r, a) {
      return (
        a(e, function (i, o, s) {
          n = r ? ((r = !1), i) : t(n, i, o, s);
        }),
        n
      );
    }
    ud.exports = x6;
  });
  var fd = c((D8, ld) => {
    var q6 = Jf(),
      G6 = $i(),
      V6 = $e(),
      B6 = cd(),
      U6 = ge();
    function X6(e, t, n) {
      var r = U6(e) ? q6 : B6,
        a = arguments.length < 3;
      return r(e, V6(t, 4), n, a, G6);
    }
    ld.exports = X6;
  });
  var pd = c((x8, dd) => {
    var k6 = Ri(),
      W6 = $e(),
      H6 = Li(),
      Y6 = Math.max,
      z6 = Math.min;
    function Q6(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var a = r - 1;
      return (
        n !== void 0 &&
          ((a = H6(n)), (a = n < 0 ? Y6(r + a, 0) : z6(a, r - 1))),
        k6(e, W6(t, 3), a, !0)
      );
    }
    dd.exports = Q6;
  });
  var gd = c((q8, Ed) => {
    var K6 = Si(),
      j6 = pd(),
      $6 = K6(j6);
    Ed.exports = $6;
  });
  var yd = c((Zi) => {
    "use strict";
    Object.defineProperty(Zi, "__esModule", { value: !0 });
    Object.defineProperty(Zi, "default", {
      enumerable: !0,
      get: function () {
        return J6;
      },
    });
    function Id(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function Z6(e, t) {
      if (Id(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let a = 0; a < n.length; a++)
        if (!Object.hasOwn(t, n[a]) || !Id(e[n[a]], t[n[a]])) return !1;
      return !0;
    }
    var J6 = Z6;
  });
  var xd = c((sa) => {
    "use strict";
    Object.defineProperty(sa, "__esModule", { value: !0 });
    function e1(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    e1(sa, {
      cleanupHTMLElement: function () {
        return J1;
      },
      clearAllStyles: function () {
        return Z1;
      },
      clearObjectCache: function () {
        return T1;
      },
      getActionListProgress: function () {
        return tR;
      },
      getAffectedElements: function () {
        return aa;
      },
      getComputedStyle: function () {
        return R1;
      },
      getDestinationValues: function () {
        return F1;
      },
      getElementId: function () {
        return O1;
      },
      getInstanceId: function () {
        return _1;
      },
      getInstanceOrigin: function () {
        return N1;
      },
      getItemConfigByKey: function () {
        return M1;
      },
      getMaxDurationItemIndex: function () {
        return Dd;
      },
      getNamespacedParameterId: function () {
        return iR;
      },
      getRenderType: function () {
        return Pd;
      },
      getStyleProp: function () {
        return D1;
      },
      mediaQueriesEqual: function () {
        return oR;
      },
      observeStore: function () {
        return S1;
      },
      reduceListToGroup: function () {
        return nR;
      },
      reifyState: function () {
        return b1;
      },
      renderHTMLElement: function () {
        return x1;
      },
      shallowEqual: function () {
        return Ad.default;
      },
      shouldAllowMediaQuery: function () {
        return aR;
      },
      shouldNamespaceEventParameter: function () {
        return rR;
      },
      stringifyTarget: function () {
        return sR;
      },
    });
    var Ze = er($f()),
      ta = er(fd()),
      ea = er(gd()),
      hd = mt(),
      lt = me(),
      Ad = er(yd()),
      t1 = xi(),
      n1 = Hi(),
      Ue = Ki(),
      ve = Wn();
    function er(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        BACKGROUND: r1,
        TRANSFORM: i1,
        TRANSLATE_3D: a1,
        SCALE_3D: o1,
        ROTATE_X: s1,
        ROTATE_Y: u1,
        ROTATE_Z: c1,
        SKEW: l1,
        PRESERVE_3D: f1,
        FLEX: d1,
        OPACITY: Zn,
        FILTER: an,
        FONT_VARIATION_SETTINGS: on,
        WIDTH: Ve,
        HEIGHT: Be,
        BACKGROUND_COLOR: Sd,
        BORDER_COLOR: p1,
        COLOR: E1,
        CHILDREN: Td,
        IMMEDIATE_CHILDREN: g1,
        SIBLINGS: vd,
        PARENT: I1,
        DISPLAY: Jn,
        WILL_CHANGE: wt,
        AUTO: Je,
        COMMA_DELIMITER: sn,
        COLON_DELIMITER: y1,
        BAR_DELIMITER: Ji,
        RENDER_TRANSFORM: Rd,
        RENDER_GENERAL: na,
        RENDER_STYLE: ra,
        RENDER_PLUGIN: Ld,
      } = lt.IX2EngineConstants,
      {
        TRANSFORM_MOVE: Pt,
        TRANSFORM_SCALE: Mt,
        TRANSFORM_ROTATE: Ft,
        TRANSFORM_SKEW: un,
        STYLE_OPACITY: Cd,
        STYLE_FILTER: cn,
        STYLE_FONT_VARIATION: ln,
        STYLE_SIZE: Dt,
        STYLE_BACKGROUND_COLOR: xt,
        STYLE_BORDER: qt,
        STYLE_TEXT_COLOR: Gt,
        GENERAL_DISPLAY: tr,
        OBJECT_VALUE: h1,
      } = lt.ActionTypeConsts,
      Nd = (e) => e.trim(),
      ia = Object.freeze({ [xt]: Sd, [qt]: p1, [Gt]: E1 }),
      wd = Object.freeze({
        [ve.TRANSFORM_PREFIXED]: i1,
        [Sd]: r1,
        [Zn]: Zn,
        [an]: an,
        [Ve]: Ve,
        [Be]: Be,
        [on]: on,
      }),
      $n = new Map();
    function T1() {
      $n.clear();
    }
    var v1 = 1;
    function _1() {
      return "i" + v1++;
    }
    var m1 = 1;
    function O1(e, t) {
      for (let n in e) {
        let r = e[n];
        if (r && r.ref === t) return r.id;
      }
      return "e" + m1++;
    }
    function b1({ events: e, actionLists: t, site: n } = {}) {
      let r = (0, ta.default)(
          e,
          (o, s) => {
            let { eventTypeId: u } = s;
            return o[u] || (o[u] = {}), (o[u][s.id] = s), o;
          },
          {}
        ),
        a = n && n.mediaQueries,
        i = [];
      return (
        a
          ? (i = a.map((o) => o.key))
          : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
        {
          ixData: {
            events: e,
            actionLists: t,
            eventTypeMap: r,
            mediaQueries: a,
            mediaQueryKeys: i,
          },
        }
      );
    }
    var A1 = (e, t) => e === t;
    function S1({ store: e, select: t, onChange: n, comparator: r = A1 }) {
      let { getState: a, subscribe: i } = e,
        o = i(u),
        s = t(a());
      function u() {
        let f = t(a());
        if (f == null) {
          o();
          return;
        }
        r(f, s) || ((s = f), n(s, e));
      }
      return o;
    }
    function _d(e) {
      let t = typeof e;
      if (t === "string") return { id: e };
      if (e != null && t === "object") {
        let {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        } = e;
        return {
          id: n,
          objectId: r,
          selector: a,
          selectorGuids: i,
          appliesTo: o,
          useEventTarget: s,
        };
      }
      return {};
    }
    function aa({
      config: e,
      event: t,
      eventTarget: n,
      elementRoot: r,
      elementApi: a,
    }) {
      if (!a) throw new Error("IX2 missing elementApi");
      let { targets: i } = e;
      if (Array.isArray(i) && i.length > 0)
        return i.reduce(
          (M, m) =>
            M.concat(
              aa({
                config: { target: m },
                event: t,
                eventTarget: n,
                elementRoot: r,
                elementApi: a,
              })
            ),
          []
        );
      let {
          getValidDocument: o,
          getQuerySelector: s,
          queryDocument: u,
          getChildElements: f,
          getSiblingElements: y,
          matchSelector: E,
          elementContains: d,
          isSiblingNode: g,
        } = a,
        { target: _ } = e;
      if (!_) return [];
      let {
        id: v,
        objectId: A,
        selector: h,
        selectorGuids: S,
        appliesTo: O,
        useEventTarget: L,
      } = _d(_);
      if (A) return [$n.has(A) ? $n.get(A) : $n.set(A, {}).get(A)];
      if (O === lt.EventAppliesTo.PAGE) {
        let M = o(v);
        return M ? [M] : [];
      }
      let C = (t?.action?.config?.affectedElements ?? {})[v || h] || {},
        q = !!(C.id || C.selector),
        V,
        U,
        W,
        Y = t && s(_d(t.target));
      if (
        (q
          ? ((V = C.limitAffectedElements), (U = Y), (W = s(C)))
          : (U = W = s({ id: v, selector: h, selectorGuids: S })),
        t && L)
      ) {
        let M = n && (W || L === !0) ? [n] : u(Y);
        if (W) {
          if (L === I1) return u(W).filter((m) => M.some((P) => d(m, P)));
          if (L === Td) return u(W).filter((m) => M.some((P) => d(P, m)));
          if (L === vd) return u(W).filter((m) => M.some((P) => g(P, m)));
        }
        return M;
      }
      return U == null || W == null
        ? []
        : ve.IS_BROWSER_ENV && r
        ? u(W).filter((M) => r.contains(M))
        : V === Td
        ? u(U, W)
        : V === g1
        ? f(u(U)).filter(E(W))
        : V === vd
        ? y(u(U)).filter(E(W))
        : u(W);
    }
    function R1({ element: e, actionItem: t }) {
      if (!ve.IS_BROWSER_ENV) return {};
      let { actionTypeId: n } = t;
      switch (n) {
        case Dt:
        case xt:
        case qt:
        case Gt:
        case tr:
          return window.getComputedStyle(e);
        default:
          return {};
      }
    }
    var md = /px/,
      L1 = (e, t) =>
        t.reduce(
          (n, r) => (n[r.type] == null && (n[r.type] = q1[r.type]), n),
          e || {}
        ),
      C1 = (e, t) =>
        t.reduce(
          (n, r) => (
            n[r.type] == null &&
              (n[r.type] = G1[r.type] || r.defaultValue || 0),
            n
          ),
          e || {}
        );
    function N1(e, t = {}, n = {}, r, a) {
      let { getStyle: i } = a,
        { actionTypeId: o } = r;
      if ((0, Ue.isPluginType)(o)) return (0, Ue.getPluginOrigin)(o)(t[o], r);
      switch (r.actionTypeId) {
        case Pt:
        case Mt:
        case Ft:
        case un:
          return t[r.actionTypeId] || oa[r.actionTypeId];
        case cn:
          return L1(t[r.actionTypeId], r.config.filters);
        case ln:
          return C1(t[r.actionTypeId], r.config.fontVariations);
        case Cd:
          return { value: (0, Ze.default)(parseFloat(i(e, Zn)), 1) };
        case Dt: {
          let s = i(e, Ve),
            u = i(e, Be),
            f,
            y;
          return (
            r.config.widthUnit === Je
              ? (f = md.test(s) ? parseFloat(s) : parseFloat(n.width))
              : (f = (0, Ze.default)(parseFloat(s), parseFloat(n.width))),
            r.config.heightUnit === Je
              ? (y = md.test(u) ? parseFloat(u) : parseFloat(n.height))
              : (y = (0, Ze.default)(parseFloat(u), parseFloat(n.height))),
            { widthValue: f, heightValue: y }
          );
        }
        case xt:
        case qt:
        case Gt:
          return K1({
            element: e,
            actionTypeId: r.actionTypeId,
            computedStyle: n,
            getStyle: i,
          });
        case tr:
          return { value: (0, Ze.default)(i(e, Jn), n.display) };
        case h1:
          return t[r.actionTypeId] || { value: 0 };
        default:
          return;
      }
    }
    var w1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      P1 = (e, t) => (t && (e[t.type] = t.value || 0), e),
      M1 = (e, t, n) => {
        if ((0, Ue.isPluginType)(e)) return (0, Ue.getPluginConfig)(e)(n, t);
        switch (e) {
          case cn: {
            let r = (0, ea.default)(n.filters, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          case ln: {
            let r = (0, ea.default)(n.fontVariations, ({ type: a }) => a === t);
            return r ? r.value : 0;
          }
          default:
            return n[t];
        }
      };
    function F1({ element: e, actionItem: t, elementApi: n }) {
      if ((0, Ue.isPluginType)(t.actionTypeId))
        return (0, Ue.getPluginDestination)(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
        case Pt:
        case Mt:
        case Ft:
        case un: {
          let { xValue: r, yValue: a, zValue: i } = t.config;
          return { xValue: r, yValue: a, zValue: i };
        }
        case Dt: {
          let { getStyle: r, setStyle: a, getProperty: i } = n,
            { widthUnit: o, heightUnit: s } = t.config,
            { widthValue: u, heightValue: f } = t.config;
          if (!ve.IS_BROWSER_ENV) return { widthValue: u, heightValue: f };
          if (o === Je) {
            let y = r(e, Ve);
            a(e, Ve, ""), (u = i(e, "offsetWidth")), a(e, Ve, y);
          }
          if (s === Je) {
            let y = r(e, Be);
            a(e, Be, ""), (f = i(e, "offsetHeight")), a(e, Be, y);
          }
          return { widthValue: u, heightValue: f };
        }
        case xt:
        case qt:
        case Gt: {
          let {
            rValue: r,
            gValue: a,
            bValue: i,
            aValue: o,
            globalSwatchId: s,
          } = t.config;
          if (s && s.startsWith("--")) {
            let { getStyle: u } = n,
              f = u(e, s),
              y = (0, n1.normalizeColor)(f);
            return {
              rValue: y.red,
              gValue: y.green,
              bValue: y.blue,
              aValue: y.alpha,
            };
          }
          return { rValue: r, gValue: a, bValue: i, aValue: o };
        }
        case cn:
          return t.config.filters.reduce(w1, {});
        case ln:
          return t.config.fontVariations.reduce(P1, {});
        default: {
          let { value: r } = t.config;
          return { value: r };
        }
      }
    }
    function Pd(e) {
      if (/^TRANSFORM_/.test(e)) return Rd;
      if (/^STYLE_/.test(e)) return ra;
      if (/^GENERAL_/.test(e)) return na;
      if (/^PLUGIN_/.test(e)) return Ld;
    }
    function D1(e, t) {
      return e === ra ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function x1(e, t, n, r, a, i, o, s, u) {
      switch (s) {
        case Rd:
          return U1(e, t, n, a, o);
        case ra:
          return j1(e, t, n, a, i, o);
        case na:
          return $1(e, a, o);
        case Ld: {
          let { actionTypeId: f } = a;
          if ((0, Ue.isPluginType)(f)) return (0, Ue.renderPlugin)(f)(u, t, a);
        }
      }
    }
    var oa = {
        [Pt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Mt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Ft]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [un]: Object.freeze({ xValue: 0, yValue: 0 }),
      },
      q1 = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100,
      }),
      G1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
      V1 = (e, t) => {
        let n = (0, ea.default)(t.filters, ({ type: r }) => r === e);
        if (n && n.unit) return n.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      },
      B1 = Object.keys(oa);
    function U1(e, t, n, r, a) {
      let i = B1.map((s) => {
          let u = oa[s],
            {
              xValue: f = u.xValue,
              yValue: y = u.yValue,
              zValue: E = u.zValue,
              xUnit: d = "",
              yUnit: g = "",
              zUnit: _ = "",
            } = t[s] || {};
          switch (s) {
            case Pt:
              return `${a1}(${f}${d}, ${y}${g}, ${E}${_})`;
            case Mt:
              return `${o1}(${f}${d}, ${y}${g}, ${E}${_})`;
            case Ft:
              return `${s1}(${f}${d}) ${u1}(${y}${g}) ${c1}(${E}${_})`;
            case un:
              return `${l1}(${f}${d}, ${y}${g})`;
            default:
              return "";
          }
        }).join(" "),
        { setStyle: o } = a;
      ft(e, ve.TRANSFORM_PREFIXED, a),
        o(e, ve.TRANSFORM_PREFIXED, i),
        W1(r, n) && o(e, ve.TRANSFORM_STYLE_PREFIXED, f1);
    }
    function X1(e, t, n, r) {
      let a = (0, ta.default)(t, (o, s, u) => `${o} ${u}(${s}${V1(u, n)})`, ""),
        { setStyle: i } = r;
      ft(e, an, r), i(e, an, a);
    }
    function k1(e, t, n, r) {
      let a = (0, ta.default)(
          t,
          (o, s, u) => (o.push(`"${u}" ${s}`), o),
          []
        ).join(", "),
        { setStyle: i } = r;
      ft(e, on, r), i(e, on, a);
    }
    function W1({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
      return (
        (e === Pt && r !== void 0) ||
        (e === Mt && r !== void 0) ||
        (e === Ft && (t !== void 0 || n !== void 0))
      );
    }
    var H1 = "\\(([^)]+)\\)",
      Y1 = /^rgb/,
      z1 = RegExp(`rgba?${H1}`);
    function Q1(e, t) {
      let n = e.exec(t);
      return n ? n[1] : "";
    }
    function K1({
      element: e,
      actionTypeId: t,
      computedStyle: n,
      getStyle: r,
    }) {
      let a = ia[t],
        i = r(e, a),
        o = Y1.test(i) ? i : n[a],
        s = Q1(z1, o).split(sn);
      return {
        rValue: (0, Ze.default)(parseInt(s[0], 10), 255),
        gValue: (0, Ze.default)(parseInt(s[1], 10), 255),
        bValue: (0, Ze.default)(parseInt(s[2], 10), 255),
        aValue: (0, Ze.default)(parseFloat(s[3]), 1),
      };
    }
    function j1(e, t, n, r, a, i) {
      let { setStyle: o } = i;
      switch (r.actionTypeId) {
        case Dt: {
          let { widthUnit: s = "", heightUnit: u = "" } = r.config,
            { widthValue: f, heightValue: y } = n;
          f !== void 0 &&
            (s === Je && (s = "px"), ft(e, Ve, i), o(e, Ve, f + s)),
            y !== void 0 &&
              (u === Je && (u = "px"), ft(e, Be, i), o(e, Be, y + u));
          break;
        }
        case cn: {
          X1(e, n, r.config, i);
          break;
        }
        case ln: {
          k1(e, n, r.config, i);
          break;
        }
        case xt:
        case qt:
        case Gt: {
          let s = ia[r.actionTypeId],
            u = Math.round(n.rValue),
            f = Math.round(n.gValue),
            y = Math.round(n.bValue),
            E = n.aValue;
          ft(e, s, i),
            o(
              e,
              s,
              E >= 1 ? `rgb(${u},${f},${y})` : `rgba(${u},${f},${y},${E})`
            );
          break;
        }
        default: {
          let { unit: s = "" } = r.config;
          ft(e, a, i), o(e, a, n.value + s);
          break;
        }
      }
    }
    function $1(e, t, n) {
      let { setStyle: r } = n;
      switch (t.actionTypeId) {
        case tr: {
          let { value: a } = t.config;
          a === d1 && ve.IS_BROWSER_ENV
            ? r(e, Jn, ve.FLEX_PREFIXED)
            : r(e, Jn, a);
          return;
        }
      }
    }
    function ft(e, t, n) {
      if (!ve.IS_BROWSER_ENV) return;
      let r = wd[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, wt);
      if (!o) {
        i(e, wt, r);
        return;
      }
      let s = o.split(sn).map(Nd);
      s.indexOf(r) === -1 && i(e, wt, s.concat(r).join(sn));
    }
    function Md(e, t, n) {
      if (!ve.IS_BROWSER_ENV) return;
      let r = wd[t];
      if (!r) return;
      let { getStyle: a, setStyle: i } = n,
        o = a(e, wt);
      !o ||
        o.indexOf(r) === -1 ||
        i(
          e,
          wt,
          o
            .split(sn)
            .map(Nd)
            .filter((s) => s !== r)
            .join(sn)
        );
    }
    function Z1({ store: e, elementApi: t }) {
      let { ixData: n } = e.getState(),
        { events: r = {}, actionLists: a = {} } = n;
      Object.keys(r).forEach((i) => {
        let o = r[i],
          { config: s } = o.action,
          { actionListId: u } = s,
          f = a[u];
        f && Od({ actionList: f, event: o, elementApi: t });
      }),
        Object.keys(a).forEach((i) => {
          Od({ actionList: a[i], elementApi: t });
        });
    }
    function Od({ actionList: e = {}, event: t, elementApi: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e;
      r &&
        r.forEach((i) => {
          bd({ actionGroup: i, event: t, elementApi: n });
        }),
        a &&
          a.forEach((i) => {
            let { continuousActionGroups: o } = i;
            o.forEach((s) => {
              bd({ actionGroup: s, event: t, elementApi: n });
            });
          });
    }
    function bd({ actionGroup: e, event: t, elementApi: n }) {
      let { actionItems: r } = e;
      r.forEach((a) => {
        let { actionTypeId: i, config: o } = a,
          s;
        (0, Ue.isPluginType)(i)
          ? (s = (u) => (0, Ue.clearPlugin)(i)(u, a))
          : (s = Fd({ effect: eR, actionTypeId: i, elementApi: n })),
          aa({ config: o, event: t, elementApi: n }).forEach(s);
      });
    }
    function J1(e, t, n) {
      let { setStyle: r, getStyle: a } = n,
        { actionTypeId: i } = t;
      if (i === Dt) {
        let { config: o } = t;
        o.widthUnit === Je && r(e, Ve, ""), o.heightUnit === Je && r(e, Be, "");
      }
      a(e, wt) && Fd({ effect: Md, actionTypeId: i, elementApi: n })(e);
    }
    var Fd =
      ({ effect: e, actionTypeId: t, elementApi: n }) =>
      (r) => {
        switch (t) {
          case Pt:
          case Mt:
          case Ft:
          case un:
            e(r, ve.TRANSFORM_PREFIXED, n);
            break;
          case cn:
            e(r, an, n);
            break;
          case ln:
            e(r, on, n);
            break;
          case Cd:
            e(r, Zn, n);
            break;
          case Dt:
            e(r, Ve, n), e(r, Be, n);
            break;
          case xt:
          case qt:
          case Gt:
            e(r, ia[t], n);
            break;
          case tr:
            e(r, Jn, n);
            break;
        }
      };
    function eR(e, t, n) {
      let { setStyle: r } = n;
      Md(e, t, n),
        r(e, t, ""),
        t === ve.TRANSFORM_PREFIXED && r(e, ve.TRANSFORM_STYLE_PREFIXED, "");
    }
    function Dd(e) {
      let t = 0,
        n = 0;
      return (
        e.forEach((r, a) => {
          let { config: i } = r,
            o = i.delay + i.duration;
          o >= t && ((t = o), (n = a));
        }),
        n
      );
    }
    function tR(e, t) {
      let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
        { actionItem: a, verboseTimeElapsed: i = 0 } = t,
        o = 0,
        s = 0;
      return (
        n.forEach((u, f) => {
          if (r && f === 0) return;
          let { actionItems: y } = u,
            E = y[Dd(y)],
            { config: d, actionTypeId: g } = E;
          a.id === E.id && (s = o + i);
          let _ = Pd(g) === na ? 0 : d.duration;
          o += d.delay + _;
        }),
        o > 0 ? (0, t1.optimizeFloat)(s / o) : 0
      );
    }
    function nR({ actionList: e, actionItemId: t, rawData: n }) {
      let { actionItemGroups: r, continuousParameterGroups: a } = e,
        i = [],
        o = (s) => (
          i.push((0, hd.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
          s.id === t
        );
      return (
        r && r.some(({ actionItems: s }) => s.some(o)),
        a &&
          a.some((s) => {
            let { continuousActionGroups: u } = s;
            return u.some(({ actionItems: f }) => f.some(o));
          }),
        (0, hd.setIn)(n, ["actionLists"], {
          [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
        })
      );
    }
    function rR(e, { basedOn: t }) {
      return (
        (e === lt.EventTypeConsts.SCROLLING_IN_VIEW &&
          (t === lt.EventBasedOn.ELEMENT || t == null)) ||
        (e === lt.EventTypeConsts.MOUSE_MOVE && t === lt.EventBasedOn.ELEMENT)
      );
    }
    function iR(e, t) {
      return e + y1 + t;
    }
    function aR(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function oR(e, t) {
      return (0, Ad.default)(e && e.sort(), t && t.sort());
    }
    function sR(e) {
      if (typeof e == "string") return e;
      if (e.pluginElement && e.objectId)
        return e.pluginElement + Ji + e.objectId;
      if (e.objectId) return e.objectId;
      let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
      return t + Ji + n + Ji + r;
    }
  });
  var dt = c((ua) => {
    "use strict";
    Object.defineProperty(ua, "__esModule", { value: !0 });
    function uR(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    uR(ua, {
      IX2BrowserSupport: function () {
        return cR;
      },
      IX2EasingUtils: function () {
        return fR;
      },
      IX2Easings: function () {
        return lR;
      },
      IX2ElementsReducer: function () {
        return dR;
      },
      IX2VanillaPlugins: function () {
        return pR;
      },
      IX2VanillaUtils: function () {
        return ER;
      },
    });
    var cR = Vt(Wn()),
      lR = Vt(Mi()),
      fR = Vt(xi()),
      dR = Vt(Bf()),
      pR = Vt(Ki()),
      ER = Vt(xd());
    function qd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (qd = function (r) {
        return r ? n : t;
      })(e);
    }
    function Vt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = qd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var Ud = c((la) => {
    "use strict";
    Object.defineProperty(la, "__esModule", { value: !0 });
    Object.defineProperty(la, "ixInstances", {
      enumerable: !0,
      get: function () {
        return RR;
      },
    });
    var Gd = me(),
      Vd = dt(),
      Bt = mt(),
      {
        IX2_RAW_DATA_IMPORTED: gR,
        IX2_SESSION_STOPPED: IR,
        IX2_INSTANCE_ADDED: yR,
        IX2_INSTANCE_STARTED: hR,
        IX2_INSTANCE_REMOVED: TR,
        IX2_ANIMATION_FRAME_CHANGED: vR,
      } = Gd.IX2EngineActionTypes,
      {
        optimizeFloat: nr,
        applyEasing: Bd,
        createBezierEasing: _R,
      } = Vd.IX2EasingUtils,
      { RENDER_GENERAL: mR } = Gd.IX2EngineConstants,
      {
        getItemConfigByKey: ca,
        getRenderType: OR,
        getStyleProp: bR,
      } = Vd.IX2VanillaUtils,
      AR = (e, t) => {
        let {
            position: n,
            parameterId: r,
            actionGroups: a,
            destinationKeys: i,
            smoothing: o,
            restingValue: s,
            actionTypeId: u,
            customEasingFn: f,
            skipMotion: y,
            skipToValue: E,
          } = e,
          { parameters: d } = t.payload,
          g = Math.max(1 - o, 0.01),
          _ = d[r];
        _ == null && ((g = 1), (_ = s));
        let v = Math.max(_, 0) || 0,
          A = nr(v - n),
          h = y ? E : nr(n + A * g),
          S = h * 100;
        if (h === n && e.current) return e;
        let O, L, w, C;
        for (let V = 0, { length: U } = a; V < U; V++) {
          let { keyframe: W, actionItems: Y } = a[V];
          if ((V === 0 && (O = Y[0]), S >= W)) {
            O = Y[0];
            let M = a[V + 1],
              m = M && S !== W;
            (L = m ? M.actionItems[0] : null),
              m && ((w = W / 100), (C = (M.keyframe - W) / 100));
          }
        }
        let q = {};
        if (O && !L)
          for (let V = 0, { length: U } = i; V < U; V++) {
            let W = i[V];
            q[W] = ca(u, W, O.config);
          }
        else if (O && L && w !== void 0 && C !== void 0) {
          let V = (h - w) / C,
            U = O.config.easing,
            W = Bd(U, V, f);
          for (let Y = 0, { length: M } = i; Y < M; Y++) {
            let m = i[Y],
              P = ca(u, m, O.config),
              z = (ca(u, m, L.config) - P) * W + P;
            q[m] = z;
          }
        }
        return (0, Bt.merge)(e, { position: h, current: q });
      },
      SR = (e, t) => {
        let {
            active: n,
            origin: r,
            start: a,
            immediate: i,
            renderType: o,
            verbose: s,
            actionItem: u,
            destination: f,
            destinationKeys: y,
            pluginDuration: E,
            instanceDelay: d,
            customEasingFn: g,
            skipMotion: _,
          } = e,
          v = u.config.easing,
          { duration: A, delay: h } = u.config;
        E != null && (A = E),
          (h = d ?? h),
          o === mR ? (A = 0) : (i || _) && (A = h = 0);
        let { now: S } = t.payload;
        if (n && r) {
          let O = S - (a + h);
          if (s) {
            let V = S - a,
              U = A + h,
              W = nr(Math.min(Math.max(0, V / U), 1));
            e = (0, Bt.set)(e, "verboseTimeElapsed", U * W);
          }
          if (O < 0) return e;
          let L = nr(Math.min(Math.max(0, O / A), 1)),
            w = Bd(v, L, g),
            C = {},
            q = null;
          return (
            y.length &&
              (q = y.reduce((V, U) => {
                let W = f[U],
                  Y = parseFloat(r[U]) || 0,
                  m = (parseFloat(W) - Y) * w + Y;
                return (V[U] = m), V;
              }, {})),
            (C.current = q),
            (C.position = L),
            L === 1 && ((C.active = !1), (C.complete = !0)),
            (0, Bt.merge)(e, C)
          );
        }
        return e;
      },
      RR = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case gR:
            return t.payload.ixInstances || Object.freeze({});
          case IR:
            return Object.freeze({});
          case yR: {
            let {
                instanceId: n,
                elementId: r,
                actionItem: a,
                eventId: i,
                eventTarget: o,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                isCarrier: y,
                origin: E,
                destination: d,
                immediate: g,
                verbose: _,
                continuous: v,
                parameterId: A,
                actionGroups: h,
                smoothing: S,
                restingValue: O,
                pluginInstance: L,
                pluginDuration: w,
                instanceDelay: C,
                skipMotion: q,
                skipToValue: V,
              } = t.payload,
              { actionTypeId: U } = a,
              W = OR(U),
              Y = bR(W, U),
              M = Object.keys(d).filter(
                (P) => d[P] != null && typeof d[P] != "string"
              ),
              { easing: m } = a.config;
            return (0, Bt.set)(e, n, {
              id: n,
              elementId: r,
              active: !1,
              position: 0,
              start: 0,
              origin: E,
              destination: d,
              destinationKeys: M,
              immediate: g,
              verbose: _,
              current: null,
              actionItem: a,
              actionTypeId: U,
              eventId: i,
              eventTarget: o,
              eventStateKey: s,
              actionListId: u,
              groupIndex: f,
              renderType: W,
              isCarrier: y,
              styleProp: Y,
              continuous: v,
              parameterId: A,
              actionGroups: h,
              smoothing: S,
              restingValue: O,
              pluginInstance: L,
              pluginDuration: w,
              instanceDelay: C,
              skipMotion: q,
              skipToValue: V,
              customEasingFn:
                Array.isArray(m) && m.length === 4 ? _R(m) : void 0,
            });
          }
          case hR: {
            let { instanceId: n, time: r } = t.payload;
            return (0, Bt.mergeIn)(e, [n], {
              active: !0,
              complete: !1,
              start: r,
            });
          }
          case TR: {
            let { instanceId: n } = t.payload;
            if (!e[n]) return e;
            let r = {},
              a = Object.keys(e),
              { length: i } = a;
            for (let o = 0; o < i; o++) {
              let s = a[o];
              s !== n && (r[s] = e[s]);
            }
            return r;
          }
          case vR: {
            let n = e,
              r = Object.keys(e),
              { length: a } = r;
            for (let i = 0; i < a; i++) {
              let o = r[i],
                s = e[o],
                u = s.continuous ? AR : SR;
              n = (0, Bt.set)(n, o, u(s, t));
            }
            return n;
          }
          default:
            return e;
        }
      };
  });
  var Xd = c((fa) => {
    "use strict";
    Object.defineProperty(fa, "__esModule", { value: !0 });
    Object.defineProperty(fa, "ixParameters", {
      enumerable: !0,
      get: function () {
        return PR;
      },
    });
    var LR = me(),
      {
        IX2_RAW_DATA_IMPORTED: CR,
        IX2_SESSION_STOPPED: NR,
        IX2_PARAMETER_CHANGED: wR,
      } = LR.IX2EngineActionTypes,
      PR = (e = {}, t) => {
        switch (t.type) {
          case CR:
            return t.payload.ixParameters || {};
          case NR:
            return {};
          case wR: {
            let { key: n, value: r } = t.payload;
            return (e[n] = r), e;
          }
          default:
            return e;
        }
      };
  });
  var kd = c((da) => {
    "use strict";
    Object.defineProperty(da, "__esModule", { value: !0 });
    Object.defineProperty(da, "default", {
      enumerable: !0,
      get: function () {
        return UR;
      },
    });
    var MR = Wr(),
      FR = ns(),
      DR = _s(),
      xR = Os(),
      qR = dt(),
      GR = Ud(),
      VR = Xd(),
      { ixElements: BR } = qR.IX2ElementsReducer,
      UR = (0, MR.combineReducers)({
        ixData: FR.ixData,
        ixRequest: DR.ixRequest,
        ixSession: xR.ixSession,
        ixElements: BR,
        ixInstances: GR.ixInstances,
        ixParameters: VR.ixParameters,
      });
  });
  var Hd = c((W8, Wd) => {
    var XR = Ke(),
      kR = ge(),
      WR = We(),
      HR = "[object String]";
    function YR(e) {
      return typeof e == "string" || (!kR(e) && WR(e) && XR(e) == HR);
    }
    Wd.exports = YR;
  });
  var zd = c((H8, Yd) => {
    var zR = Ai(),
      QR = zR("length");
    Yd.exports = QR;
  });
  var Kd = c((Y8, Qd) => {
    var KR = "\\ud800-\\udfff",
      jR = "\\u0300-\\u036f",
      $R = "\\ufe20-\\ufe2f",
      ZR = "\\u20d0-\\u20ff",
      JR = jR + $R + ZR,
      e2 = "\\ufe0e\\ufe0f",
      t2 = "\\u200d",
      n2 = RegExp("[" + t2 + KR + JR + e2 + "]");
    function r2(e) {
      return n2.test(e);
    }
    Qd.exports = r2;
  });
  var ip = c((z8, rp) => {
    var $d = "\\ud800-\\udfff",
      i2 = "\\u0300-\\u036f",
      a2 = "\\ufe20-\\ufe2f",
      o2 = "\\u20d0-\\u20ff",
      s2 = i2 + a2 + o2,
      u2 = "\\ufe0e\\ufe0f",
      c2 = "[" + $d + "]",
      pa = "[" + s2 + "]",
      Ea = "\\ud83c[\\udffb-\\udfff]",
      l2 = "(?:" + pa + "|" + Ea + ")",
      Zd = "[^" + $d + "]",
      Jd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ep = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      f2 = "\\u200d",
      tp = l2 + "?",
      np = "[" + u2 + "]?",
      d2 = "(?:" + f2 + "(?:" + [Zd, Jd, ep].join("|") + ")" + np + tp + ")*",
      p2 = np + tp + d2,
      E2 = "(?:" + [Zd + pa + "?", pa, Jd, ep, c2].join("|") + ")",
      jd = RegExp(Ea + "(?=" + Ea + ")|" + E2 + p2, "g");
    function g2(e) {
      for (var t = (jd.lastIndex = 0); jd.test(e); ) ++t;
      return t;
    }
    rp.exports = g2;
  });
  var op = c((Q8, ap) => {
    var I2 = zd(),
      y2 = Kd(),
      h2 = ip();
    function T2(e) {
      return y2(e) ? h2(e) : I2(e);
    }
    ap.exports = T2;
  });
  var up = c((K8, sp) => {
    var v2 = Dn(),
      _2 = xn(),
      m2 = st(),
      O2 = Hd(),
      b2 = op(),
      A2 = "[object Map]",
      S2 = "[object Set]";
    function R2(e) {
      if (e == null) return 0;
      if (m2(e)) return O2(e) ? b2(e) : e.length;
      var t = _2(e);
      return t == A2 || t == S2 ? e.size : v2(e).length;
    }
    sp.exports = R2;
  });
  var lp = c((j8, cp) => {
    var L2 = "Expected a function";
    function C2(e) {
      if (typeof e != "function") throw new TypeError(L2);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    cp.exports = C2;
  });
  var ga = c(($8, fp) => {
    var N2 = je(),
      w2 = (function () {
        try {
          var e = N2(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    fp.exports = w2;
  });
  var Ia = c((Z8, pp) => {
    var dp = ga();
    function P2(e, t, n) {
      t == "__proto__" && dp
        ? dp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    pp.exports = P2;
  });
  var gp = c((J8, Ep) => {
    var M2 = Ia(),
      F2 = An(),
      D2 = Object.prototype,
      x2 = D2.hasOwnProperty;
    function q2(e, t, n) {
      var r = e[t];
      (!(x2.call(e, t) && F2(r, n)) || (n === void 0 && !(t in e))) &&
        M2(e, t, n);
    }
    Ep.exports = q2;
  });
  var hp = c((e3, yp) => {
    var G2 = gp(),
      V2 = nn(),
      B2 = wn(),
      Ip = Ge(),
      U2 = Nt();
    function X2(e, t, n, r) {
      if (!Ip(e)) return e;
      t = V2(t, e);
      for (var a = -1, i = t.length, o = i - 1, s = e; s != null && ++a < i; ) {
        var u = U2(t[a]),
          f = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (a != o) {
          var y = s[u];
          (f = r ? r(y, u, s) : void 0),
            f === void 0 && (f = Ip(y) ? y : B2(t[a + 1]) ? [] : {});
        }
        G2(s, u, f), (s = s[u]);
      }
      return e;
    }
    yp.exports = X2;
  });
  var vp = c((t3, Tp) => {
    var k2 = Vn(),
      W2 = hp(),
      H2 = nn();
    function Y2(e, t, n) {
      for (var r = -1, a = t.length, i = {}; ++r < a; ) {
        var o = t[r],
          s = k2(e, o);
        n(s, o) && W2(i, H2(o, e), s);
      }
      return i;
    }
    Tp.exports = Y2;
  });
  var mp = c((n3, _p) => {
    var z2 = Cn(),
      Q2 = wr(),
      K2 = li(),
      j2 = ci(),
      $2 = Object.getOwnPropertySymbols,
      Z2 = $2
        ? function (e) {
            for (var t = []; e; ) z2(t, K2(e)), (e = Q2(e));
            return t;
          }
        : j2;
    _p.exports = Z2;
  });
  var bp = c((r3, Op) => {
    function J2(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    Op.exports = J2;
  });
  var Sp = c((i3, Ap) => {
    var eL = Ge(),
      tL = Fn(),
      nL = bp(),
      rL = Object.prototype,
      iL = rL.hasOwnProperty;
    function aL(e) {
      if (!eL(e)) return nL(e);
      var t = tL(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !iL.call(e, r))) || n.push(r);
      return n;
    }
    Ap.exports = aL;
  });
  var Lp = c((a3, Rp) => {
    var oL = di(),
      sL = Sp(),
      uL = st();
    function cL(e) {
      return uL(e) ? oL(e, !0) : sL(e);
    }
    Rp.exports = cL;
  });
  var Np = c((o3, Cp) => {
    var lL = ui(),
      fL = mp(),
      dL = Lp();
    function pL(e) {
      return lL(e, dL, fL);
    }
    Cp.exports = pL;
  });
  var Pp = c((s3, wp) => {
    var EL = bi(),
      gL = $e(),
      IL = vp(),
      yL = Np();
    function hL(e, t) {
      if (e == null) return {};
      var n = EL(yL(e), function (r) {
        return [r];
      });
      return (
        (t = gL(t)),
        IL(e, n, function (r, a) {
          return t(r, a[0]);
        })
      );
    }
    wp.exports = hL;
  });
  var Fp = c((u3, Mp) => {
    var TL = $e(),
      vL = lp(),
      _L = Pp();
    function mL(e, t) {
      return _L(e, vL(TL(t)));
    }
    Mp.exports = mL;
  });
  var xp = c((c3, Dp) => {
    var OL = Dn(),
      bL = xn(),
      AL = jt(),
      SL = ge(),
      RL = st(),
      LL = Nn(),
      CL = Fn(),
      NL = Mn(),
      wL = "[object Map]",
      PL = "[object Set]",
      ML = Object.prototype,
      FL = ML.hasOwnProperty;
    function DL(e) {
      if (e == null) return !0;
      if (
        RL(e) &&
        (SL(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          LL(e) ||
          NL(e) ||
          AL(e))
      )
        return !e.length;
      var t = bL(e);
      if (t == wL || t == PL) return !e.size;
      if (CL(e)) return !OL(e).length;
      for (var n in e) if (FL.call(e, n)) return !1;
      return !0;
    }
    Dp.exports = DL;
  });
  var Gp = c((l3, qp) => {
    var xL = Ia(),
      qL = ji(),
      GL = $e();
    function VL(e, t) {
      var n = {};
      return (
        (t = GL(t, 3)),
        qL(e, function (r, a, i) {
          xL(n, a, t(r, a, i));
        }),
        n
      );
    }
    qp.exports = VL;
  });
  var Bp = c((f3, Vp) => {
    function BL(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    Vp.exports = BL;
  });
  var Xp = c((d3, Up) => {
    var UL = Un();
    function XL(e) {
      return typeof e == "function" ? e : UL;
    }
    Up.exports = XL;
  });
  var Wp = c((p3, kp) => {
    var kL = Bp(),
      WL = $i(),
      HL = Xp(),
      YL = ge();
    function zL(e, t) {
      var n = YL(e) ? kL : WL;
      return n(e, HL(t));
    }
    kp.exports = zL;
  });
  var Yp = c((E3, Hp) => {
    var QL = we(),
      KL = function () {
        return QL.Date.now();
      };
    Hp.exports = KL;
  });
  var Kp = c((g3, Qp) => {
    var jL = Ge(),
      ya = Yp(),
      zp = Xn(),
      $L = "Expected a function",
      ZL = Math.max,
      JL = Math.min;
    function eC(e, t, n) {
      var r,
        a,
        i,
        o,
        s,
        u,
        f = 0,
        y = !1,
        E = !1,
        d = !0;
      if (typeof e != "function") throw new TypeError($L);
      (t = zp(t) || 0),
        jL(n) &&
          ((y = !!n.leading),
          (E = "maxWait" in n),
          (i = E ? ZL(zp(n.maxWait) || 0, t) : i),
          (d = "trailing" in n ? !!n.trailing : d));
      function g(C) {
        var q = r,
          V = a;
        return (r = a = void 0), (f = C), (o = e.apply(V, q)), o;
      }
      function _(C) {
        return (f = C), (s = setTimeout(h, t)), y ? g(C) : o;
      }
      function v(C) {
        var q = C - u,
          V = C - f,
          U = t - q;
        return E ? JL(U, i - V) : U;
      }
      function A(C) {
        var q = C - u,
          V = C - f;
        return u === void 0 || q >= t || q < 0 || (E && V >= i);
      }
      function h() {
        var C = ya();
        if (A(C)) return S(C);
        s = setTimeout(h, v(C));
      }
      function S(C) {
        return (s = void 0), d && r ? g(C) : ((r = a = void 0), o);
      }
      function O() {
        s !== void 0 && clearTimeout(s), (f = 0), (r = u = a = s = void 0);
      }
      function L() {
        return s === void 0 ? o : S(ya());
      }
      function w() {
        var C = ya(),
          q = A(C);
        if (((r = arguments), (a = this), (u = C), q)) {
          if (s === void 0) return _(u);
          if (E) return clearTimeout(s), (s = setTimeout(h, t)), g(u);
        }
        return s === void 0 && (s = setTimeout(h, t)), o;
      }
      return (w.cancel = O), (w.flush = L), w;
    }
    Qp.exports = eC;
  });
  var $p = c((I3, jp) => {
    var tC = Kp(),
      nC = Ge(),
      rC = "Expected a function";
    function iC(e, t, n) {
      var r = !0,
        a = !0;
      if (typeof e != "function") throw new TypeError(rC);
      return (
        nC(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (a = "trailing" in n ? !!n.trailing : a)),
        tC(e, t, { leading: r, maxWait: t, trailing: a })
      );
    }
    jp.exports = iC;
  });
  var rr = c((ha) => {
    "use strict";
    Object.defineProperty(ha, "__esModule", { value: !0 });
    function aC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    aC(ha, {
      actionListPlaybackChanged: function () {
        return HC;
      },
      animationFrameChanged: function () {
        return VC;
      },
      clearRequested: function () {
        return DC;
      },
      elementStateChanged: function () {
        return WC;
      },
      eventListenerAdded: function () {
        return xC;
      },
      eventStateChanged: function () {
        return GC;
      },
      instanceAdded: function () {
        return UC;
      },
      instanceRemoved: function () {
        return kC;
      },
      instanceStarted: function () {
        return XC;
      },
      mediaQueriesDefined: function () {
        return zC;
      },
      parameterChanged: function () {
        return BC;
      },
      playbackRequested: function () {
        return MC;
      },
      previewRequested: function () {
        return PC;
      },
      rawDataImported: function () {
        return LC;
      },
      sessionInitialized: function () {
        return CC;
      },
      sessionStarted: function () {
        return NC;
      },
      sessionStopped: function () {
        return wC;
      },
      stopRequested: function () {
        return FC;
      },
      testFrameRendered: function () {
        return qC;
      },
      viewportWidthChanged: function () {
        return YC;
      },
    });
    var Zp = me(),
      oC = dt(),
      {
        IX2_RAW_DATA_IMPORTED: sC,
        IX2_SESSION_INITIALIZED: uC,
        IX2_SESSION_STARTED: cC,
        IX2_SESSION_STOPPED: lC,
        IX2_PREVIEW_REQUESTED: fC,
        IX2_PLAYBACK_REQUESTED: dC,
        IX2_STOP_REQUESTED: pC,
        IX2_CLEAR_REQUESTED: EC,
        IX2_EVENT_LISTENER_ADDED: gC,
        IX2_TEST_FRAME_RENDERED: IC,
        IX2_EVENT_STATE_CHANGED: yC,
        IX2_ANIMATION_FRAME_CHANGED: hC,
        IX2_PARAMETER_CHANGED: TC,
        IX2_INSTANCE_ADDED: vC,
        IX2_INSTANCE_STARTED: _C,
        IX2_INSTANCE_REMOVED: mC,
        IX2_ELEMENT_STATE_CHANGED: OC,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: bC,
        IX2_VIEWPORT_WIDTH_CHANGED: AC,
        IX2_MEDIA_QUERIES_DEFINED: SC,
      } = Zp.IX2EngineActionTypes,
      { reifyState: RC } = oC.IX2VanillaUtils,
      LC = (e) => ({ type: sC, payload: { ...RC(e) } }),
      CC = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
        type: uC,
        payload: { hasBoundaryNodes: e, reducedMotion: t },
      }),
      NC = () => ({ type: cC }),
      wC = () => ({ type: lC }),
      PC = ({ rawData: e, defer: t }) => ({
        type: fC,
        payload: { defer: t, rawData: e },
      }),
      MC = ({
        actionTypeId: e = Zp.ActionTypeConsts.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: n,
        eventId: r,
        allowEvents: a,
        immediate: i,
        testManual: o,
        verbose: s,
        rawData: u,
      }) => ({
        type: dC,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: n,
          testManual: o,
          eventId: r,
          allowEvents: a,
          immediate: i,
          verbose: s,
          rawData: u,
        },
      }),
      FC = (e) => ({ type: pC, payload: { actionListId: e } }),
      DC = () => ({ type: EC }),
      xC = (e, t) => ({ type: gC, payload: { target: e, listenerParams: t } }),
      qC = (e = 1) => ({ type: IC, payload: { step: e } }),
      GC = (e, t) => ({ type: yC, payload: { stateKey: e, newState: t } }),
      VC = (e, t) => ({ type: hC, payload: { now: e, parameters: t } }),
      BC = (e, t) => ({ type: TC, payload: { key: e, value: t } }),
      UC = (e) => ({ type: vC, payload: { ...e } }),
      XC = (e, t) => ({ type: _C, payload: { instanceId: e, time: t } }),
      kC = (e) => ({ type: mC, payload: { instanceId: e } }),
      WC = (e, t, n, r) => ({
        type: OC,
        payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
      }),
      HC = ({ actionListId: e, isPlaying: t }) => ({
        type: bC,
        payload: { actionListId: e, isPlaying: t },
      }),
      YC = ({ width: e, mediaQueries: t }) => ({
        type: AC,
        payload: { width: e, mediaQueries: t },
      }),
      zC = () => ({ type: SC });
  });
  var tE = c((va) => {
    "use strict";
    Object.defineProperty(va, "__esModule", { value: !0 });
    function QC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    QC(va, {
      elementContains: function () {
        return oN;
      },
      getChildElements: function () {
        return uN;
      },
      getClosestElement: function () {
        return lN;
      },
      getProperty: function () {
        return tN;
      },
      getQuerySelector: function () {
        return rN;
      },
      getRefType: function () {
        return fN;
      },
      getSiblingElements: function () {
        return cN;
      },
      getStyle: function () {
        return eN;
      },
      getValidDocument: function () {
        return iN;
      },
      isSiblingNode: function () {
        return sN;
      },
      matchSelector: function () {
        return nN;
      },
      queryDocument: function () {
        return aN;
      },
      setStyle: function () {
        return JC;
      },
    });
    var KC = dt(),
      jC = me(),
      { ELEMENT_MATCHES: Ta } = KC.IX2BrowserSupport,
      {
        IX2_ID_DELIMITER: Jp,
        HTML_ELEMENT: $C,
        PLAIN_OBJECT: ZC,
        WF_PAGE: eE,
      } = jC.IX2EngineConstants;
    function JC(e, t, n) {
      e.style[t] = n;
    }
    function eN(e, t) {
      if (t.startsWith("--"))
        return window
          .getComputedStyle(document.documentElement)
          .getPropertyValue(t);
      if (e.style instanceof CSSStyleDeclaration) return e.style[t];
    }
    function tN(e, t) {
      return e[t];
    }
    function nN(e) {
      return (t) => t[Ta](e);
    }
    function rN({ id: e, selector: t }) {
      if (e) {
        let n = e;
        if (e.indexOf(Jp) !== -1) {
          let r = e.split(Jp),
            a = r[0];
          if (((n = r[1]), a !== document.documentElement.getAttribute(eE)))
            return null;
        }
        return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
      }
      return t;
    }
    function iN(e) {
      return e == null || e === document.documentElement.getAttribute(eE)
        ? document
        : null;
    }
    function aN(e, t) {
      return Array.prototype.slice.call(
        document.querySelectorAll(t ? e + " " + t : e)
      );
    }
    function oN(e, t) {
      return e.contains(t);
    }
    function sN(e, t) {
      return e !== t && e.parentNode === t.parentNode;
    }
    function uN(e) {
      let t = [];
      for (let n = 0, { length: r } = e || []; n < r; n++) {
        let { children: a } = e[n],
          { length: i } = a;
        if (i) for (let o = 0; o < i; o++) t.push(a[o]);
      }
      return t;
    }
    function cN(e = []) {
      let t = [],
        n = [];
      for (let r = 0, { length: a } = e; r < a; r++) {
        let { parentNode: i } = e[r];
        if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1)
          continue;
        n.push(i);
        let o = i.firstElementChild;
        for (; o != null; )
          e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
      }
      return t;
    }
    var lN = Element.prototype.closest
      ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
      : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let n = e;
          do {
            if (n[Ta] && n[Ta](t)) return n;
            n = n.parentNode;
          } while (n != null);
          return null;
        };
    function fN(e) {
      return e != null && typeof e == "object"
        ? e instanceof Element
          ? $C
          : ZC
        : null;
    }
  });
  var _a = c((T3, rE) => {
    var dN = Ge(),
      nE = Object.create,
      pN = (function () {
        function e() {}
        return function (t) {
          if (!dN(t)) return {};
          if (nE) return nE(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    rE.exports = pN;
  });
  var ir = c((v3, iE) => {
    function EN() {}
    iE.exports = EN;
  });
  var or = c((_3, aE) => {
    var gN = _a(),
      IN = ir();
    function ar(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    ar.prototype = gN(IN.prototype);
    ar.prototype.constructor = ar;
    aE.exports = ar;
  });
  var cE = c((m3, uE) => {
    var oE = Tt(),
      yN = jt(),
      hN = ge(),
      sE = oE ? oE.isConcatSpreadable : void 0;
    function TN(e) {
      return hN(e) || yN(e) || !!(sE && e && e[sE]);
    }
    uE.exports = TN;
  });
  var dE = c((O3, fE) => {
    var vN = Cn(),
      _N = cE();
    function lE(e, t, n, r, a) {
      var i = -1,
        o = e.length;
      for (n || (n = _N), a || (a = []); ++i < o; ) {
        var s = e[i];
        t > 0 && n(s)
          ? t > 1
            ? lE(s, t - 1, n, r, a)
            : vN(a, s)
          : r || (a[a.length] = s);
      }
      return a;
    }
    fE.exports = lE;
  });
  var EE = c((b3, pE) => {
    var mN = dE();
    function ON(e) {
      var t = e == null ? 0 : e.length;
      return t ? mN(e, 1) : [];
    }
    pE.exports = ON;
  });
  var IE = c((A3, gE) => {
    function bN(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    gE.exports = bN;
  });
  var TE = c((S3, hE) => {
    var AN = IE(),
      yE = Math.max;
    function SN(e, t, n) {
      return (
        (t = yE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, a = -1, i = yE(r.length - t, 0), o = Array(i);
            ++a < i;

          )
            o[a] = r[t + a];
          a = -1;
          for (var s = Array(t + 1); ++a < t; ) s[a] = r[a];
          return (s[t] = n(o)), AN(e, this, s);
        }
      );
    }
    hE.exports = SN;
  });
  var _E = c((R3, vE) => {
    function RN(e) {
      return function () {
        return e;
      };
    }
    vE.exports = RN;
  });
  var bE = c((L3, OE) => {
    var LN = _E(),
      mE = ga(),
      CN = Un(),
      NN = mE
        ? function (e, t) {
            return mE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: LN(t),
              writable: !0,
            });
          }
        : CN;
    OE.exports = NN;
  });
  var SE = c((C3, AE) => {
    var wN = 800,
      PN = 16,
      MN = Date.now;
    function FN(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = MN(),
          a = PN - (r - n);
        if (((n = r), a > 0)) {
          if (++t >= wN) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    AE.exports = FN;
  });
  var LE = c((N3, RE) => {
    var DN = bE(),
      xN = SE(),
      qN = xN(DN);
    RE.exports = qN;
  });
  var NE = c((w3, CE) => {
    var GN = EE(),
      VN = TE(),
      BN = LE();
    function UN(e) {
      return BN(VN(e, void 0, GN), e + "");
    }
    CE.exports = UN;
  });
  var ME = c((P3, PE) => {
    var wE = pi(),
      XN = wE && new wE();
    PE.exports = XN;
  });
  var DE = c((M3, FE) => {
    function kN() {}
    FE.exports = kN;
  });
  var ma = c((F3, qE) => {
    var xE = ME(),
      WN = DE(),
      HN = xE
        ? function (e) {
            return xE.get(e);
          }
        : WN;
    qE.exports = HN;
  });
  var VE = c((D3, GE) => {
    var YN = {};
    GE.exports = YN;
  });
  var Oa = c((x3, UE) => {
    var BE = VE(),
      zN = Object.prototype,
      QN = zN.hasOwnProperty;
    function KN(e) {
      for (
        var t = e.name + "", n = BE[t], r = QN.call(BE, t) ? n.length : 0;
        r--;

      ) {
        var a = n[r],
          i = a.func;
        if (i == null || i == e) return a.name;
      }
      return t;
    }
    UE.exports = KN;
  });
  var ur = c((q3, XE) => {
    var jN = _a(),
      $N = ir(),
      ZN = 4294967295;
    function sr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = ZN),
        (this.__views__ = []);
    }
    sr.prototype = jN($N.prototype);
    sr.prototype.constructor = sr;
    XE.exports = sr;
  });
  var WE = c((G3, kE) => {
    function JN(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    kE.exports = JN;
  });
  var YE = c((V3, HE) => {
    var ew = ur(),
      tw = or(),
      nw = WE();
    function rw(e) {
      if (e instanceof ew) return e.clone();
      var t = new tw(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = nw(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    HE.exports = rw;
  });
  var KE = c((B3, QE) => {
    var iw = ur(),
      zE = or(),
      aw = ir(),
      ow = ge(),
      sw = We(),
      uw = YE(),
      cw = Object.prototype,
      lw = cw.hasOwnProperty;
    function cr(e) {
      if (sw(e) && !ow(e) && !(e instanceof iw)) {
        if (e instanceof zE) return e;
        if (lw.call(e, "__wrapped__")) return uw(e);
      }
      return new zE(e);
    }
    cr.prototype = aw.prototype;
    cr.prototype.constructor = cr;
    QE.exports = cr;
  });
  var $E = c((U3, jE) => {
    var fw = ur(),
      dw = ma(),
      pw = Oa(),
      Ew = KE();
    function gw(e) {
      var t = pw(e),
        n = Ew[t];
      if (typeof n != "function" || !(t in fw.prototype)) return !1;
      if (e === n) return !0;
      var r = dw(n);
      return !!r && e === r[0];
    }
    jE.exports = gw;
  });
  var tg = c((X3, eg) => {
    var ZE = or(),
      Iw = NE(),
      yw = ma(),
      ba = Oa(),
      hw = ge(),
      JE = $E(),
      Tw = "Expected a function",
      vw = 8,
      _w = 32,
      mw = 128,
      Ow = 256;
    function bw(e) {
      return Iw(function (t) {
        var n = t.length,
          r = n,
          a = ZE.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var i = t[r];
          if (typeof i != "function") throw new TypeError(Tw);
          if (a && !o && ba(i) == "wrapper") var o = new ZE([], !0);
        }
        for (r = o ? r : n; ++r < n; ) {
          i = t[r];
          var s = ba(i),
            u = s == "wrapper" ? yw(i) : void 0;
          u &&
          JE(u[0]) &&
          u[1] == (mw | vw | _w | Ow) &&
          !u[4].length &&
          u[9] == 1
            ? (o = o[ba(u[0])].apply(o, u[3]))
            : (o = i.length == 1 && JE(i) ? o[s]() : o.thru(i));
        }
        return function () {
          var f = arguments,
            y = f[0];
          if (o && f.length == 1 && hw(y)) return o.plant(y).value();
          for (var E = 0, d = n ? t[E].apply(this, f) : y; ++E < n; )
            d = t[E].call(this, d);
          return d;
        };
      });
    }
    eg.exports = bw;
  });
  var rg = c((k3, ng) => {
    var Aw = tg(),
      Sw = Aw();
    ng.exports = Sw;
  });
  var ag = c((W3, ig) => {
    function Rw(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    ig.exports = Rw;
  });
  var sg = c((H3, og) => {
    var Lw = ag(),
      Aa = Xn();
    function Cw(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = Aa(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = Aa(t)), (t = t === t ? t : 0)),
        Lw(Aa(e), t, n)
      );
    }
    og.exports = Cw;
  });
  var Ag = c((wa) => {
    "use strict";
    Object.defineProperty(wa, "__esModule", { value: !0 });
    Object.defineProperty(wa, "default", {
      enumerable: !0,
      get: function () {
        return fP;
      },
    });
    var Nw = Na(rg()),
      ww = Na(Bn()),
      Pw = Na(sg()),
      pt = me(),
      Sa = Pa(),
      lr = rr(),
      Mw = dt();
    function Na(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var {
        MOUSE_CLICK: Fw,
        MOUSE_SECOND_CLICK: Dw,
        MOUSE_DOWN: xw,
        MOUSE_UP: qw,
        MOUSE_OVER: Gw,
        MOUSE_OUT: Vw,
        DROPDOWN_CLOSE: Bw,
        DROPDOWN_OPEN: Uw,
        SLIDER_ACTIVE: Xw,
        SLIDER_INACTIVE: kw,
        TAB_ACTIVE: Ww,
        TAB_INACTIVE: Hw,
        NAVBAR_CLOSE: Yw,
        NAVBAR_OPEN: zw,
        MOUSE_MOVE: Qw,
        PAGE_SCROLL_DOWN: Ig,
        SCROLL_INTO_VIEW: yg,
        SCROLL_OUT_OF_VIEW: Kw,
        PAGE_SCROLL_UP: jw,
        SCROLLING_IN_VIEW: $w,
        PAGE_FINISH: hg,
        ECOMMERCE_CART_CLOSE: Zw,
        ECOMMERCE_CART_OPEN: Jw,
        PAGE_START: Tg,
        PAGE_SCROLL: eP,
      } = pt.EventTypeConsts,
      Ra = "COMPONENT_ACTIVE",
      vg = "COMPONENT_INACTIVE",
      { COLON_DELIMITER: ug } = pt.IX2EngineConstants,
      { getNamespacedParameterId: cg } = Mw.IX2VanillaUtils,
      _g = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
      dn = _g(({ element: e, nativeEvent: t }) => e === t.target),
      tP = _g(({ element: e, nativeEvent: t }) => e.contains(t.target)),
      Xe = (0, Nw.default)([dn, tP]),
      mg = (e, t) => {
        if (t) {
          let { ixData: n } = e.getState(),
            { events: r } = n,
            a = r[t];
          if (a && !rP[a.eventTypeId]) return a;
        }
        return null;
      },
      nP = ({ store: e, event: t }) => {
        let { action: n } = t,
          { autoStopEventId: r } = n.config;
        return !!mg(e, r);
      },
      be = ({ store: e, event: t, element: n, eventStateKey: r }, a) => {
        let { action: i, id: o } = t,
          { actionListId: s, autoStopEventId: u } = i.config,
          f = mg(e, u);
        return (
          f &&
            (0, Sa.stopActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: u + ug + r.split(ug)[1],
              actionListId: (0, ww.default)(f, "action.config.actionListId"),
            }),
          (0, Sa.stopActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          (0, Sa.startActionGroup)({
            store: e,
            eventId: o,
            eventTarget: n,
            eventStateKey: r,
            actionListId: s,
          }),
          a
        );
      },
      Pe = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r,
      pn = { handler: Pe(Xe, be) },
      Og = { ...pn, types: [Ra, vg].join(" ") },
      La = [
        { target: window, types: "resize orientationchange", throttle: !0 },
        {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0,
        },
      ],
      lg = "mouseover mouseout",
      Ca = { types: La },
      rP = { PAGE_START: Tg, PAGE_FINISH: hg },
      fn = (() => {
        let e = window.pageXOffset !== void 0,
          n =
            document.compatMode === "CSS1Compat"
              ? document.documentElement
              : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : n.scrollLeft,
          scrollTop: e ? window.pageYOffset : n.scrollTop,
          stiffScrollTop: (0, Pw.default)(
            e ? window.pageYOffset : n.scrollTop,
            0,
            n.scrollHeight - window.innerHeight
          ),
          scrollWidth: n.scrollWidth,
          scrollHeight: n.scrollHeight,
          clientWidth: n.clientWidth,
          clientHeight: n.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
        });
      })(),
      iP = (e, t) =>
        !(
          e.left > t.right ||
          e.right < t.left ||
          e.top > t.bottom ||
          e.bottom < t.top
        ),
      aP = ({ element: e, nativeEvent: t }) => {
        let { type: n, target: r, relatedTarget: a } = t,
          i = e.contains(r);
        if (n === "mouseover" && i) return !0;
        let o = e.contains(a);
        return !!(n === "mouseout" && i && o);
      },
      oP = (e) => {
        let {
            element: t,
            event: { config: n },
          } = e,
          { clientWidth: r, clientHeight: a } = fn(),
          i = n.scrollOffsetValue,
          u = n.scrollOffsetUnit === "PX" ? i : (a * (i || 0)) / 100;
        return iP(t.getBoundingClientRect(), {
          left: 0,
          top: u,
          right: r,
          bottom: a - u,
        });
      },
      bg = (e) => (t, n) => {
        let { type: r } = t.nativeEvent,
          a = [Ra, vg].indexOf(r) !== -1 ? r === Ra : n.isActive,
          i = { ...n, isActive: a };
        return ((!n || i.isActive !== n.isActive) && e(t, i)) || i;
      },
      fg = (e) => (t, n) => {
        let r = { elementHovered: aP(t) };
        return (
          ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
            e(t, r)) ||
          r
        );
      },
      sP = (e) => (t, n) => {
        let r = { ...n, elementVisible: oP(t) };
        return (
          ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
            e(t, r)) ||
          r
        );
      },
      dg =
        (e) =>
        (t, n = {}) => {
          let { stiffScrollTop: r, scrollHeight: a, innerHeight: i } = fn(),
            {
              event: { config: o, eventTypeId: s },
            } = t,
            { scrollOffsetValue: u, scrollOffsetUnit: f } = o,
            y = f === "PX",
            E = a - i,
            d = Number((r / E).toFixed(2));
          if (n && n.percentTop === d) return n;
          let g = (y ? u : (i * (u || 0)) / 100) / E,
            _,
            v,
            A = 0;
          n &&
            ((_ = d > n.percentTop),
            (v = n.scrollingDown !== _),
            (A = v ? d : n.anchorTop));
          let h = s === Ig ? d >= A + g : d <= A - g,
            S = {
              ...n,
              percentTop: d,
              inBounds: h,
              anchorTop: A,
              scrollingDown: _,
            };
          return (n && h && (v || S.inBounds !== n.inBounds) && e(t, S)) || S;
        },
      uP = (e, t) =>
        e.left > t.left &&
        e.left < t.right &&
        e.top > t.top &&
        e.top < t.bottom,
      cP = (e) => (t, n) => {
        let r = { finished: document.readyState === "complete" };
        return r.finished && !(n && n.finshed) && e(t), r;
      },
      lP = (e) => (t, n) => {
        let r = { started: !0 };
        return n || e(t), r;
      },
      pg =
        (e) =>
        (t, n = { clickCount: 0 }) => {
          let r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && e(t, r)) || r;
        },
      fr = (e = !0) => ({
        ...Og,
        handler: Pe(
          e ? Xe : dn,
          bg((t, n) => (n.isActive ? pn.handler(t, n) : n))
        ),
      }),
      dr = (e = !0) => ({
        ...Og,
        handler: Pe(
          e ? Xe : dn,
          bg((t, n) => (n.isActive ? n : pn.handler(t, n)))
        ),
      }),
      Eg = {
        ...Ca,
        handler: sP((e, t) => {
          let { elementVisible: n } = t,
            { event: r, store: a } = e,
            { ixData: i } = a.getState(),
            { events: o } = i;
          return !o[r.action.config.autoStopEventId] && t.triggered
            ? t
            : (r.eventTypeId === yg) === n
            ? (be(e), { ...t, triggered: !0 })
            : t;
        }),
      },
      gg = 0.05,
      fP = {
        [Xw]: fr(),
        [kw]: dr(),
        [Uw]: fr(),
        [Bw]: dr(),
        [zw]: fr(!1),
        [Yw]: dr(!1),
        [Ww]: fr(),
        [Hw]: dr(),
        [Jw]: { types: "ecommerce-cart-open", handler: Pe(Xe, be) },
        [Zw]: { types: "ecommerce-cart-close", handler: Pe(Xe, be) },
        [Fw]: {
          types: "click",
          handler: Pe(
            Xe,
            pg((e, { clickCount: t }) => {
              nP(e) ? t === 1 && be(e) : be(e);
            })
          ),
        },
        [Dw]: {
          types: "click",
          handler: Pe(
            Xe,
            pg((e, { clickCount: t }) => {
              t === 2 && be(e);
            })
          ),
        },
        [xw]: { ...pn, types: "mousedown" },
        [qw]: { ...pn, types: "mouseup" },
        [Gw]: {
          types: lg,
          handler: Pe(
            Xe,
            fg((e, t) => {
              t.elementHovered && be(e);
            })
          ),
        },
        [Vw]: {
          types: lg,
          handler: Pe(
            Xe,
            fg((e, t) => {
              t.elementHovered || be(e);
            })
          ),
        },
        [Qw]: {
          types: "mousemove mouseout scroll",
          handler: (
            {
              store: e,
              element: t,
              eventConfig: n,
              nativeEvent: r,
              eventStateKey: a,
            },
            i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
          ) => {
            let {
                basedOn: o,
                selectedAxis: s,
                continuousParameterGroupId: u,
                reverse: f,
                restingState: y = 0,
              } = n,
              {
                clientX: E = i.clientX,
                clientY: d = i.clientY,
                pageX: g = i.pageX,
                pageY: _ = i.pageY,
              } = r,
              v = s === "X_AXIS",
              A = r.type === "mouseout",
              h = y / 100,
              S = u,
              O = !1;
            switch (o) {
              case pt.EventBasedOn.VIEWPORT: {
                h = v
                  ? Math.min(E, window.innerWidth) / window.innerWidth
                  : Math.min(d, window.innerHeight) / window.innerHeight;
                break;
              }
              case pt.EventBasedOn.PAGE: {
                let {
                  scrollLeft: L,
                  scrollTop: w,
                  scrollWidth: C,
                  scrollHeight: q,
                } = fn();
                h = v ? Math.min(L + g, C) / C : Math.min(w + _, q) / q;
                break;
              }
              case pt.EventBasedOn.ELEMENT:
              default: {
                S = cg(a, u);
                let L = r.type.indexOf("mouse") === 0;
                if (L && Xe({ element: t, nativeEvent: r }) !== !0) break;
                let w = t.getBoundingClientRect(),
                  { left: C, top: q, width: V, height: U } = w;
                if (!L && !uP({ left: E, top: d }, w)) break;
                (O = !0), (h = v ? (E - C) / V : (d - q) / U);
                break;
              }
            }
            return (
              A && (h > 1 - gg || h < gg) && (h = Math.round(h)),
              (o !== pt.EventBasedOn.ELEMENT || O || O !== i.elementHovered) &&
                ((h = f ? 1 - h : h),
                e.dispatch((0, lr.parameterChanged)(S, h))),
              { elementHovered: O, clientX: E, clientY: d, pageX: g, pageY: _ }
            );
          },
        },
        [eP]: {
          types: La,
          handler: ({ store: e, eventConfig: t }) => {
            let { continuousParameterGroupId: n, reverse: r } = t,
              { scrollTop: a, scrollHeight: i, clientHeight: o } = fn(),
              s = a / (i - o);
            (s = r ? 1 - s : s), e.dispatch((0, lr.parameterChanged)(n, s));
          },
        },
        [$w]: {
          types: La,
          handler: (
            { element: e, store: t, eventConfig: n, eventStateKey: r },
            a = { scrollPercent: 0 }
          ) => {
            let {
                scrollLeft: i,
                scrollTop: o,
                scrollWidth: s,
                scrollHeight: u,
                clientHeight: f,
              } = fn(),
              {
                basedOn: y,
                selectedAxis: E,
                continuousParameterGroupId: d,
                startsEntering: g,
                startsExiting: _,
                addEndOffset: v,
                addStartOffset: A,
                addOffsetValue: h = 0,
                endOffsetValue: S = 0,
              } = n,
              O = E === "X_AXIS";
            if (y === pt.EventBasedOn.VIEWPORT) {
              let L = O ? i / s : o / u;
              return (
                L !== a.scrollPercent &&
                  t.dispatch((0, lr.parameterChanged)(d, L)),
                { scrollPercent: L }
              );
            } else {
              let L = cg(r, d),
                w = e.getBoundingClientRect(),
                C = (A ? h : 0) / 100,
                q = (v ? S : 0) / 100;
              (C = g ? C : 1 - C), (q = _ ? q : 1 - q);
              let V = w.top + Math.min(w.height * C, f),
                W = w.top + w.height * q - V,
                Y = Math.min(f + W, u),
                m = Math.min(Math.max(0, f - V), Y) / Y;
              return (
                m !== a.scrollPercent &&
                  t.dispatch((0, lr.parameterChanged)(L, m)),
                { scrollPercent: m }
              );
            }
          },
        },
        [yg]: Eg,
        [Kw]: Eg,
        [Ig]: {
          ...Ca,
          handler: dg((e, t) => {
            t.scrollingDown && be(e);
          }),
        },
        [jw]: {
          ...Ca,
          handler: dg((e, t) => {
            t.scrollingDown || be(e);
          }),
        },
        [hg]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Pe(dn, cP(be)),
        },
        [Tg]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: Pe(dn, lP(be)),
        },
      };
  });
  var Pa = c((Ua) => {
    "use strict";
    Object.defineProperty(Ua, "__esModule", { value: !0 });
    function dP(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    dP(Ua, {
      observeRequests: function () {
        return BP;
      },
      startActionGroup: function () {
        return Ga;
      },
      startEngine: function () {
        return yr;
      },
      stopActionGroup: function () {
        return qa;
      },
      stopAllActionGroups: function () {
        return Dg;
      },
      stopEngine: function () {
        return hr;
      },
    });
    var pP = Ye(Ci()),
      et = Ye(Bn()),
      EP = Ye(up()),
      gP = Ye(Fp()),
      IP = Ye(xp()),
      yP = Ye(Gp()),
      En = Ye(Wp()),
      hP = Ye($p()),
      Se = me(),
      Lg = dt(),
      ce = rr(),
      de = vP(tE()),
      TP = Ye(Ag());
    function Ye(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Cg(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Cg = function (r) {
        return r ? n : t;
      })(e);
    }
    function vP(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Cg(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var _P = Object.keys(Se.QuickEffectIds),
      Ma = (e) => _P.includes(e),
      {
        COLON_DELIMITER: Fa,
        BOUNDARY_SELECTOR: pr,
        HTML_ELEMENT: Ng,
        RENDER_GENERAL: mP,
        W_MOD_IX: Sg,
      } = Se.IX2EngineConstants,
      {
        getAffectedElements: Er,
        getElementId: OP,
        getDestinationValues: Da,
        observeStore: Et,
        getInstanceId: bP,
        renderHTMLElement: AP,
        clearAllStyles: wg,
        getMaxDurationItemIndex: SP,
        getComputedStyle: RP,
        getInstanceOrigin: LP,
        reduceListToGroup: CP,
        shouldNamespaceEventParameter: NP,
        getNamespacedParameterId: wP,
        shouldAllowMediaQuery: gr,
        cleanupHTMLElement: PP,
        clearObjectCache: MP,
        stringifyTarget: FP,
        mediaQueriesEqual: DP,
        shallowEqual: xP,
      } = Lg.IX2VanillaUtils,
      {
        isPluginType: Ir,
        createPluginInstance: xa,
        getPluginDuration: qP,
      } = Lg.IX2VanillaPlugins,
      Rg = navigator.userAgent,
      GP = Rg.match(/iPad/i) || Rg.match(/iPhone/),
      VP = 12;
    function BP(e) {
      Et({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: kP }),
        Et({
          store: e,
          select: ({ ixRequest: t }) => t.playback,
          onChange: WP,
        }),
        Et({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: HP }),
        Et({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: YP });
    }
    function UP(e) {
      Et({
        store: e,
        select: ({ ixSession: t }) => t.mediaQueryKey,
        onChange: () => {
          hr(e),
            wg({ store: e, elementApi: de }),
            yr({ store: e, allowEvents: !0 }),
            Pg();
        },
      });
    }
    function XP(e, t) {
      let n = Et({
        store: e,
        select: ({ ixSession: r }) => r.tick,
        onChange: (r) => {
          t(r), n();
        },
      });
    }
    function kP({ rawData: e, defer: t }, n) {
      let r = () => {
        yr({ store: n, rawData: e, allowEvents: !0 }), Pg();
      };
      t ? setTimeout(r, 0) : r();
    }
    function Pg() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function WP(e, t) {
      let {
          actionTypeId: n,
          actionListId: r,
          actionItemId: a,
          eventId: i,
          allowEvents: o,
          immediate: s,
          testManual: u,
          verbose: f = !0,
        } = e,
        { rawData: y } = e;
      if (r && a && y && s) {
        let E = y.actionLists[r];
        E && (y = CP({ actionList: E, actionItemId: a, rawData: y }));
      }
      if (
        (yr({ store: t, rawData: y, allowEvents: o, testManual: u }),
        (r && n === Se.ActionTypeConsts.GENERAL_START_ACTION) || Ma(n))
      ) {
        qa({ store: t, actionListId: r }),
          Fg({ store: t, actionListId: r, eventId: i });
        let E = Ga({
          store: t,
          eventId: i,
          actionListId: r,
          immediate: s,
          verbose: f,
        });
        f &&
          E &&
          t.dispatch(
            (0, ce.actionListPlaybackChanged)({
              actionListId: r,
              isPlaying: !s,
            })
          );
      }
    }
    function HP({ actionListId: e }, t) {
      e ? qa({ store: t, actionListId: e }) : Dg({ store: t }), hr(t);
    }
    function YP(e, t) {
      hr(t), wg({ store: t, elementApi: de });
    }
    function yr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
      let { ixSession: a } = e.getState();
      t && e.dispatch((0, ce.rawDataImported)(t)),
        a.active ||
          (e.dispatch(
            (0, ce.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(pr),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n &&
            (ZP(e),
            zP(),
            e.getState().ixSession.hasDefinedMediaQueries && UP(e)),
          e.dispatch((0, ce.sessionStarted)()),
          QP(e, r));
    }
    function zP() {
      let { documentElement: e } = document;
      e.className.indexOf(Sg) === -1 && (e.className += ` ${Sg}`);
    }
    function QP(e, t) {
      let n = (r) => {
        let { ixSession: a, ixParameters: i } = e.getState();
        a.active &&
          (e.dispatch((0, ce.animationFrameChanged)(r, i)),
          t ? XP(e, n) : requestAnimationFrame(n));
      };
      n(window.performance.now());
    }
    function hr(e) {
      let { ixSession: t } = e.getState();
      if (t.active) {
        let { eventListeners: n } = t;
        n.forEach(KP), MP(), e.dispatch((0, ce.sessionStopped)());
      }
    }
    function KP({ target: e, listenerParams: t }) {
      e.removeEventListener.apply(e, t);
    }
    function jP({
      store: e,
      eventStateKey: t,
      eventTarget: n,
      eventId: r,
      eventConfig: a,
      actionListId: i,
      parameterGroup: o,
      smoothing: s,
      restingValue: u,
    }) {
      let { ixData: f, ixSession: y } = e.getState(),
        { events: E } = f,
        d = E[r],
        { eventTypeId: g } = d,
        _ = {},
        v = {},
        A = [],
        { continuousActionGroups: h } = o,
        { id: S } = o;
      NP(g, a) && (S = wP(t, S));
      let O = y.hasBoundaryNodes && n ? de.getClosestElement(n, pr) : null;
      h.forEach((L) => {
        let { keyframe: w, actionItems: C } = L;
        C.forEach((q) => {
          let { actionTypeId: V } = q,
            { target: U } = q.config;
          if (!U) return;
          let W = U.boundaryMode ? O : null,
            Y = FP(U) + Fa + V;
          if (((v[Y] = $P(v[Y], w, q)), !_[Y])) {
            _[Y] = !0;
            let { config: M } = q;
            Er({
              config: M,
              event: d,
              eventTarget: n,
              elementRoot: W,
              elementApi: de,
            }).forEach((m) => {
              A.push({ element: m, key: Y });
            });
          }
        });
      }),
        A.forEach(({ element: L, key: w }) => {
          let C = v[w],
            q = (0, et.default)(C, "[0].actionItems[0]", {}),
            { actionTypeId: V } = q,
            W = (
              V === Se.ActionTypeConsts.PLUGIN_RIVE
                ? (q.config?.target?.selectorGuids || []).length === 0
                : Ir(V)
            )
              ? xa(V)(L, q)
              : null,
            Y = Da({ element: L, actionItem: q, elementApi: de }, W);
          Va({
            store: e,
            element: L,
            eventId: r,
            actionListId: i,
            actionItem: q,
            destination: Y,
            continuous: !0,
            parameterId: S,
            actionGroups: C,
            smoothing: s,
            restingValue: u,
            pluginInstance: W,
          });
        });
    }
    function $P(e = [], t, n) {
      let r = [...e],
        a;
      return (
        r.some((i, o) => (i.keyframe === t ? ((a = o), !0) : !1)),
        a == null && ((a = r.length), r.push({ keyframe: t, actionItems: [] })),
        r[a].actionItems.push(n),
        r
      );
    }
    function ZP(e) {
      let { ixData: t } = e.getState(),
        { eventTypeMap: n } = t;
      Mg(e),
        (0, En.default)(n, (a, i) => {
          let o = TP.default[i];
          if (!o) {
            console.warn(`IX2 event type not configured: ${i}`);
            return;
          }
          iM({ logic: o, store: e, events: a });
        });
      let { ixSession: r } = e.getState();
      r.eventListeners.length && eM(e);
    }
    var JP = ["resize", "orientationchange"];
    function eM(e) {
      let t = () => {
        Mg(e);
      };
      JP.forEach((n) => {
        window.addEventListener(n, t),
          e.dispatch((0, ce.eventListenerAdded)(window, [n, t]));
      }),
        t();
    }
    function Mg(e) {
      let { ixSession: t, ixData: n } = e.getState(),
        r = window.innerWidth;
      if (r !== t.viewportWidth) {
        let { mediaQueries: a } = n;
        e.dispatch((0, ce.viewportWidthChanged)({ width: r, mediaQueries: a }));
      }
    }
    var tM = (e, t) => (0, gP.default)((0, yP.default)(e, t), IP.default),
      nM = (e, t) => {
        (0, En.default)(e, (n, r) => {
          n.forEach((a, i) => {
            let o = r + Fa + i;
            t(a, r, o);
          });
        });
      },
      rM = (e) => {
        let t = { target: e.target, targets: e.targets };
        return Er({ config: t, elementApi: de });
      };
    function iM({ logic: e, store: t, events: n }) {
      aM(n);
      let { types: r, handler: a } = e,
        { ixData: i } = t.getState(),
        { actionLists: o } = i,
        s = tM(n, rM);
      if (!(0, EP.default)(s)) return;
      (0, En.default)(s, (E, d) => {
        let g = n[d],
          { action: _, id: v, mediaQueries: A = i.mediaQueryKeys } = g,
          { actionListId: h } = _.config;
        DP(A, i.mediaQueryKeys) || t.dispatch((0, ce.mediaQueriesDefined)()),
          _.actionTypeId === Se.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
            (Array.isArray(g.config) ? g.config : [g.config]).forEach((O) => {
              let { continuousParameterGroupId: L } = O,
                w = (0, et.default)(o, `${h}.continuousParameterGroups`, []),
                C = (0, pP.default)(w, ({ id: U }) => U === L),
                q = (O.smoothing || 0) / 100,
                V = (O.restingState || 0) / 100;
              C &&
                E.forEach((U, W) => {
                  let Y = v + Fa + W;
                  jP({
                    store: t,
                    eventStateKey: Y,
                    eventTarget: U,
                    eventId: v,
                    eventConfig: O,
                    actionListId: h,
                    parameterGroup: C,
                    smoothing: q,
                    restingValue: V,
                  });
                });
            }),
          (_.actionTypeId === Se.ActionTypeConsts.GENERAL_START_ACTION ||
            Ma(_.actionTypeId)) &&
            Fg({ store: t, actionListId: h, eventId: v });
      });
      let u = (E) => {
          let { ixSession: d } = t.getState();
          nM(s, (g, _, v) => {
            let A = n[_],
              h = d.eventState[v],
              { action: S, mediaQueries: O = i.mediaQueryKeys } = A;
            if (!gr(O, d.mediaQueryKey)) return;
            let L = (w = {}) => {
              let C = a(
                {
                  store: t,
                  element: g,
                  event: A,
                  eventConfig: w,
                  nativeEvent: E,
                  eventStateKey: v,
                },
                h
              );
              xP(C, h) || t.dispatch((0, ce.eventStateChanged)(v, C));
            };
            S.actionTypeId === Se.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
              ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(L)
              : L();
          });
        },
        f = (0, hP.default)(u, VP),
        y = ({ target: E = document, types: d, throttle: g }) => {
          d.split(" ")
            .filter(Boolean)
            .forEach((_) => {
              let v = g ? f : u;
              E.addEventListener(_, v),
                t.dispatch((0, ce.eventListenerAdded)(E, [_, v]));
            });
        };
      Array.isArray(r) ? r.forEach(y) : typeof r == "string" && y(e);
    }
    function aM(e) {
      if (!GP) return;
      let t = {},
        n = "";
      for (let r in e) {
        let { eventTypeId: a, target: i } = e[r],
          o = de.getQuerySelector(i);
        t[o] ||
          ((a === Se.EventTypeConsts.MOUSE_CLICK ||
            a === Se.EventTypeConsts.MOUSE_SECOND_CLICK) &&
            ((t[o] = !0),
            (n += o + "{cursor: pointer;touch-action: manipulation;}")));
      }
      if (n) {
        let r = document.createElement("style");
        (r.textContent = n), document.body.appendChild(r);
      }
    }
    function Fg({ store: e, actionListId: t, eventId: n }) {
      let { ixData: r, ixSession: a } = e.getState(),
        { actionLists: i, events: o } = r,
        s = o[n],
        u = i[t];
      if (u && u.useFirstGroupAsInitialState) {
        let f = (0, et.default)(u, "actionItemGroups[0].actionItems", []),
          y = (0, et.default)(s, "mediaQueries", r.mediaQueryKeys);
        if (!gr(y, a.mediaQueryKey)) return;
        f.forEach((E) => {
          let { config: d, actionTypeId: g } = E,
            _ =
              d?.target?.useEventTarget === !0 && d?.target?.objectId == null
                ? { target: s.target, targets: s.targets }
                : d,
            v = Er({ config: _, event: s, elementApi: de }),
            A = Ir(g);
          v.forEach((h) => {
            let S = A ? xa(g)(h, E) : null;
            Va({
              destination: Da({ element: h, actionItem: E, elementApi: de }, S),
              immediate: !0,
              store: e,
              element: h,
              eventId: n,
              actionItem: E,
              actionListId: t,
              pluginInstance: S,
            });
          });
        });
      }
    }
    function Dg({ store: e }) {
      let { ixInstances: t } = e.getState();
      (0, En.default)(t, (n) => {
        if (!n.continuous) {
          let { actionListId: r, verbose: a } = n;
          Ba(n, e),
            a &&
              e.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: r,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function qa({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
    }) {
      let { ixInstances: i, ixSession: o } = e.getState(),
        s = o.hasBoundaryNodes && n ? de.getClosestElement(n, pr) : null;
      (0, En.default)(i, (u) => {
        let f = (0, et.default)(u, "actionItem.config.target.boundaryMode"),
          y = r ? u.eventStateKey === r : !0;
        if (u.actionListId === a && u.eventId === t && y) {
          if (s && f && !de.elementContains(s, u.element)) return;
          Ba(u, e),
            u.verbose &&
              e.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !1,
                })
              );
        }
      });
    }
    function Ga({
      store: e,
      eventId: t,
      eventTarget: n,
      eventStateKey: r,
      actionListId: a,
      groupIndex: i = 0,
      immediate: o,
      verbose: s,
    }) {
      let { ixData: u, ixSession: f } = e.getState(),
        { events: y } = u,
        E = y[t] || {},
        { mediaQueries: d = u.mediaQueryKeys } = E,
        g = (0, et.default)(u, `actionLists.${a}`, {}),
        { actionItemGroups: _, useFirstGroupAsInitialState: v } = g;
      if (!_ || !_.length) return !1;
      i >= _.length && (0, et.default)(E, "config.loop") && (i = 0),
        i === 0 && v && i++;
      let h =
          (i === 0 || (i === 1 && v)) && Ma(E.action?.actionTypeId)
            ? E.config.delay
            : void 0,
        S = (0, et.default)(_, [i, "actionItems"], []);
      if (!S.length || !gr(d, f.mediaQueryKey)) return !1;
      let O = f.hasBoundaryNodes && n ? de.getClosestElement(n, pr) : null,
        L = SP(S),
        w = !1;
      return (
        S.forEach((C, q) => {
          let { config: V, actionTypeId: U } = C,
            W = Ir(U),
            { target: Y } = V;
          if (!Y) return;
          let M = Y.boundaryMode ? O : null;
          Er({
            config: V,
            event: E,
            eventTarget: n,
            elementRoot: M,
            elementApi: de,
          }).forEach((P, B) => {
            let x = W ? xa(U)(P, C) : null,
              z = W ? qP(U)(P, C) : null;
            w = !0;
            let Q = L === q && B === 0,
              ee = RP({ element: P, actionItem: C }),
              ye = Da({ element: P, actionItem: C, elementApi: de }, x);
            Va({
              store: e,
              element: P,
              actionItem: C,
              eventId: t,
              eventTarget: n,
              eventStateKey: r,
              actionListId: a,
              groupIndex: i,
              isCarrier: Q,
              computedStyle: ee,
              destination: ye,
              immediate: o,
              verbose: s,
              pluginInstance: x,
              pluginDuration: z,
              instanceDelay: h,
            });
          });
        }),
        w
      );
    }
    function Va(e) {
      let { store: t, computedStyle: n, ...r } = e,
        {
          element: a,
          actionItem: i,
          immediate: o,
          pluginInstance: s,
          continuous: u,
          restingValue: f,
          eventId: y,
        } = r,
        E = !u,
        d = bP(),
        { ixElements: g, ixSession: _, ixData: v } = t.getState(),
        A = OP(g, a),
        { refState: h } = g[A] || {},
        S = de.getRefType(a),
        O = _.reducedMotion && Se.ReducedMotionTypes[i.actionTypeId],
        L;
      if (O && u)
        switch (v.events[y]?.eventTypeId) {
          case Se.EventTypeConsts.MOUSE_MOVE:
          case Se.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            L = f;
            break;
          default:
            L = 0.5;
            break;
        }
      let w = LP(a, h, n, i, de, s);
      if (
        (t.dispatch(
          (0, ce.instanceAdded)({
            instanceId: d,
            elementId: A,
            origin: w,
            refType: S,
            skipMotion: O,
            skipToValue: L,
            ...r,
          })
        ),
        xg(document.body, "ix2-animation-started", d),
        o)
      ) {
        oM(t, d);
        return;
      }
      Et({ store: t, select: ({ ixInstances: C }) => C[d], onChange: qg }),
        E && t.dispatch((0, ce.instanceStarted)(d, _.tick));
    }
    function Ba(e, t) {
      xg(document.body, "ix2-animation-stopping", {
        instanceId: e.id,
        state: t.getState(),
      });
      let { elementId: n, actionItem: r } = e,
        { ixElements: a } = t.getState(),
        { ref: i, refType: o } = a[n] || {};
      o === Ng && PP(i, r, de), t.dispatch((0, ce.instanceRemoved)(e.id));
    }
    function xg(e, t, n) {
      let r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
    }
    function oM(e, t) {
      let { ixParameters: n } = e.getState();
      e.dispatch((0, ce.instanceStarted)(t, 0)),
        e.dispatch((0, ce.animationFrameChanged)(performance.now(), n));
      let { ixInstances: r } = e.getState();
      qg(r[t], e);
    }
    function qg(e, t) {
      let {
          active: n,
          continuous: r,
          complete: a,
          elementId: i,
          actionItem: o,
          actionTypeId: s,
          renderType: u,
          current: f,
          groupIndex: y,
          eventId: E,
          eventTarget: d,
          eventStateKey: g,
          actionListId: _,
          isCarrier: v,
          styleProp: A,
          verbose: h,
          pluginInstance: S,
        } = e,
        { ixData: O, ixSession: L } = t.getState(),
        { events: w } = O,
        C = w && w[E] ? w[E] : {},
        { mediaQueries: q = O.mediaQueryKeys } = C;
      if (gr(q, L.mediaQueryKey) && (r || n || a)) {
        if (f || (u === mP && a)) {
          t.dispatch((0, ce.elementStateChanged)(i, s, f, o));
          let { ixElements: V } = t.getState(),
            { ref: U, refType: W, refState: Y } = V[i] || {},
            M = Y && Y[s];
          (W === Ng || Ir(s)) && AP(U, Y, M, E, o, A, de, u, S);
        }
        if (a) {
          if (v) {
            let V = Ga({
              store: t,
              eventId: E,
              eventTarget: d,
              eventStateKey: g,
              actionListId: _,
              groupIndex: y + 1,
              verbose: h,
            });
            h &&
              !V &&
              t.dispatch(
                (0, ce.actionListPlaybackChanged)({
                  actionListId: _,
                  isPlaying: !1,
                })
              );
          }
          Ba(e, t);
        }
      }
    }
  });
  var Bg = c((ka) => {
    "use strict";
    Object.defineProperty(ka, "__esModule", { value: !0 });
    function sM(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    sM(ka, {
      actions: function () {
        return lM;
      },
      destroy: function () {
        return Vg;
      },
      init: function () {
        return EM;
      },
      setEnv: function () {
        return pM;
      },
      store: function () {
        return Tr;
      },
    });
    var uM = Wr(),
      cM = fM(kd()),
      Xa = Pa(),
      lM = dM(rr());
    function fM(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Gg(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Gg = function (r) {
        return r ? n : t;
      })(e);
    }
    function dM(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Gg(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set)
            ? Object.defineProperty(r, i, o)
            : (r[i] = e[i]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Tr = (0, uM.createStore)(cM.default);
    function pM(e) {
      e() && (0, Xa.observeRequests)(Tr);
    }
    function EM(e) {
      Vg(), (0, Xa.startEngine)({ store: Tr, rawData: e, allowEvents: !0 });
    }
    function Vg() {
      (0, Xa.stopEngine)(Tr);
    }
  });
  var Wg = c((K3, kg) => {
    "use strict";
    var Ug = xe(),
      Xg = Bg();
    Xg.setEnv(Ug.env);
    Ug.define(
      "ix2",
      (kg.exports = function () {
        return Xg;
      })
    );
  });
  var zg = c((j3, Yg) => {
    "use strict";
    var Wa = window.jQuery,
      ke = {},
      vr = [],
      Hg = ".w-ix",
      _r = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Wa(t).triggerHandler(ke.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Wa(t).triggerHandler(ke.types.OUTRO));
        },
      };
    ke.triggers = {};
    ke.types = { INTRO: "w-ix-intro" + Hg, OUTRO: "w-ix-outro" + Hg };
    ke.init = function () {
      for (var e = vr.length, t = 0; t < e; t++) {
        var n = vr[t];
        n[0](0, n[1]);
      }
      (vr = []), Wa.extend(ke.triggers, _r);
    };
    ke.async = function () {
      for (var e in _r) {
        var t = _r[e];
        _r.hasOwnProperty(e) &&
          (ke.triggers[e] = function (n, r) {
            vr.push([t, r]);
          });
      }
    };
    ke.async();
    Yg.exports = ke;
  });
  var Ya = c(($3, jg) => {
    "use strict";
    var Ha = zg();
    function Qg(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var gM = window.jQuery,
      mr = {},
      Kg = ".w-ix",
      IM = {
        reset: function (e, t) {
          Ha.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ha.triggers.intro(e, t), Qg(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ha.triggers.outro(e, t), Qg(t, "COMPONENT_INACTIVE");
        },
      };
    mr.triggers = {};
    mr.types = { INTRO: "w-ix-intro" + Kg, OUTRO: "w-ix-outro" + Kg };
    gM.extend(mr.triggers, IM);
    jg.exports = mr;
  });
  var Zg = c((Z3, $g) => {
    "use strict";
    var tt = xe(),
      yM = Ya(),
      Ie = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    tt.define(
      "navbar",
      ($g.exports = function (e, t) {
        var n = {},
          r = e.tram,
          a = e(window),
          i = e(document),
          o = t.debounce,
          s,
          u,
          f,
          y,
          E = tt.env(),
          d = '<div class="w-nav-overlay" data-wf-ignore />',
          g = ".w-nav",
          _ = "w--open",
          v = "w--nav-dropdown-open",
          A = "w--nav-dropdown-toggle-open",
          h = "w--nav-dropdown-list-open",
          S = "w--nav-link-open",
          O = yM.triggers,
          L = e();
        (n.ready = n.design = n.preview = w),
          (n.destroy = function () {
            (L = e()), C(), u && u.length && u.each(W);
          });
        function w() {
          (f = E && tt.env("design")),
            (y = tt.env("editor")),
            (s = e(document.body)),
            (u = i.find(g)),
            u.length && (u.each(U), C(), q());
        }
        function C() {
          tt.resize.off(V);
        }
        function q() {
          tt.resize.on(V);
        }
        function V() {
          u.each(K);
        }
        function U(p, D) {
          var X = e(D),
            G = e.data(D, g);
          G ||
            (G = e.data(D, g, {
              open: !1,
              el: X,
              config: {},
              selectedIdx: -1,
            })),
            (G.menu = X.find(".w-nav-menu")),
            (G.links = G.menu.find(".w-nav-link")),
            (G.dropdowns = G.menu.find(".w-dropdown")),
            (G.dropdownToggle = G.menu.find(".w-dropdown-toggle")),
            (G.dropdownList = G.menu.find(".w-dropdown-list")),
            (G.button = X.find(".w-nav-button")),
            (G.container = X.find(".w-container")),
            (G.overlayContainerId = "w-nav-overlay-" + p),
            (G.outside = Me(G));
          var oe = X.find(".w-nav-brand");
          oe &&
            oe.attr("href") === "/" &&
            oe.attr("aria-label") == null &&
            oe.attr("aria-label", "home"),
            G.button.attr("style", "-webkit-user-select: text;"),
            G.button.attr("aria-label") == null &&
              G.button.attr("aria-label", "menu"),
            G.button.attr("role", "button"),
            G.button.attr("tabindex", "0"),
            G.button.attr("aria-controls", G.overlayContainerId),
            G.button.attr("aria-haspopup", "menu"),
            G.button.attr("aria-expanded", "false"),
            G.el.off(g),
            G.button.off(g),
            G.menu.off(g),
            m(G),
            f
              ? (Y(G), G.el.on("setting" + g, P(G)))
              : (M(G),
                G.button.on("click" + g, ee(G)),
                G.menu.on("click" + g, "a", ye(G)),
                G.button.on("keydown" + g, B(G)),
                G.el.on("keydown" + g, x(G))),
            K(p, D);
        }
        function W(p, D) {
          var X = e.data(D, g);
          X && (Y(X), e.removeData(D, g));
        }
        function Y(p) {
          p.overlay && (ie(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function M(p) {
          p.overlay ||
            ((p.overlay = e(d).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            ie(p, !0));
        }
        function m(p) {
          var D = {},
            X = p.config || {},
            G = (D.animation = p.el.attr("data-animation") || "default");
          (D.animOver = /^over/.test(G)),
            (D.animDirect = /left$/.test(G) ? -1 : 1),
            X.animation !== G && p.open && t.defer(Q, p),
            (D.easing = p.el.attr("data-easing") || "ease"),
            (D.easing2 = p.el.attr("data-easing2") || "ease");
          var oe = p.el.attr("data-duration");
          (D.duration = oe != null ? Number(oe) : 400),
            (D.docHeight = p.el.attr("data-doc-height")),
            (p.config = D);
        }
        function P(p) {
          return function (D, X) {
            X = X || {};
            var G = a.width();
            m(p),
              X.open === !0 && ze(p, !0),
              X.open === !1 && ie(p, !0),
              p.open &&
                t.defer(function () {
                  G !== a.width() && Q(p);
                });
          };
        }
        function B(p) {
          return function (D) {
            switch (D.keyCode) {
              case Ie.SPACE:
              case Ie.ENTER:
                return ee(p)(), D.preventDefault(), D.stopPropagation();
              case Ie.ESCAPE:
                return ie(p), D.preventDefault(), D.stopPropagation();
              case Ie.ARROW_RIGHT:
              case Ie.ARROW_DOWN:
              case Ie.HOME:
              case Ie.END:
                return p.open
                  ? (D.keyCode === Ie.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    z(p),
                    D.preventDefault(),
                    D.stopPropagation())
                  : (D.preventDefault(), D.stopPropagation());
            }
          };
        }
        function x(p) {
          return function (D) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                D.keyCode)
              ) {
                case Ie.HOME:
                case Ie.END:
                  return (
                    D.keyCode === Ie.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    z(p),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
                case Ie.ESCAPE:
                  return (
                    ie(p),
                    p.button.focus(),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
                case Ie.ARROW_LEFT:
                case Ie.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    z(p),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
                case Ie.ARROW_RIGHT:
                case Ie.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    z(p),
                    D.preventDefault(),
                    D.stopPropagation()
                  );
              }
          };
        }
        function z(p) {
          if (p.links[p.selectedIdx]) {
            var D = p.links[p.selectedIdx];
            D.focus(), ye(D);
          }
        }
        function Q(p) {
          p.open && (ie(p, !0), ze(p, !0));
        }
        function ee(p) {
          return o(function () {
            p.open ? ie(p) : ze(p);
          });
        }
        function ye(p) {
          return function (D) {
            var X = e(this),
              G = X.attr("href");
            if (!tt.validClick(D.currentTarget)) {
              D.preventDefault();
              return;
            }
            G && G.indexOf("#") === 0 && p.open && ie(p);
          };
        }
        function Me(p) {
          return (
            p.outside && i.off("click" + g, p.outside),
            function (D) {
              var X = e(D.target);
              (y && X.closest(".w-editor-bem-EditorOverlay").length) ||
                pe(p, X);
            }
          );
        }
        var pe = o(function (p, D) {
          if (p.open) {
            var X = D.closest(".w-nav-menu");
            p.menu.is(X) || ie(p);
          }
        });
        function K(p, D) {
          var X = e.data(D, g),
            G = (X.collapsed = X.button.css("display") !== "none");
          if ((X.open && !G && !f && ie(X, !0), X.container.length)) {
            var oe = nt(X);
            X.links.each(oe), X.dropdowns.each(oe);
          }
          X.open && Ut(X);
        }
        var Ee = "max-width";
        function nt(p) {
          var D = p.container.css(Ee);
          return (
            D === "none" && (D = ""),
            function (X, G) {
              (G = e(G)), G.css(Ee, ""), G.css(Ee) === "none" && G.css(Ee, D);
            }
          );
        }
        function gt(p, D) {
          D.setAttribute("data-nav-menu-open", "");
        }
        function rt(p, D) {
          D.removeAttribute("data-nav-menu-open");
        }
        function ze(p, D) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each(gt),
            p.links.addClass(S),
            p.dropdowns.addClass(v),
            p.dropdownToggle.addClass(A),
            p.dropdownList.addClass(h),
            p.button.addClass(_);
          var X = p.config,
            G = X.animation;
          (G === "none" || !r.support.transform || X.duration <= 0) && (D = !0);
          var oe = Ut(p),
            Xt = p.menu.outerHeight(!0),
            it = p.menu.outerWidth(!0),
            l = p.el.height(),
            I = p.el[0];
          if (
            (K(0, I),
            O.intro(0, I),
            tt.redraw.up(),
            f || i.on("click" + g, p.outside),
            D)
          ) {
            N();
            return;
          }
          var T = "transform " + X.duration + "ms " + X.easing;
          if (
            (p.overlay &&
              ((L = p.menu.prev()), p.overlay.show().append(p.menu)),
            X.animOver)
          ) {
            r(p.menu)
              .add(T)
              .set({ x: X.animDirect * it, height: oe })
              .start({ x: 0 })
              .then(N),
              p.overlay && p.overlay.width(it);
            return;
          }
          var b = l + Xt;
          r(p.menu).add(T).set({ y: -b }).start({ y: 0 }).then(N);
          function N() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function Ut(p) {
          var D = p.config,
            X = D.docHeight ? i.height() : s.height();
          return (
            D.animOver
              ? p.menu.height(X)
              : p.el.css("position") !== "fixed" && (X -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height(X),
            X
          );
        }
        function ie(p, D) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(_);
          var X = p.config;
          if (
            ((X.animation === "none" ||
              !r.support.transform ||
              X.duration <= 0) &&
              (D = !0),
            O.outro(0, p.el[0]),
            i.off("click" + g, p.outside),
            D)
          ) {
            r(p.menu).stop(), I();
            return;
          }
          var G = "transform " + X.duration + "ms " + X.easing2,
            oe = p.menu.outerHeight(!0),
            Xt = p.menu.outerWidth(!0),
            it = p.el.height();
          if (X.animOver) {
            r(p.menu)
              .add(G)
              .start({ x: Xt * X.animDirect })
              .then(I);
            return;
          }
          var l = it + oe;
          r(p.menu).add(G).start({ y: -l }).then(I);
          function I() {
            p.menu.height(""),
              r(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(rt),
              p.links.removeClass(S),
              p.dropdowns.removeClass(v),
              p.dropdownToggle.removeClass(A),
              p.dropdownList.removeClass(h),
              p.overlay &&
                p.overlay.children().length &&
                (L.length ? p.menu.insertAfter(L) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return n;
      })
    );
  });
  ao();
  so();
  co();
  po();
  go();
  yo();
  To();
  Wg();
  Ya();
  Zg();
  Webflow.require("ix2").init({
    events: {
      e: {
        id: "e",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-2",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725402379884,
      },
      "e-5": {
        id: "e-5",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-3",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-6",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "5a9b3cc1-a2d1-c619-b9b4-dceef55511f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "5a9b3cc1-a2d1-c619-b9b4-dceef55511f7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725530997488,
      },
      "e-6": {
        id: "e-6",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-4",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-5",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "5a9b3cc1-a2d1-c619-b9b4-dceef55511f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "5a9b3cc1-a2d1-c619-b9b4-dceef55511f7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725530997488,
      },
      "e-7": {
        id: "e-7",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-6",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-8",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725863078845,
      },
      "e-10": {
        id: "e-10",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-11" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".section-heading-wrap",
          originalId:
            "66d5553aa640d66c668df6ef|351237da-f88f-7e98-1e29-339be869cb1e",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".section-heading-wrap",
            originalId:
              "66d5553aa640d66c668df6ef|351237da-f88f-7e98-1e29-339be869cb1e",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725865001348,
      },
      "e-14": {
        id: "e-14",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-15" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".feature-text",
          originalId:
            "66d5553aa640d66c668df6ef|77c47641-a404-a87a-07d3-628833cce1be",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".feature-text",
            originalId:
              "66d5553aa640d66c668df6ef|77c47641-a404-a87a-07d3-628833cce1be",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725865027209,
      },
      "e-16": {
        id: "e-16",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-17" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".feature-image-background",
          originalId:
            "66d5553aa640d66c668df6ef|283c79aa-850a-f070-be2a-b05fd8dafbd4",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".feature-image-background",
            originalId:
              "66d5553aa640d66c668df6ef|283c79aa-850a-f070-be2a-b05fd8dafbd4",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725865085290,
      },
      "e-18": {
        id: "e-18",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "GROW_EFFECT",
          instant: !1,
          config: { actionListId: "growIn", autoStopEventId: "e-19" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".feature-image",
          originalId:
            "66d5553aa640d66c668df6ef|7d8fe5bb-d87c-badd-ebab-0c3aee68fc7c",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".feature-image",
            originalId:
              "66d5553aa640d66c668df6ef|7d8fe5bb-d87c-badd-ebab-0c3aee68fc7c",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725865108078,
      },
      "e-20": {
        id: "e-20",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-21" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".feature-image-glow",
          originalId:
            "66d5553aa640d66c668df6ef|195e1878-d477-8255-d6bd-4aa87f5bfb30",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".feature-image-glow",
            originalId:
              "66d5553aa640d66c668df6ef|195e1878-d477-8255-d6bd-4aa87f5bfb30",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 600,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725865146995,
      },
      "e-22": {
        id: "e-22",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-23" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|7f4ee458-b874-637a-4d0e-15061e9a6ecc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|7f4ee458-b874-637a-4d0e-15061e9a6ecc",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725865588281,
      },
      "e-24": {
        id: "e-24",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-25" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".section-heading-paragraph.hero",
          originalId:
            "66d5553aa640d66c668df6ef|351237da-f88f-7e98-1e29-339be869cb29",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".section-heading-paragraph.hero",
            originalId:
              "66d5553aa640d66c668df6ef|351237da-f88f-7e98-1e29-339be869cb29",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725865619356,
      },
      "e-26": {
        id: "e-26",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-27" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|8faeacb8-8064-021d-fad5-8100f796296b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|8faeacb8-8064-021d-fad5-8100f796296b",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 500,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725865655690,
      },
      "e-28": {
        id: "e-28",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-29" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|39e3e3bf-8631-4a8b-762b-7a661dd99f84",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|39e3e3bf-8631-4a8b-762b-7a661dd99f84",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 600,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725865665696,
      },
      "e-30": {
        id: "e-30",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-31" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|4032a77b-37f3-03d9-5d0f-66d810caff17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|4032a77b-37f3-03d9-5d0f-66d810caff17",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725866518724,
      },
      "e-32": {
        id: "e-32",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-33" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|4032a77b-37f3-03d9-5d0f-66d810caff42",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|4032a77b-37f3-03d9-5d0f-66d810caff42",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725866537949,
      },
      "e-34": {
        id: "e-34",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-35" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|4032a77b-37f3-03d9-5d0f-66d810caff70",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|4032a77b-37f3-03d9-5d0f-66d810caff70",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725866552801,
      },
      "e-36": {
        id: "e-36",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-37" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|73dde965-fdf0-c65a-21d8-708ddccf0ad3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|73dde965-fdf0-c65a-21d8-708ddccf0ad3",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 500,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725866568555,
      },
      "e-38": {
        id: "e-38",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-39" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|6292b309-c400-788d-de0c-7fd713399ff2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|6292b309-c400-788d-de0c-7fd713399ff2",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725867368943,
      },
      "e-40": {
        id: "e-40",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-8",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-41",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725876007635,
      },
      "e-42": {
        id: "e-42",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-7",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-43",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725877258024,
      },
      "e-44": {
        id: "e-44",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-9",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-45",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725877365133,
      },
      "e-46": {
        id: "e-46",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-10",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-47",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725877451201,
      },
      "e-48": {
        id: "e-48",
        name: "",
        animationType: "custom",
        eventTypeId: "PAGE_START",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-2",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-49",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef",
            appliesTo: "PAGE",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !0,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1725879206458,
      },
      "e-50": {
        id: "e-50",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-51" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d69ad0b479abf979410d9a|99c7a7dc-db0c-ba97-d98c-bd69fce2e95e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d69ad0b479abf979410d9a|99c7a7dc-db0c-ba97-d98c-bd69fce2e95e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940233660,
      },
      "e-54": {
        id: "e-54",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-55" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d69ad0b479abf979410d9a|99c7a7dc-db0c-ba97-d98c-bd69fce2e96e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d69ad0b479abf979410d9a|99c7a7dc-db0c-ba97-d98c-bd69fce2e96e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940259441,
      },
      "e-56": {
        id: "e-56",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-57" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d69ad0b479abf979410d9a|99c7a7dc-db0c-ba97-d98c-bd69fce2eaa1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d69ad0b479abf979410d9a|99c7a7dc-db0c-ba97-d98c-bd69fce2eaa1",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 500,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940278257,
      },
      "e-58": {
        id: "e-58",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-59" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d69367692ac11354a93e29|f6fabd54-82e2-3054-7872-26d3dac955f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d69367692ac11354a93e29|f6fabd54-82e2-3054-7872-26d3dac955f7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940321026,
      },
      "e-60": {
        id: "e-60",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-61" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d69367692ac11354a93e29|6878b974-4e29-e477-65d8-ab2ea6e9d789",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d69367692ac11354a93e29|6878b974-4e29-e477-65d8-ab2ea6e9d789",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940331478,
      },
      "e-62": {
        id: "e-62",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-63" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3a0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 250,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940353382,
      },
      "e-64": {
        id: "e-64",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-65" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3a4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3a4",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940364402,
      },
      "e-66": {
        id: "e-66",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-67" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3b1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3b1",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940383672,
      },
      "e-68": {
        id: "e-68",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-69" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          selector: ".sg-content-typface",
          originalId:
            "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3b8",
          appliesTo: "CLASS",
        },
        targets: [
          {
            selector: ".sg-content-typface",
            originalId:
              "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3b8",
            appliesTo: "CLASS",
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940412378,
      },
      "e-70": {
        id: "e-70",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-71" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3eb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3eb",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940435730,
      },
      "e-72": {
        id: "e-72",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-73" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3f0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a3f0",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940448796,
      },
      "e-74": {
        id: "e-74",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-75" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a43a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a43a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940465703,
      },
      "e-76": {
        id: "e-76",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-77" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a48e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a48e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940475292,
      },
      "e-78": {
        id: "e-78",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-79" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a4e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a4e3",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940485163,
      },
      "e-80": {
        id: "e-80",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-81" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a51e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a51e",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940498067,
      },
      "e-82": {
        id: "e-82",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-83" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a534",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a534",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940511662,
      },
      "e-84": {
        id: "e-84",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "FADE_EFFECT",
          instant: !1,
          config: { actionListId: "fadeIn", autoStopEventId: "e-85" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a53a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d593b071c59057e548a222|47fdf5f0-ac37-5947-5f7c-7f1d3006a53a",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: null,
          effectIn: !0,
        },
        createdOn: 1725940524810,
      },
      "e-86": {
        id: "e-86",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-87" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|d5533fd3-66c2-b074-207b-a721fcf8dc96",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|d5533fd3-66c2-b074-207b-a721fcf8dc96",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940600340,
      },
      "e-88": {
        id: "e-88",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-89" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|ad4e63a6-837e-17a7-70b4-0b124a7356f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|ad4e63a6-837e-17a7-70b4-0b124a7356f7",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 500,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1725940618557,
      },
      "e-90": {
        id: "e-90",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-11",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-91",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "3bc65fa4-982e-f1c0-9c17-01a9fe604f95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "3bc65fa4-982e-f1c0-9c17-01a9fe604f95",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1726045563582,
      },
      "e-91": {
        id: "e-91",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-12",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-90",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "3bc65fa4-982e-f1c0-9c17-01a9fe604f95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "3bc65fa4-982e-f1c0-9c17-01a9fe604f95",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1726045563583,
      },
      "e-92": {
        id: "e-92",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-93" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|306551e4-7842-07dd-fec0-359f68c0fd2c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|306551e4-7842-07dd-fec0-359f68c0fd2c",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1726792157937,
      },
      "e-94": {
        id: "e-94",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-95" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "5a9b3cc1-a2d1-c619-b9b4-dceef55511f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "5a9b3cc1-a2d1-c619-b9b4-dceef55511f6",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1726792174243,
      },
      "e-96": {
        id: "e-96",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-97" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|36b8361e-227e-8e22-c0bb-a798282e1485",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|36b8361e-227e-8e22-c0bb-a798282e1485",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1732195070001,
      },
      "e-98": {
        id: "e-98",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-99" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|36b8361e-227e-8e22-c0bb-a798282e14b1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|36b8361e-227e-8e22-c0bb-a798282e14b1",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 300,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1732195070001,
      },
      "e-100": {
        id: "e-100",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-101" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|36b8361e-227e-8e22-c0bb-a798282e14e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|36b8361e-227e-8e22-c0bb-a798282e14e2",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 400,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1732195070001,
      },
      "e-102": {
        id: "e-102",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-13",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-103",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|10977164-c600-0a26-91d6-efc902e4a688",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|10977164-c600-0a26-91d6-efc902e4a688",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1732195092805,
      },
      "e-103": {
        id: "e-103",
        name: "",
        animationType: "custom",
        eventTypeId: "MOUSE_SECOND_CLICK",
        action: {
          id: "",
          actionTypeId: "GENERAL_START_ACTION",
          config: {
            delay: 0,
            easing: "",
            duration: 0,
            actionListId: "a-14",
            affectedElements: {},
            playInReverse: !1,
            autoStopEventId: "e-102",
          },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|10977164-c600-0a26-91d6-efc902e4a688",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|10977164-c600-0a26-91d6-efc902e4a688",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: null,
          scrollOffsetUnit: null,
          delay: null,
          direction: null,
          effectIn: null,
        },
        createdOn: 1732195092809,
      },
      "e-104": {
        id: "e-104",
        name: "",
        animationType: "preset",
        eventTypeId: "SCROLL_INTO_VIEW",
        action: {
          id: "",
          actionTypeId: "SLIDE_EFFECT",
          instant: !1,
          config: { actionListId: "slideInBottom", autoStopEventId: "e-105" },
        },
        mediaQueries: ["main", "medium", "small", "tiny"],
        target: {
          id: "66d5553aa640d66c668df6ef|0e1861b4-06b1-4a3b-6c03-021016fc309b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
        targets: [
          {
            id: "66d5553aa640d66c668df6ef|0e1861b4-06b1-4a3b-6c03-021016fc309b",
            appliesTo: "ELEMENT",
            styleBlockIds: [],
          },
        ],
        config: {
          loop: !1,
          playInReverse: !1,
          scrollOffsetValue: 0,
          scrollOffsetUnit: "%",
          delay: 200,
          direction: "BOTTOM",
          effectIn: !0,
        },
        createdOn: 1732197172774,
      },
    },
    actionLists: {
      a: {
        id: "a",
        title: "Logos Marquee",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".logos-wrap",
                    selectorGuids: ["98c574bb-caa3-a24a-ef24-518ee516c32d"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 4e4,
                  target: {
                    selector: ".logos-wrap",
                    selectorGuids: ["98c574bb-caa3-a24a-ef24-518ee516c32d"],
                  },
                  xValue: -100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".logos-wrap",
                    selectorGuids: ["98c574bb-caa3-a24a-ef24-518ee516c32d"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1725402385451,
      },
      "a-3": {
        id: "a-3",
        title: "FAQ [Open]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-3-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-close",
                    selectorGuids: ["15eb317c-f81e-409c-9710-7b48c94cd3c2"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-3-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-open",
                    selectorGuids: ["d97ecf25-0df9-315c-e09a-b5d836dfd626"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-3-n-10",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".faq-answer",
                    selectorGuids: ["2108b70d-9688-34fd-a2ea-8d8d40c2bc51"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-3-n-7",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".faq-answer",
                    selectorGuids: ["2108b70d-9688-34fd-a2ea-8d8d40c2bc51"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-3-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-open",
                    selectorGuids: ["d97ecf25-0df9-315c-e09a-b5d836dfd626"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-3-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-close",
                    selectorGuids: ["15eb317c-f81e-409c-9710-7b48c94cd3c2"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-3-n-11",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".faq-answer",
                    selectorGuids: ["2108b70d-9688-34fd-a2ea-8d8d40c2bc51"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-3-n-9",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".faq-answer",
                    selectorGuids: ["2108b70d-9688-34fd-a2ea-8d8d40c2bc51"],
                  },
                  widthUnit: "PX",
                  heightUnit: "AUTO",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1725531002561,
      },
      "a-4": {
        id: "a-4",
        title: "FAQ [Close]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-4-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-open",
                    selectorGuids: ["d97ecf25-0df9-315c-e09a-b5d836dfd626"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-4-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".faq-close",
                    selectorGuids: ["15eb317c-f81e-409c-9710-7b48c94cd3c2"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-4-n-8",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".faq-answer",
                    selectorGuids: ["2108b70d-9688-34fd-a2ea-8d8d40c2bc51"],
                  },
                  value: 0,
                  unit: "",
                },
              },
              {
                id: "a-4-n-7",
                actionTypeId: "STYLE_SIZE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 300,
                  target: {
                    useEventTarget: "SIBLINGS",
                    selector: ".faq-answer",
                    selectorGuids: ["2108b70d-9688-34fd-a2ea-8d8d40c2bc51"],
                  },
                  heightValue: 0,
                  widthUnit: "PX",
                  heightUnit: "px",
                  locked: !1,
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1725531002561,
      },
      "a-6": {
        id: "a-6",
        title: "Particle Move 1",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-6-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".particle-move-1",
                    selectorGuids: ["4ffb8a21-f570-e58c-6470-e2a8227f1205"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".particle-move-1",
                    selectorGuids: ["4ffb8a21-f570-e58c-6470-e2a8227f1205"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-6-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-1",
                    selectorGuids: ["4ffb8a21-f570-e58c-6470-e2a8227f1205"],
                  },
                  yValue: -50,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-5",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-1",
                    selectorGuids: ["4ffb8a21-f570-e58c-6470-e2a8227f1205"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-6-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-1",
                    selectorGuids: ["4ffb8a21-f570-e58c-6470-e2a8227f1205"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-6-n-7",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-1",
                    selectorGuids: ["4ffb8a21-f570-e58c-6470-e2a8227f1205"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1725876056198,
      },
      "a-8": {
        id: "a-8",
        title: "Particle Move 3",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-8-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-3",
                    selectorGuids: ["0131180f-b462-b5d3-0a50-591caf5745e2"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 500,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-3",
                    selectorGuids: ["0131180f-b462-b5d3-0a50-591caf5745e2"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-8-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-3",
                    selectorGuids: ["0131180f-b462-b5d3-0a50-591caf5745e2"],
                  },
                  yValue: -50,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-8-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-3",
                    selectorGuids: ["0131180f-b462-b5d3-0a50-591caf5745e2"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-8-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-3",
                    selectorGuids: ["0131180f-b462-b5d3-0a50-591caf5745e2"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1725876056198,
      },
      "a-7": {
        id: "a-7",
        title: "Particle Move 2",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-7-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 300,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-2",
                    selectorGuids: ["abea0ddf-0611-0737-97c5-7558a8408563"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-7-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 300,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-2",
                    selectorGuids: ["abea0ddf-0611-0737-97c5-7558a8408563"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-7-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-2",
                    selectorGuids: ["abea0ddf-0611-0737-97c5-7558a8408563"],
                  },
                  yValue: -50,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-7-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-2",
                    selectorGuids: ["abea0ddf-0611-0737-97c5-7558a8408563"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-7-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-2",
                    selectorGuids: ["abea0ddf-0611-0737-97c5-7558a8408563"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1725876056198,
      },
      "a-9": {
        id: "a-9",
        title: "Particle Move 4",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-9-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-4",
                    selectorGuids: ["84756c4b-8639-18e4-7893-35a625e5d4d2"],
                  },
                  value: 1,
                  unit: "",
                },
              },
              {
                id: "a-9-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 600,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-4",
                    selectorGuids: ["84756c4b-8639-18e4-7893-35a625e5d4d2"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-9-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-4",
                    selectorGuids: ["84756c4b-8639-18e4-7893-35a625e5d4d2"],
                  },
                  yValue: -50,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-9-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-4",
                    selectorGuids: ["84756c4b-8639-18e4-7893-35a625e5d4d2"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-9-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-4",
                    selectorGuids: ["84756c4b-8639-18e4-7893-35a625e5d4d2"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1725876056198,
      },
      "a-10": {
        id: "a-10",
        title: "Particle Move 5",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-10-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 750,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-5",
                    selectorGuids: ["b86e8e19-7faf-1961-2e98-01db6b86b688"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-10-n-2",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 750,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-5",
                    selectorGuids: ["b86e8e19-7faf-1961-2e98-01db6b86b688"],
                  },
                  value: 1,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-10-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-5",
                    selectorGuids: ["b86e8e19-7faf-1961-2e98-01db6b86b688"],
                  },
                  yValue: -50,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
              {
                id: "a-10-n-4",
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 1e3,
                  target: {
                    selector: ".particle-move-5",
                    selectorGuids: ["b86e8e19-7faf-1961-2e98-01db6b86b688"],
                  },
                  value: 0,
                  unit: "",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-10-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".particle-move-5",
                    selectorGuids: ["b86e8e19-7faf-1961-2e98-01db6b86b688"],
                  },
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "px",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1725876056198,
      },
      "a-2": {
        id: "a-2",
        title: "Testimonials Marquee",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-2-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".testimonials-marquee.left",
                    selectorGuids: [
                      "a4342817-9dd4-d387-bf89-28a8e2d53974",
                      "03ea73f3-47ff-5bdb-3134-c4357793b472",
                    ],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    selector: ".testimonials-marquee.right",
                    selectorGuids: [
                      "a4342817-9dd4-d387-bf89-28a8e2d53974",
                      "226d4a2a-acc4-3f89-8d55-b076016dd355",
                    ],
                  },
                  xValue: -100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-2-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 4e4,
                  target: {
                    selector: ".testimonials-marquee.left",
                    selectorGuids: [
                      "a4342817-9dd4-d387-bf89-28a8e2d53974",
                      "03ea73f3-47ff-5bdb-3134-c4357793b472",
                    ],
                  },
                  xValue: -100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-5",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 4e4,
                  target: {
                    selector: ".testimonials-marquee.right",
                    selectorGuids: [
                      "a4342817-9dd4-d387-bf89-28a8e2d53974",
                      "226d4a2a-acc4-3f89-8d55-b076016dd355",
                    ],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-2-n-3",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".testimonials-marquee.left",
                    selectorGuids: [
                      "a4342817-9dd4-d387-bf89-28a8e2d53974",
                      "03ea73f3-47ff-5bdb-3134-c4357793b472",
                    ],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-2-n-6",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".testimonials-marquee.right",
                    selectorGuids: [
                      "a4342817-9dd4-d387-bf89-28a8e2d53974",
                      "226d4a2a-acc4-3f89-8d55-b076016dd355",
                    ],
                  },
                  xValue: -100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1725517889987,
      },
      "a-11": {
        id: "a-11",
        title: "Nav [Open]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-11-n",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav-open",
                    selectorGuids: ["87622dba-1c43-b573-60bf-04e88182cf8e"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-11-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav-close",
                    selectorGuids: ["f9f5513b-92bb-bf5d-350f-46648790694a"],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-11-n-2",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav-open",
                    selectorGuids: ["87622dba-1c43-b573-60bf-04e88182cf8e"],
                  },
                  value: "none",
                },
              },
              {
                id: "a-11-n-5",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    selector: ".navbar",
                    selectorGuids: ["549d7a4d-6145-a180-4e29-6bcadb23583b"],
                  },
                  globalSwatchId: "--color-primary--background",
                  rValue: 9,
                  bValue: 20,
                  gValue: 0,
                  aValue: 1,
                },
              },
              {
                id: "a-11-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav-close",
                    selectorGuids: ["f9f5513b-92bb-bf5d-350f-46648790694a"],
                  },
                  value: "block",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1726045570906,
      },
      "a-12": {
        id: "a-12",
        title: "Nav [Close]",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-12-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav-open",
                    selectorGuids: ["87622dba-1c43-b573-60bf-04e88182cf8e"],
                  },
                  value: "block",
                },
              },
              {
                id: "a-12-n-5",
                actionTypeId: "STYLE_BACKGROUND_COLOR",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "PARENT",
                    selector: ".navbar",
                    selectorGuids: ["549d7a4d-6145-a180-4e29-6bcadb23583b"],
                  },
                  globalSwatchId: "",
                  rValue: 9,
                  bValue: 20,
                  gValue: 0,
                  aValue: 0.1,
                },
              },
              {
                id: "a-12-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".nav-close",
                    selectorGuids: ["f9f5513b-92bb-bf5d-350f-46648790694a"],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1726045570906,
      },
      "a-13": {
        id: "a-13",
        title: "Pricing Toggle (Anually)",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-13-n",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 500,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".pricing-toggle-dot",
                    selectorGuids: ["a9a505ad-211d-8c63-9f91-03c570ed1514"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-13-n-3",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".pricing-wrap.monthly",
                    selectorGuids: [
                      "0a45c68a-358d-b0e3-b581-f8cce3549dac",
                      "49a85c46-fc11-426b-3002-03d57e0dcb74",
                    ],
                  },
                  value: "flex",
                },
              },
              {
                id: "a-13-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".pricing-wrap.anually",
                    selectorGuids: [
                      "0a45c68a-358d-b0e3-b581-f8cce3549dac",
                      "da18e7ae-9615-f11b-0137-609dd6789c88",
                    ],
                  },
                  value: "none",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                id: "a-13-n-2",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".pricing-toggle-dot",
                    selectorGuids: ["a9a505ad-211d-8c63-9f91-03c570ed1514"],
                  },
                  xValue: 100,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-13-n-4",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".pricing-wrap.monthly",
                    selectorGuids: [
                      "0a45c68a-358d-b0e3-b581-f8cce3549dac",
                      "49a85c46-fc11-426b-3002-03d57e0dcb74",
                    ],
                  },
                  value: "none",
                },
              },
              {
                id: "a-13-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".pricing-wrap.anually",
                    selectorGuids: [
                      "0a45c68a-358d-b0e3-b581-f8cce3549dac",
                      "da18e7ae-9615-f11b-0137-609dd6789c88",
                    ],
                  },
                  value: "flex",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !0,
        createdOn: 1732195099571,
      },
      "a-14": {
        id: "a-14",
        title: "Pricing Toggle (Monthly)",
        actionItemGroups: [
          {
            actionItems: [
              {
                id: "a-14-n-4",
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 200,
                  target: {
                    useEventTarget: "CHILDREN",
                    selector: ".pricing-toggle-dot",
                    selectorGuids: ["a9a505ad-211d-8c63-9f91-03c570ed1514"],
                  },
                  xValue: 0,
                  xUnit: "%",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                id: "a-14-n-5",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".pricing-wrap.monthly",
                    selectorGuids: [
                      "0a45c68a-358d-b0e3-b581-f8cce3549dac",
                      "49a85c46-fc11-426b-3002-03d57e0dcb74",
                    ],
                  },
                  value: "flex",
                },
              },
              {
                id: "a-14-n-6",
                actionTypeId: "GENERAL_DISPLAY",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  target: {
                    selector: ".pricing-wrap.anually",
                    selectorGuids: [
                      "0a45c68a-358d-b0e3-b581-f8cce3549dac",
                      "da18e7ae-9615-f11b-0137-609dd6789c88",
                    ],
                  },
                  value: "none",
                },
              },
            ],
          },
        ],
        useFirstGroupAsInitialState: !1,
        createdOn: 1732195099571,
      },
      //   id: "a-13",
      //   title: "Pricing Toggle (Anually)",
      //   actionItemGroups: [
      //     {
      //       actionItems: [
      //         {
      //           id: "a-13-n",
      //           actionTypeId: "TRANSFORM_MOVE",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 500,
      //             target: {
      //               useEventTarget: "CHILDREN",
      //               selector: ".pricing-toggle-dot",
      //               selectorGuids: ["a9a505ad-211d-8c63-9f91-03c570ed1514"],
      //             },
      //             xValue: 100,
      //             xUnit: "%",
      //             yUnit: "PX",
      //             zUnit: "PX",
      //           },
      //         },
      //         {
      //           id: "a-13-n-3",
      //           actionTypeId: "GENERAL_DISPLAY",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 0,
      //             target: {
      //               selector: ".pricing-wrap.monthly",
      //               selectorGuids: [
      //                 "0a45c68a-358d-b0e3-b581-f8cce3549dac",
      //                 "49a85c46-fc11-426b-3002-03d57e0dcb74",
      //               ],
      //             },
      //             value: "none",
      //           },
      //         },
      //         {
      //           id: "a-13-n-5",
      //           actionTypeId: "GENERAL_DISPLAY",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 0,
      //             target: {
      //               selector: ".pricing-wrap.anually",
      //               selectorGuids: [
      //                 "0a45c68a-358d-b0e3-b581-f8cce3549dac",
      //                 "da18e7ae-9615-f11b-0137-609dd6789c88",
      //               ],
      //             },
      //             value: "flex",
      //           },
      //         },
      //       ],
      //     },
      //     {
      //       actionItems: [
      //         {
      //           id: "a-13-n-2",
      //           actionTypeId: "TRANSFORM_MOVE",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 200,
      //             target: {
      //               useEventTarget: "CHILDREN",
      //               selector: ".pricing-toggle-dot",
      //               selectorGuids: ["a9a505ad-211d-8c63-9f91-03c570ed1514"],
      //             },
      //             xValue: 100,
      //             xUnit: "%",
      //             yUnit: "PX",
      //             zUnit: "PX",
      //           },
      //         },
      //         {
      //           id: "a-13-n-4",
      //           actionTypeId: "GENERAL_DISPLAY",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 0,
      //             target: {
      //               selector: ".pricing-wrap.monthly",
      //               selectorGuids: [
      //                 "0a45c68a-358d-b0e3-b581-f8cce3549dac",
      //                 "49a85c46-fc11-426b-3002-03d57e0dcb74",
      //               ],
      //             },
      //             value: "none",
      //           },
      //         },
      //         {
      //           id: "a-13-n-6",
      //           actionTypeId: "GENERAL_DISPLAY",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 0,
      //             target: {
      //               selector: ".pricing-wrap.anually",
      //               selectorGuids: [
      //                 "0a45c68a-358d-b0e3-b581-f8cce3549dac",
      //                 "da18e7ae-9615-f11b-0137-609dd6789c88",
      //               ],
      //             },
      //             value: "flex",
      //           },
      //         },
      //       ],
      //     },
      //   ],
      //   useFirstGroupAsInitialState: !0,
      //   createdOn: 1732195099571,
      // },
      // "a-14": {
      //   id: "a-14",
      //   title: "Pricing Toggle (Monthly)",
      //   actionItemGroups: [
      //     {
      //       actionItems: [
      //         {
      //           id: "a-14-n-4",
      //           actionTypeId: "TRANSFORM_MOVE",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 200,
      //             target: {
      //               useEventTarget: "CHILDREN",
      //               selector: ".pricing-toggle-dot",
      //               selectorGuids: ["a9a505ad-211d-8c63-9f91-03c570ed1514"],
      //             },
      //             xValue: 0,
      //             xUnit: "%",
      //             yUnit: "PX",
      //             zUnit: "PX",
      //           },
      //         },
      //         {
      //           id: "a-14-n-5",
      //           actionTypeId: "GENERAL_DISPLAY",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 0,
      //             target: {
      //               selector: ".pricing-wrap.monthly",
      //               selectorGuids: [
      //                 "0a45c68a-358d-b0e3-b581-f8cce3549dac",
      //                 "49a85c46-fc11-426b-3002-03d57e0dcb74",
      //               ],
      //             },
      //             value: "flex",
      //           },
      //         },
      //         {
      //           id: "a-14-n-6",
      //           actionTypeId: "GENERAL_DISPLAY",
      //           config: {
      //             delay: 0,
      //             easing: "",
      //             duration: 0,
      //             target: {
      //               selector: ".pricing-wrap.anually",
      //               selectorGuids: [
      //                 "0a45c68a-358d-b0e3-b581-f8cce3549dac",
      //                 "da18e7ae-9615-f11b-0137-609dd6789c88",
      //               ],
      //             },
      //             value: "none",
      //           },
      //         },
      //       ],
      //     },
      //   ],
      //   useFirstGroupAsInitialState: !1,
      //   createdOn: 1732195099571,
      // },
      slideInBottom: {
        id: "slideInBottom",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0,
                  yValue: 100,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_MOVE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0,
                  yValue: 0,
                  xUnit: "PX",
                  yUnit: "PX",
                  zUnit: "PX",
                },
              },
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
      fadeIn: {
        id: "fadeIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
      growIn: {
        id: "growIn",
        useFirstGroupAsInitialState: !0,
        actionItemGroups: [
          {
            actionItems: [
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 0,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  duration: 0,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 0.7500000000000001,
                  yValue: 0.7500000000000001,
                },
              },
            ],
          },
          {
            actionItems: [
              {
                actionTypeId: "TRANSFORM_SCALE",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  xValue: 1,
                  yValue: 1,
                },
              },
              {
                actionTypeId: "STYLE_OPACITY",
                config: {
                  delay: 0,
                  easing: "outQuart",
                  duration: 1e3,
                  target: {
                    id: "N/A",
                    appliesTo: "TRIGGER_ELEMENT",
                    useEventTarget: !0,
                  },
                  value: 1,
                },
              },
            ],
          },
        ],
      },
    },
    site: {
      mediaQueries: [
        { key: "main", min: 992, max: 1e4 },
        { key: "medium", min: 768, max: 991 },
        { key: "small", min: 480, max: 767 },
        { key: "tiny", min: 0, max: 479 },
      ],
    },
  });
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
