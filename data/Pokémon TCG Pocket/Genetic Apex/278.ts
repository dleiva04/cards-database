import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp ex"
	},

	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Mega Punch"
		},

		damage: "120"
	}],

	retreat: 3,
	rarity: "None"
}

export default card