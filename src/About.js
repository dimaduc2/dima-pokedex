//Phần 1: các Import
import React, { Component } from 'react'
//import {  } from 'semantic-ui-react'

//import './Compare.css';

class About extends Component {

//Phần 2: các State
  state = {}

//Phần 3: các Function

  render() {
    //const {  } = this.state

    return (
      <div className="About">
        
        <p>
          All là gì?
          <br/>
          là giới triệu pokemon.
          <br/><br/>
          Type là gì?
          <br/>
          là sức mạnh của pokemon, mỗi con có 1 hoặc 2 sức mạnh.
          <br/><br/>
          Type Z là gì?
          <br/>
          là tiêu cuối cùng.
          <br/><br/>
          Compare là gì?
          <br/>
          là để so sánh sức mạnh 2 con pokemon.
          <br/><br/>
          Trainer là gì?
          <br/>
          là giới triệu người có pokemon.
          <br/><br/>
          Pokeball là gì?
          <br/>
          Là quả bóng bắt pokemon hoang để kết bạn hoặc bảo vệ hoặc vô hiệu hóa khi pokemon hoang phá hoại.
          <br/><br/>
          Evolution là gì?
          <br/>
          Là pokemon tiến hóa theo level tăng khi đấu đầu đối thủ và tập luyện hoặc dùng hòn đá có type.
          <br/><br/>
          Favourites là gì?
          <br/>
          Là danh sách ưa thích.
          <br/><br/>
          Admin là gì?
          <br/>
          Là quản lý thông tin.
          <br/>
        </p>
        
      </div>
    )
  }
}
export default About;