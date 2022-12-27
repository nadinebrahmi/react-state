import React from "react";
class Bio extends React.Component{
  constructor(){
    super()
      this.state={}
    }
      render(){
        return (
        < >
          <span>{this.props.bio}</span>
        </>
      );
    }
    }
    export default Bio;