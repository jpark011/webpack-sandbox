(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/main.ts ./src/style.css ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.ts */"zUnb");
module.exports = __webpack_require__(/*! ./src/style.css */"OMi8");


/***/ }),

/***/ "Gs5L":
/*!***********************!*\
  !*** ./src/body.html ***!
  \***********************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"hello\">\n    Hi My Body\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "KHCx":
/*!*********************!*\
  !*** ./src/math.ts ***!
  \*********************/
/*! exports provided: square, cube */
/*! exports used: cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export square */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cube; });
function square(x) {
    return x * x;
}
function cube(x) {
    return x * x * x;
}


/***/ }),

/***/ "OMi8":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _body_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body.html */ "Gs5L");
/* harmony import */ var _body_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_body_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "KHCx");



if (true) {
    console.log('In DEV mode!');
}
document.body.innerHTML = _body_html__WEBPACK_IMPORTED_MODULE_1___default.a;
function component() {
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');
    var number = 5;
    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack', number + " cubed: ", Object(_math__WEBPACK_IMPORTED_MODULE_2__[/* cube */ "a"])(number)], ' ');
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = function (e) {
        __webpack_require__.e(/*! import() | print */ "print").then(__webpack_require__.bind(null, /*! ./print */ "dSPy"))
            .then(function (module) {
            var print = module.default;
            print();
        });
    };
    return element;
}
var element = component();
document.body.appendChild(element);
if (false) {}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function (registration) {
            console.log("SW registered: " + registration);
        })
            .catch(function (regError) {
            console.error("SW register failed: " + regError);
        });
    });
}


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYm9keS5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQU8sU0FBUyxNQUFNLENBQUMsQ0FBUztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUVNLFNBQVMsSUFBSSxDQUFDLENBQVM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDTkQsdUM7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUI7QUFDVztBQUNOO0FBRTVCLElBQUksSUFBcUMsRUFBRTtJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0NBQy9CO0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsaURBQU0sQ0FBQztBQUVqQyxTQUFTLFNBQVM7SUFDZCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEQsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFakIsTUFBTSxDQUFDLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQztJQUN2RCxPQUFPLENBQUMsU0FBUyxHQUFHLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBSyxNQUFNLGFBQVUsRUFBRSwwREFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFekYsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxDQUFDO1FBQ2Ysa0hBQWlEO2FBQzVDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDRCxJQUFTLEtBQUssR0FBSyxNQUFNLFFBQVgsQ0FBWTtZQUVsQyxLQUFLLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFRCxJQUFJLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQztBQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVuQyxJQUFJLEtBQVUsRUFBRSxFQVFmO0FBRUQsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFO0lBQzlCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7UUFDNUIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7YUFDakQsSUFBSSxDQUFDLFVBQUMsWUFBWTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLFlBQWMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLFFBQVE7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF1QixRQUFVLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0NBQ04iLCJmaWxlIjoibWFpbi1kNjI5YzE3NjdhNWExMWQwZmVmNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJoZWxsb1xcXCI+XFxuICAgIEhpIE15IEJvZHlcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJleHBvcnQgZnVuY3Rpb24gc3F1YXJlKHg6IG51bWJlcikge1xuICAgIHJldHVybiB4ICogeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmUoeDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHggKiB4ICogeDtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbXlCb2R5IGZyb20gICcuL2JvZHkuaHRtbCc7XG5pbXBvcnQge2N1YmV9IGZyb20gJy4vbWF0aCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ0luIERFViBtb2RlIScpO1xufVxuXG5kb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IG15Qm9keTtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgY29uc3QgbnVtYmVyID0gNTtcbiAgICBcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBsb29rIGF0IHRoZSBjb25zb2xlISc7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJywgYCR7bnVtYmVyfSBjdWJlZDogYCwgY3ViZShudW1iZXIpXSwgJyAnKTtcbiAgICBcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwcmludFwiICovICcuL3ByaW50JylcbiAgICAgICAgICAgIC50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IHByaW50IH0gPSBtb2R1bGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5sZXQgZWxlbWVudCA9IGNvbXBvbmVudCgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9wcmludCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FjY2VwdGluZyB0aGUgdXBkYXRlZCBwcmludCBtb2R1bGUhJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudCA9IGNvbXBvbmVudCgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pXG59XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTVyByZWdpc3RlcmVkOiAke3JlZ2lzdHJhdGlvbn1gKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKHJlZ0Vycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU1cgcmVnaXN0ZXIgZmFpbGVkOiAke3JlZ0Vycm9yfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9