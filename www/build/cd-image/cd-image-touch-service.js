var cda;
(function (cda) {
    var image;
    (function (image_1) {
        var CdTouch = (function () {
            function CdTouch(cdHistory, cdDetectColor, cdCurrentColor, $cordovaStatusbar, $cordovaRecents, cdRgbToHex, cdFontColor) {
                this.cdHistory = cdHistory;
                this.cdDetectColor = cdDetectColor;
                this.cdCurrentColor = cdCurrentColor;
                this.$cordovaStatusbar = $cordovaStatusbar;
                this.$cordovaRecents = $cordovaRecents;
                this.cdRgbToHex = cdRgbToHex;
                this.cdFontColor = cdFontColor;
            }
            CdTouch.prototype.touchHandler = function (e) {
                var image = e.target, pColor, imageBounds = image.getBoundingClientRect(), xCord = e.coords.start.x, yCord = e.coords.start.y, canvas = document.createElement('canvas'), ctx = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height + imageBounds.top; // draw it in the same spot
                ctx.drawImage(image, 0, imageBounds.top, image.width, image.height);
                pColor = ctx.getImageData(xCord - imageBounds.left, yCord, 1, 1).data;
                if (pColor[3] !== 0) {
                    var rgb = 'rgb(' + pColor[0] + ', ' + pColor[1] + ', ' + pColor[2] + ')', colorInHex = this.cdRgbToHex.rgbToHex(pColor[0], pColor[1], pColor[2]), color = {
                        r: pColor[0],
                        g: pColor[1],
                        b: pColor[2],
                        hex: colorInHex,
                        name: this.cdDetectColor.colorName(pColor[0], pColor[1], pColor[2]),
                        style: {
                            color: rgb,
                            font: this.cdFontColor.get(pColor[0], pColor[1], pColor[2])
                        }
                    };
                    this.cdHistory.add(color);
                    this.cdCurrentColor.setColor(color);
                    this.$cordovaStatusbar.styleHex(this.cdRgbToHex.rgbToHex((pColor[0] - 30 < 0) ? 0 : pColor[0] - 30, (pColor[1] - 30 < 0) ? 0 : pColor[1] - 30, (pColor[2] - 30 < 0) ? 0 : pColor[2] - 30));
                    this.$cordovaRecents.setColor(color.hex);
                }
            };
            return CdTouch;
        }());
        image_1.CdTouch = CdTouch;
        angular.module('cda').service('cdTouch', CdTouch);
    })(image = cda.image || (cda.image = {}));
})(cda || (cda = {}));
