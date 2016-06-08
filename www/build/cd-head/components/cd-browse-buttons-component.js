"use strict";
var Ctrl = require('../cd-head-controller');
var cda;
(function (cda) {
    var head;
    (function (head) {
        var BrowseButtonsComponent = (function () {
            function BrowseButtonsComponent() {
                this.templateUrl = 'build/cd-head/templates/cd-browse-buttons-template.html';
                this.controller = Ctrl.cda.head.CdHeadCtrl;
            }
            return BrowseButtonsComponent;
        }());
        head.BrowseButtonsComponent = BrowseButtonsComponent;
        angular.module('cda').component('cdBrowseButtons', new BrowseButtonsComponent());
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
