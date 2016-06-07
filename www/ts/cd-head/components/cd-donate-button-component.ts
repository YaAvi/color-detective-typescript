module cda.head {
	export class DonateButtonComponent {
		public static config = {
    		templateUrl: 'build/cd-head/templates/cd-donate-button-template.html'
		};
	}
	angular.module('cda').component('cdDonateButton', DonateButtonComponent.config);
}
