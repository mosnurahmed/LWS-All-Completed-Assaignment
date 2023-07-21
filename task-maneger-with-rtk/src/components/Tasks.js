import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetTasksQuery } from "../features/task/tasksApi";
import Task from "./Task";

function Tasks() {
  const [keyword, setKeyword] = useState();
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const { name, search } = useSelector((state) => state.filter);

  useEffect(() => {
    setKeyword(search);
  }, [search]);
  const filteredTasks = (task) => {
    if (name.length > 0) {
      return name.includes(task.project.projectName);
    } else {
      return task;
    }
  };
  const searchFilter = (task) => {
    if (keyword !== undefined) {
      return task.taskName.includes(keyword) || task.taskName.toLowerCase().includes(keyword);
    } else {
      return task;
    }
  };
  let content = null;

  if (isLoading) {
    content = <div>Loading......!!!</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && tasks.length === 0) {
    content = <div>No Project Found!!!</div>;
  }
  if (!isLoading && !isError && tasks.length > 0) {
    content = tasks
      .filter(filteredTasks)
      .filter(searchFilter)
      .map((task) => <Task task={task} key={task.id} />);
  }

  return (
    <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <div className="justify-between mb-10 space-y-2 md:flex md:space-y-0">
          <Link to="/create" className="lws-addnew group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 group-hover:text-indigo-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            <span className="group-hover:text-indigo-500">Add New</span>
          </Link>
        </div>
        {content}
      </main>
    </div>
  );
}

export default Tasks;
