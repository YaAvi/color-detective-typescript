module cda.history {
	interface ICdHistoryCtrl {
		history(): [any];
		historyIsOpened(): boolean;
		delOne(): void;
		delAll(): void;
		color(): any;
	}

	export class CdHistoryCtrl implements ICdHistoryCtrl {
		
		constructor(private cdHistory, private cdCurrentColor) {}

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

	}
	angular.module('cda').controller('cdHistoryCtrl', CdHistoryCtrl);
}
