
//Phần 1: các Import
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import Mega_Charizard_X from './Mega Charizard X Y Z/Mega Charizard X.png';
import Mega_Charizard_Y from './Mega Charizard X Y Z/Mega Charizard Y.png';
import Mega_Charizard_Z from './Mega Charizard X Y Z/Mega Charizard Z.png';

//import './All.css';

class All extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="All" align="center">
        
        <Image src={Mega_Charizard_X} size='medium' />
        <br/>
        <p>Mega Charizard X and 2 Type: Fire vs Dragon</p>
        <br/><br/>
        <Image src={Mega_Charizard_Y} size='medium' />
        <br/>
        <p>Mega Charizard Y and 2 Type: Fire vs Flying</p>
        <br/><br/>
        <Image src={Mega_Charizard_Z} size='medium' />
        <br/>
        <p>Mega Charizard Z (X + Y) and 3 Type: Fire vs Flying vs Dragon</p>

      </div>

    )
  }
}
export default All;





