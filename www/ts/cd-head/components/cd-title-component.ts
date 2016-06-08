module cda.head {
	export class TitleComponent {
		templateUrl = 'ts/cd-head/templates/cd-title-template.html';
	}

	angular.module('cda').component('cdTitle', new TitleComponent());
}
