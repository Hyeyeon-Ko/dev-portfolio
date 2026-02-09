import StackHero from "../components/stack/StackHero";
import ExpertiseRing from "../components/stack/ExpertiseRing";
import StackCard from "../components/stack/StackCard";
import InfrastructureGrid from "../components/stack/InfrastructureGrid";
import StackCTA from "../components/stack/StackCTA";

import { SKILL_CATEGORIES } from "../constants/stack/mockStack";

export default function Stack() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <StackHero />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ExpertiseRing />
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <StackCard key={category.title} category={category} />
          ))}
        </div>
      </div>

      <InfrastructureGrid />
      <StackCTA />
    </div>
  );
}
