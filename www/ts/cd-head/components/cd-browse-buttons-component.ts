module cda.head {
	export class BrowseButtonsComponent {
		public static config = {
			templateUrl: 'build/cd-head/templates/cd-browse-buttons-template.html',
    		controller: 'cdHeadCtrl'
		};
	}
	angular.module('cda').component('cdBrowseButtons', BrowseButtonsComponent.config);
}
