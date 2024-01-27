const countCharacters = (text) => {
    return text.length;
}
const countWords = (text) => {
    return text.split(/[\s-_]+/).filter(word => word !== '').length;
}
const countSentences = (text) => {
    return text.split(/[.!?]+/).filter(sentence => sentence !== '').length;
}
const countParagraphs = (text) => {
    return text.split('\n').filter(paragraph => paragraph !== '').length;
}
const countSpaces = (text) => {
    return text.split(/\s/).length - 1;
}
const countPunctuations = (inputString) => {
    const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const matches = inputString.match(punctuationRegex);
    return matches ? matches.length : 0;
}
const fetchDictionaryData = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        console.log('Dictionary Data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching dictionary data:', error.message);
        return {"message": error.message}
    }
};

const TextAnalyzer = {
    countCharacters,
    countWords,
    countSentences,
    countParagraphs,
    countSpaces,
    countPunctuations,
    fetchDictionaryData
};

export default TextAnalyzer;