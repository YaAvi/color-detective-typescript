export module cda.footer {    
    export class CdFooterCtrl {
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
}
