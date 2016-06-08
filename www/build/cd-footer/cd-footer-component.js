"use strict";
var Ctrl = require('./cd-footer-controller');
var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var FooterComponent = (function () {
                function FooterComponent() {
                    this.templateUrl = 'build/cd-footer/cd-footer-template.html';
                    this.controller = Ctrl.cda.footer.CdFooterCtrl;
                }
                return FooterComponent;
            }());
            buttons.FooterComponent = FooterComponent;
            angular.module('cda').component('cdFooter', new FooterComponent());
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
