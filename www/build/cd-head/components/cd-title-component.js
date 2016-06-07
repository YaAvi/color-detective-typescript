var cda;
(function (cda) {
    var head;
    (function (head) {
        var TitleComponent = (function () {
            function TitleComponent() {
            }
            TitleComponent.config = {
                templateUrl: 'build/cd-head/templates/cd-title-template.html'
            };
            return TitleComponent;
        }());
        head.TitleComponent = TitleComponent;
        angular.module('cda').component('cdTitle', TitleComponent.config);
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
