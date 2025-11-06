import React from "react";
import HomePage from "../pages/HomePage/HomePage";
export default class Header extends React.Component{
  constructor(props: {}){
    super(props)
    this.state = {
      headervalue: "Teks di dalam Header",
    }
  }
  render(){

    return(
      <HomePage data={this.state.headervalue}/>
    );
  }
}