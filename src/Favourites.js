
//Phần 1: các Import
import React, { Component } from 'react'
import { Icon, Button} from 'semantic-ui-react'

//import './Compare.css';

class Favourites extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="Favourites">
        
        <Button basic color='red'><Icon name='star outline' />Favorite</Button>
        
      </div>
    )
  }
}
export default Favourites;