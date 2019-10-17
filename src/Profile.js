
//Phần 1: các Import
import React, { Component } from 'react'
import { Card, Icon, Button, Label, Grid, Image } from 'semantic-ui-react'

//import './Compare.css';

class Profile extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    // const {  } = this.state

    const { Pokedex, tenPokemonDangXem, comPokemon1, comPokemon2, comparePokemon1, comparePokemon2, favPokemon, typesInfo, 
      removeFromFavourites, addToFavourites } = this.props

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{Pokedex[tenPokemonDangXem].name}</Card.Header>
          <Card.Description>
            <Grid columns={2}>
              <Grid.Column width={10} align="center">
                <Image src={Pokedex[tenPokemonDangXem].picture} size='large' />
                <p>{Pokedex[tenPokemonDangXem].types.map((moiType) => 
                <Label style={{backgroundColor: typesInfo[moiType].bgcolor, color:'white'}}>{moiType + " "}</Label>)}</p>
              </Grid.Column>
              <Grid.Column width={6}>
                {Pokedex[tenPokemonDangXem].info 
                  ? <p> Info: {Pokedex[tenPokemonDangXem].info} </p> 
                  : null
                }
                <p>HP: {Pokedex[tenPokemonDangXem].hp}</p>
                <p>Attack: {Pokedex[tenPokemonDangXem].attack}</p>
                <p>Defense: {Pokedex[tenPokemonDangXem].defense}</p>
                <p>Sp. Atk: {Pokedex[tenPokemonDangXem].sp_atk}</p>
                <p>Sp. Def: {Pokedex[tenPokemonDangXem].sp_def}</p>
                <p>Speed: {Pokedex[tenPokemonDangXem].speed}</p>
                <p>Total: {Pokedex[tenPokemonDangXem].hp + Pokedex[tenPokemonDangXem].attack + Pokedex[tenPokemonDangXem].defense + 
                          Pokedex[tenPokemonDangXem].sp_atk + Pokedex[tenPokemonDangXem].sp_def + Pokedex[tenPokemonDangXem].speed}</p>
                
                <Button basic color='red' onClick = {
                  tenPokemonDangXem in favPokemon ? () => removeFromFavourites(tenPokemonDangXem) : () => addToFavourites(tenPokemonDangXem)}>
                  <Icon name = {tenPokemonDangXem in favPokemon ? 'star' : 'star outline'} />
                              {tenPokemonDangXem in favPokemon ? 'Remove' : 'Favorite'}
                </Button>

                {comPokemon2 === tenPokemonDangXem
                  ?null
                  : <Button basic color='black' onClick = { () => comparePokemon1 (tenPokemonDangXem) }>
                  {/* <Icon name={tenPokemonDangXem in comPokemon ?'circle' :'circle outline'} /> */}
                  {comPokemon1 === tenPokemonDangXem
                    ? <Icon name='check' color="green" />
                    : null
                  }
                  {comPokemon1 === tenPokemonDangXem
                    ? 'Comparing'
                    : 'Compare'
                  }
                </Button>
                }

                {comPokemon1 === tenPokemonDangXem || comPokemon1 === ''
                  ? null
                  : <Button basic color='black' onClick = { () => comparePokemon2 (tenPokemonDangXem) }>
                      {comPokemon2 === tenPokemonDangXem
                        ? <Icon name='check' color="green" />
                        : null
                      }
                      {comPokemon2 === tenPokemonDangXem
                        ? <span>Compared vs {comPokemon1}</span>
                        : <span>Compare vs {comPokemon1}</span>
                      }
                    </Button>
                }

              </Grid.Column>
            </Grid>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
export default Profile;