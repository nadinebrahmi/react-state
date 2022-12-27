import Image from "./image.jpg"
import React from "react";

class Img extends React.Component{
   
      render(){
        return (
        < >
         <img src={Image} alt=""  style={{Width:"100px",height:"200px"}}/>
        </>
      );
    }
    }
    export default Img;