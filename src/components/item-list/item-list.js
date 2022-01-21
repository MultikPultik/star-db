import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import Loader from "../loader/loader";

import "./item-list.css";

export default class ItemList extends Component {
  swapiservices = new SwapiService();

  state = {
    listItems: null,
    loading: true,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then((items) => {
      this.setState({
        listItems: items,
        loading: false,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const value = this.props.renderItem(item);
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onSelectedItem(id)}
        >
          {value}
        </li>
      );
    });
  }

  render() {
    const { listItems } = this.state;

    if (!listItems) {
      return <Loader />;
    }

    const list = this.renderItems(listItems);

    return (
      <div className="item-list">
        <ul className=" list-group">{list}</ul>
      </div>
    );
  }
}
