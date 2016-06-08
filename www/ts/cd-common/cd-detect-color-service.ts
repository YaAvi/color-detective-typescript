module cda.common {
    export class CdDetectColor {
        clsColor: number;
        constructor(private clrData) {
            this.clsColor = 0;
        }

        hexToRGB(hex, index): number {
            var color = parseInt(hex.substring(index, index + 2), 16);
            return color;
        }

        colorName(R, G, B): string {
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
        }
    }
    
    angular.module('cda').service('cdDetectColor', CdDetectColor);
}
