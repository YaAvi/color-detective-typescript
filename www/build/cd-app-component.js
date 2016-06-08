"use strict";
var Ctrl = require("./cd-common/cd-back-button");
var cda;
(function (cda) {
    var AppComponent = (function () {
        function AppComponent() {
            this.templateUrl = 'build/cd-app-template.html';
            this.controller = Ctrl.cda.common.CdBackButton;
        }
        return AppComponent;
    }());
    cda.AppComponent = AppComponent;
    angular.module('cda').component('cdApp', new AppComponent());
})(cda || (cda = {}));
