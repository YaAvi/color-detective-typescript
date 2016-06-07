var cda;
(function (cda) {
    var history;
    (function (history) {
        var ColorSampleComponent = (function () {
            function ColorSampleComponent() {
            }
            ColorSampleComponent.config = {
                templateUrl: 'build/cd-history/templates/cd-color-sample-template.html',
                bindings: {
                    color: '='
                }
            };
            return ColorSampleComponent;
        }());
        history.ColorSampleComponent = ColorSampleComponent;
        angular.module('cda').component('cdColorSample', ColorSampleComponent.config);
    })(history = cda.history || (cda.history = {}));
})(cda || (cda = {}));
