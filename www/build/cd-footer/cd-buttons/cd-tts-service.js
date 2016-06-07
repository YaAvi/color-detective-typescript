var cda;
(function (cda) {
    var footer;
    (function (footer) {
        var buttons;
        (function (buttons) {
            var CdTTSService = (function () {
                function CdTTSService($cordovaTTS) {
                    this.$cordovaTTS = $cordovaTTS;
                }
                CdTTSService.prototype.speakColor = function (colorName) {
                    this.$cordovaTTS.speak({
                        text: colorName,
                        local: 'en-GB',
                        rate: 0.8
                    }, function () {
                        console.log('tts has spoken');
                    }, function (reason) {
                        console.log(reason);
                    });
                };
                return CdTTSService;
            }());
            buttons.CdTTSService = CdTTSService;
            angular.module('cda').service('cdTTS', CdTTSService);
        })(buttons = footer.buttons || (footer.buttons = {}));
    })(footer = cda.footer || (cda.footer = {}));
})(cda || (cda = {}));
