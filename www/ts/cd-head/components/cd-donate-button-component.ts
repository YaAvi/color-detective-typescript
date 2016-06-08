module cda.head {
	export class DonateButtonComponent {
		templateUrl ='build/cd-head/templates/cd-donate-button-template.html';
	}

	angular.module('cda').component('cdDonateButton', new DonateButtonComponent());
}
