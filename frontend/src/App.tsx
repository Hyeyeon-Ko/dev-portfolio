import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

      {/* 없는 주소로 들어오면 홈으로 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
