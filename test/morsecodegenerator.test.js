import {expect} from "chai";
import MorseCodeGenerator from "../source/morsecodegenerator.js";

describe("MorseCodeGenerator", () => {
    it("shall exist", () => {
        let mcg = new MorseCodeGenerator();

        expect(mcg).to.not.be.undefined;
    });

    it("shall generate a dot as one unit", () => {
        let mcg = new MorseCodeGenerator();

        expect(mcg.generateDot()).to.equal(".");
        expect(mcg.generateDot().length).to.equal(1);
    });

    it("shall generate dash as three units", () => {
        let mcg = new MorseCodeGenerator();

        expect(mcg.generateDash()).to.equal("---");
        expect(mcg.generateDash().length).to.equal(3);
    });

    it("shall generate a space between the same letter as one unit", () => {
        let mcg = new MorseCodeGenerator();

        expect(mcg.generateSpaceBetweenSameLetter()).to.equal(" ");
        expect(mcg.generateSpaceBetweenSameLetter().length).to.equal(1);
    });

    it("shall generate space between different letters as three units", () => {
        let mcg = new MorseCodeGenerator();

        expect(mcg.generateSpaceBetweenDifferentLetters()).to.equal("   ");
        expect(mcg.generateSpaceBetweenDifferentLetters().length).to.equal(3);
    });

    it("shall generate space between words as seven units", () => {
        let mcg = new MorseCodeGenerator();

        expect(mcg.generateSpaceBetweenWords()).to.equal("       ");
        expect(mcg.generateSpaceBetweenWords().length).to.equal(7);
    });

    it("shall generate letter 'A' as '. ---' [dot dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". ---";

        expect(mcg.generateLetter('A')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('a')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'B' as '--- . . .' [dash dot dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . . .";

        expect(mcg.generateLetter('B')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('b')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'C' as '--- . --- .' [dash dot dash dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . --- .";

        expect(mcg.generateLetter('C')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('c')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'D' as '--- . .' [dash dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . .";

        expect(mcg.generateLetter('D')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('d')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'E' as '.' [dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ".";

        expect(mcg.generateLetter('E')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('e')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'F' as '. . --- .' [dot dot dash dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . --- .";

        expect(mcg.generateLetter('F')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('f')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'G' as '--- --- .' [dash dash dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- .";

        expect(mcg.generateLetter('G')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('g')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'H' as '. . . .' [dot dot dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . . .";

        expect(mcg.generateLetter('H')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('h')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'I' as '. .' [dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". .";

        expect(mcg.generateLetter('I')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('i')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'J' as '. --- --- ---' [dot dash dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". --- --- ---";

        expect(mcg.generateLetter('J')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('j')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'K' as '--- . ---' [dash dot dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . ---";

        expect(mcg.generateLetter('K')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('k')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'L' as '. --- . .' [dot dash dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". --- . .";

        expect(mcg.generateLetter('L')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('l')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'M' as '--- ---' [dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- ---";

        expect(mcg.generateLetter('M')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('m')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'N' as '--- .' [dash dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- .";

        expect(mcg.generateLetter('N')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('n')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'O' as '--- --- ---' [dash dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- ---";

        expect(mcg.generateLetter('O')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('o')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'P' as '. --- --- .' [dot dash dash dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". --- --- .";

        expect(mcg.generateLetter('P')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('p')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'Q' as '--- --- . ---' [dash dash dot dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- . ---";

        expect(mcg.generateLetter('Q')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('q')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'R' as '. --- .' [dot dash dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". --- .";

        expect(mcg.generateLetter('R')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('r')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'S' as '. . .' [dot dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . .";

        expect(mcg.generateLetter('S')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('s')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'T' as '---' [dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "---";

        expect(mcg.generateLetter('T')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('t')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'U' as '. . ---' [dot dot dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . ---";

        expect(mcg.generateLetter('U')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('u')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'V' as '. . . ---' [dot dot dot dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . . ---";

        expect(mcg.generateLetter('V')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('v')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'W' as '. --- ---' [dot dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". --- ---";

        expect(mcg.generateLetter('W')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('w')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'X' as '--- . . ---' [dash dot dot dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . . ---";

        expect(mcg.generateLetter('X')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('x')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'Y' as '--- . --- ---' [dash dot dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . --- ---";

        expect(mcg.generateLetter('Y')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('y')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'Z' as '--- --- . .' [dash dash dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- . .";

        expect(mcg.generateLetter('Z')).to.equal(expectedMorseCode);
        expect(mcg.generateLetter('z')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '1' as '. --- --- --- ---' [dot dash dash dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". --- --- --- ---";

        expect(mcg.generateLetter('1')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '2' as '. . --- --- ---' [dot dot dash dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . --- --- ---";

        expect(mcg.generateLetter('2')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '3' as '. . . --- ---' [dot dot dot dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . . --- ---";

        expect(mcg.generateLetter('3')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '4' as '. . . . ---' [dot dot dot dot dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . . . ---";

        expect(mcg.generateLetter('4')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '5' as '. . . . .' [dot dot dot dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". . . . .";

        expect(mcg.generateLetter('5')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '6' as '--- . . . .' [dash dot dot dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . . . .";

        expect(mcg.generateLetter('6')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '7' as '--- --- . . .' [dash dash dot dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- . . .";

        expect(mcg.generateLetter('7')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '8' as '--- --- --- . .' [dash dash dash dot dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- --- . .";

        expect(mcg.generateLetter('8')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '9' as '--- --- --- --- .' [dash dash dash dash dot]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- --- --- .";

        expect(mcg.generateLetter('9')).to.equal(expectedMorseCode);
    });

    it("shall generate letter '0' as '--- --- --- --- ---' [dash dash dash dash dash]", () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- --- --- --- ---";

        expect(mcg.generateLetter('0')).to.equal(expectedMorseCode);
    });

    it("shall generate sentence 'cat is in the hut' as '--- . --- .   . ---   ---       '\n"
        + "\t'. .   . . .       . .   --- .       ---   . . . .   .       . . . .   . . ---   ---'"
        , () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "--- . --- .   . ---   ---       . .   . . .       . .   --- .       ---   . . . .   .       . . . .   . . ---   ---";

        expect(mcg.generate('cat is in the hut')).to.equal(expectedMorseCode);
    });

    it("shall generate sentence 'rock and roll' as '. --- .   --- --- ---   --- . --- .   --- . ---       '\n"
        + "\t'. ---   --- .   --- . .       . --- .   --- --- ---   . --- . .   . --- . .'"
        , () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = ". --- .   --- --- ---   --- . --- .   --- . ---       . ---   --- .   --- . .       . --- .   --- --- ---   . --- . .   . --- . .";

        expect(mcg.generate('rock and roll')).to.equal(expectedMorseCode);
    });

    it("shall generate sentence 'the quick brown foxy' as '---   . . . .   .       '\n"
        + "\t'--- --- . ---   . . ---   . .   --- . --- .   --- . ---       '\n"
        + "\t'--- . . .   . --- .   --- --- ---   . --- ---   --- .       '\n"
        + "\t'. . --- .   --- --- ---   --- . . ---   --- . --- ---'"
        , () => {
        let mcg = new MorseCodeGenerator();
        let expectedMorseCode = "---   . . . .   .       --- --- . ---   . . ---   . .   --- . --- .   --- . ---       --- . . .   . --- .   --- --- ---   . --- ---   --- .       . . --- .   --- --- ---   --- . . ---   --- . --- ---";

        expect(mcg.generate('the quick brown foxy')).to.equal(expectedMorseCode);
    });

});
