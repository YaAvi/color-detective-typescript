module cda.footer.buttons {
	export class ColorNameComponent {
		public static config = {
    		templateUrl: 'build/cd-footer/cd-color-name/cd-color-name-template.html',
    		controller: 'cdFooterCtrl'
		};
	}
	angular.module('cda').component('cdColorName', ColorNameComponent.config);
}