import HomeHero from "../components/home/HomeHero";
import LiveActivity from "../components/home/LiveActivity";
import ProjectsSection from "../components/home/ProjectsSection";
import BlogSection from "../components/home/BlogSection";
import HomeCTA from "../components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LiveActivity />
      <ProjectsSection />
      <BlogSection />
      <HomeCTA />
    </>
  );
}
