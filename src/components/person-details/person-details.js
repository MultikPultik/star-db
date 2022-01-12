import react from "react";

import "./person-details.css";

const PersonDetails = () => {
  return (
    <div className="card card-person-details">
      <div className="row">
        <div className="col-2">
          <img
            src="	https://starwars-visualguide.com/assets/img/species/2.jpg"
          ></img>
        </div>
        <div className="col-5">
          <div className="card-body">
            <h5 className="card-title">R2-D2</h5>
            <ul className="person-details list-group-flush">
              <li className="list-group-item">Classification: Artificial</li>
              <li className="list-group-item">Designation: Sentient</li>
              <li className="list-group-item">Language: n/a</li>
            </ul>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
