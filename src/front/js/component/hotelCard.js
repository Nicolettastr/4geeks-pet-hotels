import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import labrador from "../../img/labrador.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HotelCard = (props) => {
  const { store, actions } = useContext(Context);

  console.log(props.hotel);

  return (
    <div
      key={props.index}
      className="card card_section"
      style={{ width: "16rem" }}
    >
      <img src={labrador} className="card-img-top hotel_image" alt="..." />
      <button
        onClick={() => actions.addFavorites(hotel.id)}
        className="favoritesBtn"
      >
        <FontAwesomeIcon icon={faHeart} className="favorites_icon" />
      </button>
      <div className="card-body">
        <div className="hotel_title_section">
          <h5 className="card-title">{props.hotel.name}</h5>
          <span className="hotel_stars">
            <FontAwesomeIcon className="stars" icon={faHeart} />
            4.6
          </span>
        </div>
        <hr />
        <p className="card-text">{props.hotel.location}</p>
        <p>25€ noche</p>
        <div className="hotel_listing_btnCotainer">
          <Link to={`/hotel/${props.hotel.id}`}>
            <button className="btn btn-primary listing_hotel_btn">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
