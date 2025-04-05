import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-center space-y-8">
        <h1 className="text-8xl font-light tracking-tighter text-white">404</h1>
        <div className="space-y-3">
          <h2 className="text-2xl font-light tracking-wide text-white/90">
            Page Not Found
          </h2>
          <p className="text-white/60 text-sm tracking-wide">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-light tracking-wide text-white border border-white/20 rounded-none transition-all hover:bg-white hover:text-black"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
