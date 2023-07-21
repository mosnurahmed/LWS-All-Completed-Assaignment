import React from "react";
import Sort from "./Sort";
import Filter from "./Filter";

function Sidebar() {
  return (
    <aside>
      <div className="sidebar-items">
        <Sort />
        <Filter />
      </div>
    </aside>
  );
}

export default Sidebar;
