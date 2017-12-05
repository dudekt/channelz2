import React from 'react'
import Mousetrap from 'mousetrap'

import { keyCodes } from 'Components/keyCodes/'
import style from './style.scss'

const words = [
    'skurwol',
    'skurwolik',
    'skurwolix'
]

const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)]
}

const word = randomWord()
const wordLetters = word.split('')

export default class MainScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            typedLetter: ''
        }
    }    

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if(keyCodes[e.keyCode] === wordLetters[this.state.typedLetter.length]){
                keyCodes[e.keyCode]
                this.setState({
                    typedLetter: this.state.typedLetter + keyCodes[e.keyCode]
                }) 
            } else {
                this.setState({
                    typedLetter: ''
                })
            }
        })
    }

    render() {
        return <div className={style['body']}>
            {wordLetters && 
                wordLetters.map((letter, index) => {
                    return [
                        <span
                            key={letter}
                            className={this.state.typedLetter.includes(wordLetters.slice(0, index + 1).join(''))
                                ? style.test
                                : ''
                            }
                        >
                            {letter}
                        </span>
                    ]
                })
            }
        </div>
    }
}