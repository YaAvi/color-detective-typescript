module cda.footer.buttons {
    export class CdTTSService {
        constructor(private $cordovaTTS) {}

        speakColor(colorName): void {
            this.$cordovaTTS.speak({
                text: colorName,
                local: 'en-GB',
                rate: 0.8
            });
        }
    }
    
    angular.module('cda').service('cdTTS', CdTTSService);
}
