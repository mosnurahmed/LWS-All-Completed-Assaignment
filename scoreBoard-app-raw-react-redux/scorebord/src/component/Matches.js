import React from "react";
import { useSelector } from "react-redux";
import Match from "./Match";

function Matches() {
  const matches = useSelector((state) => state.matches);

  let content = null;
  content = matches.map((match) => <Match key={match.id} match={match} />);

  return (
    <div className="all-matches container" id="matches">
      {content}
    </div>
  );
}

export default Matches;
