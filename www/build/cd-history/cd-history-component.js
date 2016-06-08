"use strict";
var Ctrl = require("./cd-history-controller");
var cda;
(function (cda) {
    var history;
    (function (history) {
        var HistoryComponent = (function () {
            function HistoryComponent() {
                this.templateUrl = 'build/cd-history/templates/cd-history-template.html';
                this.controller = Ctrl.cda.history.CdHistoryCtrl;
            }
            return HistoryComponent;
        }());
        history.HistoryComponent = HistoryComponent;
        angular.module('cda').component('cdHistoryBox', new HistoryComponent());
    })(history = cda.history || (cda.history = {}));
})(cda || (cda = {}));
