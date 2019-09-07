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
              (moiSo) => 
              <Grid.Column>
                
                <Popup
                  trigger={
                    <div>
                      <Image src={Pokedex[moiSo].picture}  size='tiny' />
                      <p>{Pokedex[moiSo].name}</p>
                    </div>
                  }>
                <Popup.Content>
                  <Card>
                    <Image src={Pokedex[moiSo].picture} size='small' />
                    <Card.Content>
                      <Card.Header>{Pokedex[moiSo].name}</Card.Header>
                      <Card.Description>
                        <h1>{Pokedex[moiSo].name}</h1>
                        <p>evolves into {Pokedex[moiSo].evolves_into}</p>
                        <p>evolves from {Pokedex[moiSo].evolves_from}</p>
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