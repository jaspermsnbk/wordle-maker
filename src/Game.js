import React from 'react'
import './Game.css'
import Row from './Row'
import Tile from './Tile'
const newGame = ["","","","","",""]
const word = "tests"
const Game = () => {
  return (
    <div className='game'>
      <div className='board-container'>
        {
            newGame.map((e,i) => <Row key={i} text={e || null} word={word}/>)
        }
      </div>
    </div>
  )
}

export default Game