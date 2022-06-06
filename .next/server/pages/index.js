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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/Layout/TabContent.js":
/*!************************************!*\
  !*** ./pages/Layout/TabContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabContent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge/actions */ \"@shopify/app-bridge/actions\");\n/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/findIndex */ \"lodash/findIndex\");\n/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction TabContent() {\n    const tabsList = [\n        {\n            id: 'takaful-plans',\n            content: 'Takaful Plans',\n            accessibilityLabel: 'TakaFul Plan',\n            panelID: 'takaful-plans',\n            route: '/'\n        },\n        {\n            id: 'order-list',\n            content: 'Order List',\n            panelID: 'order-list',\n            route: '/Layout/OrderList'\n        },\n        {\n            id: 'product-list',\n            content: 'Product List',\n            panelID: 'product-list',\n            route: '/Layout/ProductList'\n        }, \n    ];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const app = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__.Context);\n    const loading = _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__.Loading.create(app);\n    let { 0: selectedIndex , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (lodash_findIndex__WEBPACK_IMPORTED_MODULE_5___default()(tabsList, {\n            'route': router.pathname\n        })) {\n            setSelected(lodash_findIndex__WEBPACK_IMPORTED_MODULE_5___default()(tabsList, {\n                'route': router.pathname\n            }));\n        }\n    }, [\n        router\n    ]);\n    const handleTabChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (selectedTabIndex)=>{\n        setSelected(selectedTabIndex);\n        loading.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__.Loading.Action.START);\n        await router.push(`${tabsList[selectedTabIndex].route}`, `${tabsList[selectedTabIndex].route}`);\n        loading.dispatch(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_4__.Loading.Action.STOP);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.Tabs, {\n        tabs: tabsList,\n        selected: selectedIndex,\n        onSelect: handleTabChange\n    }, void 0, false, {\n        fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\Layout\\\\TabContent.js\",\n        lineNumber: 58,\n        columnNumber: 7\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9MYXlvdXQvVGFiQ29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQ2Y7QUFDZDtBQUNjO0FBQ1g7QUFDVztBQUdwQyxRQUFRLENBQUNXLFVBQVUsR0FBRyxDQUFDO0lBRXBDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7UUFDaEIsQ0FBQztZQUNDQyxFQUFFLEVBQUUsQ0FBZTtZQUNuQkMsT0FBTyxFQUFFLENBQWU7WUFDeEJDLGtCQUFrQixFQUFFLENBQWM7WUFDbENDLE9BQU8sRUFBRSxDQUFlO1lBQ3hCQyxLQUFLLEVBQUMsQ0FBRztRQUNYLENBQUM7UUFDRCxDQUFDO1lBQ0NKLEVBQUUsRUFBRSxDQUFZO1lBQ2hCQyxPQUFPLEVBQUUsQ0FBWTtZQUNyQkUsT0FBTyxFQUFFLENBQVk7WUFDckJDLEtBQUssRUFBQyxDQUFtQjtRQUMzQixDQUFDO1FBQ0QsQ0FBQztZQUNDSixFQUFFLEVBQUUsQ0FBYztZQUNsQkMsT0FBTyxFQUFFLENBQWM7WUFDdkJFLE9BQU8sRUFBRSxDQUFjO1lBQ3ZCQyxLQUFLLEVBQUMsQ0FBcUI7UUFFN0IsQ0FBQztJQUNILENBQUM7SUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBR1gsc0RBQVM7SUFDeEIsS0FBSyxDQUFDWSxHQUFHLEdBQUdoQixpREFBVSxDQUFDTyw4REFBTztJQUc5QixLQUFLLENBQUNVLE9BQU8sR0FBR1osdUVBQWMsQ0FBQ1csR0FBRztJQUNsQyxHQUFHLE1BQUVHLGFBQWEsTUFBRUMsV0FBVyxNQUFJckIsK0NBQVEsQ0FBQyxDQUFDO0lBRTdDRCxnREFBUyxLQUFPLENBQUM7UUFFYixFQUFFLEVBQUNRLHVEQUFTLENBQUNHLFFBQVEsRUFBRSxDQUFDO1lBQUEsQ0FBTyxRQUFFTSxNQUFNLENBQUNNLFFBQVE7UUFBQSxDQUFDLEdBQUUsQ0FBQztZQUNoREQsV0FBVyxDQUFDZCx1REFBUyxDQUFDRyxRQUFRLEVBQUUsQ0FBQztnQkFBQSxDQUFPLFFBQUVNLE1BQU0sQ0FBQ00sUUFBUTtZQUFBLENBQUM7UUFDOUQsQ0FBQztJQUVMLENBQUMsRUFBRSxDQUFDTjtRQUFBQSxNQUFNO0lBQUEsQ0FBQztJQUNYLEtBQUssQ0FBQ08sZUFBZSxHQUFHekIsa0RBQVcsUUFDeEIwQixnQkFBZ0IsR0FBSyxDQUFDO1FBQ3pCSCxXQUFXLENBQUNHLGdCQUFnQjtRQUM1Qk4sT0FBTyxDQUFDTyxRQUFRLENBQUNuQiw2RUFBb0I7UUFDckMsS0FBSyxDQUFDVSxNQUFNLENBQUNZLElBQUksSUFBSWxCLFFBQVEsQ0FBQ2MsZ0JBQWdCLEVBQUVULEtBQUssT0FBT0wsUUFBUSxDQUFDYyxnQkFBZ0IsRUFBRVQsS0FBSztRQUM1RkcsT0FBTyxDQUFDTyxRQUFRLENBQUNuQiw0RUFBbUI7SUFDeEMsQ0FBQyxFQUNELENBQUMsQ0FBQztJQUdSLE1BQU0sNkVBQ0RGLGtEQUFJO1FBQ0gwQixJQUFJLEVBQUVwQixRQUFRO1FBQ2RxQixRQUFRLEVBQUVYLGFBQWE7UUFDdkJZLFFBQVEsRUFBRVQsZUFBZTs7Ozs7O0FBSWpDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWFwcC1ub2RlLy4vcGFnZXMvTGF5b3V0L1RhYkNvbnRlbnQuanM/MzdkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlLHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDYXJkLCBMYXlvdXQsIFRhYnN9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcIkBzaG9waWZ5L2FwcC1icmlkZ2UvYWN0aW9uc1wiO1xyXG5pbXBvcnQgZmluZEluZGV4IGZyb20gJ2xvZGFzaC9maW5kSW5kZXgnO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFiQ29udGVudCgpIHtcclxuICBcclxuICBjb25zdCB0YWJzTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICd0YWthZnVsLXBsYW5zJyxcclxuICAgICAgY29udGVudDogJ1Rha2FmdWwgUGxhbnMnLFxyXG4gICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6ICdUYWthRnVsIFBsYW4nLFxyXG4gICAgICBwYW5lbElEOiAndGFrYWZ1bC1wbGFucycsXHJcbiAgICAgIHJvdXRlOicvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6ICdvcmRlci1saXN0JyxcclxuICAgICAgY29udGVudDogJ09yZGVyIExpc3QnLFxyXG4gICAgICBwYW5lbElEOiAnb3JkZXItbGlzdCcsXHJcbiAgICAgIHJvdXRlOicvTGF5b3V0L09yZGVyTGlzdCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAncHJvZHVjdC1saXN0JyxcclxuICAgICAgY29udGVudDogJ1Byb2R1Y3QgTGlzdCcsXHJcbiAgICAgIHBhbmVsSUQ6ICdwcm9kdWN0LWxpc3QnLFxyXG4gICAgICByb3V0ZTonL0xheW91dC9Qcm9kdWN0TGlzdCdcclxuXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGFwcCA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGxvYWRpbmcgPSBMb2FkaW5nLmNyZWF0ZShhcHApO1xyXG4gICAgbGV0IFtzZWxlY3RlZEluZGV4LCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihmaW5kSW5kZXgodGFic0xpc3QsIHsncm91dGUnOiByb3V0ZXIucGF0aG5hbWV9KSl7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkKGZpbmRJbmRleCh0YWJzTGlzdCwgeydyb3V0ZSc6IHJvdXRlci5wYXRobmFtZX0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW3JvdXRlcl0pO1xyXG4gICAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAgICAgYXN5bmMgKHNlbGVjdGVkVGFiSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoc2VsZWN0ZWRUYWJJbmRleCk7XHJcbiAgICAgICAgICAgIGxvYWRpbmcuZGlzcGF0Y2goTG9hZGluZy5BY3Rpb24uU1RBUlQpO1xyXG4gICAgICAgICAgICBhd2FpdCByb3V0ZXIucHVzaChgJHt0YWJzTGlzdFtzZWxlY3RlZFRhYkluZGV4XS5yb3V0ZX1gLCBgJHt0YWJzTGlzdFtzZWxlY3RlZFRhYkluZGV4XS5yb3V0ZX1gKTtcclxuICAgICAgICAgICAgbG9hZGluZy5kaXNwYXRjaChMb2FkaW5nLkFjdGlvbi5TVE9QKTtcclxuICAgICAgICB9LCBcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxUYWJzIFxyXG4gICAgICAgIHRhYnM9e3RhYnNMaXN0fVxyXG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4fVxyXG4gICAgICAgIG9uU2VsZWN0PXtoYW5kbGVUYWJDaGFuZ2V9XHJcbiAgICAgID5cclxuICAgICAgPC9UYWJzPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQ2FyZCIsIkxheW91dCIsIlRhYnMiLCJ1c2VSb3V0ZXIiLCJMb2FkaW5nIiwiZmluZEluZGV4IiwiQ29udGV4dCIsIlRhYkNvbnRlbnQiLCJ0YWJzTGlzdCIsImlkIiwiY29udGVudCIsImFjY2Vzc2liaWxpdHlMYWJlbCIsInBhbmVsSUQiLCJyb3V0ZSIsInJvdXRlciIsImFwcCIsImxvYWRpbmciLCJjcmVhdGUiLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWQiLCJwYXRobmFtZSIsImhhbmRsZVRhYkNoYW5nZSIsInNlbGVjdGVkVGFiSW5kZXgiLCJkaXNwYXRjaCIsIkFjdGlvbiIsIlNUQVJUIiwicHVzaCIsIlNUT1AiLCJ0YWJzIiwic2VsZWN0ZWQiLCJvblNlbGVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Layout/TabContent.js\n");

