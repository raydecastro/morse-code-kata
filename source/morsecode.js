class MorseCode {
    constructor() {
        this.dot = ".";
        this.dash = "---";
        this.spaceBetweenSameLetter = " ";
        this.spaceBetweenDifferentLetters = "   ";
        this.spaceBetweenWords = "       ";
    }

    generateDot() {
        return this.dot;
    }

    generateDash() {
        return this.dash;
    }

    generateSpaceBetweenSameLetter() {
        return this.spaceBetweenSameLetter;
    }

    generateSpaceBetweenDifferentLetters() {
        return this.spaceBetweenDifferentLetters;
    }

    generateSpaceBetweenWords() {
        return this.spaceBetweenWords;
    }

    generateLetter(letter) {
        switch(letter.toLowerCase()) {
            case 'a': return this.generateMorseCodeLetter(".-");
            case 'b': return this.generateMorseCodeLetter("-..."); 
            case 'c': return this.generateMorseCodeLetter("-.-.");
            case 'd': return this.generateMorseCodeLetter("-..");
            case 'e': return this.generateMorseCodeLetter(".");
            case 'f': return this.generateMorseCodeLetter("..-.");
            case 'g': return this.generateMorseCodeLetter("--.");            
            case 'h': return this.generateMorseCodeLetter("....");
            case 'i': return this.generateMorseCodeLetter("..");
            case 'j': return this.generateMorseCodeLetter(".---");
            case 'k': return this.generateMorseCodeLetter("-.-");
            case 'l': return this.generateMorseCodeLetter(".-..");
            case 'm': return this.generateMorseCodeLetter("--");
            case 'n': return this.generateMorseCodeLetter("-.");
            case 'o': return this.generateMorseCodeLetter("---");
            case 'p': return this.generateMorseCodeLetter(".--.");
            case 'q': return this.generateMorseCodeLetter("--.-");
            case 'r': return this.generateMorseCodeLetter(".-.");
            case 's': return this.generateMorseCodeLetter("...");
            case 't': return this.generateMorseCodeLetter("-");
            case 'u': return this.generateMorseCodeLetter("..-");
            case 'v': return this.generateMorseCodeLetter("...-");
            case 'w': return this.generateMorseCodeLetter(".--");
            case 'x': return this.generateMorseCodeLetter("-..-");
            case 'y': return this.generateMorseCodeLetter("-.--");
            case 'z': return this.generateMorseCodeLetter("--..");
        }

        throw new Error("Letter not yet implemented");
    }

    generateMorseCodeLetter(inputAsDotDash) {
        let morseCodeLetter = "";

        for (let i = 0; i < inputAsDotDash.length; i +=  1) {
            let code = inputAsDotDash.charAt(i);

            switch(code) {
                case '.': morseCodeLetter += this.dot; break;
                case '-': morseCodeLetter += this.dash; break;
            }

            if (this.isIndexNotTheLastOne(i, inputAsDotDash)) {
                morseCodeLetter += this.spaceBetweenSameLetter;
            }
        }

        return morseCodeLetter;
    }

    isIndexNotTheLastOne(i, inputAsDotDash) {
        return i < inputAsDotDash.length - 1;
    }
}

export default MorseCode;
