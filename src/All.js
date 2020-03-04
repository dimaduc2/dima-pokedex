//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Popup, Button } from 'semantic-ui-react'

import Profile from './Profile'

import './All.css';

class All extends Component {

//Phần 2: tạo các State
  state = {
    pictureSize: 'mini',
    soCot: 7,
    typeDangChon: "All",
    dangMoBangType: false,
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
  
  chonPokemonTheoType = (type) => {
    if (this.state.typeDangChon === type) {
    this.setState({ typeDangChon: "All" });
    }
    else {
      this.setState({ typeDangChon: type });
    }
  }

  chonAllPokemon = () => {
    this.setState({ typeDangChon: "All" });
  }

  hienBangType = () => {
    if (this.state.dangMoBangType === false) {
      this.setState({dangMoBangType: true})
    }
    else {
      this.setState({dangMoBangType: false})
    }
  }

  render() {
    const { pictureSize, soCot, dangMoBangType, typeDangChon } = this.state
    const { Pokedex, favPokemon, addToFavourites, removeFromFavourites, selectPokemon2, deletePoke1,
            comparePokemon1, comparePokemon2, comPokemon1, comPokemon2, typesInfo, imageAll} = this.props;
    const tenTypes = Object.keys(typesInfo).slice(1, 19);
    return (
      <div className="All" align="center">
        <h1>{typeDangChon} Pokemon</h1>
        <br/><br/>
        {/*         
        <Grid columns={pictureSize === 'mini'
          ? 7
          : pictureSize === 'small'
            ? 5
            : 6
        } doubling >
         */}
        <Grid columns={soCot} doubling >
          {
            Object.keys(Pokedex).map(
              (moiTen) => Pokedex[moiTen].types.includes(typeDangChon) || typeDangChon==="All" 
              ? <Grid.Column>
                  <Popup
                    trigger={<div>
                        <Image src={Pokedex[moiTen].picture}  size={pictureSize} />
                        <p>{Pokedex[moiTen].name}</p>
                      </div>}
                    position='top center' on='click' wide='very' >
                    <Popup.Content>
                      <Profile Pokedex={Pokedex} tenPokemonDangXem={moiTen} comPokemon1={comPokemon1} comPokemon2={comPokemon2} 
                      comparePokemon1={comparePokemon1} comparePokemon2={comparePokemon2} favPokemon={favPokemon} 
                      typesInfo={typesInfo} removeFromFavourites={removeFromFavourites} addToFavourites={addToFavourites} 
                      selectPokemon2={selectPokemon2} deletePoke1 = {deletePoke1} />
                    </Popup.Content>
                  </Popup>
                </Grid.Column>
              : null
            )
          }
        </Grid>
        
        
        {dangMoBangType === true
          ? <div className='bang-type'>
              <Grid columns={3}>
                { tenTypes.map(
                  (moiType) => 
                  <Grid.Column>
                    <Image className={
                      moiType === typeDangChon
                      ? "da-bam"
                      : "chua-bam"
                    } 
                    src={typesInfo[moiType].symbol} size='mini' onClick={() => this.chonPokemonTheoType(moiType)} />
                  </Grid.Column>
                )}
              </Grid>
              <br/>
              <Button onClick={this.chonAllPokemon} fluid color="red" 
                basic={
                  typeDangChon === "All"
                  ? false
                  : true
                }
              >All</Button>
            </div>
          : null
        }
        <Image src= {imageAll} size='small' />
        {/* {tenSauAll}
        <br/>
        {NickPoke} */}

        <Button color='blue' circular icon='search plus' onClick={this.bigPicture} className="nut-phong-to"></Button>
        <Button color='red' circular icon='search minus' onClick={this.smallPicture} className="nut-phong-nho"></Button>
        <Button color='violet' icon='filter' onClick={this.hienBangType} className="chon-pokemon-theo-type"></Button>
      </div>
    )
  }
}
export default All;