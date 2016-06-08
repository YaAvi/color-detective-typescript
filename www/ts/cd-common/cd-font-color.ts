module cda.common {
    export class CdFontColor {
        brightnessIsHigh(r, g, b): boolean {
            return (((r * 299) + (g * 587) + (b * 114)) / 1000) > 200;
        }

        get(r, g, b): string {
            if (this.brightnessIsHigh(r, g, b)) {
                return 'rgb(40,40,40)';
            } 

            return 'floralwhite';
        }
    }
    
    angular.module('cda').service('cdFontColor', CdFontColor);
}
