import { useGetProjectsQuery } from "../features/projects/projectsApi";
import Project from "./Project";

function Projects() {
  const { data: projects, isLoading, isError, error } = useGetProjectsQuery();

  let content = null;

  if (isLoading) {
    content = <div>Loading......!!!</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && projects.length === 0) {
    content = <div>No Project Found!!!</div>;
  }
  if (!isLoading && !isError && projects.length > 0) {
    content = projects.map((project) => <Project project={project} key={project.id} />);
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}

export default Projects;
