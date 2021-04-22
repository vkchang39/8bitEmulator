import { CHAR_SET } from "./constants/charSetConstants";
import { CHAR_SET_ADDRESS } from "./constants/memoryConstants";
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
		this.loadCharSet();
	}
	sleep(ms = 1000) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	loadCharSet() {
		this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS);
	}
}
