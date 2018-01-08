export const wordsCollection = [
    'aaa',
    'aaaa',
    'aaaaa'
]

export const randomWord = () => {
    if (wordsCollection.length > 0) {
        let random = wordsCollection[Math.floor(Math.random() * wordsCollection.length)]
        let index = wordsCollection.indexOf(random)
        wordsCollection.splice(index, 1)
        return random
    } else {
        return undefined
    }
}
