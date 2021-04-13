import { Display } from "./Display";

export class Chip8 {
	constructor() {
		console.log("Create a new emulator");
		this.display = new Display();
	}
}
