import React, { Component } from 'react';
import pokedata from '../stubs/pokemon-data';
import Pokemon from '../model/Pokemon';
import PokeList from './components/PokeList/PokeList';
import PokeCard from './components/PokeCard/PokeCard';
import './Pokedex.css';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poke: {}
    }
  }

  displayInfo(e) {
    console.log(JSON.parse(e.target.dataset.pokemon));
    this.setState({
      poke: JSON.parse(e.target.dataset.pokemon)
    })
  }

  render() {
    let allPokemon = pokedata.map(e => new Pokemon(e));

    return (
      <div className='Pokedex'>
        <PokeList
          pokemon={allPokemon}
          handler={this.displayInfo.bind(this)}
        />
        <PokeCard pokemon={this.state.poke}/>
      </div>
    )
  }
}

export default Pokedex;
