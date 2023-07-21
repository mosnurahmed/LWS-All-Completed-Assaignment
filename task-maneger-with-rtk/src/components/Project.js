import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName, deleteName } from "../features/filter/filterSlice";

function Project({ project }) {
  const { projectName, colorClass } = project || {};

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.filter);

  const [checkStatus, setCheckStatus] = useState(true);
  useEffect(() => {
    if (tasks.length > 0) {
      const isProjectExist = tasks.some((item) => item.project && item.project.projectName === projectName);

      setCheckStatus(isProjectExist);
      if (isProjectExist) {
        dispatch(addName(projectName));
      }
    }
  }, [tasks, projectName, dispatch]);



  const handleStatus = (e) => {
    setCheckStatus(() => {
      const decision = e.target.checked;
      if (decision) {
        dispatch(addName(projectName));
      } else {
        dispatch(deleteName(projectName));
      }

      return e.target.checked;
    });
  };

  return (
    <>
      <div className="checkbox-container">
        <input type="checkbox" className={`${colorClass}`} checked={checkStatus} onChange={handleStatus} />
        <p className="label">{projectName} </p>
      </div>
    </>
  );
}

export default Project;
