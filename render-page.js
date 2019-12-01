(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/home/travis/build/emathgroup/selectedTopics/node_modules/@reach/router/index.js"), require("/home/travis/build/emathgroup/selectedTopics/node_modules/core-js/modules/web.dom.iterable.js"), require("fs"), require("/home/travis/build/emathgroup/selectedTopics/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/home/travis/build/emathgroup/selectedTopics/node_modules/@reach/router/index.js", "/home/travis/build/emathgroup/selectedTopics/node_modules/core-js/modules/web.dom.iterable.js", "fs", "/home/travis/build/emathgroup/selectedTopics/node_modules/lodash/lodash.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/home/travis/build/emathgroup/selectedTopics/node_modules/@reach/router/index.js"), require("/home/travis/build/emathgroup/selectedTopics/node_modules/core-js/modules/web.dom.iterable.js"), require("fs"), require("/home/travis/build/emathgroup/selectedTopics/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/home/travis/build/emathgroup/selectedTopics/node_modules/@reach/router/index.js"], root["/home/travis/build/emathgroup/selectedTopics/node_modules/core-js/modules/web.dom.iterable.js"], root["fs"], root["/home/travis/build/emathgroup/selectedTopics/node_modules/lodash/lodash.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-typography/gatsby-ssr */ "./node_modules/gatsby-plugin-typography/gatsby-ssr.js"),options:{"plugins":[],"pathToConfigModule":"src/utils/typography"}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-remark-images/gatsby-ssr */ "./node_modules/gatsby-remark-images/gatsby-ssr.js"),options:{"plugins":[],"maxWidth":750,"linkImagesToOriginal":false}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript",{key:"noscript",id:"gatsby-noscript"},"This app works best with JavaScript enabled."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{let pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
let trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);for(const{matchPath,path}of matchPaths){if(Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["match"])(matchPath,trimmedPathname)){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(rawPathname);let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;const StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};const doFetch=(url,method=`GET`)=>new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});const loadPageDataJson=loadObj=>{const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return doFetch(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:`success`,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:`failure`});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return loadPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:`error`});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is a failure.
return Object.assign(loadObj,{status:`error`});});};const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: `success` || `error`,
//   payload: PageResources, // undefined if `error`
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["setMatchPaths"])(matchPaths);}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return loadPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlight=this.loadPageDataJson(pagePath).then(result=>{if(result.status===`error`){return{status:`error`};}if(result.status===`failure`){// throw an error so error trackers can pick this up
throw new Error(`404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/`);}const pageData=result.payload;const{componentChunkName}=pageData;return this.loadComponent(componentChunkName).then(component=>{const finalResult={createdAt:new Date()};let pageResources;if(!component){finalResult.status=`error`;}else{finalResult.status=`success`;if(result.notFound===true){finalResult.notFound=true;}pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`,{page:pageResources,pageResources});}this.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(response=>{this.inFlightDb.delete(pagePath);return response;}).catch(err=>{this.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){throw new Error(`doPrefetch not implemented`);}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDb.get(pagePath);return page&&page.notFound===true;}}const createComponentUrls=componentChunkName=>window.___chunkMapping[componentChunkName].map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]().then(preferDefault);super(loadComponent,matchPaths);}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath)).then(result=>{if(result.status!==`success`){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(()=>pageData);});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath)};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2;}}const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace}=__webpack_require__(/*! lodash */ "lodash");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getPageDataFile=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return join(process.cwd(),`public`,pageDataPath);};const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageDataRaw=fs.readFileSync(getPageDataFile(pagePath));const pageData=JSON.parse(pageDataRaw);const pageDataUrl=getPageDataUrl(pagePath);const{componentChunkName}=pageData;class RouteHandler extends React.Component{render(){const props={...this.props,...pageData.result,// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=createElement(ServerLocation,{url:`${""}${pagePath}`},createElement(Router,{id:`gatsby-focus-wrapper`,baseuri:`${""}`},createElement(RouteHandler,{path:`/*`})));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);let namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=merge(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(React.createElement("style",{"data-href":`${""}/${style.name}`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});const webpackCompilationHash=pageData.webpackCompilationHash;// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";window.webpackCompilationHash="${webpackCompilationHash}";/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
const bodyScripts=scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return React.createElement("script",{key:scriptPath,src:scriptPath,async:true});});(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,_toConsumableArray(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["default"] = ((str,prefix=``)=>{if(str.substr(0,prefix.length)===prefix)return str.slice(prefix.length);return str;});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-templates-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/page.js */ "./src/templates/page.js"))),"component---src-templates-tags-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/tags.js */ "./src/templates/tags.js"))),"component---src-templates-img-template-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/img-template.js */ "./src/templates/img-template.js"))),"component---src-templates-img-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/img.js */ "./src/templates/img.js"))),"component---src-pages-404-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),"component---src-pages-about-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/about.js */ "./src/pages/about.js"))),"component---src-pages-blog-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/blog.js */ "./src/pages/blog.js"))),"component---src-pages-contact-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact.js */ "./src/pages/contact.js"))),"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),"component---src-pages-test-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/test.js */ "./src/pages/test.js")))};

/***/ }),

/***/ "./data/siteConfig.js":
/*!****************************!*\
  !*** ./data/siteConfig.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const config={siteTitle:"数学研发论坛博客",// Site title.
siteShortDesc:"数学研发论坛的开放博客",siteLogo:"/img/deezerlogo.jpg",// Logo used for SEO and manifest.
siteUrl:"https://emathgroup.github.io",// Domain of your website without pathPrefix.
siteDescription:"数学研发论坛的开放博客,专注数学和计算机",// Website description used for RSS feeds/meta description tag.
siteRss:"/rss.xml",// Path to the RSS file.
//googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
postDefaultCategoryID:"Tech",// Default category for posts.
dateFromFormat:"YYYY-MM-DD",// Date format used in the frontmatter.
dateFormat:"DD/MM/YYYY",// Date format for display.
userName:"数学研发论坛",// Username to display in the author segment.
userEmail:"emath.ac.cn@gmail.com",// Email used for RSS feed's author segment
userLocation:"China",// User location to display in the author segment.
userAvatar:"",// User avatar to display in the author segment.
userDescription:"Mathematics and Scientific Computing.",// User description to display in the author segment.
// Links to social profiles/projects you want to display in the author segment/navigation bar.
userLinks:[{label:"github",username:"emathgroup"},{label:"twitter",username:"test"},{label:"linkedIn",username:"hello"},{label:"qq",username:"6807814"},{label:"webchat",username:"rising-puffin"}],copyright:"Copyright © 2019. Advanced User",// Copyright string for the footer of the website and RSS feed.
themeColor:"#c62828",// Used for setting manifest and progress theme colors.
backgroundColor:"#e0e0e0"// Used for setting manifest background color.
};// Make sure siteUrl doesn't have an ending forward slash
if(config.siteUrl.substr(-1)==="/")config.siteUrl=config.siteUrl.slice(0,-1);// Make sure siteRss has a starting forward slash
if(config.siteRss&&config.siteRss[0]!=="/")config.siteRss=`/${config.siteRss}`;module.exports=config;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";
      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)
var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"];

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;

/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports["default"]=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2["default"])({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string}[], fixed: {src: string}[]}} args
 * @return {string}
 */var getImageSrcKey=function getImageSrcKey(_ref){var fluid=_ref.fluid,fixed=_ref.fixed;var data=fluid&&fluid[0]||fixed&&fixed[0];return data.src;};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);return imageCache[src]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);imageCache[src]=true;};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners["delete"](entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref2){var src=_ref2.src,srcSet=_ref2.srcSet,srcSetWebp=_ref2.srcSetWebp,media=_ref2.media,sizes=_ref2.sizes;return _react["default"].createElement(_react["default"].Fragment,{key:src},srcSetWebp&&_react["default"].createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),_react["default"].createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,media=_ref3.media,tracedSVG=_ref3.tracedSVG;return _react["default"].createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,base64=_ref4.base64;return _react["default"].createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref5,isWebp){var srcSet=_ref5.srcSet,srcSetWebp=_ref5.srcSetWebp,media=_ref5.media,sizes=_ref5.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners["delete"](el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=function Placeholder(_ref6){var src=_ref6.src,imageVariants=_ref6.imageVariants,generateSources=_ref6.generateSources,spreadProps=_ref6.spreadProps;var baseImage=_react["default"].createElement(Img,(0,_extends2["default"])({src:src},spreadProps));return imageVariants.length>1?_react["default"].createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;};var Img=_react["default"].forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,onClick=props.onClick,loading=props.loading,draggable=props.draggable,otherProps=(0,_objectWithoutPropertiesLoose2["default"])(props,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return _react["default"].createElement("img",(0,_extends2["default"])({sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,onClick:onClick,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2["default"])({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes["default"].object,onError:_propTypes["default"].func,onClick:_propTypes["default"].func,onLoad:_propTypes["default"].func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2["default"])(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn};_this.imageRef=_react["default"].createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2["default"])(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2["default"])(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){return _this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
imgCached:!!_this2.imageRef.current.currentSrc});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2["default"])({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2["default"])({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,{},imgStyle,{},placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};if(fluid){var imageVariants=fluid;var image=imageVariants[0];return _react["default"].createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2["default"])({position:"relative",overflow:"hidden"},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},_react["default"].createElement(Tag,{style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&_react["default"].createElement(Tag,{title:title,style:(0,_extends2["default"])({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&_react["default"].createElement(Placeholder,{src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&_react["default"].createElement(Placeholder,{src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react["default"].createElement("picture",null,generateImageSources(imageVariants),_react["default"].createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react["default"].createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2["default"])({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var _imageVariants=fixed;var _image=_imageVariants[0];var divStyle=(0,_extends2["default"])({position:"relative",overflow:"hidden",display:"inline-block",width:_image.width,height:_image.height},style);if(style.display==="inherit"){delete divStyle.display;}return _react["default"].createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(_image.srcSet)},bgColor&&_react["default"].createElement(Tag,{title:title,style:(0,_extends2["default"])({backgroundColor:bgColor,width:_image.width,opacity:!this.state.imgLoaded?1:0,height:_image.height},shouldFadeIn&&delayHideStyle)}),_image.base64&&_react["default"].createElement(Placeholder,{src:_image.base64,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateBase64Sources}),_image.tracedSVG&&_react["default"].createElement(Placeholder,{src:_image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&_react["default"].createElement("picture",null,generateImageSources(_imageVariants),_react["default"].createElement(Img,{alt:alt,title:title,width:_image.width,height:_image.height,sizes:_image.sizes,src:_image.src,crossOrigin:this.props.crossOrigin,srcSet:_image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&_react["default"].createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2["default"])({alt:alt,title:title,loading:loading},_image,{imageVariants:_imageVariants}))}}));}return null;};return Image;}(_react["default"].Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes["default"].shape({width:_propTypes["default"].number.isRequired,height:_propTypes["default"].number.isRequired,src:_propTypes["default"].string.isRequired,srcSet:_propTypes["default"].string.isRequired,base64:_propTypes["default"].string,tracedSVG:_propTypes["default"].string,srcWebp:_propTypes["default"].string,srcSetWebp:_propTypes["default"].string,media:_propTypes["default"].string});var fluidObject=_propTypes["default"].shape({aspectRatio:_propTypes["default"].number.isRequired,src:_propTypes["default"].string.isRequired,srcSet:_propTypes["default"].string.isRequired,sizes:_propTypes["default"].string.isRequired,base64:_propTypes["default"].string,tracedSVG:_propTypes["default"].string,srcWebp:_propTypes["default"].string,srcSetWebp:_propTypes["default"].string,media:_propTypes["default"].string});Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:_propTypes["default"].oneOfType([fixedObject,_propTypes["default"].arrayOf(fixedObject)]),fluid:_propTypes["default"].oneOfType([fluidObject,_propTypes["default"].arrayOf(fluidObject)]),fadeIn:_propTypes["default"].bool,durationFadeIn:_propTypes["default"].number,title:_propTypes["default"].string,alt:_propTypes["default"].string,className:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].object]),// Support Glamor's css prop.
critical:_propTypes["default"].bool,crossOrigin:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].bool]),style:_propTypes["default"].object,imgStyle:_propTypes["default"].object,placeholderStyle:_propTypes["default"].object,placeholderClassName:_propTypes["default"].string,backgroundColor:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].bool]),onLoad:_propTypes["default"].func,onError:_propTypes["default"].func,onClick:_propTypes["default"].func,onStartLoad:_propTypes["default"].func,Tag:_propTypes["default"].string,itemProp:_propTypes["default"].string,loading:_propTypes["default"].oneOf(["auto","lazy","eager"]),draggable:_propTypes["default"].bool};var _default=Image;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes["default"].string,
  activeStyle: _propTypes["default"].object,
  partiallyActive: _propTypes["default"].bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2["default"])({}, _this.props.style, {}, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react["default"].createElement(_router.Link, (0, _extends2["default"])({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react["default"].Component);

GatsbyLink.propTypes = (0, _extends2["default"])({}, NavLinkPropTypes, {
  onClick: _propTypes["default"].func,
  to: _propTypes["default"].string.isRequired,
  replace: _propTypes["default"].bool
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(GatsbyLink, (0, _extends2["default"])({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-typography/.cache/typography.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-typography/.cache/typography.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(/*! ./src/utils/typography */ "./src/utils/typography.js");

/***/ }),

/***/ "./node_modules/gatsby-plugin-typography/gatsby-ssr.js":
/*!*************************************************************!*\
  !*** ./node_modules/gatsby-plugin-typography/gatsby-ssr.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _reactTypography=__webpack_require__(/*! react-typography */ "./node_modules/react-typography/dist/index.js");var _typography=_interopRequireDefault(__webpack_require__(/*! ./.cache/typography */ "./node_modules/gatsby-plugin-typography/.cache/typography.js"));exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents;if(true){var googleFont=[].concat(pluginOptions.omitGoogleFont?[]:_react["default"].createElement(_reactTypography.GoogleFont,{key:"GoogleFont",typography:_typography["default"]}));setHeadComponents([_react["default"].createElement(_reactTypography.TypographyStyle,{key:"TypographyStyle",typography:_typography["default"]})].concat(googleFont));}};// Move Typography.js styles to the top of the head section so they're loaded first
// and don't accidentally overwrite other styles. Typography.js is meant to
// be a configurable CSS reset so should always load first.
exports.onPreRenderHTML=function(_ref2){var getHeadComponents=_ref2.getHeadComponents,replaceHeadComponents=_ref2.replaceHeadComponents;var headComponents=getHeadComponents();headComponents.sort(function(x,y){if(x&&x.key==="TypographyStyle"){return-1;}else if(y&&y.key==="TypographyStyle"){return 1;}return 0;});replaceHeadComponents(headComponents);};

/***/ }),

/***/ "./node_modules/gatsby-remark-images/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-remark-images/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.DEFAULT_OPTIONS={maxWidth:650,wrapperStyle:"",backgroundColor:"white",linkImagesToOriginal:true,showCaptions:false,markdownCaptions:false,withWebp:false,tracedSVG:false,loading:"lazy",disableBgImageOnAlpha:false};exports.imageClass="gatsby-resp-image-image";exports.imageWrapperClass="gatsby-resp-image-wrapper";exports.imageBackgroundClass="gatsby-resp-image-background-image";

/***/ }),

/***/ "./node_modules/gatsby-remark-images/gatsby-ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-remark-images/gatsby-ssr.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _require=__webpack_require__(/*! ./constants */ "./node_modules/gatsby-remark-images/constants.js"),imageClass=_require.imageClass;exports.onRenderBody=function(_ref){var setHeadComponents=_ref.setHeadComponents;var style=("\n  ."+imageClass+" {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    vertical-align: middle;\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: transparent;\n  }").replace(/\s*\n\s*/g,"").replace(/: /g,":").replace(/ \{/g,"{");setHeadComponents([_react["default"].createElement("style",{type:"text/css",key:"gatsby-remark-images-styles"},style)]);};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"gatsby\",\"description\":\"Blazing fast modern site generator for React\",\"version\":\"2.16.4\",\"author\":\"Kyle Mathews <mathews.kyle@gmail.com>\",\"bin\":{\"gatsby\":\"./dist/bin/gatsby.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"dependencies\":{\"@babel/code-frame\":\"^7.5.5\",\"@babel/core\":\"^7.6.4\",\"@babel/parser\":\"^7.6.4\",\"@babel/polyfill\":\"^7.6.0\",\"@babel/runtime\":\"^7.6.3\",\"@babel/traverse\":\"^7.6.3\",\"@gatsbyjs/relay-compiler\":\"2.0.0-printer-fix.4\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.9\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@reach/router\":\"^1.2.1\",\"@typescript-eslint/eslint-plugin\":\"^2.3.3\",\"@typescript-eslint/parser\":\"^2.3.3\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.6.5\",\"axios\":\"^0.19.0\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.0.3\",\"babel-loader\":\"^8.0.6\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^1.2.0\",\"babel-plugin-remove-graphql-queries\":\"^2.7.14\",\"babel-preset-gatsby\":\"^0.2.20\",\"better-opn\":\"1.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.0\",\"browserslist\":\"3.2.8\",\"cache-manager\":\"^2.10.0\",\"cache-manager-fs-hash\":\"^0.0.7\",\"chalk\":\"^2.4.2\",\"chokidar\":\"3.2.1\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^2.0.0\",\"copyfiles\":\"^1.2.0\",\"core-js\":\"^2.6.10\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert-san\":\"^0.3.3\",\"dotenv\":\"^8.1.0\",\"eslint\":\"^6.5.1\",\"eslint-config-react-app\":\"^5.0.2\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^3.1.0\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.16.0\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.9\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fast-levenshtein\":\"^2.0.6\",\"file-loader\":\"^1.1.11\",\"flat\":\"^4.1.0\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.8.2\",\"gatsby-core-utils\":\"^1.0.15\",\"gatsby-graphiql-explorer\":\"^0.2.25\",\"gatsby-link\":\"^2.2.22\",\"gatsby-plugin-page-creator\":\"^2.1.27\",\"gatsby-react-router-scroll\":\"^2.1.14\",\"gatsby-telemetry\":\"^1.1.33\",\"glob\":\"^7.1.4\",\"got\":\"8.3.2\",\"graphql\":\"^14.5.8\",\"graphql-compose\":\"^6.3.5\",\"graphql-playground-middleware-express\":\"^1.7.12\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"is-wsl\":\"^2.1.1\",\"jest-worker\":\"^24.9.0\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"lodash\":\"^4.17.15\",\"lokijs\":\"^1.5.7\",\"md5\":\"^2.2.1\",\"md5-file\":\"^3.2.3\",\"micromatch\":\"^3.1.10\",\"mime\":\"^2.4.4\",\"mini-css-extract-plugin\":\"^0.8.0\",\"mitt\":\"^1.1.3\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.24.0\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^2.1.1\",\"null-loader\":\"^0.1.1\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.5.0\",\"postcss-flexbugs-fixes\":\"^3.3.1\",\"postcss-loader\":\"^2.1.6\",\"prompts\":\"^2.2.1\",\"prop-types\":\"^15.7.2\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.15\",\"redux\":\"^4.0.4\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^5.7.1\",\"shallow-compare\":\"^1.2.2\",\"sift\":\"^5.1.0\",\"signal-exit\":\"^3.0.2\",\"slash\":\"^3.0.0\",\"socket.io\":\"^2.3.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"1.4.1\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.0\",\"uuid\":\"^3.3.3\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"~4.41.1\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.8.2\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.0\",\"xstate\":\"^4.6.7\",\"yaml-loader\":\"^0.5.0\"},\"devDependencies\":{\"@babel/cli\":\"^7.6.4\",\"@babel/runtime\":\"^7.6.3\",\"babel-preset-gatsby-package\":\"^0.2.9\",\"cross-env\":\"^5.2.1\",\"documentation\":\"^12.1.2\",\"react\":\"^16.10.2\",\"react-dom\":\"^16.10.2\",\"rimraf\":\"^3.0.0\",\"xhr-mock\":\"^2.5.0\"},\"engines\":{\"node\":\">=8.0.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir\",\"dist\",\"graphql.js\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\"],\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.5.8\"},\"scripts\":{\"build\":\"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"postbuild\":\"node scripts/output-api-file.js\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore **/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"postinstall\":\"node scripts/postinstall.js\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"yargs\":{\"boolean-negation\":false},\"gitHead\":\"edeef09bb8262cc6509ad5814a646d65900dc849\"}");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/katex/dist/katex.min.css":
/*!***********************************************!*\
  !*** ./node_modules/katex/dist/katex.min.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./node_modules/react-typography/dist/GoogleFont.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-typography/dist/GoogleFont.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleFont = function GoogleFont(props) {
  // Create family + styles string
  var fontsStr = "";
  if (props.typography.options.googleFonts) {
    var fonts = props.typography.options.googleFonts.map(function (font) {
      var str = "";
      str += font.name.split(" ").join("+");
      str += ":";
      str += font.styles.join(",");

      return str;
    });

    fontsStr = fonts.join("|");

    if (fontsStr) {
      return _react2.default.createElement("link", {
        href: "//fonts.googleapis.com/css?family=" + fontsStr,
        rel: "stylesheet",
        type: "text/css"
      });
    }
    return null;
  }
};

GoogleFont.propTypes = {
  typography: _propTypes2.default.object.isRequired
};

GoogleFont.displayName = "GoogleFont";

module.exports = GoogleFont;

/***/ }),

