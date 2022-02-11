import React from 'react'
import Tile from './Tile'

const Row = ({text, word}) => {
  return (
    <div className='row'>
      {
          text ? Array(text).map((e,i) => <Tile name={e} key={i} word={word}/>)
          : new Array(5).fill(<Tile />)
      }
    </div>
  )
}

export default Row