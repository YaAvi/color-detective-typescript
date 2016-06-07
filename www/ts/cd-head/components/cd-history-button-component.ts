module cda.head {
	export class HistoryButtonComponent {
		public static config = {
    		templateUrl: 'build/cd-head/templates/cd-history-button-template.html',
    		controller: 'cdHeadCtrl'
		};
	}
	angular.module('cda').component('cdHistoryButton', HistoryButtonComponent.config);
}
