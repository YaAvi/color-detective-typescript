var cda;
(function (cda) {
    var image;
    (function (image) {
        var CdImageSource = (function () {
            function CdImageSource() {
                this.sources = ['img/portrait.png'];
                this.current = 0;
            }
            CdImageSource.prototype.add = function (src) {
                if (this.sources.indexOf(src) < 0) {
                    this.sources.push(src);
                }
                this.current = this.sources.indexOf(src);
            };
            CdImageSource.prototype.getSources = function () {
                return this.sources;
            };
            CdImageSource.prototype.getCurrent = function () {
                return this.current;
            };
            CdImageSource.prototype.next = function () {
                if (this.current < this.sources.length - 1) {
                    this.current += 1;
                }
            };
            CdImageSource.prototype.prev = function () {
                if (this.current > 0) {
                    this.current -= 1;
                }
            };
            CdImageSource.prototype.getNextButtonState = function () {
                return this.current === this.sources.length - 1;
            };
            CdImageSource.prototype.getPrevButtonState = function () {
                return this.current === 0;
            };
            return CdImageSource;
        }());
        image.CdImageSource = CdImageSource;
        angular.module('cda').service('cdImageSource', CdImageSource);
    })(image = cda.image || (cda.image = {}));
})(cda || (cda = {}));