/***/ }),

/***/ "./pages/PolicyList.js":
/*!*****************************!*\
  !*** ./pages/PolicyList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PolicyList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Layout_TabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Layout/TabContent */ \"./pages/Layout/TabContent.js\");\n\n\n\n\nfunction PolicyList() {\n    const { 0: renderDataArray , 1: setrenderDataArray  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        [\n            \"-\",\n            \"-\",\n            '-',\n            '-',\n            '-',\n            '-',\n            '-',\n            '-'\n        ]\n    ]);\n    const { 0: load , 1: setLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    async function getBundlePlan() {\n        let returedObj = [];\n        let data = await fetch('/api/get/plan/takaful', {\n            method: 'GET',\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n        let i = 0;\n        let jsonObj = await data.json();\n        jsonObj.data.forEach((element)=>{\n            returedObj[i] = [\n                element.id,\n                element.policy_id,\n                element.name,\n                element.description,\n                element.start_rate,\n                element.end_rate,\n                element.duration,\n                element.amount + \"-/PKR\", \n            ];\n            i++;\n        });\n        return setrenderDataArray(returedObj);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (load == true) {\n            getBundlePlan();\n            setLoad(false);\n        }\n    });\n    const rows = renderDataArray;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.Layout.Section, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        primary: true,\n                        onClick: getBundlePlan,\n                        children: \"Sync\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\PolicyList.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_Layout_TabContent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\PolicyList.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\PolicyList.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.Layout.Section, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.DataTable, {\n                    columnContentTypes: [\n                        'numeric',\n                        'text',\n                        'text',\n                        'numeric',\n                        'numeric',\n                        'numeric',\n                        'text', \n                    ],\n                    headings: [\n                        '#',\n                        'Policy Id',\n                        'Bundle Name',\n                        'Bundle Description',\n                        'Bundle Start From',\n                        'Bundle End To',\n                        'Month',\n                        'Amount', \n                    ],\n                    rows: rows\n                }, void 0, false, {\n                    fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\PolicyList.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\PolicyList.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\PolicyList.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb2xpY3lMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNjO0FBQ3pCO0FBR3BDLFFBQVEsQ0FBQ1csVUFBVSxHQUFHLENBQUM7SUFDbEMsS0FBSyxNQUFFQyxlQUFlLE1BQUVDLGtCQUFrQixNQUFJViwrQ0FBUSxDQUFDLENBQUM7UUFBQSxDQUFDO1lBQUEsQ0FBRztZQUFDLENBQUc7WUFBQyxDQUFHO1lBQUMsQ0FBRztZQUFDLENBQUc7WUFBQyxDQUFHO1lBQUMsQ0FBRztZQUFDLENBQUc7UUFBQSxDQUFDO0lBQUEsQ0FBQztJQUMxRixLQUFLLE1BQUVXLElBQUksTUFBRUMsT0FBTyxNQUFJWiwrQ0FBUSxDQUFDLElBQUk7bUJBRXRCYSxhQUFhLEdBQUUsQ0FBQztRQUMzQixHQUFHLENBQUNDLFVBQVUsR0FBQyxDQUFDLENBQUM7UUFDakIsR0FBRyxDQUFDQyxJQUFJLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBdUIsd0JBQUUsQ0FBQztZQUM3Q0MsTUFBTSxFQUFFLENBQUs7WUFDYkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1IsQ0FBYyxlQUFFLENBQWtCO1lBQ3BDLENBQUM7UUFDSCxDQUFDO1FBQ0QsR0FBRyxDQUFDQyxDQUFDLEdBQUMsQ0FBQztRQUNQLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLEtBQUssQ0FBQ0wsSUFBSSxDQUFDTSxJQUFJO1FBQzdCRCxPQUFPLENBQUNMLElBQUksQ0FBQ08sT0FBTyxFQUFDQyxPQUFPLEdBQUksQ0FBQztZQUMvQlQsVUFBVSxDQUFDSyxDQUFDLElBQUUsQ0FBQztnQkFDYkksT0FBTyxDQUFDQyxFQUFFO2dCQUNWRCxPQUFPLENBQUNFLFNBQVM7Z0JBQ2pCRixPQUFPLENBQUNHLElBQUk7Z0JBQ1pILE9BQU8sQ0FBQ0ksV0FBVztnQkFDbkJKLE9BQU8sQ0FBQ0ssVUFBVTtnQkFDbEJMLE9BQU8sQ0FBQ00sUUFBUTtnQkFDaEJOLE9BQU8sQ0FBQ08sUUFBUTtnQkFDaEJQLE9BQU8sQ0FBQ1EsTUFBTSxHQUFDLENBQU87WUFDeEIsQ0FBQztZQUNEWixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQ1Qsa0JBQWtCLENBQUNJLFVBQVU7SUFDeEMsQ0FBQztJQUNIZixnREFBUyxLQUFPLENBQUM7UUFDZixFQUFFLEVBQUNZLElBQUksSUFBRSxJQUFJLEVBQUMsQ0FBQztZQUNiRSxhQUFhO1lBQ2JELE9BQU8sQ0FBQyxLQUFLO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFDQyxLQUFLLENBQUNvQixJQUFJLEdBQUd2QixlQUFlO0lBQzlCLE1BQU0sNkVBQ0RMLG9EQUFNOzt3RkFDTkEsNERBQWM7O2dHQUNkSCxvREFBTTt3QkFBQ2lDLE9BQU87d0JBQUNDLE9BQU8sRUFBRXRCLGFBQWE7a0NBQUUsQ0FFeEM7Ozs7OztnR0FDQ04sZ0VBQVU7Ozs7Ozs7Ozs7O3dGQUVWSCw0REFBYztzR0FDVkQsdURBQVM7b0JBQ05pQyxrQkFBa0IsRUFBRSxDQUFDO3dCQUNyQixDQUFTO3dCQUNULENBQU07d0JBQ04sQ0FBTTt3QkFDTixDQUFTO3dCQUNULENBQVM7d0JBQ1QsQ0FBUzt3QkFDVCxDQUFNO29CQUVOLENBQUM7b0JBQ0RDLFFBQVEsRUFBRSxDQUFDO3dCQUNYLENBQUc7d0JBQ0gsQ0FBVzt3QkFDWCxDQUFhO3dCQUNiLENBQW9CO3dCQUNwQixDQUFtQjt3QkFDbkIsQ0FBZTt3QkFDZixDQUFPO3dCQUNQLENBQVE7b0JBRVIsQ0FBQztvQkFDREwsSUFBSSxFQUFFQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS1hcHAtbm9kZS8uL3BhZ2VzL1BvbGljeUxpc3QuanM/MDM5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b24sIENhcmQsIERhdGFUYWJsZSwgTGF5b3V0LCBQYWdlLCBUYWJzfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IFRhYkNvbnRlbnQgZnJvbSAnLi4vcGFnZXMvTGF5b3V0L1RhYkNvbnRlbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGljeUxpc3QoKSB7XHJcbiAgICBjb25zdCBbcmVuZGVyRGF0YUFycmF5LCBzZXRyZW5kZXJEYXRhQXJyYXldID0gdXNlU3RhdGUoW1tcIi1cIixcIi1cIiwnLScsJy0nLCctJywnLScsJy0nLCctJ11dKTtcclxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEJ1bmRsZVBsYW4oKXtcclxuICAgICAgICBsZXQgcmV0dXJlZE9iaj1bXTtcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldC9wbGFuL3Rha2FmdWwnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkgO1xyXG4gICAgICAgICAgbGV0IGk9MDtcclxuICAgICAgICAgIGxldCBqc29uT2JqID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICAgICAgICBqc29uT2JqLmRhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJlZE9ialtpXT1bXHJcbiAgICAgICAgICAgICAgZWxlbWVudC5pZCxcclxuICAgICAgICAgICAgICBlbGVtZW50LnBvbGljeV9pZCxcclxuICAgICAgICAgICAgICBlbGVtZW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgZWxlbWVudC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBlbGVtZW50LnN0YXJ0X3JhdGUsXHJcbiAgICAgICAgICAgICAgZWxlbWVudC5lbmRfcmF0ZSxcclxuICAgICAgICAgICAgICBlbGVtZW50LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIGVsZW1lbnQuYW1vdW50K1wiLS9QS1JcIixcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBzZXRyZW5kZXJEYXRhQXJyYXkocmV0dXJlZE9iaik7XHJcbiAgICAgIH0gXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZihsb2FkPT10cnVlKXtcclxuICAgICAgICBnZXRCdW5kbGVQbGFuKCk7IFxyXG4gICAgICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9KTsgXHJcbiAgICAgIGNvbnN0IHJvd3MgPSByZW5kZXJEYXRhQXJyYXkgO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgb25DbGljaz17Z2V0QnVuZGxlUGxhbn0+XHJcbiAgICAgICAgICAgIFN5bmNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8VGFiQ29udGVudC8+XHJcbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgICAgICAgIGNvbHVtbkNvbnRlbnRUeXBlcz17W1xyXG4gICAgICAgICAgICAgICAgJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ2J1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgaGVhZGluZ3M9e1tcclxuICAgICAgICAgICAgICAgICcjJyxcclxuICAgICAgICAgICAgICAgICdQb2xpY3kgSWQnLCAgXHJcbiAgICAgICAgICAgICAgICAnQnVuZGxlIE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgJ0J1bmRsZSBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAnQnVuZGxlIFN0YXJ0IEZyb20nLFxyXG4gICAgICAgICAgICAgICAgJ0J1bmRsZSBFbmQgVG8nLFxyXG4gICAgICAgICAgICAgICAgJ01vbnRoJyxcclxuICAgICAgICAgICAgICAgICdBbW91bnQnLFxyXG4gICAgICAgICAgICAgICAgLy8gJ1ZpZXcnLFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIHJvd3M9e3Jvd3N9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ2FyZCIsIkRhdGFUYWJsZSIsIkxheW91dCIsIlBhZ2UiLCJUYWJzIiwiVGFiQ29udGVudCIsIlBvbGljeUxpc3QiLCJyZW5kZXJEYXRhQXJyYXkiLCJzZXRyZW5kZXJEYXRhQXJyYXkiLCJsb2FkIiwic2V0TG9hZCIsImdldEJ1bmRsZVBsYW4iLCJyZXR1cmVkT2JqIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImkiLCJqc29uT2JqIiwianNvbiIsImZvckVhY2giLCJlbGVtZW50IiwiaWQiLCJwb2xpY3lfaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdGFydF9yYXRlIiwiZW5kX3JhdGUiLCJkdXJhdGlvbiIsImFtb3VudCIsInJvd3MiLCJTZWN0aW9uIiwicHJpbWFyeSIsIm9uQ2xpY2siLCJjb2x1bW5Db250ZW50VHlwZXMiLCJoZWFkaW5ncyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/PolicyList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductWithTakafulList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PolicyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PolicyList */ \"./pages/PolicyList.js\");\n\n\n\n\nfunction ProductWithTakafulList() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.Page, {\n        title: \"Takaful Plans\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__.Card, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PolicyList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\index.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\laragon\\\\www\\\\find me\\\\takaful\\\\takafullapp\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNQO0FBSXRCLFFBQVEsQ0FBQ0ssc0JBQXNCLEdBQUcsQ0FBQztJQUUvQyxNQUFNLDZFQUNGRixrREFBSTtRQUFDRyxLQUFLLEVBQUMsQ0FBZTs4RkFDeEJKLGtEQUFJO2tHQUNGRSxtREFBVTs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWFwcC1ub2RlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgUGFnZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBQb2xpY3lMaXN0IGZyb20gJy4vUG9saWN5TGlzdCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RXaXRoVGFrYWZ1bExpc3QoKSB7XHJcbiBcclxuICAgcmV0dXJuIChcclxuICAgICAgPFBhZ2UgdGl0bGU9XCJUYWthZnVsIFBsYW5zXCI+XHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8UG9saWN5TGlzdC8+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgKTtcclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiUGFnZSIsIlBvbGljeUxpc3QiLCJQcm9kdWN0V2l0aFRha2FmdWxMaXN0IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "lodash/findIndex":
/*!***********************************!*\
  !*** external "lodash/findIndex" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/findIndex");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();