import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Victini-ex",
		en: "Victini ex",
		es: "Victini ex",
		it: "Victini-ex",
		pt: "Victini ex",
		de: "Victini-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			fr: "Bombarder",
			en: "Strafe",
			es: "Pasada de Ataque",
			it: "Mitragliare",
			pt: "Bombardear",
			de: "Beharken"
		},

		effect: {
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Flamme Victorieuse",
			en: "Victory Flame",
			es: "Llama de Victoria",
			it: "Fiamma della Vittoria",
			pt: "Chama da Vitória",
			de: "Triumphflamme"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			en: "During your next turn, this Pokémon can't attack.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card