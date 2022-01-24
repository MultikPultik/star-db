import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import ErrorContent from "../error-content/error-content";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list/item-list";

export default class PagePlanets extends Component {
  swapiservices = new SwapiService();

  state = {
    personIdSelected: null,
    hasError: false
  };

  componentDidCatch(){
    this.setState({hasError: true})
  }
  
  render() {
    if (this.state.hasError){
      return <ErrorContent/>
    }

    return (
      <div className="row align-items-start">
        <div className="col-6">
        <ItemList
              onSelectedItem={this.onItemListSelected}
              getData={this.swapiservices.getAllPlanets}
              renderItem={({ name, population }) => `${name} (${population})`}/>
        </div>
        <div className="col-6">
          <PersonDetails personIdSelected={this.state.personIdSelected} />
        </div>
      </div>
    );

  }
}
