import { CHAR_SET } from "./constants/charSetConstants";
import { CHAR_SET_ADDRESS } from "./constants/memoryConstants";
import { TIMER_60_HZ } from "./constants/registersConstants";
import { Display } from "./Display";
import { Keyboard } from "./Keyboard";
import { Memory } from "./Memory";
import { Registers } from "./Registers";

export class Chip8 {
	constructor() {
		console.log("Create a new emulator");
		this.memory = new Memory();
		this.loadCharSet();

		this.registors = new Registers();
		this.keyboard = new Keyboard();
		this.display = new Display(this.memory);
	}
	sleep(ms = TIMER_60_HZ) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	loadCharSet() {
		this.memory.memory.set(CHAR_SET, CHAR_SET_ADDRESS);
	}
}
