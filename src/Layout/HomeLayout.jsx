import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import Footer from "../Components/Common/Footer";

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
