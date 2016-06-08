"use strict";
var Ctrl = require('../cd-footer-controller');
var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var ColorNameComponent = (function () {
                function ColorNameComponent() {
                    this.templateUrl = 'build/cd-footer/cd-color-name/cd-color-name-template.html';
                    this.controller = Ctrl.cda.footer.CdFooterCtrl;
                }
                return ColorNameComponent;
            }());
            buttons.ColorNameComponent = ColorNameComponent;
            angular.module('cda').component('cdColorName', new ColorNameComponent());
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
