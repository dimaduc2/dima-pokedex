//Phần 1: các Import
import React, { Component } from 'react'
import { Button, Icon, Image, Grid, Card, Popup } from 'semantic-ui-react'
import Profile from './Profile'
//import './Type.css';
class Type extends Component {
//Phần 2: các State
  state = {
    typeDangChon: "",
  }
  //Phần 3: các Function
  gioiThieuType = (type) => {
    // alert("This is Pokemon " + type);
    if (this.state.typeDangChon === type) {
      this.setState({ typeDangChon: "" });
    }
    else {
      this.setState({ typeDangChon: type });
    }
  };
  render() {
    var {typeDangChon} = this.state;
    const { Pokedex, addToFavourites, removeFromFavourites, favPokemon, typesInfo, 
            comparePokemon1, comparePokemon2, comPokemon1, comPokemon2, selectPokemon2, deletePoke1 } = this.props
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
                { typeDangChon === moiType
                  ? <Icon name='check'/>
                  : null
                } {moiType}
              </Button>
            </Grid.Column>
          )}
        </Grid>
        <Grid columns={6} doubling >
          {Object.keys(Pokedex).map(
            (moiTen) => Pokedex[moiTen].types.includes(typeDangChon)
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
                    <Profile Pokedex={Pokedex} tenPokemonDangXem={moiTen} comPokemon1={comPokemon1} comPokemon2={comPokemon2}  
                    comparePokemon1={comparePokemon1} comparePokemon2={comparePokemon2} favPokemon={favPokemon} typesInfo={typesInfo} 
                    removeFromFavourites={removeFromFavourites} addToFavourites={addToFavourites} selectPokemon2 = {selectPokemon2} 
                    deletePoke1 = {deletePoke1} />
                  </Popup.Content>
                </Popup>
              </Grid.Column>
            : null
          )}
        </Grid>
      </div>
    )
  }
}
export default Type;