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
    render() {

        return <div className={style['body']}>
            {wordLetters && 
                wordLetters.map((letter) => {
                    return [
                        <span
                            key={letter}
                            ref={(node) =>{
                                Mousetrap.bind(letter, () => {node.classList.add(style.test)})
                                console.log('dupa', letter)
                            }}
                        >
                            {letter}
                        </span>
                    ]
                })
            }
        </div>
    }
}