//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Popup, Button, Icon, Menu } from 'semantic-ui-react'

import Profile from './Profile'

//import './All.css';
class All extends Component {

//Phần 2: các State
  state = {
    pictureSize: 'tiny'
  }

//Phần 3: các Function
  
  //gọi function này thì sẽ to lên
  bigPicture = () => {
    if(this.state.pictureSize === 'tiny') {
      this.setState({pictureSize: 'small'});
    }
    else if(this.state.pictureSize === 'small') {
      this.setState({pictureSize: 'big'});
    }
  }

  smallPicture = () => {
    this.setState({pictureSize: 'tiny'});
    
  }
  
  render() {
    const { pictureSize } = this.state
    const { Pokedex, favPokemon, addToFavourites, removeFromFavourites, 
            comparePokemon1, comparePokemon2, comPokemon1, comPokemon2, typesInfo } = this.props;
    return (
      <div className="All" align="center">
        <Button circular icon='search plus' onClick={this.bigPicture}></Button>
        <Button circular icon='search minus' onClick={this.smallPicture}></Button>
        <br/><br/>
        <Grid columns={5} doubling>
          {
            Object.keys(Pokedex).map(
              (moiTen) => 
              <Grid.Column>
                <Popup
                  trigger={<div>
                      
                      
                      
                      <Image src={Pokedex[moiTen].picture}  size={pictureSize} />



                      <p>{Pokedex[moiTen].name}</p>
                    </div>}
                  position='top center' on='click' wide='very' >
                  <Popup.Content>
                    <Profile Pokedex={Pokedex} moiTen={moiTen} comPokemon1={comPokemon1} comPokemon2={comPokemon2}  
                    comparePokemon1={comparePokemon1} comparePokemon2={comparePokemon2} favPokemon={favPokemon}  
                    typesInfo={typesInfo} removeFromFavourites={removeFromFavourites} addToFavourites={addToFavourites} />
                  </Popup.Content>
                </Popup>
              </Grid.Column>
            )
          }
        </Grid>
      </div>
    )
  }
}
export default All;