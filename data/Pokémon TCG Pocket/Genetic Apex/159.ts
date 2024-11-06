import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kabutops"
	},

	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Leech Life"
		},

		effect: {
			en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon."
		},

		damage: "50"
	}],

	retreat: 1,
	rarity: "None"
}

export default card