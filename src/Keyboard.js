import { keyMap, NUMBER_OF_KEYS } from "./constants/keyboardConstants";

export class Keyboard {
	constructor() {
		this.keys = new Array(NUMBER_OF_KEYS).fill(false);
		document.addEventListener("keydown", (e) => this.keydown(e));
		document.addEventListener("keyup", (e) => this.keyup(e));
	}

	keydown(key) {
		const keyIndex = keyMap.findIndex((mapKey) => mapKey === key.toLowerCase());
		if (keyIndex > -1) {
			this.keys[keyIndex] = true;
		}
	}
	keyup(key) {
		const keyIndex = keyMap.findIndex((mapKey) => mapKey === key.toLowerCase());
		if (keyIndex > -1) {
			this.keys[keyIndex] = false;
		}
	}

	isKeydown(keyIndex) {
		return this.keys[keyIndex];
	}

	hadKeydown(keyIndex) {
		return this.keys.findIndex((key) => key) != -1;
	}
}
