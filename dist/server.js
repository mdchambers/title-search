/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/models/Titles.js":
/*!*************************************!*\
  !*** ./src/server/models/Titles.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n// Schema implemented here if project ever requires full CRUD\nmodule.exports = mongoose.model(\"Title\", new mongoose.Schema(), \"Titles\");\n\n\n//# sourceURL=webpack:///./src/server/models/Titles.js?");

/***/ }),

/***/ "./src/server/routes.js":
/*!******************************!*\
  !*** ./src/server/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\nconst ObjectId = __webpack_require__(/*! mongoose */ \"mongoose\").Types.ObjectId;\nconst router = express.Router();\nconst Title = __webpack_require__(/*! ./models/Titles */ \"./src/server/models/Titles.js\");\n\n//// AUTH ROUTES\n\nrouter.get(\"/api/title/onetitle\", async function(req, res) {\n  const atitle = await Title.findOne();\n  res.send(atitle);\n});\n\nrouter.get(\"/api/title/:id\", async function(req, res) {\n  Title.findOne({\n    TitleId: +req.params.id\n  }).then(title => {\n    res.send(title);\n  });\n});\n\nrouter.get(\"/api/search\", function(req, res) {\n  const term = req.query.query;\n  Title.find(\n    {\n      TitleName: { $regex: term, $options: \"i\" }\n    },\n    \"TitleName TitleId\",\n    { limit: 10 }\n  ).then(searchResult => {\n    res.send(searchResult);\n  });\n});\n\nmodule.exports = router;\n\n\n//# sourceURL=webpack:///./src/server/routes.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/server/routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1__[\"json\"]());\n\n// Bypass CORS protections\n// Options needed for pre-flight check, as this request is a POST\napp.use(cors__WEBPACK_IMPORTED_MODULE_3__());\napp.options(\"*\", cors__WEBPACK_IMPORTED_MODULE_3__());\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](\"public\"));\napp.use(_routes__WEBPACK_IMPORTED_MODULE_4___default.a);\n\nconst env = \"development\" || false;\n\nlet mongoURL = \"\";\n//// Configuration for access to MongoDB database\n// For security reasons, credentials are not stored in this file\n// To input your own security credentials, fill out and uncomment, or supply your own mongodb url below:\n\n//// UNCOMMENT TO USE CREDENTIALS DIRECTLY\n// const config = {\n//   // Username\n//   mongoUser: '',\n//   //Password\n//   mongoPwd: '',\n//   // URI\n//   mongoDb: ''\n// }\n\n//// OR UNCOMMENT TO READ CREDENTIALS FROM FILE\n// Alternatively read mongodb credentials from config file\n// const config = require(\"./config/config\")[env];\n\n//// UNCOMMENT TO CONSTRUCT MONGO STRING\n// mongoURL = `mongodb://${config.mongoUser}:${config.mongoPwd}${config.mongoDb}`;\n\n//// OR UNCOMMENT TO ENTER DIRECTLY\n// mongoURL = \"<urlstring\";\n\n//// USING HEROKU CONFIG VARS\nmongoURL = process.env.MONGO;\n\n// Connect to database and launch express\nmongoose__WEBPACK_IMPORTED_MODULE_2__[\"connect\"](mongoURL, { useNewUrlParser: true })\n  .then(() => {\n    const port = process.env.PORT || 3000;\n    app.listen(port, () => console.log(`Server listening on port: ${port}`));\n  })\n  .catch(err => {\n    console.log(\"Error connecting to mongo\");\n    console.log(err);\n  });\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });