import ProjectCard from "./ProjectCard";
import qnaImg from "../../assets/screenShots/qna-homepage.png";
import booknestImg from "../../assets/screenShots/booknest-home.png";

/*
  ProjectsOverview — B2 Project Showcase Version

  Project hierarchy:
  - Structured Q&A → Flagship frontend project
  - BookNest → Full-stack MERN project

  The homepage introduces each project clearly while
  keeping detailed technical information on the
  dedicated project pages.
*/

const projects = [
  {
    title: "Structured Q&A Platform",
    description:
      "A React-based Q&A platform focused on reusable components, structured navigation, authentication flows, and responsive user interactions.",
    image: qnaImg,
    href: "/projects/structured-qna",
    featured: true,
  },
  {
    title: "BookNest",
    description:
      "A full-stack MERN e-commerce application with React, REST APIs, JWT authentication, MongoDB, cart workflows, and order management.",
    image: booknestImg,
    href: "/projects/booknest",
    featured: false,
  },
];

const ProjectsOverview = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-overview-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="space-y-4 max-w-xl">
          <h2
            id="projects-overview-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Selected Work
          </h2>

          <p className="text-white/75 leading-relaxed">
            Selected web applications demonstrating practical frontend
            development, full-stack implementation, and structured user
            experiences.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsOverview;