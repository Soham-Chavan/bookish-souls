(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_2a305f._.js", {

"[project]/src/app/signup/page.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SignUp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/signup/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.ref;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, _ref, self, source, owner, props) {
        _ref = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== _ref ? _ref : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
                for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
            } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else validateChildKeys(children, type);
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        hasValidRef(config);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && (config = "function" === typeof type ? type.displayName || type.name || "Unknown" : type, children && defineKeyPropWarningGetter(maybeKey, config));
        return ReactElement(type, children, null, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "QueryClientContext": (()=>QueryClientContext),
    "QueryClientProvider": (()=>QueryClientProvider),
    "useQueryClient": (()=>useQueryClient)
});
// src/QueryClientProvider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
var QueryClientContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(void 0);
var useQueryClient = (queryClient)=>{
    const client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(QueryClientContext);
    if (queryClient) {
        return queryClient;
    }
    if (!client) {
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    }
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(QueryClientContext.Provider, {
        value: client,
        children
    });
};
;
 //# sourceMappingURL=QueryClientProvider.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/utils.ts
__turbopack_esm__({
    "addToEnd": (()=>addToEnd),
    "addToStart": (()=>addToStart),
    "ensureQueryFn": (()=>ensureQueryFn),
    "functionalUpdate": (()=>functionalUpdate),
    "hashKey": (()=>hashKey),
    "hashQueryKeyByOptions": (()=>hashQueryKeyByOptions),
    "isPlainArray": (()=>isPlainArray),
    "isPlainObject": (()=>isPlainObject),
    "isServer": (()=>isServer),
    "isValidTimeout": (()=>isValidTimeout),
    "keepPreviousData": (()=>keepPreviousData),
    "matchMutation": (()=>matchMutation),
    "matchQuery": (()=>matchQuery),
    "noop": (()=>noop),
    "partialMatchKey": (()=>partialMatchKey),
    "replaceData": (()=>replaceData),
    "replaceEqualDeep": (()=>replaceEqualDeep),
    "resolveEnabled": (()=>resolveEnabled),
    "resolveStaleTime": (()=>resolveStaleTime),
    "shallowEqualObjects": (()=>shallowEqualObjects),
    "skipToken": (()=>skipToken),
    "sleep": (()=>sleep),
    "timeUntilStale": (()=>timeUntilStale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return !Object.keys(b).some((key)=>!partialMatchKey(a[key], b[key]));
    }
    return false;
}
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (array || isPlainObject(a) && isPlainObject(b)) {
        const aItems = array ? a : Object.keys(a);
        const aSize = aItems.length;
        const bItems = array ? b : Object.keys(b);
        const bSize = bItems.length;
        const copy = array ? [] : {};
        let equalItems = 0;
        for(let i = 0; i < bSize; i++){
            const key = array ? i : bItems[i];
            if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b[key] === void 0) {
                copy[key] = void 0;
                equalItems++;
            } else {
                copy[key] = replaceEqualDeep(a[key], b[key]);
                if (copy[key] === a[key] && a[key] !== void 0) {
                    equalItems++;
                }
            }
        }
        return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
        }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/subscribable.ts
__turbopack_esm__({
    "Subscribable": (()=>Subscribable)
});
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
;
 //# sourceMappingURL=subscribable.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/onlineManager.ts
