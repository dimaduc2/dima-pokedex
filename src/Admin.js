//Phần 1: các Import
import React, { Component } from 'react'
import { Form, Dropdown, Button, Image, Table} from 'semantic-ui-react'

// import './Compare.css';

const Type = [
  { key: 'Normal', value: 'Normal', text: 'Normal' },
  { key: 'Fire', value: 'Fire', text: 'Fire' },
  { key: 'Water', value: 'Water', text: 'Water' },
  { key: 'Grass', value: 'Grass', text: 'Grass' },
  { key: 'Electric', value: 'Electric', text: 'Electric' },
  { key: 'Ice', value: 'Ice', text: 'Ice' },
  { key: 'Ground', value: 'Ground', text: 'Ground' },
  { key: 'Flying', value: 'Flying', text: 'Flying' },
  { key: 'Poison', value: 'Poison', text: 'Poison' },
  { key: 'Fighting', value: 'Fighting', text: 'Fighting' },
  { key: 'Psychic', value: 'Psychic', text: 'Psychic' },
  { key: 'Dark', value: 'Dark', text: 'Dark' },
  { key: 'Rock', value: 'Rock', text: 'Rock' },
  { key: 'Bug', value: 'Bug', text: 'Bug' },
  { key: 'Ghost', value: 'Ghost', text: 'Ghost' },
  { key: 'Steel', value: 'Steel', text: 'Steel' },
  { key: 'Dragon', value: 'Dragon', text: 'Dragon' },
  { key: 'Fairy', value: 'Fairy', text: 'Fairy' },
]
class Admin extends Component {

  //Phần 2: các State
    state = {
      info: '',
      result: false,
      fullname: '', 
      nickname: '', 
      image: '', 
      type: [], 
      hp: 0, 
      attack: 0, 
      defense: 0, 
      spAtk: 0, 
      spDef: 0, 
      speed: 0, 
      tenEvolves_into: [], 
      tenEvolves_from: '', 
      dangSuaPokeCu: true, 
      NewPoke: '', 
      EditPoke: '', 
      NewEdit: 'Edit Pokemon',
      NewEditSubmit:'Edit'
    }

  //Phần 3: các Function

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  alertTotal1 = () => {
    const {fullname, nickname, hp, attack, defense, spAtk, spDef, speed, image} = this.state
    alert(
      'Pokemon Name: '+fullname+"\n"+
      'Pokemon Nickname: '+nickname+"\n"+
      'HP: '+hp+"\n"+
      'Attack: '+attack+"\n"+
      'Defense: '+defense+"\n"+
      'Sp. Atk: '+spAtk+"\n"+
      'Sp. Def: '+spDef+"\n"+
      'Speed: '+speed+"\n"+
      'Total '+(Number(hp) + Number(attack) + Number(defense) + Number(spAtk) + Number(spDef) + Number(speed))

    )
  }

  alertTotal2 = () => {
    const {fullname, nickname, hp, attack, defense, spAtk, spDef, speed, image, type, tenEvolves_into, tenEvolves_from} = this.state
    // this.props.themTenPokemonMoi(fullname)
    // this.props.themAnhPokemonMoi(image)
    // this.props.themTenDem(nickname)
    this.props.themTenPoke(fullname, nickname, hp, attack, defense, spAtk, spDef, speed, image, type, tenEvolves_into, tenEvolves_from)
    if (fullname.trim() === '') {
      alert('phải đặt tên trong Pokemon Name')
    }
    else if (nickname.trim() === '') {
      alert('phải đặt tên trong Pokemon Nickname')
    }
    else if (type.length === 0) {
      alert('phải đặt tên Type trong Pokemon Type')
    }
    // else if (!Number.isInteger(Number(hp)) || hp === "" || hp <= 0) {
    //   alert('phải đặt số trong Hp > 0')
    // }
    // else if (!Number.isInteger(Number(attack)) || attack === "" || attack <= 0) {
    //   alert('phải đặt số trong Attack')
    // }
    // else if (!Number.isInteger(Number(defense)) || defense === "" || defense <= 0) {
    //   alert('phải đặt số trong Defense')
    // }
    // else if (!Number.isInteger(Number(spAtk)) || spAtk === "" || spAtk <= 0) {
    //   alert('phải đặt số trong Sp. Atk')
    // }
    // else if (!Number.isInteger(Number(spDef)) || spDef === "" || spDef <= 0) {
    //   alert('phải đặt số trong Sp. Def')
    // }
    // else if (!Number.isInteger(Number(speed)) || speed === "" || speed <= 0) {
    //   alert('phải đặt số trong Speed')
    // }
    else{
      this.setState({info:
        <div>
          Pokemon Name: {fullname} <br/>
          Pokemon Nickname: {nickname} <br/>
          HP: {hp} <br/>
          Attack: {attack} <br/>
          Defense: {defense} <br/>
          Sp. Atk: {spAtk} <br/>
          Sp. Def: {spDef} <br/>
          Speed: {speed} <br/>
          Total: {Number(hp) + Number(attack) + Number(defense) + Number(spAtk) + Number(spDef) + Number(speed)} <br/>
          Type: {type} <br/>
          tenEvolves into: {tenEvolves_into + ' '} <br/>
          tenEvolves from: {tenEvolves_from} <br/>
        </div>
      })
    }
  }

