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
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "KHCx");


Promise.all(/*! import() | app-drawer */[__webpack_require__.e("vendors"), __webpack_require__.e("app-drawer")]).then(__webpack_require__.bind(null, /*! ./components/app-drawer */ "3wV7"));
if (true) {
    console.log('In DEV mode!');
}
// document.body.innerHTML = myBody;
function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');
    const number = 5;
    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack', `${number} cubed: `, Object(_math__WEBPACK_IMPORTED_MODULE_1__[/* cube */ "a"])(number)], ' ');
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = (e) => {
        __webpack_require__.e(/*! import() | print */ "print").then(__webpack_require__.bind(null, /*! ./print */ "dSPy"))
            .then((module) => {
            const { default: print } = module;
            print();
        });
    };
    return element;
}
let element = component();
document.body.appendChild(element);
if (false) {}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
            console.log(`SW registered: ${registration}`);
        })
            .catch((regError) => {
            console.error(`SW register failed: ${regError}`);
        });
    });
}


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQU8sU0FBUyxNQUFNLENBQUMsQ0FBUztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUVNLFNBQVMsSUFBSSxDQUFDLENBQVM7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDTkQsdUM7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QjtBQUVLO0FBRTVCLDRMQUFzRSxDQUFDO0FBRXZFLElBQUksSUFBcUMsRUFBRTtJQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0NBQy9CO0FBRUQsb0NBQW9DO0FBRXBDLFNBQVMsU0FBUztJQUNkLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVqQixNQUFNLENBQUMsU0FBUyxHQUFHLG1DQUFtQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxTQUFTLEdBQUcsNkNBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxVQUFVLEVBQUUsMERBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXpGLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU1QixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDbkIsa0hBQWlEO2FBQzVDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2IsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFFbEMsS0FBSyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNuQixDQUFDO0FBRUQsSUFBSSxPQUFPLEdBQUcsU0FBUyxFQUFFLENBQUM7QUFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbkMsSUFBSSxLQUFVLEVBQUUsRUFRZjtBQUVELElBQUksZUFBZSxJQUFJLFNBQVMsRUFBRTtJQUM5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNqQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQzthQUNqRCxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUJBQXVCLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztDQUNOIiwiZmlsZSI6Im1haW4tYmNjNDlmYzQ0ZWZkZWEzMzViMDkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4OiBudW1iZXIpIHtcbiAgICByZXR1cm4geCAqIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjdWJlKHg6IG51bWJlcikge1xuICAgIHJldHVybiB4ICogeCAqIHg7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG15Qm9keSBmcm9tICAnLi9ib2R5Lmh0bWwnO1xuaW1wb3J0IHtjdWJlfSBmcm9tICcuL21hdGgnO1xuXG5pbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhcHAtZHJhd2VyXCIgKi8gJy4vY29tcG9uZW50cy9hcHAtZHJhd2VyJyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc29sZS5sb2coJ0luIERFViBtb2RlIScpO1xufVxuXG4vLyBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IG15Qm9keTtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgY29uc3QgbnVtYmVyID0gNTtcbiAgICBcbiAgICBidXR0b24uaW5uZXJIVE1MID0gJ0NsaWNrIG1lIGFuZCBsb29rIGF0IHRoZSBjb25zb2xlISc7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJywgYCR7bnVtYmVyfSBjdWJlZDogYCwgY3ViZShudW1iZXIpXSwgJyAnKTtcbiAgICBcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJyKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwcmludFwiICovICcuL3ByaW50JylcbiAgICAgICAgICAgIC50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRlZmF1bHQ6IHByaW50IH0gPSBtb2R1bGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcHJpbnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5sZXQgZWxlbWVudCA9IGNvbXBvbmVudCgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9wcmludCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0FjY2VwdGluZyB0aGUgdXBkYXRlZCBwcmludCBtb2R1bGUhJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudCA9IGNvbXBvbmVudCgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pXG59XG5cbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAgICAgLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTVyByZWdpc3RlcmVkOiAke3JlZ2lzdHJhdGlvbn1gKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKHJlZ0Vycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU1cgcmVnaXN0ZXIgZmFpbGVkOiAke3JlZ0Vycm9yfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9