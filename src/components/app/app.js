import React, { Component } from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorContent from "../error-content/error-content";

import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet/>
        <ItemList />
        <PersonDetails />
      </div>
    );
  }
}
