import React, {Component} from "react";
import SwapiService from "../../services/swapi-services";
import Loader from "../loader/loader";
import ErrorContent from "../error-content/error-content";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  constructor() {
    super();
    this.updatePlanet();
  }

  swapiservices = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updatePlanet();
    }, 5000);
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiservices
      .getPlanet(id)
      .then((planet) => {
        this.setState({ planet, loading: false });
      })
      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    const { planet, loading, error } = this.state;
    const loader = loading ? <Loader /> : null;
    const err = error ? <ErrorContent /> : null;
    const content = !loading && !error ? <PlanetView planet={planet} /> : null;

    return (
      <div className="card border-secondary card-planet">
        {err}
        {loader}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { name, rotationPeriod, diameter, population, id } = planet;
  return (
    <>
      <div className="row row-cols-auto">
        <div className="col">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            className="planet-img"
            alt="img-planet"
          ></img>
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="title">Planet {name}</h5>
            <ul className="planet-descr-list list-group-flush">
              <li className="list-group-item">Population {population} </li>
              <li className="list-group-item">
                Rotation Period {rotationPeriod}
              </li>
              <li className="list-group-item">Diameter {diameter}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
