import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="mt-4 text-gray-600">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-6 text-blue-600 hover:text-blue-800">
        Go back home
      </Link>
    </div>
  );
}
