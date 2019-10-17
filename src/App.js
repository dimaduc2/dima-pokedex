//Phần 1: các Import
import React, { Component } from 'react'
import { Menu, Image, Checkbox, Icon, Dropdown, Label } from 'semantic-ui-react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import poke_logo from './Type/Pokemon_symbol.png';
import poke_logo_blue from './Type/Pokemon_symbol_blue.png';
import poke_logo_green from './Type/Pokemon_symbol_green.png';
import poke_logo_orange from './Type/Pokemon_symbol_orange.png';
import poke_logo_purple from './Type/Pokemon_symbol_purple.png';
import poke_logo_brown from './Type/Pokemon_symbol_brown.png';
import poke_logo_pink from './Type/Pokemon_symbol_pink.png';
import poke_logo_grey from './Type/Pokemon_symbol_grey.png';

import './App.css';
import Home from './Home'
import All from './All'
import Compare from './Compare'
import Trainer from './Trainer'
import Type from './Type';
import PokeBall from './PokeBall';
import Evolution from './Evolution';
import Favourites from './Favourites';
import About from './About';

import Genesect_Normal from './Genesect/Genesect (Normal).png';
import Genesect_Electric from './Genesect/Genesect (Electric) - Shock Drive.png';
import Genesect_Fire from './Genesect/Genesect (Fire) - Burn Drive.png';
import Genesect_Ice from './Genesect/Genesect (Ice) - Chill Drive.png';
import Genesect_Water from './Genesect/Genesect (Water) - Douse Drive.png';

import Charizard from './Mega Charizard X Y Z/Charizard.png';
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

import Reshiram from './Dragon Black White/Reshiram.jpg';
import Zekrom from './Dragon Black White/Zekrom.jpg';

import SilvallyBug from './Silvally Type/Silvally Bug.png';
import SilvallyDark from './Silvally Type/Silvally Dark.png';
import SilvallyDragon from './Silvally Type/Silvally Dragon.png';
import SilvallyElectric from './Silvally Type/Silvally Electric.png';
import SilvallyFairy from './Silvally Type/Silvally Fairy.png';
import SilvallyFighting from './Silvally Type/Silvally Fighting.png';
import SilvallyFire from './Silvally Type/Silvally Fire.png';
import SilvallyFlying from './Silvally Type/Silvally Flying.png';
import SilvallyGhost from './Silvally Type/Silvally Ghost.png';
import SilvallyGrass from './Silvally Type/Silvally Grass.png';
import SilvallyGround from './Silvally Type/Silvally Ground.png';
import SilvallyIce from './Silvally Type/Silvally Ice.png';
import SilvallyNormal from './Silvally Type/Silvally Normal.png';
import SilvallyPoison from './Silvally Type/Silvally Poison.png';
import SilvallyPsychic from './Silvally Type/Silvally Psychic.png';
import SilvallyRock from './Silvally Type/Silvally Rock.png';
import SilvallySteel from './Silvally Type/Silvally Steel.png';
import SilvallyWater from './Silvally Type/Silvally Water.png';

import Normal from './Type/Normal.png';
import Fire from './Type/Fire.png';
import Water from './Type/Water.png';
import Grass from './Type/Grass.png';
import Electric from './Type/Electric.png';
import Ice from './Type/Ice.png';
import Ground from './Type/Ground.png';
import Flying from './Type/Flying.png';
import Poison from './Type/Poison.png';
import Fighting from './Type/Fighting.png';
import Psychic from './Type/Psychic.png';
import Dark from './Type/Dark.png';
import Rock from './Type/Rock.png';
import Bug from './Type/Bug.png';
import Ghost from './Type/Ghost.png';
import Steel from './Type/Steel.png';
import Dragon from './Type/Dragon.png';
import Fairy from './Type/Fairy.png';

