import { Chip8 } from "./Chip8";

const chip8 = new Chip8();

async function runChip8() {
	while (1) {
		await chip8.sleep(1000);
		if (chip8.registors.DT > 0) {
			await chip8.sleep();
			chip8.registors.DT--;
		}
	}
}

runChip8();
