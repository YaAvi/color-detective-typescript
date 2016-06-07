var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdBackButton = (function () {
            function CdBackButton(cdUrl, cdHistory) {
                var _this = this;
                this.cdUrl = cdUrl;
                this.cdHistory = cdHistory;
                this.onBackKeyDown = function () {
                    _this.cdUrl.close();
                    _this.cdHistory.close();
                };
                this.onDeviceReady = function () {
                    document.addEventListener('backbutton', _this.onBackKeyDown, true);
                };
                this.onLoad();
            }
            CdBackButton.prototype.onLoad = function () {
                document.addEventListener('deviceready', this.onDeviceReady, true);
            };
            return CdBackButton;
        }());
        common.CdBackButton = CdBackButton;
        angular.module('cda').controller('cdBackButton', CdBackButton);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
