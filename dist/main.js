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
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_land_registration_land_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/land-registration/land-registration.component */ "./src/app/components/land-registration/land-registration.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_lands_lands_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/lands/lands.component */ "./src/app/components/lands/lands.component.ts");
/* harmony import */ var _components_change_owner_change_owner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-owner/change-owner.component */ "./src/app/components/change-owner/change-owner.component.ts");
/* harmony import */ var _components_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin-registration/admin-registration.component */ "./src/app/components/admin-registration/admin-registration.component.ts");
/* harmony import */ var _components_my_lands_my_lands_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/my-lands/my-lands.component */ "./src/app/components/my-lands/my-lands.component.ts");
/* harmony import */ var _components_create_ad_create_ad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-ad/create-ad.component */ "./src/app/components/create-ad/create-ad.component.ts");
/* harmony import */ var _components_land_history_land_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/land-history/land-history.component */ "./src/app/components/land-history/land-history.component.ts");
/* harmony import */ var _components_my_ads_my_ads_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/my-ads/my-ads.component */ "./src/app/components/my-ads/my-ads.component.ts");
/* harmony import */ var _components_divide_land_divide_land_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/divide-land/divide-land.component */ "./src/app/components/divide-land/divide-land.component.ts");

















var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landRegistration', component: _components_land_registration_land_registration_component__WEBPACK_IMPORTED_MODULE_7__["LandRegistrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin'] } },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin'] } },
    { path: 'lands', component: _components_lands_lands_component__WEBPACK_IMPORTED_MODULE_9__["LandsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin', 'user'] } },
    { path: 'changeOwner', component: _components_change_owner_change_owner_component__WEBPACK_IMPORTED_MODULE_10__["ChangeOwnerComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin'] } },
    { path: 'adminRegistration', component: _components_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_11__["AdminRegistrationComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin'] } },
    { path: 'myLands', component: _components_my_lands_my_lands_component__WEBPACK_IMPORTED_MODULE_12__["MyLandsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['user'] } },
    { path: 'createAd', component: _components_create_ad_create_ad_component__WEBPACK_IMPORTED_MODULE_13__["CreateAdComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['user'] } },
    { path: 'landHistory', component: _components_land_history_land_history_component__WEBPACK_IMPORTED_MODULE_14__["LandHistoryComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin', 'user'] } },
    { path: 'myAds', component: _components_my_ads_my_ads_component__WEBPACK_IMPORTED_MODULE_15__["MyAdsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin', 'user'] } },
    { path: 'divideLand', component: _components_divide_land_divide_land_component__WEBPACK_IMPORTED_MODULE_16__["DivideLandComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: { expectedRole: ['admin'] } },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LandChain-Frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_land_registration_land_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/land-registration/land-registration.component */ "./src/app/components/land-registration/land-registration.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_lands_lands_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/lands/lands.component */ "./src/app/components/lands/lands.component.ts");
/* harmony import */ var _components_change_owner_change_owner_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/change-owner/change-owner.component */ "./src/app/components/change-owner/change-owner.component.ts");
/* harmony import */ var _components_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin-registration/admin-registration.component */ "./src/app/components/admin-registration/admin-registration.component.ts");
/* harmony import */ var _components_my_lands_my_lands_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/my-lands/my-lands.component */ "./src/app/components/my-lands/my-lands.component.ts");
/* harmony import */ var _components_create_ad_create_ad_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/create-ad/create-ad.component */ "./src/app/components/create-ad/create-ad.component.ts");
/* harmony import */ var _components_land_history_land_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/land-history/land-history.component */ "./src/app/components/land-history/land-history.component.ts");
/* harmony import */ var _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ads/ads.component */ "./src/app/components/ads/ads.component.ts");
/* harmony import */ var _components_my_ads_my_ads_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/my-ads/my-ads.component */ "./src/app/components/my-ads/my-ads.component.ts");
/* harmony import */ var _components_divide_land_divide_land_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/divide-land/divide-land.component */ "./src/app/components/divide-land/divide-land.component.ts");

























function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
                _components_land_registration_land_registration_component__WEBPACK_IMPORTED_MODULE_14__["LandRegistrationComponent"],
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
                _components_lands_lands_component__WEBPACK_IMPORTED_MODULE_16__["LandsComponent"],
                _components_change_owner_change_owner_component__WEBPACK_IMPORTED_MODULE_17__["ChangeOwnerComponent"],
                _components_admin_registration_admin_registration_component__WEBPACK_IMPORTED_MODULE_18__["AdminRegistrationComponent"],
                _components_my_lands_my_lands_component__WEBPACK_IMPORTED_MODULE_19__["MyLandsComponent"],
                _components_create_ad_create_ad_component__WEBPACK_IMPORTED_MODULE_20__["CreateAdComponent"],
                _components_land_history_land_history_component__WEBPACK_IMPORTED_MODULE_21__["LandHistoryComponent"],
                _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_22__["AdsComponent"],
                _components_my_ads_my_ads_component__WEBPACK_IMPORTED_MODULE_23__["MyAdsComponent"],
                _components_divide_land_divide_land_component__WEBPACK_IMPORTED_MODULE_24__["DivideLandComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        headerName: 'x-auth',
                        whitelistedDomains: ['localhost:4000'],
                        blacklistedRoutes: ['example.com/examplebadroute/'],
                        authScheme: ''
                    }
                }),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_7__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var expectedRole = next.data.expectedRole;
        if (!expectedRole.includes(this.userService.user)) {
            alert('Access not allowed! Login with suitable credentials!');
            this.router.navigate(["/login"]);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/admin-registration/admin-registration.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin-registration/admin-registration.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <!-- Material form register -->\n      <div class=\"card\">\n\n          <div class=\"card-header text-center bg-info\">\n            <h5 class=\"text-light\">\n              <strong>Admin Registration</strong>\n            </h5>\n          </div>\n\n          <!--Card content-->\n          <div class=\"card-body\">\n\n            <!-- Form -->\n            <form style=\"color: #757575;\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n              <!-- First name -->\n              <div class=\"form-group\">\n                <label for=\"fn\">First name</label>\n                <input type=\"text\" id=\"fn\" class=\"form-control\" mdbInput [(ngModel)]=\"firstName\" name=\"firstName\"\n                  #fn=\"ngModel\" required pattern=\"^[A-Za-z]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"fn.touched && !fn.valid\">\n                  <small *ngIf=\"fn.errors.required\">First name is required!</small>\n                  <small *ngIf=\"fn.errors.pattern\">Invalid name!</small>\n                </div>\n              </div>\n\n              <!-- Last name -->\n              <div class=\"form-group\">\n                <label for=\"ln\">Last name</label>\n                <input type=\"text\" id=\"ln\" class=\"form-control\" mdbInput [(ngModel)]=\"lastName\" name=\"lastName\"\n                  #ln=\"ngModel\" required pattern=\"^[A-Za-z]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"ln.touched && !ln.valid\">\n                  <small *ngIf=\"ln.errors.required\">Last name is required!</small>\n                  <small *ngIf=\"ln.errors.pattern\">Invalid name!</small>\n                </div>\n              </div>\n\n              <!-- NIC -->\n              <div class=\"form-group\">\n                <label for=\"n\">NIC</label>\n                <input type=\"text\" id=\"n\" class=\"form-control\" mdbInput [(ngModel)]=\"nic\" name=\"nic\" #n=\"ngModel\"\n                  required pattern=\"^[0-9]{9}V$\">\n                <div class=\"form-text text-danger\" *ngIf=\"n.touched && !n.valid\">\n                  <small *ngIf=\"n.errors.required\">NIC is required!</small>\n                  <small *ngIf=\"n.errors.pattern\">Invalid NIC!</small>\n                </div>\n              </div>\n\n              <!-- email -->\n              <div class=\"form-group\">\n                <label for=\"e\">Email</label>\n                <input type=\"email\" id=\"e\" class=\"form-control\" mdbInput [(ngModel)]=\"email\" name=\"email\" #e=\"ngModel\"\n                  required pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\">\n                <div class=\"form-text text-danger\" *ngIf=\"e.touched && !e.valid\">\n                  <small *ngIf=\"e.errors.required\">Email is required!</small>\n                  <small *ngIf=\"e.errors.pattern\">Invalid email!</small>\n                </div>\n              </div>\n\n              <!-- Pasword -->\n              <div class=\"form-group\">\n                <label for=\"p\">Password</label>\n                <input type=\"password\" id=\"p\" class=\"form-control\" mdbInput [(ngModel)]=\"password\" name=\"password\"\n                  #p=\"ngModel\" required pattern=\"^.{6,}\">\n                <div class=\"form-text text-danger\" *ngIf=\"p.touched && !p.valid\">\n                  <small *ngIf=\"p.errors.required\">Password is required!</small>\n                  <small *ngIf=\"p.errors.pattern\">Password should have at least 6 characters!</small>\n                </div>\n              </div>\n\n              <!-- Pasword -->\n              <div class=\"form-group\">\n                <label for=\"p1\">Password(again)</label>\n                <input type=\"password\" id=\"p1\" class=\"form-control\" mdbInput [(ngModel)]=\"password1\" name=\"password1\"\n                  #p1=\"ngModel\" required pattern=\"^.{6,}\" [disabled]=\"!p.valid\">\n                <div class=\"form-text text-danger\" *ngIf=\"p1.touched && !p1.valid\">\n                  <small *ngIf=\"p1.errors.required\">Password is required!</small>\n                  <small *ngIf=\"p1.errors.pattern\">Password should have at least 6 characters!</small>\n                </div>\n                <div class=\"form-text text-danger\" *ngIf=\"p1.valid\">\n                  <small *ngIf=\"password!==password1\">Passwords are not equal!</small>\n                </div>\n              </div>\n\n\n              <!-- Sign up button -->\n              <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\"\n                [disabled]=\"!f.valid\">Register</button>\n\n            </form>\n            <!-- Form -->\n\n          </div>\n\n      </div>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin-registration/admin-registration.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin-registration/admin-registration.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-card {\n  align-self: auto; }\n\n.card {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcmVnaXN0cmF0aW9uL2FkbWluLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcmVnaXN0cmF0aW9uL2FkbWluLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1kYi1jYXJke1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/admin-registration/admin-registration.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin-registration/admin-registration.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegistrationComponent", function() { return AdminRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminRegistrationComponent = /** @class */ (function () {
    function AdminRegistrationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdminRegistrationComponent.prototype.ngOnInit = function () {
    };
    AdminRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var userData = {
            firstName: this.firstName,
            lastName: this.lastName,
            nic: this.nic,
            email: this.email,
            password: this.password
        };
        this.userService.registerAdmin(userData).subscribe(function (res) {
            _this.firstName = null;
            _this.lastName = null;
            _this.nic = null;
            _this.email = null;
            _this.password = null;
            _this.password1 = null;
            if (res.token) {
                alert("done");
                _this.router.navigate(["/"]);
            }
            else {
                alert("Server Error!");
            }
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    AdminRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-registration',
            template: __webpack_require__(/*! ./admin-registration.component.html */ "./src/app/components/admin-registration/admin-registration.component.html"),
            styles: [__webpack_require__(/*! ./admin-registration.component.scss */ "./src/app/components/admin-registration/admin-registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminRegistrationComponent);
    return AdminRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/ads/ads.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/ads/ads.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n          <div *ngIf=\"ads === undefined || ads.length == 0\" >\n              <div class=\"alert alert-danger\" role=\"alert\">\n                No ads to show\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-3\"></div>\n  </div>\n  <div class=\"row\">\n\n    <div *ngFor=\"let ad of ads\">\n\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"assets/land.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n\n          <h3 class=\"card-title\">{{ad.city}}</h3>\n          <h5 class=\"card-title\">{{ad.size}} perchs</h5>\n          <h5 class=\"card-title\">{{ad.price}}$</h5>\n          <p class=\"card-text\">Land ID:{{ad.landId}}</p>\n          <p class=\"card-text\">Owner:{{ad.ownerId}}</p>\n          <p class=\"card-text\">{{ad.description}}</p>\n          <p class=\"card-text\">Call {{ad.phone}} for more info</p>\n\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ads/ads.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/ads/ads.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 20px; }\n\n.alert {\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvYWRzL2Fkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRzL2Fkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIG1hcmdpbjogMjBweFxufVxuXG4uYWxlcnR7XG4gICAgbWFyZ2luOiAyMHB4XG59Il19 */"

/***/ }),

/***/ "./src/app/components/ads/ads.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/ads/ads.component.ts ***!
  \*************************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ad.service */ "./src/app/services/ad.service.ts");



var AdsComponent = /** @class */ (function () {
    function AdsComponent(adService) {
        this.adService = adService;
    }
    AdsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adService.getAllAds().subscribe(function (data) {
            _this.ads = data;
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    AdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(/*! ./ads.component.html */ "./src/app/components/ads/ads.component.html"),
            styles: [__webpack_require__(/*! ./ads.component.scss */ "./src/app/components/ads/ads.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_2__["AdService"]])
    ], AdsComponent);
    return AdsComponent;
}());



/***/ }),

/***/ "./src/app/components/change-owner/change-owner.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/change-owner/change-owner.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n\n          <div class=\"card-header text-center bg-info\">\n            <h5 class=\"text-light\">\n              <strong>Change owner</strong>\n            </h5>\n          </div>\n\n\n          <!--Card content-->\n          <div class=\"card-body\">\n\n            <!-- Form -->\n            <form  style=\"color: #757575;\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n              <!-- Land id -->\n              <div class=\"form-group\">\n                <label for=\"fn\">Land ID</label>\n                <input type=\"text\" id=\"fn\" class=\"form-control\" mdbInput [(ngModel)]=\"landId\" name=\"landId\"\n                  #fn=\"ngModel\" required pattern=\"^[0-9]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"fn.touched && !fn.valid\">\n                  <small *ngIf=\"fn.errors.required\">Land ID is required!</small>\n                  <small *ngIf=\"fn.errors.pattern\">Invalid ID!</small>\n                </div>\n              </div>\n\n              <!-- Owner NIC -->\n              <div class=\"form-group\">\n                <label for=\"ln\">New owner's NIC</label>\n                <input type=\"text\" id=\"ln\" class=\"form-control\" mdbInput [(ngModel)]=\"newOwnerId\" name=\"newOwnerId\"\n                  #ln=\"ngModel\" required pattern=\"^[0-9]{9}V$\">\n                <div class=\"form-text text-danger\" *ngIf=\"ln.touched && !ln.valid\">\n                  <small *ngIf=\"ln.errors.required\">NIC is required!</small>\n                  <small *ngIf=\"ln.errors.pattern\">Invalid NIC!</small>\n                </div>\n              </div>\n\n              <!-- Register button-->\n              <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\" [disabled]=\"!f.valid\">Change</button>\n              <!-- Register -->\n\n            </form>\n            <!-- Form -->\n\n          </div>\n\n      </div>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/change-owner/change-owner.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/change-owner/change-owner.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-card {\n  align-self: auto; }\n\n.card {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLW93bmVyL2NoYW5nZS1vd25lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhbmdlLW93bmVyL2NoYW5nZS1vd25lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1kYi1jYXJke1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/change-owner/change-owner.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/change-owner/change-owner.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangeOwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeOwnerComponent", function() { return ChangeOwnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blockchain.service */ "./src/app/services/blockchain.service.ts");



var ChangeOwnerComponent = /** @class */ (function () {
    function ChangeOwnerComponent(bService) {
        this.bService = bService;
    }
    ChangeOwnerComponent.prototype.ngOnInit = function () {
    };
    ChangeOwnerComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            landId: this.landId,
            newOwnerId: this.newOwnerId
        };
        this.bService.changeOwner(data).subscribe(function (res) {
            _this.landId = null;
            _this.newOwnerId = null;
            alert("done");
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    ChangeOwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-owner',
            template: __webpack_require__(/*! ./change-owner.component.html */ "./src/app/components/change-owner/change-owner.component.html"),
            styles: [__webpack_require__(/*! ./change-owner.component.scss */ "./src/app/components/change-owner/change-owner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], ChangeOwnerComponent);
    return ChangeOwnerComponent;
}());



/***/ }),

/***/ "./src/app/components/create-ad/create-ad.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/create-ad/create-ad.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <!-- Material form register -->\n      <div class=\"card\">\n\n          <div class=\"card-header text-center bg-info\">\n            <h5 class=\"text-light\">\n              <strong>Create Advertisment</strong>\n            </h5>\n          </div>\n\n          <!--Card content--> \n          <div class=\"card-body\">\n\n            <!-- Form -->\n            <form style=\"color: #757575;\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n              <!-- Land Id -->\n              <div class=\"form-group\">\n                <label for=\"id\">Land ID</label>\n                <input type=\"text\" id=\"id\" class=\"form-control\" mdbInput [(ngModel)]=\"landId\" name=\"landId\"\n                  #id=\"ngModel\" required pattern=\"^[0-9]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"id.touched && !id.valid\">\n                  <small *ngIf=\"id.errors.required\">Land ID is required!</small>\n                  <small *ngIf=\"id.errors.pattern\">ID should contains only numbers!</small>\n                </div>\n              </div>\n\n              <!-- Size -->\n              <div class=\"form-group\">\n                <label for=\"size1\">Land size in perchs(Use whole numbers only)</label>\n                <input type=\"text\" id=\"size1\" class=\"form-control\" mdbInput [(ngModel)]=\"size\" name=\"size\"\n                  #size1=\"ngModel\" required pattern=\"^[0-9]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"size1.touched && !size1.valid\">\n                  <small *ngIf=\"size1.errors.required\">Size is required!</small>\n                  <small *ngIf=\"size1.errors.pattern\">Size should contains only numbers!</small>\n                </div>\n              </div>\n\n              <!-- Phone -->\n              <div class=\"form-group\">\n                <label for=\"phone1\">Contact Number</label>\n                <input type=\"text\" id=\"phone1\" class=\"form-control\" mdbInput [(ngModel)]=\"phone\" name=\"phone\"\n                  #phone1=\"ngModel\" required pattern=\"^[0-9]{10}$\">\n                <div class=\"form-text text-danger\" *ngIf=\"phone1.touched && !phone1.valid\">\n                  <small *ngIf=\"phone1.errors.required\">Contact number is required!</small>\n                  <small *ngIf=\"phone1.errors.pattern\">Invalid phone number!</small>\n                </div>\n              </div>\n\n              <!-- Price -->\n              <div class=\"form-group\">\n                <label for=\"price1\">Price in LKR</label>\n                <input type=\"text\" id=\"price1\" class=\"form-control\" mdbInput [(ngModel)]=\"price\" name=\"price\"\n                  #price1=\"ngModel\" required pattern=\"^[0-9]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"price1.touched && !price1.valid\">\n                  <small *ngIf=\"price1.errors.required\">Price is required!</small>\n                  <small *ngIf=\"price1.errors.pattern\">Invalid price!</small>\n                </div>\n              </div>\n\n              <!-- City -->\n              <div class=\"form-group\">\n                <label for=\"city1\">City</label>\n                <input type=\"text\" id=\"city1\" class=\"form-control\" mdbInput [(ngModel)]=\"city\" name=\"city\" #city1=\"ngModel\" required pattern=\"^[A-Za-z]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"city1.touched && !city1.valid\">\n                  <small *ngIf=\"city1.errors.required\">City is required!</small>\n                  <small *ngIf=\"city1.errors.pattern\">Invalid city!</small>\n                </div>\n              </div>\n\n              <!-- Sign up button -->\n              <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\" [disabled]=\"!f.valid\">Create AD</button>\n\n            </form>\n            <!-- Form -->\n\n          </div>\n          \n      </div>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create-ad/create-ad.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/create-ad/create-ad.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-card {\n  align-self: auto; }\n\n.card {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWFkL2NyZWF0ZS1hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWFkL2NyZWF0ZS1hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1kYi1jYXJke1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/create-ad/create-ad.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/create-ad/create-ad.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateAdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdComponent", function() { return CreateAdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ad.service */ "./src/app/services/ad.service.ts");



var CreateAdComponent = /** @class */ (function () {
    function CreateAdComponent(adService) {
        this.adService = adService;
    }
    CreateAdComponent.prototype.ngOnInit = function () {
    };
    CreateAdComponent.prototype.onSubmit = function () {
        var _this = this;
        var adData = {
            landId: this.landId,
            size: this.size,
            phone: this.phone,
            price: this.price,
            city: this.city
        };
        this.adService.post(adData).subscribe(function (res) {
            alert('done');
            _this.landId = null;
            _this.size = null;
            _this.phone = null;
            _this.price = null;
            _this.city = null;
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    CreateAdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-ad',
            template: __webpack_require__(/*! ./create-ad.component.html */ "./src/app/components/create-ad/create-ad.component.html"),
            styles: [__webpack_require__(/*! ./create-ad.component.scss */ "./src/app/components/create-ad/create-ad.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_2__["AdService"]])
    ], CreateAdComponent);
    return CreateAdComponent;
}());



/***/ }),

/***/ "./src/app/components/divide-land/divide-land.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/divide-land/divide-land.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n       \n\n          <div class=\"card-header text-center bg-info\">\n            <h5 class=\"text-light\">\n              <strong>Sign In</strong>\n            </h5>\n          </div>\n\n\n          <!--Card content-->\n          <div class=\"card-body\">\n\n            <!-- Form -->\n            <form style=\"color: #757575;\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n              <!-- Land ID -->\n              <div class=\"form-group\">\n                <label for=\"id\">Land Id</label>\n                <input type=\"text\" name=\"id\" id=\"id\" class=\"form-control\" mdbInput [(ngModel)]=\"id\" #id1=\"ngModel\" required pattern=\"^[0-9]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"id1.touched && !id1.valid\">\n                  <small *ngIf=\"nic1.errors.required\">Land id is required!</small>\n                  <small *ngIf=\"nic1.errors.pattern\">Invalid id!</small>\n                </div>\n              </div>\n\n\n              <!-- New Ids-->\n              <div class=\"form-group\">\n                <label for=\"materialLoginFormPassword\">Enter new land id's seperated by comma's</label>\n                <input type=\"text\" name=\"newIds\" id=\"pass\" class=\"form-control\" mdbInput [(ngModel)]=\"newIds\" #pass=\"ngModel\" required pattern=\"^([0-9]+,[0-9]+)(,[0-9]+)*\">\n                <div class=\"form-text text-danger\" *ngIf=\"pass.touched && !pass.valid\">\n                  <small *ngIf=\"pass.errors.required\">New Id's are required!</small>\n                  <small *ngIf=\"pass.errors.pattern\">Invalid input!</small>\n                </div>\n              </div>\n\n              <!-- Sign in button -->\n              <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\" [disabled]=\"!f.valid\">Divide</button>\n              <!-- Register -->\n\n            </form>\n            <!-- Form -->\n\n          </div>\n\n   \n\n      </div>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/divide-land/divide-land.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/divide-land/divide-land.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-card {\n  align-self: auto; }\n\n.card {\n  margin-top: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvZGl2aWRlLWxhbmQvZGl2aWRlLWxhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RpdmlkZS1sYW5kL2RpdmlkZS1sYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWRiLWNhcmR7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLXRvcDogMjAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/divide-land/divide-land.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/divide-land/divide-land.component.ts ***!
  \*****************************************************************/
/*! exports provided: DivideLandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivideLandComponent", function() { return DivideLandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blockchain.service */ "./src/app/services/blockchain.service.ts");



var DivideLandComponent = /** @class */ (function () {
    function DivideLandComponent(bService) {
        this.bService = bService;
    }
    DivideLandComponent.prototype.ngOnInit = function () {
    };
    DivideLandComponent.prototype.onSubmit = function () {
        var _this = this;
        var nIds = this.newIds.split(",");
        var valid = true;
        nIds.forEach(function (e1) {
            var count = 0;
            nIds.forEach(function (e2) {
                if (e1 === e2) {
                    count++;
                }
            });
            if (count > 1) {
                valid = false;
            }
        });
        if (!valid) {
            alert('Two new land id\'s cannot be equal');
            this.newIds = null;
        }
        else {
            var data = {
                landId: this.id,
                newIds: nIds
            };
            this.bService.divideLand(data).subscribe(function (res) {
                _this.id = null;
                _this.newIds = null;
                alert("done");
            }, function (e) {
                if (e.error instanceof ProgressEvent) {
                    alert('An error occurred!');
                }
                else {
                    alert(e.error.message);
                }
            });
        }
    };
    DivideLandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-divide-land',
            template: __webpack_require__(/*! ./divide-land.component.html */ "./src/app/components/divide-land/divide-land.component.html"),
            styles: [__webpack_require__(/*! ./divide-land.component.scss */ "./src/app/components/divide-land/divide-land.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], DivideLandComponent);
    return DivideLandComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!this.userService.user\">\n  <app-login></app-login>\n</div>\n\n  <div *ngIf=\"this.userService.user==='user'\">\n        <app-ads></app-ads>\n  </div>\n\n\n<div *ngIf=\"this.userService.user==='admin'\">\n  <div class=\"admin\">\n    <h1>Admin Panel</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center; }\n\n.admin {\n  text-align: center;\n  padding-top: 25%;\n  padding-bottom: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZG1pbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDI1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/land-history/land-history.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/land-history/land-history.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n\n      <form class=\"form-inline\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group mx-sm-3 mb-2\">\n          <label for=\"id\" class=\"sr-only\">Password</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"ID\" [(ngModel)]=\"landId\" name=\"landId\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Get History</button>\n      </form>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n\n      <ng-flash-message></ng-flash-message>\n\n      <div *ngIf=\"previousLand\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          This land is divided from Land No-{{previousLand}}.\n          <br />\n          Search for Land No-{{previousLand}} to get more history.\n        </div>\n      </div>\n\n      <ul class=\"list-group\">\n        <div *ngIf=\"lands\">\n          <div *ngIf=\"!previousLand\">\n            <li class=\"list-group-item list-group-item-danger\">\n              End of History!\n            </li>\n          </div>\n        </div>\n        <div *ngFor=\"let land of lands;index as i\">\n          <li class=\"list-group-item list-group-item-success\" *ngIf=\"land.status!=='DIVIDED'\">\n            owner {{i+1}} --> {{land.owner.slice(-10,-1)}}V\n            <br />\n            registered time: {{land.regTime}}\n          </li>\n        </div>\n      </ul>\n\n      <div *ngIf=\"currentOwner\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          Current owner is {{currentOwner}}\n          <br />\n          End of History!\n        </div>\n      </div>\n\n      <div *ngIf=\"childLands\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          This land has divided into following lands.\n          <div *ngFor=\"let id of childLands\">\n            Land ID --> {{id}}\n          </div> \n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/land-history/land-history.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/land-history/land-history.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\n  padding-top: 10%;\n  padding-bottom: 10%; }\n\n.list-group-item {\n  margin: 10px; }\n\n.form-inline {\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZC1oaXN0b3J5L2xhbmQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksYUFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kLWhpc3RvcnkvbGFuZC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubGlzdC1ncm91cHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZm9ybS1pbmxpbmV7XG4gICAgcGFkZGluZzoxMHB4XG59Il19 */"

/***/ }),

/***/ "./src/app/components/land-history/land-history.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/land-history/land-history.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandHistoryComponent", function() { return LandHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blockchain.service */ "./src/app/services/blockchain.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




var LandHistoryComponent = /** @class */ (function () {
    function LandHistoryComponent(bService, ngf) {
        this.bService = bService;
        this.ngf = ngf;
    }
    LandHistoryComponent.prototype.ngOnInit = function () {
    };
    LandHistoryComponent.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            landId: this.landId,
        };
        this.bService.getLandHistory(data).subscribe(function (res) {
            _this.previousLand = null;
            _this.lands = null;
            _this.currentOwner = null;
            _this.childLands = null;
            _this.lands = res;
            if (_this.lands[0].previousLand) {
                _this.previousLand = _this.lands[0].previousLand.split("#")[1];
            }
            if (_this.lands[_this.lands.length - 1].status === "VALID") {
                _this.currentOwner = _this.lands[_this.lands.length - 1].owner.split("#")[1];
            }
            if (_this.lands[_this.lands.length - 1].childLands) {
                _this.childLands = _this.lands[_this.lands.length - 1].childLands;
            }
        }, function (e) {
            _this.previousLand = null;
            _this.lands = null;
            _this.currentOwner = null;
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                _this.ngf.showFlashMessage({
                    messages: ["History not available!"],
                    dismissible: true,
                    timeout: 2000,
                    type: 'danger'
                });
            }
        });
    };
    LandHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-land-history',
            template: __webpack_require__(/*! ./land-history.component.html */ "./src/app/components/land-history/land-history.component.html"),
            styles: [__webpack_require__(/*! ./land-history.component.scss */ "./src/app/components/land-history/land-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], LandHistoryComponent);
    return LandHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/land-registration/land-registration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/land-registration/land-registration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n       \n\n          <div class=\"card-header text-center bg-info\">\n            <h5 class=\"text-light\">\n              <strong>Land Registration</strong>\n            </h5>\n          </div>\n\n\n          <!--Card content-->\n          <div class=\"card-body\">\n\n            <!-- Form -->\n            <form style=\"color: #757575;\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n              <!-- Land id -->\n              <div class=\"form-group\">\n                <label for=\"fn\">Land ID</label>\n                <input type=\"text\" id=\"fn\" class=\"form-control\" mdbInput [(ngModel)]=\"landId\" name=\"landId\"\n                  #fn=\"ngModel\" required pattern=\"^[0-9]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"fn.touched && !fn.valid\">\n                  <small *ngIf=\"fn.errors.required\">Land ID is required!</small>\n                  <small *ngIf=\"fn.errors.pattern\">Invalid ID!</small>\n                </div>\n              </div>\n\n\n              <!-- Owner NIC -->\n              <div class=\"form-group\">\n                <label for=\"ln\">Owner NIC</label>\n                <input type=\"text\" id=\"ln\" class=\"form-control\" mdbInput [(ngModel)]=\"ownerNIC\" name=\"ownerNIC\"\n                  #ln=\"ngModel\" required pattern=\"^[0-9]{9}V$\">\n                <div class=\"form-text text-danger\" *ngIf=\"ln.touched && !ln.valid\">\n                  <small *ngIf=\"ln.errors.required\">Owner NIC is required!</small>\n                  <small *ngIf=\"ln.errors.pattern\">Invalid NIC!</small>\n                </div>\n              </div>\n\n\n              <!-- Registration button -->\n              <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\"\n                [disabled]=\"!f.valid\">Register</button>\n              <!-- Register -->\n              <p>\n                Register land in the blockchain\n              </p>\n\n            </form>\n            <!-- Form -->\n\n          </div>\n\n      </div>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/land-registration/land-registration.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/land-registration/land-registration.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-card {\n  align-self: auto; }\n\n.card {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZC1yZWdpc3RyYXRpb24vbGFuZC1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmQtcmVnaXN0cmF0aW9uL2xhbmQtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWRiLWNhcmR7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/land-registration/land-registration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/land-registration/land-registration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LandRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandRegistrationComponent", function() { return LandRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/blockchain.service */ "./src/app/services/blockchain.service.ts");



var LandRegistrationComponent = /** @class */ (function () {
    function LandRegistrationComponent(bService) {
        this.bService = bService;
    }
    LandRegistrationComponent.prototype.ngOnInit = function () {
    };
    LandRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var landData = {
            id: this.landId,
            ownerId: this.ownerNIC,
        };
        this.bService.registerLand(landData).subscribe(function (res) {
            _this.landId = null;
            _this.ownerNIC = null;
            alert("done");
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    LandRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-land-registration',
            template: __webpack_require__(/*! ./land-registration.component.html */ "./src/app/components/land-registration/land-registration.component.html"),
            styles: [__webpack_require__(/*! ./land-registration.component.scss */ "./src/app/components/land-registration/land-registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], LandRegistrationComponent);
    return LandRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/lands/lands.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/lands/lands.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <ul class=\"list-group\">\n        <div *ngFor=\"let land of lands\">\n          <li class=\"list-group-item list-group-item-success\">\n            id: {{land.id}}\n            <br />\n            owner: {{land.owner.slice(-10,-1)}}\n            <br />\n            registered time: {{land.regTime}}\n            <br />\n            status: {{land.status}}\n          </li>\n        </div>\n        <div *ngIf=\"lands === undefined || lands.length == 0\">\n          <div class=\"alert alert-danger\" role=\"alert\">\n            No registered lands!\n          </div>\n        </div>\n      </ul>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/lands/lands.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/lands/lands.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\n  padding-top: 10%;\n  padding-bottom: 10%; }\n\n.list-group-item {\n  margin: 10px; }\n\n.card {\n  margin: 10px;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZHMvbGFuZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixhQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRzL2xhbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubGlzdC1ncm91cHtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzoxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/lands/lands.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/lands/lands.component.ts ***!
  \*****************************************************/
/*! exports provided: LandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandsComponent", function() { return LandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



var LandsComponent = /** @class */ (function () {
    function LandsComponent(bService) {
        this.bService = bService;
    }
    LandsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bService.getLands().subscribe(function (res) {
            _this.lands = res;
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    LandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lands',
            template: __webpack_require__(/*! ./lands.component.html */ "./src/app/components/lands/lands.component.html"),
            styles: [__webpack_require__(/*! ./lands.component.scss */ "./src/app/components/lands/lands.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], LandsComponent);
    return LandsComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <!--Navbar-->\n  <mdb-navbar SideClass=\"navbar navbar-expand-xl navbar-dark info-color-dark\" style=\"opacity: 0.5;\">\n\n    <!-- Navbar brand -->\n    <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">\n        <mdb-icon fas icon=\"link\"></mdb-icon>Land Chain\n      </a></mdb-navbar-brand>\n\n    <!-- Collapsible content -->\n    <links>\n\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='admin'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/adminRegistration\" mdbWavesEffect>Admin-Registration</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='admin'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/landRegistration\" mdbWavesEffect>Land-Registration</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='admin'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/changeOwner\" mdbWavesEffect>Change-Owner</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='admin'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/divideLand\" mdbWavesEffect>Divide-Land</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='admin'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/users\" mdbWavesEffect>Users</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='admin'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/lands\" mdbWavesEffect>Lands</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='user'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/myLands\" mdbWavesEffect>My-Lands</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='user'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/createAd\" mdbWavesEffect>Create-Advertisment</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='user'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/landHistory\" mdbWavesEffect>Check-Land-History</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"this.userService.user==='user'\" routerLinkActive=\"active\">\n          <a class=\"nav-link waves-light\" routerLink=\"/myAds\" mdbWavesEffect>My-Ads</a>\n        </li>\n        \n      </ul>\n\n      <div *ngIf=\"this.userService.user\">\n        <ul class=\"navbar-nav\">\n\n          <h5 class=\" nav-link waves-light\">{{this.userService.nic}}</h5>\n\n\n          <li class=\"nav-item dropdown\" dropdown>\n            <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              <mdb-icon fas icon=\"user\"></mdb-icon><span class=\"caret\"></span>\n            </a>\n            <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"logout()\">Logout</a>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n      <!-- Links -->\n\n\n    </links>\n    <!-- Collapsible content -->\n\n  </mdb-navbar>\n  <!--/.Navbar-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/layout/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n       \n\n          <div class=\"card-header text-center bg-info\">\n            <h5 class=\"text-light\">\n              <strong>Sign In</strong>\n            </h5>\n          </div>\n\n\n          <!--Card content-->\n          <div class=\"card-body\">\n\n            <!-- Form -->\n            <form style=\"color: #757575;\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n              <!-- NIC -->\n              <div class=\"form-group\">\n                <label for=\"nic\">NIC</label>\n                <input type=\"text\" name=\"nic\" id=\"nic\" class=\"form-control\" mdbInput [(ngModel)]=\"nic\" #nic1=\"ngModel\" required pattern=\"^[0-9]{9}V$\">\n                <div class=\"form-text text-danger\" *ngIf=\"nic1.touched && !nic1.valid\">\n                  <small *ngIf=\"nic1.errors.required\">NIC is required!</small>\n                  <small *ngIf=\"nic1.errors.pattern\">Invalid NIC format!</small>\n                </div>\n              </div>\n\n\n              <!-- Password -->\n              <div class=\"form-group\">\n                <label for=\"materialLoginFormPassword\">Password</label>\n                <input type=\"password\" name=\"password\" id=\"pass\" class=\"form-control\" mdbInput [(ngModel)]=\"password\" #pass=\"ngModel\" required pattern=\"^.{6,}\">\n                <div class=\"form-text text-danger\" *ngIf=\"pass.touched && !pass.valid\">\n                  <small *ngIf=\"pass.errors.required\">Password is required!</small>\n                  <small *ngIf=\"pass.errors.pattern\">Password should have at least 6 characters!</small>\n                </div>\n              </div>\n\n              <div class=\"d-flex justify-content-around\">\n                <div>\n                  <!-- Forgot password -->\n                  <a href=\"\">Forgot password?</a>\n                </div>\n              </div>\n\n              <!-- Sign in button -->\n              <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\" [disabled]=\"!f.valid\">Sign in</button>\n              <!-- Register -->\n\n              <p>Not a member?\n                <a routerLink=\"/signup\">Signup</a>\n              </p>\n\n            </form>\n            <!-- Form -->\n\n          </div>\n\n   \n\n      </div>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-card {\n  align-self: auto; }\n\n.card {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWRiLWNhcmR7XG4gICAgYWxpZ24tc2VsZjogYXV0bztcbn1cblxuLmNhcmR7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var logindata = {
            nic: this.nic,
            password: this.password
        };
        this.userService.auth(logindata).subscribe(function (data) {
            if (data.token) {
                localStorage.setItem('token', data.token);
                _this.router.navigate(['/']);
            }
            else {
                alert("Server error");
            }
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my-ads/my-ads.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/my-ads/my-ads.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div *ngIf=\"ads === undefined || ads.length == 0\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          You have no posted Ads\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n\n  <div class=\"row\">\n\n\n\n    <div *ngFor=\"let ad of ads\">\n\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"assets/land.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n\n          <h3 class=\"card-title\">{{ad.city}}</h3>\n          <h5 class=\"card-title\">{{ad.size}} perchs</h5>\n          <h5 class=\"card-title\">{{ad.price}}$</h5>\n          <p class=\"card-text\">Land ID:{{ad.landId}}</p>\n          <p class=\"card-text\">Owner:{{ad.ownerId}}</p>\n          <p class=\"card-text\">{{ad.description}}</p>\n          <p class=\"card-text\">Call {{ad.phone}} for more info</p>\n\n          <button (click)=\"delete(ad._id)\" class=\"btn btn-primary\" [disabled]=\"!ad.status==='active'\">Delete</button>\n\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-ads/my-ads.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/my-ads/my-ads.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 20px; }\n\n.alert {\n  margin: 20px; }\n\n.flash {\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbXktYWRzL215LWFkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQ0osRUFBQTs7QUFFQTtFQUNJLFlBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktYWRzL215LWFkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIG1hcmdpbjogMjBweFxufVxuXG4uYWxlcnR7XG4gICAgbWFyZ2luOiAyMHB4XG59XG5cbi5mbGFzaHtcbiAgICBtYXJnaW46IDIwcHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/my-ads/my-ads.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/my-ads/my-ads.component.ts ***!
  \*******************************************************/
/*! exports provided: MyAdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAdsComponent", function() { return MyAdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ad.service */ "./src/app/services/ad.service.ts");



var MyAdsComponent = /** @class */ (function () {
    function MyAdsComponent(adService) {
        this.adService = adService;
    }
    MyAdsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adService.getMyAds().subscribe(function (res) {
            _this.ads = res;
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    MyAdsComponent.prototype.delete = function (id) {
        var _this = this;
        if (confirm("Do you want to delete this ad?\nThis cannot be undone")) {
            this.adService.delete(id).subscribe(function (res) {
                _this.ads = _this.ads.filter(function (ad) { return ad._id == id; });
                _this.ngOnInit();
            }, function (e) {
                if (e.error instanceof ProgressEvent) {
                    alert('An error occurred!');
                }
                else {
                    alert(e.error.message);
                }
            });
        }
    };
    MyAdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-ads',
            template: __webpack_require__(/*! ./my-ads.component.html */ "./src/app/components/my-ads/my-ads.component.html"),
            styles: [__webpack_require__(/*! ./my-ads.component.scss */ "./src/app/components/my-ads/my-ads.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ad_service__WEBPACK_IMPORTED_MODULE_2__["AdService"]])
    ], MyAdsComponent);
    return MyAdsComponent;
}());



/***/ }),

/***/ "./src/app/components/my-lands/my-lands.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/my-lands/my-lands.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <ul class=\"list-group\">\n          <div *ngFor=\"let land of lands\">\n              <li class=\"list-group-item list-group-item-success\">\n                id:  {{land.id}}\n                <br/>\n                registered time: {{land.regTime}}\n                <br/>\n                status: {{land.status}}\n              </li>\n          </div>\n          <div *ngIf=\"lands === undefined || lands.length == 0\" >\n            <div class=\"alert alert-danger\" role=\"alert\">\n              You have no registered lands!\n            </div>\n          </div>\n        </ul>\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/my-lands/my-lands.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/my-lands/my-lands.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\n  padding-top: 25%;\n  padding-bottom: 25%; }\n\n.list-group-item {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvbXktbGFuZHMvbXktbGFuZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1sYW5kcy9teS1sYW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxpc3QtZ3JvdXB7XG4gICAgcGFkZGluZy10b3A6IDI1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICAgIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/my-lands/my-lands.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/my-lands/my-lands.component.ts ***!
  \***********************************************************/
/*! exports provided: MyLandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyLandsComponent", function() { return MyLandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



var MyLandsComponent = /** @class */ (function () {
    function MyLandsComponent(bService) {
        this.bService = bService;
    }
    MyLandsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bService.getLandsOfUser().subscribe(function (res) {
            _this.lands = res;
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    MyLandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-lands',
            template: __webpack_require__(/*! ./my-lands.component.html */ "./src/app/components/my-lands/my-lands.component.html"),
            styles: [__webpack_require__(/*! ./my-lands.component.scss */ "./src/app/components/my-lands/my-lands.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], MyLandsComponent);
    return MyLandsComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <!-- Material form register -->\n      <div class=\"card\">\n\n          <div class=\"card-header text-center bg-info\">\n            <h5 class=\"text-light\">\n              <strong>Sign up</strong>\n            </h5>\n          </div>\n\n          <!--Card content-->\n          <div class=\"card-body\">\n\n            <!-- Form -->\n            <form style=\"color: #757575;\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n\n              <!-- First name -->\n              <div class=\"form-group\">\n                <label for=\"fn\">First name</label>\n                <input type=\"text\" id=\"fn\" class=\"form-control\" mdbInput [(ngModel)]=\"firstName\" name=\"firstName\"\n                  #fn=\"ngModel\" required pattern=\"^[A-Za-z]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"fn.touched && !fn.valid\">\n                  <small *ngIf=\"fn.errors.required\">First name is required!</small>\n                  <small *ngIf=\"fn.errors.pattern\">Invalid name!</small>\n                </div>\n              </div>\n\n              <!-- Last name -->\n              <div class=\"form-group\">\n                <label for=\"ln\">Last name</label>\n                <input type=\"text\" id=\"ln\" class=\"form-control\" mdbInput [(ngModel)]=\"lastName\" name=\"lastName\"\n                  #ln=\"ngModel\" required pattern=\"^[A-Za-z]+$\">\n                <div class=\"form-text text-danger\" *ngIf=\"ln.touched && !ln.valid\">\n                  <small *ngIf=\"ln.errors.required\">Last name is required!</small>\n                  <small *ngIf=\"ln.errors.pattern\">Invalid name!</small>\n                </div>\n              </div>\n\n              <!-- NIC -->\n              <div class=\"form-group\">\n                <label for=\"n\">NIC</label>\n                <input type=\"text\" id=\"n\" class=\"form-control\" mdbInput [(ngModel)]=\"nic\" name=\"nic\" #n=\"ngModel\"\n                  required pattern=\"^[0-9]{9}V$\">\n                <div class=\"form-text text-danger\" *ngIf=\"n.touched && !n.valid\">\n                  <small *ngIf=\"n.errors.required\">NIC is required!</small>\n                  <small *ngIf=\"n.errors.pattern\">Invalid NIC!</small>\n                </div>\n              </div>\n\n              <!-- email -->\n              <div class=\"form-group\">\n                <label for=\"e\">Email</label>\n                <input type=\"email\" id=\"e\" class=\"form-control\" mdbInput [(ngModel)]=\"email\" name=\"email\" #e=\"ngModel\"\n                  required pattern=\"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$\">\n                <div class=\"form-text text-danger\" *ngIf=\"e.touched && !e.valid\">\n                  <small *ngIf=\"e.errors.required\">Email is required!</small>\n                  <small *ngIf=\"e.errors.pattern\">Invalid email!</small>\n                </div>\n              </div>\n\n              <!-- Pasword -->\n              <div class=\"form-group\">\n                <label for=\"p\">Password</label>\n                <input type=\"password\" id=\"p\" class=\"form-control\" mdbInput [(ngModel)]=\"password\" name=\"password\"\n                  #p=\"ngModel\" required pattern=\"^.{6,}\">\n                <div class=\"form-text text-danger\" *ngIf=\"p.touched && !p.valid\">\n                  <small *ngIf=\"p.errors.required\">Password is required!</small>\n                  <small *ngIf=\"p.errors.pattern\">Password should have at least 6 characters!</small>\n                </div>\n              </div>\n\n              <!-- Pasword -->\n              <div class=\"form-group\">\n                <label for=\"p1\">Password(again)</label>\n                <input type=\"password\" id=\"p1\" class=\"form-control\" mdbInput [(ngModel)]=\"password1\" name=\"password1\"\n                  #p1=\"ngModel\" required pattern=\"^.{6,}\" [disabled]=\"!p.valid\">\n                <div class=\"form-text text-danger\" *ngIf=\"p1.touched && !p1.valid\">\n                  <small *ngIf=\"p1.errors.required\">Password is required!</small>\n                  <small *ngIf=\"p1.errors.pattern\">Password should have at least 6 characters!</small>\n                </div>\n                <div class=\"form-text text-danger\" *ngIf=\"p1.valid\">\n                  <small *ngIf=\"password!==password1\">Passwords are not equal!</small>\n                </div>\n              </div>\n\n              <!-- Sign up button -->\n              <button mdbBtn color=\"info\" block=\"true\" class=\"my-4\" type=\"submit\"\n                [disabled]=\"!f.valid || password!==password1\">Sign Up</button>\n\n            </form>\n            <!-- Form -->\n\n          </div>\n\n      </div>\n\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-card {\n  align-self: auto; }\n\n.card {\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1kYi1jYXJke1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG59XG5cbi5jYXJke1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var userData = {
            firstName: this.firstName,
            lastName: this.lastName,
            nic: this.nic,
            email: this.email,
            password: this.password
        };
        this.userService.signup(userData).subscribe(function (res) {
            _this.firstName = null;
            _this.lastName = null;
            _this.nic = null;
            _this.email = null;
            _this.password = null;
            _this.password1 = null;
            if (res.token) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['/']);
            }
            else {
                alert("Server Error!");
            }
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/components/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <ul class=\"list-group\">\n        <div *ngFor=\"let user of users\">\n            <li class=\"list-group-item list-group-item-success\">{{user.NIC}}</li>\n        </div>\n        <div *ngIf=\"users === undefined || users.length == 0\" >\n          <div class=\"alert alert-danger\" role=\"alert\">\n            No registered users!\n          </div>\n        </div>\n      </ul>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\n  padding-top: 25%;\n  padding-bottom: 25%; }\n\n.list-group-item {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lzdXJ1L1Byb2plY3RzL0xhbmRDaGFpbi1Gcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxpc3QtZ3JvdXB7XG4gICAgcGFkZGluZy10b3A6IDI1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICAgIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/blockchain.service */ "./src/app/services/blockchain.service.ts");



var UsersComponent = /** @class */ (function () {
    function UsersComponent(bService) {
        this.bService = bService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bService.getUsers().subscribe(function (res) {
            _this.users = res;
            console.log(res);
        }, function (e) {
            if (e.error instanceof ProgressEvent) {
                alert('An error occurred!');
            }
            else {
                alert(e.error.message);
            }
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_blockchain_service__WEBPACK_IMPORTED_MODULE_2__["BlockchainService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/services/ad.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/ad.service.ts ***!
  \****************************************/
/*! exports provided: AdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdService", function() { return AdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AdService = /** @class */ (function () {
    function AdService(http) {
        this.http = http;
    }
    AdService.prototype.getAllAds = function () {
        var url = 'http://localhost:4000/api/ads';
        return this.http.get(url, httpOptions);
    };
    AdService.prototype.getMyAds = function () {
        var url = 'http://localhost:4000/api/ads/my';
        return this.http.get(url, httpOptions);
    };
    AdService.prototype.delete = function (id) {
        var url = "http://localhost:4000/api/ads/" + id;
        return this.http.delete(url, httpOptions);
    };
    AdService.prototype.post = function (adData) {
        var url = 'http://localhost:4000/api/ads';
        var data = JSON.stringify(adData);
        return this.http.post(url, data, httpOptions);
    };
    AdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AdService);
    return AdService;
}());



/***/ }),

/***/ "./src/app/services/blockchain.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/blockchain.service.ts ***!
  \************************************************/
/*! exports provided: BlockchainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockchainService", function() { return BlockchainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var BlockchainService = /** @class */ (function () {
    function BlockchainService(http) {
        this.http = http;
    }
    BlockchainService.prototype.getUsers = function () {
        var url = 'http://localhost:4000/api/blockchain/users';
        return this.http.get(url, httpOptions);
    };
    BlockchainService.prototype.getLands = function () {
        var url = 'http://localhost:4000/api/blockchain/lands';
        return this.http.get(url, httpOptions);
    };
    BlockchainService.prototype.getLandsOfUser = function () {
        var url = 'http://localhost:4000/api/blockchain/landsOfUser';
        return this.http.get(url, httpOptions);
    };
    BlockchainService.prototype.changeOwner = function (ownerData) {
        var url = 'http://localhost:4000/api/blockchain/changeOwner';
        var data = JSON.stringify(ownerData);
        return this.http.post(url, data, httpOptions);
    };
    BlockchainService.prototype.registerLand = function (landData) {
        var url = 'http://localhost:4000/api/blockchain/registerLand';
        var data = JSON.stringify(landData);
        return this.http.post(url, data, httpOptions);
    };
    BlockchainService.prototype.registerUser = function (userData) {
        var url = 'http://localhost:4000/api/blockchain/registerUser';
        var data = JSON.stringify(userData);
        return this.http.post(url, data, httpOptions);
    };
    BlockchainService.prototype.getLandHistory = function (userData) {
        var url = 'http://localhost:4000/api/blockchain/landHistory';
        var data = JSON.stringify(userData);
        return this.http.post(url, data, httpOptions);
    };
    BlockchainService.prototype.divideLand = function (Data) {
        var url = 'http://localhost:4000/api/blockchain/divideLand';
        var data = JSON.stringify(Data);
        return this.http.post(url, data, httpOptions);
    };
    BlockchainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BlockchainService);
    return BlockchainService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    UserService.prototype.auth = function (loginData) {
        var url = 'http://localhost:4000/api/users/login';
        return this.http.post(url, JSON.stringify(loginData), httpOptions);
    };
    UserService.prototype.signup = function (userData) {
        var url = 'http://localhost:4000/api/users/signup';
        return this.http.post(url, JSON.stringify(userData), httpOptions);
    };
    UserService.prototype.registerAdmin = function (userData) {
        var url = 'http://localhost:4000/api/users/registerAdmin';
        return this.http.post(url, JSON.stringify(userData), httpOptions);
    };
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            var output;
            var token = localStorage.getItem('token');
            if (!token) {
                output = null;
            }
            else if (this.jwtHelper.isTokenExpired()) {
                output = null;
                localStorage.removeItem('token');
            }
            else {
                output = this.jwtHelper.decodeToken(token).type;
            }
            return output;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "nic", {
        get: function () {
            var output;
            var token = localStorage.getItem('token');
            if (!token) {
                output = null;
            }
            else if (this.jwtHelper.isTokenExpired()) {
                output = null;
                localStorage.removeItem('token');
            }
            else {
                output = this.jwtHelper.decodeToken(token).nic;
            }
            return output;
        },
        enumerable: true,
        configurable: true
    });
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/isuru/Projects/LandChain-Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map