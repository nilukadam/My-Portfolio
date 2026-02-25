import ProjectCard from "./ProjectCard";
import qnaImg from "../../assets/screenShots/qna-homepage.png";
import booknestImg from "../../assets/screenShots/booknest-home.png";

/*
  ProjectsOverview — Refined Production Version

  - Clear flagship dominance
  - Tight vertical rhythm
  - Balanced section spacing
  - Clean hierarchy
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
      className="py-24" // tightened from 28 → better global rhythm
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
            Production-ready frontend systems focused on structure,
            scalability, and predictable user experience.
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