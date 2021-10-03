import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ name, email, website, constituency, id }) => {
  return (
    <div className="card">
      <h3 className="title">{name}</h3>
      <div>
        <p>
          <strong>Website:</strong> {website}
        </p>

        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Constituency:</strong> {constituency}
        </p>

        <Link to={`/teams/${id}`} className="btn-details">
          More info
        </Link>
      </div>
    </div>
  );
};

export default Card;
