export const findFirstSentence = (text: string): string => {
    if (text.length === 0) {
        return text;
    }

    const regex: RegExp = /([.?!])/g;
    const sentences: string[] = text.split(regex);
    const firstSentence = sentences.shift();

    if (firstSentence === undefined) {
        return text;
    }

    return firstSentence.toString();
}