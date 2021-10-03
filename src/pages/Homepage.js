import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "./Homepage.scss";
import useAxios from "../hooks/useAxios";

const Homepage = () => {
  const { response, isLoading, error } = useAxios();

  if (isLoading) return <h1 className="center">Loading Teams...</h1>;
  if (error) return <h1 className="center">Something went wrong!</h1>;

  return (
    <div className="homepage">
      <div className="homepage-show">
        <h1>Showing Top 10 teams</h1>
        <Link to="/teams" className="show-more">
          Show All Teams
        </Link>
      </div>
      {/* slicing only the first 10 teams to show on the page */}
      {response.slice(0, 10).map((team) => (
        <Card
          name={team["team-full"]}
          email={team.email}
          website={team.website}
          constituency={team.constituency}
          key={team.id}
          id={team.id}
        />
      ))}
    </div>
  );
};

export default Homepage;
