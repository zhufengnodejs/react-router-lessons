import React from 'react';
import './Skin.css'
let images = [
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg'),
  require('./images/4.jpg'),
  require('./images/5.jpg'),
  require('./images/6.jpg'),
  require('./images/7.jpg'),
  require('./images/8.jpg'),
  require('./images/9.jpg'),
  require('./images/10.jpg'),
  require('./images/11.jpg'),
  require('./images/12.jpg'),
]

export default class Skin extends React.Component {
  constructor(){
    super();
    this.state = {bgUrl:`url(${images[0]})`};
  }
  handleChange = (i)=>{
    this.setState({bgUrl:`url(${images[i]})`});
  }
  createImage = ()=>{
     var result = [];
     for(let i=0;i<12;i++){
       result.push(<li key={i}><img
         onClick={()=>this.handleChange(i)}
         src={images[i]}/></li>);
     }
    return result;
  }
  render(){
    console.log(this.state.bgUrl);
    return (
      <div>
        <div className="bg" style={{backgroundImage:this.state.bgUrl}}></div>
        <div className="img-container">
          <ul>
            {
              this.createImage()
            }
          </ul>
        </div>
      </div>
    )
  }
}