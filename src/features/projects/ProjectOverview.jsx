import ProjectCard from "./ProjectCard";
import qnaImg from "../../assets/screenShots/qna-homepage.png";
import booknestImg from "../../assets/screenShots/booknest-home.png";

/*
  ProjectsOverview — Final Production Version

  Strategy:
  - Structured Q&A is the flagship (full-width on desktop)
  - BookNest remains strong secondary
  - No visual noise
  - Silent dominance hierarchy
*/

const projects = [
  {
    title: "Structured Q&A Platform",
    description:
      "Flagship frontend system engineered with routing discipline, authentication boundaries, and production-validated SPA stability.",
    image: qnaImg,
    href: "/projects/structured-qna",
    featured: true,
  },
  {
    title: "BookNest",
    description:
      "Structured React e-commerce SPA modeling authentication, cart coordination, and complete order lifecycle management.",
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
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Section Header */}
        <div className="space-y-5 max-w-2xl">
          <h2
            id="projects-overview-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Selected Work
          </h2>

          <p className="text-white/65 leading-relaxed">
            Production-ready frontend systems focused on structure,
            scalability, and predictable user experience.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

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