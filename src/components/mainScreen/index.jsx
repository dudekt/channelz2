import React from 'react'

import style from './style.css'

let levelSize = [4, 4]

const generateLevel = (levelSize) => {
    const bricks  = []

    const generate = (levelSize) => {
        let levelWidth = parseInt(levelSize[0])
        let levelHeight = parseInt(levelSize[1])
        let totalBricks = levelWidth * levelHeight

        let height = (100/levelHeight) + '%'
        
        for (let i = 0; i < totalBricks; i++) {
            bricks.push(<div
                className={style['brick']}
                style={{
                    'height': (100/levelHeight) + '%',
                    'width': (100/levelWidth) + '%',
                }}
            >
                dupa
            </div>)
        }

        return bricks
    }

    levelSize.length === 2
        ? generate(levelSize)
        : console.log('something is wrong', levelSize)

    return bricks
}

export default class MainScreen extends React.Component {

    render() {

        return <div className={style['body']}>
            <div className={style['mainWindow']}>
                <div className={style['top']}>
                    {generateLevel(levelSize)}
                </div>
                <div className={style['bottom']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem voluptatibus quo nesciunt dolorem quibusdam neque libero quae ducimus iste fuga illum reprehenderit, aliquam, perferendis, praesentium placeat veniam porro nam.
                </div>
            </div>
        </div>
    }
}