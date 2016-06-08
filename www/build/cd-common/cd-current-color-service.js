var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdCurrentColor = (function () {
            function CdCurrentColor(cdStatusbar) {
                this.cdStatusbar = cdStatusbar;
                this.currentColor = {};
            }
            CdCurrentColor.prototype.getColor = function () {
                return this.currentColor;
            };
            CdCurrentColor.prototype.setColor = function (color) {
                console.log(color);
                this.currentColor = color;
                this.cdStatusbar.setColor(color);
            };
            return CdCurrentColor;
        }());
        common.CdCurrentColor = CdCurrentColor;
        angular.module('cda').service('cdCurrentColor', CdCurrentColor);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
