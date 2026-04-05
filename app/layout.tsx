import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from './providers';

export const metadata = {
  title: "Bhagya Senevirathna | Portfolio",
  description: "Software Engineering Student from Sri Lanka",
  openGraph: {
    title: "Bhagya Portfolio",
    description: "My personal portfolio website",
    url: "https://bhagya-portfolio-gamma.vercel.app",
    siteName: "Bhagya Portfolio",
    images: [
      {
        url: "/profile.jpeg", // or any banner image
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
