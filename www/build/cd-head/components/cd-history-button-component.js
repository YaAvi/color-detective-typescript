"use strict";
var Ctrl = require('../cd-head-controller');
var cda;
(function (cda) {
    var head;
    (function (head) {
        var HistoryButtonComponent = (function () {
            function HistoryButtonComponent() {
                this.templateUrl = 'build/cd-head/templates/cd-history-button-template.html';
                this.controller = Ctrl.cda.head.CdHeadCtrl;
            }
            return HistoryButtonComponent;
        }());
        head.HistoryButtonComponent = HistoryButtonComponent;
        angular.module('cda').component('cdHistoryButton', new HistoryButtonComponent());
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
