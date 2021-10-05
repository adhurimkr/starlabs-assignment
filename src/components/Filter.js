import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./Filter.scss";

const Filter = ({ setSearchName, selectCountry, sort, asc }) => {
  return (
    <div className="teams-filter">
      <div className="search">
        <SearchOutlined className="search-icon" />
        <input
          type="text"
          placeholder="Search teams by name"
          className="search-input"
          onChange={(e) => setSearchName(e.target.value)}
        ></input>
      </div>
      <button onClick={sort} className="btn-sort">{`Sort ${
        asc ? "DSC" : "ASC"
      }`}</button>
      <div className="search-country">
        <label className="label" htmlFor="selectCountry">
          Filter by country
        </label>
        <select
          id="selectCountry"
          className="search-select"
          onChange={selectCountry}
        >
          <option value="ALL">ALL</option>
          <option value="DE">Deutschland</option>
          <option value="US">USA</option>
          <option value="AE">Arab Emirates</option>
          <option value="CA">Canada</option>
          <option value="NL">Netherlands</option>
          <option value="AT">Austria</option>
          <option value="GR">Greece</option>
          <option value="CR">Croatia</option>
          <option value="BE">Belgium</option>
          <option value="MX">Mexico</option>
          <option value="CZ">Czech Republic</option>
          <option value="IT">Italy</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
