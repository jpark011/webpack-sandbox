(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-drawer"],{

/***/ "3wV7":
/*!**************************************!*\
  !*** ./src/components/app-drawer.ts ***!
  \**************************************/
/*! exports provided: AppDrawer */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDrawer", function() { return AppDrawer; });
/* harmony import */ var _app_drawer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-drawer.html */ "r1KM");
/* harmony import */ var _app_drawer_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_drawer_html__WEBPACK_IMPORTED_MODULE_0__);

const templateElement = document.createElement('template');
templateElement.innerHTML = _app_drawer_html__WEBPACK_IMPORTED_MODULE_0___default.a;
class AppDrawer extends HTMLElement {
    constructor() {
        var _a;
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateElement.content.cloneNode(true));
        this._helloSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name=hello]');
    }
    static get observedAttributes() {
        return [
            "disabled" /* Disabled */,
            "open" /* Open */
        ];
    }
    _clickCallback(eve) {
        if (this.disabled) {
            return;
        }
        this.toggleDrawer();
        console.log(this._helloSlot);
    }
    get open() {
        return this.hasAttribute("open" /* Open */);
    }
    set open(val) {
        if (val) {
            this.setAttribute("open" /* Open */, '');
        }
        else {
            this.removeAttribute("open" /* Open */);
        }
        this.toggleDrawer();
    }
    get disabled() {
        return this.hasAttribute("disabled" /* Disabled */);
    }
    set disabled(val) {
        if (val) {
            this.setAttribute("disabled" /* Disabled */, '');
        }
        else {
            this.removeAttribute("disabled" /* Disabled */);
        }
    }
    connectedCallback() {
        this.addEventListener('click', this._clickCallback);
    }
    disconnectedCallback() {
        this.removeEventListener('click', this._clickCallback);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "disabled" /* Disabled */:
                if (this.disabled) {
                    this.setAttribute("tabindex" /* TabIndex */, '-1');
                    this.setAttribute("aria-disabled" /* AriaDisabled */, 'true');
                }
                else {
                    this.setAttribute("tabindex" /* TabIndex */, '0');
                    this.setAttribute("aria-disabled" /* AriaDisabled */, 'false');
                }
                break;
            case "open" /* Open */:
                // TODO
                break;
        }
    }
    toggleDrawer() {
    }
}
customElements.define('app-drawer', AppDrawer);


/***/ }),

/***/ "BGvu":
/*!***************************************!*\
  !*** ./src/components/app-drawer.css ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "app-drawer-02a411b3b42df04fabe5ff82a27b5a17.css");

/***/ }),

