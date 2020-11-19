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
            case 'a': return this.dot + this.spaceBetweenSameLetter + this.dash;
            case 'b': return this.dash + this.spaceBetweenSameLetter + this.dot + this.spaceBetweenSameLetter + this.dot + this.spaceBetweenSameLetter + this.dot;
        }

        return undefined;
    }
}

export default MorseCode;
