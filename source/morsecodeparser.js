class MorseCodeParser {
    constructor() {
        this.spaceBetweenDifferentLetters = "   ";
        this.spaceBetweenWords = "       ";
    }

    parse(morseCode) {
        let sentence = "";
        let words = morseCode.split(this.spaceBetweenWords);

        words.forEach((word, index, words) => {
            let letters = word.split(this.spaceBetweenDifferentLetters);

            letters.forEach(letter => {
                sentence += this.parseMorseCodeLetter(letter);
            });

            if (index < words.length - 1) {
                sentence += " ";
            }
        });

        return sentence;
    }

    parseMorseCodeLetter(morseCodeLetter) {
        let morseCodeToLetterHashTable = {
            ". ---": "a",
            "--- . . .": "b",
            "--- . --- .": "c",
            "--- . .": "d",
            ".": "e",
            ". . --- .": "f",
            "--- --- .": "g",             
            ". . . .": "h",
            ". .": "i",
            ". --- --- ---": "j",
            "--- . ---": "k",
            ". --- . .": "l",   
            "--- ---": "m",
            "--- .": "n", 
            "--- --- ---": "o",
            ". --- --- .": "p",
            "--- --- . ---": "q", 
            ". --- .": "r", 
            ". . .": "s", 
            "---": "t", 
            ". . ---": "u", 
            ". . . ---": "v", 
            ". --- ---": "w", 
            "--- . . ---": "x", 
            "--- . --- ---": "y", 
            "--- --- . .": "z", 
            ". --- --- --- ---": "1", 
            ". . --- --- ---": "2", 
            ". . . --- ---": "3", 
            ". . . . ---": "4", 
            ". . . . .": "5", 
            "--- . . . .": "6", 
            "--- --- . . .": "7", 
            "--- --- --- . .": "8", 
            "--- --- --- --- .": "9", 
            "--- --- --- --- ---": "0"
        };

        return morseCodeToLetterHashTable[morseCodeLetter];
    }
}

export default MorseCodeParser;