__turbopack_esm__({
    "OnlineManager": (()=>OnlineManager),
    "onlineManager": (()=>onlineManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
;
;
var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
        const changed = this.#online !== online;
        if (changed) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return this.#online;
    }
};
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/thenable.ts
__turbopack_esm__({
    "pendingThenable": (()=>pendingThenable)
});
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
;
 //# sourceMappingURL=thenable.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/focusManager.ts
__turbopack_esm__({
    "FocusManager": (()=>FocusManager),
    "focusManager": (()=>focusManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
;
;
var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        });
    }
    setFocused(focused) {
        const changed = this.#focused !== focused;
        if (changed) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        if (typeof this.#focused === "boolean") {
            return this.#focused;
        }
        return globalThis.document?.visibilityState !== "hidden";
    }
};
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/retryer.ts
__turbopack_esm__({
    "CancelledError": (()=>CancelledError),
    "canFetch": (()=>canFetch),
    "createRetryer": (()=>createRetryer),
    "isCancelledError": (()=>isCancelledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/thenable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let isResolved = false;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const cancel = (cancelOptions)=>{
        if (!isResolved) {
            reject(new CancelledError(cancelOptions));
            config.abort?.();
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved) {
            isResolved = true;
            config.onSuccess?.(value);
            continueFn?.();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved) {
            isResolved = true;
            config.onError?.(value);
            continueFn?.();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved || canContinue()) {
                    continueResolve(value);
                }
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved) {
                config.onContinue?.();
            }
        });
    };
    const run = ()=>{
        if (isResolved) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved) {
                return;
            }
            const retry = config.retry ?? (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        cancel,
        continue: ()=>{
            continueFn?.();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/notifyManager.ts
__turbopack_esm__({
    "createNotifyManager": (()=>createNotifyManager),
    "notifyManager": (()=>notifyManager)
});
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = (cb)=>setTimeout(cb, 0);
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/removable.ts
__turbopack_esm__({
    "Removable": (()=>Removable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
;
var Removable = class {
    #gcTimeout;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            this.#gcTimeout = setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime);
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
        if (this.#gcTimeout) {
            clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
 //# sourceMappingURL=removable.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/mutation.ts
__turbopack_esm__({
    "Mutation": (()=>Mutation),
    "getDefaultState": (()=>getDefaultState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/retryer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/removable.js [app-client] (ecmascript)");
;
;
;
var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Removable"] {
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                this.#mutationCache.remove(this);
            }
        }
    }
    continue() {
        return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !this.#retryer.canStart();
        try {
            if (!restored) {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                await this.#mutationCache.config.onMutate?.(variables, this);
                const context = await this.options.onMutate?.(variables);
                if (context !== this.state.context) {
                    this.#dispatch({
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await this.#retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this);
            await this.options.onSuccess?.(data, variables, this.state.context);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this);
            await this.options.onSettled?.(data, null, variables, this.state.context);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this);
                await this.options.onError?.(error, variables, this.state.context);
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this);
                await this.options.onSettled?.(void 0, error, variables, this.state.context);
                throw error;
            } finally{
                this.#dispatch({
                    type: "error",
                    error
                });
            }
        } finally{
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
 //# sourceMappingURL=mutation.js.map
}}),
"[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/mutationObserver.ts
__turbopack_esm__({
    "MutationObserver": (()=>MutationObserver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
;
;
;
;
var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) {
            this.#client.getMutationCache().notify({
                type: "observerOptionsUpdated",
                mutation: this.#currentMutation,
                observer: this
            });
        }
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) {
            this.reset();
        } else if (this.#currentMutation?.state.status === "pending") {
            this.#currentMutation.setOptions(this.options);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#currentMutation?.removeObserver(this);
        }
    }
    onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    getCurrentResult() {
        return this.#currentResult;
    }
    reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const context = this.#currentResult.context;
                if (action?.type === "success") {
                    this.#mutateOptions.onSuccess?.(action.data, variables, context);
                    this.#mutateOptions.onSettled?.(action.data, null, variables, context);
                } else if (action?.type === "error") {
                    this.#mutateOptions.onError?.(action.error, variables, context);
                    this.#mutateOptions.onSettled?.(void 0, action.error, variables, context);
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
 //# sourceMappingURL=mutationObserver.js.map
}}),
"[project]/node_modules/@tanstack/react-query/build/modern/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
// src/utils.ts
__turbopack_esm__({
    "noop": (()=>noop),
    "shouldThrowError": (()=>shouldThrowError)
});
function shouldThrowError(throwError, params) {
    if (typeof throwError === "function") {
        return throwError(...params);
    }
    return !!throwError;
}
function noop() {}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "useMutation": (()=>useMutation)
});
// src/useMutation.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(()=>{
        observer.setOptions(options);
    }, [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useSyncExternalStore(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback((onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange)), [
        observer
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback((variables, mutateOptions)=>{
        observer.mutate(variables, mutateOptions).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
    }, [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) {
        throw result.error;
    }
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}}),
}]);

//# sourceMappingURL=_2a305f._.js.map