import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import HotelCard from "../component/hotelCard";
import HotelListingSearch from "../component/hotelListingSearch";
import { Context } from "../store/appContext";
import "../../styles/hotelListing.css";

export const HotelListing = () => {
  const { store, actions } = useContext(Context);
  const [searchFilters, setSearchFilters] = useState({
    petTypes: [],
    entryDate: "",
    checkoutDate: "",
    country: "select-country",
  });

  useEffect(actions.listing, [searchFilters]);

  const handleChange = (e) => {
    setSearchFilters({ ...searchFilters, [e.target.name]: [e.target.value] });
  };

  const hotelsInfo = store.hotels.map((hotel, index) => {
    return <HotelCard hotel={hotel} key={index} index={index} />;
  });

  if (store.loading) return <h1>Loading</h1>;

  return (
    <div className="listing_section">
      <HotelListingSearch filters={searchFilters} onChange={handleChange} />
      <div className="hotel_listing_container">{hotelsInfo}</div>
    </div>
  );
};
