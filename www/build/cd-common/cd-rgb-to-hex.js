var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdRgbToHex = (function () {
            function CdRgbToHex() {
            }
            CdRgbToHex.prototype.colorToHex = function (color) {
                var colorHex = color.toString(16);
                if (colorHex.length === 1) {
                    colorHex = "0" + colorHex;
                }
                return colorHex;
            };
            CdRgbToHex.prototype.rgbToHex = function (r, g, b) {
                return "#" + this.colorToHex(r) + this.colorToHex(g) + this.colorToHex(b);
            };
            return CdRgbToHex;
        }());
        common.CdRgbToHex = CdRgbToHex;
        angular.module('cda').service('cdRgbToHex', CdRgbToHex);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
