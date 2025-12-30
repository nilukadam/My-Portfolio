/*
  SkillsSection
  Purpose:
  - Present technical skills with depth and honesty
  - Show engineering mindset, not just tools
*/

const skills = [
    {
      title: "Frontend",
      items: [
        "React (component architecture, hooks, state management)",
        "JavaScript (ES6+, async logic, clean functions)",
        "HTML & CSS (semantic markup, responsive layouts)",
        "Tailwind CSS (design systems, utility-first styling)"
      ],
    },
    {
      title: "Backend",
      items: [
        "Node.js & Express (REST APIs, middleware)",
        "MongoDB (schema design, basic querying)",
        "Authentication (JWT, protected routes)"
      ],
    },
    {
      title: "Tools",
      items: [
        "Git & GitHub (branching, clean commits)",
        "VS Code (extensions, debugging)",
        "Postman (API testing and validation)"
      ],
    },
    {
      title: "Practices",
      items: [
        "Component reusability & separation of concerns",
        "Readable code and meaningful naming",
        "Performance-aware UI decisions",
        "Basic accessibility considerations"
      ],
    },
  ];
  
  const SkillsSection = () => {
    return (
      <section
        className="py-24"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Heading */}
          <h2
            id="skills-heading"
            className="text-3xl font-semibold text-white mb-10"
          >
            Skills
          </h2>
  
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((group) => (
              <div
                key={group.title}
                className="border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-medium text-white mb-4">
                  {group.title}
                </h3>
  
                <ul className="space-y-2 text-gray-400">
                  {group.items.map((item, index) => (
                    <li key={index} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  