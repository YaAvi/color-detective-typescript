import Ctrl = require('../cd-footer-controller'); 
module cda.footer.buttons {
	export class UrlBoxComponent {
		templateUrl = 'build/cd-footer/cd-url-box/cd-url-box-template.html';
		controller = Ctrl.cda.footer.CdFooterCtrl;
	}
	
	angular.module('cda').component('cdUrlBox', new UrlBoxComponent());
}
