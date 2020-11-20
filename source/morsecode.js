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
            case '1': return this.generateMorseCodeLetter(".----");
            case '2': return this.generateMorseCodeLetter("..---");
            case '3': return this.generateMorseCodeLetter("...--");
            case '4': return this.generateMorseCodeLetter("....-");
            case '5': return this.generateMorseCodeLetter(".....");
            case '6': return this.generateMorseCodeLetter("-....");
            case '7': return this.generateMorseCodeLetter("--...");
            case '8': return this.generateMorseCodeLetter("---..");
            case '9': return this.generateMorseCodeLetter("----.");
            case '0': return this.generateMorseCodeLetter("-----");
            case ' ': return this.generateSpaceBetweenWords();
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

    generate(sentence) {
        let morseCodeSentence = "";

        for (let i = 0; i < sentence.length; i += 1) {
            let letter = sentence.charAt(i);

            morseCodeSentence += this.generateLetter(letter);

            if ( this.isNotTheLastCharacter(i, sentence) 
              && this.isNextCharacterNotASpace(sentence, i) 
              && this.isCurrentLetterASpace(letter) ) {
                morseCodeSentence += this.generateSpaceBetweenDifferentLetters();
            }
        }

        return morseCodeSentence;
    }

    isNotTheLastCharacter(i, sentence) {
        return i < sentence.length - 1;
    }

    isNextCharacterNotASpace(sentence, i) {
        return sentence.charAt(i + 1) !== ' ';
    }

    isCurrentLetterASpace(letter) {
        return letter !== ' ';
    }
}

export default MorseCode;
