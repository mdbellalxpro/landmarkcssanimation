
// import components

import Home from "./components/Home/Home.jsx";
import Docs from "./components/Docs/Docs.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/AboutUs/about.jsx";
import Contacts from "./components/Contact/contact.jsx";
import Privicy from "./components/Privacy Policy/privicy.jsx";
import Terms from "./components/Trems-condions/terms.jsx";
import Blog from "./components/Blog/blog.jsx";

// import states
import { BrowserRouter, Routes, Route,} from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="main-content">
          <BrowserRouter>
            <Navbar/>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/privicy" element={<Privicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
