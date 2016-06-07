var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var ButtonsComponent = (function () {
                function ButtonsComponent() {
                }
                ButtonsComponent.config = {
                    templateUrl: 'build/cd-footer/cd-buttons/templates/cd-buttons-template.html',
                    controller: 'cdFooterCtrl'
                };
                return ButtonsComponent;
            }());
            buttons.ButtonsComponent = ButtonsComponent;
            angular.module('cda').component('cdButtons', ButtonsComponent.config);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
