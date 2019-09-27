//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Popup, Button } from 'semantic-ui-react'

import Profile from './Profile'

//import './All.css';
class All extends Component {

//Phần 2: tạo các State
  state = {
    pictureSize: 'mini',
    soCot: 7
  }

//Phần 3: các Function
  
  //gọi function này thì sẽ to lên
  bigPicture = () => {
    // nếu ảnh đang bé nhất
    if(this.state.pictureSize === 'mini') {
      // thì thay đổi to lên tiny
      this.setState({pictureSize: 'tiny'});
      // và thay đổi số cột ít đi
      this.setState({soCot: 6});
    }
    // còn nếu ảnh đang tiny
    else if(this.state.pictureSize === 'tiny') {
      // thì thay đổi to nhất
      this.setState({pictureSize: 'small'});
      this.setState({soCot: 5});
    }
  }

  //gọi function này thì sẽ nhỏ đi
  smallPicture = () => {
    if(this.state.pictureSize === 'small') {
      // thì thay đổi nhỏ đi tiny
      this.setState({pictureSize: 'tiny'});
      // và thay đổi số cột nhiều lên
      this.setState({soCot: 6});
    }
    // còn nếu ảnh đang tiny
    else if(this.state.pictureSize === 'tiny') {
      // thì thay đổi nhỏ nhất
      this.setState({pictureSize: 'mini'});
      this.setState({soCot: 7});
    }
  }
  
  render() {
    const { pictureSize, soCot } = this.state
    const { Pokedex, favPokemon, addToFavourites, removeFromFavourites, 
            comparePokemon1, comparePokemon2, comPokemon1, comPokemon2, typesInfo } = this.props;
    return (
      <div className="All" align="center">
        <Button circular icon='search plus' onClick={this.bigPicture}></Button>
        <Button circular icon='search minus' onClick={this.smallPicture}></Button>
        <br/><br/>
        
        {/*         
        <Grid columns={pictureSize === 'mini'
          ? 7
          : pictureSize === 'small'
            ? 5
            : 6
        } doubling >
         */}
        <Grid columns={soCot 

        } doubling >
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