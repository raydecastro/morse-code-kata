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

    it("shall generate letter 'E' as '.' [dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = ".";

        expect(mc.generateLetter('E')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('e')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'F' as '. . --- .' [dot dot dash dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = ". . --- .";

        expect(mc.generateLetter('F')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('f')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'G' as '--- --- .' [dash dash dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- --- .";

        expect(mc.generateLetter('G')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('g')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'H' as '. . . .' [dot dot dot dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = ". . . .";

        expect(mc.generateLetter('H')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('h')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'I' as '. .' [dot dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = ". .";

        expect(mc.generateLetter('I')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('i')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'J' as '. --- --- ---' [dot dash dash dash]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = ". --- --- ---";

        expect(mc.generateLetter('J')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('j')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'K' as '--- . ---' [dash dot dash]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- . ---";

        expect(mc.generateLetter('K')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('k')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'L' as '. --- . .' [dot dash dot dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = ". --- . .";

        expect(mc.generateLetter('L')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('l')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'M' as '--- ---' [dash dash]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- ---";

        expect(mc.generateLetter('M')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('m')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'N' as '--- .' [dash dot]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- .";

        expect(mc.generateLetter('N')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('n')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'O' as '--- --- ---' [dash dash dash]", () => {
        let mc = new MorseCode();
        let expectedMorseCode = "--- --- ---";

        expect(mc.generateLetter('O')).to.equal(expectedMorseCode);
        expect(mc.generateLetter('o')).to.equal(expectedMorseCode);
    });
});
