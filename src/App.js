
//Phần 1: các Import
import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import poke_logo from './Type/Pokemon_symbol.png';

import './App.css';
import Home from './Home'
import All from './All'
import Compare from './Compare'
import Trainer from './Trainer'
import Type from './Type';
import PokeBall from './PokeBall';
import About from './About';

import Genesect_Normal from './Genesect/Genesect (Normal).png';
import Genesect_Electric from './Genesect/Genesect (Electric) - Shock Drive.png';
import Genesect_Fire from './Genesect/Genesect (Fire) - Burn Drive.png';
import Genesect_Ice from './Genesect/Genesect (Ice) - Chill Drive.png';
import Genesect_Water from './Genesect/Genesect (Water) - Douse Drive.png';

import Mega_Charizard_X from './Mega Charizard X Y Z/Mega Charizard X.png';
import Mega_Charizard_Y from './Mega Charizard X Y Z/Mega Charizard Y.png';
import Mega_Charizard_Z from './Mega Charizard X Y Z/Mega Charizard Z.png';

import Eevee from './Eeveelutions/133 Eevee (Normal).jpg';
import Vaporeon from './Eeveelutions/134 Vaporeon (Water).jpg';
import Jolteon from './Eeveelutions/135 Jolteon (Electric).jpg';
import Flareon from './Eeveelutions/136 Flareon (Fire).jpg';
import Espeon from './Eeveelutions/196 Espeon (Psychic).jpg';
import Umbreon from './Eeveelutions/197 Umbreon (Dark).jpg';
import Leafeon from './Eeveelutions/470 Leafeon (Grass).jpg';
import Glaceon from './Eeveelutions/471 Glaceon (Ice).jpg';
import Sylveon from './Eeveelutions/700 Sylveon (Fairy).jpg';

const Pokemon = {
  'GenesectN':{
    name: 'Genesect Normal',
    picture: Genesect_Normal,
    types: ['Bug Steel (Normal)'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99
  },
  'GenesectE':{
    name: 'Genesect Electric',
    picture: Genesect_Electric,
    types: ['Bug Steel (Electric)'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99
  },
  'GenesectF':{
    name: 'Genesect Fire',
    picture: Genesect_Fire,
    types: ['Bug Steel (Fire)'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99
  },
  'GenesectI':{
    name: 'Genesect Ice',
    picture: Genesect_Ice,
    types: ['Bug Steel (Ice)'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99
  },
  'GenesectW':{
    name: 'Genesect Water',
    picture: Genesect_Water,
    types: ['Bug vs Steel (Water)'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99
  },
  'CharizardX':{
    name: 'Mega Charizard X',
    picture: Mega_Charizard_X,
    types: ['Fire vs Dragon'],
    hp: 78,
    attack: 130,
    defense: 111,
    sp_atk: 130,
    sp_def: 85,
    speed: 100
  },
  'CharizardY':{  
    name: 'Mega Charizard Y',
    picture: Mega_Charizard_Y,
    types: 'Type: Fire vs Flying',
    hp: 78,
    attack: 104,
    defense: 78,
    sp_atk: 159,
    sp_def: 115,
    speed: 100
  },
  'CharizardZ':{  
    name: 'Mega Charizard Z (X + Y)',
    picture: Mega_Charizard_Z,
    types: ['Fire vs Flying vs Dragon'],
    hp: 78,
    attack: 130,
    defense: 111,
    sp_atk: 159,
    sp_def: 115,
    speed: 100
  },
  '133': {
    name: 'Eevee',
    picture: Eevee,
    types: ['Normal'],
    hp: 55,
    attack: 55,
    defense: 50,
    sp_atk: 45,
    sp_def: 65,
    speed: 55
  },
  '134': {
    name: 'Vaporeon',
    picture: Vaporeon,
    types: ['Water'],
    hp: 130,
    attack: 65,
    defense: 60,
    sp_atk: 110,
    sp_def: 95,
    speed: 65
  },
  '135': {
    name: 'Jolteon',
    picture: Jolteon,
    types: ['Electric'],
    hp: 65,
    attack: 65,
    defense: 60,
    sp_atk: 110,
    sp_def: 95,
    speed: 130
    
  },
  '136': {
    name: 'Flareon',
    picture: Flareon,
    types: ['Fire'],
    hp: 65,
    attack: 130,
    defense: 60,
    sp_atk: 95,
    sp_def: 110,
    speed: 65
  },
  '196': {
    name: 'Espeon',
    picture: Espeon,
    types: ['Psychic'],
    hp: 65,
    attack: 65,
    defense: 60,
    sp_atk: 130,
    sp_def: 95,
    speed: 110
  },
  '197': {
    name: 'Umbreon',
    picture: Umbreon,
    types: ['Dark'],
    hp: 95,
    attack: 65,
    defense: 110,
    sp_atk: 60,
    sp_def: 130,
    speed: 65
  },
  '470': {
    name: 'Leafeon',
    picture: Leafeon,
    types: ['Grass'],
    hp: 65,
    attack: 110,
    defense: 130,
    sp_atk: 60,
    sp_def: 65,
    speed: 95
  },
  '471': {
    name: 'Glaceon',
    picture: Glaceon,
    types: ['Ice'],
    hp: 65,
    attack: 60,
    defense: 110,
    sp_atk: 130,
    sp_def: 95,
    speed: 65
  },
  '700': {
    name: 'Sylveon',
    picture: Sylveon,
    types: ['Fairy'],
    hp: 95,
    attack: 65,
    defense: 65,
    sp_atk: 110,
    sp_def: 130,
    speed: 60
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
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Menu borderless inverted style={{backgroundColor:'#8B0000'}}>
            
            <Menu.Item
              name='Pokedex'
              active={activeItem === 'Pokedex'}
              onClick={this.bamHome} >
              <Image src={poke_logo} size='mini' />
              <Link to="/"><b>Pokedex</b></Link>
            </Menu.Item>

            <Menu.Item
              name='all'
              active={activeItem === 'all'}
              onClick={this.handleItemClick}>
              <Link to="/All">All</Link>
            </Menu.Item>

            <Menu.Item
              name='type'
              active={activeItem === 'type'}
              onClick={this.handleItemClick}>
              <Link to="/Type">Type</Link>
            </Menu.Item>

            <Menu.Item
              name='compare'
              active={activeItem === 'compare'}
              onClick={this.handleItemClick}>
              <Link to="/Compare">Compare</Link>
            </Menu.Item>

            <Menu.Item
              name='trainer'
              active={activeItem === 'trainer'}
              onClick={this.handleItemClick}>
              <Link to="/Trainer">Trainer</Link>
            </Menu.Item>

            <Menu.Item
              name='pokeball'
              active={activeItem === 'pokeball'}
              onClick={this.handleItemClick}>
              <Link to="/Pokeball">Pokeball</Link>
            </Menu.Item>

            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}>
              <Link to="/About" >About</Link>
            </Menu.Item>

          </Menu>

          <Route exact path = "/" component = {Home} />
          <Route path = "/All" render={() => <All Pokedex = {Pokemon} />} />
          <Route path = "/Type" component = {Type} />
          <Route path = "/Compare" component = {Compare} />
          <Route path = "/Trainer" component = {Trainer} />
          <Route path = "/PokeBall" component = {PokeBall} />
          <Route path = "/About" component = {About} />
          
          <br/><br/>
          <header className="App-header">
            <img src={poke_logo} className="App-logo" alt="poke_logo" />
          </header>
          
        </div>
      </Router>
    )
  }
}
export default App;