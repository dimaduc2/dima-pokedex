//Phần 1: các Import
import React, { Component } from 'react'
import { Button, Icon, Image, Grid, Card, Popup } from 'semantic-ui-react'
//import './Type.css';
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
    const { Pokedex, addToFavourites, removeFromFavourites, favPokemon, typesInfo } = this.props
    const tenTypes = Object.keys(typesInfo).slice(1, 19);
    return (
      <div className="Type" align='center'>
        <h1>All Types of Pokemon {typeDangChon}</h1>
        <Image src={typesInfo[typeDangChon].symbol} size='mini' />
        <br/>
        <Grid columns={6} doubling >
          { tenTypes.map(
              (moiType) => 
              <Grid.Column>
                <Button onClick={() => this.gioiThieuType(moiType)} style={{backgroundColor: typesInfo[moiType].bgcolor, color:'white'}}>
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
              
                
                Pokedex[moiTen].types.includes(typeDangChon)
                
                  ? <Grid.Column>
                      <Popup
                        trigger={
                          <div>
                            <Image src={Pokedex[moiTen].picture}  size='tiny' />
                            <p>{Pokedex[moiTen].name}</p>
                          </div>
                        }
                        position='top center' on='click' wide='very'>
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
                                    
                                    
                                    <Button basic color='red' onClick = {
                                      moiTen in favPokemon ? () => removeFromFavourites(moiTen) : () => addToFavourites(moiTen)}>
                                      <Icon name={moiTen in favPokemon ?'star' :'star outline'} />
                                      {moiTen in favPokemon ?'Remove' :'Favorite'}
                                    </Button>


                                  </Grid.Column>
                                </Grid>
                              </Card.Description>
                            </Card.Content>
                          </Card>
                        </Popup.Content>
                      </Popup>
                    </Grid.Column>

                  : null
            )
          }
        </Grid>
      </div>
    )
  }
}
export default Type;