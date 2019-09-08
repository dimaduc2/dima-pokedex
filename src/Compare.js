//Phần 1: các Import
import React, { Component } from 'react'
import { Image, Table, Dropdown } from 'semantic-ui-react'

//import './Compare.css';


class Compare extends Component {

//Phần 2: các State
  state = {  }

//Phần 3: các Function

  render() {
    const { comPokemon1, comPokemon2, Pokedex} = this.props

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
      <div className="Compare" align="center">
        { comPokemon1 === "" || comPokemon2 === ""
          ? null
          : <Table definition textAlign="center">
              <Table.Header>
                <Table.Row align="center">
                  <Table.HeaderCell />
                  
                  <Table.HeaderCell>
                  <Dropdown
                    placeholder='Select Friend'
                    fluid
                    selection
                    options={pokemonOptions}
                  />
                  </Table.HeaderCell>

                  <Table.HeaderCell>
                  <Dropdown
                    placeholder='Select Friend'
                    fluid
                    selection
                    options={pokemonOptions}
                  />
                  </Table.HeaderCell>


                </Table.Row>
                
                <Table.Row align="center">
                  <Table.HeaderCell />
                  <Table.HeaderCell><Image src = {Pokedex[comPokemon1].picture} size='medium' /></Table.HeaderCell>
                  <Table.HeaderCell><Image src = {Pokedex[comPokemon2].picture} size='medium' /></Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell><p>{Pokedex[comPokemon1].name}</p></Table.HeaderCell>
                  <Table.HeaderCell><p>{Pokedex[comPokemon2].name}</p></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Type</Table.Cell>
                  <Table.Cell>{Pokedex[comPokemon1].types}</Table.Cell>
                  <Table.Cell>{Pokedex[comPokemon2].types}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>HP</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon1].hp > Pokedex[comPokemon2].hp}>{Pokedex[comPokemon1].hp}</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon2].hp > Pokedex[comPokemon1].hp}>{Pokedex[comPokemon2].hp}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Attack</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon1].attack > Pokedex[comPokemon2].attack}>{Pokedex[comPokemon1].attack}</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon2].attack > Pokedex[comPokemon1].attack}>{Pokedex[comPokemon2].attack}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Defense</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon1].defense > Pokedex[comPokemon2].defense}>{Pokedex[comPokemon1].defense}</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon2].defense > Pokedex[comPokemon1].defense}>{Pokedex[comPokemon2].defense}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sp. Atk</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon1].sp_atk > Pokedex[comPokemon2].sp_atk}>{Pokedex[comPokemon1].sp_atk}</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon2].sp_atk > Pokedex[comPokemon1].sp_atk}>{Pokedex[comPokemon2].sp_atk}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sp. Def</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon1].sp_def > Pokedex[comPokemon2].sp_def}>{Pokedex[comPokemon1].sp_def}</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon2].sp_def > Pokedex[comPokemon1].sp_def}>{Pokedex[comPokemon2].sp_def}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Speed</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon1].speed > Pokedex[comPokemon2].speed}>{Pokedex[comPokemon1].speed}</Table.Cell>
                  <Table.Cell negative = {Pokedex[comPokemon2].speed > Pokedex[comPokemon1].speed}>{Pokedex[comPokemon2].speed}</Table.Cell>
                </Table.Row>
              </Table.Body>

              <Table.Body>
                <Table.Row>
                  <Table.Cell><b>Total</b></Table.Cell>
                  <Table.Cell negative = 
                  
                  {(Pokedex[comPokemon1].hp + Pokedex[comPokemon1].attack + Pokedex[comPokemon1].defense + 
                    Pokedex[comPokemon1].sp_atk + Pokedex[comPokemon1].sp_def + Pokedex[comPokemon1].speed)
                     > 
                    (Pokedex[comPokemon2].hp + Pokedex[comPokemon2].attack + Pokedex[comPokemon2].defense + 
                    Pokedex[comPokemon2].sp_atk + Pokedex[comPokemon2].sp_def + Pokedex[comPokemon2].speed)}>

                    <b>{Pokedex[comPokemon1].hp + Pokedex[comPokemon1].attack + Pokedex[comPokemon1].defense + 
                    Pokedex[comPokemon1].sp_atk + Pokedex[comPokemon1].sp_def + Pokedex[comPokemon1].speed}</b>
                    
                  </Table.Cell>
                  <Table.Cell negative = 
                  
                  {(Pokedex[comPokemon2].hp + Pokedex[comPokemon2].attack + Pokedex[comPokemon2].defense + 
                    Pokedex[comPokemon2].sp_atk + Pokedex[comPokemon2].sp_def + Pokedex[comPokemon2].speed)
                     > 
                    (Pokedex[comPokemon1].hp + Pokedex[comPokemon1].attack + Pokedex[comPokemon1].defense + 
                    Pokedex[comPokemon1].sp_atk + Pokedex[comPokemon1].sp_def + Pokedex[comPokemon1].speed)}>
                    
                    <b>{Pokedex[comPokemon2].hp + Pokedex[comPokemon2].attack + Pokedex[comPokemon2].defense + 
                    Pokedex[comPokemon2].sp_atk + Pokedex[comPokemon2].sp_def + Pokedex[comPokemon2].speed}</b>
                    
                    </Table.Cell>
                </Table.Row>
              </Table.Body>

            </Table>
        }
      </div>
    )
  }
}
export default Compare;