/***/ "./node_modules/react-typography/dist/TypographyStyle.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-typography/dist/TypographyStyle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypographyStyle = function TypographyStyle(props) {
  return _react2.default.createElement("style", {
    id: "typography.js",
    dangerouslySetInnerHTML: {
      __html: props.typography.toString()
    }
  });
};

TypographyStyle.propTypes = {
  typography: _propTypes2.default.object.isRequired
};

TypographyStyle.displayName = "TypographyStyle";

module.exports = TypographyStyle;

/***/ }),

/***/ "./node_modules/react-typography/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-typography/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _GoogleFont = __webpack_require__(/*! ./GoogleFont */ "./node_modules/react-typography/dist/GoogleFont.js");

var _GoogleFont2 = _interopRequireDefault(_GoogleFont);

var _TypographyStyle = __webpack_require__(/*! ./TypographyStyle */ "./node_modules/react-typography/dist/TypographyStyle.js");

var _TypographyStyle2 = _interopRequireDefault(_TypographyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  GoogleFont: _GoogleFont2.default,
  TypographyStyle: _TypographyStyle2.default
};

/***/ }),

/***/ "./node_modules/typography/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/typography/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;var n,o,i=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(n,o){for(var i,a,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(n),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))e.call(i,l)&&(u[l]=i[l]);if(t){a=t(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(u[a[f]]=i[a[f]])}}return u},a=function(t,e){e||(e=[0,""]),t=String(t);var r=parseFloat(t,10);return e[0]=r,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},u=function(t){return a(t)[0]},c=function(t){return null==t&&(t=t),function(e,r,n,o){null==n&&(n=t),null==o&&(o=n);var i=a(e)[1];if(i===r)return e;var c=u(e);if("px"!==i)if("em"===i)c=u(e)*u(n);else if("rem"===i)c=u(e)*u(t);else{if("ex"!==i)return e;c=u(e)*u(n)*2}var l=c;if("px"!==r)if("em"===r)l=c/u(o);else if("rem"===r)l=c/u(t);else{if("ex"!==r)return e;l=c/u(o)/2}return parseFloat(l.toFixed(5))+r}},l=a,f=function(t){return l(t)[1]},s=function(t){return l(t)[0]},p={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},v=function(t,e){var r,n=c(e.baseFontSize),o=s(n(t,"px")),i=s(e.baseLineHeightInPx),a=s(n(e.minLinePadding,"px"));return(r=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(r+=e.roundToNearestHalfLine?.5:1),r},h=function(t){var e=c(t.baseFontSize);return function(r,n,o){null==r&&(r=1),null==n&&(n=t.baseFontSize),null==o&&(o=0);var i=r*s(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,n);return"px"===f(a)&&(a=Math.floor(s(a))+f(a)),parseFloat(s(a).toFixed(5))+f(a)}},d="[object Number]",b=Object.prototype.toString;n=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&b.call(t)==d},o={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};function g(t){return!isNaN(parseFloat(t))&&isFinite(t)}var y=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!g(e))throw new Error("Hue is not a number");if(!g(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var n=0;if(0!==e){n=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var o=0;return r?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+n+"%,"+t+o+")"},m="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function j(t,e){return t(e={exports:{}},e.exports),e.exports}var _="object"==typeof m&&m&&m.Object===Object&&m,w="object"==typeof self&&self&&self.Object===Object&&self,O=_||w||Function("return this")(),S=O.Symbol,x=Object.prototype,z=x.hasOwnProperty,F=x.toString,k=S?S.toStringTag:void 0;var A=function(t){var e=z.call(t,k),r=t[k];try{t[k]=void 0;var n=!0}catch(t){}var o=F.call(t);return n&&(e?t[k]=r:delete t[k]),o},L=Object.prototype.toString;var B=function(t){return L.call(t)},P="[object Null]",T="[object Undefined]",M=S?S.toStringTag:void 0;var E=function(t){return null==t?void 0===t?T:P:M&&M in Object(t)?A(t):B(t)};var H=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},N="[object AsyncFunction]",W="[object Function]",C="[object GeneratorFunction]",I="[object Proxy]";var R,$=function(t){if(!H(t))return!1;var e=E(t);return e==W||e==C||e==N||e==I},U=O["__core-js_shared__"],D=(R=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var q=function(t){return!!D&&D in t},V=Function.prototype.toString;var J=function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Z=/^\[object .+?Constructor\]$/,G=Function.prototype,K=Object.prototype,Y=RegExp("^"+G.toString.call(K.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Q=function(t){return!(!H(t)||q(t))&&($(t)?Y:Z).test(J(t))};var X=function(t,e){return null==t?void 0:t[e]};var tt=function(t,e){var r=X(t,e);return Q(r)?r:void 0},et=function(){try{var t=tt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var rt=function(t,e,r){"__proto__"==e&&et?et(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var nt=function(t,e){return t===e||t!=t&&e!=e},ot=Object.prototype.hasOwnProperty;var it=function(t,e,r){var n=t[e];ot.call(t,e)&&nt(n,r)&&(void 0!==r||e in t)||rt(t,e,r)},at=Array.isArray;var ut=function(t){return null!=t&&"object"==typeof t},ct="[object Symbol]";var lt=function(t){return"symbol"==typeof t||ut(t)&&E(t)==ct},ft=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var pt=function(t,e){if(at(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!lt(t))||st.test(t)||!ft.test(t)||null!=e&&t in Object(e)},vt=tt(Object,"create");var ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt="__lodash_hash_undefined__",bt=Object.prototype.hasOwnProperty;var gt=function(t){var e=this.__data__;if(vt){var r=e[t];return r===dt?void 0:r}return bt.call(e,t)?e[t]:void 0},yt=Object.prototype.hasOwnProperty;var mt=function(t){var e=this.__data__;return vt?void 0!==e[t]:yt.call(e,t)},jt="__lodash_hash_undefined__";var _t=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=vt&&void 0===e?jt:e,this};function wt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}wt.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},wt.prototype.delete=ht,wt.prototype.get=gt,wt.prototype.has=mt,wt.prototype.set=_t;var Ot=wt;var St=function(t,e){for(var r=t.length;r--;)if(nt(t[r][0],e))return r;return-1},xt=Array.prototype.splice;var zt=function(t){var e=this.__data__,r=St(e,t);return!(r<0||(r==e.length-1?e.pop():xt.call(e,r,1),--this.size,0))};var Ft=function(t){var e=this.__data__,r=St(e,t);return r<0?void 0:e[r][1]};var kt=function(t){return St(this.__data__,t)>-1};var At=function(t,e){var r=this.__data__,n=St(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function Lt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Lt.prototype.clear=function(){this.__data__=[],this.size=0},Lt.prototype.delete=zt,Lt.prototype.get=Ft,Lt.prototype.has=kt,Lt.prototype.set=At;var Bt=Lt,Pt=tt(O,"Map");var Tt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var Mt=function(t,e){var r=t.__data__;return Tt(e)?r["string"==typeof e?"string":"hash"]:r.map};var Et=function(t){var e=Mt(this,t).delete(t);return this.size-=e?1:0,e};var Ht=function(t){return Mt(this,t).get(t)};var Nt=function(t){return Mt(this,t).has(t)};var Wt=function(t,e){var r=Mt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Ct(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ct.prototype.clear=function(){this.size=0,this.__data__={hash:new Ot,map:new(Pt||Bt),string:new Ot}},Ct.prototype.delete=Et,Ct.prototype.get=Ht,Ct.prototype.has=Nt,Ct.prototype.set=Wt;var It=Ct,Rt="Expected a function";function $t(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Rt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new($t.Cache||It),r}$t.Cache=It;var Ut=$t,Dt=500;var qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vt=/\\(\\)?/g,Jt=function(t){var e=Ut(t,function(t){return r.size===Dt&&r.clear(),t}),r=e.cache;return e}(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(qt,function(t,r,n,o){e.push(n?o.replace(Vt,"$1"):r||t)}),e});var Zt=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o},Gt=1/0,Kt=S?S.prototype:void 0,Yt=Kt?Kt.toString:void 0;var Qt=function t(e){if("string"==typeof e)return e;if(at(e))return Zt(e,t)+"";if(lt(e))return Yt?Yt.call(e):"";var r=e+"";return"0"==r&&1/e==-Gt?"-0":r};var Xt=function(t){return null==t?"":Qt(t)};var te=function(t,e){return at(t)?t:pt(t,e)?[t]:Jt(Xt(t))},ee=9007199254740991,re=/^(?:0|[1-9]\d*)$/;var ne=function(t,e){var r=typeof t;return!!(e=null==e?ee:e)&&("number"==r||"symbol"!=r&&re.test(t))&&t>-1&&t%1==0&&t<e},oe=1/0;var ie=function(t){if("string"==typeof t||lt(t))return t;var e=t+"";return"0"==e&&1/t==-oe?"-0":e};var ae=function(t,e,r,n){if(!H(t))return t;for(var o=-1,i=(e=te(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=ie(e[o]),l=r;if(o!=a){var f=u[c];void 0===(l=n?n(f,c,u):void 0)&&(l=H(f)?f:ne(e[o+1])?[]:{})}it(u,c,l),u=u[c]}return t};var ue=function(t,e,r){return null==t?t:ae(t,e,r)};var ce=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var le=function(t){return function(e,r,n){for(var o=-1,i=Object(e),a=n(e),u=a.length;u--;){var c=a[t?u:++o];if(!1===r(i[c],c,i))break}return e}}();var fe=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},se="[object Arguments]";var pe=function(t){return ut(t)&&E(t)==se},ve=Object.prototype,he=ve.hasOwnProperty,de=ve.propertyIsEnumerable,be=pe(function(){return arguments}())?pe:function(t){return ut(t)&&he.call(t,"callee")&&!de.call(t,"callee")};var ge=function(){return!1},ye=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||ge}),me=9007199254740991;var je=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=me},_e={};_e["[object Float32Array]"]=_e["[object Float64Array]"]=_e["[object Int8Array]"]=_e["[object Int16Array]"]=_e["[object Int32Array]"]=_e["[object Uint8Array]"]=_e["[object Uint8ClampedArray]"]=_e["[object Uint16Array]"]=_e["[object Uint32Array]"]=!0,_e["[object Arguments]"]=_e["[object Array]"]=_e["[object ArrayBuffer]"]=_e["[object Boolean]"]=_e["[object DataView]"]=_e["[object Date]"]=_e["[object Error]"]=_e["[object Function]"]=_e["[object Map]"]=_e["[object Number]"]=_e["[object Object]"]=_e["[object RegExp]"]=_e["[object Set]"]=_e["[object String]"]=_e["[object WeakMap]"]=!1;var we=function(t){return ut(t)&&je(t.length)&&!!_e[E(t)]};var Oe=function(t){return function(e){return t(e)}},Se=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&_.process,i=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),xe=Se&&Se.isTypedArray,ze=xe?Oe(xe):we,Fe=Object.prototype.hasOwnProperty;var ke=function(t,e){var r=at(t),n=!r&&be(t),o=!r&&!n&&ye(t),i=!r&&!n&&!o&&ze(t),a=r||n||o||i,u=a?fe(t.length,String):[],c=u.length;for(var l in t)!e&&!Fe.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||ne(l,c))||u.push(l);return u},Ae=Object.prototype;var Le=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Ae)};var Be=function(t,e){return function(r){return t(e(r))}},Pe=Be(Object.keys,Object),Te=Object.prototype.hasOwnProperty;var Me=function(t){if(!Le(t))return Pe(t);var e=[];for(var r in Object(t))Te.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Ee=function(t){return null!=t&&je(t.length)&&!$(t)};var He=function(t){return Ee(t)?ke(t):Me(t)};var Ne=function(t,e){return function(r,n){if(null==r)return r;if(!Ee(r))return t(r,n);for(var o=r.length,i=e?o:-1,a=Object(r);(e?i--:++i<o)&&!1!==n(a[i],i,a););return r}}(function(t,e){return t&&le(t,e,He)});var We=function(t){return t};var Ce=function(t){return"function"==typeof t?t:We};var Ie=function(t,e){return(at(t)?ce:Ne)(t,Ce(e))},Re="[object Number]";var $e=function(t){return"number"==typeof t||ut(t)&&E(t)==Re},Ue="[object String]";var De=function(t){return"string"==typeof t||!at(t)&&ut(t)&&E(t)==Ue};var qe=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var Ve=function(t){return this.__data__.get(t)};var Je=function(t){return this.__data__.has(t)},Ze=200;var Ge=function(t,e){var r=this.__data__;if(r instanceof Bt){var n=r.__data__;if(!Pt||n.length<Ze-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new It(n)}return r.set(t,e),this.size=r.size,this};function Ke(t){var e=this.__data__=new Bt(t);this.size=e.size}Ke.prototype.clear=function(){this.__data__=new Bt,this.size=0},Ke.prototype.delete=qe,Ke.prototype.get=Ve,Ke.prototype.has=Je,Ke.prototype.set=Ge;var Ye=Ke;var Qe=function(t,e,r){(void 0===r||nt(t[e],r))&&(void 0!==r||e in t)||rt(t,e,r)},Xe=j(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?O.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=i?i(r):new t.constructor(r);return t.copy(n),n}}),tr=O.Uint8Array;var er=function(t){var e=new t.constructor(t.byteLength);return new tr(e).set(new tr(t)),e};var rr=function(t,e){var r=e?er(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var nr=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e},or=Object.create,ir=function(){function t(){}return function(e){if(!H(e))return{};if(or)return or(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),ar=Be(Object.getPrototypeOf,Object);var ur=function(t){return"function"!=typeof t.constructor||Le(t)?{}:ir(ar(t))};var cr=function(t){return ut(t)&&Ee(t)},lr="[object Object]",fr=Function.prototype,sr=Object.prototype,pr=fr.toString,vr=sr.hasOwnProperty,hr=pr.call(Object);var dr=function(t){if(!ut(t)||E(t)!=lr)return!1;var e=ar(t);if(null===e)return!0;var r=vr.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&pr.call(r)==hr};var br=function(t,e){return"__proto__"==e?void 0:t[e]};var gr=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=n?n(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),o?rt(r,u,c):it(r,u,c)}return r};var yr=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},mr=Object.prototype.hasOwnProperty;var jr=function(t){if(!H(t))return yr(t);var e=Le(t),r=[];for(var n in t)("constructor"!=n||!e&&mr.call(t,n))&&r.push(n);return r};var _r=function(t){return Ee(t)?ke(t,!0):jr(t)};var wr=function(t){return gr(t,_r(t))};var Or=function(t,e,r,n,o,i,a){var u=br(t,r),c=br(e,r),l=a.get(c);if(l)Qe(t,r,l);else{var f=i?i(u,c,r+"",t,e,a):void 0,s=void 0===f;if(s){var p=at(c),v=!p&&ye(c),h=!p&&!v&&ze(c);f=c,p||v||h?at(u)?f=u:cr(u)?f=nr(u):v?(s=!1,f=Xe(c,!0)):h?(s=!1,f=rr(c,!0)):f=[]:dr(c)||be(c)?(f=u,be(u)?f=wr(u):(!H(u)||n&&$(u))&&(f=ur(c))):s=!1}s&&(a.set(c,f),o(f,c,n,i,a),a.delete(c)),Qe(t,r,f)}};var Sr=function t(e,r,n,o,i){e!==r&&le(r,function(a,u){if(H(a))i||(i=new Ye),Or(e,r,u,n,t,o,i);else{var c=o?o(br(e,u),a,u+"",e,r,i):void 0;void 0===c&&(c=a),Qe(e,u,c)}},_r)};var xr=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},zr=Math.max;var Fr=function(t,e,r){return e=zr(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=zr(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(a),xr(t,this,u)}};var kr=function(t){return function(){return t}},Ar=800,Lr=16,Br=Date.now;var Pr=function(t){var e=0,r=0;return function(){var n=Br(),o=Lr-(n-r);if(r=n,o>0){if(++e>=Ar)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(et?function(t,e){return et(t,"toString",{configurable:!0,enumerable:!1,value:kr(e),writable:!0})}:We);var Tr=function(t,e){return Pr(Fr(t,e,We),t+"")};var Mr=function(t,e,r){if(!H(r))return!1;var n=typeof e;return!!("number"==n?Ee(r)&&ne(e,r.length):"string"==n&&e in r)&&nt(r[e],t)};var Er=function(t){return Tr(function(e,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&Mr(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++n<o;){var u=r[n];u&&t(e,u,n,i)}return e})}(function(t,e,r){Sr(t,e,r)});var Hr=function(t,e,r,n){var o=-1,i=null==t?0:t.length;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r},Nr="__lodash_hash_undefined__";var Wr=function(t){return this.__data__.has(t)};function Cr(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new It;++e<r;)this.add(t[e])}Cr.prototype.add=Cr.prototype.push=function(t){return this.__data__.set(t,Nr),this},Cr.prototype.has=Wr;var Ir=Cr;var Rr=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1};var $r=function(t,e){return t.has(e)},Ur=1,Dr=2;var qr=function(t,e,r,n,o,i){var a=r&Ur,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var f=-1,s=!0,p=r&Dr?new Ir:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var v=t[f],h=e[f];if(n)var d=a?n(h,v,f,e,t,i):n(v,h,f,t,e,i);if(void 0!==d){if(d)continue;s=!1;break}if(p){if(!Rr(e,function(t,e){if(!$r(p,e)&&(v===t||o(v,t,r,n,i)))return p.push(e)})){s=!1;break}}else if(v!==h&&!o(v,h,r,n,i)){s=!1;break}}return i.delete(t),i.delete(e),s};var Vr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r};var Jr=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r},Zr=1,Gr=2,Kr="[object Boolean]",Yr="[object Date]",Qr="[object Error]",Xr="[object Map]",tn="[object Number]",en="[object RegExp]",rn="[object Set]",nn="[object String]",on="[object Symbol]",an="[object ArrayBuffer]",un="[object DataView]",cn=S?S.prototype:void 0,ln=cn?cn.valueOf:void 0;var fn=function(t,e,r,n,o,i,a){switch(r){case un:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case an:return!(t.byteLength!=e.byteLength||!i(new tr(t),new tr(e)));case Kr:case Yr:case tn:return nt(+t,+e);case Qr:return t.name==e.name&&t.message==e.message;case en:case nn:return t==e+"";case Xr:var u=Vr;case rn:if(u||(u=Jr),t.size!=e.size&&!(n&Zr))return!1;var c=a.get(t);if(c)return c==e;n|=Gr,a.set(t,e);var l=qr(u(t),u(e),n,o,i,a);return a.delete(t),l;case on:if(ln)return ln.call(t)==ln.call(e)}return!1};var sn=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t};var pn=function(t,e,r){var n=e(t);return at(t)?n:sn(n,r(t))};var vn=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};var hn=Object.prototype.propertyIsEnumerable,dn=Object.getOwnPropertySymbols,bn=dn?function(t){return null==t?[]:(t=Object(t),vn(dn(t),function(e){return hn.call(t,e)}))}:function(){return[]};var gn=function(t){return pn(t,He,bn)},yn=1,mn=Object.prototype.hasOwnProperty;var jn=function(t,e,r,n,o,i){var a=r&yn,u=gn(t),c=u.length;if(c!=gn(e).length&&!a)return!1;for(var l=c;l--;){var f=u[l];if(!(a?f in e:mn.call(e,f)))return!1}var s=i.get(t);if(s&&i.get(e))return s==e;var p=!0;i.set(t,e),i.set(e,t);for(var v=a;++l<c;){var h=t[f=u[l]],d=e[f];if(n)var b=a?n(d,h,f,e,t,i):n(h,d,f,t,e,i);if(!(void 0===b?h===d||o(h,d,r,n,i):b)){p=!1;break}v||(v="constructor"==f)}if(p&&!v){var g=t.constructor,y=e.constructor;g!=y&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y)&&(p=!1)}return i.delete(t),i.delete(e),p},_n=tt(O,"DataView"),wn=tt(O,"Promise"),On=tt(O,"Set"),Sn=tt(O,"WeakMap"),xn=J(_n),zn=J(Pt),Fn=J(wn),kn=J(On),An=J(Sn),Ln=E;(_n&&"[object DataView]"!=Ln(new _n(new ArrayBuffer(1)))||Pt&&"[object Map]"!=Ln(new Pt)||wn&&"[object Promise]"!=Ln(wn.resolve())||On&&"[object Set]"!=Ln(new On)||Sn&&"[object WeakMap]"!=Ln(new Sn))&&(Ln=function(t){var e=E(t),r="[object Object]"==e?t.constructor:void 0,n=r?J(r):"";if(n)switch(n){case xn:return"[object DataView]";case zn:return"[object Map]";case Fn:return"[object Promise]";case kn:return"[object Set]";case An:return"[object WeakMap]"}return e});var Bn=Ln,Pn=1,Tn="[object Arguments]",Mn="[object Array]",En="[object Object]",Hn=Object.prototype.hasOwnProperty;var Nn=function(t,e,r,n,o,i){var a=at(t),u=at(e),c=a?Mn:Bn(t),l=u?Mn:Bn(e),f=(c=c==Tn?En:c)==En,s=(l=l==Tn?En:l)==En,p=c==l;if(p&&ye(t)){if(!ye(e))return!1;a=!0,f=!1}if(p&&!f)return i||(i=new Ye),a||ze(t)?qr(t,e,r,n,o,i):fn(t,e,c,r,n,o,i);if(!(r&Pn)){var v=f&&Hn.call(t,"__wrapped__"),h=s&&Hn.call(e,"__wrapped__");if(v||h){var d=v?t.value():t,b=h?e.value():e;return i||(i=new Ye),o(d,b,r,n,i)}}return!!p&&(i||(i=new Ye),jn(t,e,r,n,o,i))};var Wn=function t(e,r,n,o,i){return e===r||(null==e||null==r||!ut(e)&&!ut(r)?e!=e&&r!=r:Nn(e,r,n,o,t,i))},Cn=1,In=2;var Rn=function(t,e,r,n){var o=r.length,i=o,a=!n;if(null==t)return!i;for(t=Object(t);o--;){var u=r[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=r[o])[0],l=t[c],f=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var s=new Ye;if(n)var p=n(l,f,c,t,e,s);if(!(void 0===p?Wn(f,l,Cn|In,n,s):p))return!1}}return!0};var $n=function(t){return t==t&&!H(t)};var Un=function(t){for(var e=He(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,$n(o)]}return e};var Dn=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}};var qn=function(t){var e=Un(t);return 1==e.length&&e[0][2]?Dn(e[0][0],e[0][1]):function(r){return r===t||Rn(r,t,e)}};var Vn=function(t,e){for(var r=0,n=(e=te(e,t)).length;null!=t&&r<n;)t=t[ie(e[r++])];return r&&r==n?t:void 0};var Jn=function(t,e,r){var n=null==t?void 0:Vn(t,e);return void 0===n?r:n};var Zn=function(t,e){return null!=t&&e in Object(t)};var Gn=function(t,e,r){for(var n=-1,o=(e=te(e,t)).length,i=!1;++n<o;){var a=ie(e[n]);if(!(i=null!=t&&r(t,a)))break;t=t[a]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&je(o)&&ne(a,o)&&(at(t)||be(t))};var Kn=function(t,e){return null!=t&&Gn(t,e,Zn)},Yn=1,Qn=2;var Xn=function(t,e){return pt(t)&&$n(e)?Dn(ie(t),e):function(r){var n=Jn(r,t);return void 0===n&&n===e?Kn(r,t):Wn(e,n,Yn|Qn)}};var to=function(t){return function(e){return null==e?void 0:e[t]}};var eo=function(t){return function(e){return Vn(e,t)}};var ro=function(t){return pt(t)?to(ie(t)):eo(t)};var no=function(t){return"function"==typeof t?t:null==t?We:"object"==typeof t?at(t)?Xn(t[0],t[1]):qn(t):ro(t)};var oo=function(t,e,r,n,o){return o(t,function(t,o,i){r=n?(n=!1,t):e(r,t,o,i)}),r};var io=function(t,e,r){var n=at(t)?Hr:oo,o=arguments.length<3;return n(t,no(e,4),r,o,Ne)},ao=function(t,e,r){var n;return void 0===t&&(t={}),n=at(e)?e:[e],Ie(n,function(e){Ie(r,function(r,n){ue(t,e+"."+n,r)})}),t},uo=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],co=function(t){return-1!==uo.indexOf(t)?t:"'"+t+"'"};var lo,fo=j(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"}),so=(lo=fo)&&lo.__esModule&&Object.prototype.hasOwnProperty.call(lo,"default")?lo.default:lo,po=function(t){return io(t,function(t,e,r){return t+=r+"{",Ie(e,function(e,r){if(H(e)){var n={};n[r]=e,t+=po(n)}else{var o=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+e+";";["Webkit","ms","Moz","O"].forEach(function(t){r.slice(0,t.length)===t&&(o="-"+o)}),t+=o}}),t+="}"},"")};module.exports=function(t){var e,r,a,u,l=i({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),d=(e=l,r=JSON.parse(JSON.stringify(p)),a=Object.assign({},r,e),u=c(a.baseFontSize),f(a.baseLineHeight)?(s(u(a.baseFontSize,"px")),a.baseLineHeightInPx=u(a.baseLineHeight,"px")):a.baseLineHeightInPx=s(a.baseFontSize)*a.baseLineHeight+"px",{rhythm:h(a),establishBaseline:function(){return c((t=a).baseFontSize),{fontSize:s(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return v(t,a)},adjustFontSizeTo:function(t,e,r){return null==e&&(e="auto"),function(t,e,r,n){null==r&&(r=n.baseFontSize),"%"===f(t)&&(t=s(n.baseFontSize)*(s(t)/100)+"px");var o=c(n.baseFontSize);t=o(t,"px",r=o(r,"px"));var i=h(n);return"auto"===e&&(e=v(t,n)),{fontSize:o(t,n.rhythmUnit,r),lineHeight:i(e,r)}}(t,e,r,a)}});return d.scale=function(t){var e=parseInt(l.baseFontSize,10),r=function(t,e){var r;return null==t&&(t=0),null==e&&(e="golden"),r=n(e)?e:null!=o[e]?o[e]:o.golden,Math.pow(r,t)}(t,l.scaleRatio)*e+"px";return d.adjustFontSizeTo(r)},Object.assign({},{options:l},d,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var r={},n=t.establishBaseline();r=ao(r,"html",{font:n.fontSize+"/"+n.lineHeight+" "+e.bodyFontFamily.map(co).join(","),boxSizing:"border-box",overflowY:"scroll"}),r=ao(r,["*","*:before","*:after"],{boxSizing:"inherit"}),r=ao(r,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(co).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),r=ao(r,"img",{maxWidth:"100%"});var o="";o=$e(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):De(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),r=ao(r,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),r=ao(r,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),r=ao(r,["b","strong","dt","th"],{fontWeight:e.boldWeight}),r=ao(r,"hr",{background:y(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),r=ao(r,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),r=ao(r,"li",{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["ol li","ul li"],{paddingLeft:0}),r=ao(r,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),r=ao(r,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),r=ao(r,["li > p"],{marginBottom:"calc("+o+" / 2)"}),r=ao(r,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(r=ao(r,["abbr","acronym"],{borderBottom:"1px dotted "+y(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+y(50),cursor:"help",textDecoration:"none"},r=ao(r,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),r=ao(r,["thead"],{textAlign:"left"}),r=ao(r,["td,th"],{textAlign:"left",borderBottom:"1px solid "+y(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),r=ao(r,"th:first-child,td:first-child",{paddingLeft:0}),r=ao(r,"th:last-child,td:last-child",{paddingRight:0}),r=ao(r,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(co).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),f=t.scale(-.3);return Ie([i,a,u,c,l,f],function(t,n){r=ue(r,"h"+(n+1)+".fontSize",t.fontSize),r=ue(r,"h"+(n+1)+".lineHeight",e.headerLineHeight)}),at(e.plugins)&&(r=io(e.plugins,function(r,n){return Er(r,n(t,e,r))},r)),e.overrideStyles&&$(e.overrideStyles)&&(r=Er(r,e.overrideStyles(t,e,r))),e.overrideThemeStyles&&$(e.overrideThemeStyles)&&(r=Er(r,e.overrideThemeStyles(t,e,r))),r}(d,l)},toString:function(){return function(t,e,r){var n=po(r);return e.includeNormalize&&(n=""+so+n),n}(0,l,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString();var e=document.head;e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}})};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./public/static/d/1903528381.json":
/*!*****************************************!*\
  !*** ./public/static/d/1903528381.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"Email\":\"emath.ac.cn@gmail.com\",\"githubUsername\":\"emathgroup\"}}}}");

/***/ }),

