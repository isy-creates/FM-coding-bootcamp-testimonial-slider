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
    this.sliderWidth;
    this.next = document.querySelector('.navigation__icon--next');
    this.prev = document.querySelector('.navigation__icon--prev');
    this.imageContainer = document.querySelector('.testimonial__portrait');
    this.navigation = document.querySelector('.navigation');
    this.buttons = Array.from(this.navigation.children);
    this.disabled = 'navigation__icon--disabled';
    this.currentSlide = 'current-slide';
    this.events();
    this.naviPosition();
  }

  _createClass(Slider, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.next.addEventListener('click', function (e) {
        return _this.slideToRight(e);
      });
      window.addEventListener('keydown', function (e) {
        return _this.keyCheck(e);
      });
      this.prev.addEventListener('click', function (e) {
        return _this.slideToLeft(e);
      });
      window.addEventListener('resize', function () {
        return _this.naviPosition();
      });
    }
  }, {
    key: "keyCheck",
    value: function keyCheck(event) {
      console.log(event.key);

      switch (event.key) {
        case 'ArrowRight':
          this.slideToRight(event);
          break;

        case 'ArrowLeft':
          this.slideToLeft(event);
          break;
      }
    }
  }, {
    key: "slideToRight",
    value: function slideToRight(event) {
      var currentSlide = document.querySelector('.current-slide');
      var nextSlide = currentSlide.nextElementSibling; //gets the index of the next Element Sibling

      var index = this.sliderItems.findIndex(function (item) {
        return item === nextSlide;
      }); //returns on the last item

      if (!nextSlide) return; //Manage Arrow States

      this.hideShowArrows(index);
      this.move(currentSlide, nextSlide, event);
    }
  }, {
    key: "slideToLeft",
    value: function slideToLeft(event) {
      var currentSlide = document.querySelector('.current-slide');
      var prevSlide = currentSlide.previousElementSibling; //gets the index of the prev Element Sibling

      var index = this.sliderItems.findIndex(function (item) {
        return item === prevSlide;
      });
      if (!prevSlide) return;
      this.hideShowArrows(index);
      this.move(currentSlide, prevSlide, event);
    }
  }, {
    key: "move",
    value: function move(currentSlide, nextSlide, event) {
      //get transform property to check the current value
      var style = currentSlide.style.transform;
      var translateX = style.replace(/[^-?\d.]/g, '');
      var translateX_num = +translateX;
      var currentPosition;

      if (event.target.classList.contains('navigation__icon--next') || event.key === 'ArrowRight') {
        currentPosition = translateX_num - this.sliderWidth;
      } else {
        currentPosition = translateX_num + this.sliderWidth;
      }

      this.sliderItems.forEach(function (el) {
        //get current translatex position
        el.style.transform = "translateX(" + currentPosition + "px)";
      });
      currentSlide.classList.remove(this.currentSlide);
      nextSlide.classList.add(this.currentSlide);
    }
  }, {
    key: "hideShowArrows",
    value: function hideShowArrows(index) {
      console.log(index);
      console.log(this.sliderItems.length - 1);

      if (index === 0) {
        this.next.classList.remove(this.disabled);
        this.prev.classList.add(this.disabled);
      } else if (index === this.sliderItems.length - 1) {
        this.prev.classList.remove(this.disabled);
        this.next.classList.add(this.disabled);
      } else {
        this.next.classList.remove(this.disabled);
        this.prev.classList.remove(this.disabled);
      }
    }
  }, {
    key: "naviPosition",
    value: function naviPosition() {
      var _this2 = this;

      var imageHeight = this.imageContainer.getBoundingClientRect().height;
      var imageFromTop = this.imageContainer.getBoundingClientRect().top;
      var navigationHeight = this.navigation.getBoundingClientRect().height / 2;
      var position = imageHeight + imageFromTop - navigationHeight;
      this.navigation.style.top = position + "px"; //get new sliderWidth

      this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width; //remove every current-slide of the element and set everything back to slide 0

      this.sliderItems.forEach(function (el) {
        el.classList.remove(_this2.currentSlide);
        el.style.transform = "translateX(" + 0 + "px)";
      }); //add current-slide back to the first element

      this.sliderItems[0].classList.add('current-slide'); //remove disabled status of the buttons

      this.buttons.forEach(function (el) {
        el.classList.remove(_this2.disabled);
      }); //add disabled to prev-button

      this.prev.classList.add(this.disabled);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3M/MDk3MSIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlNsaWRlciIsInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlckl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJzbGlkZXJXaWR0aCIsIm5leHQiLCJwcmV2IiwiaW1hZ2VDb250YWluZXIiLCJuYXZpZ2F0aW9uIiwiYnV0dG9ucyIsImRpc2FibGVkIiwiY3VycmVudFNsaWRlIiwiZXZlbnRzIiwibmF2aVBvc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzbGlkZVRvUmlnaHQiLCJ3aW5kb3ciLCJrZXlDaGVjayIsInNsaWRlVG9MZWZ0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwia2V5IiwibmV4dFNsaWRlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaGlkZVNob3dBcnJvd3MiLCJtb3ZlIiwicHJldlNsaWRlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInN0eWxlIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWCIsInJlcGxhY2UiLCJ0cmFuc2xhdGVYX251bSIsImN1cnJlbnRQb3NpdGlvbiIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwiYWRkIiwibGVuZ3RoIiwiaW1hZ2VIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJpbWFnZUZyb21Ub3AiLCJ0b3AiLCJuYXZpZ2F0aW9uSGVpZ2h0IiwicG9zaXRpb24iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtMLE1BQUwsQ0FBWU0sUUFBdkIsQ0FBbkI7QUFDQSxTQUFLQyxXQUFMO0FBRUEsU0FBS0MsSUFBTCxHQUFZUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQVo7QUFDQSxTQUFLTyxJQUFMLEdBQVlSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWjtBQUVBLFNBQUtRLGNBQUwsR0FBc0JULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdEI7QUFDQSxTQUFLUyxVQUFMLEdBQWtCVixRQUFRLENB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QUFFLENBQUNILFNBQUgsQ0FBYUksTUFBYixDQUFvQixNQUFJLENBQUNsQyxRQUF6QjtBQUNELE9BRkQsRUFwQlksQ0F3Qlo7O0FBQ0EsV0FBS0osSUFBTCxDQUFVa0MsU0FBVixDQUFvQkssR0FBcEIsQ0FBd0IsS0FBS25DLFFBQTdCO0FBRUQ7Ozs7OztBQUlILGlFQUFlZCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNoSkE7QUFFQTtBQUVBLElBQUlBLHVEQUFKLEc7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbCcpO1xyXG4gICAgdGhpcy5zbGlkZXJJdGVtcyA9IEFycmF5LmZyb20odGhpcy5zbGlkZXIuY2hpbGRyZW4pO1xyXG4gICAgdGhpcy5zbGlkZXJXaWR0aDtcclxuICAgIFxyXG4gICAgdGhpcy5uZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2ljb24tLW5leHQnKTtcclxuICAgIHRoaXMucHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19pY29uLS1wcmV2Jyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbF9fcG9ydHJhaXQnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMubmF2aWdhdGlvbi5jaGlsZHJlbik7XHJcblxyXG4gICAgdGhpcy5kaXNhYmxlZCA9ICduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCc7XHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9ICdjdXJyZW50LXNsaWRlJztcclxuXHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgdGhpcy5uYXZpUG9zaXRpb24oKTtcclxuXHJcbiAgfVxyXG5cclxuICBldmVudHMoKXtcclxuICAgIHRoaXMubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnNsaWRlVG9SaWdodChlKSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlDaGVjayhlKSk7XHJcbiAgICB0aGlzLnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zbGlkZVRvTGVmdChlKSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMubmF2aVBvc2l0aW9uKCkgKTtcclxuICB9XHJcblxyXG4gIGtleUNoZWNrKGV2ZW50KXtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgIHRoaXMuc2xpZGVUb1JpZ2h0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICB0aGlzLnNsaWRlVG9MZWZ0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNsaWRlVG9SaWdodChldmVudCl7XHJcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gY3VycmVudFNsaWRlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAvL2dldHMgdGhlIGluZGV4IG9mIHRoZSBuZXh0IEVsZW1lbnQgU2libGluZ1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNsaWRlckl0ZW1zLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtID09PSBuZXh0U2xpZGUpO1xyXG5cclxuXHJcbiAgICAvL3JldHVybnMgb24gdGhlIGxhc3QgaXRlbVxyXG4gICAgaWYgKCFuZXh0U2xpZGUpIHJldHVybjtcclxuXHJcbiAgICAvL01hbmFnZSBBcnJvdyBTdGF0ZXNcclxuICAgIHRoaXMuaGlkZVNob3dBcnJvd3MoaW5kZXgpO1xyXG4gICAgXHJcbiAgICB0aGlzLm1vdmUoY3VycmVudFNsaWRlLCBuZXh0U2xpZGUsIGV2ZW50KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgc2xpZGVUb0xlZnQoZXZlbnQpe1xyXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcclxuICAgIGNvbnN0IHByZXZTbGlkZSA9IGN1cnJlbnRTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIC8vZ2V0cyB0aGUgaW5kZXggb2YgdGhlIHByZXYgRWxlbWVudCBTaWJsaW5nXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2xpZGVySXRlbXMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0gPT09IHByZXZTbGlkZSk7XHJcblxyXG4gICAgaWYgKCFwcmV2U2xpZGUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmhpZGVTaG93QXJyb3dzKGluZGV4KTtcclxuXHJcbiAgICB0aGlzLm1vdmUoY3VycmVudFNsaWRlLCBwcmV2U2xpZGUsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG1vdmUoY3VycmVudFNsaWRlLCBuZXh0U2xpZGUsIGV2ZW50KXtcclxuICAgIC8vZ2V0IHRyYW5zZm9ybSBwcm9wZXJ0eSB0byBjaGVjayB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgbGV0IHN0eWxlID0gY3VycmVudFNsaWRlLnN0eWxlLnRyYW5zZm9ybTtcclxuICAgIGxldCB0cmFuc2xhdGVYID0gc3R5bGUucmVwbGFjZSgvW14tP1xcZC5dL2csICcnKTtcclxuICAgIGxldCB0cmFuc2xhdGVYX251bSA9ICt0cmFuc2xhdGVYO1xyXG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbjtcclxuICAgIFxyXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2aWdhdGlvbl9faWNvbi0tbmV4dCcpIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnICkge1xyXG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0cmFuc2xhdGVYX251bSAtIHRoaXMuc2xpZGVyV2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0cmFuc2xhdGVYX251bSArIHRoaXMuc2xpZGVyV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZXJJdGVtcy5mb3JFYWNoKCAoZWwpID0+e1xyXG5cclxuICAgIC8vZ2V0IGN1cnJlbnQgdHJhbnNsYXRleCBwb3NpdGlvblxyXG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgY3VycmVudFBvc2l0aW9uICsgXCJweClcIjtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgICBuZXh0U2xpZGUuY2xhc3NMaXN0LmFkZCh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2hvd0Fycm93cyhpbmRleCl7XHJcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNsaWRlckl0ZW1zLmxlbmd0aCAtIDEpO1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMubmV4dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgICB0aGlzLnByZXYuY2xhc3NMaXN0LmFkZCh0aGlzLmRpc2FibGVkKTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09ICggdGhpcy5zbGlkZXJJdGVtcy5sZW5ndGggLSAxKSApIHtcclxuICAgICAgdGhpcy5wcmV2LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kaXNhYmxlZCk7XHJcbiAgICAgIHRoaXMubmV4dC5jbGFzc0xpc3QuYWRkKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uZXh0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kaXNhYmxlZCk7XHJcbiAgICAgIHRoaXMucHJldi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBuYXZpUG9zaXRpb24oKXtcclxuICAgIGxldCBpbWFnZUhlaWdodCA9IHRoaXMuaW1hZ2VDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgbGV0IGltYWdlRnJvbVRvcCA9IHRoaXMuaW1hZ2VDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgbGV0IG5hdmlnYXRpb25IZWlnaHQgPSB0aGlzLm5hdmlnYXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMjtcclxuICAgIGxldCBwb3NpdGlvbiA9IGltYWdlSGVpZ2h0ICsgaW1hZ2VGcm9tVG9wIC0gbmF2aWdhdGlvbkhlaWdodDtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5zdHlsZS50b3AgPSBwb3NpdGlvbiArIFwicHhcIjtcclxuXHJcbiAgICAvL2dldCBuZXcgc2xpZGVyV2lkdGhcclxuICAgIHRoaXMuc2xpZGVyV2lkdGggPSB0aGlzLnNsaWRlckl0ZW1zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXHJcblxyXG4gICAgLy9yZW1vdmUgZXZlcnkgY3VycmVudC1zbGlkZSBvZiB0aGUgZWxlbWVudCBhbmQgc2V0IGV2ZXJ5dGhpbmcgYmFjayB0byBzbGlkZSAwXHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zLmZvckVhY2goIChlbCkgPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY3VycmVudFNsaWRlKTtcclxuICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgMCArIFwicHgpXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FkZCBjdXJyZW50LXNsaWRlIGJhY2sgdG8gdGhlIGZpcnN0IGVsZW1lbnRcclxuICAgIHRoaXMuc2xpZGVySXRlbXNbMF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zbGlkZScpO1xyXG5cclxuICAgIC8vcmVtb3ZlIGRpc2FibGVkIHN0YXR1cyBvZiB0aGUgYnV0dG9uc1xyXG4gICAgdGhpcy5idXR0b25zLmZvckVhY2goIChlbCkgPT4ge1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9hZGQgZGlzYWJsZWQgdG8gcHJldi1idXR0b25cclxuICAgIHRoaXMucHJldi5jbGFzc0xpc3QuYWRkKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcblxyXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXInO1xyXG5cclxubmV3IFNsaWRlcigpO1xyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=