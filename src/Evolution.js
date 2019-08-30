//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Card, Popup } from 'semantic-ui-react'

// import Eevee from './Eeveelutions/133 Eevee (Normal).jpg';
// import Vaporeon from './Eeveelutions/134 Vaporeon (Water).jpg';
// import Jolteon from './Eeveelutions/135 Jolteon (Electric).jpg';
// import Flareon from './Eeveelutions/136 Flareon (Fire).jpg';
// import Espeon from './Eeveelutions/196 Espeon (Psychic).jpg';
// import Umbreon from './Eeveelutions/197 Umbreon (Dark).jpg';
// import Leafeon from './Eeveelutions/470 Leafeon (Grass).jpg';
// import Glaceon from './Eeveelutions/471 Glaceon (Ice).jpg';
// import Sylveon from './Eeveelutions/700 Sylveon (Fairy).jpg';

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
        
        {/* <Image src={Eevee} size='medium' />
        <Image src={Vaporeon} size='medium' />
        <Image src={Jolteon} size='medium' />
        <Image src={Flareon} size='medium' />
        <Image src={Espeon} size='medium' />
        <Image src={Umbreon} size='medium' />
        <Image src={Leafeon} size='medium' />
        <Image src={Glaceon} size='medium' />
        <Image src={Sylveon} size='medium' /> */}



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