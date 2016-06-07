module cda.history {
	export class HistoryComponent {
		public static config = {
		    templateUrl: 'build/cd-history/templates/cd-history-template.html',
		    controller: 'cdHistoryCtrl'
		};
	}
	angular.module('cda').component('cdHistoryBox', HistoryComponent.config);
}
