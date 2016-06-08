module cda.common {
    export class CdStatusBar {
        currentColor: any;
        constructor(private $cordovaStatusbar, private cdRgbToHex) {
            this.currentColor = {};
        }

        setColor(color): void {
            this.$cordovaStatusbar.styleHex(this.cdRgbToHex.rgbToHex((color.r - 30 < 0) ? 0 : color.r - 30,
                (color.g - 30 < 0) ? 0 : color.g - 30,
                (color.b - 30 < 0) ? 0 : color.b - 30));
        }
    }
    
    angular.module('cda').service('cdStatusbar', CdStatusBar);
 }
 