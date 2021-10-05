import React, { useState, useEffect } from "react";
import "./Teams.scss";
import Card from "../components/Card";
import useAxios from "../hooks/useAxios";
import Filter from "../components/Filter";

const Teams = () => {
  const { response, isLoading, error } = useAxios();
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

  if (isLoading) return <h1 className="center">Loading Teams...</h1>;
  if (error) return <h1 className="center">Something went wrong!</h1>;

  return (
    <div className="teams">
      <Filter
        selectCountry={selectCountry}
        sort={sort}
        setSearchName={setSearchName}
        asc={asc}
      />
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
      {filteredTeams.length === 0 && <h1 className="center">No teams found</h1>}
    </div>
  );
};

export default Teams;
