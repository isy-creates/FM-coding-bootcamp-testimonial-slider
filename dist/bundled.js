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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvLi9zcmMvc2Nzcy9tYWluLnNjc3M/MDk3MSIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kaW5nLWJvb3RjYW1wLXRlc3RpbW9uaWFscy1zbGlkZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RpbmctYm9vdGNhbXAtdGVzdGltb25pYWxzLXNsaWRlci1tYXN0ZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlNsaWRlciIsInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlckl0ZW1zIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJzbGlkZXJXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwibmV4dCIsInByZXYiLCJpbWFnZUNvbnRhaW5lciIsIm5hdmlnYXRpb24iLCJldmVudHMiLCJuYXZpUG9zaXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNsaWRlVG9SaWdodCIsIndpbmRvdyIsImtleUNoZWNrIiwic2xpZGVUb0xlZnQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJjdXJyZW50U2xpZGUiLCJuZXh0U2xpZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJoaWRlU2hvd0Fycm93cyIsIm1vdmUiLCJwcmV2U2xpZGUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2xhdGVYIiwicmVwbGFjZSIsInRyYW5zbGF0ZVhfbnVtIiwiY3VycmVudFBvc2l0aW9uIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJmb3JFYWNoIiwiZWwiLCJyZW1vdmUiLCJhZGQiLCJsZW5ndGgiLCJpbWFnZUhlaWdodCIsImhlaWdodCIsImltYWdlRnJvbVRvcCIsInRvcCIsIm5hdmlnYXRpb25IZWlnaHQiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtMLE1BQUwsQ0FBWU0sUUFBdkIsQ0FBbkI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtKLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0JLLHFCQUFwQixHQUE0Q0MsS0FBL0Q7QUFFQSxTQUFLQyxJQUFMLEdBQVlULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWjtBQUNBLFNBQUtTLElBQUwsR0FBWVYsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixDQUFaO0FBRUEsU0FBS1UsY0FBTCxHQUFzQlgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUF0QjtBQUNBLFNBQUtXLFVBQUwsR0FBa0JaLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUVBLFNBQUtZLE1BQUw7QUFDQSxTQUFLQyxZQUFMO0FBRUQ7Ozs7NkJBRU87QUFBQTs7QUFDTixXQUFLTCxJQUFMLENBQVVNLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQUNDLENBQUQ7QUFBQSxlQUFPLEtBQUksQ0FBQ0MsWUFBTCxDQUFrQkQsQ0FBbEIsQ0FBUDtBQUFBLE9BQXBDO0FBQ0FFLFlBQU0sQ0FBQ0gsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU8sS0FBSSxDQUFDRyxRQUFMLENBQWNILENBQWQsQ0FBUDtBQUFBLE9BQW5DO0FBQ0EsV0FBS04sSUFBTCxDQUFVSyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDQyxDQUFEO0FBQUEsZUFBTyxLQUFJLENBQUNJLFdBQUwsQ0FBaUJKLENBQWpCLENBQVA7QUFBQSxPQUFwQztBQUNBRSxZQUFNLENBQUNILGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDO0FBQUEsZUFBTSxLQUFJLENBQUNELFlBQUwsRUFBTjtBQUFBLE9BQWxDO0FBQ0Q7Ozs2QkFFUU8sSyxFQUFNO0FBQ2JDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLEdBQWxCOztBQUNBLGNBQVFILEtBQUssQ0FBQ0csR0FBZDtBQUNFLGFBQUssWUFBTDtBQUNFLGVBQUtQLFlBQUwsQ0FBa0JJLEtBQWxCO0FBQ0E7O0FBQ0YsYUFBSyxXQUFMO0FBQ0UsZUFBS0QsV0FBTCxDQUFpQkMsS0FBakI7QUFDQTtBQU5KO0FBUUQ7OztpQ0FFWUEsSyxFQUFNO0FBQ2pCLFVBQU1JLFlBQVksR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxVQUFNeUIsU0FBUyxHQUFHRCxZQUFZLENBQUNFLGtCQUEvQixDQUZpQixDQUlqQjs7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBSzFCLFdBQUwsQ0FBaUIyQixTQUFqQixDQUE0QixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxLQUFLSixTQUFiO0FBQUEsT0FBaEMsQ0FBZCxDQUxpQixDQVFqQjs7QUFDQSxVQUFJLENBQUNBLFNBQUwsRUFBZ0IsT0FUQyxDQVdqQjs7QUFDQSxXQUFLSyxjQUFMLENBQW9CSCxLQUFwQjtBQUVBLFdBQUtJLElBQUwsQ0FBVVAsWUFBVixFQUF3QkMsU0FBeEIsRUFBbUNMLEtBQW5DO0FBRUQ7OztnQ0FFV0EsSyxFQUFNO0FBQ2hCLFVBQU1JLFlBQVksR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxVQUFNZ0MsU0FBUyxHQUFHUixZQUFZLENBQUNTLHNCQUEvQixDQUZnQixDQUloQjs7QUFDQSxVQUFNTixLQUFLLEdBQUcsS0FBSzFCLFdBQUwsQ0FBaUIyQixTQUFqQixDQUE0QixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxLQUFLRyxTQUFiO0FBQUEsT0FBaEMsQ0FBZDtBQUVBLFVBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUVoQixXQUFLRixjQUFMLENBQW9CSCxLQUFwQjtBQUVBLFdBQUtJLElBQUwsQ0FBVVAsWUFBVixFQUF3QlEsU0FBeEIsRUFBbUNaLEtBQW5DO0FBQ0Q7Ozt5QkFFSUksWSxFQUFjQyxTLEVBQVdMLEssRUFBTTtBQUNsQztBQUNBLFVBQUljLEtBQUssR0FBR1YsWUFBWSxDQUFDVSxLQUFiLENBQW1CQyxTQUEvQjtBQUNBLFVBQUlDLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLENBQWMsV0FBZCxFQUEyQixFQUEzQixDQUFqQjtBQUNBLFVBQUlDLGNBQWMsR0FBRyxDQUFDRixVQUF0QjtBQUNBLFVBQUlHLGVBQUo7O0FBRUEsVUFBR25CLEtBQUssQ0FBQ29CLE1BQU4sQ0FBYUMsU0FBYixDQUF1QkMsUUFBdkIsQ0FBZ0Msd0JBQWhDLEtBQTZEdEIsS0FBSyxDQUFDRyxHQUFOLEtBQWMsWUFBOUUsRUFBNkY7QUFDM0ZnQix1QkFBZSxHQUFHRCxjQUFjLEdBQUcsS0FBS2pDLFdBQXhDO0FBQ0QsT0FGRCxNQUVPO0FBQ0xrQyx1QkFBZSxHQUFHRCxjQUFjLEdBQUcsS0FBS2pDLFdBQXhDO0FBQ0Q7O0FBRUQsV0FBS0osV0FBTCxDQUFpQjBDLE9BQWpCLENBQTBCLFVBQUNDLEVBQUQsRUFBTztBQUUvQjtBQUNBQSxVQUFFLENBQUNWLEtBQUgsQ0FBU0MsU0FBVCxHQUFxQixnQkFBZ0JJLGVBQWhCLEdBQWtDLEtBQXZEO0FBRUQsT0FMRDtBQU9BZixrQkFBWSxDQUFDaUIsU0FBYixDQUF1QkksTUFBdkIsQ0FBOEIsZUFBOUI7QUFDQXBCLGVBQVMsQ0FBQ2dCLFNBQVYsQ0FBb0JLLEdBQXBCLENBQXdCLGVBQXhCO0FBQ0Q7OzttQ0FFY25CLEssRUFBTTtBQUNuQixVQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQUtuQixJQUFMLENBQVVpQyxTQUFWLENBQW9CSSxNQUFwQixDQUEyQiw0QkFBM0I7QUFDQSxhQUFLcEMsSUFBTCxDQUFVZ0MsU0FBVixDQUFvQkssR0FBcEIsQ0FBd0IsNEJBQXhCO0FBQ0QsT0FIRCxNQUdPLElBQUluQixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUN0QixhQUFLbEIsSUFBTCxDQUFVZ0MsU0FBVixDQUFvQkksTUFBcEIsQ0FBMkIsNEJBQTNCO0FBQ0QsT0FGTSxNQUVBLElBQUlsQixLQUFLLEtBQUssS0FBSzFCLFdBQUwsQ0FBaUI4QyxNQUFqQixHQUEwQixDQUF4QyxFQUEyQztBQUNoRCxhQUFLdkMsSUFBTCxDQUFVaUMsU0FBVixDQUFvQkssR0FBcEIsQ0FBd0IsNEJBQXhCO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsYUFBS3RDLElBQUwsQ0FBVWlDLFNBQVYsQ0FBb0JJLE1BQXBCLENBQTJCLDRCQUEzQjtBQUNBLGFBQUtwQyxJQUFMLENBQVVnQyxTQUFWLENBQW9CSSxNQUFwQixDQUEyQiw0QkFBM0I7QUFDRDtBQUNGOzs7bUNBSWE7QUFDWixVQUFJRyxXQUFXLEdBQUcsS0FBS3RDLGNBQUwsQ0FBb0JKLHFCQUFwQixHQUE0QzJDLE1BQTlEO0FBQ0EsVUFBSUMsWUFBWSxHQUFHLEtBQUt4QyxjQUFMLENBQW9CSixxQkFBcEIsR0FBNEM2QyxHQUEvRDtBQUNBLFVBQUlDLGdCQUFnQixHQUFHLEtBQUt6QyxVQUFMLENBQWdCTCxxQkFBaEIsR0FBd0MyQyxNQUF4QyxHQUFpRCxDQUF4RTtBQUNBLFVBQUlJLFFBQVEsR0FBR0wsV0FBVyxHQUFHRSxZQUFkLEdBQTZCRSxnQkFBNUM7QUFDQSxXQUFLekMsVUFBTCxDQUFnQnVCLEtBQWhCLENBQXNCaUIsR0FBdEIsR0FBNEJFLFFBQVEsR0FBRyxJQUF2QztBQUNEOzs7Ozs7QUFJSCxpRUFBZXhELE1BQWYsRTs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUVBO0FBRUEsSUFBSUEsdURBQUosRzs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2xpZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsJyk7XHJcbiAgICB0aGlzLnNsaWRlckl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLnNsaWRlci5jaGlsZHJlbik7XHJcbiAgICB0aGlzLnNsaWRlcldpZHRoID0gdGhpcy5zbGlkZXJJdGVtc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIFxyXG4gICAgdGhpcy5uZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2ljb24tLW5leHQnKTtcclxuICAgIHRoaXMucHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19pY29uLS1wcmV2Jyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXN0aW1vbmlhbF9fcG9ydHJhaXQnKTtcclxuICAgIHRoaXMubmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XHJcblxyXG4gICAgdGhpcy5ldmVudHMoKTtcclxuICAgIHRoaXMubmF2aVBvc2l0aW9uKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCl7XHJcbiAgICB0aGlzLm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5zbGlkZVRvUmlnaHQoZSkgKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHRoaXMua2V5Q2hlY2soZSkpO1xyXG4gICAgdGhpcy5wcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuc2xpZGVUb0xlZnQoZSkgKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB0aGlzLm5hdmlQb3NpdGlvbigpICk7XHJcbiAgfVxyXG5cclxuICBrZXlDaGVjayhldmVudCl7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICB0aGlzLnNsaWRlVG9SaWdodChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgdGhpcy5zbGlkZVRvTGVmdChldmVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbGlkZVRvUmlnaHQoZXZlbnQpe1xyXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgLy9nZXRzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBFbGVtZW50IFNpYmxpbmdcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zbGlkZXJJdGVtcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbSA9PT0gbmV4dFNsaWRlKTtcclxuXHJcblxyXG4gICAgLy9yZXR1cm5zIG9uIHRoZSBsYXN0IGl0ZW1cclxuICAgIGlmICghbmV4dFNsaWRlKSByZXR1cm47XHJcblxyXG4gICAgLy9NYW5hZ2UgQXJyb3cgU3RhdGVzXHJcbiAgICB0aGlzLmhpZGVTaG93QXJyb3dzKGluZGV4KTtcclxuICAgIFxyXG4gICAgdGhpcy5tb3ZlKGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlLCBldmVudCk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHNsaWRlVG9MZWZ0KGV2ZW50KXtcclxuICAgIGNvbnN0IGN1cnJlbnRTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXNsaWRlJyk7XHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSBjdXJyZW50U2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHJcbiAgICAvL2dldHMgdGhlIGluZGV4IG9mIHRoZSBwcmV2IEVsZW1lbnQgU2libGluZ1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnNsaWRlckl0ZW1zLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtID09PSBwcmV2U2xpZGUpO1xyXG5cclxuICAgIGlmICghcHJldlNsaWRlKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5oaWRlU2hvd0Fycm93cyhpbmRleCk7XHJcblxyXG4gICAgdGhpcy5tb3ZlKGN1cnJlbnRTbGlkZSwgcHJldlNsaWRlLCBldmVudCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlLCBldmVudCl7XHJcbiAgICAvL2dldCB0cmFuc2Zvcm0gcHJvcGVydHkgdG8gY2hlY2sgdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgIGxldCBzdHlsZSA9IGN1cnJlbnRTbGlkZS5zdHlsZS50cmFuc2Zvcm07XHJcbiAgICBsZXQgdHJhbnNsYXRlWCA9IHN0eWxlLnJlcGxhY2UoL1teLT9cXGQuXS9nLCAnJyk7XHJcbiAgICBsZXQgdHJhbnNsYXRlWF9udW0gPSArdHJhbnNsYXRlWDtcclxuICAgIGxldCBjdXJyZW50UG9zaXRpb247XHJcbiAgICBcclxuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmlnYXRpb25fX2ljb24tLW5leHQnKSB8fCBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyApIHtcclxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdHJhbnNsYXRlWF9udW0gLSB0aGlzLnNsaWRlcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVudFBvc2l0aW9uID0gdHJhbnNsYXRlWF9udW0gKyB0aGlzLnNsaWRlcldpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2xpZGVySXRlbXMuZm9yRWFjaCggKGVsKSA9PntcclxuXHJcbiAgICAgIC8vZ2V0IGN1cnJlbnQgdHJhbnNsYXRleCBwb3NpdGlvblxyXG4gICAgICBlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyBjdXJyZW50UG9zaXRpb24gKyBcInB4KVwiO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGN1cnJlbnRTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXNsaWRlJyk7XHJcbiAgICBuZXh0U2xpZGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1zbGlkZScpO1xyXG4gIH1cclxuXHJcbiAgaGlkZVNob3dBcnJvd3MoaW5kZXgpe1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHRoaXMubmV4dC5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uX19pY29uLS1kaXNhYmxlZCcpO1xyXG4gICAgICB0aGlzLnByZXYuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbl9faWNvbi0tZGlzYWJsZWQnKTtcclxuICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcclxuICAgICAgdGhpcy5wcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSB0aGlzLnNsaWRlckl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5uZXh0LmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5leHQuY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbl9faWNvbi0tZGlzYWJsZWQnKTtcclxuICAgICAgdGhpcy5wcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb25fX2ljb24tLWRpc2FibGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG5hdmlQb3NpdGlvbigpe1xyXG4gICAgbGV0IGltYWdlSGVpZ2h0ID0gdGhpcy5pbWFnZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBsZXQgaW1hZ2VGcm9tVG9wID0gdGhpcy5pbWFnZUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBsZXQgbmF2aWdhdGlvbkhlaWdodCA9IHRoaXMubmF2aWdhdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgLyAyO1xyXG4gICAgbGV0IHBvc2l0aW9uID0gaW1hZ2VIZWlnaHQgKyBpbWFnZUZyb21Ub3AgLSBuYXZpZ2F0aW9uSGVpZ2h0O1xyXG4gICAgdGhpcy5uYXZpZ2F0aW9uLnN0eWxlLnRvcCA9IHBvc2l0aW9uICsgXCJweFwiO1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsImltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyJztcclxuXHJcbm5ldyBTbGlkZXIoKTtcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2phdmFzY3JpcHQvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9