var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var CdZoomService = (function () {
                function CdZoomService() {
                    this.zoomOutState = true;
                    this.zoomInState = true;
                    this.zoomLevel = 100;
                    this.zoomOffset = 25;
                }
                CdZoomService.prototype.zoomIn = function () {
                    if (this.zoomLevel < 250) {
                        this.zoomLevel += this.zoomOffset;
                        this.zoomOutState = true;
                    }
                    if (this.zoomLevel === 250) {
                        this.zoomInState = false;
                    }
                };
                CdZoomService.prototype.zoomOut = function () {
                    if (this.zoomLevel > 50) {
                        this.zoomLevel -= this.zoomOffset;
                        this.zoomInState = true;
                    }
                    if (this.zoomLevel === 50) {
                        this.zoomOutState = false;
                    }
                };
                CdZoomService.prototype.zoomInEnabled = function () {
                    return this.zoomInState;
                };
                CdZoomService.prototype.zoomOutEnabled = function () {
                    return this.zoomOutState;
                };
                CdZoomService.prototype.getZoomLevel = function () {
                    return this.zoomLevel + '%';
                };
                return CdZoomService;
            }());
            buttons.CdZoomService = CdZoomService;
            angular.module('cda').service('cdZoom', CdZoomService);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
