import React, { Component } from "react";
import ErrorContent from "../error-content/error-content";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

export default class PagePeople extends Component {
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
    return (
      <div className="row align-items-start">
        <div className="col-6">
          <ItemList onPeopleId={this.onItemListSelected} />
        </div>
        <div className="col-6">
          <PersonDetails personIdSelected={this.state.personIdSelected} />
        </div>
      </div>
    );
  }
}
