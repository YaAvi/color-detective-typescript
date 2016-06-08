import Ctrl = require('./cd-footer-controller'); 
module cda.footer.buttons {
	export class FooterComponent {
		templateUrl = 'build/cd-footer/cd-footer-template.html';
		controller = Ctrl.cda.footer.CdFooterCtrl;
	}
	
	angular.module('cda').component('cdFooter', new FooterComponent());
}
