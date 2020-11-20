import MorseCodeGenerator from "./morsecodegenerator.js";

class App {
    constructor() {
        this.love = "love is the most powerful force in the universe";
    }

    run() {
        let mcg = new MorseCodeGenerator();
        
        console.log(mcg.generate(this.love));
        return true; 
    }
}

export default App;
