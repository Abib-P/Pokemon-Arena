import Pokedex from "pokedex-promise-v2";
import {Move} from "./Move";

export class Pokemon {
    moves: Array<Move>;
    types: string[];
    name: string;
    maxHitPoint: number;
    hitPoints: number;
    attack: number;
    attackModifier: number;
    defense: number;
    defenseModifier: number;
    speed: number;
    speedModifier: number;
    spAttack: number;
    spAttackModifier: number;
    spDefense: number;
    spDefenseModifier: number;
    level: number;

    constructor(name: string, hitPoints: number, attack: number, defense: number, spAttack: number, spDefense: number, speed: number, types: string[], level: number, moves:Array<Move>) {
        this.name = name;
        this.maxHitPoint = hitPoints;
        this.hitPoints = hitPoints;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.spAttack = spAttack;
        this.spDefense = spDefense;
        this.attackModifier = 0;
        this.defenseModifier = 0;
        this.speedModifier = 0;
        this.spAttackModifier = 0;
        this.spDefenseModifier = 0;
        this.types = types;
        this.level = level;
        this.moves = moves;
    }

    static async constructPokemonFromName(name: string): Promise<Pokemon> {
        const pokedex = new Pokedex();
        const pokemon = await pokedex.getPokemonByName(name);
        let pokemonTypes: string[] = pokemon.types.map((value => {
                return value.type.name
            })
        )
        return new Pokemon(
            pokemon.name,                   //name
            pokemon.stats[0].base_stat,     //hitPoints
            pokemon.stats[1].base_stat,     //attack
            pokemon.stats[2].base_stat,     //defense
            pokemon.stats[3].base_stat,     //SpAttack
            pokemon.stats[4].base_stat,     //SpDefence
            pokemon.stats[5].base_stat,     //Speed
            pokemonTypes,                   //types
            50,                             //level
             [new Move("Charge",10),new Move("Elec",40)]                   //moves of the pokemon
        );
    }

    takeAttack(move:Move,attack:number): number {
        let damage = ( move.power + attack ) - this.defense;
        if (damage < 0)
            damage = 0;
        this.hitPoints -= damage
        if(this.hitPoints < 0)
            this.hitPoints = 0
        return damage;
    }

    getRandomMove():Move{
        return this.moves[Math.floor(Math.random() * this.moves.length)]
    }

    isAlive():Boolean{
        return !(this.hitPoints == 0)
    }
}