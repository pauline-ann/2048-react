import { useState } from 'react'
import Tile from './Tile'
import Cell from './Cell'
import { Board } from '../util/gameLogic'
import useEvent from '../hooks/useEvent'
import Overlay from './Overlay'

const BoardView = () => {
    const [board, setBoard] = useState(new Board())

    const handleKeyDown = (event) => {
        if (board.hasWon()) {
            return
        }

        if (event.keyCode >= 37 && event.keyCode <= 40) {
            let direction = event.keyCode - 37
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
            let newBoard = boardClone.move(direction)
            setBoard(newBoard)
        }
    }

    useEvent('keydown', handleKeyDown)

    // Empty cells beneath Tiles
    const cells = board.cells.map((row, rowIndex) => {
        return (
            <div key={rowIndex}>
                {row.map((col, colIndex) => {
                    return <Cell key={rowIndex * board.size + colIndex} /> // unique key
                })}
            </div>
        )
    })

    // Filter through and return Tiles that aren't empty
    const tiles = board.tiles
        .filter((tile) => tile.value !== 0)
        .map((tile, index) => {
            return <Tile tile={tile} key={index} />
        })

    const resetGame = () => {
        setBoard(new Board())
    }

    return (
        <div>
            <div className='details-box'>
                <div className='reset-button no-select' onClick={() => resetGame()}>new game</div>
                <div className='score-box no-select'>
                    <div className='score-header'>SCORE</div>
                    <div>{board.score}</div>
                </div>
            </div>
            <div className='board'>
                {cells}
                {tiles}
                <Overlay onRestart={resetGame} board={board} />
            </div>
        </div>
    )
}

export default BoardView