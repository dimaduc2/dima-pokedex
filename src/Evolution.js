//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Card, Popup } from 'semantic-ui-react'

//import './Compare.css';

class Evolution extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state
    const { Pokedex } = this.props;
    return (
      <div className="Evolution" align="center">

        <Grid columns={5} doubling>
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
        </Grid>
      </div>
    )
  }
}
export default Evolution;