/***/ "./public/static/d/3286404121.json":
/*!*****************************************!*\
  !*** ./public/static/d/3286404121.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"数学研发论坛博客\",\"author\":\"数学研发论坛\"}}}}");

/***/ }),

/***/ "./public/static/d/3564016937.json":
/*!*****************************************!*\
  !*** ./public/static/d/3564016937.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"githubUsername\":\"emathgroup\",\"twitterUsername\":\"test\",\"linkedInUsername\":\"hello\"}}}}");

/***/ }),

/***/ "./public/static/d/3945922824.json":
/*!*****************************************!*\
  !*** ./public/static/d/3945922824.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"allMarkdownRemark\":{\"edges\":[{\"node\":{\"id\":\"acbb5ba8-ee6b-5b2e-af81-2a9ff910d39d\",\"frontmatter\":{\"title\":\"极地出逃问题\",\"date\":\"Sun, 1st December 2019\",\"tags\":[\"变分法 极地\"],\"thumbnail\":{\"childImageSharp\":null}},\"fields\":{\"slug\":\"escape-from-pole\"}}},{\"node\":{\"id\":\"018618fb-1549-5a2f-860b-ac282e2a5975\",\"frontmatter\":{\"title\":\"连续Smith数\",\"date\":\"Sat, 30th November 2019\",\"tags\":[\"素数\",\"数字和\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB0wASAB//xAAWEAADAAAAAAAAAAAAAAAAAAAQIEH/2gAIAQEAAQUCaj//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAUEAEAAAAAAAAAAAAAAAAAAAAw/9oACAEBAAY/Ah//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMUFRcYH/2gAIAQEAAT8h27L8OxDwKODYTobg/9oADAMBAAIAAwAAABAwyD3/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFhUXGB/9oACAEBAAE/EMgK83e5YytUqoJyt7YhXYXW6gwr1TmoEaPyLdnGoiM8xlRg6n//2Q==\",\"width\":150,\"height\":150,\"src\":\"/static/790c47c2acbbd796016b38a56fc26beb/44086/primes.jpg\",\"srcSet\":\"/static/790c47c2acbbd796016b38a56fc26beb/44086/primes.jpg 1x,\\n/static/790c47c2acbbd796016b38a56fc26beb/1caf6/primes.jpg 1.5x,\\n/static/790c47c2acbbd796016b38a56fc26beb/792e8/primes.jpg 2x\"}}}},\"fields\":{\"slug\":\"k-smith-numbers\"}}},{\"node\":{\"id\":\"d2fa9a5c-f2f8-5e0e-b88a-5bb7955dd189\",\"frontmatter\":{\"title\":\"自然数大分家\",\"date\":\"Wed, 27th November 2019\",\"tags\":[\"sequence\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAwX/xAAXAQADAQAAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAH1OUXF8zWqlDVAP//EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMSBBMkMTP/2gAIAQEAAQUCtvCyu141moJ284wONeKqPVzyLO//xAAXEQEBAQEAAAAAAAAAAAAAAAACARAx/9oACAEDAQE/ASpRh5n/xAAYEQACAwAAAAAAAAAAAAAAAAABEAMSIf/aAAgBAgEBPwGS4OIr/8QAHxAAAgIBBAMAAAAAAAAAAAAAAAECESEDEDFhcYGh/9oACAEBAAY/Amo5kvhci9OarwNquSqyypYfZ7I7f//EABsQAAMBAAMBAAAAAAAAAAAAAAABESExQVHB/9oACAEBAAE/IUDKwMM8DRsB+i02nTXrJlZSIjvl0MNMDIV8fBat8P/aAAwDAQACAAMAAAAQEMj9/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQETHR/9oACAEDAQE/EMJ0tQM//8QAGBEBAQADAAAAAAAAAAAAAAAAAQAQETH/2gAIAQIBAT8QYQwOrrH/xAAcEAEAAwEAAwEAAAAAAAAAAAABABEhMUFhcfD/2gAIAQEAAT8QQYFN9PLIReEoKpZYyC6PG+Gc5Cv7wNYav7xBrwhC8NfkSRzqb99zGyoUZlQIqrZcEsC179Z//9k=\",\"width\":150,\"height\":150,\"src\":\"/static/51d4d012de4c457c297653605126f2ac/44086/break.jpg\",\"srcSet\":\"/static/51d4d012de4c457c297653605126f2ac/44086/break.jpg 1x,\\n/static/51d4d012de4c457c297653605126f2ac/1caf6/break.jpg 1.5x,\\n/static/51d4d012de4c457c297653605126f2ac/792e8/break.jpg 2x\"}}}},\"fields\":{\"slug\":\"natural-number-break\"}}},{\"node\":{\"id\":\"5a9f11ca-fa22-52cf-8abe-8707c83b7a78\",\"frontmatter\":{\"title\":\"关灯游戏和扫雷问题\",\"date\":\"Wed, 27th November 2019\",\"tags\":[\"mine\",\"扫雷\",\"关灯\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIDAf/aAAwDAQACEAMQAAABxUd7Oa4VhYQwgv8A/8QAGRABAQADAQAAAAAAAAAAAAAAAgEAERID/9oACAEBAAEFArdY3vIC8bvDrli6onYo3np6IP8A/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPwEWDn//xAAWEQADAAAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BHf/EAB0QAAIDAAIDAAAAAAAAAAAAAAABAhEhAxIxUWH/2gAIAQEABj8CpYR62s0uS06fbONyXhYSl7Ymxa8Kif/EABoQAQEBAQEBAQAAAAAAAAAAAAERACExYXH/2gAIAQEAAT8hYqwMAwcX0HrqFAZchcQeHIIfrMx7THya+zB0aIZkwG//2gAMAwEAAgADAAAAEMcIwv/EABgRAAMBAQAAAAAAAAAAAAAAAAABITER/9oACAEDAQE/EG9pkIuih//EABkRAAIDAQAAAAAAAAAAAAAAAAARASFRof/aAAgBAgEBPxDK6MyJoTP/xAAdEAEAAwADAAMAAAAAAAAAAAABABEhMUFRYaHh/9oACAEBAAE/EECrZAV3N6ITR8kra2Ipa9jlNe71f2P4XccDdv1KsbOOOCKw6sS32cLqsTA64ghCC5ar3P/Z\",\"width\":150,\"height\":150,\"src\":\"/static/c05f91a1094e31db549b5ecf4c749d98/44086/lights.jpg\",\"srcSet\":\"/static/c05f91a1094e31db549b5ecf4c749d98/44086/lights.jpg 1x,\\n/static/c05f91a1094e31db549b5ecf4c749d98/1caf6/lights.jpg 1.5x,\\n/static/c05f91a1094e31db549b5ecf4c749d98/792e8/lights.jpg 2x\"}}}},\"fields\":{\"slug\":\"mine-and-lights\"}}},{\"node\":{\"id\":\"7df43de2-be3c-5ba2-a2b1-d74c49e96bd4\",\"frontmatter\":{\"title\":\"山顶的决斗\",\"date\":\"Tue, 26th November 2019\",\"tags\":[\"game\",\"probability\",\"博弈\",\"概率\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAP/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAcSsubir8gcwL//EABoQAAIDAQEAAAAAAAAAAAAAAAACARESEzH/2gAIAQEAAQUCKkxJmeqsyz1Y2bo9P//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAYEAACAwAAAAAAAAAAAAAAAAAQIQERIP/aAAgBAQAGPwLDsqB//8QAHBABAQEAAgMBAAAAAAAAAAAAAREAITEQQWGB/9oACAEBAAE/IXsLz4BzVoOPTlfUlHvfSfmicmkpO5F1d//aAAwDAQACAAMAAAAQr9gB/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREP/aAAgBAwEBPxCEW//EABgRAAIDAAAAAAAAAAAAAAAAAAABEBFB/9oACAECAQE/EBbMj//EABsQAQADAQEBAQAAAAAAAAAAAAEAESExUYGR/9oACAEBAAE/EFyr8PYs4NywU/k640E5hvYag0gYNofIvTomjCqt+Tdz0jE115s//9k=\",\"width\":150,\"height\":150,\"src\":\"/static/c5896f2ea6a6513f49cb5e6fe3a75eab/44086/duel.jpg\",\"srcSet\":\"/static/c5896f2ea6a6513f49cb5e6fe3a75eab/44086/duel.jpg 1x,\\n/static/c5896f2ea6a6513f49cb5e6fe3a75eab/1caf6/duel.jpg 1.5x,\\n/static/c5896f2ea6a6513f49cb5e6fe3a75eab/792e8/duel.jpg 2x\"}}}},\"fields\":{\"slug\":\"duel-on-hill\"}}},{\"node\":{\"id\":\"f1ad465b-c034-54b2-8a6a-a03ecab09ebb\",\"frontmatter\":{\"title\":\"任意二个数之和都是平方数\",\"date\":\"Tue, 26th November 2019\",\"tags\":[\"algorithm\",\"平方数\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAABYlAAAWJQFJUiTwAAACxElEQVQoz4WTTUhUURTHL0gby4V9kNUiF5HQInDXNjASJYSKWrgQMTJloBipyFlYJhJSZuAXmn1IYpSZVgpqIJOF46jZqDPO6KiNItPo2Lznu5/vs/smRyWFHv/Fu/ed/33n/M65AO/4IISpDBddUmAUE8bXO0aBnZ2EIkmATy+iilQUCfKDzM3/m80g/lsFiSu0NkO1JuKVAJZVc3+bHyAI1138hX9mKiYEY4KEZVKXKd88gLiZKZgyImv/+IFsGBhCKIpMValuIN8X/KaAdBaZqjqNrIlim1VotwVfFoZdvUTRMZQ2zZ76SjH0iyqK70Xtss9PHI3sKlALE5hlD7y+L5y7ayE73ns5fvAMmH11lxkGZ4FifvDpRNLApXPuJ6Wtu8HPz92yrkK3HbkH4GRv+NHZQM7eVUdn2GUPfe+HkVXEqCRJTFnPH4Rn3V0pB1sAmHrdpBkGrwCrOtYNzFCwKsuXlwQ5OcOgqoYoW/nWNF+dteQaYLICpTXgKLvdnHLk3cnk/gvp4nKIUN6kNQ4MCyF/aZrj/P614DzhtKlCdMNdk/shM87b/17hpKgM6lIOuzrehgPT7aeO+z+2KWZVZkmU0vnW+xM1Vg5fDC1EJrrhjH3J/myqpVjw9EmeHsHvBGJkVdY0pukQSUgUMHdKEjIFiaozzWyBr/nGj/yEEUvymPXYhC11xHLUee1Qd04yILylEJpNJsSsLSYOljIG10QqK8FJx3CDzdlY4qi/87Uiz9lUMlh9a7ytBqC/o0MoFCJzjx/MFBfN3LPNlZd4y4oXx4ZMThByv6ybx4UHn89Vpi0M93C0TNVAbJgJFAXvw/JRS/5wwZWh3OzerHRPX5eJIJoXT4EwxdNQ2JER5+lpYarB47fMNiEsmi2XHBXvB9qYR4QIZcLvcHB6nKe57WLwwE1aUcXGfoufypq+cUP/ANiAKE9X6FJGAAAAAElFTkSuQmCC\",\"width\":150,\"height\":150,\"src\":\"/static/58b931182e11ac1ff9122cca63028677/4148e/exp.png\",\"srcSet\":\"/static/58b931182e11ac1ff9122cca63028677/4148e/exp.png 1x,\\n/static/58b931182e11ac1ff9122cca63028677/de03e/exp.png 1.5x,\\n/static/58b931182e11ac1ff9122cca63028677/1e9e2/exp.png 2x\"}}}},\"fields\":{\"slug\":\"pair-sum-square\"}}},{\"node\":{\"id\":\"842020e9-905a-581a-9781-636fb55238a3\",\"frontmatter\":{\"title\":\"角格点三角形\",\"date\":\"Mon, 25th November 2019\",\"tags\":[\"geometry\",\"triangle\",\"combination\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABsklEQVQ4y5VUTVPCMBDt//8DnvTgcPGsjlw4ISOKMgjj8OUHQmmbUGihBfv9ZMMUUkDAzHSy2SRv39vdRsEJI0mSLXu1ZsZmL52VY0DyBRm4XHlD7XUo7DhOjgP+BeQ6Lkr1Es5vLvDSrK4ApX3lVFa+70PXdZhjE/XPuvje+12hPsEehofkjcdjaJoGz/PEmhtczLZlw3GczB1lH1g65vM5hsMhbNte+6bTKUbmSNiz2QyTyWQbkIwsaBRF4JzDMAxhy4GIaeqL41ikIVNlmmkjHcRGVdW1FPkwsSP5so8xhjAM1z4l7alo6eOcwbKsnYpTQM8Ll/IXO2pIMkmXAIHHJxVnV5e4fbgWDOmQaZriY4wvWXE0mwNUKn0KnWFIeZZZC8DvvolGu4FirYhGqwFd0wVT13Uz6fC8H5EOWQXtG7qxAZSrmhZksVhIDJlgTb70KK2pYIEfiB4caAP4nr/pQwKlSDKb1B8EgcgRVZ3ACYhkWrYFpjN01A4K9QLcuZMFlHtpu7FleRSAJFPejOXrkC/lkbvL4b7cRhyd+OsdCkDjo/eF5+rg+Gvz3wDdXgu/RmTc9i2/lFsAAAAASUVORK5CYII=\",\"width\":150,\"height\":150,\"src\":\"/static/75f5e87b7b3e55eb8bee3f4fd50d6551/4148e/ta3.png\",\"srcSet\":\"/static/75f5e87b7b3e55eb8bee3f4fd50d6551/4148e/ta3.png 1x,\\n/static/75f5e87b7b3e55eb8bee3f4fd50d6551/de03e/ta3.png 1.5x,\\n/static/75f5e87b7b3e55eb8bee3f4fd50d6551/1e9e2/ta3.png 2x\"}}}},\"fields\":{\"slug\":\"angle-grid-triangles\"}}},{\"node\":{\"id\":\"b6ea6d60-edf0-5bfa-9163-e4683b93f737\",\"frontmatter\":{\"title\":\"椭圆内接多边形周长最大值\",\"date\":\"Mon, 25th November 2019\",\"tags\":[\"ellipse\",\"maxima\",\"周长\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMBBQT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB63nzDooC8hbhP//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMRECEi/9oACAEBAAEFArLMi29htFgxncvEXyVBgrHH/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAEx/9oACAEDAQE/ASYf/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8BI//EABkQAAEFAAAAAAAAAAAAAAAAABEAEBIgMf/aAAgBAQAGPwJa4iK//8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERMUEh0f/aAAgBAQABPyH0pODPqKsOrLHY+iVYnpajZRb0w//aAAwDAQACAAMAAAAQyCd8/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEQMRFBYf/aAAgBAwEBPxBqm9GHwsj/xAAYEQACAwAAAAAAAAAAAAAAAAAAARAhQf/aAAgBAgEBPxBMyjY//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARITFBYf/aAAgBAQABPxDAAMWYlleChGwPEgUGvQyAYGLdFPhkUuLYf7Hp2WSip4sAAAAeT//Z\",\"width\":150,\"height\":150,\"src\":\"/static/f973fbcc97a330c2159613422fa613c8/44086/em4.jpg\",\"srcSet\":\"/static/f973fbcc97a330c2159613422fa613c8/44086/em4.jpg 1x,\\n/static/f973fbcc97a330c2159613422fa613c8/1caf6/em4.jpg 1.5x,\\n/static/f973fbcc97a330c2159613422fa613c8/792e8/em4.jpg 2x\"}}}},\"fields\":{\"slug\":\"ellipse-circumference-maxima\"}}},{\"node\":{\"id\":\"1bc93465-00f3-5785-9c59-d0ce96477e2b\",\"frontmatter\":{\"title\":\"计算阶乘的 18 位非零尾数\",\"date\":\"Fri, 22nd November 2019\",\"tags\":[\"factorial\",\"阶乘\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAACAklEQVQoz3WRSXPTQBCF30jyErxonZFGi+NYTiR5pBnLsUmFVOIsDjkkkKKAHKAI3HLixP+vQjZcOND1Vffr6svrbgRGslqyt18nF0/p2VN6+eng5JFfrpk3sAlB10BHR8fYoaOl4Z/Y7yVeENhH+3aaDKaJU0w6CdN8Cj9Ybrz6hqr7kdr46ppWd9HpnStTNvb4xPc77TaYxs2hv8eSFh9rdtClMbombBuW5c8sXlq8chLpJYomCzauvb5vt1zapoz0+ni4P6rvkvpZLZ7V/HO++CJWTzOrVLYo+1k1yGRnlMJmcDloCIvBcRGG4Jz4Ad5cR6eb6fF6pF576jxZ3k5E1eevBnxohr1eMhiY3T38L5zWhPRsHByirJFmyASmBcoSQpDsCOkhW2fFxyp9nE/fien7Kv1QF4/F+Ey4eQW3EkwIVsxYJZmURhAQzyWMEepplMKh6dKrb1lxzsS5Jy5oI45v3Dx3nKGHwgrLMJ6GUXPAcGhGUUwMY2tJ07boOkDQPI00rb7ljyC7KbVy4nPMFakUCgFRIp9BzdG0lYSQWK2gFKTEcomi2UhgUUNJMp8DstyWXNgnxcOv8ux7tv5xuH4pL17k1U+5+ZbFoooLEc/ENuezrWgQZZv5zVIszTLqc+Y740k7CA0eGTzUedwKR+0o0E2imbq+Yye0vzTWfwNmx0VhFXuhxAAAAABJRU5ErkJggg==\",\"width\":150,\"height\":150,\"src\":\"/static/db96e56bc57c7e7bb4b32bb9079425e0/4148e/factail.png\",\"srcSet\":\"/static/db96e56bc57c7e7bb4b32bb9079425e0/4148e/factail.png 1x,\\n/static/db96e56bc57c7e7bb4b32bb9079425e0/de03e/factail.png 1.5x,\\n/static/db96e56bc57c7e7bb4b32bb9079425e0/1e9e2/factail.png 2x\"}}}},\"fields\":{\"slug\":\"factorial-tail\"}}},{\"node\":{\"id\":\"9372312b-3ca7-5bf0-b101-0996318e6f9d\",\"frontmatter\":{\"title\":\"谢尔宾斯基铜钱\",\"date\":\"Thu, 21st November 2019\",\"tags\":[\"coin\",\"fractal\",\"铜钱\",\"分形\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADb0lEQVQ4y3WU20pVURSG13t1E7XDPJQnBMWyElM8pCaC2tZ2ppWaomY3WiCdsegFuuwEgXUTWE/gZUHQRbjW/Pu/sRG8ccFkseYac8wx/sPIBgYGNDw8rNaWFk1OTqq2tVXXJia0fu6cPo6Oar+zU3lfnw6uXtV+e7s+XL+uB44ddkzJMRN+t3ufPNPT08pINj4+rqamJs3fuaNFB/26dUuqq5PKZenSJWlkRBoakk9KMzOSE/6pVDR75ozm5ucj4ZgvqngvozKSbT9+rK9fvki3b0u1tSrOn1fe0KB08aLS+/dK794pucrcFxWNjVJ9fcR++/xZL589U6lU0qCrzGiTyiKZn/zNGxX37yv5UPJ+untXyfux2Oe7o0PFyoryV6/izM+9Pc243YXFRWVgRpvcRrJEe749ucLkyuXDevJEcgfq6qrue8lniM13dqR79zR3+rS6BweVQUBgRpuuIFp59Eg6e1aam5NMinp6pMuXAzu56nhvbUknTyotLUkuCkxnXH0GmxAAZtEmt5PM1Wh9XeKStTVpdVXi8MZG9Z9jEmfdRUEnxvCpL86QBmwGAWDGTyoj2XEP/wxRqqlRMstFW5s0NaUf7jRDZ0gj2HTJgRl7VMZTFGYjVdfBQXXPmEWME0URQGLp/B4bU4Zo0VlIg2AIIIA2eQ6TsfK8umeG1dsrbW9X2d/djTMFwsYBiDZ0RjBsQgCYHU0YmjqSsLs7iImEnz5JV64ov3HDLaN+L0SLzgJwWIQAHtokEevfv+oe0BDjtmE5WS58/7brMryJnXBAiBaWkQZsHvc8fCiZjGTrgWFh2UDs3uysMoxOduyEAyIhe4eygQBaZFEZyUwgMSEbXNPcHPp93t/v4WBhI0o2sBMOCNGiRXwNmxAAZlzkyuK9uSmdOqW0vBxs/715UxVXmzGCmBphPXszrIcDsJZ1RjBsxiVgRptcSjKs9+KFtLCg8okTuuCLM+YZI4ipEUTam2EnCxzRhs4OhwMEgC/QuLJIxnD4/l3TxjCGA7OMxQhiagRmBhk74QBEi86QBmxCQGBG5a6MZG9fv1aDnTZq12VMWoYj84wRxNQITP2NnWKoInTrLLBj6BpvMKNNKiPZiCVTLlvYjG0mLcORkhlBTA2MjjexEw5AtOgMacAmBIAZZ6is7MRLy4v6D73bgcYY8jlVAAAAAElFTkSuQmCC\",\"width\":150,\"height\":150,\"src\":\"/static/d877cdff02c8d74f869c19e406d7a1f0/4148e/xebsj2.png\",\"srcSet\":\"/static/d877cdff02c8d74f869c19e406d7a1f0/4148e/xebsj2.png 1x,\\n/static/d877cdff02c8d74f869c19e406d7a1f0/de03e/xebsj2.png 1.5x,\\n/static/d877cdff02c8d74f869c19e406d7a1f0/1e9e2/xebsj2.png 2x\"}}}},\"fields\":{\"slug\":\"xebsj-coin\"}}},{\"node\":{\"id\":\"8aadf3dc-b6f6-54f8-9fd4-39d615d83035\",\"frontmatter\":{\"title\":\"双心三角形的心迹\",\"date\":\"Sun, 17th November 2019\",\"tags\":[\"双心三角形\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAABYlAAAWJQFJUiTwAAABeUlEQVQ4y41Ta2+CQBD0//+ofmpM09SmNU2saSgGtbEVkePkdbeP7oEFpPgghJDZndvZ3bkR3/4Q9YDR/xwDiMyWyBIaQmDWaWosEBG6yCC5OjhX8Xr2BHqNe5/UElUAOz94HevFZD6+ixJdJdJAZcHKLIVgwvqL0bI52EKhyThL8pVfbmZAhjriWzISWiHUEuKA870oF1AAb/pstf55f8mjb3Bx7JMNNKdWX7U0yboAFAlZlgngz6d56FeZ5Qm5Ldt2wCZaeJP7ehYyOBKOCthlAhK0ZIMnzTTzs9vAhB4wiS4Ey8mSoUCmutJ58h+f0i1G3nHJWciHTaO8Q2Y6a4xCseMj29zNshrQtcqd/rnUvPtgsYyQoTTXZffqm5TjBesVZmG90iMZEMAZ8ZKznQJC7T0c/EfsrkoiUvyWi6GTWH2+9U0iezxd9fAjpqHBWyXKL/MlCs4eNHwlxWqiHwl77dYW7OGjwcmIhAKK5i2hFKQxQv0T5uEvfCslISJl6YQAAAAASUVORK5CYII=\",\"width\":150,\"height\":150,\"src\":\"/static/af81886d23cd38adf342f43773a759e7/4148e/bcl1.png\",\"srcSet\":\"/static/af81886d23cd38adf342f43773a759e7/4148e/bcl1.png 1x,\\n/static/af81886d23cd38adf342f43773a759e7/de03e/bcl1.png 1.5x,\\n/static/af81886d23cd38adf342f43773a759e7/1e9e2/bcl1.png 2x\"}}}},\"fields\":{\"slug\":\"round-centroid\"}}},{\"node\":{\"id\":\"6f3f6715-7164-56c0-bd79-011f04f1d4a2\",\"frontmatter\":{\"title\":\"正方形覆盖\",\"date\":\"Sat, 16th November 2019\",\"tags\":[\"square\",\"cover\",\"正方形\",\"覆盖\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHgaJMi2UID/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERECD/2gAIAQEAAQUCIQWPj//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABQQAQAAAAAAAAAAAAAAAAAAADD/2gAIAQEABj8CH//EABoQAAMAAwEAAAAAAAAAAAAAAAABERAhMUH/2gAIAQEAAT8hSIwa02dM4eXH/9oADAMBAAIAAwAAABCfyAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAbEAEAAwEAAwAAAAAAAAAAAAABABEhMRCRof/aAAgBAQABPxA0VqHAtutqCefYlhjjkFNI5MEODBVY1PZzx//Z\",\"width\":150,\"height\":150,\"src\":\"/static/2563bcac0dc6af8f7b779ceb6bcc779f/44086/sc1.jpg\",\"srcSet\":\"/static/2563bcac0dc6af8f7b779ceb6bcc779f/44086/sc1.jpg 1x,\\n/static/2563bcac0dc6af8f7b779ceb6bcc779f/1caf6/sc1.jpg 1.5x,\\n/static/2563bcac0dc6af8f7b779ceb6bcc779f/792e8/sc1.jpg 2x\"}}}},\"fields\":{\"slug\":\"square-cover\"}}},{\"node\":{\"id\":\"9411391a-0b98-596c-8bfb-a0edd0ba8061\",\"frontmatter\":{\"title\":\"关于双十一“作假”的数学分析\",\"date\":\"Wed, 13th November 2019\",\"tags\":[\"statistics\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABn0lEQVQoz31Si3IbIQy8///JtunYaex7YTg4nhutyN04k6TMMICQVruShlIKflrbtiHnjLjvsNZi8x7OObTWvvjSFlPCYIxBkqDWKmqtKOU4y+n4CUDfOH2OkwmXZcHAS84JPhaEmCWgKsDh/Hw/QdKOWrLe+U8VXtg/Ho8OmIQqnbc9d1D8B1B2vv1S0FLbCRhC+AxIyZnUQ/oI/gaQwbtHedxRglXwxgQCyHqvUr7hKLzW6oOF8VlsRZPQXimNwcK9bAZt31C3VRP0hJ0hsQbSVMn8kAhuBpogNc29GfyrbITcswAqOwFUyU8MVTLHIKaMKlmLedNdKUlOP7/BjDfsi9jXf2huVrnKyi0oKfYaCiHisDFDEmM+JEm3+46oclb5S8HDOsnuAux0Q5AkHKhsZ/GJqoZlijF2QD6on4XXIU5Z5yzIMFPCsqzgrE7zgtk4XG8TxtXi9e9vOGkoGfb6uS45COouwVr8WrQZXARnMq4+BU3HifL0P0ipvNU74wlqCHi5XHC/3zGO4497mqan93TaDjvP1+sVf15e8A52nKl0dxG2VgAAAABJRU5ErkJggg==\",\"width\":150,\"height\":150,\"src\":\"/static/41aa15413d7a8efe0efa4b8d70e2a617/4148e/gdp.png\",\"srcSet\":\"/static/41aa15413d7a8efe0efa4b8d70e2a617/4148e/gdp.png 1x,\\n/static/41aa15413d7a8efe0efa4b8d70e2a617/de03e/gdp.png 1.5x,\\n/static/41aa15413d7a8efe0efa4b8d70e2a617/1e9e2/gdp.png 2x\"}}}},\"fields\":{\"slug\":\"sale-rumor\"}}},{\"node\":{\"id\":\"28406967-ab2f-58ec-acf1-58d9f72facc4\",\"frontmatter\":{\"title\":\"随机游走\",\"date\":\"Sat, 9th November 2019\",\"tags\":[\"random\",\"probability\",\"随机\",\"概率\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHu0znNyArC0H//xAAbEAACAgMBAAAAAAAAAAAAAAABAgAxAxEhIv/aAAgBAQABBQInUVvQ7Db8xrREdQQK/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGBAAAgMAAAAAAAAAAAAAAAAAARAAESH/2gAIAQEABj8ChZp6v//EABoQAAIDAQEAAAAAAAAAAAAAAAABESExUZH/2gAIAQEAAT8hjHo2NAeXrOit97jcGqIobUkmB//aAAwDAQACAAMAAAAQs8c8/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHBABAAMAAwEBAAAAAAAAAAAAAQARITFBUWGB/9oACAEBAAE/ECLFVoqJbTaKU5hBsP2WjY89PybdVkcDLr7zsB5TDF2K8U9SlSTR7mkewn//2Q==\",\"width\":150,\"height\":150,\"src\":\"/static/21c38058600a7a0a1e7e4f31a288f543/44086/randwalk.jpg\",\"srcSet\":\"/static/21c38058600a7a0a1e7e4f31a288f543/44086/randwalk.jpg 1x,\\n/static/21c38058600a7a0a1e7e4f31a288f543/1caf6/randwalk.jpg 1.5x,\\n/static/21c38058600a7a0a1e7e4f31a288f543/792e8/randwalk.jpg 2x\"}}}},\"fields\":{\"slug\":\"random-walk\"}}},{\"node\":{\"id\":\"4383953b-40bd-52e8-900c-0debbd7da275\",\"frontmatter\":{\"title\":\"抛硬币出现连续正面的概率计算\",\"date\":\"Mon, 4th November 2019\",\"tags\":[\"coin\",\"probability\",\"Fibonacci\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7tc80aEwpC4V/8QAGhAAAwEAAwAAAAAAAAAAAAAAAAECEQMSE//aAAgBAQABBQJ6XTRx13imO9tLDBSvU//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAECAQE/AWP/xAAaEAACAgMAAAAAAAAAAAAAAAAAARARISIx/9oACAEBAAY/AsGtCZ0Sqbj/xAAbEAADAQEAAwAAAAAAAAAAAAABESEAMRBBYf/aAAgBAQABPyGgj7ueJBl6Ip6kCdG9CCVgAgEMjauBJKvH/9oADAMBAAIAAwAAABCU/wA8/8QAGREAAgMBAAAAAAAAAAAAAAAAAREAECEx/9oACAEDAQE/EAQNMKeRPtf/xAAZEQACAwEAAAAAAAAAAAAAAAAAARAhMUH/2gAIAQIBAT8Qbgsscf/EAB0QAQADAAIDAQAAAAAAAAAAAAEAESExUUFhcZH/2gAIAQEAAT8Q3crw9S7tdA/hOfSwnsyUAAu7NY5lg55ruATBwEVLFPMEJDUfstn/2Q==\",\"width\":150,\"height\":150,\"src\":\"/static/0098653045c9a2aac40cae9de9bd89a5/44086/coin.jpg\",\"srcSet\":\"/static/0098653045c9a2aac40cae9de9bd89a5/44086/coin.jpg 1x,\\n/static/0098653045c9a2aac40cae9de9bd89a5/1caf6/coin.jpg 1.5x,\\n/static/0098653045c9a2aac40cae9de9bd89a5/792e8/coin.jpg 2x\"}}}},\"fields\":{\"slug\":\"coin-toising\"}}},{\"node\":{\"id\":\"8dc2fbf4-f4e2-5dd7-80aa-e83526b5d92f\",\"frontmatter\":{\"title\":\"完美和最小差三角形\",\"date\":\"Sun, 3rd November 2019\",\"tags\":[\"combination\",\"difference\",\"triangle\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsSAAALEgHS3X78AAAC1klEQVQ4y41U224SURSd32rUxBc/QJNqo/HRtyY+1KhBEltjYtPGpo2kLzXBhIg0cqcUygwFIcCUAmUYYLg1WKqtWMq1lGG41DUcQ2Nsoudhss5mr31Zex+o4XDo9XqNRuPGxobBYEgkEhcXF5VKxWazWSwWq9VqNpvL5TKM2WwWDrCbTCaXy9XpdCiPxxOPx/EbouDLMAzHcZubm4SA02g07HZ7Pp9H9MFgQNxwhQ+l1+tJKgQGQDyVSrW3twd8UCwclU8ACoXC/Px8s9kETie5cqUG4Ha7f5Mjkci6Ttfv9YCXlpaEdBogGvSFduWiisWiUqkkhay9W07lvgKw7A6FNuTa6nUhlx+InX0uptMbotEIjM1G/bQqJ8kIgkb7KRMOdSrlc0nqiCKMTucWBYUYhu5KUrfV5BcVrge3vDaTanU1Go2SVKlUanllZZuhHY9uR6Ynv4W8vcHQ7/OxLEuRwG6fn36vCt29xk1dD799yWeyLxQKSA1tnz97mhCyccs6O3Ujfu8a/UZBe31JXh4KBfWGg4HcIce7Zmfir2eODuSWarUa9HQ4HNVqFVd4lJwm5+OHuzusfB3JTpEh4bLlckmd89OTn0aTud1uw44JaTQaOdDpid2xJUtTq9I0DdDv9+XMpDHwkQSgK4ooFfISslqtBqhXKxazBfM9b7exHuOloMYoFArxPE+2At+zszMkod3bhYCn02r1hiPxkkm/30/KvsyMI0kSUsViMXRbKpVezc2tG4z2D2vMnQludvowycUTvM1m7Xa7f2QeV97r9TC5QCCwuLDA0DTaYheVscmJnfs3v3z+yAsZbBGhkXNJHheDrSa1tVqtSvlHXr2yMfdk//D72OFqMomKVc3lcmT7A8Gg/J4ymeAI/JucTqfR+Wh7WUEQyGMMh8P/RcaQ8WKhNjGKooiHXa/Xxw5Xk8c/Hx8f63Q6PDr8T2i1Woj/NxPnFw0TpupF9bQcAAAAAElFTkSuQmCC\",\"width\":150,\"height\":150,\"src\":\"/static/50d3b5c7b59fe0aec1745f6906b6caf4/4148e/diftriangle.png\",\"srcSet\":\"/static/50d3b5c7b59fe0aec1745f6906b6caf4/4148e/diftriangle.png 1x\"}}}},\"fields\":{\"slug\":\"difference-triangle\"}}},{\"node\":{\"id\":\"1d55c399-c092-5aa3-96c7-849384ef1b38\",\"frontmatter\":{\"title\":\"两颗砝码称连续整数重量\",\"date\":\"Sat, 2nd November 2019\",\"tags\":[\"combination\",\"algorithm\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7tZxjcUqFwf/xAAZEAEAAgMAAAAAAAAAAAAAAAABABACESH/2gAIAQEAAQUCm7xe0AV//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGBAAAgMAAAAAAAAAAAAAAAAAARAgIXH/2gAIAQEABj8CgddBf//EABwQAQADAAIDAAAAAAAAAAAAAAEAESEQMVGBkf/aAAgBAQABPyFyFn3U+x6yI0lpvebRAXxAn//aAAwDAQACAAMAAAAQLw88/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8QWP/EAB4QAQADAAEFAQAAAAAAAAAAAAEAESFBMVFhcYGR/9oACAEBAAE/EFRdyXhRnT9XC+PxUKsAvZwhPaGBmEa5r6StrzUTBwVFXLL1N4n/2Q==\",\"width\":150,\"height\":150,\"src\":\"/static/24772937fddf1e3a5cca1b6ab069d5d3/44086/scale.jpg\",\"srcSet\":\"/static/24772937fddf1e3a5cca1b6ab069d5d3/44086/scale.jpg 1x,\\n/static/24772937fddf1e3a5cca1b6ab069d5d3/1caf6/scale.jpg 1.5x\"}}}},\"fields\":{\"slug\":\"two-balance-weights\"}}},{\"node\":{\"id\":\"75500c0c-0ca2-5b32-bdc7-418af0dbf66f\",\"frontmatter\":{\"title\":\"圆周率和阶乘的数字握手\",\"date\":\"Fri, 1st November 2019\",\"tags\":[\"阶乘\",\"圆周率\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAEDAP/aAAwDAQACEAMQAAAB7ZutNaRKyvEhA//EABwQAAIBBQEAAAAAAAAAAAAAAAEDAgAEERIyIv/aAAgBAQABBQJqjiaKhbjUT8MYNdKWcAcs6//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAQEBAAAAAAAAAAAAAAAAABABIf/aAAgBAgEBPwHSn//EAB8QAAEDBAMBAAAAAAAAAAAAAAEAAhEQISJhEjFRcf/aAAgBAQAGPwKzYXYQ5GD9UsdbazEnxZOjVJgU/8QAHRAAAgMAAgMAAAAAAAAAAAAAASEAETFBYXGR8P/aAAgBAQABPyF0hpyED24Kv3A6ogtiIFr0aG1ARn5krtg8BkIiAKMeIU//2gAMAwEAAgADAAAAEPgAvP/EABgRAAMBAQAAAAAAAAAAAAAAAAABETEh/9oACAEDAQE/EE1eFFgsP//EABoRAAEFAQAAAAAAAAAAAAAAAAABEBEhMVH/2gAIAQIBAT8QnBfTaN//xAAeEAEAAwEAAQUAAAAAAAAAAAABABEhQTFRYXGB0f/aAAgBAQABPxBwCBa0D7iYO0sfuMXFDCDE41CHEaWH0yXebQ8D1/QpL8G6ig4WywOmpRhLVAXFV8T/2Q==\",\"width\":150,\"height\":150,\"src\":\"/static/4b3a9df345f1b34f923044e3eeec3a72/44086/digitalhand.jpg\",\"srcSet\":\"/static/4b3a9df345f1b34f923044e3eeec3a72/44086/digitalhand.jpg 1x,\\n/static/4b3a9df345f1b34f923044e3eeec3a72/1caf6/digitalhand.jpg 1.5x,\\n/static/4b3a9df345f1b34f923044e3eeec3a72/792e8/digitalhand.jpg 2x\"}}}},\"fields\":{\"slug\":\"factorial-pi\"}}},{\"node\":{\"id\":\"dcd868f5-47cc-53b9-ae3d-ae7ecb1342d9\",\"frontmatter\":{\"title\":\"两两之和互不相等\",\"date\":\"Tue, 29th October 2019\",\"tags\":[\"sum\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABN0lEQVQoz22S646CMBCF+/5vJsQIJLhCEFBW5J5ICDcR9tt2Ja6750dz5nSmPTOtMAzD87xlWYIgKMsSMs/z8oTiWZZZlqVCpVyvV13XhW3bcRyr4jzP/y0m4a24qqrdbifY2O/3XL7dbnHhOM6HBKJaUcgzTdN1XTjr4XBg63w+C06q69r3/XEcHy9Afw37vmdN01T12HXdNE2ibVvOo1ipK5qmIXsN2cXj6XSCMALu50qxbt/vd9pmEpmEpmmkJkmCgj4Mw9s4gFD2YNi43W6ENEMZBKvUKP2tKUQSBO4ZwKdELuFJFEWRSByPxzAM8bX8wS/bURRRXEngnGeHbDYbnMOLJ+DcxLC+bY8SmFyTOIJ58AV4XjyrghWcSCb5P9MmuFwuvISyqsaGeaYKIUxegEIvPMcXRVtl4RXL7C0AAAAASUVORK5CYII=\",\"width\":150,\"height\":150,\"src\":\"/static/58a9ee60ed98f279de9ec1951e8c7803/4148e/ruler.png\",\"srcSet\":\"/static/58a9ee60ed98f279de9ec1951e8c7803/4148e/ruler.png 1x\"}}}},\"fields\":{\"slug\":\"non-equal-sums\"}}},{\"node\":{\"id\":\"98406b88-bd67-5de4-9ee6-210b0dcd248e\",\"frontmatter\":{\"title\":\"超立方体中的最大立方体\",\"date\":\"Mon, 28th October 2019\",\"tags\":[\"bubbles\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAwD/2gAMAwEAAhADEAAAAd7DVX2FIlQO5gP/xAAcEAACAQUBAAAAAAAAAAAAAAABAhIAAwQRITH/2gAIAQEAAQUCfIElO6B5fsOr4rcURFaE39//xAAXEQADAQAAAAAAAAAAAAAAAAABERIg/9oACAEDAQE/AYZx/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIRICH/2gAIAQIBAT8BMBcp/8QAGxAAAgMBAQEAAAAAAAAAAAAAAREAAhAhEjH/2gAIAQEABj8CNWlOWwkD1WGo+xY13P/EABwQAQACAgMBAAAAAAAAAAAAAAEAESFBEDFRYf/aAAgBAQABPyHfIpY3i+M3rUjJkzZ2RaS7Ylba3bwEgBGWomf/2gAMAwEAAgADAAAAEFM4f//EABgRAAMBAQAAAAAAAAAAAAAAAAABERAh/9oACAEDAQE/EElKOXgs/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8Qe6Vk/wD/xAAdEAEAAwACAwEAAAAAAAAAAAABABEhMUFRYZHB/9oACAEBAAE/EKO1GHNe4faV7sIeFgLUdfLUuzkT9jFylHRlN/J7UHke2MxyxQLvbAYUzzP/2Q==\",\"width\":150,\"height\":150,\"src\":\"/static/8516ea2f783c52ae1d6f5c097bf0e1ba/44086/tesseract3.jpg\",\"srcSet\":\"/static/8516ea2f783c52ae1d6f5c097bf0e1ba/44086/tesseract3.jpg 1x,\\n/static/8516ea2f783c52ae1d6f5c097bf0e1ba/1caf6/tesseract3.jpg 1.5x,\\n/static/8516ea2f783c52ae1d6f5c097bf0e1ba/792e8/tesseract3.jpg 2x\"}}}},\"fields\":{\"slug\":\"super-cube\"}}},{\"node\":{\"id\":\"0413458e-458c-581d-9abb-94fc54b0348f\",\"frontmatter\":{\"title\":\"加减乘除产生的表达式计数\",\"date\":\"Sun, 27th October 2019\",\"tags\":[\"algorithm\",\"analytic combination\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAABYlAAAWJQFJUiTwAAACxElEQVQoz4WTTUhUURTHL0gby4V9kNUiF5HQInDXNjASJYSKWrgQMTJloBipyFlYJhJSZuAXmn1IYpSZVgpqIJOF46jZqDPO6KiNItPo2Lznu5/vs/smRyWFHv/Fu/ed/33n/M65AO/4IISpDBddUmAUE8bXO0aBnZ2EIkmATy+iilQUCfKDzM3/m80g/lsFiSu0NkO1JuKVAJZVc3+bHyAI1138hX9mKiYEY4KEZVKXKd88gLiZKZgyImv/+IFsGBhCKIpMValuIN8X/KaAdBaZqjqNrIlim1VotwVfFoZdvUTRMZQ2zZ76SjH0iyqK70Xtss9PHI3sKlALE5hlD7y+L5y7ayE73ns5fvAMmH11lxkGZ4FifvDpRNLApXPuJ6Wtu8HPz92yrkK3HbkH4GRv+NHZQM7eVUdn2GUPfe+HkVXEqCRJTFnPH4Rn3V0pB1sAmHrdpBkGrwCrOtYNzFCwKsuXlwQ5OcOgqoYoW/nWNF+dteQaYLICpTXgKLvdnHLk3cnk/gvp4nKIUN6kNQ4MCyF/aZrj/P614DzhtKlCdMNdk/shM87b/17hpKgM6lIOuzrehgPT7aeO+z+2KWZVZkmU0vnW+xM1Vg5fDC1EJrrhjH3J/myqpVjw9EmeHsHvBGJkVdY0pukQSUgUMHdKEjIFiaozzWyBr/nGj/yEEUvymPXYhC11xHLUee1Qd04yILylEJpNJsSsLSYOljIG10QqK8FJx3CDzdlY4qi/87Uiz9lUMlh9a7ytBqC/o0MoFCJzjx/MFBfN3LPNlZd4y4oXx4ZMThByv6ybx4UHn89Vpi0M93C0TNVAbJgJFAXvw/JRS/5wwZWh3OzerHRPX5eJIJoXT4EwxdNQ2JER5+lpYarB47fMNiEsmi2XHBXvB9qYR4QIZcLvcHB6nKe57WLwwE1aUcXGfoufypq+cUP/ANiAKE9X6FJGAAAAAElFTkSuQmCC\",\"width\":150,\"height\":150,\"src\":\"/static/58b931182e11ac1ff9122cca63028677/4148e/exp.png\",\"srcSet\":\"/static/58b931182e11ac1ff9122cca63028677/4148e/exp.png 1x,\\n/static/58b931182e11ac1ff9122cca63028677/de03e/exp.png 1.5x,\\n/static/58b931182e11ac1ff9122cca63028677/1e9e2/exp.png 2x\"}}}},\"fields\":{\"slug\":\"count-expressions\"}}},{\"node\":{\"id\":\"bc6c0854-17ed-5f10-be80-ac3bb65ed1c1\",\"frontmatter\":{\"title\":\"马踏棋盘计数\",\"date\":\"Sat, 26th October 2019\",\"tags\":[\"bubbles\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDAv/EABgBAAIDAAAAAAAAAAAAAAAAAAEDAAIF/9oADAMBAAIQAxAAAAHWRnt3QwQCdi4//8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECERIQMf/aAAgBAQABBQK2WyDdch5hmGRTR//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwFGJH//xAAWEAEBAQAAAAAAAAAAAAAAAAAxADD/2gAIAQEABj8CZw//xAAeEAACAQQDAQAAAAAAAAAAAAAAATERIXGREFFhgf/aAAgBAQABPyF1Hds9GyoXc9jn7xNkddwYxK1Y/9oADAMBAAIAAwAAABBv6EP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QVq1//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EFZOWIMv/8QAIBAAAgEEAQUAAAAAAAAAAAAAAAFhESExQdFRcZHw8f/aAAgBAQABPxCVL2Ptx6s+TdEZ+4Z6kIyjN7fBN5vgaCq9bOFB/9k=\",\"width\":150,\"height\":150,\"src\":\"/static/3ac1e91c4a0e0a6041ac657c16aa9676/44086/chess.jpg\",\"srcSet\":\"/static/3ac1e91c4a0e0a6041ac657c16aa9676/44086/chess.jpg 1x,\\n/static/3ac1e91c4a0e0a6041ac657c16aa9676/1caf6/chess.jpg 1.5x,\\n/static/3ac1e91c4a0e0a6041ac657c16aa9676/792e8/chess.jpg 2x\"}}}},\"fields\":{\"slug\":\"knight-tour\"}}},{\"node\":{\"id\":\"b3f07c94-da06-57d4-b5f4-a5bc2af08a25\",\"frontmatter\":{\"title\":\"三坐标反演\",\"date\":\"Fri, 25th October 2019\",\"tags\":[\"geometry\",\"transformation\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB20lEQVQ4y5VSa4/aMBDM//9VVaXTifZaWrgHIZAXJDlCTOASO37F27XTy3EUPnRlWbI9s+OdXY9UUBEoK7gIKSHdwHIFdX35hPhdCYSAd6hhG7b+7JULzrsxWMfV/CGdfI32RHM8uuAYQgTPZbSo6yN4LlfP2hO+CSH6vjfG4K57HUdBuF5IJXsb9lJKiTDanoxRSPOMsWyllBBSa62UNEbjzW63w+RN2+Z5PghobQHSBZ6R6I2VYEqUFMKUe03KZhNFGs8GsjTZJnWea0pRxzDGzCAIZ2TMKgRD/x6fYHIX0brSslOc8rfj/ZdVsAZ8wl9LqUaKd24jY1zrvmNtWWaMweMvMvuxR/CBvFKKdYKThXfhz2T8ptZdnCSMUcH76mCOb+gTGsGjKJGSIuAc/0EmxGDrlk/V9H6SFbldYbCa+8+LzA/yl5/ff3/L4hQ2G+P8+mxYlkG4xmWalqEaeiWFCEPh+6YoUL0rChPHsM3gL/ni20Ng23AWBguV0m7acALEv0jvrGC7elcUku2cODKOB2PdCBjdgqvKgya2XbvARPiXq7Dr5EEcx1jYeeS3MDfJtu20aZuTs+b/yJZQbmuSE6nhFv8KebAE/Z5OYTaHJP64fAfYwzJ9+QPyjtyopQ0oQgAAAABJRU5ErkJggg==\",\"width\":150,\"height\":150,\"src\":\"/static/a9846506a0efd65b1fdaa9fe7e8d47e1/4148e/fix.png\",\"srcSet\":\"/static/a9846506a0efd65b1fdaa9fe7e8d47e1/4148e/fix.png 1x,\\n/static/a9846506a0efd65b1fdaa9fe7e8d47e1/de03e/fix.png 1.5x,\\n/static/a9846506a0efd65b1fdaa9fe7e8d47e1/1e9e2/fix.png 2x\"}}}},\"fields\":{\"slug\":\"three-coord-trans\"}}},{\"node\":{\"id\":\"01eb5f3d-a392-5c35-b92a-a84a277cf37d\",\"frontmatter\":{\"title\":\"棋子游戏\",\"date\":\"Thu, 24th October 2019\",\"tags\":[\"game\",\"chess\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EABcBAQEBAQAAAAAAAAAAAAAAAAMCAAT/2gAMAwEAAhADEAAAAdMoVZJqiRqyHK9gs//EAB4QAAEEAQUAAAAAAAAAAAAAAAECAwQxABEhIjJB/9oACAEBAAEFAqU8eDehR7IOyOouRgr/xAAaEQACAgMAAAAAAAAAAAAAAAABAgAQESEx/9oACAEDAQE/AQuSIV3E6K//xAAaEQACAgMAAAAAAAAAAAAAAAABAgAQESEx/9oACAECAQE/AQ+2gcYg61f/xAAYEAADAQEAAAAAAAAAAAAAAAAAARACcf/aAAgBAQAGPwKKIUzwR//EABwQAAICAgMAAAAAAAAAAAAAAAABESExYRBxof/aAAgBAQABPyGFSiJ9kyY8noq7uxoLJ1wPEf/aAAwDAQACAAMAAAAQfP8Avf/EABgRAQADAQAAAAAAAAAAAAAAAAABETGx/9oACAEDAQE/EC5rU606/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEQgbH/2gAIAQIBAT8QqBQzNH//xAAcEAEBAAMAAwEAAAAAAAAAAAABEQAhMUFhoXH/2gAIAQEAAT8QFeAC795ERRRBmv3FTLI5K5mBvOnWuZGV5dmA5Ybr4p+58jP/2Q==\",\"width\":150,\"height\":150,\"src\":\"/static/c0da529687534f193702299682509ec7/44086/piece.jpg\",\"srcSet\":\"/static/c0da529687534f193702299682509ec7/44086/piece.jpg 1x,\\n/static/c0da529687534f193702299682509ec7/1caf6/piece.jpg 1.5x\"}}}},\"fields\":{\"slug\":\"game-chess-rows\"}}},{\"node\":{\"id\":\"f0a56708-96de-5d5d-a714-42b41073610f\",\"frontmatter\":{\"title\":\"激情碰撞中的圆周率\",\"date\":\"Wed, 23rd October 2019\",\"tags\":[\"bubbles\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGnL0FQ0k//xAAaEAADAAMBAAAAAAAAAAAAAAABAgMABBES/9oACAEBAAEFAtpqBdPpIfuWmtAk/Nc//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQIBAT8BV//EAB4QAAEDBAMAAAAAAAAAAAAAAAEAAhEDEiExECJB/9oACAEBAAY/Agbi3tGPU5zqjiZIglaKEibchXtpQTszx//EABwQAQACAgMBAAAAAAAAAAAAAAEAESFBEDFRsf/aAAgBAQABPyHUiHgytFfTINtLXUUHaousw0K3Jx//2gAMAwEAAgADAAAAEOPP/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERUf/aAAgBAwEBPxBU6//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAgEBPxBNP//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExQRCBof/aAAgBAQABPxAuSkNT6NTAApFhBOC25ppU255FsC7h044AEFgu4devH//Z\",\"width\":150,\"height\":150,\"src\":\"/static/d61dbd8e6b632ae7d623055020efbb9b/44086/pi.jpg\",\"srcSet\":\"/static/d61dbd8e6b632ae7d623055020efbb9b/44086/pi.jpg 1x,\\n/static/d61dbd8e6b632ae7d623055020efbb9b/1caf6/pi.jpg 1.5x,\\n/static/d61dbd8e6b632ae7d623055020efbb9b/792e8/pi.jpg 2x\"}}}},\"fields\":{\"slug\":\"two-ball-colliding\"}}},{\"node\":{\"id\":\"0ec731c9-8090-5315-b7b4-5c9d4d620b09\",\"frontmatter\":{\"title\":\"寻觅CSDN Number\",\"date\":\"Tue, 22nd October 2019\",\"tags\":[\"bash\",\"CSDN Number\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAABYlAAAWJQFJUiTwAAACxklEQVQ4y2P4TwFgwCr679+/P3/+kKb579+/v3//AeqEG0FYM8QeZKUXzl9qbZ3w8u17/EYwIFty9879tqY+A20nFkYpBgbuycs3AgXxuB+k+c2bN6tWbPR0DZcW09HXcrAw8hQV1GFg4LOJLnj1++//f3///PkLtwPoL7hxDPNmL5YW0mdg4HW297918x5Ezdu3b9xt/bnlLBZfuQsKC6C//v5FCVEwYpjUP4uBgd3NPuTnzx9A0Vs3b3/79u3UqXNGmo7MzAqz9xx//+7t7dt3oWFx7nJUaFptVftPcMAynD55noFBaNmSdUC5WTMWCnOrmeq7c3OJMTLyAJ2zccverVt28XEqT544G6hgzepNDAwMluau33/9+v77N8PrV2/EhXWOHzsNlEtLzQfKyUgZzJi6YNnS1Voq1ocPHQeayMDAw8Qg6ekSmZZczMAgEu6f8O3vn/fffoACzMLYfdGClWA33ykrqd+z+yCQ/erVaz0N+3v37udnVzEwiPFxKDMwSPBxqAHZKTE5X/7+ffHpC0hzSmK+rpbD16/fIOkEEiJRUVlSorr//v72cg4Daqiv7nSxDwHaz8AgUJpf//H/vwdvP4I0L5i3Ahir1uZeSxatPnLoxMqlq93tgxgYWDydQr7/+CYtDYq28+cuAVVOmTKHk02+uqzpw///N1+9BWk+eeIMF4MiG6MEAwMXI4MQA4MUv4Ktmn9Wz+od//782Lhu89qVGz69fw8J8Ns371w9f+HBp6/XX74DJ5LXr1WVrBRU7HxiCgv65k/fe2r7vWen3n558ePHx+/f3vz59eDb96OPnm25fn/J2ZtLLt+bf+lu+Y5TN19/YoD489ad+68/f/mHkbeA8fnx67c3n7+8+frl1Zdvzz5/u//u4803766/fv/t9x8GdOVg8BeM/hGZJf8RoRQ5YQJVAxED9UsSIgEABbewH4c6UGQAAAAASUVORK5CYII=\",\"width\":150,\"height\":150,\"src\":\"/static/f2abc5639484aa16456f6ab5abd17720/4148e/cn.png\",\"srcSet\":\"/static/f2abc5639484aa16456f6ab5abd17720/4148e/cn.png 1x,\\n/static/f2abc5639484aa16456f6ab5abd17720/de03e/cn.png 1.5x\"}}}},\"fields\":{\"slug\":\"csdn-number\"}}},{\"node\":{\"id\":\"43d02301-6bd5-5052-8f4c-6c7fa06a33fa\",\"frontmatter\":{\"title\":\"两瓶毒酒问题\",\"date\":\"Mon, 21st October 2019\",\"tags\":[\"combination\",\"poisoned-wine\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtklEQVQ4y2WUa0yTVxjHO/d9iTG7ZMk+bXGfnJEY3cVl38wyXYwzzs25zQ2JAUHCVFBEN6bYiRhgIwOtl4mCyqVcBbmUa8FSKLZWqJRSKFBoaaGUW0tp+e3lLZctni/nf57znv97nuf/P48kEAiwNLxuNzbdMxFPj1sY7q4T8aihmPGhTlbGyvciXoQFjwv//BSLi8E9ScDvFzddg4M0pKaK2G3vwdxZJOIeZRamp7UituobWDo5NzPFsEknxpxWAxP2vuWf+ZH4FxbEhaqhia/37sU7H8DnMTPeny3Gc2//QkVxJo4JNx/t2YZzahzryCCJKfHifkR4BNIkqYgXBC7Jgi9IqMjOYcd772K1OfGMqxho/Y2ZGTthSVu4khtGaVE+O/e9Q722kiaVms9+3C2eK7iTQqOiVMR+IVvJ0jWF9Jkf6+JpcQrWUQeTQ08wNsuYcA1xNGEnMUmHUCnyGagIp62rikp5Fpeln2Mefr5UcTyzo2s19PuDNzS0KUiI2M+w1c78pI5hTRqz0w5iY44QdvgbFDUl7N7/Ns16BbevSznw8/sMOXpJOB1PeurVtZT9y6LoWtWcO3mGmTkvTruBkd5S5manOJ9wiux/bmDoeUFk4klsEzbqmpWExkcy7hrnXPxZ0tLT/5ty0Aaznim0unoRV1Q8psdkYVGob/2tTFHZqsygA7werzjrVSp0HW0Epj0MaQ1BlVdqKNrGNcjjyrMiHnh2E/eYBpt9gtNREVitVo4c/kG4gZc8eT0O1yxPygox6zQYu3t49LBwLeUVQqezHaMxlKlpJwNtcbit5ciLK3n9zTeQZWbymkTCC0M38pIarJOztEtP0V+STVldAxcuXfqPbZZ9WF1dwvGor3iuV2EyGbHbRpAXFrB+wwayriSzSyDsbGyiPj4Mi7qestB9dCTHExmbwO5de1Zf0SphXl4u2z8Mob1dTZ9ejn1IQ0FBEevWvUJKcjISgVB+S4Z83w7Ugsp3zh+j6mYyV8PiuLzpC3xL5hNqvaqy2dyCTBaOfcxG/9MM3KOtNDS1EhKyhZycHDaHbKWtVUlrXgb9na3I0n6lKP8aD9JvkHIgfO2GKyo7R0Z4lB18bl7vAkthn28ej8cjYB/OwSeCij4809PCekEQcVKou52hgQFULcqXbTNmGyXrr6CfmsqvMzfpoKtPjbKjXIyNPJOJc6+6FpOqCr/PhcNURqe6gztZmS8bu7e3l9AjoSK+m/qt0LK6UXTkkVuZFPTdw2ihTQV4UXsNc8M9ob3do69oMydORLNl6/bllBfXRKmprmHTB5sxGU2kRL1FjzqXlHsxZOR/j9GqIy7jU1qMPWC5QGAkEYuhCn1lJH//mciZs7FCCVwizyphcVEhn3y8Db1Wx6Wj69E1ypDePiaQfofWVM3B6xtp7FUijwsjP/oAE04T6roHtLUU0dz8CIfDGSRcSVmvbSNVGotWoyHh0KtoarL4XRbKmawvcQ8q6Ly2kX59LXVpP6FMPYRFfx9d2UGkF09wPDqCKaHj/49Qp+0UGmUijrEx7mcIr6CrjZqWYsrr7jLmtFBSmSp0okHc5lLclnJMmhwGlMe4/MdFoo7HCL1zRuT5F7zFKy1gRK6xAAAAAElFTkSuQmCC\",\"width\":150,\"height\":150,\"src\":\"/static/77831b9bb9a424fa77970c6d8ac84004/4148e/bottle.png\",\"srcSet\":\"/static/77831b9bb9a424fa77970c6d8ac84004/4148e/bottle.png 1x,\\n/static/77831b9bb9a424fa77970c6d8ac84004/de03e/bottle.png 1.5x,\\n/static/77831b9bb9a424fa77970c6d8ac84004/1e9e2/bottle.png 2x\"}}}},\"fields\":{\"slug\":\"two-poisoned-wine\"}}},{\"node\":{\"id\":\"612008b4-81bd-5467-ba2d-9f68d0cba8fa\",\"frontmatter\":{\"title\":\"均分田地问题\",\"date\":\"Sat, 19th October 2019\",\"tags\":[\"bubbles\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2ElEQVQ4y22VyZLbMAxE9f9/lxxymFNq1qqZsWUttsQV6QeRE2dhlcoUBDQaDZAeTqeTXa9XW5bF1nW1Rc80jrZ+ftr8/m7nx0cL02Rpnu309GTT25tdFXM5n21VHDH3zwDYHysEi5eLWSnH++2mfT3e2bNytqCk+P69BlDdJyVLYumB2pe2d3baZyUmUZWtEBOjWa3OnFhW0bffgMqeOjM57mKQBBKwtRUJ7sBiiW+UHzZiip4BHTybPuK0SzuAS4hHViUs0+yMnTU2+cfLaEFa1kbA9l0/AqQBVZkxVoHnbbNCydgU6OBK5JLATDa+lSgfaVh7hZImCnSYPj6sUq6cKLOLngmWQ8YGA8yA75v/Wjx0o/yyrJJM8syLuizAvm4qoVz1USNhTWi0JXtWwtq6jDT4FL1vkqgnNPkN8+urlxbGs5fjGqHHdHGArpuDoyOyiHWRNA6uspN80XAXoSEthwbbZbE4KTgBLkYxu52RQdsqgP0slm3EvjRWfJjXY4TEfKAcD1ylAeA+CpNYhi+xYcyTxumLVe5z6jN6SEHzhunlxSce/WrYW8nqtIBgRrP6Ql+30Yiup2K9mXq/qR8DZ7avXUJXdSufR++0gzBGAgW4tGNKU3wG9S1K+96USlMWutyYbG1sCCiXoyk+e9j6iAgkaahrS7iJBOXXVaVzOYzK5AYv6eogdNs7ChNKZ4A5HfPkNo4gNoN9G+wkv/22tduGcfGzmb1sNKnt6MVWrpfcRqj6mI3HjZPLcf4ZtfvbxucLDTmCXA5izsik+8vBb57ZAkPN2WcK2HcMvxw6ZeaPESIb5SFDu3VyY8eeoEQMJWvvSfqB4Pr694LdLdL5JjqHH2Bn1JLzLeGz/+eCnZU9MEscHf1u+l0QuF0Wm6Ygo49YcLVxdoO+uU+P89jdwBrCvbE9gWD+CmKwi0Dfn5/t58ODfQg84q/HfXrMppgc7Mf3b/YLe4pnn/5OSaAAAAAASUVORK5CYII=\",\"width\":150,\"height\":150,\"src\":\"/static/621b27dfd8844499270320d2884bfc66/4148e/c44.png\",\"srcSet\":\"/static/621b27dfd8844499270320d2884bfc66/4148e/c44.png 1x,\\n/static/621b27dfd8844499270320d2884bfc66/de03e/c44.png 1.5x,\\n/static/621b27dfd8844499270320d2884bfc66/1e9e2/c44.png 2x\"}}}},\"fields\":{\"slug\":\"two-D-bubbles\"}}},{\"node\":{\"id\":\"077332e7-5d01-5bdf-92d4-5fdd90375d31\",\"frontmatter\":{\"title\":\"二十棵树最优解求解问题\",\"date\":\"Fri, 18th October 2019\",\"tags\":[\"bash\",\"果树问题\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAACr0lEQVQ4y3VUa3OaUBT0//+VTr900mnTTiaJsUkfcdKm2iTyGEERUJDHFUUFtnuJ+CRndLhwzln27FltWIMIIoiAPAPWGYrVCvlyiSxNUSxTiDBBEqVIkxRxkDD/mpM1slb2IMtYE8J1IjSe/vbQvrrCy30btqJA2A4WkwmykC9JEhjPKpQ/j1B+P/KsAPOkzMkaYduwewqe2XsvMToKGnmRYzafYxqGMAaD8mu7LsbeBJEQ8P0A7Ycuuk86LMtFEIkyJ2uqetkrMSRWA4yID1AU/BSIowhT30cwDQjm4eLuDh/OLvDx7Aqfmk2MJz7CYMqcX9YWm74Sg1ECLqlHxGQVKTUSIqYmUzQvbvD5/TnO333B5ddrDIcuZjNR1lQheyVGCSjRq4fr9Rr78fKso3XZwkPrF9qXt7i7+cln6kHNioupyEisLaBMxHG8LQyDEP1+H5Yzwm3rO75d/4DrudB1/WAaeZa9W8DqUIKUOhRcbgKFG9c0DX3DxNg04fDeHFrQNR09pYc5lwAuIYpC7GM0KlFlZNkaJjfZ6bxgNLLgOA436kFMPEQEm5KNNRzCpl063Q5f4LKn2AIejFxdNdNALGYUfgbDMLCirjFBQ8vCigY2yTZhLiQzlbUypF1ORt4C53k5sqqqGwkoBU3sDYblWdpFUzUsOLKs3ZEpdrY5ZmmPXSiauROeI/sctdjcP/7r0tjewahbDaum/YdJOodP8243Tob7gOOph8UyPek7Ady/CrEz72Q0QsCvjMViUepb13MAePw2afJKQ5fsQm721Z8BN5vVsqsF3L9Ko2cUXjKMHLfcsmR+zOpNwDqWghuXgCE9Kc917GqX8hbLOTWz6cex0cciXZ6wOz436mgfW6Gv6vzzfDrJVfmcsrzJsI6lNfL4C/E3zUVtXXX+D2LjBa22ihtRAAAAAElFTkSuQmCC\",\"width\":150,\"height\":150,\"src\":\"/static/a40aa4a55cf29934e9486a3d8f9a43b7/4148e/p20.png\",\"srcSet\":\"/static/a40aa4a55cf29934e9486a3d8f9a43b7/4148e/p20.png 1x,\\n/static/a40aa4a55cf29934e9486a3d8f9a43b7/de03e/p20.png 1.5x,\\n/static/a40aa4a55cf29934e9486a3d8f9a43b7/1e9e2/p20.png 2x\"}}}},\"fields\":{\"slug\":\"orchard-planting-problem\"}}},{\"node\":{\"id\":\"b36e7fe9-5ca6-55bd-a3dc-816346b245fc\",\"frontmatter\":{\"title\":\"从编译OpenCV3 学到的东西\",\"date\":\"Wed, 16th October 2019\",\"tags\":[\"OpenCV\",\"CMake\",\"OpenGL\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEAElEQVQ4y5WUbUxbVRjHb9tkc4kfNMbsix+XLNEYg1+mvM3xMqOwDGh52fo2qLpoZpiZHxRdXLYIbDAGjAEuBmM2Mh0ZA8ckY47YFqWQWVBhZW15q0BR15aBQtvbe/4+5/YF5ksyT/LkOffJPb/zf/7nnisIDzlSqq1CSpVFnidXW1WxvDW52jKTXGXtoRAeetBCOeR5lVUZy5upZnvp3Dgoz9Hzo/8LGMuKRK3K2rWzYZTDwhQZ0ZpF+a8AuHWJvHLHJGA+X7jcW614oXJAEW3f0pxeP4LUU4MgsPxySlXUhg0QvQyAax3GXHoVZeWDXlreT6+7jTQKPo/5q/qHhxzIB6PM3LoHdjvW3rYJEFSp1ZYDabU27GocRfpJc2vc07ST5rgNf4O5uCqd3JY0odsCp1YdmjB+Bk+hc8DygefFSmso+cwonj0+3C6vW0tX1na0yh0Mffce72jds/BgocCcURjlUmrdg0UTcF8P71g5cs6asf24nb3d8iXWxo3X4dU8E+9AcumVG4XF1clFNqFNxWIZMF8KDKtF13WTmFnTLyV99L30YW0Tu3elQILXgIjLwGjTjwmmisHWbZIcWgFzRlkdZo09cOmxfPGVUOD8btb+yVFcuFTJ7vYdZLCrGSa1kNwGkboCfjeBPP+B5tsSUPlkpwxRyfdfezo8VCT+0ZGLkFnNIg4dw5QWmNEAs/vBpgyMFHFlHMSoqzC81Ilb56eDfD6hMHirQJYbNKvLMVgM8lBkM0awSb5ID9FpgOTUg3HQOoyRIg4LY/4Ar89RPCms/aQTQvb9UeBQSSMWTJCmjSKmSxjuloADMW1IwDhEzlypWx+D6kO8fcqHBL/zTQG+jJh/+75BgFocyxPtl15nrs/3seDVV1looBCYjAJiYBaDx2sRLJSCDrRCgGNnFLbw2OMj5sOzfTdPoKbptPROfRt8N4rYalcOAm0vS6u9eSJBw6Q2IgOdOm6NnKku4tcy7vsh4YvOE3K7s5ayd02f3sDWijtBzelrbGlIi8itXKx8ncckexFwbS9FHm9VtgAeY5i+iAhmDXwjKWLWwH82K0l46uiYfMIlDd19OxoceKvlKrzdxYA9P7zUsSci2jRYuZI77z+X9YbvTMaRpfO7LfQVMHxLJ08Q9BUA3XnwN2Y2J06Z7mXujroxaBp7fvF8pb0I295l/KzFai+pcmgRaM46tfFu/3YsLeleza4K2qDTV5fR46vPKI+MlCjif49HKOYouvo7j2zmtaXbusw/e/aYgjbN+Gp//jQteo7XAy3Zm7BY+p//TX9TlvyH2E5xMF483HohcYXCPxY/ERou3MLny5dzZAWB5myB2ldSVgVasxWUFfSs4nU+/gIy9Otdiq3k4gAAAABJRU5ErkJggg==\",\"width\":150,\"height\":150,\"src\":\"/static/aba3e73970a3fc923209ab21b7738b2a/4148e/writing.png\",\"srcSet\":\"/static/aba3e73970a3fc923209ab21b7738b2a/4148e/writing.png 1x,\\n/static/aba3e73970a3fc923209ab21b7738b2a/de03e/writing.png 1.5x,\\n/static/aba3e73970a3fc923209ab21b7738b2a/1e9e2/writing.png 2x\"}}}},\"fields\":{\"slug\":\"things-got-from-opencv3-build\"}}},{\"node\":{\"id\":\"4935c5ff-42b7-5e6e-a97f-59894dc81c5f\",\"frontmatter\":{\"title\":\"自建电子书的云端服务\",\"date\":\"Mon, 9th September 2019\",\"tags\":[\"bash\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEBElEQVQ4y4WUfUxbVRTAXz8YE42JZv4huq0TSgYF2vIx2goyg8bPLcOYGQ1kyZAOY4ZkmmiiLrgsMdPBH2o2MkqhdFDHx/o1BxuFOgIE2LAFCvgFATpKyeofaBW6R+/x3st7T7qQeJKbe9695/zePeeeexiGE5FIxEilUqp7PB7xY0/JxEQHgB3dPb1HuntcxUQnazufSBQHgyt0//Fdu5iEhAQmRuLi4hjOmTGYzBJ+fXj09msGU7Ov29ULN1x9gPXpoeGRQ/z+RYNRin1EMbD4+Hg6X2lrF0DRjY1kU4uls81qA//dJewDG2T4lwLQbrUD3rPej0RSeHur3UF9d3AspsvVy4e3s9PuqG4wmdfGfVMCCAsig/+emJoGbLPeYbOfwd8PEd+ycj3Jl4jpu9VPYbNzcxqj+fKsu38AwuG/CYyNRqMEBIgTopM1shcOh6H3x35obrXMLfr9OsL49PPTEj53j+AwFubmFwgoggdiWZY6E8Ez0QXweoSYAAFHPBOTUNfQeBfrjwp5vOlyaTpsDhoiBqEHQRyMxA738Y8IjEhD82WUd/AFtuz9SgiF7mkEoPOH6zqr8xo1JDBuUAg/2E0QlTseL7xZcgztSc1Aicmp6J3j5bAcCOgE4LXrXTqrIwYIW4FEJ7K6ugpffHkO5KockCmUoNTmo30KJSp99wSsBIPaWKBzeyAJk0hPnxvyX3wFEuWpkJajgfQDOlDkatHetExUgoHB5eX/B/KwhUU/pOVqICkjC7ILnofU7DwKjQEGHwRuEzKft5+847Bnfzq8dew4NFu+hxQcMndKAbiyFYgv5dntLoXlTjg+6aM5M1uugP5kFTyToQZFjhaRgddRSZkeAoGl/y7lZo8rr+2qjZbN1mJmWfo6wItrbV+6Cj4+XQ23BgahoOhVJFdlg7KwAD2domBLyysg/NefeQKQPJ9Gc8vPvplf+MKOknBJTZJTE2BSZhYcPvo2qqs3ogMvF4G6sjCalJ8VycjNh9pvv/sN2z1MYROTPvr03G638pKxcczZdQPuhULC0+NCpjV39qvzUPnRJ+jJ9P2sXJcDR46WwoV6g2dmakpNGFetVspifv19lm8OUnOrpeqioSE0NHIb/llbo+8WXwrCN0tqbgOXDXrupdfhs+qzfwwMDZ4iPsR3ZHR0E5Ysl9O5yWSS0G6B5c7I8O56Y1MD7o2wiNuXb3omKkvLjGZqC+C9qg+h02Y3QnR9N5+ysbExCtsrk20uqNXqzVmlEn9dUxvHG9ps9sJLxqbBppZWqPjgFHxzoW5ocX7+oNAHHU7pG8XFsQ12q4jFYrIpOqHXSypOVkm5NEjaOzqLvF5PEdHJ2plz5yW1NTVivttLJEJvZv4FXjOCw/Nbtr4AAAAASUVORK5CYII=\",\"width\":150,\"height\":150,\"src\":\"/static/9edd39982ea3b809c0dd94493ebf737c/4148e/bash.png\",\"srcSet\":\"/static/9edd39982ea3b809c0dd94493ebf737c/4148e/bash.png 1x\"}}}},\"fields\":{\"slug\":\"calibre\"}}},{\"node\":{\"id\":\"3f44de1f-926a-56fb-aef8-b8087895e823\",\"frontmatter\":{\"title\":\"测试KaTeX数学公式\",\"date\":\"Tue, 6th August 2019\",\"tags\":[\"javascript\",\"es6\"],\"thumbnail\":{\"childImageSharp\":{\"fixed\":{\"base64\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAE/ElEQVQ4y02VaVBTVxTHH5CQBMISkK2YAAHCFpBFQPYtrGpQlJ0SAhiUsoRdkIKERZCiCIi0YxVcQDsg7QAOHaafmOmMtv1Wvzid6Tcdp9OZ1k827+WenvssKW/mzL15OeeXc/73nBuGwUckFjPOLs7Mf3s75tBjJxC6O0qlQXI/RcjS0pLn4e9+3N+3+n73bJN5srrKMFInqdUBAw8cBEKRqF4skexJnZzeydzciLe3N6jVEX9+1ty8//PLl0bCET6D59tbto8fPOSDVu7dY5j8Ag3/wcXVhYcJ7e1TEPQKQSBzdwMvby+Qy4+CUhkAwUGBEBqiAkNjI+zu7Lz5YW+vgsZ8eeeOzZPHq/+n7ipz5WESB4cKzBgwIwoyKxRyNjBQaUEIpw4P52Kjj5HE+OO4DzNfNFyAvd1dWHv0yMRDFxdtnm9tM4zMTcbDnF1cMnEPXl40IzkbEOAPSn9/mhV3LFINCIKkxAQ2PTUFNNlZkJWRzo2NjHDrT5/C4sKCkTIWbt36KBmCxAj6jZYWqFSyQYGBEKmOgDNaLdfe2gq6mprfU5OTfs3T5EBeroY7VVQIp08WwYWGesvszAxMT06SqYmJCGvJCrm8BUuj+pjDQkMwk0To6+7mFufnYfbGjZ/evXkro34nCwuenS85C6XnSrjKsjKor9PB5wMD5onRURjsH3hoBYaoVPuRajVER0Vy8XGxxNjaahk3mWCgr+99a3Oz4sBPX1stqCwve63X1UKjXs9damoiHW3tli6jEbCSP9paWtwZFNsrOirqr4TjcYBGSoqLSW9XF9vT1UWd7lLQ0JVBYVVFuZDuLzQ0dFMZ2lta2J7OTkKhCLcYGhugoa4unUFIBIoNaSnJkJmeTj6tqoKmxka2uakJGvT6Jgqpr6uz6zJ22NK9sa0tB+Wg2VtGhoZIvU4H5aXn2drqarqWMXhqx7IzMwAFJ6gRwZIAs2Fra6qhoqxUTyFV5WV2Vy5f5oGD/f1ppuFhuDY2RiYnJgjqSQ+IPXf2DF0rmfzcXEVRQcGHM9rTgIKTs8VaUnz6FO+gPXXyGoXgjwnwNAV0Pzk+rpu7eROWbi+yw4ODJCsjg+TmZHO0A3KyMjUMtoEAQa9qKisA0+YK8/MI9hk6aKjD67raKj6zuNgYHojg7x8sL8PD5WUWk6CNTrClIDkx8W+U7ih/ethnM5cMBkCBzfm5GtrAkJJ0gk1LToYTCfHzB6f8aGWlY3N9Hb5ZW7OgJCQyIhziYqLZuJgY2iHb1ra5aDAosT0+9Pf20ma2UEc6ZuhkiY2JhhBV8Gpne/sclglXh4YgV6MhOAAQFhpKQlUqjs63Kjg4i4dd7unhx6Wvu8c4c/06bRWcFH5+ceyCCE6NRRUcRINBGRBAPvHxIT4+PuDn50dwRP9BA19f3zuU4adQ2DLzs7PMmGnUhr7A8ZlFbSA/Lw+kUqkZR9GCwQTHkj3icYQa8fD0IHSP48rR2XeVyXYOKnVzd+c5zPTUlLX8B/eXO+7f/dqclpYKNna2IJaILQ6Ojiw1vI04scQBRBIJiMTUxLcP4mQy2UcY9hS/foHQxysr/MtfXrxQba5vfKXVFr/1xItVhBCBvQhNTNf3aFt2QlHGAczJ2ZmP8/DEC31meppZmJvjv+jt7ma+3diwXusA4GoymdIV/gHVCNAJReJ8tKOHbnhbiaMjD8MK+L+RfwFZRw5pJhwpUAAAAABJRU5ErkJggg==\",\"width\":150,\"height\":150,\"src\":\"/static/9d9dd7f6cf3b89757f9b4e17227ee5a5/4148e/json.png\",\"srcSet\":\"/static/9d9dd7f6cf3b89757f9b4e17227ee5a5/4148e/json.png 1x\"}}}},\"fields\":{\"slug\":\"var-let-const\"}}}]}}}");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userLinks */ "./src/components/userLinks.js");
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/siteConfig */ "./data/siteConfig.js");
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteConfig__WEBPACK_IMPORTED_MODULE_2__);
const Footer=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userLinks__WEBPACK_IMPORTED_MODULE_1__["default"],{link:_data_siteConfig__WEBPACK_IMPORTED_MODULE_2___default.a.userLinks}));};/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3286404121_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/3286404121.json */ "./public/static/d/3286404121.json");
var _public_static_d_3286404121_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/3286404121.json */ "./public/static/d/3286404121.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header.module.scss */ "./src/components/modules/header.module.scss");
/* harmony import */ var _modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
// import  'bulma/bulma.sass'
const Header=()=>{const data=_public_static_d_3286404121_json__WEBPACK_IMPORTED_MODULE_0__.data;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.list},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/",className:_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,activeClassName:_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active_nav_list},data.site.siteMetadata.author)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/blog",activeClassName:_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active_nav_list},"Blog")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/contact",activeClassName:_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active_nav_list},"Contact")))));};/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _modules_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/layout.module.scss */ "./src/components/modules/layout.module.scss");
/* harmony import */ var _modules_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
const Layout=props=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_modules_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_modules_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.content},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"],null),props.children),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"],null));};/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/modules/contact.module.scss":
/*!****************************************************!*\
  !*** ./src/components/modules/contact.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"link": "contact-module--link--2Ghja"
};

/***/ }),

