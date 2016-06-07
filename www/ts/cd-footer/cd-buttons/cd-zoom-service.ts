module cda.footer.buttons {
    interface ICdZoomService {
        zoomOutState: boolean;
        zoomInState: boolean;
        zoomLevel: number;
        zoomOffset: number;
        zoomIn(): void;
        zoomOut(): void;
        zoomInEnabled(): boolean;
        zoomOutEnabled(): boolean;
        getZoomLevel(): string;
    }
    export class CdZoomService implements ICdZoomService {
        zoomOutState: boolean;
        zoomInState: boolean;
        zoomLevel: number;
        zoomOffset: number;
        constructor() {
            this.zoomOutState = true;
            this.zoomInState = true;
            this.zoomLevel = 100;
            this.zoomOffset = 25;
        }
        zoomIn(): void {
            if (this.zoomLevel < 250) {
                this.zoomLevel += this.zoomOffset;
                this.zoomOutState = true;
            }
            if (this.zoomLevel === 250) {
                this.zoomInState = false;
            }
        }
        zoomOut(): void {
            if (this.zoomLevel > 50) {
                this.zoomLevel -= this.zoomOffset;
                this.zoomInState = true;
            }
            if (this.zoomLevel === 50) {
                this.zoomOutState = false;
            }
        }
        zoomInEnabled(): boolean {
            return this.zoomInState;
        }
        zoomOutEnabled(): boolean {
            return this.zoomOutState;
        }
        getZoomLevel(): string {
            return this.zoomLevel + '%';
        }
    }
    angular.module('cda').service('cdZoom', CdZoomService);
}
