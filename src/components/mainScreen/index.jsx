import React from 'react'
import Mousetrap from 'mousetrap'

import { randomWord } from 'Components/randomWord/'
import { keyCodes } from 'Components/keyCodes/'
import EndScreen from 'Components/endScreen/'
import style from './style.scss'
import endScreen from '../endScreen/index';

export default class MainScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            mistakeCount: 0,
            currentWord: '',
            typedLetter: '',
            endTyping: false,
        }
    }

    componentWillMount() {
        this.generateWord()
    }

    componentWillUnmount() {
        this.removeListener()
    }

    componentDidMount() {
        document.addEventListener('keydown', this.writeWord)
    }

    generateWord() {
        let word = randomWord()
        let wordLetters = word.split('')

        this.setState({
            currentWord: wordLetters
        })
    }

    writeWord = (e) => {
        let letterLength = this.state.currentWord.length
        if (keyCodes[e.keyCode] === this.state.currentWord[this.state.typedLetter.length]) {
            keyCodes[e.keyCode]
            this.setState({
                typedLetter: this.state.typedLetter + keyCodes[e.keyCode]
            })

            if (letterLength === this.state.typedLetter.length) {

                let newWord = randomWord()

                console.log('nowe słowo')

                if (newWord !== undefined) {
                    this.setState({
                        currentWord: newWord.split(''),
                        typedLetter: '',
                    });
                } else {
                    this.removeListener()
                    this.setState({
                        endTyping: true,
                    });
                }
            }
        } else {
            this.setState({
                mistakeCount: this.state.mistakeCount + 1,
                typedLetter: '',
            })
        }
    }

    removeListener() {
        document.removeEventListener('keydown', this.writeWord)
    }

    render() {

        return <div id='wordContainer' className={style.body}>
            {!this.state.endTyping
                ? <div>
                    <span key={this.state.currentWord.join('')}>
                        {this.state.currentWord.map((letter, index) => {
                            let letterLength = this.state.currentWord.length
                            return [
                                <span
                                    key={letter}
                                    className={this.state.typedLetter.includes(this.state.currentWord.slice(0, index + 1).join(''))
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
                    </span>
                    <div
                        className={style.mistakeCount}
                        style={{
                            fontSize: '6vh'
                        }}
                    >
                        Błędy: {this.state.mistakeCount}
                    </div>
                </div>
                : <EndScreen />
            }

            
        </div>
    }
}