export module cda.image {
	export class CdImageCtrl {
		
		constructor(private cdTouch, private cdImageSource, private cdZoom) {}
		
		touchHandler(event): void {
			this.cdTouch.touchHandler(event);
		}

		src(): [any] {
			return this.cdImageSource.getSources();
		}

		currentSrc(): any {
			return this.cdImageSource.getCurrent();
		}

		width(): string {
			return this.cdZoom.getZoomLevel();
		}
	}
}
