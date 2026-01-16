import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, tech, status, href }) => {
  return (
    <Link
      to={href}
      className="
        group block
        border border-white/10 rounded-lg p-6 space-y-4
        transition-all duration-200 ease-out
        hover:border-white/20 hover:bg-white/[0.02]
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20
      "
    >
      <div>
        <h3 className="text-lg font-medium text-white">
          {title}
        </h3>
        <span className="text-sm text-emerald-400">
          {status}
        </span>
      </div>

      <p className="text-gray-400 leading-relaxed line-clamp-2">
        {description}
      </p>

      <p className="text-sm text-gray-500">
        <span className="text-gray-400">Tech:</span> {tech}
      </p>
      
      <span className="text-xs text-gray-500 group-hover:text-gray-300">
        View details →
      </span>
    </Link>
  );
};

export default ProjectCard;
