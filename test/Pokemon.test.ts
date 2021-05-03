import {Pokemon} from "../main/Pokemon";
import {Move} from "../main/Move";

describe("Test Pokemon",() => {
    it("should create a pokemon", () => {
        let pokemon = new Pokemon("poek-poek", 100,35,40,50,66,27,["normal"],50,[new Move("move",40)]);
        expect(pokemon.name).toBe("poek-poek");
        expect(pokemon.hitPoints).toBe(100);
        expect(pokemon.attack).toBe(35);
        expect(pokemon.defense).toBe(40);
        expect(pokemon.spAttack).toBe(50);
        expect(pokemon.spDefense).toBe(66);
        expect(pokemon.speed).toBe(27);
        expect(pokemon.types).toContain("normal");
        expect(pokemon.level).toBe(50);
        expect(pokemon.moves).toStrictEqual([new Move("move",40)]);
    })

    it("should reduce the life of the pokemon that takes attack", () => {
        let firstPokemon = new Pokemon("firstPokemon",100,10,10,10,10,10,["normal"],10,[new Move("moveName",0)]);

        let result = firstPokemon.takeAttack(new Move("move",50),20);

        expect(result).toBe(60);
        expect(firstPokemon.hitPoints).toBe(40);
    })

    it("should pokemon not take damage if defence is superior to attack", () => {
        let firstPokemon = new Pokemon("firstPokemon",100,10,100,10,10,10,["normal"],10,[new Move("moveName",0)]);

        let result = firstPokemon.takeAttack(new Move("move",50),20);

        expect(result).toBe(0);
        expect(firstPokemon.hitPoints).toBe(100);
    })

    it("should pokemon not be at negative hitPoint after fatal attack", () => {
        let firstPokemon = new Pokemon("firstPokemon",100,10,100,10,10,10,["normal"],10,[new Move("moveName",0)]);

        let result = firstPokemon.takeAttack(new Move("move",500),20);

        expect(result).toBe(420);
        expect(firstPokemon.hitPoints).toBe(0);
    })

    it("should pokemon be alive if hitPoint superior to 0", () => {
        let firstPokemon = new Pokemon("firstPokemon",100,10,100,10,10,10,["normal"],10,[new Move("moveName",0)]);

        let result = firstPokemon.isAlive();

        expect(result).toBe(true);
    })

    it("should pokemon be dead if hitPoint equal to 0", () => {
        let firstPokemon = new Pokemon("firstPokemon",0,10,100,10,10,10,["normal"],10,[new Move("moveName",0)]);

        let result = firstPokemon.isAlive();

        expect(result).toBe(false);
    })

    it("should return the move if this is the only one the pokemon have", () => {
        let move = new Move("move",30)
        let firstPokemon = new Pokemon("firstPokemon",0,10,100,10,10,10,["normal"],10,[move]);

        let result = firstPokemon.getRandomMove();

        expect(result).toBe(move);
    })
})
