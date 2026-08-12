import { Link } from "react-router-dom";
import { useEffect } from "react";

import homeImg from "../../assets/screenShots/booknest-home.png";
import detailsImg from "../../assets/screenShots/booknest-details.png";
import cartImg from "../../assets/screenShots/booknest-cart.png";
import ordersImg from "../../assets/screenShots/booknest-orders.png";

/*
  BookNest — B2 Full-Stack MERN Project Showcase

  Portfolio positioning:
  - Full-stack MERN e-commerce application
  - Strong React frontend implementation
  - REST API integration
  - JWT authentication and role-aware authorization
  - Cart and order workflows
  - User and administrative functionality
  - Persistent MongoDB data

  Portfolio identity remains:
  Frontend Developer

  BookNest demonstrates broader full-stack capability
  without changing the primary professional positioning.
*/

const BookNest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="py-28 bg-[#0f0f0f] text-white"
      aria-labelledby="booknest-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* =====================================================
            HERO
        ====================================================== */}

        <header className="max-w-4xl space-y-7">

          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide text-white/50 uppercase">
              Full-Stack MERN Project
            </p>

            <h1
              id="booknest-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
            >
              BookNest
            </h1>

            <p className="text-xl sm:text-2xl text-white/80 leading-relaxed">
              A full-stack bookstore application connecting a React frontend
              with backend APIs, authentication, persistent data, and order
              workflows.
            </p>
          </div>

          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-3xl">
            BookNest models a realistic e-commerce workflow — from product
            discovery and authentication to cart management, checkout and
            order administration.
          </p>

          {/* Primary Links */}

          <div className="flex flex-wrap gap-4 pt-2">

            <a
              href="https://book-store-frontend-dnvp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                rounded-xl
                bg-white
                text-black
                px-6 py-3
                text-sm font-medium
                transition-all duration-200
                hover:bg-white/90
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/nilukadam/book-store-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                rounded-xl
                border border-white/20
                px-6 py-3
                text-sm font-medium
                text-white
                transition-all duration-200
                hover:border-white/40
                hover:bg-white/5
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              Frontend Repository
            </a>

          </div>

          {/* Technology Stack */}

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "JWT",
              "REST API",
              "Bootstrap",
              "Vite",
            ].map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  px-3 py-1.5
                  text-xs
                  text-white/60
                "
              >
                {technology}
              </span>
            ))}
          </div>

        </header>

        {/* =====================================================
            PROJECT OVERVIEW
        ====================================================== */}

        <section className="max-w-4xl space-y-6">

          <div className="space-y-3">
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">
              Overview
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              A frontend connected to real application layers.
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed">
            BookNest goes beyond a static storefront interface. The React
            frontend communicates with a Node.js and Express backend through
            REST APIs, while MongoDB provides persistent application data.
          </p>

          <p className="text-white/70 leading-relaxed">
            The project brings together frontend interaction, authentication,
            authorization, application data and order workflows within one
            e-commerce application.
          </p>

        </section>

        {/* =====================================================
            ARCHITECTURE
        ====================================================== */}

        <section className="space-y-8 max-w-5xl">

          <div className="space-y-3">
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">
              Architecture
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Full-stack application structure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Frontend */}

            <div
              className="
                rounded-2xl
                border border-white/10
                bg-[#141414]
                p-6
                space-y-4
              "
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Layer 01
                </p>

                <h3 className="text-lg font-semibold mt-2">
                  Frontend
                </h3>
              </div>

              <p className="text-sm text-white/65 leading-relaxed">
                React-based interface with reusable components, responsive
                layouts, application state and user-facing commerce flows.
              </p>

              <p className="text-xs text-white/40">
                React · JavaScript · Bootstrap · Vite
              </p>
            </div>

            {/* Backend */}

            <div
              className="
                rounded-2xl
                border border-white/10
                bg-[#141414]
                p-6
                space-y-4
              "
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Layer 02
                </p>

                <h3 className="text-lg font-semibold mt-2">
                  Backend
                </h3>
              </div>

              <p className="text-sm text-white/65 leading-relaxed">
                Node.js and Express provide the API layer responsible for
                application operations, authentication and order workflows.
              </p>

              <p className="text-xs text-white/40">
                Node.js · Express · REST API · JWT
              </p>
            </div>

            {/* Data */}

            <div
              className="
                rounded-2xl
                border border-white/10
                bg-[#141414]
                p-6
                space-y-4
              "
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-white/40">
                  Layer 03
                </p>

                <h3 className="text-lg font-semibold mt-2">
                  Data
                </h3>
              </div>

              <p className="text-sm text-white/65 leading-relaxed">
                MongoDB and Mongoose provide persistent data modeling and
                database operations for the application.
              </p>

              <p className="text-xs text-white/40">
                MongoDB · Mongoose
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            CORE SYSTEMS
        ====================================================== */}

        <section className="space-y-8 max-w-4xl">

          <div className="space-y-3">
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">
              Core Systems
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              What the application handles
            </h2>
          </div>

          <div className="space-y-7">

            <div>
              <h3 className="text-white font-medium mb-2">
                Authentication & Authorization
              </h3>

              <p className="text-white/65 leading-relaxed">
                JWT-based authentication with protected application flows and
                role-aware access for user and administrative functionality.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">
                Product Management
              </h3>

              <p className="text-white/65 leading-relaxed">
                Product browsing, product detail views and API-driven product
                data form the core discovery experience of the storefront.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">
                Cart & Checkout
              </h3>

              <p className="text-white/65 leading-relaxed">
                Cart state, item quantities, derived totals and checkout
                interactions are coordinated through the frontend application
                and connected to backend order processing.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">
                Order Lifecycle
              </h3>

              <p className="text-white/65 leading-relaxed">
                The application supports order creation, user order history
                and administrative order management.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">
                Admin Workflow
              </h3>

              <p className="text-white/65 leading-relaxed">
                Administrative functionality provides controlled access to
                application-level management operations.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            STATE & DATA FLOW
        ====================================================== */}

        <section className="space-y-8 max-w-4xl">

          <div className="space-y-3">
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">
              Engineering
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Frontend state meets backend data.
            </h2>
          </div>

          <p className="text-white/70 leading-relaxed">
            The frontend separates application responsibilities into focused
            state and interaction layers while communicating with the backend
            through REST APIs.
          </p>

          <div
            className="
              rounded-2xl
              border border-white/10
              bg-[#141414]
              p-6 sm:p-8
              space-y-4
              text-sm
              leading-relaxed
            "
          >
            <div>
              <span className="text-white font-medium">
                React UI
              </span>

              <span className="text-white/40 px-2">
                →
              </span>

              <span className="text-white/65">
                Application state & user interaction
              </span>
            </div>

            <div>
              <span className="text-white font-medium">
                REST API
              </span>

              <span className="text-white/40 px-2">
                →
              </span>

              <span className="text-white/65">
                Backend application operations
              </span>
            </div>

            <div>
              <span className="text-white font-medium">
                Node / Express
              </span>

              <span className="text-white/40 px-2">
                →
              </span>

              <span className="text-white/65">
                Business and request handling
              </span>
            </div>

            <div>
              <span className="text-white font-medium">
                MongoDB
              </span>

              <span className="text-white/40 px-2">
                →
              </span>

              <span className="text-white/65">
                Persistent application data
              </span>
            </div>
          </div>

        </section>

        {/* =====================================================
            INTERFACE PREVIEW
        ====================================================== */}

        <section className="space-y-14">

          <div className="space-y-3">
            <p className="text-sm font-medium text-white/40 uppercase tracking-wide">
              Interface
            </p>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Product experience
            </h2>
          </div>

          <div className="space-y-16">

            {/* Homepage */}

            <div className="space-y-4">
              <img
                src={homeImg}
                alt="BookNest e-commerce homepage and product browsing interface"
                className="
                  rounded-xl
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              />

              <div>
                <h3 className="font-medium">
                  Storefront & Product Discovery
                </h3>

                <p className="text-sm text-white/55 mt-1">
                  Product browsing experience designed around clear discovery
                  and structured storefront navigation.
                </p>
              </div>
            </div>

            {/* Product + Cart */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              <div className="space-y-4">
                <img
                  src={detailsImg}
                  alt="BookNest product details interface"
                  className="
                    rounded-xl
                    border border-white/10
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                  "
                />

                <div>
                  <h3 className="font-medium">
                    Product Details
                  </h3>

                  <p className="text-sm text-white/55 mt-1">
                    Detailed product presentation connected to application
                    data.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <img
                  src={cartImg}
                  alt="BookNest shopping cart and checkout interface"
                  className="
                    rounded-xl
                    border border-white/10
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                  "
                />

                <div>
                  <h3 className="font-medium">
                    Cart & Checkout
                  </h3>

                  <p className="text-sm text-white/55 mt-1">
                    Cart coordination and checkout workflow within the
                    e-commerce application.
                  </p>
                </div>
              </div>

            </div>

            {/* Orders */}

            <div className="space-y-4">
              <img
                src={ordersImg}
                alt="BookNest user order history interface"
                className="
                  rounded-xl
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              />

              <div>
                <h3 className="font-medium">
                  Order Management
                </h3>

                <p className="text-sm text-white/55 mt-1">
                  User-facing order history and lifecycle representation after
                  checkout.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            TAKEAWAY
        ====================================================== */}

        <section
          className="
            max-w-4xl
            rounded-2xl
            border border-white/10
            bg-[#141414]
            p-8 sm:p-10
            space-y-4
          "
        >
          <p className="text-sm font-medium text-white/40 uppercase tracking-wide">
            What this project demonstrates
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Building beyond the interface.
          </h2>

          <p className="text-white/65 leading-relaxed">
            BookNest demonstrates the ability to work across a broader web
            application workflow — from React-based interface development to
            API integration, authentication, persistent data and order
            management.
          </p>
        </section>

        {/* =====================================================
            FOOTER NAVIGATION
        ====================================================== */}

        <div
          className="
            flex flex-wrap
            items-center
            justify-between
            gap-6
            pt-16
            border-t border-white/10
            text-sm
          "
        >
          <Link
            to="/#projects"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            ← Back to projects
          </Link>

          <div className="flex gap-6 text-white/60">

            <a
              href="https://book-store-frontend-dnvp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/nilukadam/book-store-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Frontend Repository
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BookNest;