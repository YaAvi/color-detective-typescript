var cda;
(function (cda) {
    var service;
    (function (service) {
        var CdHistory = (function () {
            function CdHistory() {
                this.colorHistory = [];
                this.open = false;
            }
            CdHistory.prototype.closeHistory = function () {
                this.open = false;
            };
            CdHistory.prototype.historyButton = function () {
                this.open = !this.open;
            };
            CdHistory.prototype.indexOfColor = function (color) {
                for (var i = 0; i < this.colorHistory.length; i++) {
                    if (color.style.color === this.colorHistory[i].style.color) {
                        return i;
                    }
                }
                return -1;
            };
            CdHistory.prototype.add = function (color) {
                var index = this.indexOfColor(color);
                if (index >= 0) {
                    var clr = this.colorHistory.splice(index, 1)[0];
                    this.colorHistory.push(clr);
                }
                else {
                    this.colorHistory.push(color);
                }
            };
            CdHistory.prototype.remove = function () {
                this.colorHistory.pop();
            };
            CdHistory.prototype.removeAll = function () {
                var len = this.colorHistory.length;
                for (var i = 0; i < len; i++) {
                    this.remove();
                }
            };
            CdHistory.prototype.getHistory = function () {
                return this.colorHistory;
            };
            CdHistory.prototype.historyIsOpened = function () {
                return this.open;
            };
            return CdHistory;
        }());
        service.CdHistory = CdHistory;
        angular.module('cda').service('cdHistory', CdHistory);
    })(service = cda.service || (cda.service = {}));
})(cda || (cda = {}));
