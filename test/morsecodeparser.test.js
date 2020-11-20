import {expect} from "chai";
import MorseCodeParser from "../source/morsecodeparser.js";

describe("MorseCodeParser", () => {
    it("shall exist", () => {
        let mcp = new MorseCodeParser();

        expect(mcp).to.not.be.undefined;
    });

    it("shall parse morse code: '--- . --- .   . --- . .   .   . ---   . --- .       '\n"
        + "\t'--- . --- ---   --- --- ---   . . ---   . --- .       --- ---   . .   --- .   --- . .'\n"
        + "\tto: 'clear your mind'"
        , () => {
        let mcp = new MorseCodeParser();
        let inputMorse = "--- . --- .   . --- . .   .   . ---   . --- .       --- . --- ---   --- --- ---   . . ---   . --- .       --- ---   . .   --- .   --- . ."
        let expectedSentence = "clear your mind";

        expect(mcp.parse(inputMorse)).to.equal(expectedSentence);
    });

    it("shall parse morse code: '---   . . . .   .       '\n"
        + "\t'--- --- . ---   . . ---   . .   --- . --- .   --- . ---       '\n"
        + "\t'--- . . .   . --- .   --- --- ---   . --- ---   --- .       '\n"
        + "\t'. . --- .   --- --- ---   --- . . ---   --- . --- ---'\n"
        + "\tto: 'the quick brown foxy'"
        , () => {
        let mcp = new MorseCodeParser();
        let inputMorse = "---   . . . .   .       --- --- . ---   . . ---   . .   --- . --- .   --- . ---       --- . . .   . --- .   --- --- ---   . --- ---   --- .       . . --- .   --- --- ---   --- . . ---   --- . --- ---";
        let expectedSentence = "the quick brown foxy";

        expect(mcp.parse(inputMorse)).to.equal(expectedSentence);
    });
});