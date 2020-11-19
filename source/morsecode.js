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

    generateA() {
        return this.dot + this.spaceBetweenSameLetter + this.dash;
    }
}

export default MorseCode;
