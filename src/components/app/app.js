import React, { Component } from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ButtonFault from "../button-fault/button-fault";
import ErrorContent from "../error-content/error-content";
import PagePeople from "../page-people/page-people";

import "./app.css";


export default class App extends Component {
  
  state = {
    hasError: false,
  };

  onItemListSelected = (id) => {
    this.setState({ personIdSelected: id });
  };
  
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorContent />;
    }

    return (
      <div className="container-sm app-star-db">
        <Header />
        <RandomPlanet />
        <PagePeople />
        {/* <PagePlanets/> */}
        {/* <PageStarships/> */}

      </div>
    );
  }
}
