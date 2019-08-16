
//Phần 1: các Import
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

//import './Trainer.css';

import Aura_Guardian_Ash from './Aura Guardian Ash.jpg';
import WerePokemon from './WerePokemon Night Battle.png';
import AshMistyVampire from './you taste soooo good.jpg';


class Trainer extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Trainer" align="center">
        <br/>
        <Image src={Aura_Guardian_Ash} size='medium' />
        <br/>
        <p>Aura Guardian Ash Satoshi Ketchum (Red)</p>
        <br/><br/>
        <Image src={AshMistyVampire} size='medium' />
        <br/>
        <p>Ash and Misty is Vampire</p>
        <br/><br/>
        <Image src={WerePokemon} size='medium' />
        <br/>
        <p>AshLucario and SerenaBraixen kill Demon</p>
        <br/><br/>
      </div>

    )
  }
}
export default Trainer;





