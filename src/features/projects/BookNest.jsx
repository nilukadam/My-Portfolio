import { Link } from "react-router-dom";
import { useEffect } from "react";

import homeImg from "../../assets/screenShots/booknest-home.png";
import detailsImg from "../../assets/screenShots/booknest-details.png";
import cartImg from "../../assets/screenShots/booknest-cart.png";
import ordersImg from "../../assets/screenShots/booknest-orders.png";

/*
  BookNest — Strong Secondary Case Study

  Positioning:
  - Demonstrates state architecture maturity
  - Focused on lifecycle coordination
  - Structured but slightly lighter than flagship Q&A
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

        {/* ───────────────── Hero Block ───────────────── */}
        <header className="space-y-6 max-w-4xl">
          <h1
            id="booknest-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
          >
            BookNest — Structured React E-Commerce SPA
          </h1>

          <p className="text-white/80 text-lg leading-relaxed">
            A production-deployed frontend system modeling authentication,
            cart coordination, pricing logic, and full order lifecycle management.
          </p>

          <p className="text-white/65 leading-relaxed">
            Built using domain-separated state management and modular
            logic isolation to ensure predictable state transitions
            across browsing, checkout, and confirmation flows.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://book-store-frontend-five-mauve.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white text-black text-sm font-medium transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/nilukadam/book-store-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 text-sm transition-all duration-200 hover:border-white/40 hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]"
            >
              GitHub Repository
            </a>
          </div>

          <p className="text-white/50 text-sm pt-2">
            React · React Router · Context API · Custom Hooks · Vite · Bootstrap · Vercel
          </p>
        </header>

        {/* ───────────────── System Overview ───────────────── */}
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-xl font-semibold">
            System Overview
          </h2>

          <p className="text-white/70 leading-relaxed">
            BookNest models a realistic e-commerce purchase flow.
            Authentication state, cart coordination, derived pricing calculations,
            and order confirmation logic are managed within clearly separated domains.
          </p>
        </section>

        {/* ───────────────── Core Functional Systems ───────────────── */}
        <section className="space-y-8 max-w-4xl">
          <h2 className="text-xl font-semibold">
            Core Functional Systems
          </h2>

          <div className="space-y-6 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-white font-medium mb-1">
                Authentication Layer
              </h3>
              Persistent session handling with protected route enforcement
              across checkout and order boundaries.
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Product & Browsing System
              </h3>
              Dynamic product rendering with filtering and route-parameter-driven detail views.
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Cart & Pricing Engine
              </h3>
              Centralized cart state with derived totals and synchronized UI updates.
            </div>

            <div>
              <h3 className="text-white font-medium mb-1">
                Order Lifecycle
              </h3>
              Confirmation flow with state reset and post-purchase tracking.
            </div>
          </div>
        </section>

        {/* ───────────────── State Architecture ───────────────── */}
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-xl font-semibold">
            State Architecture
          </h2>

          <p className="text-white/70 leading-relaxed">
            State responsibilities are separated by domain to prevent cross-coupling
            and ensure predictable behavior across the application.
          </p>

          <div className="
            rounded-2xl
            border border-white/10
            bg-[#141414]
            p-8
            text-sm
            text-white/70
            leading-relaxed
            space-y-2
          ">
            <div><span className="text-white font-medium">CartContext</span> → Cart state & pricing calculations</div>
            <div><span className="text-white font-medium">OrderContext</span> → Order lifecycle & confirmation state</div>
            <div><span className="text-white font-medium">useAuth</span> → Authentication persistence & validation</div>
            <div><span className="text-white font-medium">useCartSummary</span> → Derived cart totals & calculations</div>
          </div>

          <p className="text-white/70 leading-relaxed">
            Business logic remains isolated from UI components, maintaining separation
            of concerns and long-term maintainability.
          </p>
        </section>

        {/* ───────────────── Production Handling ───────────────── */}
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-xl font-semibold">
            Production Handling
          </h2>

          <ul className="list-disc list-inside space-y-2 text-white/70">
            <li>Session persistence via LocalStorage</li>
            <li>Cart state maintained across refresh</li>
            <li>SPA rewrite configuration to prevent 404 on reload</li>
            <li>Deployment verified on Vercel</li>
          </ul>
        </section>

        {/* ───────────────── Interface Preview ───────────────── */}
        <section className="space-y-14">
          <h2 className="text-xl font-semibold">
            Interface Preview
          </h2>

          <div className="space-y-16">

            <div className="space-y-4">
              <img
                src={homeImg}
                alt="BookNest Homepage"
                className="rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              />
              <p className="text-sm text-white/60">
                Product discovery interface with filtering and structured layout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">

              <div className="space-y-4">
                <img
                  src={detailsImg}
                  alt="BookNest Product Detail"
                  className="rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                />
                <p className="text-sm text-white/60">
                  Dynamic route rendering with product-specific state.
                </p>
              </div>

              <div className="space-y-4">
                <img
                  src={cartImg}
                  alt="BookNest Cart"
                  className="rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                />
                <p className="text-sm text-white/60">
                  Centralized cart management and derived pricing logic.
                </p>
              </div>

            </div>

            <div className="space-y-4">
              <img
                src={ordersImg}
                alt="BookNest Orders Page"
                className="rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              />
              <p className="text-sm text-white/60">
                Order lifecycle completion and post-checkout persistence.
              </p>
            </div>

          </div>
        </section>

        {/* ───────────────── Footer Navigation ───────────────── */}
        <div className="flex flex-wrap items-center justify-between pt-16 border-t border-white/10 text-sm">
          <Link
            to="/#projects"
            className="text-white/60 hover:text-white transition-colors duration-200"
          >
            ← Back to projects
          </Link>

          <div className="flex gap-6 text-white/60">
            <a
              href="https://book-store-frontend-five-mauve.vercel.app/"
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
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookNest;