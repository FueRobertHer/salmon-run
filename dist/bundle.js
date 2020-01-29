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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/air.js":
/*!********************!*\
  !*** ./src/air.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Air; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Air =
/*#__PURE__*/
function (_Element) {
  _inherits(Air, _Element);

  function Air(pos, width, height) {
    var _this;

    _classCallCheck(this, Air);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Air).call(this, pos, width, height));
    _this.pos = pos;
    _this.width = width;
    _this.height = height;
    _this.left = _this.pos[0];
    _this.top = _this.pos[1];
    _this.right = _this.left + _this.width;
    _this.bottom = _this.top + _this.height;
    _this.gravity = 0.1;
    return _this;
  }

  _createClass(Air, [{
    key: "applyAir",
    value: function applyAir(salmon) {
      if (this.salmonIsIn(salmon)) {
        salmon.yVel += this.gravity;
      }
    }
  }, {
    key: "drawAir",
    value: function drawAir(ctx) {
      ctx.fillStyle = "rgba(100, 100, 100, 0.8)";
      ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawAir(ctx);
    }
  }]);

  return Air;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera(x, y, width, height, mapWidth, mapHeight) {
    var _this = this;

    _classCallCheck(this, Camera);

    this.x = x || 0;
    this.y = y || 0;
    this.xDeadZone = 250;
    this.yDeadZone = 150;
    this.width = width;
    this.height = height;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.followed = null;
    this.paused = false;
    this.score = 0;
    this.salmonSize = 0;
    this.gameover = false;
    this.countdown = 60;
    this.count = setInterval(function () {
      _this.countdown--;
    }, 1000);
    this.pause();
  }

  _createClass(Camera, [{
    key: "stopCount",
    value: function stopCount() {
      clearInterval(this.count);
    }
  }, {
    key: "startCountdown",
    value: function startCountdown() {
      var _this2 = this;

      setInterval(function () {
        _this2.countdown--;
      }, 1000);
    }
  }, {
    key: "follow",
    value: function follow(salmon) {
      this.followed = salmon;
    }
  }, {
    key: "unpause",
    value: function unpause() {
      var _this3 = this;

      if (this.paused) {
        this.paused = false;
        this.count = setInterval(function () {
          _this3.countdown--;
        }, 1000);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
      this.stopCount();
    }
  }, {
    key: "timeUp",
    value: function timeUp() {
      if (this.countdown === 0) this.stopCount();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.followed != null) {
        if (this.followed.bounds().left < this.width / 2) {
          this.x = 0;
        } else if (this.followed.bounds().left > this.mapWidth - this.width / 2) {
          this.x = this.mapWidth - this.width;
        } else {
          this.x = this.followed.bounds().left - this.width / 2;
        }

        if (this.followed.bounds().top < this.height / 2) {
          this.y = 0;
        } else if (this.followed.bounds().top > this.mapHeight - this.height / 2) {
          this.y = this.mapHeight - this.height;
        } else {
          this.y = this.followed.bounds().top - this.height / 2;
        }
      }

      this.timeUp();
    }
  }, {
    key: "takeScore",
    value: function takeScore(score, size) {
      this.score = score;
      this.salmonSize = size;
      this.gameover = true;
    }
  }, {
    key: "showScore",
    value: function showScore(ctx) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.font = "50px Baloo";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      var text = "Food Score: " + this.score;
      ctx.fillText(text, this.width / 2, this.height / 3);
      text = "Salmon Size: " + this.salmonSize;
      ctx.fillText(text, this.width / 2, this.height / 3 * 2);
    }
  }, {
    key: "draw",
    value: function draw(ctx, img) {
      if (this.gameover) {
        this.showScore(ctx);
      } else {
        ctx.drawImage(img, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
        this.drawCountdown(ctx);

        if (this.paused) {
          ctx.font = "80px Baloo";
          ctx.textAlign = "center";
          ctx.fillText("PAUSED", this.width / 2, this.height / 2);
        }
      }
    }
  }, {
    key: "drawCountdown",
    value: function drawCountdown(ctx) {
      ctx.font = "50px Baloo";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(this.countdown, this.width / 2, 50);
    }
  }, {
    key: "animate",
    value: function animate(ctx, img) {
      ctx.clearRect(0, 0, this.width, this.height);
      if (!this.gameover) this.update();
      this.draw(ctx, img);
    }
  }]);

  return Camera;
}();



