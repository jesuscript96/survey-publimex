(function() {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver((d) => {
    for (const m of d) if (m.type === "childList") for (const h of m.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
  }).observe(document, { childList: true, subtree: true });
  function r(d) {
    const m = {};
    return d.integrity && (m.integrity = d.integrity), d.referrerPolicy && (m.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? m.credentials = "include" : d.crossOrigin === "anonymous" ? m.credentials = "omit" : m.credentials = "same-origin", m;
  }
  function c(d) {
    if (d.ep) return;
    d.ep = true;
    const m = r(d);
    fetch(d.href, m);
  }
})();
var Im = { exports: {} }, $f = {}, Wm = { exports: {} }, hu = { exports: {} };
hu.exports;
var aE;
function nO() {
  return aE || (aE = 1, (function(i, l) {
    /**
    * @license React
    * react.development.js
    *
    * Copyright (c) Meta Platforms, Inc. and affiliates.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    */
    (function() {
      function r(v, _) {
        Object.defineProperty(m.prototype, v, { get: function() {
          console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", _[0], _[1]);
        } });
      }
      function c(v) {
        return v === null || typeof v != "object" ? null : (v = hl && v[hl] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function d(v, _) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var G = v + "." + _;
        go[G] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", _, v), go[G] = true);
      }
      function m(v, _, G) {
        this.props = v, this.context = _, this.refs = Ze, this.updater = G || vo;
      }
      function h() {
      }
      function y(v, _, G) {
        this.props = v, this.context = _, this.refs = Ze, this.updater = G || vo;
      }
      function T() {
      }
      function A(v) {
        return "" + v;
      }
      function E(v) {
        try {
          A(v);
          var _ = false;
        } catch {
          _ = true;
        }
        if (_) {
          _ = console;
          var G = _.error, P = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return G.call(_, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", P), A(v);
        }
      }
      function S(v) {
        if (v == null) return null;
        if (typeof v == "function") return v.$$typeof === yd ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case w:
            return "Fragment";
          case pe:
            return "Profiler";
          case Q:
            return "StrictMode";
          case Ee:
            return "Suspense";
          case _t:
            return "SuspenseList";
          case te:
            return "Activity";
        }
        if (typeof v == "object") switch (typeof v.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), v.$$typeof) {
          case Ve:
            return "Portal";
          case ut:
            return v.displayName || "Context";
          case ue:
            return (v._context.displayName || "Context") + ".Consumer";
          case zn:
            var _ = v.render;
            return v = v.displayName, v || (v = _.displayName || _.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case $t:
            return _ = v.displayName || null, _ !== null ? _ : S(v.type) || "Memo";
          case In:
            _ = v._payload, v = v._init;
            try {
              return S(v(_));
            } catch {
            }
        }
        return null;
      }
      function b(v) {
        if (v === w) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === In) return "<...>";
        try {
          var _ = S(v);
          return _ ? "<" + _ + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function O() {
        var v = oe.A;
        return v === null ? null : v.getOwner();
      }
      function U() {
        return Error("react-stack-top-frame");
      }
      function X(v) {
        if (ml.call(v, "key")) {
          var _ = Object.getOwnPropertyDescriptor(v, "key").get;
          if (_ && _.isReactWarning) return false;
        }
        return v.key !== void 0;
      }
      function H(v, _) {
        function G() {
          bo || (bo = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", _));
        }
        G.isReactWarning = true, Object.defineProperty(v, "key", { get: G, configurable: true });
      }
      function Y() {
        var v = S(this.type);
        return Cu[v] || (Cu[v] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), v = this.props.ref, v !== void 0 ? v : null;
      }
      function K(v, _, G, P, le, Ae) {
        var ce = G.ref;
        return v = { $$typeof: be, type: v, key: _, props: G, _owner: P }, (ce !== void 0 ? ce : null) !== null ? Object.defineProperty(v, "ref", { enumerable: false, get: Y }) : Object.defineProperty(v, "ref", { enumerable: false, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", { configurable: false, enumerable: false, writable: true, value: 0 }), Object.defineProperty(v, "_debugInfo", { configurable: false, enumerable: false, writable: true, value: null }), Object.defineProperty(v, "_debugStack", { configurable: false, enumerable: false, writable: true, value: le }), Object.defineProperty(v, "_debugTask", { configurable: false, enumerable: false, writable: true, value: Ae }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Z(v, _) {
        return _ = K(v.type, _, v.props, v._owner, v._debugStack, v._debugTask), v._store && (_._store.validated = v._store.validated), _;
      }
      function W(v) {
        re(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === In && (v._payload.status === "fulfilled" ? re(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function re(v) {
        return typeof v == "object" && v !== null && v.$$typeof === be;
      }
      function Ge(v) {
        var _ = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(G) {
          return _[G];
        });
      }
      function Ye(v, _) {
        return typeof v == "object" && v !== null && v.key != null ? (E(v.key), Ge("" + v.key)) : _.toString(36);
      }
      function ae(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(T, T) : (v.status = "pending", v.then(function(_) {
              v.status === "pending" && (v.status = "fulfilled", v.value = _);
            }, function(_) {
              v.status === "pending" && (v.status = "rejected", v.reason = _);
            })), v.status) {
              case "fulfilled":
                return v.value;
              case "rejected":
                throw v.reason;
            }
        }
        throw v;
      }
      function Re(v, _, G, P, le) {
        var Ae = typeof v;
        (Ae === "undefined" || Ae === "boolean") && (v = null);
        var ce = false;
        if (v === null) ce = true;
        else switch (Ae) {
          case "bigint":
          case "string":
          case "number":
            ce = true;
            break;
          case "object":
            switch (v.$$typeof) {
              case be:
              case Ve:
                ce = true;
                break;
              case In:
                return ce = v._init, Re(ce(v._payload), _, G, P, le);
            }
        }
        if (ce) {
          ce = v, le = le(ce);
          var ke = P === "" ? "." + Ye(ce, 0) : P;
          return pl(le) ? (G = "", ke != null && (G = ke.replace(Ou, "$&/") + "/"), Re(le, _, G, "", function(Ft) {
            return Ft;
          })) : le != null && (re(le) && (le.key != null && (ce && ce.key === le.key || E(le.key)), G = Z(le, G + (le.key == null || ce && ce.key === le.key ? "" : ("" + le.key).replace(Ou, "$&/") + "/") + ke), P !== "" && ce != null && re(ce) && ce.key == null && ce._store && !ce._store.validated && (G._store.validated = 2), le = G), _.push(le)), 1;
        }
        if (ce = 0, ke = P === "" ? "." : P + ":", pl(v)) for (var xe = 0; xe < v.length; xe++) P = v[xe], Ae = ke + Ye(P, xe), ce += Re(P, _, G, Ae, le);
        else if (xe = c(v), typeof xe == "function") for (xe === v.entries && (Ei || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ei = true), v = xe.call(v), xe = 0; !(P = v.next()).done; ) P = P.value, Ae = ke + Ye(P, xe++), ce += Re(P, _, G, Ae, le);
        else if (Ae === "object") {
          if (typeof v.then == "function") return Re(ae(v), _, G, P, le);
          throw _ = String(v), Error("Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead.");
        }
        return ce;
      }
      function k(v, _, G) {
        if (v == null) return v;
        var P = [], le = 0;
        return Re(v, P, "", "", function(Ae) {
          return _.call(G, Ae, le++);
        }), P;
      }
      function Me(v) {
        if (v._status === -1) {
          var _ = v._ioInfo;
          _ != null && (_.start = _.end = performance.now()), _ = v._result;
          var G = _();
          if (G.then(function(le) {
            if (v._status === 0 || v._status === -1) {
              v._status = 1, v._result = le;
              var Ae = v._ioInfo;
              Ae != null && (Ae.end = performance.now()), G.status === void 0 && (G.status = "fulfilled", G.value = le);
            }
          }, function(le) {
            if (v._status === 0 || v._status === -1) {
              v._status = 2, v._result = le;
              var Ae = v._ioInfo;
              Ae != null && (Ae.end = performance.now()), G.status === void 0 && (G.status = "rejected", G.reason = le);
            }
          }), _ = v._ioInfo, _ != null) {
            _.value = G;
            var P = G.displayName;
            typeof P == "string" && (_.name = P);
          }
          v._status === -1 && (v._status = 0, v._result = G);
        }
        if (v._status === 1) return _ = v._result, _ === void 0 && console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, _), "default" in _ || console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, _), _.default;
        throw v._result;
      }
      function ne() {
        var v = oe.H;
        return v === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`), v;
      }
      function ge() {
        oe.asyncTransitions--;
      }
      function Qe(v) {
        if (So === null) try {
          var _ = ("require" + Math.random()).slice(0, 7);
          So = (i && i[_]).call(i, "timers").setImmediate;
        } catch {
          So = function(P) {
            Vs === false && (Vs = true, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var le = new MessageChannel();
            le.port1.onmessage = P, le.port2.postMessage(void 0);
          };
        }
        return So(v);
      }
      function Ke(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function $(v, _) {
        _ !== Ai - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ai = _;
      }
      function de(v, _, G) {
        var P = oe.actQueue;
        if (P !== null) if (P.length !== 0) try {
          ee(P), Qe(function() {
            return de(v, _, G);
          });
          return;
        } catch (le) {
          oe.thrownErrors.push(le);
        }
        else oe.actQueue = null;
        0 < oe.thrownErrors.length ? (P = Ke(oe.thrownErrors), oe.thrownErrors.length = 0, G(P)) : _(v);
      }
      function ee(v) {
        if (!yl) {
          yl = true;
          var _ = 0;
          try {
            for (; _ < v.length; _++) {
              var G = v[_];
              do {
                oe.didUsePromise = false;
                var P = G(false);
                if (P !== null) {
                  if (oe.didUsePromise) {
                    v[_] = G, v.splice(0, _);
                    return;
                  }
                  G = P;
                } else break;
              } while (true);
            }
            v.length = 0;
          } catch (le) {
            v.splice(0, _ + 1), oe.thrownErrors.push(le);
          } finally {
            yl = false;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var be = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ve = /* @__PURE__ */ Symbol.for("react.portal"), w = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), pe = /* @__PURE__ */ Symbol.for("react.profiler"), ue = /* @__PURE__ */ Symbol.for("react.consumer"), ut = /* @__PURE__ */ Symbol.for("react.context"), zn = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ee = /* @__PURE__ */ Symbol.for("react.suspense"), _t = /* @__PURE__ */ Symbol.for("react.suspense_list"), $t = /* @__PURE__ */ Symbol.for("react.memo"), In = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.activity"), hl = Symbol.iterator, go = {}, vo = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function(v) {
        d(v, "forceUpdate");
      }, enqueueReplaceState: function(v) {
        d(v, "replaceState");
      }, enqueueSetState: function(v) {
        d(v, "setState");
      } }, Si = Object.assign, Ze = {};
      Object.freeze(Ze), m.prototype.isReactComponent = {}, m.prototype.setState = function(v, _) {
        if (typeof v != "object" && typeof v != "function" && v != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, v, _, "setState");
      }, m.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var Qt = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] };
      for (xi in Qt) Qt.hasOwnProperty(xi) && r(xi, Qt[xi]);
      h.prototype = m.prototype, Qt = y.prototype = new h(), Qt.constructor = y, Si(Qt, m.prototype), Qt.isPureReactComponent = true;
      var pl = Array.isArray, yd = /* @__PURE__ */ Symbol.for("react.client.reference"), oe = { H: null, A: null, T: null, S: null, actQueue: null, asyncTransitions: 0, isBatchingLegacy: false, didScheduleLegacyUpdate: false, didUsePromise: false, thrownErrors: [], getCurrentStack: null, recentlyCreatedOwnerStacks: 0 }, ml = Object.prototype.hasOwnProperty, ha = console.createTask ? console.createTask : function() {
        return null;
      };
      Qt = { react_stack_bottom_frame: function(v) {
        return v();
      } };
      var bo, Ti, Cu = {}, Ns = Qt.react_stack_bottom_frame.bind(Qt, U)(), _s = ha(b(U)), Ei = false, Ou = /\/+/g, zs = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var _ = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v), error: v });
          if (!window.dispatchEvent(_)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, Vs = false, So = null, Ai = 0, To = false, yl = false, gl = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : Qe;
      Qt = Object.freeze({ __proto__: null, c: function(v) {
        return ne().useMemoCache(v);
      } });
      var xi = { map: k, forEach: function(v, _, G) {
        k(v, function() {
          _.apply(this, arguments);
        }, G);
      }, count: function(v) {
        var _ = 0;
        return k(v, function() {
          _++;
        }), _;
      }, toArray: function(v) {
        return k(v, function(_) {
          return _;
        }) || [];
      }, only: function(v) {
        if (!re(v)) throw Error("React.Children.only expected to receive a single React element child.");
        return v;
      } };
      l.Activity = te, l.Children = xi, l.Component = m, l.Fragment = w, l.Profiler = pe, l.PureComponent = y, l.StrictMode = Q, l.Suspense = Ee, l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = oe, l.__COMPILER_RUNTIME = Qt, l.act = function(v) {
        var _ = oe.actQueue, G = Ai;
        Ai++;
        var P = oe.actQueue = _ !== null ? _ : [], le = false;
        try {
          var Ae = v();
        } catch (xe) {
          oe.thrownErrors.push(xe);
        }
        if (0 < oe.thrownErrors.length) throw $(_, G), v = Ke(oe.thrownErrors), oe.thrownErrors.length = 0, v;
        if (Ae !== null && typeof Ae == "object" && typeof Ae.then == "function") {
          var ce = Ae;
          return gl(function() {
            le || To || (To = true, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), { then: function(xe, Ft) {
            le = true, ce.then(function(pa) {
              if ($(_, G), G === 0) {
                try {
                  ee(P), Qe(function() {
                    return de(pa, xe, Ft);
                  });
                } catch (vl) {
                  oe.thrownErrors.push(vl);
                }
                if (0 < oe.thrownErrors.length) {
                  var Mu = Ke(oe.thrownErrors);
                  oe.thrownErrors.length = 0, Ft(Mu);
                }
              } else xe(pa);
            }, function(pa) {
              $(_, G), 0 < oe.thrownErrors.length && (pa = Ke(oe.thrownErrors), oe.thrownErrors.length = 0), Ft(pa);
            });
          } };
        }
        var ke = Ae;
        if ($(_, G), G === 0 && (ee(P), P.length !== 0 && gl(function() {
          le || To || (To = true, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), oe.actQueue = null), 0 < oe.thrownErrors.length) throw v = Ke(oe.thrownErrors), oe.thrownErrors.length = 0, v;
        return { then: function(xe, Ft) {
          le = true, G === 0 ? (oe.actQueue = P, Qe(function() {
            return de(ke, xe, Ft);
          })) : xe(ke);
        } };
      }, l.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, l.cacheSignal = function() {
        return null;
      }, l.captureOwnerStack = function() {
        var v = oe.getCurrentStack;
        return v === null ? null : v();
      }, l.cloneElement = function(v, _, G) {
        if (v == null) throw Error("The argument must be a React element, but you passed " + v + ".");
        var P = Si({}, v.props), le = v.key, Ae = v._owner;
        if (_ != null) {
          var ce;
          e: {
            if (ml.call(_, "ref") && (ce = Object.getOwnPropertyDescriptor(_, "ref").get) && ce.isReactWarning) {
              ce = false;
              break e;
            }
            ce = _.ref !== void 0;
          }
          ce && (Ae = O()), X(_) && (E(_.key), le = "" + _.key);
          for (ke in _) !ml.call(_, ke) || ke === "key" || ke === "__self" || ke === "__source" || ke === "ref" && _.ref === void 0 || (P[ke] = _[ke]);
        }
        var ke = arguments.length - 2;
        if (ke === 1) P.children = G;
        else if (1 < ke) {
          ce = Array(ke);
          for (var xe = 0; xe < ke; xe++) ce[xe] = arguments[xe + 2];
          P.children = ce;
        }
        for (P = K(v.type, le, P, Ae, v._debugStack, v._debugTask), le = 2; le < arguments.length; le++) W(arguments[le]);
        return P;
      }, l.createContext = function(v) {
        return v = { $$typeof: ut, _currentValue: v, _currentValue2: v, _threadCount: 0, Provider: null, Consumer: null }, v.Provider = v, v.Consumer = { $$typeof: ue, _context: v }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, l.createElement = function(v, _, G) {
        for (var P = 2; P < arguments.length; P++) W(arguments[P]);
        P = {};
        var le = null;
        if (_ != null) for (xe in Ti || !("__self" in _) || "key" in _ || (Ti = true, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), X(_) && (E(_.key), le = "" + _.key), _) ml.call(_, xe) && xe !== "key" && xe !== "__self" && xe !== "__source" && (P[xe] = _[xe]);
        var Ae = arguments.length - 2;
        if (Ae === 1) P.children = G;
        else if (1 < Ae) {
          for (var ce = Array(Ae), ke = 0; ke < Ae; ke++) ce[ke] = arguments[ke + 2];
          Object.freeze && Object.freeze(ce), P.children = ce;
        }
        if (v && v.defaultProps) for (xe in Ae = v.defaultProps, Ae) P[xe] === void 0 && (P[xe] = Ae[xe]);
        le && H(P, typeof v == "function" ? v.displayName || v.name || "Unknown" : v);
        var xe = 1e4 > oe.recentlyCreatedOwnerStacks++;
        return K(v, le, P, O(), xe ? Error("react-stack-top-frame") : Ns, xe ? ha(b(v)) : _s);
      }, l.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, l.forwardRef = function(v) {
        v != null && v.$$typeof === $t ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof v != "function" ? console.error("forwardRef requires a render function but was given %s.", v === null ? "null" : typeof v) : v.length !== 0 && v.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), v != null && v.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var _ = { $$typeof: zn, render: v }, G;
        return Object.defineProperty(_, "displayName", { enumerable: false, configurable: true, get: function() {
          return G;
        }, set: function(P) {
          G = P, v.name || v.displayName || (Object.defineProperty(v, "name", { value: P }), v.displayName = P);
        } }), _;
      }, l.isValidElement = re, l.lazy = function(v) {
        v = { _status: -1, _result: v };
        var _ = { $$typeof: In, _payload: v, _init: Me }, G = { name: "lazy", start: -1, end: -1, value: null, owner: null, debugStack: Error("react-stack-top-frame"), debugTask: console.createTask ? console.createTask("lazy()") : null };
        return v._ioInfo = G, _._debugInfo = [{ awaited: G }], _;
      }, l.memo = function(v, _) {
        v == null && console.error("memo: The first argument must be a component. Instead received: %s", v === null ? "null" : typeof v), _ = { $$typeof: $t, type: v, compare: _ === void 0 ? null : _ };
        var G;
        return Object.defineProperty(_, "displayName", { enumerable: false, configurable: true, get: function() {
          return G;
        }, set: function(P) {
          G = P, v.name || v.displayName || (Object.defineProperty(v, "name", { value: P }), v.displayName = P);
        } }), _;
      }, l.startTransition = function(v) {
        var _ = oe.T, G = {};
        G._updatedFibers = /* @__PURE__ */ new Set(), oe.T = G;
        try {
          var P = v(), le = oe.S;
          le !== null && le(G, P), typeof P == "object" && P !== null && typeof P.then == "function" && (oe.asyncTransitions++, P.then(ge, ge), P.then(T, zs));
        } catch (Ae) {
          zs(Ae);
        } finally {
          _ === null && G._updatedFibers && (v = G._updatedFibers.size, G._updatedFibers.clear(), 10 < v && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), _ !== null && G.types !== null && (_.types !== null && _.types !== G.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), _.types = G.types), oe.T = _;
        }
      }, l.unstable_useCacheRefresh = function() {
        return ne().useCacheRefresh();
      }, l.use = function(v) {
        return ne().use(v);
      }, l.useActionState = function(v, _, G) {
        return ne().useActionState(v, _, G);
      }, l.useCallback = function(v, _) {
        return ne().useCallback(v, _);
      }, l.useContext = function(v) {
        var _ = ne();
        return v.$$typeof === ue && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), _.useContext(v);
      }, l.useDebugValue = function(v, _) {
        return ne().useDebugValue(v, _);
      }, l.useDeferredValue = function(v, _) {
        return ne().useDeferredValue(v, _);
      }, l.useEffect = function(v, _) {
        return v == null && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"), ne().useEffect(v, _);
      }, l.useEffectEvent = function(v) {
        return ne().useEffectEvent(v);
      }, l.useId = function() {
        return ne().useId();
      }, l.useImperativeHandle = function(v, _, G) {
        return ne().useImperativeHandle(v, _, G);
      }, l.useInsertionEffect = function(v, _) {
        return v == null && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"), ne().useInsertionEffect(v, _);
      }, l.useLayoutEffect = function(v, _) {
        return v == null && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"), ne().useLayoutEffect(v, _);
      }, l.useMemo = function(v, _) {
        return ne().useMemo(v, _);
      }, l.useOptimistic = function(v, _) {
        return ne().useOptimistic(v, _);
      }, l.useReducer = function(v, _, G) {
        return ne().useReducer(v, _, G);
      }, l.useRef = function(v) {
        return ne().useRef(v);
      }, l.useState = function(v) {
        return ne().useState(v);
      }, l.useSyncExternalStore = function(v, _, G) {
        return ne().useSyncExternalStore(v, _, G);
      }, l.useTransition = function() {
        return ne().useTransition();
      }, l.version = "19.2.6", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(hu, hu.exports)), hu.exports;
}
var iE;
function Eu() {
  return iE || (iE = 1, Wm.exports = nO()), Wm.exports;
}
var oE;
function aO() {
  if (oE) return $f;
  oE = 1;
  /**
  * @license React
  * react-jsx-dev-runtime.development.js
  *
  * Copyright (c) Meta Platforms, Inc. and affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  return (function() {
    function i(w) {
      if (w == null) return null;
      if (typeof w == "function") return w.$$typeof === Me ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case H:
          return "Fragment";
        case K:
          return "Profiler";
        case Y:
          return "StrictMode";
        case Ge:
          return "Suspense";
        case Ye:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof w == "object") switch (typeof w.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), w.$$typeof) {
        case X:
          return "Portal";
        case W:
          return w.displayName || "Context";
        case Z:
          return (w._context.displayName || "Context") + ".Consumer";
        case re:
          var Q = w.render;
          return w = w.displayName, w || (w = Q.displayName || Q.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
        case ae:
          return Q = w.displayName || null, Q !== null ? Q : i(w.type) || "Memo";
        case Re:
          Q = w._payload, w = w._init;
          try {
            return i(w(Q));
          } catch {
          }
      }
      return null;
    }
    function l(w) {
      return "" + w;
    }
    function r(w) {
      try {
        l(w);
        var Q = false;
      } catch {
        Q = true;
      }
      if (Q) {
        Q = console;
        var pe = Q.error, ue = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return pe.call(Q, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", ue), l(w);
      }
    }
    function c(w) {
      if (w === H) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === Re) return "<...>";
      try {
        var Q = i(w);
        return Q ? "<" + Q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var w = ne.A;
      return w === null ? null : w.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function h(w) {
      if (ge.call(w, "key")) {
        var Q = Object.getOwnPropertyDescriptor(w, "key").get;
        if (Q && Q.isReactWarning) return false;
      }
      return w.key !== void 0;
    }
    function y(w, Q) {
      function pe() {
        $ || ($ = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", Q));
      }
      pe.isReactWarning = true, Object.defineProperty(w, "key", { get: pe, configurable: true });
    }
    function T() {
      var w = i(this.type);
      return de[w] || (de[w] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), w = this.props.ref, w !== void 0 ? w : null;
    }
    function A(w, Q, pe, ue, ut, zn) {
      var Ee = pe.ref;
      return w = { $$typeof: U, type: w, key: Q, props: pe, _owner: ue }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(w, "ref", { enumerable: false, get: T }) : Object.defineProperty(w, "ref", { enumerable: false, value: null }), w._store = {}, Object.defineProperty(w._store, "validated", { configurable: false, enumerable: false, writable: true, value: 0 }), Object.defineProperty(w, "_debugInfo", { configurable: false, enumerable: false, writable: true, value: null }), Object.defineProperty(w, "_debugStack", { configurable: false, enumerable: false, writable: true, value: ut }), Object.defineProperty(w, "_debugTask", { configurable: false, enumerable: false, writable: true, value: zn }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function E(w, Q, pe, ue, ut, zn) {
      var Ee = Q.children;
      if (Ee !== void 0) if (ue) if (Qe(Ee)) {
        for (ue = 0; ue < Ee.length; ue++) S(Ee[ue]);
        Object.freeze && Object.freeze(Ee);
      } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
      else S(Ee);
      if (ge.call(Q, "key")) {
        Ee = i(w);
        var _t = Object.keys(Q).filter(function(In) {
          return In !== "key";
        });
        ue = 0 < _t.length ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}", Ve[Ee + ue] || (_t = 0 < _t.length ? "{" + _t.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, Ee, _t, Ee), Ve[Ee + ue] = true);
      }
      if (Ee = null, pe !== void 0 && (r(pe), Ee = "" + pe), h(Q) && (r(Q.key), Ee = "" + Q.key), "key" in Q) {
        pe = {};
        for (var $t in Q) $t !== "key" && (pe[$t] = Q[$t]);
      } else pe = Q;
      return Ee && y(pe, typeof w == "function" ? w.displayName || w.name || "Unknown" : w), A(w, Ee, pe, d(), ut, zn);
    }
    function S(w) {
      b(w) ? w._store && (w._store.validated = 1) : typeof w == "object" && w !== null && w.$$typeof === Re && (w._payload.status === "fulfilled" ? b(w._payload.value) && w._payload.value._store && (w._payload.value._store.validated = 1) : w._store && (w._store.validated = 1));
    }
    function b(w) {
      return typeof w == "object" && w !== null && w.$$typeof === U;
    }
    var O = Eu(), U = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), H = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), re = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ge = /* @__PURE__ */ Symbol.for("react.suspense"), Ye = /* @__PURE__ */ Symbol.for("react.suspense_list"), ae = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), k = /* @__PURE__ */ Symbol.for("react.activity"), Me = /* @__PURE__ */ Symbol.for("react.client.reference"), ne = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = Object.prototype.hasOwnProperty, Qe = Array.isArray, Ke = console.createTask ? console.createTask : function() {
      return null;
    };
    O = { react_stack_bottom_frame: function(w) {
      return w();
    } };
    var $, de = {}, ee = O.react_stack_bottom_frame.bind(O, m)(), be = Ke(c(m)), Ve = {};
    $f.Fragment = H, $f.jsxDEV = function(w, Q, pe, ue) {
      var ut = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return E(w, Q, pe, ue, ut ? Error("react-stack-top-frame") : ee, ut ? Ke(c(w)) : be);
    };
  })(), $f;
}
var lE;
function iO() {
  return lE || (lE = 1, Im.exports = aO()), Im.exports;
}
var L = iO(), ye = Eu(), ey = { exports: {} }, cu = {}, ty = { exports: {} }, ny = {}, sE;
function oO() {
  return sE || (sE = 1, (function(i) {
    /**
    * @license React
    * scheduler.development.js
    *
    * Copyright (c) Meta Platforms, Inc. and affiliates.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    */
    (function() {
      function l() {
        if (re = false, Re) {
          var $ = i.unstable_now();
          ne = $;
          var de = true;
          try {
            e: {
              Z = false, W && (W = false, Ye(k), k = -1), K = true;
              var ee = Y;
              try {
                t: {
                  for (h($), H = c(O); H !== null && !(H.expirationTime > $ && T()); ) {
                    var be = H.callback;
                    if (typeof be == "function") {
                      H.callback = null, Y = H.priorityLevel;
                      var Ve = be(H.expirationTime <= $);
                      if ($ = i.unstable_now(), typeof Ve == "function") {
                        H.callback = Ve, h($), de = true;
                        break t;
                      }
                      H === c(O) && d(O), h($);
                    } else d(O);
                    H = c(O);
                  }
                  if (H !== null) de = true;
                  else {
                    var w = c(U);
                    w !== null && A(y, w.startTime - $), de = false;
                  }
                }
                break e;
              } finally {
                H = null, Y = ee, K = false;
              }
              de = void 0;
            }
          } finally {
            de ? ge() : Re = false;
          }
        }
      }
      function r($, de) {
        var ee = $.length;
        $.push(de);
        e: for (; 0 < ee; ) {
          var be = ee - 1 >>> 1, Ve = $[be];
          if (0 < m(Ve, de)) $[be] = de, $[ee] = Ve, ee = be;
          else break e;
        }
      }
      function c($) {
        return $.length === 0 ? null : $[0];
      }
      function d($) {
        if ($.length === 0) return null;
        var de = $[0], ee = $.pop();
        if (ee !== de) {
          $[0] = ee;
          e: for (var be = 0, Ve = $.length, w = Ve >>> 1; be < w; ) {
            var Q = 2 * (be + 1) - 1, pe = $[Q], ue = Q + 1, ut = $[ue];
            if (0 > m(pe, ee)) ue < Ve && 0 > m(ut, pe) ? ($[be] = ut, $[ue] = ee, be = ue) : ($[be] = pe, $[Q] = ee, be = Q);
            else if (ue < Ve && 0 > m(ut, ee)) $[be] = ut, $[ue] = ee, be = ue;
            else break e;
          }
        }
        return de;
      }
      function m($, de) {
        var ee = $.sortIndex - de.sortIndex;
        return ee !== 0 ? ee : $.id - de.id;
      }
      function h($) {
        for (var de = c(U); de !== null; ) {
          if (de.callback === null) d(U);
          else if (de.startTime <= $) d(U), de.sortIndex = de.expirationTime, r(O, de);
          else break;
          de = c(U);
        }
      }
      function y($) {
        if (W = false, h($), !Z) if (c(O) !== null) Z = true, Re || (Re = true, ge());
        else {
          var de = c(U);
          de !== null && A(y, de.startTime - $);
        }
      }
      function T() {
        return re ? true : !(i.unstable_now() - ne < Me);
      }
      function A($, de) {
        k = Ge(function() {
          $(i.unstable_now());
        }, de);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var E = performance;
        i.unstable_now = function() {
          return E.now();
        };
      } else {
        var S = Date, b = S.now();
        i.unstable_now = function() {
          return S.now() - b;
        };
      }
      var O = [], U = [], X = 1, H = null, Y = 3, K = false, Z = false, W = false, re = false, Ge = typeof setTimeout == "function" ? setTimeout : null, Ye = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate < "u" ? setImmediate : null, Re = false, k = -1, Me = 5, ne = -1;
      if (typeof ae == "function") var ge = function() {
        ae(l);
      };
      else if (typeof MessageChannel < "u") {
        var Qe = new MessageChannel(), Ke = Qe.port2;
        Qe.port1.onmessage = l, ge = function() {
          Ke.postMessage(null);
        };
      } else ge = function() {
        Ge(l, 0);
      };
      i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function($) {
        $.callback = null;
      }, i.unstable_forceFrameRate = function($) {
        0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Me = 0 < $ ? Math.floor(1e3 / $) : 5;
      }, i.unstable_getCurrentPriorityLevel = function() {
        return Y;
      }, i.unstable_next = function($) {
        switch (Y) {
          case 1:
          case 2:
          case 3:
            var de = 3;
            break;
          default:
            de = Y;
        }
        var ee = Y;
        Y = de;
        try {
          return $();
        } finally {
          Y = ee;
        }
      }, i.unstable_requestPaint = function() {
        re = true;
      }, i.unstable_runWithPriority = function($, de) {
        switch ($) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            $ = 3;
        }
        var ee = Y;
        Y = $;
        try {
          return de();
        } finally {
          Y = ee;
        }
      }, i.unstable_scheduleCallback = function($, de, ee) {
        var be = i.unstable_now();
        switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? be + ee : be) : ee = be, $) {
          case 1:
            var Ve = -1;
            break;
          case 2:
            Ve = 250;
            break;
          case 5:
            Ve = 1073741823;
            break;
          case 4:
            Ve = 1e4;
            break;
          default:
            Ve = 5e3;
        }
        return Ve = ee + Ve, $ = { id: X++, callback: de, priorityLevel: $, startTime: ee, expirationTime: Ve, sortIndex: -1 }, ee > be ? ($.sortIndex = ee, r(U, $), c(O) === null && $ === c(U) && (W ? (Ye(k), k = -1) : W = true, A(y, ee - be))) : ($.sortIndex = Ve, r(O, $), Z || K || (Z = true, Re || (Re = true, ge()))), $;
      }, i.unstable_shouldYield = T, i.unstable_wrapCallback = function($) {
        var de = Y;
        return function() {
          var ee = Y;
          Y = de;
          try {
            return $.apply(this, arguments);
          } finally {
            Y = ee;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(ny)), ny;
}
var rE;
function lO() {
  return rE || (rE = 1, ty.exports = oO()), ty.exports;
}
var ay = { exports: {} }, Kt = {}, uE;
function sO() {
  if (uE) return Kt;
  uE = 1;
  /**
  * @license React
  * react-dom.development.js
  *
  * Copyright (c) Meta Platforms, Inc. and affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  return (function() {
    function i() {
    }
    function l(S) {
      return "" + S;
    }
    function r(S, b, O) {
      var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        l(U);
        var X = false;
      } catch {
        X = true;
      }
      return X && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol == "function" && Symbol.toStringTag && U[Symbol.toStringTag] || U.constructor.name || "Object"), l(U)), { $$typeof: A, key: U == null ? null : "" + U, children: S, containerInfo: b, implementation: O };
    }
    function c(S, b) {
      if (S === "font") return "";
      if (typeof b == "string") return b === "use-credentials" ? b : "";
    }
    function d(S) {
      return S === null ? "`null`" : S === void 0 ? "`undefined`" : S === "" ? "an empty string" : 'something with type "' + typeof S + '"';
    }
    function m(S) {
      return S === null ? "`null`" : S === void 0 ? "`undefined`" : S === "" ? "an empty string" : typeof S == "string" ? JSON.stringify(S) : typeof S == "number" ? "`" + S + "`" : 'something with type "' + typeof S + '"';
    }
    function h() {
      var S = E.H;
      return S === null && console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var y = Eu(), T = { d: { f: i, r: function() {
      throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
    }, D: i, C: i, L: i, m: i, X: i, S: i, M: i }, p: 0, findDOMNode: null }, A = /* @__PURE__ */ Symbol.for("react.portal"), E = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Kt.createPortal = function(S, b) {
      var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11) throw Error("Target container is not a DOM element.");
      return r(S, b, null, O);
    }, Kt.flushSync = function(S) {
      var b = E.T, O = T.p;
      try {
        if (E.T = null, T.p = 2, S) return S();
      } finally {
        E.T = b, T.p = O, T.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
      }
    }, Kt.preconnect = function(S, b) {
      typeof S == "string" && S ? b != null && typeof b != "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", m(b)) : b != null && typeof b.crossOrigin != "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", d(b.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", d(S)), typeof S == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, T.d.C(S, b));
    }, Kt.prefetchDNS = function(S) {
      if (typeof S != "string" || !S) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", d(S));
      else if (1 < arguments.length) {
        var b = arguments[1];
        typeof b == "object" && b.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", m(b)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", m(b));
      }
      typeof S == "string" && T.d.D(S);
    }, Kt.preinit = function(S, b) {
      if (typeof S == "string" && S ? b == null || typeof b != "object" ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", m(b)) : b.as !== "style" && b.as !== "script" && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', m(b.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", d(S)), typeof S == "string" && b && typeof b.as == "string") {
        var O = b.as, U = c(O, b.crossOrigin), X = typeof b.integrity == "string" ? b.integrity : void 0, H = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        O === "style" ? T.d.S(S, typeof b.precedence == "string" ? b.precedence : void 0, { crossOrigin: U, integrity: X, fetchPriority: H }) : O === "script" && T.d.X(S, { crossOrigin: U, integrity: X, fetchPriority: H, nonce: typeof b.nonce == "string" ? b.nonce : void 0 });
      }
    }, Kt.preinitModule = function(S, b) {
      var O = "";
      if (typeof S == "string" && S || (O += " The `href` argument encountered was " + d(S) + "."), b !== void 0 && typeof b != "object" ? O += " The `options` argument encountered was " + d(b) + "." : b && "as" in b && b.as !== "script" && (O += " The `as` option encountered was " + m(b.as) + "."), O) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", O);
      else switch (O = b && typeof b.as == "string" ? b.as : "script", O) {
        case "script":
          break;
        default:
          O = m(O), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', O, S);
      }
      typeof S == "string" && (typeof b == "object" && b !== null ? (b.as == null || b.as === "script") && (O = c(b.as, b.crossOrigin), T.d.M(S, { crossOrigin: O, integrity: typeof b.integrity == "string" ? b.integrity : void 0, nonce: typeof b.nonce == "string" ? b.nonce : void 0 })) : b == null && T.d.M(S));
    }, Kt.preload = function(S, b) {
      var O = "";
      if (typeof S == "string" && S || (O += " The `href` argument encountered was " + d(S) + "."), b == null || typeof b != "object" ? O += " The `options` argument encountered was " + d(b) + "." : typeof b.as == "string" && b.as || (O += " The `as` option encountered was " + d(b.as) + "."), O && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', O), typeof S == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
        O = b.as;
        var U = c(O, b.crossOrigin);
        T.d.L(S, O, { crossOrigin: U, integrity: typeof b.integrity == "string" ? b.integrity : void 0, nonce: typeof b.nonce == "string" ? b.nonce : void 0, type: typeof b.type == "string" ? b.type : void 0, fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0, referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0, imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0, imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0, media: typeof b.media == "string" ? b.media : void 0 });
      }
    }, Kt.preloadModule = function(S, b) {
      var O = "";
      typeof S == "string" && S || (O += " The `href` argument encountered was " + d(S) + "."), b !== void 0 && typeof b != "object" ? O += " The `options` argument encountered was " + d(b) + "." : b && "as" in b && typeof b.as != "string" && (O += " The `as` option encountered was " + d(b.as) + "."), O && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', O), typeof S == "string" && (b ? (O = c(b.as, b.crossOrigin), T.d.m(S, { as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0, crossOrigin: O, integrity: typeof b.integrity == "string" ? b.integrity : void 0 })) : T.d.m(S));
    }, Kt.requestFormReset = function(S) {
      T.d.r(S);
    }, Kt.unstable_batchedUpdates = function(S, b) {
      return S(b);
    }, Kt.useFormState = function(S, b, O) {
      return h().useFormState(S, b, O);
    }, Kt.useFormStatus = function() {
      return h().useHostTransitionStatus();
    }, Kt.version = "19.2.6", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), Kt;
}
var cE;
function rO() {
  return cE || (cE = 1, ay.exports = sO()), ay.exports;
}
var fE;
function uO() {
  if (fE) return cu;
  fE = 1;
  /**
  * @license React
  * react-dom-client.development.js
  *
  * Copyright (c) Meta Platforms, Inc. and affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  return (function() {
    function i(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; ) e = e.next, t--;
      return e;
    }
    function l(e, t, n, a) {
      if (n >= t.length) return a;
      var o = t[n], s = Ct(e) ? e.slice() : ze({}, e);
      return s[o] = l(e[o], t, n + 1, a), s;
    }
    function r(e, t, n) {
      if (t.length !== n.length) console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var a = 0; a < n.length - 1; a++) if (t[a] !== n[a]) {
          console.warn("copyWithRename() expects paths to be the same except for the deepest key");
          return;
        }
        return c(e, t, n, 0);
      }
    }
    function c(e, t, n, a) {
      var o = t[a], s = Ct(e) ? e.slice() : ze({}, e);
      return a + 1 === t.length ? (s[n[a]] = s[o], Ct(s) ? s.splice(o, 1) : delete s[o]) : s[o] = c(e[o], t, n, a + 1), s;
    }
    function d(e, t, n) {
      var a = t[n], o = Ct(e) ? e.slice() : ze({}, e);
      return n + 1 === t.length ? (Ct(o) ? o.splice(a, 1) : delete o[a], o) : (o[a] = d(e[a], t, n + 1), o);
    }
    function m() {
      return false;
    }
    function h() {
      return null;
    }
    function y() {
      console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
    }
    function T() {
      console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
    }
    function A() {
    }
    function E() {
    }
    function S(e) {
      var t = [];
      return e.forEach(function(n) {
        t.push(n);
      }), t.sort().join(", ");
    }
    function b(e, t, n, a) {
      return new GD(e, t, n, a);
    }
    function O(e, t) {
      e.context === Xi && (gp(e.current, 2, t, e, null, null), Nl());
    }
    function U(e, t) {
      if (Yn !== null) {
        var n = t.staleFamilies;
        t = t.updatedFamilies, or(), u0(e.current, t, n), Nl();
      }
    }
    function X(e) {
      Yn = e;
    }
    function H(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Y(e) {
      var t = e, n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function K(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Z(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function W(e) {
      if (Y(e) !== e) throw Error("Unable to find node on an unmounted component.");
    }
    function re(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Y(e), t === null) throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var n = e, a = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var s = o.alternate;
        if (s === null) {
          if (a = o.return, a !== null) {
            n = a;
            continue;
          }
          break;
        }
        if (o.child === s.child) {
          for (s = o.child; s; ) {
            if (s === n) return W(o), e;
            if (s === a) return W(o), t;
            s = s.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (n.return !== a.return) n = o, a = s;
        else {
          for (var u = false, f = o.child; f; ) {
            if (f === n) {
              u = true, n = o, a = s;
              break;
            }
            if (f === a) {
              u = true, a = o, n = s;
              break;
            }
            f = f.sibling;
          }
          if (!u) {
            for (f = s.child; f; ) {
              if (f === n) {
                u = true, n = s, a = o;
                break;
              }
              if (f === a) {
                u = true, a = s, n = o;
                break;
              }
              f = f.sibling;
            }
            if (!u) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (n.alternate !== a) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (n.tag !== 3) throw Error("Unable to find node on an unmounted component.");
      return n.stateNode.current === n ? e : t;
    }
    function Ge(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Ge(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ye(e) {
      return e === null || typeof e != "object" ? null : (e = y1 && e[y1] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function ae(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === fw ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ll:
          return "Fragment";
        case xp:
          return "Profiler";
        case Lc:
          return "StrictMode";
        case Rp:
          return "Suspense";
        case wp:
          return "SuspenseList";
        case Cp:
          return "Activity";
      }
      if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
        case Bl:
          return "Portal";
        case _a:
          return e.displayName || "Context";
        case Dp:
          return (e._context.displayName || "Context") + ".Consumer";
        case mr:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Hc:
          return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
        case Dn:
          t = e._payload, e = e._init;
          try {
            return ae(e(t));
          } catch {
          }
      }
      return null;
    }
    function Re(e) {
      return typeof e.tag == "number" ? k(e) : typeof e.name == "string" ? e.name : null;
    }
    function k(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ae(t);
        case 8:
          return t === Lc ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var n = t.length - 1; 0 <= n; n--) if (typeof t[n].name == "string") return t[n].name;
          }
          if (e.return !== null) return k(e.return);
      }
      return null;
    }
    function Me(e) {
      return { current: e };
    }
    function ne(e, t) {
      0 > ti ? console.error("Unexpected pop.") : (t !== Mp[ti] && console.error("Unexpected Fiber popped."), e.current = Op[ti], Op[ti] = null, Mp[ti] = null, ti--);
    }
    function ge(e, t, n) {
      ti++, Op[ti] = e.current, Mp[ti] = n, e.current = t;
    }
    function Qe(e) {
      return e === null && console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."), e;
    }
    function Ke(e, t) {
      ge(Li, t, e), ge(yr, e, e), ge(Bi, null, e);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Yb(t) : yi;
          break;
        default:
          if (n = t.tagName, t = t.namespaceURI) t = Yb(t), t = kb(t, n);
          else switch (n) {
            case "svg":
              t = vs;
              break;
            case "math":
              t = Lf;
              break;
            default:
              t = yi;
          }
      }
      n = n.toLowerCase(), n = Vg(null, n), n = { context: t, ancestorInfo: n }, ne(Bi, e), ge(Bi, n, e);
    }
    function $(e) {
      ne(Bi, e), ne(yr, e), ne(Li, e);
    }
    function de() {
      return Qe(Bi.current);
    }
    function ee(e) {
      e.memoizedState !== null && ge(Yc, e, e);
      var t = Qe(Bi.current), n = e.type, a = kb(t.context, n);
      n = Vg(t.ancestorInfo, n), a = { context: a, ancestorInfo: n }, t !== a && (ge(yr, e, e), ge(Bi, a, e));
    }
    function be(e) {
      yr.current === e && (ne(Bi, e), ne(yr, e)), Yc.current === e && (ne(Yc, e), su._currentValue = ll);
    }
    function Ve() {
    }
    function w() {
      if (gr === 0) {
        g1 = console.log, v1 = console.info, b1 = console.warn, S1 = console.error, T1 = console.group, E1 = console.groupCollapsed, A1 = console.groupEnd;
        var e = { configurable: true, enumerable: true, value: Ve, writable: true };
        Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
      }
      gr++;
    }
    function Q() {
      if (gr--, gr === 0) {
        var e = { configurable: true, enumerable: true, writable: true };
        Object.defineProperties(console, { log: ze({}, e, { value: g1 }), info: ze({}, e, { value: v1 }), warn: ze({}, e, { value: b1 }), error: ze({}, e, { value: S1 }), group: ze({}, e, { value: T1 }), groupCollapsed: ze({}, e, { value: E1 }), groupEnd: ze({}, e, { value: A1 }) });
      }
      0 > gr && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function pe(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(`
`, t)), t !== -1) e = e.slice(0, t);
      else return "";
      return e;
    }
    function ue(e) {
      if (Np === void 0) try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Np = t && t[1] || "", x1 = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Np + e + x1;
    }
    function ut(e, t) {
      if (!e || _p) return "";
      var n = zp.get(e);
      if (n !== void 0) return n;
      _p = true, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var a = null;
      a = j.H, j.H = null, w();
      try {
        var o = { DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (J) {
                  var z = J;
                }
                Reflect.construct(e, [], D);
              } else {
                try {
                  D.call();
                } catch (J) {
                  z = J;
                }
                e.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                z = J;
              }
              (D = e()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (J) {
            if (J && z && typeof J.stack == "string") return [J.stack, z.stack];
          }
          return [null, null];
        } };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var s = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
        s && s.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var u = o.DetermineComponentFrameRoot(), f = u[0], p = u[1];
        if (f && p) {
          var g = f.split(`
`), M = p.split(`
`);
          for (u = s = 0; s < g.length && !g[s].includes("DetermineComponentFrameRoot"); ) s++;
          for (; u < M.length && !M[u].includes("DetermineComponentFrameRoot"); ) u++;
          if (s === g.length || u === M.length) for (s = g.length - 1, u = M.length - 1; 1 <= s && 0 <= u && g[s] !== M[u]; ) u--;
          for (; 1 <= s && 0 <= u; s--, u--) if (g[s] !== M[u]) {
            if (s !== 1 || u !== 1) do
              if (s--, u--, 0 > u || g[s] !== M[u]) {
                var N = `
` + g[s].replace(" at new ", " at ");
                return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && zp.set(e, N), N;
              }
            while (1 <= s && 0 <= u);
            break;
          }
        }
      } finally {
        _p = false, j.H = a, Q(), Error.prepareStackTrace = n;
      }
      return g = (g = e ? e.displayName || e.name : "") ? ue(g) : "", typeof e == "function" && zp.set(e, g), g;
    }
    function zn(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ue(e.type);
        case 16:
          return ue("Lazy");
        case 13:
          return e.child !== t && t !== null ? ue("Suspense Fallback") : ue("Suspense");
        case 19:
          return ue("SuspenseList");
        case 0:
        case 15:
          return ut(e.type, false);
        case 11:
          return ut(e.type.render, false);
        case 1:
          return ut(e.type, true);
        case 31:
          return ue("Activity");
        default:
          return "";
      }
    }
    function Ee(e) {
      try {
        var t = "", n = null;
        do {
          t += zn(e, n);
          var a = e._debugInfo;
          if (a) for (var o = a.length - 1; 0 <= o; o--) {
            var s = a[o];
            if (typeof s.name == "string") {
              var u = t;
              e: {
                var f = s.name, p = s.env, g = s.debugLocation;
                if (g != null) {
                  var M = pe(g), N = M.lastIndexOf(`
`), D = N === -1 ? M : M.slice(N + 1);
                  if (D.indexOf(f) !== -1) {
                    var z = `
` + D;
                    break e;
                  }
                }
                z = ue(f + (p ? " [" + p + "]" : ""));
              }
              t = u + z;
            }
          }
          n = e, e = e.return;
        } while (e);
        return t;
      } catch (J) {
        return `
Error generating stack: ` + J.message + `
` + J.stack;
      }
    }
    function _t(e) {
      return (e = e ? e.displayName || e.name : "") ? ue(e) : "";
    }
    function $t() {
      if (Rn === null) return null;
      var e = Rn._debugOwner;
      return e != null ? Re(e) : null;
    }
    function In() {
      if (Rn === null) return "";
      var e = Rn;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ue(e.type);
            break;
          case 13:
            t += ue("Suspense");
            break;
          case 19:
            t += ue("SuspenseList");
            break;
          case 31:
            t += ue("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += _t(e.type));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += _t(e.type.render));
        }
        for (; e; ) if (typeof e.tag == "number") {
          var n = e;
          e = n._debugOwner;
          var a = n._debugStack;
          if (e && a) {
            var o = pe(a);
            o !== "" && (t += `
` + o);
          }
        } else if (e.debugStack != null) {
          var s = e.debugStack;
          (e = e.owner) && s && (t += `
` + pe(s));
        } else break;
        var u = t;
      } catch (f) {
        u = `
Error generating stack: ` + f.message + `
` + f.stack;
      }
      return u;
    }
    function te(e, t, n, a, o, s, u) {
      var f = Rn;
      hl(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(t.bind(null, n, a, o, s, u)) : t(n, a, o, s, u);
      } finally {
        hl(f);
      }
      throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.");
    }
    function hl(e) {
      j.getCurrentStack = e === null ? null : In, za = false, Rn = e;
    }
    function go(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function vo(e) {
      try {
        return Si(e), false;
      } catch {
        return true;
      }
    }
    function Si(e) {
      return "" + e;
    }
    function Ze(e, t) {
      if (vo(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, go(e)), Si(e);
    }
    function Qt(e, t) {
      if (vo(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, go(e)), Si(e);
    }
    function pl(e) {
      if (vo(e)) return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.", go(e)), Si(e);
    }
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return false;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return true;
      if (!t.supportsFiber) return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"), true;
      try {
        Yl = t.inject(e), Pt = t;
      } catch (n) {
        console.error("React instrumentation encountered an error: %o.", n);
      }
      return !!t.checkDCE;
    }
    function oe(e) {
      if (typeof vw == "function" && bw(e), Pt && typeof Pt.setStrictMode == "function") try {
        Pt.setStrictMode(Yl, e);
      } catch (t) {
        Va || (Va = true, console.error("React instrumentation encountered an error: %o", t));
      }
    }
    function ml(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Sw(e) / Tw | 0) | 0;
    }
    function ha(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function bo(e, t, n) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var o = 0, s = e.suspendedLanes, u = e.pingedLanes;
      e = e.warmLanes;
      var f = a & 134217727;
      return f !== 0 ? (a = f & ~s, a !== 0 ? o = ha(a) : (u &= f, u !== 0 ? o = ha(u) : n || (n = f & ~e, n !== 0 && (o = ha(n))))) : (f = a & ~s, f !== 0 ? o = ha(f) : u !== 0 ? o = ha(u) : n || (n = a & ~e, n !== 0 && (o = ha(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & s) === 0 && (s = o & -o, n = t & -t, s >= n || s === 32 && (n & 4194048) !== 0) ? t : o;
    }
    function Ti(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Cu(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error("Should have found matching lanes. This is a bug in React."), -1;
      }
    }
    function Ns() {
      var e = Gc;
      return Gc <<= 1, (Gc & 62914560) === 0 && (Gc = 4194304), e;
    }
    function _s(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ei(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Ou(e, t, n, a, o, s) {
      var u = e.pendingLanes;
      e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
      var f = e.entanglements, p = e.expirationTimes, g = e.hiddenUpdates;
      for (n = u & ~n; 0 < n; ) {
        var M = 31 - Wt(n), N = 1 << M;
        f[M] = 0, p[M] = -1;
        var D = g[M];
        if (D !== null) for (g[M] = null, M = 0; M < D.length; M++) {
          var z = D[M];
          z !== null && (z.lane &= -536870913);
        }
        n &= ~N;
      }
      a !== 0 && zs(e, a, 0), s !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(u & ~t));
    }
    function zs(e, t, n) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var a = 31 - Wt(t);
      e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
    }
    function Vs(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n; ) {
        var a = 31 - Wt(n), o = 1 << a;
        o & t | e[a] & t && (e[a] |= t), n &= ~o;
      }
    }
    function So(e, t) {
      var n = t & -t;
      return n = (n & 42) !== 0 ? 1 : Ai(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
    }
    function Ai(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function To(e, t, n) {
      if (ja) for (e = e.pendingUpdatersLaneMap; 0 < n; ) {
        var a = 31 - Wt(n), o = 1 << a;
        e[a].add(t), n &= ~o;
      }
    }
    function yl(e, t) {
      if (ja) for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; 0 < t; ) {
        var o = 31 - Wt(t);
        e = 1 << o, o = n[o], 0 < o.size && (o.forEach(function(s) {
          var u = s.alternate;
          u !== null && a.has(u) || a.add(s);
        }), o.clear()), t &= ~e;
      }
    }
    function gl(e) {
      return e &= -e, Bn < e ? Ua < e ? (e & 134217727) !== 0 ? ni : Xc : Ua : Bn;
    }
    function xi() {
      var e = $e.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? ni : u1(e.type));
    }
    function v(e, t) {
      var n = $e.p;
      try {
        return $e.p = e, t();
      } finally {
        $e.p = n;
      }
    }
    function _(e) {
      delete e[kt], delete e[en], delete e[Lp], delete e[Ew], delete e[Aw];
    }
    function G(e) {
      var t = e[kt];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[Yi] || n[kt]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Jb(e); e !== null; ) {
            if (n = e[kt]) return n;
            e = Jb(e);
          }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function P(e) {
      if (e = e[kt] || e[Yi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function le(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Ae(e) {
      var t = e[D1];
      return t || (t = e[D1] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ce(e) {
      e[vr] = true;
    }
    function ke(e, t) {
      xe(e, t), xe(e + "Capture", t);
    }
    function xe(e, t) {
      Bo[e] && console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Bo[e] = t;
      var n = e.toLowerCase();
      for (Hp[n] = e, e === "onDoubleClick" && (Hp.ondblclick = e), e = 0; e < t.length; e++) R1.add(t[e]);
    }
    function Ft(e, t) {
      xw[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function pa(e) {
      return aa.call(C1, e) ? true : aa.call(w1, e) ? false : Dw.test(e) ? C1[e] = true : (w1[e] = true, console.error("Invalid attribute name: `%s`", e), false);
    }
    function Mu(e, t, n) {
      if (pa(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof n) {
            case "symbol":
            case "object":
              return n;
            case "function":
              return n;
            case "boolean":
              if (n === false) return n;
          }
          return n === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && n === true ? true : (Ze(n, t), e === "" + n ? n : e);
      }
    }
    function vl(e, t, n) {
      if (pa(t)) if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        Ze(n, t), e.setAttribute(t, "" + n);
      }
    }
    function Nu(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Ze(n, t), e.setAttribute(t, "" + n);
      }
    }
    function Qa(e, t, n, a) {
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(n);
            return;
        }
        Ze(a, n), e.setAttributeNS(t, n, "" + a);
      }
    }
    function Vn(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return pl(e), e;
        default:
          return "";
      }
    }
    function Sg(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function SD(e, t, n) {
      var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, s = a.set;
        return Object.defineProperty(e, t, { configurable: true, get: function() {
          return o.call(this);
        }, set: function(u) {
          pl(u), n = "" + u, s.call(this, u);
        } }), Object.defineProperty(e, t, { enumerable: a.enumerable }), { getValue: function() {
          return n;
        }, setValue: function(u) {
          pl(u), n = "" + u;
        }, stopTracking: function() {
          e._valueTracker = null, delete e[t];
        } };
      }
    }
    function gd(e) {
      if (!e._valueTracker) {
        var t = Sg(e) ? "checked" : "value";
        e._valueTracker = SD(e, t, "" + e[t]);
      }
    }
    function Tg(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var n = t.getValue(), a = "";
      return e && (a = Sg(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), true) : false;
    }
    function _u(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function jn(e) {
      return e.replace(Rw, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Eg(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || M1 || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", $t() || "A component", t.type), M1 = true), t.value === void 0 || t.defaultValue === void 0 || O1 || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", $t() || "A component", t.type), O1 = true);
    }
    function vd(e, t, n, a, o, s, u, f) {
      e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? (Ze(u, "type"), e.type = u) : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Vn(t)) : e.value !== "" + Vn(t) && (e.value = "" + Vn(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? bd(e, u, Vn(t)) : n != null ? bd(e, u, Vn(n)) : a != null && e.removeAttribute("value"), o == null && s != null && (e.defaultChecked = !!s), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? (Ze(f, "name"), e.name = "" + Vn(f)) : e.removeAttribute("name");
    }
    function Ag(e, t, n, a, o, s, u, f) {
      if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (Ze(s, "type"), e.type = s), t != null || n != null) {
        if (!(s !== "submit" && s !== "reset" || t != null)) {
          gd(e);
          return;
        }
        n = n != null ? "" + Vn(n) : "", t = t != null ? "" + Vn(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
      }
      a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (Ze(u, "name"), e.name = u), gd(e);
    }
    function bd(e, t, n) {
      t === "number" && _u(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
    }
    function xg(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ap.Children.forEach(t.children, function(n) {
        n == null || typeof n == "string" || typeof n == "number" || typeof n == "bigint" || _1 || (_1 = true, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."));
      }) : t.dangerouslySetInnerHTML == null || z1 || (z1 = true, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), t.selected == null || N1 || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), N1 = true);
    }
    function Dg() {
      var e = $t();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function bl(e, t, n, a) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && a && (e[n].defaultSelected = true);
      } else {
        for (n = "" + Vn(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) {
            e[o].selected = true, a && (e[o].defaultSelected = true);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = true);
      }
    }
    function Rg(e, t) {
      for (e = 0; e < j1.length; e++) {
        var n = j1[e];
        if (t[n] != null) {
          var a = Ct(t[n]);
          t.multiple && !a ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Dg()) : !t.multiple && a && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Dg());
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || V1 || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), V1 = true);
    }
    function wg(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || U1 || (console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components", $t() || "A component"), U1 = true), t.children != null && t.value == null && console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
    }
    function Cg(e, t, n) {
      if (t != null && (t = "" + Vn(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n != null ? "" + Vn(n) : "";
    }
    function Og(e, t, n, a) {
      if (t == null) {
        if (a != null) {
          if (n != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
          if (Ct(a)) {
            if (1 < a.length) throw Error("<textarea> can only have at most one child.");
            a = a[0];
          }
          n = a;
        }
        n == null && (n = ""), t = n;
      }
      n = Vn(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), gd(e);
    }
    function Mg(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Mg(e.children[0], t) : e;
    }
    function vn(e) {
      return "  " + "  ".repeat(e);
    }
    function Sl(e) {
      return "+ " + "  ".repeat(e);
    }
    function Eo(e) {
      return "- " + "  ".repeat(e);
    }
    function Ng(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function js(e, t) {
      return B1.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function zu(e, t, n) {
      var a = 120 - 2 * n;
      if (t === null) return Sl(n) + js(e, a) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > a - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Sl(n) + js(e, a) + `
` + Eo(n) + js(t, a) + `
`;
      }
      return vn(n) + js(e, a) + `
`;
    }
    function Sd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, n) {
        return n;
      });
    }
    function Us(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ct(e)) return "[...]";
          if (e.$$typeof === Na) return (t = ae(e.type)) ? "<" + t + ">" : "<...>";
          var n = Sd(e);
          if (n === "Object") {
            n = "", t -= 2;
            for (var a in e) if (e.hasOwnProperty(a)) {
              var o = JSON.stringify(a);
              if (o !== '"' + a + '"' && (a = o), t -= a.length - 2, o = Us(e[a], 15 > t ? t : 15), t -= o.length, 0 > t) {
                n += n === "" ? "..." : ", ...";
                break;
              }
              n += (n === "" ? "" : ",") + a + ":" + o;
            }
            return "{" + n + "}";
          }
          return n;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Tl(e, t) {
      return typeof e != "string" || B1.test(e) ? "{" + Us(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Td(e, t, n) {
      var a = 120 - n.length - e.length, o = [], s;
      for (s in t) if (t.hasOwnProperty(s) && s !== "children") {
        var u = Tl(t[s], 120 - n.length - s.length - 1);
        a -= s.length + u.length + 2, o.push(s + "=" + u);
      }
      return o.length === 0 ? n + "<" + e + `>
` : 0 < a ? n + "<" + e + " " + o.join(" ") + `>
` : n + "<" + e + `
` + n + "  " + o.join(`
` + n + "  ") + `
` + n + `>
`;
    }
    function TD(e, t, n) {
      var a = "", o = ze({}, t), s;
      for (s in e) if (e.hasOwnProperty(s)) {
        delete o[s];
        var u = 120 - 2 * n - s.length - 2, f = Us(e[s], u);
        t.hasOwnProperty(s) ? (u = Us(t[s], u), a += Sl(n) + s + ": " + f + `
`, a += Eo(n) + s + ": " + u + `
`) : a += Sl(n) + s + ": " + f + `
`;
      }
      for (var p in o) o.hasOwnProperty(p) && (e = Us(o[p], 120 - 2 * n - p.length - 2), a += Eo(n) + p + ": " + e + `
`);
      return a;
    }
    function ED(e, t, n, a) {
      var o = "", s = /* @__PURE__ */ new Map();
      for (g in n) n.hasOwnProperty(g) && s.set(g.toLowerCase(), g);
      if (s.size === 1 && s.has("children")) o += Td(e, t, vn(a));
      else {
        for (var u in t) if (t.hasOwnProperty(u) && u !== "children") {
          var f = 120 - 2 * (a + 1) - u.length - 1, p = s.get(u.toLowerCase());
          if (p !== void 0) {
            s.delete(u.toLowerCase());
            var g = t[u];
            p = n[p];
            var M = Tl(g, f);
            f = Tl(p, f), typeof g == "object" && g !== null && typeof p == "object" && p !== null && Sd(g) === "Object" && Sd(p) === "Object" && (2 < Object.keys(g).length || 2 < Object.keys(p).length || -1 < M.indexOf("...") || -1 < f.indexOf("...")) ? o += vn(a + 1) + u + `={{
` + TD(g, p, a + 2) + vn(a + 1) + `}}
` : (o += Sl(a + 1) + u + "=" + M + `
`, o += Eo(a + 1) + u + "=" + f + `
`);
          } else o += vn(a + 1) + u + "=" + Tl(t[u], f) + `
`;
        }
        s.forEach(function(N) {
          if (N !== "children") {
            var D = 120 - 2 * (a + 1) - N.length - 1;
            o += Eo(a + 1) + N + "=" + Tl(n[N], D) + `
`;
          }
        }), o = o === "" ? vn(a) + "<" + e + `>
` : vn(a) + "<" + e + `
` + o + vn(a) + `>
`;
      }
      return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (s = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (s = "" + t), o += zu(s, "" + e, a + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + zu("" + t, null, a + 1) : o + zu("" + t, void 0, a + 1)), o;
    }
    function _g(e, t) {
      var n = Ng(e);
      if (n === null) {
        for (n = "", e = e.child; e; ) n += _g(e, t), e = e.sibling;
        return n;
      }
      return vn(t) + "<" + n + `>
`;
    }
    function Ed(e, t) {
      var n = Mg(e, t);
      if (n !== e && (e.children.length !== 1 || e.children[0] !== n)) return vn(t) + `...
` + Ed(n, t + 1);
      n = "";
      var a = e.fiber._debugInfo;
      if (a) for (var o = 0; o < a.length; o++) {
        var s = a[o].name;
        typeof s == "string" && (n += vn(t) + "<" + s + `>
`, t++);
      }
      if (a = "", o = e.fiber.pendingProps, e.fiber.tag === 6) a = zu(o, e.serverProps, t), t++;
      else if (s = Ng(e.fiber), s !== null) if (e.serverProps === void 0) {
        a = t;
        var u = 120 - 2 * a - s.length - 2, f = "";
        for (g in o) if (o.hasOwnProperty(g) && g !== "children") {
          var p = Tl(o[g], 15);
          if (u -= g.length + p.length + 2, 0 > u) {
            f += " ...";
            break;
          }
          f += " " + g + "=" + p;
        }
        a = vn(a) + "<" + s + f + `>
`, t++;
      } else e.serverProps === null ? (a = Td(s, o, Sl(t)), t++) : typeof e.serverProps == "string" ? console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React.") : (a = ED(s, o, e.serverProps, t), t++);
      var g = "";
      for (o = e.fiber.child, s = 0; o && s < e.children.length; ) u = e.children[s], u.fiber === o ? (g += Ed(u, t), s++) : g += _g(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (g += vn(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++) s = o[e], g = typeof s == "string" ? g + (Eo(t) + js(s, 120 - 2 * t) + `
`) : g + Td(s.type, s.props, Eo(t));
      return n + a + g;
    }
    function Ad(e) {
      try {
        return `

` + Ed(e, 0);
      } catch {
        return "";
      }
    }
    function zg(e, t, n) {
      for (var a = t, o = null, s = 0; a; ) a === e && (s = 0), o = { fiber: a, children: o !== null ? [o] : [], serverProps: a === t ? n : a === e ? null : void 0, serverTail: [], distanceFromLeaf: s }, s++, a = a.return;
      return o !== null ? Ad(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Vg(e, t) {
      var n = ze({}, e || H1), a = { tag: t };
      return L1.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), Cw.indexOf(t) !== -1 && (n.pTagInButtonScope = null), ww.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), t === "#document" || t === "html" ? n.containerTagInScope = null : n.containerTagInScope || (n.containerTagInScope = a), e !== null || t !== "#document" && t !== "html" && t !== "body" ? n.implicitRootScope === true && (n.implicitRootScope = false) : n.implicitRootScope = true, n;
    }
    function jg(e, t, n) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (n) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!n) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Ow.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return n || t === null;
        case "html":
          return n && t === "#document" || t === null;
        case "body":
          return n && (t === "#document" || t === "html") || t === null;
      }
      return true;
    }
    function AD(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Ug(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function xd(e, t) {
      t = t || H1;
      var n = t.current;
      if (t = (n = jg(e, n && n.tag, t.implicitRootScope) ? null : n) ? null : AD(e, t), t = n || t, !t) return true;
      var a = t.tag;
      if (t = String(!!n) + "|" + e + "|" + a, $c[t]) return false;
      $c[t] = true;
      var o = (t = Rn) ? Ug(t.return, a) : null, s = t !== null && o !== null ? zg(o, t, null) : "", u = "<" + e + ">";
      return n ? (n = "", a === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`, u, a, n, s)) : console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`, u, a, s), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || te(o, function() {
        console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`, a, u);
      })), false;
    }
    function Vu(e, t, n) {
      if (n || jg("#text", t, false)) return true;
      if (n = "#text|" + t, $c[n]) return false;
      $c[n] = true;
      var a = (n = Rn) ? Ug(n, t) : null;
      return n = n !== null && a !== null ? zg(a, n, n.tag !== 6 ? { children: null } : null) : "", /\S/.test(e) ? console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`, t, n) : console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`, t, n), false;
    }
    function Bs(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function xD(e) {
      return e.replace(_w, function(t, n) {
        return n.toUpperCase();
      });
    }
    function Bg(e, t, n) {
      var a = t.indexOf("--") === 0;
      a || (-1 < t.indexOf("-") ? kl.hasOwnProperty(t) && kl[t] || (kl[t] = true, console.error("Unsupported style property %s. Did you mean %s?", t, xD(t.replace(Nw, "ms-")))) : Mw.test(t) ? kl.hasOwnProperty(t) && kl[t] || (kl[t] = true, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1))) : !q1.test(n) || kp.hasOwnProperty(n) && kp[n] || (kp[n] = true, console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, t, n.replace(q1, ""))), typeof n == "number" && (isNaN(n) ? G1 || (G1 = true, console.error("`NaN` is an invalid value for the `%s` css style property.", t)) : isFinite(n) || X1 || (X1 = true, console.error("`Infinity` is an invalid value for the `%s` css style property.", t)))), n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || $1.has(t) ? t === "float" ? e.cssFloat = n : (Qt(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
    }
    function Lg(e, t, n) {
      if (t != null && typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      if (t && Object.freeze(t), e = e.style, n != null) {
        if (t) {
          var a = {};
          if (n) {
            for (var o in n) if (n.hasOwnProperty(o) && !t.hasOwnProperty(o)) for (var s = Yp[o] || [o], u = 0; u < s.length; u++) a[s[u]] = o;
          }
          for (var f in t) if (t.hasOwnProperty(f) && (!n || n[f] !== t[f])) for (o = Yp[f] || [f], s = 0; s < o.length; s++) a[o[s]] = f;
          f = {};
          for (var p in t) for (o = Yp[p] || [p], s = 0; s < o.length; s++) f[o[s]] = p;
          p = {};
          for (var g in a) if (o = a[g], (s = f[g]) && o !== s && (u = o + "," + s, !p[u])) {
            p[u] = true, u = console;
            var M = t[o];
            u.error.call(u, "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", M == null || typeof M == "boolean" || M === "" ? "Removing" : "Updating", o, s);
          }
        }
        for (var N in n) !n.hasOwnProperty(N) || t != null && t.hasOwnProperty(N) || (N.indexOf("--") === 0 ? e.setProperty(N, "") : N === "float" ? e.cssFloat = "" : e[N] = "");
        for (var D in t) g = t[D], t.hasOwnProperty(D) && n[D] !== g && Bg(e, D, g);
      } else for (a in t) t.hasOwnProperty(a) && Bg(e, a, t[a]);
    }
    function Ls(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    function Hg(e) {
      return zw.get(e) || e;
    }
    function DD(e, t) {
      if (aa.call(Gl, t) && Gl[t]) return true;
      if (jw.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Q1.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Gl[t] = true;
        if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), Gl[t] = true;
      }
      if (Vw.test(t)) {
        if (e = t.toLowerCase(), e = Q1.hasOwnProperty(e) ? e : null, e == null) return Gl[t] = true, false;
        t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), Gl[t] = true);
      }
      return true;
    }
    function RD(e, t) {
      var n = [], a;
      for (a in t) DD(e, a) || n.push(a);
      t = n.map(function(o) {
        return "`" + o + "`";
      }).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
    }
    function wD(e, t, n, a) {
      if (aa.call(tn, t) && tn[t]) return true;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), tn[t] = true;
      if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return true;
      if (a != null) {
        if (e = a.possibleRegistrationNames, a.registrationNameDependencies.hasOwnProperty(t)) return true;
        if (a = e.hasOwnProperty(o) ? e[o] : null, a != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, a), tn[t] = true;
        if (P1.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), tn[t] = true;
      } else if (P1.test(t)) return Uw.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), tn[t] = true;
      if (Bw.test(t) || Lw.test(t)) return true;
      if (o === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), tn[t] = true;
      if (o === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), tn[t] = true;
      if (o === "is" && n !== null && n !== void 0 && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), tn[t] = true;
      if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), tn[t] = true;
      if (Zc.hasOwnProperty(o)) {
        if (o = Zc[o], o !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, o), tn[t] = true;
      } else if (t !== o) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), tn[t] = true;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return true;
        case "innerText":
        case "textContent":
          return true;
      }
      switch (typeof n) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return true;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? true : (n ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), tn[t] = true);
          }
        case "function":
        case "symbol":
          return tn[t] = true, false;
        case "string":
          if (n === "false" || n === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return true;
            }
            console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), tn[t] = true;
          }
      }
      return true;
    }
    function CD(e, t, n) {
      var a = [], o;
      for (o in t) wD(e, o, t[o], n) || a.push(o);
      t = a.map(function(s) {
        return "`" + s + "`";
      }).join(", "), a.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < a.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
    }
    function Hs(e) {
      return Hw.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Za() {
    }
    function Dd(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Yg(e) {
      var t = P(e);
      if (t && (e = t.stateNode)) {
        var n = e[en] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (vd(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (Ze(t, "name"), n = n.querySelectorAll('input[name="' + jn("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                var a = n[t];
                if (a !== e && a.form === e.form) {
                  var o = a[en] || null;
                  if (!o) throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
                  vd(a, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name);
                }
              }
              for (t = 0; t < n.length; t++) a = n[t], a.form === e.form && Tg(a);
            }
            break e;
          case "textarea":
            Cg(e, n.value, n.defaultValue);
            break e;
          case "select":
            t = n.value, t != null && bl(e, !!n.multiple, t, false);
        }
      }
    }
    function kg(e, t, n) {
      if (qp) return e(t, n);
      qp = true;
      try {
        var a = e(t);
        return a;
      } finally {
        if (qp = false, (Xl !== null || $l !== null) && (Nl(), Xl && (t = Xl, e = $l, $l = Xl = null, Yg(t), e))) for (t = 0; t < e.length; t++) Yg(e[t]);
      }
    }
    function Ys(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var a = n[en] || null;
      if (a === null) return null;
      n = a[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (n && typeof n != "function") throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type.");
      return n;
    }
    function qg() {
      if (Pc) return Pc;
      var e, t = Xp, n = t.length, a, o = "value" in ki ? ki.value : ki.textContent, s = o.length;
      for (e = 0; e < n && t[e] === o[e]; e++) ;
      var u = n - e;
      for (a = 1; a <= u && t[n - a] === o[s - a]; a++) ;
      return Pc = o.slice(e, 1 < a ? 1 - a : void 0);
    }
    function ju(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Uu() {
      return true;
    }
    function Gg() {
      return false;
    }
    function cn(e) {
      function t(n, a, o, s, u) {
        this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = s, this.target = u, this.currentTarget = null;
        for (var f in e) e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(s) : s[f]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? Uu : Gg, this.isPropagationStopped = Gg, this;
      }
      return ze(t.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = Uu);
      }, stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = Uu);
      }, persist: function() {
      }, isPersistent: Uu }), t;
    }
    function OD(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Iw[e]) ? !!t[e] : false;
    }
    function Rd() {
      return OD;
    }
    function Xg(e, t) {
      switch (e) {
        case "keyup":
          return cC.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== I1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function $g(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function MD(e, t) {
      switch (e) {
        case "compositionend":
          return $g(t);
        case "keypress":
          return t.which !== eS ? null : (nS = true, tS);
        case "textInput":
          return e = t.data, e === tS && nS ? null : e;
        default:
          return null;
      }
    }
    function ND(e, t) {
      if (Ql) return e === "compositionend" || !Pp && Xg(e, t) ? (e = qg(), Pc = Xp = ki = null, Ql = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return W1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Qg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!dC[e.type] : t === "textarea";
    }
    function _D(e) {
      if (!Ba) return false;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Zg(e, t, n, a) {
      Xl ? $l ? $l.push(a) : $l = [a] : Xl = a, t = Cc(t, "onChange"), 0 < t.length && (n = new Jc("onChange", "change", null, n, a), e.push({ event: n, listeners: t }));
    }
    function zD(e) {
      Ob(e, 0);
    }
    function Bu(e) {
      var t = le(e);
      if (Tg(t)) return e;
    }
    function Pg(e, t) {
      if (e === "change") return t;
    }
    function Jg() {
      xr && (xr.detachEvent("onpropertychange", Kg), Dr = xr = null);
    }
    function Kg(e) {
      if (e.propertyName === "value" && Bu(Dr)) {
        var t = [];
        Zg(t, Dr, e, Dd(e)), kg(zD, t);
      }
    }
    function VD(e, t, n) {
      e === "focusin" ? (Jg(), xr = t, Dr = n, xr.attachEvent("onpropertychange", Kg)) : e === "focusout" && Jg();
    }
    function jD(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bu(Dr);
    }
    function UD(e, t) {
      if (e === "click") return Bu(t);
    }
    function BD(e, t) {
      if (e === "input" || e === "change") return Bu(t);
    }
    function LD(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function ks(e, t) {
      if (nn(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var n = Object.keys(e), a = Object.keys(t);
      if (n.length !== a.length) return false;
      for (a = 0; a < n.length; a++) {
        var o = n[a];
        if (!aa.call(t, o) || !nn(e[o], t[o])) return false;
      }
      return true;
    }
    function Fg(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Ig(e, t) {
      var n = Fg(e);
      e = 0;
      for (var a; n; ) {
        if (n.nodeType === 3) {
          if (a = e + n.textContent.length, e <= t && a >= t) return { node: n, offset: t - e };
          e = a;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Fg(n);
      }
    }
    function Wg(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Wg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function e0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = _u(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = false;
        }
        if (n) e = t.contentWindow;
        else break;
        t = _u(e.document);
      }
      return t;
    }
    function wd(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function t0(e, t, n) {
      var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Kp || Zl == null || Zl !== _u(a) || (a = Zl, "selectionStart" in a && wd(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Rr && ks(Rr, a) || (Rr = a, a = Cc(Jp, "onSelect"), 0 < a.length && (t = new Jc("onSelect", "select", null, t, n), e.push({ event: t, listeners: a }), t.target = Zl)));
    }
    function Ao(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    function xo(e) {
      if (Fp[e]) return Fp[e];
      if (!Pl[e]) return e;
      var t = Pl[e], n;
      for (n in t) if (t.hasOwnProperty(n) && n in iS) return Fp[e] = t[n];
      return e;
    }
    function Wn(e, t) {
      uS.set(e, t), ke(t, [e]);
    }
    function HD(e) {
      for (var t = Fc, n = 0; n < e.length; n++) {
        var a = e[n];
        if (typeof a == "object" && a !== null) if (Ct(a) && a.length === 2 && typeof a[0] == "string") {
          if (t !== Fc && t !== nm) return em;
          t = nm;
        } else return em;
        else {
          if (typeof a == "function" || typeof a == "string" && 50 < a.length || t !== Fc && t !== tm) return em;
          t = tm;
        }
      }
      return t;
    }
    function Cd(e, t, n, a) {
      for (var o in e) aa.call(e, o) && o[0] !== "_" && ma(o, e[o], t, n, a);
    }
    function ma(e, t, n, a, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Na) {
              var s = ae(t.type) || "\u2026", u = t.key;
              t = t.props;
              var f = Object.keys(t), p = f.length;
              if (u == null && p === 0) {
                t = "<" + s + " />";
                break;
              }
              if (3 > a || p === 1 && f[0] === "children" && u == null) {
                t = "<" + s + " \u2026 />";
                break;
              }
              n.push([o + "\xA0\xA0".repeat(a) + e, "<" + s]), u !== null && ma("key", u, n, a + 1, o), e = false;
              for (var g in t) g === "children" ? t.children != null && (!Ct(t.children) || 0 < t.children.length) && (e = true) : aa.call(t, g) && g[0] !== "_" && ma(g, t[g], n, a + 1, o);
              n.push(["", e ? ">\u2026</" + s + ">" : "/>"]);
              return;
            }
            if (s = Object.prototype.toString.call(t), s = s.slice(8, s.length - 1), s === "Array") {
              if (g = HD(t), g === tm || g === Fc) {
                t = JSON.stringify(t);
                break;
              } else if (g === nm) {
                for (n.push([o + "\xA0\xA0".repeat(a) + e, ""]), e = 0; e < t.length; e++) s = t[e], ma(s[0], s[1], n, a + 1, o);
                return;
              }
            }
            if (s === "Promise") {
              if (t.status === "fulfilled") {
                if (s = n.length, ma(e, t.value, n, a, o), n.length > s) {
                  n = n[s], n[1] = "Promise<" + (n[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (s = n.length, ma(e, t.reason, n, a, o), n.length > s)) {
                n = n[s], n[1] = "Rejected Promise<" + n[1] + ">";
                return;
              }
              n.push(["\xA0\xA0".repeat(a) + e, "Promise"]);
              return;
            }
            s === "Object" && (g = Object.getPrototypeOf(t)) && typeof g.constructor == "function" && (s = g.constructor.name), n.push([o + "\xA0\xA0".repeat(a) + e, s === "Object" ? 3 > a ? "" : "\u2026" : s]), 3 > a && Cd(t, n, a + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === bC ? "\u2026" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      n.push([o + "\xA0\xA0".repeat(a) + e, t]);
    }
    function n0(e, t, n, a) {
      var o = true;
      for (u in e) u in t || (n.push([Ic + "\xA0\xA0".repeat(a) + u, "\u2026"]), o = false);
      for (var s in t) if (s in e) {
        var u = e[s], f = t[s];
        if (u !== f) {
          if (a === 0 && s === "children") o = "\xA0\xA0".repeat(a) + s, n.push([Ic + o, "\u2026"], [Wc + o, "\u2026"]);
          else {
            if (!(3 <= a)) {
              if (typeof u == "object" && typeof f == "object" && u !== null && f !== null && u.$$typeof === f.$$typeof) if (f.$$typeof === Na) {
                if (u.type === f.type && u.key === f.key) {
                  u = ae(f.type) || "\u2026", o = "\xA0\xA0".repeat(a) + s, u = "<" + u + " \u2026 />", n.push([Ic + o, u], [Wc + o, u]), o = false;
                  continue;
                }
              } else {
                var p = Object.prototype.toString.call(u), g = Object.prototype.toString.call(f);
                if (p === g && (g === "[object Object]" || g === "[object Array]")) {
                  p = [dS + "\xA0\xA0".repeat(a) + s, g === "[object Array]" ? "Array" : ""], n.push(p), g = n.length, n0(u, f, n, a + 1) ? g === n.length && (p[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = false;
                  continue;
                }
              }
              else if (typeof u == "function" && typeof f == "function" && u.name === f.name && u.length === f.length && (p = Function.prototype.toString.call(u), g = Function.prototype.toString.call(f), p === g)) {
                u = f.name === "" ? "() => {}" : f.name + "() {}", n.push([dS + "\xA0\xA0".repeat(a) + s, u + " Referentially unequal function closure. Consider memoization."]);
                continue;
              }
            }
            ma(s, u, n, a, Ic), ma(s, f, n, a, Wc);
          }
          o = false;
        }
      } else n.push([Wc + "\xA0\xA0".repeat(a) + s, "\u2026"]), o = false;
      return o;
    }
    function ea(e) {
      He = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function ya(e, t, n, a) {
      at && (Gi.start = t, Gi.end = n, ai.color = "warning", ai.tooltipText = a, ai.properties = null, (e = e._debugTask) ? e.run(performance.measure.bind(performance, a, Gi)) : performance.measure(a, Gi));
    }
    function Lu(e, t, n) {
      ya(e, t, n, "Reconnect");
    }
    function Hu(e, t, n, a, o) {
      var s = k(e);
      if (s !== null && at) {
        var u = e.alternate, f = e.actualDuration;
        if (u === null || u.child !== e.child) for (var p = e.child; p !== null; p = p.sibling) f -= p.actualDuration;
        a = 0.5 > f ? a ? "tertiary-light" : "primary-light" : 10 > f ? a ? "tertiary" : "primary" : 100 > f ? a ? "tertiary-dark" : "primary-dark" : "error";
        var g = e.memoizedProps;
        f = e._debugTask, g !== null && u !== null && u.memoizedProps !== g ? (p = [SC], g = n0(u.memoizedProps, g, p, 0), 1 < p.length && (g && !qi && (u.lanes & o) === 0 && 100 < e.actualDuration ? (qi = true, p[0] = TC, ai.color = "warning", ai.tooltipText = hS) : (ai.color = a, ai.tooltipText = s), ai.properties = p, Gi.start = t, Gi.end = n, f != null ? f.run(performance.measure.bind(performance, "\u200B" + s, Gi)) : performance.measure("\u200B" + s, Gi))) : f != null ? f.run(console.timeStamp.bind(console, s, t, n, Ln, void 0, a)) : console.timeStamp(s, t, n, Ln, void 0, a);
      }
    }
    function Od(e, t, n, a) {
      if (at) {
        var o = k(e);
        if (o !== null) {
          for (var s = null, u = [], f = 0; f < a.length; f++) {
            var p = a[f];
            s == null && p.source !== null && (s = p.source._debugTask), p = p.value, u.push(["Error", typeof p == "object" && p !== null && typeof p.message == "string" ? String(p.message) : String(p)]);
          }
          e.key !== null && ma("key", e.key, u, 0, ""), e.memoizedProps !== null && Cd(e.memoizedProps, u, 0, ""), s == null && (s = e._debugTask), e = { start: t, end: n, detail: { devtools: { color: "error", track: Ln, tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error", properties: u } } }, s ? s.run(performance.measure.bind(performance, "\u200B" + o, e)) : performance.measure("\u200B" + o, e);
        }
      }
    }
    function ga(e, t, n, a, o) {
      if (o !== null) {
        if (at) {
          var s = k(e);
          if (s !== null) {
            a = [];
            for (var u = 0; u < o.length; u++) {
              var f = o[u].value;
              a.push(["Error", typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f)]);
            }
            e.key !== null && ma("key", e.key, a, 0, ""), e.memoizedProps !== null && Cd(e.memoizedProps, a, 0, ""), t = { start: t, end: n, detail: { devtools: { color: "error", track: Ln, tooltipText: "A lifecycle or effect errored", properties: a } } }, (e = e._debugTask) ? e.run(performance.measure.bind(performance, "\u200B" + s, t)) : performance.measure("\u200B" + s, t);
          }
        }
      } else s = k(e), s !== null && at && (o = 1 > a ? "secondary-light" : 100 > a ? "secondary" : 500 > a ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(console.timeStamp.bind(console, s, t, n, Ln, void 0, o)) : console.timeStamp(s, t, n, Ln, void 0, o));
    }
    function YD(e, t, n, a) {
      if (at && !(t <= e)) {
        var o = (n & 738197653) === n ? "tertiary-dark" : "primary-dark";
        n = (n & 536870912) === n ? "Prepared" : (n & 201326741) === n ? "Hydrated" : "Render", a ? a.run(console.timeStamp.bind(console, n, e, t, He, Be, o)) : console.timeStamp(n, e, t, He, Be, o);
      }
    }
    function a0(e, t, n, a) {
      !at || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", a ? a.run(console.timeStamp.bind(console, "Prewarm", e, t, He, Be, n)) : console.timeStamp("Prewarm", e, t, He, Be, n));
    }
    function i0(e, t, n, a) {
      !at || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", a ? a.run(console.timeStamp.bind(console, "Suspended", e, t, He, Be, n)) : console.timeStamp("Suspended", e, t, He, Be, n));
    }
    function kD(e, t, n, a, o, s) {
      if (at && !(t <= e)) {
        n = [];
        for (var u = 0; u < a.length; u++) {
          var f = a[u].value;
          n.push(["Recoverable Error", typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f)]);
        }
        e = { start: e, end: t, detail: { devtools: { color: "primary-dark", track: He, trackGroup: Be, tooltipText: o ? "Hydration Failed" : "Recovered after Error", properties: n } } }, s ? s.run(performance.measure.bind(performance, "Recovered", e)) : performance.measure("Recovered", e);
      }
    }
    function Md(e, t, n, a) {
      !at || t <= e || (a ? a.run(console.timeStamp.bind(console, "Errored", e, t, He, Be, "error")) : console.timeStamp("Errored", e, t, He, Be, "error"));
    }
    function qD(e, t, n, a) {
      !at || t <= e || (a ? a.run(console.timeStamp.bind(console, n, e, t, He, Be, "secondary-light")) : console.timeStamp(n, e, t, He, Be, "secondary-light"));
    }
    function o0(e, t, n, a, o) {
      if (at && !(t <= e)) {
        for (var s = [], u = 0; u < n.length; u++) {
          var f = n[u].value;
          s.push(["Error", typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f)]);
        }
        e = { start: e, end: t, detail: { devtools: { color: "error", track: He, trackGroup: Be, tooltipText: a ? "Remaining Effects Errored" : "Commit Errored", properties: s } } }, o ? o.run(performance.measure.bind(performance, "Errored", e)) : performance.measure("Errored", e);
      }
    }
    function Nd(e, t, n) {
      !at || t <= e || console.timeStamp("Animating", e, t, He, Be, "secondary-dark");
    }
    function Yu() {
      for (var e = Jl, t = am = Jl = 0; t < e; ) {
        var n = Hn[t];
        Hn[t++] = null;
        var a = Hn[t];
        Hn[t++] = null;
        var o = Hn[t];
        Hn[t++] = null;
        var s = Hn[t];
        if (Hn[t++] = null, a !== null && o !== null) {
          var u = a.pending;
          u === null ? o.next = o : (o.next = u.next, u.next = o), a.pending = o;
        }
        s !== 0 && l0(n, o, s);
      }
    }
    function ku(e, t, n, a) {
      Hn[Jl++] = e, Hn[Jl++] = t, Hn[Jl++] = n, Hn[Jl++] = a, am |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function _d(e, t, n, a) {
      return ku(e, t, n, a), qu(e);
    }
    function Zt(e, t) {
      return ku(e, null, null, t), qu(e);
    }
    function l0(e, t, n) {
      e.lanes |= n;
      var a = e.alternate;
      a !== null && (a.lanes |= n);
      for (var o = false, s = e.return; s !== null; ) s.childLanes |= n, a = s.alternate, a !== null && (a.childLanes |= n), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & wr || (o = true)), e = s, s = s.return;
      return e.tag === 3 ? (s = e.stateNode, o && t !== null && (o = 31 - Wt(n), e = s.hiddenUpdates, a = e[o], a === null ? e[o] = [t] : a.push(t), t.lane = n | 536870912), s) : null;
    }
    function qu(e) {
      if (eu > BC) throw el = eu = 0, tu = Um = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      el > LC && (el = 0, tu = null, console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")), e.alternate === null && (e.flags & 4098) !== 0 && Eb(e);
      for (var t = e, n = t.return; n !== null; ) t.alternate === null && (t.flags & 4098) !== 0 && Eb(e), t = n, n = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Do(e) {
      if (Yn === null) return e;
      var t = Yn(e);
      return t === void 0 ? e : t.current;
    }
    function zd(e) {
      if (Yn === null) return e;
      var t = Yn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Do(e.render), e.render !== t) ? (t = { $$typeof: mr, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function s0(e, t) {
      if (Yn === null) return false;
      var n = e.elementType;
      t = t.type;
      var a = false, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (a = true);
          break;
        case 0:
          (typeof t == "function" || o === Dn) && (a = true);
          break;
        case 11:
          (o === mr || o === Dn) && (a = true);
          break;
        case 14:
        case 15:
          (o === Hc || o === Dn) && (a = true);
          break;
        default:
          return false;
      }
      return !!(a && (e = Yn(n), e !== void 0 && e === Yn(t)));
    }
    function r0(e) {
      Yn !== null && typeof WeakSet == "function" && (Kl === null && (Kl = /* @__PURE__ */ new WeakSet()), Kl.add(e));
    }
    function u0(e, t, n) {
      do {
        var a = e, o = a.alternate, s = a.child, u = a.sibling, f = a.tag;
        a = a.type;
        var p = null;
        switch (f) {
          case 0:
          case 15:
          case 1:
            p = a;
            break;
          case 11:
            p = a.render;
        }
        if (Yn === null) throw Error("Expected resolveFamily to be set during hot reload.");
        var g = false;
        if (a = false, p !== null && (p = Yn(p), p !== void 0 && (n.has(p) ? a = true : t.has(p) && (f === 1 ? a = true : g = true))), Kl !== null && (Kl.has(e) || o !== null && Kl.has(o)) && (a = true), a && (e._debugNeedsRemount = true), (a || g) && (o = Zt(e, 2), o !== null && dt(o, e, 2)), s === null || a || u0(s, t, n), u === null) break;
        e = u;
      } while (true);
    }
    function GD(e, t, n, a) {
      this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = false, this._debugHookTypes = null, pS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Vd(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Pa(e, t) {
      var n = e.alternate;
      switch (n === null ? (n = b(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugStack = e._debugStack, n._debugTask = e._debugTask, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext, _debugThenableState: t._debugThenableState }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case 0:
        case 15:
          n.type = Do(e.type);
          break;
        case 1:
          n.type = Do(e.type);
          break;
        case 11:
          n.type = zd(e.type);
      }
      return n;
    }
    function c0(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext, _debugThenableState: t._debugThenableState }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
    }
    function jd(e, t, n, a, o, s) {
      var u = 0, f = e;
      if (typeof e == "function") Vd(e) && (u = 1), f = Do(f);
      else if (typeof e == "string") u = de(), u = IR(e, n, u) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case Cp:
          return t = b(31, n, t, o), t.elementType = Cp, t.lanes = s, t;
        case Ll:
          return Ro(n.children, o, s, t);
        case Lc:
          u = 8, o |= Jt, o |= ia;
          break;
        case xp:
          return e = n, a = o, typeof e.id != "string" && console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id), t = b(12, e, t, a | we), t.elementType = xp, t.lanes = s, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
        case Rp:
          return t = b(13, n, t, o), t.elementType = Rp, t.lanes = s, t;
        case wp:
          return t = b(19, n, t, o), t.elementType = wp, t.lanes = s, t;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case _a:
              u = 10;
              break e;
            case Dp:
              u = 9;
              break e;
            case mr:
              u = 11, f = zd(f);
              break e;
            case Hc:
              u = 14;
              break e;
            case Dn:
              u = 16, f = null;
              break e;
          }
          f = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : Ct(e) ? n = "array" : e !== void 0 && e.$$typeof === Na ? (n = "<" + (ae(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, (u = a ? Re(a) : null) && (f += `

Check the render method of \`` + u + "`."), u = 29, n = Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (n + "." + f)), f = null;
      }
      return t = b(u, n, t, o), t.elementType = e, t.type = f, t.lanes = s, t._debugOwner = a, t;
    }
    function Gu(e, t, n) {
      return t = jd(e.type, e.key, e.props, e._owner, t, n), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Ro(e, t, n, a) {
      return e = b(7, e, a, t), e.lanes = n, e;
    }
    function Ud(e, t, n) {
      return e = b(6, e, null, t), e.lanes = n, e;
    }
    function f0(e) {
      var t = b(18, null, null, ve);
      return t.stateNode = e, t;
    }
    function Bd(e, t, n) {
      return t = b(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
    }
    function bn(e, t) {
      if (typeof e == "object" && e !== null) {
        var n = im.get(e);
        return n !== void 0 ? n : (t = { value: e, source: t, stack: Ee(t) }, im.set(e, t), t);
      }
      return { value: e, source: t, stack: Ee(t) };
    }
    function Ja(e, t) {
      Di(), Fl[Il++] = Cr, Fl[Il++] = ef, ef = e, Cr = t;
    }
    function d0(e, t, n) {
      Di(), kn[qn++] = oi, kn[qn++] = li, kn[qn++] = Ho, Ho = e;
      var a = oi;
      e = li;
      var o = 32 - Wt(a) - 1;
      a &= ~(1 << o), n += 1;
      var s = 32 - Wt(t) + o;
      if (30 < s) {
        var u = o - o % 5;
        s = (a & (1 << u) - 1).toString(32), a >>= u, o -= u, oi = 1 << 32 - Wt(t) + o | n << o | a, li = s + e;
      } else oi = 1 << s | n << o | a, li = e;
    }
    function Ld(e) {
      Di(), e.return !== null && (Ja(e, 1), d0(e, 1, 0));
    }
    function Hd(e) {
      for (; e === ef; ) ef = Fl[--Il], Fl[Il] = null, Cr = Fl[--Il], Fl[Il] = null;
      for (; e === Ho; ) Ho = kn[--qn], kn[qn] = null, li = kn[--qn], kn[qn] = null, oi = kn[--qn], kn[qn] = null;
    }
    function h0() {
      return Di(), Ho !== null ? { id: oi, overflow: li } : null;
    }
    function p0(e, t) {
      Di(), kn[qn++] = oi, kn[qn++] = li, kn[qn++] = Ho, oi = t.id, li = t.overflow, Ho = e;
    }
    function Di() {
      je || console.error("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    function wo(e, t) {
      if (e.return === null) {
        if (wn === null) wn = { fiber: e, children: [], serverProps: void 0, serverTail: [], distanceFromLeaf: t };
        else {
          if (wn.fiber !== e) throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");
          wn.distanceFromLeaf > t && (wn.distanceFromLeaf = t);
        }
        return wn;
      }
      var n = wo(e.return, t + 1).children;
      return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = { fiber: e, children: [], serverProps: void 0, serverTail: [], distanceFromLeaf: t }, n.push(t), t);
    }
    function m0() {
      je && console.error("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Xu(e, t) {
      La || (e = wo(e, 0), e.serverProps = null, t !== null && (t = Zb(t), e.serverTail.push(t)));
    }
    function Ri(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : false, n = "", a = wn;
      throw a !== null && (wn = null, n = Ad(a)), qs(bn(Error("Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + n), e)), om;
    }
    function y0(e) {
      var t = e.stateNode, n = e.type, a = e.memoizedProps;
      switch (t[kt] = e, t[en] = a, op(n, a), n) {
        case "dialog":
          Ue("cancel", t), Ue("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ue("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < nu.length; n++) Ue(nu[n], t);
          break;
        case "source":
          Ue("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ue("error", t), Ue("load", t);
          break;
        case "details":
          Ue("toggle", t);
          break;
        case "input":
          Ft("input", a), Ue("invalid", t), Eg(t, a), Ag(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "option":
          xg(t, a);
          break;
        case "select":
          Ft("select", a), Ue("invalid", t), Rg(t, a);
          break;
        case "textarea":
          Ft("textarea", a), Ue("invalid", t), wg(t, a), Og(t, a.value, a.defaultValue, a.children);
      }
      n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === true || zb(t.textContent, n) ? (a.popover != null && (Ue("beforetoggle", t), Ue("toggle", t)), a.onScroll != null && Ue("scroll", t), a.onScrollEnd != null && Ue("scrollend", t), a.onClick != null && (t.onclick = Za), t = true) : t = false, t || Ri(e, true);
    }
    function g0(e) {
      for (qt = e.return; qt; ) switch (qt.tag) {
        case 5:
        case 31:
        case 13:
          Gn = false;
          return;
        case 27:
        case 3:
          Gn = true;
          return;
        default:
          qt = qt.return;
      }
    }
    function El(e) {
      if (e !== qt) return false;
      if (!je) return g0(e), je = true, false;
      var t = e.tag, n;
      if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || cp(e.type, e.memoizedProps)), n = !n), n && it) {
        for (n = it; n; ) {
          var a = wo(e, 0), o = Zb(n);
          a.serverTail.push(o), n = o.type === "Suspense" ? pp(n) : xn(n.nextSibling);
        }
        Ri(e);
      }
      if (g0(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
        it = pp(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
        it = pp(e);
      } else t === 27 ? (t = it, Ui(e.type) ? (e = Pm, Pm = null, it = e) : it = t) : it = qt ? xn(e.stateNode.nextSibling) : null;
      return true;
    }
    function Co() {
      it = qt = null, La = je = false;
    }
    function Yd() {
      var e = $i;
      return e !== null && (sn === null ? sn = e : sn.push.apply(sn, e), $i = null), e;
    }
    function qs(e) {
      $i === null ? $i = [e] : $i.push(e);
    }
    function kd() {
      var e = wn;
      if (e !== null) {
        wn = null;
        for (var t = Ad(e); 0 < e.children.length; ) e = e.children[0];
        te(e.fiber, function() {
          console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`, "https://react.dev/link/hydration-mismatch", t);
        });
      }
    }
    function $u() {
      Wl = tf = null, es = false;
    }
    function wi(e, t, n) {
      ge(lm, t._currentValue, e), t._currentValue = n, ge(sm, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== yS && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = yS;
    }
    function Ka(e, t) {
      e._currentValue = lm.current;
      var n = sm.current;
      ne(sm, t), e._currentRenderer = n, ne(lm, t);
    }
    function qd(e, t, n) {
      for (; e !== null; ) {
        var a = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
        e = e.return;
      }
      e !== n && console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Gd(e, t, n, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var s = o.dependencies;
        if (s !== null) {
          var u = o.child;
          s = s.firstContext;
          e: for (; s !== null; ) {
            var f = s;
            s = o;
            for (var p = 0; p < t.length; p++) if (f.context === t[p]) {
              s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), qd(s.return, n, e), a || (u = null);
              break e;
            }
            s = f.next;
          }
        } else if (o.tag === 18) {
          if (u = o.return, u === null) throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), qd(u, n, e), u = null;
        } else u = o.child;
        if (u !== null) u.return = o;
        else for (u = o; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (o = u.sibling, o !== null) {
            o.return = u.return, u = o;
            break;
          }
          u = u.return;
        }
        o = u;
      }
    }
    function Al(e, t, n, a) {
      e = null;
      for (var o = t, s = false; o !== null; ) {
        if (!s) {
          if ((o.flags & 524288) !== 0) s = true;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var u = o.alternate;
          if (u === null) throw Error("Should have a current fiber. This is a bug in React.");
          if (u = u.memoizedProps, u !== null) {
            var f = o.type;
            nn(o.pendingProps.value, u.value) || (e !== null ? e.push(f) : e = [f]);
          }
        } else if (o === Yc.current) {
          if (u = o.alternate, u === null) throw Error("Should have a current fiber. This is a bug in React.");
          u.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(su) : e = [su]);
        }
        o = o.return;
      }
      e !== null && Gd(t, e, n, a), t.flags |= 262144;
    }
    function Qu(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!nn(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function Oo(e) {
      tf = e, Wl = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function lt(e) {
      return es && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), v0(tf, e);
    }
    function Zu(e, t) {
      return tf === null && Oo(e), v0(e, t);
    }
    function v0(e, t) {
      var n = t._currentValue;
      if (t = { context: t, memoizedValue: n, next: null }, Wl === null) {
        if (e === null) throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        Wl = t, e.dependencies = { lanes: 0, firstContext: t, _debugThenableState: null }, e.flags |= 524288;
      } else Wl = Wl.next = t;
      return n;
    }
    function Xd() {
      return { controller: new xC(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function Mo(e) {
      e.controller.signal.aborted && console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."), e.refCount++;
    }
    function Gs(e) {
      e.refCount--, 0 > e.refCount && console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."), e.refCount === 0 && DC(RC, function() {
        e.controller.abort();
      });
    }
    function va(e, t, n) {
      (e & 127) !== 0 ? 0 > Ha && (Ha = Tt(), Mr = nf(t), rm = t, n != null && (um = k(n)), (qe & (Mt | Mn)) !== Bt && (ht = true, Zi = Or), e = cr(), t = ur(), e !== ts || t !== Nr ? ts = -1.1 : t !== null && (Zi = Or), qo = e, Nr = t) : (e & 4194048) !== 0 && 0 > Xn && (Xn = Tt(), _r = nf(t), gS = t, n != null && (vS = k(n)), 0 > ci) && (e = cr(), t = ur(), (e !== Ji || t !== Go) && (Ji = -1.1), Pi = e, Go = t);
    }
    function XD(e) {
      if (0 > Ha) {
        Ha = Tt(), Mr = e._debugTask != null ? e._debugTask : null, (qe & (Mt | Mn)) !== Bt && (Zi = Or);
        var t = cr(), n = ur();
        t !== ts || n !== Nr ? ts = -1.1 : n !== null && (Zi = Or), qo = t, Nr = n;
      }
      0 > Xn && (Xn = Tt(), _r = e._debugTask != null ? e._debugTask : null, 0 > ci) && (e = cr(), t = ur(), (e !== Ji || t !== Go) && (Ji = -1.1), Pi = e, Go = t);
    }
    function Fa() {
      var e = Yo;
      return Yo = 0, e;
    }
    function Pu(e) {
      var t = Yo;
      return Yo = e, t;
    }
    function Xs(e) {
      var t = Yo;
      return Yo += e, t;
    }
    function Ju() {
      me = he = -1.1;
    }
    function Sn() {
      var e = he;
      return he = -1.1, e;
    }
    function Tn(e) {
      0 <= e && (he = e);
    }
    function ba() {
      var e = ct;
      return ct = -0, e;
    }
    function Sa(e) {
      0 <= e && (ct = e);
    }
    function Ta() {
      var e = st;
      return st = null, e;
    }
    function Ea() {
      var e = ht;
      return ht = false, e;
    }
    function $d(e) {
      an = Tt(), 0 > e.actualStartTime && (e.actualStartTime = an);
    }
    function Qd(e) {
      if (0 <= an) {
        var t = Tt() - an;
        e.actualDuration += t, e.selfBaseDuration = t, an = -1;
      }
    }
    function b0(e) {
      if (0 <= an) {
        var t = Tt() - an;
        e.actualDuration += t, an = -1;
      }
    }
    function Aa() {
      if (0 <= an) {
        var e = Tt(), t = e - an;
        an = -1, Yo += t, ct += t, me = e;
      }
    }
    function S0(e) {
      st === null && (st = []), st.push(e), ri === null && (ri = []), ri.push(e);
    }
    function xa() {
      an = Tt(), 0 > he && (he = an);
    }
    function $s(e) {
      for (var t = e.child; t; ) e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function $D(e, t) {
      if (Vr === null) {
        var n = Vr = [];
        fm = 0, Xo = tp(), ns = { status: "pending", value: void 0, then: function(a) {
          n.push(a);
        } };
      }
      return fm++, t.then(T0, T0), t;
    }
    function T0() {
      if (--fm === 0 && (-1 < Xn || (ci = -1.1), Vr !== null)) {
        ns !== null && (ns.status = "fulfilled");
        var e = Vr;
        Vr = null, Xo = 0, ns = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function QD(e, t) {
      var n = [], a = { status: "pending", value: null, reason: null, then: function(o) {
        n.push(o);
      } };
      return e.then(function() {
        a.status = "fulfilled", a.value = t;
        for (var o = 0; o < n.length; o++) (0, n[o])(t);
      }, function(o) {
        for (a.status = "rejected", a.reason = o, o = 0; o < n.length; o++) (0, n[o])(void 0);
      }), a;
    }
    function Zd() {
      var e = $o.current;
      return e !== null ? e : We.pooledCache;
    }
    function Ku(e, t) {
      t === null ? ge($o, $o.current, e) : ge($o, t.pool, e);
    }
    function E0() {
      var e = Zd();
      return e === null ? null : { parent: St._currentValue, pool: e };
    }
    function A0() {
      return { didWarnAboutUncachedPromise: false, thenables: [] };
    }
    function x0(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function D0(e, t, n) {
      j.actQueue !== null && (j.didUsePromise = true);
      var a = e.thenables;
      if (n = a[n], n === void 0 ? a.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = true, console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")), t.then(Za, Za), t = n), t._debugInfo === void 0) {
        e = performance.now(), a = t.displayName;
        var o = { name: typeof a == "string" ? a : "Promise", start: e, end: e, value: t };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, w0(e), e;
        default:
          if (typeof t.status == "string") t.then(Za, Za);
          else {
            if (e = We, e !== null && 100 < e.shellSuspendCounter) throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
            e = t, e.status = "pending", e.then(function(s) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = s;
              }
            }, function(s) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = s;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, w0(e), e;
          }
          throw Zo = t, kr = true, as;
      }
    }
    function Ci(e) {
      try {
        return NC(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Zo = t, kr = true, as) : t;
      }
    }
    function R0() {
      if (Zo === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
      var e = Zo;
      return Zo = null, kr = false, e;
    }
    function w0(e) {
      if (e === as || e === ff) throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
    }
    function Lt(e) {
      var t = Ce;
      return e != null && (Ce = t === null ? e : t.concat(e)), t;
    }
    function Pd() {
      var e = Ce;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--) if (e[t].name != null) {
          var n = e[t].debugTask;
          if (n != null) return n;
        }
      }
      return null;
    }
    function Fu(e, t, n) {
      for (var a = Object.keys(e.props), o = 0; o < a.length; o++) {
        var s = a[o];
        if (s !== "children" && s !== "key") {
          t === null && (t = Gu(e, n.mode, 0), t._debugInfo = Ce, t.return = n), te(t, function(u) {
            console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u);
          }, s);
          break;
        }
      }
    }
    function Iu(e) {
      var t = qr;
      return qr += 1, is === null && (is = A0()), D0(is, e, t);
    }
    function Qs(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function C0(e, t) {
      throw t.$$typeof === uw ? Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`) : (e = Object.prototype.toString.call(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."));
    }
    function Wu(e, t) {
      var n = Pd();
      n !== null ? n.run(C0.bind(null, e, t)) : C0(e, t);
    }
    function O0(e, t) {
      var n = k(e) || "Component";
      LS[n] || (LS[n] = true, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`, t, t, t) : console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`, t, t, n, t, n));
    }
    function ec(e, t) {
      var n = Pd();
      n !== null ? n.run(O0.bind(null, e, t)) : O0(e, t);
    }
    function M0(e, t) {
      var n = k(e) || "Component";
      HS[n] || (HS[n] = true, t = String(t), e.tag === 3 ? console.error(`Symbols are not valid as a React child.
  root.render(%s)`, t) : console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`, n, t, n));
    }
    function tc(e, t) {
      var n = Pd();
      n !== null ? n.run(M0.bind(null, e, t)) : M0(e, t);
    }
    function N0(e) {
      function t(x, R) {
        if (e) {
          var C = x.deletions;
          C === null ? (x.deletions = [R], x.flags |= 16) : C.push(R);
        }
      }
      function n(x, R) {
        if (!e) return null;
        for (; R !== null; ) t(x, R), R = R.sibling;
        return null;
      }
      function a(x) {
        for (var R = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? R.set(x.key, x) : R.set(x.index, x), x = x.sibling;
        return R;
      }
      function o(x, R) {
        return x = Pa(x, R), x.index = 0, x.sibling = null, x;
      }
      function s(x, R, C) {
        return x.index = C, e ? (C = x.alternate, C !== null ? (C = C.index, C < R ? (x.flags |= 67108866, R) : C) : (x.flags |= 67108866, R)) : (x.flags |= 1048576, R);
      }
      function u(x) {
        return e && x.alternate === null && (x.flags |= 67108866), x;
      }
      function f(x, R, C, B) {
        return R === null || R.tag !== 6 ? (R = Ud(C, x.mode, B), R.return = x, R._debugOwner = x, R._debugTask = x._debugTask, R._debugInfo = Ce, R) : (R = o(R, C), R.return = x, R._debugInfo = Ce, R);
      }
      function p(x, R, C, B) {
        var F = C.type;
        return F === Ll ? (R = M(x, R, C.props.children, B, C.key), Fu(C, R, x), R) : R !== null && (R.elementType === F || s0(R, C) || typeof F == "object" && F !== null && F.$$typeof === Dn && Ci(F) === R.type) ? (R = o(R, C.props), Qs(R, C), R.return = x, R._debugOwner = C._owner, R._debugInfo = Ce, R) : (R = Gu(C, x.mode, B), Qs(R, C), R.return = x, R._debugInfo = Ce, R);
      }
      function g(x, R, C, B) {
        return R === null || R.tag !== 4 || R.stateNode.containerInfo !== C.containerInfo || R.stateNode.implementation !== C.implementation ? (R = Bd(C, x.mode, B), R.return = x, R._debugInfo = Ce, R) : (R = o(R, C.children || []), R.return = x, R._debugInfo = Ce, R);
      }
      function M(x, R, C, B, F) {
        return R === null || R.tag !== 7 ? (R = Ro(C, x.mode, B, F), R.return = x, R._debugOwner = x, R._debugTask = x._debugTask, R._debugInfo = Ce, R) : (R = o(R, C), R.return = x, R._debugInfo = Ce, R);
      }
      function N(x, R, C) {
        if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return R = Ud("" + R, x.mode, C), R.return = x, R._debugOwner = x, R._debugTask = x._debugTask, R._debugInfo = Ce, R;
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case Na:
              return C = Gu(R, x.mode, C), Qs(C, R), C.return = x, x = Lt(R._debugInfo), C._debugInfo = Ce, Ce = x, C;
            case Bl:
              return R = Bd(R, x.mode, C), R.return = x, R._debugInfo = Ce, R;
            case Dn:
              var B = Lt(R._debugInfo);
              return R = Ci(R), x = N(x, R, C), Ce = B, x;
          }
          if (Ct(R) || Ye(R)) return C = Ro(R, x.mode, C, null), C.return = x, C._debugOwner = x, C._debugTask = x._debugTask, x = Lt(R._debugInfo), C._debugInfo = Ce, Ce = x, C;
          if (typeof R.then == "function") return B = Lt(R._debugInfo), x = N(x, Iu(R), C), Ce = B, x;
          if (R.$$typeof === _a) return N(x, Zu(x, R), C);
          Wu(x, R);
        }
        return typeof R == "function" && ec(x, R), typeof R == "symbol" && tc(x, R), null;
      }
      function D(x, R, C, B) {
        var F = R !== null ? R.key : null;
        if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return F !== null ? null : f(x, R, "" + C, B);
        if (typeof C == "object" && C !== null) {
          switch (C.$$typeof) {
            case Na:
              return C.key === F ? (F = Lt(C._debugInfo), x = p(x, R, C, B), Ce = F, x) : null;
            case Bl:
              return C.key === F ? g(x, R, C, B) : null;
            case Dn:
              return F = Lt(C._debugInfo), C = Ci(C), x = D(x, R, C, B), Ce = F, x;
          }
          if (Ct(C) || Ye(C)) return F !== null ? null : (F = Lt(C._debugInfo), x = M(x, R, C, B, null), Ce = F, x);
          if (typeof C.then == "function") return F = Lt(C._debugInfo), x = D(x, R, Iu(C), B), Ce = F, x;
          if (C.$$typeof === _a) return D(x, R, Zu(x, C), B);
          Wu(x, C);
        }
        return typeof C == "function" && ec(x, C), typeof C == "symbol" && tc(x, C), null;
      }
      function z(x, R, C, B, F) {
        if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return x = x.get(C) || null, f(R, x, "" + B, F);
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Na:
              return C = x.get(B.key === null ? C : B.key) || null, x = Lt(B._debugInfo), R = p(R, C, B, F), Ce = x, R;
            case Bl:
              return x = x.get(B.key === null ? C : B.key) || null, g(R, x, B, F);
            case Dn:
              var Te = Lt(B._debugInfo);
              return B = Ci(B), R = z(x, R, C, B, F), Ce = Te, R;
          }
          if (Ct(B) || Ye(B)) return C = x.get(C) || null, x = Lt(B._debugInfo), R = M(R, C, B, F, null), Ce = x, R;
          if (typeof B.then == "function") return Te = Lt(B._debugInfo), R = z(x, R, C, Iu(B), F), Ce = Te, R;
          if (B.$$typeof === _a) return z(x, R, C, Zu(R, B), F);
          Wu(R, B);
        }
        return typeof B == "function" && ec(R, B), typeof B == "symbol" && tc(R, B), null;
      }
      function J(x, R, C, B) {
        if (typeof C != "object" || C === null) return B;
        switch (C.$$typeof) {
          case Na:
          case Bl:
            E(x, R, C);
            var F = C.key;
            if (typeof F != "string") break;
            if (B === null) {
              B = /* @__PURE__ */ new Set(), B.add(F);
              break;
            }
            if (!B.has(F)) {
              B.add(F);
              break;
            }
            te(R, function() {
              console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", F);
            });
            break;
          case Dn:
            C = Ci(C), J(x, R, C, B);
        }
        return B;
      }
      function I(x, R, C, B) {
        for (var F = null, Te = null, fe = null, se = R, De = R = 0, ot = null; se !== null && De < C.length; De++) {
          se.index > De ? (ot = se, se = null) : ot = se.sibling;
          var vt = D(x, se, C[De], B);
          if (vt === null) {
            se === null && (se = ot);
            break;
          }
          F = J(x, vt, C[De], F), e && se && vt.alternate === null && t(x, se), R = s(vt, R, De), fe === null ? Te = vt : fe.sibling = vt, fe = vt, se = ot;
        }
        if (De === C.length) return n(x, se), je && Ja(x, De), Te;
        if (se === null) {
          for (; De < C.length; De++) se = N(x, C[De], B), se !== null && (F = J(x, se, C[De], F), R = s(se, R, De), fe === null ? Te = se : fe.sibling = se, fe = se);
          return je && Ja(x, De), Te;
        }
        for (se = a(se); De < C.length; De++) ot = z(se, x, De, C[De], B), ot !== null && (F = J(x, ot, C[De], F), e && ot.alternate !== null && se.delete(ot.key === null ? De : ot.key), R = s(ot, R, De), fe === null ? Te = ot : fe.sibling = ot, fe = ot);
        return e && se.forEach(function(vi) {
          return t(x, vi);
        }), je && Ja(x, De), Te;
      }
      function tt(x, R, C, B) {
        if (C == null) throw Error("An iterable object provided no iterator.");
        for (var F = null, Te = null, fe = R, se = R = 0, De = null, ot = null, vt = C.next(); fe !== null && !vt.done; se++, vt = C.next()) {
          fe.index > se ? (De = fe, fe = null) : De = fe.sibling;
          var vi = D(x, fe, vt.value, B);
          if (vi === null) {
            fe === null && (fe = De);
            break;
          }
          ot = J(x, vi, vt.value, ot), e && fe && vi.alternate === null && t(x, fe), R = s(vi, R, se), Te === null ? F = vi : Te.sibling = vi, Te = vi, fe = De;
        }
        if (vt.done) return n(x, fe), je && Ja(x, se), F;
        if (fe === null) {
          for (; !vt.done; se++, vt = C.next()) fe = N(x, vt.value, B), fe !== null && (ot = J(x, fe, vt.value, ot), R = s(fe, R, se), Te === null ? F = fe : Te.sibling = fe, Te = fe);
          return je && Ja(x, se), F;
        }
        for (fe = a(fe); !vt.done; se++, vt = C.next()) De = z(fe, x, se, vt.value, B), De !== null && (ot = J(x, De, vt.value, ot), e && De.alternate !== null && fe.delete(De.key === null ? se : De.key), R = s(De, R, se), Te === null ? F = De : Te.sibling = De, Te = De);
        return e && fe.forEach(function(tO) {
          return t(x, tO);
        }), je && Ja(x, se), F;
      }
      function Le(x, R, C, B) {
        if (typeof C == "object" && C !== null && C.type === Ll && C.key === null && (Fu(C, null, x), C = C.props.children), typeof C == "object" && C !== null) {
          switch (C.$$typeof) {
            case Na:
              var F = Lt(C._debugInfo);
              e: {
                for (var Te = C.key; R !== null; ) {
                  if (R.key === Te) {
                    if (Te = C.type, Te === Ll) {
                      if (R.tag === 7) {
                        n(x, R.sibling), B = o(R, C.props.children), B.return = x, B._debugOwner = C._owner, B._debugInfo = Ce, Fu(C, B, x), x = B;
                        break e;
                      }
                    } else if (R.elementType === Te || s0(R, C) || typeof Te == "object" && Te !== null && Te.$$typeof === Dn && Ci(Te) === R.type) {
                      n(x, R.sibling), B = o(R, C.props), Qs(B, C), B.return = x, B._debugOwner = C._owner, B._debugInfo = Ce, x = B;
                      break e;
                    }
                    n(x, R);
                    break;
                  } else t(x, R);
                  R = R.sibling;
                }
                C.type === Ll ? (B = Ro(C.props.children, x.mode, B, C.key), B.return = x, B._debugOwner = x, B._debugTask = x._debugTask, B._debugInfo = Ce, Fu(C, B, x), x = B) : (B = Gu(C, x.mode, B), Qs(B, C), B.return = x, B._debugInfo = Ce, x = B);
              }
              return x = u(x), Ce = F, x;
            case Bl:
              e: {
                for (F = C, C = F.key; R !== null; ) {
                  if (R.key === C) if (R.tag === 4 && R.stateNode.containerInfo === F.containerInfo && R.stateNode.implementation === F.implementation) {
                    n(x, R.sibling), B = o(R, F.children || []), B.return = x, x = B;
                    break e;
                  } else {
                    n(x, R);
                    break;
                  }
                  else t(x, R);
                  R = R.sibling;
                }
                B = Bd(F, x.mode, B), B.return = x, x = B;
              }
              return u(x);
            case Dn:
              return F = Lt(C._debugInfo), C = Ci(C), x = Le(x, R, C, B), Ce = F, x;
          }
          if (Ct(C)) return F = Lt(C._debugInfo), x = I(x, R, C, B), Ce = F, x;
          if (Ye(C)) {
            if (F = Lt(C._debugInfo), Te = Ye(C), typeof Te != "function") throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
            var fe = Te.call(C);
            return fe === C ? (x.tag !== 0 || Object.prototype.toString.call(x.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(fe) !== "[object Generator]") && (US || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), US = true) : C.entries !== Te || mm || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), mm = true), x = tt(x, R, fe, B), Ce = F, x;
          }
          if (typeof C.then == "function") return F = Lt(C._debugInfo), x = Le(x, R, Iu(C), B), Ce = F, x;
          if (C.$$typeof === _a) return Le(x, R, Zu(x, C), B);
          Wu(x, C);
        }
        return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (F = "" + C, R !== null && R.tag === 6 ? (n(x, R.sibling), B = o(R, F), B.return = x, x = B) : (n(x, R), B = Ud(F, x.mode, B), B.return = x, B._debugOwner = x, B._debugTask = x._debugTask, B._debugInfo = Ce, x = B), u(x)) : (typeof C == "function" && ec(x, C), typeof C == "symbol" && tc(x, C), n(x, R));
      }
      return function(x, R, C, B) {
        var F = Ce;
        Ce = null;
        try {
          qr = 0;
          var Te = Le(x, R, C, B);
          return is = null, Te;
        } catch (ot) {
          if (ot === as || ot === ff) throw ot;
          var fe = b(29, ot, null, x.mode);
          fe.lanes = B, fe.return = x;
          var se = fe._debugInfo = Ce;
          if (fe._debugOwner = x._debugOwner, fe._debugTask = x._debugTask, se != null) {
            for (var De = se.length - 1; 0 <= De; De--) if (typeof se[De].stack == "string") {
              fe._debugOwner = se[De], fe._debugTask = se[De].debugTask;
              break;
            }
          }
          return fe;
        } finally {
          Ce = F;
        }
      };
    }
    function _0(e, t) {
      var n = Ct(e);
      return e = !n && typeof Ye(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", n, t, n), false) : true;
    }
    function Jd(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function Kd(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
    }
    function Oi(e) {
      return { lane: e, tag: kS, payload: null, callback: null, next: null };
    }
    function Mi(e, t, n) {
      var a = e.updateQueue;
      if (a === null) return null;
      if (a = a.shared, gm === a && !XS) {
        var o = k(e);
        console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`, o), XS = true;
      }
      return (qe & Mt) !== Bt ? (o = a.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), a.pending = t, t = qu(e), l0(e, null, n), t) : (ku(e, a, t, n), qu(e));
    }
    function Zs(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Vs(e, n);
      }
    }
    function nc(e, t) {
      var n = e.updateQueue, a = e.alternate;
      if (a !== null && (a = a.updateQueue, n === a)) {
        var o = null, s = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var u = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            s === null ? o = s = u : s = s.next = u, n = n.next;
          } while (n !== null);
          s === null ? o = s = t : s = s.next = t;
        } else o = s = t;
        n = { baseState: a.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function Ps() {
      if (vm) {
        var e = ns;
        if (e !== null) throw e;
      }
    }
    function Js(e, t, n, a) {
      vm = false;
      var o = e.updateQueue;
      Ki = false, gm = o.shared;
      var s = o.firstBaseUpdate, u = o.lastBaseUpdate, f = o.shared.pending;
      if (f !== null) {
        o.shared.pending = null;
        var p = f, g = p.next;
        p.next = null, u === null ? s = g : u.next = g, u = p;
        var M = e.alternate;
        M !== null && (M = M.updateQueue, f = M.lastBaseUpdate, f !== u && (f === null ? M.firstBaseUpdate = g : f.next = g, M.lastBaseUpdate = p));
      }
      if (s !== null) {
        var N = o.baseState;
        u = 0, M = g = p = null, f = s;
        do {
          var D = f.lane & -536870913, z = D !== f.lane;
          if (z ? (Oe & D) === D : (a & D) === D) {
            D !== 0 && D === Xo && (vm = true), M !== null && (M = M.next = { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null });
            e: {
              D = e;
              var J = f, I = t, tt = n;
              switch (J.tag) {
                case qS:
                  if (J = J.payload, typeof J == "function") {
                    es = true;
                    var Le = J.call(tt, N, I);
                    if (D.mode & Jt) {
                      oe(true);
                      try {
                        J.call(tt, N, I);
                      } finally {
                        oe(false);
                      }
                    }
                    es = false, N = Le;
                    break e;
                  }
                  N = J;
                  break e;
                case ym:
                  D.flags = D.flags & -65537 | 128;
                case kS:
                  if (Le = J.payload, typeof Le == "function") {
                    if (es = true, J = Le.call(tt, N, I), D.mode & Jt) {
                      oe(true);
                      try {
                        Le.call(tt, N, I);
                      } finally {
                        oe(false);
                      }
                    }
                    es = false;
                  } else J = Le;
                  if (J == null) break e;
                  N = ze({}, N, J);
                  break e;
                case GS:
                  Ki = true;
              }
            }
            D = f.callback, D !== null && (e.flags |= 64, z && (e.flags |= 8192), z = o.callbacks, z === null ? o.callbacks = [D] : z.push(D));
          } else z = { lane: D, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, M === null ? (g = M = z, p = N) : M = M.next = z, u |= D;
          if (f = f.next, f === null) {
            if (f = o.shared.pending, f === null) break;
            z = f, f = z.next, z.next = null, o.lastBaseUpdate = z, o.shared.pending = null;
          }
        } while (true);
        M === null && (p = N), o.baseState = p, o.firstBaseUpdate = g, o.lastBaseUpdate = M, s === null && (o.shared.lanes = 0), Wi |= u, e.lanes = u, e.memoizedState = N;
      }
      gm = null;
    }
    function z0(e, t) {
      if (typeof e != "function") throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function ZD(e, t) {
      var n = e.shared.hiddenCallbacks;
      if (n !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++) z0(n[e], t);
    }
    function V0(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) z0(n[e], t);
    }
    function j0(e, t) {
      var n = ka;
      ge(hf, n, e), ge(os, t, e), ka = n | t.baseLanes;
    }
    function Fd(e) {
      ge(hf, ka, e), ge(os, os.current, e);
    }
    function Id(e) {
      ka = hf.current, ne(os, e), ne(hf, e);
    }
    function Ni(e) {
      var t = e.alternate;
      ge(gt, gt.current & ls, e), ge(Cn, e, e), $n === null && (t === null || os.current !== null || t.memoizedState !== null) && ($n = e);
    }
    function Wd(e) {
      ge(gt, gt.current, e), ge(Cn, e, e), $n === null && ($n = e);
    }
    function U0(e) {
      e.tag === 22 ? (ge(gt, gt.current, e), ge(Cn, e, e), $n === null && ($n = e)) : _i(e);
    }
    function _i(e) {
      ge(gt, gt.current, e), ge(Cn, Cn.current, e);
    }
    function En(e) {
      ne(Cn, e), $n === e && ($n = null), ne(gt, e);
    }
    function ac(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || dp(n) || hp(n))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function _e() {
      var e = V;
      Zn === null ? Zn = [e] : Zn.push(e);
    }
    function q() {
      var e = V;
      if (Zn !== null && (hi++, Zn[hi] !== e)) {
        var t = k(Se);
        if (!$S.has(t) && ($S.add(t), Zn !== null)) {
          for (var n = "", a = 0; a <= hi; a++) {
            var o = Zn[a], s = a === hi ? e : o;
            for (o = a + 1 + ". " + o; 30 > o.length; ) o += " ";
            o += s + `
`, n += o;
          }
          console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
        }
      }
    }
    function xl(e) {
      e == null || Ct(e) || console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function ic() {
      var e = k(Se);
      ZS.has(e) || (ZS.add(e), console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.", e));
    }
    function mt() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function eh(e, t) {
      if ($r) return false;
      if (t === null) return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), false;
      e.length !== t.length && console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++) if (!nn(e[n], t[n])) return false;
      return true;
    }
    function th(e, t, n, a, o, s) {
      fi = s, Se = t, Zn = e !== null ? e._debugHookTypes : null, hi = -1, $r = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (s = k(Se), bm.has(s) || (bm.add(s), console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.", s === null ? "An unknown Component" : "<" + s + ">"))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, j.H = e !== null && e.memoizedState !== null ? Tm : Zn !== null ? PS : Sm, Jo = s = (t.mode & Jt) !== ve;
      var u = dm(n, a, o);
      if (Jo = false, rs && (u = nh(t, n, a, o)), s) {
        oe(true);
        try {
          u = nh(t, n, a, o);
        } finally {
          oe(false);
        }
      }
      return B0(e, t), u;
    }
    function B0(e, t) {
      t._debugHookTypes = Zn, t.dependencies === null ? di !== null && (t.dependencies = { lanes: 0, firstContext: null, _debugThenableState: di }) : t.dependencies._debugThenableState = di, j.H = Qr;
      var n = Ie !== null && Ie.next !== null;
      if (fi = 0, Zn = V = Et = Ie = Se = null, hi = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error("Internal React error: Expected static flag was missing. Please notify the React team."), mf = false, Xr = 0, di = null, n) throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      e === null || At || (e = e.dependencies, e !== null && Qu(e) && (At = true)), kr ? (kr = false, e = true) : e = false, e && (t = k(t) || "Unknown", QS.has(t) || bm.has(t) || (QS.add(t), console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")));
    }
    function nh(e, t, n, a) {
      Se = e;
      var o = 0;
      do {
        if (rs && (di = null), Xr = 0, rs = false, o >= zC) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (o += 1, $r = false, Et = Ie = null, e.updateQueue != null) {
          var s = e.updateQueue;
          s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
        }
        hi = -1, j.H = JS, s = dm(t, n, a);
      } while (rs);
      return s;
    }
    function PD() {
      var e = j.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Ks(t) : t, e = e.useState()[0], (Ie !== null ? Ie.memoizedState : null) !== e && (Se.flags |= 1024), t;
    }
    function ah() {
      var e = yf !== 0;
      return yf = 0, e;
    }
    function ih(e, t, n) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & ia) !== ve ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~n;
    }
    function oh(e) {
      if (mf) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        mf = false;
      }
      fi = 0, Zn = Et = Ie = Se = null, hi = -1, V = null, rs = false, Xr = yf = 0, di = null;
    }
    function It() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Et === null ? Se.memoizedState = Et = e : Et = Et.next = e, Et;
    }
    function Pe() {
      if (Ie === null) {
        var e = Se.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ie.next;
      var t = Et === null ? Se.memoizedState : Et.next;
      if (t !== null) Et = t, Ie = e;
      else {
        if (e === null) throw Se.alternate === null ? Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.") : Error("Rendered more hooks than during the previous render.");
        Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, Et === null ? Se.memoizedState = Et = e : Et = Et.next = e;
      }
      return Et;
    }
    function oc() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ks(e) {
      var t = Xr;
      return Xr += 1, di === null && (di = A0()), e = D0(di, e, t), t = Se, (Et === null ? t.memoizedState : Et.next) === null && (t = t.alternate, j.H = t !== null && t.memoizedState !== null ? Tm : Sm), e;
    }
    function zi(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Ks(e);
        if (e.$$typeof === _a) return lt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function No(e) {
      var t = null, n = Se.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var a = Se.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = { data: a.data.map(function(o) {
          return o.slice();
        }), index: 0 })));
      }
      if (t == null && (t = { data: [], index: 0 }), n === null && (n = oc(), Se.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || $r) for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = cw;
      else n.length !== e && console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.", n.length, e);
      return t.index++, n;
    }
    function ta(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function lh(e, t, n) {
      var a = It();
      if (n !== void 0) {
        var o = n(t);
        if (Jo) {
          oe(true);
          try {
            n(t);
          } finally {
            oe(false);
          }
        }
      } else o = t;
      return a.memoizedState = a.baseState = o, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: o }, a.queue = e, e = e.dispatch = WD.bind(null, Se, e), [a.memoizedState, e];
    }
    function Dl(e) {
      var t = Pe();
      return sh(t, Ie, e);
    }
    function sh(e, t, n) {
      var a = e.queue;
      if (a === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
      a.lastRenderedReducer = n;
      var o = e.baseQueue, s = a.pending;
      if (s !== null) {
        if (o !== null) {
          var u = o.next;
          o.next = s.next, s.next = u;
        }
        t.baseQueue !== o && console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), t.baseQueue = o = s, a.pending = null;
      }
      if (s = e.baseState, o === null) e.memoizedState = s;
      else {
        t = o.next;
        var f = u = null, p = null, g = t, M = false;
        do {
          var N = g.lane & -536870913;
          if (N !== g.lane ? (Oe & N) === N : (fi & N) === N) {
            var D = g.revertLane;
            if (D === 0) p !== null && (p = p.next = { lane: 0, revertLane: 0, gesture: null, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), N === Xo && (M = true);
            else if ((fi & D) === D) {
              g = g.next, D === Xo && (M = true);
              continue;
            } else N = { lane: 0, revertLane: g.revertLane, gesture: null, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }, p === null ? (f = p = N, u = s) : p = p.next = N, Se.lanes |= D, Wi |= D;
            N = g.action, Jo && n(s, N), s = g.hasEagerState ? g.eagerState : n(s, N);
          } else D = { lane: N, revertLane: g.revertLane, gesture: g.gesture, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }, p === null ? (f = p = D, u = s) : p = p.next = D, Se.lanes |= N, Wi |= N;
          g = g.next;
        } while (g !== null && g !== t);
        if (p === null ? u = s : p.next = f, !nn(s, e.memoizedState) && (At = true, M && (n = ns, n !== null))) throw n;
        e.memoizedState = s, e.baseState = u, e.baseQueue = p, a.lastRenderedState = s;
      }
      return o === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
    }
    function Fs(e) {
      var t = Pe(), n = t.queue;
      if (n === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
      n.lastRenderedReducer = e;
      var a = n.dispatch, o = n.pending, s = t.memoizedState;
      if (o !== null) {
        n.pending = null;
        var u = o = o.next;
        do
          s = e(s, u.action), u = u.next;
        while (u !== o);
        nn(s, t.memoizedState) || (At = true), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
      }
      return [s, a];
    }
    function rh(e, t, n) {
      var a = Se, o = It();
      if (je) {
        if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        var s = n();
        ss || s === n() || (console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"), ss = true);
      } else {
        if (s = t(), ss || (n = t(), nn(s, n) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), ss = true)), We === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        (Oe & 127) !== 0 || L0(a, t, s);
      }
      return o.memoizedState = s, n = { value: s, getSnapshot: t }, o.queue = n, uc(Y0.bind(null, a, n, e), [e]), a.flags |= 2048, wl(Qn | ln, { destroy: void 0 }, H0.bind(null, a, n, s, t), null), s;
    }
    function lc(e, t, n) {
      var a = Se, o = Pe(), s = je;
      if (s) {
        if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        n = n();
      } else if (n = t(), !ss) {
        var u = t();
        nn(n, u) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), ss = true);
      }
      (u = !nn((Ie || o).memoizedState, n)) && (o.memoizedState = n, At = true), o = o.queue;
      var f = Y0.bind(null, a, o, e);
      if (fn(2048, ln, f, [e]), o.getSnapshot !== t || u || Et !== null && Et.memoizedState.tag & Qn) {
        if (a.flags |= 2048, wl(Qn | ln, { destroy: void 0 }, H0.bind(null, a, o, n, t), null), We === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        s || (fi & 127) !== 0 || L0(a, t, n);
      }
      return n;
    }
    function L0(e, t, n) {
      e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = oc(), Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
    }
    function H0(e, t, n, a) {
      t.value = n, t.getSnapshot = a, k0(t) && q0(e);
    }
    function Y0(e, t, n) {
      return n(function() {
        k0(t) && (va(2, "updateSyncExternalStore()", e), q0(e));
      });
    }
    function k0(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !nn(e, n);
      } catch {
        return true;
      }
    }
    function q0(e) {
      var t = Zt(e, 2);
      t !== null && dt(t, e, 2);
    }
    function uh(e) {
      var t = It();
      if (typeof e == "function") {
        var n = e;
        if (e = n(), Jo) {
          oe(true);
          try {
            n();
          } finally {
            oe(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: e }, t;
    }
    function ch(e) {
      e = uh(e);
      var t = e.queue, n = sv.bind(null, Se, t);
      return t.dispatch = n, [e.memoizedState, n];
    }
    function fh(e) {
      var t = It();
      t.memoizedState = t.baseState = e;
      var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return t.queue = n, t = Dh.bind(null, Se, true, n), n.dispatch = t, [e, t];
    }
    function G0(e, t) {
      var n = Pe();
      return X0(n, Ie, e, t);
    }
    function X0(e, t, n, a) {
      return e.baseState = n, sh(e, Ie, typeof a == "function" ? a : ta);
    }
    function $0(e, t) {
      var n = Pe();
      return Ie !== null ? X0(n, Ie, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    }
    function JD(e, t, n, a, o) {
      if (mc(e)) throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var s = { payload: o, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(u) {
          s.listeners.push(u);
        } };
        j.T !== null ? n(true) : s.isTransition = false, a(s), n = t.pending, n === null ? (s.next = t.pending = s, Q0(t, s)) : (s.next = n.next, t.pending = n.next = s);
      }
    }
    function Q0(e, t) {
      var n = t.action, a = t.payload, o = e.state;
      if (t.isTransition) {
        var s = j.T, u = {};
        u._updatedFibers = /* @__PURE__ */ new Set(), j.T = u;
        try {
          var f = n(o, a), p = j.S;
          p !== null && p(u, f), Z0(e, t, f);
        } catch (g) {
          dh(e, t, g);
        } finally {
          s !== null && u.types !== null && (s.types !== null && s.types !== u.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), s.types = u.types), j.T = s, s === null && u._updatedFibers && (e = u._updatedFibers.size, u._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
        }
      } else try {
        u = n(o, a), Z0(e, t, u);
      } catch (g) {
        dh(e, t, g);
      }
    }
    function Z0(e, t, n) {
      n !== null && typeof n == "object" && typeof n.then == "function" ? (j.asyncTransitions++, n.then(pc, pc), n.then(function(a) {
        P0(e, t, a);
      }, function(a) {
        return dh(e, t, a);
      }), t.isTransition || console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")) : P0(e, t, n);
    }
    function P0(e, t, n) {
      t.status = "fulfilled", t.value = n, J0(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Q0(e, n)));
    }
    function dh(e, t, n) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = n, J0(t), t = t.next;
        while (t !== a);
      }
      e.action = null;
    }
    function J0(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function K0(e, t) {
      return t;
    }
    function Rl(e, t) {
      if (je) {
        var n = We.formState;
        if (n !== null) {
          e: {
            var a = Se;
            if (je) {
              if (it) {
                t: {
                  for (var o = it, s = Gn; o.nodeType !== 8; ) {
                    if (!s) {
                      o = null;
                      break t;
                    }
                    if (o = xn(o.nextSibling), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  s = o.data, o = s === Xm || s === VT ? o : null;
                }
                if (o) {
                  it = xn(o.nextSibling), a = o.data === Xm;
                  break e;
                }
              }
              Ri(a);
            }
            a = false;
          }
          a && (t = n[0]);
        }
      }
      return n = It(), n.memoizedState = n.baseState = t, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: K0, lastRenderedState: t }, n.queue = a, n = sv.bind(null, Se, a), a.dispatch = n, a = uh(false), s = Dh.bind(null, Se, false, a.queue), a = It(), o = { state: t, dispatch: null, action: e, pending: null }, a.queue = o, n = JD.bind(null, Se, o, s, n), o.dispatch = n, a.memoizedState = e, [t, n, false];
    }
    function sc(e) {
      var t = Pe();
      return F0(t, Ie, e);
    }
    function F0(e, t, n) {
      if (t = sh(e, t, K0)[0], e = Dl(ta)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var a = Ks(t);
      } catch (u) {
        throw u === as ? ff : u;
      }
      else a = t;
      t = Pe();
      var o = t.queue, s = o.dispatch;
      return n !== t.memoizedState && (Se.flags |= 2048, wl(Qn | ln, { destroy: void 0 }, KD.bind(null, o, n), null)), [a, s, e];
    }
    function KD(e, t) {
      e.action = t;
    }
    function rc(e) {
      var t = Pe(), n = Ie;
      if (n !== null) return F0(t, n, e);
      Pe(), t = t.memoizedState, n = Pe();
      var a = n.queue.dispatch;
      return n.memoizedState = e, [t, a, false];
    }
    function wl(e, t, n, a) {
      return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Se.updateQueue, t === null && (t = oc(), Se.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
    }
    function hh(e) {
      var t = It();
      return e = { current: e }, t.memoizedState = e;
    }
    function _o(e, t, n, a) {
      var o = It();
      Se.flags |= e, o.memoizedState = wl(Qn | t, { destroy: void 0 }, n, a === void 0 ? null : a);
    }
    function fn(e, t, n, a) {
      var o = Pe();
      a = a === void 0 ? null : a;
      var s = o.memoizedState.inst;
      Ie !== null && a !== null && eh(a, Ie.memoizedState.deps) ? o.memoizedState = wl(t, s, n, a) : (Se.flags |= e, o.memoizedState = wl(Qn | t, s, n, a));
    }
    function uc(e, t) {
      (Se.mode & ia) !== ve ? _o(276826112, ln, e, t) : _o(8390656, ln, e, t);
    }
    function FD(e) {
      Se.flags |= 4;
      var t = Se.updateQueue;
      if (t === null) t = oc(), Se.updateQueue = t, t.events = [e];
      else {
        var n = t.events;
        n === null ? t.events = [e] : n.push(e);
      }
    }
    function ph(e) {
      var t = It(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((qe & Mt) !== Bt) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
        return n.impl.apply(void 0, arguments);
      };
    }
    function cc(e) {
      var t = Pe().memoizedState;
      return FD({ ref: t, nextImpl: e }), function() {
        if ((qe & Mt) !== Bt) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
        return t.impl.apply(void 0, arguments);
      };
    }
    function mh(e, t) {
      var n = 4194308;
      return (Se.mode & ia) !== ve && (n |= 134217728), _o(n, On, e, t);
    }
    function I0(e, t) {
      if (typeof t == "function") {
        e = e();
        var n = t(e);
        return function() {
          typeof n == "function" ? n() : t(null);
        };
      }
      if (t != null) return t.hasOwnProperty("current") || console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(t).join(", ") + "}"), e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function yh(e, t, n) {
      typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null"), n = n != null ? n.concat([e]) : null;
      var a = 4194308;
      (Se.mode & ia) !== ve && (a |= 134217728), _o(a, On, I0.bind(null, t, e), n);
    }
    function fc(e, t, n) {
      typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null"), n = n != null ? n.concat([e]) : null, fn(4, On, I0.bind(null, t, e), n);
    }
    function gh(e, t) {
      return It().memoizedState = [e, t === void 0 ? null : t], e;
    }
    function dc(e, t) {
      var n = Pe();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      return t !== null && eh(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
    }
    function vh(e, t) {
      var n = It();
      t = t === void 0 ? null : t;
      var a = e();
      if (Jo) {
        oe(true);
        try {
          e();
        } finally {
          oe(false);
        }
      }
      return n.memoizedState = [a, t], a;
    }
    function hc(e, t) {
      var n = Pe();
      t = t === void 0 ? null : t;
      var a = n.memoizedState;
      if (t !== null && eh(t, a[1])) return a[0];
      if (a = e(), Jo) {
        oe(true);
        try {
          e();
        } finally {
          oe(false);
        }
      }
      return n.memoizedState = [a, t], a;
    }
    function bh(e, t) {
      var n = It();
      return Sh(n, e, t);
    }
    function W0(e, t) {
      var n = Pe();
      return tv(n, Ie.memoizedState, e, t);
    }
    function ev(e, t) {
      var n = Pe();
      return Ie === null ? Sh(n, e, t) : tv(n, Ie.memoizedState, e, t);
    }
    function Sh(e, t, n) {
      return n === void 0 || (fi & 1073741824) !== 0 && (Oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = nb(), Se.lanes |= e, Wi |= e, n);
    }
    function tv(e, t, n, a) {
      return nn(n, t) ? n : os.current !== null ? (e = Sh(e, n, a), nn(e, t) || (At = true), e) : (fi & 42) === 0 || (fi & 1073741824) !== 0 && (Oe & 261930) === 0 ? (At = true, e.memoizedState = n) : (e = nb(), Se.lanes |= e, Wi |= e, t);
    }
    function pc() {
      j.asyncTransitions--;
    }
    function nv(e, t, n, a, o) {
      var s = $e.p;
      $e.p = s !== 0 && s < Ua ? s : Ua;
      var u = j.T, f = {};
      f._updatedFibers = /* @__PURE__ */ new Set(), j.T = f, Dh(e, false, t, n);
      try {
        var p = o(), g = j.S;
        if (g !== null && g(f, p), p !== null && typeof p == "object" && typeof p.then == "function") {
          j.asyncTransitions++, p.then(pc, pc);
          var M = QD(p, a);
          Is(e, t, M, An(e));
        } else Is(e, t, a, An(e));
      } catch (N) {
        Is(e, t, { then: function() {
        }, status: "rejected", reason: N }, An(e));
      } finally {
        $e.p = s, u !== null && f.types !== null && (u.types !== null && u.types !== f.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), u.types = f.types), j.T = u, u === null && f._updatedFibers && (e = f._updatedFibers.size, f._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
      }
    }
    function Th(e, t, n, a) {
      if (e.tag !== 5) throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");
      var o = av(e).queue;
      XD(e), nv(e, o, t, ll, n === null ? A : function() {
        return iv(e), n(a);
      });
    }
    function av(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = { memoizedState: ll, baseState: ll, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: ll }, next: null };
      var n = {};
      return t.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function iv(e) {
      j.T === null && console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");
      var t = av(e);
      t.next === null && (t = e.alternate.memoizedState), Is(e, t.next.queue, {}, An(e));
    }
    function Eh() {
      var e = uh(false);
      return e = nv.bind(null, Se, e.queue, true, false), It().memoizedState = e, [false, e];
    }
    function ov() {
      var e = Dl(ta)[0], t = Pe().memoizedState;
      return [typeof e == "boolean" ? e : Ks(e), t];
    }
    function lv() {
      var e = Fs(ta)[0], t = Pe().memoizedState;
      return [typeof e == "boolean" ? e : Ks(e), t];
    }
    function zo() {
      return lt(su);
    }
    function Ah() {
      var e = It(), t = We.identifierPrefix;
      if (je) {
        var n = li, a = oi;
        n = (a & ~(1 << 32 - Wt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = yf++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else n = _C++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    }
    function xh() {
      return It().memoizedState = ID.bind(null, Se);
    }
    function ID(e, t) {
      for (var n = e.return; n !== null; ) {
        switch (n.tag) {
          case 24:
          case 3:
            var a = An(n), o = Oi(a), s = Mi(n, o, a);
            s !== null && (va(a, "refresh()", e), dt(s, n, a), Zs(s, n, a)), e = Xd(), t != null && s !== null && console.error("The seed argument is not enabled outside experimental channels."), o.payload = { cache: e };
            return;
        }
        n = n.return;
      }
    }
    function WD(e, t, n) {
      var a = arguments;
      typeof a[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), a = An(e);
      var o = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
      mc(e) ? rv(t, o) : (o = _d(e, t, o, a), o !== null && (va(a, "dispatch()", e), dt(o, e, a), uv(o, t, a)));
    }
    function sv(e, t, n) {
      var a = arguments;
      typeof a[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), a = An(e), Is(e, t, n, a) && va(a, "setState()", e);
    }
    function Is(e, t, n, a) {
      var o = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: false, eagerState: null, next: null };
      if (mc(e)) rv(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) {
          var u = j.H;
          j.H = la;
          try {
            var f = t.lastRenderedState, p = s(f, n);
            if (o.hasEagerState = true, o.eagerState = p, nn(p, f)) return ku(e, t, o, 0), We === null && Yu(), false;
          } catch {
          } finally {
            j.H = u;
          }
        }
        if (n = _d(e, t, o, a), n !== null) return dt(n, e, a), uv(n, t, a), true;
      }
      return false;
    }
    function Dh(e, t, n, a) {
      if (j.T === null && Xo === 0 && console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."), a = { lane: 2, revertLane: tp(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, mc(e)) {
        if (t) throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else t = _d(e, n, a, 2), t !== null && (va(2, "setOptimistic()", e), dt(t, e, 2));
    }
    function mc(e) {
      var t = e.alternate;
      return e === Se || t !== null && t === Se;
    }
    function rv(e, t) {
      rs = mf = true;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function uv(e, t, n) {
      if ((n & 4194048) !== 0) {
        var a = t.lanes;
        a &= e.pendingLanes, n |= a, t.lanes = n, Vs(e, n);
      }
    }
    function Rh(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        lT.has(t) || (lT.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
      }
    }
    function wh(e, t, n, a) {
      var o = e.memoizedState, s = n(a, o);
      if (e.mode & Jt) {
        oe(true);
        try {
          s = n(a, o);
        } finally {
          oe(false);
        }
      }
      s === void 0 && (t = ae(t) || "Component", nT.has(t) || (nT.add(t), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t))), o = s == null ? o : ze({}, o, s), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function cv(e, t, n, a, o, s, u) {
      var f = e.stateNode;
      if (typeof f.shouldComponentUpdate == "function") {
        if (n = f.shouldComponentUpdate(a, s, u), e.mode & Jt) {
          oe(true);
          try {
            n = f.shouldComponentUpdate(a, s, u);
          } finally {
            oe(false);
          }
        }
        return n === void 0 && console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ae(t) || "Component"), n;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ks(n, a) || !ks(o, s) : true;
    }
    function fv(e, t, n, a) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== o && (e = k(e) || "Component", FS.has(e) || (FS.add(e), console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", e)), Em.enqueueReplaceState(t, t.state, null));
    }
    function Vo(e, t) {
      var n = t;
      if ("ref" in t) {
        n = {};
        for (var a in t) a !== "ref" && (n[a] = t[a]);
      }
      if (e = e.defaultProps) {
        n === t && (n = ze({}, n));
        for (var o in e) n[o] === void 0 && (n[o] = e[o]);
      }
      return n;
    }
    function dv(e) {
      Wp(e), console.warn(`%s

%s
`, us ? "An error occurred in the <" + us + "> component." : "An error occurred in one of your React components.", `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`);
    }
    function hv(e) {
      var t = us ? "The above error occurred in the <" + us + "> component." : "The above error occurred in one of your React components.", n = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Am || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var a = e.environmentName;
        e = [`%o

%s

%s
`, e, t, n].slice(0), typeof e[0] == "string" ? e.splice(0, 1, qT + " " + e[0], GT, kf + a + kf, XT) : e.splice(0, 0, qT, GT, kf + a + kf, XT), e.unshift(console), a = WC.apply(console.error, e), a();
      } else console.error(`%o

%s

%s
`, e, t, n);
    }
    function pv(e) {
      Wp(e);
    }
    function yc(e, t) {
      try {
        us = t.source ? k(t.source) : null, Am = null;
        var n = t.value;
        if (j.actQueue !== null) j.thrownErrors.push(n);
        else {
          var a = e.onUncaughtError;
          a(n, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function mv(e, t, n) {
      try {
        us = n.source ? k(n.source) : null, Am = k(t);
        var a = e.onCaughtError;
        a(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ch(e, t, n) {
      return n = Oi(n), n.tag = ym, n.payload = { element: null }, n.callback = function() {
        te(t.source, yc, e, t);
      }, n;
    }
    function Oh(e) {
      return e = Oi(e), e.tag = ym, e;
    }
    function Mh(e, t, n, a) {
      var o = n.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = a.value;
        e.payload = function() {
          return o(s);
        }, e.callback = function() {
          r0(n), te(a.source, mv, t, n, a);
        };
      }
      var u = n.stateNode;
      u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
        r0(n), te(a.source, mv, t, n, a), typeof o != "function" && (to === null ? to = /* @__PURE__ */ new Set([this]) : to.add(this)), CC(this, a), typeof o == "function" || (n.lanes & 2) === 0 && console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", k(n) || "Unknown");
      });
    }
    function eR(e, t, n, a, o) {
      if (n.flags |= 32768, ja && lr(e, o), a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = n.alternate, t !== null && Al(t, n, o, true), je && (La = true), n = Cn.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
              return $n === null ? Dc() : n.alternate === null && ft === mi && (ft = bf), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === df ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Fh(e, a, o)), false;
            case 22:
              return n.flags |= 65536, a === df ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Fh(e, a, o)), false;
          }
          throw Error("Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React.");
        }
        return Fh(e, a, o), Dc(), false;
      }
      if (je) return La = true, t = Cn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, a !== om && qs(bn(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.", { cause: a }), n))) : (a !== om && qs(bn(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.", { cause: a }), n)), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, a = bn(a, n), o = Ch(e.stateNode, a, o), nc(e, o), ft !== Fi && (ft = Ko)), false;
      var s = bn(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", { cause: a }), n);
      if (Ir === null ? Ir = [s] : Ir.push(s), ft !== Fi && (ft = Ko), t === null) return true;
      a = bn(a, n), n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = o & -o, n.lanes |= e, e = Ch(n.stateNode, a, e), nc(n, e), false;
          case 1:
            if (t = n.type, s = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (to === null || !to.has(s)))) return n.flags |= 65536, o &= -o, n.lanes |= o, o = Oh(o), Mh(o, e, n, a), nc(n, o), false;
        }
        n = n.return;
      } while (n !== null);
      return false;
    }
    function Ht(e, t, n, a) {
      t.child = e === null ? YS(t, null, n, a) : Po(t, e.child, n, a);
    }
    function yv(e, t, n, a, o) {
      n = n.render;
      var s = t.ref;
      if ("ref" in a) {
        var u = {};
        for (var f in a) f !== "ref" && (u[f] = a[f]);
      } else u = a;
      return Oo(t), a = th(e, t, n, u, s, o), f = ah(), e !== null && !At ? (ih(e, t, o), Ia(e, t, o)) : (je && f && Ld(t), t.flags |= 1, Ht(e, t, a, o), t.child);
    }
    function gv(e, t, n, a, o) {
      if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Vd(s) && s.defaultProps === void 0 && n.compare === null ? (n = Do(s), t.tag = 15, t.type = n, _h(t, s), vv(e, t, n, a, o)) : (e = jd(n.type, null, a, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (s = e.child, !Lh(e, o)) {
        var u = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ks, n(u, a) && e.ref === t.ref) return Ia(e, t, o);
      }
      return t.flags |= 1, e = Pa(s, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function vv(e, t, n, a, o) {
      if (e !== null) {
        var s = e.memoizedProps;
        if (ks(s, a) && e.ref === t.ref && t.type === e.type) if (At = false, t.pendingProps = a = s, Lh(e, o)) (e.flags & 131072) !== 0 && (At = true);
        else return t.lanes = e.lanes, Ia(e, t, o);
      }
      return Nh(e, t, n, a, o);
    }
    function bv(e, t, n, a) {
      var o = a.children, s = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = { _visibility: wr, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (s = s !== null ? s.baseLanes | n : n, e !== null) {
            for (a = t.child = e.child, o = 0; a !== null; ) o = o | a.lanes | a.childLanes, a = a.sibling;
            a = o & ~s;
          } else a = 0, t.child = null;
          return Sv(e, t, s, n, a);
        }
        if ((n & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ku(t, s !== null ? s.cachePool : null), s !== null ? j0(t, s) : Fd(t), U0(t);
        else return a = t.lanes = 536870912, Sv(e, t, s !== null ? s.baseLanes | n : n, n, a);
      } else s !== null ? (Ku(t, s.cachePool), j0(t, s), _i(t), t.memoizedState = null) : (e !== null && Ku(t, null), Fd(t), _i(t));
      return Ht(e, t, o, n), t.child;
    }
    function Ws(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: wr, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
    }
    function Sv(e, t, n, a, o) {
      var s = Zd();
      return s = s === null ? null : { parent: St._currentValue, pool: s }, t.memoizedState = { baseLanes: n, cachePool: s }, e !== null && Ku(t, null), Fd(t), U0(t), e !== null && Al(e, t, a, true), t.childLanes = o, null;
    }
    function gc(e, t) {
      var n = t.hidden;
      return n !== void 0 && console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`, n === true ? "hidden" : n === false ? "hidden={false}" : "hidden={...}", n ? 'mode="hidden"' : 'mode="visible"'), t = bc({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Tv(e, t, n) {
      return Po(t, e.child, null, n), e = gc(t, t.pendingProps), e.flags |= 2, En(t), t.memoizedState = null, e;
    }
    function tR(e, t, n) {
      var a = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (je) {
          if (a.mode === "hidden") return e = gc(t, a), t.lanes = 536870912, Ws(null, e);
          if (Wd(t), (e = it) ? (n = Qb(e, Gn), n = n !== null && n.data === nl ? n : null, n !== null && (a = { dehydrated: n, treeContext: h0(), retryLane: 536870912, hydrationErrors: null }, t.memoizedState = a, a = f0(n), a.return = t, t.child = a, qt = t, it = null)) : n = null, n === null) throw Xu(t, e), Ri(t);
          return t.lanes = 536870912, null;
        }
        return gc(t, a);
      }
      var s = e.memoizedState;
      if (s !== null) {
        var u = s.dehydrated;
        if (Wd(t), o) if (t.flags & 256) t.flags &= -257, t = Tv(e, t, n);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
        else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
        else if (m0(), (n & 536870912) !== 0 && xc(t), At || Al(e, t, n, false), o = (n & e.childLanes) !== 0, At || o) {
          if (a = We, a !== null && (u = So(a, n), u !== 0 && u !== s.retryLane)) throw s.retryLane = u, Zt(e, u), dt(a, e, u), xm;
          Dc(), t = Tv(e, t, n);
        } else e = s.treeContext, it = xn(u.nextSibling), qt = t, je = true, $i = null, La = false, wn = null, Gn = false, e !== null && p0(t, e), t = gc(t, a), t.flags |= 4096;
        return t;
      }
      return s = e.child, a = { mode: a.mode, children: a.children }, (n & 536870912) !== 0 && (n & e.lanes) !== 0 && xc(t), e = Pa(s, a), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function vc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != "function" && typeof n != "object") throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function Nh(e, t, n, a, o) {
      if (n.prototype && typeof n.prototype.render == "function") {
        var s = ae(n) || "Unknown";
        sT[s] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", s, s), sT[s] = true);
      }
      return t.mode & Jt && oa.recordLegacyContextWarning(t, null), e === null && (_h(t, t.type), n.contextTypes && (s = ae(n) || "Unknown", uT[s] || (uT[s] = true, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", s)))), Oo(t), n = th(e, t, n, a, void 0, o), a = ah(), e !== null && !At ? (ih(e, t, o), Ia(e, t, o)) : (je && a && Ld(t), t.flags |= 1, Ht(e, t, n, o), t.child);
    }
    function Ev(e, t, n, a, o, s) {
      return Oo(t), hi = -1, $r = e !== null && e.type !== t.type, t.updateQueue = null, n = nh(t, a, n, o), B0(e, t), a = ah(), e !== null && !At ? (ih(e, t, s), Ia(e, t, s)) : (je && a && Ld(t), t.flags |= 1, Ht(e, t, n, s), t.child);
    }
    function Av(e, t, n, a, o) {
      switch (h(t)) {
        case false:
          var s = t.stateNode, u = new t.type(t.memoizedProps, s.context).state;
          s.updater.enqueueSetState(s, u, null);
          break;
        case true:
          t.flags |= 128, t.flags |= 65536, s = Error("Simulated error coming from DevTools");
          var f = o & -o;
          if (t.lanes |= f, u = We, u === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
          f = Oh(f), Mh(f, u, t, bn(s, t)), nc(t, f);
      }
      if (Oo(t), t.stateNode === null) {
        if (u = Xi, s = n.contextType, "contextType" in n && s !== null && (s === void 0 || s.$$typeof !== _a) && !oT.has(n) && (oT.add(n), f = s === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof s != "object" ? " However, it is set to a " + typeof s + "." : s.$$typeof === Dp ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(s).join(", ") + "}.", console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ae(n) || "Component", f)), typeof s == "object" && s !== null && (u = lt(s)), s = new n(a, u), t.mode & Jt) {
          oe(true);
          try {
            s = new n(a, u);
          } finally {
            oe(false);
          }
        }
        if (u = t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Em, t.stateNode = s, s._reactInternals = t, s._reactInternalInstance = KS, typeof n.getDerivedStateFromProps == "function" && u === null && (u = ae(n) || "Component", IS.has(u) || (IS.add(u), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", u, s.state === null ? "null" : "undefined", u))), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function") {
          var p = f = u = null;
          if (typeof s.componentWillMount == "function" && s.componentWillMount.__suppressDeprecationWarning !== true ? u = "componentWillMount" : typeof s.UNSAFE_componentWillMount == "function" && (u = "UNSAFE_componentWillMount"), typeof s.componentWillReceiveProps == "function" && s.componentWillReceiveProps.__suppressDeprecationWarning !== true ? f = "componentWillReceiveProps" : typeof s.UNSAFE_componentWillReceiveProps == "function" && (f = "UNSAFE_componentWillReceiveProps"), typeof s.componentWillUpdate == "function" && s.componentWillUpdate.__suppressDeprecationWarning !== true ? p = "componentWillUpdate" : typeof s.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), u !== null || f !== null || p !== null) {
            s = ae(n) || "Component";
            var g = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            eT.has(s) || (eT.add(s), console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`, s, g, u !== null ? `
  ` + u : "", f !== null ? `
  ` + f : "", p !== null ? `
  ` + p : ""));
          }
        }
        s = t.stateNode, u = ae(n) || "Component", s.render || (n.prototype && typeof n.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", u) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", u)), !s.getInitialState || s.getInitialState.isReactClassApproved || s.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), s.getDefaultProps && !s.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), s.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), n.childContextTypes && !iT.has(n) && (iT.add(n), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", u)), n.contextTypes && !aT.has(n) && (aT.add(n), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", u)), typeof s.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), n.prototype && n.prototype.isPureReactComponent && typeof s.shouldComponentUpdate < "u" && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ae(n) || "A pure component"), typeof s.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof s.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof s.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof s.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u), f = s.props !== a, s.props !== void 0 && f && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u), s.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof s.getSnapshotBeforeUpdate != "function" || typeof s.componentDidUpdate == "function" || WS.has(n) || (WS.add(n), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ae(n))), typeof s.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof s.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof n.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u), (f = s.state) && (typeof f != "object" || Ct(f)) && console.error("%s.state: must be set to an object or null", u), typeof s.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u), s = t.stateNode, s.props = a, s.state = t.memoizedState, s.refs = {}, Jd(t), u = n.contextType, s.context = typeof u == "object" && u !== null ? lt(u) : Xi, s.state === a && (u = ae(n) || "Component", tT.has(u) || (tT.add(u), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", u))), t.mode & Jt && oa.recordLegacyContextWarning(t, s), oa.recordUnsafeLifecycleWarnings(t, s), s.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (wh(t, n, u, a), s.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (u = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), u !== s.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", k(t) || "Component"), Em.enqueueReplaceState(s, s.state, null)), Js(t, a, s, o), Ps(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ia) !== ve && (t.flags |= 134217728), s = true;
      } else if (e === null) {
        s = t.stateNode;
        var M = t.memoizedProps;
        f = Vo(n, M), s.props = f;
        var N = s.context;
        p = n.contextType, u = Xi, typeof p == "object" && p !== null && (u = lt(p)), g = n.getDerivedStateFromProps, p = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function", M = t.pendingProps !== M, p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (M || N !== u) && fv(t, s, a, u), Ki = false;
        var D = t.memoizedState;
        s.state = D, Js(t, a, s, o), Ps(), N = t.memoizedState, M || D !== N || Ki ? (typeof g == "function" && (wh(t, n, g, a), N = t.memoizedState), (f = Ki || cv(t, n, f, a, D, N, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ia) !== ve && (t.flags |= 134217728)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ia) !== ve && (t.flags |= 134217728), t.memoizedProps = a, t.memoizedState = N), s.props = a, s.state = N, s.context = u, s = f) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & ia) !== ve && (t.flags |= 134217728), s = false);
      } else {
        s = t.stateNode, Kd(e, t), u = t.memoizedProps, p = Vo(n, u), s.props = p, g = t.pendingProps, D = s.context, N = n.contextType, f = Xi, typeof N == "object" && N !== null && (f = lt(N)), M = n.getDerivedStateFromProps, (N = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== g || D !== f) && fv(t, s, a, f), Ki = false, D = t.memoizedState, s.state = D, Js(t, a, s, o), Ps();
        var z = t.memoizedState;
        u !== g || D !== z || Ki || e !== null && e.dependencies !== null && Qu(e.dependencies) ? (typeof M == "function" && (wh(t, n, M, a), z = t.memoizedState), (p = Ki || cv(t, n, p, a, D, z, f) || e !== null && e.dependencies !== null && Qu(e.dependencies)) ? (N || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(a, z, f), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(a, z, f)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), s.props = a, s.state = z, s.context = f, s = p) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), s = false);
      }
      if (f = s, vc(e, t), u = (t.flags & 128) !== 0, f || u) {
        if (f = t.stateNode, hl(t), u && typeof n.getDerivedStateFromError != "function") n = null, an = -1;
        else if (n = RS(f), t.mode & Jt) {
          oe(true);
          try {
            RS(f);
          } finally {
            oe(false);
          }
        }
        t.flags |= 1, e !== null && u ? (t.child = Po(t, e.child, null, o), t.child = Po(t, null, n, o)) : Ht(e, t, n, o), t.memoizedState = f.state, e = t.child;
      } else e = Ia(e, t, o);
      return o = t.stateNode, s && o.props !== a && (cs || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", k(t) || "a component"), cs = true), e;
    }
    function xv(e, t, n, a) {
      return Co(), t.flags |= 256, Ht(e, t, n, a), t.child;
    }
    function _h(e, t) {
      t && t.childContextTypes && console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`, t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function" && (e = ae(t) || "Unknown", cT[e] || (console.error("%s: Function components do not support getDerivedStateFromProps.", e), cT[e] = true)), typeof t.contextType == "object" && t.contextType !== null && (t = ae(t) || "Unknown", rT[t] || (console.error("%s: Function components do not support contextType.", t), rT[t] = true));
    }
    function zh(e) {
      return { baseLanes: e, cachePool: E0() };
    }
    function Vh(e, t, n) {
      return e = e !== null ? e.childLanes & ~n : 0, t && (e |= yn), e;
    }
    function Dv(e, t, n) {
      var a, o = t.pendingProps;
      m(t) && (t.flags |= 128);
      var s = false, u = (t.flags & 128) !== 0;
      if ((a = u) || (a = e !== null && e.memoizedState === null ? false : (gt.current & Gr) !== 0), a && (s = true, t.flags &= -129), a = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (je) {
          if (s ? Ni(t) : _i(t), (e = it) ? (n = Qb(e, Gn), n = n !== null && n.data !== nl ? n : null, n !== null && (a = { dehydrated: n, treeContext: h0(), retryLane: 536870912, hydrationErrors: null }, t.memoizedState = a, a = f0(n), a.return = t, t.child = a, qt = t, it = null)) : n = null, n === null) throw Xu(t, e), Ri(t);
          return hp(n) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var f = o.children;
        if (o = o.fallback, s) {
          _i(t);
          var p = t.mode;
          return f = bc({ mode: "hidden", children: f }, p), o = Ro(o, p, n, null), f.return = t, o.return = t, f.sibling = o, t.child = f, o = t.child, o.memoizedState = zh(n), o.childLanes = Vh(e, a, n), t.memoizedState = Dm, Ws(null, o);
        }
        return Ni(t), jh(t, f);
      }
      var g = e.memoizedState;
      if (g !== null) {
        var M = g.dehydrated;
        if (M !== null) {
          if (u) t.flags & 256 ? (Ni(t), t.flags &= -257, t = Uh(e, t, n)) : t.memoizedState !== null ? (_i(t), t.child = e.child, t.flags |= 128, t = null) : (_i(t), f = o.fallback, p = t.mode, o = bc({ mode: "visible", children: o.children }, p), f = Ro(f, p, n, null), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, Po(t, e.child, null, n), o = t.child, o.memoizedState = zh(n), o.childLanes = Vh(e, a, n), t.memoizedState = Dm, t = Ws(null, o));
          else if (Ni(t), m0(), (n & 536870912) !== 0 && xc(t), hp(M)) {
            if (a = M.nextSibling && M.nextSibling.dataset, a) {
              f = a.dgst;
              var N = a.msg;
              p = a.stck;
              var D = a.cstck;
            }
            s = N, a = f, o = p, M = D, f = s, p = M, f = Error(f || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = a, a = p === void 0 ? null : p, o = { value: f, source: null, stack: a }, typeof a == "string" && im.set(f, o), qs(o), t = Uh(e, t, n);
          } else if (At || Al(e, t, n, false), a = (n & e.childLanes) !== 0, At || a) {
            if (a = We, a !== null && (o = So(a, n), o !== 0 && o !== g.retryLane)) throw g.retryLane = o, Zt(e, o), dt(a, e, o), xm;
            dp(M) || Dc(), t = Uh(e, t, n);
          } else dp(M) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, it = xn(M.nextSibling), qt = t, je = true, $i = null, La = false, wn = null, Gn = false, e !== null && p0(t, e), t = jh(t, o.children), t.flags |= 4096);
          return t;
        }
      }
      return s ? (_i(t), f = o.fallback, p = t.mode, D = e.child, M = D.sibling, o = Pa(D, { mode: "hidden", children: o.children }), o.subtreeFlags = D.subtreeFlags & 65011712, M !== null ? f = Pa(M, f) : (f = Ro(f, p, n, null), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, Ws(null, o), o = t.child, f = e.child.memoizedState, f === null ? f = zh(n) : (p = f.cachePool, p !== null ? (D = St._currentValue, p = p.parent !== D ? { parent: D, pool: D } : p) : p = E0(), f = { baseLanes: f.baseLanes | n, cachePool: p }), o.memoizedState = f, o.childLanes = Vh(e, a, n), t.memoizedState = Dm, Ws(e.child, o)) : (g !== null && (n & 62914560) === n && (n & e.lanes) !== 0 && xc(t), Ni(t), n = e.child, e = n.sibling, n = Pa(n, { mode: "visible", children: o.children }), n.return = t, n.sibling = null, e !== null && (a = t.deletions, a === null ? (t.deletions = [e], t.flags |= 16) : a.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function jh(e, t) {
      return t = bc({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
    }
    function bc(e, t) {
      return e = b(22, e, null, t), e.lanes = 0, e;
    }
    function Uh(e, t, n) {
      return Po(t, e.child, null, n), e = jh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Rv(e, t, n) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t), qd(e.return, t, n);
    }
    function Bh(e, t, n, a, o, s) {
      var u = e.memoizedState;
      u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: o, treeForkCount: s } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = n, u.tailMode = o, u.treeForkCount = s);
    }
    function wv(e, t, n) {
      var a = t.pendingProps, o = a.revealOrder, s = a.tail, u = a.children, f = gt.current;
      if ((a = (f & Gr) !== 0) ? (f = f & ls | Gr, t.flags |= 128) : f &= ls, ge(gt, f, t), f = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !fT[f]) if (fT[f] = true, o == null) console.error('The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".');
      else if (o === "backwards") console.error('The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.');
      else if (typeof o == "string") switch (o.toLowerCase()) {
        case "together":
        case "forwards":
        case "backwards":
        case "independent":
          console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', o, o.toLowerCase());
          break;
        case "forward":
        case "backward":
          console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', o, o.toLowerCase());
          break;
        default:
          console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?', o);
      }
      else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?', o);
      f = s ?? "null", vf[f] || (s == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (vf[f] = true, console.error('The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".')) : s !== "visible" && s !== "collapsed" && s !== "hidden" ? (vf[f] = true, console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?', s)) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (vf[f] = true, console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', s)));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && u !== void 0 && u !== null && u !== false) if (Ct(u)) {
        for (f = 0; f < u.length; f++) if (!_0(u[f], f)) break e;
      } else if (f = Ye(u), typeof f == "function") {
        if (f = f.call(u)) for (var p = f.next(), g = 0; !p.done; p = f.next()) {
          if (!_0(p.value, g)) break e;
          g++;
        }
      } else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', o);
      if (Ht(e, t, u, n), je ? (Di(), u = Cr) : u = 0, !a && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rv(e, n, t);
        else if (e.tag === 19) Rv(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ac(e) === null && (o = n), n = n.sibling;
          n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Bh(t, false, o, n, s, u);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && ac(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = n, n = o, o = e;
          }
          Bh(t, true, n, null, s, u);
          break;
        case "together":
          Bh(t, false, null, null, void 0, u);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ia(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), an = -1, Wi |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
        if (Al(e, t, n, false), (n & t.childLanes) === 0) return null;
      } else return null;
      if (e !== null && t.child !== e.child) throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, n = Pa(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pa(e, e.pendingProps), n.return = t;
        n.sibling = null;
      }
      return t.child;
    }
    function Lh(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && Qu(e)));
    }
    function nR(e, t, n) {
      switch (t.tag) {
        case 3:
          Ke(t, t.stateNode.containerInfo), wi(t, St, e.memoizedState.cache), Co();
          break;
        case 27:
        case 5:
          ee(t);
          break;
        case 4:
          Ke(t, t.stateNode.containerInfo);
          break;
        case 10:
          wi(t, t.type, t.memoizedProps.value);
          break;
        case 12:
          (n & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var a = t.stateNode;
          a.effectDuration = -0, a.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, Wd(t), null;
          break;
        case 13:
          if (a = t.memoizedState, a !== null) return a.dehydrated !== null ? (Ni(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Dv(e, t, n) : (Ni(t), e = Ia(e, t, n), e !== null ? e.sibling : null);
          Ni(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (a = (n & t.childLanes) !== 0, a || (Al(e, t, n, false), a = (n & t.childLanes) !== 0), o) {
            if (a) return wv(e, t, n);
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ge(gt, gt.current, t), a) break;
          return null;
        case 22:
          return t.lanes = 0, bv(e, t, n, t.pendingProps);
        case 24:
          wi(t, St, e.memoizedState.cache);
      }
      return Ia(e, t, n);
    }
    function Hh(e, t, n) {
      if (t._debugNeedsRemount && e !== null) {
        n = jd(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes), n._debugStack = t._debugStack, n._debugTask = t._debugTask;
        var a = t.return;
        if (a === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === a.child) a.child = n;
        else {
          var o = a.child;
          if (o === null) throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; ) if (o = o.sibling, o === null) throw Error("Expected to find the previous sibling.");
          o.sibling = n;
        }
        return t = a.deletions, t === null ? (a.deletions = [e], a.flags |= 16) : t.push(e), n.flags |= 2, n;
      }
      if (e !== null) if (e.memoizedProps !== t.pendingProps || t.type !== e.type) At = true;
      else {
        if (!Lh(e, n) && (t.flags & 128) === 0) return At = false, nR(e, t, n);
        At = (e.flags & 131072) !== 0;
      }
      else At = false, (a = je) && (Di(), a = (t.flags & 1048576) !== 0), a && (a = t.index, Di(), d0(t, Cr, a));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (a = t.pendingProps, e = Ci(t.elementType), t.type = e, typeof e == "function") Vd(e) ? (a = Vo(e, a), t.tag = 1, t.type = e = Do(e), t = Av(null, t, e, a, n)) : (t.tag = 0, _h(t, e), t.type = e = Do(e), t = Nh(null, t, e, a, n));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === mr) {
                t.tag = 11, t.type = e = zd(e), t = yv(null, t, e, a, n);
                break e;
              } else if (o === Hc) {
                t.tag = 14, t = gv(null, t, e, a, n);
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Dn && (t = " Did you wrap a component in React.lazy() more than once?"), n = ae(e) || e, Error("Element type is invalid. Received a promise that resolves to: " + n + ". Lazy element type must resolve to a class or function." + t);
          }
          return t;
        case 0:
          return Nh(e, t, t.type, t.pendingProps, n);
        case 1:
          return a = t.type, o = Vo(a, t.pendingProps), Av(e, t, a, o, n);
        case 3:
          e: {
            if (Ke(t, t.stateNode.containerInfo), e === null) throw Error("Should have a current fiber. This is a bug in React.");
            a = t.pendingProps;
            var s = t.memoizedState;
            o = s.element, Kd(e, t), Js(t, a, null, n);
            var u = t.memoizedState;
            if (a = u.cache, wi(t, St, a), a !== s.cache && Gd(t, [St], n, true), Ps(), a = u.element, s.isDehydrated) if (s = { element: a, isDehydrated: false, cache: u.cache }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
              t = xv(e, t, a, n);
              break e;
            } else if (a !== o) {
              o = bn(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t), qs(o), t = xv(e, t, a, n);
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (it = xn(e.firstChild), qt = t, je = true, $i = null, La = false, wn = null, Gn = true, n = YS(t, null, a, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
            else {
              if (Co(), a === o) {
                t = Ia(e, t, n);
                break e;
              }
              Ht(e, t, a, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return vc(e, t), e === null ? (n = Ib(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : je || (n = t.type, e = t.pendingProps, a = Qe(Li.current), a = Oc(a).createElement(n), a[kt] = t, a[en] = e, Yt(a, n, e), ce(a), t.stateNode = a) : t.memoizedState = Ib(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return ee(t), e === null && je && (a = Qe(Li.current), o = de(), a = t.stateNode = Kb(t.type, t.pendingProps, a, o, false), La || (o = Lb(a, t.type, t.pendingProps, o), o !== null && (wo(t, 0).serverProps = o)), qt = t, Gn = true, o = it, Ui(t.type) ? (Pm = o, it = xn(a.firstChild)) : it = o), Ht(e, t, t.pendingProps.children, n), vc(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && je && (s = de(), a = xd(t.type, s.ancestorInfo), o = it, (u = !o) || (u = XR(o, t.type, t.pendingProps, Gn), u !== null ? (t.stateNode = u, La || (s = Lb(u, t.type, t.pendingProps, s), s !== null && (wo(t, 0).serverProps = s)), qt = t, it = xn(u.firstChild), Gn = false, s = true) : s = false, u = !s), u && (a && Xu(t, o), Ri(t))), ee(t), o = t.type, s = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = s.children, cp(o, s) ? a = null : u !== null && cp(o, u) && (t.flags |= 32), t.memoizedState !== null && (o = th(e, t, PD, null, null, n), su._currentValue = o), vc(e, t), Ht(e, t, a, n), t.child;
        case 6:
          return e === null && je && (n = t.pendingProps, e = de(), a = e.ancestorInfo.current, n = a != null ? Vu(n, a.tag, e.ancestorInfo.implicitRootScope) : true, e = it, (a = !e) || (a = $R(e, t.pendingProps, Gn), a !== null ? (t.stateNode = a, qt = t, it = null, a = true) : a = false, a = !a), a && (n && Xu(t, e), Ri(t))), null;
        case 13:
          return Dv(e, t, n);
        case 4:
          return Ke(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Po(t, null, a, n) : Ht(e, t, a, n), t.child;
        case 11:
          return yv(e, t, t.type, t.pendingProps, n);
        case 7:
          return Ht(e, t, t.pendingProps, n), t.child;
        case 8:
          return Ht(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, a = t.stateNode, a.effectDuration = -0, a.passiveEffectDuration = -0, Ht(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return a = t.type, o = t.pendingProps, s = o.value, "value" in o || dT || (dT = true, console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")), wi(t, a, s), Ht(e, t, o.children, n), t.child;
        case 9:
          return o = t.type._context, a = t.pendingProps.children, typeof a != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Oo(t), o = lt(o), a = dm(a, o, void 0), t.flags |= 1, Ht(e, t, a, n), t.child;
        case 14:
          return gv(e, t, t.type, t.pendingProps, n);
        case 15:
          return vv(e, t, t.type, t.pendingProps, n);
        case 19:
          return wv(e, t, n);
        case 31:
          return tR(e, t, n);
        case 22:
          return bv(e, t, n, t.pendingProps);
        case 24:
          return Oo(t), a = lt(St), e === null ? (o = Zd(), o === null && (o = We, s = Xd(), o.pooledCache = s, Mo(s), s !== null && (o.pooledCacheLanes |= n), o = s), t.memoizedState = { parent: a, cache: o }, Jd(t), wi(t, St, o)) : ((e.lanes & n) !== 0 && (Kd(e, t), Js(t, null, null, n), Ps()), o = e.memoizedState, s = t.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), wi(t, St, a)) : (a = s.cache, wi(t, St, a), a !== o.cache && Gd(t, [St], n, true))), Ht(e, t, t.pendingProps.children, n), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Wa(e) {
      e.flags |= 4;
    }
    function Yh(e, t, n, a, o) {
      if ((t = (e.mode & AC) !== ve) && (t = false), t) {
        if (e.flags |= 16777216, (o & 335544128) === o) if (e.stateNode.complete) e.flags |= 8192;
        else if (lb()) e.flags |= 8192;
        else throw Zo = df, pm;
      } else e.flags &= -16777217;
    }
    function Cv(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Pn) !== ol) e.flags &= -16777217;
      else if (e.flags |= 16777216, !a1(t)) if (lb()) e.flags |= 8192;
      else throw Zo = df, pm;
    }
    function Sc(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ns() : 536870912, e.lanes |= t, Wo |= t);
    }
    function er(e, t) {
      if (!je) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; ) n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
    }
    function et(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
      if (t) if ((e.mode & we) !== ve) {
        for (var o = e.selfBaseDuration, s = e.child; s !== null; ) n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 65011712, a |= s.flags & 65011712, o += s.treeBaseDuration, s = s.sibling;
        e.treeBaseDuration = o;
      } else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 65011712, a |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & we) !== ve) {
        o = e.actualDuration, s = e.selfBaseDuration;
        for (var u = e.child; u !== null; ) n |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, o += u.actualDuration, s += u.treeBaseDuration, u = u.sibling;
        e.actualDuration = o, e.treeBaseDuration = s;
      } else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= a, e.childLanes = n, t;
    }
    function aR(e, t, n) {
      var a = t.pendingProps;
      switch (Hd(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return et(t), null;
        case 1:
          return et(t), null;
        case 3:
          return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ka(St, t), $(t), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (El(t) ? (kd(), Wa(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Yd())), et(t), null;
        case 26:
          var o = t.type, s = t.memoizedState;
          return e === null ? (Wa(t), s !== null ? (et(t), Cv(t, s)) : (et(t), Yh(t, o, null, a, n))) : s ? s !== e.memoizedState ? (Wa(t), et(t), Cv(t, s)) : (et(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Wa(t), et(t), Yh(t, o, e, a, n)), null;
        case 27:
          if (be(t), n = Qe(Li.current), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && Wa(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return et(t), null;
            }
            e = de(), El(t) ? y0(t) : (e = Kb(o, a, n, e, true), t.stateNode = e, Wa(t));
          }
          return et(t), null;
        case 5:
          if (be(t), o = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && Wa(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return et(t), null;
            }
            var u = de();
            if (El(t)) y0(t);
            else {
              switch (s = Qe(Li.current), xd(o, u.ancestorInfo), u = u.context, s = Oc(s), u) {
                case vs:
                  s = s.createElementNS(ql, o);
                  break;
                case Lf:
                  s = s.createElementNS(Qc, o);
                  break;
                default:
                  switch (o) {
                    case "svg":
                      s = s.createElementNS(ql, o);
                      break;
                    case "math":
                      s = s.createElementNS(Qc, o);
                      break;
                    case "script":
                      s = s.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(s.firstChild);
                      break;
                    case "select":
                      s = typeof a.is == "string" ? s.createElement("select", { is: a.is }) : s.createElement("select"), a.multiple ? s.multiple = true : a.size && (s.size = a.size);
                      break;
                    default:
                      s = typeof a.is == "string" ? s.createElement(o, { is: a.is }) : s.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o), Object.prototype.toString.call(s) !== "[object HTMLUnknownElement]" || aa.call(UT, o) || (UT[o] = true, console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", o)));
                  }
              }
              s[kt] = t, s[en] = a;
              e: for (u = t.child; u !== null; ) {
                if (u.tag === 5 || u.tag === 6) s.appendChild(u.stateNode);
                else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                  u.child.return = u, u = u.child;
                  continue;
                }
                if (u === t) break e;
                for (; u.sibling === null; ) {
                  if (u.return === null || u.return === t) break e;
                  u = u.return;
                }
                u.sibling.return = u.return, u = u.sibling;
              }
              t.stateNode = s;
              e: switch (Yt(s, o, a), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = true;
                  break e;
                default:
                  a = false;
              }
              a && Wa(t);
            }
          }
          return et(t), Yh(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== a && Wa(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            if (e = Qe(Li.current), n = de(), El(t)) {
              if (e = t.stateNode, n = t.memoizedProps, o = !La, a = null, s = qt, s !== null) switch (s.tag) {
                case 3:
                  o && (o = Pb(e, n, a), o !== null && (wo(t, 0).serverProps = o));
                  break;
                case 27:
                case 5:
                  a = s.memoizedProps, o && (o = Pb(e, n, a), o !== null && (wo(t, 0).serverProps = o));
              }
              e[kt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === true || zb(e.nodeValue, n)), e || Ri(t, true);
            } else o = n.ancestorInfo.current, o != null && Vu(a, o.tag, n.ancestorInfo.implicitRootScope), e = Oc(e).createTextNode(a), e[kt] = t, t.stateNode = e;
          }
          return et(t), null;
        case 31:
          if (n = t.memoizedState, e === null || e.memoizedState !== null) {
            if (a = El(t), n !== null) {
              if (e === null) {
                if (!a) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");
                e[kt] = t, et(t), (t.mode & we) !== ve && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else kd(), Co(), (t.flags & 128) === 0 && (n = t.memoizedState = null), t.flags |= 4, et(t), (t.mode & we) !== ve && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = false;
            } else n = Yd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = true;
            if (!e) return t.flags & 256 ? (En(t), t) : (En(t), null);
            if ((t.flags & 128) !== 0) throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
          }
          return et(t), null;
        case 13:
          if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = a, s = El(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!s) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
                s[kt] = t, et(t), (t.mode & we) !== ve && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else kd(), Co(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, et(t), (t.mode & we) !== ve && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = false;
            } else o = Yd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = true;
            if (!o) return t.flags & 256 ? (En(t), t) : (En(t), null);
          }
          return En(t), (t.flags & 128) !== 0 ? (t.lanes = n, (t.mode & we) !== ve && $s(t), t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), s = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (s = a.memoizedState.cachePool.pool), s !== o && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Sc(t, t.updateQueue), et(t), (t.mode & we) !== ve && n && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return $(t), e === null && ap(t.stateNode.containerInfo), et(t), null;
        case 10:
          return Ka(t.type, t), et(t), null;
        case 19:
          if (ne(gt, t), a = t.memoizedState, a === null) return et(t), null;
          if (o = (t.flags & 128) !== 0, s = a.rendering, s === null) if (o) er(a, false);
          else {
            if (ft !== mi || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (s = ac(e), s !== null) {
                for (t.flags |= 128, er(a, false), e = s.updateQueue, t.updateQueue = e, Sc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) c0(n, e), n = n.sibling;
                return ge(gt, gt.current & ls | Gr, t), je && Ja(t, a.treeForkCount), t.child;
              }
              e = e.sibling;
            }
            a.tail !== null && Vt() > Df && (t.flags |= 128, o = true, er(a, false), t.lanes = 4194304);
          }
          else {
            if (!o) if (e = ac(s), e !== null) {
              if (t.flags |= 128, o = true, e = e.updateQueue, t.updateQueue = e, Sc(t, e), er(a, true), a.tail === null && a.tailMode === "hidden" && !s.alternate && !je) return et(t), null;
            } else 2 * Vt() - a.renderingStartTime > Df && n !== 536870912 && (t.flags |= 128, o = true, er(a, false), t.lanes = 4194304);
            a.isBackwards ? (s.sibling = t.child, t.child = s) : (e = a.last, e !== null ? e.sibling = s : t.child = s, a.last = s);
          }
          return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Vt(), e.sibling = null, n = gt.current, n = o ? n & ls | Gr : n & ls, ge(gt, n, t), je && Ja(t, a.treeForkCount), e) : (et(t), null);
        case 22:
        case 23:
          return En(t), Id(t), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : et(t), n = t.updateQueue, n !== null && Sc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && ne($o, t), null;
        case 24:
          return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ka(St, t), et(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function iR(e, t) {
      switch (Hd(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & we) !== ve && $s(t), t) : null;
        case 3:
          return Ka(St, t), $(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return be(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (En(t), t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Co();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & we) !== ve && $s(t), t) : null;
        case 13:
          if (En(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Co();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & we) !== ve && $s(t), t) : null;
        case 19:
          return ne(gt, t), null;
        case 4:
          return $(t), null;
        case 10:
          return Ka(t.type, t), null;
        case 22:
        case 23:
          return En(t), Id(t), e !== null && ne($o, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & we) !== ve && $s(t), t) : null;
        case 24:
          return Ka(St, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ov(e, t) {
      switch (Hd(t), t.tag) {
        case 3:
          Ka(St, t), $(t);
          break;
        case 26:
        case 27:
        case 5:
          be(t);
          break;
        case 4:
          $(t);
          break;
        case 31:
          t.memoizedState !== null && En(t);
          break;
        case 13:
          En(t);
          break;
        case 19:
          ne(gt, t);
          break;
        case 10:
          Ka(t.type, t);
          break;
        case 22:
        case 23:
          En(t), Id(t), e !== null && ne($o, t);
          break;
        case 24:
          Ka(St, t);
      }
    }
    function Da(e) {
      return (e.mode & we) !== ve;
    }
    function Mv(e, t) {
      Da(e) ? (xa(), tr(t, e), Aa()) : tr(t, e);
    }
    function kh(e, t, n) {
      Da(e) ? (xa(), Cl(n, e, t), Aa()) : Cl(n, e, t);
    }
    function tr(e, t) {
      try {
        var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
          var o = a.next;
          n = o;
          do {
            if ((n.tag & e) === e && (a = void 0, (e & on) !== pf && (ms = true), a = te(t, OC, n), (e & on) !== pf && (ms = false), a !== void 0 && typeof a != "function")) {
              var s = void 0;
              s = (n.tag & On) !== 0 ? "useLayoutEffect" : (n.tag & on) !== 0 ? "useInsertionEffect" : "useEffect";
              var u = void 0;
              u = a === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof a.then == "function" ? `

It looks like you wrote ` + s + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + s + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + a, te(t, function(f, p) {
                console.error("%s must not return anything besides a function, which is used for clean-up.%s", f, p);
              }, s, u);
            }
            n = n.next;
          } while (n !== o);
        }
      } catch (f) {
        Xe(t, t.return, f);
      }
    }
    function Cl(e, t, n) {
      try {
        var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
        if (o !== null) {
          var s = o.next;
          a = s;
          do {
            if ((a.tag & e) === e) {
              var u = a.inst, f = u.destroy;
              f !== void 0 && (u.destroy = void 0, (e & on) !== pf && (ms = true), o = t, te(o, MC, o, n, f), (e & on) !== pf && (ms = false));
            }
            a = a.next;
          } while (a !== s);
        }
      } catch (p) {
        Xe(t, t.return, p);
      }
    }
    function Nv(e, t) {
      Da(e) ? (xa(), tr(t, e), Aa()) : tr(t, e);
    }
    function qh(e, t, n) {
      Da(e) ? (xa(), Cl(n, e, t), Aa()) : Cl(n, e, t);
    }
    function _v(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || cs || (n.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", k(e) || "instance"), n.state !== e.memoizedState && console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", k(e) || "instance"));
        try {
          te(e, V0, t, n);
        } catch (a) {
          Xe(e, e.return, a);
        }
      }
    }
    function oR(e, t, n) {
      return e.getSnapshotBeforeUpdate(t, n);
    }
    function lR(e, t) {
      var n = t.memoizedProps, a = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || cs || (t.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", k(e) || "instance"), t.state !== e.memoizedState && console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", k(e) || "instance"));
      try {
        var o = Vo(e.type, n), s = te(e, oR, t, o, a);
        n = hT, s !== void 0 || n.has(e.type) || (n.add(e.type), te(e, function() {
          console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", k(e));
        })), t.__reactInternalSnapshotBeforeUpdate = s;
      } catch (u) {
        Xe(e, e.return, u);
      }
    }
    function zv(e, t, n) {
      n.props = Vo(e.type, e.memoizedProps), n.state = e.memoizedState, Da(e) ? (xa(), te(e, _S, e, t, n), Aa()) : te(e, _S, e, t, n);
    }
    function sR(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        if (typeof t == "function") if (Da(e)) try {
          xa(), e.refCleanup = t(n);
        } finally {
          Aa();
        }
        else e.refCleanup = t(n);
        else typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", k(e)), t.current = n;
      }
    }
    function nr(e, t) {
      try {
        te(e, sR, e);
      } catch (n) {
        Xe(e, t, n);
      }
    }
    function Ra(e, t) {
      var n = e.ref, a = e.refCleanup;
      if (n !== null) if (typeof a == "function") try {
        if (Da(e)) try {
          xa(), te(e, a);
        } finally {
          Aa(e);
        }
        else te(e, a);
      } catch (o) {
        Xe(e, t, o);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof n == "function") try {
        if (Da(e)) try {
          xa(), te(e, n, null);
        } finally {
          Aa(e);
        }
        else te(e, n, null);
      } catch (o) {
        Xe(e, t, o);
      }
      else n.current = null;
    }
    function Vv(e, t, n, a) {
      var o = e.memoizedProps, s = o.id, u = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", rf && (t = "nested-update"), typeof o == "function" && o(s, t, e.actualDuration, e.treeBaseDuration, e.actualStartTime, n), typeof u == "function" && u(s, t, a, n);
    }
    function rR(e, t, n, a) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", rf && (t = "nested-update"), typeof o == "function" && o(e, t, a, n);
    }
    function jv(e) {
      var t = e.type, n = e.memoizedProps, a = e.stateNode;
      try {
        te(e, _R, a, t, n, e);
      } catch (o) {
        Xe(e, e.return, o);
      }
    }
    function Gh(e, t, n) {
      try {
        te(e, VR, e.stateNode, e.type, n, t, e);
      } catch (a) {
        Xe(e, e.return, a);
      }
    }
    function Uv(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ui(e.type) || e.tag === 4;
    }
    function Xh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Uv(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Ui(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function $h(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? (Gb(n), (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t)) : (Gb(n), t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Za));
      else if (a !== 4 && (a === 27 && Ui(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for ($h(e, t, n), e = e.sibling; e !== null; ) $h(e, t, n), e = e.sibling;
    }
    function Tc(e, t, n) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (a !== 4 && (a === 27 && Ui(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (Tc(e, t, n), e = e.sibling; e !== null; ) Tc(e, t, n), e = e.sibling;
    }
    function uR(e) {
      for (var t, n = e.return; n !== null; ) {
        if (Uv(n)) {
          t = n;
          break;
        }
        n = n.return;
      }
      if (t == null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
      switch (t.tag) {
        case 27:
          t = t.stateNode, n = Xh(e), Tc(e, n, t);
          break;
        case 5:
          n = t.stateNode, t.flags & 32 && (qb(n), t.flags &= -33), t = Xh(e), Tc(e, t, n);
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, n = Xh(e), $h(e, n, t);
          break;
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Bv(e) {
      var t = e.stateNode, n = e.memoizedProps;
      try {
        te(e, KR, e.type, n, t, e);
      } catch (a) {
        Xe(e, e.return, a);
      }
    }
    function Lv(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : false;
    }
    function cR(e, t) {
      if (e = e.containerInfo, $m = qf, e = e0(e), wd(e)) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var o = a.anchorOffset, s = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0, f = -1, p = -1, g = 0, M = 0, N = e, D = null;
            t: for (; ; ) {
              for (var z; N !== n || o !== 0 && N.nodeType !== 3 || (f = u + o), N !== s || a !== 0 && N.nodeType !== 3 || (p = u + a), N.nodeType === 3 && (u += N.nodeValue.length), (z = N.firstChild) !== null; ) D = N, N = z;
              for (; ; ) {
                if (N === e) break t;
                if (D === n && ++g === o && (f = u), D === s && ++M === a && (p = u), (z = N.nextSibling) !== null) break;
                N = D, D = N.parentNode;
              }
              N = z;
            }
            n = f === -1 || p === -1 ? null : { start: f, end: p };
          } else n = null;
        }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (Qm = { focusedElem: e, selectionRange: n }, qf = false, Ut = t; Ut !== null; ) if (t = Ut, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ut = e;
      else for (; Ut !== null; ) {
        switch (e = t = Ut, n = e.alternate, o = e.flags, e.tag) {
          case 0:
            if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null)) for (n = 0; n < e.length; n++) o = e[n], o.ref.impl = o.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            (o & 1024) !== 0 && n !== null && lR(e, n);
            break;
          case 3:
            if ((o & 1024) !== 0) {
              if (e = e.stateNode.containerInfo, n = e.nodeType, n === 9) fp(e);
              else if (n === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  fp(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((o & 1024) !== 0) throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, Ut = e;
          break;
        }
        Ut = t.return;
      }
    }
    function Hv(e, t, n) {
      var a = Sn(), o = ba(), s = Ta(), u = Ea(), f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wa(e, n), f & 4 && Mv(n, On | Qn);
          break;
        case 1:
          if (wa(e, n), f & 4) if (e = n.stateNode, t === null) n.type.defaultProps || "ref" in n.memoizedProps || cs || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", k(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", k(n) || "instance")), Da(n) ? (xa(), te(n, hm, n, e), Aa()) : te(n, hm, n, e);
          else {
            var p = Vo(n.type, t.memoizedProps);
            t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || cs || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", k(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", k(n) || "instance")), Da(n) ? (xa(), te(n, OS, n, e, p, t, e.__reactInternalSnapshotBeforeUpdate), Aa()) : te(n, OS, n, e, p, t, e.__reactInternalSnapshotBeforeUpdate);
          }
          f & 64 && _v(n), f & 512 && nr(n, n.return);
          break;
        case 3:
          if (t = Fa(), wa(e, n), f & 64 && (f = n.updateQueue, f !== null)) {
            if (p = null, n.child !== null) switch (n.child.tag) {
              case 27:
              case 5:
                p = n.child.stateNode;
                break;
              case 1:
                p = n.child.stateNode;
            }
            try {
              te(n, V0, f, p);
            } catch (M) {
              Xe(n, n.return, M);
            }
          }
          e.effectDuration += Pu(t);
          break;
        case 27:
          t === null && f & 4 && Bv(n);
        case 26:
        case 5:
          if (wa(e, n), t === null) {
            if (f & 4) jv(n);
            else if (f & 64) {
              e = n.type, t = n.memoizedProps, p = n.stateNode;
              try {
                te(n, zR, p, e, t, n);
              } catch (M) {
                Xe(n, n.return, M);
              }
            }
          }
          f & 512 && nr(n, n.return);
          break;
        case 12:
          if (f & 4) {
            f = Fa(), wa(e, n), e = n.stateNode, e.effectDuration += Xs(f);
            try {
              te(n, Vv, n, t, Qi, e.effectDuration);
            } catch (M) {
              Xe(n, n.return, M);
            }
          } else wa(e, n);
          break;
        case 31:
          wa(e, n), f & 4 && qv(e, n);
          break;
        case 13:
          wa(e, n), f & 4 && Gv(e, n), f & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (f = bR.bind(null, n), QR(e, f))));
          break;
        case 22:
          if (f = n.memoizedState !== null || pi, !f) {
            t = t !== null && t.memoizedState !== null || xt, p = pi;
            var g = xt;
            pi = f, (xt = t) && !g ? (Ca(e, n, (n.subtreeFlags & 8772) !== 0), (n.mode & we) !== ve && 0 <= he && 0 <= me && 0.05 < me - he && Lu(n, he, me)) : wa(e, n), pi = p, xt = g;
          }
          break;
        case 30:
          break;
        default:
          wa(e, n);
      }
      (n.mode & we) !== ve && 0 <= he && 0 <= me && ((ht || 0.05 < ct) && ga(n, he, me, ct, st), n.alternate === null && n.return !== null && n.return.alternate !== null && 0.05 < me - he && (Lv(n.return.alternate, n.return) || ya(n, he, me, "Mount"))), Tn(a), Sa(o), st = s, ht = u;
    }
    function Yv(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Yv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && _(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function ei(e, t, n) {
      for (n = n.child; n !== null; ) kv(e, t, n), n = n.sibling;
    }
    function kv(e, t, n) {
      if (Pt && typeof Pt.onCommitFiberUnmount == "function") try {
        Pt.onCommitFiberUnmount(Yl, n);
      } catch (g) {
        Va || (Va = true, console.error("React instrumentation encountered an error: %o", g));
      }
      var a = Sn(), o = ba(), s = Ta(), u = Ea();
      switch (n.tag) {
        case 26:
          xt || Ra(n, t), ei(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (e = n.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          xt || Ra(n, t);
          var f = Dt, p = pn;
          Ui(n.type) && (Dt = n.stateNode, pn = false), ei(e, t, n), te(n, fr, n.stateNode), Dt = f, pn = p;
          break;
        case 5:
          xt || Ra(n, t);
        case 6:
          if (f = Dt, p = pn, Dt = null, ei(e, t, n), Dt = f, pn = p, Dt !== null) if (pn) try {
            te(n, BR, Dt, n.stateNode);
          } catch (g) {
            Xe(n, t, g);
          }
          else try {
            te(n, UR, Dt, n.stateNode);
          } catch (g) {
            Xe(n, t, g);
          }
          break;
        case 18:
          Dt !== null && (pn ? (e = Dt, Xb(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Ul(e)) : Xb(Dt, n.stateNode));
          break;
        case 4:
          f = Dt, p = pn, Dt = n.stateNode.containerInfo, pn = true, ei(e, t, n), Dt = f, pn = p;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Cl(on, n, t), xt || kh(n, t, On), ei(e, t, n);
          break;
        case 1:
          xt || (Ra(n, t), f = n.stateNode, typeof f.componentWillUnmount == "function" && zv(n, t, f)), ei(e, t, n);
          break;
        case 21:
          ei(e, t, n);
          break;
        case 22:
          xt = (f = xt) || n.memoizedState !== null, ei(e, t, n), xt = f;
          break;
        default:
          ei(e, t, n);
      }
      (n.mode & we) !== ve && 0 <= he && 0 <= me && (ht || 0.05 < ct) && ga(n, he, me, ct, st), Tn(a), Sa(o), st = s, ht = u;
    }
    function qv(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          te(t, PR, e);
        } catch (n) {
          Xe(t, t.return, n);
        }
      }
    }
    function Gv(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        te(t, JR, e);
      } catch (n) {
        Xe(t, t.return, n);
      }
    }
    function fR(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new pT()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new pT()), t;
        default:
          throw Error("Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React.");
      }
    }
    function Ec(e, t) {
      var n = fR(e);
      t.forEach(function(a) {
        if (!n.has(a)) {
          if (n.add(a), ja) if (fs !== null && ds !== null) lr(ds, fs);
          else throw Error("Expected finished root and lanes to be set. This is a bug in React.");
          var o = SR.bind(null, e, a);
          a.then(o, o);
        }
      });
    }
    function dn(e, t) {
      var n = t.deletions;
      if (n !== null) for (var a = 0; a < n.length; a++) {
        var o = e, s = t, u = n[a], f = Sn(), p = s;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Ui(p.type)) {
                Dt = p.stateNode, pn = false;
                break e;
              }
              break;
            case 5:
              Dt = p.stateNode, pn = false;
              break e;
            case 3:
            case 4:
              Dt = p.stateNode.containerInfo, pn = true;
              break e;
          }
          p = p.return;
        }
        if (Dt === null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        kv(o, s, u), Dt = null, pn = false, (u.mode & we) !== ve && 0 <= he && 0 <= me && 0.05 < me - he && ya(u, he, me, "Unmount"), Tn(f), o = u, s = o.alternate, s !== null && (s.return = null), o.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Xv(t, e), t = t.sibling;
    }
    function Xv(e, t) {
      var n = Sn(), a = ba(), o = Ta(), s = Ea(), u = e.alternate, f = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dn(t, e), hn(e), f & 4 && (Cl(on | Qn, e, e.return), tr(on | Qn, e), kh(e, e.return, On | Qn));
          break;
        case 1:
          if (dn(t, e), hn(e), f & 512 && (xt || u === null || Ra(u, u.return)), f & 64 && pi && (f = e.updateQueue, f !== null && (u = f.callbacks, u !== null))) {
            var p = f.shared.hiddenCallbacks;
            f.shared.hiddenCallbacks = p === null ? u : p.concat(u);
          }
          break;
        case 26:
          if (p = sa, dn(t, e), hn(e), f & 512 && (xt || u === null || Ra(u, u.return)), f & 4) {
            var g = u !== null ? u.memoizedState : null;
            if (f = e.memoizedState, u === null) if (f === null) if (e.stateNode === null) {
              e: {
                f = e.type, u = e.memoizedProps, p = p.ownerDocument || p;
                t: switch (f) {
                  case "title":
                    g = p.getElementsByTagName("title")[0], (!g || g[vr] || g[kt] || g.namespaceURI === ql || g.hasAttribute("itemprop")) && (g = p.createElement(f), p.head.insertBefore(g, p.querySelector("head > title"))), Yt(g, f, u), g[kt] = e, ce(g), f = g;
                    break e;
                  case "link":
                    var M = t1("link", "href", p).get(f + (u.href || ""));
                    if (M) {
                      for (var N = 0; N < M.length; N++) if (g = M[N], g.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && g.getAttribute("rel") === (u.rel == null ? null : u.rel) && g.getAttribute("title") === (u.title == null ? null : u.title) && g.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                        M.splice(N, 1);
                        break t;
                      }
                    }
                    g = p.createElement(f), Yt(g, f, u), p.head.appendChild(g);
                    break;
                  case "meta":
                    if (M = t1("meta", "content", p).get(f + (u.content || ""))) {
                      for (N = 0; N < M.length; N++) if (g = M[N], Ze(u.content, "content"), g.getAttribute("content") === (u.content == null ? null : "" + u.content) && g.getAttribute("name") === (u.name == null ? null : u.name) && g.getAttribute("property") === (u.property == null ? null : u.property) && g.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && g.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                        M.splice(N, 1);
                        break t;
                      }
                    }
                    g = p.createElement(f), Yt(g, f, u), p.head.appendChild(g);
                    break;
                  default:
                    throw Error('getNodesForType encountered a type it did not expect: "' + f + '". This is a bug in React.');
                }
                g[kt] = e, ce(g), f = g;
              }
              e.stateNode = f;
            } else n1(p, e.type, e.stateNode);
            else e.stateNode = e1(p, f, e.memoizedProps);
            else g !== f ? (g === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : g.count--, f === null ? n1(p, e.type, e.stateNode) : e1(p, f, e.memoizedProps)) : f === null && e.stateNode !== null && Gh(e, e.memoizedProps, u.memoizedProps);
          }
          break;
        case 27:
          dn(t, e), hn(e), f & 512 && (xt || u === null || Ra(u, u.return)), u !== null && f & 4 && Gh(e, e.memoizedProps, u.memoizedProps);
          break;
        case 5:
          if (dn(t, e), hn(e), f & 512 && (xt || u === null || Ra(u, u.return)), e.flags & 32) {
            p = e.stateNode;
            try {
              te(e, qb, p);
            } catch (I) {
              Xe(e, e.return, I);
            }
          }
          f & 4 && e.stateNode != null && (p = e.memoizedProps, Gh(e, p, u !== null ? u.memoizedProps : p)), f & 1024 && (Rm = true, e.type !== "form" && console.error("Unexpected host component type. Expected a form. This is a bug in React."));
          break;
        case 6:
          if (dn(t, e), hn(e), f & 4) {
            if (e.stateNode === null) throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            f = e.memoizedProps, u = u !== null ? u.memoizedProps : f, p = e.stateNode;
            try {
              te(e, jR, p, u, f);
            } catch (I) {
              Xe(e, e.return, I);
            }
          }
          break;
        case 3:
          if (p = Fa(), Hf = null, g = sa, sa = Mc(t.containerInfo), dn(t, e), sa = g, hn(e), f & 4 && u !== null && u.memoizedState.isDehydrated) try {
            te(e, ZR, t.containerInfo);
          } catch (I) {
            Xe(e, e.return, I);
          }
          Rm && (Rm = false, $v(e)), t.effectDuration += Pu(p);
          break;
        case 4:
          f = sa, sa = Mc(e.stateNode.containerInfo), dn(t, e), hn(e), sa = f;
          break;
        case 12:
          f = Fa(), dn(t, e), hn(e), e.stateNode.effectDuration += Xs(f);
          break;
        case 31:
          dn(t, e), hn(e), f & 4 && (f = e.updateQueue, f !== null && (e.updateQueue = null, Ec(e, f)));
          break;
        case 13:
          dn(t, e), hn(e), e.child.flags & 8192 && e.memoizedState !== null != (u !== null && u.memoizedState !== null) && (xf = Vt()), f & 4 && (f = e.updateQueue, f !== null && (e.updateQueue = null, Ec(e, f)));
          break;
        case 22:
          p = e.memoizedState !== null;
          var D = u !== null && u.memoizedState !== null, z = pi, J = xt;
          if (pi = z || p, xt = J || D, dn(t, e), xt = J, pi = z, D && !p && !z && !J && (e.mode & we) !== ve && 0 <= he && 0 <= me && 0.05 < me - he && Lu(e, he, me), hn(e), f & 8192) e: for (t = e.stateNode, t._visibility = p ? t._visibility & ~wr : t._visibility | wr, !p || u === null || D || pi || xt || (jo(e), (e.mode & we) !== ve && 0 <= he && 0 <= me && 0.05 < me - he && ya(e, he, me, "Disconnect")), u = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                D = u = t;
                try {
                  g = D.stateNode, p ? te(D, HR, g) : te(D, qR, D.stateNode, D.memoizedProps);
                } catch (I) {
                  Xe(D, D.return, I);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                D = t;
                try {
                  M = D.stateNode, p ? te(D, YR, M) : te(D, GR, M, D.memoizedProps);
                } catch (I) {
                  Xe(D, D.return, I);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                D = t;
                try {
                  N = D.stateNode, p ? te(D, LR, N) : te(D, kR, D.stateNode);
                } catch (I) {
                  Xe(D, D.return, I);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
          f & 4 && (f = e.updateQueue, f !== null && (u = f.retryQueue, u !== null && (f.retryQueue = null, Ec(e, u))));
          break;
        case 19:
          dn(t, e), hn(e), f & 4 && (f = e.updateQueue, f !== null && (e.updateQueue = null, Ec(e, f)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          dn(t, e), hn(e);
      }
      (e.mode & we) !== ve && 0 <= he && 0 <= me && ((ht || 0.05 < ct) && ga(e, he, me, ct, st), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < me - he && (Lv(e.return.alternate, e.return) || ya(e, he, me, "Mount"))), Tn(n), Sa(a), st = o, ht = s;
    }
    function hn(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          te(e, uR, e);
        } catch (n) {
          Xe(e, e.return, n);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function $v(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var t = e;
        $v(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
    }
    function wa(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Hv(e, t.alternate, t), t = t.sibling;
    }
    function Qv(e) {
      var t = Sn(), n = ba(), a = Ta(), o = Ea();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kh(e, e.return, On), jo(e);
          break;
        case 1:
          Ra(e, e.return);
          var s = e.stateNode;
          typeof s.componentWillUnmount == "function" && zv(e, e.return, s), jo(e);
          break;
        case 27:
          te(e, fr, e.stateNode);
        case 26:
        case 5:
          Ra(e, e.return), jo(e);
          break;
        case 22:
          e.memoizedState === null && jo(e);
          break;
        case 30:
          jo(e);
          break;
        default:
          jo(e);
      }
      (e.mode & we) !== ve && 0 <= he && 0 <= me && (ht || 0.05 < ct) && ga(e, he, me, ct, st), Tn(t), Sa(n), st = a, ht = o;
    }
    function jo(e) {
      for (e = e.child; e !== null; ) Qv(e), e = e.sibling;
    }
    function Zv(e, t, n, a) {
      var o = Sn(), s = ba(), u = Ta(), f = Ea(), p = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ca(e, n, a), Mv(n, On);
          break;
        case 1:
          if (Ca(e, n, a), t = n.stateNode, typeof t.componentDidMount == "function" && te(n, hm, n, t), t = n.updateQueue, t !== null) {
            e = n.stateNode;
            try {
              te(n, ZD, t, e);
            } catch (g) {
              Xe(n, n.return, g);
            }
          }
          a && p & 64 && _v(n), nr(n, n.return);
          break;
        case 27:
          Bv(n);
        case 26:
        case 5:
          Ca(e, n, a), a && t === null && p & 4 && jv(n), nr(n, n.return);
          break;
        case 12:
          if (a && p & 4) {
            p = Fa(), Ca(e, n, a), a = n.stateNode, a.effectDuration += Xs(p);
            try {
              te(n, Vv, n, t, Qi, a.effectDuration);
            } catch (g) {
              Xe(n, n.return, g);
            }
          } else Ca(e, n, a);
          break;
        case 31:
          Ca(e, n, a), a && p & 4 && qv(e, n);
          break;
        case 13:
          Ca(e, n, a), a && p & 4 && Gv(e, n);
          break;
        case 22:
          n.memoizedState === null && Ca(e, n, a), nr(n, n.return);
          break;
        case 30:
          break;
        default:
          Ca(e, n, a);
      }
      (n.mode & we) !== ve && 0 <= he && 0 <= me && (ht || 0.05 < ct) && ga(n, he, me, ct, st), Tn(o), Sa(s), st = u, ht = f;
    }
    function Ca(e, t, n) {
      for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) Zv(e, t.alternate, t, n), t = t.sibling;
    }
    function Qh(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && Mo(e), n != null && Gs(n));
    }
    function Zh(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Mo(t), e != null && Gs(e));
    }
    function na(e, t, n, a, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (t = t.child; t !== null; ) {
        var s = t.sibling;
        Pv(e, t, n, a, s !== null ? s.actualStartTime : o), t = s;
      }
    }
    function Pv(e, t, n, a, o) {
      var s = Sn(), u = ba(), f = Ta(), p = Ea(), g = qi, M = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & we) !== ve && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Hu(t, t.actualStartTime, o, Ot, n), na(e, t, n, a, o), M & 2048 && Nv(t, ln | Qn);
          break;
        case 1:
          (t.mode & we) !== ve && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Od(t, t.actualStartTime, o, []) : (t.flags & 1) !== 0 && Hu(t, t.actualStartTime, o, Ot, n)), na(e, t, n, a, o);
          break;
        case 3:
          var N = Fa(), D = Ot;
          Ot = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, na(e, t, n, a, o), Ot = D, M & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), a = t.memoizedState.cache, a !== n && (Mo(a), n != null && Gs(n))), e.passiveEffectDuration += Pu(N);
          break;
        case 12:
          if (M & 2048) {
            M = Fa(), na(e, t, n, a, o), e = t.stateNode, e.passiveEffectDuration += Xs(M);
            try {
              te(t, rR, t, t.alternate, Qi, e.passiveEffectDuration);
            } catch (z) {
              Xe(t, t.return, z);
            }
          } else na(e, t, n, a, o);
          break;
        case 31:
          M = Ot, N = t.alternate !== null ? t.alternate.memoizedState : null, D = t.memoizedState, N !== null && D === null ? (D = t.deletions, D !== null && 0 < D.length && D[0].tag === 18 ? (Ot = false, N = N.hydrationErrors, N !== null && Od(t, t.actualStartTime, o, N)) : Ot = true) : Ot = false, na(e, t, n, a, o), Ot = M;
          break;
        case 13:
          M = Ot, N = t.alternate !== null ? t.alternate.memoizedState : null, D = t.memoizedState, N === null || N.dehydrated === null || D !== null && D.dehydrated !== null ? Ot = false : (D = t.deletions, D !== null && 0 < D.length && D[0].tag === 18 ? (Ot = false, N = N.hydrationErrors, N !== null && Od(t, t.actualStartTime, o, N)) : Ot = true), na(e, t, n, a, o), Ot = M;
          break;
        case 23:
          break;
        case 22:
          D = t.stateNode, N = t.alternate, t.memoizedState !== null ? D._visibility & ii ? na(e, t, n, a, o) : ar(e, t, n, a, o) : D._visibility & ii ? na(e, t, n, a, o) : (D._visibility |= ii, Ol(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child), o), (t.mode & we) === ve || Ot || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Lu(t, e, o), 0 <= he && 0 <= me && 0.05 < me - he && Lu(t, he, me))), M & 2048 && Qh(N, t);
          break;
        case 24:
          na(e, t, n, a, o), M & 2048 && Zh(t.alternate, t);
          break;
        default:
          na(e, t, n, a, o);
      }
      (t.mode & we) !== ve && ((e = !Ot && t.alternate === null && t.return !== null && t.return.alternate !== null) && (n = t.actualStartTime, 0 <= n && 0.05 < o - n && ya(t, n, o, "Mount")), 0 <= he && 0 <= me && ((ht || 0.05 < ct) && ga(t, he, me, ct, st), e && 0.05 < me - he && ya(t, he, me, "Mount"))), Tn(s), Sa(u), st = f, ht = p, qi = g;
    }
    function Ol(e, t, n, a, o, s) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var u = t.sibling;
        Jv(e, t, n, a, o, u !== null ? u.actualStartTime : s), t = u;
      }
    }
    function Jv(e, t, n, a, o, s) {
      var u = Sn(), f = ba(), p = Ta(), g = Ea(), M = qi;
      o && (t.mode & we) !== ve && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Hu(t, t.actualStartTime, s, Ot, n);
      var N = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ol(e, t, n, a, o, s), Nv(t, ln);
          break;
        case 23:
          break;
        case 22:
          var D = t.stateNode;
          t.memoizedState !== null ? D._visibility & ii ? Ol(e, t, n, a, o, s) : ar(e, t, n, a, s) : (D._visibility |= ii, Ol(e, t, n, a, o, s)), o && N & 2048 && Qh(t.alternate, t);
          break;
        case 24:
          Ol(e, t, n, a, o, s), o && N & 2048 && Zh(t.alternate, t);
          break;
        default:
          Ol(e, t, n, a, o, s);
      }
      (t.mode & we) !== ve && 0 <= he && 0 <= me && (ht || 0.05 < ct) && ga(t, he, me, ct, st), Tn(u), Sa(f), st = p, ht = g, qi = M;
    }
    function ar(e, t, n, a, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (var s = t.child; s !== null; ) {
        t = s.sibling;
        var u = e, f = n, p = a, g = t !== null ? t.actualStartTime : o, M = qi;
        (s.mode & we) !== ve && 0 < s.actualStartTime && (s.flags & 1) !== 0 && Hu(s, s.actualStartTime, g, Ot, f);
        var N = s.flags;
        switch (s.tag) {
          case 22:
            ar(u, s, f, p, g), N & 2048 && Qh(s.alternate, s);
            break;
          case 24:
            ar(u, s, f, p, g), N & 2048 && Zh(s.alternate, s);
            break;
          default:
            ar(u, s, f, p, g);
        }
        qi = M, s = t;
      }
    }
    function Ml(e, t, n) {
      if (e.subtreeFlags & Zr) for (e = e.child; e !== null; ) Kv(e, t, n), e = e.sibling;
    }
    function Kv(e, t, n) {
      switch (e.tag) {
        case 26:
          Ml(e, t, n), e.flags & Zr && e.memoizedState !== null && WR(n, sa, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Ml(e, t, n);
          break;
        case 3:
        case 4:
          var a = sa;
          sa = Mc(e.stateNode.containerInfo), Ml(e, t, n), sa = a;
          break;
        case 22:
          e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Zr, Zr = 16777216, Ml(e, t, n), Zr = a) : Ml(e, t, n));
          break;
        default:
          Ml(e, t, n);
      }
    }
    function Fv(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function ir(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var n = 0; n < t.length; n++) {
          var a = t[n], o = Sn();
          Ut = a, eb(a, e), (a.mode & we) !== ve && 0 <= he && 0 <= me && 0.05 < me - he && ya(a, he, me, "Unmount"), Tn(o);
        }
        Fv(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Iv(e), e = e.sibling;
    }
    function Iv(e) {
      var t = Sn(), n = ba(), a = Ta(), o = Ea();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ir(e), e.flags & 2048 && qh(e, e.return, ln | Qn);
          break;
        case 3:
          var s = Fa();
          ir(e), e.stateNode.passiveEffectDuration += Pu(s);
          break;
        case 12:
          s = Fa(), ir(e), e.stateNode.passiveEffectDuration += Xs(s);
          break;
        case 22:
          s = e.stateNode, e.memoizedState !== null && s._visibility & ii && (e.return === null || e.return.tag !== 13) ? (s._visibility &= ~ii, Ac(e), (e.mode & we) !== ve && 0 <= he && 0 <= me && 0.05 < me - he && ya(e, he, me, "Disconnect")) : ir(e);
          break;
        default:
          ir(e);
      }
      (e.mode & we) !== ve && 0 <= he && 0 <= me && (ht || 0.05 < ct) && ga(e, he, me, ct, st), Tn(t), Sa(n), ht = o, st = a;
    }
    function Ac(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var n = 0; n < t.length; n++) {
          var a = t[n], o = Sn();
          Ut = a, eb(a, e), (a.mode & we) !== ve && 0 <= he && 0 <= me && 0.05 < me - he && ya(a, he, me, "Unmount"), Tn(o);
        }
        Fv(e);
      }
      for (e = e.child; e !== null; ) Wv(e), e = e.sibling;
    }
    function Wv(e) {
      var t = Sn(), n = ba(), a = Ta(), o = Ea();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          qh(e, e.return, ln), Ac(e);
          break;
        case 22:
          var s = e.stateNode;
          s._visibility & ii && (s._visibility &= ~ii, Ac(e));
          break;
        default:
          Ac(e);
      }
      (e.mode & we) !== ve && 0 <= he && 0 <= me && (ht || 0.05 < ct) && ga(e, he, me, ct, st), Tn(t), Sa(n), ht = o, st = a;
    }
    function eb(e, t) {
      for (; Ut !== null; ) {
        var n = Ut, a = n, o = t, s = Sn(), u = ba(), f = Ta(), p = Ea();
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            qh(a, o, ln);
            break;
          case 23:
          case 22:
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (o = a.memoizedState.cachePool.pool, o != null && Mo(o));
            break;
          case 24:
            Gs(a.memoizedState.cache);
        }
        if ((a.mode & we) !== ve && 0 <= he && 0 <= me && (ht || 0.05 < ct) && ga(a, he, me, ct, st), Tn(s), Sa(u), ht = p, st = f, a = n.child, a !== null) a.return = n, Ut = a;
        else e: for (n = e; Ut !== null; ) {
          if (a = Ut, s = a.sibling, u = a.return, Yv(a), a === n) {
            Ut = null;
            break e;
          }
          if (s !== null) {
            s.return = u, Ut = s;
            break e;
          }
          Ut = u;
        }
      }
    }
    function dR() {
      jC.forEach(function(e) {
        return e();
      });
    }
    function tb() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || j.actQueue === null || console.error("The current testing environment is not configured to support act(...)"), e;
    }
    function An(e) {
      if ((qe & Mt) !== Bt && Oe !== 0) return Oe & -Oe;
      var t = j.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), tp()) : xi();
    }
    function nb() {
      if (yn === 0) if ((Oe & 536870912) === 0 || je) {
        var e = qc;
        qc <<= 1, (qc & 3932160) === 0 && (qc = 262144), yn = e;
      } else yn = 536870912;
      return e = Cn.current, e !== null && (e.flags |= 32), yn;
    }
    function dt(e, t, n) {
      if (ms && console.error("useInsertionEffect must not schedule updates."), Bm && (Cf = true), (e === We && (Je === Fo || Je === Io) || e.cancelPendingCommit !== null) && (_l(e, 0), Vi(e, Oe, yn, false)), Ei(e, n), (qe & Mt) !== Bt && e === We) {
        if (za) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            e = Ne && k(Ne) || "Unknown", OT.has(e) || (OT.add(e), t = k(t) || "Unknown", console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render", t, e, e));
            break;
          case 1:
            CT || (console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), CT = true);
        }
      } else ja && To(e, t, n), ER(t), e === We && ((qe & Mt) === Bt && (eo |= n), ft === Fi && Vi(e, Oe, yn, false)), Oa(e);
    }
    function ab(e, t, n) {
      if ((qe & (Mt | Mn)) !== Bt) throw Error("Should not already be working.");
      if (Oe !== 0 && Ne !== null) {
        var a = Ne, o = Vt();
        switch (TS) {
          case Kr:
          case Fo:
            var s = zr;
            at && ((a = a._debugTask) ? a.run(console.timeStamp.bind(console, "Suspended", s, o, Ln, void 0, "primary-light")) : console.timeStamp("Suspended", s, o, Ln, void 0, "primary-light"));
            break;
          case Io:
            s = zr, at && ((a = a._debugTask) ? a.run(console.timeStamp.bind(console, "Action", s, o, Ln, void 0, "primary-light")) : console.timeStamp("Action", s, o, Ln, void 0, "primary-light"));
            break;
          default:
            at && (a = o - zr, 3 > a || console.timeStamp("Blocked", zr, o, Ln, void 0, 5 > a ? "primary-light" : 10 > a ? "primary" : 100 > a ? "primary-dark" : "error"));
        }
      }
      s = (n = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ti(e, t)) ? pR(e, t) : Jh(e, t, true);
      var u = n;
      do {
        if (s === mi) {
          hs && !n && Vi(e, t, 0, false), t = Je, zr = Tt(), TS = t;
          break;
        } else {
          if (a = Vt(), o = e.current.alternate, u && !hR(o)) {
            ea(t), o = jt, s = a, !at || s <= o || (yt ? yt.run(console.timeStamp.bind(console, "Teared Render", o, s, He, Be, "error")) : console.timeStamp("Teared Render", o, s, He, Be, "error")), Uo(t, a), s = Jh(e, t, false), u = false;
            continue;
          }
          if (s === Ko) {
            if (u = t, e.errorRecoveryDisabledLanes & u) var f = 0;
            else f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
            if (f !== 0) {
              ea(t), Md(jt, a, t, yt), Uo(t, a), t = f;
              e: {
                a = e, s = u, u = Ir;
                var p = a.current.memoizedState.isDehydrated;
                if (p && (_l(a, f).flags |= 256), f = Jh(a, f, false), f !== Ko) {
                  if (Om && !p) {
                    a.errorRecoveryDisabledLanes |= s, eo |= s, s = Fi;
                    break e;
                  }
                  a = sn, sn = u, a !== null && (sn === null ? sn = a : sn.push.apply(sn, a));
                }
                s = f;
              }
              if (u = false, s !== Ko) continue;
              a = Vt();
            }
          }
          if (s === Jr) {
            ea(t), Md(jt, a, t, yt), Uo(t, a), _l(e, 0), Vi(e, t, 0, true);
            break;
          }
          e: {
            switch (n = e, s) {
              case mi:
              case Jr:
                throw Error("Root did not complete. This is a bug in React.");
              case Fi:
                if ((t & 4194048) !== t) break;
              case Sf:
                ea(t), a0(jt, a, t, yt), Uo(t, a), o = t, (o & 127) !== 0 ? of = a : (o & 4194048) !== 0 && (lf = a), Vi(n, t, yn, !Ii);
                break e;
              case Ko:
                sn = null;
                break;
              case bf:
              case mT:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (j.actQueue !== null) Kh(n, o, t, sn, Wr, Af, yn, eo, Wo, s, null, null, jt, a);
            else {
              if ((t & 62914560) === t && (u = xf + vT - Vt(), 10 < u)) {
                if (Vi(n, t, yn, !Ii), bo(n, 0, true) !== 0) break e;
                ra = t, n.timeoutHandle = BT(ib.bind(null, n, o, sn, Wr, Af, t, yn, eo, Wo, Ii, s, "Throttled", jt, a), u);
                break e;
              }
              ib(n, o, sn, Wr, Af, t, yn, eo, Wo, Ii, s, null, jt, a);
            }
          }
        }
        break;
      } while (true);
      Oa(e);
    }
    function ib(e, t, n, a, o, s, u, f, p, g, M, N, D, z) {
      e.timeoutHandle = il;
      var J = t.subtreeFlags, I = null;
      if ((J & 8192 || (J & 16785408) === 16785408) && (I = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Za }, Kv(t, s, I), J = (s & 62914560) === s ? xf - Vt() : (s & 4194048) === s ? gT - Vt() : 0, J = ew(I, J), J !== null)) {
        ra = s, e.cancelPendingCommit = J(Kh.bind(null, e, t, s, n, a, o, u, f, p, M, I, I.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < I.count ? 0 < I.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : I.imgCount === 1 ? "Suspended on an Image" : 0 < I.imgCount ? "Suspended on Images" : null, D, z)), Vi(e, s, u, !g);
        return;
      }
      Kh(e, t, s, n, a, o, u, f, p, M, I, N, D, z);
    }
    function hR(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) {
          var o = n[a], s = o.getSnapshot;
          o = o.value;
          try {
            if (!nn(s(), o)) return false;
          } catch {
            return false;
          }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Vi(e, t, n, a) {
      t &= ~Mm, t &= ~eo, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var s = 31 - Wt(o), u = 1 << s;
        a[s] = -1, o &= ~u;
      }
      n !== 0 && zs(e, n, t);
    }
    function Nl() {
      return (qe & (Mt | Mn)) === Bt ? (sr(0), false) : true;
    }
    function Ph() {
      if (Ne !== null) {
        if (Je === mn) var e = Ne.return;
        else e = Ne, $u(), oh(e), is = null, qr = 0, e = Ne;
        for (; e !== null; ) Ov(e.alternate, e), e = e.return;
        Ne = null;
      }
    }
    function Uo(e, t) {
      (e & 127) !== 0 && (ko = t), (e & 4194048) !== 0 && (ui = t), (e & 62914560) !== 0 && (bS = t), (e & 2080374784) !== 0 && (SS = t);
    }
    function _l(e, t) {
      at && (console.timeStamp("Blocking Track", 3e-3, 3e-3, "Blocking", Be, "primary-light"), console.timeStamp("Transition Track", 3e-3, 3e-3, "Transition", Be, "primary-light"), console.timeStamp("Suspense Track", 3e-3, 3e-3, "Suspense", Be, "primary-light"), console.timeStamp("Idle Track", 3e-3, 3e-3, "Idle", Be, "primary-light"));
      var n = jt;
      if (jt = Tt(), Oe !== 0 && 0 < n) {
        if (ea(Oe), ft === bf || ft === Fi) a0(n, jt, t, yt);
        else {
          var a = jt, o = yt;
          if (at && !(a <= n)) {
            var s = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", u = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(console.timeStamp.bind(console, u, n, a, He, Be, s)) : console.timeStamp(u, n, a, He, Be, s);
          }
        }
        Uo(Oe, jt);
      }
      if (n = yt, yt = null, (t & 127) !== 0) {
        yt = Mr, o = 0 <= Ha && Ha < ko ? ko : Ha, a = 0 <= qo && qo < ko ? ko : qo, s = 0 <= a ? a : 0 <= o ? o : jt, 0 <= of ? (ea(2), i0(of, s, t, n)) : sf & 127, n = o;
        var f = a, p = Nr, g = 0 < ts, M = Zi === Or, N = Zi === af;
        if (o = jt, a = Mr, s = rm, u = um, at) {
          if (He = "Blocking", 0 < n ? n > o && (n = o) : n = o, 0 < f ? f > n && (f = n) : f = n, p !== null && n > f) {
            var D = g ? "secondary-light" : "warning";
            a ? a.run(console.timeStamp.bind(console, g ? "Consecutive" : "Event: " + p, f, n, He, Be, D)) : console.timeStamp(g ? "Consecutive" : "Event: " + p, f, n, He, Be, D);
          }
          o > n && (f = M ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", M = N ? "Promise Resolved" : M ? "Cascading Update" : 5 < o - n ? "Update Blocked" : "Update", N = [], u != null && N.push(["Component name", u]), s != null && N.push(["Method name", s]), n = { start: n, end: o, detail: { devtools: { properties: N, track: He, trackGroup: Be, color: f } } }, a ? a.run(performance.measure.bind(performance, M, n)) : performance.measure(M, n));
        }
        Ha = -1.1, Zi = 0, um = rm = null, of = -1.1, ts = qo, qo = -1.1, ko = Tt();
      }
      if ((t & 4194048) !== 0 && (yt = _r, o = 0 <= ci && ci < ui ? ui : ci, n = 0 <= Xn && Xn < ui ? ui : Xn, a = 0 <= Pi && Pi < ui ? ui : Pi, s = 0 <= a ? a : 0 <= n ? n : jt, 0 <= lf ? (ea(256), i0(lf, s, t, yt)) : sf & 4194048, N = a, f = Go, p = 0 < Ji, g = cm === af, s = jt, a = _r, u = gS, M = vS, at && (He = "Transition", 0 < n ? n > s && (n = s) : n = s, 0 < o ? o > n && (o = n) : o = n, 0 < N ? N > o && (N = o) : N = o, o > N && f !== null && (D = p ? "secondary-light" : "warning", a ? a.run(console.timeStamp.bind(console, p ? "Consecutive" : "Event: " + f, N, o, He, Be, D)) : console.timeStamp(p ? "Consecutive" : "Event: " + f, N, o, He, Be, D)), n > o && (a ? a.run(console.timeStamp.bind(console, "Action", o, n, He, Be, "primary-dark")) : console.timeStamp("Action", o, n, He, Be, "primary-dark")), s > n && (o = g ? "Promise Resolved" : 5 < s - n ? "Update Blocked" : "Update", N = [], M != null && N.push(["Component name", M]), u != null && N.push(["Method name", u]), n = { start: n, end: s, detail: { devtools: { properties: N, track: He, trackGroup: Be, color: "primary-light" } } }, a ? a.run(performance.measure.bind(performance, o, n)) : performance.measure(o, n))), Xn = ci = -1.1, cm = 0, lf = -1.1, Ji = Pi, Pi = -1.1, ui = Tt()), (t & 62914560) !== 0 && (sf & 62914560) !== 0 && (ea(4194304), Nd(bS, jt)), (t & 2080374784) !== 0 && (sf & 2080374784) !== 0 && (ea(268435456), Nd(SS, jt)), n = e.timeoutHandle, n !== il && (e.timeoutHandle = il, PC(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), ra = 0, Ph(), We = e, Ne = n = Pa(e.current, null), Oe = t, Je = mn, Nn = null, Ii = false, hs = Ti(e, t), Om = false, ft = mi, Wo = yn = Mm = eo = Wi = 0, sn = Ir = null, Af = false, (t & 8) !== 0 && (t |= t & 32), a = e.entangledLanes, a !== 0) for (e = e.entanglements, a &= t; 0 < a; ) o = 31 - Wt(a), s = 1 << o, t |= e[o], a &= ~s;
      return ka = t, Yu(), e = fS(), 1e3 < e - cS && (j.recentlyCreatedOwnerStacks = 0, cS = e), oa.discardPendingWarnings(), n;
    }
    function ob(e, t) {
      Se = null, j.H = Qr, j.getCurrentStack = null, za = false, Rn = null, t === as || t === ff ? (t = R0(), Je = Kr) : t === pm ? (t = R0(), Je = yT) : Je = t === xm ? Cm : t !== null && typeof t == "object" && typeof t.then == "function" ? Fr : Tf, Nn = t;
      var n = Ne;
      n === null ? (ft = Jr, yc(e, bn(t, e.current))) : n.mode & we && Qd(n);
    }
    function lb() {
      var e = Cn.current;
      return e === null ? true : (Oe & 4194048) === Oe ? $n === null : (Oe & 62914560) === Oe || (Oe & 536870912) !== 0 ? e === $n : false;
    }
    function sb() {
      var e = j.H;
      return j.H = Qr, e === null ? Qr : e;
    }
    function rb() {
      var e = j.A;
      return j.A = VC, e;
    }
    function xc(e) {
      yt === null && (yt = e._debugTask == null ? null : e._debugTask);
    }
    function Dc() {
      ft = Fi, Ii || (Oe & 4194048) !== Oe && Cn.current !== null || (hs = true), (Wi & 134217727) === 0 && (eo & 134217727) === 0 || We === null || Vi(We, Oe, yn, false);
    }
    function Jh(e, t, n) {
      var a = qe;
      qe |= Mt;
      var o = sb(), s = rb();
      if (We !== e || Oe !== t) {
        if (ja) {
          var u = e.memoizedUpdaters;
          0 < u.size && (lr(e, Oe), u.clear()), yl(e, t);
        }
        Wr = null, _l(e, t);
      }
      t = false, u = ft;
      e: do
        try {
          if (Je !== mn && Ne !== null) {
            var f = Ne, p = Nn;
            switch (Je) {
              case Cm:
                Ph(), u = Sf;
                break e;
              case Kr:
              case Fo:
              case Io:
              case Fr:
                Cn.current === null && (t = true);
                var g = Je;
                if (Je = mn, Nn = null, zl(e, f, p, g), n && hs) {
                  u = mi;
                  break e;
                }
                break;
              default:
                g = Je, Je = mn, Nn = null, zl(e, f, p, g);
            }
          }
          ub(), u = ft;
          break;
        } catch (M) {
          ob(e, M);
        }
      while (true);
      return t && e.shellSuspendCounter++, $u(), qe = a, j.H = o, j.A = s, Ne === null && (We = null, Oe = 0, Yu()), u;
    }
    function ub() {
      for (; Ne !== null; ) cb(Ne);
    }
    function pR(e, t) {
      var n = qe;
      qe |= Mt;
      var a = sb(), o = rb();
      if (We !== e || Oe !== t) {
        if (ja) {
          var s = e.memoizedUpdaters;
          0 < s.size && (lr(e, Oe), s.clear()), yl(e, t);
        }
        Wr = null, Df = Vt() + bT, _l(e, t);
      } else hs = Ti(e, t);
      e: do
        try {
          if (Je !== mn && Ne !== null) t: switch (t = Ne, s = Nn, Je) {
            case Tf:
              Je = mn, Nn = null, zl(e, t, s, Tf);
              break;
            case Fo:
            case Io:
              if (x0(s)) {
                Je = mn, Nn = null, fb(t);
                break;
              }
              t = function() {
                Je !== Fo && Je !== Io || We !== e || (Je = Ef), Oa(e);
              }, s.then(t, t);
              break e;
            case Kr:
              Je = Ef;
              break e;
            case yT:
              Je = wm;
              break e;
            case Ef:
              x0(s) ? (Je = mn, Nn = null, fb(t)) : (Je = mn, Nn = null, zl(e, t, s, Ef));
              break;
            case wm:
              var u = null;
              switch (Ne.tag) {
                case 26:
                  u = Ne.memoizedState;
                case 5:
                case 27:
                  var f = Ne;
                  if (u ? a1(u) : f.stateNode.complete) {
                    Je = mn, Nn = null;
                    var p = f.sibling;
                    if (p !== null) Ne = p;
                    else {
                      var g = f.return;
                      g !== null ? (Ne = g, Rc(g)) : Ne = null;
                    }
                    break t;
                  }
                  break;
                default:
                  console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.");
              }
              Je = mn, Nn = null, zl(e, t, s, wm);
              break;
            case Fr:
              Je = mn, Nn = null, zl(e, t, s, Fr);
              break;
            case Cm:
              Ph(), ft = Sf;
              break e;
            default:
              throw Error("Unexpected SuspendedReason. This is a bug in React.");
          }
          j.actQueue !== null ? ub() : mR();
          break;
        } catch (M) {
          ob(e, M);
        }
      while (true);
      return $u(), j.H = a, j.A = o, qe = n, Ne !== null ? mi : (We = null, Oe = 0, Yu(), ft);
    }
    function mR() {
      for (; Ne !== null && !pw(); ) cb(Ne);
    }
    function cb(e) {
      var t = e.alternate;
      (e.mode & we) !== ve ? ($d(e), t = te(e, Hh, t, e, ka), Qd(e)) : t = te(e, Hh, t, e, ka), e.memoizedProps = e.pendingProps, t === null ? Rc(e) : Ne = t;
    }
    function fb(e) {
      var t = te(e, yR, e);
      e.memoizedProps = e.pendingProps, t === null ? Rc(e) : Ne = t;
    }
    function yR(e) {
      var t = e.alternate, n = (e.mode & we) !== ve;
      switch (n && $d(e), e.tag) {
        case 15:
        case 0:
          t = Ev(t, e, e.pendingProps, e.type, void 0, Oe);
          break;
        case 11:
          t = Ev(t, e, e.pendingProps, e.type.render, e.ref, Oe);
          break;
        case 5:
          oh(e);
        default:
          Ov(t, e), e = Ne = c0(e, ka), t = Hh(t, e, ka);
      }
      return n && Qd(e), t;
    }
    function zl(e, t, n, a) {
      $u(), oh(t), is = null, qr = 0;
      var o = t.return;
      try {
        if (eR(e, o, t, n, Oe)) {
          ft = Jr, yc(e, bn(n, e.current)), Ne = null;
          return;
        }
      } catch (s) {
        if (o !== null) throw Ne = o, s;
        ft = Jr, yc(e, bn(n, e.current)), Ne = null;
        return;
      }
      t.flags & 32768 ? (je || a === Tf ? e = true : hs || (Oe & 536870912) !== 0 ? e = false : (Ii = e = true, (a === Fo || a === Io || a === Kr || a === Fr) && (a = Cn.current, a !== null && a.tag === 13 && (a.flags |= 16384))), db(t, e)) : Rc(t);
    }
    function Rc(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          db(t, Ii);
          return;
        }
        var n = t.alternate;
        if (e = t.return, $d(t), n = te(t, aR, n, t, ka), (t.mode & we) !== ve && b0(t), n !== null) {
          Ne = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          Ne = t;
          return;
        }
        Ne = t = e;
      } while (t !== null);
      ft === mi && (ft = mT);
    }
    function db(e, t) {
      do {
        var n = iR(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767, Ne = n;
          return;
        }
        if ((e.mode & we) !== ve) {
          b0(e), n = e.actualDuration;
          for (var a = e.child; a !== null; ) n += a.actualDuration, a = a.sibling;
          e.actualDuration = n;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          Ne = e;
          return;
        }
        Ne = e = n;
      } while (e !== null);
      ft = Sf, Ne = null;
    }
    function Kh(e, t, n, a, o, s, u, f, p, g, M, N, D, z) {
      e.cancelPendingCommit = null;
      do
        or();
      while (Rt !== no);
      if (oa.flushLegacyContextWarning(), oa.flushPendingUnsafeLifecycleWarnings(), (qe & (Mt | Mn)) !== Bt) throw Error("Should not already be working.");
      if (ea(n), g === Ko ? Md(D, z, n, yt) : a !== null ? kD(D, z, n, a, t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0, yt) : YD(D, z, n, yt), t !== null) {
        if (n === 0 && console.error("finishedLanes should not be empty during a commit. This is a bug in React."), t === e.current) throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
        if (s = t.lanes | t.childLanes, s |= am, Ou(e, n, s, u, f, p), e === We && (Ne = We = null, Oe = 0), ps = t, ao = e, ra = n, zm = s, jm = o, DT = a, Vm = z, RT = N, ua = Rf, wT = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, TR(Hl, function() {
          return ou = window.event, ua === Rf && (ua = _m), gb(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), ri = null, Qi = Tt(), N !== null && qD(z, Qi, N, yt), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = j.T, j.T = null, o = $e.p, $e.p = Bn, u = qe, qe |= Mn;
          try {
            cR(e, t, n);
          } finally {
            qe = u, $e.p = o, j.T = a;
          }
        }
        Rt = TT, hb(), pb(), mb();
      }
    }
    function hb() {
      if (Rt === TT) {
        Rt = no;
        var e = ao, t = ps, n = ra, a = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || a) {
          a = j.T, j.T = null;
          var o = $e.p;
          $e.p = Bn;
          var s = qe;
          qe |= Mn;
          try {
            fs = n, ds = e, Ju(), Xv(t, e), ds = fs = null, n = Qm;
            var u = e0(e.containerInfo), f = n.focusedElem, p = n.selectionRange;
            if (u !== f && f && f.ownerDocument && Wg(f.ownerDocument.documentElement, f)) {
              if (p !== null && wd(f)) {
                var g = p.start, M = p.end;
                if (M === void 0 && (M = g), "selectionStart" in f) f.selectionStart = g, f.selectionEnd = Math.min(M, f.value.length);
                else {
                  var N = f.ownerDocument || document, D = N && N.defaultView || window;
                  if (D.getSelection) {
                    var z = D.getSelection(), J = f.textContent.length, I = Math.min(p.start, J), tt = p.end === void 0 ? I : Math.min(p.end, J);
                    !z.extend && I > tt && (u = tt, tt = I, I = u);
                    var Le = Ig(f, I), x = Ig(f, tt);
                    if (Le && x && (z.rangeCount !== 1 || z.anchorNode !== Le.node || z.anchorOffset !== Le.offset || z.focusNode !== x.node || z.focusOffset !== x.offset)) {
                      var R = N.createRange();
                      R.setStart(Le.node, Le.offset), z.removeAllRanges(), I > tt ? (z.addRange(R), z.extend(x.node, x.offset)) : (R.setEnd(x.node, x.offset), z.addRange(R));
                    }
                  }
                }
              }
              for (N = [], z = f; z = z.parentNode; ) z.nodeType === 1 && N.push({ element: z, left: z.scrollLeft, top: z.scrollTop });
              for (typeof f.focus == "function" && f.focus(), f = 0; f < N.length; f++) {
                var C = N[f];
                C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
              }
            }
            qf = !!$m, Qm = $m = null;
          } finally {
            qe = s, $e.p = o, j.T = a;
          }
        }
        e.current = t, Rt = ET;
      }
    }
    function pb() {
      if (Rt === ET) {
        Rt = no;
        var e = wT;
        if (e !== null) {
          Qi = Tt();
          var t = si, n = Qi;
          !at || n <= t || console.timeStamp(e, t, n, He, Be, "secondary-light");
        }
        e = ao, t = ps, n = ra;
        var a = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || a) {
          a = j.T, j.T = null;
          var o = $e.p;
          $e.p = Bn;
          var s = qe;
          qe |= Mn;
          try {
            fs = n, ds = e, Ju(), Hv(e, t.alternate, t), ds = fs = null;
          } finally {
            qe = s, $e.p = o, j.T = a;
          }
        }
        e = Vm, t = RT, si = Tt(), e = t === null ? e : Qi, t = si, n = ua === Nm, a = yt, ri !== null ? o0(e, t, ri, false, a) : !at || t <= e || (a ? a.run(console.timeStamp.bind(console, n ? "Commit Interrupted View Transition" : "Commit", e, t, He, Be, n ? "error" : "secondary-dark")) : console.timeStamp(n ? "Commit Interrupted View Transition" : "Commit", e, t, He, Be, n ? "error" : "secondary-dark")), Rt = AT;
      }
    }
    function mb() {
      if (Rt === xT || Rt === AT) {
        if (Rt === xT) {
          var e = si;
          si = Tt();
          var t = si, n = ua === Nm;
          !at || t <= e || console.timeStamp(n ? "Interrupted View Transition" : "Starting Animation", e, t, He, Be, n ? " error" : "secondary-light"), ua !== Nm && (ua = ST);
        }
        Rt = no, mw(), e = ao;
        var a = ps;
        t = ra, n = DT;
        var o = a.actualDuration !== 0 || (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0;
        o ? Rt = wf : (Rt = no, ps = ao = null, yb(e, e.pendingLanes), el = 0, tu = null);
        var s = e.pendingLanes;
        if (s === 0 && (to = null), o || Tb(e), s = gl(t), a = a.stateNode, Pt && typeof Pt.onCommitFiberRoot == "function") try {
          var u = (a.current.flags & 128) === 128;
          switch (s) {
            case Bn:
              var f = jp;
              break;
            case Ua:
              f = Up;
              break;
            case ni:
              f = Hl;
              break;
            case Xc:
              f = Bp;
              break;
            default:
              f = Hl;
          }
          Pt.onCommitFiberRoot(Yl, a, f, u);
        } catch (N) {
          Va || (Va = true, console.error("React instrumentation encountered an error: %o", N));
        }
        if (ja && e.memoizedUpdaters.clear(), dR(), n !== null) {
          u = j.T, f = $e.p, $e.p = Bn, j.T = null;
          try {
            var p = e.onRecoverableError;
            for (a = 0; a < n.length; a++) {
              var g = n[a], M = gR(g.stack);
              te(g.source, p, g.value, M);
            }
          } finally {
            j.T = u, $e.p = f;
          }
        }
        (ra & 3) !== 0 && or(), Oa(e), s = e.pendingLanes, (t & 261930) !== 0 && (s & 42) !== 0 ? (uf = true, e === Um ? eu++ : (eu = 0, Um = e)) : eu = 0, o || Uo(t, si), sr(0);
      }
    }
    function gR(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", { get: function() {
        console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.');
      } }), e;
    }
    function yb(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Gs(t)));
    }
    function or() {
      return hb(), pb(), mb(), gb();
    }
    function gb() {
      if (Rt !== wf) return false;
      var e = ao, t = zm;
      zm = 0;
      var n = gl(ra), a = ni > n ? ni : n;
      n = j.T;
      var o = $e.p;
      try {
        $e.p = a, j.T = null;
        var s = jm;
        jm = null, a = ao;
        var u = ra;
        if (Rt = no, ps = ao = null, ra = 0, (qe & (Mt | Mn)) !== Bt) throw Error("Cannot flush passive effects while already rendering.");
        ea(u), Bm = true, Cf = false;
        var f = 0;
        if (ri = null, f = Vt(), ua === ST) Nd(si, f, wC);
        else {
          var p = si, g = f, M = ua === _m;
          !at || g <= p || (yt ? yt.run(console.timeStamp.bind(console, M ? "Waiting for Paint" : "Waiting", p, g, He, Be, "secondary-light")) : console.timeStamp(M ? "Waiting for Paint" : "Waiting", p, g, He, Be, "secondary-light"));
        }
        p = qe, qe |= Mn;
        var N = a.current;
        Ju(), Iv(N);
        var D = a.current;
        N = Vm, Ju(), Pv(a, D, u, s, N), Tb(a), qe = p;
        var z = Vt();
        if (D = f, N = yt, ri !== null ? o0(D, z, ri, true, N) : !at || z <= D || (N ? N.run(console.timeStamp.bind(console, "Remaining Effects", D, z, He, Be, "secondary-dark")) : console.timeStamp("Remaining Effects", D, z, He, Be, "secondary-dark")), Uo(u, z), sr(0, false), Cf ? a === tu ? el++ : (el = 0, tu = a) : el = 0, Cf = Bm = false, Pt && typeof Pt.onPostCommitFiberRoot == "function") try {
          Pt.onPostCommitFiberRoot(Yl, a);
        } catch (I) {
          Va || (Va = true, console.error("React instrumentation encountered an error: %o", I));
        }
        var J = a.current.stateNode;
        return J.effectDuration = 0, J.passiveEffectDuration = 0, true;
      } finally {
        $e.p = o, j.T = n, yb(e, t);
      }
    }
    function vb(e, t, n) {
      t = bn(n, t), S0(t), t = Ch(e.stateNode, t, 2), e = Mi(e, t, 2), e !== null && (Ei(e, 2), Oa(e));
    }
    function Xe(e, t, n) {
      if (ms = false, e.tag === 3) vb(e, e, n);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            vb(t, e, n);
            return;
          }
          if (t.tag === 1) {
            var a = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (to === null || !to.has(a))) {
              e = bn(n, e), S0(e), n = Oh(2), a = Mi(t, n, 2), a !== null && (Mh(n, a, t, e), Ei(a, 2), Oa(a));
              return;
            }
          }
          t = t.return;
        }
        console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
      }
    }
    function Fh(e, t, n) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new UC();
        var o = /* @__PURE__ */ new Set();
        a.set(t, o);
      } else o = a.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(t, o));
      o.has(n) || (Om = true, o.add(n), a = vR.bind(null, e, t, n), ja && lr(e, n), t.then(a, a));
    }
    function vR(e, t, n) {
      var a = e.pingCache;
      a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, (n & 127) !== 0 ? 0 > Ha && (ko = Ha = Tt(), Mr = nf("Promise Resolved"), Zi = af) : (n & 4194048) !== 0 && 0 > Xn && (ui = Xn = Tt(), _r = nf("Promise Resolved"), cm = af), tb() && j.actQueue === null && console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`), We === e && (Oe & n) === n && (ft === Fi || ft === bf && (Oe & 62914560) === Oe && Vt() - xf < vT ? (qe & Mt) === Bt && _l(e, 0) : Mm |= n, Wo === Oe && (Wo = 0)), Oa(e);
    }
    function bb(e, t) {
      t === 0 && (t = Ns()), e = Zt(e, t), e !== null && (Ei(e, t), Oa(e));
    }
    function bR(e) {
      var t = e.memoizedState, n = 0;
      t !== null && (n = t.retryLane), bb(e, n);
    }
    function SR(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var a = e.stateNode, o = e.memoizedState;
          o !== null && (n = o.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        case 22:
          a = e.stateNode._retryCache;
          break;
        default:
          throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), bb(e, n);
    }
    function Ih(e, t, n) {
      if ((t.subtreeFlags & 67117056) !== 0) for (t = t.child; t !== null; ) {
        var a = e, o = t, s = o.type === Lc;
        s = n || s, o.tag !== 22 ? o.flags & 67108864 ? s && te(o, Sb, a, o) : Ih(a, o, s) : o.memoizedState === null && (s && o.flags & 8192 ? te(o, Sb, a, o) : o.subtreeFlags & 67108864 && te(o, Ih, a, o, s)), t = t.sibling;
      }
    }
    function Sb(e, t) {
      oe(true);
      try {
        Qv(t), Wv(t), Zv(e, t.alternate, t, false), Jv(e, t, 0, null, false, 0);
      } finally {
        oe(false);
      }
    }
    function Tb(e) {
      var t = true;
      e.current.mode & (Jt | ia) || (t = false), Ih(e, e.current, t);
    }
    function Eb(e) {
      if ((qe & Mt) === Bt) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = k(e) || "ReactComponent", Of !== null) {
            if (Of.has(t)) return;
            Of.add(t);
          } else Of = /* @__PURE__ */ new Set([t]);
          te(e, function() {
            console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.");
          });
        }
      }
    }
    function lr(e, t) {
      ja && e.memoizedUpdaters.forEach(function(n) {
        To(e, n, t);
      });
    }
    function TR(e, t) {
      var n = j.actQueue;
      return n !== null ? (n.push(t), HC) : Vp(e, t);
    }
    function ER(e) {
      tb() && j.actQueue === null && te(e, function() {
        console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`, k(e));
      });
    }
    function Oa(e) {
      e !== ys && e.next === null && (ys === null ? Mf = ys = e : ys = ys.next = e), Nf = true, j.actQueue !== null ? Hm || (Hm = true, Rb()) : Lm || (Lm = true, Rb());
    }
    function sr(e, t) {
      if (!Ym && Nf) {
        Ym = true;
        do
          for (var n = false, a = Mf; a !== null; ) {
            if (e !== 0) {
              var o = a.pendingLanes;
              if (o === 0) var s = 0;
              else {
                var u = a.suspendedLanes, f = a.pingedLanes;
                s = (1 << 31 - Wt(42 | e) + 1) - 1, s &= o & ~(u & ~f), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
              }
              s !== 0 && (n = true, Db(a, s));
            } else s = Oe, s = bo(a, a === We ? s : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== il), (s & 3) === 0 || Ti(a, s) || (n = true, Db(a, s));
            a = a.next;
          }
        while (n);
        Ym = false;
      }
    }
    function AR() {
      ou = window.event, Wh();
    }
    function Wh() {
      Nf = Hm = Lm = false;
      var e = 0;
      io !== 0 && MR() && (e = io);
      for (var t = Vt(), n = null, a = Mf; a !== null; ) {
        var o = a.next, s = Ab(a, t);
        s === 0 ? (a.next = null, n === null ? Mf = o : n.next = o, o === null && (ys = n)) : (n = a, (e !== 0 || (s & 3) !== 0) && (Nf = true)), a = o;
      }
      Rt !== no && Rt !== wf || sr(e), io !== 0 && (io = 0);
    }
    function Ab(e, t) {
      for (var n = e.suspendedLanes, a = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s; ) {
        var u = 31 - Wt(s), f = 1 << u, p = o[u];
        p === -1 ? ((f & n) === 0 || (f & a) !== 0) && (o[u] = Cu(f, t)) : p <= t && (e.expiredLanes |= f), s &= ~f;
      }
      if (t = We, n = Oe, n = bo(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== il), a = e.callbackNode, n === 0 || e === t && (Je === Fo || Je === Io) || e.cancelPendingCommit !== null) return a !== null && ep(a), e.callbackNode = null, e.callbackPriority = 0;
      if ((n & 3) === 0 || Ti(e, n)) {
        if (t = n & -n, t !== e.callbackPriority || j.actQueue !== null && a !== km) ep(a);
        else return t;
        switch (gl(n)) {
          case Bn:
          case Ua:
            n = Up;
            break;
          case ni:
            n = Hl;
            break;
          case Xc:
            n = Bp;
            break;
          default:
            n = Hl;
        }
        return a = xb.bind(null, e), j.actQueue !== null ? (j.actQueue.push(a), n = km) : n = Vp(n, a), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return a !== null && ep(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function xb(e, t) {
      if (uf = rf = false, ou = window.event, Rt !== no && Rt !== wf) return e.callbackNode = null, e.callbackPriority = 0, null;
      var n = e.callbackNode;
      if (ua === Rf && (ua = _m), or() && e.callbackNode !== n) return null;
      var a = Oe;
      return a = bo(e, e === We ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== il), a === 0 ? null : (ab(e, a, t), Ab(e, Vt()), e.callbackNode != null && e.callbackNode === n ? xb.bind(null, e) : null);
    }
    function Db(e, t) {
      if (or()) return null;
      rf = uf, uf = false, ab(e, t, true);
    }
    function ep(e) {
      e !== km && e !== null && hw(e);
    }
    function Rb() {
      j.actQueue !== null && j.actQueue.push(function() {
        return Wh(), null;
      }), JC(function() {
        (qe & (Mt | Mn)) !== Bt ? Vp(jp, AR) : Wh();
      });
    }
    function tp() {
      if (io === 0) {
        var e = Xo;
        e === 0 && (e = kc, kc <<= 1, (kc & 261888) === 0 && (kc = 256)), io = e;
      }
      return io;
    }
    function wb(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Ze(e, "action"), Hs("" + e));
    }
    function Cb(e, t) {
      var n = t.ownerDocument.createElement("input");
      return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
    }
    function xR(e, t, n, a, o) {
      if (t === "submit" && n && n.stateNode === o) {
        var s = wb((o[en] || null).action), u = a.submitter;
        u && (t = (t = u[en] || null) ? wb(t.formAction) : u.getAttribute("formAction"), t !== null && (s = t, u = null));
        var f = new Jc("action", "action", null, a, o);
        e.push({ event: f, listeners: [{ instance: null, listener: function() {
          if (a.defaultPrevented) {
            if (io !== 0) {
              var p = u ? Cb(o, u) : new FormData(o), g = { pending: true, data: p, method: o.method, action: s };
              Object.freeze(g), Th(n, g, null, p);
            }
          } else typeof s == "function" && (f.preventDefault(), p = u ? Cb(o, u) : new FormData(o), g = { pending: true, data: p, method: o.method, action: s }, Object.freeze(g), Th(n, g, s, p));
        }, currentTarget: o }] });
      }
    }
    function wc(e, t, n) {
      e.currentTarget = n;
      try {
        t(e);
      } catch (a) {
        Wp(a);
      }
      e.currentTarget = null;
    }
    function Ob(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        e: {
          var o = void 0, s = a.event;
          if (a = a.listeners, t) for (var u = a.length - 1; 0 <= u; u--) {
            var f = a[u], p = f.instance, g = f.currentTarget;
            if (f = f.listener, p !== o && s.isPropagationStopped()) break e;
            p !== null ? te(p, wc, s, f, g) : wc(s, f, g), o = p;
          }
          else for (u = 0; u < a.length; u++) {
            if (f = a[u], p = f.instance, g = f.currentTarget, f = f.listener, p !== o && s.isPropagationStopped()) break e;
            p !== null ? te(p, wc, s, f, g) : wc(s, f, g), o = p;
          }
        }
      }
    }
    function Ue(e, t) {
      qm.has(e) || console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var n = t[Lp];
      n === void 0 && (n = t[Lp] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      n.has(a) || (Mb(t, e, 2, false), n.add(a));
    }
    function np(e, t, n) {
      qm.has(e) && !t && console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= 4), Mb(n, e, a, t);
    }
    function ap(e) {
      if (!e[_f]) {
        e[_f] = true, R1.forEach(function(n) {
          n !== "selectionchange" && (qm.has(n) || np(n, false, e), np(n, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_f] || (t[_f] = true, np("selectionchange", false, t));
      }
    }
    function Mb(e, t, n, a) {
      switch (u1(t)) {
        case Bn:
          var o = iw;
          break;
        case Ua:
          o = ow;
          break;
        default:
          o = bp;
      }
      n = o.bind(null, t, n, e), o = void 0, !Gp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), a ? o !== void 0 ? e.addEventListener(t, n, { capture: true, passive: o }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, false);
    }
    function ip(e, t, n, a, o) {
      var s = a;
      if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var f = a.stateNode.containerInfo;
          if (f === o) break;
          if (u === 4) for (u = a.return; u !== null; ) {
            var p = u.tag;
            if ((p === 3 || p === 4) && u.stateNode.containerInfo === o) return;
            u = u.return;
          }
          for (; f !== null; ) {
            if (u = G(f), u === null) return;
            if (p = u.tag, p === 5 || p === 6 || p === 26 || p === 27) {
              a = s = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
      kg(function() {
        var g = s, M = Dd(n), N = [];
        e: {
          var D = uS.get(e);
          if (D !== void 0) {
            var z = Jc, J = e;
            switch (e) {
              case "keypress":
                if (ju(n) === 0) break e;
              case "keydown":
              case "keyup":
                z = eC;
                break;
              case "focusin":
                J = "focus", z = Zp;
                break;
              case "focusout":
                J = "blur", z = Zp;
                break;
              case "beforeblur":
              case "afterblur":
                z = Zp;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                z = J1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = qw;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = aC;
                break;
              case oS:
              case lS:
              case sS:
                z = $w;
                break;
              case rS:
                z = oC;
                break;
              case "scroll":
              case "scrollend":
                z = Yw;
                break;
              case "wheel":
                z = sC;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = Zw;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = F1;
                break;
              case "toggle":
              case "beforetoggle":
                z = uC;
            }
            var I = (t & 4) !== 0, tt = !I && (e === "scroll" || e === "scrollend"), Le = I ? D !== null ? D + "Capture" : null : D;
            I = [];
            for (var x = g, R; x !== null; ) {
              var C = x;
              if (R = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || R === null || Le === null || (C = Ys(x, Le), C != null && I.push(rr(x, C, R))), tt) break;
              x = x.return;
            }
            0 < I.length && (D = new z(D, J, null, n, M), N.push({ event: D, listeners: I }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (D = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", D && n !== br && (J = n.relatedTarget || n.fromElement) && (G(J) || J[Yi])) break e;
            if ((z || D) && (D = M.window === M ? M : (D = M.ownerDocument) ? D.defaultView || D.parentWindow : window, z ? (J = n.relatedTarget || n.toElement, z = g, J = J ? G(J) : null, J !== null && (tt = Y(J), I = J.tag, J !== tt || I !== 5 && I !== 27 && I !== 6) && (J = null)) : (z = null, J = g), z !== J)) {
              if (I = J1, C = "onMouseLeave", Le = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (I = F1, C = "onPointerLeave", Le = "onPointerEnter", x = "pointer"), tt = z == null ? D : le(z), R = J == null ? D : le(J), D = new I(C, x + "leave", z, n, M), D.target = tt, D.relatedTarget = R, C = null, G(M) === g && (I = new I(Le, x + "enter", J, n, M), I.target = R, I.relatedTarget = tt, C = I), tt = C, z && J) t: {
                for (I = DR, Le = z, x = J, R = 0, C = Le; C; C = I(C)) R++;
                C = 0;
                for (var B = x; B; B = I(B)) C++;
                for (; 0 < R - C; ) Le = I(Le), R--;
                for (; 0 < C - R; ) x = I(x), C--;
                for (; R--; ) {
                  if (Le === x || x !== null && Le === x.alternate) {
                    I = Le;
                    break t;
                  }
                  Le = I(Le), x = I(x);
                }
                I = null;
              }
              else I = null;
              z !== null && Nb(N, D, z, I, false), J !== null && tt !== null && Nb(N, tt, J, I, true);
            }
          }
          e: {
            if (D = g ? le(g) : window, z = D.nodeName && D.nodeName.toLowerCase(), z === "select" || z === "input" && D.type === "file") var F = Pg;
            else if (Qg(D)) if (aS) F = BD;
            else {
              F = jD;
              var Te = VD;
            }
            else z = D.nodeName, !z || z.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? g && Ls(g.elementType) && (F = Pg) : F = UD;
            if (F && (F = F(e, g))) {
              Zg(N, F, n, M);
              break e;
            }
            Te && Te(e, D, g), e === "focusout" && g && D.type === "number" && g.memoizedProps.value != null && bd(D, "number", D.value);
          }
          switch (Te = g ? le(g) : window, e) {
            case "focusin":
              (Qg(Te) || Te.contentEditable === "true") && (Zl = Te, Jp = g, Rr = null);
              break;
            case "focusout":
              Rr = Jp = Zl = null;
              break;
            case "mousedown":
              Kp = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Kp = false, t0(N, n, M);
              break;
            case "selectionchange":
              if (hC) break;
            case "keydown":
            case "keyup":
              t0(N, n, M);
          }
          var fe;
          if (Pp) e: {
            switch (e) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
          else Ql ? Xg(e, n) && (se = "onCompositionEnd") : e === "keydown" && n.keyCode === I1 && (se = "onCompositionStart");
          se && (W1 && n.locale !== "ko" && (Ql || se !== "onCompositionStart" ? se === "onCompositionEnd" && Ql && (fe = qg()) : (ki = M, Xp = "value" in ki ? ki.value : ki.textContent, Ql = true)), Te = Cc(g, se), 0 < Te.length && (se = new K1(se, e, null, n, M), N.push({ event: se, listeners: Te }), fe ? se.data = fe : (fe = $g(n), fe !== null && (se.data = fe)))), (fe = fC ? MD(e, n) : ND(e, n)) && (se = Cc(g, "onBeforeInput"), 0 < se.length && (Te = new Jw("onBeforeInput", "beforeinput", null, n, M), N.push({ event: Te, listeners: se }), Te.data = fe)), xR(N, e, g, n, M);
        }
        Ob(N, t);
      });
    }
    function rr(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Cc(e, t) {
      for (var n = t + "Capture", a = []; e !== null; ) {
        var o = e, s = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || s === null || (o = Ys(e, n), o != null && a.unshift(rr(e, o, s)), o = Ys(e, t), o != null && a.push(rr(e, o, s))), e.tag === 3) return a;
        e = e.return;
      }
      return [];
    }
    function DR(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Nb(e, t, n, a, o) {
      for (var s = t._reactName, u = []; n !== null && n !== a; ) {
        var f = n, p = f.alternate, g = f.stateNode;
        if (f = f.tag, p !== null && p === a) break;
        f !== 5 && f !== 26 && f !== 27 || g === null || (p = g, o ? (g = Ys(n, s), g != null && u.unshift(rr(n, g, p))) : o || (g = Ys(n, s), g != null && u.push(rr(n, g, p)))), n = n.return;
      }
      u.length !== 0 && e.push({ event: t, listeners: u });
    }
    function op(e, t) {
      RD(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Z1 || (Z1 = true, e === "select" && t.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      var n = { registrationNameDependencies: Bo, possibleRegistrationNames: Hp };
      Ls(e) || typeof t.is == "string" || CD(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
    }
    function zt(e, t, n, a) {
      t !== n && (n = ji(n), ji(t) !== n && (a[e] = t));
    }
    function RR(e, t, n) {
      t.forEach(function(a) {
        n[Vb(a)] = a === "style" ? sp(e) : e.getAttribute(a);
      });
    }
    function Ma(e, t) {
      t === false ? console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }
    function _b(e, t) {
      return e = e.namespaceURI === Qc || e.namespaceURI === ql ? e.ownerDocument.createElementNS(e.namespaceURI, e.tagName) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function ji(e) {
      return vo(e) && (console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", go(e)), Si(e)), (typeof e == "string" ? e : "" + e).replace(YC, `
`).replace(kC, "");
    }
    function zb(e, t) {
      return t = ji(t), ji(e) === t;
    }
    function Fe(e, t, n, a, o, s) {
      switch (n) {
        case "children":
          typeof a == "string" ? (Vu(a, t, false), t === "body" || t === "textarea" && a === "" || Bs(e, a)) : (typeof a == "number" || typeof a == "bigint") && (Vu("" + a, t, false), t !== "body" && Bs(e, "" + a));
          break;
        case "className":
          Nu(e, "class", a);
          break;
        case "tabIndex":
          Nu(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Nu(e, n, a);
          break;
        case "style":
          Lg(e, a, s);
          break;
        case "data":
          if (t !== "object") {
            Nu(e, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || n !== "href")) {
            console.error(n === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', n, n), e.removeAttribute(n);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(n);
            break;
          }
          Ze(a, n), a = Hs("" + a), e.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if (a != null && (t === "form" ? n === "formAction" ? console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.") : typeof a == "function" && (o.encType == null && o.method == null || jf || (jf = true, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), o.target == null || Vf || (Vf = true, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))) : t === "input" || t === "button" ? n === "action" ? console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.") : t !== "input" || o.type === "submit" || o.type === "image" || zf ? t !== "button" || o.type == null || o.type === "submit" || zf ? typeof a == "function" && (o.name == null || _T || (_T = true, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')), o.formEncType == null && o.formMethod == null || jf || (jf = true, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), o.formTarget == null || Vf || (Vf = true, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))) : (zf = true, console.error('A button can only specify a formAction along with type="submit" or no type.')) : (zf = true, console.error('An input can only specify a formAction along with type="submit" or type="image".')) : console.error(n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>.")), typeof a == "function") {
            e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof s == "function" && (n === "formAction" ? (t !== "input" && Fe(e, t, "name", o.name, o, null), Fe(e, t, "formEncType", o.formEncType, o, null), Fe(e, t, "formMethod", o.formMethod, o, null), Fe(e, t, "formTarget", o.formTarget, o, null)) : (Fe(e, t, "encType", o.encType, o, null), Fe(e, t, "method", o.method, o, null), Fe(e, t, "target", o.target, o, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(n);
            break;
          }
          Ze(a, n), a = Hs("" + a), e.setAttribute(n, a);
          break;
        case "onClick":
          a != null && (typeof a != "function" && Ma(n, a), e.onclick = Za);
          break;
        case "onScroll":
          a != null && (typeof a != "function" && Ma(n, a), Ue("scroll", e));
          break;
        case "onScrollEnd":
          a != null && (typeof a != "function" && Ma(n, a), Ue("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
            if (n = a.__html, n != null) {
              if (o.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          e.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Ze(a, n), n = Hs("" + a), e.setAttributeNS(tl, "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? (Ze(a, n), e.setAttribute(n, "" + a)) : e.removeAttribute(n);
          break;
        case "inert":
          a !== "" || Uf[n] || (Uf[n] = true, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", n));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          a === true ? e.setAttribute(n, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? (Ze(a, n), e.setAttribute(n, a)) : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? (Ze(a, n), e.setAttribute(n, a)) : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : (Ze(a, n), e.setAttribute(n, a));
          break;
        case "popover":
          Ue("beforetoggle", e), Ue("toggle", e), vl(e, "popover", a);
          break;
        case "xlinkActuate":
          Qa(e, tl, "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Qa(e, tl, "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Qa(e, tl, "xlink:role", a);
          break;
        case "xlinkShow":
          Qa(e, tl, "xlink:show", a);
          break;
        case "xlinkTitle":
          Qa(e, tl, "xlink:title", a);
          break;
        case "xlinkType":
          Qa(e, tl, "xlink:type", a);
          break;
        case "xmlBase":
          Qa(e, Gm, "xml:base", a);
          break;
        case "xmlLang":
          Qa(e, Gm, "xml:lang", a);
          break;
        case "xmlSpace":
          Qa(e, Gm, "xml:space", a);
          break;
        case "is":
          s != null && console.error('Cannot update the "is" prop after it has been initialized.'), vl(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          zT || a == null || typeof a != "object" || (zT = true, console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.", a));
        default:
          !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N" ? (n = Hg(n), vl(e, n, a)) : Bo.hasOwnProperty(n) && a != null && typeof a != "function" && Ma(n, a);
      }
    }
    function lp(e, t, n, a, o, s) {
      switch (n) {
        case "style":
          Lg(e, a, s);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
            if (n = a.__html, n != null) {
              if (o.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          typeof a == "string" ? Bs(e, a) : (typeof a == "number" || typeof a == "bigint") && Bs(e, "" + a);
          break;
        case "onScroll":
          a != null && (typeof a != "function" && Ma(n, a), Ue("scroll", e));
          break;
        case "onScrollEnd":
          a != null && (typeof a != "function" && Ma(n, a), Ue("scrollend", e));
          break;
        case "onClick":
          a != null && (typeof a != "function" && Ma(n, a), e.onclick = Za);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Bo.hasOwnProperty(n)) a != null && typeof a != "function" && Ma(n, a);
          else e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), s = e[en] || null, s = s != null ? s[n] : null, typeof s == "function" && e.removeEventListener(t, s, o), typeof a == "function")) {
              typeof s != "function" && s !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, o);
              break e;
            }
            n in e ? e[n] = a : a === true ? e.setAttribute(n, "") : vl(e, n, a);
          }
      }
    }
    function Yt(e, t, n) {
      switch (op(t, n), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ue("error", e), Ue("load", e);
          var a = false, o = false, s;
          for (s in n) if (n.hasOwnProperty(s)) {
            var u = n[s];
            if (u != null) switch (s) {
              case "src":
                a = true;
                break;
              case "srcSet":
                o = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              default:
                Fe(e, t, s, u, n, null);
            }
          }
          o && Fe(e, t, "srcSet", n.srcSet, n, null), a && Fe(e, t, "src", n.src, n, null);
          return;
        case "input":
          Ft("input", n), Ue("invalid", e);
          var f = s = u = o = null, p = null, g = null;
          for (a in n) if (n.hasOwnProperty(a)) {
            var M = n[a];
            if (M != null) switch (a) {
              case "name":
                o = M;
                break;
              case "type":
                u = M;
                break;
              case "checked":
                p = M;
                break;
              case "defaultChecked":
                g = M;
                break;
              case "value":
                s = M;
                break;
              case "defaultValue":
                f = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                break;
              default:
                Fe(e, t, a, M, n, null);
            }
          }
          Eg(e, n), Ag(e, s, f, p, g, u, o, false);
          return;
        case "select":
          Ft("select", n), Ue("invalid", e), a = u = s = null;
          for (o in n) if (n.hasOwnProperty(o) && (f = n[o], f != null)) switch (o) {
            case "value":
              s = f;
              break;
            case "defaultValue":
              u = f;
              break;
            case "multiple":
              a = f;
            default:
              Fe(e, t, o, f, n, null);
          }
          Rg(e, n), t = s, n = u, e.multiple = !!a, t != null ? bl(e, !!a, t, false) : n != null && bl(e, !!a, n, true);
          return;
        case "textarea":
          Ft("textarea", n), Ue("invalid", e), s = o = a = null;
          for (u in n) if (n.hasOwnProperty(u) && (f = n[u], f != null)) switch (u) {
            case "value":
              a = f;
              break;
            case "defaultValue":
              o = f;
              break;
            case "children":
              s = f;
              break;
            case "dangerouslySetInnerHTML":
              if (f != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              break;
            default:
              Fe(e, t, u, f, n, null);
          }
          wg(e, n), Og(e, a, o, s);
          return;
        case "option":
          xg(e, n);
          for (p in n) if (n.hasOwnProperty(p) && (a = n[p], a != null)) switch (p) {
            case "selected":
              e.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              Fe(e, t, p, a, n, null);
          }
          return;
        case "dialog":
          Ue("beforetoggle", e), Ue("toggle", e), Ue("cancel", e), Ue("close", e);
          break;
        case "iframe":
        case "object":
          Ue("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < nu.length; a++) Ue(nu[a], e);
          break;
        case "image":
          Ue("error", e), Ue("load", e);
          break;
        case "details":
          Ue("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ue("error", e), Ue("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (g in n) if (n.hasOwnProperty(g) && (a = n[g], a != null)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              Fe(e, t, g, a, n, null);
          }
          return;
        default:
          if (Ls(t)) {
            for (M in n) n.hasOwnProperty(M) && (a = n[M], a !== void 0 && lp(e, t, M, a, n, void 0));
            return;
          }
      }
      for (f in n) n.hasOwnProperty(f) && (a = n[f], a != null && Fe(e, t, f, a, n, null));
    }
    function wR(e, t, n, a) {
      switch (op(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, s = null, u = null, f = null, p = null, g = null, M = null;
          for (z in n) {
            var N = n[z];
            if (n.hasOwnProperty(z) && N != null) switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                p = N;
              default:
                a.hasOwnProperty(z) || Fe(e, t, z, null, a, N);
            }
          }
          for (var D in a) {
            var z = a[D];
            if (N = n[D], a.hasOwnProperty(D) && (z != null || N != null)) switch (D) {
              case "type":
                s = z;
                break;
              case "name":
                o = z;
                break;
              case "checked":
                g = z;
                break;
              case "defaultChecked":
                M = z;
                break;
              case "value":
                u = z;
                break;
              case "defaultValue":
                f = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                break;
              default:
                z !== N && Fe(e, t, D, z, a, N);
            }
          }
          t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, a = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, t || !a || NT || (console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), NT = true), !t || a || MT || (console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), MT = true), vd(e, u, f, p, g, M, s, o);
          return;
        case "select":
          z = u = f = D = null;
          for (s in n) if (p = n[s], n.hasOwnProperty(s) && p != null) switch (s) {
            case "value":
              break;
            case "multiple":
              z = p;
            default:
              a.hasOwnProperty(s) || Fe(e, t, s, null, a, p);
          }
          for (o in a) if (s = a[o], p = n[o], a.hasOwnProperty(o) && (s != null || p != null)) switch (o) {
            case "value":
              D = s;
              break;
            case "defaultValue":
              f = s;
              break;
            case "multiple":
              u = s;
            default:
              s !== p && Fe(e, t, o, s, a, p);
          }
          a = f, t = u, n = z, D != null ? bl(e, !!t, D, false) : !!n != !!t && (a != null ? bl(e, !!t, a, true) : bl(e, !!t, t ? [] : "", false));
          return;
        case "textarea":
          z = D = null;
          for (f in n) if (o = n[f], n.hasOwnProperty(f) && o != null && !a.hasOwnProperty(f)) switch (f) {
            case "value":
              break;
            case "children":
              break;
            default:
              Fe(e, t, f, null, a, o);
          }
          for (u in a) if (o = a[u], s = n[u], a.hasOwnProperty(u) && (o != null || s != null)) switch (u) {
            case "value":
              D = o;
              break;
            case "defaultValue":
              z = o;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (o != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
              break;
            default:
              o !== s && Fe(e, t, u, o, a, s);
          }
          Cg(e, D, z);
          return;
        case "option":
          for (var J in n) if (D = n[J], n.hasOwnProperty(J) && D != null && !a.hasOwnProperty(J)) switch (J) {
            case "selected":
              e.selected = false;
              break;
            default:
              Fe(e, t, J, null, a, D);
          }
          for (p in a) if (D = a[p], z = n[p], a.hasOwnProperty(p) && D !== z && (D != null || z != null)) switch (p) {
            case "selected":
              e.selected = D && typeof D != "function" && typeof D != "symbol";
              break;
            default:
              Fe(e, t, p, D, a, z);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var I in n) D = n[I], n.hasOwnProperty(I) && D != null && !a.hasOwnProperty(I) && Fe(e, t, I, null, a, D);
          for (g in a) if (D = a[g], z = n[g], a.hasOwnProperty(g) && D !== z && (D != null || z != null)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (D != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
              break;
            default:
              Fe(e, t, g, D, a, z);
          }
          return;
        default:
          if (Ls(t)) {
            for (var tt in n) D = n[tt], n.hasOwnProperty(tt) && D !== void 0 && !a.hasOwnProperty(tt) && lp(e, t, tt, void 0, a, D);
            for (M in a) D = a[M], z = n[M], !a.hasOwnProperty(M) || D === z || D === void 0 && z === void 0 || lp(e, t, M, D, a, z);
            return;
          }
      }
      for (var Le in n) D = n[Le], n.hasOwnProperty(Le) && D != null && !a.hasOwnProperty(Le) && Fe(e, t, Le, null, a, D);
      for (N in a) D = a[N], z = n[N], !a.hasOwnProperty(N) || D === z || D == null && z == null || Fe(e, t, N, D, a, z);
    }
    function Vb(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function sp(e) {
      var t = {};
      e = e.style;
      for (var n = 0; n < e.length; n++) {
        var a = e[n];
        t[a] = e.getPropertyValue(a);
      }
      return t;
    }
    function jb(e, t, n) {
      if (t != null && typeof t != "object") console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      else {
        var a, o = a = "", s;
        for (s in t) if (t.hasOwnProperty(s)) {
          var u = t[s];
          u != null && typeof u != "boolean" && u !== "" && (s.indexOf("--") === 0 ? (Qt(u, s), a += o + s + ":" + ("" + u).trim()) : typeof u != "number" || u === 0 || $1.has(s) ? (Qt(u, s), a += o + s.replace(Y1, "-$1").toLowerCase().replace(k1, "-ms-") + ":" + ("" + u).trim()) : a += o + s.replace(Y1, "-$1").toLowerCase().replace(k1, "-ms-") + ":" + u + "px", o = ";");
        }
        a = a || null, t = e.getAttribute("style"), t !== a && (a = ji(a), ji(t) !== a && (n.style = sp(e)));
      }
    }
    function Un(e, t, n, a, o, s) {
      if (o.delete(n), e = e.getAttribute(n), e === null) switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          return;
      }
      else if (a != null) switch (typeof a) {
        case "function":
        case "symbol":
        case "boolean":
          break;
        default:
          if (Ze(a, t), e === "" + a) return;
      }
      zt(t, e, a, s);
    }
    function Ub(e, t, n, a, o, s) {
      if (o.delete(n), e = e.getAttribute(n), e === null) {
        switch (typeof a) {
          case "function":
          case "symbol":
            return;
        }
        if (!a) return;
      } else switch (typeof a) {
        case "function":
        case "symbol":
          break;
        default:
          if (a) return;
      }
      zt(t, e, a, s);
    }
    function rp(e, t, n, a, o, s) {
      if (o.delete(n), e = e.getAttribute(n), e === null) switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          return;
      }
      else if (a != null) switch (typeof a) {
        case "function":
        case "symbol":
          break;
        default:
          if (Ze(a, n), e === "" + a) return;
      }
      zt(t, e, a, s);
    }
    function Bb(e, t, n, a, o, s) {
      if (o.delete(n), e = e.getAttribute(n), e === null) switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          return;
        default:
          if (isNaN(a)) return;
      }
      else if (a != null) switch (typeof a) {
        case "function":
        case "symbol":
        case "boolean":
          break;
        default:
          if (!isNaN(a) && (Ze(a, t), e === "" + a)) return;
      }
      zt(t, e, a, s);
    }
    function up(e, t, n, a, o, s) {
      if (o.delete(n), e = e.getAttribute(n), e === null) switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          return;
      }
      else if (a != null) switch (typeof a) {
        case "function":
        case "symbol":
        case "boolean":
          break;
        default:
          if (Ze(a, t), n = Hs("" + a), e === n) return;
      }
      zt(t, e, a, s);
    }
    function Lb(e, t, n, a) {
      for (var o = {}, s = /* @__PURE__ */ new Set(), u = e.attributes, f = 0; f < u.length; f++) switch (u[f].name.toLowerCase()) {
        case "value":
          break;
        case "checked":
          break;
        case "selected":
          break;
        default:
          s.add(u[f].name);
      }
      if (Ls(t)) {
        for (var p in n) if (n.hasOwnProperty(p)) {
          var g = n[p];
          if (g != null) {
            if (Bo.hasOwnProperty(p)) typeof g != "function" && Ma(p, g);
            else if (n.suppressHydrationWarning !== true) switch (p) {
              case "children":
                typeof g != "string" && typeof g != "number" || zt("children", e.textContent, g, o);
                continue;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "defaultValue":
              case "defaultChecked":
              case "innerHTML":
              case "ref":
                continue;
              case "dangerouslySetInnerHTML":
                u = e.innerHTML, g = g ? g.__html : void 0, g != null && (g = _b(e, g), zt(p, u, g, o));
                continue;
              case "style":
                s.delete(p), jb(e, g, o);
                continue;
              case "offsetParent":
              case "offsetTop":
              case "offsetLeft":
              case "offsetWidth":
              case "offsetHeight":
              case "isContentEditable":
              case "outerText":
              case "outerHTML":
                s.delete(p.toLowerCase()), console.error("Assignment to read-only property will result in a no-op: `%s`", p);
                continue;
              case "className":
                s.delete("class"), u = Mu(e, "class", g), zt("className", u, g, o);
                continue;
              default:
                a.context === yi && t !== "svg" && t !== "math" ? s.delete(p.toLowerCase()) : s.delete(p), u = Mu(e, p, g), zt(p, u, g, o);
            }
          }
        }
      } else for (g in n) if (n.hasOwnProperty(g) && (p = n[g], p != null)) {
        if (Bo.hasOwnProperty(g)) typeof p != "function" && Ma(g, p);
        else if (n.suppressHydrationWarning !== true) switch (g) {
          case "children":
            typeof p != "string" && typeof p != "number" || zt("children", e.textContent, p, o);
            continue;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
          case "value":
          case "checked":
          case "selected":
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "ref":
            continue;
          case "dangerouslySetInnerHTML":
            u = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = _b(e, p), u !== p && (o[g] = { __html: u }));
            continue;
          case "className":
            Un(e, g, "class", p, s, o);
            continue;
          case "tabIndex":
            Un(e, g, "tabindex", p, s, o);
            continue;
          case "style":
            s.delete(g), jb(e, p, o);
            continue;
          case "multiple":
            s.delete(g), zt(g, e.multiple, p, o);
            continue;
          case "muted":
            s.delete(g), zt(g, e.muted, p, o);
            continue;
          case "autoFocus":
            s.delete("autofocus"), zt(g, e.autofocus, p, o);
            continue;
          case "data":
            if (t !== "object") {
              s.delete(g), u = e.getAttribute("data"), zt(g, u, p, o);
              continue;
            }
          case "src":
          case "href":
            if (!(p !== "" || t === "a" && g === "href" || t === "object" && g === "data")) {
              console.error(g === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', g, g);
              continue;
            }
            up(e, g, g, p, s, o);
            continue;
          case "action":
          case "formAction":
            if (u = e.getAttribute(g), typeof p == "function") {
              s.delete(g.toLowerCase()), g === "formAction" ? (s.delete("name"), s.delete("formenctype"), s.delete("formmethod"), s.delete("formtarget")) : (s.delete("enctype"), s.delete("method"), s.delete("target"));
              continue;
            } else if (u === qC) {
              s.delete(g.toLowerCase()), zt(g, "function", p, o);
              continue;
            }
            up(e, g, g.toLowerCase(), p, s, o);
            continue;
          case "xlinkHref":
            up(e, g, "xlink:href", p, s, o);
            continue;
          case "contentEditable":
            rp(e, g, "contenteditable", p, s, o);
            continue;
          case "spellCheck":
            rp(e, g, "spellcheck", p, s, o);
            continue;
          case "draggable":
          case "autoReverse":
          case "externalResourcesRequired":
          case "focusable":
          case "preserveAlpha":
            rp(e, g, g, p, s, o);
            continue;
          case "allowFullScreen":
          case "async":
          case "autoPlay":
          case "controls":
          case "default":
          case "defer":
          case "disabled":
          case "disablePictureInPicture":
          case "disableRemotePlayback":
          case "formNoValidate":
          case "hidden":
          case "loop":
          case "noModule":
          case "noValidate":
          case "open":
          case "playsInline":
          case "readOnly":
          case "required":
          case "reversed":
          case "scoped":
          case "seamless":
          case "itemScope":
            Ub(e, g, g.toLowerCase(), p, s, o);
            continue;
          case "capture":
          case "download":
            e: {
              f = e;
              var M = u = g, N = o;
              if (s.delete(M), f = f.getAttribute(M), f === null) switch (typeof p) {
                case "undefined":
                case "function":
                case "symbol":
                  break e;
                default:
                  if (p === false) break e;
              }
              else if (p != null) switch (typeof p) {
                case "function":
                case "symbol":
                  break;
                case "boolean":
                  if (p === true && f === "") break e;
                  break;
                default:
                  if (Ze(p, u), f === "" + p) break e;
              }
              zt(u, f, p, N);
            }
            continue;
          case "cols":
          case "rows":
          case "size":
          case "span":
            e: {
              if (f = e, M = u = g, N = o, s.delete(M), f = f.getAttribute(M), f === null) switch (typeof p) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                  break e;
                default:
                  if (isNaN(p) || 1 > p) break e;
              }
              else if (p != null) switch (typeof p) {
                case "function":
                case "symbol":
                case "boolean":
                  break;
                default:
                  if (!(isNaN(p) || 1 > p) && (Ze(p, u), f === "" + p)) break e;
              }
              zt(u, f, p, N);
            }
            continue;
          case "rowSpan":
            Bb(e, g, "rowspan", p, s, o);
            continue;
          case "start":
            Bb(e, g, g, p, s, o);
            continue;
          case "xHeight":
            Un(e, g, "x-height", p, s, o);
            continue;
          case "xlinkActuate":
            Un(e, g, "xlink:actuate", p, s, o);
            continue;
          case "xlinkArcrole":
            Un(e, g, "xlink:arcrole", p, s, o);
            continue;
          case "xlinkRole":
            Un(e, g, "xlink:role", p, s, o);
            continue;
          case "xlinkShow":
            Un(e, g, "xlink:show", p, s, o);
            continue;
          case "xlinkTitle":
            Un(e, g, "xlink:title", p, s, o);
            continue;
          case "xlinkType":
            Un(e, g, "xlink:type", p, s, o);
            continue;
          case "xmlBase":
            Un(e, g, "xml:base", p, s, o);
            continue;
          case "xmlLang":
            Un(e, g, "xml:lang", p, s, o);
            continue;
          case "xmlSpace":
            Un(e, g, "xml:space", p, s, o);
            continue;
          case "inert":
            p !== "" || Uf[g] || (Uf[g] = true, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", g)), Ub(e, g, g, p, s, o);
            continue;
          default:
            if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
              f = Hg(g), u = false, a.context === yi && t !== "svg" && t !== "math" ? s.delete(f.toLowerCase()) : (M = g.toLowerCase(), M = Zc.hasOwnProperty(M) && Zc[M] || null, M !== null && M !== g && (u = true, s.delete(M)), s.delete(f));
              e: if (M = e, N = f, f = p, pa(N)) if (M.hasAttribute(N)) M = M.getAttribute(N), Ze(f, N), f = M === "" + f ? f : M;
              else {
                switch (typeof f) {
                  case "function":
                  case "symbol":
                    break e;
                  case "boolean":
                    if (M = N.toLowerCase().slice(0, 5), M !== "data-" && M !== "aria-") break e;
                }
                f = f === void 0 ? void 0 : null;
              }
              else f = void 0;
              u || zt(g, f, p, o);
            }
        }
      }
      return 0 < s.size && n.suppressHydrationWarning !== true && RR(e, s, o), Object.keys(o).length === 0 ? null : o;
    }
    function CR(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Hb(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function OR() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
          var o = n[a], s = o.transferSize, u = o.initiatorType, f = o.duration;
          if (s && f && Hb(u)) {
            for (u = 0, f = o.responseEnd, a += 1; a < n.length; a++) {
              var p = n[a], g = p.startTime;
              if (g > f) break;
              var M = p.transferSize, N = p.initiatorType;
              M && Hb(N) && (p = p.responseEnd, u += M * (p < f ? 1 : (f - g) / (p - g)));
            }
            if (--a, t += 8 * (s + u) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function Oc(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Yb(e) {
      switch (e) {
        case ql:
          return vs;
        case Qc:
          return Lf;
        default:
          return yi;
      }
    }
    function kb(e, t) {
      if (e === yi) switch (t) {
        case "svg":
          return vs;
        case "math":
          return Lf;
        default:
          return yi;
      }
      return e === vs && t === "foreignObject" ? yi : e;
    }
    function cp(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function MR() {
      var e = window.event;
      return e && e.type === "popstate" ? e === Zm ? false : (Zm = e, true) : (Zm = null, false);
    }
    function ur() {
      var e = window.event;
      return e && e !== ou ? e.type : null;
    }
    function cr() {
      var e = window.event;
      return e && e !== ou ? e.timeStamp : -1.1;
    }
    function NR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function _R(e, t, n) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && e.focus();
          break;
        case "img":
          n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
      }
    }
    function zR() {
    }
    function VR(e, t, n, a) {
      wR(e, t, n, a), e[en] = a;
    }
    function qb(e) {
      Bs(e, "");
    }
    function jR(e, t, n) {
      e.nodeValue = n;
    }
    function Gb(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[en] || null;
        if (t !== null) {
          var n = P(e);
          n !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = true, te(n, function() {
            console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.');
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = true, te(n, function() {
            console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.');
          })));
        }
      }
    }
    function Ui(e) {
      return e === "head";
    }
    function UR(e, t) {
      e.removeChild(t);
    }
    function BR(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Xb(e, t) {
      var n = t, a = 0;
      do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === iu || n === Bf) {
          if (a === 0) {
            e.removeChild(o), Ul(t);
            return;
          }
          a--;
        } else if (n === au || n === oo || n === al || n === gs || n === nl) a++;
        else if (n === XC) fr(e.ownerDocument.documentElement);
        else if (n === QC) {
          n = e.ownerDocument.head, fr(n);
          for (var s = n.firstChild; s; ) {
            var u = s.nextSibling, f = s.nodeName;
            s[vr] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && s.rel.toLowerCase() === "stylesheet" || n.removeChild(s), s = u;
          }
        } else n === $C && fr(e.ownerDocument.body);
        n = o;
      } while (n);
      Ul(t);
    }
    function $b(e, t) {
      var n = e;
      e = 0;
      do {
        var a = n.nextSibling;
        if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8) if (n = a.data, n === iu) {
          if (e === 0) break;
          e--;
        } else n !== au && n !== oo && n !== al && n !== gs || e++;
        n = a;
      } while (n);
    }
    function LR(e) {
      $b(e, true);
    }
    function HR(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function YR(e) {
      e.nodeValue = "";
    }
    function kR(e) {
      $b(e, false);
    }
    function qR(e, t) {
      t = t[ZC], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function GR(e, t) {
      e.nodeValue = t;
    }
    function fp(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            fp(n), _(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (n.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(n);
      }
    }
    function XR(e, t, n, a) {
      for (; e.nodeType === 1; ) {
        var o = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (a) {
          if (!e[vr]) switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (s !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (s = e.getAttribute("src"), (s !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (t === "input" && e.type === "hidden") {
          Ze(o.name, "name");
          var s = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === s) return e;
        } else return e;
        if (e = xn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function $R(e, t, n) {
      if (t === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = xn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Qb(e, t) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = xn(e.nextSibling), e === null)) return null;
      return e;
    }
    function dp(e) {
      return e.data === oo || e.data === al;
    }
    function hp(e) {
      return e.data === gs || e.data === oo && e.ownerDocument.readyState !== jT;
    }
    function QR(e, t) {
      var n = e.ownerDocument;
      if (e.data === al) e._reactRetry = t;
      else if (e.data !== oo || n.readyState !== jT) t();
      else {
        var a = function() {
          t(), n.removeEventListener("DOMContentLoaded", a);
        };
        n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
      }
    }
    function xn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === au || t === gs || t === oo || t === al || t === nl || t === Xm || t === VT) break;
          if (t === iu || t === Bf) return null;
        }
      }
      return e;
    }
    function Zb(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), n = {}, a = e.attributes, o = 0; o < a.length; o++) {
          var s = a[o];
          n[Vb(s.name)] = s.name.toLowerCase() === "style" ? sp(e) : s.value;
        }
        return { type: t, props: n };
      }
      return e.nodeType === 8 ? e.data === nl ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Pb(e, t, n) {
      return n === null || n[GC] !== true ? (e.nodeValue === t ? e = null : (t = ji(t), e = ji(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function pp(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === iu || n === Bf) {
            if (t === 0) return xn(e.nextSibling);
            t--;
          } else n !== au && n !== gs && n !== oo && n !== al && n !== nl || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Jb(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === au || n === gs || n === oo || n === al || n === nl) {
            if (t === 0) return e;
            t--;
          } else n !== iu && n !== Bf || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function ZR(e) {
      Ul(e);
    }
    function PR(e) {
      Ul(e);
    }
    function JR(e) {
      Ul(e);
    }
    function Kb(e, t, n, a, o) {
      switch (o && xd(e, a.ancestorInfo), t = Oc(n), e) {
        case "html":
          if (e = t.documentElement, !e) throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");
          return e;
        case "head":
          if (e = t.head, !e) throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");
          return e;
        case "body":
          if (e = t.body, !e) throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");
          return e;
        default:
          throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.");
      }
    }
    function KR(e, t, n, a) {
      if (!n[Yi] && P(n)) {
        var o = n.tagName.toLowerCase();
        console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.", o, o, o);
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.");
      }
      for (o = n.attributes; o.length; ) n.removeAttributeNode(o[0]);
      Yt(n, e, t), n[kt] = a, n[en] = t;
    }
    function fr(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      _(e);
    }
    function Mc(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Fb(e, t, n) {
      var a = bs;
      if (a && typeof t == "string" && t) {
        var o = jn(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), kT.has(o) || (kT.add(o), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(o) === null && (t = a.createElement("link"), Yt(t, "link", e), ce(t), a.head.appendChild(t)));
      }
    }
    function Ib(e, t, n, a) {
      var o = (o = Li.current) ? Mc(o) : null;
      if (!o) throw Error('"resourceRoot" was expected to exist. This is a bug in React.');
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Vl(n.href), t = Ae(o).hoistableStyles, a = t.get(n), a || (a = { type: "style", instance: null, count: 0, state: null }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            e = Vl(n.href);
            var s = Ae(o).hoistableStyles, u = s.get(e);
            if (!u && (o = o.ownerDocument || o, u = { type: "stylesheet", instance: null, count: 0, state: { loading: ol, preload: null } }, s.set(e, u), (s = o.querySelector(dr(e))) && !s._p && (u.instance = s, u.state.loading = lu | Pn), !Jn.has(e))) {
              var f = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy };
              Jn.set(e, f), s || FR(o, e, f, u.state);
            }
            if (t && a === null) throw n = `

  - ` + Nc(t) + `
  + ` + Nc(n), Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
            return u;
          }
          if (t && a !== null) throw n = `

  - ` + Nc(t) + `
  + ` + Nc(n), Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
          return null;
        case "script":
          return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = jl(n), t = Ae(o).hoistableScripts, a = t.get(n), a || (a = { type: "script", instance: null, count: 0, state: null }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error('getResource encountered a type it did not expect: "' + e + '". this is a bug in React.');
      }
    }
    function Nc(e) {
      var t = 0, n = "<link";
      return typeof e.rel == "string" ? (t++, n += ' rel="' + e.rel + '"') : aa.call(e, "rel") && (t++, n += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, n += ' href="' + e.href + '"') : aa.call(e, "href") && (t++, n += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, n += ' precedence="' + e.precedence + '"') : aa.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
    }
    function Vl(e) {
      return 'href="' + jn(e) + '"';
    }
    function dr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Wb(e) {
      return ze({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function FR(e, t, n, a) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = lu : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= lu;
      }), t.addEventListener("error", function() {
        return a.loading |= HT;
      }), Yt(t, "link", n), ce(t), e.head.appendChild(t));
    }
    function jl(e) {
      return '[src="' + jn(e) + '"]';
    }
    function hr(e) {
      return "script[async]" + e;
    }
    function e1(e, t, n) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + jn(n.href) + '"]');
          if (a) return t.instance = a, ce(a), a;
          var o = ze({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null });
          return a = (e.ownerDocument || e).createElement("style"), ce(a), Yt(a, "style", o), _c(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          o = Vl(n.href);
          var s = e.querySelector(dr(o));
          if (s) return t.state.loading |= Pn, t.instance = s, ce(s), s;
          a = Wb(n), (o = Jn.get(o)) && mp(a, o), s = (e.ownerDocument || e).createElement("link"), ce(s);
          var u = s;
          return u._p = new Promise(function(f, p) {
            u.onload = f, u.onerror = p;
          }), Yt(s, "link", a), t.state.loading |= Pn, _c(s, n.precedence, e), t.instance = s;
        case "script":
          return s = jl(n.src), (o = e.querySelector(hr(s))) ? (t.instance = o, ce(o), o) : (a = n, (o = Jn.get(s)) && (a = ze({}, n), yp(a, o)), e = e.ownerDocument || e, o = e.createElement("script"), ce(o), Yt(o, "link", a), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error('acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.');
      }
      else t.type === "stylesheet" && (t.state.loading & Pn) === ol && (a = t.instance, t.state.loading |= Pn, _c(a, n.precedence, e));
      return t.instance;
    }
    function _c(e, t, n) {
      for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = a.length ? a[a.length - 1] : null, s = o, u = 0; u < a.length; u++) {
        var f = a[u];
        if (f.dataset.precedence === t) s = f;
        else if (s !== o) break;
      }
      s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
    }
    function mp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function yp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function t1(e, t, n) {
      if (Hf === null) {
        var a = /* @__PURE__ */ new Map(), o = Hf = /* @__PURE__ */ new Map();
        o.set(n, a);
      } else o = Hf, a = o.get(n), a || (a = /* @__PURE__ */ new Map(), o.set(n, a));
      if (a.has(e)) return a;
      for (a.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
        var s = n[o];
        if (!(s[vr] || s[kt] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== ql) {
          var u = s.getAttribute(t) || "";
          u = e + u;
          var f = a.get(u);
          f ? f.push(s) : a.set(u, [s]);
        }
      }
      return a;
    }
    function n1(e, t, n) {
      e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
    }
    function IR(e, t, n) {
      var a = !n.ancestorInfo.containerTagInScope;
      if (n.context === vs || t.itemProp != null) return !a || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.", e, e), false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            a && console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');
            break;
          }
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, s = t.disabled;
              n = [], t.onLoad && n.push("`onLoad`"), o && n.push("`onError`"), s != null && n.push("`disabled`"), o = CR(n, "and"), o += n.length === 1 ? " prop" : " props", s = n.length === 1 ? "an " + o : "the " + o, n.length && console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', e, s, o);
            }
            a && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag") : (t.onError || t.onLoad) && console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && a && console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'), typeof e == "string" && t == null;
            default:
              return true;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            a && (e ? t.onLoad || t.onError ? console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.") : console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>.") : console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));
            break;
          }
          return true;
        case "noscript":
        case "template":
          a && console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.", e);
      }
      return false;
    }
    function a1(e) {
      return !(e.type === "stylesheet" && (e.state.loading & YT) === ol);
    }
    function WR(e, t, n, a) {
      if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (n.state.loading & Pn) === ol) {
        if (n.instance === null) {
          var o = Vl(a.href), s = t.querySelector(dr(o));
          if (s) {
            t = s._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = zc.bind(e), t.then(e, e)), n.state.loading |= Pn, n.instance = s, ce(s);
            return;
          }
          s = t.ownerDocument || t, a = Wb(a), (o = Jn.get(o)) && mp(a, o), s = s.createElement("link"), ce(s);
          var u = s;
          u._p = new Promise(function(f, p) {
            u.onload = f, u.onerror = p;
          }), Yt(s, "link", a), n.instance = s;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & YT) === ol && (e.count++, n = zc.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
      }
    }
    function ew(e, t) {
      return e.stylesheets && e.count === 0 && Vc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
        var a = setTimeout(function() {
          if (e.stylesheets && Vc(e, e.stylesheets), e.unsuspend) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        }, KC + t);
        0 < e.imgBytes && Jm === 0 && (Jm = 125 * OR() * IC);
        var o = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Vc(e, e.stylesheets), e.unsuspend)) {
            var s = e.unsuspend;
            e.unsuspend = null, s();
          }
        }, (e.imgBytes > Jm ? 50 : FC) + t);
        return e.unsuspend = n, function() {
          e.unsuspend = null, clearTimeout(a), clearTimeout(o);
        };
      } : null;
    }
    function zc() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Vc(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Vc(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(tw, e), Yf = null, zc.call(e));
    }
    function tw(e, t) {
      if (!(t.state.loading & Pn)) {
        var n = Yf.get(e);
        if (n) var a = n.get(Km);
        else {
          n = /* @__PURE__ */ new Map(), Yf.set(e, n);
          for (var o = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < o.length; s++) {
            var u = o[s];
            (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), a = u);
          }
          a && n.set(Km, a);
        }
        o = t.instance, u = o.getAttribute("data-precedence"), s = n.get(u) || a, s === a && n.set(Km, o), n.set(u, o), this.count++, a = zc.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), s ? s.parentNode.insertBefore(o, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Pn;
      }
    }
    function nw(e, t, n, a, o, s, u, f, p) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = il, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = _s(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _s(0), this.hiddenUpdates = _s(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = s, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
    }
    function i1(e, t, n, a, o, s, u, f, p, g, M, N) {
      return e = new nw(e, t, n, u, p, g, M, N, f), t = EC, s === true && (t |= Jt | ia), t |= we, s = b(3, null, null, t), e.current = s, s.stateNode = e, t = Xd(), Mo(t), e.pooledCache = t, Mo(t), s.memoizedState = { element: a, isDehydrated: n, cache: t }, Jd(s), e;
    }
    function o1(e) {
      return e ? (e = Xi, e) : Xi;
    }
    function gp(e, t, n, a, o, s) {
      if (Pt && typeof Pt.onScheduleFiberRoot == "function") try {
        Pt.onScheduleFiberRoot(Yl, a, n);
      } catch (u) {
        Va || (Va = true, console.error("React instrumentation encountered an error: %o", u));
      }
      o = o1(o), a.context === null ? a.context = o : a.pendingContext = o, za && Rn !== null && !$T && ($T = true, console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, k(Rn) || "Unknown")), a = Oi(t), a.payload = { element: n }, s = s === void 0 ? null : s, s !== null && (typeof s != "function" && console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", s), a.callback = s), n = Mi(e, a, t), n !== null && (va(t, "root.render()", null), dt(n, e, t), Zs(n, e, t));
    }
    function l1(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function vp(e, t) {
      l1(e, t), (e = e.alternate) && l1(e, t);
    }
    function s1(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Zt(e, 67108864);
        t !== null && dt(t, e, 67108864), vp(e, 67108864);
      }
    }
    function r1(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = An(e);
        t = Ai(t);
        var n = Zt(e, t);
        n !== null && dt(n, e, t), vp(e, t);
      }
    }
    function aw() {
      return Rn;
    }
    function iw(e, t, n, a) {
      var o = j.T;
      j.T = null;
      var s = $e.p;
      try {
        $e.p = Bn, bp(e, t, n, a);
      } finally {
        $e.p = s, j.T = o;
      }
    }
    function ow(e, t, n, a) {
      var o = j.T;
      j.T = null;
      var s = $e.p;
      try {
        $e.p = Ua, bp(e, t, n, a);
      } finally {
        $e.p = s, j.T = o;
      }
    }
    function bp(e, t, n, a) {
      if (qf) {
        var o = Sp(a);
        if (o === null) ip(e, t, a, Gf, n), c1(e, a);
        else if (lw(o, e, t, n, a)) a.stopPropagation();
        else if (c1(e, a), t & 4 && -1 < eO.indexOf(e)) {
          for (; o !== null; ) {
            var s = P(o);
            if (s !== null) switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var u = ha(s.pendingLanes);
                  if (u !== 0) {
                    var f = s;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; u; ) {
                      var p = 1 << 31 - Wt(u);
                      f.entanglements[1] |= p, u &= ~p;
                    }
                    Oa(s), (qe & (Mt | Mn)) === Bt && (Df = Vt() + bT, sr(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Zt(s, 2), f !== null && dt(f, s, 2), Nl(), vp(s, 2);
            }
            if (s = Sp(a), s === null && ip(e, t, a, Gf, n), s === o) break;
            o = s;
          }
          o !== null && a.stopPropagation();
        } else ip(e, t, a, null, n);
      }
    }
    function Sp(e) {
      return e = Dd(e), Tp(e);
    }
    function Tp(e) {
      if (Gf = null, e = G(e), e !== null) {
        var t = Y(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (e = K(t), e !== null) return e;
            e = null;
          } else if (n === 31) {
            if (e = Z(t), e !== null) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Gf = e, null;
    }
    function u1(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Bn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ua;
        case "message":
          switch (yw()) {
            case jp:
              return Bn;
            case Up:
              return Ua;
            case Hl:
            case gw:
              return ni;
            case Bp:
              return Xc;
            default:
              return ni;
          }
        default:
          return ni;
      }
    }
    function c1(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          lo = null;
          break;
        case "dragenter":
        case "dragleave":
          so = null;
          break;
        case "mouseover":
        case "mouseout":
          ro = null;
          break;
        case "pointerover":
        case "pointerout":
          ru.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          uu.delete(t.pointerId);
      }
    }
    function pr(e, t, n, a, o, s) {
      return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: a, nativeEvent: s, targetContainers: [o] }, t !== null && (t = P(t), t !== null && s1(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function lw(e, t, n, a, o) {
      switch (t) {
        case "focusin":
          return lo = pr(lo, e, t, n, a, o), true;
        case "dragenter":
          return so = pr(so, e, t, n, a, o), true;
        case "mouseover":
          return ro = pr(ro, e, t, n, a, o), true;
        case "pointerover":
          var s = o.pointerId;
          return ru.set(s, pr(ru.get(s) || null, e, t, n, a, o)), true;
        case "gotpointercapture":
          return s = o.pointerId, uu.set(s, pr(uu.get(s) || null, e, t, n, a, o)), true;
      }
      return false;
    }
    function f1(e) {
      var t = G(e.target);
      if (t !== null) {
        var n = Y(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = K(n), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                r1(n);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Z(n), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                r1(n);
              });
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function jc(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Sp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var a = new n.constructor(n.type, n), o = a;
          br !== null && console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), br = o, n.target.dispatchEvent(a), br === null && console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), br = null;
        } else return t = P(n), t !== null && s1(t), e.blockedOn = n, false;
        t.shift();
      }
      return true;
    }
    function d1(e, t, n) {
      jc(e) && n.delete(t);
    }
    function sw() {
      Fm = false, lo !== null && jc(lo) && (lo = null), so !== null && jc(so) && (so = null), ro !== null && jc(ro) && (ro = null), ru.forEach(d1), uu.forEach(d1);
    }
    function Uc(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Fm || (Fm = true, bt.unstable_scheduleCallback(bt.unstable_NormalPriority, sw)));
    }
    function h1(e) {
      Xf !== e && (Xf = e, bt.unstable_scheduleCallback(bt.unstable_NormalPriority, function() {
        Xf === e && (Xf = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], o = e[t + 2];
          if (typeof a != "function") {
            if (Tp(a || n) === null) continue;
            break;
          }
          var s = P(n);
          s !== null && (e.splice(t, 3), t -= 3, n = { pending: true, data: o, method: n.method, action: a }, Object.freeze(n), Th(s, n, a, o));
        }
      }));
    }
    function Ul(e) {
      function t(p) {
        return Uc(p, e);
      }
      lo !== null && Uc(lo, e), so !== null && Uc(so, e), ro !== null && Uc(ro, e), ru.forEach(t), uu.forEach(t);
      for (var n = 0; n < uo.length; n++) {
        var a = uo[n];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < uo.length && (n = uo[0], n.blockedOn === null); ) f1(n), n.blockedOn === null && uo.shift();
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) {
        var o = n[a], s = n[a + 1], u = o[en] || null;
        if (typeof s == "function") u || h1(n);
        else if (u) {
          var f = null;
          if (s && s.hasAttribute("formAction")) {
            if (o = s, u = s[en] || null) f = u.formAction;
            else if (Tp(o) !== null) continue;
          } else f = u.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), h1(n);
        }
      }
    }
    function p1() {
      function e(s) {
        s.canIntercept && s.info === "react-transition" && s.intercept({ handler: function() {
          return new Promise(function(u) {
            return o = u;
          });
        }, focusReset: "manual", scroll: "manual" });
      }
      function t() {
        o !== null && (o(), o = null), a || setTimeout(n, 20);
      }
      function n() {
        if (!a && !navigation.transition) {
          var s = navigation.currentEntry;
          s && s.url != null && navigation.navigate(s.url, { state: s.getState(), info: "react-transition", history: "replace" });
        }
      }
      if (typeof navigation == "object") {
        var a = false, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
          a = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
        };
      }
    }
    function Ep(e) {
      this._internalRoot = e;
    }
    function Bc(e) {
      this._internalRoot = e;
    }
    function m1(e) {
      e[Yi] && (e._reactRootContainer ? console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var bt = lO(), Ap = Eu(), rw = rO(), ze = Object.assign, uw = /* @__PURE__ */ Symbol.for("react.element"), Na = /* @__PURE__ */ Symbol.for("react.transitional.element"), Bl = /* @__PURE__ */ Symbol.for("react.portal"), Ll = /* @__PURE__ */ Symbol.for("react.fragment"), Lc = /* @__PURE__ */ Symbol.for("react.strict_mode"), xp = /* @__PURE__ */ Symbol.for("react.profiler"), Dp = /* @__PURE__ */ Symbol.for("react.consumer"), _a = /* @__PURE__ */ Symbol.for("react.context"), mr = /* @__PURE__ */ Symbol.for("react.forward_ref"), Rp = /* @__PURE__ */ Symbol.for("react.suspense"), wp = /* @__PURE__ */ Symbol.for("react.suspense_list"), Hc = /* @__PURE__ */ Symbol.for("react.memo"), Dn = /* @__PURE__ */ Symbol.for("react.lazy"), Cp = /* @__PURE__ */ Symbol.for("react.activity"), cw = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), y1 = Symbol.iterator, fw = /* @__PURE__ */ Symbol.for("react.client.reference"), Ct = Array.isArray, j = Ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $e = rw.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, dw = Object.freeze({ pending: false, data: null, method: null, action: null }), Op = [], Mp = [], ti = -1, Bi = Me(null), yr = Me(null), Li = Me(null), Yc = Me(null), gr = 0, g1, v1, b1, S1, T1, E1, A1;
    Ve.__reactDisabledLog = true;
    var Np, x1, _p = false, zp = new (typeof WeakMap == "function" ? WeakMap : Map)(), Rn = null, za = false, aa = Object.prototype.hasOwnProperty, Vp = bt.unstable_scheduleCallback, hw = bt.unstable_cancelCallback, pw = bt.unstable_shouldYield, mw = bt.unstable_requestPaint, Vt = bt.unstable_now, yw = bt.unstable_getCurrentPriorityLevel, jp = bt.unstable_ImmediatePriority, Up = bt.unstable_UserBlockingPriority, Hl = bt.unstable_NormalPriority, gw = bt.unstable_LowPriority, Bp = bt.unstable_IdlePriority, vw = bt.log, bw = bt.unstable_setDisableYieldValue, Yl = null, Pt = null, Va = false, ja = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Wt = Math.clz32 ? Math.clz32 : ml, Sw = Math.log, Tw = Math.LN2, kc = 256, qc = 262144, Gc = 4194304, Bn = 2, Ua = 8, ni = 32, Xc = 268435456, Hi = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Hi, en = "__reactProps$" + Hi, Yi = "__reactContainer$" + Hi, Lp = "__reactEvents$" + Hi, Ew = "__reactListeners$" + Hi, Aw = "__reactHandles$" + Hi, D1 = "__reactResources$" + Hi, vr = "__reactMarker$" + Hi, R1 = /* @__PURE__ */ new Set(), Bo = {}, Hp = {}, xw = { button: true, checkbox: true, image: true, hidden: true, radio: true, reset: true, submit: true }, Dw = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), w1 = {}, C1 = {}, Rw = /[\n"\\]/g, O1 = false, M1 = false, N1 = false, _1 = false, z1 = false, V1 = false, j1 = ["value", "defaultValue"], U1 = false, B1 = /["'&<>\n\t]|^\s|\s$/, ww = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "), L1 = "applet caption html table td th marquee object template foreignObject desc title".split(" "), Cw = L1.concat(["button"]), Ow = "dd dt li option optgroup p rp rt".split(" "), H1 = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null, containerTagInScope: null, implicitRootScope: false }, $c = {}, Yp = { animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "), background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "), backgroundPosition: ["backgroundPositionX", "backgroundPositionY"], border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "), borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"], borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"], borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"], borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"], borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"], borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"], borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"], borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"], borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"], borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"], borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"], borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"], columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"], columns: ["columnCount", "columnWidth"], flex: ["flexBasis", "flexGrow", "flexShrink"], flexFlow: ["flexDirection", "flexWrap"], font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "), fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "), gap: ["columnGap", "rowGap"], grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "), gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"], gridColumn: ["gridColumnEnd", "gridColumnStart"], gridColumnGap: ["columnGap"], gridGap: ["columnGap", "rowGap"], gridRow: ["gridRowEnd", "gridRowStart"], gridRowGap: ["rowGap"], gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], listStyle: ["listStyleImage", "listStylePosition", "listStyleType"], margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"], marker: ["markerEnd", "markerMid", "markerStart"], mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "), maskPosition: ["maskPositionX", "maskPositionY"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], overflow: ["overflowX", "overflowY"], padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"], placeContent: ["alignContent", "justifyContent"], placeItems: ["alignItems", "justifyItems"], placeSelf: ["alignSelf", "justifySelf"], textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"], textEmphasis: ["textEmphasisColor", "textEmphasisStyle"], transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"], wordWrap: ["overflowWrap"] }, Y1 = /([A-Z])/g, k1 = /^ms-/, Mw = /^(?:webkit|moz|o)[A-Z]/, Nw = /^-ms-/, _w = /-(.)/g, q1 = /;\s*$/, kl = {}, kp = {}, G1 = false, X1 = false, $1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), Qc = "http://www.w3.org/1998/Math/MathML", ql = "http://www.w3.org/2000/svg", zw = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Zc = { accept: "accept", acceptcharset: "acceptCharset", "accept-charset": "acceptCharset", accesskey: "accessKey", action: "action", allowfullscreen: "allowFullScreen", alt: "alt", as: "as", async: "async", autocapitalize: "autoCapitalize", autocomplete: "autoComplete", autocorrect: "autoCorrect", autofocus: "autoFocus", autoplay: "autoPlay", autosave: "autoSave", capture: "capture", cellpadding: "cellPadding", cellspacing: "cellSpacing", challenge: "challenge", charset: "charSet", checked: "checked", children: "children", cite: "cite", class: "className", classid: "classID", classname: "className", cols: "cols", colspan: "colSpan", content: "content", contenteditable: "contentEditable", contextmenu: "contextMenu", controls: "controls", controlslist: "controlsList", coords: "coords", crossorigin: "crossOrigin", dangerouslysetinnerhtml: "dangerouslySetInnerHTML", data: "data", datetime: "dateTime", default: "default", defaultchecked: "defaultChecked", defaultvalue: "defaultValue", defer: "defer", dir: "dir", disabled: "disabled", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback", download: "download", draggable: "draggable", enctype: "encType", enterkeyhint: "enterKeyHint", fetchpriority: "fetchPriority", for: "htmlFor", form: "form", formmethod: "formMethod", formaction: "formAction", formenctype: "formEncType", formnovalidate: "formNoValidate", formtarget: "formTarget", frameborder: "frameBorder", headers: "headers", height: "height", hidden: "hidden", high: "high", href: "href", hreflang: "hrefLang", htmlfor: "htmlFor", httpequiv: "httpEquiv", "http-equiv": "httpEquiv", icon: "icon", id: "id", imagesizes: "imageSizes", imagesrcset: "imageSrcSet", inert: "inert", innerhtml: "innerHTML", inputmode: "inputMode", integrity: "integrity", is: "is", itemid: "itemID", itemprop: "itemProp", itemref: "itemRef", itemscope: "itemScope", itemtype: "itemType", keyparams: "keyParams", keytype: "keyType", kind: "kind", label: "label", lang: "lang", list: "list", loop: "loop", low: "low", manifest: "manifest", marginwidth: "marginWidth", marginheight: "marginHeight", max: "max", maxlength: "maxLength", media: "media", mediagroup: "mediaGroup", method: "method", min: "min", minlength: "minLength", multiple: "multiple", muted: "muted", name: "name", nomodule: "noModule", nonce: "nonce", novalidate: "noValidate", open: "open", optimum: "optimum", pattern: "pattern", placeholder: "placeholder", playsinline: "playsInline", poster: "poster", preload: "preload", profile: "profile", radiogroup: "radioGroup", readonly: "readOnly", referrerpolicy: "referrerPolicy", rel: "rel", required: "required", reversed: "reversed", role: "role", rows: "rows", rowspan: "rowSpan", sandbox: "sandbox", scope: "scope", scoped: "scoped", scrolling: "scrolling", seamless: "seamless", selected: "selected", shape: "shape", size: "size", sizes: "sizes", span: "span", spellcheck: "spellCheck", src: "src", srcdoc: "srcDoc", srclang: "srcLang", srcset: "srcSet", start: "start", step: "step", style: "style", summary: "summary", tabindex: "tabIndex", target: "target", title: "title", type: "type", usemap: "useMap", value: "value", width: "width", wmode: "wmode", wrap: "wrap", about: "about", accentheight: "accentHeight", "accent-height": "accentHeight", accumulate: "accumulate", additive: "additive", alignmentbaseline: "alignmentBaseline", "alignment-baseline": "alignmentBaseline", allowreorder: "allowReorder", alphabetic: "alphabetic", amplitude: "amplitude", arabicform: "arabicForm", "arabic-form": "arabicForm", ascent: "ascent", attributename: "attributeName", attributetype: "attributeType", autoreverse: "autoReverse", azimuth: "azimuth", basefrequency: "baseFrequency", baselineshift: "baselineShift", "baseline-shift": "baselineShift", baseprofile: "baseProfile", bbox: "bbox", begin: "begin", bias: "bias", by: "by", calcmode: "calcMode", capheight: "capHeight", "cap-height": "capHeight", clip: "clip", clippath: "clipPath", "clip-path": "clipPath", clippathunits: "clipPathUnits", cliprule: "clipRule", "clip-rule": "clipRule", color: "color", colorinterpolation: "colorInterpolation", "color-interpolation": "colorInterpolation", colorinterpolationfilters: "colorInterpolationFilters", "color-interpolation-filters": "colorInterpolationFilters", colorprofile: "colorProfile", "color-profile": "colorProfile", colorrendering: "colorRendering", "color-rendering": "colorRendering", contentscripttype: "contentScriptType", contentstyletype: "contentStyleType", cursor: "cursor", cx: "cx", cy: "cy", d: "d", datatype: "datatype", decelerate: "decelerate", descent: "descent", diffuseconstant: "diffuseConstant", direction: "direction", display: "display", divisor: "divisor", dominantbaseline: "dominantBaseline", "dominant-baseline": "dominantBaseline", dur: "dur", dx: "dx", dy: "dy", edgemode: "edgeMode", elevation: "elevation", enablebackground: "enableBackground", "enable-background": "enableBackground", end: "end", exponent: "exponent", externalresourcesrequired: "externalResourcesRequired", fill: "fill", fillopacity: "fillOpacity", "fill-opacity": "fillOpacity", fillrule: "fillRule", "fill-rule": "fillRule", filter: "filter", filterres: "filterRes", filterunits: "filterUnits", floodopacity: "floodOpacity", "flood-opacity": "floodOpacity", floodcolor: "floodColor", "flood-color": "floodColor", focusable: "focusable", fontfamily: "fontFamily", "font-family": "fontFamily", fontsize: "fontSize", "font-size": "fontSize", fontsizeadjust: "fontSizeAdjust", "font-size-adjust": "fontSizeAdjust", fontstretch: "fontStretch", "font-stretch": "fontStretch", fontstyle: "fontStyle", "font-style": "fontStyle", fontvariant: "fontVariant", "font-variant": "fontVariant", fontweight: "fontWeight", "font-weight": "fontWeight", format: "format", from: "from", fx: "fx", fy: "fy", g1: "g1", g2: "g2", glyphname: "glyphName", "glyph-name": "glyphName", glyphorientationhorizontal: "glyphOrientationHorizontal", "glyph-orientation-horizontal": "glyphOrientationHorizontal", glyphorientationvertical: "glyphOrientationVertical", "glyph-orientation-vertical": "glyphOrientationVertical", glyphref: "glyphRef", gradienttransform: "gradientTransform", gradientunits: "gradientUnits", hanging: "hanging", horizadvx: "horizAdvX", "horiz-adv-x": "horizAdvX", horizoriginx: "horizOriginX", "horiz-origin-x": "horizOriginX", ideographic: "ideographic", imagerendering: "imageRendering", "image-rendering": "imageRendering", in2: "in2", in: "in", inlist: "inlist", intercept: "intercept", k1: "k1", k2: "k2", k3: "k3", k4: "k4", k: "k", kernelmatrix: "kernelMatrix", kernelunitlength: "kernelUnitLength", kerning: "kerning", keypoints: "keyPoints", keysplines: "keySplines", keytimes: "keyTimes", lengthadjust: "lengthAdjust", letterspacing: "letterSpacing", "letter-spacing": "letterSpacing", lightingcolor: "lightingColor", "lighting-color": "lightingColor", limitingconeangle: "limitingConeAngle", local: "local", markerend: "markerEnd", "marker-end": "markerEnd", markerheight: "markerHeight", markermid: "markerMid", "marker-mid": "markerMid", markerstart: "markerStart", "marker-start": "markerStart", markerunits: "markerUnits", markerwidth: "markerWidth", mask: "mask", maskcontentunits: "maskContentUnits", maskunits: "maskUnits", mathematical: "mathematical", mode: "mode", numoctaves: "numOctaves", offset: "offset", opacity: "opacity", operator: "operator", order: "order", orient: "orient", orientation: "orientation", origin: "origin", overflow: "overflow", overlineposition: "overlinePosition", "overline-position": "overlinePosition", overlinethickness: "overlineThickness", "overline-thickness": "overlineThickness", paintorder: "paintOrder", "paint-order": "paintOrder", panose1: "panose1", "panose-1": "panose1", pathlength: "pathLength", patterncontentunits: "patternContentUnits", patterntransform: "patternTransform", patternunits: "patternUnits", pointerevents: "pointerEvents", "pointer-events": "pointerEvents", points: "points", pointsatx: "pointsAtX", pointsaty: "pointsAtY", pointsatz: "pointsAtZ", popover: "popover", popovertarget: "popoverTarget", popovertargetaction: "popoverTargetAction", prefix: "prefix", preservealpha: "preserveAlpha", preserveaspectratio: "preserveAspectRatio", primitiveunits: "primitiveUnits", property: "property", r: "r", radius: "radius", refx: "refX", refy: "refY", renderingintent: "renderingIntent", "rendering-intent": "renderingIntent", repeatcount: "repeatCount", repeatdur: "repeatDur", requiredextensions: "requiredExtensions", requiredfeatures: "requiredFeatures", resource: "resource", restart: "restart", result: "result", results: "results", rotate: "rotate", rx: "rx", ry: "ry", scale: "scale", security: "security", seed: "seed", shaperendering: "shapeRendering", "shape-rendering": "shapeRendering", slope: "slope", spacing: "spacing", specularconstant: "specularConstant", specularexponent: "specularExponent", speed: "speed", spreadmethod: "spreadMethod", startoffset: "startOffset", stddeviation: "stdDeviation", stemh: "stemh", stemv: "stemv", stitchtiles: "stitchTiles", stopcolor: "stopColor", "stop-color": "stopColor", stopopacity: "stopOpacity", "stop-opacity": "stopOpacity", strikethroughposition: "strikethroughPosition", "strikethrough-position": "strikethroughPosition", strikethroughthickness: "strikethroughThickness", "strikethrough-thickness": "strikethroughThickness", string: "string", stroke: "stroke", strokedasharray: "strokeDasharray", "stroke-dasharray": "strokeDasharray", strokedashoffset: "strokeDashoffset", "stroke-dashoffset": "strokeDashoffset", strokelinecap: "strokeLinecap", "stroke-linecap": "strokeLinecap", strokelinejoin: "strokeLinejoin", "stroke-linejoin": "strokeLinejoin", strokemiterlimit: "strokeMiterlimit", "stroke-miterlimit": "strokeMiterlimit", strokewidth: "strokeWidth", "stroke-width": "strokeWidth", strokeopacity: "strokeOpacity", "stroke-opacity": "strokeOpacity", suppresscontenteditablewarning: "suppressContentEditableWarning", suppresshydrationwarning: "suppressHydrationWarning", surfacescale: "surfaceScale", systemlanguage: "systemLanguage", tablevalues: "tableValues", targetx: "targetX", targety: "targetY", textanchor: "textAnchor", "text-anchor": "textAnchor", textdecoration: "textDecoration", "text-decoration": "textDecoration", textlength: "textLength", textrendering: "textRendering", "text-rendering": "textRendering", to: "to", transform: "transform", transformorigin: "transformOrigin", "transform-origin": "transformOrigin", typeof: "typeof", u1: "u1", u2: "u2", underlineposition: "underlinePosition", "underline-position": "underlinePosition", underlinethickness: "underlineThickness", "underline-thickness": "underlineThickness", unicode: "unicode", unicodebidi: "unicodeBidi", "unicode-bidi": "unicodeBidi", unicoderange: "unicodeRange", "unicode-range": "unicodeRange", unitsperem: "unitsPerEm", "units-per-em": "unitsPerEm", unselectable: "unselectable", valphabetic: "vAlphabetic", "v-alphabetic": "vAlphabetic", values: "values", vectoreffect: "vectorEffect", "vector-effect": "vectorEffect", version: "version", vertadvy: "vertAdvY", "vert-adv-y": "vertAdvY", vertoriginx: "vertOriginX", "vert-origin-x": "vertOriginX", vertoriginy: "vertOriginY", "vert-origin-y": "vertOriginY", vhanging: "vHanging", "v-hanging": "vHanging", videographic: "vIdeographic", "v-ideographic": "vIdeographic", viewbox: "viewBox", viewtarget: "viewTarget", visibility: "visibility", vmathematical: "vMathematical", "v-mathematical": "vMathematical", vocab: "vocab", widths: "widths", wordspacing: "wordSpacing", "word-spacing": "wordSpacing", writingmode: "writingMode", "writing-mode": "writingMode", x1: "x1", x2: "x2", x: "x", xchannelselector: "xChannelSelector", xheight: "xHeight", "x-height": "xHeight", xlinkactuate: "xlinkActuate", "xlink:actuate": "xlinkActuate", xlinkarcrole: "xlinkArcrole", "xlink:arcrole": "xlinkArcrole", xlinkhref: "xlinkHref", "xlink:href": "xlinkHref", xlinkrole: "xlinkRole", "xlink:role": "xlinkRole", xlinkshow: "xlinkShow", "xlink:show": "xlinkShow", xlinktitle: "xlinkTitle", "xlink:title": "xlinkTitle", xlinktype: "xlinkType", "xlink:type": "xlinkType", xmlbase: "xmlBase", "xml:base": "xmlBase", xmllang: "xmlLang", "xml:lang": "xmlLang", xmlns: "xmlns", "xml:space": "xmlSpace", xmlnsxlink: "xmlnsXlink", "xmlns:xlink": "xmlnsXlink", xmlspace: "xmlSpace", y1: "y1", y2: "y2", y: "y", ychannelselector: "yChannelSelector", z: "z", zoomandpan: "zoomAndPan" }, Q1 = { "aria-current": 0, "aria-description": 0, "aria-details": 0, "aria-disabled": 0, "aria-hidden": 0, "aria-invalid": 0, "aria-keyshortcuts": 0, "aria-label": 0, "aria-roledescription": 0, "aria-autocomplete": 0, "aria-checked": 0, "aria-expanded": 0, "aria-haspopup": 0, "aria-level": 0, "aria-modal": 0, "aria-multiline": 0, "aria-multiselectable": 0, "aria-orientation": 0, "aria-placeholder": 0, "aria-pressed": 0, "aria-readonly": 0, "aria-required": 0, "aria-selected": 0, "aria-sort": 0, "aria-valuemax": 0, "aria-valuemin": 0, "aria-valuenow": 0, "aria-valuetext": 0, "aria-atomic": 0, "aria-busy": 0, "aria-live": 0, "aria-relevant": 0, "aria-dropeffect": 0, "aria-grabbed": 0, "aria-activedescendant": 0, "aria-colcount": 0, "aria-colindex": 0, "aria-colspan": 0, "aria-controls": 0, "aria-describedby": 0, "aria-errormessage": 0, "aria-flowto": 0, "aria-labelledby": 0, "aria-owns": 0, "aria-posinset": 0, "aria-rowcount": 0, "aria-rowindex": 0, "aria-rowspan": 0, "aria-setsize": 0, "aria-braillelabel": 0, "aria-brailleroledescription": 0, "aria-colindextext": 0, "aria-rowindextext": 0 }, Gl = {}, Vw = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), jw = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Z1 = false, tn = {}, P1 = /^on./, Uw = /^on[^A-Z]/, Bw = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Lw = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Hw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, br = null, Xl = null, $l = null, qp = false, Ba = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gp = false;
    if (Ba) try {
      var Sr = {};
      Object.defineProperty(Sr, "passive", { get: function() {
        Gp = true;
      } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
    } catch {
      Gp = false;
    }
    var ki = null, Xp = null, Pc = null, Lo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Jc = cn(Lo), Tr = ze({}, Lo, { view: 0, detail: 0 }), Yw = cn(Tr), $p, Qp, Er, Kc = ze({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Rd, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Er && (Er && e.type === "mousemove" ? ($p = e.screenX - Er.screenX, Qp = e.screenY - Er.screenY) : Qp = $p = 0, Er = e), $p);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : Qp;
    } }), J1 = cn(Kc), kw = ze({}, Kc, { dataTransfer: 0 }), qw = cn(kw), Gw = ze({}, Tr, { relatedTarget: 0 }), Zp = cn(Gw), Xw = ze({}, Lo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $w = cn(Xw), Qw = ze({}, Lo, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), Zw = cn(Qw), Pw = ze({}, Lo, { data: 0 }), K1 = cn(Pw), Jw = K1, Kw = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Fw = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Iw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }, Ww = ze({}, Tr, { key: function(e) {
      if (e.key) {
        var t = Kw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ju(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fw[e.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Rd, charCode: function(e) {
      return e.type === "keypress" ? ju(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? ju(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), eC = cn(Ww), tC = ze({}, Kc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), F1 = cn(tC), nC = ze({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Rd }), aC = cn(nC), iC = ze({}, Lo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), oC = cn(iC), lC = ze({}, Kc, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), sC = cn(lC), rC = ze({}, Lo, { newState: 0, oldState: 0 }), uC = cn(rC), cC = [9, 13, 27, 32], I1 = 229, Pp = Ba && "CompositionEvent" in window, Ar = null;
    Ba && "documentMode" in document && (Ar = document.documentMode);
    var fC = Ba && "TextEvent" in window && !Ar, W1 = Ba && (!Pp || Ar && 8 < Ar && 11 >= Ar), eS = 32, tS = String.fromCharCode(eS), nS = false, Ql = false, dC = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true }, xr = null, Dr = null, aS = false;
    Ba && (aS = _D("input") && (!document.documentMode || 9 < document.documentMode));
    var nn = typeof Object.is == "function" ? Object.is : LD, hC = Ba && "documentMode" in document && 11 >= document.documentMode, Zl = null, Jp = null, Rr = null, Kp = false, Pl = { animationend: Ao("Animation", "AnimationEnd"), animationiteration: Ao("Animation", "AnimationIteration"), animationstart: Ao("Animation", "AnimationStart"), transitionrun: Ao("Transition", "TransitionRun"), transitionstart: Ao("Transition", "TransitionStart"), transitioncancel: Ao("Transition", "TransitionCancel"), transitionend: Ao("Transition", "TransitionEnd") }, Fp = {}, iS = {};
    Ba && (iS = document.createElement("div").style, "AnimationEvent" in window || (delete Pl.animationend.animation, delete Pl.animationiteration.animation, delete Pl.animationstart.animation), "TransitionEvent" in window || delete Pl.transitionend.transition);
    var oS = xo("animationend"), lS = xo("animationiteration"), sS = xo("animationstart"), pC = xo("transitionrun"), mC = xo("transitionstart"), yC = xo("transitioncancel"), rS = xo("transitionend"), uS = /* @__PURE__ */ new Map(), Ip = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ip.push("scrollEnd");
    var cS = 0;
    if (typeof performance == "object" && typeof performance.now == "function") var gC = performance, fS = function() {
      return gC.now();
    };
    else {
      var vC = Date;
      fS = function() {
        return vC.now();
      };
    }
    var Wp = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, bC = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Fc = 0, em = 1, tm = 2, nm = 3, Ic = "\u2013\xA0", Wc = "+\xA0", dS = "\u2007\xA0", at = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Ln = "Components \u269B", Be = "Scheduler \u269B", He = "Blocking", qi = false, ai = { color: "primary", properties: null, tooltipText: "", track: Ln }, Gi = { start: -0, end: -0, detail: { devtools: ai } }, SC = ["Changed Props", ""], hS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", TC = ["Changed Props", hS], wr = 1, ii = 2, Hn = [], Jl = 0, am = 0, Xi = {};
    Object.freeze(Xi);
    var Yn = null, Kl = null, ve = 0, EC = 1, we = 2, Jt = 8, ia = 16, AC = 32, pS = false;
    try {
      var mS = Object.preventExtensions({});
    } catch {
      pS = true;
    }
    var im = /* @__PURE__ */ new WeakMap(), Fl = [], Il = 0, ef = null, Cr = 0, kn = [], qn = 0, Ho = null, oi = 1, li = "", qt = null, it = null, je = false, La = false, wn = null, $i = null, Gn = false, om = Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), lm = Me(null), sm = Me(null), yS = {}, tf = null, Wl = null, es = false, xC = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = { aborted: false, addEventListener: function(n, a) {
        e.push(a);
      } };
      this.abort = function() {
        t.aborted = true, e.forEach(function(n) {
          return n();
        });
      };
    }, DC = bt.unstable_scheduleCallback, RC = bt.unstable_NormalPriority, St = { $$typeof: _a, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0, _currentRenderer: null, _currentRenderer2: null }, Tt = bt.unstable_now, nf = console.createTask ? console.createTask : function() {
      return null;
    }, Or = 1, af = 2, jt = -0, Qi = -0, si = -0, ri = null, an = -1.1, Yo = -0, ct = -0, he = -1.1, me = -1.1, st = null, ht = false, ko = -0, Ha = -1.1, Mr = null, Zi = 0, rm = null, um = null, qo = -1.1, Nr = null, ts = -1.1, of = -1.1, ui = -0, ci = -1.1, Xn = -1.1, cm = 0, _r = null, gS = null, vS = null, Pi = -1.1, Go = null, Ji = -1.1, lf = -1.1, bS = -0, SS = -0, sf = 0, wC = null, TS = 0, zr = -1.1, rf = false, uf = false, Vr = null, fm = 0, Xo = 0, ns = null, ES = j.S;
    j.S = function(e, t) {
      if (gT = Vt(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > ci && 0 > Xn) {
          ci = Tt();
          var n = cr(), a = ur();
          (n !== Ji || a !== Go) && (Ji = -1.1), Pi = n, Go = a;
        }
        $D(e, t);
      }
      ES !== null && ES(e, t);
    };
    var $o = Me(null), oa = { recordUnsafeLifecycleWarnings: function() {
    }, flushPendingUnsafeLifecycleWarnings: function() {
    }, recordLegacyContextWarning: function() {
    }, flushLegacyContextWarning: function() {
    }, discardPendingWarnings: function() {
    } }, jr = [], Ur = [], Br = [], Lr = [], Hr = [], Yr = [], Qo = /* @__PURE__ */ new Set();
    oa.recordUnsafeLifecycleWarnings = function(e, t) {
      Qo.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== true && jr.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillMount == "function" && Ur.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== true && Br.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Lr.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== true && Hr.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillUpdate == "function" && Yr.push(e));
    }, oa.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < jr.length && (jr.forEach(function(f) {
        e.add(k(f) || "Component"), Qo.add(f.type);
      }), jr = []);
      var t = /* @__PURE__ */ new Set();
      0 < Ur.length && (Ur.forEach(function(f) {
        t.add(k(f) || "Component"), Qo.add(f.type);
      }), Ur = []);
      var n = /* @__PURE__ */ new Set();
      0 < Br.length && (Br.forEach(function(f) {
        n.add(k(f) || "Component"), Qo.add(f.type);
      }), Br = []);
      var a = /* @__PURE__ */ new Set();
      0 < Lr.length && (Lr.forEach(function(f) {
        a.add(k(f) || "Component"), Qo.add(f.type);
      }), Lr = []);
      var o = /* @__PURE__ */ new Set();
      0 < Hr.length && (Hr.forEach(function(f) {
        o.add(k(f) || "Component"), Qo.add(f.type);
      }), Hr = []);
      var s = /* @__PURE__ */ new Set();
      if (0 < Yr.length && (Yr.forEach(function(f) {
        s.add(k(f) || "Component"), Qo.add(f.type);
      }), Yr = []), 0 < t.size) {
        var u = S(t);
        console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, u);
      }
      0 < a.size && (u = S(a), console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`, u)), 0 < s.size && (u = S(s), console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, u)), 0 < e.size && (u = S(e), console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, u)), 0 < n.size && (u = S(n), console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, u)), 0 < o.size && (u = S(o), console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, u));
    };
    var cf = /* @__PURE__ */ new Map(), AS = /* @__PURE__ */ new Set();
    oa.recordLegacyContextWarning = function(e, t) {
      for (var n = null, a = e; a !== null; ) a.mode & Jt && (n = a), a = a.return;
      n === null ? console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.") : !AS.has(e.type) && (a = cf.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], cf.set(n, a)), a.push(e));
    }, oa.flushLegacyContextWarning = function() {
      cf.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], n = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            n.add(k(o) || "Component"), AS.add(o.type);
          });
          var a = S(n);
          te(t, function() {
            console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`, a);
          });
        }
      });
    }, oa.discardPendingWarnings = function() {
      jr = [], Ur = [], Br = [], Lr = [], Hr = [], Yr = [], cf = /* @__PURE__ */ new Map();
    };
    var xS = { react_stack_bottom_frame: function(e, t, n) {
      var a = za;
      za = true;
      try {
        return e(t, n);
      } finally {
        za = a;
      }
    } }, dm = xS.react_stack_bottom_frame.bind(xS), DS = { react_stack_bottom_frame: function(e) {
      var t = za;
      za = true;
      try {
        return e.render();
      } finally {
        za = t;
      }
    } }, RS = DS.react_stack_bottom_frame.bind(DS), wS = { react_stack_bottom_frame: function(e, t) {
      try {
        t.componentDidMount();
      } catch (n) {
        Xe(e, e.return, n);
      }
    } }, hm = wS.react_stack_bottom_frame.bind(wS), CS = { react_stack_bottom_frame: function(e, t, n, a, o) {
      try {
        t.componentDidUpdate(n, a, o);
      } catch (s) {
        Xe(e, e.return, s);
      }
    } }, OS = CS.react_stack_bottom_frame.bind(CS), MS = { react_stack_bottom_frame: function(e, t) {
      var n = t.stack;
      e.componentDidCatch(t.value, { componentStack: n !== null ? n : "" });
    } }, CC = MS.react_stack_bottom_frame.bind(MS), NS = { react_stack_bottom_frame: function(e, t, n) {
      try {
        n.componentWillUnmount();
      } catch (a) {
        Xe(e, t, a);
      }
    } }, _S = NS.react_stack_bottom_frame.bind(NS), zS = { react_stack_bottom_frame: function(e) {
      var t = e.create;
      return e = e.inst, t = t(), e.destroy = t;
    } }, OC = zS.react_stack_bottom_frame.bind(zS), VS = { react_stack_bottom_frame: function(e, t, n) {
      try {
        n();
      } catch (a) {
        Xe(e, t, a);
      }
    } }, MC = VS.react_stack_bottom_frame.bind(VS), jS = { react_stack_bottom_frame: function(e) {
      var t = e._init;
      return t(e._payload);
    } }, NC = jS.react_stack_bottom_frame.bind(jS), as = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), pm = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), ff = Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."), df = { then: function() {
      console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.');
    } }, Zo = null, kr = false, is = null, qr = 0, Ce = null, mm, US = mm = false, BS = {}, LS = {}, HS = {};
    E = function(e, t, n) {
      if (n !== null && typeof n == "object" && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
        if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        n._store.validated = 1;
        var a = k(e), o = a || "null";
        if (!BS[o]) {
          BS[o] = true, n = n._owner, e = e._debugOwner;
          var s = "";
          e && typeof e.tag == "number" && (o = k(e)) && (s = `

Check the render method of \`` + o + "`."), s || a && (s = `

Check the top-level render call using <` + a + ">.");
          var u = "";
          n != null && e !== n && (a = null, typeof n.tag == "number" ? a = k(n) : typeof n.name == "string" && (a = n.name), a && (u = " It was passed a child from " + a + ".")), te(t, function() {
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', s, u);
          });
        }
      }
    };
    var Po = N0(true), YS = N0(false), kS = 0, qS = 1, GS = 2, ym = 3, Ki = false, XS = false, gm = null, vm = false, os = Me(null), hf = Me(0), Cn = Me(null), $n = null, ls = 1, Gr = 2, gt = Me(0), pf = 0, Qn = 1, on = 2, On = 4, ln = 8, ss, $S = /* @__PURE__ */ new Set(), QS = /* @__PURE__ */ new Set(), bm = /* @__PURE__ */ new Set(), ZS = /* @__PURE__ */ new Set(), fi = 0, Se = null, Ie = null, Et = null, mf = false, rs = false, Jo = false, yf = 0, Xr = 0, di = null, _C = 0, zC = 25, V = null, Zn = null, hi = -1, $r = false, Qr = { readContext: lt, use: zi, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useLayoutEffect: mt, useInsertionEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useSyncExternalStore: mt, useId: mt, useHostTransitionStatus: mt, useFormState: mt, useActionState: mt, useOptimistic: mt, useMemoCache: mt, useCacheRefresh: mt };
    Qr.useEffectEvent = mt;
    var Sm = null, PS = null, Tm = null, JS = null, Ya = null, la = null, gf = null;
    Sm = { readContext: function(e) {
      return lt(e);
    }, use: zi, useCallback: function(e, t) {
      return V = "useCallback", _e(), xl(t), gh(e, t);
    }, useContext: function(e) {
      return V = "useContext", _e(), lt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", _e(), xl(t), uc(e, t);
    }, useImperativeHandle: function(e, t, n) {
      return V = "useImperativeHandle", _e(), xl(n), yh(e, t, n);
    }, useInsertionEffect: function(e, t) {
      V = "useInsertionEffect", _e(), xl(t), _o(4, on, e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", _e(), xl(t), mh(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", _e(), xl(t);
      var n = j.H;
      j.H = Ya;
      try {
        return vh(e, t);
      } finally {
        j.H = n;
      }
    }, useReducer: function(e, t, n) {
      V = "useReducer", _e();
      var a = j.H;
      j.H = Ya;
      try {
        return lh(e, t, n);
      } finally {
        j.H = a;
      }
    }, useRef: function(e) {
      return V = "useRef", _e(), hh(e);
    }, useState: function(e) {
      V = "useState", _e();
      var t = j.H;
      j.H = Ya;
      try {
        return ch(e);
      } finally {
        j.H = t;
      }
    }, useDebugValue: function() {
      V = "useDebugValue", _e();
    }, useDeferredValue: function(e, t) {
      return V = "useDeferredValue", _e(), bh(e, t);
    }, useTransition: function() {
      return V = "useTransition", _e(), Eh();
    }, useSyncExternalStore: function(e, t, n) {
      return V = "useSyncExternalStore", _e(), rh(e, t, n);
    }, useId: function() {
      return V = "useId", _e(), Ah();
    }, useFormState: function(e, t) {
      return V = "useFormState", _e(), ic(), Rl(e, t);
    }, useActionState: function(e, t) {
      return V = "useActionState", _e(), Rl(e, t);
    }, useOptimistic: function(e) {
      return V = "useOptimistic", _e(), fh(e);
    }, useHostTransitionStatus: zo, useMemoCache: No, useCacheRefresh: function() {
      return V = "useCacheRefresh", _e(), xh();
    }, useEffectEvent: function(e) {
      return V = "useEffectEvent", _e(), ph(e);
    } }, PS = { readContext: function(e) {
      return lt(e);
    }, use: zi, useCallback: function(e, t) {
      return V = "useCallback", q(), gh(e, t);
    }, useContext: function(e) {
      return V = "useContext", q(), lt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", q(), uc(e, t);
    }, useImperativeHandle: function(e, t, n) {
      return V = "useImperativeHandle", q(), yh(e, t, n);
    }, useInsertionEffect: function(e, t) {
      V = "useInsertionEffect", q(), _o(4, on, e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", q(), mh(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", q();
      var n = j.H;
      j.H = Ya;
      try {
        return vh(e, t);
      } finally {
        j.H = n;
      }
    }, useReducer: function(e, t, n) {
      V = "useReducer", q();
      var a = j.H;
      j.H = Ya;
      try {
        return lh(e, t, n);
      } finally {
        j.H = a;
      }
    }, useRef: function(e) {
      return V = "useRef", q(), hh(e);
    }, useState: function(e) {
      V = "useState", q();
      var t = j.H;
      j.H = Ya;
      try {
        return ch(e);
      } finally {
        j.H = t;
      }
    }, useDebugValue: function() {
      V = "useDebugValue", q();
    }, useDeferredValue: function(e, t) {
      return V = "useDeferredValue", q(), bh(e, t);
    }, useTransition: function() {
      return V = "useTransition", q(), Eh();
    }, useSyncExternalStore: function(e, t, n) {
      return V = "useSyncExternalStore", q(), rh(e, t, n);
    }, useId: function() {
      return V = "useId", q(), Ah();
    }, useActionState: function(e, t) {
      return V = "useActionState", q(), Rl(e, t);
    }, useFormState: function(e, t) {
      return V = "useFormState", q(), ic(), Rl(e, t);
    }, useOptimistic: function(e) {
      return V = "useOptimistic", q(), fh(e);
    }, useHostTransitionStatus: zo, useMemoCache: No, useCacheRefresh: function() {
      return V = "useCacheRefresh", q(), xh();
    }, useEffectEvent: function(e) {
      return V = "useEffectEvent", q(), ph(e);
    } }, Tm = { readContext: function(e) {
      return lt(e);
    }, use: zi, useCallback: function(e, t) {
      return V = "useCallback", q(), dc(e, t);
    }, useContext: function(e) {
      return V = "useContext", q(), lt(e);
    }, useEffect: function(e, t) {
      V = "useEffect", q(), fn(2048, ln, e, t);
    }, useImperativeHandle: function(e, t, n) {
      return V = "useImperativeHandle", q(), fc(e, t, n);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", q(), fn(4, on, e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", q(), fn(4, On, e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", q();
      var n = j.H;
      j.H = la;
      try {
        return hc(e, t);
      } finally {
        j.H = n;
      }
    }, useReducer: function(e, t, n) {
      V = "useReducer", q();
      var a = j.H;
      j.H = la;
      try {
        return Dl(e, t, n);
      } finally {
        j.H = a;
      }
    }, useRef: function() {
      return V = "useRef", q(), Pe().memoizedState;
    }, useState: function() {
      V = "useState", q();
      var e = j.H;
      j.H = la;
      try {
        return Dl(ta);
      } finally {
        j.H = e;
      }
    }, useDebugValue: function() {
      V = "useDebugValue", q();
    }, useDeferredValue: function(e, t) {
      return V = "useDeferredValue", q(), W0(e, t);
    }, useTransition: function() {
      return V = "useTransition", q(), ov();
    }, useSyncExternalStore: function(e, t, n) {
      return V = "useSyncExternalStore", q(), lc(e, t, n);
    }, useId: function() {
      return V = "useId", q(), Pe().memoizedState;
    }, useFormState: function(e) {
      return V = "useFormState", q(), ic(), sc(e);
    }, useActionState: function(e) {
      return V = "useActionState", q(), sc(e);
    }, useOptimistic: function(e, t) {
      return V = "useOptimistic", q(), G0(e, t);
    }, useHostTransitionStatus: zo, useMemoCache: No, useCacheRefresh: function() {
      return V = "useCacheRefresh", q(), Pe().memoizedState;
    }, useEffectEvent: function(e) {
      return V = "useEffectEvent", q(), cc(e);
    } }, JS = { readContext: function(e) {
      return lt(e);
    }, use: zi, useCallback: function(e, t) {
      return V = "useCallback", q(), dc(e, t);
    }, useContext: function(e) {
      return V = "useContext", q(), lt(e);
    }, useEffect: function(e, t) {
      V = "useEffect", q(), fn(2048, ln, e, t);
    }, useImperativeHandle: function(e, t, n) {
      return V = "useImperativeHandle", q(), fc(e, t, n);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", q(), fn(4, on, e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", q(), fn(4, On, e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", q();
      var n = j.H;
      j.H = gf;
      try {
        return hc(e, t);
      } finally {
        j.H = n;
      }
    }, useReducer: function(e, t, n) {
      V = "useReducer", q();
      var a = j.H;
      j.H = gf;
      try {
        return Fs(e, t, n);
      } finally {
        j.H = a;
      }
    }, useRef: function() {
      return V = "useRef", q(), Pe().memoizedState;
    }, useState: function() {
      V = "useState", q();
      var e = j.H;
      j.H = gf;
      try {
        return Fs(ta);
      } finally {
        j.H = e;
      }
    }, useDebugValue: function() {
      V = "useDebugValue", q();
    }, useDeferredValue: function(e, t) {
      return V = "useDeferredValue", q(), ev(e, t);
    }, useTransition: function() {
      return V = "useTransition", q(), lv();
    }, useSyncExternalStore: function(e, t, n) {
      return V = "useSyncExternalStore", q(), lc(e, t, n);
    }, useId: function() {
      return V = "useId", q(), Pe().memoizedState;
    }, useFormState: function(e) {
      return V = "useFormState", q(), ic(), rc(e);
    }, useActionState: function(e) {
      return V = "useActionState", q(), rc(e);
    }, useOptimistic: function(e, t) {
      return V = "useOptimistic", q(), $0(e, t);
    }, useHostTransitionStatus: zo, useMemoCache: No, useCacheRefresh: function() {
      return V = "useCacheRefresh", q(), Pe().memoizedState;
    }, useEffectEvent: function(e) {
      return V = "useEffectEvent", q(), cc(e);
    } }, Ya = { readContext: function(e) {
      return T(), lt(e);
    }, use: function(e) {
      return y(), zi(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", y(), _e(), gh(e, t);
    }, useContext: function(e) {
      return V = "useContext", y(), _e(), lt(e);
    }, useEffect: function(e, t) {
      return V = "useEffect", y(), _e(), uc(e, t);
    }, useImperativeHandle: function(e, t, n) {
      return V = "useImperativeHandle", y(), _e(), yh(e, t, n);
    }, useInsertionEffect: function(e, t) {
      V = "useInsertionEffect", y(), _e(), _o(4, on, e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", y(), _e(), mh(e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", y(), _e();
      var n = j.H;
      j.H = Ya;
      try {
        return vh(e, t);
      } finally {
        j.H = n;
      }
    }, useReducer: function(e, t, n) {
      V = "useReducer", y(), _e();
      var a = j.H;
      j.H = Ya;
      try {
        return lh(e, t, n);
      } finally {
        j.H = a;
      }
    }, useRef: function(e) {
      return V = "useRef", y(), _e(), hh(e);
    }, useState: function(e) {
      V = "useState", y(), _e();
      var t = j.H;
      j.H = Ya;
      try {
        return ch(e);
      } finally {
        j.H = t;
      }
    }, useDebugValue: function() {
      V = "useDebugValue", y(), _e();
    }, useDeferredValue: function(e, t) {
      return V = "useDeferredValue", y(), _e(), bh(e, t);
    }, useTransition: function() {
      return V = "useTransition", y(), _e(), Eh();
    }, useSyncExternalStore: function(e, t, n) {
      return V = "useSyncExternalStore", y(), _e(), rh(e, t, n);
    }, useId: function() {
      return V = "useId", y(), _e(), Ah();
    }, useFormState: function(e, t) {
      return V = "useFormState", y(), _e(), Rl(e, t);
    }, useActionState: function(e, t) {
      return V = "useActionState", y(), _e(), Rl(e, t);
    }, useOptimistic: function(e) {
      return V = "useOptimistic", y(), _e(), fh(e);
    }, useMemoCache: function(e) {
      return y(), No(e);
    }, useHostTransitionStatus: zo, useCacheRefresh: function() {
      return V = "useCacheRefresh", _e(), xh();
    }, useEffectEvent: function(e) {
      return V = "useEffectEvent", y(), _e(), ph(e);
    } }, la = { readContext: function(e) {
      return T(), lt(e);
    }, use: function(e) {
      return y(), zi(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", y(), q(), dc(e, t);
    }, useContext: function(e) {
      return V = "useContext", y(), q(), lt(e);
    }, useEffect: function(e, t) {
      V = "useEffect", y(), q(), fn(2048, ln, e, t);
    }, useImperativeHandle: function(e, t, n) {
      return V = "useImperativeHandle", y(), q(), fc(e, t, n);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", y(), q(), fn(4, on, e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", y(), q(), fn(4, On, e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", y(), q();
      var n = j.H;
      j.H = la;
      try {
        return hc(e, t);
      } finally {
        j.H = n;
      }
    }, useReducer: function(e, t, n) {
      V = "useReducer", y(), q();
      var a = j.H;
      j.H = la;
      try {
        return Dl(e, t, n);
      } finally {
        j.H = a;
      }
    }, useRef: function() {
      return V = "useRef", y(), q(), Pe().memoizedState;
    }, useState: function() {
      V = "useState", y(), q();
      var e = j.H;
      j.H = la;
      try {
        return Dl(ta);
      } finally {
        j.H = e;
      }
    }, useDebugValue: function() {
      V = "useDebugValue", y(), q();
    }, useDeferredValue: function(e, t) {
      return V = "useDeferredValue", y(), q(), W0(e, t);
    }, useTransition: function() {
      return V = "useTransition", y(), q(), ov();
    }, useSyncExternalStore: function(e, t, n) {
      return V = "useSyncExternalStore", y(), q(), lc(e, t, n);
    }, useId: function() {
      return V = "useId", y(), q(), Pe().memoizedState;
    }, useFormState: function(e) {
      return V = "useFormState", y(), q(), sc(e);
    }, useActionState: function(e) {
      return V = "useActionState", y(), q(), sc(e);
    }, useOptimistic: function(e, t) {
      return V = "useOptimistic", y(), q(), G0(e, t);
    }, useMemoCache: function(e) {
      return y(), No(e);
    }, useHostTransitionStatus: zo, useCacheRefresh: function() {
      return V = "useCacheRefresh", q(), Pe().memoizedState;
    }, useEffectEvent: function(e) {
      return V = "useEffectEvent", y(), q(), cc(e);
    } }, gf = { readContext: function(e) {
      return T(), lt(e);
    }, use: function(e) {
      return y(), zi(e);
    }, useCallback: function(e, t) {
      return V = "useCallback", y(), q(), dc(e, t);
    }, useContext: function(e) {
      return V = "useContext", y(), q(), lt(e);
    }, useEffect: function(e, t) {
      V = "useEffect", y(), q(), fn(2048, ln, e, t);
    }, useImperativeHandle: function(e, t, n) {
      return V = "useImperativeHandle", y(), q(), fc(e, t, n);
    }, useInsertionEffect: function(e, t) {
      return V = "useInsertionEffect", y(), q(), fn(4, on, e, t);
    }, useLayoutEffect: function(e, t) {
      return V = "useLayoutEffect", y(), q(), fn(4, On, e, t);
    }, useMemo: function(e, t) {
      V = "useMemo", y(), q();
      var n = j.H;
      j.H = la;
      try {
        return hc(e, t);
      } finally {
        j.H = n;
      }
    }, useReducer: function(e, t, n) {
      V = "useReducer", y(), q();
      var a = j.H;
      j.H = la;
      try {
        return Fs(e, t, n);
      } finally {
        j.H = a;
      }
    }, useRef: function() {
      return V = "useRef", y(), q(), Pe().memoizedState;
    }, useState: function() {
      V = "useState", y(), q();
      var e = j.H;
      j.H = la;
      try {
        return Fs(ta);
      } finally {
        j.H = e;
      }
    }, useDebugValue: function() {
      V = "useDebugValue", y(), q();
    }, useDeferredValue: function(e, t) {
      return V = "useDeferredValue", y(), q(), ev(e, t);
    }, useTransition: function() {
      return V = "useTransition", y(), q(), lv();
    }, useSyncExternalStore: function(e, t, n) {
      return V = "useSyncExternalStore", y(), q(), lc(e, t, n);
    }, useId: function() {
      return V = "useId", y(), q(), Pe().memoizedState;
    }, useFormState: function(e) {
      return V = "useFormState", y(), q(), rc(e);
    }, useActionState: function(e) {
      return V = "useActionState", y(), q(), rc(e);
    }, useOptimistic: function(e, t) {
      return V = "useOptimistic", y(), q(), $0(e, t);
    }, useMemoCache: function(e) {
      return y(), No(e);
    }, useHostTransitionStatus: zo, useCacheRefresh: function() {
      return V = "useCacheRefresh", q(), Pe().memoizedState;
    }, useEffectEvent: function(e) {
      return V = "useEffectEvent", y(), q(), cc(e);
    } };
    var KS = {}, FS = /* @__PURE__ */ new Set(), IS = /* @__PURE__ */ new Set(), WS = /* @__PURE__ */ new Set(), eT = /* @__PURE__ */ new Set(), tT = /* @__PURE__ */ new Set(), nT = /* @__PURE__ */ new Set(), aT = /* @__PURE__ */ new Set(), iT = /* @__PURE__ */ new Set(), oT = /* @__PURE__ */ new Set(), lT = /* @__PURE__ */ new Set();
    Object.freeze(KS);
    var Em = { enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = An(e), o = Oi(a);
      o.payload = t, n != null && (Rh(n), o.callback = n), t = Mi(e, o, a), t !== null && (va(a, "this.setState()", e), dt(t, e, a), Zs(t, e, a));
    }, enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = An(e), o = Oi(a);
      o.tag = qS, o.payload = t, n != null && (Rh(n), o.callback = n), t = Mi(e, o, a), t !== null && (va(a, "this.replaceState()", e), dt(t, e, a), Zs(t, e, a));
    }, enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = An(e), a = Oi(n);
      a.tag = GS, t != null && (Rh(t), a.callback = t), t = Mi(e, a, n), t !== null && (va(n, "this.forceUpdate()", e), dt(t, e, n), Zs(t, e, n));
    } }, us = null, Am = null, xm = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."), At = false, sT = {}, rT = {}, uT = {}, cT = {}, cs = false, fT = {}, vf = {}, Dm = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }, dT = false, hT = null;
    hT = /* @__PURE__ */ new Set();
    var pi = false, xt = false, Rm = false, pT = typeof WeakSet == "function" ? WeakSet : Set, Ut = null, fs = null, ds = null, Dt = null, pn = false, sa = null, Ot = false, Zr = 8192, VC = { getCacheForType: function(e) {
      var t = lt(St), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }, cacheSignal: function() {
      return lt(St).controller.signal;
    }, getOwner: function() {
      return Rn;
    } };
    if (typeof Symbol == "function" && Symbol.for) {
      var Pr = Symbol.for;
      Pr("selector.component"), Pr("selector.has_pseudo_class"), Pr("selector.role"), Pr("selector.test_id"), Pr("selector.text");
    }
    var jC = [], UC = typeof WeakMap == "function" ? WeakMap : Map, Bt = 0, Mt = 2, Mn = 4, mi = 0, Jr = 1, Ko = 2, bf = 3, Fi = 4, Sf = 6, mT = 5, qe = Bt, We = null, Ne = null, Oe = 0, mn = 0, Tf = 1, Fo = 2, Kr = 3, yT = 4, wm = 5, Fr = 6, Ef = 7, Cm = 8, Io = 9, Je = mn, Nn = null, Ii = false, hs = false, Om = false, ka = 0, ft = mi, Wi = 0, eo = 0, Mm = 0, yn = 0, Wo = 0, Ir = null, sn = null, Af = false, xf = 0, gT = 0, vT = 300, Df = 1 / 0, bT = 500, Wr = null, yt = null, to = null, Rf = 0, Nm = 1, _m = 2, ST = 3, no = 0, TT = 1, ET = 2, AT = 3, xT = 4, wf = 5, Rt = 0, ao = null, ps = null, ra = 0, zm = 0, Vm = -0, jm = null, DT = null, RT = null, ua = Rf, wT = null, BC = 50, eu = 0, Um = null, Bm = false, Cf = false, LC = 50, el = 0, tu = null, ms = false, Of = null, CT = false, OT = /* @__PURE__ */ new Set(), HC = {}, Mf = null, ys = null, Lm = false, Hm = false, Nf = false, Ym = false, io = 0, km = {};
    (function() {
      for (var e = 0; e < Ip.length; e++) {
        var t = Ip[e], n = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Wn(n, "on" + t);
      }
      Wn(oS, "onAnimationEnd"), Wn(lS, "onAnimationIteration"), Wn(sS, "onAnimationStart"), Wn("dblclick", "onDoubleClick"), Wn("focusin", "onFocus"), Wn("focusout", "onBlur"), Wn(pC, "onTransitionRun"), Wn(mC, "onTransitionStart"), Wn(yC, "onTransitionCancel"), Wn(rS, "onTransitionEnd");
    })(), xe("onMouseEnter", ["mouseout", "mouseover"]), xe("onMouseLeave", ["mouseout", "mouseover"]), xe("onPointerEnter", ["pointerout", "pointerover"]), xe("onPointerLeave", ["pointerout", "pointerover"]), ke("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ke("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ke("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ke("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ke("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ke("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var nu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nu)), _f = "_reactListening" + Math.random().toString(36).slice(2), MT = false, NT = false, zf = false, _T = false, Vf = false, jf = false, zT = false, Uf = {}, YC = /\r\n?/g, kC = /\u0000|\uFFFD/g, tl = "http://www.w3.org/1999/xlink", Gm = "http://www.w3.org/XML/1998/namespace", qC = "javascript:throw new Error('React form unexpectedly submitted.')", GC = "suppressHydrationWarning", nl = "&", Bf = "/&", au = "$", iu = "/$", oo = "$?", al = "$~", gs = "$!", XC = "html", $C = "body", QC = "head", Xm = "F!", VT = "F", jT = "loading", ZC = "style", yi = 0, vs = 1, Lf = 2, $m = null, Qm = null, UT = { dialog: true, webview: true }, Zm = null, ou = void 0, BT = typeof setTimeout == "function" ? setTimeout : void 0, PC = typeof clearTimeout == "function" ? clearTimeout : void 0, il = -1, LT = typeof Promise == "function" ? Promise : void 0, JC = typeof queueMicrotask == "function" ? queueMicrotask : typeof LT < "u" ? function(e) {
      return LT.resolve(null).then(e).catch(NR);
    } : BT, Pm = null, ol = 0, lu = 1, HT = 2, YT = 3, Pn = 4, Jn = /* @__PURE__ */ new Map(), kT = /* @__PURE__ */ new Set(), gi = $e.d;
    $e.d = { f: function() {
      var e = gi.f(), t = Nl();
      return e || t;
    }, r: function(e) {
      var t = P(e);
      t !== null && t.tag === 5 && t.type === "form" ? iv(t) : gi.r(e);
    }, D: function(e) {
      gi.D(e), Fb("dns-prefetch", e, null);
    }, C: function(e, t) {
      gi.C(e, t), Fb("preconnect", e, t);
    }, L: function(e, t, n) {
      gi.L(e, t, n);
      var a = bs;
      if (a && e && t) {
        var o = 'link[rel="preload"][as="' + jn(t) + '"]';
        t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + jn(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + jn(n.imageSizes) + '"]')) : o += '[href="' + jn(e) + '"]';
        var s = o;
        switch (t) {
          case "style":
            s = Vl(e);
            break;
          case "script":
            s = jl(e);
        }
        Jn.has(s) || (e = ze({ rel: "preload", href: t === "image" && n && n.imageSrcSet ? void 0 : e, as: t }, n), Jn.set(s, e), a.querySelector(o) !== null || t === "style" && a.querySelector(dr(s)) || t === "script" && a.querySelector(hr(s)) || (t = a.createElement("link"), Yt(t, "link", e), ce(t), a.head.appendChild(t)));
      }
    }, m: function(e, t) {
      gi.m(e, t);
      var n = bs;
      if (n && e) {
        var a = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + jn(a) + '"][href="' + jn(e) + '"]', s = o;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            s = jl(e);
        }
        if (!Jn.has(s) && (e = ze({ rel: "modulepreload", href: e }, t), Jn.set(s, e), n.querySelector(o) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (n.querySelector(hr(s))) return;
          }
          a = n.createElement("link"), Yt(a, "link", e), ce(a), n.head.appendChild(a);
        }
      }
    }, X: function(e, t) {
      gi.X(e, t);
      var n = bs;
      if (n && e) {
        var a = Ae(n).hoistableScripts, o = jl(e), s = a.get(o);
        s || (s = n.querySelector(hr(o)), s || (e = ze({ src: e, async: true }, t), (t = Jn.get(o)) && yp(e, t), s = n.createElement("script"), ce(s), Yt(s, "link", e), n.head.appendChild(s)), s = { type: "script", instance: s, count: 1, state: null }, a.set(o, s));
      }
    }, S: function(e, t, n) {
      gi.S(e, t, n);
      var a = bs;
      if (a && e) {
        var o = Ae(a).hoistableStyles, s = Vl(e);
        t = t || "default";
        var u = o.get(s);
        if (!u) {
          var f = { loading: ol, preload: null };
          if (u = a.querySelector(dr(s))) f.loading = lu | Pn;
          else {
            e = ze({ rel: "stylesheet", href: e, "data-precedence": t }, n), (n = Jn.get(s)) && mp(e, n);
            var p = u = a.createElement("link");
            ce(p), Yt(p, "link", e), p._p = new Promise(function(g, M) {
              p.onload = g, p.onerror = M;
            }), p.addEventListener("load", function() {
              f.loading |= lu;
            }), p.addEventListener("error", function() {
              f.loading |= HT;
            }), f.loading |= Pn, _c(u, t, a);
          }
          u = { type: "stylesheet", instance: u, count: 1, state: f }, o.set(s, u);
        }
      }
    }, M: function(e, t) {
      gi.M(e, t);
      var n = bs;
      if (n && e) {
        var a = Ae(n).hoistableScripts, o = jl(e), s = a.get(o);
        s || (s = n.querySelector(hr(o)), s || (e = ze({ src: e, async: true, type: "module" }, t), (t = Jn.get(o)) && yp(e, t), s = n.createElement("script"), ce(s), Yt(s, "link", e), n.head.appendChild(s)), s = { type: "script", instance: s, count: 1, state: null }, a.set(o, s));
      }
    } };
    var bs = typeof document > "u" ? null : document, Hf = null, KC = 6e4, FC = 800, IC = 500, Jm = 0, Km = null, Yf = null, ll = dw, su = { $$typeof: _a, Provider: null, Consumer: null, _currentValue: ll, _currentValue2: ll, _threadCount: 0 }, qT = "%c%s%c", GT = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", XT = "", kf = " ", WC = Function.prototype.bind, $T = false, QT = null, ZT = null, PT = null, JT = null, KT = null, FT = null, IT = null, WT = null, eE = null, tE = null;
    QT = function(e, t, n, a) {
      t = i(e, t), t !== null && (n = l(t.memoizedState, n, 0, a), t.memoizedState = n, t.baseState = n, e.memoizedProps = ze({}, e.memoizedProps), n = Zt(e, 2), n !== null && dt(n, e, 2));
    }, ZT = function(e, t, n) {
      t = i(e, t), t !== null && (n = d(t.memoizedState, n, 0), t.memoizedState = n, t.baseState = n, e.memoizedProps = ze({}, e.memoizedProps), n = Zt(e, 2), n !== null && dt(n, e, 2));
    }, PT = function(e, t, n, a) {
      t = i(e, t), t !== null && (n = r(t.memoizedState, n, a), t.memoizedState = n, t.baseState = n, e.memoizedProps = ze({}, e.memoizedProps), n = Zt(e, 2), n !== null && dt(n, e, 2));
    }, JT = function(e, t, n) {
      e.pendingProps = l(e.memoizedProps, t, 0, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Zt(e, 2), t !== null && dt(t, e, 2);
    }, KT = function(e, t) {
      e.pendingProps = d(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Zt(e, 2), t !== null && dt(t, e, 2);
    }, FT = function(e, t, n) {
      e.pendingProps = r(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Zt(e, 2), t !== null && dt(t, e, 2);
    }, IT = function(e) {
      var t = Zt(e, 2);
      t !== null && dt(t, e, 2);
    }, WT = function(e) {
      var t = Ns(), n = Zt(e, t);
      n !== null && dt(n, e, t);
    }, eE = function(e) {
      h = e;
    }, tE = function(e) {
      m = e;
    };
    var qf = true, Gf = null, Fm = false, lo = null, so = null, ro = null, ru = /* @__PURE__ */ new Map(), uu = /* @__PURE__ */ new Map(), uo = [], eO = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "), Xf = null;
    if (Bc.prototype.render = Ep.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var n = arguments;
      typeof n[1] == "function" ? console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : H(n[1]) ? console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof n[1] < "u" && console.error("You passed a second argument to root.render(...) but it only accepts one argument."), n = e;
      var a = t.current, o = An(a);
      gp(a, o, n, t, null, null);
    }, Bc.prototype.unmount = Ep.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (qe & (Mt | Mn)) !== Bt && console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), gp(e.current, 2, null, e, null, null), Nl(), t[Yi] = null;
      }
    }, Bc.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = xi();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < uo.length && t !== 0 && t < uo[n].priority; n++) ;
        uo.splice(n, 0, e), n === 0 && f1(e);
      }
    }, (function() {
      var e = Ap.version;
      if (e !== "19.2.6") throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.6
Learn more: https://react.dev/warnings/version-mismatch`));
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"), $e.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error("Argument appears to not be a ReactComponent. Keys: " + e));
      return e = re(t), e = e !== null ? Ge(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = { bundleType: 1, version: "19.2.6", rendererPackageName: "react-dom", currentDispatcherRef: j, reconcilerVersion: "19.2.6" };
      return e.overrideHookState = QT, e.overrideHookStateDeletePath = ZT, e.overrideHookStateRenamePath = PT, e.overrideProps = JT, e.overridePropsDeletePath = KT, e.overridePropsRenamePath = FT, e.scheduleUpdate = IT, e.scheduleRetry = WT, e.setErrorHandler = eE, e.setSuspenseHandler = tE, e.scheduleRefresh = U, e.scheduleRoot = O, e.setRefreshHandler = X, e.getCurrentFiber = aw, yd(e);
    })() && Ba && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var nE = window.location.protocol;
      /^(https?|file):$/.test(nE) && console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (nE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    cu.createRoot = function(e, t) {
      if (!H(e)) throw Error("Target container is not a DOM element.");
      m1(e);
      var n = false, a = "", o = dv, s = hv, u = pv;
      return t != null && (t.hydrate ? console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Na && console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = i1(e, 1, false, null, null, n, a, null, o, s, u, p1), e[Yi] = t.current, ap(e), new Ep(t);
    }, cu.hydrateRoot = function(e, t, n) {
      if (!H(e)) throw Error("Target container is not a DOM element.");
      m1(e), t === void 0 && console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = false, o = "", s = dv, u = hv, f = pv, p = null;
      return n != null && (n.unstable_strictMode === true && (a = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (p = n.formState)), t = i1(e, 1, true, t, n ?? null, a, o, p, s, u, f, p1), t.context = o1(null), n = t.current, a = An(n), a = Ai(a), o = Oi(a), o.callback = null, Mi(n, o, a), va(a, "hydrateRoot()", null), n = a, t.current.lanes = n, Ei(t, n), Oa(t), e[Yi] = t.current, ap(e), new Bc(t);
    }, cu.version = "19.2.6", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), cu;
}
var dE;
function cO() {
  return dE || (dE = 1, ey.exports = uO()), ey.exports;
}
var fO = cO(), iy = { exports: {} }, fu = {}, hE;
function dO() {
  if (hE) return fu;
  hE = 1;
  /**
  * @license React
  * react-jsx-runtime.development.js
  *
  * Copyright (c) Meta Platforms, Inc. and affiliates.
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
  return (function() {
    function i(w) {
      if (w == null) return null;
      if (typeof w == "function") return w.$$typeof === Me ? null : w.displayName || w.name || null;
      if (typeof w == "string") return w;
      switch (w) {
        case H:
          return "Fragment";
        case K:
          return "Profiler";
        case Y:
          return "StrictMode";
        case Ge:
          return "Suspense";
        case Ye:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof w == "object") switch (typeof w.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), w.$$typeof) {
        case X:
          return "Portal";
        case W:
          return w.displayName || "Context";
        case Z:
          return (w._context.displayName || "Context") + ".Consumer";
        case re:
          var Q = w.render;
          return w = w.displayName, w || (w = Q.displayName || Q.name || "", w = w !== "" ? "ForwardRef(" + w + ")" : "ForwardRef"), w;
        case ae:
          return Q = w.displayName || null, Q !== null ? Q : i(w.type) || "Memo";
        case Re:
          Q = w._payload, w = w._init;
          try {
            return i(w(Q));
          } catch {
          }
      }
      return null;
    }
    function l(w) {
      return "" + w;
    }
    function r(w) {
      try {
        l(w);
        var Q = false;
      } catch {
        Q = true;
      }
      if (Q) {
        Q = console;
        var pe = Q.error, ue = typeof Symbol == "function" && Symbol.toStringTag && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return pe.call(Q, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", ue), l(w);
      }
    }
    function c(w) {
      if (w === H) return "<>";
      if (typeof w == "object" && w !== null && w.$$typeof === Re) return "<...>";
      try {
        var Q = i(w);
        return Q ? "<" + Q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function d() {
      var w = ne.A;
      return w === null ? null : w.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function h(w) {
      if (ge.call(w, "key")) {
        var Q = Object.getOwnPropertyDescriptor(w, "key").get;
        if (Q && Q.isReactWarning) return false;
      }
      return w.key !== void 0;
    }
    function y(w, Q) {
      function pe() {
        $ || ($ = true, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", Q));
      }
      pe.isReactWarning = true, Object.defineProperty(w, "key", { get: pe, configurable: true });
    }
    function T() {
      var w = i(this.type);
      return de[w] || (de[w] = true, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), w = this.props.ref, w !== void 0 ? w : null;
    }
    function A(w, Q, pe, ue, ut, zn) {
      var Ee = pe.ref;
      return w = { $$typeof: U, type: w, key: Q, props: pe, _owner: ue }, (Ee !== void 0 ? Ee : null) !== null ? Object.defineProperty(w, "ref", { enumerable: false, get: T }) : Object.defineProperty(w, "ref", { enumerable: false, value: null }), w._store = {}, Object.defineProperty(w._store, "validated", { configurable: false, enumerable: false, writable: true, value: 0 }), Object.defineProperty(w, "_debugInfo", { configurable: false, enumerable: false, writable: true, value: null }), Object.defineProperty(w, "_debugStack", { configurable: false, enumerable: false, writable: true, value: ut }), Object.defineProperty(w, "_debugTask", { configurable: false, enumerable: false, writable: true, value: zn }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    }
    function E(w, Q, pe, ue, ut, zn) {
      var Ee = Q.children;
      if (Ee !== void 0) if (ue) if (Qe(Ee)) {
        for (ue = 0; ue < Ee.length; ue++) S(Ee[ue]);
        Object.freeze && Object.freeze(Ee);
      } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
      else S(Ee);
      if (ge.call(Q, "key")) {
        Ee = i(w);
        var _t = Object.keys(Q).filter(function(In) {
          return In !== "key";
        });
        ue = 0 < _t.length ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}", Ve[Ee + ue] || (_t = 0 < _t.length ? "{" + _t.join(": ..., ") + ": ...}" : "{}", console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, Ee, _t, Ee), Ve[Ee + ue] = true);
      }
      if (Ee = null, pe !== void 0 && (r(pe), Ee = "" + pe), h(Q) && (r(Q.key), Ee = "" + Q.key), "key" in Q) {
        pe = {};
        for (var $t in Q) $t !== "key" && (pe[$t] = Q[$t]);
      } else pe = Q;
      return Ee && y(pe, typeof w == "function" ? w.displayName || w.name || "Unknown" : w), A(w, Ee, pe, d(), ut, zn);
    }
    function S(w) {
      b(w) ? w._store && (w._store.validated = 1) : typeof w == "object" && w !== null && w.$$typeof === Re && (w._payload.status === "fulfilled" ? b(w._payload.value) && w._payload.value._store && (w._payload.value._store.validated = 1) : w._store && (w._store.validated = 1));
    }
    function b(w) {
      return typeof w == "object" && w !== null && w.$$typeof === U;
    }
    var O = Eu(), U = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), H = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), re = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ge = /* @__PURE__ */ Symbol.for("react.suspense"), Ye = /* @__PURE__ */ Symbol.for("react.suspense_list"), ae = /* @__PURE__ */ Symbol.for("react.memo"), Re = /* @__PURE__ */ Symbol.for("react.lazy"), k = /* @__PURE__ */ Symbol.for("react.activity"), Me = /* @__PURE__ */ Symbol.for("react.client.reference"), ne = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = Object.prototype.hasOwnProperty, Qe = Array.isArray, Ke = console.createTask ? console.createTask : function() {
      return null;
    };
    O = { react_stack_bottom_frame: function(w) {
      return w();
    } };
    var $, de = {}, ee = O.react_stack_bottom_frame.bind(O, m)(), be = Ke(c(m)), Ve = {};
    fu.Fragment = H, fu.jsx = function(w, Q, pe) {
      var ue = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return E(w, Q, pe, false, ue ? Error("react-stack-top-frame") : ee, ue ? Ke(c(w)) : be);
    }, fu.jsxs = function(w, Q, pe) {
      var ue = 1e4 > ne.recentlyCreatedOwnerStacks++;
      return E(w, Q, pe, true, ue ? Error("react-stack-top-frame") : ee, ue ? Ke(c(w)) : be);
    };
  })(), fu;
}
var pE;
function hO() {
  return pE || (pE = 1, iy.exports = dO()), iy.exports;
}
var Ty = hO();
const zA = ye.createContext({});
function pO(i) {
  const l = ye.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const mO = typeof window < "u", yO = mO ? ye.useLayoutEffect : ye.useEffect, Zy = ye.createContext(null);
function Py(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function ad(i, l) {
  const r = i.indexOf(l);
  r > -1 && i.splice(r, 1);
}
const $a = (i, l, r) => r > l ? l : r < i ? i : r;
function Ey(i, l) {
  return l ? `${i}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${l}` : i;
}
let ws = () => {
}, bi = () => {
};
typeof process < "u" && (ws = (i, l, r) => {
  !i && typeof console < "u" && console.warn(Ey(l, r));
}, bi = (i, l, r) => {
  if (!i) throw new Error(Ey(l, r));
});
const po = {}, VA = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function jA(i) {
  return typeof i == "object" && i !== null;
}
const UA = (i) => /^0[^.\s]+$/u.test(i);
function BA(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Fn = (i) => i, gO = (i, l) => (r) => l(i(r)), Au = (...i) => i.reduce(gO), vu = (i, l, r) => {
  const c = l - i;
  return c === 0 ? 1 : (r - i) / c;
};
class Jy {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Py(this.subscriptions, l), () => ad(this.subscriptions, l);
  }
  notify(l, r, c) {
    const d = this.subscriptions.length;
    if (d) if (d === 1) this.subscriptions[0](l, r, c);
    else for (let m = 0; m < d; m++) {
      const h = this.subscriptions[m];
      h && h(l, r, c);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const gn = (i) => i * 1e3, Kn = (i) => i / 1e3;
function LA(i, l) {
  return l ? i * (1e3 / l) : 0;
}
const mE = /* @__PURE__ */ new Set();
function Ky(i, l, r) {
  i || mE.has(l) || (console.warn(Ey(l, r)), mE.add(l));
}
const HA = (i, l, r) => (((1 - 3 * r + 3 * l) * i + (3 * r - 6 * l)) * i + 3 * l) * i, vO = 1e-7, bO = 12;
function SO(i, l, r, c, d) {
  let m, h, y = 0;
  do
    h = l + (r - l) / 2, m = HA(h, c, d) - i, m > 0 ? r = h : l = h;
  while (Math.abs(m) > vO && ++y < bO);
  return h;
}
function xu(i, l, r, c) {
  if (i === l && r === c) return Fn;
  const d = (m) => SO(m, 0, 1, i, r);
  return (m) => m === 0 || m === 1 ? m : HA(d(m), l, c);
}
const YA = (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, kA = (i) => (l) => 1 - i(1 - l), qA = xu(0.33, 1.53, 0.69, 0.99), Fy = kA(qA), GA = YA(Fy), XA = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Fy(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Iy = (i) => 1 - Math.sin(Math.acos(i)), $A = kA(Iy), QA = YA(Iy), TO = xu(0.42, 0, 1, 1), EO = xu(0, 0, 0.58, 1), ZA = xu(0.42, 0, 0.58, 1), AO = (i) => Array.isArray(i) && typeof i[0] != "number", PA = (i) => Array.isArray(i) && typeof i[0] == "number", yE = { linear: Fn, easeIn: TO, easeInOut: ZA, easeOut: EO, circIn: Iy, circInOut: QA, circOut: $A, backIn: Fy, backInOut: GA, backOut: qA, anticipate: XA }, xO = (i) => typeof i == "string", gE = (i) => {
  if (PA(i)) {
    bi(i.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [l, r, c, d] = i;
    return xu(l, r, c, d);
  } else if (xO(i)) return bi(yE[i] !== void 0, `Invalid easing type '${i}'`, "invalid-easing-type"), yE[i];
  return i;
}, Qf = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function DO(i, l) {
  let r = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set(), d = false, m = false;
  const h = /* @__PURE__ */ new WeakSet();
  let y = { delta: 0, timestamp: 0, isProcessing: false };
  function T(E) {
    h.has(E) && (A.schedule(E), i()), E(y);
  }
  const A = { schedule: (E, S = false, b = false) => {
    const U = b && d ? r : c;
    return S && h.add(E), U.add(E), E;
  }, cancel: (E) => {
    c.delete(E), h.delete(E);
  }, process: (E) => {
    if (y = E, d) {
      m = true;
      return;
    }
    d = true;
    const S = r;
    r = c, c = S, r.forEach(T), r.clear(), d = false, m && (m = false, A.process(E));
  } };
  return A;
}
const RO = 40;
function JA(i, l) {
  let r = false, c = true;
  const d = { delta: 0, timestamp: 0, isProcessing: false }, m = () => r = true, h = Qf.reduce((Z, W) => (Z[W] = DO(m), Z), {}), { setup: y, read: T, resolveKeyframes: A, preUpdate: E, update: S, preRender: b, render: O, postRender: U } = h, X = () => {
    const Z = po.useManualTiming, W = Z ? d.timestamp : performance.now();
    r = false, Z || (d.delta = c ? 1e3 / 60 : Math.max(Math.min(W - d.timestamp, RO), 1)), d.timestamp = W, d.isProcessing = true, y.process(d), T.process(d), A.process(d), E.process(d), S.process(d), b.process(d), O.process(d), U.process(d), d.isProcessing = false, r && l && (c = false, i(X));
  }, H = () => {
    r = true, c = true, d.isProcessing || i(X);
  };
  return { schedule: Qf.reduce((Z, W) => {
    const re = h[W];
    return Z[W] = (Ge, Ye = false, ae = false) => (r || H(), re.schedule(Ge, Ye, ae)), Z;
  }, {}), cancel: (Z) => {
    for (let W = 0; W < Qf.length; W++) h[Qf[W]].cancel(Z);
  }, state: d, steps: h };
}
const { schedule: nt, cancel: mo, state: Gt, steps: oy } = JA(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Fn, true);
let Kf;
function wO() {
  Kf = void 0;
}
const rn = { now: () => (Kf === void 0 && rn.set(Gt.isProcessing || po.useManualTiming ? Gt.timestamp : performance.now()), Kf), set: (i) => {
  Kf = i, queueMicrotask(wO);
} }, KA = (i) => (l) => typeof l == "string" && l.startsWith(i), FA = KA("--"), CO = KA("var(--"), Wy = (i) => CO(i) ? OO.test(i.split("/*")[0].trim()) : false, OO = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function vE(i) {
  return typeof i != "string" ? false : i.split("/*")[0].includes("var(--");
}
const Cs = { test: (i) => typeof i == "number", parse: parseFloat, transform: (i) => i }, bu = { ...Cs, transform: (i) => $a(0, 1, i) }, Zf = { ...Cs, default: 1 }, mu = (i) => Math.round(i * 1e5) / 1e5, eg = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function MO(i) {
  return i == null;
}
const NO = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, tg = (i, l) => (r) => !!(typeof r == "string" && NO.test(r) && r.startsWith(i) || l && !MO(r) && Object.prototype.hasOwnProperty.call(r, l)), IA = (i, l, r) => (c) => {
  if (typeof c != "string") return c;
  const [d, m, h, y] = c.match(eg);
  return { [i]: parseFloat(d), [l]: parseFloat(m), [r]: parseFloat(h), alpha: y !== void 0 ? parseFloat(y) : 1 };
}, _O = (i) => $a(0, 255, i), ly = { ...Cs, transform: (i) => Math.round(_O(i)) }, ul = { test: tg("rgb", "red"), parse: IA("red", "green", "blue"), transform: ({ red: i, green: l, blue: r, alpha: c = 1 }) => "rgba(" + ly.transform(i) + ", " + ly.transform(l) + ", " + ly.transform(r) + ", " + mu(bu.transform(c)) + ")" };
function zO(i) {
  let l = "", r = "", c = "", d = "";
  return i.length > 5 ? (l = i.substring(1, 3), r = i.substring(3, 5), c = i.substring(5, 7), d = i.substring(7, 9)) : (l = i.substring(1, 2), r = i.substring(2, 3), c = i.substring(3, 4), d = i.substring(4, 5), l += l, r += r, c += c, d += d), { red: parseInt(l, 16), green: parseInt(r, 16), blue: parseInt(c, 16), alpha: d ? parseInt(d, 16) / 255 : 1 };
}
const Ay = { test: tg("#"), parse: zO, transform: ul.transform }, Du = (i) => ({ test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1, parse: parseFloat, transform: (l) => `${l}${i}` }), co = Du("deg"), Xa = Du("%"), ie = Du("px"), VO = Du("vh"), jO = Du("vw"), bE = { ...Xa, parse: (i) => Xa.parse(i) / 100, transform: (i) => Xa.transform(i * 100) }, Ts = { test: tg("hsl", "hue"), parse: IA("hue", "saturation", "lightness"), transform: ({ hue: i, saturation: l, lightness: r, alpha: c = 1 }) => "hsla(" + Math.round(i) + ", " + Xa.transform(mu(l)) + ", " + Xa.transform(mu(r)) + ", " + mu(bu.transform(c)) + ")" }, wt = { test: (i) => ul.test(i) || Ay.test(i) || Ts.test(i), parse: (i) => ul.test(i) ? ul.parse(i) : Ts.test(i) ? Ts.parse(i) : Ay.parse(i), transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ul.transform(i) : Ts.transform(i), getAnimatableNone: (i) => {
  const l = wt.parse(i);
  return l.alpha = 0, wt.transform(l);
} }, UO = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function BO(i) {
  var l, r;
  return isNaN(i) && typeof i == "string" && (((l = i.match(eg)) == null ? void 0 : l.length) || 0) + (((r = i.match(UO)) == null ? void 0 : r.length) || 0) > 0;
}
const WA = "number", ex = "color", LO = "var", HO = "var(", SE = "${}", YO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ds(i) {
  const l = i.toString(), r = [], c = { color: [], number: [], var: [] }, d = [];
  let m = 0;
  const y = l.replace(YO, (T) => (wt.test(T) ? (c.color.push(m), d.push(ex), r.push(wt.parse(T))) : T.startsWith(HO) ? (c.var.push(m), d.push(LO), r.push(T)) : (c.number.push(m), d.push(WA), r.push(parseFloat(T))), ++m, SE)).split(SE);
  return { values: r, split: y, indexes: c, types: d };
}
function kO(i) {
  return Ds(i).values;
}
function tx({ split: i, types: l }) {
  const r = i.length;
  return (c) => {
    let d = "";
    for (let m = 0; m < r; m++) if (d += i[m], c[m] !== void 0) {
      const h = l[m];
      h === WA ? d += mu(c[m]) : h === ex ? d += wt.transform(c[m]) : d += c[m];
    }
    return d;
  };
}
function qO(i) {
  return tx(Ds(i));
}
const GO = (i) => typeof i == "number" ? 0 : wt.test(i) ? wt.getAnimatableNone(i) : i, XO = (i, l) => typeof i == "number" ? l != null && l.trim().endsWith("/") ? i : 0 : GO(i);
function $O(i) {
  const l = Ds(i);
  return tx(l)(l.values.map((c, d) => XO(c, l.split[d])));
}
const da = { test: BO, parse: kO, createTransformer: qO, getAnimatableNone: $O };
function sy(i, l, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? i + (l - i) * 6 * r : r < 1 / 2 ? l : r < 2 / 3 ? i + (l - i) * (2 / 3 - r) * 6 : i;
}
function QO({ hue: i, saturation: l, lightness: r, alpha: c }) {
  i /= 360, l /= 100, r /= 100;
  let d = 0, m = 0, h = 0;
  if (!l) d = m = h = r;
  else {
    const y = r < 0.5 ? r * (1 + l) : r + l - r * l, T = 2 * r - y;
    d = sy(T, y, i + 1 / 3), m = sy(T, y, i), h = sy(T, y, i - 1 / 3);
  }
  return { red: Math.round(d * 255), green: Math.round(m * 255), blue: Math.round(h * 255), alpha: c };
}
function id(i, l) {
  return (r) => r > 0 ? l : i;
}
const rt = (i, l, r) => i + (l - i) * r, ry = (i, l, r) => {
  const c = i * i, d = r * (l * l - c) + c;
  return d < 0 ? 0 : Math.sqrt(d);
}, ZO = [Ay, ul, Ts], PO = (i) => ZO.find((l) => l.test(i));
function TE(i) {
  const l = PO(i);
  if (ws(!!l, `'${i}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !l) return false;
  let r = l.parse(i);
  return l === Ts && (r = QO(r)), r;
}
const EE = (i, l) => {
  const r = TE(i), c = TE(l);
  if (!r || !c) return id(i, l);
  const d = { ...r };
  return (m) => (d.red = ry(r.red, c.red, m), d.green = ry(r.green, c.green, m), d.blue = ry(r.blue, c.blue, m), d.alpha = rt(r.alpha, c.alpha, m), ul.transform(d));
}, xy = /* @__PURE__ */ new Set(["none", "hidden"]);
function JO(i, l) {
  return xy.has(i) ? (r) => r <= 0 ? i : l : (r) => r >= 1 ? l : i;
}
function KO(i, l) {
  return (r) => rt(i, l, r);
}
function ng(i) {
  return typeof i == "number" ? KO : typeof i == "string" ? Wy(i) ? id : wt.test(i) ? EE : WO : Array.isArray(i) ? nx : typeof i == "object" ? wt.test(i) ? EE : FO : id;
}
function nx(i, l) {
  const r = [...i], c = r.length, d = i.map((m, h) => ng(m)(m, l[h]));
  return (m) => {
    for (let h = 0; h < c; h++) r[h] = d[h](m);
    return r;
  };
}
function FO(i, l) {
  const r = { ...i, ...l }, c = {};
  for (const d in r) i[d] !== void 0 && l[d] !== void 0 && (c[d] = ng(i[d])(i[d], l[d]));
  return (d) => {
    for (const m in c) r[m] = c[m](d);
    return r;
  };
}
function IO(i, l) {
  const r = [], c = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < l.values.length; d++) {
    const m = l.types[d], h = i.indexes[m][c[m]], y = i.values[h] ?? 0;
    r[d] = y, c[m]++;
  }
  return r;
}
const WO = (i, l) => {
  const r = da.createTransformer(l), c = Ds(i), d = Ds(l);
  return c.indexes.var.length === d.indexes.var.length && c.indexes.color.length === d.indexes.color.length && c.indexes.number.length >= d.indexes.number.length ? xy.has(i) && !d.values.length || xy.has(l) && !c.values.length ? JO(i, l) : Au(nx(IO(c, d), d.values), r) : (ws(true, `Complex values '${i}' and '${l}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), id(i, l));
};
function ax(i, l, r) {
  return typeof i == "number" && typeof l == "number" && typeof r == "number" ? rt(i, l, r) : ng(i)(i, l);
}
const eM = (i) => {
  const l = ({ timestamp: r }) => i(r);
  return { start: (r = true) => nt.update(l, r), stop: () => mo(l), now: () => Gt.isProcessing ? Gt.timestamp : rn.now() };
}, ix = (i, l, r = 10) => {
  let c = "";
  const d = Math.max(Math.round(l / r), 2);
  for (let m = 0; m < d; m++) c += Math.round(i(m / (d - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${c.substring(0, c.length - 2)})`;
}, od = 2e4;
function ag(i) {
  let l = 0;
  const r = 50;
  let c = i.next(l);
  for (; !c.done && l < od; ) l += r, c = i.next(l);
  return l >= od ? 1 / 0 : l;
}
function tM(i, l = 100, r) {
  const c = r({ ...i, keyframes: [0, l] }), d = Math.min(ag(c), od);
  return { type: "keyframes", ease: (m) => c.next(d * m).value / l, duration: Kn(d) };
}
const pt = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 };
function Dy(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const nM = 12;
function aM(i, l, r) {
  let c = r;
  for (let d = 1; d < nM; d++) c = c - i(c) / l(c);
  return c;
}
const uy = 1e-3;
function iM({ duration: i = pt.duration, bounce: l = pt.bounce, velocity: r = pt.velocity, mass: c = pt.mass }) {
  let d, m;
  ws(i <= gn(pt.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let h = 1 - l;
  h = $a(pt.minDamping, pt.maxDamping, h), i = $a(pt.minDuration, pt.maxDuration, Kn(i)), h < 1 ? (d = (A) => {
    const E = A * h, S = E * i, b = E - r, O = Dy(A, h), U = Math.exp(-S);
    return uy - b / O * U;
  }, m = (A) => {
    const S = A * h * i, b = S * r + r, O = Math.pow(h, 2) * Math.pow(A, 2) * i, U = Math.exp(-S), X = Dy(Math.pow(A, 2), h);
    return (-d(A) + uy > 0 ? -1 : 1) * ((b - O) * U) / X;
  }) : (d = (A) => {
    const E = Math.exp(-A * i), S = (A - r) * i + 1;
    return -uy + E * S;
  }, m = (A) => {
    const E = Math.exp(-A * i), S = (r - A) * (i * i);
    return E * S;
  });
  const y = 5 / i, T = aM(d, m, y);
  if (i = gn(i), isNaN(T)) return { stiffness: pt.stiffness, damping: pt.damping, duration: i };
  {
    const A = Math.pow(T, 2) * c;
    return { stiffness: A, damping: h * 2 * Math.sqrt(c * A), duration: i };
  }
}
const oM = ["duration", "bounce"], lM = ["stiffness", "damping", "mass"];
function AE(i, l) {
  return l.some((r) => i[r] !== void 0);
}
function sM(i) {
  let l = { velocity: pt.velocity, stiffness: pt.stiffness, damping: pt.damping, mass: pt.mass, isResolvedFromDuration: false, ...i };
  if (!AE(i, lM) && AE(i, oM)) if (l.velocity = 0, i.visualDuration) {
    const r = i.visualDuration, c = 2 * Math.PI / (r * 1.2), d = c * c, m = 2 * $a(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(d);
    l = { ...l, mass: pt.mass, stiffness: d, damping: m };
  } else {
    const r = iM({ ...i, velocity: 0 });
    l = { ...l, ...r, mass: pt.mass }, l.isResolvedFromDuration = true;
  }
  return l;
}
function ld(i = pt.visualDuration, l = pt.bounce) {
  const r = typeof i != "object" ? { visualDuration: i, keyframes: [0, 1], bounce: l } : i;
  let { restSpeed: c, restDelta: d } = r;
  const m = r.keyframes[0], h = r.keyframes[r.keyframes.length - 1], y = { done: false, value: m }, { stiffness: T, damping: A, mass: E, duration: S, velocity: b, isResolvedFromDuration: O } = sM({ ...r, velocity: -Kn(r.velocity || 0) }), U = b || 0, X = A / (2 * Math.sqrt(T * E)), H = h - m, Y = Kn(Math.sqrt(T / E)), K = Math.abs(H) < 5;
  c || (c = K ? pt.restSpeed.granular : pt.restSpeed.default), d || (d = K ? pt.restDelta.granular : pt.restDelta.default);
  let Z, W, re, Ge, Ye, ae;
  if (X < 1) re = Dy(Y, X), Ge = (U + X * Y * H) / re, Z = (k) => {
    const Me = Math.exp(-X * Y * k);
    return h - Me * (Ge * Math.sin(re * k) + H * Math.cos(re * k));
  }, Ye = X * Y * Ge + H * re, ae = X * Y * H - Ge * re, W = (k) => Math.exp(-X * Y * k) * (Ye * Math.sin(re * k) + ae * Math.cos(re * k));
  else if (X === 1) {
    Z = (Me) => h - Math.exp(-Y * Me) * (H + (U + Y * H) * Me);
    const k = U + Y * H;
    W = (Me) => Math.exp(-Y * Me) * (Y * k * Me - U);
  } else {
    const k = Y * Math.sqrt(X * X - 1);
    Z = (Qe) => {
      const Ke = Math.exp(-X * Y * Qe), $ = Math.min(k * Qe, 300);
      return h - Ke * ((U + X * Y * H) * Math.sinh($) + k * H * Math.cosh($)) / k;
    };
    const Me = (U + X * Y * H) / k, ne = X * Y * Me - H * k, ge = X * Y * H - Me * k;
    W = (Qe) => {
      const Ke = Math.exp(-X * Y * Qe), $ = Math.min(k * Qe, 300);
      return Ke * (ne * Math.sinh($) + ge * Math.cosh($));
    };
  }
  const Re = { calculatedDuration: O && S || null, velocity: (k) => gn(W(k)), next: (k) => {
    if (!O && X < 1) {
      const ne = Math.exp(-X * Y * k), ge = Math.sin(re * k), Qe = Math.cos(re * k), Ke = h - ne * (Ge * ge + H * Qe), $ = gn(ne * (Ye * ge + ae * Qe));
      return y.done = Math.abs($) <= c && Math.abs(h - Ke) <= d, y.value = y.done ? h : Ke, y;
    }
    const Me = Z(k);
    if (O) y.done = k >= S;
    else {
      const ne = gn(W(k));
      y.done = Math.abs(ne) <= c && Math.abs(h - Me) <= d;
    }
    return y.value = y.done ? h : Me, y;
  }, toString: () => {
    const k = Math.min(ag(Re), od), Me = ix((ne) => Re.next(k * ne).value, k, 30);
    return k + "ms " + Me;
  }, toTransition: () => {
  } };
  return Re;
}
ld.applyToOptions = (i) => {
  const l = tM(i, 100, ld);
  return i.ease = l.ease, i.duration = gn(l.duration), i.type = "keyframes", i;
};
const rM = 5;
function ox(i, l, r) {
  const c = Math.max(l - rM, 0);
  return LA(r - i(c), l - c);
}
function Ry({ keyframes: i, velocity: l = 0, power: r = 0.8, timeConstant: c = 325, bounceDamping: d = 10, bounceStiffness: m = 500, modifyTarget: h, min: y, max: T, restDelta: A = 0.5, restSpeed: E }) {
  const S = i[0], b = { done: false, value: S }, O = (ae) => y !== void 0 && ae < y || T !== void 0 && ae > T, U = (ae) => y === void 0 ? T : T === void 0 || Math.abs(y - ae) < Math.abs(T - ae) ? y : T;
  let X = r * l;
  const H = S + X, Y = h === void 0 ? H : h(H);
  Y !== H && (X = Y - S);
  const K = (ae) => -X * Math.exp(-ae / c), Z = (ae) => Y + K(ae), W = (ae) => {
    const Re = K(ae), k = Z(ae);
    b.done = Math.abs(Re) <= A, b.value = b.done ? Y : k;
  };
  let re, Ge;
  const Ye = (ae) => {
    O(b.value) && (re = ae, Ge = ld({ keyframes: [b.value, U(b.value)], velocity: ox(Z, ae, b.value), damping: d, stiffness: m, restDelta: A, restSpeed: E }));
  };
  return Ye(0), { calculatedDuration: null, next: (ae) => {
    let Re = false;
    return !Ge && re === void 0 && (Re = true, W(ae), Ye(ae)), re !== void 0 && ae >= re ? Ge.next(ae - re) : (!Re && W(ae), b);
  } };
}
function uM(i, l, r) {
  const c = [], d = r || po.mix || ax, m = i.length - 1;
  for (let h = 0; h < m; h++) {
    let y = d(i[h], i[h + 1]);
    if (l) {
      const T = Array.isArray(l) ? l[h] || Fn : l;
      y = Au(T, y);
    }
    c.push(y);
  }
  return c;
}
function cM(i, l, { clamp: r = true, ease: c, mixer: d } = {}) {
  const m = i.length;
  if (bi(m === l.length, "Both input and output ranges must be the same length", "range-length"), m === 1) return () => l[0];
  if (m === 2 && l[0] === l[1]) return () => l[1];
  const h = i[0] === i[1];
  i[0] > i[m - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const y = uM(l, c, d), T = y.length, A = (E) => {
    if (h && E < i[0]) return l[0];
    let S = 0;
    if (T > 1) for (; S < i.length - 2 && !(E < i[S + 1]); S++) ;
    const b = vu(i[S], i[S + 1], E);
    return y[S](b);
  };
  return r ? (E) => A($a(i[0], i[m - 1], E)) : A;
}
function fM(i, l) {
  const r = i[i.length - 1];
  for (let c = 1; c <= l; c++) {
    const d = vu(0, l, c);
    i.push(rt(r, 1, d));
  }
}
function dM(i) {
  const l = [0];
  return fM(l, i.length - 1), l;
}
function hM(i, l) {
  return i.map((r) => r * l);
}
function pM(i, l) {
  return i.map(() => l || ZA).splice(0, i.length - 1);
}
function Es({ duration: i = 300, keyframes: l, times: r, ease: c = "easeInOut" }) {
  const d = AO(c) ? c.map(gE) : gE(c), m = { done: false, value: l[0] }, h = hM(r && r.length === l.length ? r : dM(l), i), y = cM(h, l, { ease: Array.isArray(d) ? d : pM(l, d) });
  return { calculatedDuration: i, next: (T) => (m.value = y(T), m.done = T >= i, m) };
}
const mM = (i) => i !== null;
function dd(i, { repeat: l, repeatType: r = "loop" }, c, d = 1) {
  const m = i.filter(mM), y = d < 0 || l && r !== "loop" && l % 2 === 1 ? 0 : m.length - 1;
  return !y || c === void 0 ? m[y] : c;
}
const yM = { decay: Ry, inertia: Ry, tween: Es, keyframes: Es, spring: ld };
function lx(i) {
  typeof i.type == "string" && (i.type = yM[i.type]);
}
class ig {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, r) {
    return this.finished.then(l, r);
  }
}
const gM = (i) => i / 100;
class sd extends ig {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = { done: false, value: void 0 }, this.stop = () => {
      var c, d;
      const { motionValue: r } = this.options;
      r && r.updatedAt !== rn.now() && this.tick(rn.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (d = (c = this.options).onStop) == null || d.call(c));
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === false && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    lx(l);
    const { type: r = Es, repeat: c = 0, repeatDelay: d = 0, repeatType: m, velocity: h = 0 } = l;
    let { keyframes: y } = l;
    const T = r || Es;
    T !== Es && bi(y.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${y}`, "spring-two-frames"), T !== Es && typeof y[0] != "number" && (this.mixKeyframes = Au(gM, ax(y[0], y[1])), y = [0, 100]);
    const A = T({ ...l, keyframes: y });
    m === "mirror" && (this.mirroredGenerator = T({ ...l, keyframes: [...y].reverse(), velocity: -h })), A.calculatedDuration === null && (A.calculatedDuration = ag(A));
    const { calculatedDuration: E } = A;
    this.calculatedDuration = E, this.resolvedDuration = E + d, this.totalDuration = this.resolvedDuration * (c + 1) - d, this.generator = A;
  }
  updateTime(l) {
    const r = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r;
  }
  tick(l, r = false) {
    const { generator: c, totalDuration: d, mixKeyframes: m, mirroredGenerator: h, resolvedDuration: y, calculatedDuration: T } = this;
    if (this.startTime === null) return c.next(0);
    const { delay: A = 0, keyframes: E, repeat: S, repeatType: b, repeatDelay: O, type: U, onUpdate: X, finalKeyframe: H } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - d / this.speed, this.startTime)), r ? this.currentTime = l : this.updateTime(l);
    const Y = this.currentTime - A * (this.playbackSpeed >= 0 ? 1 : -1), K = this.playbackSpeed >= 0 ? Y < 0 : Y > d;
    this.currentTime = Math.max(Y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let Z = this.currentTime, W = c;
    if (S) {
      const ae = Math.min(this.currentTime, d) / y;
      let Re = Math.floor(ae), k = ae % 1;
      !k && ae >= 1 && (k = 1), k === 1 && Re--, Re = Math.min(Re, S + 1), !!(Re % 2) && (b === "reverse" ? (k = 1 - k, O && (k -= O / y)) : b === "mirror" && (W = h)), Z = $a(0, 1, k) * y;
    }
    let re;
    K ? (this.delayState.value = E[0], re = this.delayState) : re = W.next(Z), m && !K && (re.value = m(re.value));
    let { done: Ge } = re;
    !K && T !== null && (Ge = this.playbackSpeed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const Ye = this.holdTime === null && (this.state === "finished" || this.state === "running" && Ge);
    return Ye && U !== Ry && (re.value = dd(E, this.options, H, this.speed)), X && X(re.value), Ye && this.finish(), re;
  }
  then(l, r) {
    return this.finished.then(l, r);
  }
  get duration() {
    return Kn(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Kn(l);
  }
  get time() {
    return Kn(this.currentTime);
  }
  set time(l) {
    l = gn(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(false) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(l);
    const r = this.generator.next(l).value;
    return ox((c) => this.generator.next(c).value, l, r);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const r = this.playbackSpeed !== l;
    r && this.driver && this.updateTime(rn.now()), this.playbackSpeed = l, r && this.driver && (this.time = Kn(this.currentTime));
  }
  play() {
    var d, m;
    if (this.isStopped) return;
    const { driver: l = eM, startTime: r } = this.options;
    this.driver || (this.driver = l((h) => this.tick(h))), (m = (d = this.options).onPlay) == null || m.call(d);
    const c = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = c) : this.holdTime !== null ? this.startTime = c - this.holdTime : this.startTime || (this.startTime = r ?? c), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(rn.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var l, r;
    this.notifyFinished(), this.teardown(), this.state = "finished", (r = (l = this.options).onComplete) == null || r.call(l);
  }
  cancel() {
    var l, r;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (r = (l = this.options).onCancel) == null || r.call(l);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, true);
  }
  attachTimeline(l) {
    var r;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (r = this.driver) == null || r.stop(), l.observe(this);
  }
}
function vM(i) {
  for (let l = 1; l < i.length; l++) i[l] ?? (i[l] = i[l - 1]);
}
const cl = (i) => i * 180 / Math.PI, wy = (i) => {
  const l = cl(Math.atan2(i[1], i[0]));
  return Cy(l);
}, bM = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2, rotate: wy, rotateZ: wy, skewX: (i) => cl(Math.atan(i[1])), skewY: (i) => cl(Math.atan(i[2])), skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2 }, Cy = (i) => (i = i % 360, i < 0 && (i += 360), i), xE = wy, DE = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), RE = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), SM = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: DE, scaleY: RE, scale: (i) => (DE(i) + RE(i)) / 2, rotateX: (i) => Cy(cl(Math.atan2(i[6], i[5]))), rotateY: (i) => Cy(cl(Math.atan2(-i[2], i[0]))), rotateZ: xE, rotate: xE, skewX: (i) => cl(Math.atan(i[4])), skewY: (i) => cl(Math.atan(i[1])), skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2 };
function Oy(i) {
  return i.includes("scale") ? 1 : 0;
}
function My(i, l) {
  if (!i || i === "none") return Oy(l);
  const r = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let c, d;
  if (r) c = SM, d = r;
  else {
    const y = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    c = bM, d = y;
  }
  if (!d) return Oy(l);
  const m = c[l], h = d[1].split(",").map(EM);
  return typeof m == "function" ? m(h) : h[m];
}
const TM = (i, l) => {
  const { transform: r = "none" } = getComputedStyle(i);
  return My(r, l);
};
function EM(i) {
  return parseFloat(i.trim());
}
const Os = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], Ms = new Set(Os), wE = (i) => i === Cs || i === ie, AM = /* @__PURE__ */ new Set(["x", "y", "z"]), xM = Os.filter((i) => !AM.has(i));
function DM(i) {
  const l = [];
  return xM.forEach((r) => {
    const c = i.getValue(r);
    c !== void 0 && (l.push([r, c.get()]), c.set(r.startsWith("scale") ? 1 : 0));
  }), l;
}
const ho = { width: ({ x: i }, { paddingLeft: l = "0", paddingRight: r = "0", boxSizing: c }) => {
  const d = i.max - i.min;
  return c === "border-box" ? d : d - parseFloat(l) - parseFloat(r);
}, height: ({ y: i }, { paddingTop: l = "0", paddingBottom: r = "0", boxSizing: c }) => {
  const d = i.max - i.min;
  return c === "border-box" ? d : d - parseFloat(l) - parseFloat(r);
}, top: (i, { top: l }) => parseFloat(l), left: (i, { left: l }) => parseFloat(l), bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min), right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min), x: (i, { transform: l }) => My(l, "x"), y: (i, { transform: l }) => My(l, "y") };
ho.translateX = ho.x;
ho.translateY = ho.y;
const fl = /* @__PURE__ */ new Set();
let Ny = false, _y = false, zy = false;
function sx() {
  if (_y) {
    const i = Array.from(fl).filter((c) => c.needsMeasurement), l = new Set(i.map((c) => c.element)), r = /* @__PURE__ */ new Map();
    l.forEach((c) => {
      const d = DM(c);
      d.length && (r.set(c, d), c.render());
    }), i.forEach((c) => c.measureInitialState()), l.forEach((c) => {
      c.render();
      const d = r.get(c);
      d && d.forEach(([m, h]) => {
        var y;
        (y = c.getValue(m)) == null || y.set(h);
      });
    }), i.forEach((c) => c.measureEndState()), i.forEach((c) => {
      c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY);
    });
  }
  _y = false, Ny = false, fl.forEach((i) => i.complete(zy)), fl.clear();
}
function rx() {
  fl.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (_y = true);
  });
}
function RM() {
  zy = true, rx(), sx(), zy = false;
}
class og {
  constructor(l, r, c, d, m, h = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...l], this.onComplete = r, this.name = c, this.motionValue = d, this.element = m, this.isAsync = h;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (fl.add(this), Ny || (Ny = true, nt.read(rx), nt.resolveKeyframes(sx))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: r, element: c, motionValue: d } = this;
    if (l[0] === null) {
      const m = d == null ? void 0 : d.get(), h = l[l.length - 1];
      if (m !== void 0) l[0] = m;
      else if (c && r) {
        const y = c.readValue(r, h);
        y != null && (l[0] = y);
      }
      l[0] === void 0 && (l[0] = h), d && m === void 0 && d.set(l[0]);
    }
    vM(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = false) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), fl.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (fl.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const wM = (i) => i.startsWith("--");
function ux(i, l, r) {
  wM(l) ? i.style.setProperty(l, r) : i.style[l] = r;
}
const CM = {};
function cx(i, l) {
  const r = BA(i);
  return () => CM[l] ?? r();
}
const OM = cx(() => window.ScrollTimeline !== void 0, "scrollTimeline"), fx = cx(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
}, "linearEasing"), pu = ([i, l, r, c]) => `cubic-bezier(${i}, ${l}, ${r}, ${c})`, CE = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: pu([0, 0.65, 0.55, 1]), circOut: pu([0.55, 0, 1, 0.45]), backIn: pu([0.31, 0.01, 0.66, -0.59]), backOut: pu([0.33, 1.53, 0.69, 0.99]) };
function dx(i, l) {
  if (i) return typeof i == "function" ? fx() ? ix(i, l) : "ease-out" : PA(i) ? pu(i) : Array.isArray(i) ? i.map((r) => dx(r, l) || CE.easeOut) : CE[i];
}
function MM(i, l, r, { delay: c = 0, duration: d = 300, repeat: m = 0, repeatType: h = "loop", ease: y = "easeOut", times: T } = {}, A = void 0) {
  const E = { [l]: r };
  T && (E.offset = T);
  const S = dx(y, d);
  Array.isArray(S) && (E.easing = S);
  const b = { delay: c, duration: d, easing: Array.isArray(S) ? "linear" : S, fill: "both", iterations: m + 1, direction: h === "reverse" ? "alternate" : "normal" };
  return A && (b.pseudoElement = A), i.animate(E, b);
}
function hx(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function NM({ type: i, ...l }) {
  return hx(i) && fx() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class px extends ig {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = false, this.manualStartTime = null, !l) return;
    const { element: r, name: c, keyframes: d, pseudoElement: m, allowFlatten: h = false, finalKeyframe: y, onComplete: T } = l;
    this.isPseudoElement = !!m, this.allowFlatten = h, this.options = l, bi(typeof l.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const A = NM(l);
    this.animation = MM(r, c, d, A, m), A.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !m) {
        const E = dd(d, this.options, y, this.speed);
        this.updateMotionValue && this.updateMotionValue(E), ux(r, c, E), this.animation.cancel();
      }
      T == null || T(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, r;
    (r = (l = this.animation).finish) == null || r.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var r, c, d;
    const l = (r = this.options) == null ? void 0 : r.element;
    !this.isPseudoElement && (l != null && l.isConnected) && ((d = (c = this.animation).commitStyles) == null || d.call(c));
  }
  get duration() {
    var r, c;
    const l = ((c = (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) == null ? void 0 : c.call(r).duration) || 0;
    return Kn(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + Kn(l);
  }
  get time() {
    return Kn(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const r = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = gn(l), r && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: r, rangeEnd: c, observe: d }) {
    var m;
    return this.allowFlatten && ((m = this.animation.effect) == null || m.updateTiming({ easing: "linear" })), this.animation.onfinish = null, l && OM() ? (this.animation.timeline = l, r && (this.animation.rangeStart = r), c && (this.animation.rangeEnd = c), Fn) : d(this);
  }
}
const mx = { anticipate: XA, backInOut: GA, circInOut: QA };
function _M(i) {
  return i in mx;
}
function zM(i) {
  typeof i.ease == "string" && _M(i.ease) && (i.ease = mx[i.ease]);
}
const cy = 10;
class VM extends px {
  constructor(l) {
    zM(l), lx(l), super(l), l.startTime !== void 0 && l.autoplay !== false && (this.startTime = l.startTime), this.options = l;
  }
  updateMotionValue(l) {
    const { motionValue: r, onUpdate: c, onComplete: d, element: m, ...h } = this.options;
    if (!r) return;
    if (l !== void 0) {
      r.set(l);
      return;
    }
    const y = new sd({ ...h, autoplay: false }), T = Math.max(cy, rn.now() - this.startTime), A = $a(0, cy, T - cy), E = y.sample(T).value, { name: S } = this.options;
    m && S && ux(m, S, E), r.setWithVelocity(y.sample(Math.max(0, T - A)).value, E, A), y.stop();
  }
}
const OE = (i, l) => l === "zIndex" ? false : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (da.test(i) || i === "0") && !i.startsWith("url("));
function jM(i) {
  const l = i[0];
  if (i.length === 1) return true;
  for (let r = 0; r < i.length; r++) if (i[r] !== l) return true;
}
function UM(i, l, r, c) {
  const d = i[0];
  if (d === null) return false;
  if (l === "display" || l === "visibility") return true;
  const m = i[i.length - 1], h = OE(d, l), y = OE(m, l);
  return ws(h === y, `You are trying to animate ${l} from "${d}" to "${m}". "${h ? m : d}" is not an animatable value.`, "value-not-animatable"), !h || !y ? false : jM(i) || (r === "spring" || hx(r)) && c;
}
function Vy(i) {
  i.duration = 0, i.type = "keyframes";
}
const yx = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), BM = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function LM(i) {
  for (let l = 0; l < i.length; l++) if (typeof i[l] == "string" && BM.test(i[l])) return true;
  return false;
}
const HM = /* @__PURE__ */ new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]), YM = BA(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function kM(i) {
  var S;
  const { motionValue: l, name: r, repeatDelay: c, repeatType: d, damping: m, type: h, keyframes: y } = i;
  if (!(((S = l == null ? void 0 : l.owner) == null ? void 0 : S.current) instanceof HTMLElement)) return false;
  const { onUpdate: A, transformTemplate: E } = l.owner.getProps();
  return YM() && r && (yx.has(r) || HM.has(r) && LM(y)) && (r !== "transform" || !E) && !A && !c && d !== "mirror" && m !== 0 && h !== "inertia";
}
const qM = 40;
class GM extends ig {
  constructor({ autoplay: l = true, delay: r = 0, type: c = "keyframes", repeat: d = 0, repeatDelay: m = 0, repeatType: h = "loop", keyframes: y, name: T, motionValue: A, element: E, ...S }) {
    var U;
    super(), this.stop = () => {
      var X, H;
      this._animation && (this._animation.stop(), (X = this.stopTimeline) == null || X.call(this)), (H = this.keyframeResolver) == null || H.cancel();
    }, this.createdAt = rn.now();
    const b = { autoplay: l, delay: r, type: c, repeat: d, repeatDelay: m, repeatType: h, name: T, motionValue: A, element: E, ...S }, O = (E == null ? void 0 : E.KeyframeResolver) || og;
    this.keyframeResolver = new O(y, (X, H, Y) => this.onKeyframesResolved(X, H, b, !Y), T, A, E), (U = this.keyframeResolver) == null || U.scheduleResolve();
  }
  onKeyframesResolved(l, r, c, d) {
    var Y, K;
    this.keyframeResolver = void 0;
    const { name: m, type: h, velocity: y, delay: T, isHandoff: A, onUpdate: E } = c;
    this.resolvedAt = rn.now();
    let S = true;
    UM(l, m, h, y) || (S = false, (po.instantAnimations || !T) && (E == null || E(dd(l, c, r))), l[0] = l[l.length - 1], Vy(c), c.repeat = 0);
    const O = { startTime: d ? this.resolvedAt ? this.resolvedAt - this.createdAt > qM ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: r, ...c, keyframes: l }, U = S && !A && kM(O), X = (K = (Y = O.motionValue) == null ? void 0 : Y.owner) == null ? void 0 : K.current;
    let H;
    if (U) try {
      H = new VM({ ...O, element: X });
    } catch {
      H = new sd(O);
    }
    else H = new sd(O);
    H.finished.then(() => {
      this.notifyFinished();
    }).catch(Fn), this.pendingTimeline && (this.stopTimeline = H.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = H;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, r) {
    return this.finished.finally(l).then(() => {
    });
  }
  get animation() {
    var l;
    return this._animation || ((l = this.keyframeResolver) == null || l.resume(), RM()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel();
  }
}
function gx(i, l, r, c = 0, d = 1) {
  const m = Array.from(i).sort((A, E) => A.sortNodePosition(E)).indexOf(l), h = i.size, y = (h - 1) * c;
  return typeof r == "function" ? r(m, h) : d === 1 ? m * c : y - m * c;
}
const XM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function $M(i) {
  const l = XM.exec(i);
  if (!l) return [,];
  const [, r, c, d] = l;
  return [`--${r ?? c}`, d];
}
const QM = 4;
function vx(i, l, r = 1) {
  bi(r <= QM, `Max CSS variable fallback depth detected in property "${i}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [c, d] = $M(i);
  if (!c) return;
  const m = window.getComputedStyle(l).getPropertyValue(c);
  if (m) {
    const h = m.trim();
    return VA(h) ? parseFloat(h) : h;
  }
  return Wy(d) ? vx(d, l, r + 1) : d;
}
const ZM = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, PM = (i) => ({ type: "spring", stiffness: 550, damping: i === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), JM = { type: "keyframes", duration: 0.8 }, KM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, FM = (i, { keyframes: l }) => l.length > 2 ? JM : Ms.has(i) ? i.startsWith("scale") ? PM(l[1]) : ZM : KM;
function bx(i, l) {
  if (i != null && i.inherit && l) {
    const { inherit: r, ...c } = i;
    return { ...l, ...c };
  }
  return i;
}
function lg(i, l) {
  const r = (i == null ? void 0 : i[l]) ?? (i == null ? void 0 : i.default) ?? i;
  return r !== i ? bx(r, i) : r;
}
const IM = /* @__PURE__ */ new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function WM(i) {
  for (const l in i) if (!IM.has(l)) return true;
  return false;
}
const sg = (i, l, r, c = {}, d, m) => (h) => {
  const y = lg(c, i) || {}, T = y.delay || c.delay || 0;
  let { elapsed: A = 0 } = c;
  A = A - gn(T);
  const E = { keyframes: Array.isArray(r) ? r : [null, r], ease: "easeOut", velocity: l.getVelocity(), ...y, delay: -A, onUpdate: (b) => {
    l.set(b), y.onUpdate && y.onUpdate(b);
  }, onComplete: () => {
    h(), y.onComplete && y.onComplete();
  }, name: i, motionValue: l, element: m ? void 0 : d };
  WM(y) || Object.assign(E, FM(i, E)), E.duration && (E.duration = gn(E.duration)), E.repeatDelay && (E.repeatDelay = gn(E.repeatDelay)), E.from !== void 0 && (E.keyframes[0] = E.from);
  let S = false;
  if ((E.type === false || E.duration === 0 && !E.repeatDelay) && (Vy(E), E.delay === 0 && (S = true)), (po.instantAnimations || po.skipAnimations || d != null && d.shouldSkipAnimations) && (S = true, Vy(E), E.delay = 0), E.allowFlatten = !y.type && !y.ease, S && !m && l.get() !== void 0) {
    const b = dd(E.keyframes, y);
    if (b !== void 0) {
      nt.update(() => {
        E.onUpdate(b), E.onComplete();
      });
      return;
    }
  }
  return y.isSync ? new sd(E) : new GM(E);
};
function ME(i) {
  const l = [{}, {}];
  return i == null || i.values.forEach((r, c) => {
    l[0][c] = r.get(), l[1][c] = r.getVelocity();
  }), l;
}
function rg(i, l, r, c) {
  if (typeof l == "function") {
    const [d, m] = ME(c);
    l = l(r !== void 0 ? r : i.custom, d, m);
  }
  if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") {
    const [d, m] = ME(c);
    l = l(r !== void 0 ? r : i.custom, d, m);
  }
  return l;
}
function dl(i, l, r) {
  const c = i.getProps();
  return rg(c, l, r !== void 0 ? r : c.custom, i);
}
const Sx = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...Os]), NE = 30, eN = (i) => !isNaN(parseFloat(i));
class tN {
  constructor(l, r = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (c) => {
      var m;
      const d = rn.now();
      if (this.updatedAt !== d && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(c), this.current !== this.prev && ((m = this.events.change) == null || m.notify(this.current), this.dependents)) for (const h of this.dependents) h.dirty();
    }, this.hasAnimated = false, this.setCurrent(l), this.owner = r.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = rn.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = eN(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(l) {
    return Ky(false, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", l);
  }
  on(l, r) {
    this.events[l] || (this.events[l] = new Jy());
    const c = this.events[l].add(r);
    return l === "change" ? () => {
      c(), nt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : c;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, r) {
    this.passiveEffect = l, this.stopPassiveEffect = r;
  }
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, r, c) {
    this.set(r), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - c;
  }
  jump(l, r = true) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, r && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = rn.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > NE) return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, NE);
    return LA(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(l) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = true, this.animation = l(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var l, r;
    (l = this.dependents) == null || l.clear(), (r = this.events.destroy) == null || r.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Rs(i, l) {
  return new tN(i, l);
}
const jy = (i) => Array.isArray(i);
function nN(i, l, r) {
  i.hasValue(l) ? i.getValue(l).set(r) : i.addValue(l, Rs(r));
}
function aN(i) {
  return jy(i) ? i[i.length - 1] || 0 : i;
}
function iN(i, l) {
  const r = dl(i, l);
  let { transitionEnd: c = {}, transition: d = {}, ...m } = r || {};
  m = { ...m, ...c };
  for (const h in m) {
    const y = aN(m[h]);
    nN(i, h, y);
  }
}
const Xt = (i) => !!(i && i.getVelocity);
function oN(i) {
  return !!(Xt(i) && i.add);
}
function Uy(i, l) {
  const r = i.getValue("willChange");
  if (oN(r)) return r.add(l);
  if (!r && po.WillChange) {
    const c = new po.WillChange("auto");
    i.addValue("willChange", c), c.add(l);
  }
}
function ug(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const lN = "framerAppearId", Tx = "data-" + ug(lN);
function Ex(i) {
  return i.props[Tx];
}
function sN({ protectedKeys: i, needsAnimating: l }, r) {
  const c = i.hasOwnProperty(r) && l[r] !== true;
  return l[r] = false, c;
}
function Ax(i, l, { delay: r = 0, transitionOverride: c, type: d } = {}) {
  let { transition: m, transitionEnd: h, ...y } = l;
  const T = i.getDefaultTransition();
  m = m ? bx(m, T) : T;
  const A = m == null ? void 0 : m.reduceMotion;
  c && (m = c);
  const E = [], S = d && i.animationState && i.animationState.getState()[d];
  for (const b in y) {
    const O = i.getValue(b, i.latestValues[b] ?? null), U = y[b];
    if (U === void 0 || S && sN(S, b)) continue;
    const X = { delay: r, ...lg(m || {}, b) }, H = O.get();
    if (H !== void 0 && !O.isAnimating() && !Array.isArray(U) && U === H && !X.velocity) {
      nt.update(() => O.set(U));
      continue;
    }
    let Y = false;
    if (window.MotionHandoffAnimation) {
      const W = Ex(i);
      if (W) {
        const re = window.MotionHandoffAnimation(W, b, nt);
        re !== null && (X.startTime = re, Y = true);
      }
    }
    Uy(i, b);
    const K = A ?? i.shouldReduceMotion;
    O.start(sg(b, O, U, K && Sx.has(b) ? { type: false } : X, i, Y));
    const Z = O.animation;
    Z && E.push(Z);
  }
  if (h) {
    const b = () => nt.update(() => {
      h && iN(i, h);
    });
    E.length ? Promise.all(E).then(b) : b();
  }
  return E;
}
function By(i, l, r = {}) {
  var T;
  const c = dl(i, l, r.type === "exit" ? (T = i.presenceContext) == null ? void 0 : T.custom : void 0);
  let { transition: d = i.getDefaultTransition() || {} } = c || {};
  r.transitionOverride && (d = r.transitionOverride);
  const m = c ? () => Promise.all(Ax(i, c, r)) : () => Promise.resolve(), h = i.variantChildren && i.variantChildren.size ? (A = 0) => {
    const { delayChildren: E = 0, staggerChildren: S, staggerDirection: b } = d;
    return rN(i, l, A, E, S, b, r);
  } : () => Promise.resolve(), { when: y } = d;
  if (y) {
    const [A, E] = y === "beforeChildren" ? [m, h] : [h, m];
    return A().then(() => E());
  } else return Promise.all([m(), h(r.delay)]);
}
function rN(i, l, r = 0, c = 0, d = 0, m = 1, h) {
  const y = [];
  for (const T of i.variantChildren) T.notify("AnimationStart", l), y.push(By(T, l, { ...h, delay: r + (typeof c == "function" ? 0 : c) + gx(i.variantChildren, T, c, d, m) }).then(() => T.notify("AnimationComplete", l)));
  return Promise.all(y);
}
function uN(i, l, r = {}) {
  i.notify("AnimationStart", l);
  let c;
  if (Array.isArray(l)) {
    const d = l.map((m) => By(i, m, r));
    c = Promise.all(d);
  } else if (typeof l == "string") c = By(i, l, r);
  else {
    const d = typeof l == "function" ? dl(i, l, r.custom) : l;
    c = Promise.all(Ax(i, d, r));
  }
  return c.then(() => {
    i.notify("AnimationComplete", l);
  });
}
const cN = { test: (i) => i === "auto", parse: (i) => i }, xx = (i) => (l) => l.test(i), Dx = [Cs, ie, Xa, co, jO, VO, cN], _E = (i) => Dx.find(xx(i));
function fN(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || UA(i) : true;
}
const dN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function hN(i) {
  const [l, r] = i.slice(0, -1).split("(");
  if (l === "drop-shadow") return i;
  const [c] = r.match(eg) || [];
  if (!c) return i;
  const d = r.replace(c, "");
  let m = dN.has(l) ? 1 : 0;
  return c !== r && (m *= 100), l + "(" + m + d + ")";
}
const pN = /\b([a-z-]*)\(.*?\)/gu, Ly = { ...da, getAnimatableNone: (i) => {
  const l = i.match(pN);
  return l ? l.map(hN).join(" ") : i;
} }, Hy = { ...da, getAnimatableNone: (i) => {
  const l = da.parse(i);
  return da.createTransformer(i)(l.map((c) => typeof c == "number" ? 0 : typeof c == "object" ? { ...c, alpha: 1 } : c));
} }, zE = { ...Cs, transform: Math.round }, mN = { rotate: co, rotateX: co, rotateY: co, rotateZ: co, scale: Zf, scaleX: Zf, scaleY: Zf, scaleZ: Zf, skew: co, skewX: co, skewY: co, distance: ie, translateX: ie, translateY: ie, translateZ: ie, x: ie, y: ie, z: ie, perspective: ie, transformPerspective: ie, opacity: bu, originX: bE, originY: bE, originZ: ie }, cg = { borderWidth: ie, borderTopWidth: ie, borderRightWidth: ie, borderBottomWidth: ie, borderLeftWidth: ie, borderRadius: ie, borderTopLeftRadius: ie, borderTopRightRadius: ie, borderBottomRightRadius: ie, borderBottomLeftRadius: ie, width: ie, maxWidth: ie, height: ie, maxHeight: ie, top: ie, right: ie, bottom: ie, left: ie, inset: ie, insetBlock: ie, insetBlockStart: ie, insetBlockEnd: ie, insetInline: ie, insetInlineStart: ie, insetInlineEnd: ie, padding: ie, paddingTop: ie, paddingRight: ie, paddingBottom: ie, paddingLeft: ie, paddingBlock: ie, paddingBlockStart: ie, paddingBlockEnd: ie, paddingInline: ie, paddingInlineStart: ie, paddingInlineEnd: ie, margin: ie, marginTop: ie, marginRight: ie, marginBottom: ie, marginLeft: ie, marginBlock: ie, marginBlockStart: ie, marginBlockEnd: ie, marginInline: ie, marginInlineStart: ie, marginInlineEnd: ie, fontSize: ie, backgroundPositionX: ie, backgroundPositionY: ie, ...mN, zIndex: zE, fillOpacity: bu, strokeOpacity: bu, numOctaves: zE }, yN = { ...cg, color: wt, backgroundColor: wt, outlineColor: wt, fill: wt, stroke: wt, borderColor: wt, borderTopColor: wt, borderRightColor: wt, borderBottomColor: wt, borderLeftColor: wt, filter: Ly, WebkitFilter: Ly, mask: Hy, WebkitMask: Hy }, Rx = (i) => yN[i], gN = /* @__PURE__ */ new Set([Ly, Hy]);
function wx(i, l) {
  let r = Rx(i);
  return gN.has(r) || (r = da), r.getAnimatableNone ? r.getAnimatableNone(l) : void 0;
}
const vN = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function bN(i, l, r) {
  let c = 0, d;
  for (; c < i.length && !d; ) {
    const m = i[c];
    typeof m == "string" && !vN.has(m) && Ds(m).values.length && (d = i[c]), c++;
  }
  if (d && r) for (const m of l) i[m] = wx(r, d);
}
class SN extends og {
  constructor(l, r, c, d, m) {
    super(l, r, c, d, m, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: r, name: c } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let E = 0; E < l.length; E++) {
      let S = l[E];
      if (typeof S == "string" && (S = S.trim(), Wy(S))) {
        const b = vx(S, r.current);
        b !== void 0 && (l[E] = b), E === l.length - 1 && (this.finalKeyframe = S);
      }
    }
    if (this.resolveNoneKeyframes(), !Sx.has(c) || l.length !== 2) return;
    const [d, m] = l, h = _E(d), y = _E(m), T = vE(d), A = vE(m);
    if (T !== A && ho[c]) {
      this.needsMeasurement = true;
      return;
    }
    if (h !== y) if (wE(h) && wE(y)) for (let E = 0; E < l.length; E++) {
      const S = l[E];
      typeof S == "string" && (l[E] = parseFloat(S));
    }
    else ho[c] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: r } = this, c = [];
    for (let d = 0; d < l.length; d++) (l[d] === null || fN(l[d])) && c.push(d);
    c.length && bN(l, c, r);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: r, name: c } = this;
    if (!l || !l.current) return;
    c === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ho[c](l.measureViewportBox(), window.getComputedStyle(l.current)), r[0] = this.measuredOrigin;
    const d = r[r.length - 1];
    d !== void 0 && l.getValue(c, d).jump(d, false);
  }
  measureEndState() {
    var y;
    const { element: l, name: r, unresolvedKeyframes: c } = this;
    if (!l || !l.current) return;
    const d = l.getValue(r);
    d && d.jump(this.measuredOrigin, false);
    const m = c.length - 1, h = c[m];
    c[m] = ho[r](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), (y = this.removedTransforms) != null && y.length && this.removedTransforms.forEach(([T, A]) => {
      l.getValue(T).set(A);
    }), this.resolveNoneKeyframes();
  }
}
function Cx(i, l, r) {
  if (i == null) return [];
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    let c = document;
    const d = (r == null ? void 0 : r[i]) ?? c.querySelectorAll(i);
    return d ? Array.from(d) : [];
  }
  return Array.from(i).filter((c) => c != null);
}
const Ox = (i, l) => l && typeof i == "number" ? l.transform(i) : i;
function TN(i) {
  return jA(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: fg } = JA(queueMicrotask, false), fa = { x: false, y: false };
function Mx() {
  return fa.x || fa.y;
}
function EN(i) {
  return i === "x" || i === "y" ? fa[i] ? null : (fa[i] = true, () => {
    fa[i] = false;
  }) : fa.x || fa.y ? null : (fa.x = fa.y = true, () => {
    fa.x = fa.y = false;
  });
}
function Nx(i, l) {
  const r = Cx(i), c = new AbortController(), d = { passive: true, ...l, signal: c.signal };
  return [r, d, () => c.abort()];
}
function AN(i) {
  return !(i.pointerType === "touch" || Mx());
}
function xN(i, l, r = {}) {
  const [c, d, m] = Nx(i, r);
  return c.forEach((h) => {
    let y = false, T = false, A;
    const E = () => {
      h.removeEventListener("pointerleave", U);
    }, S = (H) => {
      A && (A(H), A = void 0), E();
    }, b = (H) => {
      y = false, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), T && (T = false, S(H));
    }, O = () => {
      y = true, window.addEventListener("pointerup", b, d), window.addEventListener("pointercancel", b, d);
    }, U = (H) => {
      if (H.pointerType !== "touch") {
        if (y) {
          T = true;
          return;
        }
        S(H);
      }
    }, X = (H) => {
      if (!AN(H)) return;
      T = false;
      const Y = l(h, H);
      typeof Y == "function" && (A = Y, h.addEventListener("pointerleave", U, d));
    };
    h.addEventListener("pointerenter", X, d), h.addEventListener("pointerdown", O, d);
  }), m;
}
const _x = (i, l) => l ? i === l ? true : _x(i, l.parentElement) : false, dg = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== false, DN = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function RN(i) {
  return DN.has(i.tagName) || i.isContentEditable === true;
}
const wN = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function CN(i) {
  return wN.has(i.tagName) || i.isContentEditable === true;
}
const Ff = /* @__PURE__ */ new WeakSet();
function VE(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function fy(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: true, bubbles: true }));
}
const ON = (i, l) => {
  const r = i.currentTarget;
  if (!r) return;
  const c = VE(() => {
    if (Ff.has(r)) return;
    fy(r, "down");
    const d = VE(() => {
      fy(r, "up");
    }), m = () => fy(r, "cancel");
    r.addEventListener("keyup", d, l), r.addEventListener("blur", m, l);
  });
  r.addEventListener("keydown", c, l), r.addEventListener("blur", () => r.removeEventListener("keydown", c), l);
};
function jE(i) {
  return dg(i) && !Mx();
}
const UE = /* @__PURE__ */ new WeakSet();
function MN(i, l, r = {}) {
  const [c, d, m] = Nx(i, r), h = (y) => {
    const T = y.currentTarget;
    if (!jE(y) || UE.has(y)) return;
    Ff.add(T), r.stopPropagation && UE.add(y);
    const A = l(T, y), E = (O, U) => {
      window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", b), Ff.has(T) && Ff.delete(T), jE(O) && typeof A == "function" && A(O, { success: U });
    }, S = (O) => {
      E(O, T === window || T === document || r.useGlobalTarget || _x(T, O.target));
    }, b = (O) => {
      E(O, false);
    };
    window.addEventListener("pointerup", S, d), window.addEventListener("pointercancel", b, d);
  };
  return c.forEach((y) => {
    (r.useGlobalTarget ? window : y).addEventListener("pointerdown", h, d), TN(y) && (y.addEventListener("focus", (A) => ON(A, d)), !RN(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0));
  }), m;
}
function hg(i) {
  return jA(i) && "ownerSVGElement" in i;
}
const If = /* @__PURE__ */ new WeakMap();
let fo;
const zx = (i, l, r) => (c, d) => d && d[0] ? d[0][i + "Size"] : hg(c) && "getBBox" in c ? c.getBBox()[l] : c[r], NN = zx("inline", "width", "offsetWidth"), _N = zx("block", "height", "offsetHeight");
function zN({ target: i, borderBoxSize: l }) {
  var r;
  (r = If.get(i)) == null || r.forEach((c) => {
    c(i, { get width() {
      return NN(i, l);
    }, get height() {
      return _N(i, l);
    } });
  });
}
function VN(i) {
  i.forEach(zN);
}
function jN() {
  typeof ResizeObserver > "u" || (fo = new ResizeObserver(VN));
}
function UN(i, l) {
  fo || jN();
  const r = Cx(i);
  return r.forEach((c) => {
    let d = If.get(c);
    d || (d = /* @__PURE__ */ new Set(), If.set(c, d)), d.add(l), fo == null || fo.observe(c);
  }), () => {
    r.forEach((c) => {
      const d = If.get(c);
      d == null || d.delete(l), d != null && d.size || fo == null || fo.unobserve(c);
    });
  };
}
const Wf = /* @__PURE__ */ new Set();
let As;
function BN() {
  As = () => {
    const i = { get width() {
      return window.innerWidth;
    }, get height() {
      return window.innerHeight;
    } };
    Wf.forEach((l) => l(i));
  }, window.addEventListener("resize", As);
}
function LN(i) {
  return Wf.add(i), As || BN(), () => {
    Wf.delete(i), !Wf.size && typeof As == "function" && (window.removeEventListener("resize", As), As = void 0);
  };
}
function BE(i, l) {
  return typeof i == "function" ? LN(i) : UN(i, l);
}
function HN(i) {
  return hg(i) && i.tagName === "svg";
}
const YN = [...Dx, wt, da], kN = (i) => YN.find(xx(i)), LE = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), xs = () => ({ x: LE(), y: LE() }), HE = () => ({ min: 0, max: 0 }), Nt = () => ({ x: HE(), y: HE() }), qN = /* @__PURE__ */ new WeakMap();
function hd(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Su(i) {
  return typeof i == "string" || Array.isArray(i);
}
const pg = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], mg = ["initial", ...pg];
function pd(i) {
  return hd(i.animate) || mg.some((l) => Su(i[l]));
}
function Vx(i) {
  return !!(pd(i) || i.variants);
}
function GN(i, l, r) {
  for (const c in l) {
    const d = l[c], m = r[c];
    if (Xt(d)) i.addValue(c, d);
    else if (Xt(m)) i.addValue(c, Rs(d, { owner: i }));
    else if (m !== d) if (i.hasValue(c)) {
      const h = i.getValue(c);
      h.liveStyle === true ? h.jump(d) : h.hasAnimated || h.set(d);
    } else {
      const h = i.getStaticValue(c);
      i.addValue(c, Rs(h !== void 0 ? h : d, { owner: i }));
    }
  }
  for (const c in r) l[c] === void 0 && i.removeValue(c);
  return l;
}
const Yy = { current: null }, jx = { current: false }, XN = typeof window < "u";
function $N() {
  if (jx.current = true, !!XN) if (window.matchMedia) {
    const i = window.matchMedia("(prefers-reduced-motion)"), l = () => Yy.current = i.matches;
    i.addEventListener("change", l), l();
  } else Yy.current = false;
}
const YE = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let rd = {};
function Ux(i) {
  rd = i;
}
function QN() {
  return rd;
}
class ZN {
  scrapeMotionValuesFromProps(l, r, c) {
    return {};
  }
  constructor({ parent: l, props: r, presenceContext: c, reducedMotionConfig: d, skipAnimations: m, blockInitialAnimation: h, visualState: y }, T = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.shouldSkipAnimations = false, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = og, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = false, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const O = rn.now();
      this.renderScheduledAt < O && (this.renderScheduledAt = O, nt.render(this.render, false, true));
    };
    const { latestValues: A, renderState: E } = y;
    this.latestValues = A, this.baseTarget = { ...A }, this.initialValues = r.initial ? { ...A } : {}, this.renderState = E, this.parent = l, this.props = r, this.presenceContext = c, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = d, this.skipAnimationsConfig = m, this.options = T, this.blockInitialAnimation = !!h, this.isControllingVariants = pd(r), this.isVariantNode = Vx(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: S, ...b } = this.scrapeMotionValuesFromProps(r, {}, this);
    for (const O in b) {
      const U = b[O];
      A[O] !== void 0 && Xt(U) && U.set(A[O]);
    }
  }
  mount(l) {
    var r, c;
    if (this.hasBeenMounted) for (const d in this.initialValues) (r = this.values.get(d)) == null || r.jump(this.initialValues[d]), this.latestValues[d] = this.initialValues[d];
    this.current = l, qN.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((d, m) => this.bindToMotionValue(m, d)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = false : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = true : (jx.current || $N(), this.shouldReduceMotion = Yy.current), Ky(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? false, (c = this.parent) == null || c.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = true;
  }
  unmount() {
    var l;
    this.projection && this.projection.unmount(), mo(this.notifyUpdate), mo(this.render), this.valueSubscriptions.forEach((r) => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (l = this.parent) == null || l.removeChild(this);
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const c = this.features[r];
      c && (c.unmount(), c.isMounted = false);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, r) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), r.accelerate && yx.has(l) && this.current instanceof HTMLElement) {
      const { factory: h, keyframes: y, times: T, ease: A, duration: E } = r.accelerate, S = new px({ element: this.current, name: l, keyframes: y, times: T, ease: A, duration: gn(E) }), b = h(S);
      this.valueSubscriptions.set(l, () => {
        b(), S.cancel();
      });
      return;
    }
    const c = Ms.has(l);
    c && this.onBindTransform && this.onBindTransform();
    const d = r.on("change", (h) => {
      this.latestValues[l] = h, this.props.onUpdate && nt.preRender(this.notifyUpdate), c && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
    });
    let m;
    typeof window < "u" && window.MotionCheckAppearSync && (m = window.MotionCheckAppearSync(this, l, r)), this.valueSubscriptions.set(l, () => {
      d(), m && m(), r.owner && r.stop();
    });
  }
  sortNodePosition(l) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in rd) {
      const r = rd[l];
      if (!r) continue;
      const { isEnabled: c, Feature: d } = r;
      if (!this.features[l] && d && c(this.props) && (this.features[l] = new d(this)), this.features[l]) {
        const m = this.features[l];
        m.isMounted ? m.update() : (m.mount(), m.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Nt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, r) {
    this.latestValues[l] = r;
  }
  update(l, r) {
    (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let c = 0; c < YE.length; c++) {
      const d = YE[c];
      this.propEventSubscriptions[d] && (this.propEventSubscriptions[d](), delete this.propEventSubscriptions[d]);
      const m = "on" + d, h = l[m];
      h && (this.propEventSubscriptions[d] = this.on(d, h));
    }
    this.prevMotionValues = GN(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(l) {
    const r = this.getClosestVariantNode();
    if (r) return r.variantChildren && r.variantChildren.add(l), () => r.variantChildren.delete(l);
  }
  addValue(l, r) {
    const c = this.values.get(l);
    r !== c && (c && this.removeValue(l), this.bindToMotionValue(l, r), this.values.set(l, r), this.latestValues[l] = r.get());
  }
  removeValue(l) {
    this.values.delete(l);
    const r = this.valueSubscriptions.get(l);
    r && (r(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, r) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let c = this.values.get(l);
    return c === void 0 && r !== void 0 && (c = Rs(r === null ? void 0 : r, { owner: this }), this.addValue(l, c)), c;
  }
  readValue(l, r) {
    let c = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return c != null && (typeof c == "string" && (VA(c) || UA(c)) ? c = parseFloat(c) : !kN(c) && da.test(r) && (c = wx(l, r)), this.setBaseTarget(l, Xt(c) ? c.get() : c)), Xt(c) ? c.get() : c;
  }
  setBaseTarget(l, r) {
    this.baseTarget[l] = r;
  }
  getBaseTarget(l) {
    var m;
    const { initial: r } = this.props;
    let c;
    if (typeof r == "string" || typeof r == "object") {
      const h = rg(this.props, r, (m = this.presenceContext) == null ? void 0 : m.custom);
      h && (c = h[l]);
    }
    if (r && c !== void 0) return c;
    const d = this.getBaseTargetFromProps(this.props, l);
    return d !== void 0 && !Xt(d) ? d : this.initialValues[l] !== void 0 && c === void 0 ? void 0 : this.baseTarget[l];
  }
  on(l, r) {
    return this.events[l] || (this.events[l] = new Jy()), this.events[l].add(r);
  }
  notify(l, ...r) {
    this.events[l] && this.events[l].notify(...r);
  }
  scheduleRenderMicrotask() {
    fg.render(this.render);
  }
}
class Bx extends ZN {
  constructor() {
    super(...arguments), this.KeyframeResolver = SN;
  }
  sortInstanceNodePosition(l, r) {
    return l.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, r) {
    const c = l.style;
    return c ? c[r] : void 0;
  }
  removeValueFromRenderState(l, { vars: r, style: c }) {
    delete r[l], delete c[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    Xt(l) && (this.childSubscription = l.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
}
class yo {
  constructor(l) {
    this.isMounted = false, this.node = l;
  }
  update() {
  }
}
function Lx({ top: i, left: l, right: r, bottom: c }) {
  return { x: { min: l, max: r }, y: { min: i, max: c } };
}
function PN({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function JN(i, l) {
  if (!l) return i;
  const r = l({ x: i.left, y: i.top }), c = l({ x: i.right, y: i.bottom });
  return { top: r.y, left: r.x, bottom: c.y, right: c.x };
}
function dy(i) {
  return i === void 0 || i === 1;
}
function ky({ scale: i, scaleX: l, scaleY: r }) {
  return !dy(i) || !dy(l) || !dy(r);
}
function rl(i) {
  return ky(i) || Hx(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function Hx(i) {
  return kE(i.x) || kE(i.y);
}
function kE(i) {
  return i && i !== "0%";
}
function ud(i, l, r) {
  const c = i - r, d = l * c;
  return r + d;
}
function qE(i, l, r, c, d) {
  return d !== void 0 && (i = ud(i, d, c)), ud(i, r, c) + l;
}
function qy(i, l = 0, r = 1, c, d) {
  i.min = qE(i.min, l, r, c, d), i.max = qE(i.max, l, r, c, d);
}
function Yx(i, { x: l, y: r }) {
  qy(i.x, l.translate, l.scale, l.originPoint), qy(i.y, r.translate, r.scale, r.originPoint);
}
const GE = 0.999999999999, XE = 1.0000000000001;
function KN(i, l, r, c = false) {
  var y;
  const d = r.length;
  if (!d) return;
  l.x = l.y = 1;
  let m, h;
  for (let T = 0; T < d; T++) {
    m = r[T], h = m.projectionDelta;
    const { visualElement: A } = m.options;
    A && A.props.style && A.props.style.display === "contents" || (c && m.options.layoutScroll && m.scroll && m !== m.root && (Ga(i.x, -m.scroll.offset.x), Ga(i.y, -m.scroll.offset.y)), h && (l.x *= h.x.scale, l.y *= h.y.scale, Yx(i, h)), c && rl(m.latestValues) && ed(i, m.latestValues, (y = m.layout) == null ? void 0 : y.layoutBox));
  }
  l.x < XE && l.x > GE && (l.x = 1), l.y < XE && l.y > GE && (l.y = 1);
}
function Ga(i, l) {
  i.min += l, i.max += l;
}
function $E(i, l, r, c, d = 0.5) {
  const m = rt(i.min, i.max, d);
  qy(i, l, r, m, c);
}
function QE(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function ed(i, l, r) {
  const c = r ?? i;
  $E(i.x, QE(l.x, c.x), l.scaleX, l.scale, l.originX), $E(i.y, QE(l.y, c.y), l.scaleY, l.scale, l.originY);
}
function kx(i, l) {
  return Lx(JN(i.getBoundingClientRect(), l));
}
function FN(i, l, r) {
  const c = kx(i, r), { scroll: d } = l;
  return d && (Ga(c.x, d.offset.x), Ga(c.y, d.offset.y)), c;
}
const IN = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, WN = Os.length;
function e3(i, l, r) {
  let c = "", d = true;
  for (let m = 0; m < WN; m++) {
    const h = Os[m], y = i[h];
    if (y === void 0) continue;
    let T = true;
    if (typeof y == "number") T = y === (h.startsWith("scale") ? 1 : 0);
    else {
      const A = parseFloat(y);
      T = h.startsWith("scale") ? A === 1 : A === 0;
    }
    if (!T || r) {
      const A = Ox(y, cg[h]);
      if (!T) {
        d = false;
        const E = IN[h] || h;
        c += `${E}(${A}) `;
      }
      r && (l[h] = A);
    }
  }
  return c = c.trim(), r ? c = r(l, d ? "" : c) : d && (c = "none"), c;
}
function yg(i, l, r) {
  const { style: c, vars: d, transformOrigin: m } = i;
  let h = false, y = false;
  for (const T in l) {
    const A = l[T];
    if (Ms.has(T)) {
      h = true;
      continue;
    } else if (FA(T)) {
      d[T] = A;
      continue;
    } else {
      const E = Ox(A, cg[T]);
      T.startsWith("origin") ? (y = true, m[T] = E) : c[T] = E;
    }
  }
  if (l.transform || (h || r ? c.transform = e3(l, i.transform, r) : c.transform && (c.transform = "none")), y) {
    const { originX: T = "50%", originY: A = "50%", originZ: E = 0 } = m;
    c.transformOrigin = `${T} ${A} ${E}`;
  }
}
function qx(i, { style: l, vars: r }, c, d) {
  const m = i.style;
  let h;
  for (h in l) m[h] = l[h];
  d == null || d.applyProjectionStyles(m, c);
  for (h in r) m.setProperty(h, r[h]);
}
function ZE(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const du = { correct: (i, l) => {
  if (!l.target) return i;
  if (typeof i == "string") if (ie.test(i)) i = parseFloat(i);
  else return i;
  const r = ZE(i, l.target.x), c = ZE(i, l.target.y);
  return `${r}% ${c}%`;
} }, t3 = { correct: (i, { treeScale: l, projectionDelta: r }) => {
  const c = i, d = da.parse(i);
  if (d.length > 5) return c;
  const m = da.createTransformer(i), h = typeof d[0] != "number" ? 1 : 0, y = r.x.scale * l.x, T = r.y.scale * l.y;
  d[0 + h] /= y, d[1 + h] /= T;
  const A = rt(y, T, 0.5);
  return typeof d[2 + h] == "number" && (d[2 + h] /= A), typeof d[3 + h] == "number" && (d[3 + h] /= A), m(d);
} }, Gy = { borderRadius: { ...du, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: du, borderTopRightRadius: du, borderBottomLeftRadius: du, borderBottomRightRadius: du, boxShadow: t3 };
function Gx(i, { layout: l, layoutId: r }) {
  return Ms.has(i) || i.startsWith("origin") || (l || r !== void 0) && (!!Gy[i] || i === "opacity");
}
function gg(i, l, r) {
  var h;
  const c = i.style, d = l == null ? void 0 : l.style, m = {};
  if (!c) return m;
  for (const y in c) (Xt(c[y]) || d && Xt(d[y]) || Gx(y, i) || ((h = r == null ? void 0 : r.getValue(y)) == null ? void 0 : h.liveStyle) !== void 0) && (m[y] = c[y]);
  return m;
}
function n3(i) {
  return window.getComputedStyle(i);
}
class a3 extends Bx {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = qx;
  }
  readValueFromInstance(l, r) {
    var c;
    if (Ms.has(r)) return (c = this.projection) != null && c.isProjecting ? Oy(r) : TM(l, r);
    {
      const d = n3(l), m = (FA(r) ? d.getPropertyValue(r) : d[r]) || 0;
      return typeof m == "string" ? m.trim() : m;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: r }) {
    return kx(l, r);
  }
  build(l, r, c) {
    yg(l, r, c.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, r, c) {
    return gg(l, r, c);
  }
}
const i3 = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, o3 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function l3(i, l, r = 1, c = 0, d = true) {
  i.pathLength = 1;
  const m = d ? i3 : o3;
  i[m.offset] = `${-c}`, i[m.array] = `${l} ${r}`;
}
const s3 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Xx(i, { attrX: l, attrY: r, attrScale: c, pathLength: d, pathSpacing: m = 1, pathOffset: h = 0, ...y }, T, A, E) {
  if (yg(i, y, A), T) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: S, style: b } = i;
  S.transform && (b.transform = S.transform, delete S.transform), (b.transform || S.transformOrigin) && (b.transformOrigin = S.transformOrigin ?? "50% 50%", delete S.transformOrigin), b.transform && (b.transformBox = (E == null ? void 0 : E.transformBox) ?? "fill-box", delete S.transformBox);
  for (const O of s3) S[O] !== void 0 && (b[O] = S[O], delete S[O]);
  l !== void 0 && (S.x = l), r !== void 0 && (S.y = r), c !== void 0 && (S.scale = c), d !== void 0 && l3(S, d, m, h, false);
}
const $x = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]), Qx = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function r3(i, l, r, c) {
  qx(i, l, void 0, c);
  for (const d in l.attrs) i.setAttribute($x.has(d) ? d : ug(d), l.attrs[d]);
}
function Zx(i, l, r) {
  const c = gg(i, l, r);
  for (const d in i) if (Xt(i[d]) || Xt(l[d])) {
    const m = Os.indexOf(d) !== -1 ? "attr" + d.charAt(0).toUpperCase() + d.substring(1) : d;
    c[m] = i[d];
  }
  return c;
}
class u3 extends Bx {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = Nt;
  }
  getBaseTargetFromProps(l, r) {
    return l[r];
  }
  readValueFromInstance(l, r) {
    if (Ms.has(r)) {
      const c = Rx(r);
      return c && c.default || 0;
    }
    return r = $x.has(r) ? r : ug(r), l.getAttribute(r);
  }
  scrapeMotionValuesFromProps(l, r, c) {
    return Zx(l, r, c);
  }
  build(l, r, c) {
    Xx(l, r, this.isSVGTag, c.transformTemplate, c.style);
  }
  renderInstance(l, r, c, d) {
    r3(l, r, c, d);
  }
  mount(l) {
    this.isSVGTag = Qx(l.tagName), super.mount(l);
  }
}
const c3 = mg.length;
function Px(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const r = i.parent ? Px(i.parent) || {} : {};
    return i.props.initial !== void 0 && (r.initial = i.props.initial), r;
  }
  const l = {};
  for (let r = 0; r < c3; r++) {
    const c = mg[r], d = i.props[c];
    (Su(d) || d === false) && (l[c] = d);
  }
  return l;
}
function Jx(i, l) {
  if (!Array.isArray(l)) return false;
  const r = l.length;
  if (r !== i.length) return false;
  for (let c = 0; c < r; c++) if (l[c] !== i[c]) return false;
  return true;
}
const f3 = [...pg].reverse(), d3 = pg.length;
function h3(i) {
  return (l) => Promise.all(l.map(({ animation: r, options: c }) => uN(i, r, c)));
}
function p3(i) {
  let l = h3(i), r = PE(), c = true, d = false;
  const m = (A) => (E, S) => {
    var O;
    const b = dl(i, S, A === "exit" ? (O = i.presenceContext) == null ? void 0 : O.custom : void 0);
    if (b) {
      const { transition: U, transitionEnd: X, ...H } = b;
      E = { ...E, ...H, ...X };
    }
    return E;
  };
  function h(A) {
    l = A(i);
  }
  function y(A) {
    const { props: E } = i, S = Px(i.parent) || {}, b = [], O = /* @__PURE__ */ new Set();
    let U = {}, X = 1 / 0;
    for (let Y = 0; Y < d3; Y++) {
      const K = f3[Y], Z = r[K], W = E[K] !== void 0 ? E[K] : S[K], re = Su(W), Ge = K === A ? Z.isActive : null;
      Ge === false && (X = Y);
      let Ye = W === S[K] && W !== E[K] && re;
      if (Ye && (c || d) && i.manuallyAnimateOnMount && (Ye = false), Z.protectedKeys = { ...U }, !Z.isActive && Ge === null || !W && !Z.prevProp || hd(W) || typeof W == "boolean") continue;
      if (K === "exit" && Z.isActive && Ge !== true) {
        Z.prevResolvedValues && (U = { ...U, ...Z.prevResolvedValues });
        continue;
      }
      const ae = m3(Z.prevProp, W);
      let Re = ae || K === A && Z.isActive && !Ye && re || Y > X && re, k = false;
      const Me = Array.isArray(W) ? W : [W];
      let ne = Me.reduce(m(K), {});
      Ge === false && (ne = {});
      const { prevResolvedValues: ge = {} } = Z, Qe = { ...ge, ...ne }, Ke = (ee) => {
        Re = true, O.has(ee) && (k = true, O.delete(ee)), Z.needsAnimating[ee] = true;
        const be = i.getValue(ee);
        be && (be.liveStyle = false);
      };
      for (const ee in Qe) {
        const be = ne[ee], Ve = ge[ee];
        if (U.hasOwnProperty(ee)) continue;
        let w = false;
        jy(be) && jy(Ve) ? w = !Jx(be, Ve) : w = be !== Ve, w ? be != null ? Ke(ee) : O.add(ee) : be !== void 0 && O.has(ee) ? Ke(ee) : Z.protectedKeys[ee] = true;
      }
      Z.prevProp = W, Z.prevResolvedValues = ne, Z.isActive && (U = { ...U, ...ne }), (c || d) && i.blockInitialAnimation && (Re = false);
      const $ = Ye && ae;
      Re && (!$ || k) && b.push(...Me.map((ee) => {
        const be = { type: K };
        if (typeof ee == "string" && (c || d) && !$ && i.manuallyAnimateOnMount && i.parent) {
          const { parent: Ve } = i, w = dl(Ve, ee);
          if (Ve.enteringChildren && w) {
            const { delayChildren: Q } = w.transition || {};
            be.delay = gx(Ve.enteringChildren, i, Q);
          }
        }
        return { animation: ee, options: be };
      }));
    }
    if (O.size) {
      const Y = {};
      if (typeof E.initial != "boolean") {
        const K = dl(i, Array.isArray(E.initial) ? E.initial[0] : E.initial);
        K && K.transition && (Y.transition = K.transition);
      }
      O.forEach((K) => {
        const Z = i.getBaseTarget(K), W = i.getValue(K);
        W && (W.liveStyle = true), Y[K] = Z ?? null;
      }), b.push({ animation: Y });
    }
    let H = !!b.length;
    return c && (E.initial === false || E.initial === E.animate) && !i.manuallyAnimateOnMount && (H = false), c = false, d = false, H ? l(b) : Promise.resolve();
  }
  function T(A, E) {
    var b;
    if (r[A].isActive === E) return Promise.resolve();
    (b = i.variantChildren) == null || b.forEach((O) => {
      var U;
      return (U = O.animationState) == null ? void 0 : U.setActive(A, E);
    }), r[A].isActive = E;
    const S = y(A);
    for (const O in r) r[O].protectedKeys = {};
    return S;
  }
  return { animateChanges: y, setActive: T, setAnimateFunction: h, getState: () => r, reset: () => {
    r = PE(), d = true;
  } };
}
function m3(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !Jx(l, i) : false;
}
function sl(i = false) {
  return { isActive: i, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function PE() {
  return { animate: sl(true), whileInView: sl(), whileHover: sl(), whileTap: sl(), whileDrag: sl(), whileFocus: sl(), exit: sl() };
}
function Xy(i, l) {
  i.min = l.min, i.max = l.max;
}
function ca(i, l) {
  Xy(i.x, l.x), Xy(i.y, l.y);
}
function JE(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const Kx = 1e-4, y3 = 1 - Kx, g3 = 1 + Kx, Fx = 0.01, v3 = 0 - Fx, b3 = 0 + Fx;
function un(i) {
  return i.max - i.min;
}
function S3(i, l, r) {
  return Math.abs(i - l) <= r;
}
function KE(i, l, r, c = 0.5) {
  i.origin = c, i.originPoint = rt(l.min, l.max, i.origin), i.scale = un(r) / un(l), i.translate = rt(r.min, r.max, i.origin) - i.originPoint, (i.scale >= y3 && i.scale <= g3 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= v3 && i.translate <= b3 || isNaN(i.translate)) && (i.translate = 0);
}
function yu(i, l, r, c) {
  KE(i.x, l.x, r.x, c ? c.originX : void 0), KE(i.y, l.y, r.y, c ? c.originY : void 0);
}
function FE(i, l, r, c = 0) {
  const d = c ? rt(r.min, r.max, c) : r.min;
  i.min = d + l.min, i.max = i.min + un(l);
}
function T3(i, l, r, c) {
  FE(i.x, l.x, r.x, c == null ? void 0 : c.x), FE(i.y, l.y, r.y, c == null ? void 0 : c.y);
}
function IE(i, l, r, c = 0) {
  const d = c ? rt(r.min, r.max, c) : r.min;
  i.min = l.min - d, i.max = i.min + un(l);
}
function cd(i, l, r, c) {
  IE(i.x, l.x, r.x, c == null ? void 0 : c.x), IE(i.y, l.y, r.y, c == null ? void 0 : c.y);
}
function WE(i, l, r, c, d) {
  return i -= l, i = ud(i, 1 / r, c), d !== void 0 && (i = ud(i, 1 / d, c)), i;
}
function E3(i, l = 0, r = 1, c = 0.5, d, m = i, h = i) {
  if (Xa.test(l) && (l = parseFloat(l), l = rt(h.min, h.max, l / 100) - h.min), typeof l != "number") return;
  let y = rt(m.min, m.max, c);
  i === m && (y -= l), i.min = WE(i.min, l, r, y, d), i.max = WE(i.max, l, r, y, d);
}
function eA(i, l, [r, c, d], m, h) {
  E3(i, l[r], l[c], l[d], l.scale, m, h);
}
const A3 = ["x", "scaleX", "originX"], x3 = ["y", "scaleY", "originY"];
function tA(i, l, r, c) {
  eA(i.x, l, A3, r ? r.x : void 0, c ? c.x : void 0), eA(i.y, l, x3, r ? r.y : void 0, c ? c.y : void 0);
}
function nA(i) {
  return i.translate === 0 && i.scale === 1;
}
function Ix(i) {
  return nA(i.x) && nA(i.y);
}
function aA(i, l) {
  return i.min === l.min && i.max === l.max;
}
function D3(i, l) {
  return aA(i.x, l.x) && aA(i.y, l.y);
}
function iA(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function Wx(i, l) {
  return iA(i.x, l.x) && iA(i.y, l.y);
}
function oA(i) {
  return un(i.x) / un(i.y);
}
function lA(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function qa(i) {
  return [i("x"), i("y")];
}
function R3(i, l, r) {
  let c = "";
  const d = i.x.translate / l.x, m = i.y.translate / l.y, h = (r == null ? void 0 : r.z) || 0;
  if ((d || m || h) && (c = `translate3d(${d}px, ${m}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (c += `scale(${1 / l.x}, ${1 / l.y}) `), r) {
    const { transformPerspective: A, rotate: E, rotateX: S, rotateY: b, skewX: O, skewY: U } = r;
    A && (c = `perspective(${A}px) ${c}`), E && (c += `rotate(${E}deg) `), S && (c += `rotateX(${S}deg) `), b && (c += `rotateY(${b}deg) `), O && (c += `skewX(${O}deg) `), U && (c += `skewY(${U}deg) `);
  }
  const y = i.x.scale * l.x, T = i.y.scale * l.y;
  return (y !== 1 || T !== 1) && (c += `scale(${y}, ${T})`), c || "none";
}
const eD = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"], w3 = eD.length, sA = (i) => typeof i == "string" ? parseFloat(i) : i, rA = (i) => typeof i == "number" || ie.test(i);
function C3(i, l, r, c, d, m) {
  d ? (i.opacity = rt(0, r.opacity ?? 1, O3(c)), i.opacityExit = rt(l.opacity ?? 1, 0, M3(c))) : m && (i.opacity = rt(l.opacity ?? 1, r.opacity ?? 1, c));
  for (let h = 0; h < w3; h++) {
    const y = eD[h];
    let T = uA(l, y), A = uA(r, y);
    if (T === void 0 && A === void 0) continue;
    T || (T = 0), A || (A = 0), T === 0 || A === 0 || rA(T) === rA(A) ? (i[y] = Math.max(rt(sA(T), sA(A), c), 0), (Xa.test(A) || Xa.test(T)) && (i[y] += "%")) : i[y] = A;
  }
  (l.rotate || r.rotate) && (i.rotate = rt(l.rotate || 0, r.rotate || 0, c));
}
function uA(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const O3 = tD(0, 0.5, $A), M3 = tD(0.5, 0.95, Fn);
function tD(i, l, r) {
  return (c) => c < i ? 0 : c > l ? 1 : r(vu(i, l, c));
}
function N3(i, l, r) {
  const c = Xt(i) ? i : Rs(i);
  return c.start(sg("", c, l, r)), c.animation;
}
function Tu(i, l, r, c = { passive: true }) {
  return i.addEventListener(l, r, c), () => i.removeEventListener(l, r);
}
const _3 = (i, l) => i.depth - l.depth;
class z3 {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(l) {
    Py(this.children, l), this.isDirty = true;
  }
  remove(l) {
    ad(this.children, l), this.isDirty = true;
  }
  forEach(l) {
    this.isDirty && this.children.sort(_3), this.isDirty = false, this.children.forEach(l);
  }
}
function V3(i, l) {
  const r = rn.now(), c = ({ timestamp: d }) => {
    const m = d - r;
    m >= l && (mo(c), i(m - l));
  };
  return nt.setup(c, true), () => mo(c);
}
function td(i) {
  return Xt(i) ? i.get() : i;
}
class j3 {
  constructor() {
    this.members = [];
  }
  add(l) {
    Py(this.members, l);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const c = this.members[r];
      if (c === l || c === this.lead || c === this.prevLead) continue;
      const d = c.instance;
      (!d || d.isConnected === false) && !c.snapshot && (ad(this.members, c), c.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (ad(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(l) {
    var r;
    for (let c = this.members.indexOf(l) - 1; c >= 0; c--) {
      const d = this.members[c];
      if (d.isPresent !== false && ((r = d.instance) == null ? void 0 : r.isConnected) !== false) return this.promote(d), true;
    }
    return false;
  }
  promote(l, r) {
    var d;
    const c = this.lead;
    if (l !== c && (this.prevLead = c, this.lead = l, l.show(), c)) {
      c.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: m } = c.options, { layoutDependency: h } = l.options;
      (m === void 0 || m !== h) && (l.resumeFrom = c, r && (c.preserveOpacity = true), c.snapshot && (l.snapshot = c.snapshot, l.snapshot.latestValues = c.animationValues || c.latestValues), (d = l.root) != null && d.isUpdating && (l.isLayoutDirty = true)), l.options.crossfade === false && c.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var r, c, d, m, h;
      (c = (r = l.options).onExitComplete) == null || c.call(r), (h = (d = l.resumingFrom) == null ? void 0 : (m = d.options).onExitComplete) == null || h.call(m);
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(false));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const nd = { hasAnimatedSinceResize: true, hasEverUpdated: false }, hy = ["", "X", "Y", "Z"], U3 = 1e3;
let B3 = 0;
function py(i, l, r, c) {
  const { latestValues: d } = l;
  d[i] && (r[i] = d[i], l.setStaticValue(i, 0), c && (c[i] = 0));
}
function nD(i) {
  if (i.hasCheckedOptimisedAppear = true, i.root === i) return;
  const { visualElement: l } = i.options;
  if (!l) return;
  const r = Ex(l);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: d, layoutId: m } = i.options;
    window.MotionCancelOptimisedAnimation(r, "transform", nt, !(d || m));
  }
  const { parent: c } = i;
  c && !c.hasCheckedOptimisedAppear && nD(c);
}
function aD({ attachResizeListener: i, defaultParent: l, measureScroll: r, checkIsScrollRoot: c, resetTransform: d }) {
  return class {
    constructor(h = {}, y = l == null ? void 0 : l()) {
      this.id = B3++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, this.nodes.forEach(Y3), this.nodes.forEach(Q3), this.nodes.forEach(Z3), this.nodes.forEach(k3);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = h, this.root = y ? y.root || y : this, this.path = y ? [...y.path, y] : [], this.parent = y, this.depth = y ? y.depth + 1 : 0;
      for (let T = 0; T < this.path.length; T++) this.path[T].shouldResetTransform = true;
      this.root === this && (this.nodes = new z3());
    }
    addEventListener(h, y) {
      return this.eventHandlers.has(h) || this.eventHandlers.set(h, new Jy()), this.eventHandlers.get(h).add(y);
    }
    notifyListeners(h, ...y) {
      const T = this.eventHandlers.get(h);
      T && T.notify(...y);
    }
    hasListeners(h) {
      return this.eventHandlers.has(h);
    }
    mount(h) {
      if (this.instance) return;
      this.isSVG = hg(h) && !HN(h), this.instance = h;
      const { layoutId: y, layout: T, visualElement: A } = this.options;
      if (A && !A.current && A.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (T || y) && (this.isLayoutDirty = true), i) {
        let E, S = 0;
        const b = () => this.root.updateBlockedByResize = false;
        nt.read(() => {
          S = window.innerWidth;
        }), i(h, () => {
          const O = window.innerWidth;
          O !== S && (S = O, this.root.updateBlockedByResize = true, E && E(), E = V3(b, 250), nd.hasAnimatedSinceResize && (nd.hasAnimatedSinceResize = false, this.nodes.forEach(dA)));
        });
      }
      y && this.root.registerSharedNode(y, this), this.options.animate !== false && A && (y || T) && this.addEventListener("didUpdate", ({ delta: E, hasLayoutChanged: S, hasRelativeLayoutChanged: b, layout: O }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const U = this.options.transition || A.getDefaultTransition() || I3, { onLayoutAnimationStart: X, onLayoutAnimationComplete: H } = A.getProps(), Y = !this.targetLayout || !Wx(this.targetLayout, O), K = !S && b;
        if (this.options.layoutRoot || this.resumeFrom || K || S && (Y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const Z = { ...lg(U, "layout"), onPlay: X, onComplete: H };
          (A.shouldReduceMotion || this.options.layoutRoot) && (Z.delay = 0, Z.type = false), this.startAnimation(Z), this.setAnimationOrigin(E, K);
        } else S || dA(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = O;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const h = this.getStack();
      h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), mo(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(P3), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: h } = this.options;
      return h && h.getProps().transformTemplate;
    }
    willUpdate(h = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && nD(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let E = 0; E < this.path.length; E++) {
        const S = this.path[E];
        S.shouldResetTransform = true, (typeof S.latestValues.x == "string" || typeof S.latestValues.y == "string") && (S.isLayoutDirty = true), S.updateScroll("snapshot"), S.options.layoutRoot && S.willUpdate(false);
      }
      const { layoutId: y, layout: T } = this.options;
      if (y === void 0 && !T) return;
      const A = this.getTransformTemplate();
      this.prevTransformTemplateValue = A ? A(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        const T = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = false, this.clearAllSnapshots(), T && this.nodes.forEach(G3), this.nodes.forEach(cA);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(fA);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(X3), this.nodes.forEach($3), this.nodes.forEach(L3), this.nodes.forEach(H3)) : this.nodes.forEach(fA), this.clearAllSnapshots();
      const y = rn.now();
      Gt.delta = $a(0, 1e3 / 60, y - Gt.timestamp), Gt.timestamp = y, Gt.isProcessing = true, oy.update.process(Gt), oy.preRender.process(Gt), oy.render.process(Gt), Gt.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, fg.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(q3), this.sharedNodes.forEach(J3);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, nt.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      nt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !un(this.snapshot.measuredBox.x) && !un(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let T = 0; T < this.path.length; T++) this.path[T].updateScroll();
      const h = this.layout;
      this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Nt()), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: y } = this.options;
      y && y.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0);
    }
    updateScroll(h = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (y = false), y && this.instance) {
        const T = c(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: h, isRoot: T, offset: r(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : T };
      }
    }
    resetTransform() {
      if (!d) return;
      const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, y = this.projectionDelta && !Ix(this.projectionDelta), T = this.getTransformTemplate(), A = T ? T(this.latestValues, "") : void 0, E = A !== this.prevTransformTemplateValue;
      h && this.instance && (y || rl(this.latestValues) || E) && (d(this.instance, A), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(h = true) {
      const y = this.measurePageBox();
      let T = this.removeElementScroll(y);
      return h && (T = this.removeTransform(T)), W3(T), { animationId: this.root.animationId, measuredBox: y, layoutBox: T, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var A;
      const { visualElement: h } = this.options;
      if (!h) return Nt();
      const y = h.measureViewportBox();
      if (!(((A = this.scroll) == null ? void 0 : A.wasRoot) || this.path.some(e_))) {
        const { scroll: E } = this.root;
        E && (Ga(y.x, E.offset.x), Ga(y.y, E.offset.y));
      }
      return y;
    }
    removeElementScroll(h) {
      var T;
      const y = Nt();
      if (ca(y, h), (T = this.scroll) != null && T.wasRoot) return y;
      for (let A = 0; A < this.path.length; A++) {
        const E = this.path[A], { scroll: S, options: b } = E;
        E !== this.root && S && b.layoutScroll && (S.wasRoot && ca(y, h), Ga(y.x, S.offset.x), Ga(y.y, S.offset.y));
      }
      return y;
    }
    applyTransform(h, y = false, T) {
      var E, S;
      const A = T || Nt();
      ca(A, h);
      for (let b = 0; b < this.path.length; b++) {
        const O = this.path[b];
        !y && O.options.layoutScroll && O.scroll && O !== O.root && (Ga(A.x, -O.scroll.offset.x), Ga(A.y, -O.scroll.offset.y)), rl(O.latestValues) && ed(A, O.latestValues, (E = O.layout) == null ? void 0 : E.layoutBox);
      }
      return rl(this.latestValues) && ed(A, this.latestValues, (S = this.layout) == null ? void 0 : S.layoutBox), A;
    }
    removeTransform(h) {
      var T;
      const y = Nt();
      ca(y, h);
      for (let A = 0; A < this.path.length; A++) {
        const E = this.path[A];
        if (!rl(E.latestValues)) continue;
        let S;
        E.instance && (ky(E.latestValues) && E.updateSnapshot(), S = Nt(), ca(S, E.measurePageBox())), tA(y, E.latestValues, (T = E.snapshot) == null ? void 0 : T.layoutBox, S);
      }
      return rl(this.latestValues) && tA(y, this.latestValues), y;
    }
    setTargetDelta(h) {
      this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(h) {
      this.options = { ...this.options, ...h, crossfade: h.crossfade !== void 0 ? h.crossfade : true };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Gt.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(h = false) {
      var O;
      const y = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = y.isSharedProjectionDirty);
      const T = !!this.resumingFrom || this !== y;
      if (!(h || T && this.isSharedProjectionDirty || this.isProjectionDirty || (O = this.parent) != null && O.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: E, layoutId: S } = this.options;
      if (!this.layout || !(E || S)) return;
      this.resolvedRelativeTargetAt = Gt.timestamp;
      const b = this.getClosestProjectingParent();
      b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== false && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Nt(), this.targetWithTransforms = Nt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), T3(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, false, this.target) : ca(this.target, this.layout.layoutBox), Yx(this.target, this.targetDelta)) : ca(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, this.options.layoutAnchor !== false && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ky(this.parent.latestValues) || Hx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(h, y, T) {
      this.relativeParent = h, this.linkedParentVersion = h.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Nt(), this.relativeTargetOrigin = Nt(), cd(this.relativeTargetOrigin, y, T, this.options.layoutAnchor || void 0), ca(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var U;
      const h = this.getLead(), y = !!this.resumingFrom || this !== h;
      let T = true;
      if ((this.isProjectionDirty || (U = this.parent) != null && U.isProjectionDirty) && (T = false), y && (this.isSharedProjectionDirty || this.isTransformDirty) && (T = false), this.resolvedRelativeTargetAt === Gt.timestamp && (T = false), T) return;
      const { layout: A, layoutId: E } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(A || E)) return;
      ca(this.layoutCorrected, this.layout.layoutBox);
      const S = this.treeScale.x, b = this.treeScale.y;
      KN(this.layoutCorrected, this.treeScale, this.path, y), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = Nt());
      const { target: O } = h;
      if (!O) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (JE(this.prevProjectionDelta.x, this.projectionDelta.x), JE(this.prevProjectionDelta.y, this.projectionDelta.y)), yu(this.projectionDelta, this.layoutCorrected, O, this.latestValues), (this.treeScale.x !== S || this.treeScale.y !== b || !lA(this.projectionDelta.x, this.prevProjectionDelta.x) || !lA(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", O));
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(h = true) {
      var y;
      if ((y = this.options.visualElement) == null || y.scheduleRender(), h) {
        const T = this.getStack();
        T && T.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = xs(), this.projectionDelta = xs(), this.projectionDeltaWithTransform = xs();
    }
    setAnimationOrigin(h, y = false) {
      const T = this.snapshot, A = T ? T.latestValues : {}, E = { ...this.latestValues }, S = xs();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !y;
      const b = Nt(), O = T ? T.source : void 0, U = this.layout ? this.layout.source : void 0, X = O !== U, H = this.getStack(), Y = !H || H.members.length <= 1, K = !!(X && !Y && this.options.crossfade === true && !this.path.some(F3));
      this.animationProgress = 0;
      let Z;
      this.mixTargetDelta = (W) => {
        const re = W / 1e3;
        hA(S.x, h.x, re), hA(S.y, h.y, re), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (cd(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), K3(this.relativeTarget, this.relativeTargetOrigin, b, re), Z && D3(this.relativeTarget, Z) && (this.isProjectionDirty = false), Z || (Z = Nt()), ca(Z, this.relativeTarget)), X && (this.animationValues = E, C3(E, A, this.latestValues, re, K, Y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = re;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(h) {
      var y, T, A;
      this.notifyListeners("animationStart"), (y = this.currentAnimation) == null || y.stop(), (A = (T = this.resumingFrom) == null ? void 0 : T.currentAnimation) == null || A.stop(), this.pendingAnimation && (mo(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = nt.update(() => {
        nd.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = Rs(0)), this.motionValue.jump(0, false), this.currentAnimation = N3(this.motionValue, [0, 1e3], { ...h, velocity: 0, isSync: true, onUpdate: (E) => {
          this.mixTargetDelta(E), h.onUpdate && h.onUpdate(E);
        }, onStop: () => {
        }, onComplete: () => {
          h.onComplete && h.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const h = this.getStack();
      h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(U3), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const h = this.getLead();
      let { targetWithTransforms: y, target: T, layout: A, latestValues: E } = h;
      if (!(!y || !T || !A)) {
        if (this !== h && this.layout && A && iD(this.options.animationType, this.layout.layoutBox, A.layoutBox)) {
          T = this.target || Nt();
          const S = un(this.layout.layoutBox.x);
          T.x.min = h.target.x.min, T.x.max = T.x.min + S;
          const b = un(this.layout.layoutBox.y);
          T.y.min = h.target.y.min, T.y.max = T.y.min + b;
        }
        ca(y, T), ed(y, E), yu(this.projectionDeltaWithTransform, this.layoutCorrected, y, E);
      }
    }
    registerSharedNode(h, y) {
      this.sharedNodes.has(h) || this.sharedNodes.set(h, new j3()), this.sharedNodes.get(h).add(y);
      const A = y.options.initialPromotionConfig;
      y.promote({ transition: A ? A.transition : void 0, preserveFollowOpacity: A && A.shouldPreserveFollowOpacity ? A.shouldPreserveFollowOpacity(y) : void 0 });
    }
    isLead() {
      const h = this.getStack();
      return h ? h.lead === this : true;
    }
    getLead() {
      var y;
      const { layoutId: h } = this.options;
      return h ? ((y = this.getStack()) == null ? void 0 : y.lead) || this : this;
    }
    getPrevLead() {
      var y;
      const { layoutId: h } = this.options;
      return h ? (y = this.getStack()) == null ? void 0 : y.prevLead : void 0;
    }
    getStack() {
      const { layoutId: h } = this.options;
      if (h) return this.root.sharedNodes.get(h);
    }
    promote({ needsReset: h, transition: y, preserveFollowOpacity: T } = {}) {
      const A = this.getStack();
      A && A.promote(this, T), h && (this.projectionDelta = void 0, this.needsReset = true), y && this.setOptions({ transition: y });
    }
    relegate() {
      const h = this.getStack();
      return h ? h.relegate(this) : false;
    }
    resetSkewAndRotation() {
      const { visualElement: h } = this.options;
      if (!h) return;
      let y = false;
      const { latestValues: T } = h;
      if ((T.z || T.rotate || T.rotateX || T.rotateY || T.rotateZ || T.skewX || T.skewY) && (y = true), !y) return;
      const A = {};
      T.z && py("z", h, A, this.animationValues);
      for (let E = 0; E < hy.length; E++) py(`rotate${hy[E]}`, h, A, this.animationValues), py(`skew${hy[E]}`, h, A, this.animationValues);
      h.render();
      for (const E in A) h.setStaticValue(E, A[E]), this.animationValues && (this.animationValues[E] = A[E]);
      h.scheduleRender();
    }
    applyProjectionStyles(h, y) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        h.visibility = "hidden";
        return;
      }
      const T = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, h.visibility = "", h.opacity = "", h.pointerEvents = td(y == null ? void 0 : y.pointerEvents) || "", h.transform = T ? T(this.latestValues, "") : "none";
        return;
      }
      const A = this.getLead();
      if (!this.projectionDelta || !this.layout || !A.target) {
        this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = td(y == null ? void 0 : y.pointerEvents) || ""), this.hasProjected && !rl(this.latestValues) && (h.transform = T ? T({}, "") : "none", this.hasProjected = false);
        return;
      }
      h.visibility = "";
      const E = A.animationValues || A.latestValues;
      this.applyTransformsToTarget();
      let S = R3(this.projectionDeltaWithTransform, this.treeScale, E);
      T && (S = T(E, S)), h.transform = S;
      const { x: b, y: O } = this.projectionDelta;
      h.transformOrigin = `${b.origin * 100}% ${O.origin * 100}% 0`, A.animationValues ? h.opacity = A === this ? E.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : E.opacityExit : h.opacity = A === this ? E.opacity !== void 0 ? E.opacity : "" : E.opacityExit !== void 0 ? E.opacityExit : 0;
      for (const U in Gy) {
        if (E[U] === void 0) continue;
        const { correct: X, applyTo: H, isCSSVariable: Y } = Gy[U], K = S === "none" ? E[U] : X(E[U], A);
        if (H) {
          const Z = H.length;
          for (let W = 0; W < Z; W++) h[H[W]] = K;
        } else Y ? this.options.visualElement.renderState.vars[U] = K : h[U] = K;
      }
      this.options.layoutId && (h.pointerEvents = A === this ? td(y == null ? void 0 : y.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((h) => {
        var y;
        return (y = h.currentAnimation) == null ? void 0 : y.stop();
      }), this.root.nodes.forEach(cA), this.root.sharedNodes.clear();
    }
  };
}
function L3(i) {
  i.updateLayout();
}
function H3(i) {
  var r;
  const l = ((r = i.resumeFrom) == null ? void 0 : r.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: c, measuredBox: d } = i.layout, { animationType: m } = i.options, h = l.source !== i.layout.source;
    if (m === "size") qa((S) => {
      const b = h ? l.measuredBox[S] : l.layoutBox[S], O = un(b);
      b.min = c[S].min, b.max = b.min + O;
    });
    else if (m === "x" || m === "y") {
      const S = m === "x" ? "y" : "x";
      Xy(h ? l.measuredBox[S] : l.layoutBox[S], c[S]);
    } else iD(m, l.layoutBox, c) && qa((S) => {
      const b = h ? l.measuredBox[S] : l.layoutBox[S], O = un(c[S]);
      b.max = b.min + O, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = true, i.relativeTarget[S].max = i.relativeTarget[S].min + O);
    });
    const y = xs();
    yu(y, c, l.layoutBox);
    const T = xs();
    h ? yu(T, i.applyTransform(d, true), l.measuredBox) : yu(T, c, l.layoutBox);
    const A = !Ix(y);
    let E = false;
    if (!i.resumeFrom) {
      const S = i.getClosestProjectingParent();
      if (S && !S.resumeFrom) {
        const { snapshot: b, layout: O } = S;
        if (b && O) {
          const U = i.options.layoutAnchor || void 0, X = Nt();
          cd(X, l.layoutBox, b.layoutBox, U);
          const H = Nt();
          cd(H, c, O.layoutBox, U), Wx(X, H) || (E = true), S.options.layoutRoot && (i.relativeTarget = H, i.relativeTargetOrigin = X, i.relativeParent = S);
        }
      }
    }
    i.notifyListeners("didUpdate", { layout: c, snapshot: l, delta: T, layoutDelta: y, hasLayoutChanged: A, hasRelativeLayoutChanged: E });
  } else if (i.isLead()) {
    const { onExitComplete: c } = i.options;
    c && c();
  }
  i.options.transition = void 0;
}
function Y3(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function k3(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = false;
}
function q3(i) {
  i.clearSnapshot();
}
function cA(i) {
  i.clearMeasurements();
}
function G3(i) {
  i.isLayoutDirty = true, i.updateLayout();
}
function fA(i) {
  i.isLayoutDirty = false;
}
function X3(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.layout, i.isLayoutDirty = true);
}
function $3(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function dA(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = true;
}
function Q3(i) {
  i.resolveTargetDelta();
}
function Z3(i) {
  i.calcProjection();
}
function P3(i) {
  i.resetSkewAndRotation();
}
function J3(i) {
  i.removeLeadSnapshot();
}
function hA(i, l, r) {
  i.translate = rt(l.translate, 0, r), i.scale = rt(l.scale, 1, r), i.origin = l.origin, i.originPoint = l.originPoint;
}
function pA(i, l, r, c) {
  i.min = rt(l.min, r.min, c), i.max = rt(l.max, r.max, c);
}
function K3(i, l, r, c) {
  pA(i.x, l.x, r.x, c), pA(i.y, l.y, r.y, c);
}
function F3(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const I3 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, mA = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), yA = mA("applewebkit/") && !mA("chrome/") ? Math.round : Fn;
function gA(i) {
  i.min = yA(i.min), i.max = yA(i.max);
}
function W3(i) {
  gA(i.x), gA(i.y);
}
function iD(i, l, r) {
  return i === "position" || i === "preserve-aspect" && !S3(oA(l), oA(r), 0.2);
}
function e_(i) {
  var l;
  return i !== i.root && ((l = i.scroll) == null ? void 0 : l.wasRoot);
}
const t_ = aD({ attachResizeListener: (i, l) => Tu(i, "resize", l), measureScroll: () => {
  var i, l;
  return { x: document.documentElement.scrollLeft || ((i = document.body) == null ? void 0 : i.scrollLeft) || 0, y: document.documentElement.scrollTop || ((l = document.body) == null ? void 0 : l.scrollTop) || 0 };
}, checkIsScrollRoot: () => true }), my = { current: void 0 }, oD = aD({ measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }), defaultParent: () => {
  if (!my.current) {
    const i = new t_({});
    i.mount(window), i.setOptions({ layoutScroll: true }), my.current = i;
  }
  return my.current;
}, resetTransform: (i, l) => {
  i.style.transform = l !== void 0 ? l : "none";
}, checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed" }), lD = ye.createContext({ transformPagePoint: (i) => i, isStatic: false, reducedMotion: "never" });
function n_(i = true) {
  const l = ye.useContext(Zy);
  if (l === null) return [true, null];
  const { isPresent: r, onExitComplete: c, register: d } = l, m = ye.useId();
  ye.useEffect(() => {
    if (i) return d(m);
  }, [i]);
  const h = ye.useCallback(() => i && c && c(m), [m, c, i]);
  return !r && c ? [false, h] : [true];
}
const sD = ye.createContext({ strict: false }), vA = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] };
let bA = false;
function a_() {
  if (bA) return;
  const i = {};
  for (const l in vA) i[l] = { isEnabled: (r) => vA[l].some((c) => !!r[c]) };
  Ux(i), bA = true;
}
function rD() {
  return a_(), QN();
}
function i_(i) {
  const l = rD();
  for (const r in i) l[r] = { ...l[r], ...i[r] };
  Ux(l);
}
const o_ = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function fd(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || o_.has(i);
}
let uD = (i) => !fd(i);
function l_(i) {
  typeof i == "function" && (uD = (l) => l.startsWith("on") ? !fd(l) : i(l));
}
try {
  l_(require("@emotion/is-prop-valid").default);
} catch {
}
function s_(i, l, r) {
  const c = {};
  for (const d in i) d === "values" && typeof i.values == "object" || Xt(i[d]) || (uD(d) || r === true && fd(d) || !l && !fd(d) || i.draggable && d.startsWith("onDrag")) && (c[d] = i[d]);
  return c;
}
const md = ye.createContext({});
function r_(i, l) {
  if (pd(i)) {
    const { initial: r, animate: c } = i;
    return { initial: r === false || Su(r) ? r : void 0, animate: Su(c) ? c : void 0 };
  }
  return i.inherit !== false ? l : {};
}
function u_(i) {
  const { initial: l, animate: r } = r_(i, ye.useContext(md));
  return ye.useMemo(() => ({ initial: l, animate: r }), [SA(l), SA(r)]);
}
function SA(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const vg = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function cD(i, l, r) {
  for (const c in l) !Xt(l[c]) && !Gx(c, r) && (i[c] = l[c]);
}
function c_({ transformTemplate: i }, l) {
  return ye.useMemo(() => {
    const r = vg();
    return yg(r, l, i), Object.assign({}, r.vars, r.style);
  }, [l]);
}
function f_(i, l) {
  const r = i.style || {}, c = {};
  return cD(c, r, i), Object.assign(c, c_(i, l)), c;
}
function d_(i, l) {
  const r = {}, c = f_(i, l);
  return i.drag && i.dragListener !== false && (r.draggable = false, c.userSelect = c.WebkitUserSelect = c.WebkitTouchCallout = "none", c.touchAction = i.drag === true ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (r.tabIndex = 0), r.style = c, r;
}
const fD = () => ({ ...vg(), attrs: {} });
function h_(i, l, r, c) {
  const d = ye.useMemo(() => {
    const m = fD();
    return Xx(m, l, Qx(c), i.transformTemplate, i.style), { ...m.attrs, style: { ...m.style } };
  }, [l]);
  if (i.style) {
    const m = {};
    cD(m, i.style, i), d.style = { ...m, ...d.style };
  }
  return d;
}
const p_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function bg(i) {
  return typeof i != "string" || i.includes("-") ? false : !!(p_.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function m_(i, l, r, { latestValues: c }, d, m = false, h) {
  const T = (h ?? bg(i) ? h_ : d_)(l, c, d, i), A = s_(l, typeof i == "string", m), E = i !== ye.Fragment ? { ...A, ...T, ref: r } : {}, { children: S } = l, b = ye.useMemo(() => Xt(S) ? S.get() : S, [S]);
  return ye.createElement(i, { ...E, children: b });
}
function y_({ scrapeMotionValuesFromProps: i, createRenderState: l }, r, c, d) {
  return { latestValues: g_(r, c, d, i), renderState: l() };
}
function g_(i, l, r, c) {
  const d = {}, m = c(i, {});
  for (const b in m) d[b] = td(m[b]);
  let { initial: h, animate: y } = i;
  const T = pd(i), A = Vx(i);
  l && A && !T && i.inherit !== false && (h === void 0 && (h = l.initial), y === void 0 && (y = l.animate));
  let E = r ? r.initial === false : false;
  E = E || h === false;
  const S = E ? y : h;
  if (S && typeof S != "boolean" && !hd(S)) {
    const b = Array.isArray(S) ? S : [S];
    for (let O = 0; O < b.length; O++) {
      const U = rg(i, b[O]);
      if (U) {
        const { transitionEnd: X, transition: H, ...Y } = U;
        for (const K in Y) {
          let Z = Y[K];
          if (Array.isArray(Z)) {
            const W = E ? Z.length - 1 : 0;
            Z = Z[W];
          }
          Z !== null && (d[K] = Z);
        }
        for (const K in X) d[K] = X[K];
      }
    }
  }
  return d;
}
const dD = (i) => (l, r) => {
  const c = ye.useContext(md), d = ye.useContext(Zy), m = () => y_(i, l, c, d);
  return r ? m() : pO(m);
}, v_ = dD({ scrapeMotionValuesFromProps: gg, createRenderState: vg }), b_ = dD({ scrapeMotionValuesFromProps: Zx, createRenderState: fD }), S_ = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function T_(i, l, r) {
  const c = ye.useRef(r);
  ye.useInsertionEffect(() => {
    c.current = r;
  });
  const d = ye.useRef(null);
  return ye.useCallback((m) => {
    var y;
    m && ((y = i.onMount) == null || y.call(i, m));
    const h = c.current;
    if (typeof h == "function") if (m) {
      const T = h(m);
      typeof T == "function" && (d.current = T);
    } else d.current ? (d.current(), d.current = null) : h(m);
    else h && (h.current = m);
    l && (m ? l.mount(m) : l.unmount());
  }, [l]);
}
const hD = ye.createContext({});
function Ss(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function E_(i, l, r, c, d, m) {
  var Z, W;
  const { visualElement: h } = ye.useContext(md), y = ye.useContext(sD), T = ye.useContext(Zy), A = ye.useContext(lD), E = A.reducedMotion, S = A.skipAnimations, b = ye.useRef(null), O = ye.useRef(false);
  c = c || y.renderer, !b.current && c && (b.current = c(i, { visualState: l, parent: h, props: r, presenceContext: T, blockInitialAnimation: T ? T.initial === false : false, reducedMotionConfig: E, skipAnimations: S, isSVG: m }), O.current && b.current && (b.current.manuallyAnimateOnMount = true));
  const U = b.current, X = ye.useContext(hD);
  U && !U.projection && d && (U.type === "html" || U.type === "svg") && A_(b.current, r, d, X);
  const H = ye.useRef(false);
  ye.useInsertionEffect(() => {
    U && H.current && U.update(r, T);
  });
  const Y = r[Tx], K = ye.useRef(!!Y && typeof window < "u" && !((Z = window.MotionHandoffIsComplete) != null && Z.call(window, Y)) && ((W = window.MotionHasOptimisedAnimation) == null ? void 0 : W.call(window, Y)));
  return yO(() => {
    O.current = true, U && (H.current = true, window.MotionIsMounted = true, U.updateFeatures(), U.scheduleRenderMicrotask(), K.current && U.animationState && U.animationState.animateChanges());
  }), ye.useEffect(() => {
    U && (!K.current && U.animationState && U.animationState.animateChanges(), K.current && (queueMicrotask(() => {
      var re;
      (re = window.MotionHandoffMarkAsComplete) == null || re.call(window, Y);
    }), K.current = false), U.enteringChildren = void 0);
  }), U;
}
function A_(i, l, r, c) {
  const { layoutId: d, layout: m, drag: h, dragConstraints: y, layoutScroll: T, layoutRoot: A, layoutAnchor: E, layoutCrossfade: S } = l;
  i.projection = new r(i.latestValues, l["data-framer-portal-id"] ? void 0 : pD(i.parent)), i.projection.setOptions({ layoutId: d, layout: m, alwaysMeasureLayout: !!h || y && Ss(y), visualElement: i, animationType: typeof m == "string" ? m : "both", initialPromotionConfig: c, crossfade: S, layoutScroll: T, layoutRoot: A, layoutAnchor: E });
}
function pD(i) {
  if (i) return i.options.allowProjection !== false ? i.projection : pD(i.parent);
}
function yy(i, { forwardMotionProps: l = false, type: r } = {}, c, d) {
  c && i_(c);
  const m = r ? r === "svg" : bg(i), h = m ? b_ : v_;
  function y(A, E) {
    let S;
    const b = { ...ye.useContext(lD), ...A, layoutId: x_(A) }, { isStatic: O } = b, U = u_(A), X = h(A, O);
    if (!O && typeof window < "u") {
      D_(b, c);
      const H = R_(b);
      S = H.MeasureLayout, U.visualElement = E_(i, X, b, d, H.ProjectionNode, m);
    }
    return Ty.jsxs(md.Provider, { value: U, children: [S && U.visualElement ? Ty.jsx(S, { visualElement: U.visualElement, ...b }) : null, m_(i, A, T_(X, U.visualElement, E), X, O, l, m)] });
  }
  y.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const T = ye.forwardRef(y);
  return T[S_] = i, T;
}
function x_({ layoutId: i }) {
  const l = ye.useContext(zA).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function D_(i, l) {
  const r = ye.useContext(sD).strict;
  if (l && r) {
    const c = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    i.ignoreStrict ? ws(false, c, "lazy-strict-mode") : bi(false, c, "lazy-strict-mode");
  }
}
function R_(i) {
  const l = rD(), { drag: r, layout: c } = l;
  if (!r && !c) return {};
  const d = { ...r, ...c };
  return { MeasureLayout: r != null && r.isEnabled(i) || c != null && c.isEnabled(i) ? d.MeasureLayout : void 0, ProjectionNode: d.ProjectionNode };
}
function w_(i, l) {
  if (typeof Proxy > "u") return yy;
  const r = /* @__PURE__ */ new Map(), c = (m, h) => yy(m, h, i, l), d = (m, h) => (Ky(false, "motion() is deprecated. Use motion.create() instead."), c(m, h));
  return new Proxy(d, { get: (m, h) => h === "create" ? c : (r.has(h) || r.set(h, yy(h, void 0, i, l)), r.get(h)) });
}
const C_ = (i, l) => l.isSVG ?? bg(i) ? new u3(l) : new a3(l, { allowProjection: i !== ye.Fragment });
class O_ extends yo {
  constructor(l) {
    super(l), l.animationState || (l.animationState = p3(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    hd(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    l !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this);
  }
}
let M_ = 0;
class N_ extends yo {
  constructor() {
    super(...arguments), this.id = M_++, this.isExitComplete = false;
  }
  update() {
    var m;
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: r } = this.node.presenceContext, { isPresent: c } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === c) return;
    if (l && c === false) {
      if (this.isExitComplete) {
        const { initial: h, custom: y } = this.node.getProps();
        if (typeof h == "string") {
          const T = dl(this.node, h, y);
          if (T) {
            const { transition: A, transitionEnd: E, ...S } = T;
            for (const b in S) (m = this.node.getValue(b)) == null || m.jump(S[b]);
          }
        }
        this.node.animationState.reset(), this.node.animationState.animateChanges();
      } else this.node.animationState.setActive("exit", false);
      this.isExitComplete = false;
      return;
    }
    const d = this.node.animationState.setActive("exit", !l);
    r && !l && d.then(() => {
      this.isExitComplete = true, r(this.id);
    });
  }
  mount() {
    const { register: l, onExitComplete: r } = this.node.presenceContext || {};
    r && r(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const __ = { animation: { Feature: O_ }, exit: { Feature: N_ } };
function Ru(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const z_ = (i) => (l) => dg(l) && i(l, Ru(l));
function gu(i, l, r, c) {
  return Tu(i, l, z_(r), c);
}
const mD = ({ current: i }) => i ? i.ownerDocument.defaultView : null, TA = (i, l) => Math.abs(i - l);
function V_(i, l) {
  const r = TA(i.x, l.x), c = TA(i.y, l.y);
  return Math.sqrt(r ** 2 + c ** 2);
}
const EA = /* @__PURE__ */ new Set(["auto", "scroll"]);
class yD {
  constructor(l, r, { transformPagePoint: c, contextWindow: d = window, dragSnapToOrigin: m = false, distanceThreshold: h = 3, element: y } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (O) => {
      this.handleScroll(O.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Pf(this.lastRawMoveEventInfo, this.transformPagePoint));
      const O = gy(this.lastMoveEventInfo, this.history), U = this.startEvent !== null, X = V_(O.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!U && !X) return;
      const { point: H } = O, { timestamp: Y } = Gt;
      this.history.push({ ...H, timestamp: Y });
      const { onStart: K, onMove: Z } = this.handlers;
      U || (K && K(this.lastMoveEvent, O), this.startEvent = this.lastMoveEvent), Z && Z(this.lastMoveEvent, O);
    }, this.handlePointerMove = (O, U) => {
      this.lastMoveEvent = O, this.lastRawMoveEventInfo = U, this.lastMoveEventInfo = Pf(U, this.transformPagePoint), nt.update(this.updatePoint, true);
    }, this.handlePointerUp = (O, U) => {
      this.end();
      const { onEnd: X, onSessionEnd: H, resumeAnimation: Y } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && Y && Y(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const K = gy(O.type === "pointercancel" ? this.lastMoveEventInfo : Pf(U, this.transformPagePoint), this.history);
      this.startEvent && X && X(O, K), H && H(O, K);
    }, !dg(l)) return;
    this.dragSnapToOrigin = m, this.handlers = r, this.transformPagePoint = c, this.distanceThreshold = h, this.contextWindow = d || window;
    const T = Ru(l), A = Pf(T, this.transformPagePoint), { point: E } = A, { timestamp: S } = Gt;
    this.history = [{ ...E, timestamp: S }];
    const { onSessionStart: b } = r;
    b && b(l, gy(A, this.history)), this.removeListeners = Au(gu(this.contextWindow, "pointermove", this.handlePointerMove), gu(this.contextWindow, "pointerup", this.handlePointerUp), gu(this.contextWindow, "pointercancel", this.handlePointerUp)), y && this.startScrollTracking(y);
  }
  startScrollTracking(l) {
    let r = l.parentElement;
    for (; r; ) {
      const c = getComputedStyle(r);
      (EA.has(c.overflowX) || EA.has(c.overflowY)) && this.scrollPositions.set(r, { x: r.scrollLeft, y: r.scrollTop }), r = r.parentElement;
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }), window.addEventListener("scroll", this.onElementScroll, { capture: true }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, { capture: true }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  handleScroll(l) {
    const r = this.scrollPositions.get(l);
    if (!r) return;
    const c = l === window, d = c ? { x: window.scrollX, y: window.scrollY } : { x: l.scrollLeft, y: l.scrollTop }, m = { x: d.x - r.x, y: d.y - r.y };
    m.x === 0 && m.y === 0 || (c ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += m.x, this.lastMoveEventInfo.point.y += m.y) : this.history.length > 0 && (this.history[0].x -= m.x, this.history[0].y -= m.y), this.scrollPositions.set(l, d), nt.update(this.updatePoint, true));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), mo(this.updatePoint);
  }
}
function Pf(i, l) {
  return l ? { point: l(i.point) } : i;
}
function AA(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function gy({ point: i }, l) {
  return { point: i, delta: AA(i, gD(l)), offset: AA(i, j_(l)), velocity: U_(l, 0.1) };
}
function j_(i) {
  return i[0];
}
function gD(i) {
  return i[i.length - 1];
}
function U_(i, l) {
  if (i.length < 2) return { x: 0, y: 0 };
  let r = i.length - 1, c = null;
  const d = gD(i);
  for (; r >= 0 && (c = i[r], !(d.timestamp - c.timestamp > gn(l))); ) r--;
  if (!c) return { x: 0, y: 0 };
  c === i[0] && i.length > 2 && d.timestamp - c.timestamp > gn(l) * 2 && (c = i[1]);
  const m = Kn(d.timestamp - c.timestamp);
  if (m === 0) return { x: 0, y: 0 };
  const h = { x: (d.x - c.x) / m, y: (d.y - c.y) / m };
  return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h;
}
function B_(i, { min: l, max: r }, c) {
  return l !== void 0 && i < l ? i = c ? rt(l, i, c.min) : Math.max(i, l) : r !== void 0 && i > r && (i = c ? rt(r, i, c.max) : Math.min(i, r)), i;
}
function xA(i, l, r) {
  return { min: l !== void 0 ? i.min + l : void 0, max: r !== void 0 ? i.max + r - (i.max - i.min) : void 0 };
}
function L_(i, { top: l, left: r, bottom: c, right: d }) {
  return { x: xA(i.x, r, d), y: xA(i.y, l, c) };
}
function DA(i, l) {
  let r = l.min - i.min, c = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([r, c] = [c, r]), { min: r, max: c };
}
function H_(i, l) {
  return { x: DA(i.x, l.x), y: DA(i.y, l.y) };
}
function Y_(i, l) {
  let r = 0.5;
  const c = un(i), d = un(l);
  return d > c ? r = vu(l.min, l.max - c, i.min) : c > d && (r = vu(i.min, i.max - d, l.min)), $a(0, 1, r);
}
function k_(i, l) {
  const r = {};
  return l.min !== void 0 && (r.min = l.min - i.min), l.max !== void 0 && (r.max = l.max - i.min), r;
}
const $y = 0.35;
function q_(i = $y) {
  return i === false ? i = 0 : i === true && (i = $y), { x: RA(i, "left", "right"), y: RA(i, "top", "bottom") };
}
function RA(i, l, r) {
  return { min: wA(i, l), max: wA(i, r) };
}
function wA(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const G_ = /* @__PURE__ */ new WeakMap();
class X_ {
  constructor(l) {
    this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = Nt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: r = false, distanceThreshold: c } = {}) {
    const { presenceContext: d } = this.visualElement;
    if (d && d.isPresent === false) return;
    const m = (S) => {
      r && this.snapToCursor(Ru(S).point), this.stopAnimation();
    }, h = (S, b) => {
      const { drag: O, dragPropagation: U, onDragStart: X } = this.getProps();
      if (O && !U && (this.openDragLock && this.openDragLock(), this.openDragLock = EN(O), !this.openDragLock)) return;
      this.latestPointerEvent = S, this.latestPanInfo = b, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), qa((Y) => {
        let K = this.getAxisMotionValue(Y).get() || 0;
        if (Xa.test(K)) {
          const { projection: Z } = this.visualElement;
          if (Z && Z.layout) {
            const W = Z.layout.layoutBox[Y];
            W && (K = un(W) * (parseFloat(K) / 100));
          }
        }
        this.originPoint[Y] = K;
      }), X && nt.update(() => X(S, b), false, true), Uy(this.visualElement, "transform");
      const { animationState: H } = this.visualElement;
      H && H.setActive("whileDrag", true);
    }, y = (S, b) => {
      this.latestPointerEvent = S, this.latestPanInfo = b;
      const { dragPropagation: O, dragDirectionLock: U, onDirectionLock: X, onDrag: H } = this.getProps();
      if (!O && !this.openDragLock) return;
      const { offset: Y } = b;
      if (U && this.currentDirection === null) {
        this.currentDirection = Q_(Y), this.currentDirection !== null && X && X(this.currentDirection);
        return;
      }
      this.updateAxis("x", b.point, Y), this.updateAxis("y", b.point, Y), this.visualElement.render(), H && nt.update(() => H(S, b), false, true);
    }, T = (S, b) => {
      this.latestPointerEvent = S, this.latestPanInfo = b, this.stop(S, b), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, A = () => {
      const { dragSnapToOrigin: S } = this.getProps();
      (S || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: E } = this.getProps();
    this.panSession = new yD(l, { onSessionStart: m, onStart: h, onMove: y, onSessionEnd: T, resumeAnimation: A }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: E, distanceThreshold: c, contextWindow: mD(this.visualElement), element: this.visualElement.current });
  }
  stop(l, r) {
    const c = l || this.latestPointerEvent, d = r || this.latestPanInfo, m = this.isDragging;
    if (this.cancel(), !m || !d || !c) return;
    const { velocity: h } = d;
    this.startAnimation(h);
    const { onDragEnd: y } = this.getProps();
    y && nt.postRender(() => y(c, d));
  }
  cancel() {
    this.isDragging = false;
    const { projection: l, animationState: r } = this.visualElement;
    l && (l.isAnimationBlocked = false), this.endPanSession();
    const { dragPropagation: c } = this.getProps();
    !c && this.openDragLock && (this.openDragLock(), this.openDragLock = null), r && r.setActive("whileDrag", false);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, r, c) {
    const { drag: d } = this.getProps();
    if (!c || !Jf(l, d, this.currentDirection)) return;
    const m = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + c[l];
    this.constraints && this.constraints[l] && (h = B_(h, this.constraints[l], this.elastic[l])), m.set(h);
  }
  resolveConstraints() {
    var m;
    const { dragConstraints: l, dragElastic: r } = this.getProps(), c = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (m = this.visualElement.projection) == null ? void 0 : m.layout, d = this.constraints;
    l && Ss(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && c ? this.constraints = L_(c.layoutBox, l) : this.constraints = false, this.elastic = q_(r), d !== this.constraints && !Ss(l) && c && this.constraints && !this.hasMutatedConstraints && qa((h) => {
      this.constraints !== false && this.getAxisMotionValue(h) && (this.constraints[h] = k_(c.layoutBox[h], this.constraints[h]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: r } = this.getProps();
    if (!l || !Ss(l)) return false;
    const c = l.current;
    bi(c !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: d } = this.visualElement;
    if (!d || !d.layout) return false;
    const m = FN(c, d.root, this.visualElement.getTransformPagePoint());
    let h = H_(d.layout.layoutBox, m);
    if (r) {
      const y = r(PN(h));
      this.hasMutatedConstraints = !!y, y && (h = Lx(y));
    }
    return h;
  }
  startAnimation(l) {
    const { drag: r, dragMomentum: c, dragElastic: d, dragTransition: m, dragSnapToOrigin: h, onDragTransitionEnd: y } = this.getProps(), T = this.constraints || {}, A = qa((E) => {
      if (!Jf(E, r, this.currentDirection)) return;
      let S = T && T[E] || {};
      (h === true || h === E) && (S = { min: 0, max: 0 });
      const b = d ? 200 : 1e6, O = d ? 40 : 1e7, U = { type: "inertia", velocity: c ? l[E] : 0, bounceStiffness: b, bounceDamping: O, timeConstant: 750, restDelta: 1, restSpeed: 10, ...m, ...S };
      return this.startAxisValueAnimation(E, U);
    });
    return Promise.all(A).then(y);
  }
  startAxisValueAnimation(l, r) {
    const c = this.getAxisMotionValue(l);
    return Uy(this.visualElement, l), c.start(sg(l, c, 0, r, this.visualElement, false));
  }
  stopAnimation() {
    qa((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const r = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps(), d = c[r];
    return d || this.visualElement.getValue(l, (c.initial ? c.initial[l] : void 0) || 0);
  }
  snapToCursor(l) {
    qa((r) => {
      const { drag: c } = this.getProps();
      if (!Jf(r, c, this.currentDirection)) return;
      const { projection: d } = this.visualElement, m = this.getAxisMotionValue(r);
      if (d && d.layout) {
        const { min: h, max: y } = d.layout.layoutBox[r], T = m.get() || 0;
        m.set(l[r] - rt(h, y, 0.5) + T);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: r } = this.getProps(), { projection: c } = this.visualElement;
    if (!Ss(r) || !c || !this.constraints) return;
    this.stopAnimation();
    const d = { x: 0, y: 0 };
    qa((h) => {
      const y = this.getAxisMotionValue(h);
      if (y && this.constraints !== false) {
        const T = y.get();
        d[h] = Y_({ min: T, max: T }, this.constraints[h]);
      }
    });
    const { transformTemplate: m } = this.visualElement.getProps();
    this.visualElement.current.style.transform = m ? m({}, "") : "none", c.root && c.root.updateScroll(), c.updateLayout(), this.constraints = false, this.resolveConstraints(), qa((h) => {
      if (!Jf(h, l, null)) return;
      const y = this.getAxisMotionValue(h), { min: T, max: A } = this.constraints[h];
      y.set(rt(T, A, d[h]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    G_.set(this.visualElement, this);
    const l = this.visualElement.current, r = gu(l, "pointerdown", (A) => {
      const { drag: E, dragListener: S = true } = this.getProps(), b = A.target, O = b !== l && CN(b);
      E && S && !O && this.start(A);
    });
    let c;
    const d = () => {
      const { dragConstraints: A } = this.getProps();
      Ss(A) && A.current && (this.constraints = this.resolveRefConstraints(), c || (c = $_(l, A.current, () => this.scalePositionWithinConstraints())));
    }, { projection: m } = this.visualElement, h = m.addEventListener("measure", d);
    m && !m.layout && (m.root && m.root.updateScroll(), m.updateLayout()), nt.read(d);
    const y = Tu(window, "resize", () => this.scalePositionWithinConstraints()), T = m.addEventListener("didUpdate", (({ delta: A, hasLayoutChanged: E }) => {
      this.isDragging && E && (qa((S) => {
        const b = this.getAxisMotionValue(S);
        b && (this.originPoint[S] += A[S].translate, b.set(b.get() + A[S].translate));
      }), this.visualElement.render());
    }));
    return () => {
      y(), r(), h(), T && T(), c && c();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: r = false, dragDirectionLock: c = false, dragPropagation: d = false, dragConstraints: m = false, dragElastic: h = $y, dragMomentum: y = true } = l;
    return { ...l, drag: r, dragDirectionLock: c, dragPropagation: d, dragConstraints: m, dragElastic: h, dragMomentum: y };
  }
}
function CA(i) {
  let l = true;
  return () => {
    if (l) {
      l = false;
      return;
    }
    i();
  };
}
function $_(i, l, r) {
  const c = BE(i, CA(r)), d = BE(l, CA(r));
  return () => {
    c(), d();
  };
}
function Jf(i, l, r) {
  return (l === true || l === i) && (r === null || r === i);
}
function Q_(i, l = 10) {
  let r = null;
  return Math.abs(i.y) > l ? r = "y" : Math.abs(i.x) > l && (r = "x"), r;
}
class Z_ extends yo {
  constructor(l) {
    super(l), this.removeGroupControls = Fn, this.removeListeners = Fn, this.controls = new X_(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Fn;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: r } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const vy = (i) => (l, r) => {
  i && nt.update(() => i(l, r), false, true);
};
class P_ extends yo {
  constructor() {
    super(...arguments), this.removePointerDownListener = Fn;
  }
  onPointerDown(l) {
    this.session = new yD(l, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: mD(this.node) });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: r, onPan: c, onPanEnd: d } = this.node.getProps();
    return { onSessionStart: vy(l), onStart: vy(r), onMove: vy(c), onEnd: (m, h) => {
      delete this.session, d && nt.postRender(() => d(m, h));
    } };
  }
  mount() {
    this.removePointerDownListener = gu(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let by = false;
class J_ extends ye.Component {
  componentDidMount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: c, layoutId: d } = this.props, { projection: m } = l;
    m && (r.group && r.group.add(m), c && c.register && d && c.register(m), by && m.root.didUpdate(), m.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), m.setOptions({ ...m.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })), nd.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: r, visualElement: c, drag: d, isPresent: m } = this.props, { projection: h } = c;
    return h && (h.isPresent = m, l.layoutDependency !== r && h.setOptions({ ...h.options, layoutDependency: r }), by = true, d || l.layoutDependency !== r || r === void 0 || l.isPresent !== m ? h.willUpdate() : this.safeToRemove(), l.isPresent !== m && (m ? h.promote() : h.relegate() || nt.postRender(() => {
      const y = h.getStack();
      (!y || !y.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: r } = this.props, { projection: c } = l;
    c && (c.options.layoutAnchor = r, c.root.didUpdate(), fg.postRender(() => {
      !c.currentAnimation && c.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: r, switchLayoutGroup: c } = this.props, { projection: d } = l;
    by = true, d && (d.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(d), c && c.deregister && c.deregister(d));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function vD(i) {
  const [l, r] = n_(), c = ye.useContext(zA);
  return Ty.jsx(J_, { ...i, layoutGroup: c, switchLayoutGroup: ye.useContext(hD), isPresent: l, safeToRemove: r });
}
const K_ = { pan: { Feature: P_ }, drag: { Feature: Z_, ProjectionNode: oD, MeasureLayout: vD } };
function OA(i, l, r) {
  const { props: c } = i;
  i.animationState && c.whileHover && i.animationState.setActive("whileHover", r === "Start");
  const d = "onHover" + r, m = c[d];
  m && nt.postRender(() => m(l, Ru(l)));
}
class F_ extends yo {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = xN(l, (r, c) => (OA(this.node, c, "Start"), (d) => OA(this.node, d, "End"))));
  }
  unmount() {
  }
}
class I_ extends yo {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let l = false;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = true;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = Au(Tu(this.node.current, "focus", () => this.onFocus()), Tu(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function MA(i, l, r) {
  const { props: c } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState && c.whileTap && i.animationState.setActive("whileTap", r === "Start");
  const d = "onTap" + (r === "End" ? "" : r), m = c[d];
  m && nt.postRender(() => m(l, Ru(l)));
}
class W_ extends yo {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: r, propagate: c } = this.node.props;
    this.unmount = MN(l, (d, m) => (MA(this.node, m, "Start"), (h, { success: y }) => MA(this.node, h, y ? "End" : "Cancel")), { useGlobalTarget: r, stopPropagation: (c == null ? void 0 : c.tap) === false });
  }
  unmount() {
  }
}
const Qy = /* @__PURE__ */ new WeakMap(), Sy = /* @__PURE__ */ new WeakMap(), e4 = (i) => {
  const l = Qy.get(i.target);
  l && l(i);
}, t4 = (i) => {
  i.forEach(e4);
};
function n4({ root: i, ...l }) {
  const r = i || document;
  Sy.has(r) || Sy.set(r, {});
  const c = Sy.get(r), d = JSON.stringify(l);
  return c[d] || (c[d] = new IntersectionObserver(t4, { root: i, ...l })), c[d];
}
function a4(i, l, r) {
  const c = n4(l);
  return Qy.set(i, r), c.observe(i), () => {
    Qy.delete(i), c.unobserve(i);
  };
}
const i4 = { some: 0, all: 1 };
class o4 extends yo {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  startObserver() {
    var T;
    (T = this.stopObserver) == null || T.call(this);
    const { viewport: l = {} } = this.node.getProps(), { root: r, margin: c, amount: d = "some", once: m } = l, h = { root: r ? r.current : void 0, rootMargin: c, threshold: typeof d == "number" ? d : i4[d] }, y = (A) => {
      const { isIntersecting: E } = A;
      if (this.isInView === E || (this.isInView = E, m && !E && this.hasEnteredView)) return;
      E && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", E);
      const { onViewportEnter: S, onViewportLeave: b } = this.node.getProps(), O = E ? S : b;
      O && O(A);
    };
    this.stopObserver = a4(this.node.current, h, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(l4(l, r)) && this.startObserver();
  }
  unmount() {
    var l;
    (l = this.stopObserver) == null || l.call(this), this.hasEnteredView = false, this.isInView = false;
  }
}
function l4({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (r) => i[r] !== l[r];
}
const s4 = { inView: { Feature: o4 }, tap: { Feature: W_ }, focus: { Feature: I_ }, hover: { Feature: F_ } }, r4 = { layout: { ProjectionNode: oD, MeasureLayout: vD } }, u4 = { ...__, ...s4, ...K_, ...r4 }, c4 = w_(u4, C_);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const f4 = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), d4 = (i) => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, r, c) => c ? c.toUpperCase() : r.toLowerCase()), NA = (i) => {
  const l = d4(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
}, bD = (...i) => i.filter((l, r, c) => !!l && l.trim() !== "" && c.indexOf(l) === r).join(" ").trim(), h4 = (i) => {
  for (const l in i) if (l.startsWith("aria-") || l === "role" || l === "title") return true;
};
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var p4 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const m4 = ye.forwardRef(({ color: i = "currentColor", size: l = 24, strokeWidth: r = 2, absoluteStrokeWidth: c, className: d = "", children: m, iconNode: h, ...y }, T) => ye.createElement("svg", { ref: T, ...p4, width: l, height: l, stroke: i, strokeWidth: c ? Number(r) * 24 / Number(l) : r, className: bD("lucide", d), ...!m && !h4(y) && { "aria-hidden": "true" }, ...y }, [...h.map(([A, E]) => ye.createElement(A, E)), ...Array.isArray(m) ? m : [m]]));
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wu = (i, l) => {
  const r = ye.forwardRef(({ className: c, ...d }, m) => ye.createElement(m4, { ref: m, iconNode: l, className: bD(`lucide-${f4(NA(i))}`, `lucide-${i}`, c), ...d }));
  return r.displayName = NA(i), r;
};
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const y4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], _A = wu("chevron-right", y4);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const g4 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], v4 = wu("circle-check", g4);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const b4 = [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], S4 = wu("eye", b4);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const T4 = [["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]], E4 = wu("navigation", T4);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const A4 = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], x4 = wu("play", A4), _n = ({ children: i, delay: l = 0, className: r = "" }) => L.jsxDEV(c4.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.8, delay: l, ease: [0.16, 1, 0.3, 1] }, className: r, children: i }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 11, columnNumber: 3 }, void 0);
function D4() {
  return L.jsxDEV("div", { className: "min-h-screen bg-[#f5f5f7] flex flex-col font-sans overflow-x-hidden relative selection:bg-[#0066cc] selection:text-white", children: [L.jsxDEV("div", { className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-blue-100 via-white to-orange-50 opacity-60 blur-3xl pointer-events-none rounded-full z-0" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 26, columnNumber: 7 }, this), L.jsxDEV("nav", { className: "fixed top-0 left-0 right-0 h-[48px] bg-white/80 backdrop-blur-md z-50 flex items-center justify-center border-b border-gray-200", children: L.jsxDEV("div", { className: "max-w-screen-lg w-full flex items-center justify-between px-4 text-[12px] font-medium tracking-wide text-gray-600", children: [L.jsxDEV("a", { href: "#", className: "flex items-center gap-1 hover:text-black transition-colors text-black", children: L.jsxDEV("svg", { height: "18", viewBox: "0 0 14 18", width: "14", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", children: [L.jsxDEV("path", { d: "m6.66986 6.30236c-.02047-2.02325 1.65084-3.00392 1.72591-3.05151-1.02641-1.49392-2.61053-1.69618-3.1362-1.71617-1.33612-.1358-2.61334.78854-3.29415.78854-.67807 0-1.72288-.76949-2.82118-.74898-1.42861.02045-2.74852.83063-3.48625 2.11584-1.48834 2.58557-.38056 6.40245 1.07684 8.51351.71441 1.0345 1.55462 2.1915 2.65171 2.1504 1.0558-.0409 1.45524-.6821 2.6617-.6821 1.20392 0 1.5645.6821 2.66166.6616 1.13745-.0205 1.86595-1.0553 2.56-2.071 0 0 .15715-.1989.28974-.4077-.14623-.057-.27164-.1088-.36942-.1641-1.42571-.7496-1.5005-2.6841-.52084-3.3883z" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 32, columnNumber: 116 }, this), L.jsxDEV("path", { d: "m9.36267 2.38317c.58284-.70783.97444-1.69233.8679-2.67384-.85078.03446-1.87979.56637-2.48427 1.29486-.53765.64295-.9893 1.64506-.86154 2.61114.94723.07342 1.89063-.5225 2.47791-1.23216z" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 32, columnNumber: 679 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 32, columnNumber: 13 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 31, columnNumber: 11 }, this), L.jsxDEV("div", { className: "hidden md:flex gap-6", children: [L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors text-gray-600", children: "Survey" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 35, columnNumber: 13 }, this), L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors text-gray-600", children: "Locations" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 36, columnNumber: 13 }, this), L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors text-gray-600", children: "Products" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 37, columnNumber: 13 }, this), L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors text-gray-600", children: "Support" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 38, columnNumber: 13 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 34, columnNumber: 11 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 30, columnNumber: 9 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 29, columnNumber: 7 }, this), L.jsxDEV("main", { className: "relative z-10", children: [L.jsxDEV("section", { className: "relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-black pt-[48px] mb-32", children: [L.jsxDEV("img", { src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2600&auto=format&fit=crop", alt: "Impression Background", className: "absolute inset-0 w-full h-full object-cover object-center opacity-70" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 47, columnNumber: 11 }, this), L.jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#f5f5f7]" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 53, columnNumber: 11 }, this), L.jsxDEV("div", { className: "relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center mt-20", children: [L.jsxDEV(_n, { children: [L.jsxDEV("span", { className: "text-[14px] font-semibold text-white/70 uppercase tracking-widest mb-4 block", children: "Apple Survey 2026" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 57, columnNumber: 15 }, this), L.jsxDEV("h1", { className: "text-5xl md:text-[88px] leading-[1.05] font-semibold tracking-tight text-white mb-6 drop-shadow-lg", children: ["Your vision.", L.jsxDEV("br", {}, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 59, columnNumber: 29 }, this), "Our future."] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 58, columnNumber: 15 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 56, columnNumber: 13 }, this), L.jsxDEV(_n, { delay: 0.1, children: L.jsxDEV("p", { className: "text-xl md:text-[24px] text-gray-200 max-w-2xl font-medium tracking-tight mb-10 drop-shadow-md", children: "Help us enhance your Apple experience. Your feedback shapes our next products!" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 65, columnNumber: 15 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 64, columnNumber: 13 }, this), L.jsxDEV(_n, { delay: 0.2, className: "flex flex-col sm:flex-row items-center gap-4", children: [L.jsxDEV("button", { className: "bg-white hover:bg-gray-100 text-black px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors flex items-center justify-center min-w-[200px]", children: "Start the survey" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 71, columnNumber: 15 }, this), L.jsxDEV("button", { className: "bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border border-white/20 px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors flex items-center justify-center gap-1.5 group min-w-[200px]", children: ["How it works ", L.jsxDEV("span", { className: "group-hover:translate-x-1 transition-transform", children: L.jsxDEV(_A, { size: 16 }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 75, columnNumber: 95 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 75, columnNumber: 30 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 74, columnNumber: 15 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 70, columnNumber: 13 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 55, columnNumber: 11 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 45, columnNumber: 9 }, this), L.jsxDEV("section", { className: "px-4 md:px-8 max-w-screen-xl mx-auto py-24 mb-20", children: [L.jsxDEV(_n, { children: L.jsxDEV("h2", { className: "text-4xl md:text-5xl font-semibold tracking-tight text-center text-[#1d1d1f] mb-16", children: "How this works." }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 84, columnNumber: 14 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 83, columnNumber: 12 }, this), L.jsxDEV("div", { className: "grid md:grid-cols-3 gap-6 md:gap-8", children: [{ step: "1", title: "Locate survey below.", desc: "Discover our brief skincare survey just gently placed on this page.", icon: L.jsxDEV(S4, { className: "text-[#0071e3]", size: 32 }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 91, columnNumber: 144 }, this) }, { step: "2", title: "Answer questions.", desc: "Share your daily skincare needs and experiences with our products.", icon: L.jsxDEV(x4, { className: "text-[#0071e3]", size: 32 }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 92, columnNumber: 140 }, this) }, { step: "3", title: "Receive $50 Coupon.", desc: "Get your exclusive $50 discount as a thank you for your valuable feedback.", icon: L.jsxDEV(v4, { className: "text-[#0071e3]", size: 32 }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 93, columnNumber: 150 }, this) }].map((i, l) => L.jsxDEV(_n, { delay: l * 0.1, className: "h-full", children: L.jsxDEV("div", { className: "bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[28px] p-8 md:p-10 shadow-2xl shadow-black/5 h-full flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 duration-300", children: [L.jsxDEV("div", { className: "w-16 h-16 rounded-2xl bg-white/80 border border-gray-100 shadow-sm flex items-center justify-center mb-8 relative", children: [L.jsxDEV("span", { className: "absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center font-bold text-sm shadow-md", children: i.step }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 98, columnNumber: 23 }, this), i.icon] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 97, columnNumber: 21 }, this), L.jsxDEV("h3", { className: "text-xl font-semibold text-[#1d1d1f] tracking-tight mb-4", children: i.title }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 103, columnNumber: 21 }, this), L.jsxDEV("p", { className: "text-[#86868b] leading-relaxed font-medium", children: i.desc }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 104, columnNumber: 21 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 96, columnNumber: 19 }, this) }, i.step, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 95, columnNumber: 17 }, this)) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 89, columnNumber: 12 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 82, columnNumber: 9 }, this), L.jsxDEV("section", { className: "px-4 md:px-8 max-w-screen-xl mx-auto py-24 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[40px] shadow-2xl shadow-black/5 mb-20", children: [L.jsxDEV(_n, { children: L.jsxDEV("div", { className: "text-center mb-16", children: [L.jsxDEV("h2", { className: "text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4", children: "Imprescindibles de Apple." }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 115, columnNumber: 15 }, this), L.jsxDEV("p", { className: "text-xl text-[#86868b] font-medium", children: "Tools for your daily routine." }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 118, columnNumber: 15 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 114, columnNumber: 13 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 113, columnNumber: 11 }, this), L.jsxDEV("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16", children: [L.jsxDEV(_n, { delay: 0.1, className: "w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer", children: [L.jsxDEV("img", { src: "https://images.unsplash.com/photo-1615397323869-d3e9114757c2", alt: "Face mask", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 124, columnNumber: 17 }, this), L.jsxDEV("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 125, columnNumber: 17 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 123, columnNumber: 14 }, this), L.jsxDEV(_n, { delay: 0.2, className: "w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer", children: [L.jsxDEV("img", { src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908", alt: "Serum drop", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 128, columnNumber: 17 }, this), L.jsxDEV("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 129, columnNumber: 18 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 127, columnNumber: 14 }, this), L.jsxDEV(_n, { delay: 0.3, className: "w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer", children: [L.jsxDEV("img", { src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571", alt: "Applying cream", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 132, columnNumber: 17 }, this), L.jsxDEV("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 133, columnNumber: 18 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 131, columnNumber: 14 }, this), L.jsxDEV(_n, { delay: 0.4, className: "w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer", children: [L.jsxDEV("img", { src: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19", alt: "Face wash", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 136, columnNumber: 17 }, this), L.jsxDEV("div", { className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 137, columnNumber: 18 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 135, columnNumber: 14 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 122, columnNumber: 11 }, this), L.jsxDEV("div", { className: "flex flex-col max-w-3xl mx-auto border-t border-gray-100 pt-8 gap-4", children: [{ label: "Instagram", btn: "@luminabeauty" }, { label: "Shop Products", btn: "Shop all products" }, { label: "Store Locations", btn: "Find store locations" }].map((i, l) => L.jsxDEV(_n, { delay: l * 0.1, className: "flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-100 group cursor-pointer", children: [L.jsxDEV("span", { className: "text-2xl font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors", children: i.label }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 148, columnNumber: 18 }, this), L.jsxDEV("button", { className: "mt-4 sm:mt-0 text-[#1d1d1f] bg-[#f5f5f7] hover:bg-[#e8e8ed] px-5 py-2.5 rounded-full font-medium text-sm transition-colors w-fit flex items-center gap-1.5", children: [i.btn, " ", L.jsxDEV(_A, { size: 14, className: "opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 150, columnNumber: 31 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 149, columnNumber: 18 }, this)] }, i.label, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 147, columnNumber: 16 }, this)) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 141, columnNumber: 11 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 112, columnNumber: 9 }, this), L.jsxDEV("section", { className: "px-4 md:px-8 max-w-screen-xl mx-auto py-24 bg-white/60 backdrop-blur-2xl border border-white/40 text-[#1d1d1f] rounded-[40px] shadow-2xl shadow-black/5 relative overflow-hidden", children: [L.jsxDEV("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100 via-white to-purple-50 opacity-50 blur-[100px] pointer-events-none" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 160, columnNumber: 11 }, this), L.jsxDEV("div", { className: "relative z-10 grid md:grid-cols-2 gap-16 items-center", children: [L.jsxDEV(_n, { className: "order-2 md:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 border border-white/50 shadow-sm", children: [L.jsxDEV("img", { src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be", alt: "Products", className: "w-full h-full object-cover" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 164, columnNumber: 16 }, this), L.jsxDEV("div", { className: "absolute -bottom-6 -right-6 w-32 h-32 bg-white/90 backdrop-blur-md text-black border border-white/40 font-semibold rounded-full flex gap-1 flex-col items-center justify-center p-4 text-center leading-tight shadow-[0_4px_30px_rgba(0,0,0,0.1)] rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer", children: [L.jsxDEV("span", { className: "text-xs uppercase tracking-widest opacity-60", children: "Whats" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 166, columnNumber: 18 }, this), L.jsxDEV("span", { className: "text-xl tracking-tight", children: "New" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 167, columnNumber: 18 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 165, columnNumber: 16 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 163, columnNumber: 13 }, this), L.jsxDEV(_n, { className: "order-1 md:order-2 flex flex-col items-start text-left", children: [L.jsxDEV(E4, { className: "text-[#0071e3] mb-6", size: 40 }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 172, columnNumber: 15 }, this), L.jsxDEV("h2", { className: "text-4xl md:text-[56px] font-semibold tracking-tight mb-4 leading-tight italic", children: "Get $50 Coupon" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 173, columnNumber: 15 }, this), L.jsxDEV("p", { className: "text-[20px] text-[#86868b] font-medium mb-12", children: "Enhance your beauty routine! Answer a few quick questions about our products and receive a $50 thank-you coupon." }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 176, columnNumber: 15 }, this), L.jsxDEV("button", { className: "bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors text-[16px]", children: "Start survey now" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 180, columnNumber: 15 }, this), L.jsxDEV("div", { className: "w-full mt-16 pt-8 border-t border-gray-200/50", children: [L.jsxDEV("h3", { className: "text-2xl font-semibold tracking-tight mb-2 text-[#1d1d1f]", children: "Discover our beauty secrets" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 185, columnNumber: 17 }, this), L.jsxDEV("p", { className: "text-[#86868b] mb-6", children: "Subscribe for exclusive skincare tips and product launches." }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 186, columnNumber: 17 }, this), L.jsxDEV("div", { className: "flex flex-col sm:flex-row gap-3", children: [L.jsxDEV("input", { type: "email", placeholder: "Your email address", className: "flex-1 bg-white/80 border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:border-transparent text-[#1d1d1f] shadow-sm transition-all" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 188, columnNumber: 19 }, this), L.jsxDEV("button", { className: "bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 py-3.5 rounded-xl font-medium transition-colors shadow-sm", children: "Subscribe" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 189, columnNumber: 19 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 187, columnNumber: 17 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 184, columnNumber: 15 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 171, columnNumber: 13 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 162, columnNumber: 11 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 158, columnNumber: 9 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 43, columnNumber: 7 }, this), L.jsxDEV("footer", { className: "border-t border-gray-200 bg-white/50 backdrop-blur-md pt-16 pb-8 px-4 md:px-8 relative z-10", children: [L.jsxDEV("div", { className: "max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-200 pb-10 mb-6", children: [L.jsxDEV("div", { className: "flex items-center gap-2 text-2xl font-semibold tracking-tight", children: L.jsxDEV("svg", { height: "24", viewBox: "0 0 14 18", width: "24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", children: [L.jsxDEV("path", { d: "m6.66986 6.30236c-.02047-2.02325 1.65084-3.00392 1.72591-3.05151-1.02641-1.49392-2.61053-1.69618-3.1362-1.71617-1.33612-.1358-2.61334.78854-3.29415.78854-.67807 0-1.72288-.76949-2.82118-.74898-1.42861.02045-2.74852.83063-3.48625 2.11584-1.48834 2.58557-.38056 6.40245 1.07684 8.51351.71441 1.0345 1.55462 2.1915 2.65171 2.1504 1.0558-.0409 1.45524-.6821 2.6617-.6821 1.20392 0 1.5645.6821 2.66166.6616 1.13745-.0205 1.86595-1.0553 2.56-2.071 0 0 .15715-.1989.28974-.4077-.14623-.057-.27164-.1088-.36942-.1641-1.42571-.7496-1.5005-2.6841-.52084-3.3883z" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 204, columnNumber: 117 }, this), L.jsxDEV("path", { d: "m9.36267 2.38317c.58284-.70783.97444-1.69233.8679-2.67384-.85078.03446-1.87979.56637-2.48427 1.29486-.53765.64295-.9893 1.64506-.86154 2.61114.94723.07342 1.89063-.5225 2.47791-1.23216z" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 204, columnNumber: 680 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 204, columnNumber: 14 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 203, columnNumber: 12 }, this), L.jsxDEV("div", { className: "flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500", children: [L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors", children: "Survey" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 208, columnNumber: 14 }, this), L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors", children: "Locations" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 209, columnNumber: 14 }, this), L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors", children: "Subscribe" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 210, columnNumber: 14 }, this), L.jsxDEV("a", { href: "#", className: "hover:text-black transition-colors", children: "Contact" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 211, columnNumber: 14 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 207, columnNumber: 12 }, this), L.jsxDEV("div", { className: "flex gap-4", children: [L.jsxDEV("a", { href: "#", className: "w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black", children: [L.jsxDEV("span", { className: "sr-only", children: "Facebook" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 215, columnNumber: 153 }, this), L.jsxDEV("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: L.jsxDEV("path", { d: "M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 215, columnNumber: 262 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 215, columnNumber: 194 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 215, columnNumber: 14 }, this), L.jsxDEV("a", { href: "#", className: "w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black", children: [L.jsxDEV("span", { className: "sr-only", children: "Twitter X" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 216, columnNumber: 153 }, this), L.jsxDEV("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "currentColor", children: L.jsxDEV("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 216, columnNumber: 263 }, this) }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 216, columnNumber: 195 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 216, columnNumber: 14 }, this), L.jsxDEV("a", { href: "#", className: "w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black", children: [L.jsxDEV("span", { className: "sr-only", children: "Instagram" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 217, columnNumber: 153 }, this), L.jsxDEV("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [L.jsxDEV("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 217, columnNumber: 338 }, this), L.jsxDEV("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 217, columnNumber: 400 }, this), L.jsxDEV("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 217, columnNumber: 465 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 217, columnNumber: 195 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 217, columnNumber: 14 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 214, columnNumber: 12 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 202, columnNumber: 9 }, this), L.jsxDEV("div", { className: "max-w-screen-xl mx-auto text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4", children: [L.jsxDEV("p", { children: "Copyright \xA9 2026 Apple Inc. All rights reserved." }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 222, columnNumber: 11 }, this), L.jsxDEV("div", { className: "flex gap-4", children: [L.jsxDEV("a", { href: "#", className: "hover:text-black", children: "Privacy Policy" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 224, columnNumber: 13 }, this), L.jsxDEV("span", { className: "text-gray-300", children: "|" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 225, columnNumber: 13 }, this), L.jsxDEV("a", { href: "#", className: "hover:text-black", children: "Terms of Use" }, void 0, false, { fileName: "/app/applet/src/App.tsx", lineNumber: 226, columnNumber: 13 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 223, columnNumber: 11 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 221, columnNumber: 9 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 201, columnNumber: 7 }, this)] }, void 0, true, { fileName: "/app/applet/src/App.tsx", lineNumber: 24, columnNumber: 5 }, this);
}
fO.createRoot(document.getElementById("root")).render(L.jsxDEV(ye.StrictMode, { children: L.jsxDEV(D4, {}, void 0, false, { fileName: "/app/applet/src/main.tsx", lineNumber: 8, columnNumber: 5 }, void 0) }, void 0, false, { fileName: "/app/applet/src/main.tsx", lineNumber: 7, columnNumber: 3 }, void 0));
