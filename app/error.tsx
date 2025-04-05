'use client';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">500</h1>
      <h2 className="text-2xl mt-4">Something went wrong</h2>
      <p className="mt-4 text-gray-600">Please try refreshing the page.</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