/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Element; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element =
/*#__PURE__*/
function () {
  function Element(pos, width, height) {
    _classCallCheck(this, Element);

    this.pos = pos;
    this.width = width;
    this.height = height;
    this.left = this.pos[0];
    this.top = this.pos[1];
    this.right = this.left + this.width;
    this.bottom = this.top + this.height;
  } //rect collision


  _createClass(Element, [{
    key: "salmonIsIn",
    value: function salmonIsIn(salmon) {
      var _overlap = function _overlap(rect1, rect2) {
        //check that they don't overlap in the x axis
        if (rect1.left > rect2.bounds().right || rect1.right < rect2.bounds().left) {
          return false;
        } //check that they don't overlap in the y axis


        if (rect1.top > rect2.bounds().bottom || rect1.bottom < rect2.bounds().top) {
          // debugger
          return false;
        }

        return true;
      };

      var isIn = false;

      if (_overlap(this, salmon)) {
        // debugger
        isIn = true;
      }

      return isIn;
    }
  }, {
    key: "bounds",
    value: function bounds() {
      return {
        left: this.pos[0],
        top: this.pos[1],
        right: this.left + this.width,
        bottom: this.top + this.height
      };
    } // collidesWith(bird) {
    //   //this function returns true if the the rectangles overlap
    //   const _overlap = (rect1, rect2) => {
    //     //check that they don't overlap in the x axis
    //     if (rect1.left > rect2.right || rect1.right < rect2.left) {
    //       return false;
    //     }
    //     //check that they don't overlap in the y axis
    //     if (rect1.top > rect2.bottom || rect1.bottom < rect2.top) {
    //       return false;
    //     }
    //     return true;
    //   };
    //   let collision = false;
    //   this.eachPipe((pipe) => {
    //     if (
    //       //check if the bird is overlapping (colliding) with either pipe
    //       _overlap(pipe.topPipe, bird) ||
    //       _overlap(pipe.bottomPipe, bird)
    //     ) {
    //       collision = true;
    //     }
    //   });
    //   return collision;
    // }

  }]);

  return Element;
}();



/***/ }),

/***/ "./src/ground.js":
/*!***********************!*\
  !*** ./src/ground.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ground; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Ground =
/*#__PURE__*/
function (_Element) {
  _inherits(Ground, _Element);

  function Ground(pos, width, height) {
    var _this;

    _classCallCheck(this, Ground);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ground).call(this, pos, width, height));
    _this.pos = pos;
    _this.width = width;
    _this.height = height;
    _this.left = _this.pos[0];
    _this.top = _this.pos[1];
    _this.right = _this.left + _this.width;
    _this.bottom = _this.top + _this.height;
    return _this;
  }

  _createClass(Ground, [{
    key: "stopSalmon",
    value: function stopSalmon(salmon) {
      if (this.salmonIsIn(salmon)) {
        // debugger
        // salmon.yVel = 0;
        if (salmon.yVel > 0) {
          salmon.y = this.top - salmon.height;
        }
      }
    }
  }, {
    key: "drawGround",
    value: function drawGround(ctx) {
      ctx.fillStyle = "gray";
      ctx.fillRect(this.left, this.top, this.right, this.bottom);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawGround(ctx);
    }
  }]);

  return Ground;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salmon_run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salmon_run */ "./src/salmon_run.js");

var canvas = document.getElementById('canvas');
var cam = document.getElementById('camera');
new _salmon_run__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, cam);

/***/ }),

/***/ "./src/krill.js":
/*!**********************!*\
  !*** ./src/krill.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Krill; });
/* harmony import */ var _prey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prey */ "./src/prey.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Krill =
/*#__PURE__*/
function (_Prey) {
  _inherits(Krill, _Prey);

  function Krill(pos, width, height) {
    var _this;

    _classCallCheck(this, Krill);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Krill).call(this, pos, width, height));
    _this.pos = pos;
    _this.x = pos[0];
    _this.y = pos[1];
    _this.width = width;
    _this.height = height;
    _this.foodValue = 3;
    _this.eaten = false;
    _this.img = new Image();
    _this.img.src = "./assets/images/krill.png";
    return _this;
  }

  return Krill;
}(_prey__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Level; });
/* harmony import */ var _air__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./air */ "./src/air.js");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./water */ "./src/water.js");
/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ground */ "./src/ground.js");
/* harmony import */ var _zoo_plankton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoo_plankton */ "./src/zoo_plankton.js");
/* harmony import */ var _krill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./krill */ "./src/krill.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



 // import MovingObj from './moving_obj';




