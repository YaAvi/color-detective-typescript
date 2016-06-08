module cda.head {
	export class DonateButtonComponent {
		templateUrl ='ts/cd-head/templates/cd-donate-button-template.html';
	}

	angular.module('cda').component('cdDonateButton', new DonateButtonComponent());
}