const typesInfo = {
  '' : {symbol: null, bgcolor: null},
  'Normal' : {symbol : Normal, bgcolor: '#a8a878'},
  'Fire' : {symbol : Fire, bgcolor: '#f08030'},
  'Water' : {symbol : Water, bgcolor: '#6890f0'},
  'Grass' : {symbol : Grass, bgcolor: '#78c850'},
  'Electric' : {symbol : Electric, bgcolor: '#f8d030'},
  'Ice' : {symbol : Ice, bgcolor: '#98d8d8'},
  'Ground' : {symbol : Ground, bgcolor: '#e0c068'},
  'Flying' : {symbol : Flying, bgcolor: '#a890f0'},
  'Poison' : {symbol : Poison, bgcolor: '#a040a0'},
  'Fighting' : {symbol : Fighting, bgcolor: '#c03028'},
  'Psychic' : {symbol : Psychic, bgcolor: '#f85888'},
  'Dark' : {symbol : Dark, bgcolor: '#705848'},
  'Rock' : {symbol : Rock, bgcolor: '#b8a038'},
  'Bug' : {symbol : Bug, bgcolor: '#a8b820'},
  'Ghost' : {symbol : Ghost, bgcolor: '#705898'},
  'Steel' : {symbol : Steel, bgcolor: '#b8b8d0'},
  'Dragon' : {symbol : Dragon, bgcolor: '#7038f8'},
  'Fairy' : {symbol : Fairy, bgcolor: '#ffaec9'},
}

