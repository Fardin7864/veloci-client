import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/navbar';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'veloci',
  description: 'No 1 e-commerce in Bangladesh',
};

function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags, stylesheets, etc. here */}
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </>
  );
}

export default RootLayout;
