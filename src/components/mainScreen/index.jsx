import React from 'react'
import classnames from 'classnames'
import Mousetrap from 'mousetrap'

import { wordsCollection } from 'Components/wordsCollection/'
import { keyCodes } from 'Components/keyCodes/'
import EndScreen from 'Components/endScreen/'
import style from './style.scss'
import endScreen from '../endScreen/index';

export default class MainScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            wordsArray: [...wordsCollection],
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
        this.addListener()
    }

    randomWord() {
        let wordsCollection = this.state.wordsArray

        if (wordsCollection.length > 0) {
            let random = wordsCollection[Math.floor(Math.random() * wordsCollection.length)]
            let index = wordsCollection.indexOf(random)
            wordsCollection.splice(index, 1)
            return random
        } else {
            return undefined
        }
    }

    generateWord() {
        let word = this.randomWord()
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

                let newWord = this.randomWord()

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

    addListener() {
        document.addEventListener('keydown', this.writeWord)
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
                                    className={classnames(
                                        style.letter,
                                        this.state.typedLetter.includes(this.state.currentWord.slice(0, index + 1).join(''))
                                        ? style.test
                                        : ''
                                    )}
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
                : <EndScreen
                    resetWords={() => this.setState({
                        wordsArray: [...wordsCollection],
                        endTyping: false,
                        typedLetter: '',
                        mistakeCount: 0,
                    }, () => {
                        this.generateWord()
                        this.addListener()
                    })}
                />
            }

            
        </div>
    }
}