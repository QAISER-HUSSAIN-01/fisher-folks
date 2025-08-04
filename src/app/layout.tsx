import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToasterProvider } from '@/components/ui/Toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pakistan Fisherfolk Forum (PFF) - Empowering Fisherfolk Communities',
  description: 'Pakistan Fisherfolk Forum (PFF) advocates for the social, economic, cultural, and political rights of fisherfolk and peasants. Join us in creating a more inclusive and equitable society.',
  keywords: 'fisherfolk, Pakistan, advocacy, community development, climate justice, human rights',
  authors: [{ name: 'Pakistan Fisherfolk Forum' }],
  openGraph: {
    title: 'Pakistan Fisherfolk Forum (PFF)',
    description: 'Empowering fisherfolk and peasants through advocacy and community development',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider>
          {children}
        </ToasterProvider>
      </body>
    </html>
  );
}