/***/ "r1KM":
/*!****************************************!*\
  !*** ./src/components/app-drawer.html ***!
  \****************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "Rxnk");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./app-drawer.css */ "BGvu");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n<b>I'm in shadow dom!</b>\n<slot></slot>\n<slot name=\"hello\"></slot>\n<slot></slot>\n";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtZHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1kcmF3ZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1kcmF3ZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBRTVDLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDM0QsZUFBZSxDQUFDLFNBQVMsR0FBRyx1REFBVyxDQUFDO0FBU2pDLE1BQU0sU0FBVSxTQUFRLFdBQVc7SUFtQnRDOztRQUNJLEtBQUssRUFBRSxDQUFDO1FBRVIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELFVBQVUsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsVUFBVSxTQUFHLElBQUksQ0FBQyxVQUFVLDBDQUFFLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUF4QkQsTUFBTSxLQUFLLGtCQUFrQjtRQUN6QixPQUFPOzs7U0FHTixDQUFDO0lBQ04sQ0FBQztJQUlPLGNBQWMsQ0FBQyxHQUFVO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBV0QsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUMsWUFBWSxtQkFBeUIsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNSLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFlBQVksb0JBQTBCLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxtQkFBeUIsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsWUFBWSwyQkFBNkIsQ0FBQztJQUMxRCxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsR0FBRztRQUNaLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFlBQVksNEJBQThCLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSwyQkFBNkIsQ0FBQztTQUNyRDtJQUNMLENBQUM7SUFFRCxpQkFBaUI7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDckUsUUFBUSxJQUFJLEVBQUU7WUFDVjtnQkFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLFlBQVksNEJBQThCLElBQUksQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsWUFBWSxxQ0FBa0MsTUFBTSxDQUFDLENBQUM7aUJBQzlEO3FCQUFNO29CQUNILElBQUksQ0FBQyxZQUFZLDRCQUE4QixHQUFHLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFlBQVkscUNBQWtDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvRDtnQkFDRCxNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTztnQkFDUCxNQUFNO1NBRWI7SUFDTCxDQUFDO0lBRUQsWUFBWTtJQUVaLENBQUM7Q0FDSjtBQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hHL0M7QUFBZSxvRkFBdUIsb0RBQW9ELEU7Ozs7Ozs7Ozs7OztBQ0ExRjtBQUNBLCtDQUErQyxtQkFBTyxDQUFDLG1FQUF1RDtBQUM5RyxpQ0FBaUMsbUJBQU8sQ0FBQyw4QkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQiIsImZpbGUiOiJhcHAtZHJhd2VyLTExNGY5MmQ3Nzc4ZjFmODY3ZjNiLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodG1sQ29udGVudCBmcm9tICcuL2FwcC1kcmF3ZXIuaHRtbCc7XG5cbmNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbENvbnRlbnQ7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEFwcERyYXdlckF0dHJpYnV0ZSB7XG4gICAgRGlzYWJsZWQgPSAnZGlzYWJsZWQnLFxuICAgIE9wZW4gPSAnb3BlbicsXG4gICAgVGFiSW5kZXggPSAndGFiaW5kZXgnLFxuICAgIEFyaWFEaXNhYmxlZCA9ICdhcmlhLWRpc2FibGVkJ1xufVxuXG5leHBvcnQgY2xhc3MgQXBwRHJhd2VyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIFxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgQXBwRHJhd2VyQXR0cmlidXRlLkRpc2FibGVkLCBcbiAgICAgICAgICAgIEFwcERyYXdlckF0dHJpYnV0ZS5PcGVuXG4gICAgICAgIF07XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgX2hlbGxvU2xvdDogYW55O1xuICAgIFxuICAgIHByaXZhdGUgX2NsaWNrQ2FsbGJhY2soZXZlOiBFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9nZ2xlRHJhd2VyKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2hlbGxvU2xvdCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgICAgIHRoaXMuX2hlbGxvU2xvdCA9IHRoaXMuc2hhZG93Um9vdD8ucXVlcnlTZWxlY3Rvcignc2xvdFtuYW1lPWhlbGxvXScpO1xuICAgIH1cblxuICAgIGdldCBvcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQXBwRHJhd2VyQXR0cmlidXRlLk9wZW4pO1xuICAgIH1cblxuICAgIHNldCBvcGVuKHZhbCkge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShBcHBEcmF3ZXJBdHRyaWJ1dGUuT3BlbiwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoQXBwRHJhd2VyQXR0cmlidXRlLk9wZW4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9nZ2xlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoQXBwRHJhd2VyQXR0cmlidXRlLkRpc2FibGVkKTtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQodmFsKSB7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKEFwcERyYXdlckF0dHJpYnV0ZS5EaXNhYmxlZCwgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoQXBwRHJhd2VyQXR0cmlidXRlLkRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fY2xpY2tDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbGlja0NhbGxiYWNrKVxuICAgIH1cblxuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcsIG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgICBjYXNlIEFwcERyYXdlckF0dHJpYnV0ZS5EaXNhYmxlZDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShBcHBEcmF3ZXJBdHRyaWJ1dGUuVGFiSW5kZXgsICctMScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShBcHBEcmF3ZXJBdHRyaWJ1dGUuQXJpYURpc2FibGVkLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKEFwcERyYXdlckF0dHJpYnV0ZS5UYWJJbmRleCwgJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoQXBwRHJhd2VyQXR0cmlidXRlLkFyaWFEaXNhYmxlZCwgJ2ZhbHNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBcHBEcmF3ZXJBdHRyaWJ1dGUuT3BlbjpcbiAgICAgICAgICAgICAgICAvLyBUT0RPXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpIHtcblxuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZHJhd2VyJywgQXBwRHJhd2VyKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcHAtZHJhd2VyLTAyYTQxMWIzYjQyZGYwNGZhYmU1ZmY4MmEyN2I1YTE3LmNzc1wiOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vYXBwLWRyYXdlci5jc3NcIik7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxuPGI+SSdtIGluIHNoYWRvdyBkb20hPC9iPlxcbjxzbG90Pjwvc2xvdD5cXG48c2xvdCBuYW1lPVxcXCJoZWxsb1xcXCI+PC9zbG90PlxcbjxzbG90Pjwvc2xvdD5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwic291cmNlUm9vdCI6IiJ9