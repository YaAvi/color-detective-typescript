module cda.footer.buttons {
	export class ButtonsComponent {
		public static config = {
			templateUrl: 'build/cd-footer/cd-buttons/templates/cd-buttons-template.html',
			controller: 'cdFooterCtrl'
		};
	}
	angular.module('cda').component('cdButtons', ButtonsComponent.config);
}

