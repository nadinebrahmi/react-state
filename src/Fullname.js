import React from "react";
import Img from "./image.jpg";
class Fullname extends React.Component{
  constructor(){
    super()
      this.state={
        counterfullname:0,
      }
    }
    componentDidMount(){
      setInterval(() => this.setState(
      { counterfullname:this.state.counterfullname+1}
      ),  1000 )};
      render(){
        return (
        < >
        <img src={Img} className="card-img-top" alt="" />
          <span style={{color:"red",fontSize:"30px"}}>nadinebrahmi {this.state.counterfullname}</span>
        </>
      );
    }
    }
    export default Fullname;