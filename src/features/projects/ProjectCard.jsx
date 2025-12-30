/*
  ProjectCard
  Purpose:
  - Display a short, honest project overview
*/

const ProjectCard = ({ title, description, tech, status }) => {
    return (
      <div className="border border-white/10 rounded-lg p-6 space-y-4">
        <div>
          <h3 className="text-lg font-medium text-white">
            {title}
          </h3>
          <span className="text-sm text-emerald-400">
            {status}
          </span>
        </div>
  
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
  
        <p className="text-sm text-gray-500">
          <span className="text-gray-400">Tech:</span> {tech}
        </p>
      </div>
    );
  };
  
  export default ProjectCard;
  