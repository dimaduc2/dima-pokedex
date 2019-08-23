
//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Card, Popup } from 'semantic-ui-react'

//import './All.css';

class All extends Component {

//Phần 2: các State
  state = { }

//Phần 3: các Function

  render() {
    // const {  } = this.state
    const { Pokedex } = this.props;
    return (
      <div className="All" align="center">
        
        <br/><br/>
        
        <Grid columns={5}>
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
                  }
                >

                  <Popup.Content>
                    <Card>
                      <Image src={Pokedex[moiSo].picture} size='tiny' />
                      <Card.Content>
                        <Card.Header>{Pokedex[moiSo].name}</Card.Header>
                        <Card.Description>
                          <p>{Pokedex[moiSo].types}</p>  
                          <p>HP {Pokedex[moiSo].hp}</p>
                          <p>Attack {Pokedex[moiSo].attack}</p>
                          <p>Defense {Pokedex[moiSo].defense}</p>
                          <p>Sp. Atk {Pokedex[moiSo].sp_atk}</p>
                          <p>Sp. Def {Pokedex[moiSo].sp_def}</p>
                          <p>Speed {Pokedex[moiSo].speed}</p>
                          <p>Total {Pokedex[moiSo].hp + Pokedex[moiSo].attack + Pokedex[moiSo].defense + 
                                    Pokedex[moiSo].sp_atk + Pokedex[moiSo].sp_def + Pokedex[moiSo].speed}</p>
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
export default All;