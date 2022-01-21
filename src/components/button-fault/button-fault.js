import React, {Component} from "react";

import './button-fault.css'

export default class ButtonFault extends Component{
  state = {
    isError: false
  }

  render(){
    if (this.state.isError){
      this.foo.bar = 0;
    }
    
    return (
      <>
        <button 
          className="btn btn-danger btn-error btn-lg"
          onClick={() => this.setState({isError:true})}
        >{this.props.label}</button>
      </>
    );
  }
};

