import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar />
      </div>
      {/* Content */}
      <div className="pt-24">
        <Outlet />
      </div>
      {/* Footer */}
      <div className="mt-[140px]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
