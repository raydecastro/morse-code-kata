import {expect} from "chai";
import MorseCode from "../source/morsecode.js";

describe("MorseCode", () => {
    it("shall exist", () => {
        let mc = new MorseCode();

        expect(mc).to.not.be.undefined;
    });

    it("shall generate a dot as one unit", () => {
        let mc = new MorseCode();

        expect(mc.generateDot()).to.equal(".");
        expect(mc.generateDot().length).to.equal(1);
    });

    it("shall generate dash as three units", () => {
        let mc = new MorseCode();

        expect(mc.generateDash()).to.equal("---");
        expect(mc.generateDash().length).to.equal(3);
    });

    it("shall generate a space between the same letter as one unit", () => {
        let mc = new MorseCode();

        expect(mc.generateSpaceBetweenSameLetter()).to.equal(" ");
        expect(mc.generateSpaceBetweenSameLetter().length).to.equal(1);
    });

    it("shall generate space between different letters as three units", () => {
        let mc = new MorseCode();

        expect(mc.generateSpaceBetweenDifferentLetters()).to.equal("   ");
        expect(mc.generateSpaceBetweenDifferentLetters().length).to.equal(3);
    });

    it("shall generate space between words as seven units", () => {
        let mc = new MorseCode();

        expect(mc.generateSpaceBetweenWords()).to.equal("       ");
        expect(mc.generateSpaceBetweenWords().length).to.equal(7);
    });

    it("shall generate letter 'A' as '. ---' [dot dash]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = ". ---";

        expect(mc.generateLetter('A')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('a')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'B' as '--- . . .' [dash dot dot dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- . . .";

        expect(mc.generateLetter('B')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('b')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'C' as '--- . --- .' [dash dot dash dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- . --- .";

        expect(mc.generateLetter('C')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('c')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'D' as '--- . .' [dash dot dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- . .";

        expect(mc.generateLetter('D')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('d')).to.equal(expectedMorseCode);
    });
});
