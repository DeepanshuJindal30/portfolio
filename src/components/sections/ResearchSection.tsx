import { researchPapers, patents } from "@/data/research";
import { siteConfig } from "@/data/site";
import { ResearchCard } from "@/components/ui/ResearchCard";
import { PatentCard } from "@/components/ui/PatentCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

export function ResearchSection() {
  return (
    <section
      id="research"
      className="section-padding"
      aria-labelledby="research-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Publications & Innovation"
          title="Research & Patents"
          description="7 IEEE-SCOPUS published papers, Best Paper Award at CCICT'24, and 2 AI & healthcare patents."
        />

        <div className="flex flex-wrap gap-3 mb-10">
          <Button
            href={siteConfig.links.papersFolder}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            All Papers (Drive)
          </Button>
          <Button
            href={siteConfig.links.patentsOverview}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Patents Overview
          </Button>
          <Button
            href={siteConfig.links.bestPaperAward}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Best Paper CCICT&apos;24
          </Button>
        </div>

        <h3 className="text-sm font-mono uppercase tracking-widest text-indigo-400 mb-5">
          Research Publications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14">
          {researchPapers.map((paper, index) => (
            <ResearchCard key={paper.id} paper={paper} index={index} />
          ))}
        </div>

        <h3 className="text-sm font-mono uppercase tracking-widest text-amber-400 mb-5">
          Patents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {patents.map((patent, index) => (
            <PatentCard key={patent.id} patent={patent} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
