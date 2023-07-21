import React, {useState } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { removeJob, updatedJob } from "../features/job/jobSlice";

function Job({ job }) {
  const { id, title, type, salary, deadline } = job || {};

  const dispatch = useDispatch();

  const color =( value) => {
    if(value === "Full Time"){
      return "!text-[#FF8A00]"
    }
    if(value === "Internship" ){
      return "!text-[#FF5757]"
    }
    if(value === "Remote"){
      return  "!text-[#56E5C4]"
    }
    }

  



  const editHandler = () => {
    dispatch(updatedJob(job));
  };

  const deleteHandler = () => {
    dispatch(removeJob(id));
  };

  
  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title} </h2>
        <div className="job-footers">
          <div className="lws-type">
            <i className={`fa-solid fa-stop ${color(type)} text-lg mr-1.5`}></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link to={`/edit/${id}`}>
            <button onClick={editHandler} type="button" className="lws-edit btn btn-primary">
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </Link>
        </span>

        <span className="sm:ml-3">
          <button onClick={deleteHandler} type="button" className="lws-delete btn btn-danger">
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default Job;
