"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "(api)/./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_productServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/productServices */ \"(api)/./services/productServices.js\");\n\nfunction handler(request, response) {\n    const { id } = request.query;\n    response.status(200).json((0,_services_productServices__WEBPACK_IMPORTED_MODULE_0__.getProductById)(id));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUU3QyxTQUFTQyxRQUFRQyxPQUFPLEVBQUVDLFFBQVE7SUFDL0MsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR0YsUUFBUUc7SUFDdkJGLFNBQVNHLE9BQU8sS0FBS0MsS0FBS1AseUVBQWNBLENBQUNJO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1hcGktcm91dGVzX3Byb2R1Y3RzLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL1tpZF0uanM/ODJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9kdWN0QnlJZCB9IGZyb20gXCJAL3NlcnZpY2VzL3Byb2R1Y3RTZXJ2aWNlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHJlcXVlc3QucXVlcnk7XG4gIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oZ2V0UHJvZHVjdEJ5SWQoaWQpKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRQcm9kdWN0QnlJZCIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJpZCIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/[id].js\n");

/***/ }),

/***/ "(api)/./services/productServices.js":
/*!*************************************!*\
  !*** ./services/productServices.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllProducts: () => (/* binding */ getAllProducts),\n/* harmony export */   getProductById: () => (/* binding */ getProductById)\n/* harmony export */ });\nconst products = [\n    {\n        id: \"1\",\n        name: \"Shrimp\",\n        description: \"Prefers to live in pairs\",\n        price: 19,\n        currency: \"€\",\n        category: \"Invertebrates\"\n    },\n    {\n        id: \"2\",\n        name: \"Anemonefish\",\n        description: \"Nemo\",\n        price: 65,\n        currency: \"€\",\n        category: \"Seawater\"\n    },\n    {\n        id: \"3\",\n        name: \"Splendid anemone\",\n        description: \"Is splendid\",\n        price: 90,\n        currency: \"€\",\n        category: \"Corals and floral animals\"\n    },\n    {\n        id: \"4\",\n        name: \"Killer mussel\",\n        description: \"Is prettier than her name\",\n        price: 12,\n        currency: \"€\",\n        category: \"Mussels\"\n    },\n    {\n        id: \"5\",\n        name: \"Angelfish\",\n        description: \"A diurnal loner\",\n        price: 90,\n        currency: \"€\",\n        category: \"Seawater\"\n    },\n    {\n        id: \"6\",\n        name: \"Guppy\",\n        description: \"Small but nice\",\n        price: 5,\n        currency: \"€\",\n        category: \"Freshwater\"\n    },\n    {\n        id: \"7\",\n        name: \"Rainbow fish\",\n        description: \"In all colors\",\n        price: 12,\n        currency: \"€\",\n        category: \"Freshwater\"\n    }\n];\nfunction getAllProducts() {\n    return products;\n}\nfunction getProductById(id) {\n    return products.find((product)=>product.id === id);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9kdWN0U2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUNBO1FBQ0VMLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFDQTtRQUNFTCxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxPQUFPO1FBRVBDLFVBQVU7UUFDVkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUwsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtDQUNEO0FBRU0sU0FBU0M7SUFDZCxPQUFPUDtBQUNUO0FBRU8sU0FBU1EsZUFBZVAsRUFBRTtJQUMvQixPQUFPRCxTQUFTUyxLQUFLLENBQUNDLFVBQVlBLFFBQVFULE9BQU9BO0FBQ25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1hcGktcm91dGVzX3Byb2R1Y3RzLy4vc2VydmljZXMvcHJvZHVjdFNlcnZpY2VzLmpzP2RhMDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZHVjdHMgPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCJTaHJpbXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcmVmZXJzIHRvIGxpdmUgaW4gcGFpcnNcIixcbiAgICBwcmljZTogMTksXG4gICAgY3VycmVuY3k6IFwi4oKsXCIsXG4gICAgY2F0ZWdvcnk6IFwiSW52ZXJ0ZWJyYXRlc1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIG5hbWU6IFwiQW5lbW9uZWZpc2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJOZW1vXCIsXG4gICAgcHJpY2U6IDY1LFxuICAgIGN1cnJlbmN5OiBcIuKCrFwiLFxuICAgIGNhdGVnb3J5OiBcIlNlYXdhdGVyXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCIzXCIsXG4gICAgbmFtZTogXCJTcGxlbmRpZCBhbmVtb25lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiSXMgc3BsZW5kaWRcIixcbiAgICBwcmljZTogOTAsXG4gICAgY3VycmVuY3k6IFwi4oKsXCIsXG4gICAgY2F0ZWdvcnk6IFwiQ29yYWxzIGFuZCBmbG9yYWwgYW5pbWFsc1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNFwiLFxuICAgIG5hbWU6IFwiS2lsbGVyIG11c3NlbFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIklzIHByZXR0aWVyIHRoYW4gaGVyIG5hbWVcIixcbiAgICBwcmljZTogMTIsXG4gICAgY3VycmVuY3k6IFwi4oKsXCIsXG4gICAgY2F0ZWdvcnk6IFwiTXVzc2Vsc1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiNVwiLFxuICAgIG5hbWU6IFwiQW5nZWxmaXNoXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBkaXVybmFsIGxvbmVyXCIsXG4gICAgcHJpY2U6IDkwLFxuICAgIGN1cnJlbmN5OiBcIuKCrFwiLFxuICAgIGNhdGVnb3J5OiBcIlNlYXdhdGVyXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI2XCIsXG4gICAgbmFtZTogXCJHdXBweVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNtYWxsIGJ1dCBuaWNlXCIsXG4gICAgcHJpY2U6IDUsXG5cbiAgICBjdXJyZW5jeTogXCLigqxcIixcbiAgICBjYXRlZ29yeTogXCJGcmVzaHdhdGVyXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI3XCIsXG4gICAgbmFtZTogXCJSYWluYm93IGZpc2hcIixcbiAgICBkZXNjcmlwdGlvbjogXCJJbiBhbGwgY29sb3JzXCIsXG4gICAgcHJpY2U6IDEyLFxuICAgIGN1cnJlbmN5OiBcIuKCrFwiLFxuICAgIGNhdGVnb3J5OiBcIkZyZXNod2F0ZXJcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQcm9kdWN0cygpIHtcbiAgcmV0dXJuIHByb2R1Y3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5SWQoaWQpIHtcbiAgcmV0dXJuIHByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGlkKTtcbn1cbiJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJjdXJyZW5jeSIsImNhdGVnb3J5IiwiZ2V0QWxsUHJvZHVjdHMiLCJnZXRQcm9kdWN0QnlJZCIsImZpbmQiLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./services/productServices.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();