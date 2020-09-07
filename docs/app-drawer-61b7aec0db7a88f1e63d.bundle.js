(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-drawer"],{

/***/ "3wV7":
/*!**************************************!*\
  !*** ./src/components/app-drawer.ts ***!
  \**************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_drawer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-drawer.html */ "r1KM");
/* harmony import */ var _app_drawer_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_drawer_html__WEBPACK_IMPORTED_MODULE_0__);

const templateElement = document.createElement('template');
templateElement.innerHTML = _app_drawer_html__WEBPACK_IMPORTED_MODULE_0___default.a;
class AppDrawer extends HTMLElement {
    static get observedAttributes() {
        return ['disabled', 'open'];
    }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateElement.content.cloneNode(true));
        this.addEventListener('click', (e) => {
            if (this.disabled) {
                return;
            }
            this.toggleDrawer();
        });
    }
    get open() {
        return this.hasAttribute('open');
    }
    set open(val) {
        if (val) {
            this.setAttribute('open', '');
        }
        else {
            this.removeAttribute('open');
        }
        this.toggleDrawer();
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    set disabled(val) {
        if (val) {
            this.setAttribute('disabled', '');
        }
        else {
            this.removeAttribute('disabled');
        }
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.disabled) {
            this.setAttribute('tabindex', '-1');
            this.setAttribute('aria-disabled', 'true');
        }
        else {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-disabled', 'false');
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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "app-drawer-83ce90033aea6e67913b6707e699b60f.css");

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
var code = "<link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n<b>I'm in shadow dom!</b>\n<slot></slot>\n";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hcHAtZHJhd2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1kcmF3ZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC1kcmF3ZXIuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUU1QyxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNELGVBQWUsQ0FBQyxTQUFTLEdBQUcsdURBQVcsQ0FBQztBQUV4QyxNQUFNLFNBQVUsU0FBUSxXQUFXO0lBRS9CLE1BQU0sS0FBSyxrQkFBa0I7UUFDekIsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0Q7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUVSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNSLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNSLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxRQUFRLENBQUMsR0FBRztRQUNaLElBQUksR0FBRyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsd0JBQXdCLENBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDckUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVELFlBQVk7SUFFWixDQUFDO0NBQ0o7QUFFRCxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNsRS9DO0FBQWUsb0ZBQXVCLG9EQUFvRCxFOzs7Ozs7Ozs7Ozs7QUNBMUY7QUFDQSwrQ0FBK0MsbUJBQU8sQ0FBQyxtRUFBdUQ7QUFDOUcsaUNBQWlDLG1CQUFPLENBQUMsOEJBQWtCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0IiLCJmaWxlIjoiYXBwLWRyYXdlci02MWI3YWVjMGRiN2E4OGYxZTYzZC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHRtbENvbnRlbnQgZnJvbSAnLi9hcHAtZHJhd2VyLmh0bWwnO1xuXG5jb25zdCB0ZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9IGh0bWxDb250ZW50O1xuXG5jbGFzcyBBcHBEcmF3ZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ2Rpc2FibGVkJywgJ29wZW4nXTtcbiAgICB9XG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlRWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlRHJhd2VyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0IG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cblxuICAgIHNldCBvcGVuKHZhbCkge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2dnbGVEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQodmFsKSB7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgb2xkVmFsdWU6IHN0cmluZywgbmV3VmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpIHtcblxuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtZHJhd2VyJywgQXBwRHJhd2VyKTtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhcHAtZHJhd2VyLTgzY2U5MDAzM2FlYTZlNjc5MTNiNjcwN2U2OTliNjBmLmNzc1wiOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vYXBwLWRyYXdlci5jc3NcIik7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxuPGI+SSdtIGluIHNoYWRvdyBkb20hPC9iPlxcbjxzbG90Pjwvc2xvdD5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwic291cmNlUm9vdCI6IiJ9