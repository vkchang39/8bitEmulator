import { Chip8 } from "./Chip8";

const chip8 = new Chip8();

async function runChip8() {
	chip8.registors.ST = 10;
	while (1) {
		await chip8.sleep(200);
		if (chip8.registors.DT > 0) {
			await chip8.sleep();
			chip8.registors.DT--;
		}
		if (chip8.registors.ST > 0) {
			chip8.soundCard.enableSound();
			await chip8.sleep();
			chip8.registors.ST--;
		}
		if (chip8.registors.ST === 0) {
			chip8.soundCard.disableSound();
		}
	}
}

runChip8();
