import {playBattle, playTurn, witchPokemonStart} from '../main/Battle'
import {Pokemon} from "../main/Pokemon";
import {Move} from "../main/Move";

describe("Test Battle", () => {
    it("should return the first pokemon when attack with more speed than the second", () => {
        let firstPokemon = new Pokemon("firstPokemon",10,10,10,10,10,101,["normal"],10,[new Move("moveName",0)]);
        let secondPokemon = new Pokemon("secondPokemon",10,10,10,10,10,10,["normal"],10,[new Move("moveName",0)]);

        let result = witchPokemonStart(firstPokemon, secondPokemon);

        expect(result).toBe(firstPokemon);
    })

    it("should return the second pokemon when attack with more speed than the first", () => {
        let firstPokemon = new Pokemon("firstPokemon",10,10,10,10,10,10,["normal"],10,[new Move("moveName",0)]);
        let secondPokemon = new Pokemon("secondPokemon",10,10,10,10,10,102,["normal"],10,[new Move("moveName",0)]);

        let result = witchPokemonStart(firstPokemon, secondPokemon);

        expect(result).toBe(secondPokemon);
    })

    it("should the first pokemon and the second pokemon take damage after one turn", () => {
        let firstPokemon = new Pokemon("firstPokemon",120,10,10,10,10,10,["normal"],10,[new Move("moveName",10)]);
        let secondPokemon = new Pokemon("secondPokemon",150,10,10,10,10,102,["normal"],10,[new Move("moveName",40)]);

        playTurn(firstPokemon,secondPokemon)

        expect(firstPokemon.hitPoints).toBe(80);
        expect(secondPokemon.hitPoints).toBe(140);
    })

    it("should the first pokemon not attack if the second pokemon kill him before his turn", () => {
        let firstPokemon = new Pokemon("firstPokemon",120,10,10,10,10,10,["normal"],10,[new Move("moveName",10)]);
        let secondPokemon = new Pokemon("secondPokemon",150,10,10,10,10,102,["normal"],10,[new Move("moveName",400)]);

        playTurn(firstPokemon,secondPokemon)

        expect(firstPokemon.hitPoints).toBe(0);
        expect(secondPokemon.hitPoints).toBe(150);
    })

    it("should the second pokemon not attack if the first pokemon kill him before his turn", () => {
        let firstPokemon = new Pokemon("firstPokemon",120,10,10,10,10,150,["normal"],10,[new Move("moveName",1000)]);
        let secondPokemon = new Pokemon("secondPokemon",150,10,10,10,10,102,["normal"],10,[new Move("moveName",400)]);

        playTurn(firstPokemon,secondPokemon)

        expect(firstPokemon.hitPoints).toBe(120);
        expect(secondPokemon.hitPoints).toBe(0);
    })

    it("should the second pokemon won the battle", () => {
        let firstPokemon = new Pokemon("firstPokemon",120,10,10,10,10,10,["normal"],10,[new Move("moveName",20)]);
        let secondPokemon = new Pokemon("secondPokemon",150,10,10,10,10,12,["normal"],10,[new Move("moveName",30)]);

        let result = playBattle(firstPokemon,secondPokemon)

        expect(result).toBe(secondPokemon);
        expect(firstPokemon.isAlive()).toBe(false);
        expect(secondPokemon.isAlive()).toBe(true);
        expect(secondPokemon.hitPoints).toBe(90)
    })

    it("should the first pokemon won the battle", () => {
        let firstPokemon = new Pokemon("firstPokemon",120,10,10,10,10,10,["normal"],10,[new Move("moveName",40)]);
        let secondPokemon = new Pokemon("secondPokemon",150,10,10,10,10,12,["normal"],10,[new Move("moveName",20)]);

        let result = playBattle(firstPokemon,secondPokemon)

        expect(result).toBe(firstPokemon);
        expect(firstPokemon.isAlive()).toBe(true);
        expect(secondPokemon.isAlive()).toBe(false);
        expect(firstPokemon.hitPoints).toBe(40)
    })
})