module cda.common {
    interface ICdFontColor {
        brightnessIsHigh(r, g, b): boolean;
        get(r, g, b): string;
    }
    export class CdFontColor implements ICdFontColor {
        constructor() {}
        brightnessIsHigh(r, g, b): boolean {
            return (((r * 299) + (g * 587) + (b * 114)) / 1000) > 200;
        }
        get(r, g, b): string {
            if (this.brightnessIsHigh(r, g, b)) {
                return 'rgb(40,40,40)';
            } else {
                return 'floralwhite';
            }
        }
    }
    angular.module('cda').service('cdFontColor', CdFontColor);
}

