
//Phần 1: các Import
import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

import poke_logo from './Type/Pokemon_symbol.png';

import './App.css';
import All from './All'
import Compare from './Compare'
import Trainer from './Trainer'
import Type from './Type';
import PokeBall from './PokeBall';
import About from './About';

import Eevee from './Eeveelutions/133 Eevee (Normal).jpg';
import Vaporeon from './Eeveelutions/134 Vaporeon (Water).jpg';
import Jolteon from './Eeveelutions/135 Jolteon (Electric).jpg';
import Flareon from './Eeveelutions/136 Flareon (Fire).jpg';
import Espeon from './Eeveelutions/196 Espeon (Psychic).jpg';
import Umbreon from './Eeveelutions/197 Umbreon (Dark).jpg';
import Leafeon from './Eeveelutions/470 Leafeon (Grass).jpg';
import Glaceon from './Eeveelutions/471 Glaceon (Ice).jpg';
import Sylveon from './Eeveelutions/700 Sylveon (Fairy).jpg';

const Eeveelutions = {
  '133': {
    name: 'Eevee',
    picture: Eevee,
    types: ['Normal'],
    hp: 55,
    speed: 55,
  },
  '134': {
    name: 'Vaporeon',
    picture: Vaporeon,
    types: ['Water'],
    hp: 130,
    speed: 65,
  },
  '135': {
    name: 'Jolteon',
    picture: Jolteon,
    types: ['Electric'],
    hp: 65,
    speed: 130,
  },
  '136': {
    name: 'Flareon',
    picture: Flareon,
    types: ['Fire'],
    hp: 65,
    speed: 65,
  },
  '196': {
    name: 'Espeon',
    picture: Espeon,
    types: ['Psychic'],
    hp: 65,
    speed: 110,
  },
  '197': {
    name: 'Umbreon',
    picture: Umbreon,
    types: ['Dark'],
    hp: 95,
    speed: 65,
  },
  '470': {
    name: 'Leafeon',
    picture: Leafeon,
    types: ['Grass'],
    hp: 65,
    speed: 95,
  },
  '471': {
    name: 'Glaceon',
    picture: Glaceon,
    types: ['Ice'],
    hp: 65,
    speed: 65,
  },
  '700': {
    name: 'Sylveon',
    picture: Sylveon,
    types: ['Fairy'],
    hp: 95,
    speed: 60,
  }
}

class App extends Component {

//Phần 2: các State
  state = {
    dangXemGi: "dangXemHome",

  }

//Phần 3: các Function
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
  
  bamHome = () => {
    this.setState({dangXemGi:"dangXemHome", activeItem: "" });
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        <Menu borderless inverted style={{backgroundColor:'#8B0000'}}>
          
          <Menu.Item
            name='Pokedex'
            active={activeItem === 'Pokedex'}
            onClick={this.bamHome} >
            <Image src={poke_logo} size='mini' />
            <b>Pokedex</b>
          </Menu.Item>

          <Menu.Item
            name='all'
            active={activeItem === 'all'}
            onClick={this.handleItemClick}>
            All
          </Menu.Item>

          <Menu.Item
            name='type'
            active={activeItem === 'type'}
            onClick={this.handleItemClick}>
            Type
          </Menu.Item>

          <Menu.Item
            name='compare'
            active={activeItem === 'compare'}
            onClick={this.handleItemClick}>
            Compare
          </Menu.Item>

          <Menu.Item
            name='trainer'
            active={activeItem === 'trainer'}
            onClick={this.handleItemClick}>
            Trainer
          </Menu.Item>

          <Menu.Item
            name='pokeball'
            active={activeItem === 'pokeball'}
            onClick={this.handleItemClick}>
            Pokeball
          </Menu.Item>

          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}>
            About
          </Menu.Item>

        </Menu>

        {activeItem === "all"
          ? <All Eevees = {Eeveelutions} ></All>
          // ? <p>sdfsf</p>  
          : null
        }

        {activeItem === "type"
          ? <Type></Type>
          : null
        }

        {activeItem === "compare"
          ? <Compare></Compare>
          : null
        }

        {activeItem === "trainer"
          ? <Trainer></Trainer>
          : null
        }

        {activeItem === "pokeball"
          ? <PokeBall></PokeBall>
          : null
        }

        {activeItem === "about"
          ? <About></About>
          : null
        }

        <br/><br/>
        <header className="App-header">
          <img src={poke_logo} className="App-logo" alt="poke_logo" />
        </header>
        
      </div>

    )
  }
}
export default App;