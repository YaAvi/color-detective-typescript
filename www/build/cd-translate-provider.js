var cda;
(function (cda) {
    var TranslateProvider = (function () {
        function TranslateProvider($translateProvider) {
            this.$translateProvider = $translateProvider;
            this.$translateProvider.translations('en', {
                'SELECTED_COLOR': 'Selected Color',
                'TITLE': 'Color Detective'
            });
            this.$translateProvider.preferredLanguage('en');
        }
        return TranslateProvider;
    }());
    cda.TranslateProvider = TranslateProvider;
    angular.module('cda').config(TranslateProvider);
})(cda || (cda = {}));
