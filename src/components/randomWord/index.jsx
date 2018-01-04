let wordsCollection = [
    'Taaak',
    'Aaaa',
    'Aa'
]

let copyWordsCollection = wordsCollection.slice()


console.log('skurwol copy', wordsCollection)

export const randomWord = () => {
    
    console.log('skurwolik', copyWordsCollection)

    if (copyWordsCollection.length > 0) {
        let random = copyWordsCollection[Math.floor(Math.random() * copyWordsCollection.length)]
        let index = copyWordsCollection.indexOf(random)
        copyWordsCollection.splice(index, 1)

        console.log('random', random)

        return random
    } else {
        return undefined
    }
}

export const resetWords = () => {
    let copyWordsCollection = wordsCollection

    console.log('skurwol origin', wordsCollection, copyWordsCollection)
}