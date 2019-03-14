import React, { Component } from 'react';


class ClassComp extends Component {
  render() {
    return (
      <div  className="classcomp">
        <img src={this.props.imgUrl} alt="qw" width="100px"/>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default ClassComp;
