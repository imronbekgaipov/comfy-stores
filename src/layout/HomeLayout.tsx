import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Header";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-container">
        <main>1</main>
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;
