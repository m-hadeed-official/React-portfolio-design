import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <hr />
        <AboutMe />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
      </main>
      <Footer />
    </>
  );
}

export default App;
