module cda.footer.buttons {
	export class UrlBoxComponent {
		public static config = {
			templateUrl: 'build/cd-footer/cd-url-box/cd-url-box-template.html',
			controller: 'cdFooterCtrl'
		};
	}
	angular.module('cda').component('cdUrlBox', UrlBoxComponent.config);
}