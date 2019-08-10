//Phần 1: các Import
import React, { Component } from 'react'
import { Button, Icon, Image, Grid } from 'semantic-ui-react'
import Normal from './images/Normal.png';
import Fire from './images/Fire.png';
import Water from './images/Water.png';
import Grass from './images/Grass.png';
import Electric from './images/Electric.png';
import Ice from './images/Ice.png';
import Ground from './images/Ground.png';
import Flying from './images/Flying.png';
import Poison from './images/Poison.png';
import Fighting from './images/Fighting.png';
import Psychic from './images/Psychic.png';
import Dark from './images/Dark.png';
import Rock from './images/Rock.png';
import Bug from './images/Bug.png';
import Ghost from './images/Ghost.png';
import Steel from './images/Steel.png';
import Dragon from './images/Dragon.png';
import Fairy from './images/Fairy.png';
//import './Type.css';
const types = {
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
const tenTypes = Object.keys(types).slice(1, 19);
class Type extends Component {
//Phần 2: các State
  state = {
    typeDangChon: "",
  }
  //Phần 3: các Function
  gioiThieuType = (type) => {
    // alert("This is Pokemon " + type);
    if(this.state.typeDangChon === type) {
      this.setState({ typeDangChon: "" });
    }
    else {
      this.setState({ typeDangChon: type });
    }
  };
  render() {
    var {typeDangChon} = this.state;
    //const {  } = this.props
    return (
      <div className="Type" align='center'>
        <h1>All Types of Pokemon {typeDangChon}</h1>
        <Image src={types[typeDangChon].symbol} size='mini' />
        <br/>
        <Grid columns={6} doubling >
          { tenTypes.map(
              (moiType) => 
              <Grid.Column>
                <Button onClick={() => this.gioiThieuType(moiType)} style={{backgroundColor: types[moiType].bgcolor, color:'white'}}>
                  { typeDangChon=== moiType
                    ? <Icon name='check'  />
                    : null
                  }
                  {moiType}
                </Button>
              </Grid.Column>
            )
          }
        </Grid>
      </div>
    )
  }
}
export default Type;