  alertTotal3 = () => {
    if(this.state.result === true){
      this.setState({result: false})
    }
    else{
      this.setState({result: true})
    }
  }

  showPokemon  = (e, {value}) => {
    const {Pokedex} = this.props
    // alert(Pokedex[value].name)
    this.setState({fullname: Pokedex[value].name})
    this.setState({nickname: value})
    this.setState({hp: Pokedex[value].hp})
    this.setState({attack: Pokedex[value].attack})
    this.setState({defense: Pokedex[value].defense})
    this.setState({spAtk: Pokedex[value].sp_atk})
    this.setState({spDef: Pokedex[value].sp_def})
    this.setState({speed: Pokedex[value].speed})
    this.setState({image: Pokedex[value].picture})
    this.setState({type: Pokedex[value].types})
    this.setState({tenEvolves_into: Pokedex[value].evolves_into})
    this.setState({tenEvolves_from: Pokedex[value].evolves_from})
  }

  taoPokeMoi = () => {
    this.setState({dangSuaPokeCu: false})

    this.setState({fullname: ''})
    this.setState({nickname: ''})
    this.setState({image: ''})
    this.setState({type: ''})
    this.setState({hp: 0})
    this.setState({attack: 0})
    this.setState({defense: 0})
    this.setState({spAtk: 0})
    this.setState({spDef: 0})
    this.setState({speed: 0})
    this.setState({tenEvolves_into: ''})
    this.setState({tenEvolves_from: ''})

    // this.setState({NewPoke: 'New Pokemon', EditPoke:''})
    this.setState({NewEdit: 'New Pokemon'})
    this.setState({NewEditSubmit: 'Add'})
  }
  
  suaPokeCu = () => {
    this.setState({dangSuaPokeCu: true})
    


    // this.setState({EditPoke: 'Edit Pokemon', NewPoke: ''})
    this.setState({NewEdit: 'Edit Pokemon'})
    this.setState({NewEditSubmit: 'Edit'})
  }
  
  // deletePokeAdmin = () => {
  //   const {Pokedex} = this.props
  //   var coXoaTatcaHayKhong  = window.confirm("có xóa tất cả thông tin của " +Pokedex+ " không?");
  //   if (coXoaTatcaHayKhong === true){
  //     this.setState({Pokedex: ''});
  //     this.setState({fullname: ''})
  //     this.setState({nickname: ''})
  //     this.setState({image: ''})
  //     this.setState({type: ''})
  //     this.setState({hp: 0})
  //     this.setState({attack: 0})
  //     this.setState({defense: 0})
  //     this.setState({spAtk: 0})
  //     this.setState({spDef: 0})
  //     this.setState({speed: 0})
  //     this.setState({tenEvolves_into: ''})
  //     this.setState({tenEvolves_from: ''})
  //   }
  //   else {
  //       alert("Không xóa tất cả ảnh.")
  //   }
  // }
  // xoaPokeCu = () => {
  //   this.props.deletePoke(this.state.nickname)
  //   this.deletePokeAdmin()
  // }


  deletePokeAdmin = () => {
    const {Pokedex} = this.props
    var coXoaTatcaHayKhong  = window.confirm("có xóa tất cả thông tin của " +this.state.fullname+ " không?");
    if (coXoaTatcaHayKhong === true){
      this.setState({Pokedex: ''});
      this.setState({fullname: ''})
      this.setState({nickname: ''})
      this.setState({image: ''})
      this.setState({type: ''})
      this.setState({hp: 0})
      this.setState({attack: 0})
      this.setState({defense: 0})
      this.setState({spAtk: 0})
      this.setState({spDef: 0})
      this.setState({speed: 0})
      this.setState({tenEvolves_into: ''})
      this.setState({tenEvolves_from: ''})
      
      this.props.deletePoke2(this.state.nickname)
    }
    else {
        alert("Không xóa tất cả ảnh.")
    }
  }
  
