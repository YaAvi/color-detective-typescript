var app;
(function (app) {
    var footer;
    (function (footer) {
        var CdFooterCtrl = (function () {
            function CdFooterCtrl(cdCurrentColor, cdZoom, cdUrl, cdOpenImage, cdTTS) {
                this.cdCurrentColor = cdCurrentColor;
                this.cdZoom = cdZoom;
                this.cdUrl = cdUrl;
                this.cdOpenImage = cdOpenImage;
                this.cdTTS = cdTTS;
                this.showRgb = true;
            }
            CdFooterCtrl.prototype.color = function () {
                return this.cdCurrentColor.getColor();
            };
            CdFooterCtrl.prototype.zoomIn = function () {
                this.cdZoom.zoomIn();
            };
            CdFooterCtrl.prototype.zoomOut = function () {
                this.cdZoom.zoomOut();
            };
            CdFooterCtrl.prototype.zoomInEnabled = function () {
                return this.cdZoom.zoomInEnabled();
            };
            CdFooterCtrl.prototype.zoomOutEnabled = function () {
                return this.cdZoom.zoomOutEnabled();
            };
            CdFooterCtrl.prototype.openBox = function () {
                this.cdUrl.openBox();
            };
            CdFooterCtrl.prototype.confirm = function (url) {
                this.cdUrl.confirm(url);
            };
            CdFooterCtrl.prototype.isUrlBoxOpen = function () {
                return this.cdUrl.isUrlBoxOpen();
            };
            CdFooterCtrl.prototype.openImage = function (source) {
                this.cdOpenImage.openImage(source);
            };
            CdFooterCtrl.prototype.speak = function (colorName) {
                this.cdTTS.speakColor(colorName);
            };
            return CdFooterCtrl;
        }());
        footer.CdFooterCtrl = CdFooterCtrl;
        angular.module('cda').controller('cdFooterCtrl', CdFooterCtrl);
    })(footer = app.footer || (app.footer = {}));
})(app || (app = {}));
