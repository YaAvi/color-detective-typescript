var cda;
(function (cda) {
    var history;
    (function (history) {
        var ColorSampleComponent = (function () {
            function ColorSampleComponent() {
                this.templateUrl = 'build/cd-history/templates/cd-color-sample-template.html';
                this.bindings = {
                    color: '='
                };
            }
            return ColorSampleComponent;
        }());
        history.ColorSampleComponent = ColorSampleComponent;
        angular.module('cda').component('cdColorSample', new ColorSampleComponent());
    })(history = cda.history || (cda.history = {}));
})(cda || (cda = {}));
