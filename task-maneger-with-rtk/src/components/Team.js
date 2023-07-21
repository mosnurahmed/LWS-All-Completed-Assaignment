import React from "react";
import TeamMember from "./TeamMember";
import { useGetTeamQuery } from "../features/team/teamApi";

function Team() {
  const { data: team, isLoading, isError, error } = useGetTeamQuery();
  let content = null;

  if (isLoading) {
    content = <div>Loading......!!!</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && team.length === 0) {
    content = <div>No Project Found!!!</div>;
  }
  if (!isLoading && !isError && team.length > 0) {
    content = team.map((member) => <TeamMember member={member} key={member.id} />);
  }
  return (
    <div className="mt-8 ">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}

export default Team;
