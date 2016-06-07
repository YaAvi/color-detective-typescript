var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdDetectColor = (function () {
            function CdDetectColor(clrData) {
                this.clrData = clrData;
                this.clsColor = 0;
            }
            CdDetectColor.prototype.hexToRGB = function (hex, index) {
                var color = parseInt(hex.substring(index, index + 2), 16);
                return color;
            };
            CdDetectColor.prototype.colorName = function (R, G, B) {
                var minDistance = 7777, distance, red, green, blue;
                for (var clr = 0; clr < this.clrData.length; clr++) {
                    red = this.hexToRGB(this.clrData[clr][0], 0);
                    green = this.hexToRGB(this.clrData[clr][0], 2);
                    blue = this.hexToRGB(this.clrData[clr][0], 4);
                    distance = Math.pow((R - red), 2) + Math.pow((G - green), 2) + Math.pow((B - blue), 2);
                    if (distance < minDistance) {
                        minDistance = distance;
                        this.clsColor = clr;
                    }
                }
                return this.clrData[this.clsColor][1];
            };
            return CdDetectColor;
        }());
        common.CdDetectColor = CdDetectColor;
        angular.module('cda').service('cdDetectColor', CdDetectColor);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
