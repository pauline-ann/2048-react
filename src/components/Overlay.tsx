import TryAgainLogo from '../assets/img/try-again.gif'

const Overlay = ({ onRestart, board }) => {
    if (board.hasWon()) {
        return <div className="tile2048" />
    }

    if (board.hasLost()) {
        return (
            <div className="gameOver" onClick={() => onRestart()}>
                <img className="try-again-image" src={TryAgainLogo} alt="Try Again" />
            </div>
        )
    }

    return null
}

export default Overlay