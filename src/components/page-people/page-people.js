import React, { Component } from "react";
import ErrorContent from "../error-content/error-content";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-services";

export default class PagePeople extends Component {
  swapiservices = new SwapiService();
  state = {
    personIdSelected: null,
    hasError: false
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

    const itemList = (<ItemList
      onSelectedItem={this.onItemListSelected}
      getData={this.swapiservices.getAllPeople}
      renderItem={({ name, gender }) => `${name} (${gender})`}/>);
    
    const personDetails = (<PersonDetails personIdSelected={this.state.personIdSelected} />);
    
    return (
      <Row left = {itemList}  right={personDetails}/>
    );
  }
}

const Row = ({left, right}) =>{
  return(
    <div className="row align-items-start">
        <div className="col-6">
        {left}
        </div>
        <div className="col-6">
          {right}
        </div>
      </div>
  )
}
