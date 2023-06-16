import React, { useEffect, useState } from "react";

import axios from "axios";

import { CgEditBlackPoint } from "react-icons/cg";

import { AutoComplete, DatePicker, Select, Space } from "antd";

// importation du style
import "./search.scss";

const Search: React.FC = () => {
  type dataType = {
    local_name: string;
  };

  const [querySearch, setquerySearch] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");
  const [depart, setDepart] = useState<dataType[]>([]);
  const [destination, setDestination] = useState<dataType[]>([]);

  //composant de date
  const { RangePicker } = DatePicker;


  const autoCompleteUrl = `https://api.comparatrip.eu/cities/autocomplete/?q=`; //recherche dans les villes disponibles sur Tictactrip
  const populareCityUrl = "https://api.comparatrip.eu/cities/popular/5"; //recherche les 5 villes les plus populaires
  const populareByCity = `https://api.comparatrip.eu/cities/popular/from/${querySearch}/5`;//recherche les 5 villes les plus populaires au départ d’une ville donnée

  useEffect(() => {
    const searchCity = async () => {
      try {
        // recuperation des données de l'API
        const { data } = await axios.get(autoCompleteUrl + destinationSearch);
        const getPopulareCity = await axios.get(populareByCity);
        // recuperation des données de l'API

        switch (true) {

            // si la recherche de depart est vide
          case querySearch.length === 0:
            setDestination(data);

            break;

            // si la recherche de destination et de depart sont vide
          case destinationSearch === "" && querySearch.trim().length > 0:
            setDestination(getPopulareCity.data);

            break;

            // si la recherche de destination est remplie ou si le depart est vide
          case destinationSearch.length > 0 || querySearch.trim().length <= 0:
            setDestination(data);
            break;
        }
      } catch (error) {
       // ✅Recuperation des erreurs
       if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log('Unexpected error', error);
      }
      }
    };

    searchCity();
  }, [autoCompleteUrl, destinationSearch, populareByCity, querySearch]);


  useEffect(() => {
    const searchData = async () => {
      try {
        // recuperation des données de l'API
        const { data } = await axios.get(autoCompleteUrl + querySearch);
        const dataPopulare = await axios.get(populareCityUrl);
        // recuperation des données de l'API

        switch (true) {
          // si la recherche de depart est vide
          case querySearch === "": 
            setDepart(dataPopulare.data);

            break;

            // à default recherche dans les villes disponibles
          default:
            setDepart(data);
            break;
        }
      } catch (error) {

        // ✅Recuperation des erreurs
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log('Unexpected error', error);
        }
      }
    };

    searchData();
  }, [autoCompleteUrl, querySearch]);

  //recuperation des caracteres de recherche de la ville de depart
  const handleSearchChange = (value: string) => {
    setquerySearch(value);
  };

  //recuperation des caracteres de recherche de la ville de destination
  const handleDestinationSearch = (value: string) => {
    setDestinationSearch(value);
  };

  return (
    <div className="searchComponents mx-auto p-3 rounded bg-white">

      <div className="head mb-3 d-flex gap-3 align-items-center">
        <Select
          defaultValue="One-way"
          style={{ width: 120 }}
          className="fw-bold p-2"
          bordered={false}
          options={[
            { value: "One-way", label: "One-way" },
            { value: "Round trip", label: "Round trip" },
          ]}
        />
        <select className="border-0 d-none  d-md-block fw-semibold">
          <option>1 Adult, No Discount card</option>
        </select>
      </div>

      <div className="form">
        <div className="row align-items-baseline">
            
            {/* depart */}
          <div className="form-group position-relative col-md-3">
            <CgEditBlackPoint className="icon" />
            <AutoComplete
              onChange={handleSearchChange}
              value={querySearch}
              options={depart?.map((data) => ({ value: data.local_name }))}
              placeholder="from: city, station or airport"
              className="form-control border-0 "
            />
          </div>
            {/* depart */}

            {/* destination */}
          <div className="form-group position-relative col-md-3">
            <i className="fa-solid fa-location-dot icon"></i>
            <AutoComplete
              onChange={handleDestinationSearch}
              value={destinationSearch}
              options={destination?.map((data) => ({ value: data.local_name }))}
              placeholder="to: city, station or airport"
              className="form-control border-0"
            />
          </div>
            {/* destination */}

          <div className="form-group col-md-4">
            {/* calendrier */}
            <Space  direction="vertical" size={25} className="form-control border-0">
              <RangePicker
                className=""
                renderExtraFooter={() => "extra footer"}
              />
            </Space>
            {/* calendrier */}
          </div>

          <div className="form-group col-md-2">
            <button className="w-100">Search</button>
          </div>

        </div>

        <div className="form-check form-switch mt-3">
          <input
            type="checkbox"
            role="switch"
            className="form-check-input"
            id="flexSwitchCheckDefault"
          />
          <label
            htmlFor="flexSwitchCheckDefault"
            className="form-check-label fw-semibold"
          >
            Find my accomodation
          </label>
        </div>

      </div>
    </div>
  );
};

export default Search;
