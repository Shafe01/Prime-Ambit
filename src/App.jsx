import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AI from "./pages/services/AI";
import Blockchain from "./pages/services/Blockchain";
import Marketing from "./pages/services/Marketing";
import Web3Marketing from "./pages/services/Web3Marketing";
import Software from "./pages/services/software";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/ai-development" element={<AI />} />
        <Route path="/services/web3-development" element={<Blockchain />} />
        <Route path="/services/marketing-branding" element={<Marketing />} />
        <Route path="/services/web3-marketing" element={<Web3Marketing />} />
        <Route path="/services/software-development" element={<Software />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
