var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent.config = {
                    templateUrl: 'build/cd-footer/cd-footer-template.html',
                    controller: 'cdFooterCtrl'
                };
                return FooterComponent;
            }());
            buttons.FooterComponent = FooterComponent;
            angular.module('cda').component('cdFooter', FooterComponent.config);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
