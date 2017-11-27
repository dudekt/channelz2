import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import { Test } from './components/test'

import style from './styles/main.css'

console.log(style)

ReactDOM.render(
    <Test />,
    document.getElementById('root')
);