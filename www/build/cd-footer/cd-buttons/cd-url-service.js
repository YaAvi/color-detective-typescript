var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var CdUrlService = (function () {
                function CdUrlService(cdImageSource) {
                    this.cdImageSource = cdImageSource;
                    this.urlBoxIsOpen = false;
                }
                CdUrlService.prototype.urlIsValid = function (url) {
                    return (url.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null && url !== "");
                };
                CdUrlService.prototype.openBox = function () {
                    this.urlBoxIsOpen = true;
                };
                CdUrlService.prototype.close = function () {
                    this.urlBoxIsOpen = false;
                };
                CdUrlService.prototype.confirm = function (url) {
                    if (url) {
                        if (this.urlIsValid(url)) {
                            this.cdImageSource.add(url);
                        }
                        else {
                            window.alert("Not an image URL!");
                        }
                    }
                    this.close();
                };
                CdUrlService.prototype.isUrlBoxOpen = function () {
                    return this.urlBoxIsOpen;
                };
                return CdUrlService;
            }());
            buttons.CdUrlService = CdUrlService;
            angular.module('cda').service('cdUrl', CdUrlService);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
