export module cda.common {
	export class CdBackButton {
		constructor(private cdUrl: any, private cdHistory: any) {
			this.onLoad();
		}

		onBackKeyDown(): void  {
			this.cdUrl.close();
			this.cdHistory.close();
		}

		onDeviceReady(): void {
			document.addEventListener('backbutton', this.onBackKeyDown.bind(this), true);
		}

		onLoad(): void {
			document.addEventListener('deviceready', this.onDeviceReady.bind(this), true);
		}
	}
}