var Level =
/*#__PURE__*/
function () {
  function Level(dimensions) {
    _classCallCheck(this, Level);

    this.width = dimensions.width;
    this.height = dimensions.height;
    this.food = [];
    this.enemies = [];
    this.buildLevel();
  }

  _createClass(Level, [{
    key: "buildLevel",
    value: function buildLevel() {
      var _this = this;

      //loop through air, water, ground arrays and build them
      this.air = new _air__WEBPACK_IMPORTED_MODULE_0__["default"]([0, 0], this.width, this.height);
      this.water = new _water__WEBPACK_IMPORTED_MODULE_1__["default"]([0, 200], this.width, this.height - 200, 'rect');
      this.rawGrounds = [{
        pos: [0, this.height - 50],
        width: this.width,
        height: this.height - 350
      } // {pos: [700, 140], width: 50, height: (this.height - 350 - 150)}
      ];
      this.grounds = [];
      this.rawGrounds.forEach(function (option) {
        var ground = new _ground__WEBPACK_IMPORTED_MODULE_2__["default"](option.pos, option.width, option.height);

        _this.grounds.push(ground); // debugger

      }); // this.ground = new Ground([0, 350], this.width, this.height - 350 - 150);
    }
  }, {
    key: "generateFood",
    value: function generateFood(num) {
      var lastFood = this.food.length - 1;

      if (this.food.length < num) {
        var spacing;
        this.food[lastFood] ? spacing = this.food[lastFood].x + 150 : spacing = this.width;

        if (spacing <= this.width) {
          var krill = new _krill__WEBPACK_IMPORTED_MODULE_4__["default"]([spacing, this.water.randomYPos()], 15, 15);
          this.food.push(krill);
        }
      }
    }
  }, {
    key: "atSurface",
    value: function atSurface(salmon) {
      //loop through water arrays and check if salmon
      return this.water.top <= salmon.bounds().bottom;
    }
  }, {
    key: "inLevel",
    value: function inLevel(salmon) {
      if (salmon.bounds().left < 0) {
        salmon.x = 0;
      } else if (salmon.bounds().right > this.width) {
        salmon.x = this.width - salmon.height;
      }
    }
  }, {
    key: "animateFood",
    value: function animateFood(ctx, salmon) {
      var _this2 = this;

      this.generateFood(8);
      this.food.forEach(function (prey, i) {
        prey.getEaten(salmon);
        if (prey.eaten || prey.x < 0 || prey.x > _this2.width || prey.y > _this2.height) _this2.food.splice(i, 1);

        _this2.water.applyCurrent(prey);

        prey.moveRandomly();
        prey.animate(ctx);
      });
    }
  }, {
    key: "animateEnv",
    value: function animateEnv(ctx, salmon) {
      // loop through air, water, ground arrays and apply their effects to salmon
      this.air.applyAir(salmon);
      this.water.applyCurrent(salmon);
      this.grounds.forEach(function (ground) {
        ground.stopSalmon(salmon);
      }); // this.ground.stopSalmon(salmon);
      // loop through air, water, ground arrays and draw them

      this.air.animate(ctx);
      this.water.animate(ctx); // this.ground.animate(ctx);

      this.grounds.forEach(function (ground) {
        return ground.animate(ctx);
      });
    }
  }, {
    key: "animate",
    value: function animate(ctx, salmon) {
      this.animateEnv(ctx, salmon);
      this.animateFood(ctx, salmon);
    }
  }]);

  return Level;
}();



/***/ }),

