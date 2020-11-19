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
        }

        return undefined;
    }

    generateMorseCodeLetter(inputAsDotDash) {
        let morseCodeLetter = "";
        for (let i = 0; i < inputAsDotDash.length; i += 1) {
            let code = inputAsDotDash.charAt(i);
            switch(code) {
                case '.': morseCodeLetter += this.dot; break;
                case '-': morseCodeLetter += this.dash; break;
            }

            if (i < inputAsDotDash.length - 1) {
                morseCodeLetter += this.spaceBetweenSameLetter;
            }
        }

        return morseCodeLetter;
    }
}

export default MorseCode;
