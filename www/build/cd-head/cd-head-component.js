"use strict";
var Ctrl = require('./cd-head-controller');
var cda;
(function (cda) {
    var head;
    (function (head) {
        var HeadComponent = (function () {
            function HeadComponent() {
                this.templateUrl = 'build/cd-head/templates/cd-head-template.html';
                this.controller = Ctrl.cda.head.CdHeadCtrl;
            }
            return HeadComponent;
        }());
        head.HeadComponent = HeadComponent;
        angular.module('cda').component('cdHead', new HeadComponent());
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
