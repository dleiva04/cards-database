import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos ex"
	},

	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Peck"
		},

		damage: "20"
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Thundering Hurricane"
		},

		effect: {
			en: "Flip 4 coins. This attack does 50 damage for each heads."
		},

		damage: "50x"
	}],

	retreat: 2,
	rarity: "None"
}

export default card