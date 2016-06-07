var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var CdOpenImageService = (function () {
                function CdOpenImageService($cordovaCamera, cdImageSource) {
                    this.$cordovaCamera = $cordovaCamera;
                    this.cdImageSource = cdImageSource;
                    this.DATA_URL = 0;
                    this.options = {
                        quality: 77,
                        destinationType: this.DATA_URL,
                        correctOrientation: true,
                        sourceType: 0
                    };
                }
                CdOpenImageService.prototype.openImage = function (source) {
                    var _this = this;
                    this.options.sourceType = source;
                    this.$cordovaCamera.getPicture(this.options)
                        .then(function (imageData) {
                        _this.cdImageSource.add("data:image/jpeg;base64," + imageData);
                    }, function (err) {
                        // error
                    });
                };
                return CdOpenImageService;
            }());
            buttons.CdOpenImageService = CdOpenImageService;
            angular.module('cda').service('cdOpenImage', CdOpenImageService);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
