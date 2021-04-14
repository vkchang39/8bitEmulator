/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chip8": () => (/* binding */ Chip8)
/* harmony export */ });
/* harmony import */ var _Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Memory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



class Chip8 {
	constructor() {
		console.log("Create a new emulator");
		this.display = new _Display__WEBPACK_IMPORTED_MODULE_0__.Display();
		this.memory = new _Memory__WEBPACK_IMPORTED_MODULE_1__.Memory();
	}
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Display": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Display {
	constructor() {
		console.log("Create a new display");
		this.screen = document.querySelector("canvas");
		this.screen.width = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLY;
		this.screen.height = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLY;
		this.context = this.screen.getContext("2d");
		this.context.fill = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.BG_COLOR;
		this.frameBuffer = [];
		this.reset();
	}
	reset() {
		for (let i = 0; i < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT; i++) {
			this.frameBuffer.push([]);
			for (let j = 0; j < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH; j++) {
				this.frameBuffer[i].push(1);
			}
		}
		this.context.fillRect(0, 0, this.screen.width, this.screen.height);
		this.drawBuffer();
	}
	drawBuffer() {
		for (let i = 0; i < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_HEIGHT; i++) {
			this.frameBuffer.push([]);
			for (let j = 0; j < _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_WIDTH; j++) {
				this.drawPixel(i, j, this.frameBuffer[i][j]);
			}
		}
	}
	drawPixel(h, w, value) {
		if (value) {
			this.context.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.COLOR;
		} else {
			this.context.fillStyle = _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.BG_COLOR;
		}
		this.context.fillRect(
			w * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLY,
			h * _constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLY,
			_constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLY,
			_constants_displayConstants__WEBPACK_IMPORTED_MODULE_0__.DISPLAY_MULTIPLY
		);
	}
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DISPLAY_WIDTH": () => (/* binding */ DISPLAY_WIDTH),
/* harmony export */   "DISPLAY_HEIGHT": () => (/* binding */ DISPLAY_HEIGHT),
/* harmony export */   "DISPLAY_MULTIPLY": () => (/* binding */ DISPLAY_MULTIPLY),
/* harmony export */   "BG_COLOR": () => (/* binding */ BG_COLOR),
/* harmony export */   "COLOR": () => (/* binding */ COLOR)
/* harmony export */ });
const DISPLAY_WIDTH = 64;
const DISPLAY_HEIGHT = 32;
const DISPLAY_MULTIPLY = 10;
const BG_COLOR = "#000";
const COLOR = "#3F6";


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Memory": () => (/* binding */ Memory)
/* harmony export */ });
/* harmony import */ var _constants_memoryConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


class Memory {
	constructor() {
		this.memory = new Uint8Array(_constants_memoryConstants__WEBPACK_IMPORTED_MODULE_0__.MEMORY_SIZE);
		this.reset();
	}
	reset() {
		this.memory.fill(0);
	}
	setMemory(index, value) {
		this.assertMemory(index);
		this.memory[index] = value;
	}
	getMemory(index) {
		this.assertMemory(index);
		return this.memory[index];
	}
	assertMemory(index) {
		console.assert(
			index >= 0 && index < _constants_memoryConstants__WEBPACK_IMPORTED_MODULE_0__.MEMORY_SIZE,
			`Error trying to access memory at ${index}`
		);
	}
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MEMORY_SIZE": () => (/* binding */ MEMORY_SIZE),
/* harmony export */   "LOAD_PROGRAM_ADDRESS": () => (/* binding */ LOAD_PROGRAM_ADDRESS)
/* harmony export */ });
const MEMORY_SIZE = 4095;
const LOAD_PROGRAM_ADDRESS = 0x200;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chip8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const chip8 = new _Chip8__WEBPACK_IMPORTED_MODULE_0__.Chip8();

})();

/******/ })()
;