/***/ "./src/moving_obj.js":
/*!***************************!*\
  !*** ./src/moving_obj.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovingObj; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovingObj =
/*#__PURE__*/
function () {
  function MovingObj(pos, width, height) {
    _classCallCheck(this, MovingObj);

    this.pos = pos;
    this.x = pos[0];
    this.y = pos[1];
    this.width = width;
    this.height = height;
    this.xVel = 0;
    this.yVel = 0;
  }

  _createClass(MovingObj, [{
    key: "collide",
    value: function collide(salmon) {
      var _overlap = function _overlap(rect1, rect2) {
        //check that they don't overlap in the x axis
        if (rect1.bounds().left > rect2.bounds().right || rect1.bounds().right < rect2.bounds().left) {
          return false;
        } //check that they don't overlap in the y axis


        if (rect1.bounds().top > rect2.bounds().bottom || rect1.bounds().bottom < rect2.bounds().top) {
          return false;
        }

        return true;
      };

      var touch = false; // if (salmon.y === Nan)

      if (_overlap(this, salmon)) {
        touch = true;
      }

      return touch;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.eaten) {
        ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, this.x, this.y, this.width, this.height);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.xVel; // this.y += this.yVel
      // const frameSpeed = 10;
      // const endFrame = 3
      // if (this.counter === (frameSpeed - 1)) {
      //   this.currentFrame = (this.currentFrame + 1) % endFrame;
      // }
      // this.counter = (this.counter + 1) % frameSpeed;
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.update();
      this.draw(ctx);
    }
  }, {
    key: "bounds",
    value: function bounds() {
      return {
        left: this.x,
        right: this.x + this.width,
        top: this.y,
        bottom: this.y + this.height
      };
    }
  }]);

  return MovingObj;
}();



/***/ }),

/***/ "./src/prey.js":
/*!*********************!*\
  !*** ./src/prey.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Prey; });
/* harmony import */ var _moving_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_obj */ "./src/moving_obj.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Prey =
/*#__PURE__*/
function (_MovingObj) {
  _inherits(Prey, _MovingObj);

  function Prey(pos, width, height) {
    var _this;

    _classCallCheck(this, Prey);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Prey).call(this, pos, width, height));
    _this.pos = pos;
    _this.x = pos[0];
    _this.y = pos[1];
    _this.width = width;
    _this.height = height;
    _this.foodValue = 0;
    _this.eaten = false;
    _this.img = new Image(); // this.img.src = "./assets/images/zoo-plankton.png";

    return _this;
  }

  _createClass(Prey, [{
    key: "moveRandomly",
    value: function moveRandomly() {
      this.x += Math.floor(Math.random() * 5);
      this.x -= Math.floor(Math.random() * 3);
      this.y += Math.floor(Math.random() * 5);
      this.y -= Math.floor(Math.random() * 5);
    }
  }, {
    key: "getEaten",
    value: function getEaten(salmon) {
      if (this.collide(salmon)) {
        if (!this.eaten) {
          salmon.totalEaten += this.foodValue;
          salmon.grow();
          this.eaten = true;
        }
      }
    }
  }]);

  return Prey;
}(_moving_obj__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/salmon.js":
/*!***********************!*\
  !*** ./src/salmon.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Salmon; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  GRAVITY: 1,
  TERMINAL_VEL: 25
};

var Salmon =
/*#__PURE__*/
function () {
  function Salmon(width) {
    _classCallCheck(this, Salmon);

    this.x = 150;
    this.y = 350;
    this.initialWidth = width;
    this.width = this.initialWidth;
    this.height = this.width * .56;
    this.yVel = 0;
    this.xVel = 0; // this.jumpSpeed = this.height *;

    this.alive = true;
    this.faceLeft = true;
    this.totalEaten = 0;
    this.currentFrame = 0;
    this.counter = 0;
  } // jump() { this.yVel = -1 * this.jumpSpeed; }


  _createClass(Salmon, [{
    key: "moveLeft",
    value: function moveLeft() {
      this.xVel += -1 * this.height / 9;
      this.faceLeft = true;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.xVel += this.height / 9;
      this.faceLeft = false;
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.yVel += -1 * this.height / 5;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.yVel += this.height / 7;
    }
  }, {
    key: "moveSalmon",
    value: function moveSalmon() {
      this.x += this.xVel;
      this.y += this.yVel;
      this.yVel += CONSTANTS.GRAVITY;

      if (this.yVel > CONSTANTS.TERMINAL_VEL) {
        this.yVel = CONSTANTS.TERMINAL_VEL;
      }
    }
  }, {
    key: "grow",
    value: function grow() {
      this.width = this.initialWidth + Math.floor(this.totalEaten / 3);
    }
  }, {
    key: "drawSalmon",
    value: function drawSalmon(ctx) {
      this.height = this.width * .56; // ctx.save();

      var salmonImg = new Image();
      var framesWidth = 25;
      var framesHeight = 14;
      salmonImg.src = "./assets/images/salmon.png";

      if (this.faceLeft) {
        ctx.drawImage(salmonImg, 0, this.currentFrame * framesHeight, framesWidth, framesHeight, this.x, this.y, this.width, this.height);
      } else {
        ctx.drawImage(salmonImg, 26, this.currentFrame * framesHeight, framesWidth, framesHeight, this.x - this.width + this.height, this.y, this.width, this.height);
      } // ctx.restore();

    }
  }, {
    key: "update",
    value: function update() {
      var frameSpeed = 10;
      var endFrame = 3;

      if (this.counter === frameSpeed - 1) {
        this.currentFrame = (this.currentFrame + 1) % endFrame;
      }

      this.counter = (this.counter + 1) % frameSpeed;
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.update();
      this.moveSalmon();
      this.drawSalmon(ctx);
    }
  }, {
    key: "bounds",
    value: function bounds() {
      return {
        left: this.x,
        right: this.x + this.height,
        top: this.y,
        bottom: this.y + this.height
      };
    }
  }]);

  return Salmon;
}();



/***/ }),

