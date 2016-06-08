module cda.common {
    export class CdRgbToHex {
        colorToHex(color): string {
            var colorHex = color.toString(16);
            if (colorHex.length === 1) {
                colorHex = "0" + colorHex;
            }
            return colorHex;
        }

        rgbToHex(r, g, b): string {
            return "#" + this.colorToHex(r) + this.colorToHex(g) + this.colorToHex(b);
        }
    }

    angular.module('cda').service('cdRgbToHex', CdRgbToHex);
}
