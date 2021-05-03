import {Pokemon} from "./Pokemon";
async function delay(delayInms:number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

export async function playBattle(firstPokemon: Pokemon, secondPokemon: Pokemon): Promise<Pokemon> {
    while(firstPokemon.isAlive() && secondPokemon.isAlive()) {
        playTurn(firstPokemon, secondPokemon)
        let delayed = await delay(1000);

    }
    if(firstPokemon.isAlive()){
        return firstPokemon;
    } else {
        return secondPokemon;
    }
}

export function playTurn(firstPokemon: Pokemon, secondPokemon: Pokemon) {
    if(witchPokemonStart(firstPokemon,secondPokemon) == firstPokemon){
        let firstPokemonMove = firstPokemon.getRandomMove();
        secondPokemon.takeAttack(firstPokemonMove,firstPokemon.attack);
        if(secondPokemon.isAlive()){
            let secondPokemonMove = secondPokemon.getRandomMove();
            firstPokemon.takeAttack(secondPokemonMove,secondPokemon.attack);
        }
    }
    else {
        let secondPokemonMove = secondPokemon.getRandomMove();
        firstPokemon.takeAttack(secondPokemonMove,secondPokemon.attack);
        if(firstPokemon.isAlive()){
            let firstPokemonMove = firstPokemon.getRandomMove();
            secondPokemon.takeAttack(firstPokemonMove,firstPokemon.attack);
        }
    }
}

export function witchPokemonStart(firstPokemon: Pokemon, secondPokemon: Pokemon): Pokemon {
    if (firstPokemon.speed === secondPokemon.speed) {
        if (Math.random() > 0.5) {
            return firstPokemon;
        }
        return secondPokemon;
    }
    return firstPokemon.speed > secondPokemon.speed ? firstPokemon : secondPokemon;
}