//Phần 1: các Import
import React, { Component } from 'react'
import { Grid, Image, Popup, Button } from 'semantic-ui-react'

import Profile from './Profile'

//import './Types Z.css';
class Types_Z extends Component {

//Phần 2: tạo các State
  state = {
    pictureSize: 'mini',
    soCot: 5
  }

//Phần 3: các Function
  
  //gọi function này thì sẽ to lên
  bigPicture = () => {
    // nếu ảnh đang bé nhất
    if(this.state.pictureSize === 'mini') {
      // thì thay đổi to lên tiny
      this.setState({pictureSize: 'tiny'});
      // và thay đổi số cột ít đi
      this.setState({soCot: 4});
    }
    // còn nếu ảnh đang tiny
    else if(this.state.pictureSize === 'tiny') {
      // thì thay đổi to nhất
      this.setState({pictureSize: 'small'});
      this.setState({soCot: 3});
    }
  }

  //gọi function này thì sẽ nhỏ đi
  smallPicture = () => {
    if(this.state.pictureSize === 'small') {
      // thì thay đổi nhỏ đi tiny
      this.setState({pictureSize: 'tiny'});
      // và thay đổi số cột nhiều lên
      this.setState({soCot: 4});
    }
    // còn nếu ảnh đang tiny
    else if(this.state.pictureSize === 'tiny') {
      // thì thay đổi nhỏ nhất
      this.setState({pictureSize: 'mini'});
      this.setState({soCot: 5});
    }
  }
  
  render() {
    const { pictureSize, soCot } = this.state
    const { typesZ } = this.props;
    return (
      <div className="Types Z" align="center">
        <Button circular icon='search plus' onClick={this.bigPicture}></Button>
        <Button circular icon='search minus' onClick={this.smallPicture}></Button>
        <br/><br/>
        <Grid columns={soCot} doubling >
        {
          Object.keys(typesZ).map (
            (moiTypeZ)=> 
            <div>
              <Image src = {typesZ[moiTypeZ].picture} size={pictureSize}/>
              <p>{typesZ[moiTypeZ].name}</p>
            </div>
          )
        
        }
        </Grid>
        
      </div>
    )
  }
}
export default Types_Z;