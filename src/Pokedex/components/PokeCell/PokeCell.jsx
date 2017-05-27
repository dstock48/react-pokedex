import React from 'react';
import pokeSprites from '../../../stubs/pokeSprites'
import './PokeCell.css';

function PokeCell({pokemon, handler}) {

  let style = {
    backgroundImage: `url(${pokeSprites[pokemon.id-1]})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 2,
    backgroundSize: 'contain'
  }

  return (
    <button
      onClick={handler} style={style} className="pokeCell" data-pokemon={JSON.stringify(pokemon)}>{pokemon.name}</button>
  )
}

export default PokeCell;
