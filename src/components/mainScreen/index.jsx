import React from 'react'

import style from './style.css'

let levelSize = [20, 15]

let levelWidth = levelSize[0]
let levelHeight = levelSize[1]
let maxSize = Math.max(levelWidth, levelHeight)

let height = (32 * levelHeight)
let width = (32 * levelWidth)

const generateLevel = (levelSize) => {
    const bricks  = []

    const generate = (levelSize) => {
        
        let totalBricks = levelWidth * levelHeight


        let brickDiv = <div
            className={style['brick']}
        >
        </div>

        for (let i = 0; i < totalBricks; i++) {
            bricks.push(brickDiv)
        }

        return bricks
    }

    levelSize.length === 2
        ? generate(levelSize)
        : console.log('something went wrong', levelSize)

    return bricks
}

export default class MainScreen extends React.Component {

    render() {

        return <div className={style['body']}>
            <div className={style['mainWindow']}>
                <div
                    className={style['top']}
                    style={{
                        'height': height,
                        'width': width,
                    }}
                >
                    {generateLevel(levelSize)}
                </div>
                <div className={style['bottom']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem voluptatibus quo nesciunt dolorem quibusdam neque libero quae ducimus iste fuga illum reprehenderit, aliquam, perferendis, praesentium placeat veniam porro nam.
                </div>
            </div>
        </div>
    }
}