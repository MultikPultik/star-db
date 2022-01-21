import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import Loader from "../loader/loader";

import "./item-list.css";

export default class ItemList extends Component {
  swapiservices = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
  };

  componentDidMount() {
    this.swapiservices.getAllPeople().then((el) => {
      this.setState({ peopleList: el, loading: false });
    });
  }

  renderItem(arr) {
    return arr.map(({ name, id }) => {
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onPeopleId(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Loader />;
    }

    const list = this.renderItem(peopleList);

    return (
        <div className="item-list">
            <ul className=" list-group">{list}</ul>
        </div>
    );
  }
}
