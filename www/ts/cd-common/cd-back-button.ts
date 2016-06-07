module cda.common {
	interface ICdBackButton {
		onBackKeyDown(): void;
		onDeviceReady(): void;
		onLoad(): void;
	}
	export class CdBackButton implements ICdBackButton {
		constructor(private cdUrl: any, private cdHistory: any) {
			this.onLoad();
		}

		onBackKeyDown = (): void => {
			this.cdUrl.close();
			this.cdHistory.close();
		}
		onDeviceReady = (): void => {
			document.addEventListener('backbutton', this.onBackKeyDown, true);
		}
		onLoad(): void {
			document.addEventListener('deviceready', this.onDeviceReady, true);
		}
	}
	angular.module('cda').controller('cdBackButton', CdBackButton);
}
