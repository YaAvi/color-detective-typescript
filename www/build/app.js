var cda;
(function (cda) {
    angular.module('cda', ['ngAnimate', 'ngCordova', 'pascalprecht.translate', 'mn']);
    document.addEventListener('deviceready', function () {
        angular.bootstrap(document, ['cda']);
    }, false);
})(cda || (cda = {}));
