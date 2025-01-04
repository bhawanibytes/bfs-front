import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="py-6 px-40">

        <Routes>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

      </main>
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
