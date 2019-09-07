//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Card, Popup, Icon, Button } from 'semantic-ui-react'

//import './All.css';

class All extends Component {

//Phần 2: các State
  state = { }

//Phần 3: các Function

  render() {
    // const {  } = this.state
    const { Pokedex, favPokemon, addToFavourites, removeFromFavourites, comparePokemon1, comparePokemon2 } = this.props;
    return (
      <div className="All" align="center">
        <br/><br/>
        <Grid columns={5} doubling>
          {
            Object.keys(Pokedex).map(
              (moiTen) => 
              <Grid.Column>
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

                              <Button basic color='red' onClick = {
                                moiTen in favPokemon ? () => removeFromFavourites(moiTen) : () => addToFavourites(moiTen)}>
                                <Icon name={moiTen in favPokemon ?'star' :'star outline'} />
                                {moiTen in favPokemon ?'Remove' :'Favorite'}
                              </Button>

                              <Button basic color='black' onClick = {
                               () => comparePokemon1 (moiTen) }>
                              {/* <Icon name={moiTen in comPokemon ?'circle' :'circle outline'} /> */}
                                Compare1
                              </Button>
                              <Button basic color='black' onClick = {
                                () => comparePokemon2 (moiTen) }>
                              {/* <Icon name={moiTen in comPokemon ?'circle' :'circle outline'} /> */}
                                Compare2
                              </Button>
                              
                              {/* <Button */}
                            </Grid.Column>
                          </Grid>
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
export default All;