/***/ "./src/components/modules/footer.module.scss":
/*!***************************************************!*\
  !*** ./src/components/modules/footer.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"link": "footer-module--link--2w0EQ"
};

/***/ }),

/***/ "./src/components/modules/header.module.scss":
/*!***************************************************!*\
  !*** ./src/components/modules/header.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"list": "header-module--list--1S__b",
	"container": "header-module--container--ifUmN",
	"title": "header-module--title--2aM8x",
	"active_nav_list": "header-module--active_nav_list--1uPET"
};

/***/ }),

/***/ "./src/components/modules/layout.module.scss":
/*!***************************************************!*\
  !*** ./src/components/modules/layout.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "layout-module--container--26_Ba",
	"content": "layout-module--content--3kVPf",
	"link": "layout-module--link--2ZS9I"
};

/***/ }),

/***/ "./src/components/modules/post.scss":
/*!******************************************!*\
  !*** ./src/components/modules/post.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/modules/posts.scss":
/*!*******************************************!*\
  !*** ./src/components/modules/posts.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/userLinks.js":
/*!*************************************!*\
  !*** ./src/components/userLinks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer.module.scss */ "./src/components/modules/footer.module.scss");
/* harmony import */ var _modules_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
const UserLink=props=>{function capitalize(string){return string.charAt(0).toUpperCase()+string.slice(1);}const[github]=props.link;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:`https://github.com/${github.username}`,target:"_blank",rel:"noopener noreferrer",className:_modules_footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,capitalize(github.label))));};/* harmony default export */ __webpack_exports__["default"] = (UserLink);

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
const NotFound=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a,{title:`Page Not Found`}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Page Not Found"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],{to:"/"},"Go to Home"))));};/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3564016937_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/3564016937.json */ "./public/static/d/3564016937.json");
var _public_static_d_3564016937_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/3564016937.json */ "./public/static/d/3564016937.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/siteConfig */ "./data/siteConfig.js");
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteConfig__WEBPACK_IMPORTED_MODULE_5__);
const Aboutpage=()=>{const query="3564016937";return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"],null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a,{title:`Me - ${_data_siteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.userName}`}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"About me"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Hi ! I am ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong",null,"Aman Kumar")," a Web enthusiast and Junior year student at IIT Patna. I like to spend my leisure time working on web projects."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"I started this website as a place to document everything i learned during development throughout internet. I write about stuff in very short and crisp manner."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",{id:"around-the-web"},"Around the web"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"],{query:query,render:({site:{siteMetadata:{githubUsername:github,twitterUsername:twitter,linkedInUsername:linkedin}}})=>{return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Github: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://github.com/${github}`},github)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Twitter: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://twitter.com/${twitter}`},twitter)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"LinkedIn: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://linkedin.com/in/${linkedin}`},linkedin)));},data:_public_static_d_3564016937_json__WEBPACK_IMPORTED_MODULE_0__})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",{id:"currently-using"},"Currently Using"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Computer: Dell Inspiron 5557"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Hosting: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://netlify.com`},"Netlify")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Editor: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://visualstudio.com`},"Visual Studio Code")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Static Site Generator: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://gatsbyjs.org`},"The Great GatsbyJs")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Syntax Highlighting: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://prismjs.com`},"PrismJs")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Code syntax theme: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://taniarascia.github.io/new-moon`},"New Moon")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Website theme: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:`https://taniarascia.com`},"Tania Rascia")))));};/* harmony default export */ __webpack_exports__["default"] = (Aboutpage);

/***/ }),

