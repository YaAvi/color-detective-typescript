var cda;
(function (cda) {
    var head;
    (function (head) {
        var DonateButtonComponent = (function () {
            function DonateButtonComponent() {
            }
            DonateButtonComponent.config = {
                templateUrl: 'build/cd-head/templates/cd-donate-button-template.html'
            };
            return DonateButtonComponent;
        }());
        head.DonateButtonComponent = DonateButtonComponent;
        angular.module('cda').component('cdDonateButton', DonateButtonComponent.config);
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
