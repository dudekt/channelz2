import React from 'react'

import style from './../styles/main.css'

export default class Test extends React.Component {
    render() {
        return <h1 className={style.test}>Hello Webpack</h1>;
    }
}