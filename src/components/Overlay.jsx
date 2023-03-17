const Overlay = ({ onRestart, board }) => {
    if (board.hasWon()) {
        return <div className="tile2048" />
    }

    if (board.hasLost()) {
        return (
            <div className="gameOver" onClick={() => onRestart()} />
        )
    }

    return null
}

export default Overlay