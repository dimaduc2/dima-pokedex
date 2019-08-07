
//Phần 1: các Import
import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'


//import './Type.css';



class Type extends Component {

//Phần 2: các State
  state = {
    typeDangChon: "",
    
  }

  //Phần 3: các Function
  gioiThieuType = (type) => {
    // alert("This is Pokemon " + type);
    this.setState({ typeDangChon: type });
  };

  render() {
    var {typeDangChon} = this.state;
    //const {  } = this.props
    return (
      <div className="Type">
        <h1>All Types of Pokemon {typeDangChon}</h1>
        {/* <Image  /> */}
        <Button onClick={() => this.gioiThieuType('Normal')} style={{backgroundColor:'#a8a878', color:'white'}}>
          { typeDangChon==="Normal"
            ? <Icon name='check' />
            : null
          }
          Normal
        </Button>
        <Button onClick={() => this.gioiThieuType('Fire')} style={{backgroundColor:'#f08030', color:'white'}}>
          { typeDangChon==="Fire"
            ? <Icon name='check' />
            : null
          }
          Fire
        </Button>
        <Button onClick={() => this.gioiThieuType('Water')} style={{backgroundColor:'#6890f0', color:'white'}}>
          { typeDangChon==="Water"
            ? <Icon name='check' />
            : null
          }
          Water
        </Button>
        <Button onClick={() => this.gioiThieuType('Grass')} style={{backgroundColor:'#78c850', color:'white'}}>
          { typeDangChon==="Grass"
            ? <Icon name='check' />
            : null
          }
          Grass
        </Button>
        <Button onClick={() => this.gioiThieuType('Electric')} style={{backgroundColor:'#f8d030', color:'white'}}>
          { typeDangChon==="Electric"
            ? <Icon name='check' />
            : null
          }
          Electric
        </Button>
        <Button onClick={() => this.gioiThieuType('Ice')} style={{backgroundColor:'#98d8d8', color:'white'}}>
          { typeDangChon==="Ice"
            ? <Icon name='check' />
            : null
          }
          Ice
        </Button>
        <Button onClick={() => this.gioiThieuType('Ground')} style={{backgroundColor:'#e0c068', color:'white'}}>
          { typeDangChon==="Ground"
            ? <Icon name='check' />
            : null
          }
          Ground
        </Button>
        <Button onClick={() => this.gioiThieuType('Flying')} style={{backgroundColor:'#a890f0', color:'white'}}>
          { typeDangChon==="Flying"
            ? <Icon name='check' />
            : null
          }
          Flying
        </Button>
        <Button onClick={() => this.gioiThieuType('Poison')} style={{backgroundColor:'#a040a0', color:'white'}}>
          { typeDangChon==="Poison"
            ? <Icon name='check' />
            : null
          }
          Poison
        </Button>
        <Button onClick={() => this.gioiThieuType('Fighting')} style={{backgroundColor:'#c03028', color:'white'}}>
          { typeDangChon==="Fighting"
            ? <Icon name='check' />
            : null
          }
          Fighting
        </Button>
        <Button onClick={() => this.gioiThieuType('Psychic')} style={{backgroundColor:'#f85888', color:'white'}}>
          { typeDangChon==="Psychic"
            ? <Icon name='check' />
            : null
          }
          Psychic
        </Button>
        <Button onClick={() => this.gioiThieuType('Dark')} style={{backgroundColor:'#705848', color:'white'}}>
          { typeDangChon==="Dark"
            ? <Icon name='check' />
            : null
          }
          Dark
        </Button>
        <Button onClick={() => this.gioiThieuType('Rock')} style={{backgroundColor:'#b8a038', color:'white'}}>
          { typeDangChon==="Rock"
            ? <Icon name='check' />
            : null
          }
          Rock
        </Button>
        <Button onClick={() => this.gioiThieuType('Bug')} style={{backgroundColor:'#a8b820', color:'white'}}>
          { typeDangChon==="Bug"
            ? <Icon name='check' />
            : null
          }
          Bug
        </Button>
        <Button onClick={() => this.gioiThieuType('Ghost')} style={{backgroundColor:'#705898', color:'white'}}>
          { typeDangChon==="Ghost"
            ? <Icon name='check' />
            : null
          }
          Ghost
        </Button>
        <Button onClick={() => this.gioiThieuType('Steel')} style={{backgroundColor:'#b8b8d0', color:'white'}}>
          { typeDangChon==="Steel"
            ? <Icon name='check' />
            : null
          }
          Steel
        </Button>
        <Button onClick={() => this.gioiThieuType('Dragon')} style={{backgroundColor:'#7038f8', color:'white'}}>
          { typeDangChon==="Dragon"
            ? <Icon name='check' />
            : null
          }
          Dragon
        </Button>
        <Button onClick={() => this.gioiThieuType('Fairy')} style={{backgroundColor:'#ffaec9', color:'white'}}>
          { typeDangChon==="Fairy"
            ? <Icon name='check' />
            : null
          }
          Fairy
        </Button>

      </div>






    )
  }
}
export default Type;