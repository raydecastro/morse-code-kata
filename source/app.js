import MorseCode from "./morsecode.js";

class App {
    constructor() {
        this.love = "love is the most powerful force in the universe";
    }

    run() {
        let mc = new MorseCode();
        
        console.log(mc.generate(this.love));
        return true; 
    }
}

export default App;
