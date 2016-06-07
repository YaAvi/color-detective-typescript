var cda;
(function (cda) {
    var image;
    (function (image) {
        var CdImage = (function () {
            function CdImage() {
                this.sources = ['img/portrait.png'];
                this.current = 0;
            }
            CdImage.prototype.add = function (src) {
                if (this.sources.indexOf(src) < 0) {
                    this.sources.push(src);
                }
                this.current = this.sources.indexOf(src);
            };
            CdImage.prototype.getSources = function () {
                return this.sources;
            };
            CdImage.prototype.getCurrent = function () {
                return this.current;
            };
            CdImage.prototype.next = function () {
                if (this.current < this.sources.length - 1) {
                    this.current += 1;
                }
            };
            CdImage.prototype.prev = function () {
                if (this.current > 0) {
                    this.current -= 1;
                }
            };
            CdImage.prototype.getNextButtonState = function () {
                return this.current === this.sources.length - 1;
            };
            CdImage.prototype.getPrevButtonState = function () {
                return this.current === 0;
            };
            return CdImage;
        }());
        image.CdImage = CdImage;
        angular.module('cda').service('cdImageSource', CdImage);
    })(image = cda.image || (cda.image = {}));
})(cda || (cda = {}));
