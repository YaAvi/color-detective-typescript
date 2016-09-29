import Color = require("../cd-common/cd-color");
module cda.image {
    export class CdTouch {
        constructor(private cdHistory,
                    private cdDetectColor,
                    private cdCurrentColor,
                    private cdRgbToHex,
                    private cdFontColor) {}

        touchHandler(e): void {
            var image = e.target,
                pColor,
                imageBounds = image.getBoundingClientRect(),
                xCord = e.coords.start.x,
                yCord = e.coords.start.y,
                canvas = e.target.nextElementSibling,
                ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height + imageBounds.top; // draw it in the same spot
            ctx.drawImage(image, 0, imageBounds.top, image.width, image.height);

            pColor = ctx.getImageData(xCord - imageBounds.left, yCord, 1, 1).data;
            if (pColor[3] !== 0) {
                var colorInHex = this.cdRgbToHex.rgbToHex(pColor[0], pColor[1], pColor[2]),
                    name = this.cdDetectColor.colorName(pColor[0], pColor[1], pColor[2]),
                    font = this.cdFontColor.get(pColor[0], pColor[1], pColor[2]);
                var color = new Color.cda.common.Color(pColor[0], pColor[1], pColor[2], colorInHex, name, font);
                this.cdHistory.add(color);
                this.cdCurrentColor.setColor(color);
            }
        }
    }

    angular.module('cda').service('cdTouch', CdTouch);
}
