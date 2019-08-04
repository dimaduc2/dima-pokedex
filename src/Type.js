
//Phần 1: các Import
import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'


//import './Type.css';



class Type extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function


  render() {
    //const {  } = this.state

    return (
      <div className="Type">
        <h1>All Types of Pokemon</h1>
        <Label style={{backgroundColor:'#a8a878', color:'white'}}>
          Normal
        </Label>
        <Label style={{backgroundColor:'#f08030', color:'white'}}>
          Fire
        </Label>
        <Label style={{backgroundColor:'#6890f0', color:'white'}}>
          Water
        </Label>
        <Label style={{backgroundColor:'#78c850', color:'white'}}>
          Grass
        </Label>
        <Label style={{backgroundColor:'#f8d030', color:'white'}}>
          Electric
        </Label>
        <Label style={{backgroundColor:'#98d8d8', color:'white'}}>
          Ice
        </Label>
        <Label style={{backgroundColor:'#e0c068', color:'white'}}>
          Ground
        </Label>
        <Label style={{backgroundColor:'#a890f0', color:'white'}}>
          Flying
        </Label>
        <Label style={{backgroundColor:'#a040a0', color:'white'}}>
          Poison
        </Label>
        <Label style={{backgroundColor:'#c03028', color:'white'}}>
          Fighting
        </Label>
        <Label style={{backgroundColor:'#f85888', color:'white'}}>
          Psychic
        </Label>
        <Label style={{backgroundColor:'#705848', color:'white'}}>
          Dark
        </Label>
        <Label style={{backgroundColor:'#b8a038', color:'white'}}>
          Rock
        </Label>
        <Label style={{backgroundColor:'#a8b820', color:'white'}}>
          Bug
        </Label>
        <Label style={{backgroundColor:'#705898', color:'white'}}>
          Ghost
        </Label>
        <Label style={{backgroundColor:'#b8b8d0', color:'white'}}>
          Steel
        </Label>
        <Label style={{backgroundColor:'#7038f8', color:'white'}}>
          Dragon
        </Label>
        <Label style={{backgroundColor:'#ffaec9', color:'white'}}>
          Fairy
        </Label>

      </div>

    )
  }
}
export default Type;