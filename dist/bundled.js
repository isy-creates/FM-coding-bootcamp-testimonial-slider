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
      currentSlide.classList.remove('current-slide');
      nextSlide.classList.add('current-slide');
    }
  }, {
    key: "hideShowArrows",
    value: function hideShowArrows(index) {
      if (index === 0) {
        this.next.classList.remove('navigation__icon--disabled');
        this.prev.classList.add('navigation__icon--disabled');
      } else if (index === 1) {
        this.prev.classList.remove('navigation__icon--disabled');
      } else if (index === this.sliderItems.length - 1) {
        this.next.classList.add('navigation__icon--disabled');
      } else {
        this.next.classList.remove('navigation__icon--disabled');
        this.prev.classList.remove('navigation__icon--disabled');
      }
    }
  }, {
    key: "naviPosition",
    value: function naviPosition() {
      var imageHeight = this.imageContainer.getBoundingClientRect().height;
      var imageFromTop = this.imageContainer.getBoundingClientRect().top;
      var navigationHeight = this.navigation.getBoundingClientRect().height / 2;
      var position = imageHeight + imageFromTop - navigationHeight;
      this.navigation.style.top = position + "px"; //get new sliderWidth

      this.sliderWidth = this.sliderItems[0].getBoundingClientRect().width; //remove every current-slide of the element and set everything back to slide 0

      this.sliderItems.forEach(function (el) {
        el.classList.remove('current-slide');
        el.style.transform = "translateX(" + 0 + "px)";
      }); //add current-slide back to the first element

      this.sliderItems[0].classList.add('current-slide'); //remove disabled status of the buttons

      this.buttons.forEach(function (el) {
        el.classList.remove('navigation__icon--disabled');
      }); //add disabled to prev-button

      this.prev.classList.add('navigation__icon--disabled');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGluZy1ib290Y2FtcC10ZXN0aW1vbmlhbHMtc2xpZGVyLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJzbGlkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJJdGVtcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwic2xpZGVyV2lkdGgiLCJuZXh0IiwicHJldiIsImltYWdlQ29udGFpbmVyIiwibmF2aWdhdGlvbiIsImJ1dHRvbnMiLCJldmVudHMiLCJuYXZpUG9zaXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNsaWRlVG9SaWdodCIsIndpbmRvdyIsImtleUNoZWNrIiwic2xpZGVUb0xlZnQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJoaWRlU2hvd0Fycm93cyIsIm1vdmUiLCJwcmV2U2xpZGUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2xhdGVYIiwicmVwbGFjZSIsInRyYW5zbGF0ZVhfbnVtIiwiY3VycmVudFBvc2l0aW9uIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJmb3JFYWNoIiwiZWwiLCJyZW1vdmUiLCJhZGQiLCJsZW5ndGgiLCJpbWFnZUhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsImltYWdlRnJvbVRvcCIsInRvcCIsIm5hdmlnYXRpb25IZWlnaHQiLCJwb3NpdGlvbiIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFkO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkMsS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS0wsTUFBTCxDQUFZTSxRQUF2QixDQUFuQjtBQUNBLFNBQUtDLFdBQUw7QUFFQSxTQUFLQyxJQUFMLEdBQVlQLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWjtBQUNBLFNBQUtPLElBQUwsR0FBWVIsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFaO0FBRUEsU0FBS1EsY0FBTCxHQUFzQlQsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUF0QjtBQUNBLFNBQUtTLFVBQUwsR0FBa0JWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qixh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O0FDSkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbCcpO1xyXG4gICAgdGhpcy5zbGlkZXJJdGVtcyA9IEFycmF5LmZyb20odGhpcy5zbGlkZXIuY2hpbGRyZW4pO1xyXG4gICAgdGhpcy5zbGlkZXJXaWR0aDtcclxuICAgIFxyXG4gICAgdGhpcy5uZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2ljb24tLW5leHQnKTtcclxuICAgIHRoaXMucHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19pY29uLS1wcmV2Jyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbF9fcG9ydHJhaXQnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHRoaXMubmF2aWdhdGlvbi5jaGlsZHJlbik7XHJcblxyXG4gICAgdGhpcy5ldmVudHMoKTtcclxuICAgIHRoaXMubmF2aVBvc2l0aW9uKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCl7XHJcbiAgICB0aGlzLm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zbGlkZVRvUmlnaHQoZSkgKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMua2V5Q2hlY2soZSkpO1xyXG4gICAgdGhpcy5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc2xpZGVUb0xlZnQoZSkgKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLm5hdmlQb3NpdGlvbigpICk7XHJcbiAgfVxyXG5cclxuICBrZXlDaGVjayhldmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICB0aGlzLnNsaWRlVG9SaWdodChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgdGhpcy5zbGlkZVRvTGVmdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbGlkZVRvUmlnaHQoZXZlbnQpe1xyXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgLy9nZXRzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBFbGVtZW50IFNpYmxpbmdcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zbGlkZXJJdGVtcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbSA9PT0gbmV4dFNsaWRlKTtcclxuXHJcblxyXG4gICAgLy9yZXR1cm5zIG9uIHRoZSBsYXN0IGl0ZW1cclxuICAgIGlmICghbmV4dFNsaWRlKSByZXR1cm47XHJcblxyXG4gICAgLy9NYW5hZ2UgQXJyb3cgU3RhdGVzXHJcbiAgICB0aGlzLmhpZGVTaG93QXJyb3dzKGluZGV4KTtcclxuICAgIFxyXG4gICAgdGhpcy5tb3ZlKGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlLCBldmVudCk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHNsaWRlVG9MZWZ0KGV2ZW50KXtcclxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNsaWRlJyk7XHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSBjdXJyZW50U2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcbiAgICAvL2dldHMgdGhlIGluZGV4IG9mIHRoZSBwcmV2IEVsZW1lbnQgU2libGluZ1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNsaWRlckl0ZW1zLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtID09PSBwcmV2U2xpZGUpO1xyXG5cclxuICAgIGlmICghcHJldlNsaWRlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5oaWRlU2hvd0Fycm93cyhpbmRleCk7XHJcblxyXG4gICAgdGhpcy5tb3ZlKGN1cnJlbnRTbGlkZSwgcHJldlNsaWRlLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlLCBldmVudCl7XHJcbiAgICAvL2dldCB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gY2hlY2sgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIGxldCBzdHlsZSA9IGN1cnJlbnRTbGlkZS5zdHlsZS50cmFuc2Zvcm07XHJcbiAgICBsZXQgdHJhbnNsYXRlWCA9IHN0eWxlLnJlcGxhY2UoL1teLT9cXGQuXS9nLCAnJyk7XHJcbiAgICBsZXQgdHJhbnNsYXRlWF9udW0gPSArdHJhbnNsYXRlWDtcclxuICAgIGxldCBjdXJyZW50UG9zaXRpb247XHJcbiAgICBcclxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmlnYXRpb25fX2ljb24tLW5leHQnKSB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyApIHtcclxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdHJhbnNsYXRlWF9udW0gLSB0aGlzLnNsaWRlcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdHJhbnNsYXRlWF9udW0gKyB0aGlzLnNsaWRlcldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2xpZGVySXRlbXMuZm9yRWFjaCggKGVsKSA9PntcclxuXHJcbiAgICAvL2dldCBjdXJyZW50IHRyYW5zbGF0ZXggcG9zaXRpb25cclxuICAgIGVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIGN1cnJlbnRQb3NpdGlvbiArIFwicHgpXCI7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY3VycmVudFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtc2xpZGUnKTtcclxuICAgIG5leHRTbGlkZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXNsaWRlJyk7XHJcbiAgfVxyXG5cclxuICBoaWRlU2hvd0Fycm93cyhpbmRleCl7XHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgdGhpcy5uZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICAgIHRoaXMucHJldi5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCcpO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICB0aGlzLnByZXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9faWNvbi0tZGlzYWJsZWQnKTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IHRoaXMuc2xpZGVySXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLm5leHQuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbl9faWNvbi0tZGlzYWJsZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubmV4dC5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCcpO1xyXG4gICAgICB0aGlzLnByZXYuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9faWNvbi0tZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgbmF2aVBvc2l0aW9uKCl7XHJcbiAgICBsZXQgaW1hZ2VIZWlnaHQgPSB0aGlzLmltYWdlQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIGxldCBpbWFnZUZyb21Ub3AgPSB0aGlzLmltYWdlQ29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgIGxldCBuYXZpZ2F0aW9uSGVpZ2h0ID0gdGhpcy5uYXZpZ2F0aW9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAvIDI7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBpbWFnZUhlaWdodCArIGltYWdlRnJvbVRvcCAtIG5hdmlnYXRpb25IZWlnaHQ7XHJcbiAgICB0aGlzLm5hdmlnYXRpb24uc3R5bGUudG9wID0gcG9zaXRpb24gKyBcInB4XCI7XHJcblxyXG4gICAgLy9nZXQgbmV3IHNsaWRlcldpZHRoXHJcbiAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zbGlkZXJJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxyXG5cclxuICAgIC8vcmVtb3ZlIGV2ZXJ5IGN1cnJlbnQtc2xpZGUgb2YgdGhlIGVsZW1lbnQgYW5kIHNldCBldmVyeXRoaW5nIGJhY2sgdG8gc2xpZGUgMFxyXG4gICAgdGhpcy5zbGlkZXJJdGVtcy5mb3JFYWNoKCAoZWwpID0+IHtcclxuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1zbGlkZScpO1xyXG4gICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyAwICsgXCJweClcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vYWRkIGN1cnJlbnQtc2xpZGUgYmFjayB0byB0aGUgZmlyc3QgZWxlbWVudFxyXG4gICAgdGhpcy5zbGlkZXJJdGVtc1swXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXNsaWRlJyk7XHJcblxyXG4gICAgLy9yZW1vdmUgZGlzYWJsZWQgc3RhdHVzIG9mIHRoZSBidXR0b25zXHJcbiAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaCggKGVsKSA9PiB7XHJcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2FkZCBkaXNhYmxlZCB0byBwcmV2LWJ1dHRvblxyXG4gICAgdGhpcy5wcmV2LmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlcic7XHJcblxyXG5uZXcgU2xpZGVyKCk7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==