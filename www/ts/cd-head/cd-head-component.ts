module cda.head {
	export class HeadComponent {
		public static config = {
		    templateUrl: 'build/cd-head/templates/cd-head-template.html',
		    controller: 'cdHeadCtrl'
		};
	}
	angular.module('cda').component('cdHead', HeadComponent.config);
}
