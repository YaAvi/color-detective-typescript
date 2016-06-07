module app.footer {
    interface ICdFooterCtrl {
        color(): any;
        zoomIn(): void;
        zoomOut(): void;
        zoomInEnabled(): boolean;
        zoomOutEnabled(): boolean;
        openBox(): void;
        confirm(url): void;
        isUrlBoxOpen(): boolean;
        openImage(source): void;
        speak(colorName): void;
        showRgb:boolean;
    }

    export class CdFooterCtrl implements ICdFooterCtrl {
        showRgb: boolean;
        constructor(private cdCurrentColor, private cdZoom, private cdUrl, private cdOpenImage, private cdTTS) {
            this.showRgb = true;
        }
        color(): any {
            return this.cdCurrentColor.getColor();
        }
        zoomIn(): void {
            this.cdZoom.zoomIn();
        }
        zoomOut(): void {
            this.cdZoom.zoomOut();
        }
        zoomInEnabled(): boolean {
            return this.cdZoom.zoomInEnabled();
        }
        zoomOutEnabled(): boolean {
            return this.cdZoom.zoomOutEnabled();
        }
        openBox(): void {
            this.cdUrl.openBox();
        }
        confirm(url): void {
            this.cdUrl.confirm(url);
        }
        isUrlBoxOpen(): boolean {
            return this.cdUrl.isUrlBoxOpen();
        }
        openImage(source): void {
            this.cdOpenImage.openImage(source);
        }
        speak(colorName): void {
            this.cdTTS.speakColor(colorName);
        }
    }
    angular.module('cda').controller('cdFooterCtrl', CdFooterCtrl);
}
