import { Display } from "./Display";
import { Memory } from "./Memory";

export class Chip8 {
	constructor() {
		console.log("Create a new emulator");
		this.display = new Display();
		this.memory = new Memory();
	}
}
