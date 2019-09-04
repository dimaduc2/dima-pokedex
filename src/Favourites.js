//Phần 1: các Import
import React, { Component } from 'react'
import { Icon, Button, Image, Grid, Card} from 'semantic-ui-react'

//import './Compare.css';

class Favourites extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function
  render() {
    // const {  } = this.state
    const { favPokemon, Pokedex, removeFromFavourites, removeAllFromFavourites } = this.props;

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
                    <Image circular src={Pokedex[moiTen].picture}  size='medium' />
                    <Card.Content>
                      <Card.Header>
                        {Pokedex[moiTen].name}
                      </Card.Header>
                      <Card.Description>
                        {Pokedex[moiTen].types}
                      </Card.Description>
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