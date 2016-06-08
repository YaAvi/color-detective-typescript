import Ctrl = require('./cd-head-controller');
module cda.head {
	export class HeadComponent {
		templateUrl = 'ts/cd-head/templates/cd-head-template.html';
		controller = Ctrl.cda.head.CdHeadCtrl;
	}

	angular.module('cda').component('cdHead', new HeadComponent());
}
