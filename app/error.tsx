'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-blush-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-plum-900 mb-4">Something went wrong!</h1>
        <p className="text-mauve-700 mb-6">Please try refreshing the page.</p>
        <button
          onClick={reset}
          className="bg-plum-900 text-white px-6 py-3 rounded-lg hover:bg-plum-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
