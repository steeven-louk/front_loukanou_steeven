import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgEditBlackPoint } from "react-icons/cg";

import { AutoComplete, DatePicker, Select, Space } from "antd";
import "./search.scss";


const Search: React.FC = () => {

  type dataType = {
    local_name: string;
  };
  const [querySearch, setquerySearch] = useState("");
  const [destinationSearch, setDestinationSearch] = useState("");
  const [depart, setDepart] = useState<dataType[]>([]);
  const [destination, setDestination] = useState<dataType[]>([]);

  const { RangePicker } = DatePicker;

  const autoCompleteUrl = `https://api.comparatrip.eu/cities/autocomplete/?q=`;
  const populareCityUrl = "https://api.comparatrip.eu/cities/popular/5";
  const populareByCity = `https://api.comparatrip.eu/cities/popular/from/${querySearch}/5`;

  useEffect(() => {
    const searchCity = async () => {
      try {
        const { data } = await axios.get(autoCompleteUrl + destinationSearch);
        const getPopulareCity = await axios.get(populareByCity);

        switch (true) {
          case querySearch.length === 0:
            setDestination(data);

            break;

          case destinationSearch === "" && querySearch.trim().length > 0:
            setDestination(getPopulareCity.data);

            break;
          case destinationSearch.length > 0 || querySearch.trim().length <= 0:
            setDestination(data);
            break;
        }
      } catch (error) {
        // throw new Error(error)
        console.log(error);
      }
    };
    searchCity();
  }, [autoCompleteUrl, destinationSearch, populareByCity, querySearch]);

  useEffect(() => {
    const searchData = async () => {
      try {
        const { data } = await axios.get(autoCompleteUrl + querySearch);
        const dataPopulare = await axios.get(populareCityUrl);

        switch (true) {
          case querySearch === "":
            setDepart(dataPopulare.data);

            break;

          default:
            setDepart(data);
            break;
        }
      } catch (error) {
        // throw new Error(error)
        console.log(error);
      }
    };
    searchData();
  }, [autoCompleteUrl, querySearch]);

  const handleSearchChange = (value: string) => {
    setquerySearch(value);
  };
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
        { value: 'One-way', label: 'One-way' },
        { value: 'Round trip', label: 'Round trip' },
      ]}
    />
        <select className="border-0 fw-semibold">
          <option>1 Adult, No Discount card</option>
        </select>
      </div>
      <div className="form">
        <div className="row align-items-baseline">
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
          <div className="form-group position-relative col-md-3">
            <CgEditBlackPoint className="icon " />
            <AutoComplete
              onChange={handleDestinationSearch}
              value={destinationSearch}
              options={destination?.map((data) => ({ value: data.local_name }))}
              placeholder="to: city, station or airport"
              className="form-control border-0"
            />
          </div>
          <div className="form-group col-md-4">
            <Space
              direction="vertical"
              size={25}
              className="form-control border-0"
            >
              <RangePicker
                className=""
                renderExtraFooter={() => "extra footer"}
              />
            </Space>
          </div>
          <div className="form-group col-md-2">
            <button className="btn btn-warning form-control">Search</button>
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
