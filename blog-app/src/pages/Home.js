import React from "react";
import Blogs from "../component/blogs/Blogs";
import Sidebar from "../component/sidebar/Sidebar";

function Home() {
  return (
 
      <section className="wrapper">
        <Sidebar />
        <Blogs />
      </section>

  );
}

export default Home;
