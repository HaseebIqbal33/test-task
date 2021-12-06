import React from "react";
import "./Details.css";
const details = ({ data }) => {
  return (
    <div className="details-container">
      {Object.keys(data).length ? (
        <div>
          <div className="row">
            <div className="col">Name</div>
            <div className="col">{data.name}</div>
          </div>
          <div className="row">
            <div className="col">height</div>
            <div className="col">{data.height}</div>
          </div>
          <div className="row">
            <div className="col">Mass</div>
            <div className="col">{data.mass}</div>
          </div>
          <div className="row">
            <div className="col">hair color</div>
            <div className="col">{data.hair_color}</div>
          </div>
          <div className="row">
            <div className="col">skin color</div>
            <div className="col">{data.skin_color}</div>
          </div>
          <div className="row">
            <div className="col">eye color</div>
            <div className="col">{data.eye_color}</div>
          </div>
          <div className="row">
            <div className="col">birth year</div>
            <div className="col">{data.birth_year}</div>
          </div>
          <div className="row">
            <div className="col">gender</div>
            <div className="col">{data.gender}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default details;
