import {
	BG_COLOR,
	COLOR,
	DISPLAY_HEIGHT,
	DISPLAY_MULTIPLY,
	DISPLAY_WIDTH,
} from "./constants/displayConstants";

export class Display {
	constructor() {
		console.log("Create a new display");
		this.screen = document.querySelector("canvas");
		this.screen.width = DISPLAY_WIDTH * DISPLAY_MULTIPLY;
		this.screen.height = DISPLAY_HEIGHT * DISPLAY_MULTIPLY;
		this.context = this.screen.getContext("2d");
		this.context.fill = BG_COLOR;
		this.frameBuffer = [];
		this.reset();
	}
	reset() {
		for (let i = 0; i < DISPLAY_HEIGHT; i++) {
			this.frameBuffer.push([]);
			for (let j = 0; j < DISPLAY_WIDTH; j++) {
				this.frameBuffer[i].push(1);
			}
		}
		this.context.fillRect(0, 0, this.screen.width, this.screen.height);
		this.drawBuffer();
	}
	drawBuffer() {
		for (let i = 0; i < DISPLAY_HEIGHT; i++) {
			this.frameBuffer.push([]);
			for (let j = 0; j < DISPLAY_WIDTH; j++) {
				this.drawPixel(i, j, this.frameBuffer[i][j]);
			}
		}
	}
	drawPixel(h, w, value) {
		if (value) {
			this.context.fillStyle = COLOR;
		} else {
			this.context.fillStyle = BG_COLOR;
		}
		this.context.fillRect(
			w * DISPLAY_MULTIPLY,
			h * DISPLAY_MULTIPLY,
			DISPLAY_MULTIPLY,
			DISPLAY_MULTIPLY
		);
	}
}
