import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Main />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
