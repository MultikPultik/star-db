import React, { Component } from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PagePeople from "../page-people/page-people";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-services";
import ItemDetails from "../item-details/item-details";

import "./app.css";
import Row from "../row/row";

export default class App extends Component {
  swapiservices = new SwapiService();

  state = {
    personIdSelected: null,
    hasError: false,
  };

  onItemListSelected = (id) => {
    this.setState({ personIdSelected: id });
  };

  render() {
    const itemList = (
      <ItemList
        onSelectedItem={this.onItemListSelected}
        getData={this.swapiservices.getAllPeople}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const personDetails = (
      <ItemDetails
        itemId={8}
        getData={this.swapiservices.getPerson}
        getImageUrl={this.swapiservices.getPersonImageUrl}
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiservices.getStarship}
        getImageUrl={this.swapiservices.getStarShipImageUrl}
      />
    );

    return (
      <div className="container-sm app-star-db">
        <Row left={personDetails} right={starshipDetails} />

        {/* <Header /> */}
        {/* <RandomPlanet /> */}
        {/* <PagePeople /> */}
        {/* <PagePlanets/> */}
        {/* <PageStarships/> */}
      </div>
    );
  }
}
