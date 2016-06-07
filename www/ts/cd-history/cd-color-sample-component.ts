module cda.history {
	export class ColorSampleComponent {
		public static config: any = {
		    templateUrl: 'build/cd-history/templates/cd-color-sample-template.html',
		    bindings: {
		        color: '='
		    }
		};
	}
	angular.module('cda').component('cdColorSample', ColorSampleComponent.config);
}
