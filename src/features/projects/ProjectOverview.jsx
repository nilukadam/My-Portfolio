import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-commerce Frontend",
    description: "A frontend-focused e-commerce application demonstrating product listing, cart interactions, and predictable UI state updates.",
    tech: "React, Tailwind CSS, JavaScript",
    status: "In Progress",
    href: "/projects/ecommerce",
  },
  {
    title: "Quora-Style Q&A Platform",
    description:
      "A question-and-answer platform prototype focused on content readability and scalable component structure.",
    tech: "React, Tailwind CSS, React Router",
    status: "In Progress",
    href: "/projects/featured",
  },
];

const ProjectsOverview = () => {
  return (
    <section
      id="projects"
      className="py-24 min-h-[80vh] flex items-center"
      aria-labelledby="projects-overview-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="projects-overview-heading"
          className="text-3xl font-semibold text-white mb-10"
        >
          Additional Projects
        </h2>

        <p className="mt-2 mb-10 text-gray-400 max-w-2xl">
           Selected projects showcasing frontend architecture, UI clarity,
           and real-world interaction patterns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsOverview;
