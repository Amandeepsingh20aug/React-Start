import React from "react"
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    
  }
  render(){
    return(
    <div>
    <h1>About Class</h1>
    <h2>Food App</h2>
    <UserClass name={"User1"}/>
  </div>
    )
  }
}

export default About;