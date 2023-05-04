import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Login from "./components/SharksLogin";
import Sharkregister from "./components/SharkRegister";
import Business from "./components/Business";
import Epregister from "./components/EpRegister";
import EpLogin from "./components/EpLogin";
import Sharks from "./components/Sharks";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sharkslogin" element={<Login />} />
        <Route path="/eplogin" element={<EpLogin />} />
        <Route path="/sharkregister" element={<Sharkregister />} />
        <Route path="/Epregister" element={<Epregister />} />
        <Route path="/sharks" element={<Sharks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
