
//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

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
        
        <Grid columns={3}>
          {
            Object.keys(Pokedex).map(
              (moiSo) => 
              <Grid.Column>
                <Image src={Pokedex[moiSo].picture} size='Extra small	' />
                <h1>{Pokedex[moiSo].name}</h1>
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
              </Grid.Column>
            )
          }
        </Grid>
        
      </div>
    )
  }
}
export default All;