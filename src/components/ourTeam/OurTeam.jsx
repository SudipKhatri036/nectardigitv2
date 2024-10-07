import React from "react";
import PageHero from "../pageHero/PageHero";
import TeamCard from "../teamCard/TeamCard";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";

function OurTeam() {
  const { data, isLoading, error } = useAxios("/team");

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error?.message}</p>;

  return (
    <section className="team-page">
      <PageHero imgSrc="/images/team-01.png" pageName="Team" />

      <div className="container mt">
        <div className="row">
          {data?.data.map((team) => {
            return <TeamCard key={team.id} team={team} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