/***/ "./src/salmon_run.js":
/*!***************************!*\
  !*** ./src/salmon_run.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SalmonRun; });
/* harmony import */ var _salmon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salmon */ "./src/salmon.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ "./src/level.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera */ "./src/camera.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var SalmonRun =
/*#__PURE__*/
function () {
  function SalmonRun(canvas, cam) {
    _classCallCheck(this, SalmonRun);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.cam = cam.getContext("2d");
    this.camDim = {
      width: cam.width,
      height: cam.height
    };
    this.moveInput = {
      up: false,
      left: false,
      down: false,
      right: false
    };
    this.running = true;
    this.registerEvents();
    this.restart();
  }

  _createClass(SalmonRun, [{
    key: "play",
    value: function play() {
      if (!this.running) {
        this.running = true;
        this.animate();
        this.camera.unpause();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.running) {
        this.running = false;
        this.camera.pause();
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      return !this.salmon.alive || this.timeZero();
    }
  }, {
    key: "timeZero",
    value: function timeZero() {
      return this.timeleft() === 0;
    }
  }, {
    key: "timeleft",
    value: function timeleft() {
      return this.camera.countdown;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.salmon = new _salmon__WEBPACK_IMPORTED_MODULE_0__["default"](25);
      this.level = new _level__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions);
      this.camera = new _camera__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, this.camDim.width, this.camDim.height, this.dimensions.width, this.dimensions.height);
      this.camera.follow(this.salmon);
      this.animate();
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      // this.ctx.canvas.addEventListener("mousedown", this.click.bind(this));
      document.addEventListener("keydown", this.keyDown.bind(this));
      document.addEventListener("keyup", this.keyUp.bind(this));
    }
  }, {
    key: "click",
    value: function click(e) {
      if (!this.running) this.play();
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      // console.log(e.key)
      if (e.key === 'w' || e.key === 'ArrowUp') this.moveInput.up = true;
      if (e.key === 'a' || e.key === 'ArrowLeft') this.moveInput.left = true;
      if (e.key === 's' || e.key === 'ArrowDown') this.moveInput.down = true;
      if (e.key === 'd' || e.key === 'ArrowRight') this.moveInput.right = true;
      if (e.key === 'p' || e.key === 'Escape') this.pause();
      if (e.key === ' ') this.play();
    }
  }, {
    key: "keyUp",
    value: function keyUp(e) {
      if (e.key === 'w' || e.key === 'ArrowUp') this.moveInput.up = false;
      if (e.key === 'a' || e.key === 'ArrowLeft') this.moveInput.left = false;
      if (e.key === 's' || e.key === 'ArrowDown') this.moveInput.down = false;
      if (e.key === 'd' || e.key === 'ArrowRight') this.moveInput.right = false;
    }
  }, {
    key: "salmonMove",
    value: function salmonMove() {
      if (this.moveInput.up) this.salmon.moveUp();
      if (this.moveInput.left) this.salmon.moveLeft();
      if (this.moveInput.down) this.salmon.moveDown();
      if (this.moveInput.right) this.salmon.moveRight();
      this.level.inLevel(this.salmon);
    }
  }, {
    key: "salmonTotalEaten",
    value: function salmonTotalEaten() {
      return this.salmon.totalEaten;
    }
  }, {
    key: "showScore",
    value: function showScore() {
      this.camera.takeScore(this.salmonTotalEaten(), this.salmon.width);
    }
  }, {
    key: "playGame",
    value: function playGame() {
      if (this.level.atSurface(this.salmon)) this.salmonMove();
      this.level.animate(this.ctx, this.salmon);
      this.salmon.animate(this.ctx);
      this.camera.animate(this.cam, this.canvas);
      if (this.gameOver()) this.playGameover();

      if (this.running) {
        requestAnimationFrame(this.animate.bind(this));
      }
    }
  }, {
    key: "playGameover",
    value: function playGameover() {
      this.showScore(); // this.restart();
      // if (this.gameOver()) {
      // }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
      this.playGame();
    }
  }]);

  return SalmonRun;
}();



