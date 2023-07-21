import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addName } from "../features/filter/filterSlice";

import { projectsApi } from "../features/projects/projectsApi";
import { tasksApi, useAddTaskMutation, useEditTaskMutation } from "../features/task/tasksApi";
import { teamApi } from "../features/team/teamApi";

function Form({ editing }) {
  const [editMode, setEditMode] = useState(false);
  const [teamMember, setTeamMember] = useState("");
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [project, setProject] = useState(undefined);
  const [team, setTeam] = useState(undefined);
  const [responseError, setResponseError] = useState("");
  const [tasks, setTasks] = useState(undefined);

  const [addTask, { isLoading, isSuccess: addIsSuccess }] = useAddTaskMutation();
  const [editTask, { isSuccess: editIsSuccess }] = useEditTaskMutation();

  const dispatch = useDispatch();
  const { taskId } = useParams();
  const navigate = useNavigate();

  // const reset =() =>{
  //   setTeamMember("")
  //   setTaskName("")
  //   setProjectName("")
  //   setDeadline("")
  // }

  useEffect(() => {
    if (projectName !== "") {
      dispatch(projectsApi.endpoints.getProject.initiate(projectName))
        .unwrap()
        .then((data) => {
          setProject(data[0]);
        })
        .catch((err) => {
          setResponseError(err);
        });
    }
  }, [dispatch, projectName]);

  useEffect(() => {
    if (teamMember !== "") {
      dispatch(teamApi.endpoints.getMember.initiate(teamMember))
        .unwrap()
        .then((data) => {
          setTeam(data[0]);
        })
        .catch((err) => {
          setResponseError(err);
        });
    }
  }, [dispatch, teamMember]);

  useEffect(() => {
    if (editing) {
      dispatch(tasksApi.endpoints.getEditTask.initiate(taskId))
        .unwrap()
        .then((data) => {
          setTasks(data);
        })
        .catch((err) => {
          setResponseError(err);
        });
      if (tasks?.id) {
        const { taskName, teamMember: team, project: editProject, deadline } = tasks || {};
        setTaskName(taskName);
        setTeamMember(team.name);
        setProjectName(editProject.projectName);

        setDeadline(deadline);
      }
    }
  }, [editing, dispatch, taskId, tasks]);

  useEffect(() => {
  
    dispatch(addName(projectName));
  }, [projectName, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      let status = "pending";

      const data = { taskName, teamMember: team, project, deadline, status };

      addTask({ taskId, data });
      dispatch(addName(projectName));
    } else {
      let status = "pending";
      const data = { taskName, teamMember: team, project, deadline, status };
      editTask({ taskId, data });
    }
  };

  if (addIsSuccess || editIsSuccess) {
    navigate("/");
  }

  return (
    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="fieldContainer">
          <label>Task Name</label>
          <input
            type="text"
            name="taskName"
            id="lws-taskName"
            required
            placeholder="Implement RTK Query"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="fieldContainer">
          <label>Assign To</label>
          <select
            name="teamMember"
            id="lws-teamMember"
            onChange={(e) => setTeamMember(e.target.value)}
            value={teamMember}
            required
          >
            <option value="">Select Job</option>
            <option value="Sumit Saha">Sumit Saha</option>
            <option value="Sadh Hasan">Sadh Hasan</option>
            <option value="Akash Ahmed">Akash Ahmed</option>
            <option value="Md Salahuddin">Md Salahuddin</option>
            <option value="Riyadh Hassan">Riyadh Hassan</option>
            <option value="Ferdous Hassan">Ferdous Hassan</option>
            <option value="Arif Almas">Arif Almas</option>
          </select>
        </div>

        <div className="fieldContainer">
          <label for="lws-projectName">Project Name</label>
          <select
            id="lws-projectName"
            name="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          >
            <option value="">Select Project</option>
            <option value="Scoreboard">Scoreboard</option>
            <option value="Flight Booking">Flight Booking</option>
            <option value="Product Cart">Product Cart</option>
            <option value="Book Store">Book Store</option>
            <option value="Blog Application">Blog Application</option>
            <option value="Job Finder">Job Finder</option>
          </select>
        </div>

        <div className="fieldContainer">
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            id="lws-deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>

        <div className="text-right">
          <button type="submit" className="lws-submit">
            {editing ? "Edited" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
