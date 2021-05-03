import {Pokemon} from "../main/Pokemon";
import {Move} from "../main/Move";

describe("Test Move",() => {
    it("should create a move", () => {
        let move = new Move("move",40)
        expect(move.name).toBe("move")
        expect(move.power).toBe(40)
    })
})
