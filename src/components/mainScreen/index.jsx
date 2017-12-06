import React from 'react'
import Mousetrap from 'mousetrap'

import { keyCodes } from 'Components/keyCodes/'
import style from './style.scss'

let words = [
    'skurwol',
    'skurwolik',
    'skurwolix'
]

const randomWord = () => {
    let random = words[Math.floor(Math.random() * words.length)]
    let index = words.indexOf(random)
    console.log(words.splice(index, 1), words)
    words.splice(index, 1)

    return random
}

let word = randomWord()

let wordLetters = word.split('')

export default class MainScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            currentWord: '',
            typedLetter: ''
        }
    }

    componenWillMount() {
        this.setState({
            currentWord: wordLetters.join('')
        })
    }

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            let letterLength = wordLetters.length

            console.log('skurwol', )
            if (keyCodes[e.keyCode] === wordLetters[this.state.typedLetter.length]) {
                keyCodes[e.keyCode]
                this.setState({
                    typedLetter: this.state.typedLetter + keyCodes[e.keyCode]
                })

                if (letterLength === this.state.typedLetter.length) {
                    console.log('nowe słowo')
                    document.getElementById('chuj').innerHTML = ''
                    let word = randomWord()
                }

            } else {
                this.setState({
                    typedLetter: ''
                })
            }
        })
    }

    render() {
        return <div id='chuj' className={style.body}>
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