  render() {
    const { fullname, nickname, image, info, type, hp, attack, defense, spAtk, spDef, speed, result, NewEditSubmit,
            tenEvolves_into, tenEvolves_from, dangSuaPokeCu, NewPoke, EditPoke, NewEdit } = this.state
    const { themTenPokemonMoi, Pokedex, } = this.props;
    
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
      <div className="Admin" align='center'>
        <h1>
          {/* {NewPoke}
          {EditPoke} */}

          {NewEdit}

          {/* {NewOldTrueFalse === false 
            ? 'New Pokemon'
            : 'Edit Pokemon'
          } */}
        </h1>
        <Button primary={dangSuaPokeCu===false} onClick={this.taoPokeMoi}>tạo Pokemon mói</Button>
        <Button primary={dangSuaPokeCu===true} onClick={this.suaPokeCu}>sửa Pokemon cũ</Button>
        
        {dangSuaPokeCu === true
          ? <span>
            <Button style = {{backgroundColor:'#cc0000', color:'white'}} 
            disabled = {(nickname === "")} 
              onClick = {this.deletePokeAdmin}>Delete</Button>
            
              {/* <Button style={{backgroundColor:'#cc0000', color:'white'}} disabled={(nickname === "")} 
                      onClick={() => deletePoke(nickname)}>Delete</Button> */}
            </span>
          : null
        }
        

        <br/><br/>

        {dangSuaPokeCu === true
          ? <Dropdown 
              placeholder='Select Pokemon'
              search
              selection
              disabled = {!dangSuaPokeCu}
              options={pokemonOptions}
              onChange={this.showPokemon}
            />
          : null
        }


{/* {nickName === ""
  ? disabled = {true}
  : disabled = {true}
}

{nickName === ""
  ? disabled = {dangSuaPokeCu === true}
  : disabled = {dangSuaPokeCu = true}
} */}


        <br/><br/>
        <Image src= {image} size='small' />
        {info}
        {result
          ? <div>
              Pokemon Name: {fullname} <br/>
              Pokemon Nickname: {nickname} <br/>
              HP: {hp} <br/>
              Attack: {attack} <br/>
              Defense: {defense} <br/>
              Sp. Atk: {spAtk} <br/>
              Sp. Def: {spDef} <br/>
              Speed: {speed} <br/>
              Total: {Number(hp) + Number(attack) + Number(defense) + Number(spAtk) + Number(spDef) + Number(speed)}
              Type: {type}
            </div>
          : null
        }
        <Form>
          <Form.Input inline
            label='Pokemon Name'
            placeholder='Pokemon Name' name='fullname' value={fullname}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='Pokemon Nickname'
            disabled={(dangSuaPokeCu === true)}
            placeholder='Pokemon NnickName' name='nickname' value={nickname}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='Image'
            placeholder='Image' name='image' value={image}
            onChange={this.handleChange} />
          
          <Form.Dropdown inline
            label='Type'
            clearable
            multiple
            search
            selection
            options={Type}
            placeholder='Type' name='type'
            value={type}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='HP'
            placeholder='HP' name='hp' value={hp}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='Attack'
            placeholder='Attack' name='attack' value={attack}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='Defense'
            placeholder='Defense' name='defense' value={defense}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='Sp. Atk'
            placeholder='Sp. Atk' name='spAtk' value={spAtk}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='Sp. Def'
            placeholder='Sp. Def' name='spDef' value={spDef}
            onChange={this.handleChange} />
          
          <Form.Input inline
            label='Speed'
            placeholder='Speed' name='speed' value={speed}
            onChange={this.handleChange} />
          
          <Form.Field inline
            label={'Total: ' + (Number(hp) + Number(attack) + Number(defense) + Number(spAtk) + Number(spDef) + Number(speed))} />
          
          <Form.Dropdown inline
            label='Evolves Into'
            clearable
            multiple
            search
            selection
            options={pokemonOptions}
            placeholder='Evolves Into' name='tenEvolves_into' value={tenEvolves_into}
            onChange={this.handleChange} />
            
          <Form.Dropdown inline
            label='Evolves From'
            clearable
            search
            selection
            options={pokemonOptions}
            placeholder='Evolves From' name='tenEvolves_from' value={tenEvolves_from}
            onChange={this.handleChange} />
            
          <Button onClick={() => this.alertTotal1()}>Submit1</Button>
      <Button onClick={() => this.alertTotal2()} >{NewEditSubmit}</Button>
          <Button onClick={() => this.alertTotal3()}>Submit3</Button>
          <Button onClick={() => themTenPokemonMoi(fullname)}>Submit4</Button>
        </Form>
      </div>
    )
  }
}
export default Admin;