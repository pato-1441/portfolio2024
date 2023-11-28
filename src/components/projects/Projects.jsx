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
        console.log(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="grid grid-cols-1 gap-8 mt-12 sm:mt-48 md:grid-cols-2 xl:grid-cols-3">
      {projects &&
        projects.map((project) => {         
          return <Card key={project.id} {...project} />;
        })}
      {/* 
      <Card
        imageSrc={alquileres}
        title="Alquileres Temporales"
        stack={["C#", "C#", "C#"]}
        desc="asd"
        deploy="asd"
        source="asd"
      />
      <Card
        imageSrc={cabcaldra}
        title="asd"
        stack="asd"
        desc="asd"
        deploy="asd"
        source="asd"
      />
      <Card
        imageSrc={tiroflecha}
        title="asd"
        stack="asd"
        desc="asd"
        deploy="asd"
        source="asd"
      />
      <Card
        imageSrc="asd"
        title="asd"
        stack="asd"
        desc="asd"
        deploy="asd"
        source="asd"
      /> */}
    </section>
  );
};

export default Projects;
