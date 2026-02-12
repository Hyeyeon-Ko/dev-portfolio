import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogWrite from "./pages/BlogWrite";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      {/* 공통 레이아웃 적용 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/write" element={<BlogWrite />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* 없는 주소로 들어오면 홈으로 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