const Pokemon = {
  
  'genesectN':{
    name: 'Genesect Normal',
    pokedexNum: 649,
    info: "he's power Normal by drive: Normal",
    picture: Genesect_Normal,
    types: ['Bug', 'Steel'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99,
    evolves_into: [],
    evolves_from: ''
  },
  'genesectE':{
    name: 'Genesect Electric',
    pokedexNum: 649,
    info: "he's power Electric by drive: Shock",
    picture: Genesect_Electric,
    types: ['Bug', 'Steel'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99,
    evolves_into: [],
    evolves_from: ''
  },
  'genesectF':{
    name: 'Genesect Fire',
    pokedexNum: 649,
    info: "he's power Fire by drive: Burn",
    picture: Genesect_Fire,
    types: ['Bug', 'Steel'],
    hp: 71, 
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99,
    evolves_into: [],
    evolves_from: ''
  },
  'genesectI':{
    name: 'Genesect Ice',
    pokedexNum: 649,
    info: "he's power Ice by drive: Chill",
    picture: Genesect_Ice,
    types: ['Bug', 'Steel'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99,
    evolves_into: [],
    evolves_from: ''
  },
  'genesectW':{
    name: 'Genesect Water',
    pokedexNum: 649,
    info: "her's power Water by drive: Douse",
    picture: Genesect_Water,
    types: ['Bug', 'Steel'],
    hp: 71,
    attack: 120,
    defense: 95,
    sp_atk: 120,
    sp_def: 95,
    speed: 99,
    evolves_into: [],
    evolves_from: ''
  },
  'charizard' :{
    name: 'Charizard',
    pokedexNum: 6,
    picture: Charizard,
    types: ['Fire', 'Flying'],
    hp: 78,
    attack: 84,
    defense: 78,
    sp_atk: 109,
    sp_def: 85,
    speed: 100,
    evolves_into: ['charizardX', 'charizardY', 'charizardZ'],
    evolves_from: ''
  },
  'charizardX':{
    name: 'Mega Charizard X',
    pokedexNum: 6,
    picture: Mega_Charizard_X,
    types: ['Fire', 'Dragon'],
    hp: 78,
    attack: 130,
    defense: 111,
    sp_atk: 130,
    sp_def: 85,
    speed: 100,
    evolves_into: [],
    evolves_from: 'charizard'
  },
  'charizardY':{  
    name: 'Mega Charizard Y',
    pokedexNum: 6,
    picture: Mega_Charizard_Y,
    types: ['Fire', 'Flying'],
    hp: 78,
    attack: 104,
    defense: 78,
    sp_atk: 159,
    sp_def: 115,
    speed: 100,
    evolves_into: [],
    evolves_from: 'charizard'
  },
  'charizardZ':{
    name: 'Mega Charizard Z (X + Y)',
    pokedexNum: 6,
    picture: Mega_Charizard_Z,
    types: ['Fire', 'Flying', 'Dragon'],
    hp: 78,
    attack: 130,
    defense: 111,
    sp_atk: 159,
    sp_def: 115,
    speed: 100,
    evolves_into: [],
    evolves_from: 'charizard'
  },
  'eevee': {
    name: 'Eevee',
    pokedexNum: 133,
    picture: Eevee,
    types: ['Normal'],
    hp: 55,
    attack: 55,
    defense: 50,
    sp_atk: 45,
    sp_def: 65,
    speed: 55,
    evolves_into: ['vaporeon', 'jolteon', 'flareon', 'espeon', 'umbreon', 'leafeon', 'glaceon', 'sylveon'],
    evolves_from: ''
  },
  'vaporeon': {
    name: 'Vaporeon',
    pokedexNum: 134,
    picture: Vaporeon,
    types: ['Water'],
    hp: 130,
    attack: 65,
    defense: 60,
    sp_atk: 110,
    sp_def: 95,
    speed: 65,
    evolves_into: [],
    evolves_from: 'eevee'
  },
  'jolteon': {
    name: 'Jolteon',
    pokedexNum: 135,
    picture: Jolteon,
    types: ['Electric'],
    hp: 65,
    attack: 65,
    defense: 60,
    sp_atk: 110,
    sp_def: 95,
    speed: 130,
    evolves_into: [],
    evolves_from: 'eevee'
    
  },
  'flareon': {
    name: 'Flareon',
    pokedexNum: 136,
    picture: Flareon,
    types: ['Fire'],
    hp: 65,
    attack: 130,
    defense: 60,
    sp_atk: 95,
    sp_def: 110,
    speed: 65,
    evolves_into: [],
    evolves_from: 'eevee'
  },
  'espeon': {
    name: 'Espeon',
    pokedexNum: 196,
    picture: Espeon,
    types: ['Psychic'],
    hp: 65,
    attack: 65,
    defense: 60,
    sp_atk: 130,
    sp_def: 95,
    speed: 110,
    evolves_into: [],
    evolves_from: 'eevee'
  },
  'umbreon': {
    name: 'Umbreon',
    pokedexNum: 197,
    picture: Umbreon,
    types: ['Dark'],
    hp: 95,
    attack: 65,
    defense: 110,
    sp_atk: 60,
    sp_def: 130,
    speed: 65,
    evolves_into: [],
    evolves_from: 'eevee'
  },
  'leafeon': {
    name: 'Leafeon',
    pokedexNum: 470,
    picture: Leafeon,
    types: ['Grass'],
    hp: 65,
    attack: 110,
    defense: 130,
    sp_atk: 60,
    sp_def: 65,
    speed: 95,
    evolves_into: [],
    evolves_from: 'eevee'
  },
  'glaceon': {
    name: 'Glaceon',
    pokedexNum: 471,
    picture: Glaceon,
    types: ['Ice'],
    hp: 65,
    attack: 60,
    defense: 110,
    sp_atk: 130,
    sp_def: 95,
    speed: 65,
    evolves_into: [],
    evolves_from: 'eevee'
  },
  'sylveon': {
    name: 'Sylveon',
    pokedexNum: 700,
    picture: Sylveon,
    types: ['Fairy'],
    hp: 95,
    attack: 65,
    defense: 65,
    sp_atk: 110,
    sp_def: 130,
    speed: 60,
    evolves_into: [],
    evolves_from: 'eevee'
  },
  'reshiram': {
    name: 'Reshiram',
    pokedexNum: 643,
    picture: Reshiram,
    types: ['Dragon', 'Fire'],
    hp: 100,
    attack: 120,
    defense: 100,
    sp_atk: 150,
    sp_def: 120,
    speed: 90,
    evolves_into: [],
    evolves_from: ''
  },
  'zekrom': {
    name: 'Zekrom',
    pokedexNum: 644,
    picture: Zekrom,
    types: ['Dragon', 'Electric'],
    hp: 100,
    attack: 150,
    defense: 120,
    sp_atk: 120,
    sp_def: 100,
    speed: 90,
    evolves_into: [],
    evolves_from: ''
  },
  '773Bug': {
    name: 'Silvally Bug',
    pokedexNum: 773,
    picture: SilvallyBug,
    types: ['Bug'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Dark': {
    name: 'Silvally Dark',
    pokedexNum: 773,
    picture: SilvallyDark,
    types: ['Dark'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Dragon': {
    name: 'Silvally Dragon',
    pokedexNum: 773,
    picture: SilvallyDragon,
    types: ['Dragon'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Electric': {
    name: 'Silvally Electric',
    pokedexNum: 773,
    picture: SilvallyElectric,
    types: ['Electric'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Fairy': {
    name: 'Silvally Fairy',
    pokedexNum: 773,
    picture: SilvallyFairy,
    types: ['Fairy'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Fighting': {
    name: 'Silvally Fighting',
    pokedexNum: 773,
    picture: SilvallyFighting,
    types: ['Fighting'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Fire': {
    name: 'Silvally Fire',
    pokedexNum: 773,
    picture: SilvallyFire,
    types: ['Fire'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Flying': {
    name: 'Silvally Flying',
    pokedexNum: 773,
    picture: SilvallyFlying,
    types: ['Flying'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Ghost': {
    name: 'Silvally Ghost',
    pokedexNum: 773,
    picture: SilvallyGhost,
    types: ['Ghost'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Grass': {
    name: 'Silvally Grass',
    pokedexNum: 773,
    picture: SilvallyGrass,
    types: ['Grass'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Ground': {
    name: 'Silvally Ground',
    pokedexNum: 773,
    picture: SilvallyGround,
    types: ['Ground'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Ice': {
    name: 'Silvally Ice',
    pokedexNum: 773,
    picture: SilvallyIce,
    types: ['Ice'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Normal': {
    name: 'Silvally Normal',
    pokedexNum: 773,
    picture: SilvallyNormal,
    types: ['Normal'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Poison': {
    name: 'Silvally Poison',
    pokedexNum: 773,
    picture: SilvallyPoison,
    types: ['Poison'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Psychic': {
    name: 'Silvally Psychic',
    pokedexNum: 773,
    picture: SilvallyPsychic,
    types: ['Psychic'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Rock': {
    name: 'Silvally Rock',
    pokedexNum: 773,
    picture: SilvallyRock,
    types: ['Rock'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Steel': {
    name: 'Silvally Steel',
    pokedexNum: 773,
    picture: SilvallySteel,
    types: ['Steel'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  },
  '773Water': {
    name: 'Silvally Water',
    pokedexNum: 773,
    picture: SilvallyWater,
    types: ['Water'],
    hp: 95,
    attack: 95,
    defense: 95,
    sp_atk: 95,
    sp_def: 95,
    speed: 95,
    evolves_into: [],
    evolves_from: ''
  }
}

class App extends Component {

//Phần 2: các State
  state = {
    dangXemGi: "dangXemHome",
    favPokemon: {},
    comPokemon1: '',
    comPokemon2: '', 
    light_or_dark: true,
    colorTheme: 'red'

  }

//Phần 3: các Function
  changeColorTheme = (color) => {
    this.setState({colorTheme: color})
  }
  doimau = () => {
    if (this.state.light_or_dark === true) {
      this.setState({light_or_dark: false});
    }
    else {
      this.setState({light_or_dark: true});
    }
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
  comparePokemon1 = (newName1) => {
    this.setState({comPokemon1: newName1})
    //  alert(newName1)
  }
  comparePokemon2 = (newName2) => {
    this.setState({comPokemon2: newName2})
    //  alert(newName2)
  }
  selectPokemon1 = (e, {value}) => {
    // alert(value)
    this.setState({comPokemon1: value})
  }
  selectPokemon2 = (e, {value}) => {
    // alert(value)
    this.setState({comPokemon2: value})
  }
  addToFavourites = (tenPokeMoi) => {

    var newFav = this.state.favPokemon;
    //lấy danh sách Pokemon ưa thích CŨ, đang ở trong state favPokemon, rồi cho vào newFav
    
    newFav[tenPokeMoi] = true;
    //thêm tên Pokemon ưa thích MỚI vào newFav

    this.setState({ favPokemon: newFav });
    //thay đổi state favPokemon
    //cho newFav (gồm tất cả pokemon ưa thích cũ và mới) vào trong favPokemon
  }
  removeFromFavourites = (tenPokeMuonXoa) => {
    var newFav = this.state.favPokemon;
    //lấy danh sách Pokemon ưa thích CŨ, đang ở trong state favPokemon, rồi cho vào newFav
    delete newFav[tenPokeMuonXoa];
    //xóa tên Pokemon ưa thích khỏi newFar

    this.setState({ favPokemon: newFav });
    //thay đổi state favPokemon
    //cho newFav (gồm tất cả pokemon ưa thích cũ trừ pokemon vừa xóa) vào trong favPokemon
  }
  removeAllFromFavourites = () => {
    this.setState({ favPokemon: {} });
  }
  bamHome = () => {
    this.setState({dangXemGi:"dangXemHome", activeItem: "" });
  }
  render() {
    const { activeItem, favPokemon, comPokemon1, comPokemon2, light_or_dark, colorTheme } = this.state

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App" style={{backgroundColor: light_or_dark ?'white' :'black', color: light_or_dark ?'black' :'white'}}>
          <Menu borderless inverted 
                style={{backgroundColor: colorTheme === 'red'
                  ? '#8B0000'
                  : colorTheme
                }}>
            <Menu.Item
              name='Pokedex'
              as={Link}
              to="/"
              active={activeItem === 'Pokedex'}
              onClick={this.bamHome}>
              <Image src={colorTheme === 'red'
                ? poke_logo
                : colorTheme === 'blue'
                  ? poke_logo_blue
                  : colorTheme === 'green'
                    ? poke_logo_green
                    :colorTheme === 'orange'
                      ? poke_logo_orange
                      : colorTheme === 'purple'
                        ? poke_logo_purple
                        : colorTheme === 'brown'
                          ? poke_logo_brown
                          : colorTheme === 'pink'
                            ? poke_logo_pink
                            : poke_logo_grey
              } size='mini' />
              Pokedex
            </Menu.Item>
            
            <Menu.Item
              as={Link}
              to="/All"
              name='all'
              active={activeItem === 'all'}
              onClick={this.handleItemClick}>
              All
            </Menu.Item>
            
            <Menu.Item
              as={Link}
              to="/Type"
              name='type'
              active={activeItem === 'type'}
              onClick={this.handleItemClick}>
              Type
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Compare"
              name='compare'
              active={activeItem === 'compare'}
              onClick={this.handleItemClick}>
              Compare
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Trainer"
              name='trainer'
              active={activeItem === 'trainer'}
              onClick={this.handleItemClick}>
              Trainer
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Pokeball"
              name='pokeball'
              active={activeItem === 'pokeball'}
              onClick={this.handleItemClick}>
              Pokeball
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Evolution"
              name='evolution'
              active={activeItem === 'evolution'}
              onClick={this.handleItemClick}>
              Evolution
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/Favourites"
              name='favourites'
              active={activeItem === 'favourites'}
              onClick={this.handleItemClick}>
              Favourites
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/About"
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}>
              About
            </Menu.Item>

            <Dropdown item icon='setting' simple>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Icon name='adjust' />
                  <Checkbox toggle onChange={this.doimau} style={{marginLeft:"5px", marginRight:"5px"}} />
                </Dropdown.Item>
                
                <Dropdown item text="Theme">
                  <Dropdown.Menu>
                    
                    <Dropdown.Item onClick={ () => this.changeColorTheme('red')}><Label color='red'>red</Label>
                      {colorTheme === 'red'
                        ? <Icon name='check' color='red'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeColorTheme('blue')}><Label color='blue'>blue</Label>
                      {colorTheme === 'blue'
                        ? <Icon name='check' color='blue'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeColorTheme('green')}><Label color='green'>green</Label>
                      {colorTheme === 'green'
                        ? <Icon name='check' color='green'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeColorTheme('orange')}><Label color='orange'>orange</Label>
                      {colorTheme === 'orange'
                        ? <Icon name='check' color='orange'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeColorTheme('purple')}><Label color='purple'>purple</Label>
                      {colorTheme === 'purple'
                        ? <Icon name='check' color='purple'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeColorTheme('brown')}><Label color='brown'>brown</Label>
                      {colorTheme === 'brown'
                        ? <Icon name='check' color='brown'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeColorTheme('pink')}><Label color='pink'>pink</Label>
                      {colorTheme === 'pink'
                        ? <Icon name='check' color='pink'/>
                        : null
                      }</Dropdown.Item>
                    <Dropdown.Item onClick={ () => this.changeColorTheme('grey')}><Label color='grey'>grey</Label>
                      {colorTheme === 'grey'
                        ? <Icon name='check' color='grey'/>
                        : null
                      }</Dropdown.Item>
                      
                  </Dropdown.Menu>
                </Dropdown>

              </Dropdown.Menu>
            </Dropdown>

          </Menu>

          <Route exact path = "/" component = {Home} />
          
          <Route path = "/All" render={() => <All Pokedex = {Pokemon} addToFavourites = {this.addToFavourites} 
          comparePokemon1 = {this.comparePokemon1} comparePokemon2 = {this.comparePokemon2} typesInfo = {typesInfo}
          removeFromFavourites = {this.removeFromFavourites} favPokemon = {favPokemon} comPokemon1 = {comPokemon1} 
          comPokemon2 = {comPokemon2} />} />
          
          <Route path = "/Type" render={() => <Type Pokedex = {Pokemon} addToFavourites = {this.addToFavourites} 
          removeFromFavourites = {this.removeFromFavourites} favPokemon = {favPokemon} typesInfo = {typesInfo}
          comparePokemon1 = {this.comparePokemon1} comparePokemon2 = {this.comparePokemon2} comPokemon1 = {comPokemon1} 
          comPokemon2 = {comPokemon2} />} />
          
          <Route path = "/Compare" render={() => <Compare Pokedex={Pokemon} comPokemon1 = {comPokemon1} comPokemon2 = {comPokemon2} 
          selectPokemon1 = {this.selectPokemon1} selectPokemon2 = {this.selectPokemon2} typesInfo = {typesInfo} Pokedex = {Pokemon} 
          favPokemon={favPokemon} typesInfo={typesInfo} />} />
          
          <Route path = "/Trainer" component = {Trainer} />
          
          <Route path = "/PokeBall" component = {PokeBall} />
          
          <Route path = "/Evolution" render={() => <Evolution Pokedex = {Pokemon} comPokemon1 = {comPokemon1} 
          comPokemon2 = {comPokemon2} comparePokemon1 = {this.comparePokemon1} comparePokemon2 = {this.comparePokemon2} 
          removeFromFavourites={this.removeFromFavourites} addToFavourites={this.addToFavourites} typesInfo={typesInfo}
          favPokemon = {favPokemon} /> } />
          
          <Route path = "/Favourites"  render={() => <Favourites Pokedex = {Pokemon} favPokemon = {favPokemon} 
          removeFromFavourites = {this.removeFromFavourites} removeAllFromFavourites = {this.removeAllFromFavourites}
          addToFavourites = {this.addToFavourites} typesInfo={typesInfo} comparePokemon1 = {this.comparePokemon1} 
          comparePokemon2 = {this.comparePokemon2} comPokemon1 = {comPokemon1} comPokemon2 = {comPokemon2} />} />
          
          <Route path = "/About" component = {About} />
          
          <br/><br/>
          <header className="App-header">
            <img src={colorTheme === 'red'
                ? poke_logo 
                : colorTheme === 'blue'
                  ? poke_logo_blue
                  : colorTheme === 'green'
                    ? poke_logo_green
                    : colorTheme === 'orange'
                      ? poke_logo_orange
                      : colorTheme === 'purple'
                        ? poke_logo_purple
                        : colorTheme === 'brown'
                          ? poke_logo_brown
                          : colorTheme === 'pink'
                            ? poke_logo_pink
                            : poke_logo_grey
              } className="App-logo" alt="poke_logo" />
          </header>
          
        </div>
      </Router>
    )
  }
}
export default App;