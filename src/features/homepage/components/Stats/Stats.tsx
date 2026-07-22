import { Section } from "@/components/ui";
import { homeStats } from "@/data/home";

import { StatsCard } from "./StatsCard";

export function Stats() {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((stat) => (
          <StatsCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </Section>
  );
}
