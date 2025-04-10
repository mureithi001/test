'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen bg-blush-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-plum-900 mb-4">Application Error</h1>
          <p className="text-mauve-700 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
          <button
            onClick={reset}
            className="bg-plum-900 text-white px-6 py-3 rounded-lg hover:bg-plum-800"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
