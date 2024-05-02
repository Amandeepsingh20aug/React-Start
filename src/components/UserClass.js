import React from "react"
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    //State variable
    this.state ={
      userInfo : {
        name:"Dummy",
        location : "Dummy",
        avatar_url :"Dummy Url"
      }
    }
  }

  async componentDidMount(){

    const data = await fetch("https://api.github.com/users/Amandeepsingh20aug");

    const json = await data.json();

    this.setState({
      userInfo: json
    })
  }

  render() {
    const {name,location,avatar_url
    } = this.state.userInfo
    return (
      <div className='user-card'>
      <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact :@Amandeep20aug</h4>
      </div>
    )
  }

}

export default UserClass