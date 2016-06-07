var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var ColorNameComponent = (function () {
                function ColorNameComponent() {
                }
                ColorNameComponent.config = {
                    templateUrl: 'build/cd-footer/cd-color-name/cd-color-name-template.html',
                    controller: 'cdFooterCtrl'
                };
                return ColorNameComponent;
            }());
            buttons.ColorNameComponent = ColorNameComponent;
            angular.module('cda').component('cdColorName', ColorNameComponent.config);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
