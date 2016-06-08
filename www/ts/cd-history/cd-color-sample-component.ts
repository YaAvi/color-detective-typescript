module cda.history {
	export class ColorSampleComponent {
		templateUrl = 'build/cd-history/templates/cd-color-sample-template.html';
		bindings: any = {
			color: '='
		};
	}

	angular.module('cda').component('cdColorSample', new ColorSampleComponent());
}
