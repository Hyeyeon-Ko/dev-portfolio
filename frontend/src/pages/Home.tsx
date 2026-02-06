import Hero from "../components/Hero";
import LiveActivity from "../components/LiveActivity";
import ProjectsSection from "../components/ProjectsSection";
import BlogSection from "../components/BlogSection";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveActivity />
      <ProjectsSection />
      <BlogSection />
      <ContactCTA />
    </>
  );
}
