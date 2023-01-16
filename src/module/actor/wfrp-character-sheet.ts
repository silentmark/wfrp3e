import FormApp from "./wfrp-character-sheet.svelte";
import { WfrpCharacterSheetData, WfrpCharacterSheetOptions } from "./wfrp-character-sheet-data"

export class WfrpCharacterSheet extends ActorSheet {
	app: FormApp;

	constructor(data, options) {
		super(data, options);
	}

	/** @override */
	static get defaultOptions() {
		return mergeObject(super.defaultOptions, {
			classes: ["character", "sheet", "actor"],
		});
	}

	/** @override */
	get template() {
		return `systems/wfrp3e/templates/character.hbs`;
	}

	get actorData() {
		return this.actor.data;
	}

	override getData(options?: Partial<WfrpCharacterSheetOptions>): WfrpCharacterSheetData | Promise<WfrpCharacterSheetData> {
		let data = new WfrpCharacterSheetData();
		data.actor = this.actor;
		data.data =  this.actorData.toObject().data;
		return data;		
	}

	// Injects Svelte app when initializing HTML
	async _injectHTML(html) {
		await super._injectHTML(html);
		this.app = new FormApp({
			target: html.find("form")[0],
			props: {
				sheetData: this.getData(),
			},
		});
	}

	// Injects Svelte app when replacing innerHTML
	async _replaceHTML(element, html) {
		await super._replaceHTML(element, html);
		this.app = new FormApp({
			target: html.find("form")[0],
			props: {
				sheetData: this.getData(),
			},
		});
	}
}


