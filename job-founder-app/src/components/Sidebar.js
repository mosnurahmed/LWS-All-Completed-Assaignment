import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUpdateJob } from "../features/job/jobSlice";


function Sidebar() {

const dispatch=useDispatch()

const addHandler=() =>{
  dispatch(removeUpdateJob())
}


  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" href="/jobs" className="main-menu menu-active" id="lws-alljobs-menu">
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2">
              <li>
                <Link to="/" className="sub-menu" href="/jobs/internship" id="lws-internship-menu">
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link to="/" className="sub-menu" href="/jobs/fulltime" id="lws-fulltime-menu">
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link to="/" className="sub-menu" href="/jobs/remote" id="lws-remote-menu">
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/create" onClick={addHandler} href="/jobs" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
