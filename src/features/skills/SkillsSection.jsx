/* 
  SkillsSection
  Purpose:
  - Present frontend-focused skills with clarity and honesty
  - Show how tools are used in real UI work
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
      className="py-24 min-h-[80vh] flex items-center"
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
