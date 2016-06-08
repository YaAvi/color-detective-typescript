import Ctrl = require('../cd-footer-controller'); 
module cda.footer.buttons {
	export class ColorNameComponent {
		templateUrl = 'build/cd-footer/cd-color-name/cd-color-name-template.html';
		controller = Ctrl.cda.footer.CdFooterCtrl;
	}
	
	angular.module('cda').component('cdColorName', new ColorNameComponent());
}
