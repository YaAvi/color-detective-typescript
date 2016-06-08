"use strict";
var Ctrl = require('../cd-footer-controller');
var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var UrlBoxComponent = (function () {
                function UrlBoxComponent() {
                    this.templateUrl = 'build/cd-footer/cd-url-box/cd-url-box-template.html';
                    this.controller = Ctrl.cda.footer.CdFooterCtrl;
                }
                return UrlBoxComponent;
            }());
            buttons.UrlBoxComponent = UrlBoxComponent;
            angular.module('cda').component('cdUrlBox', new UrlBoxComponent());
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
