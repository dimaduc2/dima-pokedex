//Phần 1: các Import
import React, { Component } from 'react'
import {Icon, Button, Image, Grid, Card, Popup} from 'semantic-ui-react'

import Profile from './Profile'

//import './Compare.css';

class Favourites extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function
  render() {
    // const {  } = this.state
    const { favPokemon, Pokedex, removeFromFavourites, removeAllFromFavourites, selectPokemon2, 
      comparePokemon1, comparePokemon2, comPokemon1, comPokemon2, typesInfo, addToFavourites } = this.props;

    return (
      <div className="Favourites">
        {
          Object.keys(favPokemon).length === 0 
          ? null
          : <Button basic color='red' onClick = {removeAllFromFavourites}>
              <Icon name='star' />Remove All
            </Button>
        }
        <br/><br/>
        {
          <Grid columns={3} doubling>
            {
              Object.keys(favPokemon).map (
                (moiTen) => 
                <Grid.Column align='center'>
                  <Card raised>
                    {/* <Image circular src={Pokedex[moiTen].picture}  size='medium' /> */}

                    <Popup
                      trigger={
                        <Image src={Pokedex[moiTen].picture}  size='smail' />
                      }
                      position='top center' on='click' wide='very'>
                      <Popup.Content>
                        <Profile Pokedex={Pokedex} tenPokemonDangXem={moiTen} comPokemon1={comPokemon1} comPokemon2={comPokemon2}  
                        comparePokemon1={comparePokemon1} comparePokemon2={comparePokemon2} favPokemon={favPokemon} 
                        selectPokemon2={selectPokemon2} typesInfo={typesInfo} removeFromFavourites={removeFromFavourites} 
                        addToFavourites={addToFavourites} />
                      </Popup.Content>
                    </Popup>

                    <Card.Content>
                      <Card.Header>
                        {Pokedex[moiTen].name}
                      </Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                      <Button basic color='red' onClick = {() => removeFromFavourites(moiTen)}>
                        <Icon name='star' />Remove
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            }
          </Grid>
        }
      </div>
    )
  }
}
export default Favourites;