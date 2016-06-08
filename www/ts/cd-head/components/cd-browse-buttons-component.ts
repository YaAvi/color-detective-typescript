import Ctrl = require('../cd-head-controller');
module cda.head {
	export class BrowseButtonsComponent {
		templateUrl = 'build/cd-head/templates/cd-browse-buttons-template.html';
		controller = Ctrl.cda.head.CdHeadCtrl;
	}

	angular.module('cda').component('cdBrowseButtons', new BrowseButtonsComponent());
}
