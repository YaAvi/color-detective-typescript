module cda.image {
	interface ICdImageCtrl {
		touchHandler(event): void;
		src(): [any];
		currentSrc(): any;
		width(): string;
	}

	class CdImageCtrl implements ICdImageCtrl {
		
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
	angular.module('cda').controller('cdImageCtrl', CdImageCtrl);
}
