import { Display } from "./Display";
import { Keyboard } from "./Keyboard";
import { Memory } from "./Memory";
import { Registers } from "./Registers";

export class Chip8 {
	constructor() {
		console.log("Create a new emulator");
		this.display = new Display();
		this.memory = new Memory();
		this.registors = new Registers();
		this.keyboard = new Keyboard();
	}
	sleep(ms = 500) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
}
