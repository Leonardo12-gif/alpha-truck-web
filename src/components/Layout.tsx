
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[76px]">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton phoneNumber="5511956083079" />
    </>
  );
};

export default Layout;
