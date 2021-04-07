import {witchPokemonStart} from '../main/Battle'
import {Pokemon} from "../main/Pokemon";

describe("Test Battle", () => {
    it("should return the first pokemon when attack with more speed than the second", () => {
        let firstPokemon = new Pokemon("firstPokemon", 25);
        let secondPokemon = new Pokemon("secondPokemon", 15);

        let result = witchPokemonStart(firstPokemon, secondPokemon);

        expect(result).toBe(firstPokemon);
    })

    it("should return the second pokemon when attack with more speed than the first", () => {
        let firstPokemon = new Pokemon("firstPokemon",15);
        let secondPokemon = new Pokemon("secondPokemon",25);

        let result = witchPokemonStart(firstPokemon, secondPokemon);

        expect(result).toBe(secondPokemon);
    })

    /*it("equal speed", () => {
        //TODO test de random...
    })*/
})