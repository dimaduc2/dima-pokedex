
//Phần 1: các Import
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import Mega_Charizard_X from './Mega Charizard X Y Z/Mega Charizard X.png';
import Mega_Charizard_Y from './Mega Charizard X Y Z/Mega Charizard Y.png';


//import './Compare.css';



class Compare extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Compare" align="center">
        <p>
        So sánh 2 con Mega Charizard X và Y<br/>
        <br/><br/>
        
        
        <Image src={Mega_Charizard_X} size='medium' />
        <br/>
        <p>Mega Charizard X and 2 Type: Fire vs Dragon</p>
        
        
        <br/><br/>
        Mega Charizard X mạnh hơn Mega Charizard Y
        <br/><br/><br/><br/><br/>
        
        
        <Image src={Mega_Charizard_Y} size='medium' />
        <br/>
        <p>Mega Charizard Y and 2 Type: Fire vs Flying</p>
        <br/><br/>
        
        </p>
      </div>
    )
  }
}
export default Compare;

