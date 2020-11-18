import {expect} from "chai";
import App from "../source/app.js";

describe("App", () => {
    it("shall exist", () => {
        let app = new App();

        expect(app).to.not.be.undefined;
    });

    it("shall have a run method", () => {
        let app = new App();

        expect(app.run()).to.be.true;
    });
});
