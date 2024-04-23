import React from "react"
class UserClass extends React.Component {

  constructor(props) {
    super(props);
    //State variable
    this.state ={
      count: 0,
    }
  }

  render() {
    return (
      <div className='user-card'>
      <h1>Count : {this.state.count}</h1>
      <button onClick={()=>{
        this.setState({
         count : this.state.count +1 ,
        })
      }}>Count Increase</button>
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Delhi</h3>
        <h4>Contact :@Amandeep20aug</h4>
      </div>
    )
  }

}

export default UserClass