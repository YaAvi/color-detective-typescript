module cda {
	export class TranslateProvider {
		constructor(private $translateProvider) {
			this.$translateProvider.useSanitizeValueStrategy('escape');
			this.$translateProvider.translations('en', {
				'SELECTED_COLOR': 'Selected Color',
				'TITLE': 'Color Detective'
			});
			this.$translateProvider.preferredLanguage('en');
		}
	}
	angular.module('cda').config(TranslateProvider);
}
