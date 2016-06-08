import Ctrl = require("./cd-common/cd-back-button");
module cda {
	export class AppComponent {
		templateUrl = 'build/cd-app-template.html';
		controller = Ctrl.cda.common.CdBackButton;
	}

	angular.module('cda').component('cdApp', new AppComponent());
}
