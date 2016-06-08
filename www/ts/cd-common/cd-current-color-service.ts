module cda.common {
    export class CdCurrentColor {
        currentColor: any;
        constructor(private cdStatusbar) {
            this.currentColor = {};
        }

        getColor(): any {
             return this.currentColor;
        }

        setColor(color): void {
            console.log(color);
            this.currentColor = color;
            this.cdStatusbar.setColor(color);
        }
    }
    
    angular.module('cda').service('cdCurrentColor', CdCurrentColor);
 }
 