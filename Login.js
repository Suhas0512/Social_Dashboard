import React from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

class Login extends React.Component{
  constructor(){
    super()
    this.state={
      users:'',
      myEmail:'',
      id:'',
      loggedIn:false
    }
  }
  componentDidMount(){
    localStorage.setItem('loggedIn',this.state.loggedIn)
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      const users=response.data
      this.setState({users})
    })
  }
  handleChange=(e)=>{
    this.setState({myEmail:e.target.value})
  }
  handleButton=()=>{
    const value=this.state.users.find(ele=>{
      if(ele.email==this.state.myEmail){
        return ele
      }
    })
    if(value){
      this.setState({id:value.id,loggedIn:true,value})
      localStorage.setItem('loggedIn',true)
    }
  }
  render(){
    console.log(this.state)
    return(
      <div align="center">
        <h3>Login Page</h3>
        <p>Enter the email below</p>
        <input id="myEmail" name="myEmail" value={this.state.myEmail} onChange={this.handleChange}></input>
        <button onClick={this.handleButton}>Submit</button>
        {localStorage.getItem('loggedIn')=='true'&& <Redirect to={`/users/${this.state.id}`}></Redirect>}
      </div>
    )
  }
}

export default Login