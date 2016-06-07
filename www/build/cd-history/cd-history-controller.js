var cda;
(function (cda) {
    var history;
    (function (history) {
        var CdHistoryCtrl = (function () {
            function CdHistoryCtrl(cdHistory, cdCurrentColor) {
                this.cdHistory = cdHistory;
                this.cdCurrentColor = cdCurrentColor;
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
            return CdHistoryCtrl;
        }());
        history.CdHistoryCtrl = CdHistoryCtrl;
        angular.module('cda').controller('cdHistoryCtrl', CdHistoryCtrl);
    })(history = cda.history || (cda.history = {}));
})(cda || (cda = {}));
