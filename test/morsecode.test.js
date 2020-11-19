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
});
