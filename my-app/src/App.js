import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User.jsx'
import UserService from './services/MockUserService';

const userService = new UserService('http://notimportantyet.com')

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User name={userService.getById(1).name} avatarUrl={userService.getById(1).avatarUrl}></User>
      </div>
    );
  }
}

export default App;
