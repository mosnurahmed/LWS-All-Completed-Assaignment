import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import JobsTitleBar from "./JobsTitleBar";
import { fetchJobs } from "../features/job/jobSlice";
import Loading from "./ui/Loading";
import Job from "./Job";
import { resetSearch } from "../features/filter/filterSlice";

function Jobs() {
  const { jobs, isError, isLoading, error } = useSelector((state) => state.jobs);
  const [keyword, setKeyword] = useState(" ");
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    setKeyword(filters.search);
    setSort(filters.sortStatus);
  }, [filters]);
 
  const searchFilter = (job) => {
    if (keyword !== undefined) {
      return job.title.includes(keyword) || job.title.toLowerCase().includes(keyword) ;
    } else {
      return job;
    }
  };
  const sortFilter = (a, b) => {
    if (sort !== undefined) {
      if (sort === "Default") {
        return 0;
      } else if (sort === "Low to High") {
        return parseInt(a.salary) - parseInt(b.salary);
      } else if (sort === "High to Low") {
        return parseInt(b.salary) - parseInt(a.salary);
      }
    }
  };
  
  // let decided what to render
  let content = null;
  if (isLoading) {
    dispatch(resetSearch())
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <div> {error} </div>;
  }
  if (!isLoading && !isError && jobs.length === 0) {
    content = <div>No Job Available !!</div>;
  }

  if (!isLoading && !isError && jobs.length > 0) {
    content = jobs
      .slice()
      .sort(sortFilter)
      .filter(searchFilter)
      .map((job) => {
       
        return <Job job={job} key={job.id} />
      });
  }

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <JobsTitleBar />
        <div className="jobs-list">{content}</div>
      </main>
    </div>
  );
}

export default Jobs;
