import {expect} from "chai";
import MorseCode from "../source/morsecode.js";

describe("MorseCode", () => {
    it("shall exist", () => {
        let mc = new MorseCode();

        expect(mc).to.not.be.undefined;
    });
});
