import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import ButtonFault from "../button-fault/button-fault";

import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: {item[field]}
    </li>
  );
};

export { Record };
export default class ItemDetails extends Component {
  swapiservices = new SwapiService();

  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.itemUpdate();
  }

  componentDidUpdate(prevProps) {
    // Популярный пример (не забудьте сравнить пропсы):
    if (this.props.itemId !== prevProps.itemId) {
      this.itemUpdate();
    }
  }

  itemUpdate(id) {
    const { itemId, getData, getImageUrl } = this.props;

    getData(itemId).then((item) => {
      this.setState({
        item,
        image: getImageUrl(itemId),
      });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return null;
    }

    const { name, birthYear, mass, gender } = item;

    return (
      <div className="card border-secondary card-person-details">
        <div className="row row-cols-auto">
          <div className="col">
            <img src={image} />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <ul className="person-details list-group-flush">
                {React.Children.map(this.props.children, (child) => {
                  return (React.cloneElement(child,{item}));
                })}
                {/* <li className="list-group-item">Birth Year: {birthYear}</li>
                <li className="list-group-item">Mass: {mass}</li>
                <li className="list-group-item">Gender: {gender}</li> */}
              </ul>
              <ButtonFault label="Create Error" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
