import Ctrl = require("./cd-image-controller");
module cda.image {
	export class imageComponent {
		templateUrl = 'build/cd-image/cd-image-template.html';
		controller = Ctrl.cda.image.CdImageCtrl;
	}
	
	angular.module('cda').component('cdImage', new imageComponent());
}
