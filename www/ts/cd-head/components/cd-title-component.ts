module cda.head {
	export class TitleComponent {
		public static config = {
    		templateUrl: 'build/cd-head/templates/cd-title-template.html'
		};
	}
	angular.module('cda').component('cdTitle', TitleComponent.config);
}
