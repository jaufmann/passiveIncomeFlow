(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "//Xr":
    /*!************************************************************!*\
      !*** ./src/app/pages/datenschutz/datenschutz.component.ts ***!
      \************************************************************/

    /*! exports provided: DatenschutzComponent */

    /***/
    function Xr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatenschutzComponent", function () {
        return DatenschutzComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var DatenschutzComponent = /*#__PURE__*/function () {
        function DatenschutzComponent(contentfulService, genericContentfulDomManipulatorService) {
          _classCallCheck(this, DatenschutzComponent);

          this.contentfulService = contentfulService;
          this.genericContentfulDomManipulatorService = genericContentfulDomManipulatorService;
        }

        _createClass(DatenschutzComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var datenschutz, container;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.contentfulService.getDatenschutz();

                    case 2:
                      datenschutz = _context.sent;
                      container = document.getElementById('container');
                      container.innerHTML = this.genericContentfulDomManipulatorService.parseContentToHTMLDomElements(datenschutz, 'datenschutz');

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DatenschutzComponent;
      }();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/waldemarjaufmann/IdeaProjects/passiveIncomeFlowProject/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    1:
    /*!********************************!*\
      !*** ./util.inspect (ignored) ***!
      \********************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!********************!*\
      !*** os (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();
      /***/

    },

    /***/
    "4SNt":
    /*!**************************************************************!*\
      !*** ./src/app/directives/contentful-richmedia.directive.ts ***!
      \**************************************************************/

    /*! exports provided: ContentfulRichmediaDirective */

    /***/
    function SNt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentfulRichmediaDirective", function () {
        return ContentfulRichmediaDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var ContentfulRichmediaDirective = /*#__PURE__*/function () {
        function ContentfulRichmediaDirective(elr, contentFullService, genericContentfulDomManipulatorService) {
          _classCallCheck(this, ContentfulRichmediaDirective);

          this.elr = elr;
          this.contentFullService = contentFullService;
          this.genericContentfulDomManipulatorService = genericContentfulDomManipulatorService;
        }

        _createClass(ContentfulRichmediaDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var content;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      content = null;
                      _context2.t0 = this.type;
                      _context2.next = _context2.t0 === 'depot' ? 4 : _context2.t0 === 'datenschutz' ? 8 : 12;
                      break;

                    case 4:
                      _context2.next = 6;
                      return this.contentFullService.getDepot();

                    case 6:
                      content = _context2.sent;
                      return _context2.abrupt("break", 12);

                    case 8:
                      _context2.next = 10;
                      return this.contentFullService.getDatenschutz();

                    case 10:
                      content = _context2.sent;
                      return _context2.abrupt("break", 12);

                    case 12:
                      this.elr.nativeElement.innerHTML = this.genericContentfulDomManipulatorService.parseContentToHTMLDomElements(content, this.type);

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ContentfulRichmediaDirective;
      }();
      /***/

    },

    /***/
    "6I3z":
    /*!*************************************************************************!*\
      !*** ./src/app/components/footer/footer.component.scss.shim.ngstyle.js ***!
      \*************************************************************************/

    /*! exports provided: styles */

    /***/
    function I3z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["@media only screen and (min-width: 601px) {\n  .footer[_ngcontent-%COMP%] {\n    height: 60px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    background: #616161;\n    display: flex;\n    color: #bbbbbb;\n    border-top: 4px solid #6300ff;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 10px;\n    align-items: center;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 30px;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #bbbbbb;\n    text-decoration: none;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: snow;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .footer[_ngcontent-%COMP%] {\n    height: 130px;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    background: #616161;\n    display: flex;\n    color: #bbbbbb;\n    border-top: 4px solid #6300ff;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 10px;\n    align-items: center;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 30px;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #bbbbbb;\n    text-decoration: none;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: snow;\n  }\n  .footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.copyRight[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQWJGLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLDZCQUFBO0VBZkE7RUFWQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBWUY7RUFWRTtJQUNFLGtCQUFBO0VBWUo7RUFWSTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtFQVlOO0VBVEk7SUFDRSxXQUFBO0VBV047RUFhRTtJQUNFLG9CQUFBO0VBWEo7QUFDRjtBQWdCQTtFQUNFO0lBQ0UsYUFBQTtJQUVBLG1CQUFBO0lBQ0Esc0JBQUE7SUE3QkYsa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsNkJBQUE7RUFlQTtFQXhDQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBMENGO0VBeENFO0lBQ0Usa0JBQUE7RUEwQ0o7RUF4Q0k7SUFDRSxjQUFBO0lBQ0EscUJBQUE7RUEwQ047RUF2Q0k7SUFDRSxXQUFBO0VBeUNOO0VBQUU7SUFDRSxrQkFBQTtFQUVKO0VBQ0U7SUFDRSxrQkFBQTtFQUNKO0FBQ0Y7QUFJQTtFQUNFLGtCQUFBO0FBRkYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxpc3QoKSB7XG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNiYmJiYmI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBzbm93O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gZm9vdGVyLW1haW4oKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzYxNjE2MTtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNiYmJiYmI7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjNjMwMGZmO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQGluY2x1ZGUgbGlzdCgpO1xuICAgIEBpbmNsdWRlIGZvb3Rlci1tYWluKCk7XG5cbiAgICB1bCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIGhlaWdodDogMTMwcHg7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBAaW5jbHVkZSBsaXN0KCk7XG4gICAgQGluY2x1ZGUgZm9vdGVyLW1haW4oKTtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG5cblxuLmNvcHlSaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbiJdfQ== */"];
      /***/
    },

    /***/
    "6jz6":
    /*!*****************************************************************!*\
      !*** ./src/app/components/footer/footer.component.ngfactory.js ***!
      \*****************************************************************/

    /*! exports provided: RenderType_FooterComponent, View_FooterComponent_0, View_FooterComponent_Host_0, FooterComponentNgFactory */

    /***/
    function jz6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FooterComponent", function () {
        return RenderType_FooterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FooterComponent_0", function () {
        return View_FooterComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FooterComponent_Host_0", function () {
        return View_FooterComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponentNgFactory", function () {
        return FooterComponentNgFactory;
      });
      /* harmony import */


      var _footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer.component.scss.shim.ngstyle */
      "6I3z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer.component */
      "LmEr");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_FooterComponent = [_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_FooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FooterComponent,
        data: {}
      });

      function View_FooterComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "links"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "a", [["routerLink", "impressum"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Impressum"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "a", [["routerLink", "datenschutz"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Datenschutz"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "copyRight"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \xA9 2021 Passive Income Flow "]))], function (_ck, _v) {
          var currVal_2 = "impressum";

          _ck(_v, 5, 0, currVal_2);

          var currVal_5 = "datenschutz";

          _ck(_v, 9, 0, currVal_5);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target;

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href;

          _ck(_v, 4, 0, currVal_0, currVal_1);

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).target;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).href;

          _ck(_v, 8, 0, currVal_3, currVal_4);
        });
      }

      function View_FooterComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_FooterComponent_0, RenderType_FooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var FooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], View_FooterComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "84yk":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/side-section/side-section.component.scss.shim.ngstyle.js ***!
      \*************************************************************************************/

    /*! exports provided: styles */

    /***/
    function yk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".ads[_ngcontent-%COMP%] {\n  background: white;\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n  justify-content: center;\n  border-top: 4px solid #2800e4;\n  box-shadow: 0px 0px 13px #b9b7b7, 0px 0px 13px #cac5c5;\n}\n\n.instagram[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZGUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0RBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJzaWRlLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzI4MDBlNDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4ICNiOWI3YjcsIDBweCAwcHggMTNweCAjY2FjNWM1O1xufVxuXG4uaW5zdGFncmFtIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"];
      /***/
    },

    /***/
    "A8a/":
    /*!***********************************************************!*\
      !*** ./src/app/services/contentful/contentful.service.ts ***!
      \***********************************************************/

    /*! exports provided: ContentfulService */

    /***/
    function A8a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentfulService", function () {
        return ContentfulService;
      });
      /* harmony import */


      var contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! contentful */
      "VjyN");
      /* harmony import */


      var contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_0__); // import Contentful createClient and type for `Entry`
      // configure the service with tokens and content type ids
      // SET YOU OWN CONFIG here


      var CONFIG = {
        space: 'fh8o0elpc9nz',
        accessToken: 'tiqnB9Wow4ZdXeQa9SUW_87pLEt_3_qyC7ptxS5w80g'
      };

      var ContentfulService = /*#__PURE__*/function () {
        function ContentfulService() {
          _classCallCheck(this, ContentfulService);

          this.cdaClient = Object(contentful__WEBPACK_IMPORTED_MODULE_0__["createClient"])({
            space: CONFIG.space,
            accessToken: CONFIG.accessToken
          });
        }

        _createClass(ContentfulService, [{
          key: "logContent",
          value: function logContent(contentId) {
            this.cdaClient.getEntry(contentId).then(function (entry) {
              return console.log(entry);
            });
          }
        }, {
          key: "getContent",
          value: function getContent(contentId, skip) {
            var promise = this.cdaClient.getEntries({
              content_type: contentId,
              limit: 2,
              skip: skip
            }).then(function (r) {
              return r.items;
            });
            return promise;
          }
        }, {
          key: "getSingleBlogPost",
          value: function getSingleBlogPost(contentId) {
            var promise = this.cdaClient.getEntry(contentId).then(function (r) {
              return r;
            });
            return promise;
          }
        }, {
          key: "getDatenschutz",
          value: function getDatenschutz() {
            var promise = this.cdaClient.getEntry('3FDZsGggh4BCXkWzHtWJFh').then(function (r) {
              return r;
            });
            return promise;
          }
        }, {
          key: "getDepot",
          value: function getDepot() {
            var promise = this.cdaClient.getEntry('3bGb6PYZI8rCMt8NU3SZ7Z').then(function (r) {
              return r;
            });
            return promise;
          }
        }]);

        return ContentfulService;
      }();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        contentful: {
          spaceId: '',
          token: ''
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E2lt":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/middle-content/middle-content.component.ngfactory.js ***!
      \*********************************************************************************/

    /*! exports provided: RenderType_MiddleContentComponent, View_MiddleContentComponent_0, View_MiddleContentComponent_Host_0, MiddleContentComponentNgFactory */

    /***/
    function E2lt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_MiddleContentComponent", function () {
        return RenderType_MiddleContentComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MiddleContentComponent_0", function () {
        return View_MiddleContentComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_MiddleContentComponent_Host_0", function () {
        return View_MiddleContentComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiddleContentComponentNgFactory", function () {
        return MiddleContentComponentNgFactory;
      });
      /* harmony import */


      var _middle_content_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./middle-content.component.scss.shim.ngstyle */
      "xa35");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _middle_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./middle-content.component */
      "LSTk");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_MiddleContentComponent = [_middle_content_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_MiddleContentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_MiddleContentComponent,
        data: {}
      });

      function View_MiddleContentComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 45, "div", [["class", "container q"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 44, "div", [["class", "row main"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 23, "div", [["class", "col-lg first"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Dividenden Einnahmen"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [["class", "dreieck"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "dreieckRechts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "dividendnEinnahmen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Letzter Monat:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 50\u20AC "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "dividendnEinnahmen-right "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aktuelles Jahr: 50\u20AC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Portfolio "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "div", [["class", "stockPortfolio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "img", [["src", "assets/cola.png"], ["style", "width: 53px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "div", [["class", "depotinfo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Aktiendepot: Traderepublic ETF-Depot: Scalable "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Hier siehst du weitere Details meines Depots"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 19, "div", [["class", "col-lg second"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Zinseinnahmen P2P"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 3, "div", [["class", "dividendnEinnahmen"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Letzter Monat:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 50\u20AC "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "div", [["class", "dividendnEinnahmen-right "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Aktuelles Jahr:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 50\u20AC "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "div", [["class", "dreieck"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "div", [["class", "dreieckRechts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 6, "div", [["class", "content-p2p"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Mein P2P Konto habe ich von Bondora Go & Grow "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "div", [["class", "pic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "img", [["src", "assets/Bondora-Go-Grow-Blogbild.png"], ["style", "width: 260px;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Hier siehst du weitere Details meines P2P Depots "]))], null, null);
      }

      function View_MiddleContentComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-middle-content", [], null, null, null, View_MiddleContentComponent_0, RenderType_MiddleContentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _middle_content_component__WEBPACK_IMPORTED_MODULE_2__["MiddleContentComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var MiddleContentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-middle-content", _middle_content_component__WEBPACK_IMPORTED_MODULE_2__["MiddleContentComponent"], View_MiddleContentComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "EVue":
    /*!*******************************************************************!*\
      !*** ./src/app/components/side-section/side-section.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SideSectionComponent */

    /***/
    function EVue(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideSectionComponent", function () {
        return SideSectionComponent;
      });

      var SideSectionComponent = /*#__PURE__*/function () {
        function SideSectionComponent() {
          _classCallCheck(this, SideSectionComponent);
        }

        _createClass(SideSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SideSectionComponent;
      }();
      /***/

    },

    /***/
    "EWkg":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/blog-posts/blog-posts.component.scss.shim.ngstyle.js ***!
      \****************************************************************************/

    /*! exports provided: styles */

    /***/
    function EWkg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".description[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.post-area[_ngcontent-%COMP%] {\n  margin: 70px 0 70px 0;\n  padding: 20px;\n  background: white;\n  position: relative;\n  box-shadow: 0px 0px 13px #b9b7b7, 0px 0px 13px #cac5c5;\n  border-top: 4px solid #2800e4;\n}\n\n.btn-more[_ngcontent-%COMP%] {\n  background: #a368ff;\n  color: #e6e6e6;\n  border: 1px solid grey;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\n.btn-navigation[_ngcontent-%COMP%] {\n  background: #a368ff;\n  color: #e6e6e6;\n  border: 1px solid grey;\n}\n\n.date[_ngcontent-%COMP%] {\n  background: #724baf;\n  position: absolute;\n  transform: translate(2px, -42px);\n  color: white;\n  padding: 2px;\n  border: 4px solid #724baf;\n  left: -2px;\n  top: 2px;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 200px;\n  float: left;\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Jsb2ctcG9zdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNEQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJibG9nLXBvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBvc3QtYXJlYSB7XG4gIG1hcmdpbjogNzBweCAwIDcwcHggMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxM3B4ICNiOWI3YjcsIDBweCAwcHggMTNweCAjY2FjNWM1O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzI4MDBlNDtcbn1cblxuLmJ0bi1tb3JlIHtcbiAgYmFja2dyb3VuZDogI2EzNjhmZjtcbiAgY29sb3I6ICNlNmU2ZTY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uYnRuLW5hdmlnYXRpb24ge1xuICBiYWNrZ3JvdW5kOiAjYTM2OGZmO1xuICBjb2xvcjogI2U2ZTZlNjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbn1cblxuLmRhdGUge1xuICBiYWNrZ3JvdW5kOiAjNzI0YmFmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTQycHgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiA0cHggc29saWQgIzcyNGJhZjtcbiAgbGVmdDogLTJweDtcbiAgdG9wOiAycHg7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4iXX0= */"];
      /***/
    },

    /***/
    "HPKf":
    /*!************************************************!*\
      !*** ./src/app/pages/depot/depot.component.ts ***!
      \************************************************/

    /*! exports provided: DepotComponent */

    /***/
    function HPKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepotComponent", function () {
        return DepotComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var DepotComponent = /*#__PURE__*/function () {
        function DepotComponent() {
          _classCallCheck(this, DepotComponent);

          this.depot = null;
        }

        _createClass(DepotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }]);

        return DepotComponent;
      }();
      /***/

    },

    /***/
    "Ilc8":
    /*!******************************************************************!*\
      !*** ./src/app/pages/impressum/impressum.component.ngfactory.js ***!
      \******************************************************************/

    /*! exports provided: RenderType_ImpressumComponent, View_ImpressumComponent_0, View_ImpressumComponent_Host_0, ImpressumComponentNgFactory */

    /***/
    function Ilc8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_ImpressumComponent", function () {
        return RenderType_ImpressumComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ImpressumComponent_0", function () {
        return View_ImpressumComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_ImpressumComponent_Host_0", function () {
        return View_ImpressumComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImpressumComponentNgFactory", function () {
        return ImpressumComponentNgFactory;
      });
      /* harmony import */


      var _impressum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./impressum.component.scss.shim.ngstyle */
      "cg/4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _directives_contentful_richmedia_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/contentful-richmedia.directive */
      "4SNt");
      /* harmony import */


      var _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/contentful/contentful.service */
      "A8a/");
      /* harmony import */


      var _services_contentful_generic_contentful_dom_manipulator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/contentful/generic-contentful-dom-manipulator.service */
      "Qgv5");
      /* harmony import */


      var _impressum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./impressum.component */
      "ZUwx");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_ImpressumComponent = [_impressum_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_ImpressumComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_ImpressumComponent,
        data: {}
      });

      function View_ImpressumComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["appContentfulRichmedia", ""], ["class", "main-box"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _directives_contentful_richmedia_directive__WEBPACK_IMPORTED_MODULE_2__["ContentfulRichmediaDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"], _services_contentful_generic_contentful_dom_manipulator_service__WEBPACK_IMPORTED_MODULE_4__["GenericContentfulDomManipulatorService"]], {
          type: [0, "type"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "impressum";

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_ImpressumComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-impressum", [], null, null, null, View_ImpressumComponent_0, RenderType_ImpressumComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _impressum_component__WEBPACK_IMPORTED_MODULE_5__["ImpressumComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var ImpressumComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-impressum", _impressum_component__WEBPACK_IMPORTED_MODULE_5__["ImpressumComponent"], View_ImpressumComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "LSTk":
    /*!***********************************************************************!*\
      !*** ./src/app/components/middle-content/middle-content.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MiddleContentComponent */

    /***/
    function LSTk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiddleContentComponent", function () {
        return MiddleContentComponent;
      });

      var MiddleContentComponent = /*#__PURE__*/function () {
        function MiddleContentComponent() {
          _classCallCheck(this, MiddleContentComponent);
        }

        _createClass(MiddleContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MiddleContentComponent;
      }();
      /***/

    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();
      /***/

    },

    /***/
    "OvOj":
    /*!****************************************************!*\
      !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
      \****************************************************/

    /*! exports provided: styles */

    /***/
    function OvOj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".main-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background: #616161;\n  color: white;\n}\n\n@media only screen and (max-width: 959px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .row[_ngcontent-%COMP%] {\n    --bs-gutter-x: 0;\n  }\n}\n\n@media only screen and (min-width: 959px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .row[_ngcontent-%COMP%] {\n    --bs-gutter-x: 1.5rem;\n  }\n}\n\n.side-nav-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: white;\n}\n\n.full-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 50px;\n}\n\n.small-footer[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-top: 50px;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #7767c1;\n  background: #45217d !important;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n}\n\na[_ngcontent-%COMP%] {\n  color: #bbbbbb;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: snow;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  background: #724baf;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQUY7O0FBSUE7RUFDRTtJQUNFLDhCQUFBO0VBREY7O0VBSUE7SUFDRSxnQkFBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLDhCQUFBO0VBRkY7O0VBS0E7SUFDRSxxQkFBQTtFQUZGO0FBQ0Y7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBSEY7O0FBUUE7RUFDQyxxQkFBQTtBQUxEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xuICBjb2xvcjogd2hpdGU7XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICBtYXQtdG9vbGJhciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnJvdyB7XG4gICAgLS1icy1ndXR0ZXIteDogMDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1OXB4KSB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAucm93IHtcbiAgICAtLWJzLWd1dHRlci14OiAxLjVyZW07XG4gIH1cbn1cblxuLnNpZGUtbmF2LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZnVsbC1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNtYWxsLWZvb3RlciB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM3NzY3YzE7XG4gIGJhY2tncm91bmQ6ICM0NTIxN2QgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG5hIHtcbiAgY29sb3I6ICNiYmJiYmI7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogc25vdztcbn1cblxubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kOiAjNzI0YmFmO1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi50aXRsZSB7XG4gdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"];
      /***/
    },

    /***/
    "Qgv5":
    /*!***********************************************************************************!*\
      !*** ./src/app/services/contentful/generic-contentful-dom-manipulator.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: GenericContentfulDomManipulatorService */

    /***/
    function Qgv5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenericContentfulDomManipulatorService", function () {
        return GenericContentfulDomManipulatorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var GenericContentfulDomManipulatorService = /*#__PURE__*/function () {
        function GenericContentfulDomManipulatorService() {
          _classCallCheck(this, GenericContentfulDomManipulatorService);
        }

        _createClass(GenericContentfulDomManipulatorService, [{
          key: "parseContentToHTMLDomElements",
          value: function parseContentToHTMLDomElements(contentFullRichMediaContent, type) {
            var hmtlChain = '';
            var contentType = type === 'datenschutz' ? 'datenschutzContent' : 'depot';

            var _iterator = _createForOfIteratorHelper(contentFullRichMediaContent.fields[contentType].content),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var content = _step.value;

                if (content.nodeType === 'paragraph') {
                  hmtlChain = hmtlChain + this.paragraph(content);
                } else if (content.nodeType === 'ordered-list' || content.nodeType === 'unordered-list') {
                  hmtlChain = hmtlChain + this.orderedList(content, content.nodeType);
                } else if (content.nodeType.includes('heading-')) {
                  hmtlChain = hmtlChain + this.heading(content, content.nodeType);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return hmtlChain;
          }
        }, {
          key: "orderedList",
          value: function orderedList(content, nodeType) {
            var listType = nodeType === 'ordered-list' ? 'ol' : 'ul';
            var ul = "<".concat(listType, ">");

            var _iterator2 = _createForOfIteratorHelper(content.content),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var c = _step2.value;
                var list = '<li>';

                var _iterator3 = _createForOfIteratorHelper(c.content),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var cc = _step3.value;
                    list = list + this.paragraph(cc);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                list = list + '</li>';
                ul = ul + list;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return ul + "</".concat(listType, ">");
          }
        }, {
          key: "heading",
          value: function heading(content, nodeType) {
            var headingNumber = nodeType.substring(nodeType.length - 1, nodeType.length);
            var headingStart = "<h".concat(headingNumber, ">");

            var _iterator4 = _createForOfIteratorHelper(content.content),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var c = _step4.value;
                headingStart += c.value;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return headingStart + "</h".concat(headingNumber, ">");
          }
        }, {
          key: "paragraph",
          value: function paragraph(content) {
            var hmtlChain = '<p>';

            var _iterator5 = _createForOfIteratorHelper(content.content),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var c = _step5.value;

                if (c.nodeType === 'hyperlink') {
                  hmtlChain += this.hyperLink(c);
                } else {
                  var value = c.value;

                  if (c.marks && c.marks.length !== 0) {
                    var _iterator6 = _createForOfIteratorHelper(c.marks),
                        _step6;

                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var m = _step6.value;

                        if (m.type === 'bold') {
                          value = '<b>' + value + '</b>';
                        }
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }

                  hmtlChain += value;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return hmtlChain + '</p>';
          }
        }, {
          key: "hyperLink",
          value: function hyperLink(content) {
            var a = "<a href='";
            a += "".concat(content.data.uri, "'>");

            var _iterator7 = _createForOfIteratorHelper(content.content),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var c = _step7.value;
                a += c.value;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            return a + '</a>';
          }
        }]);

        return GenericContentfulDomManipulatorService;
      }();

      GenericContentfulDomManipulatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function GenericContentfulDomManipulatorService_Factory() {
          return new GenericContentfulDomManipulatorService();
        },
        token: GenericContentfulDomManipulatorService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "Ss9G":
    /*!*****************************************!*\
      !*** ./src/app/app.module.ngfactory.js ***!
      \*****************************************/

    /*! exports provided: AppModuleNgFactory */

    /***/
    function Ss9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
        return AppModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.module */
      "ZAI4");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../node_modules/@angular/router/router.ngfactory */
      "pMnS");
      /* harmony import */


      var _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/footer/footer.component.ngfactory */
      "6jz6");
      /* harmony import */


      var _pages_impressum_impressum_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/impressum/impressum.component.ngfactory */
      "Ilc8");
      /* harmony import */


      var _pages_datenschutz_datenschutz_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/datenschutz/datenschutz.component.ngfactory */
      "TAMO");
      /* harmony import */


      var _pages_depot_depot_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/depot/depot.component.ngfactory */
      "wDYq");
      /* harmony import */


      var _pages_blog_posts_blog_posts_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/blog-posts/blog-posts.component.ngfactory */
      "geiK");
      /* harmony import */


      var _pages_single_blog_post_single_blog_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/single-blog-post/single-blog-post.component.ngfactory */
      "cshc");
      /* harmony import */


      var _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../node_modules/@angular/material/tooltip/index.ngfactory */
      "ntJQ");
      /* harmony import */


      var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.component.ngfactory */
      "yvrC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/animations/browser */
      "fDlF");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "/q54");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/animations */
      "GS7A");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "9b/N");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "1O3W");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./services/contentful/contentful.service */
      "A8a/");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/impressum/impressum.component */
      "ZUwx");
      /* harmony import */


      var _pages_datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pages/datenschutz/datenschutz.component */
      "//Xr");
      /* harmony import */


      var _pages_depot_depot_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./pages/depot/depot.component */
      "HPKf");
      /* harmony import */


      var _pages_blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./pages/blog-posts/blog-posts.component */
      "uuBI");
      /* harmony import */


      var _pages_single_blog_post_single_blog_post_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pages/single-blog-post/single-blog-post.component */
      "e3ug");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "1z/I");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/cdk/table */
      "GXRp");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/flex-layout/grid */
      "Nhcz");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FooterComponentNgFactory"], _pages_impressum_impressum_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["ImpressumComponentNgFactory"], _pages_datenschutz_datenschutz_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DatenschutzComponentNgFactory"], _pages_depot_depot_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["DepotComponentNgFactory"], _pages_blog_posts_blog_posts_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["BlogPostsComponentNgFactory"], _pages_single_blog_post_single_blog_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["SingleBlogPostComponentNgFactory"], _node_modules_angular_material_tooltip_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["TooltipComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4352, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], "de", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bf"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_w"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
          return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
        }, [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_14__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_16__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_16__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_16__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_16__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p1_1) {
          return [p0_0, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_17__["removeStyles"](p1_0, p1_1)];
        }, [_angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTER_INITIALIZER"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_18__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["Directionality"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayOutsideClickDispatcher"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ɵangular_material_src_cdk_overlay_overlay_a"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["ɵangular_material_src_cdk_overlay_overlay_b"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_25__["ContentfulService"], _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_25__["ContentfulService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
          return [_angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_b"]()];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
          return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_i"](p1_0)];
        }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_16__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () {
          return [[{
            path: "footer",
            component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"]
          }, {
            path: "impressum",
            component: _pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_27__["ImpressumComponent"]
          }, {
            path: "datenschutz",
            component: _pages_datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_28__["DatenschutzComponent"]
          }, {
            path: "depot",
            component: _pages_depot_depot_component__WEBPACK_IMPORTED_MODULE_29__["DepotComponent"]
          }, {
            path: "",
            component: _pages_blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_30__["BlogPostsComponent"],
            pathMatch: "full"
          }, {
            path: "blog-post/:id",
            component: _pages_single_blog_post_single_blog_post_component__WEBPACK_IMPORTED_MODULE_31__["SingleBlogPostComponent"]
          }]];
        }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MATERIAL_SANITY_CHECKS"]], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_38__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_40__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_44__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_44__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_45__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_45__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_17__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_17__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_47__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_48__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_48__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_49__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_49__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_50__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_50__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_17__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]);
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.title = 'waldinvest';
          this.fullFooter = false;
          this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.destroy$ = this.destroy.asObservable();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (e) {
            return console.log(_this.getYPosition(e));
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (window.innerWidth <= 995) {
              this.fullFooter = true;
            }
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            console.log(this.sidenavvvvv.nativeElement.offsetTop);
            this.fullFooter = this.sidenavvvvv.nativeElement.offsetTop !== 300;

            if (window.innerWidth <= 959) {
              if (this.sidenav._animationState === 'open') {
                this.sidenav.toggle();
              }
            } else {
              this.fullFooter = false;
            }
          }
        }, {
          key: "onScroll",
          value: function onScroll(e) {
            console.log(e);
          }
        }, {
          key: "getYPosition",
          value: function getYPosition(e) {
            return e.target.scrollTop;
          }
        }, {
          key: "next",
          value: function next() {}
        }]);

        return AppComponent;
      }();
      /***/

    },

    /***/
    "TAMO":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/datenschutz/datenschutz.component.ngfactory.js ***!
      \**********************************************************************/

    /*! exports provided: RenderType_DatenschutzComponent, View_DatenschutzComponent_0, View_DatenschutzComponent_Host_0, DatenschutzComponentNgFactory */

    /***/
    function TAMO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DatenschutzComponent", function () {
        return RenderType_DatenschutzComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DatenschutzComponent_0", function () {
        return View_DatenschutzComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DatenschutzComponent_Host_0", function () {
        return View_DatenschutzComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatenschutzComponentNgFactory", function () {
        return DatenschutzComponentNgFactory;
      });
      /* harmony import */


      var _datenschutz_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./datenschutz.component.scss.shim.ngstyle */
      "gcHC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _directives_contentful_richmedia_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/contentful-richmedia.directive */
      "4SNt");
      /* harmony import */


      var _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/contentful/contentful.service */
      "A8a/");
      /* harmony import */


      var _services_contentful_generic_contentful_dom_manipulator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/contentful/generic-contentful-dom-manipulator.service */
      "Qgv5");
      /* harmony import */


      var _datenschutz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./datenschutz.component */
      "//Xr");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DatenschutzComponent = [_datenschutz_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DatenschutzComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DatenschutzComponent,
        data: {}
      });

      function View_DatenschutzComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["appContentfulRichmedia", ""], ["class", "main-box"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _directives_contentful_richmedia_directive__WEBPACK_IMPORTED_MODULE_2__["ContentfulRichmediaDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"], _services_contentful_generic_contentful_dom_manipulator_service__WEBPACK_IMPORTED_MODULE_4__["GenericContentfulDomManipulatorService"]], {
          type: [0, "type"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "datenschutz";

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_DatenschutzComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-datenschutz", [], null, null, null, View_DatenschutzComponent_0, RenderType_DatenschutzComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _datenschutz_component__WEBPACK_IMPORTED_MODULE_5__["DatenschutzComponent"], [_services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"], _services_contentful_generic_contentful_dom_manipulator_service__WEBPACK_IMPORTED_MODULE_4__["GenericContentfulDomManipulatorService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var DatenschutzComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-datenschutz", _datenschutz_component__WEBPACK_IMPORTED_MODULE_5__["DatenschutzComponent"], View_DatenschutzComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "VC20":
    /*!******************************************************************!*\
      !*** ./src/app/pages/depot/depot.component.scss.shim.ngstyle.js ***!
      \******************************************************************/

    /*! exports provided: styles */

    /***/
    function VC20(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBvdC5jb21wb25lbnQuc2NzcyJ9 */"];
      /***/
    },

    /***/
    "Xqnl":
    /*!*****************************************************************!*\
      !*** ./src/app/components/header/header.component.ngfactory.js ***!
      \*****************************************************************/

    /*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */

    /***/
    function Xqnl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function () {
        return RenderType_HeaderComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function () {
        return View_HeaderComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function () {
        return View_HeaderComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function () {
        return HeaderComponentNgFactory;
      });
      /* harmony import */


      var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header.component.scss.shim.ngstyle */
      "byUm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header.component */
      "2MiI");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_HeaderComponent,
        data: {}
      });

      function View_HeaderComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "header"]], null, null, null, null, null))], null, null);
      }

      function View_HeaderComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/locales/de */
      "VLs4");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/locales/extra/de */
      "qnrZ");
      /* harmony import */


      var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2__);

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1___default.a, _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };
      /***/

    },

    /***/
    "ZUwx":
    /*!********************************************************!*\
      !*** ./src/app/pages/impressum/impressum.component.ts ***!
      \********************************************************/

    /*! exports provided: ImpressumComponent */

    /***/
    function ZUwx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function () {
        return ImpressumComponent;
      });

      var ImpressumComponent = /*#__PURE__*/function () {
        function ImpressumComponent() {
          _classCallCheck(this, ImpressumComponent);

          this.test = '<h2>google</h2>';
        }

        _createClass(ImpressumComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImpressumComponent;
      }();
      /***/

    },

    /***/
    "byUm":
    /*!*************************************************************************!*\
      !*** ./src/app/components/header/header.component.scss.shim.ngstyle.js ***!
      \*************************************************************************/

    /*! exports provided: styles */

    /***/
    function byUm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".header[_ngcontent-%COMP%] {\n  height: 200px;\n  border-bottom: 4px solid #d2d2d2;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(\"https://image.freepik.com/free-vector/forex-trading-background_52683-41605.jpg\");\n  border-bottom: 4px solid #724baf;\n  color: #bf96ff;\n  font-family: arial-black;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDBHQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1R0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNkMmQyZDI7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDMwcHggNjBweCAtMTJweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAxOHB4IDM2cHggLTE4cHggaW5zZXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2ZvcmV4LXRyYWRpbmctYmFja2dyb3VuZF81MjY4My00MTYwNS5qcGdcIik7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNzI0YmFmO1xuICBjb2xvcjogI2JmOTZmZjtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLWJsYWNrO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufSJdfQ== */"];
      /***/
    },

    /***/
    "cg/4":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/impressum/impressum.component.scss.shim.ngstyle.js ***!
      \**************************************************************************/

    /*! exports provided: styles */

    /***/
    function cg4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXByZXNzdW0uY29tcG9uZW50LnNjc3MifQ== */"];
      /***/
    },

    /***/
    "cshc":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/single-blog-post/single-blog-post.component.ngfactory.js ***!
      \********************************************************************************/

    /*! exports provided: RenderType_SingleBlogPostComponent, View_SingleBlogPostComponent_0, View_SingleBlogPostComponent_Host_0, SingleBlogPostComponentNgFactory */

    /***/
    function cshc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SingleBlogPostComponent", function () {
        return RenderType_SingleBlogPostComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleBlogPostComponent_0", function () {
        return View_SingleBlogPostComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SingleBlogPostComponent_Host_0", function () {
        return View_SingleBlogPostComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleBlogPostComponentNgFactory", function () {
        return SingleBlogPostComponentNgFactory;
      });
      /* harmony import */


      var _single_blog_post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./single-blog-post.component.scss.shim.ngstyle */
      "qDO/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/icon/index.ngfactory */
      "XE/z");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _single_blog_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./single-blog-post.component */
      "e3ug");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/contentful/contentful.service */
      "A8a/");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SingleBlogPostComponent = [_single_blog_post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SingleBlogPostComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SingleBlogPostComponent,
        data: {}
      });

      function View_SingleBlogPostComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "a", [["href", "/"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Startseite"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "mat-icon", [["class", "maticon mat-icon notranslate"], ["role", "img"]], [[1, "data-mat-icon-type", 0], [1, "data-mat-icon-name", 0], [1, "data-mat-icon-namespace", 0], [2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 8634368, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], [8, null], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MAT_ICON_LOCATION"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["arrow_forward"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Blog post"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 9, "div", [["class", "main-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "h6", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "img", [["style", "width: 100%"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, [" ", " "]))], function (_ck, _v) {
          _ck(_v, 5, 0);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._usingFontIcon() ? "font" : "svg";

          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._svgName || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fontIcon;

          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._svgNamespace || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).fontSet;

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline;

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "warn";

          _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);

          var currVal_5 = _co.blogPost == null ? null : _co.blogPost.fields == null ? null : _co.blogPost.fields.title;

          _ck(_v, 10, 0, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.blogPost == null ? null : _co.blogPost.fields == null ? null : _co.blogPost.fields.publishDate, "fullDate"));

          _ck(_v, 12, 0, currVal_6);

          var currVal_7 = _co.blogPost == null ? null : _co.blogPost.fields == null ? null : _co.blogPost.fields.heroImage == null ? null : _co.blogPost.fields.heroImage.fields == null ? null : _co.blogPost.fields.heroImage.fields.file == null ? null : _co.blogPost.fields.heroImage.fields.file.url;

          _ck(_v, 15, 0, currVal_7);

          var currVal_8 = _co.blogPost == null ? null : _co.blogPost.fields == null ? null : _co.blogPost.fields.body;

          _ck(_v, 17, 0, currVal_8);
        });
      }

      function View_SingleBlogPostComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-single-blog-post", [], null, null, null, View_SingleBlogPostComponent_0, RenderType_SingleBlogPostComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _single_blog_post_component__WEBPACK_IMPORTED_MODULE_5__["SingleBlogPostComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_7__["ContentfulService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var SingleBlogPostComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-single-blog-post", _single_blog_post_component__WEBPACK_IMPORTED_MODULE_5__["SingleBlogPostComponent"], View_SingleBlogPostComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "e3ug":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/single-blog-post/single-blog-post.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SingleBlogPostComponent */

    /***/
    function e3ug(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SingleBlogPostComponent", function () {
        return SingleBlogPostComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var SingleBlogPostComponent = /*#__PURE__*/function () {
        function SingleBlogPostComponent(route, contentfulService) {
          _classCallCheck(this, SingleBlogPostComponent);

          this.route = route;
          this.contentfulService = contentfulService;
        }

        _createClass(SingleBlogPostComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.params.subscribe(function (params) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var id;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        id = params.id; // (+) converts string 'id' to a number

                        _context4.next = 3;
                        return this.contentfulService.getSingleBlogPost(id);

                      case 3:
                        this.blogPost = _context4.sent;
                        console.log("fsdfsdfsfsf", this.blogPost);

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }]);

        return SingleBlogPostComponent;
      }();
      /***/

    },

    /***/
    "gcHC":
    /*!******************************************************************************!*\
      !*** ./src/app/pages/datenschutz/datenschutz.component.scss.shim.ngstyle.js ***!
      \******************************************************************************/

    /*! exports provided: styles */

    /***/
    function gcHC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".two[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGVuc2NodXR6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQUNGIiwiZmlsZSI6ImRhdGVuc2NodXR6LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR3byB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"];
      /***/
    },

    /***/
    "geiK":
    /*!********************************************************************!*\
      !*** ./src/app/pages/blog-posts/blog-posts.component.ngfactory.js ***!
      \********************************************************************/

    /*! exports provided: RenderType_BlogPostsComponent, View_BlogPostsComponent_0, View_BlogPostsComponent_Host_0, BlogPostsComponentNgFactory */

    /***/
    function geiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_BlogPostsComponent", function () {
        return RenderType_BlogPostsComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BlogPostsComponent_0", function () {
        return View_BlogPostsComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_BlogPostsComponent_Host_0", function () {
        return View_BlogPostsComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogPostsComponentNgFactory", function () {
        return BlogPostsComponentNgFactory;
      });
      /* harmony import */


      var _blog_posts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blog-posts.component.scss.shim.ngstyle */
      "EWkg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _blog_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./blog-posts.component */
      "uuBI");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/contentful/contentful.service */
      "A8a/");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_BlogPostsComponent = [_blog_posts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_BlogPostsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_BlogPostsComponent,
        data: {}
      });

      function View_BlogPostsComponent_1(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "post-area"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "img", [["class", "img"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "div", [["style", "display: flex; justify-content: flex-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "button", [["class", "btn-more mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.route(_v.context.$implicit == null ? null : _v.context.$implicit.sys == null ? null : _v.context.$implicit.sys.id) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
          color: [0, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Weiterlesen >"]))], function (_ck, _v) {
          var currVal_7 = "primary";

          _ck(_v, 12, 0, currVal_7);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit == null ? null : _v.context.$implicit.fields == null ? null : _v.context.$implicit.fields.publishDate, "fullDate"));

          _ck(_v, 2, 0, currVal_0);

          var currVal_1 = _v.context.$implicit == null ? null : _v.context.$implicit.fields == null ? null : _v.context.$implicit.fields.title;

          _ck(_v, 5, 0, currVal_1);

          var currVal_2 = _v.context.$implicit == null ? null : _v.context.$implicit.fields == null ? null : _v.context.$implicit.fields.heroImage == null ? null : _v.context.$implicit.fields.heroImage.fields == null ? null : _v.context.$implicit.fields.heroImage.fields.file == null ? null : _v.context.$implicit.fields.heroImage.fields.file.url;

          _ck(_v, 7, 0, currVal_2);

          var currVal_3 = _v.context.$implicit == null ? null : _v.context.$implicit.fields == null ? null : _v.context.$implicit.fields.description;

          _ck(_v, 9, 0, currVal_3);

          var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled || null;
          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)._animationMode === "NoopAnimations";

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled;

          _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6);
        });
      }

      function View_BlogPostsComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          paginator: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h2", [["style", "color: #712caf;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Blog"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BlogPostsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
          ngForOf: [0, "ngForOf"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "pagination"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "button", [["class", "btn-navigation mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.prev() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
          disabled: [0, "disabled"],
          color: [1, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["prev"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "button", [["class", "btn-navigation mat-focus-indicator"], ["color", "primary"], ["mat-raised-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("click" === en) {
            var pd_0 = _co.next() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
          disabled: [0, "disabled"],
          color: [1, "color"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["next"]))], function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.posts;

          _ck(_v, 5, 0, currVal_0);

          var currVal_4 = _co.disablePrev;
          var currVal_5 = "primary";

          _ck(_v, 8, 0, currVal_4, currVal_5);

          var currVal_9 = _co.disableNext;
          var currVal_10 = "primary";

          _ck(_v, 11, 0, currVal_9, currVal_10);
        }, function (_ck, _v) {
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled || null;
          var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations";

          var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled;

          _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null;
          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations";

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled;

          _ck(_v, 10, 0, currVal_6, currVal_7, currVal_8);
        });
      }

      function View_BlogPostsComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-page", [], null, null, null, View_BlogPostsComponent_0, RenderType_BlogPostsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _blog_posts_component__WEBPACK_IMPORTED_MODULE_7__["BlogPostsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_9__["ContentfulService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var BlogPostsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-page", _blog_posts_component__WEBPACK_IMPORTED_MODULE_7__["BlogPostsComponent"], View_BlogPostsComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "oSj1":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/side-section/side-section.component.ngfactory.js ***!
      \*****************************************************************************/

    /*! exports provided: RenderType_SideSectionComponent, View_SideSectionComponent_0, View_SideSectionComponent_Host_0, SideSectionComponentNgFactory */

    /***/
    function oSj1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_SideSectionComponent", function () {
        return RenderType_SideSectionComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SideSectionComponent_0", function () {
        return View_SideSectionComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_SideSectionComponent_Host_0", function () {
        return View_SideSectionComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideSectionComponentNgFactory", function () {
        return SideSectionComponentNgFactory;
      });
      /* harmony import */


      var _side_section_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./side-section.component.scss.shim.ngstyle */
      "84yk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _side_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./side-section.component */
      "EVue");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_SideSectionComponent = [_side_section_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_SideSectionComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_SideSectionComponent,
        data: {}
      });

      function View_SideSectionComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["class", "instagram"], ["src", "assets/insta.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "ads"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Buchvorstellung"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["src", "assets/buch.jpg"], ["style", "width: 60%;"]], null, null, null, null, null))], null, null);
      }

      function View_SideSectionComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-side-section", [], null, null, null, View_SideSectionComponent_0, RenderType_SideSectionComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _side_section_component__WEBPACK_IMPORTED_MODULE_2__["SideSectionComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var SideSectionComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-side-section", _side_section_component__WEBPACK_IMPORTED_MODULE_2__["SideSectionComponent"], View_SideSectionComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "qDO/":
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/single-blog-post/single-blog-post.component.scss.shim.ngstyle.js ***!
      \****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function qDO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".single-page-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  box-shadow: 0px 0px 13px #b9b7b7, 0px 0px 13px #cac5c5;\n  margin-bottom: 50px;\n}\n\n.image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #704ea5;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.maticon[_ngcontent-%COMP%] {\n  transform: translateY(5px);\n  font-size: 16pt;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpbmdsZS1ibG9nLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic2luZ2xlLWJsb2ctcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtcGFnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAjYjliN2I3LCAwcHggMHB4IDEzcHggI2NhYzVjNTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmEge1xuICBjb2xvcjogIzcwNGVhNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdGljb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgZm9udC1zaXplOiAxNnB0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufSJdfQ== */"];
      /***/
    },

    /***/
    "uuBI":
    /*!**********************************************************!*\
      !*** ./src/app/pages/blog-posts/blog-posts.component.ts ***!
      \**********************************************************/

    /*! exports provided: BlogPostsComponent */

    /***/
    function uuBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogPostsComponent", function () {
        return BlogPostsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");

      var ELEMENT_DATA = [{
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H'
      }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He'
      }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li'
      }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be'
      }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B'
      }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C'
      }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N'
      }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O'
      }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F'
      }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne'
      }];

      var BlogPostsComponent = /*#__PURE__*/function () {
        function BlogPostsComponent(router, contentfulService) {
          _classCallCheck(this, BlogPostsComponent);

          this.router = router;
          this.contentfulService = contentfulService;
          this.displayedColumns = ['position'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
          this.posts = [];
          this.image = null;
          this.currentPageIndex = 0;
          this.disableNext = false;
          this.disablePrev = true;
        }

        _createClass(BlogPostsComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.dataSource.paginator = this.paginator;
          } // fetch data on init

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.contentfulService.getContent('blogPost');

                    case 2:
                      this.posts = _context5.sent;

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "route",
          value: function route(id) {
            this.router.navigate(['blog-post/', id]);
          }
        }, {
          key: "next",
          value: function next() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var retrievedPosts;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.currentPageIndex = this.currentPageIndex + 2;
                      this.disablePrev = false;
                      _context6.next = 4;
                      return this.contentfulService.getContent('blogPost', this.currentPageIndex);

                    case 4:
                      retrievedPosts = _context6.sent;

                      if (retrievedPosts.length === 0) {
                        this.disableNext = true;
                      } else {
                        this.posts = retrievedPosts;
                      }

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "prev",
          value: function prev() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.currentPageIndex = this.currentPageIndex - 2;
                      this.disableNext = false;

                      if (!(this.currentPageIndex >= 0)) {
                        _context7.next = 6;
                        break;
                      }

                      _context7.next = 5;
                      return this.contentfulService.getContent('blogPost', this.currentPageIndex);

                    case 5:
                      this.posts = _context7.sent;

                    case 6:
                      if (this.currentPageIndex === 0) {
                        this.disablePrev = true;
                      }

                    case 7:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return BlogPostsComponent;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _pages_blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/blog-posts/blog-posts.component */
      "uuBI");
      /* harmony import */


      var _pages_single_blog_post_single_blog_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/single-blog-post/single-blog-post.component */
      "e3ug");
      /* harmony import */


      var _pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/impressum/impressum.component */
      "ZUwx");
      /* harmony import */


      var _pages_datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/datenschutz/datenschutz.component */
      "//Xr");
      /* harmony import */


      var _pages_depot_depot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/depot/depot.component */
      "HPKf");

      var routes = [{
        path: 'footer',
        component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]
      }, {
        path: 'impressum',
        component: _pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_3__["ImpressumComponent"]
      }, {
        path: 'datenschutz',
        component: _pages_datenschutz_datenschutz_component__WEBPACK_IMPORTED_MODULE_4__["DatenschutzComponent"]
      }, {
        path: 'depot',
        component: _pages_depot_depot_component__WEBPACK_IMPORTED_MODULE_5__["DepotComponent"]
      }, {
        path: '',
        component: _pages_blog_posts_blog_posts_component__WEBPACK_IMPORTED_MODULE_1__["BlogPostsComponent"],
        pathMatch: 'full'
      }, {
        path: 'blog-post/:id',
        component: _pages_single_blog_post_single_blog_post_component__WEBPACK_IMPORTED_MODULE_2__["SingleBlogPostComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };
      /***/

    },

    /***/
    "wDYq":
    /*!**********************************************************!*\
      !*** ./src/app/pages/depot/depot.component.ngfactory.js ***!
      \**********************************************************/

    /*! exports provided: RenderType_DepotComponent, View_DepotComponent_0, View_DepotComponent_Host_0, DepotComponentNgFactory */

    /***/
    function wDYq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_DepotComponent", function () {
        return RenderType_DepotComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DepotComponent_0", function () {
        return View_DepotComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_DepotComponent_Host_0", function () {
        return View_DepotComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DepotComponentNgFactory", function () {
        return DepotComponentNgFactory;
      });
      /* harmony import */


      var _depot_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./depot.component.scss.shim.ngstyle */
      "VC20");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _directives_contentful_richmedia_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/contentful-richmedia.directive */
      "4SNt");
      /* harmony import */


      var _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/contentful/contentful.service */
      "A8a/");
      /* harmony import */


      var _services_contentful_generic_contentful_dom_manipulator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/contentful/generic-contentful-dom-manipulator.service */
      "Qgv5");
      /* harmony import */


      var _depot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./depot.component */
      "HPKf");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_DepotComponent = [_depot_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_DepotComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_DepotComponent,
        data: {}
      });

      function View_DepotComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["appContentfulRichmedia", ""], ["class", "main-box"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 81920, null, 0, _directives_contentful_richmedia_directive__WEBPACK_IMPORTED_MODULE_2__["ContentfulRichmediaDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_contentful_contentful_service__WEBPACK_IMPORTED_MODULE_3__["ContentfulService"], _services_contentful_generic_contentful_dom_manipulator_service__WEBPACK_IMPORTED_MODULE_4__["GenericContentfulDomManipulatorService"]], {
          type: [0, "type"]
        }, null)], function (_ck, _v) {
          var currVal_0 = "depot";

          _ck(_v, 1, 0, currVal_0);
        }, null);
      }

      function View_DepotComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-depot", [], null, null, null, View_DepotComponent_0, RenderType_DepotComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _depot_component__WEBPACK_IMPORTED_MODULE_5__["DepotComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var DepotComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-depot", _depot_component__WEBPACK_IMPORTED_MODULE_5__["DepotComponent"], View_DepotComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "xa35":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/middle-content/middle-content.component.scss.shim.ngstyle.js ***!
      \*****************************************************************************************/

    /*! exports provided: styles */

    /***/
    function xa35(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = [".main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 300px;\n  margin-top: 50px;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.first[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  margin-right: 50px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  border-top: 4px solid #1520da;\n  padding: 10px;\n  height: 315px;\n  box-shadow: 0px 0px 13px #b9b7b7, 0px 0px 13px #cac5c5;\n}\n\n.second[_ngcontent-%COMP%] {\n  background: white;\n  height: 315px;\n  border-top: 4px solid #1520da;\n  box-shadow: 0px 0px 13px #b9b7b7, 0px 0px 13px #cac5c5;\n  position: relative;\n  padding: 10px;\n}\n\n.jahr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.stockPortfolio[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 10px;\n  height: 80%;\n  border-radius: 10px;\n  box-shadow: inset 0 0 10px #afafaf;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #a369ff;\n  padding: 5px;\n  color: white;\n  top: -42px;\n  left: 0px;\n  border: 3px solid #724bb0;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #a369ff;\n  padding: 5px;\n  color: white;\n  top: -42px;\n  right: 0px;\n  border: 3px solid #724bb0;\n}\n\n.q[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\n@media only screen and (max-width: 992px) {\n  .q[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n\n  .second[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n\n.content-p2p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 250px;\n}\n\n.pic[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.dividendnEinnahmen[_ngcontent-%COMP%] {\n  background: #724baf;\n  color: white;\n  width: 160px;\n  position: absolute;\n  left: -10px;\n  top: 50px;\n  padding: 2px;\n}\n\n.dividendnEinnahmen-right[_ngcontent-%COMP%] {\n  background: #724baf;\n  color: white;\n  width: 160px;\n  position: absolute;\n  right: -10px;\n  top: 50px;\n  padding: 2px;\n}\n\n.dreieck[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  -webkit-transform: rotate(360deg);\n  border-style: solid;\n  border-width: 0 0 10px 10px;\n  border-color: transparent transparent #432c69 transparent;\n  position: absolute;\n  left: -10px;\n  top: 40px;\n}\n\n.dreieckRechts[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  -webkit-transform: rotate(360deg);\n  border-style: solid;\n  border-width: 10px 0 0 10px;\n  border-color: transparent transparent transparent #432c69;\n  position: absolute;\n  right: -10px;\n  top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21pZGRsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBSEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBR0Esa0NBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0FBUEY7O0FBVUE7RUFDRTtJQUNFLGFBQUE7RUFQRjs7RUFVQTtJQUNFLGdCQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBUkY7O0FBWUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFURjs7QUFZQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUdBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFYRjs7QUFjQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFHQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBYkYiLCJmaWxlIjoibWlkZGxlLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmZpcnN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMTUyMGRhO1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDMxNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEzcHggI2I5YjdiNywgMHB4IDBweCAxM3B4ICNjYWM1YzU7XG59XG5cbi5zZWNvbmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMTVweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxNTIwZGE7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTNweCAjYjliN2I3LCAwcHggMHB4IDEzcHggI2NhYzVjNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uamFociB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vbmF0IHtcblxufVxuXG4uc3RvY2tQb3J0Zm9saW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmRlcG90aW5mbyB7XG5cbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3gtc2hhZG93OiAgICBpbnNldCAwIDAgMTBweCAjYWZhZmFmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4ICNhZmFmYWY7XG4gIGJveC1zaGFkb3c6ICAgICAgICAgaW5zZXQgMCAwIDEwcHggI2FmYWZhZjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2EzNjlmZjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogLTQycHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzcyNGJiMDtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2EzNjlmZjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogLTQycHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM3MjRiYjA7XG59XG5cbi5xIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnEge1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cblxuICAuc2Vjb25kIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG5cbi5jb250ZW50LXAycCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5waWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4uZGl2aWRlbmRuRWlubmFobWVuIHtcbiAgYmFja2dyb3VuZDogIzcyNGJhZjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogNTBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uZGl2aWRlbmRuRWlubmFobWVuLXJpZ2h0IHtcbiAgYmFja2dyb3VuZDogIzcyNGJhZjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMHB4O1xuICB0b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmRyZWllY2sge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZShcbiAgICAgICAgICAgICAgICAgIDM2MGRlZ1xuICApO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzQzMmM2OSB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiA0MHB4O1xufVxuXG4uZHJlaWVja1JlY2h0cyB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKFxuICAgICAgICAgICAgICAgICAgMzYwZGVnXG4gICk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMTBweCAwIDAgMTBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNDMyYzY5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgdG9wOiA0MHB4O1xufSJdfQ== */"];
      /***/
    },

    /***/
    "yvrC":
    /*!********************************************!*\
      !*** ./src/app/app.component.ngfactory.js ***!
      \********************************************/

    /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

    /***/
    function yvrC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
        return RenderType_AppComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
        return View_AppComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
        return View_AppComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
        return AppComponentNgFactory;
      });
      /* harmony import */


      var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component.scss.shim.ngstyle */
      "OvOj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../node_modules/@angular/material/toolbar/index.ngfactory */
      "2mes");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "SCoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/core */
      "/q54");
      /* harmony import */


      var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../node_modules/@angular/material/button/index.ngfactory */
      "1Xc+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "YEUz");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../node_modules/@angular/material/icon/index.ngfactory */
      "XE/z");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../node_modules/@angular/material/sidenav/index.ngfactory */
      "tVCp");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/header/header.component.ngfactory */
      "Xqnl");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_middle_content_middle_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/middle-content/middle-content.component.ngfactory */
      "E2lt");
      /* harmony import */


      var _components_middle_content_middle_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/middle-content/middle-content.component */
      "LSTk");
      /* harmony import */


      var _components_side_section_side_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/side-section/side-section.component.ngfactory */
      "oSj1");
      /* harmony import */


      var _components_side_section_side_section_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/side-section/side-section.component */
      "EVue");
      /* harmony import */


      var _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/footer/footer.component.ngfactory */
      "6jz6");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AppComponent,
        data: {}
      });

      function View_AppComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
          sidenav: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
          sidenavvvvv: 0
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 75, "div", [["style", "height: 100vh;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 27, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], {
          color: [0, "color"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
          _toolbarRows: 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "a", [["class", "title"], ["href", "/"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Passive Income Flow"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 6, "div", [["fxHide.gt-sm", "true"], ["fxShow", "true"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"]], {
          fxShow: [0, "fxShow"],
          "fxHide.gt-sm": [1, "fxHide.gt-sm"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "button", [["class", "mat-focus-indicator"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).toggle() !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[1, "data-mat-icon-type", 0], [1, "data-mat-icon-name", 0], [1, "data-mat-icon-namespace", 0], [2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 8634368, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconRegistry"], [8, null], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MAT_ICON_LOCATION"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 15, "div", [["fxHide.lt-md", "true"], ["fxShow", "true"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4866048, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["ShowHideStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["LAYOUT_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["SERVER_TOKEN"]], {
          fxShow: [0, "fxShow"],
          "fxHide.lt-md": [1, "fxHide.lt-md"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "a", [["class", "mat-focus-indicator"], ["mat-button", ""], ["routerLink", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._haltDisabledEvents($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Blog"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "a", [["class", "mat-focus-indicator"], ["mat-button", ""], ["routerLink", "/depot"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._haltDisabledEvents($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Depot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 2, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._haltDisabledEvents($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["B\xFCcher"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._haltDisabledEvents($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 46, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"], ["fxFlexFill", ""]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
          _allDrawers: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
          _content: 0
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 17, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["fxLayout", "column"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
          var ad = true;

          if ("component:@transform.start" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationStartListener($event) !== false;
            ad = pd_0 && ad;
          }

          if ("component:@transform.done" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationDoneListener($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 3325952, [[4, 4], [1, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
          fxLayout: [0, "fxLayout"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 14, "div", [["fxLayout", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], {
          fxLayout: [0, "fxLayout"]
        }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 2, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._haltDisabledEvents($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Blog"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 3, "a", [["class", "mat-focus-indicator"], ["mat-button", ""], ["routerLink", "/depot"]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey) !== false;
            ad = pd_0 && ad;
          }

          if ("click" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._haltDisabledEvents($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], {
          routerLink: [0, "routerLink"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Depot"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._haltDisabledEvents($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["B\xFCcher"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "a", [["class", "mat-focus-indicator"], ["href", "#"], ["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [2, "mat-button-disabled", null]], [[null, "click"]], function (_v, en, $event) {
          var ad = true;

          if ("click" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._haltDisabledEvents($event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 4374528, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Tools"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, 1, 22, "mat-sidenav-content", [["class", "side-nav-content mat-drawer-content mat-sidenav-content"], ["fxFlexFill", ""]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 1294336, [[5, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, 0, 19, "div", [["class", "main-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 16, "div", [["class", "header-plus-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 1, "app-header", [], null, null, null, _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_HeaderComponent_0"], _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 114688, null, 0, _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 13, "div", [["class", "container content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 12, "div", [["class", "row full-width"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 4, "div", [["class", "col-lg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "app-middle-content", [], null, null, null, _components_middle_content_middle_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_MiddleContentComponent_0"], _components_middle_content_middle_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_MiddleContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 114688, null, 0, _components_middle_content_middle_content_component__WEBPACK_IMPORTED_MODULE_23__["MiddleContentComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, [[2, 0], ["sidenavvvvv", 1]], null, 6, "div", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](71, {
          "full-footer": 0,
          "small-footer": 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_7__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]]], {
          ngClass: [0, "ngClass"]
        }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](73, {
          "full-footer": 0,
          "small-footer": 1
        }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 1, "app-side-section", [], null, null, null, _components_side_section_side_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_SideSectionComponent_0"], _components_side_section_side_section_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_SideSectionComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 114688, null, 0, _components_side_section_side_section_component__WEBPACK_IMPORTED_MODULE_25__["SideSectionComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 1, "app-footer", [["class", "footer"]], null, null, null, _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_FooterComponent_0"], _components_footer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_FooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 114688, null, 0, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], [], null, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_2 = "primary";

          _ck(_v, 4, 0, currVal_2);

          var currVal_3 = "true";
          var currVal_4 = "true";

          _ck(_v, 9, 0, currVal_3, currVal_4);

          _ck(_v, 13, 0);

          var currVal_13 = "true";
          var currVal_14 = "true";

          _ck(_v, 16, 0, currVal_13, currVal_14);

          var currVal_22 = "";

          _ck(_v, 18, 0, currVal_22);

          var currVal_30 = "/depot";

          _ck(_v, 22, 0, currVal_30);

          _ck(_v, 32, 0);

          var currVal_52 = "column";

          _ck(_v, 39, 0, currVal_52);

          var currVal_53 = "column";

          _ck(_v, 41, 0, currVal_53);

          var currVal_66 = "/depot";

          _ck(_v, 46, 0, currVal_66);

          _ck(_v, 56, 0);

          _ck(_v, 61, 0);

          _ck(_v, 66, 0);

          _ck(_v, 68, 0);

          var currVal_79 = _ck(_v, 71, 0, _co.fullFooter, !_co.fullFooter);

          _ck(_v, 70, 0, currVal_79);

          var currVal_80 = _ck(_v, 73, 0, _co.fullFooter, !_co.fullFooter);

          _ck(_v, 72, 0, currVal_80);

          _ck(_v, 75, 0);

          _ck(_v, 77, 0);
        }, function (_ck, _v) {
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._toolbarRows.length > 0;
          var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._toolbarRows.length === 0;

          _ck(_v, 3, 0, currVal_0, currVal_1);

          var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled || null;
          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._animationMode === "NoopAnimations";

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).disabled;

          _ck(_v, 10, 0, currVal_5, currVal_6, currVal_7);

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._usingFontIcon() ? "font" : "svg";

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._svgName || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).fontIcon;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._svgNamespace || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).fontSet;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).inline;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).color !== "warn";

          _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);

          var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).target;

          var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).href;

          var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).tabIndex || 0;
          var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled || null;

          var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled.toString();

          var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._animationMode === "NoopAnimations";

          var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).disabled;

          _ck(_v, 17, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21);

          var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).target;

          var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).href;

          var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).tabIndex || 0;
          var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled || null;

          var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled.toString();

          var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._animationMode === "NoopAnimations";

          var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).disabled;

          _ck(_v, 21, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

          var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).tabIndex || 0;
          var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled || null;

          var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled.toString();

          var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._animationMode === "NoopAnimations";

          var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled;

          _ck(_v, 25, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35);

          var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).tabIndex || 0;
          var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled || null;

          var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled.toString();

          var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._animationMode === "NoopAnimations";

          var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled;

          _ck(_v, 28, 0, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40);

          var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32)._backdropOverride;

          _ck(_v, 31, 0, currVal_41);

          var currVal_42 = null;
          var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).position === "end";
          var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).mode === "over";
          var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).mode === "push";
          var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).mode === "side";

          var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).opened;

          var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).fixedInViewport;

          var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).fixedTopGap : null;
          var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).fixedBottomGap : null;

          var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._animationState;

          _ck(_v, 37, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51);

          var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).tabIndex || 0;
          var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).disabled || null;

          var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).disabled.toString();

          var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._animationMode === "NoopAnimations";

          var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).disabled;

          _ck(_v, 42, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58);

          var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).target;

          var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).href;

          var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).tabIndex || 0;
          var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).disabled || null;

          var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).disabled.toString();

          var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47)._animationMode === "NoopAnimations";

          var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).disabled;

          _ck(_v, 45, 0, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65);

          var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).tabIndex || 0;
          var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).disabled || null;

          var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).disabled.toString();

          var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._animationMode === "NoopAnimations";

          var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).disabled;

          _ck(_v, 49, 0, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71);

          var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabled ? -1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).tabIndex || 0;
          var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabled || null;

          var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabled.toString();

          var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53)._animationMode === "NoopAnimations";

          var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).disabled;

          _ck(_v, 52, 0, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76);

          var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._container._contentMargins.left;

          var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56)._container._contentMargins.right;

          _ck(_v, 55, 0, currVal_77, currVal_78);
        });
      }

      function View_AppComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, [["window", "resize"], ["window", "scroll"]], function (_v, en, $event) {
          var ad = true;

          if ("window:resize" === en) {
            var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false;
            ad = pd_0 && ad;
          }

          if ("window:scroll" === en) {
            var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onScroll($event) !== false;
            ad = pd_1 && ad;
          }

          return ad;
        }, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"], [], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_28__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module.ngfactory */
      "Ss9G");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map