import { DISPLAY_HEIGHT, DISPLAY_WIDTH } from "./constants/displayConstants";

export class Display {
	constructor() {
		console.log("Create a new display");
		this.screen = document.querySelector("canvas");
		this.screen.width = DISPLAY_WIDTH;
		this.screen.height = DISPLAY_HEIGHT;
	}
}
