import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Meta } from './Meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
