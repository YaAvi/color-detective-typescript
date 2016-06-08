var cda;
(function (cda) {
    var head;
    (function (head) {
        var DonateButtonComponent = (function () {
            function DonateButtonComponent() {
                this.templateUrl = 'build/cd-head/templates/cd-donate-button-template.html';
            }
            return DonateButtonComponent;
        }());
        head.DonateButtonComponent = DonateButtonComponent;
        angular.module('cda').component('cdDonateButton', new DonateButtonComponent());
    })(head = cda.head || (cda.head = {}));
})(cda || (cda = {}));
