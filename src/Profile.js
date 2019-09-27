
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

    const { Pokedex, moiTen, comPokemon1, comPokemon2, comparePokemon1, comparePokemon2, favPokemon, typesInfo, 
      removeFromFavourites, addToFavourites } = this.props

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{Pokedex[moiTen].name}</Card.Header>
          <Card.Description>
            <Grid columns={2}>
              <Grid.Column width={10} align="center">
                <Image src={Pokedex[moiTen].picture} size='large' />
                <p>{Pokedex[moiTen].types.map((moiType) => 
                <Label style={{backgroundColor: typesInfo[moiType].bgcolor, color:'white'}}>{moiType + " "}</Label>)}</p>
              </Grid.Column>
              <Grid.Column width={6}>
                {Pokedex[moiTen].info 
                  ? <p> Info: {Pokedex[moiTen].info} </p> 
                  : null
                }
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
                <Button basic color='black' onClick = { () => comparePokemon1 (moiTen) }>
                  {/* <Icon name={moiTen in comPokemon ?'circle' :'circle outline'} /> */}
                  {comPokemon1 === moiTen
                    ? <Icon name='check' color="green" />
                    : null
                  }
                  {comPokemon1 === moiTen
                    ? 'Comparing'
                    : 'Compare'
                  }
                </Button>
                {comPokemon1 === ''
                  ? null
                  : <Button basic color='black' onClick = { () => comparePokemon2 (moiTen) }>
                      {/* <Icon name={moiTen in comPokemon ?'circle' :'circle outline'} /> */}
                      {comPokemon2 === moiTen
                        ? <Icon name='check' color="green" />
                        : null
                      }
                      {comPokemon2 === moiTen
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