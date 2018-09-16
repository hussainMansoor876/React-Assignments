import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert'
import Header from './container/Header/Header';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Sign';
import Quiz from './screens/Quiz/Quiz';

class App extends Component {
  constructor(){
    super();
    this.state = {
      main : false,
      newUser : false
    }
    this.buttons = this.buttons.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  buttons(){
    return <div>
    <button className='button1' onClick={this.login}>Login</button>
    <button className='button1' onClick={this.signup}>SignUp</button>
    </div>
  }
  login(){
    this.setState({
      main : true,
      newUser : false
    })
  }
  signup(){
    this.setState({
      newUser : true
    })
  }

  
  render() {
    const {main,newUser} = this.state;
    return (
      <div className="App">
      <Header />
      <Quiz />
      {!main && !newUser && this.buttons()}
      {main && !newUser && <Login signup = {this.signup} />}
      {newUser && <Signup log = {this.login} />}
    </div>

    );
  }
}

export default App;