/***/ }),

/***/ "./src/water.js":
/*!**********************!*\
  !*** ./src/water.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Water; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Water =
/*#__PURE__*/
function (_Element) {
  _inherits(Water, _Element);

  function Water(pos, width, height, shape) {
    var _this;

    _classCallCheck(this, Water);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Water).call(this, pos, width, height));
    _this.pos = [pos[0] + width / 2, pos[1] + height / 2];
    _this.width = width;
    _this.height = height;
    _this.shape = shape;
    _this.left = pos[0];
    _this.top = pos[1];
    _this.right = _this.left + _this.width;
    _this.bottom = _this.top + _this.height;
    _this.friction = 0.8;
    _this.current = -1;
    _this.buoyancy = -0.5;
    return _this;
  }

  _createClass(Water, [{
    key: "randomPos",
    value: function randomPos() {
      return [this.randomPos(), this.randomYPos()];
    }
  }, {
    key: "randomXPos",
    value: function randomXPos() {
      return Math.floor(Math.random() * this.width);
    }
  }, {
    key: "randomYPos",
    value: function randomYPos() {
      return Math.floor(Math.random() * (this.height - 50) + this.top);
    }
  }, {
    key: "applyCurrent",
    value: function applyCurrent(obj) {
      if (this.salmonIsIn(obj)) {
        obj.xVel *= this.friction;
        obj.yVel *= this.friction;
        obj.xVel += this.current;
        obj.yVel += this.buoyancy;

        if (obj.y < this.top + 100) {
          obj.xVel += this.current;
          obj.yVel -= this.buoyancy;
        }
      }
    }
  }, {
    key: "inWater",
    value: function inWater(salmon) {
      var _overlap = function _overlap(rect1, rect2) {
        var obj1Radius = rect1.width / 2;
        var obj2Radius = rect2.height / 2;
        var totalRadius = obj1Radius + obj2Radius;
        var a = rect2.x - rect1.pos[0];
        var b = rect2.y - rect1.pos[1];
        var c = Math.sqrt(a * a + b * b); //check that they don't overlap in the x axis

        if (c < totalRadius) return true;
        return false;
      };

      var isIn = false;
      if (_overlap(this, salmon)) isIn = true;
      return _overlap(this, salmon);
    }
  }, {
    key: "drawWater",
    value: function drawWater(ctx) {
      ctx.fillStyle = "rgba(150, 205, 255, 0.8)";

      if (this.shape === 'rect') {
        ctx.fillRect(this.left, this.top, this.width, this.height); // } else if (this.shape === 'circle') {
        //   ctx.beginPath();
        //   ctx.arc(this.pos[0], this.pos[1], this.width/6, 0, 360)
        //   ctx.fill();
      }
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.drawWater(ctx);
    }
  }]);

  return Water;
}(_element__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/zoo_plankton.js":
/*!*****************************!*\
  !*** ./src/zoo_plankton.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZooPlankton; });
/* harmony import */ var _prey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prey */ "./src/prey.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ZooPlankton =
/*#__PURE__*/
function (_Prey) {
  _inherits(ZooPlankton, _Prey);

  function ZooPlankton(pos, width, height) {
    var _this;

    _classCallCheck(this, ZooPlankton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZooPlankton).call(this, pos, width, height));
    _this.pos = pos;
    _this.x = pos[0];
    _this.y = pos[1];
    _this.width = width;
    _this.height = height;
    _this.foodValue = 1;
    _this.eaten = false;
    _this.img = new Image();
    _this.img.src = "./assets/images/zoo-plankton.png";
    return _this;
  }

  return ZooPlankton;
}(_prey__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map