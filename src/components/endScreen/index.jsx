import React from 'react'

import style from './style.scss'

export default class endScreen extends React.Component {
    
        constructor() {
            super()
        }
    
        componentWillMount() {
        }
    
        componentWillUnmount() {
        }
    
        componentDidMount() {
        }
    
        render() {
    
            return <div className={style.body}>
                skurwol
                
                <button
                    onClick={this.props.resetWords}
                >
                    jeszcze raz
                </button>
            </div>
        }
    }