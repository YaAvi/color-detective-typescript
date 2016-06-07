module cda.head {
	interface ICdHeadCtrl {
		historyButton(): void;
		color(): any;
		next(): void;
		prev(): void;
		getPrevButtonState(): boolean;
		getNextButtonState(): boolean;
	}

	export class CdHeadCtrl implements ICdHeadCtrl {
		constructor(private cdHistory, private cdCurrentColor, private cdImageSource) {}

		historyButton(): void {
			this.cdHistory.historyButton();
		}
		color(): any {
            return this.cdCurrentColor.getColor();
		}
		next(): void {
			this.cdImageSource.next();
		}
		prev(): void {
			this.cdImageSource.prev();
		}
		getPrevButtonState(): boolean {
			return this.cdImageSource.getPrevButtonState();
		}
		getNextButtonState(): boolean {
			return this.cdImageSource.getNextButtonState();
		}

	}
	angular.module('cda').controller('cdHeadCtrl', CdHeadCtrl);
}