/***/ "./src/pages/blog.js":
/*!***************************!*\
  !*** ./src/pages/blog.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3945922824_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/3945922824.json */ "./public/static/d/3945922824.json");
var _public_static_d_3945922824_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/3945922824.json */ "./public/static/d/3945922824.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_modules_posts_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/posts.scss */ "./src/components/modules/posts.scss");
/* harmony import */ var _components_modules_posts_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_modules_posts_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/siteConfig */ "./data/siteConfig.js");
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_siteConfig__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! katex/dist/katex.min.css */ "./node_modules/katex/dist/katex.min.css");
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_8__);
const BlogPage=()=>{const data=_public_static_d_3945922824_json__WEBPACK_IMPORTED_MODULE_0__.data;const{edges}=data.allMarkdownRemark;// console.log(edges)
return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a,{title:`Articles - ${_data_siteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.userName}`}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",null,"Articles"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:`posts`},edges.map(({node})=>{const{id,frontmatter,fields}=node;const{title,date,thumbnail}=frontmatter;const{slug}=fields;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{className:`post`,key:id},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{to:`/blog/${slug}`,className:`content_wrapper`},thumbnail?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_6___default.a,{fixed:thumbnail.childImageSharp.fixed}):null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:`content`},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,title),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:`date`},date)))));}))));};/* harmony default export */ __webpack_exports__["default"] = (BlogPage);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1903528381_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1903528381.json */ "./public/static/d/1903528381.json");
var _public_static_d_1903528381_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1903528381.json */ "./public/static/d/1903528381.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/contact.module.scss */ "./src/components/modules/contact.module.scss");
/* harmony import */ var _components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/siteConfig */ "./data/siteConfig.js");
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteConfig__WEBPACK_IMPORTED_MODULE_5__);
const Contact=()=>{const data=_public_static_d_1903528381_json__WEBPACK_IMPORTED_MODULE_0__.data;const{Email,githubUsername,twitterUsername,linkedInUsername}=data.site.siteMetadata;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a,{title:`Contact - ${_data_siteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.userName}`}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2",{className:_components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title},"Stay in touch"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"I write about stuff related to Javascript, React, PHP, Flask and Various useful Api."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:_components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle},"You can contact me via email or find me around the web."),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",{className:_components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.list},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Email: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:_components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,href:`mailto:${data.site.siteMetadata.Email}`},Email)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",null,"Github: ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:_components_modules_contact_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,href:`https://github.com/${githubUsername}`},githubUsername)))));};/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/siteConfig */ "./data/siteConfig.js");
/* harmony import */ var _data_siteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_siteConfig__WEBPACK_IMPORTED_MODULE_4__);
const Indexpage=()=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a,{title:_data_siteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"\u6570\u5B66\u7814\u53D1\u8BBA\u575B"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"\u672C\u7F51\u7AD9\u4E3B\u8981\u662F\u641C\u96C6",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://bbs.emath.ac.cn/forum.php"},"\u6570\u5B66\u7814\u53D1\u8BBA\u575B"),"\u4E0A\u7684\u7CBE\u534E\u5E16\u5B50. ")));};/* harmony default export */ __webpack_exports__["default"] = (Indexpage);

/***/ }),

