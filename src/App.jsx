import Navbar from "./components/Navbar";
import Top from "./components/Top";
import InputField from "./components/InputField";
import Info from "./components/Info";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import { useState } from "react";
import MobileNavbar from "./components/MobileNavbar";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <>
      <header className="header">
        {windowWidth > 850 ? <Navbar /> : <MobileNavbar />}
      </header>
      <main className="main">
        <Top />
        <section className="middle">
          <InputField />
          <Info />
        </section>
        <PreFooter />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}
