"use strict";
var cda;
(function (cda) {
    var history;
    (function (history) {
        var CdHistoryCtrl = (function () {
            function CdHistoryCtrl(cdHistory, cdCurrentColor, cdStatusbar) {
                this.cdHistory = cdHistory;
                this.cdCurrentColor = cdCurrentColor;
                this.cdStatusbar = cdStatusbar;
            }
            CdHistoryCtrl.prototype.history = function () {
                return this.cdHistory.getHistory();
            };
            CdHistoryCtrl.prototype.historyIsOpened = function () {
                return this.cdHistory.historyIsOpened();
            };
            CdHistoryCtrl.prototype.delOne = function () {
                this.cdHistory.remove();
            };
            CdHistoryCtrl.prototype.delAll = function () {
                this.cdHistory.removeAll();
            };
            CdHistoryCtrl.prototype.color = function () {
                return this.cdCurrentColor.getColor();
            };
            CdHistoryCtrl.prototype.setCurrentColor = function (color) {
                this.cdCurrentColor.setColor(color);
                this.cdStatusbar.setColor(color);
            };
            return CdHistoryCtrl;
        }());
        history.CdHistoryCtrl = CdHistoryCtrl;
    })(history = cda.history || (cda.history = {}));
})(cda = exports.cda || (exports.cda = {}));
