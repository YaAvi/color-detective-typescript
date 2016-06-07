var cda;
(function (cda) {
    var AppComponent = (function () {
        function AppComponent() {
        }
        AppComponent.config = {
            templateUrl: 'build/cd-app-template.html',
            controller: 'cdBackButton'
        };
        return AppComponent;
    }());
    cda.AppComponent = AppComponent;
    angular.module('cda').component('cdApp', AppComponent.config);
})(cda || (cda = {}));
