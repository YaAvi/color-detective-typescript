import Ctrl = require('../cd-footer-controller'); 
module cda.footer.buttons {
	export class ButtonsComponent {
		templateUrl = 'build/cd-footer/cd-buttons/templates/cd-buttons-template.html';
		controller = Ctrl.cda.footer.CdFooterCtrl;
	}

	angular.module('cda').component('cdButtons', new ButtonsComponent());
}
