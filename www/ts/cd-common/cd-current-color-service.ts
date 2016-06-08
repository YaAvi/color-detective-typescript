module cda.common {
    export class CdCurrentColor {
        currentColor: any;
        constructor() {
            this.currentColor = {};
        }

        getColor(): any {
             return this.currentColor;
        }

        setColor(color): void {
            this.currentColor = color;
        }
    }
    
    angular.module('cda').service('cdCurrentColor', CdCurrentColor);
 }
 