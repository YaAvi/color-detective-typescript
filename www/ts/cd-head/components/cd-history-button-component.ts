import Ctrl = require('../cd-head-controller'); 
module cda.head {
	export class HistoryButtonComponent {
		templateUrl = 'build/cd-head/templates/cd-history-button-template.html';
		controller = Ctrl.cda.head.CdHeadCtrl;
	}

	angular.module('cda').component('cdHistoryButton', new HistoryButtonComponent());
}
