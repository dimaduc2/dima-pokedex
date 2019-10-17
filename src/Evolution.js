//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Card, Popup, Dropdown } from 'semantic-ui-react'

import Profile from './Profile'

//import './Compare.css';

class Evolution extends Component {

//Phần 2: các State
  state = { tenPokemonDaChon: "eevee" }

//Phần 3: các Function
  chonPokemon  = (e, {value}) => {

    const { Pokedex } = this.props;
    
    // var tenPokemonEvolves = "";

    // for(let i = 0; i < Pokedex[value].evolves_into.length; i++){
    //   tenPokemonEvolves += (Pokedex[value].evolves_into[i] + "\n")
    // }

    // alert(Pokedex[value].name + " " 
    //   + "\n" + "evolves into: " +  "\n" + tenPokemonEvolves
    //   + "\n" + "evolves from: " +  "\n" + Pokedex[value].evolves_from
    // )

    this.setState({tenPokemonDaChon: value })
    
  }

  
  render() {
    const { tenPokemonDaChon } = this.state
    const { Pokedex, comPokemon1, comPokemon2, comparePokemon1, comparePokemon2, favPokemon, typesInfo, 
            removeFromFavourites, addToFavourites } = this.props;
    
    const pokemonOptions = Object.keys(Pokedex).map (
      (moiTen) => (
        {
          key: moiTen,
          text: Pokedex[moiTen].name,
          value: moiTen,
          image: { avatar: true, src: Pokedex[moiTen].picture },
        }
      )
    )
    return (
      <div className="Evolution" align="center">
        <Dropdown
          placeholder='Select Pokemon'
          fluid
          search
          selection
          options={pokemonOptions}
          onChange={this.chonPokemon}
        /><br/><br/>

        <Image src={Pokedex[tenPokemonDaChon].picture} size='small' />
        <p>{Pokedex[tenPokemonDaChon].name}</p>

        {Pokedex[tenPokemonDaChon].evolves_from
          ? <Popup
              trigger={<div>
                <Image src={Pokedex[Pokedex[tenPokemonDaChon].evolves_from].picture} size='small' />
                <p>{Pokedex[Pokedex[tenPokemonDaChon].evolves_from].name}</p>
              </div>}
              position='top center' on='click' wide='very' >
              <Popup.Content>
                <Profile Pokedex={Pokedex} tenPokemonDangXem={Pokedex[tenPokemonDaChon].evolves_from} comPokemon1={comPokemon1} comPokemon2={comPokemon2}  
                comparePokemon1={comparePokemon1} comparePokemon2={comparePokemon2} favPokemon={favPokemon}  
                typesInfo={typesInfo} removeFromFavourites={removeFromFavourites} addToFavourites={addToFavourites} />
              </Popup.Content>
            </Popup>
          : null
        }


        {
          Pokedex[tenPokemonDaChon].evolves_into.map (
            (moiPokeEvo) =>
                <Popup
                  trigger={<div>
                    <Image src={Pokedex[moiPokeEvo].picture} size='small' />
                    {Pokedex[moiPokeEvo].name}
                  </div>}
                  position='top center' on='click' wide='very' >
                  <Popup.Content>
                    <Profile Pokedex={Pokedex} tenPokemonDangXem={moiPokeEvo} comPokemon1={comPokemon1} comPokemon2={comPokemon2}  
                    comparePokemon1={comparePokemon1} comparePokemon2={comparePokemon2} favPokemon={favPokemon}  
                    typesInfo={typesInfo} removeFromFavourites={removeFromFavourites} addToFavourites={addToFavourites} />
                  </Popup.Content>
                </Popup>
          )
          
        }


          


          

        {/* <p>{Pokedex[tenPokemonDaChon].evolves_into}</p> */}

        {/* 
        {Pokedex[tenPokemonDaChon].evolves_into
          ? <Image src={Pokedex[Pokedex[tenPokemonDaChon].evolves_into].picture} size='small' />
          : null
        }
         */}


        

        {/* <Grid columns={5} doubling>
          {
            Object.keys(Pokedex).map(
              (moiTenPokemon) => 
              <Grid.Column>
              
              </Grid.Column>
            )
          }
        </Grid> */}

        {/* <Grid columns={5} doubling>
          {
            Object.keys(Pokedex).map(
              (moiTenPokemon) => 
              <Grid.Column>
                
                <Popup
                  trigger={
                    <div>
                      <Image src={Pokedex[moiTenPokemon].picture}  size='tiny' />
                      <p>{Pokedex[moiTenPokemon].name}</p>
                    </div>
                  }
                  on='click'>
                <Popup.Content>
                  <Card>
                    <Image src={Pokedex[moiTenPokemon].picture} size='small' />
                    <Card.Content>
                      <Card.Header>{Pokedex[moiTenPokemon].name}</Card.Header>
                      <Card.Description>
                        <h1>{Pokedex[moiTenPokemon].name}</h1>
                        
                        <p>evolves into: {Pokedex[moiTenPokemon].evolves_into.map (
                          (moiTenEvolveInto) => <Image src={Pokedex[moiTenEvolveInto] 
                                                ? Pokedex[moiTenEvolveInto].picture 
                                                : null} 
                                                size='tiny' />)}</p>
                        
                        <p>evolves from:
                          <Image src={Pokedex[moiTenPokemon].evolves_from 
                          ? Pokedex[Pokedex[moiTenPokemon].evolves_from].picture 
                          : null} 
                          size='tiny' /></p>

                        <br/><br/>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  </Popup.Content>
                </Popup>
              </Grid.Column>
            )
          }
        </Grid> */}
      </div>
    )
  }
}
export default Evolution;