'use server';

import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navigation';
import { Providers } from '@/components/providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>
            <div className="flex flex-col bg-blush-50">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
            </div>
            </ThemeProvider>
          </Providers>
        </body>
    </html>
  );
}
