"use strict";
var cda;
(function (cda) {
    var head;
    (function (head) {
        var CdHeadCtrl = (function () {
            function CdHeadCtrl(cdHistory, cdCurrentColor, cdImageSource) {
                this.cdHistory = cdHistory;
                this.cdCurrentColor = cdCurrentColor;
                this.cdImageSource = cdImageSource;
            }
            CdHeadCtrl.prototype.historyButton = function () {
                this.cdHistory.historyButton();
            };
            CdHeadCtrl.prototype.color = function () {
                return this.cdCurrentColor.getColor();
            };
            CdHeadCtrl.prototype.next = function () {
                this.cdImageSource.next();
            };
            CdHeadCtrl.prototype.prev = function () {
                this.cdImageSource.prev();
            };
            CdHeadCtrl.prototype.getPrevButtonState = function () {
                return this.cdImageSource.getPrevButtonState();
            };
            CdHeadCtrl.prototype.getNextButtonState = function () {
                return this.cdImageSource.getNextButtonState();
            };
            return CdHeadCtrl;
        }());
        head.CdHeadCtrl = CdHeadCtrl;
    })(head = cda.head || (cda.head = {}));
})(cda = exports.cda || (exports.cda = {}));
