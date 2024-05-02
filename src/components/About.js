import React from "react"
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"

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
    <div>
      LoggedIn User
      <UserContext.Consumer>
        {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
      </UserContext.Consumer>
    </div>
    <h2>Food App</h2>
    <UserClass name={"User1"}/>
  </div>
    )
  }
}

export default About;