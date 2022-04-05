import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Modalservice from "./components/modalservices/Modalservice";
function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Modalservice />
     <Portfolio />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
