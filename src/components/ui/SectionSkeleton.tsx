export function SectionSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`section-padding animate-pulse ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="max-w-7xl mx-auto">
        <div className="h-4 w-24 bg-white/5 rounded mb-4" />
        <div className="h-10 w-64 bg-white/5 rounded mb-8" />
        <div className="h-48 bg-white/[0.03] rounded-2xl border border-white/5" />
      </div>
    </div>
  );
}
