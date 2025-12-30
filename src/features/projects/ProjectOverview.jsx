/*
  ProjectsOverview
  Purpose:
  - Show additional ongoing projects
  - Provide breadth without deep detail
*/

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Frontend",
    description:
      "An ongoing frontend-focused e-commerce interface with product listing, cart flow, and responsive layout. The emphasis is on reusable components and predictable UI behavior.",
    tech: "React, Tailwind CSS, JavaScript",
    status: "In Progress",
  },
  {
    title: "Quora-Style Q&A Platform",
    description:
      "A question-and-answer platform prototype focused on content readability, navigation flow, and scalable component structure.",
    tech: "React, Tailwind CSS, React Router",
    status: "In Progress",
  },
];

const ProjectsOverview = () => {
  return (
    <section
      className="py-24"
      aria-labelledby="projects-overview-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="projects-overview-heading"
          className="text-3xl font-semibold text-white mb-10"
        >
          Other Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
