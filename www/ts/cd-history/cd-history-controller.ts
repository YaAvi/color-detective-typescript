export module cda.history {
	export class CdHistoryCtrl {
		
		constructor(private cdHistory, private cdCurrentColor, private cdStatusbar) { }

		history(): [any] {
			return this.cdHistory.getHistory();
		}

		historyIsOpened(): boolean {
			return this.cdHistory.historyIsOpened();
		}

		delOne(): void {
			this.cdHistory.remove();
		}

		delAll(): void {
			this.cdHistory.removeAll();
		}

		color(): any {
			return this.cdCurrentColor.getColor();
		}

		setCurrentColor(color): void {
			this.cdCurrentColor.setColor(color);
			this.cdStatusbar.setColor(color);
		}
	}
}
