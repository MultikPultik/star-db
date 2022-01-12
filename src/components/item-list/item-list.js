import react, {Component} from "react";
import SwapiService from '../../services/swapi-services';

import "./item-list.css";

export default class ItemList extends Component {
  swapiservices = new SwapiService;

  constructor(){
    super();
    this.updatePeople();
  }

  state={
    people: [],
    loading: true
  }

  updatePeople() {
    this.swapiservices.getAllPeople().then((el) => {
      this.setState({ people:el, loading: false });
    });
  } 

  render(){
    let list = this.state.people.map((el) => {
      return (<li key={el.name} className="list-group-item">{el.name}</li>)
    })
    return (
      <div className="card item-list">
        <div className="row">
          <div className="col-12">
            <ul className="item-list list-group">
              {list}
              {/* <li className="list-group-item">Item1</li>
              <li className="list-group-item">Item2</li>
              <li className="list-group-item">Item3</li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
