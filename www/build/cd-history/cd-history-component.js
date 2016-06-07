var cda;
(function (cda) {
    var history;
    (function (history) {
        var HistoryComponent = (function () {
            function HistoryComponent() {
            }
            HistoryComponent.config = {
                templateUrl: 'build/cd-history/templates/cd-history-template.html',
                controller: 'cdHistoryCtrl'
            };
            return HistoryComponent;
        }());
        history.HistoryComponent = HistoryComponent;
        angular.module('cda').component('cdHistoryBox', HistoryComponent.config);
    })(history = cda.history || (cda.history = {}));
})(cda || (cda = {}));
