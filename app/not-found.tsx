import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="mx-auto max-w-xl text-center">
        <div className="mb-6 text-7xl font-black tracking-tight text-blue-900 sm:text-8xl">
          404
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Page not found
        </p>

        <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          This page has gone missing.
        </h1>

        <p className="mb-8 text-base leading-7 text-slate-600">
          The page you were looking for may have been removed, renamed, or never
          existed in the first place.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Return home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
}
