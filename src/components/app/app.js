import React, { Component } from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ButtonFault from "../button-fault/button-fault";
import ErrorContent from "../error-content/error-content";
import PagePeople from "../page-people/page-people";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

import "./app.css";
import SwapiService from "../../services/swapi-services";

export default class App extends Component {
  swapiservices = new SwapiService();
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
        <ButtonFault label="Create Error" />
        {/* <PagePeople /> */}

        <div className="row align-items-start">
          <div className="col-6">
            <ItemList
              onSelectedItem={this.onItemListSelected}
              getData={this.swapiservices.getAllPeople}
              renderItem={({ name, gender }) => `${name} (${gender})`}/>
          </div>
          <div className="col-6">
            <PersonDetails personIdSelected={this.state.personIdSelected} />
          </div>
        </div>
      </div>
    );
  }
}
