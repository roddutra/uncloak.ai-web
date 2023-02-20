import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <div className='min-h-screen'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
