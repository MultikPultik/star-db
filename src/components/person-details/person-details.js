import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import ButtonFault from "../button-fault/button-fault";

import "./person-details.css";

export default class PersonDetails extends Component {
  swapiservices = new SwapiService();
  state = {
    personDetails: null,
  };

  componentDidMount() {
    this.personUpdate(1);
  }

  componentDidUpdate(prevProps) {
    // Популярный пример (не забудьте сравнить пропсы):
    if (this.props.personIdSelected !== prevProps.personIdSelected) {
      this.personUpdate(this.props.personIdSelected);
    }
  }

  personUpdate(id) {
    if (id) {
      this.swapiservices.getPerson(id).then((personDetails) => {
        this.setState({ personDetails });
      });
    }
  }

  render() {
    if (!this.state.personDetails) {
      return <span>Select a person from a list</span>;
    }

    const { id, name, birthYear, mass, gender } = this.state.personDetails;

    return (
      <div className="card border-secondary card-person-details">
        <div className="row row-cols-auto">
          <div className="col">
            <img
              src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}
            />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <ul className="person-details list-group-flush">
                <li className="list-group-item">Birth Year: {birthYear}</li>
                <li className="list-group-item">Mass: {mass}</li>
                <li className="list-group-item">Gender: {gender}</li>
              </ul>
              <ButtonFault label="Create Error" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
