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
      if (index === 0) {
        this.next.classList.remove(this.disabled);
        this.prev.classList.add(this.disabled);
      } else if (index === 1) {
        this.prev.classList.remove(this.disabled);
      } else if (index === this.sliderItems.length - 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGluZy1ib290Y2FtcC10ZXN0aW1vbmlhbHMtc2xpZGVyLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJzbGlkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJJdGVtcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwic2xpZGVyV2lkdGgiLCJuZXh0IiwicHJldiIsImltYWdlQ29udGFpbmVyIiwibmF2aWdhdGlvbiIsImJ1dHRvbnMiLCJkaXNhYmxlZCIsImN1cnJlbnRTbGlkZSIsImV2ZW50cyIsIm5hdmlQb3NpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2xpZGVUb1JpZ2h0Iiwid2luZG93Iiwia2V5Q2hlY2siLCJzbGlkZVRvTGVmdCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleSIsIm5leHRTbGlkZSIsIm5leHRFbGVtZW50U2libGluZyIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImhpZGVTaG93QXJyb3dzIiwibW92ZSIsInByZXZTbGlkZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJzdHlsZSIsInRyYW5zZm9ybSIsInRyYW5zbGF0ZVgiLCJyZXBsYWNlIiwidHJhbnNsYXRlWF9udW0iLCJjdXJyZW50UG9zaXRpb24iLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImZvckVhY2giLCJlbCIsInJlbW92ZSIsImFkZCIsImxlbmd0aCIsImltYWdlSGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiaW1hZ2VGcm9tVG9wIiwidG9wIiwibmF2aWdhdGlvbkhlaWdodCIsInBvc2l0aW9uIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWQ7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFLTCxNQUFMLENBQVlNLFFBQXZCLENBQW5CO0FBQ0EsU0FBS0MsV0FBTDtBQUVBLFNBQUtDLElBQUwsR0FBWVAsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFaO0FBQ0EsU0FBS08sSUFBTCxHQUFZUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQVo7QUFFQSxTQUFLUSxjQUFMLEdBQXNCVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXRCO0FBQ0EsU0FBS1MsVUFBTCxHQUFrQlYsUUFBUSxDQUFDQyxh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RUFwQlksQ0F3Qlo7O0FBQ0EsV0FBS0osSUFBTCxDQUFVa0MsU0FBVixDQUFvQkssR0FBcEIsQ0FBd0IsS0FBS25DLFFBQTdCO0FBRUQ7Ozs7OztBQUlILGlFQUFlZCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUMvSUE7QUFFQTtBQUVBLElBQUlBLHVEQUFKLEc7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbCcpO1xyXG4gICAgdGhpcy5zbGlkZXJJdGVtcyA9IEFycmF5LmZyb20odGhpcy5zbGlkZXIuY2hpbGRyZW4pO1xyXG4gICAgdGhpcy5zbGlkZXJXaWR0aDtcclxuICAgIFxyXG4gICAgdGhpcy5uZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2ljb24tLW5leHQnKTtcclxuICAgIHRoaXMucHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19pY29uLS1wcmV2Jyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbF9fcG9ydHJhaXQnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMubmF2aWdhdGlvbi5jaGlsZHJlbik7XHJcblxyXG4gICAgdGhpcy5kaXNhYmxlZCA9ICduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCc7XHJcbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9ICdjdXJyZW50LXNsaWRlJztcclxuXHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gICAgdGhpcy5uYXZpUG9zaXRpb24oKTtcclxuXHJcbiAgfVxyXG5cclxuICBldmVudHMoKXtcclxuICAgIHRoaXMubmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnNsaWRlVG9SaWdodChlKSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlDaGVjayhlKSk7XHJcbiAgICB0aGlzLnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zbGlkZVRvTGVmdChlKSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMubmF2aVBvc2l0aW9uKCkgKTtcclxuICB9XHJcblxyXG4gIGtleUNoZWNrKGV2ZW50KXtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50LmtleSlcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgIHRoaXMuc2xpZGVUb1JpZ2h0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICB0aGlzLnNsaWRlVG9MZWZ0KGV2ZW50KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNsaWRlVG9SaWdodChldmVudCl7XHJcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gY3VycmVudFNsaWRlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAvL2dldHMgdGhlIGluZGV4IG9mIHRoZSBuZXh0IEVsZW1lbnQgU2libGluZ1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNsaWRlckl0ZW1zLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtID09PSBuZXh0U2xpZGUpO1xyXG5cclxuXHJcbiAgICAvL3JldHVybnMgb24gdGhlIGxhc3QgaXRlbVxyXG4gICAgaWYgKCFuZXh0U2xpZGUpIHJldHVybjtcclxuXHJcbiAgICAvL01hbmFnZSBBcnJvdyBTdGF0ZXNcclxuICAgIHRoaXMuaGlkZVNob3dBcnJvd3MoaW5kZXgpO1xyXG4gICAgXHJcbiAgICB0aGlzLm1vdmUoY3VycmVudFNsaWRlLCBuZXh0U2xpZGUsIGV2ZW50KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgc2xpZGVUb0xlZnQoZXZlbnQpe1xyXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcclxuICAgIGNvbnN0IHByZXZTbGlkZSA9IGN1cnJlbnRTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIC8vZ2V0cyB0aGUgaW5kZXggb2YgdGhlIHByZXYgRWxlbWVudCBTaWJsaW5nXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2xpZGVySXRlbXMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0gPT09IHByZXZTbGlkZSk7XHJcblxyXG4gICAgaWYgKCFwcmV2U2xpZGUpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmhpZGVTaG93QXJyb3dzKGluZGV4KTtcclxuXHJcbiAgICB0aGlzLm1vdmUoY3VycmVudFNsaWRlLCBwcmV2U2xpZGUsIGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG1vdmUoY3VycmVudFNsaWRlLCBuZXh0U2xpZGUsIGV2ZW50KXtcclxuICAgIC8vZ2V0IHRyYW5zZm9ybSBwcm9wZXJ0eSB0byBjaGVjayB0aGUgY3VycmVudCB2YWx1ZVxyXG4gICAgbGV0IHN0eWxlID0gY3VycmVudFNsaWRlLnN0eWxlLnRyYW5zZm9ybTtcclxuICAgIGxldCB0cmFuc2xhdGVYID0gc3R5bGUucmVwbGFjZSgvW14tP1xcZC5dL2csICcnKTtcclxuICAgIGxldCB0cmFuc2xhdGVYX251bSA9ICt0cmFuc2xhdGVYO1xyXG4gICAgbGV0IGN1cnJlbnRQb3NpdGlvbjtcclxuICAgIFxyXG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2aWdhdGlvbl9faWNvbi0tbmV4dCcpIHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnICkge1xyXG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0cmFuc2xhdGVYX251bSAtIHRoaXMuc2xpZGVyV2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50UG9zaXRpb24gPSB0cmFuc2xhdGVYX251bSArIHRoaXMuc2xpZGVyV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZXJJdGVtcy5mb3JFYWNoKCAoZWwpID0+e1xyXG5cclxuICAgIC8vZ2V0IGN1cnJlbnQgdHJhbnNsYXRleCBwb3NpdGlvblxyXG4gICAgZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgY3VycmVudFBvc2l0aW9uICsgXCJweClcIjtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgICBuZXh0U2xpZGUuY2xhc3NMaXN0LmFkZCh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2hvd0Fycm93cyhpbmRleCl7XHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy5uZXh0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kaXNhYmxlZCk7XHJcbiAgICAgIHRoaXMucHJldi5jbGFzc0xpc3QuYWRkKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLnByZXYuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRpc2FibGVkKTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHRoaXMuc2xpZGVySXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLm5leHQuY2xhc3NMaXN0LmFkZCh0aGlzLmRpc2FibGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmV4dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgICB0aGlzLnByZXYuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRpc2FibGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgbmF2aVBvc2l0aW9uKCl7XHJcbiAgICBsZXQgaW1hZ2VIZWlnaHQgPSB0aGlzLmltYWdlQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIGxldCBpbWFnZUZyb21Ub3AgPSB0aGlzLmltYWdlQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGxldCBuYXZpZ2F0aW9uSGVpZ2h0ID0gdGhpcy5uYXZpZ2F0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDI7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBpbWFnZUhlaWdodCArIGltYWdlRnJvbVRvcCAtIG5hdmlnYXRpb25IZWlnaHQ7XHJcbiAgICB0aGlzLm5hdmlnYXRpb24uc3R5bGUudG9wID0gcG9zaXRpb24gKyBcInB4XCI7XHJcblxyXG4gICAgLy9nZXQgbmV3IHNsaWRlcldpZHRoXHJcbiAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zbGlkZXJJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxyXG5cclxuICAgIC8vcmVtb3ZlIGV2ZXJ5IGN1cnJlbnQtc2xpZGUgb2YgdGhlIGVsZW1lbnQgYW5kIHNldCBldmVyeXRoaW5nIGJhY2sgdG8gc2xpZGUgMFxyXG4gICAgdGhpcy5zbGlkZXJJdGVtcy5mb3JFYWNoKCAoZWwpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmN1cnJlbnRTbGlkZSk7XHJcbiAgICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIDAgKyBcInB4KVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9hZGQgY3VycmVudC1zbGlkZSBiYWNrIHRvIHRoZSBmaXJzdCBlbGVtZW50XHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zWzBdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtc2xpZGUnKTtcclxuXHJcbiAgICAvL3JlbW92ZSBkaXNhYmxlZCBzdGF0dXMgb2YgdGhlIGJ1dHRvbnNcclxuICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKCAoZWwpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRpc2FibGVkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYWRkIGRpc2FibGVkIHRvIHByZXYtYnV0dG9uXHJcbiAgICB0aGlzLnByZXYuY2xhc3NMaXN0LmFkZCh0aGlzLmRpc2FibGVkKTtcclxuICAgIFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJztcclxuXHJcbm5ldyBTbGlkZXIoKTtcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2phdmFzY3JpcHQvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9