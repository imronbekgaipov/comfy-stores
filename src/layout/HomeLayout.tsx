import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="max-container">
        <Outlet />
      </main>
    </>
  );
}
export default HomeLayout;
