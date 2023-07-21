import React from "react";
import VideoPlayer from "../component/users/VideoPlayer";
import Videos from "../component/users/Videos";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";

function CoursePlan() {
  return (
    <>
      <Navbar />
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <Outlet/>
            <Videos />
          </div>
        </div>
      </section>
    </>
  );
}

export default CoursePlan;
