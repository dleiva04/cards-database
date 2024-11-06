import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika"
	},

	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Spear"
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon."
		}
	}],

	retreat: 1,
	rarity: "None"
}

export default card