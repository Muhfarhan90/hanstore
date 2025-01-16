import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* Footer */}
      <div className="mt-[140px]">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
