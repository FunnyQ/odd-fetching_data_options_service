(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("odd-fetching_data_options_service", [], factory);
	else if(typeof exports === 'object')
		exports["odd-fetching_data_options_service"] = factory();
	else
		root["odd-fetching_data_options_service"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_PAGE_SIZE = 25;

/**
 * 提供 parse 關於 fetching data options 的功能
 *
 * @export
 * @class FetchingDataOptionsService
 */

var FetchingDataOptionsService = function () {
  function FetchingDataOptionsService() {
    _classCallCheck(this, FetchingDataOptionsService);
  }

  _createClass(FetchingDataOptionsService, null, [{
    key: 'call',
    value: function call(options) {
      var result = '' + this.pagenate(options) + this.sort(options) + this.filter(options) + this.search(options);

      if (result[0] === '&') {
        result = result.substr(1);
      }

      return result;
    }

    /**
     * 處理分頁選項
     *
     * @static
     * @param {Object} options
     * @returns {string}
     */

  }, {
    key: 'pagenate',
    value: function pagenate(options) {
      var pageNumber = options.pageNumber;
      var pageSize = options.pageSize || DEFAULT_PAGE_SIZE;

      if (pageNumber) {
        return 'page[number]=' + pageNumber + '&page[size]=' + pageSize;
      }
      return '';
    }

    /**
     * 處理排序選項
     *
     * @static
     * @param {Object} options
     * @returns {string}
     */

  }, {
    key: 'sort',
    value: function sort(options) {
      var sort = options.sort;

      if (sort) {
        return '&sort=' + sort;
      }
      return '';
    }

    /**
     * 處理 Filter 選項
     *
     * @static
     * @param {Object} options
     * @returns {string}
     */

  }, {
    key: 'filter',
    value: function filter(options) {
      var filter = options.filter;

      if (filter) {
        return '&filter=' + filter;
      }
      return '';
    }

    /**
     * 處理搜尋選項
     *
     * @static
     * @param {Object} options
     * @returns {string}
     */

  }, {
    key: 'search',
    value: function search(options) {
      if (!options.search) {
        return '';
      }
      var keys = Object.keys(options.search);
      var result = '';

      keys.forEach(function (element) {
        if (!options.search[element]) return;

        if (options.search[element] instanceof Array) {
          options.search[element].forEach(function (searchOption) {
            result += '&q[' + element + '][]=' + searchOption;
          });
        } else {
          result += '&q[' + element + ']=' + options.search[element];
        }
      });

      return result;
    }
  }]);

  return FetchingDataOptionsService;
}();

exports.default = FetchingDataOptionsService;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=odd-fetching_data_options_service.js.map