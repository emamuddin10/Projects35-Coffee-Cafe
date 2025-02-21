import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftAside from "../components/MainLayouts/LeftAside";
import RightAside from "../components/MainLayouts/RightAside";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap3">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6 px-5"><Outlet></Outlet></section>
        <section className="col-span-3">
            <RightAside></RightAside>
        </section>
      </main>
    </div>
  );
};

export default HomeLayouts;
