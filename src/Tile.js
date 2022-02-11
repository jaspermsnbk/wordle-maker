import React from 'react'
const color = {
    "EMPTY":"#FFFFFF",
    "TYPING":"#FFFFFF",
    "CORRECT":"#6aaa64",
    "WRONG":"#787c7f",
    "HALF_RIGHT":"c9b458"
}
const Tile = ({name, key, word}) => {
    const state = "EMPTY"
  return (
    <div className='tile' style={{background:color[state], outline: state === 'EMPTY' ? "2px solid black" : "none"}}>
      {name}
    </div>
  )
}

export default Tile