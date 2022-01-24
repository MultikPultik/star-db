import React, { Component } from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-services";
import Row from "../row/row";
import ErrorBoundary from "../error-boundary/error-boundary"

export default class PagePeople extends Component {
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
      <PersonDetails personIdSelected={this.state.personIdSelected} />
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
