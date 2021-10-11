/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./A10/src/dUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "km2mi": () => (/* binding */ km2mi),\n/* harmony export */   "mi2km": () => (/* binding */ mi2km)\n/* harmony export */ });\nconst km2mi = (x) => {\r\n    return x * 0.6213711;\r\n};\r\n\r\nconst mi2km = (x) => {\r\n    return x * 1.609344;\r\n};\n\n//# sourceURL=webpack://cynowe_repo/./A10/src/dUtils.js?')},"./A10/src/main.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dUtils */ "./A10/src/dUtils.js");\n/* harmony import */ var _tUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tUtils */ "./A10/src/tUtils.js");\n\r\n\r\n\r\nconst km = document.getElementById("km");\r\nconst mi = document.getElementById("mi");\r\n\r\nkm.addEventListener("input", () => {\r\n    mi.value = (0,_dUtils__WEBPACK_IMPORTED_MODULE_0__.km2mi)(Number(km.value));\r\n});\r\n\r\nmi.addEventListener("input", () => {\r\n    km.value = (0,_dUtils__WEBPACK_IMPORTED_MODULE_0__.mi2km)(Number(mi.value));\r\n});\r\n\r\nc.addEventListener("input", () => {\r\n    let val = Number(c.value);\r\n    f.value = (0,_tUtils__WEBPACK_IMPORTED_MODULE_1__.c2f)(val);\r\n    k.value = (0,_tUtils__WEBPACK_IMPORTED_MODULE_1__.c2k)(val);\r\n});\r\n\r\nconst c = document.getElementById("c");\r\nconst f = document.getElementById("f");\r\nconst k = document.getElementById("k");\r\n\r\nf.addEventListener("input", (e) => {\r\n    let val = Number(f.value);\r\n    c.value = (0,_tUtils__WEBPACK_IMPORTED_MODULE_1__.f2c)(val);\r\n    k.value = (0,_tUtils__WEBPACK_IMPORTED_MODULE_1__.f2k)(val);\r\n});\r\n\r\nk.addEventListener("input", (e) => {\r\n    let val = Number(k.value);\r\n    c.value = (0,_tUtils__WEBPACK_IMPORTED_MODULE_1__.k2c)(val);\r\n    f.value = (0,_tUtils__WEBPACK_IMPORTED_MODULE_1__.k2f)(val);\r\n});\n\n//# sourceURL=webpack://cynowe_repo/./A10/src/main.js?')},"./A10/src/tUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "f2k": () => (/* binding */ f2k),\n/* harmony export */   "k2f": () => (/* binding */ k2f),\n/* harmony export */   "c2f": () => (/* binding */ c2f),\n/* harmony export */   "f2c": () => (/* binding */ f2c),\n/* harmony export */   "c2k": () => (/* binding */ c2k),\n/* harmony export */   "k2c": () => (/* binding */ k2c)\n/* harmony export */ });\nconst f2k = (x) => {\r\n    return c2k(f2c(x)); //the formula at http://www.solano.edu/academic_success_center/forms/math/Temperature%20Scales.pdf actually simplifies to this so yeah\r\n};\r\n\r\nconst k2f = (x) => {\r\n    return c2f(k2c(x)); //same here\r\n};\r\n\r\nconst c2f = (x) => {\r\n    return x * 1.8 + 32;\r\n};\r\n\r\nconst f2c = (x) => {\r\n    return (x - 32) / 1.8;\r\n};\r\n\r\nconst c2k = (x) => {\r\n    return x + 273.15;\r\n};\r\n\r\nconst k2c = (x) => {\r\n    return x - 273.15;\r\n};\n\n//# sourceURL=webpack://cynowe_repo/./A10/src/tUtils.js?')}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(_,e)=>{for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e),__webpack_require__.r=_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./A10/src/main.js")})();