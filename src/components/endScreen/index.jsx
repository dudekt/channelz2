import React from 'react'

import { randomWord, resetWords } from 'Components/randomWord/'
import style from './style.scss'

export default class endScreen extends React.Component {
    
        constructor() {
            super()
        }
    
        componentWillMount() {
            resetWords()
        }
    
        componentWillUnmount() {
        }
    
        componentDidMount() {
        }
    
        render() {
    
            return <div className={style.body}>
                dupsko
                
                <button
                    onClick={() => randomWord()}
                >
                    jeszcze raz
                </button>
            </div>
        }
    }