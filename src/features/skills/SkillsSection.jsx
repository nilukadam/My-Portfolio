/*
  SkillsSection — Step 2 Visual Depth Upgrade

  Goals:
  - Remove forced vertical centering
  - Standardize container system
  - Improve card depth and hover polish
  - Enhance typography consistency
*/

const skills = [
  {
    title: "Frontend",
    items: [
      "React — building reusable components and UI structure",
      "JavaScript (ES6+) — application logic, async flows, state handling",
      "HTML & CSS — semantic markup and responsive layouts",
      "Tailwind CSS — scalable utility-first styling systems",
      "Bootstrap — working with prebuilt UI components when needed",
      "Framer Motion — subtle animations for interaction and flow",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js & Express — consuming and building basic REST APIs",
      "MongoDB — understanding data models and simple queries",
      "Authentication — handling JWT-based protected routes",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git & GitHub — version control and clean collaboration flow",
      "VS Code — daily development, debugging, and refactoring",
      "Postman — API testing and request validation",
    ],
  },
  {
    title: "Practices",
    items: [
      "Component reusability and separation of concerns",
      "Readable code with meaningful naming",
      "Performance-aware UI decisions",
      "Accessibility basics using semantic HTML",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((group) => (
            <div
              key={group.title}
              className="
                rounded-2xl 
                border border-white/10 
                p-7
                transition-all duration-200
                hover:border-white/20
                hover:-translate-y-1
              "
            >
              <h3 className="text-xl font-medium mb-5">
                {group.title}
              </h3>

              <ul className="space-y-3 text-white/70">
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