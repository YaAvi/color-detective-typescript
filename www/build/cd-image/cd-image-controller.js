var cda;
(function (cda) {
    var image;
    (function (image) {
        var CdImageCtrl = (function () {
            function CdImageCtrl(cdTouch, cdImageSource, cdZoom) {
                this.cdTouch = cdTouch;
                this.cdImageSource = cdImageSource;
                this.cdZoom = cdZoom;
            }
            CdImageCtrl.prototype.touchHandler = function (event) {
                this.cdTouch.touchHandler(event);
            };
            CdImageCtrl.prototype.src = function () {
                return this.cdImageSource.getSources();
            };
            CdImageCtrl.prototype.currentSrc = function () {
                return this.cdImageSource.getCurrent();
            };
            CdImageCtrl.prototype.width = function () {
                return this.cdZoom.getZoomLevel();
            };
            return CdImageCtrl;
        }());
        angular.module('cda').controller('cdImageCtrl', CdImageCtrl);
    })(image = cda.image || (cda.image = {}));
})(cda || (cda = {}));
