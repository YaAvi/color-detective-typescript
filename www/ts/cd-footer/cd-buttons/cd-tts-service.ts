module cda.footer.buttons {
    interface ICdTTSService {
        speakColor(colorName): void;
    }
    export class CdTTSService implements ICdTTSService {
        constructor(private $cordovaTTS) {}
        speakColor(colorName): void {
            this.$cordovaTTS.speak({
                text: colorName,
                local: 'en-GB',
                rate: 0.8
            }, function() {
                //success
            }, function(reason) {
                //error
            });
        }
    }
    angular.module('cda').service('cdTTS', CdTTSService);
}
