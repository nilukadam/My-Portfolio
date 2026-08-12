/*
  SkillsSection — B3 Trust & Conversation Version

  Positioning:
  - Frontend development remains the primary skill area
  - Backend skills demonstrate supporting full-stack capability
  - Tools and development practices reinforce practical frontend capability
*/

const skills = [
  {
    title: "Frontend",
    items: [
      "React — building reusable components and interactive UI",
      "JavaScript (ES6+) — application logic, async flows, and state handling",
      "HTML & CSS — semantic markup and responsive UI development",
      "Bootstrap — responsive UI development and component-based styling",
      "Tailwind CSS — utility-first styling and responsive UI",
      "Framer Motion — subtle animations for interaction and flow",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js & Express — building and integrating REST APIs",
      "MongoDB & Mongoose — data modeling and database operations",
      "JWT Authentication — protected routes and authenticated application flows",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git & GitHub — version control and project collaboration",
      "VS Code — development, debugging, and refactoring",
      "Postman — API testing and request validation",
    ],
  },
  {
    title: "Practices",
    items: [
      "Component reusability and separation of concerns",
      "Readable, maintainable code structure",
      "Efficient UI state and interaction handling",
      "Responsive UI development across desktop and mobile",
      "Accessibility basics using semantic HTML and ARIA attributes",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
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
                bg-[#141414]
                p-6
                transition-colors duration-200
                hover:border-white/20
              "
            >
              <h3 className="text-xl font-semibold mb-4">
                {group.title}
              </h3>

              <ul className="space-y-3 text-white/75">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="leading-relaxed"
                  >
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