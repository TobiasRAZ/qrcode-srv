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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _components_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/invoices/invoices.component */ "./src/app/components/invoices/invoices.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/app/components/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: '',
        component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
    },
    {
        path: 'invoices',
        component: _components_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_8__["InvoicesComponent"],
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_8__["InvoicesComponent"],
                _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/auth/auth.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/auth.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<qrcode [(qrdata)]=\"qrcode\" [size]=\"256\" [level]=\"'M'\"></qrcode>"

/***/ }),

/***/ "./src/app/components/auth/auth.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = /** @class */ (function () {
    function AuthComponent(database, router) {
        this.database = database;
        this.router = router;
        this.qrtype = "q001";
        this.fiid = localStorage.getItem('fiid');
        var ciid = localStorage.getItem('ciid');
        if (this.fiid && !ciid)
            this.database.list("fiids/" + this.fiid).remove();
        if (!ciid)
            this.fiid = this.database.createPushId();
        localStorage.setItem('fiid', this.fiid);
        this.qrcode = JSON.stringify({
            fiid: this.fiid,
            qr: this.qrtype
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.database.object("fiids/" + this.fiid)
            .valueChanges().subscribe(function (fiid) {
            if (fiid && Object.keys(fiid).length) {
                localStorage.setItem('ciid', JSON.stringify(fiid));
            }
            _this.router.navigate(['/invoices']);
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/components/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/invoices/invoices.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/invoices/invoices.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/invoices/invoices.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/invoices/invoices.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{fact.name}}</h1>\n<form [formGroup]=\"invoiceForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label class=\"center-block\">Référence facture:\n      <input class=\"form-control\" formControlName=\"ref\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"center-block\">Référence client:\n      <input class=\"form-control\" formControlName=\"cust_ref\">\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"center-block\">Net à payer:\n      <input class=\"form-control\" type=\"number\" formControlName=\"total_cost\">\n      Ar\n    </label>\n  </div>\n  <input type=\"submit\" value=\"Enregistrer\"/>\n\t<input type=\"reset\" value=\"Annuler\"/>\n</form>\n<ul *ngFor=\"let invoice of invoices | keyvalue\">\n  <li>\n    <div>\n      <div>{{ invoice.value.ref }}</div>\n      <div>{{ invoice.value.cust_ref }}</div>\n      <div>{{ invoice.value.total_cost }} Ar</div>\n      <div *ngIf=\"invoice.value.paid\">Payée</div>\n      <qrcode [(qrdata)]=\"invoice.value.qrcode\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n      <button (click)=\"update(invoice.key)\" *ngIf=\"!invoice.value.paid\">Editer</button>\n      <button (click)=\"remove(invoice.key)\" *ngIf=\"!invoice.value.paid\">Supprimer</button>\n    </div>\n  </li>\n</ul>\n<button (click)=\"logout()\">Déconnexion</button>"

/***/ }),

/***/ "./src/app/components/invoices/invoices.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/invoices/invoices.component.ts ***!
  \***********************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent(db, router) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.invoices = new Array();
        this.invoiceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ref: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cust_ref: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            total_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.fact = JSON.parse(localStorage.getItem('ciid'));
        this.fiid = this.fact.ciid.toString();
        this.invoiceRef = "invoices/" + this.fiid;
        db.object(this.invoiceRef)
            .valueChanges()
            .subscribe(function (invoices) {
            _this.invoices = new Array();
            if (!invoices)
                return;
            Object.keys(invoices).forEach(function (key) {
                invoices[key].qrcode = "{\"fiid\":\"" + _this.fiid + "\",\"key\":\"" + key + "\",\"qr\":\"i002\"}";
                _this.invoices[invoices[key].ref] = invoices[key];
            });
            //this.invoices = invoices
        });
    }
    InvoicesComponent.prototype.logout = function () {
        localStorage.removeItem('ciid');
        this.router.navigate(['/']);
    };
    InvoicesComponent.prototype.update = function (key) {
        var _this = this;
        var invoice = this.invoices[key];
        this.invoiceForm.setControl("id", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](key));
        Object.keys(invoice).forEach(function (key) {
            _this.invoiceForm
                .setControl(key, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](invoice[key]));
        });
    };
    InvoicesComponent.prototype.save = function () {
        var _this = this;
        var id;
        var formValue = this.invoiceForm.value;
        var invoiceRef$ = this.db.list(this.invoiceRef);
        var _invoiceRef$ = this.db.list("_invoices/" + formValue.ref);
        var key;
        if (formValue.qrcode) {
            key = JSON.parse(formValue.qrcode).key;
            delete formValue.qrcode;
        }
        else
            key = this.db.createPushId();
        var invoice = this.invoices[formValue.id];
        if (invoice) {
            delete formValue.id;
            this.db.list("_invoices/" + invoice.ref).remove();
        }
        var __Ref$ = invoiceRef$
            .update(key, formValue);
        __Ref$
            .then(function () {
            _invoiceRef$.update(_this.fiid, { key: key })
                .then(function () {
                _this.invoiceForm.reset();
            });
        });
    };
    InvoicesComponent.prototype.onSubmit = function () {
        if (!this.invoiceForm.valid)
            return;
        var formValue = this.invoiceForm.value;
        var ref = formValue.ref;
        /*this.db.database.ref(`_invoices`)
        .child(ref)
        .once('value').then((snapshot) => {
          if (!formValue.qrcode && snapshot.exists())
            return*/
        if (!this.invoices[ref])
            this.save();
        else
            alert('Cette référence existe déjà');
        //})
    };
    InvoicesComponent.prototype.remove = function (key) {
        var _this = this;
        var invoice = this.invoices[key];
        var qrcode = JSON.parse(invoice.qrcode);
        this.db.list("invoices/" + qrcode.fiid + "/" + qrcode.key)
            .remove()
            .then(function () {
            _this.db.list("_invoices/" + invoice.ref)
                .remove();
        });
    };
    InvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! ./invoices.component.html */ "./src/app/components/invoices/invoices.component.html"),
            styles: [__webpack_require__(/*! ./invoices.component.css */ "./src/app/components/invoices/invoices.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.canActivate = function () {
        if (!localStorage.getItem('ciid')) {
            this.router.navigate(["/"]);
            return false;
        }
        else
            return true;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyDtbDNr1seooUxW1TkUcJ9R0HsCIyQKrns",
        authDomain: "fincrm-a84da.firebaseapp.com",
        databaseURL: "https://fincrm-a84da.firebaseio.com",
        projectId: "fincrm-a84da",
        storageBucket: "fincrm-a84da.appspot.com",
        messagingSenderId: "861011351147"
    },
    firebase_qrcode: {
        apiKey: "AIzaSyBQiHetm87HwZZf4h_bOq8lF79muYKHCh4",
        authDomain: "qrcode-67a83.firebaseapp.com",
        databaseURL: "https://qrcode-67a83.firebaseio.com",
        projectId: "qrcode-67a83",
        storageBucket: "qrcode-67a83.appspot.com",
        messagingSenderId: "323693277315"
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

module.exports = __webpack_require__(/*! /home/eqima/AngularProjects/qrcode-srv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map