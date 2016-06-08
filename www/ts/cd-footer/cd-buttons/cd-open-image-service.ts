module cda.footer.buttons {
    export class CdOpenImageService {
        DATA_URL: number;
        options: any;
        constructor(private $cordovaCamera, private cdImageSource) {
            this.DATA_URL = 0;
            this.options = {
                quality: 77,
                destinationType: this.DATA_URL,
                correctOrientation: true,
                sourceType: 0
            };
        }

        openImage(source): void {
            this.options.sourceType = source;
            this.$cordovaCamera.getPicture(this.options)
                .then((imageData): void => {
                    this.cdImageSource.add("data:image/jpeg;base64," + imageData);
                }, function(err) {
                // error
                });
        }
    }
    
    angular.module('cda').service('cdOpenImage', CdOpenImageService);
}
