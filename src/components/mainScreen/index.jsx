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
            mistakeCount: 0,
            currentWord: '',
            typedLetter: '',
        }
    }

    // componentWillMount() {
    //     this.generateWord()
    // }

    componentWillMount() {
        const word = randomWord();
        this.setState({
            currentWord: word,
        });

        console.log('skurwol', wordsCollection)

    }

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            let letterLength = this.state.currentWord.split('').length

            if (keyCodes[e.keyCode] === this.state.currentWord.split('')[this.state.typedLetter.length]) {
                keyCodes[e.keyCode]
                this.setState({
                    typedLetter: this.state.typedLetter + keyCodes[e.keyCode]
                })

                if (letterLength === this.state.typedLetter.length) {
                    document.getElementById('wordContainer').innerHTML = ''

                    console.log('nowe słowo')
                    this.setState({
                        currentWord: randomWord()
                    });
                }

            } else {
                this.setState({
                    mistakeCount: this.state.mistakeCount + 1,
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
        let wordLetters = this.state.currentWord.split('')

        console.log('skurwol', wordLetters)
        
        return <div id='wordContainer' className={style.body}>
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