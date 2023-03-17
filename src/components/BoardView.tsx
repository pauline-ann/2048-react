import { useState } from 'react'
import Tile from './Tile'
import Cell from './Cell'
import { Board } from '../util/gameLogic'
import useEvent from '../hooks/useEvent'
import Overlay from './Overlay'

const BoardView = () => {
    const [board, setBoard] = useState(new Board())

    // Converts key code for WASD and arrow keys to integer from 0 - 3
    const convertDirection = (keyCode) => {
        switch (keyCode) {
            case 65:
                return 0
            case 37:
                return 0
            case 87:
                return 1
            case 38:
                return 1
            case 68:
                return 2
            case 39:
                return 2
            case 83:
                return 3
            case 40:
                return 3
        }
    }

    const handleKeyDown = (event) => {
        if (board.hasWon()) {
            return
        }

        const isArrowKeys = event.keyCode >= 37 && event.keyCode <= 40
        const isWASD = event.keyCode === 65 || event.keyCode === 87 || event.keyCode === 68 || event.keyCode === 83

        if (isArrowKeys || isWASD) {
            let direction = convertDirection(event.keyCode)
            let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
            let newBoard = boardClone.move(direction) // move tiles to specified direction
            setBoard(newBoard) // update board with new board
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
                <div className='reset-button no-select' onClick={() => resetGame()} />
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