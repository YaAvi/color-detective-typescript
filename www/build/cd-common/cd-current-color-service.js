var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdCurrentColor = (function () {
            function CdCurrentColor() {
                this.currentColor = {};
            }
            CdCurrentColor.prototype.getColor = function () {
                return this.currentColor;
            };
            CdCurrentColor.prototype.setColor = function (color) {
                console.log(color);
                this.currentColor = color;
            };
            return CdCurrentColor;
        }());
        common.CdCurrentColor = CdCurrentColor;
        angular.module('cda').service('cdCurrentColor', CdCurrentColor);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
