import React, { useState, useEffect } from "react";
import "./Teams.scss";
import Card from "../components/Card";
import { SearchOutlined } from "@ant-design/icons";
import useAxios from "../hooks/useAxios";

const Teams = () => {
  const { response } = useAxios();
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [asc, setAsc] = useState(true);
  const [searchName, setSearchName] = useState("");

  // setting our filtered data
  useEffect(() => {
    const filteredData = response.filter((item) =>
      item["team-full"].toLowerCase().includes(searchName.toLowerCase())
    );

    setFilteredTeams(filteredData);
  }, [searchName, response]);

  //creating sorting function
  const sort = () => {
    filteredTeams.sort((a, b) => {
      return a < b ? 1 : -1;
    });
    setAsc(!asc);
  };

  //selecting data based on country

  const selectCountry = (e) => {
    const filteredCountry = response.filter(
      (item) => item.country === e.target.value
    );
    if (e.target.value === "ALL") {
      setFilteredTeams(response);
      return;
    }

    setFilteredTeams(filteredCountry);
  };

  return (
    <div className="teams">
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
            <option>Italy</option>
          </select>
        </div>
      </div>
      {filteredTeams?.map((team) => (
        <Card
          name={team["team-full"]}
          email={team.email}
          website={team.website}
          constituency={team.constituency}
          key={team.id}
          id={team.id}
        />
      ))}
      {filteredTeams.length === 0 && (
        <h1 style={{ textAlign: "center", gridArea: "2 / 1/ 3 / -1" }}>
          No teams found
        </h1>
      )}
    </div>
  );
};

export default Teams;
