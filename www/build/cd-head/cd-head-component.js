var cda;
(function (cda) {
    var head;
    (function (head) {
        var HeadComponent = (function () {
            function HeadComponent() {
            }
            HeadComponent.config = {
                templateUrl: 'build/cd-head/templates/cd-head-template.html',
                controller: 'cdHeadCtrl'
            };
            return HeadComponent;
        }());
        head.HeadComponent = HeadComponent;
        angular.module('cda').component('cdHead', HeadComponent.config);
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
