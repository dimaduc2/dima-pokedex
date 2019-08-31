//Phần 1: các Import
import React, { Component } from 'react'
import { Button, Icon, Image, Grid, Card, Popup } from 'semantic-ui-react'
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
    const { Pokedex, addToFavourites, removeFromFavourites } = this.props
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
        <Grid columns={6} doubling >
          {
            Object.keys(Pokedex).map(
              (moiTen) =>
              <div>
                {
                Pokedex[moiTen].types.includes(typeDangChon)
                
                  
                  ? <Grid.Column>
                      <Popup
                        trigger={
                          <div>
                            <Image src={Pokedex[moiTen].picture}  size='tiny' />
                            <p>{Pokedex[moiTen].name}</p>
                          </div>
                        }
                        position='top center'
                        on='click'
                        wide='very'
                      >
                        <Popup.Content>
                          <Card fluid>
                            <Card.Content>
                              <Card.Header>{Pokedex[moiTen].name}</Card.Header>
                              <Card.Description>
                                <Grid columns={2}>
                                  <Grid.Column width={10}>
                                    <Image src={Pokedex[moiTen].picture} size='large' />
                                  </Grid.Column>
                                  <Grid.Column width={6}>
                                    <p>Type: {Pokedex[moiTen].types}</p>
                                    {Pokedex[moiTen].info ? <p>Info: {Pokedex[moiTen].info}</p> : null}
                                    <p>HP: {Pokedex[moiTen].hp}</p>
                                    <p>Attack: {Pokedex[moiTen].attack}</p>
                                    <p>Defense: {Pokedex[moiTen].defense}</p>
                                    <p>Sp. Atk: {Pokedex[moiTen].sp_atk}</p>
                                    <p>Sp. Def: {Pokedex[moiTen].sp_def}</p>
                                    <p>Speed: {Pokedex[moiTen].speed}</p>
                                    <p>Total: {Pokedex[moiTen].hp + Pokedex[moiTen].attack + Pokedex[moiTen].defense + 
                                              Pokedex[moiTen].sp_atk + Pokedex[moiTen].sp_def + Pokedex[moiTen].speed}</p>
      
                                  </Grid.Column>
                                </Grid>
                              </Card.Description>
                            </Card.Content>
                          </Card>
                        </Popup.Content>
                      </Popup>
                    </Grid.Column>

                  : null
                }
              </div>


            )
          }
        </Grid>
      </div>
    )
  }
}
export default Type;