import { Link } from "react-router-dom";

/*
  ProjectCard — Final Refined Production Version

  Supports:
  - Standard layout
  - Flagship prominence
  - Controlled elevation
  - Subtle hierarchy dominance
*/

const ProjectCard = ({ title, description, image, href, featured }) => {
  return (
    <Link
      to={href}
      className={`
        group block rounded-2xl overflow-hidden
        border border-white/10
        bg-[#141414]
        transition-all duration-300 ease-out
        hover:border-white/20
        hover:bg-[#1a1a1a]
        ${featured ? "shadow-xl shadow-black/30" : "shadow-lg shadow-black/20"}
        focus:outline-none focus:ring-2 focus:ring-white/20
      `}
    >
      {/* Screenshot */}
      <div
        className={`
          relative overflow-hidden
          ${featured ? "aspect-[16/8]" : "aspect-[16/10]"}
        `}
      >
        {/* Subtle overlay for text balance */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-[1.02]
          "
        />
      </div>

      {/* Content */}
      <div
        className={`
          ${featured ? "p-8" : "p-6"}
          space-y-3
        `}
      >
        <h3
          className={`
            font-semibold tracking-tight
            ${featured ? "text-2xl" : "text-xl"}
          `}
        >
          {title}
        </h3>

        <p className="text-white/75 leading-relaxed line-clamp-2">
          {description}
        </p>

        <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-200">
          View Case Study →
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;