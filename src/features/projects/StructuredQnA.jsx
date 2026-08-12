import { Link } from "react-router-dom";
import { useEffect } from "react";

import homeImg from "../../assets/screenShots/qna-homepage.png";
import detailImg from "../../assets/screenShots/qna-answers.png";
import authImg from "../../assets/screenShots/qna-auth-boundary.png";
import notifyImg from "../../assets/screenShots/qna-notifications.png";
import mobileImg from "../../assets/screenShots/qna-mobile-1.png";

/*
  StructuredQnA — B2 Project Showcase Version

  Purpose:
  - Clearly communicate what the project is
  - Demonstrate frontend engineering capability
  - Present verified implementation decisions
  - Keep technical claims accurate and defensible
*/

const StructuredQnA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="py-28 bg-[#0f0f0f] text-white"
      aria-labelledby="structured-qna-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Hero Block */}
        <header className="space-y-6 max-w-4xl">
          <h1
            id="structured-qna-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
          >
            Structured Q&A Platform
          </h1>

          <p className="text-white/85 text-lg leading-relaxed">
            A React-based question-and-answer platform designed around
            structured content, predictable interactions, authentication-aware
            actions, and responsive user experiences.
          </p>

          <p className="text-white/65 leading-relaxed">
            The project focuses on frontend engineering fundamentals such as
            reusable components, clear routing boundaries, consistent state
            behavior, and production deployment stability.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://structured-qna-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-xl
                bg-white text-black
                text-sm font-medium
                transition-all duration-200
                hover:bg-white/90
                active:scale-[0.98]
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/nilukadam/structured-qna-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-xl
                border border-white/20
                text-sm
                transition-all duration-200
                hover:border-white/40
                hover:bg-white/5
                active:scale-[0.98]
              "
            >
              GitHub Repository
            </a>
          </div>

          <p className="text-white/50 text-sm pt-2">
            React · Vite · React Router · Bootstrap · Scoped CSS · Vercel
          </p>
        </header>

        {/* System Intent */}
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-xl font-semibold">
            What This Project Demonstrates
          </h2>

          <p className="text-white/70 leading-relaxed">
            This project demonstrates how a frontend application can be
            structured around predictable navigation, reusable components,
            authentication-aware interactions, and consistent UI behavior
            across different views.
          </p>
        </section>

        {/* Production Verification */}
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-xl font-semibold">
            Production Verification
          </h2>

          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Production build verified and deployed on Vercel</li>
            <li>SPA rewrite configuration validated for nested routes</li>
            <li>Hard refresh tested across route boundaries</li>
            <li>Case-sensitive file naming corrected for Linux environments</li>
            <li>No console errors observed in production</li>
          </ul>
        </section>

        {/* Core Engineering Principles */}
        <section className="space-y-8 max-w-4xl">
          <h2 className="text-xl font-semibold">
            Core Engineering Principles
          </h2>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-white font-medium mb-1">
                Predictability Over Novelty
              </h3>
              Interactions are designed to provide clear and understandable
              feedback while keeping state behavior consistent across views.
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Authentication as a Boundary
              </h3>
              Restricted actions are separated from publicly available
              interactions so the interface reflects the application's
              authentication state.
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Stable Routing
              </h3>
              SPA routing is configured with rewrite rules and nested-route
              navigation has been validated in the deployed application.
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Scope Discipline
              </h3>
              Features were intentionally kept focused so the project could
              prioritize correctness, clarity, and maintainability.
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-xl font-semibold">
            Architectural Structure
          </h2>

          <p className="text-white/70 leading-relaxed">
            The application follows a responsibility-driven structure that
            separates global layout, domain components, reusable UI elements,
            route-level pages, navigation configuration, and styling.
          </p>

          <div
            className="
              rounded-2xl
              border border-white/10
              bg-[#141414]
              p-8
              text-sm
              text-white/70
              leading-relaxed
              space-y-2
            "
          >
            <div>
              <span className="text-white font-medium">layout/</span>
              {" "}→ Global structural containers
            </div>

            <div>
              <span className="text-white font-medium">
                components/domain/
              </span>
              {" "}→ Feature-specific components
            </div>

            <div>
              <span className="text-white font-medium">
                components/ui/
              </span>
              {" "}→ Reusable UI elements
            </div>

            <div>
              <span className="text-white font-medium">pages/</span>
              {" "}→ Route-level boundaries
            </div>

            <div>
              <span className="text-white font-medium">router/</span>
              {" "}→ Navigation configuration
            </div>

            <div>
              <span className="text-white font-medium">styles/</span>
              {" "}→ Scoped styling strategy
            </div>
          </div>
        </section>

        {/* Interface Preview */}
        <section className="space-y-14">
          <h2 className="text-xl font-semibold">
            Interface Preview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

            <div className="space-y-4 md:col-span-2">
              <img
                src={homeImg}
                alt="Structured Q&A platform homepage feed"
                className="
                  rounded-xl
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              />

              <p className="text-sm text-white/60">
                Structured homepage feed optimized for clarity and scanning.
              </p>
            </div>

            <div className="space-y-4">
              <img
                src={detailImg}
                alt="Structured Q&A answers interface"
                className="
                  rounded-xl
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              />
            </div>

            <div className="space-y-4">
              <img
                src={authImg}
                alt="Structured Q&A authentication boundary interface"
                className="
                  rounded-xl
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              />
            </div>

            <div className="space-y-4">
              <img
                src={notifyImg}
                alt="Structured Q&A notifications interface"
                className="
                  rounded-xl
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              />
            </div>

          </div>

          <div className="max-w-xs mx-auto space-y-4 pt-20">
            <img
              src={mobileImg}
              alt="Structured Q&A platform mobile responsive view"
              className="
                rounded-xl
                border border-white/10
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/20
              "
            />

            <p className="text-sm text-white/60 text-center">
              Responsive layout across mobile screens.
            </p>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="
          flex flex-wrap
          items-center
          justify-between
          gap-6
          pt-16
          border-t border-white/10
          text-sm
        ">
          <Link
            to="/#projects"
            className="
              text-white/60
              hover:text-white
              transition-colors duration-200
            "
          >
            ← Back to projects
          </Link>

          <div className="flex gap-6 text-white/60">
            <a
              href="https://structured-qna-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/nilukadam/structured-qna-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StructuredQnA;