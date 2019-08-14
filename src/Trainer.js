
//Phần 1: các Import
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'


//import './Trainer.css';



import Aura_Guardian_Ash from './Aura Guardian Ash.jpg';


class Trainer extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Trainer" align="center">
        
        <Image src={Aura_Guardian_Ash} size='medium' />
              <br/><br/>
              <p>Aura Guardian Ash Satoshi Ketchum (Red Vampire)</p>

      </div>

    )
  }
}
export default Trainer;





