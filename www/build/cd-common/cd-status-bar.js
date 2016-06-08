var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdStatusBar = (function () {
            function CdStatusBar($cordovaStatusbar, cdRgbToHex) {
                this.$cordovaStatusbar = $cordovaStatusbar;
                this.cdRgbToHex = cdRgbToHex;
                this.currentColor = {};
            }
            CdStatusBar.prototype.setColor = function (color) {
                this.$cordovaStatusbar.styleHex(this.cdRgbToHex.rgbToHex((color.r - 30 < 0) ? 0 : color.r - 30, (color.g - 30 < 0) ? 0 : color.g - 30, (color.b - 30 < 0) ? 0 : color.b - 30));
            };
            return CdStatusBar;
        }());
        common.CdStatusBar = CdStatusBar;
        angular.module('cda').service('cdStatusbar', CdStatusBar);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
