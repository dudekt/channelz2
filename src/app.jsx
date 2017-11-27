import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import { AppContainer } from 'react-hot-loader'
import Test from 'Components/test'
import style from 'Styles/main.css'

const render = (Test) => ReactDOM.render(
    <AppContainer>
        <Test />
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('Components/test', function () {
        console.log('Accepting the updated test module!');
        render(Test);
    })
}

render(Test);