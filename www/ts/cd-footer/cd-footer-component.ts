module cda.footer.buttons {
	export class FooterComponent {
		public static config = {
    		templateUrl: 'build/cd-footer/cd-footer-template.html',
    		controller: 'cdFooterCtrl'
		};
	}
	angular.module('cda').component('cdFooter', FooterComponent.config);
}
