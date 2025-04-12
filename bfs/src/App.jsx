import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomeMobile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import HeaderFooterLayout from "./layouts/HeaderFooterLayout";
import ClearLayout from "./layouts/ClearLayout";

const App = () => {
  return (
    <Routes>
      <Route index element={<ClearLayout> <Home/> </ClearLayout>}/>
      <Route path="contact" element={<HeaderFooterLayout> <Contact/> </HeaderFooterLayout>} />
      <Route path="about" element={<HeaderFooterLayout> <About /> </HeaderFooterLayout>} />
      <Route path="/login" element={ <ClearLayout> <Login /> </ClearLayout> } />
      <Route path="register" element={<HeaderFooterLayout> <Register /> </HeaderFooterLayout>} />
      <Route path="*" element={<HeaderFooterLayout> <NotFound/> </HeaderFooterLayout>} />
    </Routes>
  );
};

export default App;
