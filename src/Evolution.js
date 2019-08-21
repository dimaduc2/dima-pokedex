
//Phần 1: các Import
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import Eevee from './Eeveelutions/133 Eevee (Normal).jpg';
import Vaporeon from './Eeveelutions/134 Vaporeon (Water).jpg';
import Jolteon from './Eeveelutions/135 Jolteon (Electric).jpg';
import Flareon from './Eeveelutions/136 Flareon (Fire).jpg';
import Espeon from './Eeveelutions/196 Espeon (Psychic).jpg';
import Umbreon from './Eeveelutions/197 Umbreon (Dark).jpg';
import Leafeon from './Eeveelutions/470 Leafeon (Grass).jpg';
import Glaceon from './Eeveelutions/471 Glaceon (Ice).jpg';
import Sylveon from './Eeveelutions/700 Sylveon (Fairy).jpg';

//import './Compare.css';

class Evolution extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Evolution" align="center">
        
        <Image src={Eevee} size='medium' />
        <Image src={Vaporeon} size='medium' />
        <Image src={Jolteon} size='medium' />
        <Image src={Flareon} size='medium' />
        <Image src={Espeon} size='medium' />
        <Image src={Umbreon} size='medium' />
        <Image src={Leafeon} size='medium' />
        <Image src={Glaceon} size='medium' />
        <Image src={Sylveon} size='medium' />
        
        
      </div>
    )
  }
}
export default Evolution;