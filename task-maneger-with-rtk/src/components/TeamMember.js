import React from "react";
function TeamMember({ member }) {
  const { name, avatar } = member || {};

  return (
    <>
      <div className="checkbox-container">
        <img src={avatar} alt={name} className="team-avater" />
        <p className="label">{name} </p>
      </div>
    </>
  );
}

export default TeamMember;
