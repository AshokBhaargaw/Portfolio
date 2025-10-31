import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Footer} from './Components';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
