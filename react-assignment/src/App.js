import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // const name = "Hello World";
    // const obj = {name: "Hello World Object"}
    // const data = ['We', 'are', 'United'] //Show these in seperate tags
    // const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
    // const complex = [{company: 'XYZ', jobs: ['Javascript','React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        {/* {name} */}
        {/* {obj.name} */}
          {/* <ul>
            {data.map((v)=>{
              return <li>{v}</li>
            })}
          </ul> */}
          {/* <ul>
            {list.map((v)=>{
              return <li>{v.name}</li>
            })}
          </ul> */}
          {/* <ol>
            {complex.map((v)=>{
              return <li>
              {v.company}
              <ul>
                {v.jobs.map((arr)=>{
                  return <li>{arr}</li>
                })}
              </ul>
              </li>
            })}
          </ol> */}
        </p>
      </div>
    );
  }
}

export default App;
