var cda;
(function (cda) {
    var common;
    (function (common) {
        var CdBackButton = (function () {
            function CdBackButton(cdUrl, cdHistory) {
                this.cdUrl = cdUrl;
                this.cdHistory = cdHistory;
                this.onLoad();
            }
            CdBackButton.prototype.onBackKeyDown = function () {
                this.cdUrl.close();
                this.cdHistory.closeHistory();
            };
            CdBackButton.prototype.onDeviceReady = function () {
                document.addEventListener('backbutton', this.onBackKeyDown.bind(this), true);
            };
            CdBackButton.prototype.onLoad = function () {
                document.addEventListener('deviceready', this.onDeviceReady.bind(this), true);
            };
            return CdBackButton;
        }());
        common.CdBackButton = CdBackButton;
        angular.module('cda').controller('cdBackButton', CdBackButton);
    })(common = cda.common || (cda.common = {}));
})(cda || (cda = {}));
