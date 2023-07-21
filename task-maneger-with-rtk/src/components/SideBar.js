import React from "react";
import Projects from "./Projects";
import Team from "./Team";

function SideBar() {
  return (
    <div className="sidebar">
      <Projects />

      <Team />
    </div>
  );
}

export default SideBar;
