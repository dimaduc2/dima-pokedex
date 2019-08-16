
//Phần 1: các Import
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import Mega_Charizard_X from './Mega Charizard X Y Z/Mega Charizard X.png';
import Mega_Charizard_Y from './Mega Charizard X Y Z/Mega Charizard Y.png';
import Mega_Charizard_Z from './Mega Charizard X Y Z/Mega Charizard Z.png';

//import './All.css';

class All extends Component {

//Phần 2: các State
  state = { }

//Phần 3: các Function

  render() {
    // const {  } = this.state
    const { Eevees } = this.props;
    return (
      <div className="All" align="center">
        <Image src={Mega_Charizard_X} size='medium' />
        <br/>
        <p>Mega Charizard X</p>
        <p>Type: Fire vs Dragon</p>
        <p>HP: 78</p>
        <p>Attack: 130</p>
        <p>Defense: 111</p>
        <p>Sp. Atk: 130</p>
        <p>Sp. Def: 85</p>
        <p>Speed: 100</p>
        <p>Total:	634</p>
        <br/><br/>
        <Image src={Mega_Charizard_Y} size='medium' />
        <br/>
        <p>Mega Charizard Y</p>
        <p>Type: Fire vs Flying</p>
        <p>HP: 78</p>
        <p>Attack: 104</p>
        <p>Defense: 78</p>
        <p>Sp. Atk: 159</p>
        <p>Sp. Def: 115</p>
        <p>Speed: 100</p>
        <p>Total:	634</p>
        <br/><br/>
        <Image src={Mega_Charizard_Z} size='medium' />
        <br/>
        <p>Mega Charizard Z (X + Y)</p>
        <p>Mega Charizard X</p>
        <p>Type: Fire vs Flying vs Dragon</p>
        <p>HP: 78</p>
        <p>Attack: 130</p>
        <p>Defense: 111</p>
        <p>Sp. Atk: 159</p>
        <p>Sp. Def: 115</p>
        <p>Speed: 100</p>
        <p>Total:	693</p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        {
          Object.keys(Eevees).map(
            (moiSo) => 
            <div>
              <Image src={Eevees[moiSo].picture} size='medium' />
              <h1>{Eevees[moiSo].name}</h1>
              <p>{Eevees[moiSo].types}</p>  
              <p>{Eevees[moiSo].hp}</p>
              <p>{Eevees[moiSo].speed}</p>
              <br/><br/>
            </div>
          )
        }
        
      </div>
    )
  }
}
export default All;





