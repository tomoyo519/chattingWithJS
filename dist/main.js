/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ (() => {

eval("const onMakeChattingRoom = () => {\n  window.location.href = \"./join.html\";\n};\n\nconst setName = () => {\n  let props = document.getElementById(\"name\").value;\n  let addedNewUser = JSON.parse(localStorage.getItem(\"userList\"));\n  console.log(\"thisisaddedNewUser\", addedNewUser);\n  if (!addedNewUser) {\n    addedNewUser = [props];\n  } else {\n    console.log(\"thisisaddedNewUser\", addedNewUser);\n    addedNewUser.push(props);\n  }\n  localStorage.setItem(\"myName\", props);\n  localStorage.setItem(\"userList\", JSON.stringify(addedNewUser));\n  window.location.href = \"./room.html\";\n};\n\n\n//# sourceURL=webpack://querypie/./src/script/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script/index.js"]();
/******/ 	
/******/ })()
;