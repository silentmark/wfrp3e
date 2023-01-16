import { WfrpCharacter } from "./actor/wfrp-character";
import { WfrpCharacterSheet } from "./actor/wfrp-character-sheet"
import { preloadTemplates } from "./preloadTemplates.js";
import FormApp from "./main.svelte";

const SYSTEM_NAME = "wfrp3e";

Hooks.once("init", async () => {
	console.log(`${SYSTEM_NAME.toUpperCase()} | Initializing ${SYSTEM_NAME.capitalize()}`);

	game[SYSTEM_NAME] = {
		WfrpCharacter,
	};
	CONFIG.Actor.documentClass = WfrpCharacter;

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("WfrpCharacter", WfrpCharacterSheet, { makeDefault: true });

	await preloadTemplates(SYSTEM_NAME);
});
