import React from 'react'
import Mousetrap from 'mousetrap'

import { keyCodes } from 'Components/keyCodes/'
import style from './style.scss'

let wordsCollection = [
    'skurwol',
    'skurwolik',
    'skurwolix'
]

const randomWord = () => {
    let random = wordsCollection[Math.floor(Math.random() * wordsCollection.length)]
    let index = wordsCollection.indexOf(random)
    wordsCollection.splice(index, 1)

    return random
}

export default class MainScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            mistakeLength: 0,
            currentWord: '',
            typedLetter: '',
        }
    }

    componenWillMount() {
        generateWord()
    }

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            let letterLength = wordLetters.length

            if (keyCodes[e.keyCode] === wordLetters[this.state.typedLetter.length]) {
                keyCodes[e.keyCode]
                this.setState({
                    typedLetter: this.state.typedLetter + keyCodes[e.keyCode]
                })

                if (letterLength === this.state.typedLetter.length) {
                    console.log('nowe słowo')
                    let word = randomWord()
                }

            } else {
                this.setState({
                    mistakeLength: this.state.mistakeLength + 1,
                    typedLetter: '',
                })
            }
        })
    }

    generateWord() {
        let word = randomWord()
        let wordLetters = word.split('')

        this.setState({
            currentWord: wordLetters.join('')
        })
    }

    render() {
        return <div className={style.body}>
            {wordLetters.map((letter, index) => {

                let letterLength = wordLetters.length
                console.log(letterLength)

                return [
                    <span
                        key={letter}
                        className={this.state.typedLetter.includes(wordLetters.slice(0, index + 1).join(''))
                            ? style.test
                            : ''
                        }
                        style={{
                            fontSize: `${200 / letterLength}vh`
                        }}
                    >
                        {letter}
                    </span>
                ]
            })}
        </div>
    }
}