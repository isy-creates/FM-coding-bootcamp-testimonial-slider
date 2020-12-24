/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/components/slider.js":
/*!*********************************************!*\
  !*** ./src/javascript/components/slider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider() {
    _classCallCheck(this, Slider);

    this.slider = document.querySelector('.testimonial');
    this.sliderItems = Array.from(this.slider.children);
    this.next = document.querySelector('.navigation__icon--next');
    this.prev = document.querySelector('.navigation__icon--prev');
    this.imageContainer = document.querySelector('.testimonial__portrait');
    this.navigation = document.querySelector('.navigation');
    this.events();
    this.naviPosition();
  } //let the slider start from pos. 1, wenn empty
  //indicate the end of the List


  _createClass(Slider, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.next.addEventListener('click', function () {
        return _this.slideToRight();
      });
      this.prev.addEventListener('click', function () {
        return _this.slideToLeft();
      });
      window.addEventListener('resize', function () {
        return _this.naviPosition();
      });
    }
  }, {
    key: "slideToRight",
    value: function slideToRight() {
      var _this2 = this;

      this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width;
      this.sliderItems.forEach(function (el) {
        el.style.transform = "translateX(-" + _this2.sliderWidth + "px)";
      });
    }
  }, {
    key: "slideToLeft",
    value: function slideToLeft() {
      this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width;
      this.sliderItems.forEach(function (el) {
        el.style.transform = "translateX(" + 0 + "px)";
      });
    }
  }, {
    key: "naviPosition",
    value: function naviPosition() {
      var imageHeight = this.imageContainer.getBoundingClientRect().height;
      var imageFromTop = this.imageContainer.getBoundingClientRect().top;
      var navigationHeight = this.navigation.getBoundingClientRect().height / 2;
      var position = imageHeight + imageFromTop - navigationHeight;
      this.navigation.style.top = position + "px";
    }
  }]);

  return Slider;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ "./src/javascript/components/slider.js");


new _components_slider__WEBPACK_IMPORTED_MODULE_1__.default();

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/javascript/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3M/MDk3MSIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlNsaWRlciIsInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlckl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJuZXh0IiwicHJldiIsImltYWdlQ29udGFpbmVyIiwibmF2aWdhdGlvbiIsImV2ZW50cyIsIm5hdmlQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGlkZVRvUmlnaHQiLCJzbGlkZVRvTGVmdCIsIndpbmRvdyIsInNsaWRlcldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJmb3JFYWNoIiwiZWwiLCJzdHlsZSIsInRyYW5zZm9ybSIsImltYWdlSGVpZ2h0IiwiaGVpZ2h0IiwiaW1hZ2VGcm9tVG9wIiwidG9wIiwibmF2aWdhdGlvbkhlaWdodCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFkO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkMsS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS0wsTUFBTCxDQUFZTSxRQUF2QixDQUFuQjtBQUVBLFNBQUtDLElBQUwsR0FBWU4sUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFaO0FBQ0EsU0FBS00sSUFBTCxHQUFZUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQVo7QUFFQSxTQUFLTyxjQUFMLEdBQXNCUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXRCO0FBQ0EsU0FBS1EsVUFBTCxHQUFrQlQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBRUEsU0FBS1MsTUFBTDtBQUNBLFNBQUtDLFlBQUw7QUFDRCxHLENBRUQ7QUFDQTs7Ozs7NkJBR1E7QUFBQTs7QUFDTixXQUFLTCxJQUFMLENBQVVNLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DO0FBQUEsZUFBTSxLQUFJLENBQUNDLFlBQUwsRUFBTjtBQUFBLE9BQXBDO0FBQ0EsV0FBS04sSUFBTCxDQUFVSyxnQkFBVixDQUEyQixPQUEzQixFQUFvQztBQUFBLGVBQU0sS0FBSSxDQUFDRSxXQUFMLEVBQU47QUFBQSxPQUFwQztBQUNBQyxZQUFNLENBQUNILGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQUEsZUFBTSxLQUFJLENBQUNELFlBQUwsRUFBTjtBQUFBLE9BQWxDO0FBQ0Q7OzttQ0FFYTtBQUFBOztBQUNaLFdBQUtLLFdBQUwsR0FBbUIsS0FBS2QsV0FBTCxDQUFpQixDQUFqQixFQUFvQmUscUJBQXBCLEdBQTRDQyxLQUEvRDtBQUVBLFdBQUtoQixXQUFMLENBQWlCaUIsT0FBakIsQ0FBMEIsVUFBQ0MsRUFBRCxFQUFRO0FBQ2hDQSxVQUFFLENBQUNDLEtBQUgsQ0FBU0MsU0FBVCxHQUFxQixpQkFBaUIsTUFBSSxDQUFDTixXQUF0QixHQUFvQyxLQUF6RDtBQUVELE9BSEQ7QUFJRDs7O2tDQUVZO0FBQ1gsV0FBS0EsV0FBTCxHQUFtQixLQUFLZCxXQUFMLENBQWlCLENBQWpCLEVBQW9CZSxxQkFBcEIsR0FBNENDLEtBQS9EO0FBRUEsV0FBS2hCLFdBQUwsQ0FBaUJpQixPQUFqQixDQUEwQixVQUFDQyxFQUFELEVBQVE7QUFDaENBLFVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxTQUFULEdBQXFCLGdCQUFnQixDQUFoQixHQUFvQixLQUF6QztBQUVELE9BSEQ7QUFJRDs7O21DQUVhO0FBQ1osVUFBSUMsV0FBVyxHQUFHLEtBQUtmLGNBQUwsQ0FBb0JTLHFCQUFwQixHQUE0Q08sTUFBOUQ7QUFDQSxVQUFJQyxZQUFZLEdBQUcsS0FBS2pCLGNBQUwsQ0FBb0JTLHFCQUFwQixHQUE0Q1MsR0FBL0Q7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBRyxLQUFLbEIsVUFBTCxDQUFnQlEscUJBQWhCLEdBQXdDTyxNQUF4QyxHQUFpRCxDQUF4RTtBQUNBLFVBQUlJLFFBQVEsR0FBR0wsV0FBVyxHQUFHRSxZQUFkLEdBQTZCRSxnQkFBNUM7QUFDQSxXQUFLbEIsVUFBTCxDQUFnQlksS0FBaEIsQ0FBc0JLLEdBQXRCLEdBQTRCRSxRQUFRLEdBQUcsSUFBdkM7QUFDRDs7Ozs7O0FBSUgsaUVBQWU5QixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFFQTtBQUVBLElBQUlBLHVEQUFKLEc7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbCcpO1xyXG4gICAgdGhpcy5zbGlkZXJJdGVtcyA9IEFycmF5LmZyb20odGhpcy5zbGlkZXIuY2hpbGRyZW4pO1xyXG4gICAgXHJcbiAgICB0aGlzLm5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9faWNvbi0tbmV4dCcpO1xyXG4gICAgdGhpcy5wcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2ljb24tLXByZXYnKTtcclxuXHJcbiAgICB0aGlzLmltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsX19wb3J0cmFpdCcpO1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24nKTtcclxuXHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgdGhpcy5uYXZpUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8vbGV0IHRoZSBzbGlkZXIgc3RhcnQgZnJvbSBwb3MuIDEsIHdlbm4gZW1wdHlcclxuICAvL2luZGljYXRlIHRoZSBlbmQgb2YgdGhlIExpc3RcclxuXHJcblxyXG4gIGV2ZW50cygpe1xyXG4gICAgdGhpcy5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zbGlkZVRvUmlnaHQoKSApO1xyXG4gICAgdGhpcy5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5zbGlkZVRvTGVmdCgpICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5uYXZpUG9zaXRpb24oKSApO1xyXG4gIH1cclxuXHJcbiAgc2xpZGVUb1JpZ2h0KCl7XHJcbiAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zbGlkZXJJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuXHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zLmZvckVhY2goIChlbCkgPT4ge1xyXG4gICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLVwiICsgdGhpcy5zbGlkZXJXaWR0aCArIFwicHgpXCI7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzbGlkZVRvTGVmdCgpe1xyXG4gICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMuc2xpZGVySXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcblxyXG4gICAgdGhpcy5zbGlkZXJJdGVtcy5mb3JFYWNoKCAoZWwpID0+IHtcclxuICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgMCArIFwicHgpXCI7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuYXZpUG9zaXRpb24oKXtcclxuICAgIGxldCBpbWFnZUhlaWdodCA9IHRoaXMuaW1hZ2VDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgbGV0IGltYWdlRnJvbVRvcCA9IHRoaXMuaW1hZ2VDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgbGV0IG5hdmlnYXRpb25IZWlnaHQgPSB0aGlzLm5hdmlnYXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMjtcclxuICAgIGxldCBwb3NpdGlvbiA9IGltYWdlSGVpZ2h0ICsgaW1hZ2VGcm9tVG9wIC0gbmF2aWdhdGlvbkhlaWdodDtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5zdHlsZS50b3AgPSBwb3NpdGlvbiArIFwicHhcIjtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlcic7XHJcblxyXG5uZXcgU2xpZGVyKCk7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==