webpackJsonp([8,9],{494:function(n,t,e){t=n.exports=e(488)(),t.push([n.i,"login .login-logo {\n  font-size: 72px;\n  width: 72px;\n  height: 72px;\n  min-width: 72px;\n  min-height: 72px;\n  color: #607D8B;\n  border-radius: 100%; }\n\nlogin .md-button.forgot-button {\n  text-transform: capitalize; }\n  login .md-button.forgot-button:not([disabled]):hover, login .md-button.forgot-button.active:not([disabled]) {\n    text-decoration: underline;\n    background-color: transparent; }\n  login .md-button.forgot-button md-icon {\n    font-size: 16px;\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n    min-width: 18px;\n    min-height: 18px;\n    width: 24px; }\n",""])},504:function(n,t,e){var o=e(494);"string"==typeof o&&(o=[[n.i,o,""]]);e(489)(o,{});o.locals&&(n.exports=o.locals)},514:function(n,t){n.exports='<form name="loginForm" layout="column" layout-align="center center" flex ng-submit="$ctrl.onSubmit(loginForm.$valid)" novalidate>\n    <div flex="30" layout="column" layout-align="center center" class="md-display-2">\n        <md-icon class="md-whiteframe-1dp login-logo">account_circle</md-icon>\n    </div>\n    <div flex="40" layout="column" layout-align="center center">\n        <md-input-container>\n            <label>User Name</label>\n            <md-icon aria-label="User Name">assignment_ind</md-icon>\n            <input type="text" name="userName" ng-model="$ctrl.loginCriteria.userName" required>\n            <div ng-messages="loginForm.userName.$error">\n                <div ng-message="valid">The entered value is not valid</div>\n                <div ng-message="required">Please enter your user name</div>\n            </div>\n        </md-input-container>\n\n\n        <md-input-container>\n            <label>Password</label>\n            <md-icon aria-label="Password">lock</md-icon>\n            <input type="password" name="password" ng-model="$ctrl.loginCriteria.password" required>\n            <div ng-messages="loginForm.password.$error">\n                <div ng-message="valid">The entered value is not valid</div>\n                <div ng-message="required">Please enter your password</div>\n            </div>\n        </md-input-container>\n    </div>\n    <div flex="20" layout="column" layout-align="center center">\n        <section layout="row" layout-align-xs="center center">\n            <md-button type="submit" class="md-raised md-primary">\n                Submit</md-button>\n            <md-button class="md-raised" ng-click="$ctrl.onCancel(loginForm)">Cancel</md-button>\n        </section>\n    </div>\n    <div flex="10" layout="column" layout-align="center center">\n        <section layout="row" layout-align-xs="center center">\n            <md-button class="md-primary forgot-button" ui-sref="recover">\n                <md-icon aria-label="Forgot Password">lock_open</md-icon>Forgot Password</md-button>\n        </section>\n    </div>\n\n</form>'},528:function(n,t,e){"use strict";var o=e(504),i=(e.n(o),{userName:null,password:null}),r=function(){function n(n,t,e){this.$element=n,this.authService=t,this.$state=e}return n.prototype.$onInit=function(){this.$element.addClass("layout-column flex"),this.loginCriteria=angular.copy(i)},n.prototype.onSubmit=function(n){var t=this;n&&this.authService.logIn(this.loginCriteria).then(function(n){n&&t.$state.go("home",{},{custom:{ignoreAuthentication:!0}})})},n.prototype.onCancel=function(n){this.loginCriteria=angular.copy(i),n.$setPristine(),n.$setUntouched()},n.$inject=["$element","AuthService","$state"],n}(),a={controller:r,template:e(514)};t.a=a},529:function(n,t,e){"use strict";function o(n){n.state("login",{parent:"auth",component:"login"})}o.$inject=["$stateProvider"],t.a=o},530:function(n,t,e){"use strict";var o=e(12),i=(e.n(o),e(528)),r=e(529);e.d(t,"login",function(){return a});var a=e.i(o.module)("login",[]).component("login",i.a).config(r.a).name;t.default=a}});