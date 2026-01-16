/*
  FeaturedProject
  Purpose:
  - Showcase real, in-progress work
  - Demonstrate frontend architecture and thinking
  - Build trust through honesty
*/

import { Link } from "react-router-dom";
import { useEffect } from "react";

const FeaturedProject = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section
      className="py-24 min-h-screen"
      aria-labelledby="project-heading"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Page Heading */}
        <header>
          <h1
            id="project-heading"
            className="text-3xl font-semibold text-white"
          >
            Project Deep Dive
          </h1>

          <p className="mt-2 text-gray-400">
            A closer look at an actively developed frontend applications 
          </p>
        </header>

        {/* Project Card */}
        <div className="border border-white/10 rounded-lg p-8 space-y-8">
          {/* Project Header */}
          <div>
            <h2 className="text-2xl font-medium text-white">
              Quora-Style Q&A Platform
            </h2>
            <span className="inline-block mt-2 text-sm text-emerald-400">
              In Progress
            </span>
          </div>

          {/* Problem Statement */}
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Problem
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The goal of this project is to build a question-and-answer
              platform with a clean, readable UI and a scalable frontend
              architecture. The focus is on content clarity, navigation flow,
              and reusable components rather than visual noise.
            </p>
          </div>

          {/* Built So Far */}
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              What’s Built So Far
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Global layout with persistent navigation</li>
              <li>Home feed with question and answer cards</li>
              <li>Reusable UI components (cards, buttons, sections)</li>
              <li>Basic routing and page structure</li>
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Frontend Architecture
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The application is structured around feature-based folders.
              Each major feature owns its components, styles, and logic.
              UI elements are kept reusable and presentation-focused,
              while pages handle composition and data flow.
            </p>
          </div>

          {/* State Management */}
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              State Management
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Local component state is currently managed using React hooks.
              The structure is prepared for introducing shared state
              when real data and backend integration are added, without
              prematurely adding complexity.
            </p>
          </div>

          {/* Design Decisions */}
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Design Decisions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The UI intentionally avoids heavy graphics and animations.
              The emphasis is on readability, spacing, and predictable
              interactions, making the interface easy to scan and use.
            </p>
          </div>

          {/* Screenshots */}
          <div>
            <p className="text-sm text-gray-500 mb-3">
              UI snapshots from the current development stage
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-40 bg-white/5 rounded-lg" />
              <div className="h-40 bg-white/5 rounded-lg" />
            </div>
          </div>

          {/* What’s Next */}
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              What’s Next
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>User authentication and protected routes</li>
              <li>Dynamic data integration</li>
              <li>Answer interactions (upvotes, comments)</li>
              <li>Performance and accessibility improvements</li>
            </ul>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <Link
              to="/#projects"
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back to projects
            </Link>

            <a
              href="https://github.com/yourusername/quora-style-platform"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white underline underline-offset-4"
            >
              View GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