/***/ "./src/pages/test.js":
/*!***************************!*\
  !*** ./src/pages/test.js ***!
  \***************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);
const Test=({data})=>{const{edges}=data.allFile;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"This is a test Page"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,edges.map(edge=>{const{id,childImageSharp}=edge.node;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a,{fixed:childImageSharp.fixed,key:id});}))));};const query="3277172029";/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/styles/page.scss":
/*!******************************!*\
  !*** ./src/styles/page.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/templates/img-template.js":
/*!***************************************!*\
  !*** ./src/templates/img-template.js ***!
  \***************************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_1__);
const Imgdata=({data})=>{const{childImageSharp}=data.allFile.edges[0].node;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_1___default.a,{fixed:childImageSharp.fixed});};const query="3475859291";/* harmony default export */ __webpack_exports__["default"] = (Imgdata);

/***/ }),

/***/ "./src/templates/img.js":
/*!******************************!*\
  !*** ./src/templates/img.js ***!
  \******************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_4__);
const Test=({data})=>{const{edges}=data.allFile;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"This is a test Page"),edges.map(edge=>{const{id,fields,childImageSharp}=edge.node;const{slug}=fields;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],{to:`/gallery/${slug}/${id}`,key:id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_4___default.a,{fixed:childImageSharp.fixed}));}));};const query="2605436615";/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./src/templates/page.js":
/*!*******************************!*\
  !*** ./src/templates/page.js ***!
  \*******************************/
