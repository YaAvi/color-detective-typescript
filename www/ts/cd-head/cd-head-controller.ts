export module cda.head {
	export class CdHeadCtrl {
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
}
