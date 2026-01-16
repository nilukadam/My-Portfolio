/*
  EcommerceProject
  Purpose:
  - Demonstrate real-world frontend problem solving
  - Showcase UI architecture, state handling, and UX clarity
  - Build trust through honest, in-progress work
*/

import { Link } from "react-router-dom";
import { useEffect } from "react";

const EcommerceProject = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <section
      className="py-24 min-h-screen"
      aria-labelledby="ecommerce-project-heading"
    >
      <div className="max-w-5xl mx-auto px-6 space-y-14">
        {/* Page Header */}
        <header className="space-y-3">
          <h1
            id="ecommerce-project-heading"
            className="text-3xl font-semibold text-white"
          >
            E-commerce Frontend Application
          </h1>

          <p className="text-gray-400 max-w-3xl leading-relaxed">
            A frontend-focused e-commerce project built to demonstrate
            component-driven UI architecture, predictable state management,
            and clean user interactions in a real-world product flow.
          </p>

          <span className="inline-block text-sm text-emerald-400">
            In Progress
          </span>
        </header>

        {/* Main Content */}
        <div className="border border-white/10 rounded-lg p-8 space-y-10">
          {/* Overview */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">
              Overview
            </h2>
            <p className="text-gray-400 leading-relaxed">
              This project focuses on building a reliable and readable
              e-commerce frontend experience. The primary goal is to design
              product browsing and cart interactions that feel intuitive,
              predictable, and scalable, while keeping the UI architecture
              clean and maintainable.
            </p>
          </section>

          {/* What’s Implemented */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">
              What’s Implemented
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Product listing interface with reusable product cards</li>
              <li>Cart functionality with add, remove, and quantity updates</li>
              <li>Real-time price calculation based on cart state</li>
              <li>Clear separation between UI components and page composition</li>
              <li>Responsive layout for common screen sizes</li>
            </ul>
          </section>

          {/* Frontend Architecture */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">
              Frontend Architecture
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The application follows a component-first architecture.
              Reusable UI components such as product cards, cart items,
              and action buttons are kept presentation-focused, while
              pages handle composition and state coordination.
            </p>
            <p className="text-gray-400 leading-relaxed mt-3">
              This structure keeps the codebase readable, scalable, and
              easy to extend as new features or backend integrations
              are introduced.
            </p>
          </section>

          {/* State Management */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">
              State Management Approach
            </h2>
            <p className="text-gray-400 leading-relaxed">
              State is currently managed using React hooks at the component
              and page level. The cart logic is centralized to ensure
              predictable UI updates and avoid unnecessary re-renders.
            </p>
            <p className="text-gray-400 leading-relaxed mt-3">
              The structure is intentionally kept flexible to allow future
              introduction of shared or global state when real backend
              data is added, without premature abstraction.
            </p>
          </section>

          {/* Design & UX Decisions */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">
              Design & UX Decisions
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The interface avoids heavy visual effects in favor of
              clarity and predictability. Product information, pricing,
              and actions are clearly separated, allowing users to scan
              and interact without friction.
            </p>
            <p className="text-gray-400 leading-relaxed mt-3">
              Every interaction is designed to behave consistently,
              reinforcing trust and reducing cognitive load.
            </p>
          </section>

          {/* Screenshots */}
          <section>
            <p className="text-sm text-gray-500 mb-3">
              UI snapshots from the current development stage
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-44 bg-white/5 rounded-lg" />
              <div className="h-44 bg-white/5 rounded-lg" />
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">
              Tech Stack
            </h2>
            <p className="text-gray-400">
              React · Tailwind CSS · JavaScript (ES6+)
            </p>
          </section>

          {/* What’s Next */}
          <section>
            <h2 className="text-lg font-medium text-white mb-3">
              What’s Next
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Backend-driven product data</li>
              <li>User authentication</li>
              <li>Order persistence</li>
              <li>Payment flow integration</li>
              <li>Performance and accessibility improvements</li>
            </ul>
          </section>

          {/* Footer Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <Link
              to="/#projects"
              className="text-sm text-gray-400 hover:text-white"
            >
              ← Back to projects
            </Link>

            <a 
            href="https://github.com/yourusername/ecommerce-frontend"
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

export default EcommerceProject;
