var cda;
(function (cda) {
    var image;
    (function (image) {
        var imageComponent = (function () {
            function imageComponent() {
            }
            imageComponent.config = {
                templateUrl: 'build/cd-image/cd-image-template.html',
                controller: 'cdImageCtrl'
            };
            return imageComponent;
        }());
        image.imageComponent = imageComponent;
        angular.module('cda').component('cdImage', imageComponent.config);
    })(image = cda.image || (cda.image = {}));
})(cda || (cda = {}));
