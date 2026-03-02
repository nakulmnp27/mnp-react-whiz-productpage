import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppNavbar from "./components/Navbar";
import Courses from "./pages/courses";


export default function App() {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactme" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}
