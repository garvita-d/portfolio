import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Garvita Dalmia — Frontend Developer',
  description:
    'Frontend Developer specializing in scalable, high-performance web applications using React, Next.js, and TypeScript.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Garvita Dalmia' }],
  openGraph: {
    title: 'Garvita Dalmia — Frontend Developer',
    description:
      'Frontend Developer specializing in scalable, high-performance web applications.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garvita Dalmia — Frontend Developer',
    description: 'Frontend Developer • React • Next.js • TypeScript',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
