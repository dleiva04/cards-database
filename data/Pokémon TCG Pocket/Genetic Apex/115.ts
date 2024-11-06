import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Abra"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Teleport"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	retreat: 1,
	rarity: "None"
}

export default card