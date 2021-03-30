(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/deekshabilochi/projects/practice/eventWeb/src/main.ts */
      "zUnb");
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
        apiURL: 'http://localhost:3000/api/v1/'
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
    "Lquv":
    /*!*************************************************************!*\
      !*** ./src/app/components/dashboard/dashboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Lquv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-calendar */
      "kRoH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @services/event.service */
      "fTLw");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @services/auth.service */
      "lGQG");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../invitation/invitation.component */
      "xr8A");

      var _c0 = ["modalContent"];

      function DashboardComponent_mwl_calendar_month_view_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mwl-calendar-month-view", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dayClicked", function DashboardComponent_mwl_calendar_month_view_31_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.dayClicked($event.day);
          })("eventClicked", function DashboardComponent_mwl_calendar_month_view_31_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function DashboardComponent_mwl_calendar_month_view_31_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("viewDate", ctx_r1.viewDate)("events", ctx_r1.events)("refresh", ctx_r1.refresh)("activeDayIsOpen", ctx_r1.activeDayIsOpen);
        }
      }

      function DashboardComponent_mwl_calendar_week_view_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mwl-calendar-week-view", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("eventClicked", function DashboardComponent_mwl_calendar_week_view_32_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function DashboardComponent_mwl_calendar_week_view_32_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("viewDate", ctx_r2.viewDate)("events", ctx_r2.events)("refresh", ctx_r2.refresh);
        }
      }

      function DashboardComponent_mwl_calendar_day_view_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mwl-calendar-day-view", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("eventClicked", function DashboardComponent_mwl_calendar_day_view_33_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.handleEvent("Clicked", $event.event);
          })("eventTimesChanged", function DashboardComponent_mwl_calendar_day_view_33_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.eventTimesChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("viewDate", ctx_r3.viewDate)("events", ctx_r3.events)("refresh", ctx_r3.refresh);
        }
      }

      function DashboardComponent_app_invitation_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-invitation");
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(eventService, authService, modal) {
          _classCallCheck(this, DashboardComponent);

          this.eventService = eventService;
          this.authService = authService;
          this.modal = modal;
          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
          this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
          this.viewDate = new Date();
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.events = [];
          this.activeDayIsOpen = true;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserEvents();
            this.getUserInvitations();
          }
        }, {
          key: "dayClicked",
          value: function dayClicked(_ref) {
            var date = _ref.date,
                events = _ref.events;

            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"])(date, this.viewDate)) {
              if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
                this.activeDayIsOpen = false;
              } else {
                this.activeDayIsOpen = true;
              }

              this.viewDate = date;
            }
          }
        }, {
          key: "eventTimesChanged",
          value: function eventTimesChanged(_ref2) {
            var event = _ref2.event,
                newStart = _ref2.newStart,
                newEnd = _ref2.newEnd;
            this.events = this.events.map(function (iEvent) {
              if (iEvent === event) {
                return Object.assign(Object.assign({}, event), {
                  start: newStart,
                  end: newEnd
                });
              }

              return iEvent;
            });
            this.handleEvent('Dropped or resized', event);
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(action, event) {
            this.modalData = {
              event: event
            };
            this.modal.open(this.modalContent, {
              size: 'lg'
            });
          }
        }, {
          key: "setView",
          value: function setView(view) {
            this.view = view;
          }
        }, {
          key: "closeOpenMonthViewDay",
          value: function closeOpenMonthViewDay() {
            this.activeDayIsOpen = false;
          }
        }, {
          key: "getUserEvents",
          value: function getUserEvents() {
            var _this = this;

            this.eventService.getUserEvents().subscribe(function (res) {
              _this.mapResToCalendarEvent(res);
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }, {
          key: "getUserInvitations",
          value: function getUserInvitations() {
            this.eventService.getUserInvitations().subscribe(function (res) {});
          }
        }, {
          key: "onTabClick",
          value: function onTabClick(event) {
            if (event.tab.textLabel == 'Invitations') {
              this.getUserInvitations();
            }
          }
        }, {
          key: "mapResToCalendarEvent",
          value: function mapResToCalendarEvent(res) {
            for (var i = 0; i < res.data.length; i++) {
              res.data[i].start = new Date(res.data[i].start);
              res.data[i].end = new Date(res.data[i].end);
              this.events.push(res.data[i]);
            }
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function DashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modalContent = _t.first);
          }
        },
        decls: 36,
        vars: 21,
        consts: [[1, "welcome-text"], ["href", "", 1, "logout", 3, "click"], ["tabGroup", ""], ["label", "Calendar"], [1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "mwlCalendarPreviousView", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "mwlCalendarToday", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "mwlCalendarNextView", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], ["label", "Invitations"], [4, "ngIf"], [3, "viewDate", "events", "refresh", "activeDayIsOpen", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "eventClicked", "eventTimesChanged"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Welcome to Event Web");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_3_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Logout\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-tab-group", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("viewDateChange", function DashboardComponent_Template_div_viewDateChange_11_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function DashboardComponent_Template_div_viewDateChange_11_listener() {
              return ctx.closeOpenMonthViewDay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Previous ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("viewDateChange", function DashboardComponent_Template_div_viewDateChange_13_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Today ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("viewDateChange", function DashboardComponent_Template_div_viewDateChange_15_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function DashboardComponent_Template_div_viewDateChange_15_listener() {
              return ctx.closeOpenMonthViewDay();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Next ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "calendarDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_23_listener() {
              return ctx.setView(ctx.CalendarView.Month);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Month ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_25_listener() {
              return ctx.setView(ctx.CalendarView.Week);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Week ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_27_listener() {
              return ctx.setView(ctx.CalendarView.Day);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Day ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DashboardComponent_mwl_calendar_month_view_31_Template, 1, 4, "mwl-calendar-month-view", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DashboardComponent_mwl_calendar_week_view_32_Template, 1, 3, "mwl-calendar-week-view", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, DashboardComponent_mwl_calendar_day_view_33_Template, 1, 3, "mwl-calendar-day-view", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-tab", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, DashboardComponent_app_invitation_35_Template, 1, 0, "app-invitation", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](20, 17, ctx.viewDate, ctx.view + "ViewTitle", "en"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Month);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Week);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.CalendarView.Day);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.selectedIndex === 1);
          }
        },
        directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵf"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵh"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarWeekViewComponent"], angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDayViewComponent"], _invitation_invitation_component__WEBPACK_IMPORTED_MODULE_9__["InvitationComponent"]],
        pipes: [angular_calendar__WEBPACK_IMPORTED_MODULE_2__["ɵi"]],
        styles: [".logout[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #007bff;\n  width: 6pc;\n  border: 0;\n  padding: 10px;\n  margin: 10px;\n  color: #FFFFFF;\n  font-size: 11px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  font-family: \"Lucida Grande\";\n}\n\nbutton[_ngcontent-%COMP%]:hover, button[_ngcontent-%COMP%]:active, button[_ngcontent-%COMP%]:focus {\n  background: #0059ff;\n}\n\n.welcome-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: xx-large;\n  font-family: \"Roboto\";\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDQTtFQUNBLG1CQUFBO0FBRUE7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ291dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgb3V0bGluZTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICAgIHdpZHRoOiA2cGM7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIjtcbn1cbmJ1dHRvbjpob3ZlcixidXR0b246YWN0aXZlLGJ1dHRvbjpmb2N1cyB7XG5iYWNrZ3JvdW5kOiAjMDA1OWZmO1xufVxuXG5cbi53ZWxjb21lLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gICAgY29sb3I6IGJsdWU7XG59XG4iXX0= */"],
        changeDetection: 0
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'event-web';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "lGQG");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.authService.isLoggedIn()) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(builder, authService, router) {
          _classCallCheck(this, LoginComponent);

          this.builder = builder;
          this.authService = authService;
          this.router = router;
          this.loginForm = this.builder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });

          if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
          }
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signIn",
          value: function signIn() {
            var _this2 = this;

            if (this.loginForm.valid) {
              this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password).subscribe(function () {
                _this2.router.navigate(['/']);
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 13,
        vars: 1,
        consts: [[1, "login-page"], [1, "form", 3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "Email", "type", "email", "id", "email", "formControlName", "email"], ["matInput", "", "placeholder", "Password", "type", "password", "id", "password", "formControlName", "password"], ["text-align", "start", 1, "row", "space-between"], ["type", "submit"], ["type", "submit", "routerLink", "/signup"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() {
              return ctx.signIn();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: [".login-page[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.login-page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: 135px;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 270px;\n}\n.form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  text-align: center;\n}\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #007bff;\n  width: 6pc;\n  border: 0;\n  padding: 15px;\n  margin: 10px;\n  color: #FFFFFF;\n  font-size: 11px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  font-family: \"Lucida Grande\";\n}\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  background: #0059ff;\n}\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  text-decoration: none;\n}\n.form[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 600px) {\n  .login-page[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 45px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    margin-left: 0em;\n  }\n\n  .form[_ngcontent-%COMP%] {\n    margin-top: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFHSTtFQUNJLFlBQUE7QUFBUjtBQUdJO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDSjtBQUNJO0VBQ0EsbUJBQUE7QUFFSjtBQUFJO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREk7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFJSjtBQUZJO0VBQ0EsYUFBQTtBQUtKO0FBRkk7RUFDQTtJQUNBLFlBQUE7RUFLRjs7RUFIRTtJQUNBLFlBQUE7RUFNRjs7RUFIRTtJQUNBLGdCQUFBO0VBTUY7O0VBSkU7SUFDQSxpQkFBQTtFQU9GO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5sb2dpbi1wYWdlIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogOCUgMCAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAucm93e1xuICAgICAgICBtYXJnaW4tbGVmdDogMTM1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDI3MHB4O1xuICAgIH1cblxuICAgIC5mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmZvcm0gYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICB3aWR0aDogNnBjO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCI7XG4gICAgfVxuICAgIC5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzAwNTlmZjtcbiAgICB9XG4gICAgLmZvcm0gLm1lc3NhZ2Uge1xuICAgIG1hcmdpbjogMTVweCAwIDA7XG4gICAgY29sb3I6ICNiM2IzYjM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuZm9ybSAubWVzc2FnZSBhIHtcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIC5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubG9naW4tcGFnZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgICAuZm9ybSBidXR0b24ge1xuICAgIGhlaWdodDogNDVweDtcbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgfVxuICAgIH0iXX0= */"]
      });
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/sign-up/sign-up.component */
      "ujIQ");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _httpinterceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./httpinterceptor */
      "apf3");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _components_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/invitation/invitation.component */
      "xr8A");
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! angular-calendar */
      "kRoH");
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      "L/mj");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _httpinterceptor__WEBPACK_IMPORTED_MODULE_12__["MyHttpInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"].forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_15__["DateAdapter"],
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_16__["adapterFactory"]
        }), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _components_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_14__["InvitationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"]]
        });
      })();
      /***/

    },

    /***/
    "apf3":
    /*!************************************!*\
      !*** ./src/app/httpinterceptor.ts ***!
      \************************************/

    /*! exports provided: MyHttpInterceptor */

    /***/
    function apf3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyHttpInterceptor", function () {
        return MyHttpInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MyHttpInterceptor = /*#__PURE__*/function () {
        function MyHttpInterceptor() {
          _classCallCheck(this, MyHttpInterceptor);
        }

        _createClass(MyHttpInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = localStorage.getItem('access_token');

            if (!!authToken) {
              var authReq = req.clone({
                headers: req.headers.set('Authorization', "bearer ".concat(authToken))
              });
              return next.handle(authReq);
            } else {
              return next.handle(req);
            }
          }
        }]);

        return MyHttpInterceptor;
      }();

      MyHttpInterceptor.ɵfac = function MyHttpInterceptor_Factory(t) {
        return new (t || MyHttpInterceptor)();
      };

      MyHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MyHttpInterceptor,
        factory: MyHttpInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "fTLw":
    /*!*******************************************!*\
      !*** ./src/app/services/event.service.ts ***!
      \*******************************************/

    /*! exports provided: EventService */

    /***/
    function fTLw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var EventService = /*#__PURE__*/function () {
        function EventService(http) {
          _classCallCheck(this, EventService);

          this.http = http;
        }

        _createClass(EventService, [{
          key: "getUserEvents",
          value: function getUserEvents() {
            var userID = localStorage.getItem('user_id');
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'user/' + userID + '/events');
          }
        }, {
          key: "getUserInvitations",
          value: function getUserInvitations() {
            var userID = localStorage.getItem('user_id');
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'user/' + userID + '/invitations');
          }
        }, {
          key: "updateInvitationStatus",
          value: function updateInvitationStatus(inviteID, status) {
            var body = {
              status: status
            };
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'invite/' + inviteID + '/update-status', body);
          }
        }]);

        return EventService;
      }();

      EventService.ɵfac = function EventService_Factory(t) {
        return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: EventService,
        factory: EventService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
        }

        _createClass(AuthService, [{
          key: "signIn",
          value: function signIn(email, password) {
            var body = {
              email: email,
              password: password
            };
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'login', body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
              localStorage.setItem('access_token', res.token);
              localStorage.setItem('user_name', res.username);
              localStorage.setItem('user_id', res.user_id);
            }));
          }
        }, {
          key: "signUpUser",
          value: function signUpUser(name, email, password) {
            var body = {
              user: {
                name: name,
                email: email,
                password: password
              }
            };
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL + 'register', body);
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            if (localStorage.getItem('access_token')) {
              return true;
            }

            return false;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('access_token');
            localStorage.removeItem('username');
            localStorage.removeItem('user_id');
            this.router.navigate(['/login']);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "ujIQ":
    /*!*********************************************************!*\
      !*** ./src/app/components/sign-up/sign-up.component.ts ***!
      \*********************************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function ujIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SignUpComponent = /*#__PURE__*/function () {
        function SignUpComponent(formBuilder, authService, router) {
          _classCallCheck(this, SignUpComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.router = router;
          this.loading = false;
          this.submitted = false;
          this.hide = true;
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signupForm = this.formBuilder.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            if (this.signupForm.valid) {
              this.authService.signUpUser(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe(function (res) {
                _this3.router.navigate(['/login']);
              }, function (error) {});
            }
          }
        }]);

        return SignUpComponent;
      }();

      SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SignUpComponent,
        selectors: [["app-sign-up"]],
        decls: 16,
        vars: 5,
        consts: [[1, "sign-up-page"], ["autocomplete", "off", 1, "form", 3, "formGroup", "ngSubmit"], ["required", "", "matInput", "", "placeholder", "Name", "formControlName", "name", 1, "capitalize"], ["required", "", "matInput", "", "placeholder", "Email", "formControlName", "email"], ["required", "", "matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-stroked-button", "", "color", "accent", 1, "btn-block"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_1_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_11_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]],
        styles: [".sign-up-page[_ngcontent-%COMP%] {\n  width: 500px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 270px;\n}\n\n.form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  text-align: center;\n}\n\n.capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.form[_ngcontent-%COMP%]   button.btn-block[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #007bff;\n  width: 6pc;\n  border: 0;\n  height: 44px;\n  margin-left: 175px;\n  color: #FFFFFF;\n  font-size: 11px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  font-family: \"Lucida Grande\";\n}\n\n.form[_ngcontent-%COMP%]   button.btn-block[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   button.btn-block[_ngcontent-%COMP%]:active, .form[_ngcontent-%COMP%]   button.btn-block[_ngcontent-%COMP%]:focus {\n  background: #0059ff;\n}\n\nbutton.mat-icon-button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: black;\n}\n\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n\n.form[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4CAF50;\n  text-decoration: none;\n}\n\n.form[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.hide-password[_ngcontent-%COMP%] {\n  background: black;\n}\n\n@media only screen and (max-width: 600px) {\n  .sign-up-page[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  .form[_ngcontent-%COMP%]   button.btn-block[_ngcontent-%COMP%] {\n    height: 45px;\n  }\n\n  .btn[_ngcontent-%COMP%] {\n    margin-left: 0em;\n  }\n\n  .form[_ngcontent-%COMP%] {\n    margin-top: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFBRDs7QUFHQztFQUNFLFlBQUE7QUFBSDs7QUFHQztFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRDs7QUFFQztFQUNDLDBCQUFBO0FBQ0Y7O0FBRUU7RUFJQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDTSxZQUFBO0VBQ0Esa0JBQUE7RUFDTixjQUFBO0VBQ0EsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBRkY7O0FBZEc7RUFDQyxtQkFBQTtBQWdCSjs7QUFHQztFQUNDLHVCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdDO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFEOztBQUVDO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQ0Q7O0FBQ0M7RUFDQSxhQUFBO0FBRUQ7O0FBQUM7RUFDQyx3QkFBQTtFQUNBLFNBQUE7QUFHRjs7QUFEQztFQUNDLGlCQUFBO0FBSUY7O0FBREM7RUFDQTtJQUNBLFlBQUE7RUFJQzs7RUFGRDtJQUNBLFlBQUE7RUFLQzs7RUFGRDtJQUNBLGdCQUFBO0VBS0M7O0VBSEQ7SUFDQSxpQkFBQTtFQU1DO0FBQ0YiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNpZ24tdXAtcGFnZSB7XG5cdHdpZHRoOiA1MDBweDtcblx0cGFkZGluZzogOCUgMCAwO1xuXHRtYXJnaW46IGF1dG87XG5cdH1cblxuXHRtYXQtZm9ybS1maWVsZHtcblx0XHRcdHdpZHRoOiAyNzBweDtcblx0fVxuXG5cdC5mb3JtIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xuXHRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LmNhcGl0YWxpemV7XG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdH1cblx0LmZvcm0ge1xuXHRcdGJ1dHRvbi5idG4tYmxvY2sge1xuXHRcdFx0Jjpob3ZlciwmOmFjdGl2ZSwmOmZvY3VzIHtcblx0XHRcdFx0YmFja2dyb3VuZDogIzAwNTlmZjtcblx0XHR9XG5cdFx0Zm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRvdXRsaW5lOiAwO1xuXHRcdGJhY2tncm91bmQ6ICMwMDdiZmY7XG5cdFx0d2lkdGg6IDZwYztcblx0XHRib3JkZXI6IDA7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3NXB4O1xuXHRcdGNvbG9yOiAjRkZGRkZGO1xuXHRcdGZvbnQtc2l6ZTogMTFweDtcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIjtcblx0fVxufVxuXG5cdGJ1dHRvbi5tYXQtaWNvbi1idXR0b257XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHR9XG5cblx0LmZvcm0gLm1lc3NhZ2Uge1xuXHRtYXJnaW46IDE1cHggMCAwO1xuXHRjb2xvcjogI2IzYjNiMztcblx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5mb3JtIC5tZXNzYWdlIGEge1xuXHRjb2xvcjogIzRDQUY1MDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR9XG5cdC5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcblx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHRpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcblx0fVxuXHQuaGlkZS1wYXNzd29yZHtcblx0XHRiYWNrZ3JvdW5kOiBibGFjaztcblx0fVxuXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblx0LnNpZ24tdXAtcGFnZSB7XG5cdHdpZHRoOiAzMDBweDtcblx0fVxuXHQuZm9ybSBidXR0b24uYnRuLWJsb2NrIHtcblx0aGVpZ2h0OiA0NXB4O1xuXHR9XG5cblx0LmJ0biB7XG5cdG1hcmdpbi1sZWZ0OiAwZW07XG5cdH1cblx0LmZvcm0ge1xuXHRtYXJnaW4tdG9wOiAxMjBweDtcblx0fVxuXHR9XG4gICAgIl19 */"]
      });
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @components/sign-up/sign-up.component */
      "ujIQ");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @components/invitation/invitation.component */
      "xr8A");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @guards/auth.guard */
      "UTcu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }, {
        path: 'signup',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]
      }, {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: 'invitations',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        component: _components_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_4__["InvitationComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "xr8A":
    /*!***************************************************************!*\
      !*** ./src/app/components/invitation/invitation.component.ts ***!
      \***************************************************************/

    /*! exports provided: InvitationComponent */

    /***/
    function xr8A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitationComponent", function () {
        return InvitationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @services/event.service */
      "fTLw");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function InvitationComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvitationComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.title, " ");
        }
      }

      function InvitationComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Start Time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvitationComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r13.start, "medium"), " ");
        }
      }

      function InvitationComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " End Time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvitationComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r14.end, "medium"), " ");
        }
      }

      function InvitationComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvitationComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.status, " ");
        }
      }

      function InvitationComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvitationComponent_mat_cell_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvitationComponent_mat_cell_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var row_r16 = ctx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.AcceptOrRejectInvite(row_r16.id, "Accepted");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvitationComponent_mat_cell_15_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var row_r16 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.AcceptOrRejectInvite(row_r16.id, "Rejected");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function InvitationComponent_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
        }
      }

      function InvitationComponent_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
        }
      }

      var InvitationComponent = /*#__PURE__*/function () {
        function InvitationComponent(eventService, changeDetectorRefs) {
          _classCallCheck(this, InvitationComponent);

          this.eventService = eventService;
          this.changeDetectorRefs = changeDetectorRefs;
          this.displayedColumns = ['title', 'start', 'end', 'status', 'actions'];
        }

        _createClass(InvitationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserInvitations();
          }
        }, {
          key: "getUserInvitations",
          value: function getUserInvitations() {
            var _this4 = this;

            this.eventService.getUserInvitations().subscribe(function (res) {
              _this4.dataSource = res.data;
            });
          }
        }, {
          key: "AcceptOrRejectInvite",
          value: function AcceptOrRejectInvite(id, status) {
            var _this5 = this;

            this.eventService.updateInvitationStatus(id, status).subscribe(function (res) {
              _this5.dataSource = res.data;

              _this5.changeDetectorRefs.detectChanges();
            });
          }
        }]);

        return InvitationComponent;
      }();

      InvitationComponent.ɵfac = function InvitationComponent_Factory(t) {
        return new (t || InvitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      InvitationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvitationComponent,
        selectors: [["app-invitation"]],
        decls: 18,
        vars: 3,
        consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "start"], ["matColumnDef", "end"], ["matColumnDef", "status"], ["matColumnDef", "actions"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 1, "action-btn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function InvitationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvitationComponent_th_2_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InvitationComponent_td_3_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvitationComponent_th_5_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvitationComponent_td_6_Template, 3, 4, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvitationComponent_th_8_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvitationComponent_td_9_Template, 3, 4, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InvitationComponent_th_11_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvitationComponent_td_12_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InvitationComponent_th_14_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InvitationComponent_mat_cell_15_Template, 5, 0, "mat-cell", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InvitationComponent_tr_16_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InvitationComponent_tr_17_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #007bff;\n  width: 6pc;\n  border: 0;\n  padding: 15px;\n  margin: 10px;\n  color: #FFFFFF;\n  font-size: 11px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  font-family: \"Lucida Grande\";\n}\n\nbutton[_ngcontent-%COMP%]:hover, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  background: #0059ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ludml0YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsd0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDQTs7QUFDQTtFQUNBLG1CQUFBO0FBRUEiLCJmaWxlIjoiaW52aXRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4uYWN0aW9uLWJ0bntcbmZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbm91dGxpbmU6IDA7XG5iYWNrZ3JvdW5kOiAjMDA3YmZmO1xud2lkdGg6IDZwYztcbmJvcmRlcjogMDtcbnBhZGRpbmc6IDE1cHg7XG5tYXJnaW46IDEwcHg7XG5jb2xvcjogI0ZGRkZGRjtcbmZvbnQtc2l6ZTogMTFweDtcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xudHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuY3Vyc29yOiBwb2ludGVyO1xuZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiO1xufVxuYnV0dG9uOmhvdmVyLC5mb3JtIGJ1dHRvbjphY3RpdmUsLmZvcm0gYnV0dG9uOmZvY3VzIHtcbmJhY2tncm91bmQ6ICMwMDU5ZmY7XG59XG4iXX0= */"]
      });
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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