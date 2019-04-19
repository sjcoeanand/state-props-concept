import React, { Component } from 'react';
import './App.css';
import ClassComp from './ClassComp';
import FunComp from './FunComp';
import Profile from './Profile';
import MyProfile from './MyProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassComp title="hello this is class component" imgUrl="../img/logo.svg" />
        <h3>this components are called using props</h3>
        <FunComp title="this is functional component" imgURL="../img/logo.svg" />
        <br />
        <div>state class components below</div>
        <Profile title="this is class component with state" img_url="../img/logo.svg"/>
        <br/>
        <div>practice state class components</div>
        <MyProfile profileImg="../img/profile.jpg" title="My Profile" myname="Shendage" desc="Front End Engineer"/>
      </div>
    );
  }
}

export default App;