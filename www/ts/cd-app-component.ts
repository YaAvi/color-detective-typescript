module cda {
	export class AppComponent {
		public static config = {
			templateUrl: 'build/cd-app-template.html',
			controller: 'cdBackButton'
		};
	}
	angular.module('cda').component('cdApp', AppComponent.config);
}
