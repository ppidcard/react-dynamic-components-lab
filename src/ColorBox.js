import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const value = this.props.opacity - .1;
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
      {this.props.opacity<0.2?null:(<ColorBox opacity={value} />)}
    </div>
    )
  }

}

