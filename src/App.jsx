import './App.css'
import BoardView from './components/BoardView'

function App() {

  return (
    <div className="App">
      <a href='/'><h1 className='header'>2048</h1></a>
      <h2 className='subheader'>Join tiles & get to 2048!</h2>
      <BoardView />
      <a href='https://github.com/pauline-ann/2048-react'><i className="devicon-github-original-wordmark"></i></a>
    </div >
  )
}

export default App
