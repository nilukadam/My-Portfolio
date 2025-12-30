/*
  FeaturedProject
  Purpose:
  - Showcase real, in-progress work
  - Demonstrate frontend architecture and thinking
  - Build trust through honesty
*/

const FeaturedProject = () => {
    return (
      <section
        className="py-24"
        aria-labelledby="project-heading"
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Heading */}
          <h2
            id="project-heading"
            className="text-3xl font-semibold text-white mb-10"
          >
            Featured Project
          </h2>
  
          <div className="border border-white/10 rounded-lg p-8 space-y-8">
            {/* Project Header */}
            <div>
              <h3 className="text-2xl font-medium text-white">
                Quora-Style Q&A Platform
              </h3>
              <span className="inline-block mt-2 text-sm text-emerald-400">
                In Progress
              </span>
            </div>
  
            {/* Problem Statement */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                Problem
              </h4>
              <p className="text-gray-400 leading-relaxed">
                The goal of this project is to build a question-and-answer
                platform with a clean, readable UI and a scalable frontend
                architecture. The focus is on content clarity, navigation flow,
                and reusable components rather than visual noise.
              </p>
            </div>
  
            {/* Built So Far */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                What’s Built So Far
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Global layout with persistent navigation</li>
                <li>Home feed with question and answer cards</li>
                <li>Reusable UI components (cards, buttons, sections)</li>
                <li>Basic routing and page structure</li>
              </ul>
            </div>
  
            {/* Architecture */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                Frontend Architecture
              </h4>
              <p className="text-gray-400 leading-relaxed">
                The application is structured around feature-based folders.
                Each major feature owns its components, styles, and logic.
                UI elements are kept reusable and presentation-focused,
                while pages handle composition and data flow.
              </p>
            </div>
  
            {/* State Management */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                State Management
              </h4>
              <p className="text-gray-400 leading-relaxed">
                Local component state is currently managed using React hooks.
                The structure is prepared for introducing shared state
                when real data and backend integration are added, without
                prematurely adding complexity.
              </p>
            </div>
  
            {/* Design Decisions */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                Design Decisions
              </h4>
              <p className="text-gray-400 leading-relaxed">
                The UI intentionally avoids heavy graphics and animations.
                The emphasis is on readability, spacing, and predictable
                interactions, making the interface easy to scan and use.
              </p>
            </div>
  
            {/* What’s Next */}
            <div>
              <h4 className="text-lg font-medium text-white mb-2">
                What’s Next
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>User authentication and protected routes</li>
                <li>Dynamic data integration</li>
                <li>Answer interactions (upvotes, comments)</li>
                <li>Performance and accessibility improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedProject;
  