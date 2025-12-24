import { navLinks } from "@/lib/navLinks";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="relative isolate bg-gradient-to-b from-white/10 via-slate-900 to-slate-950 pb-24 pt-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 pt-28 text-center sm:pt-32">
          <span className="rounded-full border border-slate-700/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            Frosted UI, zero hassle
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Ship a glassmorphism navbar in seconds
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            Drop in the reusable <code>GlassNavbarReact</code> component,
            customize colors, and keep your layout consistent across desktop and
            mobile with a responsive drawer built in.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#docs"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Read the docs
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See features
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[92%] max-w-5xl space-y-24 py-24">
        <section
          id="overview"
          className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-2xl shadow-black/40">
            <h2 className="text-2xl font-semibold text-white">
              Effortless setup
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Import the CSS once, drop the web component anywhere, and style
              everything else with Tailwind. The navbar exposes friendly props
              so you can swap colors, blur, height, or rounded profile without
              writing custom CSS.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {navLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full bg-emerald-400"
                    aria-hidden
                  />
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950 p-8">
            <p className="text-sm uppercase text-slate-400">Install</p>
            <pre className="mt-3 w-full overflow-x-auto rounded-2xl bg-black/70 p-4 text-sm text-emerald-200 whitespace-pre-wrap break-words">
              npm install glass-aura-navbar
            </pre>
            <p className="mt-8 text-sm uppercase text-slate-400">Import</p>
            <pre className="mt-3 w-full overflow-x-auto rounded-2xl bg-black/70 p-4 text-sm text-pink-200 whitespace-pre-wrap break-words">
              {`import { GlassNavbarReact } from "glass-aura-navbar";
import "glass-aura-navbar/styles/glass-navbar.css";`}
            </pre>
          </div>
        </section>

        <section id="features">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Glassmorphism panel",
              "Responsive drawer",
              "Typed React wrapper",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200 shadow-lg shadow-black/40"
              >
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Plug-and-play configuration with props like{" "}
                  <span className="text-white">blur</span>,
                  <span className="text-white"> background</span>, and{" "}
                  <span className="text-white">position</span> so you can keep
                  focus on your product story.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-10 text-center"
        >
          <h2 className="text-3xl font-semibold text-white">Free forever</h2>
          <p className="mt-4 text-sm text-emerald-50">
            MIT-licensed and production-ready. Keep modifiers in Tailwind while
            the navbar handles the polish.
          </p>
          <a
            href="#docs"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-emerald-900 transition hover:-translate-y-0.5"
          >
            Explore the API
          </a>
        </section>

        <section
          id="docs"
          className="rounded-3xl border border-white/5 bg-white/5 p-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Docs
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-white">
            Need deeper guidance?
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Check the README for custom-element attributes, lifecycle hooks, and
            events. You can also import the vanilla web component if you are not
            on React.
          </p>
        </section>
      </main>
    </div>
  );
}
