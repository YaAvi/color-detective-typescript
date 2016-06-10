"use strict";
var Color = require("../cd-common/cd-color");
var cda;
(function (cda) {
    var image;
    (function (image_1) {
        var CdTouch = (function () {
            function CdTouch(cdHistory, cdDetectColor, cdCurrentColor, cdRgbToHex, cdFontColor) {
                this.cdHistory = cdHistory;
                this.cdDetectColor = cdDetectColor;
                this.cdCurrentColor = cdCurrentColor;
                this.cdRgbToHex = cdRgbToHex;
                this.cdFontColor = cdFontColor;
            }
            CdTouch.prototype.touchHandler = function (e) {
                var image = e.target, pColor, imageBounds = image.getBoundingClientRect(), xCord = e.coords.start.x, yCord = e.coords.start.y, canvas = e.target.nextElementSibling, ctx = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height + imageBounds.top; // draw it in the same spot
                ctx.drawImage(image, 0, imageBounds.top, image.width, image.height);
                pColor = ctx.getImageData(xCord - imageBounds.left, yCord, 1, 1).data;
                if (pColor[3] !== 0) {
                    var rgb = 'rgb(' + pColor[0] + ', ' + pColor[1] + ', ' + pColor[2] + ')', colorInHex = this.cdRgbToHex.rgbToHex(pColor[0], pColor[1], pColor[2]), name = this.cdDetectColor.colorName(pColor[0], pColor[1], pColor[2]), font = this.cdFontColor.get(pColor[0], pColor[1], pColor[2]), color = new Color.cda.common.Color(pColor[0], pColor[1], pColor[2], colorInHex, rgb, name, font);
                    this.cdHistory.add(color);
                    this.cdCurrentColor.setColor(color);
                }
            };
            return CdTouch;
        }());
        image_1.CdTouch = CdTouch;
        angular.module('cda').service('cdTouch', CdTouch);
    })(image = cda.image || (cda.image = {}));
})(cda || (cda = {}));
