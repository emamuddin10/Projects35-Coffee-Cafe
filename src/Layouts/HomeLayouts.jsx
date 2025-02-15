import Header from "../components/Header";
import LeftAside from "../components/MainLayouts/LeftAside";
import Navbar from "../components/Navbar";


const HomeLayouts = () => {
    return (
        <div >
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
                <section className="col-span-6">Main Layout</section>
                <section className="col-span-3">Right Navbar </section>
            </main>
        </div>
    );
};

export default HomeLayouts;