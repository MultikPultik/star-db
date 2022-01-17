import react, { Component } from "react";
import SwapiService from "../../services/swapi-services";

import "./item-list.css";

export default class ItemList extends Component {
  swapiservices = new SwapiService();

  constructor() {
    super();
    this.updatePeople();
  }

  state = {
    peopleList: [],
    loading: true,
  };

  updatePeople() {
    this.swapiservices.getAllPeople().then((el) => {
      this.setState({ peopleList: el, loading: false });
    });
  }

  renderItem(arr) {
    return arr.map((el) => {
      return (
        <li
          key={el.name}
          className="list-group-item"
          onClick={(e) => console.log(e.target)}
        >
          {el.name}
        </li>
      );
    });
  }

  render() {
    const {peopleList} = this.state;

    const list = this.renderItem(peopleList);

    return (
      <div className="card item-list">
        <div className="row">
          <div className="col-12">
            <ul className="item-list list-group">{list}</ul>
          </div>
        </div>
      </div>
    );
  }
}
