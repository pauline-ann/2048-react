import { useState } from 'react'
import Tile from './Tile'
import Cell from './Cell'
import { Board } from '../util/gameLogic'
import useEvent from '../hooks/useEvent'
import Overlay from './Overlay'
import { convertDirection } from '../util/convertDirection'
import { useSwipeable } from 'react-swipeable'

const BoardView = () => {
    const [board, setBoard] = useState(new Board())
    const [test, setTest] = useState('hey')

    // update board according to what direction was pressed (or swiped if mobile)
    const updateBoard = (direction) => {
        let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board)
        let newBoard = boardClone.move(direction) // move tiles to specified direction
        setBoard(newBoard) // update board with new board
    }

    // handle swipe on touch screen
    const handlers = useSwipeable({
        onSwipedLeft: () => updateBoard(0),
        onSwipedUp: () => updateBoard(1),
        onSwipedRight: () => updateBoard(2),
        onSwipedDown: () => updateBoard(3),
    })

    const handleKeyDown = (event) => {
        if (board.hasWon()) {
            return
        }

        const isArrowKeys = event.keyCode >= 37 && event.keyCode <= 40
        const isWASD = event.keyCode === 65 || event.keyCode === 87 || event.keyCode === 68 || event.keyCode === 83

        if (isArrowKeys || isWASD) {
            let direction = convertDirection(event.keyCode)
            updateBoard(direction)
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
            <div className='board' {...handlers}>
                {cells}
                {tiles}
                <Overlay onRestart={resetGame} board={board} />
            </div>
            {test}
        </div>
    )
}

export default BoardView