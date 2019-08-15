
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
          ? <All></All>
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