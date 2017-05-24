webpackJsonp([1,4],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Mancala game using Angular 4';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(187),
        styles: [__webpack_require__(181)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__presentation_board_board_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__presentation_mancala_mancala_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__presentation_pit_pit_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__presentation_stone_stone_component__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__presentation_board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__presentation_mancala_mancala_component__["a" /* MancalaComponent */],
            __WEBPACK_IMPORTED_MODULE_8__presentation_pit_pit_component__["a" /* PitComponent */],
            __WEBPACK_IMPORTED_MODULE_9__presentation_stone_stone_component__["a" /* StoneComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BoardComponent = (function () {
    function BoardComponent() {
        this.pits = Array(12).fill(4);
        this.mancala1 = 0;
        this.mancala2 = 0;
        this.player = '1';
        this.winner = null;
    }
    Object.defineProperty(BoardComponent.prototype, "gameStatusMessage", {
        get: function () {
            return this.winner ? "Player " + this.winner + " has won!" :
                "Player " + this.player + "'s turn";
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.handleMove = function (position) {
        console.log("clicked ==> ", position);
        if (!this.winner && !this.pits[position]) {
            //this.pits[position] = this.player;
            this.fillPits(position);
            if (this.winnigMove()) {
                this.winner = this.player;
            }
            this.player = this.player === '1' ? '2' : '1';
        }
    };
    BoardComponent.prototype.fillPits = function (startpos) {
    };
    BoardComponent.prototype.winnigMove = function () {
    };
    BoardComponent.prototype.restartGame = function () {
    };
    return BoardComponent;
}());
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'board',
        template: __webpack_require__(188),
        styles: [__webpack_require__(182)]
    })
], BoardComponent);

//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MancalaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MancalaComponent = (function () {
    function MancalaComponent() {
    }
    return MancalaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Number)
], MancalaComponent.prototype, "stonecount", void 0);
MancalaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'mancala',
        template: __webpack_require__(189),
        styles: [__webpack_require__(183)]
    })
], MancalaComponent);

//# sourceMappingURL=mancala.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PitComponent = (function () {
    function PitComponent() {
    }
    return PitComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], PitComponent.prototype, "state", void 0);
PitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'pit',
        template: __webpack_require__(190),
        styles: [__webpack_require__(184)]
    })
], PitComponent);

//# sourceMappingURL=pit.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoneComponent = (function () {
    function StoneComponent() {
    }
    StoneComponent.prototype.ngOnInit = function () {
    };
    return StoneComponent;
}());
StoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'stone',
        template: __webpack_require__(191),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], StoneComponent);

//# sourceMappingURL=stone.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Dosis|Gochi+Hand:400italic,700italic,400,700);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 100%;\n  margin: 0 auto;\n  color: #34495e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".playAction {\n  width: 100%; }\n\n.player1, .player1-pits {\n  background-color: grey; }\n\n.player2, .player2-pits {\n  background-color: brown; }\n\n.gameStatus {\n  margin: 0px;\n  padding: 6px;\n  background-color: #34495e;\n  color: #fff;\n  font-size: 1em;\n  font-weight: bold; }\n\n.restart {\n  background-color: #34495e;\n  color: #fff;\n  border: 0px;\n  font-family: 'Dosis', Helvetica, sans-serif;\n  font-size: 1em;\n  font-weight: bold;\n  margin: 0px;\n  padding: 6px;\n  width: 100%; }\n\n.restart:hover {\n  background-color: #c1cdcd;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".mancala {\n  margin: 3px;\n  padding: 1px;\n  background-color: white;\n  border-radius: 40px;\n  height: 88%; }\n  .mancala p {\n    position: relative;\n    top: 40%;\n    width: 100%;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    -webkit-transform: translate(0, -40%);\n            transform: translate(0, -40%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".pit {\n  width: 90px;\n  height: 90px;\n  display: inline-block;\n  position: relative;\n  margin: 10px;\n  border-radius: 100%;\n  background-color: white;\n  color: #000;\n  cursor: pointer; }\n  .pit p {\n    position: absolute;\n    top: 40%;\n    width: 100%;\n    -webkit-transform: translate(0, -60%);\n            transform: translate(0, -60%);\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div fxFlexFill fxLayout=\"column\">\n    <div class=\"wrapper\">\n        <h3>{{ title }}</h3>\n      <board></board>\n    </div>\n</div>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"gameStatus\" >\n  {{gameStatusMessage}}\n</div>\n<div>\n    <div [fxLayout]=\"row\" fxLayout.xs=\"column\" fxFlex>\n      <div class=\"player1\" fxFlex=\"1 3 20%\" fxFlexOrder fxFlexOrder.xs=\"1\" >\n        <mancala [stonecount]=\"0\"></mancala>\n      </div>\n      <div fxFlexOrder fxFlexOrder.xs=\"2\" fxFlex=\"noshrink\">\n        <div fxLayout=\"column\" fxLayout.xs=\"row\" fxFlex>\n          <div class=\"bay\" fxFlex=\"6 1 50%\" fxFlexOrder fxFlexOrder.xs=\"1\">\n            <div class=\"player1-pits\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex fxLayoutAlign=\"space-around center\">\n              <pit *ngFor=\"let pos of [0,1,2,3,4,5]\"\n                [state]=\"pits[pos]\"\n                (click)=\"handleMove(pos)\"\n              >\n              </pit>\n            </div>\n          </div>\n        <!--<br>-->\n          <div class=\"bay\" fxFlex=\"6 1 50%\" fxFlexOrder fxFlexOrder.xs=\"2\">\n            <div class=\"player2-pits\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex fxLayoutAlign=\"space-around center\">\n              <pit *ngFor=\"let pos of [6,7,8,9,10,11]\"\n                [state]=\"pits[pos]\"\n                (click)=\"handleMove(pos)\"\n              >\n              </pit>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"player2\" fxFlex=\"1 3 20%\" fxFlexOrder fxFlexOrder.xs=\"3\">\n        <mancala [stonecount]=\"0\"></mancala>\n      </div>\n    </div>\n</div>\n<div class=\"playAction\">\n  <button class=\"restart\" (click)=\"restartGame()\">New Game</button>\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"mancala\" >\n  <p>{{ stonecount }}</p>\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class=\"pit\"> \n  <p>{{ state }}</p>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<p>\n  stone works!\n</p>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(127);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.bundle.js.map