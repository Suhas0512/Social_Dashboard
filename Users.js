import React from 'react'
import Axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class Users extends React.Component{
  constructor(){
    super()
    this.state={
      users:'',posts:''
    }
  }
  componentDidMount(){
    const id =this.props.match.params.id
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>{
      this.setState({users:response.data})
    })
    Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response=>{
      this.setState({posts:response.data})
    })
  }
  handleButton(){
    localStorage.setItem('loggedIn',false)
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <Link to="/"><button onClick={this.handleButton}>LogOut</button></Link>
        
        <h3>User Posts</h3>
        <p>
          Name:{this.state.users.name},<br/>
          Email:{this.state.users.email},<br/>
          Phone:{this.state.users.phone},<br/>
        </p>
        {this.state.users&&<div><p>Company name:{this.state.users.company.name},<br></br>
        Company catchphrase:{this.state.users.company.catchPhrase}<br></br>
        Company bs:{this.state.users.company.bs}</p><br/></div>}

        {this.state.posts && <div><p>Post Title and body is as follows{this.state.posts.map(ele=>{
          return <li key={ele.id}>{ele.title}<br/>{ele.body}</li>
        })}</p></div>}
        
      </div>
    )
  }
}
export default Users