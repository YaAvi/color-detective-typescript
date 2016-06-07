module cda.image {
	export class imageComponent {
		public static config = {
			templateUrl: 'build/cd-image/cd-image-template.html',
			controller: 'cdImageCtrl'
		};
	}
	angular.module('cda').component('cdImage', imageComponent.config);
}
