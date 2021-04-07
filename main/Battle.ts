import {Pokemon} from "./Pokemon";

export function witchPokemonStart(firstPokemon: Pokemon, secondPokemon: Pokemon): Pokemon {
    if (firstPokemon.speed === secondPokemon.speed) {
        if (Math.random() > 0.5) {
            return firstPokemon;
        }
        return secondPokemon;
    }
    return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
}