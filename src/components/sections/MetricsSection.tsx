import { achievements } from "@/data/achievements";
import { MetricCard } from "@/components/ui/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MetricsSection() {
  return (
    <section
      id="metrics"
      className="section-padding"
      aria-labelledby="metrics-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Track Record"
          title="Achievement Metrics"
          description="Engineering impact across enterprise systems, research, and competitive programming."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {achievements.map((achievement, index) => (
            <MetricCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
