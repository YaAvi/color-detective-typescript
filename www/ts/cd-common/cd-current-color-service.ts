module cda.common {
    interface ICdCurrentColor {
        currentColor: any;
        setColor(color): void;
        getColor(): any;
    }

    export class CdCurrentColor implements ICdCurrentColor {
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
 