import React from "react";
import { useParams } from "react-router-dom";
import TeamInfo from "../components/TeamInfo";
import useAxios from "../hooks/useAxios";
import "./TeamDetails.scss";

const TeamDetails = () => {
  const { response } = useAxios();
  const params = useParams();
  const team = response.find((team) => team.id === params.teamId);

  let teamInfo = [];

  // checking if team then create a new array with keys and values of the team object  where 0 is the key and 1 the value

  team &&
    Object.entries(team).map((info) => {
      return teamInfo.push({
        name: info[0],
        text: info[1],
      });
    });

  return (
    <div className="team-details-container">
      <header>
        {/* I have to use ?. to check if there is team otherwise there is an error */}
        <h1>Information about {team?.["team-full"]}</h1>
        {/* mapping through the array of team informations so we can render infos 
        dynamically and if the info is something we dont need to show just return nothing or null*/}
        {teamInfo.map((info) => {
          if (
            info.name === "id" ||
            info.name === "team" ||
            info.name === "team-full" ||
            info.name === "host" ||
            info.name.includes("country") ||
            info.name.includes("timezone") ||
            info.name === "constituency" ||
            info.name === "last-modified" ||
            info.name === "member-since" ||
            info.name === "fax" ||
            info.name === "phone-emergency"
          ) {
            return null;
          } else {
            return <TeamInfo {...info} key={info.name} />;
          }
        })}
      </header>
    </div>
  );
};

export default TeamDetails;
