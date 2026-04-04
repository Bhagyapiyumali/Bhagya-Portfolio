import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './providers';

export const metadata: Metadata = {
  title: 'Bhagya Senevirathna | Software Engineering Student',
  description: 'Passionate Software Engineering Student from Negombo, Sri Lanka, specializing in full-stack development and AI solutions.',
  openGraph: {
    title: 'Bhagya Senevirathna | Software Engineering Student',
    description: 'Passionate Software Engineering Student from Negombo, Sri Lanka',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhagya Senevirathna | Software Engineering Student',
    description: 'Passionate Software Engineering Student from Negombo, Sri Lanka',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
