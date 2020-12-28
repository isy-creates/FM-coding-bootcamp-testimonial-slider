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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGluZy1ib290Y2FtcC10ZXN0aW1vbmlhbHMtc2xpZGVyLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJzbGlkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJJdGVtcyIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwic2xpZGVyV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIm5leHQiLCJwcmV2IiwiaW1hZ2VDb250YWluZXIiLCJuYXZpZ2F0aW9uIiwiZXZlbnRzIiwibmF2aVBvc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzbGlkZVRvUmlnaHQiLCJ3aW5kb3ciLCJrZXlDaGVjayIsInNsaWRlVG9MZWZ0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwia2V5IiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaGlkZVNob3dBcnJvd3MiLCJtb3ZlIiwicHJldlNsaWRlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInN0eWxlIiwidHJhbnNmb3JtIiwidHJhbnNsYXRlWCIsInJlcGxhY2UiLCJ0cmFuc2xhdGVYX251bSIsImN1cnJlbnRQb3NpdGlvbiIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwiYWRkIiwibGVuZ3RoIiwiaW1hZ2VIZWlnaHQiLCJoZWlnaHQiLCJpbWFnZUZyb21Ub3AiLCJ0b3AiLCJuYXZpZ2F0aW9uSGVpZ2h0IiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07QUFDSixvQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWQ7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFLTCxNQUFMLENBQVlNLFFBQXZCLENBQW5CO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLSixXQUFMLENBQWlCLENBQWpCLEVBQW9CSyxxQkFBcEIsR0FBNENDLEtBQS9EO0FBRUEsU0FBS0MsSUFBTCxHQUFZVCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQVo7QUFDQSxTQUFLUyxJQUFMLEdBQVlWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWjtBQUVBLFNBQUtVLGNBQUwsR0FBc0JYLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBdEI7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QUNBLFVBQUlDLFlBQVksR0FBRyxLQUFLeEMsY0FBTCxDQUFvQkoscUJBQXBCLEdBQTRDNkMsR0FBL0Q7QUFDQSxVQUFJQyxnQkFBZ0IsR0FBRyxLQUFLekMsVUFBTCxDQUFnQkwscUJBQWhCLEdBQXdDMkMsTUFBeEMsR0FBaUQsQ0FBeEU7QUFDQSxVQUFJSSxRQUFRLEdBQUdMLFdBQVcsR0FBR0UsWUFBZCxHQUE2QkUsZ0JBQTVDO0FBQ0EsV0FBS3pDLFVBQUwsQ0FBZ0J1QixLQUFoQixDQUFzQmlCLEdBQXRCLEdBQTRCRSxRQUFRLEdBQUcsSUFBdkM7QUFDRDs7Ozs7O0FBSUgsaUVBQWV4RCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUN0SEE7QUFFQTtBQUVBLElBQUlBLHVEQUFKLEc7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbCcpO1xyXG4gICAgdGhpcy5zbGlkZXJJdGVtcyA9IEFycmF5LmZyb20odGhpcy5zbGlkZXIuY2hpbGRyZW4pO1xyXG4gICAgdGhpcy5zbGlkZXJXaWR0aCA9IHRoaXMuc2xpZGVySXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICBcclxuICAgIHRoaXMubmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19pY29uLS1uZXh0Jyk7XHJcbiAgICB0aGlzLnByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9faWNvbi0tcHJldicpO1xyXG5cclxuICAgIHRoaXMuaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdGltb25pYWxfX3BvcnRyYWl0Jyk7XHJcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xyXG5cclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgICB0aGlzLm5hdmlQb3NpdGlvbigpO1xyXG5cclxuICB9XHJcblxyXG4gIGV2ZW50cygpe1xyXG4gICAgdGhpcy5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc2xpZGVUb1JpZ2h0KGUpICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmtleUNoZWNrKGUpKTtcclxuICAgIHRoaXMucHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnNsaWRlVG9MZWZ0KGUpICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy5uYXZpUG9zaXRpb24oKSApO1xyXG4gIH1cclxuXHJcbiAga2V5Q2hlY2soZXZlbnQpe1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQua2V5KVxyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgdGhpcy5zbGlkZVRvUmlnaHQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgIHRoaXMuc2xpZGVUb0xlZnQoZXZlbnQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2xpZGVUb1JpZ2h0KGV2ZW50KXtcclxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNsaWRlJyk7XHJcbiAgICBjb25zdCBuZXh0U2xpZGUgPSBjdXJyZW50U2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuICAgIC8vZ2V0cyB0aGUgaW5kZXggb2YgdGhlIG5leHQgRWxlbWVudCBTaWJsaW5nXHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2xpZGVySXRlbXMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW0gPT09IG5leHRTbGlkZSk7XHJcblxyXG5cclxuICAgIC8vcmV0dXJucyBvbiB0aGUgbGFzdCBpdGVtXHJcbiAgICBpZiAoIW5leHRTbGlkZSkgcmV0dXJuO1xyXG5cclxuICAgIC8vTWFuYWdlIEFycm93IFN0YXRlc1xyXG4gICAgdGhpcy5oaWRlU2hvd0Fycm93cyhpbmRleCk7XHJcbiAgICBcclxuICAgIHRoaXMubW92ZShjdXJyZW50U2xpZGUsIG5leHRTbGlkZSwgZXZlbnQpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBzbGlkZVRvTGVmdChldmVudCl7XHJcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xyXG4gICAgY29uc3QgcHJldlNsaWRlID0gY3VycmVudFNsaWRlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgLy9nZXRzIHRoZSBpbmRleCBvZiB0aGUgcHJldiBFbGVtZW50IFNpYmxpbmdcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zbGlkZXJJdGVtcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbSA9PT0gcHJldlNsaWRlKTtcclxuXHJcbiAgICBpZiAoIXByZXZTbGlkZSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuaGlkZVNob3dBcnJvd3MoaW5kZXgpO1xyXG5cclxuICAgIHRoaXMubW92ZShjdXJyZW50U2xpZGUsIHByZXZTbGlkZSwgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgbW92ZShjdXJyZW50U2xpZGUsIG5leHRTbGlkZSwgZXZlbnQpe1xyXG4gICAgLy9nZXQgdHJhbnNmb3JtIHByb3BlcnR5IHRvIGNoZWNrIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICBsZXQgc3R5bGUgPSBjdXJyZW50U2xpZGUuc3R5bGUudHJhbnNmb3JtO1xyXG4gICAgbGV0IHRyYW5zbGF0ZVggPSBzdHlsZS5yZXBsYWNlKC9bXi0/XFxkLl0vZywgJycpO1xyXG4gICAgbGV0IHRyYW5zbGF0ZVhfbnVtID0gK3RyYW5zbGF0ZVg7XHJcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uO1xyXG4gICAgXHJcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZpZ2F0aW9uX19pY29uLS1uZXh0JykgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgKSB7XHJcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRyYW5zbGF0ZVhfbnVtIC0gdGhpcy5zbGlkZXJXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IHRyYW5zbGF0ZVhfbnVtICsgdGhpcy5zbGlkZXJXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zLmZvckVhY2goIChlbCkgPT57XHJcblxyXG4gICAgICAvL2dldCBjdXJyZW50IHRyYW5zbGF0ZXggcG9zaXRpb25cclxuICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgY3VycmVudFBvc2l0aW9uICsgXCJweClcIjtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1zbGlkZScpO1xyXG4gICAgbmV4dFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtc2xpZGUnKTtcclxuICB9XHJcblxyXG4gIGhpZGVTaG93QXJyb3dzKGluZGV4KXtcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICB0aGlzLm5leHQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9faWNvbi0tZGlzYWJsZWQnKTtcclxuICAgICAgdGhpcy5wcmV2LmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XHJcbiAgICAgIHRoaXMucHJldi5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCcpO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdGhpcy5zbGlkZXJJdGVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMubmV4dC5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5uZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICAgIHRoaXMucHJldi5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBuYXZpUG9zaXRpb24oKXtcclxuICAgIGxldCBpbWFnZUhlaWdodCA9IHRoaXMuaW1hZ2VDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgbGV0IGltYWdlRnJvbVRvcCA9IHRoaXMuaW1hZ2VDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgbGV0IG5hdmlnYXRpb25IZWlnaHQgPSB0aGlzLm5hdmlnYXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gMjtcclxuICAgIGxldCBwb3NpdGlvbiA9IGltYWdlSGVpZ2h0ICsgaW1hZ2VGcm9tVG9wIC0gbmF2aWdhdGlvbkhlaWdodDtcclxuICAgIHRoaXMubmF2aWdhdGlvbi5zdHlsZS50b3AgPSBwb3NpdGlvbiArIFwicHhcIjtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCJpbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcclxuXHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlcic7XHJcblxyXG5uZXcgU2xpZGVyKCk7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==