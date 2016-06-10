module cda.common {
    export class CdCurrentColor {
        currentColor: any;
        constructor(private cdStatusbar, private $cordovaRecents) {
            this.currentColor = {};
        }

        getColor(): any {
             return this.currentColor;
        }

        setColor(color): void {
            this.currentColor = color;
            this.cdStatusbar.setColor(color);
            this.$cordovaRecents.setColor(color.hex);
        }
    }
    
    angular.module('cda').service('cdCurrentColor', CdCurrentColor);
 }

