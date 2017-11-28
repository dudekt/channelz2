import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import { AppContainer } from 'react-hot-loader'
import MainScreen from 'Components/mainScreen'
import style from 'Styles/main.css'

const render = (MainScreen) => ReactDOM.render(
    <AppContainer>
        <MainScreen />
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('Components/mainScreen', function () {
        console.log('Accepting the updated MainScreen module!');
        render(MainScreen);
    })
}

render(MainScreen);