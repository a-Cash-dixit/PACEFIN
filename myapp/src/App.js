import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { intro } from "./BioData";
import { resume } from "./BioData";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/about" element={<AboutMe intro={intro} resume={resume} />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
