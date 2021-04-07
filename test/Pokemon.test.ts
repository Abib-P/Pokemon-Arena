import {Pokemon} from "../main/Pokemon";

describe("Test Pokemon",() => {
    it("should create a pokemon", () => {
        let pokemon = new Pokemon("poek-poek", 0);
        expect(pokemon.name).toBe("poek-poek");
        expect(pokemon.speed).toBe(0);
    })
})
