import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-heading text-6xl font-bold text-accent-gold">404</p>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-text-primary">
        Page Not Found
      </h1>
      <p className="mt-2 text-text-secondary">
        This trade route doesn&apos;t exist. Maybe the pirates got to it first.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-accent-gold px-5 py-2.5 text-sm font-semibold text-bg-primary transition-colors hover:bg-accent-gold-dim"
      >
        Back to Home
      </Link>
    </div>
  );
}
