var cda;
(function (cda) {
    var head;
    (function (head) {
        var HistoryButtonComponent = (function () {
            function HistoryButtonComponent() {
            }
            HistoryButtonComponent.config = {
                templateUrl: 'build/cd-head/templates/cd-history-button-template.html',
                controller: 'cdHeadCtrl'
            };
            return HistoryButtonComponent;
        }());
        head.HistoryButtonComponent = HistoryButtonComponent;
        angular.module('cda').component('cdHistoryButton', HistoryButtonComponent.config);
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
