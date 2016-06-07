module cda.image {
    interface ICdImage {
        sources: string[];
        current: number;
        add(src): void;
        getSources(): string[];
        getCurrent(): number;
        next(): void;
        prev(): void;
        getNextButtonState(): boolean;
        getPrevButtonState(): boolean;
    }
    export class CdImage implements ICdImage {
        sources: string[];
        current: number;
        constructor() {
            this.sources = ['img/portrait.png'];
            this.current = 0;
        }
        add(src): void {
            if (this.sources.indexOf(src) < 0) {
                this.sources.push(src);
            }
            this.current = this.sources.indexOf(src);
        }
        getSources(): string[] {
            return this.sources;
        }
        getCurrent(): number {
            return this.current;
        }
        next(): void {
            if (this.current < this.sources.length - 1) {
                this.current += 1;
            }
        }
        prev(): void {
            if (this.current > 0) {
                this.current -= 1;
            }
        }
        getNextButtonState(): boolean {
            return this.current === this.sources.length - 1;
        }
        getPrevButtonState(): boolean {
            return this.current === 0;
        }
    }
    angular.module('cda').service('cdImageSource', CdImage);
}
