import ProfileHero from "../components/profile/ProfileHero";
import KeyImpact from "../components/profile/KeyImpact";
import Experience from "../components/profile/Experience";
import EducationAwards from "../components/profile/EducationAwards";
import ProfileCTA from "../components/profile/ProfileCTA.tsx";

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <ProfileHero />
      <KeyImpact />
      <Experience />
      <EducationAwards />
      <ProfileCTA />
    </div>
  );
}
