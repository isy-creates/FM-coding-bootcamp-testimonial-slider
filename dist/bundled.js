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
    this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width;
    this.next = document.querySelector('.navigation__icon--next');
    this.prev = document.querySelector('.navigation__icon--prev');
    this.imageContainer = document.querySelector('.testimonial__portrait');
    this.navigation = document.querySelector('.navigation');
    this.events();
    this.naviPosition();
  }

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
      var currentSlide = document.querySelector('.current-slide');
      var nextSlide = currentSlide.nextElementSibling;
      var style = document.querySelector('.current-slide').style.transform;
      var translateX = style.replace(/[^\d.]/g, '');
      var translateX_num = +translateX;
      var currentPosition = this.sliderWidth + translateX_num;
      this.sliderItems.forEach(function (el) {
        //get current translatex position || save current x position
        el.style.transform = "translateX(-" + currentPosition + "px)";
      });
      currentSlide.classList.remove('current-slide');
      nextSlide.classList.add('current-slide');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGluZy1ib290Y2FtcC10ZXN0aW1vbmlhbHMtc2xpZGVyLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJzbGlkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJJdGVtcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwic2xpZGVyV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm5leHQiLCJwcmV2IiwiaW1hZ2VDb250YWluZXIiLCJuYXZpZ2F0aW9uIiwiZXZlbnRzIiwibmF2aVBvc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWRlVG9SaWdodCIsInNsaWRlVG9MZWZ0Iiwid2luZG93IiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2xhdGVYIiwicmVwbGFjZSIsInRyYW5zbGF0ZVhfbnVtIiwiY3VycmVudFBvc2l0aW9uIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW1hZ2VIZWlnaHQiLCJoZWlnaHQiLCJpbWFnZUZyb21Ub3AiLCJ0b3AiLCJuYXZpZ2F0aW9uSGVpZ2h0IiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWQ7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFLTCxNQUFMLENBQVlNLFFBQXZCLENBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLSixXQUFMLENBQWlCLENBQWpCLEVBQW9CSyxxQkFBcEIsR0FBNENDLEtBQS9EO0FBRUEsU0FBS0MsSUFBTCxHQUFZVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQVo7QUFDQSxTQUFLUyxJQUFMLEdBQVlWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWjtBQUVBLFNBQUtVLGNBQUwsR0FBc0JYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdEI7QUFDQSxTQUFLVyxVQUFMLEdBQWtCWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFFQSxTQUFLWSxNQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUdEOzs7OzZCQUdPO0FBQUE7O0FBQ04sV0FBS0wsSUFBTCxDQUFVTSxnQkFBVixDQUEyQixPQUEzQixFQUFvQztBQUFBLGVBQU0sS0FBSSxDQUFDQyxZQUFMLEVBQU47QUFBQSxPQUFwQztBQUNBLFdBQUtOLElBQUwsQ0FBVUssZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0M7QUFBQSxlQUFNLEtBQUksQ0FBQ0UsV0FBTCxFQUFOO0FBQUEsT0FBcEM7QUFDQUMsWUFBTSxDQUFDSCxnQkFBUCxDQUF3QixRQUF4QixFQUFrQztBQUFBLGVBQU0sS0FBSSxDQUFDRCxZQUFMLEVBQU47QUFBQSxPQUFsQztBQUNEOzs7bUNBRWE7QUFDWixVQUFNSyxZQUFZLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXJCO0FBQ0EsVUFBTW1CLFNBQVMsR0FBR0QsWUFBWSxDQUFDRSxrQkFBL0I7QUFFQSxVQUFJQyxLQUFLLEdBQUd0QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDcUIsS0FBekMsQ0FBK0NDLFNBQTNEO0FBQ0EsVUFBSUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxTQUFkLEVBQXlCLEVBQXpCLENBQWpCO0FBQ0EsVUFBSUMsY0FBYyxHQUFHLENBQUNGLFVBQXRCO0FBRUEsVUFBSUcsZUFBZSxHQUFHLEtBQUtyQixXQUFMLEdBQW1Cb0IsY0FBekM7QUFFQSxXQUFLeEIsV0FBTCxDQUFpQjBCLE9BQWpCLENBQTBCLFVBQUNDLEVBQUQsRUFBTztBQUUvQjtBQUNBQSxVQUFFLENBQUNQLEtBQUgsQ0FBU0MsU0FBVCxHQUFxQixpQkFBaUJJLGVBQWpCLEdBQW1DLEtBQXhEO0FBQ0QsT0FKRDtBQU1BUixrQkFBWSxDQUFDVyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixlQUE5QjtBQUNBWCxlQUFTLENBQUNVLFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLGVBQXhCO0FBQ0Q7OztrQ0FFWTtBQUNYLFdBQUsxQixXQUFMLEdBQW1CLEtBQUtKLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0JLLHFCQUFwQixHQUE0Q0MsS0FBL0Q7QUFFQSxXQUFLTixXQUFMLENBQWlCMEIsT0FBakIsQ0FBMEIsVUFBQ0MsRUFBRCxFQUFRO0FBQ2hDQSxVQUFFLENBQUNQLEtBQUgsQ0FBU0MsU0FBVCxHQUFxQixnQkFBZ0IsQ0FBaEIsR0FBb0IsS0FBekM7QUFFRCxPQUhEO0FBSUQ7OzttQ0FFYTtBQUNaLFVBQUlVLFdBQVcsR0FBRyxLQUFLdEIsY0FBTCxDQUFvQkoscUJBQXBCLEdBQTRDMkIsTUFBOUQ7QUFDQSxVQUFJQyxZQUFZLEdBQUcsS0FBS3hCLGNBQUwsQ0FBb0JKLHFCQUFwQixHQUE0QzZCLEdBQS9EO0FBQ0EsVUFBSUMsZ0JBQWdCLEdBQUcsS0FBS3pCLFVBQUwsQ0FBZ0JMLHFCQUFoQixHQUF3QzJCLE1BQXhDLEdBQWlELENBQXhFO0FBQ0EsVUFBSUksUUFBUSxHQUFHTCxXQUFXLEdBQUdFLFlBQWQsR0FBNkJFLGdCQUE1QztBQUNBLFdBQUt6QixVQUFMLENBQWdCVSxLQUFoQixDQUFzQmMsR0FBdEIsR0FBNEJFLFFBQVEsR0FBRyxJQUF2QztBQUNEOzs7Ozs7QUFJSCxpRUFBZXhDLE1BQWYsRTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUVBO0FBRUEsSUFBSUEsdURBQUosRzs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2xpZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsJyk7XHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLnNsaWRlci5jaGlsZHJlbik7XHJcbiAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zbGlkZXJJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIFxyXG4gICAgdGhpcy5uZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2ljb24tLW5leHQnKTtcclxuICAgIHRoaXMucHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19pY29uLS1wcmV2Jyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbF9fcG9ydHJhaXQnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcblxyXG4gICAgdGhpcy5ldmVudHMoKTtcclxuICAgIHRoaXMubmF2aVBvc2l0aW9uKCk7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBldmVudHMoKXtcclxuICAgIHRoaXMubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2xpZGVUb1JpZ2h0KCkgKTtcclxuICAgIHRoaXMucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuc2xpZGVUb0xlZnQoKSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMubmF2aVBvc2l0aW9uKCkgKTtcclxuICB9XHJcblxyXG4gIHNsaWRlVG9SaWdodCgpe1xyXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKS5zdHlsZS50cmFuc2Zvcm07XHJcbiAgICBsZXQgdHJhbnNsYXRlWCA9IHN0eWxlLnJlcGxhY2UoL1teXFxkLl0vZywgJycpO1xyXG4gICAgbGV0IHRyYW5zbGF0ZVhfbnVtID0gK3RyYW5zbGF0ZVg7XHJcbiAgICAgIFxyXG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc2xpZGVyV2lkdGggKyB0cmFuc2xhdGVYX251bTtcclxuXHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zLmZvckVhY2goIChlbCkgPT57XHJcblxyXG4gICAgICAvL2dldCBjdXJyZW50IHRyYW5zbGF0ZXggcG9zaXRpb24gfHwgc2F2ZSBjdXJyZW50IHggcG9zaXRpb25cclxuICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC1cIiArIGN1cnJlbnRQb3NpdGlvbiArIFwicHgpXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1zbGlkZScpO1xyXG4gICAgbmV4dFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtc2xpZGUnKTtcclxuICB9XHJcblxyXG4gIHNsaWRlVG9MZWZ0KCl7XHJcbiAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zbGlkZXJJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuXHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zLmZvckVhY2goIChlbCkgPT4ge1xyXG4gICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyAwICsgXCJweClcIjtcclxuICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5hdmlQb3NpdGlvbigpe1xyXG4gICAgbGV0IGltYWdlSGVpZ2h0ID0gdGhpcy5pbWFnZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBsZXQgaW1hZ2VGcm9tVG9wID0gdGhpcy5pbWFnZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkhlaWdodCA9IHRoaXMubmF2aWdhdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gaW1hZ2VIZWlnaHQgKyBpbWFnZUZyb21Ub3AgLSBuYXZpZ2F0aW9uSGVpZ2h0O1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLnN0eWxlLnRvcCA9IHBvc2l0aW9uICsgXCJweFwiO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJztcclxuXHJcbm5ldyBTbGlkZXIoKTtcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2phdmFzY3JpcHQvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9