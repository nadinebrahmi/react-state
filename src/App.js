import React from 'react';
import './App.css';
import Fullname from "./Fullname";
import Bio from './bio.js';
import Profession from './Profession';
import "bootstrap/dist/css/bootstrap.min.css";
import Img from './Image';


class App extends React.Component{
constructor(){
  super()
    this.state={
    pro:"develepor",
    bio:"react",
    counterApp:0,
    show:false,
    }}
   componentDidMount(){
setInterval(() => this.setState(
{ counterApp:this.state.counterApp+1}
),  1000 )};
  render(){
    return (
   <div> 
    {this.state.countrApp}
  <div className="card" style={{width: '18rem'}}>
   
    <div className="card-body">
      <h5 className="card-title">{this.state.show?<Fullname/>:null} </h5>
      <Img/>
      <p className="card-text"> {this.state.counterApp} <Profession pro={this.state.pro}/> <Bio bio={this.state.bio}/></p>
      <button  onClick={()=>this.setState({show:!this.state.show})}  className="btn btn-primary">clickme</button>
   
   
    </div>
  </div>
</div>

  );
}}

export default App;