/*! exports provided: query, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_modules_post_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/post.scss */ "./src/components/modules/post.scss");
/* harmony import */ var _components_modules_post_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_modules_post_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/page.scss */ "./src/styles/page.scss");
/* harmony import */ var _styles_page_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_page_scss__WEBPACK_IMPORTED_MODULE_6__);
const query="1497301896";const Blog=props=>{const{frontmatter,html,fields}=props.data.markdownRemark;const{title,date,tags,thumbnail}=frontmatter;const{slug}=fields;const gitlink="https://github.com/emathgroup/selectedTopics/blob/master/content/posts/";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a,{title:title}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"head_container"},thumbnail?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{fixed:thumbnail.childImageSharp.fixed}):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:`head_wrapper`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:`head_title`},title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:`date`},date),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"gitlink"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:`${gitlink}/${slug}.md`},"Edit on Github")),tags.map((tag,index)=>{return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{className:`link`,to:`/tags/${tag}`,key:index},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:`tag`},tag));})))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:html}}));};/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./src/templates/tags.js":
/*!*******************************!*\
  !*** ./src/templates/tags.js ***!
  \*******************************/
/*! exports provided: default, query, frontmatterfragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontmatterfragment", function() { return frontmatterfragment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_modules_posts_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/posts.scss */ "./src/components/modules/posts.scss");
/* harmony import */ var _components_modules_posts_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_modules_posts_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_5__);
const tagPage=({data,pageContext})=>{const{tag}=pageContext;const{edges,totalCount}=data.allMarkdownRemark;const tagHeader=`Post${totalCount===1?"":"s"} tagged with `;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:tagHeader}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:`title`},tagHeader,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u",null,`${tag}`)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:`posts`},edges.map(({node})=>{const{frontmatter,fields,id}=node;const{title,date,thumbnail}=frontmatter;const{slug}=fields;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:id,className:`post`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["Link"],{className:`content_wrapper`,to:`/blog/${slug}`},thumbnail?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{fixed:thumbnail.childImageSharp.fixed}):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:`content`},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:`date`},date)))));})));};/* harmony default export */ __webpack_exports__["default"] = (tagPage);const query="3102558679";const frontmatterfragment="379664870";

/***/ }),

/***/ "./src/utils/typography.js":
/*!*********************************!*\
  !*** ./src/utils/typography.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typography */ "./node_modules/typography/dist/index.js");
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typography__WEBPACK_IMPORTED_MODULE_0__);
const typography=new typography__WEBPACK_IMPORTED_MODULE_0___default.a({baseFontSize:'16px',headerFontFamily:['Helvetica Neue','Segoe UI','Helvetica','Arial','sans-serif'],bodyFontFamily:['Helvetica Neue','Segoe UI','Helvetica','Arial','sans-serif']});/* harmony default export */ __webpack_exports__["default"] = (typography);

/***/ }),

/***/ "@reach/router":
/*!***************************************************************************************************!*\
  !*** external "/home/travis/build/emathgroup/selectedTopics/node_modules/@reach/router/index.js" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!****************************************************************************************************************!*\
  !*** external "/home/travis/build/emathgroup/selectedTopics/node_modules/core-js/modules/web.dom.iterable.js" ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*********************************************************************************************!*\
  !*** external "/home/travis/build/emathgroup/selectedTopics/node_modules/lodash/lodash.js" ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map