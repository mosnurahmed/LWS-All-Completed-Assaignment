import React from "react";
import SideBar from "../components/SideBar";
import Tasks from "../components/Tasks";

function Home() {
  return (
    <>
      <div className="container relative">
        <SideBar />
        <Tasks />
      </div>
    </>
  );
}

export default Home;
