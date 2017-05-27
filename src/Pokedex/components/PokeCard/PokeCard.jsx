import React from 'react';
import pokeSprites from '../../../stubs/pokeSprites'
import './PokeCard.css';

function PokeCard({pokemon}) {

  let style = {
    backgroundImage: `url(${pokeSprites[pokemon.id-1]})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  }

  return(
    <section className="PokeCard">
      <div style={style} className="picture"></div>
      <div className="info">
        <h1>Name: {pokemon.name}</h1>
        <p>Type: {pokemon.type}</p>
        <p>Attack: {pokemon.attack}</p>
      </div>
    </section>
  )
}

export default PokeCard;
