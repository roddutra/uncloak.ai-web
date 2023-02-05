'use client';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import '../styles/globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
