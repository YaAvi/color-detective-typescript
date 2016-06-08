module cda.footer.buttons {
    export class CdUrlService {
        urlBoxIsOpen: boolean;
        constructor(private cdImageSource) {
            this.urlBoxIsOpen = false;
        }

        urlIsValid(url): boolean {
            return (url.match(/\.(jpeg|jpg|gif|png|svg)$/) !== null && url !== "");
        }

        openBox(): void { 
            this.urlBoxIsOpen = true;
        }

        close(): void {
            this.urlBoxIsOpen = false;
        }

        confirm(url): void {
            if (url) {
                if (this.urlIsValid(url)) {
                    this.cdImageSource.add(url);
                } else {
                    window.alert("Not an image URL!");
                }
            }
            this.close();
        }

        isUrlBoxOpen(): boolean {
            return this.urlBoxIsOpen;
        }
    }
    
    angular.module('cda').service('cdUrl', CdUrlService);
}
