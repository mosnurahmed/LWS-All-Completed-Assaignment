import React from "react";
import { useSelector } from "react-redux";
import From from "../components/From";

function Edit() {


  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <div className="lg:pl-[14rem] mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

          <div className="max-w-3xl mx-auto">
            <From/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Edit;
