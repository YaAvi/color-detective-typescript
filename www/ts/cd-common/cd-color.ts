export module cda.common {
	export class Color {
		r: number;
		g: number;
		b: number;
		hex: string;
		name: string;
		style: any;

		constructor(R, G, B, hex, rgb, name, font) {
			this.r = R;
			this.g = G;
			this.b = B;
			this.hex = hex;
			this.name = name;
			this.style = {
				color: rgb,
				font: font
			};

		}
	}
}
