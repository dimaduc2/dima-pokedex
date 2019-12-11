//Phần 1: các Import
import React, { Component } from 'react'
import { Button, Icon, Image, Grid } from 'semantic-ui-react'
import './PokeBall.css';
import Beast_Ball from './PokeBall/Beast Ball.jpg';
import Cherish_Ball from './PokeBall/Cherish Ball.jpg';
import Crystal_Ball from './PokeBall/Crystal Ball.jpg';
import Dark_Ball from './PokeBall/Dark Ball.jpg';
import Dive_Ball from './PokeBall/Dive Ball.jpg';
import Dream_Ball from './PokeBall/Dream Ball.png';
import Dusk_Ball from './PokeBall/Dusk Ball.jpg';
import Fast_Ball from './PokeBall/Fast Ball.jpg';
import Friend_Ball from './PokeBall/Friend Ball.jpg';
import Great_Ball from './PokeBall/Great Ball.jpg';
import GS_Ball from './PokeBall/GS Ball.jpg';
import Heal_Ball from './PokeBall/Heal Ball.jpg';
import Heavy_Ball from './PokeBall/Heavy Ball.jpg';
import Level_Ball from './PokeBall/Level Ball.jpg';
import Love_Ball from './PokeBall/Love Ball.jpg';
import Lure_Ball_blue from './PokeBall/Lure Ball blue.png';
import Lure_Ball_green from './PokeBall/Lure Ball green.png';
import Luxury_Ball from './PokeBall/Luxury Ball.jpg';
import Master_Ball from './PokeBall/Master Ball.jpg';
import Mewtwo_Ball from './PokeBall/Mewtwo Ball.png';
import Moon_Ball from './PokeBall/Moon Ball.jpg';
import Nest_Ball from './PokeBall/Nest Ball.jpg';
import Net_Ball from './PokeBall/Net Ball.jpg';
import Park_Ball from './PokeBall/Park Ball.png';
import Poké_Ball from './PokeBall/Poké Ball.jpg';
import Premier_Ball from './PokeBall/Premier Ball.jpg';
import Quick_Ball from './PokeBall/Quick Ball.png';
import Repeat_Ball from './PokeBall/Repeat Ball.png';
import Safari_Ball from './PokeBall/Safari Ball.png';
import Sport_Ball from './PokeBall/Sport Ball.jpg';
import Timer_Ball from './PokeBall/Timer Ball.png';
import Ultra_Ball from './PokeBall/Ultra Ball.jpg';


//import './Pokeball.css';
const pokeballs = {
  '' : {picture: null},
  'Beast Ball' : {picture : Beast_Ball},
  'Cherish Ball' : {picture : Cherish_Ball},
  'Crystal Ball' : {picture : Crystal_Ball},
  'Dark Ball' : {picture : Dark_Ball},
  'Dive Ball' : {picture : Dive_Ball},
  'Dream Ball' : {picture : Dream_Ball},
  'Dusk Ball' : {picture : Dusk_Ball},
  'Fast Ball' : {picture : Fast_Ball},
  'Friend Ball' : {picture : Friend_Ball},
  'Great Ball' : {picture : Great_Ball},
  'GS Ball' : {picture : GS_Ball},
  'Heal Ball' : {picture : Heal_Ball},
  'Heavy Ball' : {picture : Heavy_Ball},
  'Level Ball' : {picture : Level_Ball},
  'Love Ball' : {picture : Love_Ball},
  'Lure Ball blue' : {picture : Lure_Ball_blue},
  'Lure Ball green' : {picture : Lure_Ball_green},
  'Luxury Ball' : {picture : Luxury_Ball},
  'Master Ball' : {picture : Master_Ball},
  'Mewtwo Ball' : {picture : Mewtwo_Ball},
  'Moon Ball' : {picture : Moon_Ball},
  'Nest Ball' : {picture : Nest_Ball},
  'Net Ball' : {picture : Net_Ball},
  'Park Ball' : {picture : Park_Ball},
  'Poké Ball' : {picture : Poké_Ball},
  'Premier Ball' : {picture : Premier_Ball},
  'Quick Ball' : {picture : Quick_Ball},
  'Repeat Ball' : {picture : Repeat_Ball},
  'Safari Ball' : {picture : Safari_Ball},
  'Sport Ball' : {picture : Sport_Ball},
  'Timer Ball' : {picture : Timer_Ball},
  'Ultra Ball' : {picture : Ultra_Ball}
}

const tenPokeballs = Object.keys(pokeballs).slice(1, 33);
class PokeBall extends Component {
//Phần 2: các State
  state = {
    pokeballDangChon: "",
    tenQuaBong: 'qua-bong'
  }
  //Phần 3: các Function
  gioiThieuPokeball = (pokeball) => {
    // alert("This is Pokemon " + pokeball);
    if(this.state.pokeballDangChon === pokeball)  {
      //nếu  bóng cũ  giống  bóng mới , nghĩa là bấm lại cùng 1 nút bấm
      this.setState({ pokeballDangChon: "" });
      // setState là thay đổi state pokeballDangChon thay chống rỗng
    }
    else { // nếu bóng cũ khác bóng mới , nghĩa là bấm 1 nút bấm khác
      this.setState({ pokeballDangChon: pokeball });
      // setState là thay đổi state pokeballDangChon có 
    }
  };

  bongNhay = () => {
    if(this.state.tenQuaBong === 'qua-bong-nhay'){
      this.setState({tenQuaBong: 'qua-bong'});
    }
    else {this.setState({tenQuaBong: 'qua-bong-nhay'});}
  }

  // bongNhay = () => {
  //   this.setState({tenQuaBong: 'qua-bong-nhay'});
  // }
  // bongDung = () => {
  //   this.setState({tenQuaBong: 'qua-bong'});
  // }
  
  render() {
    var {pokeballDangChon, tenQuaBong} = this.state;
    //const {  } = this.props
    return (
      <div className="PokeBall" align='center'>
        <h1>All PokeBalls of Pokemon {pokeballDangChon}</h1>
        <Grid columns={8} doubling >
          { tenPokeballs.map(
              (moiPokeball) => 
              <Grid.Column>
                <Button onClick={() => this.gioiThieuPokeball(moiPokeball)}  basic={pokeballDangChon !== moiPokeball}
                  color={pokeballDangChon === moiPokeball ? "red" : "blue"}>
                  { pokeballDangChon === moiPokeball
                    ? <Icon name='circle'  />
                    : null
                  }
                  {moiPokeball}
                </Button>
              </Grid.Column>
            )
          }
        </Grid>
        <br/>
        <Image className={tenQuaBong} src={pokeballs[pokeballDangChon].picture} size='small' onClick={this.bongNhay}
        // onMouseEnter={this.bongNhay} 
        // onMouseLeave={this.bongDung}
         />
        <br/><br/><br/><br/><br/></div>
      
    )
  }
}
export default PokeBall;