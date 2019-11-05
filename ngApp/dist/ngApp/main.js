(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./special/special.component */ "./src/app/special/special.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _view_events_view_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view-events/view-events.component */ "./src/app/view-events/view-events.component.ts");









var routes = [
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: _events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"]
    },
    {
        path: 'events/:id',
        component: _view_events_view_events_component__WEBPACK_IMPORTED_MODULE_8__["ViewEventsComponent"]
    },
    {
        path: 'special/:id',
        component: _view_events_view_events_component__WEBPACK_IMPORTED_MODULE_8__["ViewEventsComponent"]
    },
    {
        path: 'special',
        component: _special_special_component__WEBPACK_IMPORTED_MODULE_6__["SpecialComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Eventhub</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/events\" routerLinkActive=\"active\">Events</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/special\" routerLinkActive=\"active\">Members</a>\n      </li>\n      <div class=\"col-sm-6 button-event\">\n        <a class=\"nav-link\" style=\"cursor:pointer\" data-toggle=\"modal\" data-target=\"#addFormModal\">ADD EVENT</a>\n      </div>\n      <li>\n        <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" style=\"cursor:pointer\" data-toggle=\"modal\" data-toggle=\"modal\" data-target=\"#addSpecialFormModal\">Add</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n        <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\"  routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        <a class=\"nav-link\" *ngIf=\"!_authService.loggedIn()\"  routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        <a class=\"nav-link\" *ngIf=\"_authService.loggedIn()\" style=\"cursor:pointer\" (click)=\"_authService.logOutUser()\">LogOut</a>\n      </ul>\n  </div>\n</nav>    \n<div class=\"container\">\n  <router-outlet></router-outlet>            \n</div>\n\n\n<!-- Add Event Form Modal -->\n<div class=\"modal fade\" id=\"addFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addFormModalTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <form [formGroup]=\"addEventForm\" (ngSubmit)=\"onAddEvent()\" action=\"events/events.component.html\">\n            <!-- (click)=\"_eventService.addSpecialEvent(id)\" -->\n   <!-- <form method=\"post\" action=\"/add\"> -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"addFormModalTitle\">ADD EVENT</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"ename\">Event Name</label>\n            <!-- <input formControlName=\"ename\" type=\"text\" class=\"form-control rounded-0\" [value]=\"ename\" required /> -->\n            <input type=\"text\" [(ngModel)]=\"add.ename\" formControlName=\"ename\"  class=\"form-control rounded-0\" [value]=\"ename\" (input)=\"ename=$event.target.value\" [ngClass]=\"{ 'is-invalid': submitted && f.ename.errors }\"  required />\n              <div *ngIf=\"submitted && f.ename.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"submitted && f.ename.errors.required\">Event Name is required</div>\n              </div>\n      </div>  \n          \n         \n          <div class=\"form-group\">\n            <label for=\"edate\">Event Date</label>\n            <input type=\"date\" [(ngModel)]=\"add.edate\" formControlName=\"edate\" class=\"form-control rounded-0\" [value]=\"edate\" (input)=\"edate=$event.target.value\" [ngClass]=\"{ 'is-invalid': submitted && f.edate.errors }\" required />\n            <div *ngIf=\"submitted && f.edate.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && f.edate.errors.required\">Event Date is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"edesc\">Description</label>\n            <input type=\"text\" [(ngModel)]=\"add.edesc\" formControlName=\"edesc\" class=\"form-control rounded-0\" [value]=\"edesc\" (input)=\"edesc=$event.target.value\" [ngClass]=\"{ 'is-invalid': submitted && f.edesc.errors }\" required />\n            <div *ngIf=\"submitted && f.edesc.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && f.edesc.errors.required\">Event Description is required</div>\n            </div>\n          </div>\n          <input type=\"file\" name=\"imgFile\" ng2FileSelect [uploader]=\"uploader\" />\n      </div>\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <!-- <input type=\"submit\" class=\"btn btn-success btn-s\"  [disabled]=\"(f.edate.errors || f.ename.errors || f.edesc.errors)\"/> -->\n          <button  class=\"btn btn-success btn-s\" (click)=\"onAddEvent()\" data-dismiss=\"modal\" \n          [disabled]=\"(!uploader.getNotUploadedItems().length || f.edate.errors || f.ename.errors || f.edesc.errors)\">\n          ADD</button>\n        </div>\n      </form>\n    </div> \n  </div>\n</div>\n\n<!-- Add Special event Form Modal -->\n<div class=\"modal fade\" id=\"addSpecialFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addFormModalTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <form [formGroup]=\"addSpecialEventForm\" (ngSubmit)=\"onAddSpecialEvent()\" action=\"events/events.component.html\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"addFormModalTitle\">ADD SPECIAL EVENT</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"ename\">Event Name</label>\n            <!-- <input formControlName=\"ename\" type=\"text\" class=\"form-control rounded-0\" [value]=\"ename\" required /> -->\n            <input type=\"text\" [(ngModel)]=\"spl.ename\" formControlName=\"ename\"  class=\"form-control rounded-0\" [ngClass]=\"{ 'is-invalid': submitted && s.ename.errors }\"  required />\n              <div *ngIf=\"submitted && s.ename.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"submitted && s.ename.errors.required\">Event Name is required</div>\n              </div>\n      </div>  \n          <div class=\"form-group\">\n            <label for=\"edate\">Event Date</label>\n            <input type=\"date\" [(ngModel)]=\"spl.edate\" formControlName=\"edate\" class=\"form-control rounded-0\" [ngClass]=\"{ 'is-invalid': submitted && s.edate.errors }\" required />\n            <div *ngIf=\"submitted && s.edate.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && s.edate.errors.required\">Event Date is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"edesc\">Description</label>\n            <input type=\"text\" [(ngModel)]=\"spl.edesc\" formControlName=\"edesc\" class=\"form-control rounded-0\" [ngClass]=\"{ 'is-invalid': submitted && s.edesc.errors }\" required />\n            <div *ngIf=\"submitted && s.edesc.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"submitted && s.edesc.errors.required\">Event Description is required</div>\n            </div>\n          </div>\n          <input type=\"file\" name=\"specialImgFile\" ng2FileSelect [uploader]=\"specialUploader\" />\n      </div>\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button  class=\"btn btn-success btn-s\" (click)=\"onAddSpecialEvent()\" data-dismiss=\"modal\" \n          [disabled]=\"(!specialUploader.getNotUploadedItems().length || s.edate.errors || s.ename.errors || s.edesc.errors)\">ADD</button>\n        </div>\n      </form>\n    </div> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event.service */ "./src/app/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");







var _Eventurl = 'http://localhost:3000/api/addEvent';
var _SpecialEventurl = 'http://localhost:3000/api/addSpecial';
var AppComponent = /** @class */ (function () {
    function AppComponent(_authService, _eventService, formBuilder, _router) {
        this._authService = _authService;
        this._eventService = _eventService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.events = [];
        this.submitted = false;
        this.add = {};
        this.spl = { ename: '', edate: '', edesc: '' };
        this.ename = '';
        this.edate = '';
        this.edesc = '';
        this.createdBy = localStorage.getItem('email');
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({
            url: _Eventurl, itemAlias: 'imgFile'
        });
        this.specialUploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({
            url: _SpecialEventurl, itemAlias: 'specialImgFile'
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.addEventForm = this.formBuilder.group({
            ename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            edate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            edesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.addSpecialEventForm = this.formBuilder.group({
            ename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            edate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            edesc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
            console.log("File", file);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("Image Uploaded succesfully: ", item, response, status);
        };
        this.specialUploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
            console.log("Special", file);
        };
        this.specialUploader.onCompleteItem = function (item, response, status, headers) {
            console.log("Image Uploaded succesfully: ", item, response, status);
        };
    };
    AppComponent.prototype.onAddEvent = function () {
        this.submitted = true;
        if (this.addEventForm.invalid) {
            return;
        }
        this.uploader.options.additionalParameter = {
            ename: this.ename,
            edate: this.edate,
            edesc: this.edesc,
            createdBy: this.createdBy
        };
        this.uploader.uploadAll();
        this._eventService.addEvent(this.add)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
        //location.reload();
        this._router.navigate(['/events']);
    };
    AppComponent.prototype.onAddSpecialEvent = function () {
        this.submitted = true;
        if (this.addSpecialEventForm.invalid) {
            return;
        }
        this.specialUploader.options.additionalParameter = {
            ename: this.spl.ename,
            edate: this.spl.edate,
            edesc: this.spl.edesc,
            createdBy: this.createdBy
        };
        this.specialUploader.uploadAll();
        this._eventService.addSpecialEvent(this.add)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
        //location.reload();
        this._router.navigate(['/special']);
    };
    Object.defineProperty(AppComponent.prototype, "f", {
        get: function () {
            return this.addEventForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "s", {
        get: function () {
            return this.addSpecialEventForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _special_special_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./special/special.component */ "./src/app/special/special.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event.service */ "./src/app/event.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _view_events_view_events_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-events/view-events.component */ "./src/app/view-events/view-events.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");


















function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"]('2232445330183365')
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_9__["EventsComponent"],
                _special_special_component__WEBPACK_IMPORTED_MODULE_10__["SpecialComponent"],
                _view_events_view_events_component__WEBPACK_IMPORTED_MODULE_16__["ViewEventsComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileSelectDirective"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileDropDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialLoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _event_service__WEBPACK_IMPORTED_MODULE_13__["EventService"], _auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
                    multi: true
                }, {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, _router) {
        this.http = http;
        this._router = _router;
        this._regUrl = "http://localhost:3000/api/register";
        this._loginUrl = "http://localhost:3000/api/login";
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this._regUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logOutUser = function () {
        this._router.navigate(['/events']);
        return localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this._eventsUrl = 'http://localhost:3000/api/events';
        this._specialEventsUrl = 'http://localhost:3000/api/special';
        this._addEventsUrl = 'http://localhost:3000/api/addEvent';
        this._addSpecialEventsUrl = 'http://localhost:3000/api/addSpecial';
        this._deleteEventsUrl = 'http://localhost:3000/api/deleteEvent';
        this._deleteSpecialEventsUrl = 'http://localhost:3000/api/deleteSpecial';
    }
    EventService.prototype.getEvent = function () {
        return this.http.get(this._eventsUrl);
    };
    EventService.prototype.getSpecialEvent = function () {
        return this.http.get(this._specialEventsUrl);
    };
    EventService.prototype.getEventById = function (id) {
        var _url = this._eventsUrl + "/" + id;
        return this.http.get(_url);
    };
    EventService.prototype.getSpecialEventById = function (id) {
        var _url = this._specialEventsUrl + "/" + id;
        return this.http.get(_url);
    };
    EventService.prototype.addEvent = function (id) {
        return this.http.post(this._addEventsUrl, id);
    };
    EventService.prototype.addSpecialEvent = function (id) {
        return this.http.post(this._addSpecialEventsUrl, id);
    };
    EventService.prototype.deleteEvent = function (id) {
        var _url = this._deleteEventsUrl + "/" + id;
        return this.http.delete(_url);
    };
    EventService.prototype.deleteSpecialEvent = function (id) {
        var _url = this._deleteSpecialEventsUrl + "/" + id;
        return this.http.delete(_url);
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let event of events\">\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{event.eventName}}</h5>\n        <!-- <p class=\"card-text\">{{event.eventDescription}}</p> -->\n        <a (click)=\"onSearch(event._id)\"  class=\"btn btn-primary\">Buy Tickets</a>\n      </div>\n      <div class=\"card-footer text-muted\">\n        {{event.eventDate}}\n      </div>\n      <div class=\"card-footer text-muted\">\n        Courtesy {{event.createdBy}}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EventsComponent = /** @class */ (function () {
    function EventsComponent(_eventService, _router) {
        this._eventService = _eventService;
        this._router = _router;
        this.events = [];
    }
    EventsComponent.prototype.onSearch = function (id) {
        this._eventService.getEventById(id)
            .subscribe(function (res) { return res; }, //console.log(res),
        function (//console.log(res),
        err) { return console.log(err); });
        //console.log(this.eventid)
        this._router.navigate(["events", id]);
    };
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getEvent()
            .subscribe(function (res) { return _this.events = res; }, function (err) { return console.log(err); });
    };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div *ngIf='httpResponseObj.status != \"\"'>\n    {{httpResponseObj.statusText}}\n  </div>\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Login</h3>\n      </div>\n      <div class=\"card-body\">\n        <form action=\"\" class=\"form\">\n          <div class=\"form-group\">\n            <label for=\"\">Email</label>\n            <input [(ngModel)]=\"loginUserData.email\" name=\"email\" type=\"text\" class=\"form-control rounded-0\" required>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"\">Password</label>\n              <input [(ngModel)]=\"loginUserData.password\" name=\"password\" type=\"password\" class=\"form-control rounded-0\" required>\n            </div>\n            <button (click)=\"loginUser()\" type=\"button\" class=\"btn btn-primary float-right\">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = { email: '', password: '' };
        this.httpResponseObj = {
            status: '',
            statusText: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.httpResponseObj = {
                            status: '',
                            statusText: ''
                        };
                        return [4 /*yield*/, this._auth.loginUser(this.loginUserData)
                                .subscribe(function (res) {
                                console.log(res);
                                localStorage.setItem('email', res.email);
                                localStorage.setItem('token', res.token);
                                _this._router.navigate(['/special']);
                            }, function (err) {
                                console.log(err);
                                _this.httpResponseObj.status = err.status;
                                _this.httpResponseObj.statusText = err.statusText;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n  <div class=\"col-md-6 mx-auto\">\n    <div class=\"card rounded-0\">\n      <div class=\"card-header\">\n        <h3 class=\"mb-0\">Register</h3>\n      </div>\n      <div class=\"card-body\">\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Fname\">First Name</label>\n          <input [(ngModel)]=\"regUserData.fname\" formControlName=\"fname\" type=\"text\" class=\"form-control rounded-0\" [ngClass]=\"{ 'is-invalid': submitted && f.fname.errors }\" required />\n          <div *ngIf=\"submitted && f.fname.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.fname.errors.required\">First Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lname\">Last Name</label>\n          <input [(ngModel)]=\"regUserData.lname\" formControlName=\"lname\" type=\"text\" class=\"form-control rounded-0\" [ngClass]=\"{ 'is-invalid': submitted && f.lname.errors }\" required />\n          <div *ngIf=\"submitted && f.lname.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.lname.errors.required\">Last Name is required</div>\n          </div>\n        </div>  \n        <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input [(ngModel)]=\"regUserData.email\" formControlName=\"email\" type=\"text\" class=\"form-control rounded-0\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" required />\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                <!-- <div *ngIf=\"f.email.errors.\">Email already present</div> -->\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"\">Password</label>\n              <input [(ngModel)]=\"regUserData.password\" formControlName=\"password\" type=\"password\" class=\"form-control rounded-0\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" required>\n              <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                  <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n              </div>\n          </div>\n            <button (click)=\"registerUser()\"   type=\"button\" class=\"btn btn-primary float-right\">Register</button>\n            </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_auth, _router, formBuilder, SocialAuthService) {
        this._auth = _auth;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.SocialAuthService = SocialAuthService;
        this.submitted = false;
        this.regUserData = { fname: '', lname: '', email: '', password: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this._auth.registerUser(this.regUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['/special']);
            localStorage.setItem('email', _this.regUserData.email);
        }, function (err) { return console.log(err); });
        console.log(this.regUserData);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/special/special.component.css":
/*!***********************************************!*\
  !*** ./src/app/special/special.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWwvc3BlY2lhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/special/special.component.html":
/*!************************************************!*\
  !*** ./src/app/special/special.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n    <div class=\"col-md-4 mb-3\" *ngFor=\"let event of specialEvents\">\n      <div class=\"card text-center\">\n        <div class=\"card-body\">\n          <h3 class=\"card-title\">{{event.eventName}}</h3>\n          <!-- <p class=\"card-text\">{{event.description}}</p> -->\n          <a (click)=\"onSearch(event._id)\" class=\"btn btn-success\">Buy Tickets</a>\n        </div>\n        <div class=\"card-footer text-muted\">\n          {{event.eventDate | date:\"shortDate\"}}\n        </div>\n        <div class=\"card-footer text-muted\">\n          Courtesy {{event.createdBy}}\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/special/special.component.ts":
/*!**********************************************!*\
  !*** ./src/app/special/special.component.ts ***!
  \**********************************************/
/*! exports provided: SpecialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialComponent", function() { return SpecialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SpecialComponent = /** @class */ (function () {
    function SpecialComponent(_specialEventService, _router) {
        this._specialEventService = _specialEventService;
        this._router = _router;
        this.specialEvents = [];
    }
    SpecialComponent.prototype.onSearch = function (id) {
        this._specialEventService.getSpecialEventById(id)
            .subscribe(function (res) { return res; }, //console.log(res),
        function (//console.log(res),
        err) { return console.log(err); });
        //console.log(this.eventid)
        this._router.navigate(["special", id]);
    };
    SpecialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._specialEventService.getSpecialEvent()
            .subscribe(function (res) { return _this.specialEvents = res; }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['/login']);
                }
            }
        });
    };
    SpecialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-special',
            template: __webpack_require__(/*! ./special.component.html */ "./src/app/special/special.component.html"),
            styles: [__webpack_require__(/*! ./special.component.css */ "./src/app/special/special.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SpecialComponent);
    return SpecialComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/view-events/view-events.component.css":
/*!*******************************************************!*\
  !*** ./src/app/view-events/view-events.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZXZlbnRzL3ZpZXctZXZlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/view-events/view-events.component.html":
/*!********************************************************!*\
  !*** ./src/app/view-events/view-events.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h5 class=\"card-title\">{{eventid.eventName}}</h5>\n<h6 class=\"card-title\">{{eventid.eventDate}}</h6>\n<p class=\"card-title\">{{eventid.eventDescription}}</p>\n<img src=\"../../assets/{{eventid.eventGallery}}\" style=\"width: 30em;height: 30em;\"/>\n\n<br />\n<br />\n\n<a (click)=\"onDelete(eventid._id)\"  class=\"btn btn-danger\">Delete Event</a>"

/***/ }),

/***/ "./src/app/view-events/view-events.component.ts":
/*!******************************************************!*\
  !*** ./src/app/view-events/view-events.component.ts ***!
  \******************************************************/
/*! exports provided: ViewEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventsComponent", function() { return ViewEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var _url = 'http://localhost:3000/api/imgUpload';
var ViewEventsComponent = /** @class */ (function () {
    function ViewEventsComponent(_eventService, _router) {
        this._eventService = _eventService;
        this._router = _router;
        this.url = (window.location.href).split('/');
        this.eventid = this.url[this.url.length - 1];
    }
    ViewEventsComponent.prototype.onDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!location.href.includes("events")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._eventService.deleteEvent(id).subscribe(function (res) {
                                console.log(res);
                                alert("Deleted");
                            }, function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        this._router.navigate(['/events']);
                        return [3 /*break*/, 4];
                    case 2:
                        if (!location.href.includes("special")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._eventService.deleteSpecialEvent(id).subscribe(function (res) {
                                console.log(res);
                                alert("Deleted");
                            }, function (err) { return console.log(err); })];
                    case 3:
                        _a.sent();
                        this._router.navigate(['/special']);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ViewEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getEventById(this.eventid).subscribe(function (res) {
            _this.eventid = res;
            res.eventGallery = res.eventGallery.split('\\')[res.eventGallery.split('\\').length - 1];
            //console.log(res) 
        }, function (err) { return console.log(err); });
        console.log(this.eventid);
        this._eventService.getSpecialEventById(this.eventid).subscribe(function (res) {
            _this.eventid = res;
            res.eventGallery = res.eventGallery.split('\\')[res.eventGallery.split('\\').length - 1];
        }, function (err) { return console.log(err); });
    };
    ViewEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-events',
            template: __webpack_require__(/*! ./view-events.component.html */ "./src/app/view-events/view-events.component.html"),
            styles: [__webpack_require__(/*! ./view-events.component.css */ "./src/app/view-events/view-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewEventsComponent);
    return ViewEventsComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\angular proj\NgAuth\ngApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map