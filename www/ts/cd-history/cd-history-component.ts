import Ctrl = require("./cd-history-controller");

module cda.history {
	export class HistoryComponent {
		templateUrl = 'build/cd-history/templates/cd-history-template.html';
		controller = Ctrl.cda.history.CdHistoryCtrl;
	}

	angular.module('cda').component('cdHistoryBox', new HistoryComponent());
}
