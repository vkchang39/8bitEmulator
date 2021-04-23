import { Chip8 } from "./Chip8";

const chip8 = new Chip8();

async function runChip8() {
	chip8.display.drawSprite(10, 1, 15, 5);
}

runChip8();
