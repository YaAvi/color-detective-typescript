export module cda.common {
	export class Color {
		r: number;
		g: number;
		b: number;
		hex: string;
		name: string;
		style: any;

		constructor(R: number, G: number, B: number, hex: string, name: string, font: string) {
			this.r = R;
			this.g = G;
			this.b = B;
			this.hex = hex;
			this.name = name;
			this.style = {
				color: 'rgb(' + R + ', ' + G + ', ' + B + ')',
				font: font
			};

		}
	}
}
