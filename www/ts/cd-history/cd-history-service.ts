module cda.service {
    export class CdHistory {
        colorHistory: any[];
        open: boolean;
        constructor() {
            this.colorHistory = [];
            this.open = false;
        }

        close(): void {
            this.open = false;
        }

        historyButton(): void {
            this.open = !this.open;
        }

        indexOfColor(color): number {
            for (var i = 0; i < this.colorHistory.length; i++) {
                if (color.style.color === this.colorHistory[i].style.color) {
                    return i;
                }
            }
            return -1;
        }

        add(color): void {
            var index = this.indexOfColor(color);
            if (index >= 0) {
                var clr = this.colorHistory.splice(index, 1)[0];
                this.colorHistory.push(clr);
            } else {
                this.colorHistory.push(color);
            }
        }

        remove(): void {
            this.colorHistory.pop();
        }

        removeAll(): void {
            var len = this.colorHistory.length;
            for (var i = 0; i < len; i++) {
                this.remove();
            }
        }

        getHistory(): any[] {
            return this.colorHistory;
        }

        historyIsOpened(): boolean {
            return this.open;
        }
    }
    
    angular.module('cda').service('cdHistory', CdHistory);
}
