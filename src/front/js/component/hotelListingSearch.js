import React from "react";

const HotelListinSearch = () => {
  return (
    <div className="hotelListing_search_bar">
      <div>
        <label>Tipo de mascota </label>
        <div className="radio_inputs">
          <div className="radio_input_container">
            <input
              className="radio_type_input"
              type="radio"
              id="perro"
              name="pet-type"
              value="perro"
            />
            <label>Perro</label>
          </div>

          <div className="radio_input_container">
            <input
              className="radio_type_input"
              type="radio"
              id="gato"
              name="pet-type"
              value="gato"
            />
            <label>Gato</label>
          </div>

          <div className="radio_input_container">
            <input
              className="radio_type_input"
              type="radio"
              id="roedor"
              name="pet-type"
              value="roedor"
            />
            <label>Roedor</label>
          </div>

          <div className="radio_input_container">
            <input
              className="radio_type_input"
              type="radio"
              id="ave"
              name="pet-type"
              value="ave"
            />
            <label>Ave</label>
          </div>
        </div>
      </div>
      <div className="listing_date_input">
        <div className="entry_date">
          <label>Fecha de entrada</label>
          <input type="date" id="fecha-entrada" name="fecha-entrada" />
        </div>

        <div className="checkout_date">
          <label>Fecha de salida</label>
          <input type="date" id="fecha-salida" name="fecha-salida" />
        </div>
      </div>
      <div className="listing_search_bar">
        <label>Search</label>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default HotelListinSearch;
