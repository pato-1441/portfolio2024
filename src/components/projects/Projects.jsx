import Card from "../card/Card";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="mt-20 sm:mt-40 ">
      <h2 className="text-2xl sm:text-3xl font-medium mb-6">Proyectos</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects &&
          projects.map((project) => {
            return <Card key={project.id} {...project} />;
          })}
      </div>
    </section>
  );
};

export default Projects;
