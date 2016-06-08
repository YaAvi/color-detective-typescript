"use strict";
var Ctrl = require('../cd-footer-controller');
var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var ButtonsComponent = (function () {
                function ButtonsComponent() {
                    this.templateUrl = 'build/cd-footer/cd-buttons/templates/cd-buttons-template.html';
                    this.controller = Ctrl.cda.footer.CdFooterCtrl;
                }
                return ButtonsComponent;
            }());
            buttons.ButtonsComponent = ButtonsComponent;
            angular.module('cda').component('cdButtons', new ButtonsComponent());
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
