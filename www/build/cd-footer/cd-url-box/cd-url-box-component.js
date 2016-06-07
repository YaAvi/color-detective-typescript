var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var UrlBoxComponent = (function () {
                function UrlBoxComponent() {
                }
                UrlBoxComponent.config = {
                    templateUrl: 'build/cd-footer/cd-url-box/cd-url-box-template.html',
                    controller: 'cdFooterCtrl'
                };
                return UrlBoxComponent;
            }());
            buttons.UrlBoxComponent = UrlBoxComponent;
            angular.module('cda').component('cdUrlBox', UrlBoxComponent.config);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
