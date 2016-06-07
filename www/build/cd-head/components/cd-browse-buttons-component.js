var cda;
(function (cda) {
    var head;
    (function (head) {
        var BrowseButtonsComponent = (function () {
            function BrowseButtonsComponent() {
            }
            BrowseButtonsComponent.config = {
                templateUrl: 'build/cd-head/templates/cd-browse-buttons-template.html',
                controller: 'cdHeadCtrl'
            };
            return BrowseButtonsComponent;
        }());
        head.BrowseButtonsComponent = BrowseButtonsComponent;
        angular.module('cda').component('cdBrowseButtons', BrowseButtonsComponent.config);
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
