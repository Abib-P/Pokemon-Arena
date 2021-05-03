import { Pokemon } from './Pokemon'
import {playBattle} from "./Battle";

async function main() {
    const pokemon1 = await Pokemon.constructPokemonFromName("eevee");
    const pokemon2 = await Pokemon.constructPokemonFromName("blastoise");

    let winner = await playBattle(pokemon1,pokemon2)

    console.log("winner : " + winner.name)
}

main()