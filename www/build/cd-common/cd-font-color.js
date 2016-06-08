var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdFontColor = (function () {
            function CdFontColor() {
            }
            CdFontColor.prototype.brightnessIsHigh = function (r, g, b) {
                return (((r * 299) + (g * 587) + (b * 114)) / 1000) > 200;
            };
            CdFontColor.prototype.get = function (r, g, b) {
                if (this.brightnessIsHigh(r, g, b)) {
                    return 'rgb(40,40,40)';
                }
                return 'floralwhite';
            };
            return CdFontColor;
        }());
        common.CdFontColor = CdFontColor;
        angular.module('cda').service('cdFontColor', CdFontColor);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
